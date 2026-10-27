-- ============================================================
-- Taxas de lançamento — 2026-10-27
-- ============================================================
-- Pedido do utilizador: as taxas eram altas para o lançamento, e os
-- organizadores "também devem ter algo assim" (escalões).
-- - Parceiro: 5% até 2 000 €, 3% de 2 000 € a 10 000 €, 2% acima.
-- - Organizador: 2,5% até 2 000 €, 1,5% de 2 000 € a 10 000 €, 1% acima.
--   Escalões marginais sobre o valor total da reserva; cada pagamento
--   (sinal, restante) leva a parte proporcional. IVA incluído.
-- - Parceiros novos: sem taxa nos primeiros `partner_free_months` (6)
--   meses depois de criarem o perfil.
-- Tudo editável no admin (Definições → Comissões). Só afeta pagamentos
-- feitos depois da mudança (a taxa fica gravada em cada pagamento).

begin;

alter table public.platform_settings
  add column if not exists organizer_fee_tiers jsonb not null
    default '[{"up_to": 2000, "pct": 2.5}, {"up_to": 10000, "pct": 1.5}, {"up_to": null, "pct": 1}]'::jsonb,
  add column if not exists partner_free_months integer not null default 6
    check (partner_free_months between 0 and 36);

alter table public.platform_settings
  add column if not exists partner_fee_tiers jsonb not null
    default '[{"up_to": 2000, "pct": 5}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 2}]'::jsonb;

update public.platform_settings
set partner_fee_tiers = '[{"up_to": 2000, "pct": 5}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 2}]'::jsonb,
    organizer_fee_tiers = '[{"up_to": 2000, "pct": 2.5}, {"up_to": 10000, "pct": 1.5}, {"up_to": null, "pct": 1}]'::jsonb,
    partner_free_months = 6,
    platform_commission_percentage = 2.5,
    updated_at = now()
where id = 1;

commit;
