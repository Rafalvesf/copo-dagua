-- ============================================================
-- Notificações para ambas as partes ao cancelar uma reserva
-- ============================================================
-- Pedido explícito do utilizador (parte do checklist "Overbooking +
-- cancelamentos"): "notificações para ambas as partes". `notifications`
-- (039_task_engine.sql) só serve o casal (`wedding_id` + `is_wedding_member()`,
-- usada até agora só pelo motor de tarefas) — não existia nenhuma forma
-- de notificar um parceiro. `partner_id` novo, nullable: uma notificação
-- é ou do casal (`partner_id is null`, comportamento inalterado) ou de
-- um parceiro específico (`partner_id` preenchido) — nunca as duas.

alter table public.notifications add column partner_id uuid references public.partner_profiles(id);

drop policy "Members manage notifications" on public.notifications;

create policy "Members manage notifications"
  on public.notifications for all
  using (
    (partner_id is null and public.is_wedding_member(wedding_id))
    or partner_id = auth.uid()
  )
  with check (
    (partner_id is null and public.is_wedding_member(wedding_id))
    or partner_id = auth.uid()
  );

create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_penalty_days integer;
  v_days_until_event integer;
  v_penalty_applies boolean;
  v_deposit_paid boolean;
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

  select cancellation_penalty_days into v_penalty_days from public.platform_settings where id = 1;
  v_days_until_event := v_booking.event_date - current_date;
  v_penalty_applies := v_days_until_event < v_penalty_days;

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'deposit' and status = 'paid'
  ) into v_deposit_paid;

  v_refund_required := v_deposit_paid and not v_penalty_applies;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object(
            'reason', p_reason,
            'refund_required', v_refund_required,
            'days_until_event', v_days_until_event,
            'penalty_applied', v_penalty_applies
          ));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and type = 'deposit' and status = 'pending';

  insert into public.notifications (wedding_id, partner_id, type, title, body)
  values (
    v_booking.wedding_id, v_booking.partner_id, 'booking_cancelled',
    'Reserva cancelada pelo casal',
    case
      when v_penalty_applies and v_deposit_paid then 'O casal cancelou a reserva ' || v_booking.booking_number || ' fora do prazo — o sinal fica retido.'
      else 'O casal cancelou a reserva ' || v_booking.booking_number || '.'
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

  -- Cancelamento pelo parceiro nunca penaliza o casal (a janela de
  -- 30 dias só se aplica a um cancelamento do lado do casal) — um sinal
  -- já pago é sempre marcado para reembolso.
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

  insert into public.notifications (wedding_id, type, title, body)
  values (
    v_booking.wedding_id, 'booking_cancelled',
    'Reserva cancelada pelo parceiro',
    'O parceiro cancelou a reserva ' || v_booking.booking_number || '.'
      || (case when v_refund_required then ' O sinal já pago será reembolsado.' else '' end)
  );
end;
$$;
