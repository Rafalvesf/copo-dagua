-- ============================================================
-- Oferta de lançamento do parceiro: 2 meses sem taxa — 2026-10-31
-- ============================================================
-- Pedido do utilizador: "publicita a oferta de 2 meses apenas para
-- parceiros ... e muda isso no código".
-- - Parceiros novos não pagam a taxa À Nossa! nos 2 primeiros meses depois
--   de criarem o perfil, sem condições (antes: 1 mês + 1 se não vendessem,
--   migração 128).
-- - A taxa do organizador não muda (não há oferta para organizadores).
-- `create-payment-intent` e a app já leem estes valores; com
-- `partner_free_extra_months = 0` a condição de "sem vendas" deixa de contar.

begin;

update public.platform_settings
set partner_free_months = 2, partner_free_extra_months = 0, updated_at = now()
where id = 1;

commit;
