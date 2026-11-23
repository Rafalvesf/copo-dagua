-- ============================================================
-- 229 — QR de pagamento no evento (cartão guardado, sem saldo)
-- ============================================================
-- Decisões do utilizador (2026-11-23):
--   • "Opção 1, SEM saldo guardado": nada de carteira nem carregamentos
--     (evita moeda eletrónica / licença do Banco de Portugal). O QR só
--     identifica quem paga; o servidor cobra NA HORA o cartão guardado na
--     Stripe dessa pessoa (SetupIntent para guardar, PaymentIntent
--     off_session para cobrar), por Stripe Connect para quem cobra.
--   • Quem cobra: parceiros com reserva confirmada nesse evento e os
--     organizadores (permissão «bilhetes»; o dinheiro vai para a conta
--     Stripe do dono do evento).
--   • Limites: 50 € por cobrança, 300 € por pessoa e evento; acima de 25 €
--     quem paga confirma na app antes de cobrar.
--   • Comissão: "Cobramos apenas ao Parceiro" — quem paga paga o valor
--     anunciado; a comissão sai do que quem cobra recebe (application fee,
--     a % dos bilhetes, sem o valor fixo por transação).
--
--   • O QR é o da conta (migração 228, "apenas um qr code para todos os
--     eventos"): quem cobra lê-o (scan_qr) e cada leitura permite UMA
--     cobrança (qr_scans.charged_at), durante 10 minutos.
--
--   payer_cards     o cartão guardado (customer + payment method). Cada um
--                   lê só o seu; escrita só pela Edge Function event-pay.
--   event_payments  os movimentos. Quem paga e quem cobra veem os seus.
--
-- Corre DEPOIS da 228.

begin;

-- ---------- Cartão guardado ----------
create table if not exists public.payer_cards (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  stripe_customer_id text not null,
  payment_method_id text,
  brand text,
  last4 text,
  exp_month int,
  exp_year int,
  updated_at timestamptz not null default now()
);
alter table public.payer_cards enable row level security;
revoke all on table public.payer_cards from public, anon, authenticated;
grant select on table public.payer_cards to authenticated;
drop policy if exists "Own card" on public.payer_cards;
create policy "Own card" on public.payer_cards for select to authenticated
  using (user_id = (select auth.uid()));

-- ---------- Movimentos ----------
create table if not exists public.event_payments (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid references public.events(id) on delete set null,
  payer_id uuid references public.profiles(id) on delete set null,
  merchant_kind text not null check (merchant_kind in ('partner', 'organizer')),
  merchant_id uuid not null,
  merchant_name text not null,
  charged_by uuid references public.profiles(id) on delete set null,
  amount_cents int not null check (amount_cents between 50 and 5000),
  fee_pct numeric(5,2) not null,
  stripe_fee_cents int,
  description text check (length(description) <= 80),
  status text not null check (status in ('awaiting_payer', 'requires_action', 'processing', 'succeeded', 'failed', 'cancelled', 'refunded')),
  failure text,
  destination_account text not null,
  payment_intent_id text unique,
  idempotency_key text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists event_payments_payer_idx on public.event_payments (payer_id, wedding_id, created_at desc);
create index if not exists event_payments_merchant_idx on public.event_payments (merchant_id, created_at desc);
alter table public.event_payments enable row level security;
revoke all on table public.event_payments from public, anon, authenticated;
grant select on table public.event_payments to authenticated;
drop policy if exists "Payer or merchant reads" on public.event_payments;
create policy "Payer or merchant reads" on public.event_payments for select to authenticated
  using (
    payer_id = (select auth.uid())
    or charged_by = (select auth.uid())
    or (merchant_kind = 'partner' and merchant_id = (select auth.uid()))
    or (merchant_kind = 'organizer' and wedding_id is not null and public.wedding_can(wedding_id, 'bilhetes'))
  );

-- ---------- Quem paga: estado do evento ----------
-- Há alguém que possa cobrar neste evento (parceiro com reserva e Stripe,
-- ou o dono com Stripe)? Sem isso a app não mostra o QR de pagamento.
create or replace function public.event_pay_enabled(p_wedding uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select exists (
    select 1 from public.bookings b join public.partner_profiles pp on pp.id = b.partner_id
    where b.wedding_id = p_wedding and b.status in ('confirmed', 'completed')
      and pp.stripe_account_id is not null and pp.stripe_charges_enabled
  ) or exists (
    select 1 from public.events e join public.profiles p on p.id = e.owner_id
    where e.id = p_wedding and p.stripe_account_id is not null and p.stripe_charges_enabled
  );
$$;
revoke all on function public.event_pay_enabled(uuid) from public, anon, authenticated;

create or replace function public.my_event_pay(p_wedding uuid)
returns jsonb
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.attends_event(v_uid, p_wedding) then
    return jsonb_build_object('enabled', false);
  end if;
  return jsonb_build_object(
    'enabled', public.event_pay_enabled(p_wedding),
    'card', (select jsonb_build_object('brand', c.brand, 'last4', c.last4, 'exp_month', c.exp_month, 'exp_year', c.exp_year)
             from public.payer_cards c where c.user_id = v_uid and c.payment_method_id is not null),
    'spent_cents', (select coalesce(sum(amount_cents), 0) from public.event_payments
                    where payer_id = v_uid and wedding_id = p_wedding and status = 'succeeded'),
    'payments', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', p.id, 'merchant', p.merchant_name, 'description', p.description,
        'amount_cents', p.amount_cents, 'status', p.status, 'created_at', p.created_at) order by p.created_at desc)
      from (select * from public.event_payments
            where payer_id = v_uid and wedding_id = p_wedding
            order by created_at desc limit 50) p), '[]'::jsonb)
  );
end;
$$;
revoke execute on function public.my_event_pay(uuid) from public, anon;
grant execute on function public.my_event_pay(uuid) to authenticated;

-- ---------- Quem cobra (só a Edge Function event-pay, com service_role) ----------
-- A partir de uma leitura do QR da conta (228): gasta a leitura e cria o
-- movimento, tudo numa transação. A cobrança na Stripe vem a seguir, na
-- Edge Function, com a idempotency_key do movimento.
create or replace function public.charge_from_scan(p_scan uuid, p_merchant_user uuid, p_wedding uuid, p_amount_cents int, p_description text)
returns jsonb
language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v_scan public.qr_scans%rowtype;
  v_kind text;
  v_merchant uuid;
  v_name text;
  v_account text;
  v_pct numeric;
  v_spent int;
  v_status text;
  v_id uuid;
  v_card public.payer_cards%rowtype;
begin
  if p_merchant_user is null or p_amount_cents is null or p_amount_cents < 50 then
    return jsonb_build_object('result', 'invalid_amount');
  end if;
  if p_amount_cents > 5000 then
    return jsonb_build_object('result', 'over_charge_limit');
  end if;
  select * into v_scan from public.qr_scans
  where id = p_scan and scanner_id = p_merchant_user and expires_at > now()
  for update;
  if not found then
    return jsonb_build_object('result', 'expired');
  end if;
  if v_scan.charged_at is not null then
    return jsonb_build_object('result', 'already_charged');
  end if;
  if not public.attends_event(v_scan.user_id, p_wedding) then
    return jsonb_build_object('result', 'not_found');
  end if;

  -- Quem cobra: parceiro com reserva confirmada (primeiro) ou organizador.
  select 'partner', pp.id, coalesce(nullif(trim(pp.business_name), ''), 'Parceiro'), pp.stripe_account_id
    into v_kind, v_merchant, v_name, v_account
  from public.bookings b join public.partner_profiles pp on pp.id = b.partner_id
  where b.wedding_id = p_wedding and b.partner_id = p_merchant_user
    and b.status in ('confirmed', 'completed') and pp.stripe_charges_enabled
  limit 1;
  if v_kind is null then
    select 'organizer', e.owner_id, public.event_label(e.id), p.stripe_account_id
      into v_kind, v_merchant, v_name, v_account
    from public.events e join public.profiles p on p.id = e.owner_id
    where e.id = p_wedding and p.stripe_charges_enabled
      and (e.owner_id = p_merchant_user or exists (
        select 1 from public.wedding_collaborators wc
        where wc.wedding_id = e.id and wc.user_id = p_merchant_user and wc.status = 'active'
          and coalesce(wc.permissions ->> 'bilhetes', 'true') <> 'false'));
  end if;
  if v_kind is null or v_account is null then
    return jsonb_build_object('result', 'not_merchant');
  end if;

  select coalesce(sum(amount_cents), 0) into v_spent from public.event_payments
  where payer_id = v_scan.user_id and wedding_id = p_wedding
    and status in ('awaiting_payer', 'requires_action', 'processing', 'succeeded');
  if v_spent + p_amount_cents > 30000 then
    return jsonb_build_object('result', 'over_event_limit');
  end if;

  select * into v_card from public.payer_cards where user_id = v_scan.user_id;
  if v_card.payment_method_id is null then
    return jsonb_build_object('result', 'no_card');
  end if;

  select ticket_fee_percentage into v_pct from public.platform_settings where id = 1;
  v_status := case when p_amount_cents > 2500 then 'awaiting_payer' else 'processing' end;
  update public.qr_scans set charged_at = now() where id = v_scan.id;
  v_id := gen_random_uuid();
  insert into public.event_payments (id, wedding_id, payer_id, merchant_kind, merchant_id, merchant_name, charged_by,
                                     amount_cents, fee_pct, description, status, destination_account, idempotency_key)
  values (v_id, p_wedding, v_scan.user_id, v_kind, v_merchant, v_name, p_merchant_user,
          p_amount_cents, coalesce(v_pct, 4), nullif(left(trim(coalesce(p_description, '')), 80), ''), v_status, v_account,
          'event-pay-' || v_id);

  return jsonb_build_object(
    'result', 'ok', 'payment_id', v_id, 'status', v_status,
    'payer_id', v_scan.user_id, 'customer', v_card.stripe_customer_id, 'payment_method', v_card.payment_method_id,
    'destination', v_account, 'fee_pct', coalesce(v_pct, 4), 'merchant_name', v_name,
    'payer_name', (select coalesce(nullif(trim(full_name), ''), 'Convidado') from public.profiles where id = v_scan.user_id)
  );
end;
$$;
revoke all on function public.charge_from_scan(uuid, uuid, uuid, int, text) from public, anon, authenticated;
grant execute on function public.charge_from_scan(uuid, uuid, uuid, int, text) to service_role;

-- Os movimentos mudam logo no ecrã de quem paga (Realtime; RLS por pessoa).
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
     and not exists (select 1 from pg_publication_tables
                     where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'event_payments') then
    alter publication supabase_realtime add table public.event_payments;
  end if;
end $$;

commit;
