-- ============================================================
-- Reservas na app → serviços tratados + informação para o parceiro — 2026-11-01
-- ============================================================
-- Pedido do utilizador:
-- 1) "nos orçamento e serviços tratados não atualiza quando foi contratada
--    na app": uma reserva paga (sinal pago) marca a categoria do parceiro
--    como "Já tratámos" em wedding_service_preferences. Se a reserva for
--    cancelada e não houver outra ativa nessa categoria, volta a
--    "Precisamos" — só quando foi a app que a marcou (booked_via_app).
--    (O orçamento passa a contar o valor contratado — feito na app.)
-- 2) "menus, mesas, alergias… devem passar para os parceiros": função
--    partner_event_brief(reserva) que dá ao parceiro de uma reserva paga
--    o número de convidados, os menus escolhidos, as alergias/restrições
--    e as mesas. Sem emails nem telefones dos convidados.

begin;

alter table public.wedding_service_preferences
  add column if not exists booked_via_app boolean not null default false;

create or replace function public.sync_service_preference_from_booking()
returns trigger
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_active boolean := new.status in ('confirmed', 'payment_overdue', 'disputed', 'completed');
  r record;
begin
  if tg_op = 'UPDATE' and new.status is not distinct from old.status then
    return new;
  end if;
  for r in
    select pc.slug
    from public.partner_profile_categories ppc
    join public.partner_categories pc on pc.id = ppc.category_id
    where ppc.partner_id = new.partner_id
  loop
    if v_active then
      insert into public.wedding_service_preferences (wedding_id, partner_category_slug, preference, booked_via_app, updated_at)
      values (new.wedding_id, r.slug, 'already_booked', true, now())
      on conflict (wedding_id, partner_category_slug) do update
        set preference = 'already_booked', booked_via_app = true, updated_at = now()
        where wedding_service_preferences.preference <> 'already_booked';
    elsif new.status in ('cancelled_by_couple', 'cancelled_by_partner', 'expired') then
      -- Só desfaz o que a app marcou, e só se não houver outra reserva
      -- ativa nesta categoria.
      if not exists (
        select 1 from public.bookings b
        join public.partner_profile_categories ppc2 on ppc2.partner_id = b.partner_id
        join public.partner_categories pc2 on pc2.id = ppc2.category_id
        where b.wedding_id = new.wedding_id and b.id <> new.id and pc2.slug = r.slug
          and b.status in ('confirmed', 'payment_overdue', 'disputed', 'completed')
      ) then
        update public.wedding_service_preferences
          set preference = 'needed', booked_via_app = false, updated_at = now()
          where wedding_id = new.wedding_id and partner_category_slug = r.slug and booked_via_app;
      end if;
    end if;
  end loop;
  return new;
end;
$$;

drop trigger if exists bookings_sync_service_preference on public.bookings;
create trigger bookings_sync_service_preference
  after insert or update of status on public.bookings
  for each row execute function public.sync_service_preference_from_booking();

-- Reservas já pagas antes desta migração.
insert into public.wedding_service_preferences (wedding_id, partner_category_slug, preference, booked_via_app, updated_at)
select distinct b.wedding_id, pc.slug, 'already_booked', true, now()
from public.bookings b
join public.partner_profile_categories ppc on ppc.partner_id = b.partner_id
join public.partner_categories pc on pc.id = ppc.category_id
where b.status in ('confirmed', 'payment_overdue', 'disputed', 'completed')
on conflict (wedding_id, partner_category_slug) do update
  set preference = 'already_booked', booked_via_app = true, updated_at = now()
  where wedding_service_preferences.preference <> 'already_booked';

-- Informação do evento para o parceiro de uma reserva paga.
create or replace function public.partner_event_brief(p_booking uuid)
returns jsonb
language plpgsql stable security definer set search_path = public, pg_temp
as $$
declare
  v_b public.bookings;
  v_people jsonb;
begin
  select * into v_b from public.bookings where id = p_booking;
  if v_b.id is null or v_b.partner_id <> (select auth.uid()) then
    raise exception 'forbidden';
  end if;
  if v_b.status not in ('confirmed', 'payment_overdue', 'disputed', 'completed') then
    return jsonb_build_object('available', false);
  end if;

  -- Uma linha por pessoa confirmada: o convidado e os acompanhantes.
  with people as (
    select g.id as guest_id, g.full_name as name, coalesce(g.age_group = 'child', false) as is_child,
           nullif(btrim(g.menu_selection), '') as menu,
           nullif(btrim(g.dietary_restrictions), '') as dietary
    from public.guests g
    where g.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
    union all
    select c.guest_id, coalesce(nullif(btrim(c.name), ''), 'Acompanhante') as name,
           coalesce(c.is_child, false) or coalesce(c.age_group = 'child', false) as is_child,
           nullif(btrim(c.menu), '') as menu,
           nullif(array_to_string(c.allergies, ', '), '') as dietary
    from public.guest_companions c
    join public.guests g on g.id = c.guest_id
    where c.wedding_id = v_b.wedding_id and g.rsvp_status = 'confirmed'
  ),
  seat as (
    select gid as guest_id, t.name as table_name, t.position
    from public.seating_tables t, unnest(t.guest_ids) gid
    where t.wedding_id = v_b.wedding_id
  )
  select jsonb_build_object(
    'available', true,
    'total', (select count(*) from people),
    'children', (select count(*) from people where is_child),
    'menus', coalesce((select jsonb_agg(jsonb_build_object('menu', m, 'count', n) order by n desc)
                       from (select coalesce(menu, 'Sem escolha') m, count(*) n from people group by 1) x), '[]'::jsonb),
    'dietary', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'restriction', p.dietary, 'table', s.table_name) order by s.position nulls last, p.name)
                         from people p left join seat s on s.guest_id = p.guest_id where p.dietary is not null), '[]'::jsonb),
    'tables', coalesce((select jsonb_agg(jsonb_build_object(
                          'name', coalesce(t.name, 'Mesa ' || (t.position + 1)),
                          'people', (select count(*) from people p where p.guest_id = any(t.guest_ids)),
                          'guests', (select coalesce(jsonb_agg(jsonb_build_object('name', p.name, 'menu', p.menu, 'dietary', p.dietary) order by p.name), '[]'::jsonb)
                                     from people p where p.guest_id = any(t.guest_ids))
                        ) order by t.position)
                        from public.seating_tables t where t.wedding_id = v_b.wedding_id), '[]'::jsonb)
  ) into v_people;
  return v_people;
end;
$$;
revoke execute on function public.partner_event_brief(uuid) from public, anon;
grant execute on function public.partner_event_brief(uuid) to authenticated;

commit;
