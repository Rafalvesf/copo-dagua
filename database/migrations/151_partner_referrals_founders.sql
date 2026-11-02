-- ============================================================
-- 151 — Convite de clientes pelo parceiro (0%) e Parceiros Fundadores
-- ============================================================
-- Pedido do utilizador (2026-11-02, "sim aplica"):
--   1. Clientes que o parceiro traz para a app pelo link próprio
--      (/p/CODIGO): A CADA 5 clientes, o 5.º fica sem comissão do parceiro
--      (5.º, 10.º, 15.º…); os outros pagam a comissão normal
--      ("a comissão só fica gratuita no quinto convidado e depois volta ao
--      normal" — a cada 5).
--   2. Primeiros 100 parceiros publicados: selo "Parceiro Fundador" e
--      3 meses sem comissão (em vez dos meses normais).
--   3. Primeiros 50 fundadores: destaque grátis 6 meses.
-- Tudo editável em platform_settings. Corre DEPOIS da 150.
--
-- Regras anti-abuso:
--   • o convite só é válido se o cliente abrir o link ANTES de qualquer
--     pedido de orçamento ou reserva com esse parceiro (quem chegou pela
--     app não passa a contar por receber o link depois);
--   • um cliente só CONTA para os 5 quando paga a primeira reserva com
--     esse parceiro, e a reserva tem de valer pelo menos
--     `referral_min_booking` (500 €). Contas falsas sem pagamentos reais
--     não contam (opção C, 2026-11-02).
--   • a isenção do 5.º aplica-se a todos os pagamentos dessa reserva e das
--     seguintes com esse parceiro; o sinal que o fez contar é acertado na
--     libertação do dinheiro (`release-partner-funds`).

begin;

-- ---------- Definições ----------
alter table public.platform_settings
  add column if not exists founder_slots integer not null default 100 check (founder_slots between 0 and 10000),
  add column if not exists founder_free_months integer not null default 3 check (founder_free_months between 0 and 36),
  add column if not exists founder_featured_slots integer not null default 50 check (founder_featured_slots between 0 and 10000),
  add column if not exists founder_featured_months integer not null default 6 check (founder_featured_months between 0 and 36),
  add column if not exists referral_zero_fee boolean not null default true,
  add column if not exists referral_free_every integer not null default 5 check (referral_free_every between 1 and 100),
  add column if not exists referral_min_booking numeric(10,2) not null default 500 check (referral_min_booking >= 0);

-- ---------- Parceiro: código de convite, n.º de fundador, destaque até ----------
alter table public.partner_profiles
  add column if not exists referral_code text,
  add column if not exists founder_number integer,
  add column if not exists featured_until timestamptz;
create unique index if not exists partner_profiles_referral_code_idx on public.partner_profiles (upper(referral_code)) where referral_code is not null;
create unique index if not exists partner_profiles_founder_number_idx on public.partner_profiles (founder_number) where founder_number is not null;

-- Código curto, sem letras ambíguas (0/O, 1/I/L).
create or replace function public.gen_partner_referral_code()
returns text language plpgsql volatile set search_path = public, pg_temp as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  c text;
begin
  loop
    c := '';
    for i in 1..6 loop
      c := c || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from public.partner_profiles where upper(referral_code) = c);
  end loop;
  return c;
end;
$$;

update public.partner_profiles set referral_code = public.gen_partner_referral_code() where referral_code is null;

-- Ao criar / publicar: código, n.º de fundador e destaque grátis.
create or replace function public.partner_founder_and_code()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  s record;
  n integer;
begin
  if tg_op = 'UPDATE' then
    -- Só a À Nossa! mexe nestes campos (o parceiro edita o próprio perfil).
    if coalesce(auth.role(), '') in ('authenticated', 'anon') and not public.is_admin() then
      new.referral_code := old.referral_code;
      new.founder_number := old.founder_number;
      new.featured_until := old.featured_until;
    end if;
  end if;
  if new.referral_code is null then
    new.referral_code := public.gen_partner_referral_code();
  end if;
  if new.status = 'published' and new.founder_number is null
     and (tg_op = 'INSERT' or old.status is distinct from 'published') then
    select * into s from public.platform_settings where id = 1;
    perform pg_advisory_xact_lock(hashtext('partner_founder_number'));
    select coalesce(max(founder_number), 0) + 1 into n from public.partner_profiles;
    if n <= coalesce(s.founder_slots, 0) then
      new.founder_number := n;
      if n <= coalesce(s.founder_featured_slots, 0) and coalesce(s.founder_featured_months, 0) > 0 then
        new.featured_until := now() + make_interval(months => s.founder_featured_months);
        -- Entra no carrossel "Em destaque" (usa `featured`, migração 106).
        new.featured := true;
      end if;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists partner_founder_and_code on public.partner_profiles;
create trigger partner_founder_and_code before insert or update on public.partner_profiles
  for each row execute function public.partner_founder_and_code();

-- Parceiros já publicados entram como fundadores pela ordem de criação.
-- (Contas de teste também: limpar no SQL Editor se for preciso —
--  update partner_profiles set founder_number = null, featured_until = null where id = '…';)
do $$
declare
  s record;
  r record;
  n integer;
begin
  select * into s from public.platform_settings where id = 1;
  select coalesce(max(founder_number), 0) into n from public.partner_profiles;
  for r in select id from public.partner_profiles
           where status = 'published' and founder_number is null order by created_at loop
    n := n + 1;
    exit when n > s.founder_slots;
    update public.partner_profiles
    set founder_number = n,
        featured_until = case when n <= s.founder_featured_slots and s.founder_featured_months > 0
                              then now() + make_interval(months => s.founder_featured_months) end,
        featured = featured or (n <= s.founder_featured_slots and s.founder_featured_months > 0)
    where id = r.id;
  end loop;
end $$;

-- Fim do destaque grátis: tira do carrossel (todos os dias às 04:00).
create or replace function public.expire_founder_featured()
returns void language sql security definer set search_path = public, pg_temp as $$
  update public.partner_profiles
  set featured = false, featured_until = null
  where featured_until is not null and featured_until <= now();
$$;
revoke all on function public.expire_founder_featured() from public, anon, authenticated;

select cron.unschedule('expire-founder-featured') where exists (select 1 from cron.job where jobname = 'expire-founder-featured');
select cron.schedule('expire-founder-featured', '0 4 * * *', $$select public.expire_founder_featured();$$);

-- ---------- Clientes trazidos pelo parceiro ----------
create table if not exists public.partner_referrals (
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  valid boolean not null,
  -- Posição entre os clientes que CONTAM (pagaram a 1.ª reserva com este
  -- parceiro, ≥ referral_min_booking): 1, 2, 3… Null até lá.
  -- Sem comissão quando seq % referral_free_every = 0.
  seq integer,
  counted_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (partner_id, profile_id)
);
create index if not exists partner_referrals_profile_idx on public.partner_referrals (profile_id);

alter table public.partner_referrals enable row level security;
drop policy if exists "Partner or client reads referrals" on public.partner_referrals;
create policy "Partner or client reads referrals" on public.partner_referrals for select to authenticated
  using (partner_id = (select auth.uid()) or profile_id = (select auth.uid()) or public.is_admin());
-- Escrita só pela função abaixo.

-- Abrir o link /p/CODIGO (com sessão iniciada). Devolve o parceiro e se
-- o convite é válido. A posição (seq) só é dada no 1.º pagamento.
drop function if exists public.claim_partner_referral(text);
drop function if exists public.my_partner_referral_stats();
create or replace function public.claim_partner_referral(p_code text)
returns table (partner_id uuid, business_name text, valid boolean)
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_partner uuid;
  v_name text;
  v_valid boolean;
  v_min numeric;
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select p.id, p.business_name into v_partner, v_name
  from public.partner_profiles p
  where upper(p.referral_code) = upper(trim(p_code)) and p.status = 'published';
  if v_partner is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_partner = v_uid then
    raise exception 'own_code' using errcode = 'P0001';
  end if;

  -- Já registado: devolve o que estava (não muda depois de existir).
  select r.valid into v_valid from public.partner_referrals r
  where r.partner_id = v_partner and r.profile_id = v_uid;
  if v_valid is null then
    v_valid := not exists (select 1 from public.quote_requests q where q.partner_id = v_partner and q.couple_id = v_uid)
           and not exists (select 1 from public.bookings b where b.partner_id = v_partner and b.couple_id = v_uid);
    insert into public.partner_referrals (partner_id, profile_id, valid) values (v_partner, v_uid, v_valid)
    on conflict on constraint partner_referrals_pkey do nothing;
    if v_valid then
      select coalesce(referral_min_booking, 0) into v_min from public.platform_settings where id = 1;
      insert into public.notifications (profile_id, type, title, body, link)
      values (v_partner, 'partner_referral', 'Novo cliente pelo teu convite',
              coalesce((select full_name from public.profiles where id = v_uid), 'Um cliente') ||
              ' entrou na À Nossa! pelo teu link. Conta para o teu próximo cliente sem comissão quando pagar a '
              || 'primeira reserva contigo' || case when v_min > 0 then ' (mín. ' || to_char(v_min, 'FM999G990') || ' €)' else '' end || '.',
              '/partner-home');
    end if;
  end if;

  return query select v_partner, v_name, v_valid;
end;
$$;
revoke execute on function public.claim_partner_referral(text) from public, anon;
grant execute on function public.claim_partner_referral(text) to authenticated;

-- 1.º pagamento pago de uma reserva (≥ mínimo) com o parceiro que trouxe o
-- cliente: o cliente passa a contar e recebe a posição.
create or replace function public.count_partner_referral()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_b record;
  v_ref record;
  v_min numeric;
  v_every integer;
  v_seq integer;
begin
  if new.status <> 'paid' or old.status = 'paid' then
    return new;
  end if;
  select b.couple_id, b.partner_id, b.total_amount into v_b from public.bookings b where b.id = new.booking_id;
  if v_b is null or v_b.couple_id is null then
    return new;
  end if;
  select r.* into v_ref from public.partner_referrals r
  where r.partner_id = v_b.partner_id and r.profile_id = v_b.couple_id;
  if v_ref is null or not v_ref.valid or v_ref.seq is not null then
    return new;
  end if;
  select coalesce(referral_min_booking, 0), greatest(coalesce(referral_free_every, 5), 1)
  into v_min, v_every from public.platform_settings where id = 1;
  if coalesce(v_b.total_amount, 0) < v_min then
    return new;
  end if;

  perform pg_advisory_xact_lock(hashtext('partner_referral_seq:' || v_b.partner_id::text));
  select coalesce(max(pr.seq), 0) + 1 into v_seq from public.partner_referrals pr where pr.partner_id = v_b.partner_id;
  update public.partner_referrals pr set seq = v_seq, counted_at = now()
  where pr.partner_id = v_b.partner_id and pr.profile_id = v_b.couple_id and pr.seq is null;

  insert into public.notifications (profile_id, type, title, body, link)
  values (v_b.partner_id, 'partner_referral', 'Cliente do teu convite conta',
          coalesce((select full_name from public.profiles where id = v_b.couple_id), 'Um cliente') ||
          ' pagou a primeira reserva contigo (' || v_seq || '.º cliente pelo teu link). ' ||
          case when v_seq % v_every = 0
               then 'As reservas deste cliente contigo ficam sem comissão.'
               else 'Faltam ' || (v_every - v_seq % v_every) || ' para o próximo cliente sem comissão.' end,
          '/partner-home');
  return new;
end;
$$;

drop trigger if exists count_partner_referral on public.payments;
create trigger count_partner_referral after update of status on public.payments
  for each row execute function public.count_partner_referral();

-- Para o parceiro: quantos clientes trouxe.
create or replace function public.my_partner_referral_stats()
returns table (referral_code text, founder_number integer, featured_until timestamptz, clients integer,
               counted_clients integer, pending_clients integer, free_every integer, min_booking numeric)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.referral_code, p.founder_number, p.featured_until,
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id),
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id and r.seq is not null),
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id and r.valid and r.seq is null),
         s.free_every, s.min_booking
  from public.partner_profiles p
  cross join (select greatest(coalesce(referral_free_every, 5), 1) as free_every, coalesce(referral_min_booking, 0) as min_booking
              from public.platform_settings where id = 1) s
  where p.id = (select auth.uid());
$$;
revoke execute on function public.my_partner_referral_stats() from public, anon;
grant execute on function public.my_partner_referral_stats() to authenticated;

commit;

-- Verificação:
-- select founder_slots, founder_free_months, founder_featured_slots, founder_featured_months, referral_zero_fee, referral_free_every, referral_min_booking from platform_settings;
-- select business_name, referral_code, founder_number, featured_until from partner_profiles order by founder_number nulls last;
