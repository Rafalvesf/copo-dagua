-- ============================================================
-- Módulo: Profile / partner-app (partner-app/profile/database.md)
-- ============================================================

-- `partner_verification_tax_id_idx` era um índice único simples sobre
-- `tax_id`, sem excluir o placeholder em branco (`''`) que
-- `handle_new_user()` (`011_auth_provisioning.sql`) insere para todo
-- parceiro novo, até preencher o NIF real. Um único índice único simples
-- só permite UM registo com `tax_id = ''` em toda a tabela — o segundo
-- signup de parceiro real (depois do trigger de `011` passar a existir)
-- falhava sempre com `duplicate key value violates unique constraint`,
-- antes mesmo de chegar a qualquer ecrã da app. Bug latente desde
-- `005_partner_profile.sql`, nunca detetado porque `handle_new_user()`
-- não existia até esta sessão (Fase 1) — sem ele, nunca se criava mais
-- do que uma linha manual de teste em `partner_verification`. Descoberto
-- 2026-08-30 ao testar a Fase 3 com um segundo signup de parceiro real.
drop index public.partner_verification_tax_id_idx;

create unique index partner_verification_tax_id_idx
  on public.partner_verification (tax_id)
  where tax_id <> '';
