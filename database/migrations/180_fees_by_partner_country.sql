-- 180 — Taxa de serviço pelo país do parceiro (pedido 2026-11-11).
--
-- A taxa depende de onde o parceiro está (onde presta o serviço e recebe),
-- nunca do cartão de quem paga:
--   Portugal ............ organizador 4% + 1 € · parceiro 3% + 1 €
--   resto da Europa ..... organizador 5% + 1 € · parceiro 4% + 1 €
--   fora da Europa ...... organizador 6% + 1 € · parceiro 5% + 1 €
-- O 1 € continua em `platform_settings.fixed_fee_cents`.
-- O país vem da conta Stripe do parceiro (`create-payment-intent` grava-o
-- em `partner_profiles.country` na primeira vez); sem país, Portugal.

begin;

alter table public.partner_profiles
  add column if not exists country text;

alter table public.partner_profiles
  drop constraint if exists partner_profiles_country_check;
alter table public.partner_profiles
  add constraint partner_profiles_country_check check (country is null or country ~ '^[A-Z]{2}$');

alter table public.platform_settings
  add column if not exists region_fees jsonb not null default
    '{"PT":{"organizer":4,"partner":3},"EUROPE":{"organizer":5,"partner":4},"OTHER":{"organizer":6,"partner":5}}'::jsonb;

-- Apps antigas e o admin leem os escalões: ficam com os valores de Portugal.
update public.platform_settings
set organizer_fee_tiers = '[{"pct":4,"up_to":null}]'::jsonb,
    partner_fee_tiers = '[{"pct":3,"up_to":null}]'::jsonb,
    updated_at = now()
where id = 1;

-- PT | EUROPE (Espaço Económico Europeu, Suíça e Reino Unido) | OTHER
create or replace function public.fee_region(p_country text)
returns text
language sql
immutable
as $$
  select case
    when p_country is null or upper(p_country) = 'PT' then 'PT'
    when upper(p_country) = any (array[
      'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU',
      'MT','NL','PL','RO','SK','SI','ES','SE','IS','LI','NO','CH','GB'
    ]) then 'EUROPE'
    else 'OTHER'
  end;
$$;

-- Taxas que se aplicam a um parceiro (a app mostra-as antes de pagar).
create or replace function public.partner_fee_rates(p_partner_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'region', r.region,
    'organizer', (s.region_fees -> r.region ->> 'organizer')::numeric,
    'partner', (s.region_fees -> r.region ->> 'partner')::numeric
  )
  from public.platform_settings s
  cross join lateral (
    select public.fee_region((select country from public.partner_profiles where id = p_partner_id)) as region
  ) r
  where s.id = 1;
$$;
revoke execute on function public.partner_fee_rates(uuid) from public, anon;
grant execute on function public.partner_fee_rates(uuid) to authenticated;

insert into public.applied_migrations (id) values ('180') on conflict do nothing;

commit;
