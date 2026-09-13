-- ============================================================
-- Foto de perfil do casal (ecrã "Os noivos"), separada do banner do
-- Home (`cover_photo_url`, 035_wedding_banner_storage.sql) — pedido
-- explícito do utilizador: "o pfp em noivos pode e deve ser
-- diferente ao da imagem em home". Mesmo bucket `wedding-banners`
-- (RLS já cobre qualquer objeto nesse bucket via
-- is_wedding_member()), caminho `{wedding_id}/profile.{ext}` em vez
-- de `{wedding_id}/banner.{ext}` — dois ficheiros distintos por
-- casamento, sem precisar de bucket novo.
-- ============================================================

alter table public.weddings add column profile_photo_url text;
