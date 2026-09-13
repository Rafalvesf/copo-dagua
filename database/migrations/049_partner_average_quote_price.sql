-- ============================================================
-- Partner Profile — valor médio para parceiros "só orçamento"
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-04): "os parceiros quando
-- colocam a opção orçamento devem colocar um valor médio para os
-- orçamentos que tem, isto para o casal ter uma ideia de quanto lhes
-- pode ficar este parceiro". Até agora um parceiro em `pricing_mode =
-- 'quote_only'` (`028_partner_service_packages.sql`) não tinha nenhum
-- valor associado — o casal via só "pede uma proposta à medida", sem
-- nenhuma pista de preço, ao contrário de `pricing_mode = 'packages'`
-- (que já tem `partner_service_packages.price`).
--
-- Nullable e sem validação de obrigatoriedade aqui de propósito — não
-- pedido pelo utilizador ("devem colocar" é orientação de produto, não
-- necessariamente bloqueio técnico no MVP; um parceiro que ainda não
-- preencheu continua visível, só sem a pista de preço).
alter table public.partner_profiles
  add column average_quote_price numeric(10,2);
