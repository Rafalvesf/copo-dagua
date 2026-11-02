-- ============================================================
-- 150 — Organizador e parceiro: 3.º escalão de 2,5% para 3% — 2026-11-02
-- ============================================================
-- Pedido do utilizador: a taxa do organizador inclui a taxa da Stripe
-- (migração 138). Com 2,5% acima de 10 000 €, um cartão do Reino Unido
-- ou de fora da Europa (~2,5–3,25% + 0,25 €) deixava a margem a zero ou
-- negativa. O parceiro acompanha ("e o parceiro também"). Nova tabela,
-- igual para os dois lados:
--   4% até 2 000 €, 3% acima.
-- Escalões marginais, IVA incluído. Editável no admin (Definições →
-- Comissões). Só afeta pagamentos criados depois desta mudança (a taxa
-- fica gravada em cada pagamento).
-- Independente da 145–149: pode correr antes ou depois.

begin;

update public.platform_settings
set organizer_fee_tiers = '[{"up_to": 2000, "pct": 4}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 3}]'::jsonb,
    partner_fee_tiers = '[{"up_to": 2000, "pct": 4}, {"up_to": 10000, "pct": 3}, {"up_to": null, "pct": 3}]'::jsonb,
    updated_at = now()
where id = 1;

commit;

-- Verificação:
-- select organizer_fee_tiers, partner_fee_tiers from public.platform_settings where id = 1;
