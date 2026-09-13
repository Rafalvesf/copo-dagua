-- ============================================================
-- Módulo: Nome/foto do casal nas avaliações públicas do parceiro
-- ============================================================
--
-- Até agora, `_ReviewCard` no perfil público do parceiro
-- (`partner_detail_screen.dart`) nunca mostrava o nome/foto do casal
-- autor de uma avaliação, porque `weddings` só é legível pelos
-- próprios membros/admin (RLS de `003_wedding.sql`) — nem outro casal
-- a navegar no Marketplace nem o próprio parceiro avaliado conseguiam
-- ler esse nome via join direto.
--
-- Pedido explícito do utilizador (2026-09-13), depois de confirmado
-- que implica expor o nome/foto do casal a QUALQUER visitante do
-- perfil público (não só a quem tem uma relação real com esse casal):
-- "quando alguém faz uma review deve aparecer o nome, icon da conta
-- para além do rating e comentário... no cartão desse parceiro".
--
-- Esta função expõe deliberadamente SÓ nome + foto de capa, e só para
-- casamentos com pelo menos uma review `published` desse parceiro —
-- nunca o resto de `weddings` (data, local, orçamento, etc.).
create or replace function public.get_review_authors(p_partner_id uuid)
returns table (wedding_id uuid, display_name text, cover_photo_url text)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select distinct w.id, w.partner_name_1 || coalesce(' & ' || nullif(w.partner_name_2, ''), ''), w.cover_photo_url
  from public.reviews r
  join public.weddings w on w.id = r.wedding_id
  where r.partner_id = p_partner_id and r.status = 'published';
$$;

revoke execute on function public.get_review_authors(uuid) from public;
grant execute on function public.get_review_authors(uuid) to anon, authenticated;
