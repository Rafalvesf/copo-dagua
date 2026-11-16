-- ============================================================
-- 190 · Como escolhem / Quem paga (cada um escolhe e paga o seu)
-- ============================================================
--
-- Mockups «Restaurante · perfil», «Parceiro · Pedido com menu» e
-- «Parceiro · mesa em que cada um escolhe» (2026-11-15). Precisa da 188.
--
--   * Como escolhem: «Igual para todos» (o organizador escolhe um menu,
--     como na 188) ou «Cada um escolhe» (o organizador reserva a mesa e
--     cada convidado escolhe o seu menu e extras na app).
--   * Quem paga: «Pagamos nós» (como hoje) ou «Cada um paga o seu»
--     (cada convidado paga a sua parte na app, `payments.type =
--     'guest_share'`, mesmo checkout da Stripe que o sinal).
--   * Mesa «cada um escolhe»: a reserva é grátis (sem sinal). A escolha
--     fecha 3 dias antes do evento. Se pagam os organizadores, o total
--     vai somando e fica um pagamento final pendente para eles.
--   * Menu igual para todos e cada um paga: a reserva fica confirmada
--     sem sinal e cada convidado paga total ÷ pessoas, 3 dias antes.
-- ============================================================

-- Novo tipo de pagamento. Fica fora do begin/commit; as funções abaixo
-- só o usam em tempo de execução (ou como texto), por isso podem ser
-- criadas na mesma corrida.
alter type public.payment_type add value if not exists 'guest_share';

begin;

-- ---------- modos no pedido e na reserva ----------
alter table public.quote_requests
  add column if not exists choice_mode text not null default 'same',
  add column if not exists payer_mode text not null default 'organizer';

alter table public.bookings
  add column if not exists choice_mode text not null default 'same',
  add column if not exists payer_mode text not null default 'organizer',
  add column if not exists people integer,
  add column if not exists choice_deadline date;

do $$ begin
  alter table public.quote_requests add constraint quote_requests_choice_mode_check check (choice_mode in ('same', 'each'));
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.quote_requests add constraint quote_requests_payer_mode_check check (payer_mode in ('organizer', 'each'));
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.bookings add constraint bookings_choice_mode_check check (choice_mode in ('same', 'each'));
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.bookings add constraint bookings_payer_mode_check check (payer_mode in ('organizer', 'each'));
exception when duplicate_object then null; end $$;

-- ---------- a escolha de cada convidado ----------
create table if not exists public.booking_guest_choices (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  package_id uuid references public.partner_service_packages(id) on delete set null,
  -- Cópia do menu e dos extras tal como estavam quando escolheu.
  package_snapshot jsonb not null,
  extras_snapshot jsonb not null default '[]',
  allergies text,
  amount numeric(12,2) not null default 0,
  payment_id uuid references public.payments(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (booking_id, profile_id)
);

alter table public.booking_guest_choices enable row level security;

drop policy if exists "Choices visible to chooser and booking parties" on public.booking_guest_choices;
create policy "Choices visible to chooser and booking parties"
  on public.booking_guest_choices for select
  using (
    profile_id = auth.uid()
    or exists (
      select 1 from public.bookings b
      where b.id = booking_id
        and (b.partner_id = auth.uid() or b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'convidados'::text))
    )
    or public.is_admin()
  );

-- Escrita só pelas funções abaixo.
grant select on public.booking_guest_choices to authenticated;

-- ---------- pedir um pacote: agora com «quem paga» ----------
drop function if exists public.request_package(uuid, uuid, uuid, uuid[], integer, date, text);

create or replace function public.request_package(
  p_partner_id uuid,
  p_wedding_id uuid,
  p_package_id uuid,
  p_extra_ids uuid[],
  p_people integer,
  p_event_date date,
  p_message text,
  p_payer_mode text default 'organizer'
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
  v_min_days integer;
  v_pkg public.partner_service_packages%rowtype;
  v_people integer;
  v_extras jsonb;
  v_total numeric(12,2);
  v_extras_total numeric(12,2);
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if not public.wedding_can(p_wedding_id, 'conversas'::text) then raise exception 'forbidden' using errcode = '42501'; end if;
  if coalesce(p_payer_mode, 'organizer') not in ('organizer', 'each') then raise exception 'validation_error' using errcode = '22023'; end if;
  if not public.is_partner_profile_visible(p_partner_id) then raise exception 'not_found' using errcode = 'P0002'; end if;
  if public.partner_blocked_by_secret(p_wedding_id, p_partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  select * into v_pkg from public.partner_service_packages where id = p_package_id and partner_id = p_partner_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;

  if exists (
    select 1 from public.quote_requests q
    where q.wedding_id = p_wedding_id and q.partner_id = p_partner_id
      and q.status in ('pending', 'viewed', 'proposal_sent')
  ) or exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  ) then
    raise exception 'quote_already_requested' using errcode = 'P0009';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  v_people := greatest(coalesce(p_people, 1), 1);
  if v_pkg.min_people is not null and v_people < v_pkg.min_people then
    raise exception 'too_few_people' using errcode = '22023';
  end if;
  if v_pkg.max_people is not null and v_people > v_pkg.max_people then
    raise exception 'too_many_people' using errcode = '22023';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(case e.price_unit when 'person' then e.price * v_people else e.price end), 0)
    into v_extras, v_extras_total
  from public.partner_service_extras e
  where e.partner_id = p_partner_id
    and e.id = any(coalesce(p_extra_ids, '{}'))
    and (cardinality(e.package_ids) = 0 or p_package_id = any(e.package_ids));

  v_total := case v_pkg.price_unit when 'person' then v_pkg.price * v_people else v_pkg.price end + v_extras_total;

  insert into public.quote_requests (
    couple_id, wedding_id, partner_id, event_date, message,
    package_id, package_snapshot, extras_snapshot, people, total_amount,
    choice_mode, payer_mode
  ) values (
    auth.uid(), p_wedding_id, p_partner_id, p_event_date, nullif(trim(coalesce(p_message, '')), ''),
    p_package_id,
    jsonb_build_object(
      'id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
      'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
      'is_starting_price', v_pkg.is_starting_price,
      'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes
    ),
    v_extras, v_people,
    case when v_pkg.is_starting_price then null else v_total end,
    'same', coalesce(p_payer_mode, 'organizer')
  )
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

grant execute on function public.request_package(uuid, uuid, uuid, uuid[], integer, date, text, text) to authenticated;

-- ---------- reservar mesa: cada um escolhe ----------
create or replace function public.request_table(
  p_partner_id uuid,
  p_wedding_id uuid,
  p_people integer,
  p_event_date date,
  p_message text,
  p_payer_mode text default 'organizer'
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
  v_min_days integer;
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if not public.wedding_can(p_wedding_id, 'conversas'::text) then raise exception 'forbidden' using errcode = '42501'; end if;
  if coalesce(p_payer_mode, 'organizer') not in ('organizer', 'each') then raise exception 'validation_error' using errcode = '22023'; end if;
  if not public.is_partner_profile_visible(p_partner_id) then raise exception 'not_found' using errcode = 'P0002'; end if;
  if public.partner_blocked_by_secret(p_wedding_id, p_partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;
  -- Só parceiros com carta (menus por pessoa).
  if not exists (
    select 1 from public.partner_service_packages
    where partner_id = p_partner_id and price_unit = 'person' and not is_starting_price
  ) then
    raise exception 'no_menus' using errcode = 'P0002';
  end if;

  if exists (
    select 1 from public.quote_requests q
    where q.wedding_id = p_wedding_id and q.partner_id = p_partner_id
      and q.status in ('pending', 'viewed', 'proposal_sent')
  ) or exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  ) then
    raise exception 'quote_already_requested' using errcode = 'P0009';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  insert into public.quote_requests (
    couple_id, wedding_id, partner_id, event_date, message, people, choice_mode, payer_mode
  ) values (
    auth.uid(), p_wedding_id, p_partner_id, p_event_date, nullif(trim(coalesce(p_message, '')), ''),
    greatest(coalesce(p_people, 1), 1), 'each', coalesce(p_payer_mode, 'organizer')
  )
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

grant execute on function public.request_table(uuid, uuid, integer, date, text, text) to authenticated;

-- ---------- aceitar pacote: sem sinal quando cada um paga ----------
create or replace function public.accept_package_request(p_quote_request_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote public.quote_requests%rowtype;
  v_deposit_pct numeric;
  v_deposit numeric;
  v_proposal_id uuid;
  v_booking_id uuid;
  v_hold_hours integer;
  v_hold_expires_at timestamptz;
  v_event_date date;
  v_desc text;
  v_each boolean;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_quote.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_quote.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_quote.package_snapshot is null or v_quote.total_amount is null or v_quote.total_amount <= 0 then
    raise exception 'needs_proposal' using errcode = 'P0001';
  end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  if public.partner_blocked_by_secret(v_quote.wedding_id, v_quote.partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  v_event_date := coalesce(v_quote.event_date, current_date);
  if exists (select 1 from public.bookings where partner_id = v_quote.partner_id and event_date = v_event_date and status in ('awaiting_deposit', 'confirmed')) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;

  v_each := v_quote.payer_mode = 'each';
  select deposit_percentage, default_booking_hold_hours into v_deposit_pct, v_hold_hours from public.platform_settings where id = 1;
  -- Cada um paga o seu: sem sinal, cada convidado paga a sua parte.
  v_deposit := case when v_each then 0 else round(v_quote.total_amount * (v_deposit_pct / 100.0), 2) end;
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;

  select string_agg(x, ' · ') into v_desc
  from jsonb_array_elements_text(coalesce(v_quote.package_snapshot->'includes', '[]'::jsonb)) as x;

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable, status)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id,
          v_quote.package_snapshot->>'name', coalesce(v_desc, v_quote.package_snapshot->>'description', ''),
          v_quote.total_amount, v_deposit, null, true, 'accepted')
  returning id into v_proposal_id;

  update public.quote_requests set status = 'accepted', updated_at = now() where id = p_quote_request_id;

  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at,
                                 status, confirmed_at, choice_mode, payer_mode, people, choice_deadline)
    values (v_quote.couple_id, v_quote.partner_id, v_quote.wedding_id, v_proposal_id, v_event_date, v_quote.total_amount, v_deposit, v_hold_expires_at,
            case when v_each then 'confirmed' else 'awaiting_deposit' end::public.booking_status,
            case when v_each then now() end,
            'same', v_quote.payer_mode, v_quote.people, v_event_date - 3)
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, (case when v_each then 'confirmed' else 'awaiting_deposit' end)::public.booking_status, 'partner', auth.uid());

  if not v_each then
    insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
    values (v_booking_id, v_quote.couple_id, v_quote.partner_id, 'deposit', v_deposit, v_hold_expires_at, 'pending');
  end if;

  return v_booking_id;
end;
$$;

grant execute on function public.accept_package_request(uuid) to authenticated;

-- ---------- aceitar mesa «cada um escolhe» ----------
create or replace function public.accept_table_request(p_quote_request_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote public.quote_requests%rowtype;
  v_proposal_id uuid;
  v_booking_id uuid;
  v_event_date date;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_quote.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_quote.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_quote.choice_mode <> 'each' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  if public.partner_blocked_by_secret(v_quote.wedding_id, v_quote.partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  v_event_date := coalesce(v_quote.event_date, current_date);
  if exists (select 1 from public.bookings where partner_id = v_quote.partner_id and event_date = v_event_date and status in ('awaiting_deposit', 'confirmed')) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable, status)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id,
          'Mesa para ' || coalesce(v_quote.people, 1),
          'Cada um escolhe o seu menu e extras na app.', 0, 0, null, true, 'accepted')
  returning id into v_proposal_id;

  update public.quote_requests set status = 'accepted', updated_at = now() where id = p_quote_request_id;

  -- A reserva é grátis: confirmada já, o total vai somando com as escolhas.
  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at,
                                 status, confirmed_at, choice_mode, payer_mode, people, choice_deadline)
    values (v_quote.couple_id, v_quote.partner_id, v_quote.wedding_id, v_proposal_id, v_event_date, 0, 0, now(),
            'confirmed', now(), 'each', v_quote.payer_mode, v_quote.people, v_event_date - 3)
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'confirmed', 'partner', auth.uid());

  return v_booking_id;
end;
$$;

grant execute on function public.accept_table_request(uuid) to authenticated;

-- Convidado (com conta) ou organizador deste evento?
create or replace function public.is_event_member(p_wedding_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select auth.uid() is not null and (
    public.wedding_can(p_wedding_id, 'convidados'::text)
    or exists (select 1 from public.weddings w where w.id = p_wedding_id and w.owner_id = auth.uid())
    or exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding_id and m.guest_id = auth.uid())
    or exists (select 1 from public.guests g where g.wedding_id = p_wedding_id and g.linked_profile_id = auth.uid() and g.rsvp_status <> 'declined')
  );
$$;

-- ---------- o convidado escolhe o seu menu ----------
create or replace function public.choose_my_menu(
  p_booking_id uuid,
  p_package_id uuid,
  p_extra_ids uuid[],
  p_allergies text
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_pkg public.partner_service_packages%rowtype;
  v_extras jsonb;
  v_extras_total numeric(12,2);
  v_amount numeric(12,2);
  v_choice public.booking_guest_choices%rowtype;
  v_payment uuid;
  v_sum numeric(12,2);
  v_due timestamptz;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_b.choice_mode <> 'each' or v_b.status <> 'confirmed' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_b.choice_deadline is not null and current_date > v_b.choice_deadline then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  -- Os organizadores já pagaram o total: a escolha fechou.
  if v_b.payer_mode = 'organizer' and exists (
    select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'paid'
  ) then
    raise exception 'closed' using errcode = 'P0001';
  end if;

  select * into v_pkg from public.partner_service_packages where id = p_package_id and partner_id = v_b.partner_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(e.price), 0)
    into v_extras, v_extras_total
  from public.partner_service_extras e
  where e.partner_id = v_b.partner_id
    and e.id = any(coalesce(p_extra_ids, '{}'))
    and (cardinality(e.package_ids) = 0 or p_package_id = any(e.package_ids));

  v_amount := v_pkg.price + v_extras_total;

  select * into v_choice from public.booking_guest_choices where booking_id = v_b.id and profile_id = auth.uid() for update;
  if found and v_choice.payment_id is not null
     and exists (select 1 from public.payments where id = v_choice.payment_id and status = 'paid') then
    raise exception 'already_paid' using errcode = 'P0001';
  end if;

  v_due := (coalesce(v_b.choice_deadline, v_b.event_date) + 1)::timestamptz;

  if v_b.payer_mode = 'each' then
    v_payment := v_choice.payment_id;
    if v_payment is not null and exists (select 1 from public.payments where id = v_payment and status = 'pending') then
      update public.payments set amount = v_amount, due_at = v_due, updated_at = now() where id = v_payment;
    else
      insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
      values (v_b.id, auth.uid(), v_b.partner_id, 'guest_share', v_amount, v_due, 'pending')
      returning id into v_payment;
    end if;
  end if;

  insert into public.booking_guest_choices (booking_id, profile_id, package_id, package_snapshot, extras_snapshot, allergies, amount, payment_id)
  values (
    v_b.id, auth.uid(), v_pkg.id,
    jsonb_build_object('id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
                       'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
                       'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes),
    v_extras, nullif(trim(coalesce(p_allergies, '')), ''), v_amount, v_payment
  )
  on conflict (booking_id, profile_id) do update
    set package_id = excluded.package_id,
        package_snapshot = excluded.package_snapshot,
        extras_snapshot = excluded.extras_snapshot,
        allergies = excluded.allergies,
        amount = excluded.amount,
        payment_id = excluded.payment_id,
        updated_at = now();

  -- O total da reserva vai somando com as escolhas.
  select coalesce(sum(amount), 0) into v_sum from public.booking_guest_choices where booking_id = v_b.id;
  update public.bookings set total_amount = v_sum, updated_at = now() where id = v_b.id;

  -- Pagam os organizadores: um pagamento final pendente com o total.
  if v_b.payer_mode = 'organizer' then
    if exists (select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'pending') then
      update public.payments set amount = v_sum, due_at = v_due, updated_at = now()
      where booking_id = v_b.id and type = 'final_payment' and status = 'pending';
    else
      insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
      values (v_b.id, v_b.couple_id, v_b.partner_id, 'final_payment', v_sum, v_due, 'pending');
    end if;
  end if;

  return jsonb_build_object('payment_id', v_payment, 'amount', v_amount);
end;
$$;

grant execute on function public.choose_my_menu(uuid, uuid, uuid[], text) to authenticated;

-- ---------- menu igual para todos, cada um paga: a minha parte ----------
create or replace function public.my_share_payment(p_booking_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_amount numeric(12,2);
  v_payment public.payments%rowtype;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_b.choice_mode <> 'same' or v_b.payer_mode <> 'each' or v_b.status <> 'confirmed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select * into v_payment from public.payments
  where booking_id = v_b.id and payer_id = auth.uid() and type = 'guest_share' and status in ('pending', 'paid')
  order by created_at desc limit 1;
  if found then
    return jsonb_build_object('payment_id', v_payment.id, 'amount', v_payment.amount, 'status', v_payment.status);
  end if;

  v_amount := round(v_b.total_amount / greatest(coalesce(v_b.people, 1), 1), 2);
  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (v_b.id, auth.uid(), v_b.partner_id, 'guest_share', v_amount,
          (coalesce(v_b.choice_deadline, v_b.event_date) + 1)::timestamptz, 'pending')
  returning * into v_payment;

  return jsonb_build_object('payment_id', v_payment.id, 'amount', v_payment.amount, 'status', v_payment.status);
end;
$$;

grant execute on function public.my_share_payment(uuid) to authenticated;

-- ---------- o que o convidado tem para escolher / pagar ----------
create or replace function public.my_event_tables(p_wedding_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'booking_id', b.id,
    'partner_id', b.partner_id,
    'partner_name', pp.business_name,
    'choice_mode', b.choice_mode,
    'payer_mode', b.payer_mode,
    'people', b.people,
    'event_date', b.event_date,
    'choice_deadline', b.choice_deadline,
    'total_amount', b.total_amount,
    'share_amount', case when b.choice_mode = 'same' then round(b.total_amount / greatest(coalesce(b.people, 1), 1), 2) end,
    'package', q.package_snapshot,
    'extras', q.extras_snapshot,
    'my_choice', (select to_jsonb(c) - 'profile_id' from public.booking_guest_choices c where c.booking_id = b.id and c.profile_id = auth.uid()),
    'my_payment', (select jsonb_build_object('id', p.id, 'amount', p.amount, 'status', p.status)
                   from public.payments p
                   where p.booking_id = b.id and p.payer_id = auth.uid() and p.type::text = 'guest_share' and p.status in ('pending', 'paid')
                   order by p.created_at desc limit 1)
  ) order by b.event_date), '[]'::jsonb)
  from public.bookings b
  join public.partner_profiles pp on pp.id = b.partner_id
  left join public.proposals pr on pr.id = b.proposal_id
  left join public.quote_requests q on q.id = pr.quote_request_id
  where b.wedding_id = p_wedding_id
    and b.status = 'confirmed'
    and (b.choice_mode = 'each' or b.payer_mode = 'each')
    and public.is_event_member(p_wedding_id);
$$;

grant execute on function public.my_event_tables(uuid) to authenticated;

-- ---------- o que escolheram (parceiro e organizadores) ----------
create or replace function public.booking_choices(p_booking_id uuid)
returns table (profile_id uuid, full_name text, package_name text, extras text[], allergies text, amount numeric, paid boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select c.profile_id, coalesce(nullif(trim(pr.full_name), ''), 'Convidado'),
         c.package_snapshot->>'name',
         array(select x->>'name' from jsonb_array_elements(c.extras_snapshot) x),
         c.allergies, c.amount,
         coalesce(p.status = 'paid', false)
  from public.booking_guest_choices c
  join public.bookings b on b.id = c.booking_id
  left join public.profiles pr on pr.id = c.profile_id
  left join public.payments p on p.id = c.payment_id
  where c.booking_id = p_booking_id
    and (b.partner_id = auth.uid() or b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'convidados'::text) or public.is_admin())
  order by 2;
$$;

grant execute on function public.booking_choices(uuid) to authenticated;

-- ---------- notificação de pagamento: a parte de um convidado ----------
create or replace function public.notify_payment_paid()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  b record;
  v_partner text;
  v_label text;
begin
  if new.status <> 'paid' or old.status = 'paid' then return new; end if;
  select * into b from public.bookings where id = new.booking_id;
  if b is null then return new; end if;
  select business_name into v_partner from public.partner_profiles where id = b.partner_id;
  if new.type::text = 'guest_share' then
    -- Só o parceiro é avisado; o convidado vê a parte paga no evento.
    insert into public.notifications (partner_id, type, title, subtitle, body, link)
    values (b.partner_id, 'payment_received', 'Parte de convidado recebida', public.couple_label(b.wedding_id),
            public.fmt_eur(new.amount), '/partner-payments');
    return new;
  end if;
  v_label := case when new.type = 'deposit' then 'Sinal' else 'Restante' end;
  insert into public.notifications (partner_id, type, title, subtitle, body, link)
  values (b.partner_id, 'payment_received', v_label || ' recebido', public.couple_label(b.wedding_id),
          public.fmt_eur(new.amount), '/partner-payments');
  insert into public.notifications (wedding_id, type, title, subtitle, body, link)
  values (b.wedding_id, 'payment_confirmed', v_label || ' pago', coalesce(v_partner, 'Parceiro'),
          public.fmt_eur(new.amount) || '. Obrigado!', '/bookings');
  return new;
end;
$$;

insert into public.applied_migrations (id) values ('190') on conflict do nothing;

commit;
