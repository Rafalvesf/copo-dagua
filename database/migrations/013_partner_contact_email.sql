-- ============================================================
-- Módulo: Profile / partner-app (partner-app/profile/database.md)
-- ============================================================

-- `contact_email` — email público de contacto do negócio, distinto do
-- email de login (`auth.users.email`); editável em
-- `business_info_screen.dart` desde antes desta sessão, mas sem coluna
-- real (só existia no `MockBackend`). Mesma classe de gap de
-- `012_wedding_quote.sql` — encontrado ao ligar `partner-app/` ao
-- Supabase real (2026-08-30, Fase 3 de `ROADMAP.md`).
alter table public.partner_profiles
  add column contact_email text;
