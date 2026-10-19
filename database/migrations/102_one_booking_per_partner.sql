-- ============================================================
-- Uma reserva por parceiro e casal
-- ============================================================
-- O casal só pode ter uma reserva com cada parceiro. Só pode haver outra
-- se a anterior foi cancelada ou expirou sem o sinal pago. Reserva
-- concluída, ativa ou cancelada com o sinal pago bloqueia uma nova.
--
-- Aplica-se em dois sítios:
--   - send_proposal(): o parceiro não consegue enviar outra proposta;
--   - accept_proposal(): o casal não consegue aceitar outra proposta.
-- Erro: 'already_booked_with_partner' (P0008).

create or replace function public.couple_has_booking_with_partner(p_couple_id uuid, p_partner_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.bookings b
    where b.couple_id = p_couple_id
      and b.partner_id = p_partner_id
      and (
        b.status not in ('expired', 'cancelled_by_couple', 'cancelled_by_partner')
        or exists (
          select 1 from public.payments pay
          where pay.booking_id = b.id and pay.type = 'deposit' and pay.status = 'paid'
        )
      )
  );
$$;

revoke execute on function public.couple_has_booking_with_partner(uuid, uuid) from public, anon;
grant execute on function public.couple_has_booking_with_partner(uuid, uuid) to authenticated;

create or replace function public.send_proposal(
  p_quote_request_id uuid, p_title text, p_description text,
  p_price numeric, p_payment_terms text
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

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id, p_title, p_description, p_price, v_deposit_amount, p_payment_terms)
  returning id into v_proposal_id;

  update public.quote_requests set status = 'proposal_sent', updated_at = now() where id = p_quote_request_id;

  return v_proposal_id;
end;
$$;

create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_proposal record;
  v_quote record;
  v_booking_id uuid;
  v_hold_hours integer;
  v_hold_expires_at timestamptz;
  v_event_date date;
begin
  select * into v_proposal from public.proposals where id = p_proposal_id for update;
  if v_proposal is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_proposal.couple_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_proposal.status <> 'sent' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if public.couple_has_booking_with_partner(v_proposal.couple_id, v_proposal.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;

  select * into v_quote from public.quote_requests where id = v_proposal.quote_request_id;
  select default_booking_hold_hours into v_hold_hours from public.platform_settings where id = 1;
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;
  v_event_date := coalesce(v_quote.event_date, current_date);

  if exists (
    select 1 from public.bookings
    where partner_id = v_proposal.partner_id
      and event_date = v_event_date
      and status in ('awaiting_deposit', 'confirmed')
  ) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;

  update public.proposals set status = 'accepted', updated_at = now() where id = p_proposal_id;
  update public.quote_requests set status = 'accepted', updated_at = now() where id = v_proposal.quote_request_id;

  begin
    insert into public.bookings (
      couple_id, partner_id, wedding_id, proposal_id, event_date,
      total_amount, deposit_amount, hold_expires_at
    )
    values (
      v_proposal.couple_id, v_proposal.partner_id, v_quote.wedding_id, p_proposal_id,
      v_event_date,
      v_proposal.price, v_proposal.deposit_amount, v_hold_expires_at
    )
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (v_booking_id, v_proposal.couple_id, v_proposal.partner_id, 'deposit', v_proposal.deposit_amount, v_hold_expires_at, 'pending');

  return v_booking_id;
end;
$$;
