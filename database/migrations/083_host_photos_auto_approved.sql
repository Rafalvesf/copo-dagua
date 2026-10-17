-- ============================================================
-- 083 — fotos de quem organiza ficam logo aprovadas
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "eu como organizador quando
-- publico uma foto ... tenho que verificar a minha própria fotografia".
-- Só as fotos dos convidados passam pela fila de moderação.

create or replace function public.gallery_photo_host_auto_approve()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if public.is_wedding_member(new.wedding_id) then
    new.status := 'approved';
    new.reviewed_by := new.uploaded_by;
    new.reviewed_at := now();
  end if;
  return new;
end;
$$;

drop trigger if exists gallery_photo_host_auto_approve on public.wedding_gallery_photos;
create trigger gallery_photo_host_auto_approve
  before insert on public.wedding_gallery_photos
  for each row execute function public.gallery_photo_host_auto_approve();

-- Fotos que quem organiza já publicou e ficaram à espera.
update public.wedding_gallery_photos p
set status = 'approved',
    reviewed_by = p.uploaded_by,
    reviewed_at = now()
where p.status = 'pending'
  and (
    exists (select 1 from public.weddings w where w.id = p.wedding_id and w.owner_id = p.uploaded_by)
    or exists (
      select 1 from public.wedding_collaborators wc
      where wc.wedding_id = p.wedding_id and wc.user_id = p.uploaded_by
    )
  );
