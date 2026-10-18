-- ============================================================
-- 099 — Reservas para os convidados (alojamento e transporte)
-- ============================================================
--
-- Pedido do utilizador (2026-10-18): o organizador combina com um
-- parceiro (hotel, transportadora) um bloco de quartos ou lugares para os
-- convidados; cada convidado reserva o seu e PAGA NA APP.
--
-- O dinheiro segue o mesmo modelo das reservas do casal
-- (create-deposit-checkout): destination charge para a conta Stripe do
-- parceiro, com a comissão da plataforma adicionada por cima. Por isso
-- cada oferta tem de estar ligada a um parceiro com quem o evento já tem
-- uma reserva (`bookings`).
--
-- `guest_offer_reservations.amount` guarda sempre o valor do parceiro
-- (sem comissão), como `payments.amount`.

create table public.guest_offers (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id),
  kind text not null check (kind in ('lodging', 'transport')),
  title text not null check (char_length(btrim(title)) between 1 and 120),
  details text check (details is null or char_length(details) <= 500),
  capacity integer not null check (capacity between 1 and 2000),
  -- Por quarto e por noite (alojamento) ou por lugar (transporte).
  price numeric(10,2) not null check (price >= 0.5 and price <= 10000),
  starts_on date,
  ends_on date,
  departure_at timestamptz,
  is_active boolean not null default true,
  created_by uuid references public.profiles(id) default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_on is null or starts_on is null or ends_on > starts_on)
);

create index guest_offers_wedding_idx on public.guest_offers (wedding_id);
create index guest_offers_partner_idx on public.guest_offers (partner_id);

create table public.guest_offer_reservations (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references public.guest_offers(id) on delete restrict,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_id uuid not null references public.profiles(id) on delete cascade,
  quantity integer not null check (quantity between 1 and 20),
  nights integer not null default 1 check (nights between 1 and 30),
  amount numeric(10,2) not null check (amount > 0),
  status text not null default 'pending_payment'
    check (status in ('pending_payment', 'paid', 'cancelled')),
  stripe_session_id text unique,
  payment_intent_id text,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index guest_offer_reservations_offer_idx on public.guest_offer_reservations (offer_id);
create index guest_offer_reservations_guest_idx on public.guest_offer_reservations (guest_id);
create index guest_offer_reservations_wedding_idx on public.guest_offer_reservations (wedding_id);

alter table public.guest_offers enable row level security;
alter table public.guest_offer_reservations enable row level security;

-- Ofertas: o organizador gere; convidados do evento e o parceiro leem.
create policy "Members manage guest offers select"
  on public.guest_offers for select
  using (public.is_wedding_member(wedding_id)
         or public.is_wedding_guest_member(wedding_id)
         or partner_id = auth.uid()
         or public.is_admin());

create policy "Members create guest offers"
  on public.guest_offers for insert
  with check (
    public.is_wedding_member(wedding_id)
    and exists (select 1 from public.bookings b
                where b.wedding_id = guest_offers.wedding_id and b.partner_id = guest_offers.partner_id)
  );

create policy "Members update guest offers"
  on public.guest_offers for update
  using (public.is_wedding_member(wedding_id))
  with check (
    public.is_wedding_member(wedding_id)
    and exists (select 1 from public.bookings b
                where b.wedding_id = guest_offers.wedding_id and b.partner_id = guest_offers.partner_id)
  );

-- Reservas: só se criam/alteram pelas funções abaixo (sem policies de
-- escrita); leitura para o próprio convidado, o organizador e o parceiro.
create policy "Guest offer reservations visible to involved"
  on public.guest_offer_reservations for select
  using (guest_id = auth.uid()
         or public.is_wedding_member(wedding_id)
         or exists (select 1 from public.guest_offers o where o.id = offer_id and o.partner_id = auth.uid())
         or public.is_admin());

-- Unidades ocupadas: pagas + reservas por pagar dos últimos 35 minutos
-- (o checkout Stripe expira aos 31 minutos, ver a Edge Function).
create or replace function public.guest_offer_taken(p_offer_id uuid)
returns integer
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce(sum(quantity), 0)::integer
  from public.guest_offer_reservations
  where offer_id = p_offer_id
    and (status = 'paid'
         or (status = 'pending_payment' and created_at > now() - interval '35 minutes'));
$$;

revoke execute on function public.guest_offer_taken(uuid) from public, anon;
grant execute on function public.guest_offer_taken(uuid) to authenticated;

-- Lista para o convidado (e para o organizador): ofertas ativas, com o
-- nome do parceiro, lugares livres e se o pagamento na app está pronto.
create or replace function public.get_guest_offers(p_wedding_id uuid)
returns table (
  id uuid, kind text, title text, details text, capacity integer, price numeric,
  starts_on date, ends_on date, departure_at timestamptz, is_active boolean,
  partner_id uuid, partner_name text, payable boolean, taken integer
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select o.id, o.kind, o.title, o.details, o.capacity, o.price,
         o.starts_on, o.ends_on, o.departure_at, o.is_active,
         o.partner_id, p.business_name,
         (p.stripe_account_id is not null and p.stripe_charges_enabled),
         public.guest_offer_taken(o.id)
  from public.guest_offers o
  join public.partner_profiles p on p.id = o.partner_id
  where o.wedding_id = p_wedding_id
    and (public.is_wedding_member(p_wedding_id)
         or (public.is_wedding_guest_member(p_wedding_id) and o.is_active))
  order by o.kind, o.created_at;
$$;

revoke execute on function public.get_guest_offers(uuid) from public, anon;
grant execute on function public.get_guest_offers(uuid) to authenticated;

-- Reservas do evento para o organizador, com o nome e a foto do convidado.
create or replace function public.get_guest_offer_reservations(p_wedding_id uuid)
returns table (
  id uuid, offer_id uuid, offer_title text, kind text, guest_id uuid,
  guest_name text, guest_avatar_url text, quantity integer, nights integer,
  amount numeric, status text, created_at timestamptz, paid_at timestamptz
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select r.id, r.offer_id, o.title, o.kind, r.guest_id,
         pr.full_name, pr.avatar_url, r.quantity, r.nights,
         r.amount, r.status, r.created_at, r.paid_at
  from public.guest_offer_reservations r
  join public.guest_offers o on o.id = r.offer_id
  join public.profiles pr on pr.id = r.guest_id
  where r.wedding_id = p_wedding_id
    and public.is_wedding_member(p_wedding_id)
    and (r.status = 'paid'
         or (r.status = 'pending_payment' and r.created_at > now() - interval '35 minutes'))
  order by r.created_at desc;
$$;

revoke execute on function public.get_guest_offer_reservations(uuid) from public, anon;
grant execute on function public.get_guest_offer_reservations(uuid) to authenticated;

-- O convidado reserva: confirma que pertence ao evento, bloqueia a oferta
-- para não vender mais do que existe e calcula o valor no servidor.
create or replace function public.reserve_guest_offer(
  p_offer_id uuid, p_quantity integer, p_nights integer default 1
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_offer public.guest_offers;
  v_nights integer;
  v_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden';
  end if;

  select * into v_offer from public.guest_offers where id = p_offer_id for update;
  if v_offer is null or not v_offer.is_active then
    raise exception 'offer_unavailable';
  end if;
  if not (public.is_wedding_guest_member(v_offer.wedding_id) or public.is_wedding_member(v_offer.wedding_id)) then
    raise exception 'forbidden';
  end if;
  if p_quantity is null or p_quantity < 1 or p_quantity > 20 then
    raise exception 'invalid_quantity';
  end if;

  v_nights := case when v_offer.kind = 'lodging' then coalesce(p_nights, 1) else 1 end;
  if v_nights < 1 or v_nights > 30 then
    raise exception 'invalid_nights';
  end if;

  if public.guest_offer_taken(v_offer.id) + p_quantity > v_offer.capacity then
    raise exception 'sold_out';
  end if;

  insert into public.guest_offer_reservations (offer_id, wedding_id, guest_id, quantity, nights, amount)
  values (v_offer.id, v_offer.wedding_id, auth.uid(), p_quantity, v_nights,
          round(v_offer.price * p_quantity * v_nights, 2))
  returning id into v_id;

  return v_id;
end;
$$;

revoke execute on function public.reserve_guest_offer(uuid, integer, integer) from public, anon;
grant execute on function public.reserve_guest_offer(uuid, integer, integer) to authenticated;

-- O convidado desiste de uma reserva ainda por pagar.
create or replace function public.cancel_guest_reservation(p_reservation_id uuid)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.guest_offer_reservations
  set status = 'cancelled', updated_at = now()
  where id = p_reservation_id and guest_id = auth.uid() and status = 'pending_payment';
$$;

revoke execute on function public.cancel_guest_reservation(uuid) from public, anon;
grant execute on function public.cancel_guest_reservation(uuid) to authenticated;

-- Chamada pela Edge Function (com o JWT do convidado) depois de criar a
-- Checkout Session.
create or replace function public.record_guest_reservation_session(
  p_reservation_id uuid, p_session_id text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  update public.guest_offer_reservations
  set stripe_session_id = p_session_id, updated_at = now()
  where id = p_reservation_id and guest_id = auth.uid() and status = 'pending_payment';
  if not found then
    raise exception 'invalid_state';
  end if;
end;
$$;

revoke execute on function public.record_guest_reservation_session(uuid, text) from public, anon;
grant execute on function public.record_guest_reservation_session(uuid, text) to authenticated;

-- Só o webhook da Stripe (service role) confirma o pagamento.
create or replace function public.confirm_guest_reservation_payment(
  p_session_id text, p_payment_intent_id text
)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.guest_offer_reservations
  set status = 'paid', paid_at = now(), payment_intent_id = p_payment_intent_id, updated_at = now()
  where stripe_session_id = p_session_id and status <> 'paid';
$$;

revoke execute on function public.confirm_guest_reservation_payment(text, text) from public, anon, authenticated;
