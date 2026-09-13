-- ============================================================
-- Módulo: Bookings (mobile-app couple + partner) — ligação real
-- (backend/bookings/database.md, partner-app/bookings/database.md)
-- ============================================================
--
-- Gap encontrado ao ligar `partner_bookings_screen.dart`/
-- `couple_bookings_screen.dart` ao Supabase real (2026-08-31, Fase 4 de
-- ROADMAP.md): para mostrar o nome da contraparte de uma reserva
-- (`Booking.clientName` do lado do parceiro), o cliente precisa de um
-- join `bookings`/`quote_requests` -> `profiles`, mas `profiles` só tinha
-- "o próprio vê o seu perfil" e "admin vê tudo"
-- (`001_authentication.sql`) — qualquer join a partir de outro
-- utilizador voltava `null` em silêncio por causa da RLS, sem erro
-- nenhum. Mesma classe de gap do trigger de signup em
-- `011_auth_provisioning.sql`: implícito no desenho do ecrã, nunca
-- coberto por uma policy.

create or replace function public.is_booking_counterpart(target_profile_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.bookings b
    where (b.couple_id = target_profile_id and b.partner_id = auth.uid())
       or (b.partner_id = target_profile_id and b.couple_id = auth.uid())
  ) or exists (
    select 1 from public.quote_requests q
    where (q.couple_id = target_profile_id and q.partner_id = auth.uid())
       or (q.partner_id = target_profile_id and q.couple_id = auth.uid())
  );
$$;

revoke execute on function public.is_booking_counterpart(uuid) from public, anon;
grant execute on function public.is_booking_counterpart(uuid) to authenticated;

create policy "Booking counterpart can view profile"
  on public.profiles for select
  using (public.is_booking_counterpart(id));

-- ============================================================
-- Ações do parceiro sobre um pedido de orçamento recebido
-- (partner_bookings_screen.dart / booking_detail_screen.dart,
-- botões "Responder"/"Recusar" — antes só existiam contra o
-- `MockBackend`, sem equivalente real nenhum).
-- ============================================================

create or replace function public.mark_quote_request_viewed(p_quote_request_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status quote_request_status;
  v_partner_id uuid;
begin
  select status, partner_id into v_status, v_partner_id
  from public.quote_requests where id = p_quote_request_id for update;

  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_status = 'pending' then
    update public.quote_requests set status = 'viewed', updated_at = now() where id = p_quote_request_id;
  end if;
end;
$$;

create or replace function public.decline_quote_request(p_quote_request_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status quote_request_status;
  v_partner_id uuid;
begin
  select status, partner_id into v_status, v_partner_id
  from public.quote_requests where id = p_quote_request_id for update;

  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_status not in ('pending', 'viewed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.quote_requests set status = 'declined', updated_at = now() where id = p_quote_request_id;
end;
$$;

revoke execute on function public.mark_quote_request_viewed(uuid) from public, anon;
revoke execute on function public.decline_quote_request(uuid) from public, anon;
grant execute on function public.mark_quote_request_viewed(uuid) to authenticated;
grant execute on function public.decline_quote_request(uuid) to authenticated;
