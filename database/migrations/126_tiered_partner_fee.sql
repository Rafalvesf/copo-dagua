-- ============================================================
-- Taxa do parceiro por escalões + organizador 2,5% — 2026-10-26
-- ============================================================
-- Decisão do utilizador ("sem tetos, 8/6/4% + 2,5%"):
-- - organizador paga 2,5% por cima do valor do parceiro ("proteção de
--   pagamento"), IVA incluído;
-- - parceiro paga uma taxa por escalões marginais sobre o valor total da
--   reserva: 8% até 2 000 €, 6% de 2 000 € a 10 000 €, 4% acima. IVA
--   incluído. Cada pagamento (sinal, restante) leva a parte proporcional.
-- A conta é feita na Edge Function `create-payment-intent` e gravada no
-- pagamento (metadata `partner_fee_cents`); a app mostra a mesma conta.
-- `partner_fee_percentage` (migração 123) fica como reserva se os
-- escalões estiverem vazios.

begin;

alter table public.platform_settings
  add column if not exists partner_fee_tiers jsonb not null
    default '[{"up_to": 2000, "pct": 8}, {"up_to": 10000, "pct": 6}, {"up_to": null, "pct": 4}]'::jsonb;

update public.platform_settings
set platform_commission_percentage = 2.5,
    partner_fee_tiers = '[{"up_to": 2000, "pct": 8}, {"up_to": 10000, "pct": 6}, {"up_to": null, "pct": 4}]'::jsonb,
    updated_at = now()
where id = 1;

commit;
