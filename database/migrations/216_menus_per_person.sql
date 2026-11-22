-- ============================================================
-- 216 · Menus por pessoa e «Nós pagamos por»
-- ============================================================
--
-- Pedido do Rafael (2026-11-22, mockup «Escolher o menu · popup»):
--   * Já não há menu igual para todos: cada pessoa tem o seu menu.
--   * Escolhes o teu e o de quem vem no teu convite (acompanhantes e
--     filhos) e o de quem pagas a comida. Os organizadores, quando pagam a
--     mesa toda («Pagamos nós»), escolhem por qualquer pessoa do evento;
--     quando cada convite paga o seu, escolhem por si e pelas pessoas por
--     quem disseram «Nós pagamos por».
--   * As alergias pedem-se sempre (texto vazio = «Nenhuma»).
--   * Os extras são do convite: vão na linha de quem os escolheu.
--
-- Cada pessoa tem uma chave:
--   'g:<guests.id>'            convidado da lista
--   'c:<guest_companions.id>'  acompanhante de um convidado
--   'p:<profiles.id>'          organizador (ou quem entrou sem linha na lista)
-- ============================================================

begin;

-- ---------- a escolha passa a ser por pessoa ----------
alter table public.booking_guest_choices
  alter column profile_id drop not null,
  add column if not exists guest_id uuid references public.guests(id) on delete cascade,
  add column if not exists companion_id uuid references public.guest_companions(id) on delete cascade,
  add column if not exists person_name text,
  add column if not exists chosen_by uuid references public.profiles(id) on delete set null,
  add column if not exists payer_id uuid references public.profiles(id) on delete set null;

alter table public.booking_guest_choices
  add column if not exists person_key text generated always as (
    coalesce('c:' || companion_id::text, 'g:' || guest_id::text, 'p:' || profile_id::text)
  ) stored;

alter table public.booking_guest_choices drop constraint if exists booking_guest_choices_booking_id_profile_id_key;
do $$ begin
  alter table public.booking_guest_choices add constraint booking_guest_choices_person_key unique (booking_id, person_key);
exception when duplicate_object then null; end $$;

-- Quem vê: quem escolheu, quem paga, a pessoa e as partes da reserva.
drop policy if exists "Choices visible to chooser and booking parties" on public.booking_guest_choices;
create policy "Choices visible to chooser and booking parties"
  on public.booking_guest_choices for select
  using (
    profile_id = auth.uid() or chosen_by = auth.uid() or payer_id = auth.uid()
    or exists (
      select 1 from public.bookings b
      where b.id = booking_id
        and (b.partner_id = auth.uid() or b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'convidados'::text))
    )
    or public.is_admin()
  );

-- ---------- «Nós pagamos por» ----------
alter table public.quote_requests add column if not exists paid_for text[] not null default '{}';
alter table public.bookings add column if not exists paid_for text[] not null default '{}';

-- ---------- as pessoas do evento ----------
-- Organizadores, convidados que vão e os acompanhantes deles.
create or replace function public.event_menu_people(p_wedding_id uuid)
returns table (person_key text, name text, age_group text, profile_id uuid, owner_profile_id uuid, owner_name text, is_organizer boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with org as (
    select w.owner_id as uid from public.events w where w.id = p_wedding_id
    union
    select wc.user_id from public.wedding_collaborators wc
    where wc.wedding_id = p_wedding_id and wc.status = 'active'
  ),
  g as (
    select * from public.guests
    where wedding_id = p_wedding_id and rsvp_status = 'confirmed'
  )
  select 'p:' || o.uid::text, coalesce(nullif(trim(pr.full_name), ''), 'Organizador'), 'adult', o.uid, o.uid, null::text, true
  from org o
  left join public.profiles pr on pr.id = o.uid
  where o.uid is not null and not exists (select 1 from g where g.linked_profile_id = o.uid)
  union all
  -- Quem entrou pelo código sem linha na lista de convidados.
  select 'p:' || m.guest_id::text, coalesce(nullif(trim(pr.full_name), ''), 'Convidado'), 'adult', m.guest_id, m.guest_id, null::text, false
  from public.wedding_guest_members m
  left join public.profiles pr on pr.id = m.guest_id
  where m.wedding_id = p_wedding_id
    and not exists (select 1 from org where org.uid = m.guest_id)
    and not exists (select 1 from public.guests x where x.wedding_id = p_wedding_id and x.linked_profile_id = m.guest_id)
  union all
  select 'g:' || g.id::text, g.full_name, coalesce(g.age_group, 'adult'), g.linked_profile_id, g.linked_profile_id, null::text,
         exists (select 1 from org where org.uid = g.linked_profile_id)
  from g
  union all
  select 'c:' || c.id::text, c.name, coalesce(c.age_group, case when c.is_child then 'child' else 'adult' end),
         null::uuid, g.linked_profile_id, g.full_name, false
  from public.guest_companions c
  join g on g.id = c.guest_id;
$$;

revoke execute on function public.event_menu_people(uuid) from public, anon, authenticated;

-- Organizador deste evento?
create or replace function public.is_event_organizer(p_wedding_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select auth.uid() is not null and (
    exists (select 1 from public.events w where w.id = p_wedding_id and w.owner_id = auth.uid())
    or exists (select 1 from public.wedding_collaborators wc
               where wc.wedding_id = p_wedding_id and wc.user_id = auth.uid() and wc.status = 'active')
  );
$$;

-- Quem paga a comida desta pessoa (só quando cada convite paga o seu).
create or replace function public.menu_payer(p_booking public.bookings, p_key text, p_owner uuid)
returns uuid
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case
    when p_booking.payer_mode = 'organizer' or p_key = any(p_booking.paid_for) then p_booking.couple_id
    else coalesce(p_owner, p_booking.couple_id)
  end;
$$;

revoke execute on function public.menu_payer(public.bookings, text, uuid) from public, anon, authenticated;

-- As pessoas por quem posso escolher nesta reserva, com o que já têm.
create or replace function public.menu_people(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_org boolean;
begin
  select * into v_b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;
  v_org := public.is_event_organizer(v_b.wedding_id);

  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'key', p.person_key,
      'name', p.name,
      'age_group', p.age_group,
      'is_me', coalesce(p.profile_id = auth.uid(), false),
      -- Minhas: eu e quem vem comigo (tenho de escolher por elas).
      'mine', coalesce(p.profile_id = auth.uid(), false) or (p.person_key like 'c:%' and coalesce(p.owner_profile_id = auth.uid(), false)),
      'owner_name', p.owner_name,
      'pays', case when public.menu_payer(v_b, p.person_key, p.owner_profile_id) = auth.uid() then 'me' else 'other' end,
      'choice', (select jsonb_build_object('package_id', c.package_id, 'package_name', c.package_snapshot->>'name',
                                           'allergies', c.allergies, 'amount', c.amount,
                                           'extras', c.extras_snapshot)
                 from public.booking_guest_choices c
                 where c.booking_id = v_b.id and c.person_key = p.person_key)
    ) order by (p.profile_id = auth.uid()) desc nulls last, (p.owner_profile_id = auth.uid()) desc nulls last, p.name)
    from public.event_menu_people(v_b.wedding_id) p
    where p.profile_id = auth.uid()
       or (p.person_key like 'c:%' and p.owner_profile_id = auth.uid())
       or (v_org and (v_b.payer_mode = 'organizer' or p.person_key = any(v_b.paid_for)))
  ), '[]'::jsonb);
end;
$$;

grant execute on function public.menu_people(uuid) to authenticated;

-- Recalcula os pagamentos da reserva depois de uma escolha.
create or replace function public.refresh_menu_payments(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_sum numeric(12,2);
  v_due timestamptz;
  r record;
  v_payment uuid;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  select coalesce(sum(amount), 0) into v_sum from public.booking_guest_choices where booking_id = v_b.id;
  update public.bookings set total_amount = v_sum, updated_at = now() where id = v_b.id;
  v_due := (coalesce(v_b.choice_deadline, v_b.event_date) + 1)::timestamptz;

  if v_b.payer_mode = 'organizer' then
    if exists (select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'pending') then
      update public.payments set amount = v_sum, due_at = v_due, updated_at = now()
      where booking_id = v_b.id and type = 'final_payment' and status = 'pending';
    elsif v_sum > 0 then
      insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
      values (v_b.id, v_b.couple_id, v_b.partner_id, 'final_payment', v_sum, v_due, 'pending');
    end if;
    return;
  end if;

  -- Cada convite paga o seu: um pagamento por quem paga, com o que ainda
  -- não está pago.
  for r in
    select payer_id, sum(amount) as total
    from public.booking_guest_choices
    where booking_id = v_b.id and payer_id is not null
      and (payment_id is null or not exists (select 1 from public.payments p where p.id = payment_id and p.status = 'paid'))
    group by payer_id
  loop
    select id into v_payment from public.payments
    where booking_id = v_b.id and payer_id = r.payer_id and type = 'guest_share' and status = 'pending'
    order by created_at desc limit 1;
    if v_payment is null then
      insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
      values (v_b.id, r.payer_id, v_b.partner_id, 'guest_share', r.total, v_due, 'pending')
      returning id into v_payment;
    else
      update public.payments set amount = r.total, due_at = v_due, updated_at = now() where id = v_payment;
    end if;
    update public.booking_guest_choices c set payment_id = v_payment
    where c.booking_id = v_b.id and c.payer_id = r.payer_id
      and (c.payment_id is null or not exists (select 1 from public.payments p where p.id = c.payment_id and p.status = 'paid'));
    v_payment := null;
  end loop;
end;
$$;

revoke execute on function public.refresh_menu_payments(uuid) from public, anon, authenticated;

-- Escolher os menus de várias pessoas de uma vez.
--   p_people: [{ "key": "g:…", "package_id": "…", "allergies": "" }]
--   p_extra_ids: os extras do convite (vão na linha de quem escolhe).
create or replace function public.choose_menus(p_booking_id uuid, p_people jsonb, p_extra_ids uuid[])
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_org boolean;
  v_item jsonb;
  v_key text;
  v_person record;
  v_pkg public.partner_service_packages%rowtype;
  v_extras jsonb := '[]'::jsonb;
  v_extras_total numeric(12,2) := 0;
  v_anchor text;
  v_payer uuid;
  v_payment public.payments%rowtype;
begin
  select * into v_b from public.bookings where id = p_booking_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_member(v_b.wedding_id) then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_b.choice_mode <> 'each' or v_b.status <> 'confirmed' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_b.choice_deadline is not null and current_date > v_b.choice_deadline then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  if v_b.payer_mode = 'organizer' and exists (
    select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'paid'
  ) then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  if jsonb_typeof(p_people) <> 'array' or jsonb_array_length(p_people) = 0 then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  v_org := public.is_event_organizer(v_b.wedding_id);

  -- Extras do convite.
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(e.price), 0)
    into v_extras, v_extras_total
  from public.partner_service_extras e
  where e.partner_id = v_b.partner_id and e.id = any(coalesce(p_extra_ids, '{}'));

  -- Os extras ficam na linha da própria pessoa (ou na primeira da lista).
  select coalesce(
    (select x->>'key' from jsonb_array_elements(p_people) x
       join public.event_menu_people(v_b.wedding_id) p on p.person_key = x->>'key'
      where p.profile_id = auth.uid() limit 1),
    p_people->0->>'key') into v_anchor;

  for v_item in select * from jsonb_array_elements(p_people) loop
    v_key := v_item->>'key';
    select * into v_person from public.event_menu_people(v_b.wedding_id) p where p.person_key = v_key;
    if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
    if not (
      v_person.profile_id = auth.uid()
      or (v_key like 'c:%' and v_person.owner_profile_id = auth.uid())
      or (v_org and (v_b.payer_mode = 'organizer' or v_key = any(v_b.paid_for)))
    ) then
      raise exception 'forbidden' using errcode = '42501';
    end if;
    -- As alergias pedem-se sempre ('' = nenhuma).
    if v_item->'allergies' is null or jsonb_typeof(v_item->'allergies') = 'null' then
      raise exception 'allergies_required' using errcode = '22023';
    end if;
    if exists (
      select 1 from public.booking_guest_choices c join public.payments p on p.id = c.payment_id
      where c.booking_id = v_b.id and c.person_key = v_key and p.status = 'paid'
    ) then
      raise exception 'already_paid' using errcode = 'P0001';
    end if;

    select * into v_pkg from public.partner_service_packages
    where id = (v_item->>'package_id')::uuid and partner_id = v_b.partner_id;
    if not found then raise exception 'not_found' using errcode = 'P0002'; end if;

    v_payer := public.menu_payer(v_b, v_key, v_person.owner_profile_id);

    insert into public.booking_guest_choices (
      booking_id, profile_id, guest_id, companion_id, person_name, chosen_by, payer_id,
      package_id, package_snapshot, extras_snapshot, allergies, amount
    ) values (
      v_b.id,
      case when v_key like 'p:%' then substr(v_key, 3)::uuid else v_person.profile_id end,
      case when v_key like 'g:%' then substr(v_key, 3)::uuid end,
      case when v_key like 'c:%' then substr(v_key, 3)::uuid end,
      v_person.name, auth.uid(), v_payer,
      v_pkg.id,
      jsonb_build_object('id', v_pkg.id, 'name', v_pkg.name, 'description', v_pkg.description,
                         'price', v_pkg.price, 'price_unit', v_pkg.price_unit,
                         'includes', to_jsonb(v_pkg.includes), 'excludes', v_pkg.excludes),
      case when v_key = v_anchor then v_extras else '[]'::jsonb end,
      trim(v_item->>'allergies'),
      v_pkg.price + case when v_key = v_anchor then v_extras_total else 0 end
    )
    on conflict (booking_id, person_key) do update
      set package_id = excluded.package_id,
          package_snapshot = excluded.package_snapshot,
          extras_snapshot = case when v_key = v_anchor then excluded.extras_snapshot else public.booking_guest_choices.extras_snapshot end,
          amount = case when v_key = v_anchor then excluded.amount
                        else excluded.amount + coalesce((select sum((x->>'price')::numeric) from jsonb_array_elements(public.booking_guest_choices.extras_snapshot) x), 0) end,
          allergies = excluded.allergies,
          person_name = excluded.person_name,
          chosen_by = excluded.chosen_by,
          payer_id = excluded.payer_id,
          updated_at = now();
  end loop;

  perform public.refresh_menu_payments(v_b.id);

  select * into v_payment from public.payments
  where booking_id = v_b.id and payer_id = auth.uid() and status = 'pending'
    and type::text in ('guest_share', 'final_payment')
  order by created_at desc limit 1;

  return jsonb_build_object('payment_id', v_payment.id, 'amount', coalesce(v_payment.amount, 0));
end;
$$;

grant execute on function public.choose_menus(uuid, jsonb, uuid[]) to authenticated;

-- A escolha antiga (só a minha) passa pela nova.
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
  v_key text;
begin
  select * into v_b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  select p.person_key into v_key from public.event_menu_people(v_b.wedding_id) p where p.profile_id = auth.uid() limit 1;
  if v_key is null then v_key := 'p:' || auth.uid()::text; end if;
  return public.choose_menus(p_booking_id,
    jsonb_build_array(jsonb_build_object('key', v_key, 'package_id', p_package_id, 'allergies', coalesce(p_allergies, ''))),
    p_extra_ids);
end;
$$;

-- «Nós pagamos por»: só quem organiza, antes de a reserva fechar.
create or replace function public.set_paid_for(p_quote_request_id uuid, p_booking_id uuid, p_keys text[])
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding uuid;
begin
  if p_booking_id is not null then
    select wedding_id into v_wedding from public.bookings where id = p_booking_id;
  else
    select wedding_id into v_wedding from public.quote_requests where id = p_quote_request_id;
  end if;
  if v_wedding is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not public.is_event_organizer(v_wedding) then raise exception 'forbidden' using errcode = '42501'; end if;

  if p_booking_id is not null then
    update public.bookings set paid_for = coalesce(p_keys, '{}'), updated_at = now() where id = p_booking_id;
    -- Quem paga muda nas escolhas que ainda não estão pagas.
    update public.booking_guest_choices c
      set payer_id = public.menu_payer(b, c.person_key, p.owner_profile_id)
    from public.bookings b, public.event_menu_people(v_wedding) p
    where b.id = p_booking_id and c.booking_id = b.id and p.person_key = c.person_key
      and (c.payment_id is null or not exists (select 1 from public.payments x where x.id = c.payment_id and x.status = 'paid'));
    perform public.refresh_menu_payments(p_booking_id);
  else
    update public.quote_requests set paid_for = coalesce(p_keys, '{}'), updated_at = now() where id = p_quote_request_id;
  end if;
end;
$$;

grant execute on function public.set_paid_for(uuid, uuid, text[]) to authenticated;

-- As pessoas do evento para «Por quem pagamos?» (só organizadores).
create or replace function public.event_people_for_paying(p_wedding_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_event_organizer(p_wedding_id) then coalesce((
    select jsonb_agg(jsonb_build_object('key', p.person_key, 'name', p.name, 'age_group', p.age_group,
                                        'owner_name', p.owner_name, 'is_organizer', p.is_organizer)
                     order by coalesce(p.owner_name, p.name), p.owner_name nulls first, p.name)
    from public.event_menu_people(p_wedding_id) p
  ), '[]'::jsonb) else '[]'::jsonb end;
$$;

grant execute on function public.event_people_for_paying(uuid) to authenticated;

-- Aceitar a mesa: leva o «Nós pagamos por» do pedido.
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

  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at,
                                 status, confirmed_at, choice_mode, payer_mode, people, choice_deadline, paid_for)
    values (v_quote.couple_id, v_quote.partner_id, v_quote.wedding_id, v_proposal_id, v_event_date, 0, 0, now(),
            'confirmed', now(), 'each', v_quote.payer_mode, v_quote.people, v_event_date - 3, v_quote.paid_for)
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'confirmed', 'partner', auth.uid());

  return v_booking_id;
end;
$$;

-- O que tenho para escolher / pagar: agora com quantas pessoas são minhas.
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
    'my_choice', (select to_jsonb(c) - 'profile_id' from public.booking_guest_choices c
                  where c.booking_id = b.id and (c.profile_id = auth.uid()
                    or c.guest_id in (select g.id from public.guests g where g.linked_profile_id = auth.uid()))
                  limit 1),
    'menu_people', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x where (x->>'mine')::boolean),
    'menu_chosen', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x
                    where (x->>'mine')::boolean and x->'choice' <> 'null'::jsonb),
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

-- O que escolheram (parceiro e organizadores): o nome de cada pessoa.
drop function if exists public.booking_choices(uuid);
create or replace function public.booking_choices(p_booking_id uuid)
returns table (profile_id uuid, full_name text, package_name text, extras text[], allergies text, amount numeric, paid boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select c.profile_id,
         coalesce(nullif(trim(c.person_name), ''), nullif(trim(pr.full_name), ''), 'Convidado'),
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

insert into public.applied_migrations (id) values ('216') on conflict do nothing;

commit;
