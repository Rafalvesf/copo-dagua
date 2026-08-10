# Onboarding — Modelo de Dados

Não introduz tabelas de domínio novas — cria registos mínimos em tabelas que pertencem substantivamente a outros módulos, mais uma tabela própria de controlo de progresso.

```sql
-- Controlo de progresso do wizard (permite retomar exatamente onde ficou)
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
```

```sql
-- Semente da wedding, criada no fim do wizard (RN03).
-- Modelo completo e definitivo pertence a mobile-app/wedding/database.md
create table public.weddings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id),
  partner_name_1 text not null,
  partner_name_2 text,
  partner_1_age integer,
  partner_2_age integer,
  wedding_date date,
  location text,
  estimated_guests integer,
  estimated_budget numeric(10,2),
  created_at timestamptz not null default now()
);
```

> **Nota de sincronização (pendente):** `partner_name_2`, `partner_1_age` e `partner_2_age` foram acrescentados depois de `database/migrations/002_onboarding.sql` já ter sido implementado e testado contra Postgres (ver `docs/architecture/TESTING_NOTES.md`). A migração real e a suite de testes de RLS ainda **não** foram atualizadas para refletir este novo shape — fazê-lo antes de assumir este schema como validado.

```sql
-- Semente do supplier_profile, criada no passo 2 (RN04).
-- Modelo completo pertence a backend/suppliers/database.md
create table public.supplier_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  business_name text not null,
  categories text[] not null default '{}',
  service_areas text[] default '{}',
  tax_id text,
  status text not null default 'draft', -- draft | pending_review | active | rejected | suspended
  created_at timestamptz not null default now()
);
```

**Nota para os módulos Wedding e Suppliers:** este schema é a "semente" mínima — esses módulos vão estender estas tabelas (colaboradores, portefólio completo, RSVP settings, etc.), não recriá-las. Evita duas fontes de verdade para a mesma entidade.
