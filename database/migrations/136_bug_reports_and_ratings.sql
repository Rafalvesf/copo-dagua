-- ============================================================
-- Reportar erros + classificar a app — 2026-10-31
-- ============================================================
-- Pedido do utilizador: "adiciona uma opção para denúncia de bugs e um
-- pop up para classificar a app".
-- - Erros: pedidos de suporte com a nova categoria `bug` (Definições →
--   Ajuda → "Reportar um erro"); aparecem no admin em Suporte.
-- - Classificações: `app_ratings` (1–5 estrelas + comentário opcional),
--   pedidas num pop-up depois de alguns dias de uso. Média e comentários
--   no topo da página Suporte do admin.

alter type public.support_ticket_category add value if not exists 'bug';

begin;

create table if not exists public.app_ratings (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  stars int not null check (stars between 1 and 5),
  comment text check (comment is null or char_length(comment) <= 500),
  platform text check (platform is null or char_length(platform) <= 20),
  created_at timestamptz not null default now()
);
create index if not exists app_ratings_created_idx on public.app_ratings (created_at desc);
create index if not exists app_ratings_profile_idx on public.app_ratings (profile_id);

alter table public.app_ratings enable row level security;
drop policy if exists "Own ratings insert" on public.app_ratings;
create policy "Own ratings insert" on public.app_ratings for insert
  with check (profile_id = (select auth.uid()));
drop policy if exists "Own ratings or admin read" on public.app_ratings;
create policy "Own ratings or admin read" on public.app_ratings for select
  using (profile_id = (select auth.uid()) or public.is_admin());
grant select, insert on public.app_ratings to authenticated;

commit;
