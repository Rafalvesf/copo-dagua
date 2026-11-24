-- 234 · O parceiro só cancela enquanto o sinal está cativo
-- (pedido do Rafael, 2026-11-24; mockups «Cancelar reserva · organizador»
-- e «… · parceiro»).
--
-- - Parceiro: pode cancelar antes de o cliente pagar e enquanto o sinal está
--   cativo (as primeiras `deposit_refund_window_hours`, 48 h, depois de
--   pago). Depois disso o sinal é dele e a reserva só pode ser cancelada pelo
--   organizador → `cancel_booking_by_partner` recusa com `deposit_captured`.
-- - Organizador: continua a poder cancelar sempre (`cancel_booking_by_couple`
--   não muda): nas primeiras 48 h o sinal é libertado todo (com a taxa de
--   serviço); depois perde-o. A app mostra o aviso antes.
-- - `booking_cancel_state(p_booking_id)`: o que cada lado vê no popup.

begin;

create or replace function public.booking_deposit_held_until(p_booking_id uuid)
returns timestamptz language sql stable security definer set search_path = public, pg_temp as $$
  select min(coalesce(p.paid_at, p.updated_at))
         + make_interval(hours => coalesce((select deposit_refund_window_hours from public.platform_settings where id = 1), 48))
    from public.payments p
   where p.booking_id = p_booking_id and p.status = 'paid';
$$;
revoke execute on function public.booking_deposit_held_until(uuid) from public, anon, authenticated;

create or replace function public.booking_cancel_state(p_booking_id uuid)
returns jsonb language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  b public.bookings%rowtype;
  v_until timestamptz;
  v_paid numeric;
begin
  select * into b from public.bookings where id = p_booking_id;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if b.partner_id <> auth.uid() and b.couple_id <> auth.uid() and not public.wedding_can(b.wedding_id, 'evento') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  v_until := public.booking_deposit_held_until(p_booking_id);
  select coalesce(sum(amount), 0) into v_paid from public.payments where booking_id = p_booking_id and status = 'paid';
  return jsonb_build_object(
    'paid', v_paid,
    'held_until', v_until,
    'held', v_until is null or now() <= v_until,
    'partner_can_cancel', b.status in ('awaiting_deposit', 'confirmed') and (v_until is null or now() <= v_until)
  );
end;
$$;
revoke execute on function public.booking_cancel_state(uuid) from public, anon;
grant execute on function public.booking_cancel_state(uuid) to authenticated;

create or replace function public.cancel_booking_by_partner(p_booking_id uuid, p_reason text default null)
returns void language plpgsql security definer set search_path = public, pg_temp as $function$
declare
  v_booking record;
  v_refund_required boolean;
  v_until timestamptz;
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

  -- 234: passado o prazo em que o sinal está cativo, o sinal é do parceiro
  -- e só o organizador pode cancelar.
  v_until := public.booking_deposit_held_until(p_booking_id);
  if v_until is not null and now() > v_until then
    raise exception 'deposit_captured' using errcode = 'P0001';
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

  insert into public.notifications (wedding_id, type, title, subtitle, body)
  values (
    v_booking.wedding_id, 'booking_cancelled',
    'Reserva cancelada', coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'Parceiro'),
    'O parceiro cancelou a reserva.'
      || (case when v_refund_required then ' O que pagaste é devolvido na totalidade.' else '' end)
      || coalesce(' Motivo: ' || nullif(trim(p_reason), '') || '.', '')
      || ' Podes pedir uma nova proposta a outro parceiro (ou ao mesmo).'
  );
end;
$function$;

insert into public.applied_migrations (id) values ('234') on conflict do nothing;

commit;
