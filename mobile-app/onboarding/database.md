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

> **Nota de sincronização:** `partner_name_2`, `partner_1_age` e `partner_2_age` foram acrescentados depois de `database/migrations/002_onboarding.sql` já ter sido implementado e testado uma primeira vez contra Postgres. A migração real e a suite de testes de RLS foram atualizadas e **re-validadas contra Postgres 16** com este novo shape — 11 de 11 testes continuam a passar. Ver `docs/architecture/TESTING_NOTES.md`.

**Nota para o módulo Wedding:** o schema de `weddings` acima é a "semente" mínima — `mobile-app/wedding/` estende esta tabela (colaboradores, RSVP settings, etc. — ver `database/migrations/003_wedding.sql`), não a recria. Evita duas fontes de verdade para a mesma entidade.

**`partner_profiles` — correção (2026-08-30):** esta secção descrevia originalmente uma segunda "semente", criada no passo 2 do wizard (RN04) e destinada a ser estendida por `backend/partners/`. Esse módulo nunca foi escrito; em vez disso `partner-app/profile/` assumiu o domínio e definiu `partner_profiles` do zero (`database/migrations/005_partner_profile.sql`), com um desenho de chave primária incompatível com o que estava aqui (`id` é FK 1:1 para `profiles`, não um `id` próprio com `user_id` separado). As duas migrações não podiam coexistir — descoberto só ao aplicá-las a um Postgres real pela primeira vez em conjunto. `partner-app/profile/database.md` é agora a fonte de verdade única para este schema; a semente foi removida de `002_onboarding.sql`.

Isto deixa RN04 acima ("o `partner_profile` é criado em `draft` assim que nome + categoria estão definidos") desalinhada com `partner-app/profile/api.md`, que descreve a criação via trigger `on-partner-created` no momento do signup, ainda por implementar (ver `partner-app/profile/tasks.md`). Reconciliar os dois fica como trabalho pendente — não resolvido aqui para não alargar o âmbito desta correção.
