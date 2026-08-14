-- ============================================================
-- Módulo: Authentication (backend/auth/database.md)
-- ============================================================

create extension if not exists pgcrypto;

create type user_role as enum ('couple', 'partner', 'admin');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null,
  full_name text not null,
  avatar_url text,
  phone text,
  locale text not null default 'pt-PT',
  onboarding_completed boolean not null default false,
  email_verified_at timestamptz,
  mfa_enabled boolean not null default false,
  status text not null default 'active',
  pending_deletion_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_status_idx on public.profiles (status);

create table public.login_attempts (
  id bigint generated always as identity primary key,
  email text not null,
  ip_address inet,
  success boolean not null,
  attempted_at timestamptz not null default now()
);
create index login_attempts_email_idx on public.login_attempts (email, attempted_at);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Função is_admin() — security definer, padrão de referência para
-- todos os módulos seguintes.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

grant select, insert, update on public.profiles to app_authenticated;
grant select, insert on public.login_attempts to app_authenticated;
