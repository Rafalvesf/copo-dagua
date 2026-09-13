-- ============================================================
-- Módulo: Onboarding (mobile-app/onboarding/database.md)
-- ============================================================

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

grant select, insert, update, delete on public.onboarding_progress to authenticated;

-- Semente da wedding (RN03 do Onboarding) — estendida no módulo Wedding.
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

-- NOTA (bug real encontrado 2026-08-30, primeira vez que 002+005 foram
-- aplicadas juntas a um Postgres real): esta migração continha uma segunda
-- "semente", `partner_profiles`, pensada para ser estendida por
-- `backend/partners/` (nunca escrito). Em vez disso, `partner-app/profile/`
-- assumiu o módulo e definiu `partner_profiles` do zero em
-- database/migrations/005_partner_profile.sql, com um desenho de PK
-- incompatível (id = FK 1:1 para profiles, não um id próprio + user_id
-- separado) — as duas migrações não podiam coexistir. 005 é a versão
-- correta: totalmente documentada com RLS, API e usada em todo
-- partner-app/profile/ e admin-web/partners/. A semente foi removida daqui;
-- ver mobile-app/onboarding/database.md.

grant select, insert, update on public.weddings to authenticated;
