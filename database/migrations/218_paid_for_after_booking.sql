-- ============================================================
-- 218 · «Por quem pagamos» depois da reserva (precisa da 217)
-- ============================================================
--
-- Pedido do Rafael (2026-11-22): «Nós pagamos por» escolhe-se também
-- depois de a reserva estar feita (no popup dos menus, `set_paid_for` com a
-- reserva — já existe desde a 216). Aqui a app passa a saber se organizo o
-- evento e por quem pagamos.
-- ============================================================

begin;

-- O que tenho para fazer: menus que escolho e alergias das minhas pessoas.
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
    -- Menus que escolho (por quem pago) e quantos já têm menu.
    'menu_people', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x where (x->>'menu')::boolean),
    'menu_chosen', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x
                    where (x->>'menu')::boolean and nullif(x->'choice'->>'package_id', '') is not null),
    -- As minhas pessoas (eu e quem vem comigo) e quantas já disseram as alergias.
    'allergy_people', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x where (x->>'mine')::boolean),
    'allergy_done', (select count(*) from jsonb_array_elements(public.menu_people(b.id)) x
                     where (x->>'mine')::boolean and x->'choice'->>'allergies' is not null),
    -- Organizo este evento? E por quem pagamos (218: muda-se depois da reserva).
    'i_organize', public.is_event_organizer(b.wedding_id),
    'paid_for', to_jsonb(b.paid_for),
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


insert into public.applied_migrations (id) values ('218') on conflict do nothing;

commit;
