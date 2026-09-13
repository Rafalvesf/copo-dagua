-- ============================================================
-- Motor de tarefas contextual — pedido explícito e extenso do
-- utilizador (2026-09-01): substitui a checklist manual estática por
-- um sistema que decide sozinho QUANDO uma tarefa é relevante (data
-- do casamento) e SE ainda é necessária (dados reais da plataforma).
--
-- Análise da estrutura atual feita antes desta migração (pedido
-- explícito do utilizador): `checklist_items` (031_checklist.sql) é
-- pura CRUD manual, sem nenhuma lógica de regras. Não existe
-- `favorite_partners` em lado nenhum (o coração nos cartões de
-- parceiro é só `bool` local, sem persistência). Não existe nenhuma
-- tabela de notificações. Existem DOIS sistemas de categoria em
-- paralelo — o enum antigo de 5 valores (`PartnerCategory`, usado por
-- Checklist/Budget) e a taxonomia real de 14 slugs
-- (`partner_categories`, usada pelo Marketplace/quote_requests/
-- bookings) — esta migração usa sempre a taxonomia real (slugs), por
-- ser a que liga a pedidos de orçamento/propostas/reservas reais.
--
-- Desenho: `task_templates` = regras gerais (o "catálogo" de tarefas
-- possíveis); `wedding_tasks` = tarefas efetivamente relevantes para
-- um casamento concreto. `eligibility_rule`/`completion_rule` são
-- chaves de texto estruturadas (não código arbitrário) interpretadas
-- pelo motor do lado da app — pedido explícito do utilizador.
-- ============================================================

create type public.task_type as enum ('automatic', 'manual', 'system_action');
create type public.task_priority as enum ('low', 'normal', 'high', 'urgent');
create type public.task_status as enum ('upcoming', 'active', 'completed', 'dismissed', 'expired');
create type public.task_source as enum ('system', 'user');

-- ------------------------------------------------------------
-- task_templates — catálogo geral, gerido pela app/admin.
-- ------------------------------------------------------------
create table public.task_templates (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  title text not null,
  description text,
  category text not null,
  task_type public.task_type not null default 'manual',
  priority public.task_priority not null default 'normal',
  partner_category_slug text references public.partner_categories(slug),
  recommended_days_before_event integer,
  due_days_before_event integer,
  action_route text,
  eligibility_rule text not null,
  completion_rule text,
  position integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.task_templates enable row level security;

create policy "Anyone authenticated can view active templates"
  on public.task_templates for select
  using (active or public.is_admin());

create policy "Admins can insert templates"
  on public.task_templates for insert
  with check (public.is_admin());

create policy "Admins can update templates"
  on public.task_templates for update
  using (public.is_admin());

grant select on public.task_templates to authenticated;
grant insert, update on public.task_templates to authenticated;

-- ------------------------------------------------------------
-- wedding_tasks — tarefas reais de um casamento (geradas a partir de
-- um template, ou criadas manualmente pelo casal quando
-- `task_template_id is null`).
-- ------------------------------------------------------------
create table public.wedding_tasks (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  task_template_id uuid references public.task_templates(id),
  source public.task_source not null default 'system',
  title text not null,
  description text,
  category text,
  priority public.task_priority not null default 'normal',
  status public.task_status not null default 'upcoming',
  due_date date,
  available_at timestamptz not null default now(),
  completed_at timestamptz,
  dismissed_at timestamptz,
  completion_source text,
  seen boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Idempotência (RN55): nunca duplicar a mesma tarefa de template para
-- o mesmo casamento. Tarefas manuais (task_template_id null) ficam
-- de fora deste índice — o casal pode criar quantas quiser.
create unique index wedding_tasks_wedding_template_uidx
  on public.wedding_tasks (wedding_id, task_template_id)
  where task_template_id is not null;

create index wedding_tasks_wedding_status_idx on public.wedding_tasks (wedding_id, status);

alter table public.wedding_tasks enable row level security;

create policy "Members manage wedding tasks"
  on public.wedding_tasks for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

-- ------------------------------------------------------------
-- wedding_service_preferences — onboarding "o que já têm tratado?"
-- (RN37/38): por categoria real, o casal diz se precisa, já tem
-- reservado (na app ou fora dela) ou não precisa. `not_needed`
-- impede o motor de continuar a sugerir essa categoria.
-- ------------------------------------------------------------
create table public.wedding_service_preferences (
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  partner_category_slug text not null references public.partner_categories(slug),
  preference text not null check (preference in ('needed', 'already_booked', 'not_needed')),
  external_partner_name text,
  external_amount numeric(10, 2),
  external_contact text,
  external_notes text,
  updated_at timestamptz not null default now(),
  primary key (wedding_id, partner_category_slug)
);

alter table public.wedding_service_preferences enable row level security;

create policy "Members manage service preferences"
  on public.wedding_service_preferences for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

-- ------------------------------------------------------------
-- notifications — "Nova tarefa" (e no futuro outros tipos). Nunca
-- duplica a tarefa em si (RN53/54) — só o aviso, com referência à
-- tarefa real.
-- ------------------------------------------------------------
create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  type text not null,
  title text not null,
  body text,
  wedding_task_id uuid references public.wedding_tasks(id) on delete cascade,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create index notifications_wedding_id_idx on public.notifications (wedding_id, created_at desc);

alter table public.notifications enable row level security;

create policy "Members manage notifications"
  on public.notifications for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

-- ------------------------------------------------------------
-- favorite_partners — não existia (RN26). Necessária para as regras
-- de elegibilidade que dependem de "casal já guardou favoritos nesta
-- categoria" (secção 21/26 do pedido).
-- ------------------------------------------------------------
create table public.favorite_partners (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (wedding_id, partner_id)
);

alter table public.favorite_partners enable row level security;

create policy "Members manage favorites"
  on public.favorite_partners for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));
