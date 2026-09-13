-- ============================================================
-- Módulo: Bookings (mobile-app couple) — visibilidade do perfil do
-- parceiro reservado quando esse perfil já não está `published`
-- ============================================================
--
-- Terceiro gap da mesma classe de `015_booking_participant_visibility.sql`/
-- `016_booking_partner_wedding_visibility.sql`, encontrado ao auditar
-- sistematicamente as policies existentes contra todos os joins reais que
-- `coupleBookingsProvider` faz (2026-08-31): `partner_profiles`/
-- `partner_profile_categories` só ficam visíveis para outro utilizador
-- via `is_partner_profile_visible()` (exige `status = 'published'`).
-- Um casal com uma reserva real e confirmada perde silenciosamente o
-- nome/categoria desse parceiro assim que o perfil deixa de estar
-- publicado (suspenso, pausado, ou nunca chegou a sair de `draft` — como
-- a conta de teste usada para verificar esta fase). Verificado
-- diretamente contra o Supabase real antes desta correção: 0 linhas
-- visíveis nas duas tabelas para um casal com reserva confirmada a um
-- parceiro em `draft`.

create policy "Booking counterpart can view partner profile"
  on public.partner_profiles for select
  using (public.is_booking_counterpart(id));

create policy "Booking counterpart can view partner categories"
  on public.partner_profile_categories for select
  using (public.is_booking_counterpart(partner_id));
