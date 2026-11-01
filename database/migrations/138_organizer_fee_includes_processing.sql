-- ============================================================
-- Taxa do organizador inclui o processamento do pagamento — 2026-11-01
-- ============================================================
-- Pedido do utilizador: "a taxa de transação deve ser paga por quem
-- começou a transação". Na UE não se pode cobrar ao consumidor um extra
-- por pagar com cartão, por isso o custo da Stripe (cerca de 1,5% + 0,25 €
-- nos cartões europeus) passa a estar incluído na taxa de serviço do
-- organizador, igual para todos os métodos de pagamento:
--   4% até 2 000 €, 3% de 2 000 € a 10 000 €, 2,5% acima (antes 2,5/1,5/1).
-- Continua editável no admin (Definições → Comissões). Só afeta pagamentos
-- criados depois desta mudança.

begin;

update public.platform_settings
set organizer_fee_tiers = '[{"up_to": 2000, "pct": 4}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 2.5}]'::jsonb,
    platform_commission_percentage = 4,
    updated_at = now()
where id = 1;

commit;
