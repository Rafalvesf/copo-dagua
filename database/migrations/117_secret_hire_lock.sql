-- ============================================================
-- Contratação em segredo: os outros organizadores não podem contratar
-- o mesmo parceiro
-- ============================================================
-- Pedido do utilizador (2026-10-21): enquanto um organizador tem uma
-- contratação em segredo (migração 116) com um parceiro, os restantes
-- organizadores do evento não podem pedir orçamento nem aceitar proposta
-- desse parceiro. O erro é neutro (`partner_unavailable`, P0010) para não
-- revelar a surpresa. Requer a migração 116.

create or replace function public.partner_blocked_by_secret(p_wedding_id uuid, p_partner_id uuid)
returns boolean language sql stable security definer set search_path = public, pg_temp as $$
  select exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.private_owner is not null and b.private_owner <> auth.uid()
      and b.status in ('awaiting_deposit', 'confirmed', 'completed', 'payment_overdue', 'disputed')
  ) or exists (
    select 1 from public.conversations c
    where c.wedding_id = p_wedding_id and c.partner_id = p_partner_id
      and c.private_owner is not null and c.private_owner <> auth.uid()
  );
$$;
grant execute on function public.partner_blocked_by_secret(uuid, uuid) to authenticated;

create or replace function public.request_quote(p_partner_id uuid, p_wedding_id uuid, p_event_date date, p_location text, p_budget_min numeric, p_budget_max numeric, p_message text)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote_id uuid;
  v_min_days integer;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_wedding_member(p_wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not public.is_partner_profile_visible(p_partner_id) then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  -- Outro organizador contratou-o em segredo (migração 116).
  if public.partner_blocked_by_secret(p_wedding_id, p_partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  if exists (
    select 1 from public.quote_requests q
    where q.wedding_id = p_wedding_id and q.partner_id = p_partner_id
      and q.status in ('pending', 'viewed', 'proposal_sent')
  ) or exists (
    select 1 from public.bookings b
    where b.wedding_id = p_wedding_id and b.partner_id = p_partner_id
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  ) then
    raise exception 'quote_already_requested' using errcode = 'P0009';
  end if;

  select booking_min_days_before_event into v_min_days from public.platform_settings where id = 1;
  if p_event_date is not null and p_event_date < (current_date + (v_min_days || ' days')::interval) then
    raise exception 'too_late' using errcode = 'P0003';
  end if;

  insert into public.quote_requests (couple_id, wedding_id, partner_id, event_date, location, budget_min, budget_max, message)
  values (auth.uid(), p_wedding_id, p_partner_id, p_event_date, p_location, p_budget_min, p_budget_max, p_message)
  returning id into v_quote_id;

  return v_quote_id;
end;
$$;

create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_proposal record; v_quote record; v_booking_id uuid; v_hold_hours integer; v_hold_expires_at timestamptz; v_event_date date;
begin
  select * into v_proposal from public.proposals where id = p_proposal_id for update;
  if v_proposal is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_proposal.couple_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_proposal.status <> 'sent' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  select * into v_quote from public.quote_requests where id = v_proposal.quote_request_id;
  -- Outro organizador contratou-o em segredo (migração 116).
  if public.partner_blocked_by_secret(v_quote.wedding_id, v_proposal.partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;
  if public.couple_has_booking_with_partner(v_proposal.couple_id, v_proposal.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  select default_booking_hold_hours into v_hold_hours from public.platform_settings where id = 1;
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;
  v_event_date := coalesce(v_quote.event_date, current_date);
  if exists (select 1 from public.bookings where partner_id = v_proposal.partner_id and event_date = v_event_date and status in ('awaiting_deposit', 'confirmed')) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;
  update public.proposals set status = 'accepted', updated_at = now() where id = p_proposal_id;
  update public.quote_requests set status = 'accepted', updated_at = now() where id = v_proposal.quote_request_id;
  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at)
    values (v_proposal.couple_id, v_proposal.partner_id, v_quote.wedding_id, p_proposal_id, v_event_date, v_proposal.price, v_proposal.deposit_amount, v_hold_expires_at)
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
