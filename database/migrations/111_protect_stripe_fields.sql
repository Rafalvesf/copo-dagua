-- ============================================================
-- Campos da Stripe do parceiro só mudam pelo servidor
-- ============================================================
-- Encontrado na revisão de 2026-10-20: um parceiro podia, pela API, pôr
-- `stripe_charges_enabled = true` no próprio perfil e contornar a regra
-- "só é verificado quem tem pagamentos ativos" (104). Estes campos só
-- podem ser mudados pelas Edge Functions (chave de serviço) e pela
-- sincronização com a Stripe.
create or replace function public.guard_partner_stripe_fields()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  if coalesce(auth.role(), '') in ('authenticated', 'anon') then
    new.stripe_account_id := old.stripe_account_id;
    new.stripe_charges_enabled := old.stripe_charges_enabled;
    new.stripe_payouts_enabled := old.stripe_payouts_enabled;
  end if;
  return new;
end;
$$;

drop trigger if exists guard_partner_stripe_fields on public.partner_profiles;
create trigger guard_partner_stripe_fields before update on public.partner_profiles
  for each row execute function public.guard_partner_stripe_fields();
