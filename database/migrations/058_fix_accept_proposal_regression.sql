-- ============================================================
-- Bookings — corrige regressão real introduzida por 056/057
-- ============================================================
-- 056_prevent_partner_overbooking.sql (e a correção de errcode em 057)
-- reescreveram accept_proposal() a partir do corpo de
-- 009_quotations_bookings.sql — a versão original, sem saber que a função
-- já tinha sido substituída duas vezes depois: 019_platform_settings.sql
-- (hold_expires_at passou a ler platform_settings.default_booking_hold_hours
-- em vez de 48h fixo) e 020_payments.sql (accept_proposal() passou também
-- a criar o pagamento pendente do sinal em public.payments). Isto reverteu
-- silenciosamente as duas alterações em produção durante o tempo entre
-- 057 e esta migração — bug real, não hipotético, apanhado ao verificar
-- por que accept_proposal() não parecia coerente com database.md antes de
-- avançar para cancel_booking_by_couple()/cancel_booking_by_partner().
--
-- Esta migração reconstrói o corpo real e mais recente (o de 020) e
-- acrescenta por cima o guard de overbooking (exists() + P0007, já
-- corrigido em 057) — nunca deveria ter havido regressão nenhuma no
-- meio disto.

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
