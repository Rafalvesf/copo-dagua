# Wedding — Modelo de Dados

## Extensão da tabela `weddings`

A tabela `weddings` foi criada em estado "semente" pelo Onboarding (`mobile-app/onboarding/database.md`). Este módulo estende-a — nunca a recria.

```sql
alter table public.weddings
  add column venue text,
  add column ceremony_type text, -- 'civil' | 'religious' | 'both'
  add column cover_photo_url text,
  add column status text not null default 'planning', -- planning | completed | pending_deletion | deleted
  add column pending_deletion_at timestamptz,
  add column completed_at timestamptz,
  add column updated_at timestamptz not null default now();
```

## Colaboradores

```sql
create type wedding_collaborator_status as enum ('pending', 'active', 'removed');

create table public.wedding_collaborators (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  user_id uuid references public.profiles(id), -- null enquanto o convite está pendente e o convidado ainda não tem conta
  invited_email text not null,
  status wedding_collaborator_status not null default 'pending',
  invited_at timestamptz not null default now(),
  accepted_at timestamptz,
  removed_at timestamptz
);

create unique index wedding_collaborators_unique_active
  on public.wedding_collaborators (wedding_id, invited_email)
  where status != 'removed';
```

## Função `is_wedding_member()` — padrão transversal

Seguindo o mesmo padrão de `is_admin()` estabelecido em Authentication, criamos uma função `security definer` reutilizável por **todos** os módulos que dependem de `wedding_id` (Guests, Budget, Checklist, Marketplace pedidos, Contracts, Payments, Chat).

```sql
create or replace function public.is_wedding_member(target_wedding_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.weddings w
    where w.id = target_wedding_id and w.owner_id = auth.uid()
  )
  or exists (
    select 1 from public.wedding_collaborators wc
    where wc.wedding_id = target_wedding_id
      and wc.user_id = auth.uid()
      and wc.status = 'active'
  );
$$;
```

## RLS

```sql
alter table public.weddings enable row level security;
alter table public.wedding_collaborators enable row level security;

-- Wedding: membros (owner + colaboradores ativos) podem ver e editar
create policy "Members can view wedding"
  on public.weddings for select
  using (public.is_wedding_member(id) or public.is_admin());

create policy "Members can update wedding"
  on public.weddings for update
  using (public.is_wedding_member(id));

-- Só o owner pode eliminar (RN01)
create policy "Only owner can delete wedding"
  on public.weddings for delete
  using (owner_id = auth.uid());

-- Necessário para que o owner consiga criar a wedding (ex: no fim do
-- wizard de Onboarding). Em falta na primeira versão desta policy —
-- encontrado ao testar as migrações contra Postgres real (ver
-- docs/architecture/TESTING_NOTES.md).
create policy "Owner can insert wedding"
  on public.weddings for insert
  with check (owner_id = auth.uid());

-- Colaboradores: membros do casamento podem ver a lista
create policy "Members can view collaborators"
  on public.wedding_collaborators for select
  using (public.is_wedding_member(wedding_id) or public.is_admin());

-- Só o owner pode convidar/remover colaboradores
create policy "Only owner manages collaborators"
  on public.wedding_collaborators for all
  using (
    exists (
      select 1 from public.weddings w
      where w.id = wedding_id and w.owner_id = auth.uid()
    )
  );
```

## Decisão de arquitetura

`is_wedding_member()` passa a ser, a partir deste módulo, a segunda função `security definer` de referência da plataforma (a par de `is_admin()`). Todo o módulo futuro que introduza uma tabela com `wedding_id` deve usar esta função nas suas policies de RLS, em vez de reimplementar a lógica de pertença. Isto deve ficar formalizado em `docs/architecture/RLS_POLICY.md` assim que esse documento transversal for criado (pendente desde o módulo Authentication).
