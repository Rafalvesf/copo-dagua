-- ============================================================
-- 081 — Onboarding v2 (desenhado no canvas, 2026-10-17)
-- ============================================================
--
-- * Organizadores: até 2 tipos de evento (+ "Qual?" quando é "Outro") e
--   os telemóveis de quem organiza.
-- * Convidados: vários acompanhantes, cada um com refeição, alergias e
--   telemóvel (opcional).
-- * Parceiros: o "passo 4" muda por categoria — um número (ou mínimo e
--   máximo) e o que oferecem.

-- ---------- organizadores ----------

alter table public.weddings
  drop constraint if exists weddings_event_type_check;

alter table public.weddings
  add constraint weddings_event_type_check
  check (event_type in (
    'wedding', 'baptism', 'birthday', 'communion', 'engagement',
    'vow_renewal', 'graduation', 'corporate', 'baby_shower', 'other'
  ));

alter table public.weddings
  add column if not exists event_types text[] not null default '{}',
  add column if not exists event_type_other text,
  add column if not exists partner1_phone text,
  add column if not exists partner2_phone text;

-- ---------- convidados ----------

create table if not exists public.guest_companions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  name text not null,
  is_child boolean not null default false,
  child_age integer,
  phone text,
  menu text,
  allergies text[] not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists guest_companions_guest_idx on public.guest_companions (guest_id);

alter table public.guest_companions enable row level security;

-- O próprio convidado (conta ligada à linha de `guests`) gere os seus
-- acompanhantes; quem organiza o evento pode vê-los.
drop policy if exists guest_companions_owner_all on public.guest_companions;
create policy guest_companions_owner_all on public.guest_companions
  for all
  using (exists (
    select 1 from public.guests g
    where g.id = guest_companions.guest_id and g.linked_profile_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.guests g
    where g.id = guest_companions.guest_id
      and g.linked_profile_id = auth.uid()
      and g.wedding_id = guest_companions.wedding_id
  ));

drop policy if exists guest_companions_members_read on public.guest_companions;
create policy guest_companions_members_read on public.guest_companions
  for select
  using (public.is_wedding_member(wedding_id));

-- ---------- parceiros ----------

alter table public.partner_profiles
  add column if not exists key_figure_max integer,
  add column if not exists offerings text[] not null default '{}';
