-- ============================================================
-- Taxa do parceiro igual à do organizador — 2026-11-01
-- ============================================================
-- Pedido do utilizador (opção B): a mesma tabela para os dois lados,
--   4% até 2 000 €, 3% de 2 000 € a 10 000 €, 2,5% acima
-- (antes 5 / 3 / 2). Escalões marginais sobre o valor total da reserva,
-- IVA incluído. Parceiros novos continuam sem taxa nos 2 primeiros meses
-- (migração 135). Só afeta pagamentos criados depois desta mudança.

begin;

update public.platform_settings
set partner_fee_tiers = '[{"up_to": 2000, "pct": 4}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 2.5}]'::jsonb,
    partner_fee_percentage = 4,
    updated_at = now()
where id = 1;

commit;
