-- 243 · Galeria: originais ao lado da versão leve (2026-11-26)
--
-- Regra do Rafael: toda a imagem que sobe é convertida para uma versão leve
-- (WebP/JPEG, até 1600 px) e o original fica ao lado em
-- `<storage_path>.original`, para quem descarrega receber o tamanho real
-- (lib/core/media/image_upload.dart). Na galeria (bucket privado), as regras
-- de ver e apagar só aceitavam o caminho exato da foto: passam a aceitar
-- também o original, com as mesmas condições.

begin;

drop policy if exists "Gallery select follows wedding_gallery_photos visibility" on storage.objects;
create policy "Gallery select follows wedding_gallery_photos visibility"
  on storage.objects for select
  using (
    bucket_id = 'wedding-gallery'
    and exists (
      select 1 from public.wedding_gallery_photos p
      where (objects.name = p.storage_path or objects.name = p.storage_path || '.original')
        and (
          p.uploaded_by = auth.uid()
          or public.is_wedding_member(p.wedding_id)
          or (p.status = 'approved'::public.gallery_photo_status and public.is_wedding_guest_member(p.wedding_id))
        )
    )
  );

drop policy if exists "Gallery delete by uploader or wedding member" on storage.objects;
create policy "Gallery delete by uploader or wedding member"
  on storage.objects for delete
  using (
    bucket_id = 'wedding-gallery'
    and exists (
      select 1 from public.wedding_gallery_photos p
      where (objects.name = p.storage_path or objects.name = p.storage_path || '.original')
        and (p.uploaded_by = auth.uid() or public.wedding_can(p.wedding_id, 'evento'))
    )
  );

insert into public.applied_migrations (id) values ('243') on conflict do nothing;

commit;
