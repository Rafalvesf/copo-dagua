-- ============================================================
-- Módulo: Guests (mobile-app/guests/database.md)
-- ============================================================

create type rsvp_status as enum ('pending', 'invited', 'confirmed', 'declined');
create type guest_side as enum ('couple_a', 'couple_b', 'both');

create table public.guests (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  group_label text,
  side guest_side not null default 'both',
  plus_one_allowed boolean not null default false,
  plus_one_name text,
  dietary_restrictions text,
  guest_message text,
  rsvp_status rsvp_status not null default 'pending',
  rsvp_token uuid not null default gen_random_uuid(),
  invite_sent_at timestamptz,
  rsvp_responded_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index guests_rsvp_token_idx on public.guests (rsvp_token);
create index guests_wedding_idx on public.guests (wedding_id);
create index guests_rsvp_status_idx on public.guests (wedding_id, rsvp_status);

alter table public.guests enable row level security;

create policy "Members manage guests"
  on public.guests for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

grant select, insert, update, delete on public.guests to app_authenticated;
