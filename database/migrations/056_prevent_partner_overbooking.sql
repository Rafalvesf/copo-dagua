-- ============================================================
-- Bookings — prevenir overbooking (backend/bookings/tasks.md,
-- "Prevenir overbooking", prioridade Alta)
-- ============================================================
-- Duas bookings ativas (`awaiting_deposit`/`confirmed` — os únicos dois
-- estados hoje alcançáveis; `payment_overdue`/`disputed` ficam de fora
-- porque nenhuma função os atribui ainda, ver backend/bookings/tasks.md
-- "Melhorias futuras") do mesmo parceiro na mesma `event_date` eram
-- permitidas sem nenhuma verificação (backend/bookings/edge-cases.md).
--
-- Duas camadas, mesma razão de admin_confirm_deposit()/expire_overdue_bookings()
-- serem security definer: a verificação de negócio vive em accept_proposal()
-- (mensagem de erro legível para a app), o índice único é o cinto-e-suspensórios
-- contra a corrida real entre dois accept_proposal() concorrentes para o
-- mesmo parceiro/data (a verificação em si não tranca nada antes do insert).

create unique index bookings_partner_active_date_uniq
  on public.bookings (partner_id, event_date)
  where status in ('awaiting_deposit', 'confirmed');

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
    raise exception 'partner_already_booked' using errcode = 'P0004';
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
    -- Apanhado pela verificação exists() acima na esmagadora maioria dos
    -- casos; este catch só existe para a corrida real entre dois
    -- accept_proposal() concorrentes para o mesmo parceiro/data, onde o
    -- exists() de ambos correu antes de qualquer um dos dois inserir.
    raise exception 'partner_already_booked' using errcode = 'P0004';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  return v_booking_id;
end;
$$;
