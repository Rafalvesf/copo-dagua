-- ============================================================
-- Módulo: Onboarding (mobile-app/onboarding/database.md)
-- ============================================================

create table public.onboarding_progress (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  current_step text not null,
  draft_data jsonb not null default '{}',
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.onboarding_progress enable row level security;

create policy "Users manage own onboarding progress"
  on public.onboarding_progress for all
  using (auth.uid() = user_id);

grant select, insert, update, delete on public.onboarding_progress to app_authenticated;

-- Semente da wedding (RN03 do Onboarding) — estendida no módulo Wedding.
create table public.weddings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id),
  partner_name text,
  wedding_date date,
  location text,
  estimated_guests integer,
  estimated_budget numeric(10,2),
  created_at timestamptz not null default now()
);

-- Semente do supplier_profile (RN04 do Onboarding) — estendida em backend/suppliers.
create table public.supplier_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  business_name text not null,
  categories text[] not null default '{}',
  service_areas text[] default '{}',
  tax_id text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

grant select, insert, update on public.weddings to app_authenticated;
grant select, insert, update on public.supplier_profiles to app_authenticated;
