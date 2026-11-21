-- 209_pro_free_trial.sql
-- Premium grátis 3 meses depois de pôr o cartão (pedido do Rafael,
-- 2026-11-21: «oferecemos o modo pro apenas … após colocarem o cartão de
-- crédito», 3 meses). Uma só vez por parceiro: o cartão fica guardado e, no
-- fim dos meses grátis, a subscrição começa a ser cobrada (pode cancelar
-- antes). É a única oferta grátis — nunca há meses sem taxa (208).

alter table public.platform_settings
  add column if not exists pro_trial_months integer not null default 3;
alter table public.partner_profiles
  add column if not exists pro_trial_used_at timestamptz;

create or replace function public.my_partner_pro()
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
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
    'products', (select count(*) from public.partner_products pr where pr.partner_id = p.id),
    -- 209: meses grátis com cartão (0 = sem oferta) e se ainda os pode usar.
    'trial_months', coalesce(s.pro_trial_months, 0),
    'trial_available', coalesce(s.pro_trial_months, 0) > 0 and p.pro_trial_used_at is null
                       and p.pro_subscription_id is null and not coalesce(p.pro_until > now(), false)
  )
  from public.partner_profiles p, public.platform_settings s
  where p.id = auth.uid() and s.id = 1;
$$;

insert into public.applied_migrations (id) values ('209') on conflict do nothing;
