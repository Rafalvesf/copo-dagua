-- 208_no_free_months.sql
-- Nunca há meses sem taxa (pedido do Rafael, 2026-11-21: «nunca oferecemos a
-- app sem taxa, remove os 3 meses sem taxas»). Os parceiros novos e os
-- fundadores pagam a taxa desde a primeira reserva. Os campos ficam a 0 (a
-- app, o admin e a `create-payment-intent` já não os usam).
-- Continua só o cliente trazido pelo próprio parceiro (a cada N, sem
-- comissão do parceiro — migração 151).

update public.platform_settings
   set partner_free_months = 0,
       partner_free_extra_months = 0,
       founder_free_months = 0,
       updated_at = now()
 where id = 1;

insert into public.applied_migrations (id) values ('208') on conflict do nothing;
