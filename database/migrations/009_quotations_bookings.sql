-- ============================================================
-- Módulos: Quotations + Bookings
-- (backend/quotations/database.md, backend/bookings/database.md)
-- ============================================================

create type quote_request_status as enum ('pending', 'viewed', 'proposal_sent', 'accepted', 'declined', 'expired');
create type proposal_status as enum ('sent', 'accepted', 'rejected', 'expired');
create type booking_status as enum (
  'awaiting_deposit', 'confirmed', 'completed', 'expired',
  'cancelled_by_couple', 'cancelled_by_partner', 'payment_overdue', 'disputed'
);
create type booking_actor_type as enum ('couple', 'partner', 'admin', 'system');

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  couple_id uuid not null references public.profiles(id),
  wedding_id uuid not null references public.weddings(id),
  partner_id uuid not null references public.partner_profiles(id),
  event_date date,
  location text,
  budget_min numeric(10,2),
  budget_max numeric(10,2),
  message text,
  status quote_request_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index quote_requests_partner_idx on public.quote_requests (partner_id, status);
create index quote_requests_couple_idx on public.quote_requests (couple_id);

create table public.proposals (
  id uuid primary key default gen_random_uuid(),
  quote_request_id uuid not null references public.quote_requests(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id),
  couple_id uuid not null references public.profiles(id),
  title text not null,
  description text,
  price numeric(10,2) not null,
  deposit_amount numeric(10,2) not null,
  payment_terms text,
  expires_at timestamptz,
  status proposal_status not null default 'sent',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index proposals_quote_request_idx on public.proposals (quote_request_id);

-- booking_number: sequência legível (WED-1042), separada do uuid interno —
-- pensado para aparecer em conversas com o parceiro/casal e em suporte.
create sequence public.booking_number_seq start 1000;

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_number text not null unique default ('WED-' || nextval('public.booking_number_seq')),
  couple_id uuid not null references public.profiles(id),
  partner_id uuid not null references public.partner_profiles(id),
  wedding_id uuid not null references public.weddings(id),
  proposal_id uuid not null references public.proposals(id),
  event_date date not null,
  total_amount numeric(10,2) not null,
  deposit_amount numeric(10,2) not null,
  status booking_status not null default 'awaiting_deposit',
  hold_started_at timestamptz not null default now(),
  hold_expires_at timestamptz not null,
  confirmed_at timestamptz,
  completed_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index bookings_status_idx on public.bookings (status);
create index bookings_couple_idx on public.bookings (couple_id);
create index bookings_partner_idx on public.bookings (partner_id);
create index bookings_hold_expiry_idx on public.bookings (hold_expires_at) where status = 'awaiting_deposit';

create table public.booking_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  event_type text not null,
  old_status booking_status,
  new_status booking_status,
  actor_type booking_actor_type not null,
  actor_id uuid,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index booking_events_booking_idx on public.booking_events (booking_id, created_at);

-- ============================================================
-- RLS
-- ============================================================

alter table public.quote_requests enable row level security;
alter table public.proposals enable row level security;
alter table public.bookings enable row level security;
alter table public.booking_events enable row level security;

create policy "Participants can view quote requests"
  on public.quote_requests for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

create policy "Participants can view proposals"
  on public.proposals for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

create policy "Participants can view bookings"
  on public.bookings for select
  using (couple_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

create policy "Participants can view booking events"
  on public.booking_events for select
  using (
    exists (
      select 1 from public.bookings b
      where b.id = booking_id and (b.couple_id = auth.uid() or b.partner_id = auth.uid())
    )
    or public.is_admin()
  );

-- Sem policy de insert/update para authenticated em nenhuma das quatro
-- tabelas — todas as escritas passam pelas funções abaixo (mesmo
-- raciocínio de admin-web/partners/database.md: nunca update direto do
-- cliente numa tabela cujo estado tem regras de transição).

-- ============================================================
-- Funções — pedir orçamento, propor, aceitar/recusar, confirmar sinal (stub)
-- ============================================================

create or replace function public.request_quote(
  p_partner_id uuid, p_wedding_id uuid, p_event_date date,
  p_location text, p_budget_min numeric, p_budget_max numeric, p_message text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  -- Reutiliza is_wedding_member()/is_partner_profile_visible() em vez de
  -- duplicar as suas condições — mesmo raciocínio de docs/architecture/RLS_POLICY.md.
  -- Bug real corrigido antes de aplicar (2026-08-30): sem isto, qualquer
  -- casal autenticado podia pedir orçamento em nome de um wedding_id alheio.
  if not public.is_wedding_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_partner_profile_visible(p_partner_id) then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if p_event_date is not null and p_event_date < (current_date + interval '7 days') then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  insert into public.quote_requests (couple_id, wedding_id, partner_id, event_date, location, budget_min, budget_max, message)
  values (auth.uid(), p_wedding_id, p_partner_id, p_event_date, p_location, p_budget_min, p_budget_max, p_message)
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

create or replace function public.send_proposal(
  p_quote_request_id uuid, p_title text, p_description text,
  p_price numeric, p_deposit_amount numeric, p_payment_terms text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote record;
  v_proposal_id uuid;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if v_quote is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_quote.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_quote.status not in ('pending', 'viewed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_price is null or p_price <= 0 or p_deposit_amount is null or p_deposit_amount < 0 or p_deposit_amount > p_price then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id, p_title, p_description, p_price, p_deposit_amount, p_payment_terms)
  returning id into v_proposal_id;

  update public.quote_requests set status = 'proposal_sent', updated_at = now() where id = p_quote_request_id;

  return v_proposal_id;
end;
$$;

-- RN — janela de 48h (fixa em código, ver admin-web/settings/README.md
-- para porque ainda não é configurável).
create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_proposal record;
  v_quote record;
  v_booking_id uuid;
begin
  select * into v_proposal from public.proposals where id = p_proposal_id for update;
  if v_proposal is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_proposal.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_proposal.status <> 'sent' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select * into v_quote from public.quote_requests where id = v_proposal.quote_request_id;

  update public.proposals set status = 'accepted', updated_at = now() where id = p_proposal_id;
  update public.quote_requests set status = 'accepted', updated_at = now() where id = v_proposal.quote_request_id;

  insert into public.bookings (
    couple_id, partner_id, wedding_id, proposal_id, event_date,
    total_amount, deposit_amount, hold_expires_at
  )
  values (
    v_proposal.couple_id, v_proposal.partner_id, v_quote.wedding_id, p_proposal_id,
    coalesce(v_quote.event_date, current_date),
    v_proposal.price, v_proposal.deposit_amount, now() + interval '48 hours'
  )
  returning id into v_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  return v_booking_id;
end;
$$;

-- STUB DE PAGAMENTO — substituir por webhook real do Stripe quando
-- Payments existir (ver backend/bookings/tasks.md). Só admin pode chamar;
-- não há forma automática de confirmar um sinal real ainda.
create or replace function public.admin_confirm_deposit(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.bookings where id = p_booking_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'awaiting_deposit' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.bookings set status = 'confirmed', confirmed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'deposit_confirmed_stub', 'awaiting_deposit', 'confirmed', 'admin', auth.uid(),
          '{"note": "Confirmado manualmente — sem integração de pagamento real ainda"}');
end;
$$;

-- Fecha o ciclo confirmed → completed. Só admin no MVP (RN em
-- backend/bookings/requirements.md) — sem UI de casal/parceiro para isto
-- ainda, mesma razão de admin_confirm_deposit() acima ser um stub.
create or replace function public.admin_complete_booking(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.bookings where id = p_booking_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'confirmed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.bookings set status = 'completed', completed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (p_booking_id, 'booking_completed', 'confirmed', 'completed', 'admin', auth.uid());
end;
$$;

revoke execute on function public.request_quote(uuid, uuid, date, text, numeric, numeric, text) from public, anon;
revoke execute on function public.send_proposal(uuid, text, text, numeric, numeric, text) from public, anon;
revoke execute on function public.accept_proposal(uuid) from public, anon;
revoke execute on function public.admin_confirm_deposit(uuid) from public, anon;
revoke execute on function public.admin_complete_booking(uuid) from public, anon;

grant execute on function public.request_quote(uuid, uuid, date, text, numeric, numeric, text) to authenticated;
grant execute on function public.send_proposal(uuid, text, text, numeric, numeric, text) to authenticated;
grant execute on function public.accept_proposal(uuid) to authenticated;
grant execute on function public.admin_confirm_deposit(uuid) to authenticated;
grant execute on function public.admin_complete_booking(uuid) to authenticated;

-- ============================================================
-- Expiração automática (pg_cron) — RN da janela de 48h
-- ============================================================

create extension if not exists pg_cron with schema extensions;

create or replace function public.expire_overdue_bookings()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  with expired as (
    update public.bookings
    set status = 'expired'
    where status = 'awaiting_deposit' and hold_expires_at < now()
    returning id
  )
  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type)
  select id, 'hold_expired', 'awaiting_deposit', 'expired', 'system' from expired;
end;
$$;

-- Nunca chamada por um cliente — só por pg_cron. Nenhum role de cliente
-- precisa de execute (nem authenticated: isto não corre dentro de nenhuma
-- policy RLS, ao contrário de is_admin()/is_wedding_member()/etc.).
revoke execute on function public.expire_overdue_bookings() from public, anon, authenticated;

select cron.schedule('expire-overdue-bookings', '*/15 * * * *', 'select public.expire_overdue_bookings();');
