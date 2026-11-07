-- ============================================================
-- 161 — Plano Pro dos parceiros + fundadores geridos no admin
-- ============================================================
-- Pedido do utilizador (2026-11-07): "faz o plano pro e configurar os
-- fundadores e os convites a partir do admin". Escolhas: Pro para
-- parceiros, 19 €/mês (190 €/ano), com selo Pro e mais visibilidade,
-- estatísticas detalhadas e loja sem limites.
--
--   • partner_profiles.pro_until: Pro ativo enquanto for no futuro. Só a
--     Edge Function partner-pro (Stripe Billing) e o admin o mudam.
--   • Loja: sem Pro, até free_shop_products produtos (5).
--   • partner_pro_stats(): visitas ao perfil e pedidos começados (funil,
--     migração 154) — só para Pro.
--   • Admin: admin_set_founder (dar/tirar "Parceiro Fundador") e
--     admin_set_partner_pro (dar Pro à mão, ex.: oferta).
--   As definições (vagas e meses dos fundadores, convites, preços do Pro)
--   são colunas de platform_settings editadas na página Definições.
--
-- Corre DEPOIS da 160.

begin;

alter table public.platform_settings
  add column if not exists pro_enabled boolean not null default true,
  add column if not exists pro_price_monthly numeric(8,2) not null default 19 check (pro_price_monthly >= 1),
  add column if not exists pro_price_yearly numeric(8,2) not null default 190 check (pro_price_yearly >= 1),
  add column if not exists free_shop_products integer not null default 5 check (free_shop_products between 0 and 1000);

alter table public.partner_profiles
  add column if not exists pro_until timestamptz,
  add column if not exists pro_interval text check (pro_interval in ('month', 'year', 'gift')),
  add column if not exists pro_subscription_id text,
  add column if not exists stripe_customer_id text;

create or replace function public.is_partner_pro(p_partner uuid)
returns boolean
language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce((select pro_until > now() from public.partner_profiles where id = p_partner), false);
$$;
grant execute on function public.is_partner_pro(uuid) to authenticated, anon;

-- O parceiro não mexe nos campos do Pro (só o admin e a Edge Function).
create or replace function public.protect_partner_pro()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if coalesce(auth.role(), '') in ('authenticated', 'anon') and not public.is_admin() then
    new.pro_until := old.pro_until;
    new.pro_interval := old.pro_interval;
    new.pro_subscription_id := old.pro_subscription_id;
    new.stripe_customer_id := old.stripe_customer_id;
  end if;
  return new;
end;
$$;
drop trigger if exists protect_partner_pro on public.partner_profiles;
create trigger protect_partner_pro before update on public.partner_profiles
  for each row execute function public.protect_partner_pro();

-- Parceiros Pro (para o selo e para subir na pesquisa).
create or replace function public.pro_partner_ids()
returns setof uuid
language sql stable security definer set search_path = public, pg_temp as $$
  select id from public.partner_profiles where pro_until > now() and status = 'published';
$$;
grant execute on function public.pro_partner_ids() to authenticated, anon;

-- O meu Pro.
create or replace function public.my_partner_pro()
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'enabled', coalesce(s.pro_enabled, true),
    'active', coalesce(p.pro_until > now(), false),
    'until', p.pro_until,
    'interval', p.pro_interval,
    'has_subscription', p.pro_subscription_id is not null,
    'price_monthly', s.pro_price_monthly,
    'price_yearly', s.pro_price_yearly,
    'free_shop_products', s.free_shop_products,
    'products', (select count(*) from public.partner_products pr where pr.partner_id = p.id)
  )
  from public.partner_profiles p, public.platform_settings s
  where p.id = auth.uid() and s.id = 1;
$$;
revoke execute on function public.my_partner_pro() from public, anon;
grant execute on function public.my_partner_pro() to authenticated;

-- Loja: limite de produtos sem Pro.
create or replace function public.enforce_shop_limit()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_limit int;
begin
  if public.is_partner_pro(new.partner_id) then return new; end if;
  select free_shop_products into v_limit from public.platform_settings where id = 1;
  if (select count(*) from public.partner_products where partner_id = new.partner_id) >= coalesce(v_limit, 5) then
    raise exception 'shop_limit' using errcode = 'P0001', detail = coalesce(v_limit, 5)::text;
  end if;
  return new;
end;
$$;
drop trigger if exists enforce_shop_limit on public.partner_products;
create trigger enforce_shop_limit before insert on public.partner_products
  for each row execute function public.enforce_shop_limit();

-- Estatísticas Pro: visitas ao perfil e pedidos começados (últimas 8
-- semanas, por semana) e os totais dos últimos 30 dias vs os 30 antes.
create or replace function public.partner_pro_stats()
returns jsonb
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_ref text := auth.uid()::text;
begin
  if v_uid is null or not public.is_partner_pro(v_uid) then
    return jsonb_build_object('pro', false);
  end if;
  return jsonb_build_object(
    'pro', true,
    'views_30d', (select count(*) from public.funnel_events where step = 'partner_view' and props->>'ref' = v_ref and created_at > now() - interval '30 days'),
    'views_prev_30d', (select count(*) from public.funnel_events where step = 'partner_view' and props->>'ref' = v_ref
                         and created_at between now() - interval '60 days' and now() - interval '30 days'),
    'quote_starts_30d', (select count(*) from public.funnel_events where step = 'quote_request_start' and props->>'ref' = v_ref and created_at > now() - interval '30 days'),
    'requests_30d', (select count(*) from public.quote_requests where partner_id = v_uid and created_at > now() - interval '30 days'),
    'promotion_clicks_30d', coalesce((select count(*) from public.promotion_clicks where partner_id = v_uid and created_at > now() - interval '30 days'), 0),
    'views_by_week', (
      select coalesce(jsonb_agg(jsonb_build_object('start', wk, 'views', n) order by wk), '[]'::jsonb)
      from (
        select g.wk::date as wk,
               (select count(*) from public.funnel_events f
                where f.step = 'partner_view' and f.props->>'ref' = v_ref
                  and f.created_at >= g.wk and f.created_at < g.wk + interval '7 days') as n
        from generate_series(date_trunc('week', now()) - interval '7 weeks', date_trunc('week', now()), interval '1 week') as g(wk)
      ) w
    )
  );
end;
$$;
revoke execute on function public.partner_pro_stats() from public, anon;
grant execute on function public.partner_pro_stats() to authenticated;

-- ---------- Admin ----------
-- Dar ou tirar "Parceiro Fundador" (com o destaque grátis dos primeiros).
create or replace function public.admin_set_founder(p_partner uuid, p_make boolean)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  s record;
  n integer;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  if p_make then
    select founder_number into n from public.partner_profiles where id = p_partner;
    if n is not null then return n; end if;
    select * into s from public.platform_settings where id = 1;
    perform pg_advisory_xact_lock(hashtext('partner_founder_number'));
    select coalesce(max(founder_number), 0) + 1 into n from public.partner_profiles;
    update public.partner_profiles
    set founder_number = n,
        featured_until = case when n <= coalesce(s.founder_featured_slots, 0) and coalesce(s.founder_featured_months, 0) > 0
                              then greatest(coalesce(featured_until, now()), now() + make_interval(months => s.founder_featured_months))
                              else featured_until end,
        featured = case when n <= coalesce(s.founder_featured_slots, 0) and coalesce(s.founder_featured_months, 0) > 0 then true else featured end
    where id = p_partner;
    return n;
  else
    update public.partner_profiles
    set founder_number = null,
        featured = case when featured_until is not null then false else featured end,
        featured_until = null
    where id = p_partner;
    return null;
  end if;
end;
$$;
revoke execute on function public.admin_set_founder(uuid, boolean) from public, anon;
grant execute on function public.admin_set_founder(uuid, boolean) to authenticated;

-- Dar Pro à mão por N meses (0 = tirar). Não mexe numa subscrição Stripe.
create or replace function public.admin_set_partner_pro(p_partner uuid, p_months integer)
returns timestamptz
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_until timestamptz;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  if p_months is null or p_months <= 0 then
    update public.partner_profiles set pro_until = null, pro_interval = null where id = p_partner and pro_subscription_id is null;
    return null;
  end if;
  update public.partner_profiles
  set pro_until = greatest(coalesce(pro_until, now()), now()) + make_interval(months => least(p_months, 36)),
      pro_interval = coalesce(case when pro_subscription_id is null then 'gift' end, pro_interval)
  where id = p_partner
  returning pro_until into v_until;
  return v_until;
end;
$$;
revoke execute on function public.admin_set_partner_pro(uuid, integer) from public, anon;
grant execute on function public.admin_set_partner_pro(uuid, integer) to authenticated;

-- Resumo para a página Definições.
create or replace function public.admin_growth_summary()
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select case when not public.is_admin() then null else jsonb_build_object(
    'founders', (select count(*) from public.partner_profiles where founder_number is not null),
    'founders_featured', (select count(*) from public.partner_profiles where founder_number is not null and featured_until > now()),
    'pro_active', (select count(*) from public.partner_profiles where pro_until > now()),
    'pro_paying', (select count(*) from public.partner_profiles where pro_until > now() and pro_subscription_id is not null),
    'referrals', coalesce((select count(*) from public.partner_referrals), 0),
    'referrals_counted', coalesce((select count(*) from public.partner_referrals where seq is not null), 0)
  ) end;
$$;
revoke execute on function public.admin_growth_summary() from public, anon;
grant execute on function public.admin_growth_summary() to authenticated;

commit;
