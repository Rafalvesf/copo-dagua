-- ============================================================
-- Módulo: Lugares — atribuição de convidados a mesas
-- ============================================================
--
-- Pedido explícito do utilizador: "switch them to real live data" —
-- substitui `MockBackend.listSeatingTables/addSeatingTable/
-- updateSeatingTable/removeSeatingTable`. O NÚMERO de mesas
-- (`partner_venue_tables`, `022_venue_tables.sql`) já era real; só a
-- atribuição de QUAIS convidados sentam-se em cada mesa continuava
-- mock — mesmo padrão de `004_guests.sql`/`031_checklist.sql`.
--
-- `position` explícito em vez de confiar na ordem de inserção — o
-- controller (`seating_controller.dart`) depende de "a mesa no índice
-- N da lista" ser sempre a mesma mesa entre recarregamentos (contiguidade
-- garantida: nunca há mesa preenchida depois de mesa vazia), e Postgres
-- não garante ordem sem `ORDER BY` explícito.

create table public.seating_tables (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_ids uuid[] not null default '{}',
  rectangular boolean not null default false,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index seating_tables_wedding_idx on public.seating_tables (wedding_id, position);

alter table public.seating_tables enable row level security;

create policy "Members manage seating"
  on public.seating_tables for all
  using (public.is_wedding_member(wedding_id))
  with check (public.is_wedding_member(wedding_id));

grant select, insert, update, delete on public.seating_tables to authenticated;
