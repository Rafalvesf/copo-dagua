-- ============================================================
-- Bookings — cancelamento pelo casal/parceiro (backend/bookings/tasks.md,
-- "cancel_booking_by_couple()/cancel_booking_by_partner()", prioridade Alta)
-- ============================================================
-- Antes desta migração não havia forma nenhuma (nem manual via admin) de
-- cancelar uma booking em curso (`awaiting_deposit`/`confirmed`) —
-- `cancelled_by_couple`/`cancelled_by_partner` já existiam no enum
-- `booking_status` (009_quotations_bookings.sql) e já eram mapeados na UI
-- (`mapRealBookingStatus`, `core/home/home_providers.dart`), mas nenhuma
-- função os produzia.
--
-- Âmbito deliberadamente limitado (mesmo raciocínio de admin_confirm_deposit()
-- ser um stub): cancela a booking e falha o sinal `pending` se ainda não
-- tinha sido pago (mesmo padrão de expire_overdue_bookings() em
-- 020_payments.sql). Se o sinal já estava `paid` (booking `confirmed`), a
-- cancelação é permitida na mesma — mas nenhum reembolso é processado
-- automaticamente (sem Stripe refund, fora de âmbito, ver
-- mobile-app/payments/stripe-connect.md); fica sinalizado em
-- booking_events.metadata (`refund_required`) para suporte/admin tratar
-- manualmente, nunca escondido.
--
-- Cancelar liberta a data automaticamente para o mesmo parceiro — o
-- guard de overbooking (056/058) só olha para status in
-- ('awaiting_deposit','confirmed'), por isso não precisa de nenhuma
-- alteração.

create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_refund_required boolean;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('awaiting_deposit', 'confirmed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'deposit' and status = 'paid'
  ) into v_refund_required;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object('reason', p_reason, 'refund_required', v_refund_required));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and type = 'deposit' and status = 'pending';
end;
$$;

create or replace function public.cancel_booking_by_partner(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_refund_required boolean;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('awaiting_deposit', 'confirmed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'deposit' and status = 'paid'
  ) into v_refund_required;

  update public.bookings set status = 'cancelled_by_partner', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_partner', v_booking.status, 'cancelled_by_partner', 'partner', auth.uid(),
          jsonb_build_object('reason', p_reason, 'refund_required', v_refund_required));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and type = 'deposit' and status = 'pending';
end;
$$;

revoke execute on function public.cancel_booking_by_couple(uuid, text) from public, anon;
revoke execute on function public.cancel_booking_by_partner(uuid, text) from public, anon;
grant execute on function public.cancel_booking_by_couple(uuid, text) to authenticated;
grant execute on function public.cancel_booking_by_partner(uuid, text) to authenticated;
