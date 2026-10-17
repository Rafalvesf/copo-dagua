-- ============================================================
-- 086 — Quem gostou de uma foto ("Gostado por …")
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): a publicação da galeria deve
-- mostrar os comentários e os gostos como no canvas "Galeria —
-- publicação": "Gostado por Sofia e outras 11 pessoas", com avatares.
-- `profiles` só deixa ler a própria linha, por isso os nomes vêm daqui,
-- só para fotos que quem pede já pode ver (mesma regra de 078).

create or replace function public.get_gallery_likers(p_photo_id uuid)
returns table (profile_id uuid, full_name text, avatar_url text)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select l.profile_id, coalesce(pr.full_name, 'Convidado'), pr.avatar_url
  from public.gallery_photo_likes l
  left join public.profiles pr on pr.id = l.profile_id
  where l.photo_id = p_photo_id
    and public.can_see_gallery_photo(p_photo_id)
  order by l.created_at desc
  limit 3;
$$;

revoke execute on function public.get_gallery_likers(uuid) from public, anon;
grant execute on function public.get_gallery_likers(uuid) to authenticated;
