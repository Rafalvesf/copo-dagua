-- ============================================================
-- Oferta de lançamento do parceiro: 1 mês (+1 se não vender) — 2026-10-27
-- ============================================================
-- Pedido do utilizador: "faz apenas no primeiro mês e continua com esse
-- desconto mais um mês caso não tenha vendas".
-- - Sem taxa no primeiro mês depois de criar o perfil (`partner_free_months`).
-- - Se nesse primeiro período não tiver nenhuma venda paga, a oferta
--   continua mais `partner_free_extra_months` (1) mês.
-- Conta feita em `create-payment-intent` (gravada em cada pagamento) e
-- mostrada na app ao parceiro.

begin;

alter table public.platform_settings
  add column if not exists partner_free_extra_months integer not null default 1
    check (partner_free_extra_months between 0 and 12);

update public.platform_settings
set partner_free_months = 1, partner_free_extra_months = 1, updated_at = now()
where id = 1;

commit;
