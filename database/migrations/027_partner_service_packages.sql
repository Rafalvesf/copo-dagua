-- ============================================================
-- partner_pricing_mode — criado numa migração própria e separada de
-- 028_partner_service_packages.sql (que já a usa numa coluna), mesmo
-- padrão de 024_partner_changes_required.sql: `create type`/`alter
-- type ... add value` tem de correr numa transação anterior à que
-- referencia o novo valor (limitação do Postgres em versões <PG12 já
-- não aplicável aqui, mas mantido por segurança/consistência com o
-- resto do histórico de migrações).
-- ============================================================

create type public.partner_pricing_mode as enum ('packages', 'quote_only');
