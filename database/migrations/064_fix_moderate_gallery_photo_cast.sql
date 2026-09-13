-- ============================================================
-- Corrige moderate_gallery_photo() — falta de cast para o enum
-- ============================================================
-- Bug real encontrado ao verificar `061_wedding_gallery.sql` ao vivo:
-- `case when p_approve then 'approved' else 'rejected' end` avalia para
-- `text` por omissão (os dois literais não têm tipo próprio), mas
-- `wedding_gallery_photos.status` é `gallery_photo_status` (enum) — o
-- Postgres recusa o UPDATE sem cast explícito ("column is of type
-- gallery_photo_status but expression is of type text"). Nunca chegou
-- a correr com sucesso nenhuma vez em produção antes desta correção.
create or replace function public.moderate_gallery_photo(p_photo_id uuid, p_approve boolean)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_photo record;
begin
  select * into v_photo from public.wedding_gallery_photos where id = p_photo_id for update;
  if v_photo is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.is_wedding_member(v_photo.wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_photo.status <> 'pending' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.wedding_gallery_photos
  set status = (case when p_approve then 'approved' else 'rejected' end)::gallery_photo_status,
      reviewed_by = auth.uid(),
      reviewed_at = now()
  where id = p_photo_id;
end;
$$;
