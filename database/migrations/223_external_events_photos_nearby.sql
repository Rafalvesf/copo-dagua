-- 223 · Eventos reais: crédito da foto e parceiros perto do evento (pedido
-- do Rafael, 2026-11-23, mockup «Página do evento real», B).

alter table public.external_events add column if not exists image_credit text;

-- Parceiros publicados perto de um ponto (restaurantes, alojamento,
-- transporte, bares, experiências), com o destaque pago primeiro, depois
-- os destacados pela equipa e por fim os mais perto. Só devolve ids e
-- distância; a app lê o resto com a mesma consulta dos Parceiros.
create or replace function public.partners_near_point(
  p_lat double precision,
  p_lng double precision,
  p_km double precision default 10,
  p_limit integer default 8
)
returns table (partner_id uuid, distance_km double precision, paid boolean)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with near as (
    select pp.id,
           6371 * 2 * asin(sqrt(
             power(sin(radians(pp.latitude - p_lat) / 2), 2) +
             cos(radians(p_lat)) * cos(radians(pp.latitude)) * power(sin(radians(pp.longitude - p_lng) / 2), 2)
           )) as km,
           exists (select 1 from public.partner_promotions pr where pr.partner_id = pp.id and pr.status = 'active') as paid,
           coalesce(pp.featured, false) as featured
    from public.partner_profiles pp
    where pp.status = 'published'
      and coalesce(pp.is_paused, false) = false
      and pp.latitude is not null and pp.longitude is not null
      and exists (
        select 1 from public.partner_profile_categories pc
        join public.partner_categories c on c.id = pc.category_id
        where pc.partner_id = pp.id
          and c.slug in ('restaurants', 'lodging', 'transport', 'bars_nightlife', 'experiences_tours')
      )
  )
  select id, round(km::numeric, 1)::double precision, paid
  from near
  where km <= greatest(1, least(coalesce(p_km, 10), 50))
  order by paid desc, featured desc, km
  limit greatest(1, least(coalesce(p_limit, 8), 20));
$$;

grant execute on function public.partners_near_point(double precision, double precision, double precision, integer) to anon, authenticated;

insert into public.applied_migrations (id) values ('223') on conflict do nothing;
