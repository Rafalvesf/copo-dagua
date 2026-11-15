-- 187 · «Ver perfil» entre organizadores e convidados (2026-11-15).
--
-- O convidado passa a receber quem organiza o evento (dono e
-- co-organizadores ativos: id e nome) em get_my_guest_weddings(), para
-- abrir o perfil público e seguir. O organizador já vê a conta do
-- convidado em guests.linked_profile_id.

begin;

create or replace function public.get_my_guest_weddings()
returns table(wedding_id uuid, joined_at timestamptz, wedding jsonb)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select m.wedding_id,
         m.joined_at,
         jsonb_build_object(
           'partner_name_1', w.partner_name_1,
           'partner_name_2', w.partner_name_2,
           'wedding_date', w.wedding_date,
           'venue', w.venue,
           'location', w.location,
           'quote', w.quote,
           'cover_photo_url', w.cover_photo_url,
           'ceremony_time', w.ceremony_time,
           'welcome_message', w.welcome_message,
           'theme_colors', w.theme_colors,
           'updated_at', w.updated_at,
           'gift_list_url', w.gift_list_url,
           'gift_iban', w.gift_iban,
           'gift_message', w.gift_message,
           'event_type', w.event_type,
           'program', w.program,
           'dress_code', w.dress_code,
           'venue_address', w.venue_address,
           'venue_latitude', w.venue_latitude,
           'venue_longitude', w.venue_longitude,
           -- 187: quem organiza, para o convidado ver o perfil e seguir.
           'organizers', (
             select coalesce(jsonb_agg(jsonb_build_object('id', o.id, 'name', o.full_name) order by o.is_owner desc, o.full_name), '[]'::jsonb)
             from (
               select p.id, p.full_name, true as is_owner
               from public.profiles p where p.id = w.owner_id
               union
               select p.id, p.full_name, false
               from public.wedding_collaborators c
               join public.profiles p on p.id = c.user_id
               where c.wedding_id = w.id and c.status = 'active' and c.user_id <> w.owner_id
             ) o
           )
         )
  from public.wedding_guest_members m
  join public.weddings w on w.id = m.wedding_id
  where m.guest_id = auth.uid()
    and w.deleted_at is null
  order by m.joined_at desc;
$$;

insert into public.applied_migrations (id) values ('187') on conflict do nothing;

commit;
