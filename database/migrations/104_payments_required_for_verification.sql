-- ============================================================
-- Pagamentos ativos são obrigatórios para o perfil ser verificado
-- ============================================================
-- Pedido do utilizador (2026-10-20): o parceiro tem de ativar os métodos de
-- pagamento (conta Stripe com pagamentos ativos) antes de o perfil ser
-- verificado e aparecer na página dos parceiros.
--   1. partner_profile_requirements_met(): passa a exigir
--      stripe_charges_enabled — o envio automático para revisão só
--      acontece com os pagamentos ativos (o trigger em partner_profiles
--      volta a tentar quando a Stripe confirma a conta).
--   2. submit_partner_profile_for_review(): 'payments' na lista do que falta.
--   3. Guarda: nenhum perfil passa a 'published' sem pagamentos ativos
--      (erro 'payments_not_enabled', P0010). Perfis já publicados antes
--      desta regra não são alterados.

create or replace function public.partner_profile_requirements_met(p_partner_id uuid)
returns boolean
language plpgsql
stable
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_profile record;
  v_category_count int;
  v_image_count int;
  v_package_count int;
  v_tax_id text;
begin
  select * into v_profile from public.partner_profiles where id = p_partner_id;
  if v_profile is null then
    return false;
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = p_partner_id;
  select count(*) into v_image_count
    from public.partner_portfolio_items
    where partner_id = p_partner_id and media_type = 'image';
  select count(*) into v_package_count from public.partner_service_packages where partner_id = p_partner_id;
  select tax_id into v_tax_id from public.partner_verification where partner_id = p_partner_id;

  return v_profile.business_name <> ''
    and length(v_profile.description) >= 50
    and v_category_count >= 1
    and v_image_count >= 3
    and (v_profile.nationwide or array_length(v_profile.service_areas, 1) is not null)
    and v_tax_id is not null and v_tax_id <> ''
    and v_profile.cover_photo_url is not null and v_profile.cover_photo_url <> ''
    and (v_profile.pricing_mode = 'quote_only' or v_package_count >= 1)
    and coalesce(v_profile.stripe_charges_enabled, false);
end;
$function$;

create or replace function public.submit_partner_profile_for_review()
returns void
language plpgsql
security definer
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_profile record;
  v_category_count int;
  v_image_count int;
  v_package_count int;
  v_tax_id text;
  v_missing text[] := '{}';
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_profile from public.partner_profiles where id = auth.uid() for update;
  if v_profile is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_profile.status not in ('draft', 'rejected', 'changes_required') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = auth.uid();
  select count(*) into v_image_count
    from public.partner_portfolio_items
    where partner_id = auth.uid() and media_type = 'image';
  select count(*) into v_package_count from public.partner_service_packages where partner_id = auth.uid();
  select tax_id into v_tax_id from public.partner_verification where partner_id = auth.uid();

  if v_profile.business_name = '' then v_missing := array_append(v_missing, 'business_name'); end if;
  if length(v_profile.description) < 50 then v_missing := array_append(v_missing, 'description'); end if;
  if v_category_count < 1 then v_missing := array_append(v_missing, 'categories'); end if;
  if v_image_count < 3 then v_missing := array_append(v_missing, 'portfolio'); end if;
  if not v_profile.nationwide and array_length(v_profile.service_areas, 1) is null then
    v_missing := array_append(v_missing, 'service_areas');
  end if;
  if v_tax_id is null or v_tax_id = '' then v_missing := array_append(v_missing, 'tax_id'); end if;
  if v_profile.cover_photo_url is null or v_profile.cover_photo_url = '' then
    v_missing := array_append(v_missing, 'logo');
  end if;
  if v_profile.pricing_mode = 'packages' and v_package_count < 1 then
    v_missing := array_append(v_missing, 'services');
  end if;
  if not coalesce(v_profile.stripe_charges_enabled, false) then
    v_missing := array_append(v_missing, 'payments');
  end if;

  if array_length(v_missing, 1) is not null then
    raise exception 'incomplete_profile' using errcode = 'P0005', detail = array_to_string(v_missing, ',');
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = auth.uid();
end;
$function$;

create or replace function public.guard_publish_requires_payments()
returns trigger
language plpgsql
set search_path to 'public', 'pg_temp'
as $$
begin
  if new.status = 'published' and old.status is distinct from 'published'
     and not coalesce(new.stripe_charges_enabled, false) then
    raise exception 'payments_not_enabled' using errcode = 'P0010',
      hint = 'O parceiro tem de ativar os pagamentos antes de o perfil ser verificado.';
  end if;
  return new;
end;
$$;

drop trigger if exists guard_publish_requires_payments on public.partner_profiles;
create trigger guard_publish_requires_payments
  before update of status on public.partner_profiles
  for each row execute function public.guard_publish_requires_payments();
