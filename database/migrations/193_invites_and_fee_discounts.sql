-- ============================================================
-- 193 · Convites com 50 % na taxa e 50 % na 1.ª transação
-- ============================================================
--
-- Pedido do Rafael (2026-11-16):
--   * Parceiros e organizadores convidam pelo seu link. Cada pessoa
--     convidada conta quando faz o 1.º pagamento (sem mínimo — acabou o
--     mínimo de 500 €). A cada 5 que contam, quem convidou ganha 50 % de
--     desconto na taxa de serviço da sua próxima transação. Pro: igual
--     (5, em vez de 3). Acaba o «5.º cliente sem taxa».
--   * Todas as contas novas (sozinhas ou por convite) têm 50 % de
--     desconto na taxa de serviço da 1.ª transação: organizador no 1.º
--     pagamento, parceiro na 1.ª reserva paga que recebe.
--
-- Os descontos são «créditos» (`fee_credits`): um por prémio. Quando se
-- cria o pagamento (create-payment-intent), reserva-se um crédito do
-- pagador e outro do parceiro (`take_fee_credit`); ficam gastos quando o
-- pagamento é pago.
-- ============================================================

begin;

-- ---------- regras ----------
alter table public.platform_settings
  add column if not exists invite_every integer not null default 5,
  add column if not exists invite_discount_pct numeric not null default 50,
  add column if not exists welcome_discount_pct numeric not null default 50;

update public.platform_settings
set referral_min_booking = 0,
    referral_free_every = 5,
    pro_referral_free_every = 5,
    referral_zero_fee = false
where id = 1;

-- ---------- código de convite dos organizadores ----------
alter table public.profiles add column if not exists invite_code text;
create unique index if not exists profiles_invite_code_uidx on public.profiles (upper(invite_code)) where invite_code is not null;

create or replace function public.gen_invite_code()
returns text
language plpgsql
set search_path = public, pg_temp
as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  c text;
begin
  loop
    c := '';
    for i in 1..6 loop
      c := c || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from public.partner_profiles where upper(referral_code) = c)
          and not exists (select 1 from public.profiles where upper(invite_code) = c);
  end loop;
  return c;
end;
$$;

-- ---------- convites de organizadores ----------
create table if not exists public.user_invites (
  invited_id uuid primary key references public.profiles(id) on delete cascade,
  inviter_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  counted_at timestamptz
);
create index if not exists user_invites_inviter_idx on public.user_invites (inviter_id);
alter table public.user_invites enable row level security;
drop policy if exists "Inviter sees own invites" on public.user_invites;
create policy "Inviter sees own invites" on public.user_invites for select using (inviter_id = auth.uid());
grant select on public.user_invites to authenticated;

-- ---------- créditos de desconto ----------
create table if not exists public.fee_credits (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('welcome', 'invite')),
  pct numeric not null check (pct > 0 and pct <= 100),
  created_at timestamptz not null default now(),
  -- Reservado para este pagamento; gasto quando é pago.
  payment_id uuid references public.payments(id) on delete set null,
  used_at timestamptz
);
create index if not exists fee_credits_profile_idx on public.fee_credits (profile_id) where used_at is null;
alter table public.fee_credits enable row level security;
drop policy if exists "Own credits" on public.fee_credits;
create policy "Own credits" on public.fee_credits for select using (profile_id = auth.uid());
grant select on public.fee_credits to authenticated;

-- Contas novas: 50 % na 1.ª transação.
create or replace function public.grant_welcome_credit()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.fee_credits (profile_id, kind, pct)
  select new.id, 'welcome', coalesce((select welcome_discount_pct from public.platform_settings where id = 1), 50);
  return new;
end;
$$;

drop trigger if exists grant_welcome_credit on public.profiles;
create trigger grant_welcome_credit
  after insert on public.profiles
  for each row execute function public.grant_welcome_credit();

-- Prémio de convites: um crédito e uma notificação.
create or replace function public.grant_invite_credit(p_profile uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_pct numeric;
begin
  select coalesce(invite_discount_pct, 50) into v_pct from public.platform_settings where id = 1;
  insert into public.fee_credits (profile_id, kind, pct) values (p_profile, 'invite', v_pct);
  insert into public.notifications (profile_id, type, title, body, link)
  values (p_profile, 'partner_referral', 'Ganhaste ' || trim(to_char(v_pct, 'FM990')) || ' % de desconto',
          'Convidaste 5 pessoas. A taxa de serviço da tua próxima transação fica a metade.', '/settings');
end;
$$;

revoke all on function public.grant_invite_credit(uuid) from public, anon, authenticated;


-- Texto do aviso ao parceiro (sem «cliente sem comissão»).
create or replace function public.claim_partner_referral(p_code text)
returns table(partner_id uuid, business_name text, valid boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_partner uuid;
  v_name text;
  v_valid boolean;
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

  select r.valid into v_valid from public.partner_referrals r
  where r.partner_id = v_partner and r.profile_id = v_uid;
  if v_valid is null then
    v_valid := not exists (select 1 from public.quote_requests q where q.partner_id = v_partner and q.couple_id = v_uid)
           and not exists (select 1 from public.bookings b where b.partner_id = v_partner and b.couple_id = v_uid);
    insert into public.partner_referrals (partner_id, profile_id, valid) values (v_partner, v_uid, v_valid)
    on conflict on constraint partner_referrals_pkey do nothing;
    if v_valid then
      insert into public.notifications (profile_id, type, title, subtitle, body, link)
      values (v_partner, 'partner_referral', 'Novo cliente pelo teu convite',
              coalesce((select full_name from public.profiles where id = v_uid), 'Um cliente'),
              'Entrou na À Nossa! pelo teu link. Conta para os teus 5 quando pagar a primeira reserva contigo.',
              '/settings');
    end if;
  end if;

  return query select v_partner, v_name, v_valid;
end;
$$;

-- ---------- registar convite (parceiro ou organizador) ----------
-- Um só ponto para os links /p/CODIGO: se o código é de um parceiro,
-- fica como antes (partner_referrals); se é de um organizador, entra em
-- user_invites. Só conta quem ainda não fez nenhum pagamento.
create or replace function public.claim_invite(p_code text)
returns table (kind text, inviter_id uuid, inviter_name text, valid boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_uid uuid := auth.uid();
  v_partner uuid;
  v_pname text;
  v_inviter uuid;
  v_iname text;
  v_valid boolean;
  v_existing uuid;
begin
  if v_uid is null then raise exception 'forbidden' using errcode = '42501'; end if;

  select p.id, p.business_name into v_partner, v_pname
  from public.partner_profiles p
  where upper(p.referral_code) = upper(trim(p_code)) and p.status = 'published';

  if v_partner is not null then
    return query select 'partner'::text, r.partner_id, r.business_name, r.valid
      from public.claim_partner_referral(p_code) r;
    return;
  end if;

  select pr.id, coalesce(nullif(trim(pr.full_name), ''), 'Alguém') into v_inviter, v_iname
  from public.profiles pr where upper(pr.invite_code) = upper(trim(p_code));
  if v_inviter is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_inviter = v_uid then raise exception 'own_code' using errcode = 'P0001'; end if;

  select ui.inviter_id into v_existing from public.user_invites ui where ui.invited_id = v_uid;
  if v_existing is not null then
    return query select 'user'::text, v_existing,
      (select coalesce(nullif(trim(full_name), ''), 'Alguém') from public.profiles where id = v_existing),
      v_existing = v_inviter;
    return;
  end if;

  v_valid := not exists (
    select 1 from public.payments pay
    where pay.status = 'paid' and (pay.payer_id = v_uid or pay.partner_id = v_uid)
  );
  if v_valid then
    insert into public.user_invites (invited_id, inviter_id) values (v_uid, v_inviter) on conflict do nothing;
    insert into public.notifications (profile_id, type, title, subtitle, body, link)
    values (v_inviter, 'partner_referral', 'Entrou alguém pelo teu convite',
            coalesce((select full_name from public.profiles where id = v_uid), 'Alguém'),
            'Conta para os teus 5 quando fizer o primeiro pagamento.', '/settings');
  end if;
  return query select 'user'::text, v_inviter, v_iname, v_valid;
end;
$$;

grant execute on function public.claim_invite(text) to authenticated;

-- ---------- contar convidados ----------
-- Clientes de parceiros: conta a 1.ª reserva paga com esse parceiro, sem
-- mínimo; a cada 5, crédito de 50 % para o parceiro (em vez de o 5.º
-- cliente ficar sem taxa).
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
            'Pagou a primeira reserva contigo. Faltam ' || (v_every - v_seq % v_every) || ' para ganhares 50 % de desconto na taxa.',
            '/settings');
  end if;
  return new;
end;
$$;

-- Convites de organizadores: conta o 1.º pagamento do convidado.
create or replace function public.count_user_invite()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_inv record;
  v_every integer;
  v_n integer;
begin
  if new.status <> 'paid' or old.status = 'paid' then return new; end if;
  select * into v_inv from public.user_invites
  where invited_id in (new.payer_id, new.partner_id) and counted_at is null
  limit 1
  for update;
  if v_inv is null then return new; end if;

  update public.user_invites set counted_at = now() where invited_id = v_inv.invited_id;
  select greatest(coalesce(invite_every, 5), 1) into v_every from public.platform_settings where id = 1;
  perform pg_advisory_xact_lock(hashtext('user_invites:' || v_inv.inviter_id::text));
  select count(*) into v_n from public.user_invites where inviter_id = v_inv.inviter_id and counted_at is not null;
  if v_n % v_every = 0 then
    perform public.grant_invite_credit(v_inv.inviter_id);
  end if;
  return new;
end;
$$;

drop trigger if exists count_user_invite on public.payments;
create trigger count_user_invite
  after update of status on public.payments
  for each row execute function public.count_user_invite();

-- ---------- usar créditos ----------
-- Reserva um crédito desta pessoa para este pagamento e devolve a
-- percentagem (0 = sem desconto). Só a Edge Function (service role).
create or replace function public.take_fee_credit(p_profile uuid, p_payment uuid)
returns numeric
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_credit public.fee_credits%rowtype;
begin
  if p_profile is null or p_payment is null then return 0; end if;
  -- Já reservado para este pagamento.
  select * into v_credit from public.fee_credits
  where profile_id = p_profile and payment_id = p_payment and used_at is null limit 1;
  if found then return v_credit.pct; end if;

  select c.* into v_credit from public.fee_credits c
  left join public.payments p on p.id = c.payment_id
  where c.profile_id = p_profile and c.used_at is null
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

-- Pago: os créditos reservados ficam gastos.
create or replace function public.spend_fee_credits()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.status = 'paid' and old.status is distinct from 'paid' then
    update public.fee_credits set used_at = now() where payment_id = new.id and used_at is null;
  end if;
  return new;
end;
$$;

drop trigger if exists spend_fee_credits on public.payments;
create trigger spend_fee_credits
  after update of status on public.payments
  for each row execute function public.spend_fee_credits();

-- ---------- o meu convite (Definições) ----------
create or replace function public.my_invite_stats()
returns table (
  code text, is_partner boolean, founder_number integer, featured_until timestamptz,
  joined integer, counted integer, step integer, credits integer, credit_pct numeric, welcome boolean
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
    exists (select 1 from public.fee_credits c where c.profile_id = v_uid and c.used_at is null and c.kind = 'welcome');
end;
$$;

grant execute on function public.my_invite_stats() to authenticated;

insert into public.applied_migrations (id) values ('193') on conflict do nothing;

commit;
