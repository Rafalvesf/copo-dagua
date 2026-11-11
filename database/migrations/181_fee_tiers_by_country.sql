-- 181 — Taxa de serviço: escalões por país do parceiro (correção da 180,
-- pedido 2026-11-11). Os dois valores de cada país são "até 2 000 €" e
-- "acima de 2 000 €" (escalões marginais, como antes), iguais para o
-- organizador e para o parceiro — reservas e Loja. Os bilhetes não mudam.
--   Portugal ............ 4% + 1 € até 2 000 € · 3% + 1 € acima
--   resto da Europa ..... 5% + 1 € até 2 000 € · 4% + 1 € acima
--   fora da Europa ...... 6% + 1 € até 2 000 € · 5% + 1 € acima

begin;

update public.platform_settings
set region_fees = '{
      "PT":     {"organizer":[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}],
                 "partner":  [{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]},
      "EUROPE": {"organizer":[{"pct":5,"up_to":2000},{"pct":4,"up_to":null}],
                 "partner":  [{"pct":5,"up_to":2000},{"pct":4,"up_to":null}]},
      "OTHER":  {"organizer":[{"pct":6,"up_to":2000},{"pct":5,"up_to":null}],
                 "partner":  [{"pct":6,"up_to":2000},{"pct":5,"up_to":null}]}
    }'::jsonb,
    -- Apps antigas e o admin leem estes: ficam com os de Portugal.
    organizer_fee_tiers = '[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]'::jsonb,
    partner_fee_tiers = '[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]'::jsonb,
    updated_at = now()
where id = 1;

alter table public.platform_settings
  alter column region_fees set default '{
      "PT":     {"organizer":[{"pct":4,"up_to":2000},{"pct":3,"up_to":null}],
                 "partner":  [{"pct":4,"up_to":2000},{"pct":3,"up_to":null}]},
      "EUROPE": {"organizer":[{"pct":5,"up_to":2000},{"pct":4,"up_to":null}],
                 "partner":  [{"pct":5,"up_to":2000},{"pct":4,"up_to":null}]},
      "OTHER":  {"organizer":[{"pct":6,"up_to":2000},{"pct":5,"up_to":null}],
                 "partner":  [{"pct":6,"up_to":2000},{"pct":5,"up_to":null}]}
    }'::jsonb;

-- Devolve os escalões tal como estão guardados (lista ou número).
create or replace function public.partner_fee_rates(p_partner_id uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'region', r.region,
    'organizer', s.region_fees -> r.region -> 'organizer',
    'partner', s.region_fees -> r.region -> 'partner'
  )
  from public.platform_settings s
  cross join lateral (
    select public.fee_region((select country from public.partner_profiles where id = p_partner_id)) as region
  ) r
  where s.id = 1;
$$;
revoke execute on function public.partner_fee_rates(uuid) from public, anon;
grant execute on function public.partner_fee_rates(uuid) to authenticated;

insert into public.applied_migrations (id) values ('181') on conflict do nothing;

commit;
