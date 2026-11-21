-- 211_invite_menus_child_seats.sql
-- Mockups «Reservar por categoria» (pedido do Rafael, 2026-11-21):
--   * Menus por convite: em «cada um escolhe», quem recebe o convite escolhe
--     o menu de cada pessoa do seu convite (ele, acompanhantes e filhos). O
--     organizador nunca escolhe pelos outros; vê «Menus da mesa» (quantos
--     já escolheram, por convite, total previsto) e pode lembrar quem falta.
--   * Cadeirinhas: na resposta ao convite, quem leva crianças diz quantas
--     cadeirinhas precisam; o transporte mostra «Pedidas pelos convidados».

begin;

-- ---------- cadeirinhas ----------
alter table public.guests
  add column if not exists child_seats integer not null default 0;
do $$ begin
  alter table public.guests add constraint guests_child_seats_check check (child_seats between 0 and 10);
exception when duplicate_object then null; end $$;

-- O convite deste convidado: pelo link de resposta (token) ou pela conta.
create or replace function public.my_invite_guest(p_token uuid, p_wedding_id uuid)
returns uuid
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select g.id from public.guests g
  where (p_token is not null and g.rsvp_token = p_token)
     or (p_token is null and auth.uid() is not null and g.wedding_id = p_wedding_id and g.linked_profile_id = auth.uid())
  order by g.created_at
  limit 1;
$$;

revoke all on function public.my_invite_guest(uuid, uuid) from public, anon, authenticated;

create or replace function public.set_my_child_seats(p_token uuid, p_wedding_id uuid, p_count integer)
returns integer
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest uuid := public.my_invite_guest(p_token, p_wedding_id);
  v_kids integer;
  v_n integer;
begin
  if v_guest is null then return 0; end if;
  select count(*) into v_kids from public.guest_companions where guest_id = v_guest and age_group = 'child';
  v_n := least(greatest(coalesce(p_count, 0), 0), v_kids, 10);
  update public.guests set child_seats = v_n where id = v_guest;
  return v_n;
end;
$$;

grant execute on function public.set_my_child_seats(uuid, uuid, integer) to anon, authenticated;

create or replace function public.my_child_seats(p_token uuid, p_wedding_id uuid)
returns integer
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce((select child_seats from public.guests where id = public.my_invite_guest(p_token, p_wedding_id)), 0);
$$;

grant execute on function public.my_child_seats(uuid, uuid) to anon, authenticated;

-- Total pedido no evento (para o transporte): só quem confirmou.
create or replace function public.event_child_seats(p_wedding_id uuid)
returns integer
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.is_event_member(p_wedding_id) or public.is_admin() then
    coalesce((select sum(least(g.child_seats,
                                (select count(*) from public.guest_companions c where c.guest_id = g.id and c.age_group = 'child')))::int
              from public.guests g
              where g.wedding_id = p_wedding_id and g.rsvp_status = 'confirmed'), 0)
  else 0 end;
$$;

grant execute on function public.event_child_seats(uuid) to authenticated;

-- ---------- menus por convite ----------
alter table public.booking_guest_choices
  add column if not exists people jsonb not null default '[]'::jsonb;

-- As pessoas do meu convite: eu e os meus acompanhantes.
create or replace function public.my_invite_people(p_wedding_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest public.guests%rowtype;
  v_name text;
begin
  if auth.uid() is null or not public.is_event_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v_guest from public.guests
  where wedding_id = p_wedding_id and linked_profile_id = auth.uid()
  order by created_at limit 1;
  select coalesce(nullif(trim(full_name), ''), 'Tu') into v_name from public.profiles where id = auth.uid();
  return jsonb_build_array(jsonb_build_object(
           'key', 'self', 'name', coalesce(nullif(trim(v_guest.full_name), ''), v_name, 'Tu'),
           'age_group', coalesce(v_guest.age_group, 'adult'), 'self', true))
      || coalesce((
           select jsonb_agg(jsonb_build_object(
                    'key', 'c:' || c.name, 'name', c.name,
                    'age_group', coalesce(c.age_group, case when c.is_child then 'child' else 'adult' end),
                    'self', false) order by c.created_at)
           from public.guest_companions c where v_guest.id is not null and c.guest_id = v_guest.id
         ), '[]'::jsonb);
end;
$$;

grant execute on function public.my_invite_people(uuid) to authenticated;

-- Escolhe o menu de cada pessoa do meu convite. p_menus =
-- [{"key": "self" | "c:<nome>", "package_id": uuid}]. Os extras e as
-- alergias são do convite. Igual a `choose_my_menu` (190) no resto.
create or replace function public.choose_invite_menus(
  p_booking_id uuid,
  p_menus jsonb,
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
  v_people jsonb;
  v_m jsonb;
  v_p jsonb;
  v_pkg public.partner_service_packages%rowtype;
  v_first public.partner_service_packages%rowtype;
  v_rows jsonb := '[]'::jsonb;
  v_keys text[] := '{}';
  v_menus_total numeric(12,2) := 0;
  v_pkg_ids uuid[] := '{}';
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
  if v_b.payer_mode = 'organizer' and exists (
    select 1 from public.payments where booking_id = v_b.id and type = 'final_payment' and status = 'paid'
  ) then
    raise exception 'closed' using errcode = 'P0001';
  end if;
  if jsonb_typeof(p_menus) <> 'array' or jsonb_array_length(p_menus) = 0 then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  v_people := public.my_invite_people(v_b.wedding_id);

  for v_m in select * from jsonb_array_elements(p_menus) loop
    select x into v_p from jsonb_array_elements(v_people) x where x->>'key' = v_m->>'key' limit 1;
    if v_p is null or (v_m->>'key') = any(v_keys) then
      raise exception 'invalid_state' using errcode = 'P0001';
    end if;
    v_keys := v_keys || (v_m->>'key');
    select * into v_pkg from public.partner_service_packages
    where id = (v_m->>'package_id')::uuid and partner_id = v_b.partner_id;
    if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
    if v_first.id is null then v_first := v_pkg; end if;
    if (v_m->>'key') = 'self' then v_first := v_pkg; end if;
    v_pkg_ids := v_pkg_ids || v_pkg.id;
    v_menus_total := v_menus_total + v_pkg.price;
    v_rows := v_rows || jsonb_build_object(
      'key', v_p->>'key', 'name', v_p->>'name', 'age_group', v_p->>'age_group',
      'package_id', v_pkg.id, 'package_name', v_pkg.name, 'price', v_pkg.price);
  end loop;

  -- Extras do convite: os que servem a algum dos menus escolhidos.
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(e.price), 0)
    into v_extras, v_extras_total
  from public.partner_service_extras e
  where e.partner_id = v_b.partner_id
    and e.id = any(coalesce(p_extra_ids, '{}'))
    and (cardinality(e.package_ids) = 0 or e.package_ids && v_pkg_ids);

  v_amount := v_menus_total + v_extras_total;

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

  insert into public.booking_guest_choices (booking_id, profile_id, package_id, package_snapshot, extras_snapshot, allergies, amount, payment_id, people)
  values (
    v_b.id, auth.uid(), v_first.id,
    jsonb_build_object('id', v_first.id, 'name', v_first.name, 'description', v_first.description,
                       'price', v_first.price, 'price_unit', v_first.price_unit,
                       'includes', to_jsonb(v_first.includes), 'excludes', v_first.excludes),
    v_extras, nullif(trim(coalesce(p_allergies, '')), ''), v_amount, v_payment, v_rows
  )
  on conflict (booking_id, profile_id) do update
    set package_id = excluded.package_id,
        package_snapshot = excluded.package_snapshot,
        extras_snapshot = excluded.extras_snapshot,
        allergies = excluded.allergies,
        amount = excluded.amount,
        payment_id = excluded.payment_id,
        people = excluded.people,
        updated_at = now();

  select coalesce(sum(amount), 0) into v_sum from public.booking_guest_choices where booking_id = v_b.id;
  update public.bookings set total_amount = v_sum, updated_at = now() where id = v_b.id;

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

grant execute on function public.choose_invite_menus(uuid, jsonb, uuid[], text) to authenticated;

-- «O que escolheram» (parceiro e organizadores): com várias pessoas, o
-- menu de cada uma («Carne ×2 · Infantil ×1»).
create or replace function public.booking_choices(p_booking_id uuid)
returns table (profile_id uuid, full_name text, package_name text, extras text[], allergies text, amount numeric, paid boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select c.profile_id, coalesce(nullif(trim(pr.full_name), ''), 'Convidado'),
         case when jsonb_array_length(c.people) > 1 then
           (select string_agg(n || case when k > 1 then ' ×' || k else '' end, ' · ' order by k desc, n)
              from (select x->>'package_name' as n, count(*) as k from jsonb_array_elements(c.people) x group by 1) s)
         else c.package_snapshot->>'name' end,
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

-- «Menus da mesa» (organizador): por convite, quantos já escolheram.
create or replace function public.booking_menus(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_invites jsonb;
  v_people integer;
  v_chosen integer;
  v_total numeric;
  v_mine boolean;
begin
  select * into v_b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not (v_b.couple_id = auth.uid() or public.wedding_can(v_b.wedding_id, 'convidados'::text) or public.is_admin()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  with inv as (
    -- Convidados que confirmaram (com a conta ligada ou não).
    select g.linked_profile_id as profile_id,
           g.full_name as name,
           1 + (select count(*) from public.guest_companions c where c.guest_id = g.id) as people,
           (select string_agg(c.name, ', ' order by c.created_at) from public.guest_companions c where c.guest_id = g.id) as others
    from public.guests g
    where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
    union all
    -- Quem escolheu sem ser da lista (os organizadores).
    select ch.profile_id, coalesce(nullif(trim(pr.full_name), ''), 'Organizador'),
           greatest(jsonb_array_length(ch.people), 1), null
    from public.booking_guest_choices ch
    left join public.profiles pr on pr.id = ch.profile_id
    where ch.booking_id = v_b.id
      and not exists (select 1 from public.guests g where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
                      and g.linked_profile_id = ch.profile_id)
  ), inv_rows as (
    select i.*, ch.amount,
           case when ch.profile_id is null then 0 else greatest(jsonb_array_length(ch.people), 1) end as chosen,
           i.profile_id = auth.uid() as mine
    from inv i
    left join public.booking_guest_choices ch on ch.booking_id = v_b.id and ch.profile_id = i.profile_id
  )
  select coalesce(jsonb_agg(jsonb_build_object(
           'name', name, 'others', others, 'people', people, 'chosen', least(chosen, people),
           'has_app', profile_id is not null, 'mine', coalesce(mine, false), 'amount', amount)
           order by (chosen >= people), name), '[]'::jsonb),
         coalesce(sum(people), 0), coalesce(sum(least(chosen, people)), 0), coalesce(sum(amount), 0),
         coalesce(bool_or(mine), false)
    into v_invites, v_people, v_chosen, v_total, v_mine
  from inv_rows;

  return jsonb_build_object(
    'deadline', v_b.choice_deadline,
    'people', coalesce(v_b.people, v_people),
    'chosen', v_chosen,
    'total', v_total,
    'invites', v_invites,
    'i_chose', exists (select 1 from public.booking_guest_choices where booking_id = v_b.id and profile_id = auth.uid())
  );
end;
$$;

grant execute on function public.booking_menus(uuid) to authenticated;

-- «Lembrar»: avisa quem confirmou, tem conta e ainda não escolheu.
create or replace function public.remind_menu_choices(p_booking_id uuid)
returns integer
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings%rowtype;
  v_partner text;
  v_n integer;
begin
  select * into v_b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not (v_b.couple_id = auth.uid() or public.wedding_can(v_b.wedding_id, 'convidados'::text)) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_b.choice_mode <> 'each' or v_b.status <> 'confirmed' then return 0; end if;
  select business_name into v_partner from public.partner_profiles where id = v_b.partner_id;

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select distinct g.linked_profile_id, 'event_reminder', 'Escolhe o teu menu', coalesce(v_partner, 'Restaurante'),
         'Escolhe o menu de quem vem no teu convite'
         || case when v_b.choice_deadline is not null then ' até ' || to_char(v_b.choice_deadline, 'DD/MM') else '' end || '.',
         '/guest-home/' || v_b.wedding_id
  from public.guests g
  where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed' and g.linked_profile_id is not null
    and g.linked_profile_id <> auth.uid()
    and not exists (select 1 from public.booking_guest_choices ch where ch.booking_id = v_b.id and ch.profile_id = g.linked_profile_id);
  get diagnostics v_n = row_count;
  return v_n;
end;
$$;

grant execute on function public.remind_menu_choices(uuid) to authenticated;

insert into public.applied_migrations (id) values ('211') on conflict do nothing;

commit;
