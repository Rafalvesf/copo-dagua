-- 244 · Fotos dos eventos no perfil (2026-11-26)
--
-- Regra do Rafael: as fotos da galeria são só para quem está no evento; no
-- perfil de quem as publicou aparecem apenas a quem também esteve nesse
-- evento. Usa a mesma regra da galeria (`can_see_gallery_photo`: membros do
-- evento, quem publicou e convidados do evento nas fotos aprovadas) e só
-- devolve fotos aprovadas.

begin;

create or replace function public.profile_event_photos(p_profile uuid)
returns table (photo_id uuid, wedding_id uuid, storage_path text, event_name text, created_at timestamptz)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.id, p.wedding_id, p.storage_path,
         coalesce(nullif(trim(concat_ws(' e ', e.partner_name_1, e.partner_name_2)), ''), 'Evento'),
         p.created_at
  from public.wedding_gallery_photos p
  join public.events e on e.id = p.wedding_id
  where p.uploaded_by = p_profile
    and p.status = 'approved'
    and public.can_see_gallery_photo(p.id)
  order by p.created_at desc
  limit 60;
$$;

revoke all on function public.profile_event_photos(uuid) from public, anon;
grant execute on function public.profile_event_photos(uuid) to authenticated;

insert into public.applied_migrations (id) values ('244') on conflict do nothing;

commit;
