-- ============================================================
-- 149 — Bilhetes para eventos públicos pagos
-- ============================================================
--
-- Pedido do utilizador (2026-11):
--   • Quem compra paga o preço anunciado, nem mais um cêntimo.
--   • O organizador recebe na sua conta Stripe (a mesma verificação que
--     os parceiros fazem), menos a comissão da À Nossa! de 4% e menos a
--     taxa da Stripe da transação — ambas pagas pelo organizador,
--     sempre incluídas no valor final.
--   • Ao pagar, quem comprou entra no evento e fica na lista.
--
-- Corre DEPOIS da 148.

begin;

-- Conta Stripe do organizador (os parceiros já têm em partner_profiles).
alter table public.profiles
  add column if not exists stripe_account_id text,
  add column if not exists stripe_charges_enabled boolean not null default false,
  add column if not exists stripe_payouts_enabled boolean not null default false;
create unique index if not exists profiles_stripe_account_idx on public.profiles (stripe_account_id) where stripe_account_id is not null;

-- O webhook da Stripe atualiza o estado de qualquer conta (parceiro ou organizador).
create or replace function public.sync_stripe_account_status(p_account_id text, p_charges_enabled boolean, p_payouts_enabled boolean)
returns void
language sql security definer set search_path = public, pg_temp
as $$
  update public.partner_profiles
  set stripe_charges_enabled = p_charges_enabled, stripe_payouts_enabled = p_payouts_enabled
  where stripe_account_id = p_account_id;
  update public.profiles
  set stripe_charges_enabled = p_charges_enabled, stripe_payouts_enabled = p_payouts_enabled
  where stripe_account_id = p_account_id;
$$;
revoke execute on function public.sync_stripe_account_status(text, boolean, boolean) from public, anon, authenticated;
grant execute on function public.sync_stripe_account_status(text, boolean, boolean) to service_role;

-- Comissão da À Nossa! nos bilhetes (paga pelo organizador).
alter table public.platform_settings
  add column if not exists ticket_fee_percentage numeric(5,2) not null default 4;

create table if not exists public.event_tickets (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  quantity int not null check (quantity between 1 and 20),
  unit_price numeric(10,2) not null check (unit_price > 0),
  amount numeric(10,2) not null,
  platform_fee numeric(10,2) not null default 0,
  stripe_fee numeric(10,2),
  status text not null default 'pending' check (status in ('pending', 'paid', 'cancelled', 'refunded')),
  checkout_session_id text unique,
  payment_intent_id text,
  destination_account text not null,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);
create index if not exists event_tickets_wedding_idx on public.event_tickets (wedding_id, status);
create index if not exists event_tickets_buyer_idx on public.event_tickets (buyer_id);

alter table public.event_tickets enable row level security;
drop policy if exists "Buyer or organizer reads tickets" on public.event_tickets;
create policy "Buyer or organizer reads tickets" on public.event_tickets for select to authenticated
  using (buyer_id = (select auth.uid()) or public.is_wedding_member(wedding_id) or public.is_admin());
-- Escrita só pelas Edge Functions (service role).

-- Confirmado pelo webhook (ou pela verificação ao voltar da Stripe).
create or replace function public.confirm_event_ticket(p_session_id text, p_payment_intent_id text)
returns uuid
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_t record;
  v_email text;
  v_phone text;
  v_name text;
begin
  select * into v_t from public.event_tickets where checkout_session_id = p_session_id for update;
  if v_t is null then return null; end if;
  if v_t.status = 'paid' then return v_t.id; end if;

  update public.event_tickets
  set status = 'paid', payment_intent_id = p_payment_intent_id, paid_at = now()
  where id = v_t.id;

  -- Entra no evento e fica na lista de convidados (confirmado).
  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (v_t.wedding_id, v_t.buyer_id)
  on conflict (wedding_id, guest_id) do nothing;

  if not exists (select 1 from public.guests where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id) then
    select u.email, p.full_name, p.phone into v_email, v_name, v_phone
    from auth.users u join public.profiles p on p.id = u.id where u.id = v_t.buyer_id;
    insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id, rsvp_status, notes)
    values (v_t.wedding_id, coalesce(v_name, 'Convidado'), v_email, v_phone, v_t.buyer_id, 'confirmed',
            'Bilhete pago · ' || v_t.quantity || (case when v_t.quantity = 1 then ' pessoa' else ' pessoas' end))
    on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing;
  end if;
  delete from public.guest_join_requests where wedding_id = v_t.wedding_id and profile_id = v_t.buyer_id;

  insert into public.notifications (profile_id, type, title, body, link)
  select w.owner_id, 'ticket_sold', 'Bilhete vendido',
         v_t.quantity || (case when v_t.quantity = 1 then ' bilhete' else ' bilhetes' end) || ' · ' ||
         to_char(v_t.amount, 'FM999G990D00') || ' €', '/eventos'
  from public.weddings w where w.id = v_t.wedding_id;

  return v_t.id;
end;
$$;
revoke execute on function public.confirm_event_ticket(text, text) from public, anon, authenticated;
grant execute on function public.confirm_event_ticket(text, text) to service_role;

-- Resumo para o organizador.
create or replace function public.event_ticket_summary(p_wedding uuid)
returns table (sold int, gross numeric, platform_fee numeric, stripe_fee numeric, net numeric)
language sql stable security definer set search_path = public, pg_temp
as $$
  select coalesce(sum(quantity), 0)::int,
         coalesce(sum(amount), 0),
         coalesce(sum(platform_fee), 0),
         coalesce(sum(stripe_fee), 0),
         coalesce(sum(amount - platform_fee - coalesce(stripe_fee, 0)), 0)
  from public.event_tickets
  where wedding_id = p_wedding and status = 'paid' and public.is_wedding_member(p_wedding);
$$;
revoke execute on function public.event_ticket_summary(uuid) from public, anon;
grant execute on function public.event_ticket_summary(uuid) to authenticated;

-- O que eu já comprei para este evento.
create or replace function public.my_event_tickets(p_wedding uuid)
returns int
language sql stable security definer set search_path = public, pg_temp
as $$
  select coalesce(sum(quantity), 0)::int from public.event_tickets
  where wedding_id = p_wedding and buyer_id = (select auth.uid()) and status = 'paid';
$$;
revoke execute on function public.my_event_tickets(uuid) from public, anon;
grant execute on function public.my_event_tickets(uuid) to authenticated;

-- Eventos pagos: só se entra com bilhete.
create or replace function public.join_public_event(p_wedding uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_email text;
  v_phone text;
  v_full_name text;
  v_guest uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not exists (select 1 from public.weddings
                 where id = p_wedding and is_public and pending_deletion_at is null) then
    raise exception 'not_public' using errcode = 'P0002';
  end if;
  -- Evento pago: entra-se comprando bilhete (create-ticket-checkout).
  if exists (select 1 from public.weddings where id = p_wedding and is_paid)
     and not public.is_wedding_member(p_wedding) then
    raise exception 'ticket_required' using errcode = 'P0001';
  end if;

  insert into public.wedding_guest_members (wedding_id, guest_id)
  values (p_wedding, auth.uid())
  on conflict (wedding_id, guest_id) do nothing;

  select id into v_guest from public.guests
  where wedding_id = p_wedding and linked_profile_id = auth.uid();

  if v_guest is null then
    select u.email, p.full_name, p.phone
    into v_email, v_full_name, v_phone
    from auth.users u join public.profiles p on p.id = u.id
    where u.id = auth.uid();

    -- Já estava na lista com o mesmo email: liga em vez de duplicar.
    if v_email is not null then
      update public.guests set linked_profile_id = auth.uid(), updated_at = now()
      where wedding_id = p_wedding and linked_profile_id is null
        and lower(email) = lower(v_email)
      returning id into v_guest;
    end if;

    if v_guest is null then
      insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
      values (p_wedding, coalesce(v_full_name, 'Convidado'), v_email, v_phone, auth.uid())
      on conflict (wedding_id, linked_profile_id) where linked_profile_id is not null do nothing
      returning id into v_guest;
    end if;
  end if;

  return p_wedding;
end;
$$;

revoke execute on function public.join_public_event(uuid) from public, anon;
grant execute on function public.join_public_event(uuid) to authenticated;

commit;
