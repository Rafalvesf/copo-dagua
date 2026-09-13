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
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

-- login_attempts guarda emails + IPs de TODAS as tentativas de login,
-- falhadas ou não — nunca deve ter grants de cliente. A escrita acontece
-- na Edge Function `check-login-rate-limit` (backend/auth/api.md), que
-- corre com service_role e por isso ignora RLS/GRANT por completo; nenhum
-- role de cliente precisa de acesso direto a esta tabela.
-- Bug real encontrado 2026-08-30 (lint do Supabase, "RLS Disabled in
-- Public"): esta tabela nunca teve `enable row level security`, e tinha
-- `grant select, insert ... to authenticated` — qualquer utilizador
-- autenticado conseguia ler o histórico de login de todos os outros.
alter table public.login_attempts enable row level security;

create policy "Admins can view login attempts"
  on public.login_attempts for select
  using (public.is_admin());

-- Sem isto, a policy acima nunca é sequer avaliada: GRANT de tabela é
-- verificado por Postgres antes de RLS, por isso um admin (is_admin() =
-- true) continuava a não conseguir ler `login_attempts` através do
-- cliente Supabase, apesar da policy estar correta. Seguro porque a
-- policy continua a restringir a leitura só a admins — qualquer outro
-- utilizador autenticado obtém sempre 0 linhas.
grant select on public.login_attempts to authenticated;

grant select, insert, update on public.profiles to authenticated;
