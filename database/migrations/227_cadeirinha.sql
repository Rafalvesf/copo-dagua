-- 227 · Cadeirinha (pedido do Rafael, 2026-11-23). O convidado diz se a
-- criança que leva precisa de cadeirinha à mesa; o organizador vê-o na
-- ficha do convidado e os parceiros que tratam das pessoas (comida,
-- transporte, aluguer, animação infantil) veem quantas são e, nas mesas,
-- de quem é. Precisa da 226.

alter table public.guest_companions add column if not exists high_chair boolean not null default false;

-- RSVP: guarda e devolve a cadeirinha de cada acompanhante.
create or replace function public.submit_rsvp_full(p_token uuid, p_attending boolean, p_menu text, p_dietary text, p_age_group text, p_side text, p_group_label text, p_message text, p_companions jsonb)
 returns void
 language plpgsql
 security definer
 set search_path to 'public', 'pg_temp'
as $function$
declare
  v_guest public.guests%rowtype;
  v_c jsonb;
  v_req uuid;
  v_max int;
  v_kids_free boolean := false;
begin
  select * into v_guest from public.guests where rsvp_token = p_token;
  if not found then
    select r.id, greatest(coalesce(w.default_max_companions, 0), 0),
           coalesce((w.guest_sections->>'opt_kids_free')::boolean, false)
    into v_req, v_max, v_kids_free
    from public.guest_join_requests r
    join public.events w on w.id = r.wedding_id
    where r.rsvp_token = p_token;
    if v_req is null then
      raise exception 'not_found' using errcode = 'P0002';
    end if;
    -- Crianças à parte (166): não contam para o limite quando o
    -- organizador liga essa opção.
    if p_attending and jsonb_typeof(coalesce(p_companions, '[]'::jsonb)) = 'array'
       and (select count(*) from jsonb_array_elements(coalesce(p_companions, '[]'::jsonb)) c
            where not (v_kids_free and coalesce(c->>'age_group', 'adult') = 'child')) > v_max then
      raise exception 'too_many_companions' using errcode = '22023';
    end if;
    update public.guest_join_requests
    set answers = jsonb_build_object(
          'attending', p_attending,
          'menu', p_menu,
          'dietary', p_dietary,
          'age_group', p_age_group,
          'side', p_side,
          'group_label', p_group_label,
          'message', p_message,
          'companions', case when p_attending then coalesce(p_companions, '[]'::jsonb) else '[]'::jsonb end,
          'answered_at', now()
        )
    where id = v_req;
    return;
  end if;

  update public.guests
  set rsvp_status = (case when p_attending then 'confirmed' else 'declined' end)::public.rsvp_status,
      menu_selection = case when p_attending then p_menu else null end,
      dietary_restrictions = case when p_attending then p_dietary else null end,
      age_group = case when p_age_group in ('child', 'teen', 'adult', 'senior') then p_age_group else age_group end,
      side = coalesce(p_side::public.guest_side, side),
      group_label = coalesce(nullif(p_group_label, ''), group_label),
      guest_message = coalesce(nullif(p_message, ''), guest_message),
      rsvp_responded_at = now(),
      onboarding_completed_at = coalesce(onboarding_completed_at, now()),
      updated_at = now()
  where id = v_guest.id;

  delete from public.guest_companions where guest_id = v_guest.id;
  if p_attending and p_companions is not null then
    for v_c in select * from jsonb_array_elements(p_companions) loop
      insert into public.guest_companions (
        guest_id, wedding_id, name, age_group, is_child, child_age, phone, email,
        menu, allergies, accompanied_by, will_install_app, high_chair
      ) values (
        v_guest.id, v_guest.wedding_id, v_c->>'name',
        coalesce(v_c->>'age_group', 'adult'),
        coalesce(v_c->>'age_group', 'adult') = 'child',
        nullif(v_c->>'child_age', '')::int,
        nullif(v_c->>'phone', ''), nullif(v_c->>'email', ''), nullif(v_c->>'menu', ''),
        coalesce(array(select jsonb_array_elements_text(coalesce(v_c->'allergies', '[]'::jsonb))), '{}'),
        nullif(v_c->>'accompanied_by', ''),
        coalesce((v_c->>'will_install_app')::boolean, false),
        coalesce(v_c->>'age_group', 'adult') = 'child' and coalesce((v_c->>'high_chair')::boolean, false)
      );
    end loop;
  end if;
end;
$function$;

create or replace function public.get_public_rsvp(p_token uuid)
 returns jsonb
 language sql
 stable security definer
 set search_path to 'public', 'pg_temp'
as $function$
  select coalesce(
    (select jsonb_build_object(
       'state', g.rsvp_status::text,
       'name', g.full_name,
       'wedding_id', g.wedding_id,
       'max_companions', g.max_companions,
       'menu', g.menu_selection,
       'dietary', g.dietary_restrictions,
       'age_group', g.age_group,
       'companions', coalesce((
         select jsonb_agg(jsonb_build_object(
           'name', c.name, 'age_group', c.age_group, 'child_age', c.child_age,
           'menu', c.menu, 'allergies', c.allergies, 'high_chair', c.high_chair
         ) order by c.created_at)
         from public.guest_companions c where c.guest_id = g.id
       ), '[]'::jsonb)
     )
     from public.guests g where g.rsvp_token = p_token),
    (select jsonb_build_object(
       'state', case
                  when r.answers is null then 'awaiting_approval'
                  when (r.answers->>'attending')::boolean then 'awaiting_approval_confirmed'
                  else 'awaiting_approval_declined'
                end,
       'name', r.full_name,
       'wedding_id', r.wedding_id,
       'max_companions', greatest(coalesce(w.default_max_companions, 0), 0),
       'menu', r.answers->>'menu',
       'dietary', r.answers->>'dietary',
       'age_group', r.answers->>'age_group',
       'companions', coalesce(r.answers->'companions', '[]'::jsonb)
     )
     from public.guest_join_requests r
     join public.events w on w.id = r.wedding_id
     where r.rsvp_token = p_token)
  );
$function$;

create or replace function public.get_rsvp_details(p_token uuid)
 returns jsonb
 language sql
 stable security definer
 set search_path to 'public', 'pg_temp'
as $function$
  select jsonb_build_object(
    'guest_id', g.id,
    'wedding_id', g.wedding_id,
    'guest_name', g.full_name,
    'rsvp_status', g.rsvp_status,
    'max_companions', g.max_companions,
    'plus_one_allowed', g.plus_one_allowed,
    'age_group', g.age_group,
    'menu_selection', g.menu_selection,
    'dietary_restrictions', g.dietary_restrictions,
    'side', g.side,
    'group_label', g.group_label,
    'guest_message', g.guest_message,
    'event', jsonb_build_object(
      'partner_name_1', w.partner_name_1,
      'partner_name_2', w.partner_name_2,
      'wedding_date', w.wedding_date,
      'venue', w.venue,
      'location', w.location,
      'event_type', w.event_type,
      'cover_photo_url', w.cover_photo_url,
      'ceremony_time', w.ceremony_time
    ),
    'companions', coalesce((
      select jsonb_agg(jsonb_build_object(
        'name', c.name, 'age_group', c.age_group, 'child_age', c.child_age,
        'phone', c.phone, 'email', c.email, 'menu', c.menu, 'allergies', c.allergies,
        'accompanied_by', c.accompanied_by, 'will_install_app', c.will_install_app,
        'high_chair', c.high_chair
      ) order by c.created_at)
      from public.guest_companions c where c.guest_id = g.id
    ), '[]'::jsonb)
  )
  from public.guests g
  join public.events w on w.id = g.wedding_id
  where g.rsvp_token = p_token;
$function$;

-- Parceiro: quantas cadeirinhas e de quem (nas mesas).
create or replace function public.partner_event_brief(p_booking uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_b public.bookings;
  v_e public.events;
  v_cats text[];
  v_food boolean;
  v_people boolean;
  v_dress boolean;
  v_colors boolean;
  v_out jsonb;
  v_detail jsonb := '{}'::jsonb;
begin
  select * into v_b from public.bookings where id = p_booking;
  if v_b.id is null or v_b.partner_id <> (select auth.uid()) then
    raise exception 'forbidden';
  end if;
  if v_b.status not in ('confirmed', 'payment_overdue', 'disputed', 'completed') then
    return jsonb_build_object('available', false);
  end if;
  select * into v_e from public.events where id = v_b.wedding_id;

  select coalesce(array_agg(c.slug), '{}') into v_cats
  from public.partner_profile_categories pc
  join public.partner_categories c on c.id = pc.category_id
  where pc.partner_id = v_b.partner_id;

  v_food := v_cats && array['catering', 'restaurants', 'cake', 'venue'];
  v_people := v_food or v_cats && array['transport', 'rentals', 'kids_entertainment', 'bars_nightlife'];
  v_dress := v_cats && array['photography', 'music_dj', 'bands_musicians', 'photobooth_entertainment', 'flowers_decor'];
  v_colors := v_cats && array['flowers_decor', 'cake', 'invitations'];

  v_out := jsonb_build_object(
    'available', true,
    'event_type', v_e.event_type,
    'start_time', nullif(btrim(v_e.ceremony_time), ''),
    'venue', nullif(btrim(v_e.venue), ''),
    'address', coalesce(nullif(btrim(v_e.venue_address), ''), nullif(btrim(v_e.location), '')),
    'latitude', v_e.venue_latitude,
    'longitude', v_e.venue_longitude,
    'estimated_guests', v_e.estimated_guests,
    'program', coalesce((
      select jsonb_agg(jsonb_build_object(
               'time', m->>'time', 'title', m->>'title', 'place', nullif(m->>'place', ''),
               'mine', (m->>'partner_id') = v_b.partner_id::text))
      from jsonb_array_elements(case when jsonb_typeof(v_e.program) = 'array' then v_e.program else '[]'::jsonb end) m
    ), '[]'::jsonb),
    'show_people', v_people,
    'show_food', v_food
  );
  if v_dress then
    v_out := v_out || jsonb_build_object('dress_code', nullif(btrim(v_e.dress_code), ''));
  end if;
  if v_colors then
    v_out := v_out || jsonb_build_object('colors', to_jsonb(coalesce(v_e.theme_colors, '{}')),
                                         'dress_code', nullif(btrim(v_e.dress_code), ''));
  end if;
  if not v_people then
    return v_out;
  end if;

  -- Uma linha por pessoa confirmada: o convidado e os acompanhantes.
  with people as (
    select g.id as guest_id, null::uuid as companion_id, g.full_name as name,
           coalesce(g.age_group = 'child', false) as is_child, null::int as child_age, false as high_chair,
           nullif(btrim(g.menu_selection), '') as menu_old,
           nullif(btrim(g.dietary_restrictions), '') as dietary_old
    from public.guests g
    where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
    union all
    select c.guest_id, c.id, coalesce(nullif(btrim(c.name), ''), 'Acompanhante'),
           coalesce(c.is_child, false) or coalesce(c.age_group = 'child', false), c.child_age,
           coalesce(c.high_chair, false),
           nullif(btrim(c.menu), ''),
           nullif(array_to_string(c.allergies, ', '), '')
    from public.guest_companions c
    join public.guests g on g.id = c.guest_id
    where c.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
  ),
  -- O que cada pessoa escolheu nesta reserva (menus por pessoa, 216).
  chosen as (
    select p.*,
           coalesce(ch.package_snapshot->>'name', p.menu_old) as menu,
           coalesce(nullif(btrim(ch.allergies), ''), p.dietary_old) as dietary
    from people p
    left join lateral (
      select bc.package_snapshot, bc.allergies
      from public.booking_guest_choices bc
      where bc.booking_id = v_b.id
        and ((p.companion_id is not null and bc.companion_id = p.companion_id)
          or (p.companion_id is null and bc.guest_id = p.guest_id and bc.companion_id is null))
      order by bc.updated_at desc nulls last
      limit 1
    ) ch on true
  ),
  seat as (
    select gid as guest_id, t.name as table_name, t.position
    from public.seating_tables t, unnest(t.guest_ids) gid
    where t.wedding_id = v_b.wedding_id
  )
  select jsonb_build_object(
    'total', (select count(*) from chosen),
    'children', (select count(*) from chosen where is_child),
    'child_ages', coalesce((select jsonb_agg(child_age order by child_age) from chosen where is_child and child_age is not null), '[]'::jsonb),
    'high_chairs', (select count(*) from chosen where high_chair)
  ) || case when v_food then jsonb_build_object(
    'menus', coalesce((select jsonb_agg(jsonb_build_object('menu', m, 'count', n) order by n desc)
                       from (select coalesce(menu, 'Sem escolha') m, count(*) n from chosen group by 1) x), '[]'::jsonb),
    'dietary', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'restriction', p.dietary, 'table', s.table_name) order by s.position nulls last, p.name)
                         from chosen p left join seat s on s.guest_id = p.guest_id where p.dietary is not null), '[]'::jsonb),
    'tables', coalesce((select jsonb_agg(jsonb_build_object(
                          'name', coalesce(t.name, 'Mesa ' || (t.position + 1)),
                          'people', (select count(*) from chosen p where p.guest_id = any(t.guest_ids)),
                          'guests', (select coalesce(jsonb_agg(jsonb_build_object('name', p.name, 'menu', p.menu, 'dietary', p.dietary, 'high_chair', p.high_chair) order by p.name), '[]'::jsonb)
                                     from chosen p where p.guest_id = any(t.guest_ids))
                        ) order by t.position)
                        from public.seating_tables t where t.wedding_id = v_b.wedding_id), '[]'::jsonb)
  ) else '{}'::jsonb end
  into v_detail;

  return v_out || v_detail;
end;
$$;


revoke all on function public.partner_event_brief(uuid) from public, anon;
grant execute on function public.partner_event_brief(uuid) to authenticated;

insert into public.applied_migrations (id) values ('227') on conflict do nothing;
