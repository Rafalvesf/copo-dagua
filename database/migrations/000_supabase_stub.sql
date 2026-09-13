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

-- Role usado para simular o cliente autenticado. Tem de se chamar
-- literalmente "authenticated" (não "app_authenticated" ou outro nome) —
-- é o nome exato do role nativo do Supabase para quem sofre RLS, e as
-- migrações 001+ fazem GRANT a esse nome assumindo que funcionam sem
-- alteração tanto aqui (Postgres local) como num projeto Supabase real.
-- (Bug real encontrado 2026-08-30: a primeira vez que estas migrações
-- foram aplicadas a um Supabase real, os GRANTs falharam porque este
-- stub tinha criado "app_authenticated" em vez de "authenticated" — ver
-- database/README.md.)
do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then
    create role authenticated nologin;
  end if;
end $$;
grant usage on schema auth, public to authenticated;
