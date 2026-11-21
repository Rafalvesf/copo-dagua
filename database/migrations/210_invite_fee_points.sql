-- 210_invite_fee_points.sql
-- Prémio de convites em pontos (pedido do Rafael, 2026-11-21): a cada 5
-- pessoas convidadas que já gastaram dinheiro na app, quem convidou tem a
-- taxa de serviço 2 pontos mais baixa numa transação — 4 % + 1 € passa a
-- 2 % + 1 €; num cartão com taxa mais alta, 6 % + 1 € passa a 4 % + 1 €
-- (desce sempre 2, não vai a um mínimo). O 1 € fixo não muda. 10
-- convidados = 2 transações, 15 = 3, etc. (um crédito a cada 5, como na
-- 193). Substitui os 50 % de desconto do prémio de convites; o desconto
-- de boas-vindas (50 % na 1.ª transação) fica igual.

begin;

alter table public.platform_settings
  add column if not exists invite_discount_points numeric(5,2) not null default 2;

-- Um crédito de convite guarda pontos em vez de percentagem.
alter table public.fee_credits add column if not exists points numeric(5,2);
alter table public.fee_credits alter column pct drop not null;
alter table public.fee_credits drop constraint if exists fee_credits_pct_check;
do $$ begin
  alter table public.fee_credits add constraint fee_credits_discount_check
    check ((pct > 0 and pct <= 100 and points is null) or (pct is null and points > 0 and points <= 100));
exception when duplicate_object then null; end $$;

-- Prémios de convite ainda por usar passam à regra nova.
update public.fee_credits
set points = (select invite_discount_points from public.platform_settings where id = 1), pct = null
where kind = 'invite' and used_at is null and pct is not null;

-- «2 %» para os textos.
create or replace function public.invite_points_label()
returns text
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select trim(to_char(coalesce(invite_discount_points, 2), 'FM990D##'), ',.') || ' %'
  from public.platform_settings where id = 1;
$$;

create or replace function public.grant_invite_credit(p_profile uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_points numeric;
  v_every integer;
  v_left integer;
begin
  select coalesce(invite_discount_points, 2), greatest(coalesce(invite_every, 5), 1)
    into v_points, v_every from public.platform_settings where id = 1;
  insert into public.fee_credits (profile_id, kind, points) values (p_profile, 'invite', v_points);
  select count(*) into v_left from public.fee_credits
  where profile_id = p_profile and kind = 'invite' and used_at is null;
  insert into public.notifications (profile_id, type, title, body, link)
  values (p_profile, 'partner_referral', 'A taxa desce ' || public.invite_points_label(),
          'Convidaste mais ' || v_every || ' pessoas que já pagaram na app. Na tua próxima transação a taxa de serviço desce '
          || public.invite_points_label() || ' (ex.: 4 % + 1 € passa a 2 % + 1 €).'
          || case when v_left > 1 then ' Tens esta oferta em ' || v_left || ' transações.' else '' end,
          '/settings');
end;
$$;

revoke all on function public.grant_invite_credit(uuid) from public, anon, authenticated;

create or replace function public.count_partner_referral()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b record;
  v_ref record;
  v_every integer;
  v_seq integer;
begin
  if new.status <> 'paid' or old.status = 'paid' then
    return new;
  end if;
  select b.couple_id, b.partner_id into v_b from public.bookings b where b.id = new.booking_id;
  if v_b is null or v_b.couple_id is null then
    return new;
  end if;
  select r.* into v_ref from public.partner_referrals r
  where r.partner_id = v_b.partner_id and r.profile_id = v_b.couple_id;
  if v_ref is null or not v_ref.valid or v_ref.seq is not null then
    return new;
  end if;
  select greatest(coalesce(invite_every, 5), 1) into v_every from public.platform_settings where id = 1;

  perform pg_advisory_xact_lock(hashtext('partner_referral_seq:' || v_b.partner_id::text));
  select coalesce(max(pr.seq), 0) + 1 into v_seq from public.partner_referrals pr where pr.partner_id = v_b.partner_id;
  update public.partner_referrals pr set seq = v_seq, counted_at = now()
  where pr.partner_id = v_b.partner_id and pr.profile_id = v_b.couple_id and pr.seq is null;

  if v_seq % v_every = 0 then
    perform public.grant_invite_credit(v_b.partner_id);
  else
    insert into public.notifications (profile_id, type, title, subtitle, body, link)
    values (v_b.partner_id, 'partner_referral', 'Cliente do teu convite conta',
            coalesce((select full_name from public.profiles where id = v_b.couple_id), 'Um cliente'),
            'Pagou a primeira reserva contigo. Faltam ' || (v_every - v_seq % v_every) || ' para a taxa descer ' || public.invite_points_label() || ' numa transação.',
            '/settings');
  end if;
  return new;
end;
$$;

create or replace function public.count_partner_referral_for(p_couple uuid, p_partner uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_ref record;
  v_every integer;
  v_seq integer;
begin
  if p_couple is null or p_partner is null then return; end if;
  select r.* into v_ref from public.partner_referrals r
   where r.partner_id = p_partner and r.profile_id = p_couple;
  if v_ref is null or not v_ref.valid or v_ref.seq is not null then return; end if;
  select greatest(coalesce(invite_every, 5), 1) into v_every from public.platform_settings where id = 1;

  perform pg_advisory_xact_lock(hashtext('partner_referral_seq:' || p_partner::text));
  select coalesce(max(pr.seq), 0) + 1 into v_seq from public.partner_referrals pr where pr.partner_id = p_partner;
  update public.partner_referrals pr set seq = v_seq, counted_at = now()
   where pr.partner_id = p_partner and pr.profile_id = p_couple and pr.seq is null;

  if v_seq % v_every = 0 then
    perform public.grant_invite_credit(p_partner);
  else
    insert into public.notifications (profile_id, type, title, subtitle, body, link)
    values (p_partner, 'partner_referral', 'Cliente do teu convite conta',
            coalesce((select full_name from public.profiles where id = p_couple), 'Um cliente'),
            'Pagou a primeira reserva contigo. Faltam ' || (v_every - v_seq % v_every) || ' para a taxa descer ' || public.invite_points_label() || ' numa transação.',
            '/settings');
  end if;
end;
$$;

revoke execute on function public.count_partner_referral_for(uuid, uuid) from public, anon, authenticated;

-- Reserva um crédito para este pagamento e diz o desconto: `pct` (% da
-- taxa, boas-vindas) ou `points` (pontos a tirar à percentagem, convites).
-- Só a Edge Function. A antiga `take_fee_credit` fica para a versão
-- anterior da função e só devolve percentagens.
create or replace function public.take_fee_discount(p_profile uuid, p_payment uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_credit public.fee_credits%rowtype;
begin
  if p_profile is null or p_payment is null then return jsonb_build_object('pct', 0, 'points', 0); end if;
  select * into v_credit from public.fee_credits
  where profile_id = p_profile and payment_id = p_payment and used_at is null limit 1;
  if not found then
    select c.* into v_credit from public.fee_credits c
    left join public.payments p on p.id = c.payment_id
    where c.profile_id = p_profile and c.used_at is null
      and (c.payment_id is null or p.id is null or p.status not in ('paid'))
    order by (c.kind = 'welcome') desc, c.created_at
    limit 1
    for update of c skip locked;
    if not found then return jsonb_build_object('pct', 0, 'points', 0); end if;
    update public.fee_credits set payment_id = p_payment where id = v_credit.id;
  end if;
  return jsonb_build_object('pct', coalesce(v_credit.pct, 0), 'points', coalesce(v_credit.points, 0), 'kind', v_credit.kind);
end;
$$;

revoke all on function public.take_fee_discount(uuid, uuid) from public, anon, authenticated;
grant execute on function public.take_fee_discount(uuid, uuid) to service_role;

-- A antiga só reserva créditos em percentagem (os de pontos ficam para a
-- função nova), para nunca dar 0 % a quem tinha pontos.
create or replace function public.take_fee_credit(p_profile uuid, p_payment uuid)
returns numeric
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_credit public.fee_credits%rowtype;
begin
  if p_profile is null or p_payment is null then return 0; end if;
  select * into v_credit from public.fee_credits
  where profile_id = p_profile and payment_id = p_payment and used_at is null and pct is not null limit 1;
  if found then return v_credit.pct; end if;
  select c.* into v_credit from public.fee_credits c
  left join public.payments p on p.id = c.payment_id
  where c.profile_id = p_profile and c.used_at is null and c.pct is not null
    and (c.payment_id is null or p.id is null or p.status not in ('paid'))
  order by (c.kind = 'welcome') desc, c.created_at
  limit 1
  for update of c skip locked;
  if not found then return 0; end if;
  update public.fee_credits set payment_id = p_payment where id = v_credit.id;
  return v_credit.pct;
end;
$$;

revoke all on function public.take_fee_credit(uuid, uuid) from public, anon, authenticated;
grant execute on function public.take_fee_credit(uuid, uuid) to service_role;

-- Definições: + `credit_points` (2) e quantos convidados contam.
drop function if exists public.my_invite_stats();
create or replace function public.my_invite_stats()
returns table (
  code text, is_partner boolean, founder_number integer, featured_until timestamptz,
  joined integer, counted integer, step integer, credits integer, credit_pct numeric, welcome boolean,
  credit_points numeric
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_uid uuid := auth.uid();
  v_partner public.partner_profiles%rowtype;
  v_code text;
begin
  if v_uid is null then return; end if;
  select * into v_partner from public.partner_profiles where id = v_uid;
  if v_partner.id is not null then
    v_code := v_partner.referral_code;
  else
    select invite_code into v_code from public.profiles where id = v_uid;
    if v_code is null then
      v_code := public.gen_invite_code();
      update public.profiles set invite_code = v_code where id = v_uid;
    end if;
  end if;

  return query select
    v_code,
    v_partner.id is not null,
    v_partner.founder_number,
    v_partner.featured_until,
    case when v_partner.id is not null
         then (select count(*)::int from public.partner_referrals r where r.partner_id = v_uid and r.valid)
         else (select count(*)::int from public.user_invites u where u.inviter_id = v_uid) end,
    case when v_partner.id is not null
         then (select count(*)::int from public.partner_referrals r where r.partner_id = v_uid and r.seq is not null)
         else (select count(*)::int from public.user_invites u where u.inviter_id = v_uid and u.counted_at is not null) end,
    (select greatest(coalesce(invite_every, 5), 1) from public.platform_settings where id = 1),
    (select count(*)::int from public.fee_credits c where c.profile_id = v_uid and c.used_at is null and c.kind = 'invite'),
    (select coalesce(invite_discount_pct, 50) from public.platform_settings where id = 1),
    exists (select 1 from public.fee_credits c where c.profile_id = v_uid and c.used_at is null and c.kind = 'welcome'),
    (select coalesce(invite_discount_points, 2) from public.platform_settings where id = 1);
end;
$$;

grant execute on function public.my_invite_stats() to authenticated;

insert into public.applied_migrations (id) values ('210') on conflict do nothing;

commit;
