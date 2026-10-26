-- ============================================================
-- Taxas por escalões, com teto por reserva — 2026-10-26
-- ============================================================
-- Pedido do utilizador ("tetos de 1000 € e 300 €"):
-- - Organizador: 2,5% do valor da reserva, no máximo 300 € por reserva.
-- - Parceiro: 8% até 2 000 €, 6% de 2 000 € a 10 000 €, 4% acima
--   (escalões marginais, como no IRS), no máximo 1 000 € por reserva.
-- Ambas com IVA incluído (regime normal). As taxas calculam-se sobre o
-- total da reserva e dividem-se pelo sinal e pelo restante na proporção
-- de cada um (`fee_rates`). Cada pagamento grava a taxa do parceiro na
-- Stripe quando é cobrado, por isso mudar estes valores só afeta
-- pagamentos novos.
-- `partner_fee_percentage` (migração 123) deixa de ser usada.

begin;

alter table public.platform_settings
  add column if not exists organizer_fee_cap numeric(10,2),
  add column if not exists partner_fee_tiers jsonb,
  add column if not exists partner_fee_cap numeric(10,2);

update public.platform_settings set
  platform_commission_percentage = 2.5,
  organizer_fee_cap = coalesce(organizer_fee_cap, 300),
  partner_fee_tiers = coalesce(partner_fee_tiers, '[{"up_to":2000,"pct":8},{"up_to":10000,"pct":6},{"up_to":null,"pct":4}]'::jsonb),
  partner_fee_cap = coalesce(partner_fee_cap, 1000),
  updated_at = now()
where id = 1;

-- Taxas efetivas (percentagem do valor) para uma reserva com este total.
create or replace function public.fee_rates(p_total numeric)
returns table (organizer_pct numeric, partner_pct numeric)
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  s record;
  t jsonb;
  prev numeric := 0;
  top numeric;
  fee numeric := 0;
  org numeric;
begin
  select * into s from public.platform_settings where id = 1;
  if p_total is null or p_total <= 0 then
    organizer_pct := coalesce(s.platform_commission_percentage, 0);
    partner_pct := 0;
    return next; return;
  end if;
  org := p_total * coalesce(s.platform_commission_percentage, 0) / 100;
  if s.organizer_fee_cap is not null then org := least(org, s.organizer_fee_cap); end if;
  for t in select * from jsonb_array_elements(coalesce(s.partner_fee_tiers, '[]'::jsonb)) loop
    top := nullif(t->>'up_to', '')::numeric;
    if top is null or top > p_total then top := p_total; end if;
    if top > prev then fee := fee + (top - prev) * (t->>'pct')::numeric / 100; prev := top; end if;
    exit when prev >= p_total;
  end loop;
  if s.partner_fee_cap is not null then fee := least(fee, s.partner_fee_cap); end if;
  organizer_pct := org / p_total * 100;
  partner_pct := fee / p_total * 100;
  return next;
end;
$$;
grant execute on function public.fee_rates(numeric) to authenticated, service_role;

commit;
