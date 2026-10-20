-- ============================================================
-- Novas regras de reembolso quando o organizador cancela
-- ============================================================
-- Pedido do utilizador (2026-10-21):
-- - o SINAL só é devolvido se o organizador cancelar nas primeiras
--   48 horas depois de o pagar (e se o parceiro o marcou como
--   reembolsável na proposta, migração 108);
-- - o RESTANTE é devolvido se o organizador cancelar com pelo menos
--   `cancellation_penalty_days` (30) dias de antecedência;
-- - o parceiro cancelar continua a devolver sempre tudo.
-- A janela do sinal fica editável no admin (Definições).
--
-- O cancelamento grava em booking_events.metadata `refund_deposit` e
-- `refund_final`; a Edge Function `refund-cancelled-booking` devolve só
-- o que estiver marcado. Também passa a marcar como `failed` todos os
-- pagamentos ainda pendentes da reserva (antes só o sinal), para a app
-- não continuar a pedir para pagar o restante de uma reserva cancelada.

alter table public.platform_settings
  add column if not exists deposit_refund_window_hours integer not null default 48
  check (deposit_refund_window_hours between 0 and 720);

create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_penalty_days integer;
  v_window_hours integer;
  v_days_until_event integer;
  v_refundable boolean;
  v_deposit_paid_at timestamptz;
  v_final_paid boolean;
  v_refund_deposit boolean;
  v_refund_final boolean;
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

  select cancellation_penalty_days, coalesce(deposit_refund_window_hours, 48)
    into v_penalty_days, v_window_hours
    from public.platform_settings where id = 1;
  v_days_until_event := v_booking.event_date - current_date;

  select coalesce((select deposit_refundable from public.proposals where id = v_booking.proposal_id), true)
    into v_refundable;

  select max(coalesce(paid_at, updated_at)) into v_deposit_paid_at
  from public.payments
  where booking_id = p_booking_id and type = 'deposit' and status = 'paid';

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type <> 'deposit' and status = 'paid'
  ) into v_final_paid;

  v_refund_deposit := v_deposit_paid_at is not null
    and v_refundable
    and now() <= v_deposit_paid_at + make_interval(hours => v_window_hours);
  v_refund_final := v_final_paid and v_days_until_event >= v_penalty_days;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object(
            'reason', p_reason,
            'refund_required', v_refund_deposit or v_refund_final,
            'refund_deposit', v_refund_deposit,
            'refund_final', v_refund_final,
            'deposit_refundable', v_refundable,
            'deposit_paid_at', v_deposit_paid_at,
            'deposit_window_hours', v_window_hours,
            'days_until_event', v_days_until_event,
            'penalty_days', v_penalty_days,
            'penalty_applied', (v_deposit_paid_at is not null and not v_refund_deposit)
          ));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and status in ('pending', 'overdue');

  insert into public.notifications (wedding_id, partner_id, type, title, body)
  values (
    v_booking.wedding_id, v_booking.partner_id, 'booking_cancelled',
    'Reserva cancelada pelo organizador',
    'O organizador cancelou a reserva ' || v_booking.booking_number || '.'
      || case
           when v_deposit_paid_at is not null and not v_refund_deposit then ' O sinal fica contigo.'
           when v_refund_deposit then ' O sinal é devolvido (cancelou nas primeiras ' || v_window_hours || ' h).'
           else ''
         end
  );
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

  -- O parceiro cancelar devolve sempre tudo o que o organizador pagou.
  select exists (
    select 1 from public.payments where booking_id = p_booking_id and status = 'paid'
  ) into v_refund_required;

  update public.bookings set status = 'cancelled_by_partner', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_partner', v_booking.status, 'cancelled_by_partner', 'partner', auth.uid(),
          jsonb_build_object('reason', p_reason, 'refund_required', v_refund_required,
                             'refund_deposit', v_refund_required, 'refund_final', v_refund_required));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and status in ('pending', 'overdue');

  insert into public.notifications (wedding_id, type, title, body)
  values (
    v_booking.wedding_id, 'booking_cancelled',
    'Reserva cancelada pelo parceiro',
    'O parceiro cancelou a reserva ' || v_booking.booking_number || '.'
      || (case when v_refund_required then ' O que pagaste é devolvido.' else '' end)
      || ' Podes pedir uma nova proposta a outro parceiro (ou ao mesmo).'
  );
end;
$$;

-- Reservas já canceladas com o restante ainda "pendente" (antes da
-- regra acima) deixam de pedir pagamento.
update public.payments p
set status = 'failed', updated_at = now()
from public.bookings b
where b.id = p.booking_id
  and b.status in ('cancelled_by_couple', 'cancelled_by_partner', 'expired')
  and p.status in ('pending', 'overdue');
