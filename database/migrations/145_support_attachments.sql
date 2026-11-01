-- ============================================================
-- 145 — Fotografias no "Reportar um erro"
-- ============================================================
--
-- Pedido do utilizador (2026-11): deixar anexar fotografias (capturas
-- de ecrã) ao reportar um erro.
--
-- Bucket PRIVADO `support-attachments`: só quem enviou e a equipa (admin)
-- veem os ficheiros — as capturas podem ter dados pessoais. O admin abre
-- por links temporários (signed URLs).

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('support-attachments', 'support-attachments', false, 8 * 1024 * 1024,
        array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/gif'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Support attachments upload own" on storage.objects;
create policy "Support attachments upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'support-attachments' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "Support attachments read own or admin" on storage.objects;
create policy "Support attachments read own or admin" on storage.objects for select to authenticated
  using (bucket_id = 'support-attachments'
         and ((storage.foldername(name))[1] = (select auth.uid())::text or public.is_admin()));

alter table public.support_tickets
  add column if not exists attachments text[] not null default '{}';

alter table public.support_tickets drop constraint if exists support_tickets_attachments_max;
alter table public.support_tickets
  add constraint support_tickets_attachments_max check (coalesce(array_length(attachments, 1), 0) <= 5);
