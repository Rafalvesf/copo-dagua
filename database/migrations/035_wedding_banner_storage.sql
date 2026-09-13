-- ============================================================
-- Banner do casamento (pedido do utilizador: "add the system so the
-- couples can add a banner image") — bucket de Storage dedicado para
-- a foto de capa que aparece no cartão principal do Home ("O nosso
-- casamento"). `weddings.cover_photo_url` já existe desde
-- 003_wedding.sql mas nunca foi usada por nenhum código — passa a ser
-- o destino real desta funcionalidade.
--
-- Convenção de caminho: `{wedding_id}/banner.{ext}`, ficheiro único
-- por casamento (upsert), tal como `{partner_id}/logo.{ext}` no
-- bucket `portfolio` (023_portfolio_storage.sql). Bucket público —
-- é a foto de capa mostrada a qualquer visitante da página de convite
-- pública, não é conteúdo sensível.
--
-- Ownership verificada via is_wedding_member() (003_wedding.sql) em
-- vez de auth.uid() direto, porque um casamento pode ter mais do que
-- um membro (dono + colaboradores) — ao contrário do logo de parceiro,
-- que é sempre 1:1 com auth.uid().
--
-- Inclui a policy de SELECT desde o início (lição de
-- 030_portfolio_storage_select_policy.sql: uploadBinary faz um
-- INSERT...RETURNING internamente, que precisa de uma policy de
-- SELECT mesmo só para o upload funcionar — sem isto o upload falhava
-- sempre, mascarado como erro de RLS no INSERT).
-- ============================================================

insert into storage.buckets (id, name, public)
values ('wedding-banners', 'wedding-banners', true)
on conflict (id) do nothing;

create policy "Wedding members can upload own banner"
  on storage.objects for insert
  with check (
    bucket_id = 'wedding-banners'
    and public.is_wedding_member(((storage.foldername(name))[1])::uuid)
  );

create policy "Wedding members can update own banner"
  on storage.objects for update
  using (
    bucket_id = 'wedding-banners'
    and public.is_wedding_member(((storage.foldername(name))[1])::uuid)
  );

create policy "Wedding members can delete own banner"
  on storage.objects for delete
  using (
    bucket_id = 'wedding-banners'
    and public.is_wedding_member(((storage.foldername(name))[1])::uuid)
  );

create policy "Anyone can view wedding banners"
  on storage.objects for select
  using (bucket_id = 'wedding-banners');
