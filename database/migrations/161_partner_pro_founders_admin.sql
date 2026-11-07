-- ============================================================
-- 161 — Plano Pro dos parceiros + fundadores geridos no admin
-- ============================================================
-- Pedido do utilizador (2026-11-07): "faz o plano pro e configurar os
-- fundadores e os convites a partir do admin". Escolhas: Pro para
-- parceiros, 19 €/mês (190 €/ano), com selo Pro e mais visibilidade,
-- estatísticas detalhadas e loja sem limites; e ainda (2026-11-07, mesmo
-- pedido): comissão das reservas 1 ponto mais baixa, cada 3.º cliente
-- trazido sem comissão (em vez do 5.º) e destaque pago a +4% (em vez de +6%).
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
  add column if not exists free_shop_products integer not null default 5 check (free_shop_products between 0 and 1000),
  add column if not exists pro_fee_discount numeric(4,2) not null default 1 check (pro_fee_discount between 0 and 10),
  add column if not exists pro_referral_free_every integer not null default 3 check (pro_referral_free_every between 1 and 100),
  add column if not exists pro_promotion_extra_pct numeric(5,2) not null default 4 check (pro_promotion_extra_pct between 0 and 50);

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
    'fee_discount', s.pro_fee_discount,
    'referral_free_every', s.referral_free_every,
    'pro_referral_free_every', s.pro_referral_free_every,
    'promotion_extra_pct', s.promotion_extra_pct,
    'pro_promotion_extra_pct', s.pro_promotion_extra_pct,
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

-- ---------- Vantagens Pro nas comissões (2026-11-07) ----------
-- Convites: o Pro tem cliente sem comissão a cada pro_referral_free_every (3).
create or replace function public.referral_free_every_for(p_partner uuid)
returns integer
language sql stable security definer set search_path = public, pg_temp as $$
  select greatest(case when public.is_partner_pro(p_partner) then coalesce(pro_referral_free_every, 3)
                       else coalesce(referral_free_every, 5) end, 1)
  from public.platform_settings where id = 1;
$$;
grant execute on function public.referral_free_every_for(uuid) to authenticated;

create or replace function public.count_partner_referral()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_b record;
  v_ref record;
  v_min numeric;
  v_every integer;
  v_seq integer;
begin
  if new.status <> 'paid' or old.status = 'paid' then
    return new;
  end if;
  select b.couple_id, b.partner_id, b.total_amount into v_b from public.bookings b where b.id = new.booking_id;
  if v_b is null or v_b.couple_id is null then
    return new;
  end if;
  select r.* into v_ref from public.partner_referrals r
  where r.partner_id = v_b.partner_id and r.profile_id = v_b.couple_id;
  if v_ref is null or not v_ref.valid or v_ref.seq is not null then
    return new;
  end if;
  select coalesce(referral_min_booking, 0) into v_min from public.platform_settings where id = 1;
  v_every := public.referral_free_every_for(v_b.partner_id);
  if coalesce(v_b.total_amount, 0) < v_min then
    return new;
  end if;

  perform pg_advisory_xact_lock(hashtext('partner_referral_seq:' || v_b.partner_id::text));
  select coalesce(max(pr.seq), 0) + 1 into v_seq from public.partner_referrals pr where pr.partner_id = v_b.partner_id;
  update public.partner_referrals pr set seq = v_seq, counted_at = now()
  where pr.partner_id = v_b.partner_id and pr.profile_id = v_b.couple_id and pr.seq is null;

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  values (v_b.partner_id, 'partner_referral', 'Cliente do teu convite conta',
          coalesce((select full_name from public.profiles where id = v_b.couple_id), 'Um cliente'),
          'Pagou a primeira reserva contigo.' ||
          case when v_seq % v_every = 0 then ''
               else ' Faltam ' || (v_every - v_seq % v_every) || ' para o próximo cliente sem comissão.' end,
          '/partner-home');
  return new;
end;
$$;

create or replace function public.my_partner_referral_stats()
returns table (referral_code text, founder_number integer, featured_until timestamptz, clients integer,
               counted_clients integer, pending_clients integer, free_every integer, min_booking numeric)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.referral_code, p.founder_number, p.featured_until,
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id),
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id and r.seq is not null),
         (select count(*)::int from public.partner_referrals r where r.partner_id = p.id and r.valid and r.seq is null),
         public.referral_free_every_for(p.id), s.min_booking
  from public.partner_profiles p
  cross join (select greatest(coalesce(referral_free_every, 5), 1) as free_every, coalesce(referral_min_booking, 0) as min_booking
              from public.platform_settings where id = 1) s
  where p.id = (select auth.uid());
$$;

-- Destaque pago: o Pro paga pro_promotion_extra_pct (4%) em vez de 6%.
create or replace function public.booking_promotion_extra(p_booking uuid)
returns numeric
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_b record;
  v_first timestamptz;
  v_days integer;
  v_extra numeric;
begin
  select b.couple_id, b.partner_id, b.created_at into v_b from public.bookings b where b.id = p_booking;
  if v_b is null or v_b.couple_id is null then return 0; end if;
  select least(v_b.created_at, coalesce(min(q.created_at), v_b.created_at)) into v_first
  from public.quote_requests q where q.couple_id = v_b.couple_id and q.partner_id = v_b.partner_id;
  select coalesce(promotion_attribution_days, 30) into v_days from public.platform_settings where id = 1;
  select pp.extra_pct into v_extra
  from public.promotion_clicks k join public.partner_promotions pp on pp.id = k.promotion_id
  where k.profile_id = v_b.couple_id and k.partner_id = v_b.partner_id
    and k.created_at <= v_first and k.created_at > v_first - make_interval(days => v_days)
  order by k.created_at desc limit 1;
  -- Pro (migração 161): destaque mais barato.
  if coalesce(v_extra, 0) > 0 and public.is_partner_pro(v_b.partner_id) then
    v_extra := least(v_extra, (select coalesce(pro_promotion_extra_pct, v_extra) from public.platform_settings where id = 1));
  end if;
  return coalesce(v_extra, 0);
end;
$$;

create or replace function public.my_partner_promotion()
returns table (status text, category_slug text, category_label text, region text, queue_position integer,
               clicks_30d integer, bookings_from_promo integer, extra_pct numeric, slots integer)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.status, p.category_slug, c.label_pt, p.region,
         case when p.status = 'waiting' then (
           select count(*)::int + 1 from public.partner_promotions q
           where q.category_slug = p.category_slug and coalesce(q.region, '') = coalesce(p.region, '')
             and q.status = 'waiting' and q.created_at < p.created_at) end,
         (select count(*)::int from public.promotion_clicks k where k.promotion_id = p.id and k.created_at > now() - interval '30 days'),
         (select count(*)::int from public.bookings b
          where b.partner_id = p.partner_id and public.booking_promotion_extra(b.id) > 0),
         case when public.is_partner_pro(p.partner_id)
              then least(p.extra_pct, (select coalesce(pro_promotion_extra_pct, p.extra_pct) from public.platform_settings where id = 1))
              else p.extra_pct end,
         (select coalesce(promotion_slots, 6) from public.platform_settings where id = 1)
  from public.partner_promotions p
  left join public.partner_categories c on c.slug = p.category_slug
  where p.partner_id = (select auth.uid()) and p.status in ('active', 'waiting')
  limit 1;
$$;

-- A comissão das reservas 1 ponto mais baixa para o Pro (pro_fee_discount)
-- é aplicada na Edge Function create-payment-intent.

commit;
