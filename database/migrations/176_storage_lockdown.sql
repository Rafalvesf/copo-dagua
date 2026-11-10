-- 176: segurança do Storage (revisão de 2026-11-10).
--
-- 1) Listagem aberta: as regras de leitura dos baldes públicos deixavam
--    qualquer pessoa (mesmo sem sessão) LISTAR todos os ficheiros — em
--    especial os anexos privados do chat. Os links públicos continuam a
--    funcionar sem regra de leitura; cada um passa a ver (e listar) só os
--    seus ficheiros, o que o `upsert` das fotos precisa.
-- 2) Sem limites: avatares, portefólio e capas aceitavam qualquer tamanho e
--    tipo (incl. HTML/SVG, que ficariam alojados no nosso domínio).

begin;

-- 1) Leitura só do próprio (ou membros do evento, nas capas).
drop policy if exists "Chat attachments readable" on storage.objects;
drop policy if exists "Anyone can view avatars" on storage.objects;
drop policy if exists "Anyone can view portfolio media" on storage.objects;
drop policy if exists "Anyone can view wedding banners" on storage.objects;
drop policy if exists "Team media readable" on storage.objects;

create policy "Chat attachments read own" on storage.objects for select to authenticated
  using (bucket_id = 'chat-attachments' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "Avatars read own" on storage.objects for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "Portfolio read own" on storage.objects for select to authenticated
  using (bucket_id = 'portfolio' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "Wedding banners read members" on storage.objects for select to authenticated
  using (bucket_id = 'wedding-banners' and public.is_wedding_member(((storage.foldername(name))[1])::uuid));
create policy "Team media read admin" on storage.objects for select to authenticated
  using (bucket_id = 'team-media' and public.is_admin());

-- 2) Tamanho e tipos permitidos.
update storage.buckets set file_size_limit = 10485760,
  allowed_mime_types = array['image/jpeg','image/png','image/webp','image/heic','image/gif']
  where id in ('avatars', 'portfolio', 'wedding-banners');

update storage.buckets set allowed_mime_types = array[
  'image/jpeg','image/png','image/webp','image/heic','image/gif',
  'application/pdf','text/plain','text/csv',
  'application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/zip','application/octet-stream'
] where id = 'chat-attachments';

insert into public.applied_migrations (id) values ('176') on conflict do nothing;

commit;
