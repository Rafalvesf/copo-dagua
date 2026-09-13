-- ============================================================
-- Módulo: Orçamento e despesas
-- ============================================================
--
-- Pedido explícito do utilizador: "switch them to real live data" —
-- substitui `MockBackend.getBudget/updateBudgetTotal/listExpenses/
-- addExpense/updateExpense`. Corrige também um bug real reportado em
-- produção: `MockBackend.getBudget()` usava
-- `budgets.firstWhere((b) => b.weddingId == weddingId)` **sem
-- `orElse`** — para qualquer casamento real (criado desde que
-- `weddingControllerProvider` passou a usar Supabase a sério, muito
-- antes desta ronda), esse id nunca batia certo com nenhum casamento
-- fictício semeado no mock, o `firstWhere` lançava `StateError`, e como
-- `BudgetController.load()` não tinha `try/catch`, o ecrã ficava preso
-- em `loading: true` para sempre — "a página orçamento fica a carregar
-- infinitamente".
--
-- `budget_categories.amount` (já gasto nessa categoria) mantém-se uma
-- coluna própria, independente da soma real de `expenses` — replica de
-- propósito o mesmo desenho (não ligado) que já existia no mock, para
-- não mudar o comportamento do produto além do necessário para tirar o
-- mock; não existe nenhuma UI de edição de categorias ainda (só
-- leitura em `_CategoriesSection`), por isso ficam vazias para
-- casamentos novos até essa UI ser construída.

create table public.budgets (
  wedding_id uuid primary key references public.weddings(id) on delete cascade,
  total numeric(12,2) not null default 0,
  updated_at timestamptz not null default now()
);

create table public.budget_categories (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  name text not null,
  partner_category text,
  amount numeric(12,2) not null default 0,
  allocated numeric(12,2) not null default 0,
  position integer not null default 0
);

create index budget_categories_wedding_idx on public.budget_categories (wedding_id, position);

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  title text not null,
  category text,
  amount numeric(12,2) not null,
  due_date date,
  paid boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index expenses_wedding_idx on public.expenses (wedding_id);

alter table public.budgets enable row level security;
alter table public.budget_categories enable row level security;
alter table public.expenses enable row level security;

create policy "Members manage budget"
  on public.budgets for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

create policy "Members manage budget categories"
  on public.budget_categories for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

create policy "Members manage expenses"
  on public.expenses for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

grant select, insert, update, delete on public.budgets to authenticated;
grant select, insert, update, delete on public.budget_categories to authenticated;
grant select, insert, update, delete on public.expenses to authenticated;
