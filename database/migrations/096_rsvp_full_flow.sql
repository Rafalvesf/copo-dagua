-- ============================================================
-- 096 — RSVP com o mesmo percurso do onboarding da app
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): o onboarding completo do convidado
-- (acompanhantes, faixa etária, refeição, alergias, lado, relação) tem
-- de existir "tanto para o RSVP como para alguém que instale a app".
-- O RSVP não tem conta: o `rsvp_token` (uuid secreto do convite) é a
-- autorização, como já era em `get_rsvp_by_token`.

create or replace function public.get_rsvp_details(p_token uuid)
returns jsonb
language sql
security definer
stable
set search_path = public, pg_temp
as $$
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
        'accompanied_by', c.accompanied_by, 'will_install_app', c.will_install_app
      ) order by c.created_at)
      from public.guest_companions c where c.guest_id = g.id
    ), '[]'::jsonb)
  )
  from public.guests g
  join public.weddings w on w.id = g.wedding_id
  where g.rsvp_token = p_token;
$$;

revoke execute on function public.get_rsvp_details(uuid) from public;
grant execute on function public.get_rsvp_details(uuid) to anon, authenticated;

create or replace function public.submit_rsvp_full(
  p_token uuid,
  p_attending boolean,
  p_menu text,
  p_dietary text,
  p_age_group text,
  p_side text,
  p_group_label text,
  p_message text,
  p_companions jsonb
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest public.guests%rowtype;
  v_c jsonb;
begin
  select * into v_guest from public.guests where rsvp_token = p_token;
  if not found then
    raise exception 'not_found' using errcode = 'P0002';
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
        menu, allergies, accompanied_by, will_install_app
      ) values (
        v_guest.id, v_guest.wedding_id,
        v_c->>'name',
        coalesce(v_c->>'age_group', 'adult'),
        coalesce(v_c->>'age_group', 'adult') = 'child',
        nullif(v_c->>'child_age', '')::int,
        nullif(v_c->>'phone', ''),
        nullif(v_c->>'email', ''),
        nullif(v_c->>'menu', ''),
        coalesce(array(select jsonb_array_elements_text(coalesce(v_c->'allergies', '[]'::jsonb))), '{}'),
        nullif(v_c->>'accompanied_by', ''),
        coalesce((v_c->>'will_install_app')::boolean, false)
      );
    end loop;
  end if;
end;
$$;

revoke execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) from public;
grant execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) to anon, authenticated;
