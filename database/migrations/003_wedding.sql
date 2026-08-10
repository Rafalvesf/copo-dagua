-- ============================================================
-- Módulo: Wedding (mobile-app/wedding/database.md)
-- ============================================================

alter table public.weddings
  add column venue text,
  add column ceremony_type text,
  add column cover_photo_url text,
  add column status text not null default 'planning',
  add column pending_deletion_at timestamptz,
  add column completed_at timestamptz,
  add column updated_at timestamptz not null default now();

create type wedding_collaborator_status as enum ('pending', 'active', 'removed');

create table public.wedding_collaborators (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  user_id uuid references public.profiles(id),
  invited_email text not null,
  status wedding_collaborator_status not null default 'pending',
  invited_at timestamptz not null default now(),
  accepted_at timestamptz,
  removed_at timestamptz
);

create unique index wedding_collaborators_unique_active
  on public.wedding_collaborators (wedding_id, invited_email)
  where status != 'removed';

-- Função is_wedding_member() — security definer, segunda função de
-- referência da plataforma (a par de is_admin()).
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

alter table public.weddings enable row level security;
alter table public.wedding_collaborators enable row level security;

create policy "Members can view wedding"
  on public.weddings for select
  using (public.is_wedding_member(id) or public.is_admin());

create policy "Members can update wedding"
  on public.weddings for update
  using (public.is_wedding_member(id));

create policy "Only owner can delete wedding"
  on public.weddings for delete
  using (owner_id = auth.uid());

-- Necessário para que o owner consiga criar a wedding no Onboarding.
create policy "Owner can insert wedding"
  on public.weddings for insert
  with check (owner_id = auth.uid());

create policy "Members can view collaborators"
  on public.wedding_collaborators for select
  using (public.is_wedding_member(wedding_id) or public.is_admin());

create policy "Only owner manages collaborators"
  on public.wedding_collaborators for all
  using (
    exists (
      select 1 from public.weddings w
      where w.id = wedding_id and w.owner_id = auth.uid()
    )
  );

grant select, insert, update, delete on public.wedding_collaborators to app_authenticated;
grant delete on public.weddings to app_authenticated;
