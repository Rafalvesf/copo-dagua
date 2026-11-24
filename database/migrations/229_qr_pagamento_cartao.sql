-- ============================================================
-- 229 — Pagar com QR no balcão (pedido de pagamento do parceiro)
-- ============================================================
-- Decisões do utilizador (2026-11-23):
--   • Sem saldo guardado (nada de moeda eletrónica).
--   • "para cobrar o parceiro vai ao código qr e clica em cobrar, abre uma
--     página com um teclado de números para inserir o valor, depois aparece
--     um código qr que o user faz scan e abre um popup a perguntar o método
--     de pagamento (ou pelo cartão na app, apple ou google pay)".
--   • "se for comprar uma bebida ou outra coisa já no restaurante cobramos
--     apenas ao parceiro": quem paga paga o valor exato; a comissão (a % dos
--     bilhetes, sem o valor fixo) sai do que o parceiro recebe.
--
--   pay_requests  o pedido que o parceiro mostra em QR: uso único, expira
--                 em 10 min; no servidor só fica o hash do código. Pago com
--                 um PaymentIntent normal (a pessoa está presente: 3DS,
--                 Apple Pay e Google Pay como no resto da app), por Stripe
--                 Connect para o parceiro. Quem pede e quem paga veem-no.
--
-- Corre DEPOIS da 228.

begin;

create table if not exists public.pay_requests (
  id uuid primary key default gen_random_uuid(),
  token_hash text not null unique,
  merchant_id uuid not null references public.partner_profiles(id) on delete cascade,
  merchant_name text not null,
  destination_account text not null,
  amount_cents int not null check (amount_cents between 50 and 100000),
  description text check (length(description) <= 80),
  fee_pct numeric(5,2) not null,
  status text not null default 'open' check (status in ('open', 'paid', 'cancelled', 'expired')),
  payer_id uuid references public.profiles(id) on delete set null,
  payment_intent_id text unique,
  stripe_fee_cents int,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '10 minutes',
  paid_at timestamptz
);
create index if not exists pay_requests_merchant_idx on public.pay_requests (merchant_id, created_at desc);
create index if not exists pay_requests_payer_idx on public.pay_requests (payer_id, created_at desc);
alter table public.pay_requests enable row level security;
revoke all on table public.pay_requests from public, anon, authenticated;
grant select on table public.pay_requests to authenticated;
drop policy if exists "Merchant or payer reads" on public.pay_requests;
create policy "Merchant or payer reads" on public.pay_requests for select to authenticated
  using (merchant_id = (select auth.uid()) or payer_id = (select auth.uid()));

-- O parceiro escreve o valor: novo pedido (devolve o código UMA vez).
create or replace function public.create_pay_request(p_amount_cents int, p_description text default null)
returns jsonb
language plpgsql volatile security definer set search_path = public, extensions, pg_temp as $$
declare
  v_me uuid := auth.uid();
  v_partner record;
  v_pct numeric;
  v_code text := '';
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v_id uuid;
  v_exp timestamptz;
begin
  if v_me is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_amount_cents is null or p_amount_cents < 50 or p_amount_cents > 100000 then
    return jsonb_build_object('result', 'invalid_amount');
  end if;
  select id, business_name, stripe_account_id, stripe_charges_enabled into v_partner
  from public.partner_profiles where id = v_me;
  if v_partner.id is null then
    return jsonb_build_object('result', 'not_partner');
  end if;
  if v_partner.stripe_account_id is null or not v_partner.stripe_charges_enabled then
    return jsonb_build_object('result', 'not_onboarded');
  end if;
  for i in 1..16 loop
    v_code := v_code || substr(alphabet, 1 + (get_byte(gen_random_bytes(1), 0) % length(alphabet)), 1);
  end loop;
  select ticket_fee_percentage into v_pct from public.platform_settings where id = 1;
  insert into public.pay_requests (token_hash, merchant_id, merchant_name, destination_account, amount_cents, description, fee_pct)
  values (encode(digest(v_code, 'sha256'), 'hex'), v_me, coalesce(nullif(trim(v_partner.business_name), ''), 'Parceiro'),
          v_partner.stripe_account_id, p_amount_cents, nullif(left(trim(coalesce(p_description, '')), 80), ''), coalesce(v_pct, 4))
  returning id, expires_at into v_id, v_exp;
  return jsonb_build_object('result', 'ok', 'id', v_id, 'code', v_code, 'expires_at', v_exp);
end;
$$;
revoke execute on function public.create_pay_request(int, text) from public, anon;
grant execute on function public.create_pay_request(int, text) to authenticated;

create or replace function public.cancel_pay_request(p_id uuid)
returns void language sql volatile security definer set search_path = public, pg_temp as $$
  update public.pay_requests set status = 'cancelled'
  where id = p_id and merchant_id = auth.uid() and status = 'open';
$$;
revoke execute on function public.cancel_pay_request(uuid) from public, anon;
grant execute on function public.cancel_pay_request(uuid) to authenticated;

-- Quem leu o QR vê o que vai pagar (ainda não fica associado).
create or replace function public.pay_request_info(p_code text)
returns jsonb
language plpgsql stable security definer set search_path = public, extensions, pg_temp as $$
declare
  v public.pay_requests%rowtype;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v from public.pay_requests where token_hash = encode(digest(upper(trim(coalesce(p_code, ''))), 'sha256'), 'hex');
  if not found then
    return jsonb_build_object('result', 'not_found');
  end if;
  if v.merchant_id = auth.uid() then
    return jsonb_build_object('result', 'own_request');
  end if;
  if v.status = 'paid' then
    return jsonb_build_object('result', case when v.payer_id = auth.uid() then 'paid' else 'used' end);
  end if;
  if v.status <> 'open' or v.expires_at <= now() then
    return jsonb_build_object('result', 'expired');
  end if;
  if v.payer_id is not null and v.payer_id <> auth.uid() then
    return jsonb_build_object('result', 'used');
  end if;
  return jsonb_build_object('result', 'ok', 'id', v.id, 'merchant', v.merchant_name,
                            'amount_cents', v.amount_cents, 'description', v.description);
end;
$$;
revoke execute on function public.pay_request_info(text) from public, anon;
grant execute on function public.pay_request_info(text) to authenticated;

-- «Entrada» do parceiro: marcações de hoje (chegadas) e o cobrado hoje.
create or replace function public.partner_today()
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'bookings', coalesce((
      select jsonb_agg(jsonb_build_object(
        'booking_id', b.id, 'event', public.event_label(b.wedding_id),
        'booking_number', b.booking_number, 'people', b.people,
        'arrived', (select count(*) from public.booking_arrivals a where a.booking_id = b.id)) order by b.created_at)
      from public.bookings b
      where b.partner_id = (select auth.uid()) and b.status in ('confirmed', 'completed') and b.event_date = current_date), '[]'::jsonb),
    'charged_cents', (select coalesce(sum(amount_cents), 0) from public.pay_requests
                      where merchant_id = (select auth.uid()) and status = 'paid' and paid_at >= current_date),
    'charged_count', (select count(*) from public.pay_requests
                      where merchant_id = (select auth.uid()) and status = 'paid' and paid_at >= current_date)
  );
$$;
revoke execute on function public.partner_today() from public, anon;
grant execute on function public.partner_today() to authenticated;

-- O QR do parceiro passa a «Pago» logo (Realtime; RLS por pessoa).
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
     and not exists (select 1 from pg_publication_tables
                     where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'pay_requests') then
    alter publication supabase_realtime add table public.pay_requests;
  end if;
end $$;

commit;
