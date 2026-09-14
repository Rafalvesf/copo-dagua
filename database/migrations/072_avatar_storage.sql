-- ============================================================
-- Foto de perfil da conta — armazenamento real
-- ============================================================
--
-- Pedido explícito do utilizador (spec "Modo Convidado — sincronização
-- de perfil"): `profiles.avatar_url` (`001_authentication.sql`) existia
-- desde sempre mas nunca teve nenhum bucket/ecrã de upload
-- (`shared/widgets/initials_avatar.dart` documenta esse gap) — o
-- edit-pencil em `guest_profile_screen.dart` era só uma snackbar
-- "em breve". Bucket dedicado, 1:1 com `auth.uid()`, mesmo padrão do
-- logótipo de parceiro (`023_portfolio_storage.sql`,
-- `{partner_id}/logo.{ext}`) — aqui `{user_id}/avatar.{ext}`.
--
-- Público (mesma foto aparece em qualquer sítio da app, incluindo Modo
-- convidado de outra pessoa a ver a lista de convidados) — não é
-- conteúdo sensível, URLs com UUID aleatório não enumeráveis.
--
-- Inclui a policy de SELECT desde o início (lição de
-- 030_portfolio_storage_select_policy.sql: uploadBinary faz um
-- INSERT...RETURNING internamente, que precisa de uma policy de SELECT
-- mesmo só para o upload funcionar).

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

create policy "User can upload own avatar"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "User can update own avatar"
  on storage.objects for update
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "User can delete own avatar"
  on storage.objects for delete
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Anyone can view avatars"
  on storage.objects for select
  using (bucket_id = 'avatars');
