-- ============================================================
-- Módulo: Serviços e preços real do parceiro
-- ============================================================
--
-- Substitui `MockBackend.servicePackages`/`serviceExtras` (100% mock até
-- agora) pelo backend real exigido pelo passo 5 do onboarding
-- obrigatório ("Serviços: pelo menos 1 serviço/pacote"). Desenho
-- confirmado pelo utilizador: "servicos: up to 3 options or por
-- orcamento only. partner can choose" — um parceiro escolhe UM dos dois
-- modos (`partner_pricing_mode`), nunca os dois ao mesmo tempo:
--   - 'packages'    até 3 pacotes reais em `partner_service_packages`
--   - 'quote_only'  sem pacotes nenhuns, casais pedem orçamento à medida
-- `ServiceExtra` (mock) fica de fora — não fazia parte da especificação
-- do onboarding obrigatório, só o conceito "pacote" foi pedido.

alter table public.partner_profiles
  add column pricing_mode public.partner_pricing_mode not null default 'quote_only';

create table public.partner_service_packages (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  name text not null,
  description text not null default '',
  price numeric(10,2) not null,
  -- "ou 'a partir de'" (pedido do utilizador) — preço é um mínimo, não
  -- um valor fechado, mostrado com prefixo "A partir de" na UI.
  is_starting_price boolean not null default false,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index partner_service_packages_partner_idx
  on public.partner_service_packages (partner_id, position);

-- Limite de 3 pacotes — mesmo padrão de enforce_partner_category_limit()
-- (005_partner_profile.sql): regra entre linhas, não expressável como
-- check constraint simples.
create or replace function public.enforce_partner_package_limit()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if (select count(*) from public.partner_service_packages where partner_id = new.partner_id) >= 3 then
    raise exception 'Um parceiro pode ter no máximo 3 pacotes de serviço';
  end if;
  return new;
end;
$$;

create trigger partner_package_limit_check
  before insert on public.partner_service_packages
  for each row execute function public.enforce_partner_package_limit();

-- ============================================================
-- RLS — mesmo padrão de partner_portfolio_items
-- (005_partner_profile.sql/023_portfolio_storage.sql): visível quando o
-- perfil-pai é visível ou é o próprio dono/admin; só o dono escreve.
-- ============================================================

alter table public.partner_service_packages enable row level security;

create policy "Visible when parent profile visible"
  on public.partner_service_packages for select
  using (
    partner_id = auth.uid()
    or public.is_partner_profile_visible(partner_id)
    or public.is_admin()
  );

create policy "Owner manages own packages"
  on public.partner_service_packages for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

grant select, insert, update, delete on public.partner_service_packages to authenticated;

-- ============================================================
-- partner_profile_requirements_met() / submit_partner_profile_for_review()
-- — acrescenta a condição de serviços (026_partner_auto_submission.sql):
-- 'quote_only' já satisfaz por si só (RN não exige pacotes nesse modo),
-- 'packages' exige pelo menos 1 linha em partner_service_packages.
-- ============================================================

create or replace function public.partner_profile_requirements_met(p_partner_id uuid)
returns boolean
language plpgsql
stable
set search_path = public, pg_temp
as $$
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
    and (v_profile.pricing_mode = 'quote_only' or v_package_count >= 1);
end;
$$;

create or replace function public.submit_partner_profile_for_review()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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

  if array_length(v_missing, 1) is not null then
    raise exception 'incomplete_profile' using errcode = 'P0005', detail = array_to_string(v_missing, ',');
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = auth.uid();
end;
$$;

-- ============================================================
-- Trigger de submissão automática para partner_service_packages —
-- mesmo padrão de trg_auto_submit_from_portfolio
-- (026_partner_auto_submission.sql). Mudança de pricing_mode não
-- precisa de trigger novo: já é uma coluna de partner_profiles, coberta
-- por auto_submit_after_partner_profile_update.
-- ============================================================

create or replace function public.trg_auto_submit_from_packages()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  perform public.maybe_auto_submit_partner_profile(coalesce(new.partner_id, old.partner_id));
  return coalesce(new, old);
end;
$$;

create trigger auto_submit_after_package_change
  after insert or delete on public.partner_service_packages
  for each row execute function public.trg_auto_submit_from_packages();
