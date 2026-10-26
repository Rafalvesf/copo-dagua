-- ============================================================
-- Parceiro só cancela depois de devolver o que já recebeu — 2026-10-26
-- ============================================================
-- Pedido do utilizador: "não permitas cancelar após levantar o montante;
-- coloca uma indicação de que se quer cancelar tem de colocar o montante
-- de volta". Com o sinal libertado 48 h depois de pago (migração 124), o
-- parceiro pode já ter o dinheiro na conta dele.
-- - `cancel_booking_by_partner` recusa (`funds_released`) enquanto houver
--   pagamentos desta reserva transferidos ao parceiro e não devolvidos.
-- - A Edge Function `partner-return-funds` devolve-os (retira-os do saldo
--   Stripe do parceiro) e marca `payments.returned_at`; a seguir a app
--   cancela e o organizador é reembolsado como sempre.

begin;

alter table public.payments add column if not exists returned_at timestamptz;

create or replace function public.mark_payment_returned(p_payment_id uuid)
returns void language sql security definer set search_path = public, pg_temp as $$
  update public.payments set returned_at = now(), updated_at = now() where id = p_payment_id and returned_at is null;
$$;
revoke all on function public.mark_payment_returned(uuid) from public, anon, authenticated;
grant execute on function public.mark_payment_returned(uuid) to service_role;

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

  -- Já recebeu dinheiro desta reserva: tem de o devolver primeiro.
  if exists (
    select 1 from public.payments
    where booking_id = p_booking_id and status = 'paid'
      and released_at is not null and transfer_id like 'tr_%' and returned_at is null
  ) then
    raise exception 'funds_released' using errcode = 'P0001';
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

commit;
