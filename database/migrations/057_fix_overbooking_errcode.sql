-- ============================================================
-- Bookings — corrige o errcode de partner_already_booked
-- ============================================================
-- 056_prevent_partner_overbooking.sql usou `P0004` para
-- `partner_already_booked` — mas `P0004` já é a convenção estabelecida
-- em todo o projeto para `amount_mismatch` (010_deposit_cross_reference.sql,
-- 018_admin_rbac.sql, 020_payments.sql), uma categoria de erro diferente
-- (cruzamento de valor monetário, não conflito de disponibilidade).
-- Corrigido aqui em vez de editar 056 (nunca editar uma migração já
-- aplicada — mesmo raciocínio de 029/030 corrigindo 026/023): próximo
-- código livre na sequência (`P0005` = incomplete_profile,
-- `P0006` = video_limit_reached) é `P0007`.

create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_proposal record;
  v_quote record;
  v_event_date date;
  v_booking_id uuid;
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

  select * into v_quote from public.quote_requests where id = v_proposal.quote_request_id;
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
      v_proposal.price, v_proposal.deposit_amount, now() + interval '48 hours'
    )
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  return v_booking_id;
end;
$$;
