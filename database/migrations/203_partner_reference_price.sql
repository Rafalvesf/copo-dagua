-- 203_partner_reference_price.sql
-- Valor de referência para parceiros que só trabalham por orçamento
-- (pedido do Rafael, 2026-11-20). O valor já existe
-- (`average_quote_price`, migração 049, que o parceiro escreve em «Preços
-- e pacotes»); falta dizer para que tipo de evento é ("Bolo de 3 andares
-- para 100 pessoas"). Aparece no perfil («Quanto pode custar»), na barra de
-- baixo e no popup «Pedir orçamento».

begin;

alter table public.partner_profiles
  add column if not exists reference_note text
    check (reference_note is null or char_length(reference_note) <= 80);

insert into public.applied_migrations (id) values ('203') on conflict do nothing;

commit;
