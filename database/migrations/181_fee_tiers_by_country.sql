-- 181 — Taxa de serviço por escalões e pelo cartão de quem paga (corrige a
-- 180, pedido 2026-11-11). Cada par é "até 2 000 €" / "acima de 2 000 €"
-- (escalões marginais, como antes), + 1 € por pagamento:
--   cartão europeu (Espaço Económico Europeu) .. 4% / 3%
--   cartão do Reino Unido ...................... 5% / 4%
--   cartão de fora da Europa ................... 6% / 5%
-- A lei (PSD2) não deixa cobrar mais por cartões de particulares do Espaço
-- Económico Europeu — esses pagam sempre a taxa base. MB WAY, Multibanco,
-- Apple Pay e Google Pay pagam a base.
-- O parceiro paga 4% + 1 € até 2 000 € e 3% + 1 € acima (reservas e Loja).
-- Os bilhetes não mudam. O país do parceiro deixa de contar.

begin;

update public.platform_settings
set region_fees = '{
      "EEA":   {"organizer":[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]},
      "GB":    {"organizer":[{"pct":5,"up_to":2000},{"pct":4,"up_to":null}]},
      "OTHER": {"organizer":[{"pct":6,"up_to":2000},{"pct":5,"up_to":null}]}
    }'::jsonb,
    organizer_fee_tiers = '[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]'::jsonb,
    partner_fee_tiers = '[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]'::jsonb,
    updated_at = now()
where id = 1;

alter table public.platform_settings
  alter column region_fees set default '{
      "EEA":   {"organizer":[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]},
      "GB":    {"organizer":[{"pct":5,"up_to":2000},{"pct":4,"up_to":null}]},
      "OTHER": {"organizer":[{"pct":6,"up_to":2000},{"pct":5,"up_to":null}]}
    }'::jsonb;

-- A app mostra antes de pagar a taxa base (cartão europeu); o valor final
-- com outro cartão aparece depois de o introduzir.
create or replace function public.partner_fee_rates(p_partner_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'region', 'EEA',
    'organizer', coalesce(s.region_fees -> 'EEA' -> 'organizer', s.organizer_fee_tiers),
    'partner', s.partner_fee_tiers
  )
  from public.platform_settings s
  where s.id = 1;
$$;
revoke execute on function public.partner_fee_rates(uuid) from public, anon;
grant execute on function public.partner_fee_rates(uuid) to authenticated;

insert into public.applied_migrations (id) values ('181') on conflict do nothing;

commit;
