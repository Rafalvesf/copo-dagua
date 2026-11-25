-- 242 · Menus e extras na informação do evento do parceiro (pedido do
-- Rafael, 2026-11-25: «os menus que o parceiro vê são os que ele oferece
-- especificamente e incluídos ficam os extras; consegue ver a lista geral
-- e quantos extras foram pedidos; quem pediu qual menu e que extras»).
--
-- `partner_event_brief` passa a devolver:
--   · `menus` — só os menus do parceiro escolhidos por pessoa (sem o texto
--     livre antigo dos convidados) e `menus_pending` (pessoas ainda sem menu);
--   · `extras` — os extras da reserva (os que o organizador juntou), para
--     todas as categorias;
--   · `guest_extras` — quantas vezes cada extra foi pedido pelas pessoas;
--   · `orders` — quem pediu o quê: uma linha por pessoa com o menu, os
--     extras e a mesa (comida).

begin;

create or replace function public.partner_event_brief(p_booking uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $function$
declare
  v_b public.bookings;
  v_e public.events;
  v_cats text[];
  v_food boolean;
  v_people boolean;
  v_dress boolean;
  v_colors boolean;
  v_out jsonb;
  v_extras jsonb := '[]'::jsonb;
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

  -- Extras da reserva (os que o organizador juntou ao pedido / à proposta).
  select coalesce((select jsonb_agg(jsonb_build_object('name', x->>'name', 'price_unit', x->>'price_unit'))
                   from jsonb_array_elements(coalesce(qr.extras_snapshot, '[]'::jsonb)) x), '[]'::jsonb)
    into v_extras
    from public.proposals pr
    join public.quote_requests qr on qr.id = pr.quote_request_id
   where pr.id = v_b.proposal_id;

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
    'show_food', v_food,
    'extras', coalesce(v_extras, '[]'::jsonb)
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

  with people as (
    select g.id as guest_id, null::uuid as companion_id, g.full_name as name,
           coalesce(g.age_group = 'child', false) as is_child, null::int as child_age, false as high_chair,
           nullif(btrim(g.dietary_restrictions), '') as dietary_old
    from public.guests g
    where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
    union all
    select c.guest_id, c.id, coalesce(nullif(btrim(c.name), ''), 'Acompanhante'),
           coalesce(c.is_child, false) or coalesce(c.age_group = 'child', false), c.child_age,
           coalesce(c.high_chair, false),
           nullif(array_to_string(c.allergies, ', '), '')
    from public.guest_companions c
    join public.guests g on g.id = c.guest_id
    where c.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
  ),
  chosen as (
    select p.*,
           -- Só os menus do parceiro (escolhidos nesta reserva).
           nullif(btrim(ch.package_snapshot->>'name'), '') as menu,
           coalesce(nullif(btrim(ch.allergies), ''), p.dietary_old) as dietary,
           coalesce((select jsonb_agg(x->>'name') from jsonb_array_elements(coalesce(ch.extras_snapshot, '[]'::jsonb)) x), '[]'::jsonb) as extras
    from people p
    left join lateral (
      select bc.package_snapshot, bc.allergies, bc.extras_snapshot
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
    'menus', coalesce((select jsonb_agg(jsonb_build_object('menu', m, 'count', n) order by n desc, m)
                       from (select menu m, count(*) n from chosen where menu is not null group by 1) x), '[]'::jsonb),
    'menus_pending', (select count(*) from chosen where menu is null),
    'guest_extras', coalesce((select jsonb_agg(jsonb_build_object('name', e, 'count', n) order by n desc, e)
                              from (select e, count(*) n from chosen, jsonb_array_elements_text(chosen.extras) e group by 1) x), '[]'::jsonb),
    'orders', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'menu', p.menu, 'extras', p.extras,
                                                            'table', s.table_name, 'child', p.is_child)
                                         order by s.position nulls last, p.name)
                        from chosen p left join seat s on s.guest_id = p.guest_id
                        where p.menu is not null or jsonb_array_length(p.extras) > 0), '[]'::jsonb),
    'dietary', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'restriction', p.dietary, 'table', s.table_name) order by s.position nulls last, p.name)
                         from chosen p left join seat s on s.guest_id = p.guest_id where p.dietary is not null), '[]'::jsonb),
    'tables', coalesce((select jsonb_agg(jsonb_build_object(
                          'name', coalesce(t.name, 'Mesa ' || (t.position + 1)),
                          'people', (select count(*) from chosen p where p.guest_id = any(t.guest_ids)),
                          'guests', (select coalesce(jsonb_agg(jsonb_build_object('name', p.name, 'menu', p.menu, 'extras', p.extras,
                                                                                  'dietary', p.dietary, 'high_chair', p.high_chair) order by p.name), '[]'::jsonb)
                                     from chosen p where p.guest_id = any(t.guest_ids))
                        ) order by t.position)
                        from public.seating_tables t where t.wedding_id = v_b.wedding_id), '[]'::jsonb)
  ) else '{}'::jsonb end
  into v_detail;

  return v_out || v_detail;
end;
$function$;

revoke all on function public.partner_event_brief(uuid) from public, anon;
grant execute on function public.partner_event_brief(uuid) to authenticated;

insert into public.applied_migrations (id) values ('242') on conflict do nothing;

commit;
