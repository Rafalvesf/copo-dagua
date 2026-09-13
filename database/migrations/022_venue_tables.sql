-- ============================================================
-- Módulo: Seating (mobile-app couple) — inventário real de mesas do
-- local (partner-app, categoria "venue")
-- ============================================================
--
-- Pedido explícito do utilizador: o número de mesas em Lugares deve vir
-- do local de casamento real que o casal contratou, não de uma
-- estimativa derivada do número de convidados (era assim que
-- `SeatingController._capacityFor()` funcionava até agora, só em
-- `MockBackend`). Antes de haver reserva a um parceiro de categoria
-- "venue", não há nenhum número real — a app mostra "-" em vez de
-- inventar uma estimativa.
--
-- Um parceiro de categoria "venue" (`partner_categories.slug = 'venue'`,
-- "Espaço / Quinta") pode configurar quantos tipos de mesa tem
-- disponíveis (forma + lugares por mesa + quantidade) — ex: "10 mesas
-- redondas de 8 lugares" + "2 mesas retangulares de 10 lugares". O total
-- de mesas do casal é a soma de `quantity` de todos os tipos do local
-- que contratou.

create type public.table_shape as enum ('round', 'rectangular', 'square');

create table public.partner_venue_tables (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  shape public.table_shape not null,
  seats integer not null check (seats > 0),
  quantity integer not null check (quantity > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index partner_venue_tables_partner_idx on public.partner_venue_tables (partner_id);

alter table public.partner_venue_tables enable row level security;

-- Mesmo padrão de partner_portfolio_items/partner_profile_categories
-- (005_partner_profile.sql): uma policy ALL para o dono (cobre
-- select/insert/update/delete das suas próprias linhas), mais policies
-- de select à parte para quem mais pode ver.
create policy "Owner manages own venue tables"
  on public.partner_venue_tables for all
  using (partner_id = auth.uid());

create policy "Visible when parent profile visible"
  on public.partner_venue_tables for select
  using (public.is_partner_profile_visible(partner_id) or public.is_admin());

-- Mesmo gap fechado em 017_booking_counterpart_partner_profile_visibility.sql
-- para partner_profiles/partner_profile_categories: um casal com reserva
-- real a este local precisa de ver o inventário mesmo que o perfil já
-- não esteja `published` (suspenso, pausado, etc.).
create policy "Booking counterpart can view venue tables"
  on public.partner_venue_tables for select
  using (public.is_booking_counterpart(partner_id));
