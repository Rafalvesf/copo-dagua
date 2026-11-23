-- 226 · «Informação do evento» do parceiro por categoria (pedido do Rafael,
-- 2026-11-23). Cada parceiro vê só o que precisa para o seu trabalho:
--   · todos: hora, local com a morada e o mapa, tipo de evento, convidados
--     previstos e o programa (os momentos dele marcados);
--   · comida (catering, restaurantes, bolo, espaço): pessoas, crianças e
--     idades, menus por pessoa, alergias e mesas;
--   · foto/vídeo, música, banda, animação: dress code;
--   · flores e decoração, bolo, convites: cores e dress code;
--   · transporte, aluguer, animação infantil: pessoas, crianças e idades.
-- Sem contactos (os parceiros falam pela conversa da app). As alergias só
-- vão para a comida. Os menus vêm das escolhas por pessoa da reserva
-- (216) e, sem elas, do que o convidado escreveu.

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
           coalesce(g.age_group = 'child', false) as is_child, null::int as child_age,
           nullif(btrim(g.menu_selection), '') as menu_old,
           nullif(btrim(g.dietary_restrictions), '') as dietary_old
    from public.guests g
    where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
    union all
    select c.guest_id, c.id, coalesce(nullif(btrim(c.name), ''), 'Acompanhante'),
           coalesce(c.is_child, false) or coalesce(c.age_group = 'child', false), c.child_age,
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
    'child_ages', coalesce((select jsonb_agg(child_age order by child_age) from chosen where is_child and child_age is not null), '[]'::jsonb)
  ) || case when v_food then jsonb_build_object(
    'menus', coalesce((select jsonb_agg(jsonb_build_object('menu', m, 'count', n) order by n desc)
                       from (select coalesce(menu, 'Sem escolha') m, count(*) n from chosen group by 1) x), '[]'::jsonb),
    'dietary', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'restriction', p.dietary, 'table', s.table_name) order by s.position nulls last, p.name)
                         from chosen p left join seat s on s.guest_id = p.guest_id where p.dietary is not null), '[]'::jsonb),
    'tables', coalesce((select jsonb_agg(jsonb_build_object(
                          'name', coalesce(t.name, 'Mesa ' || (t.position + 1)),
                          'people', (select count(*) from chosen p where p.guest_id = any(t.guest_ids)),
                          'guests', (select coalesce(jsonb_agg(jsonb_build_object('name', p.name, 'menu', p.menu, 'dietary', p.dietary) order by p.name), '[]'::jsonb)
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

insert into public.applied_migrations (id) values ('226') on conflict do nothing;
