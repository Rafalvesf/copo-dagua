-- ============================================================
-- Taxa do parceiro (2%) e IVA na comissão — 2026-10-26
-- ============================================================
-- Pedido do utilizador: a taxa da Stripe levava grande parte da comissão.
-- Passa a ser 5% pagos pelo organizador (por cima do valor do parceiro) +
-- 2% descontados ao parceiro quando o dinheiro é libertado. Ambos com IVA
-- incluído (regime normal, 23%).
-- - A taxa do parceiro fica gravada em cada pagamento no momento em que é
--   cobrado (metadata do PaymentIntent `partner_fee_cents`), por isso
--   mudar a percentagem só afeta pagamentos novos. Pagamentos feitos antes
--   desta mudança libertam o valor inteiro (era o que a app prometia).
-- - `payments.partner_fee_amount` / `transferred_amount`: o que foi
--   descontado e transferido, gravados na libertação.

begin;

alter table public.platform_settings
  add column if not exists partner_fee_percentage numeric(5,2) not null default 2.00
    check (partner_fee_percentage >= 0 and partner_fee_percentage < 50),
  add column if not exists commission_vat_percentage numeric(5,2) not null default 23.00
    check (commission_vat_percentage >= 0 and commission_vat_percentage < 100);

alter table public.payments
  add column if not exists partner_fee_amount numeric(10,2),
  add column if not exists transferred_amount numeric(10,2);

drop function if exists public.mark_payment_released(uuid, text);
create or replace function public.mark_payment_released(
  p_payment_id uuid,
  p_transfer_id text,
  p_partner_fee numeric default null,
  p_transferred numeric default null
)
returns void language sql security definer set search_path = public, pg_temp as $$
  update public.payments
  set released_at = now(), transfer_id = p_transfer_id,
      partner_fee_amount = p_partner_fee, transferred_amount = p_transferred,
      updated_at = now()
  where id = p_payment_id and released_at is null;
$$;
revoke all on function public.mark_payment_released(uuid, text, numeric, numeric) from public, anon, authenticated;
grant execute on function public.mark_payment_released(uuid, text, numeric, numeric) to service_role;

commit;
