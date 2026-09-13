-- ============================================================
-- Módulo: Bookings (partner_app) — visibilidade do casamento para o
-- parceiro com uma reserva/pedido de orçamento
-- ============================================================
--
-- Mesma classe de gap de `015_booking_participant_visibility.sql`,
-- encontrado ao testar essa migração contra dados reais (2026-08-31): a
-- policy de select de `weddings` só deixa `is_wedding_member()` ver a
-- linha (`003_wedding.sql`), e um parceiro nunca é membro do casamento —
-- o join `bookings -> weddings` para `Booking.city` em
-- `partner_app_providers.dart` voltava sempre `null` em silêncio.

create or replace function public.is_booking_partner_for_wedding(target_wedding_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.bookings b
    where b.wedding_id = target_wedding_id and b.partner_id = auth.uid()
  ) or exists (
    select 1 from public.quote_requests q
    where q.wedding_id = target_wedding_id and q.partner_id = auth.uid()
  );
$$;

revoke execute on function public.is_booking_partner_for_wedding(uuid) from public, anon;
grant execute on function public.is_booking_partner_for_wedding(uuid) to authenticated;

create policy "Booking partner can view wedding"
  on public.weddings for select
  using (public.is_booking_partner_for_wedding(id));
