-- ============================================================
-- Módulo: Wedding (mobile-app/wedding/database.md)
-- ============================================================

-- `quote` — frase de destaque do casal, editável em Definições
-- (`features/settings/screens/settings_screen.dart`) e mostrada no ecrã
-- "Os noivos". Existia como campo do modelo Flutter (`Wedding.quote`) e
-- ecrã de edição desde antes desta sessão, mas nunca tinha sido
-- documentada nem migrada — ficava só em memória no `MockBackend`, perdida
-- a cada reload. Encontrado ao ligar `mobile-app/` ao Supabase real
-- (2026-08-30, Fase 2 de `ROADMAP.md`): sem esta coluna, gravar em
-- Definições continuaria a "funcionar" na UI mas silenciosamente não
-- persistiria nada.
alter table public.weddings
  add column quote text;
