# Authentication — Modelo de Dados

Supabase gere a tabela `auth.users` automaticamente (email, password hash, provider, etc.). Estendemos com uma tabela pública `profiles`, ligada por `id` (FK para `auth.users.id`).

```sql
-- Enum de papéis
create type user_role as enum ('couple', 'supplier', 'admin');

-- Tabela de perfis (estende auth.users)
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
  status text not null default 'active', -- active | pending_deletion | suspended | deleted
  pending_deletion_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Índices
create unique index profiles_role_idx on public.profiles (role);
create index profiles_status_idx on public.profiles (status);

-- Log de tentativas de login falhadas (anti brute-force)
create table public.login_attempts (
  id bigint generated always as identity primary key,
  email text not null,
  ip_address inet,
  success boolean not null,
  attempted_at timestamptz not null default now()
);
create index login_attempts_email_idx on public.login_attempts (email, attempted_at);
```

## Row Level Security (RLS) — crítico

```sql
alter table public.profiles enable row level security;

-- Utilizador só lê/edita o seu próprio perfil
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Admins veem tudo
create policy "Admins can view all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );
```

## Decisão de arquitetura

Usar uma função `is_admin()` como `security definer` em vez de repetir o `exists(...)` em cada policy de cada módulo, para evitar duplicação e inconsistência à medida que os módulos crescem. Esta função deve ficar documentada como padrão transversal em `docs/architecture/RLS_POLICY.md` (a criar) e reutilizada por todos os módulos backend seguintes.
