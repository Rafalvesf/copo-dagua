-- ============================================================
-- STUB: schema auth.* do Supabase, para permitir testar em
-- Postgres puro sem o runtime completo do Supabase.
-- Em produção, este schema já existe nativamente no Supabase.
-- ============================================================

create schema if not exists auth;

create table auth.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

-- Simula auth.uid(): lê o utilizador "autenticado" da sessão atual,
-- definido via `set local app.current_user_id = '<uuid>'`.
create or replace function auth.uid()
returns uuid
language sql
stable
as $$
  select nullif(current_setting('app.current_user_id', true), '')::uuid;
$$;

-- Role usado para simular o cliente autenticado (equivalente ao
-- role "authenticated" do Supabase, que é quem sofre RLS).
do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'app_authenticated') then
    create role app_authenticated nologin;
  end if;
end $$;
grant usage on schema auth, public to app_authenticated;
