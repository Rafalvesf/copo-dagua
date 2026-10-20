-- ============================================================
-- O parceiro escolhe, em cada proposta, se o sinal é reembolsável
-- ============================================================
-- Pedido do utilizador (2026-10-20): "deixa os parceiros escolherem se dão
-- reembolso ou não, quando fazem a reserva". Por defeito o sinal é
-- reembolsável (regra dos 30 dias). Se o parceiro escolher "não
-- reembolsável", um cancelamento pelo casal nunca devolve o sinal (o resto
-- já pago continua a ser devolvido). Um cancelamento pelo PARCEIRO devolve
-- sempre tudo, com ou sem esta opção.

-- Parte 1 — coluna na proposta
alter table public.proposals
  add column if not exists deposit_refundable boolean not null default true;

-- Parte 2 — send_proposal com a escolha (por defeito: reembolsável)
drop function if exists public.send_proposal(uuid, text, text, numeric, text);

create or replace function public.send_proposal(
  p_quote_request_id uuid, p_title text, p_description text,
  p_price numeric, p_payment_terms text, p_deposit_refundable boolean default true
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote record;
  v_deposit_pct numeric;
  v_deposit_amount numeric;
  v_proposal_id uuid;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if v_quote is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_quote.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_quote.status not in ('pending', 'viewed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_price is null or p_price <= 0 then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;

  select deposit_percentage into v_deposit_pct from public.platform_settings where id = 1;
  v_deposit_amount := round(p_price * (v_deposit_pct / 100.0), 2);

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id, p_title, p_description, p_price, v_deposit_amount, p_payment_terms, coalesce(p_deposit_refundable, true))
  returning id into v_proposal_id;

  update public.quote_requests set status = 'proposal_sent', updated_at = now() where id = p_quote_request_id;

  return v_proposal_id;
end;
$$;

revoke execute on function public.send_proposal(uuid, text, text, numeric, text, boolean) from public, anon;
grant execute on function public.send_proposal(uuid, text, text, numeric, text, boolean) to authenticated;

-- Parte 3 — cancelamento pelo casal respeita a escolha do parceiro
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
  v_refundable boolean;
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

  select coalesce((select deposit_refundable from public.proposals where id = v_booking.proposal_id), true)
    into v_refundable;

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'deposit' and status = 'paid'
  ) into v_deposit_paid;

  v_refund_required := v_deposit_paid and v_refundable and not v_penalty_applies;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object(
            'reason', p_reason,
            'refund_required', v_refund_required,
            'deposit_refundable', v_refundable,
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
      when v_deposit_paid and not v_refund_required then 'O casal cancelou a reserva ' || v_booking.booking_number || ' — o sinal fica contigo.'
      else 'O casal cancelou a reserva ' || v_booking.booking_number || '.'
    end
  );
end;
$$;
