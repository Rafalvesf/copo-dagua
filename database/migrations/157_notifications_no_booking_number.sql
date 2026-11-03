-- ============================================================
-- 157 — Notificações sem número de reserva
-- ============================================================
-- Pedido do utilizador (2026-11-03): "aparece R-2026-0142 nao gosto". As
-- notificações passam a dizer o nome do parceiro ou do organizador em vez
-- do número da reserva. Só muda o texto: são as funções das migrações
-- 109, 112, 115, 125 e 129, iguais, com o texto novo.
-- Independente das outras migrações.

begin;

-- Marca para a página Migrações do admin saber que esta já correu.
alter table public.platform_settings add column if not exists notification_copy_version int not null default 157;

-- Organizador cancela: sem número de reserva
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
    'O organizador cancelou a reserva de ' || public.couple_label(v_booking.wedding_id) || '.'
      || case
           when v_deposit_paid_at is not null and not v_refund_deposit then ' O sinal fica contigo.'
           when v_refund_deposit then ' O sinal é devolvido (cancelou nas primeiras ' || v_window_hours || ' h).'
           else ''
         end
  );
end;
$$;

-- Parceiro cancela: nome do parceiro em vez do número
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
    coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'O parceiro') || ' cancelou a reserva.'
      || (case when v_refund_required then ' O que pagaste é devolvido.' else '' end)
      || ' Podes pedir uma nova proposta a outro parceiro (ou ao mesmo).'
  );
end;
$$;

-- Disputa aberta: nomes em vez do número
create or replace function public.open_dispute(p_booking_id uuid, p_reason text, p_description text)
returns uuid language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_booking record;
  v_role text;
  v_id uuid;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.couple_id = auth.uid() then
    v_role := 'couple';
  elsif v_booking.partner_id = auth.uid() then
    v_role := 'partner';
  else
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('confirmed', 'completed', 'payment_overdue') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if length(trim(coalesce(p_description, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  insert into public.disputes (booking_id, opened_by, opened_by_role, reason, description, previous_booking_status)
  values (p_booking_id, auth.uid(), v_role, p_reason, trim(p_description), v_booking.status)
  returning id into v_id;

  update public.bookings set status = 'disputed' where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'dispute_opened', v_booking.status, 'disputed', v_role::public.booking_actor_type, auth.uid(),
          jsonb_build_object('dispute_id', v_id, 'reason', p_reason));

  if v_role = 'couple' then
    insert into public.notifications (wedding_id, partner_id, type, title, body)
    values (v_booking.wedding_id, v_booking.partner_id, 'dispute_opened', 'Disputa aberta',
            public.couple_label(v_booking.wedding_id) || ' abriu uma disputa sobre a reserva. A equipa À Nossa! vai analisar.');
  else
    insert into public.notifications (wedding_id, type, title, body)
    values (v_booking.wedding_id, 'dispute_opened', 'Disputa aberta',
            coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'O parceiro') || ' abriu uma disputa sobre a reserva. A equipa À Nossa! vai analisar.');
  end if;

  return v_id;
end;
$$;

-- Disputa resolvida: nomes em vez do número
create or replace function public.admin_resolve_dispute(
  p_dispute_id uuid, p_resolution text, p_refund_amount numeric, p_note text
)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_dispute record;
  v_booking record;
  v_text text;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_resolution not in ('refund_full', 'refund_partial', 'partner_favor') then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  if length(trim(coalesce(p_note, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select * into v_dispute from public.disputes where id = p_dispute_id for update;
  if v_dispute is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_dispute.status <> 'open' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  select * into v_booking from public.bookings where id = v_dispute.booking_id for update;

  update public.disputes
  set status = 'resolved', resolution = p_resolution, refund_amount = p_refund_amount,
      admin_note = trim(p_note), resolved_by = auth.uid(), resolved_at = now()
  where id = p_dispute_id;

  -- A reserva volta ao estado em que estava antes da disputa.
  update public.bookings set status = v_dispute.previous_booking_status
  where id = v_dispute.booking_id and status = 'disputed';

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (v_dispute.booking_id, 'dispute_resolved', 'disputed', v_dispute.previous_booking_status, 'admin', auth.uid(),
          jsonb_build_object('dispute_id', p_dispute_id, 'resolution', p_resolution, 'refund_amount', p_refund_amount));

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'dispute_' || p_resolution, 'disputes', p_dispute_id,
          jsonb_build_object('booking_id', v_dispute.booking_id, 'refund_amount', p_refund_amount));

  v_text := case p_resolution
    when 'refund_full' then 'Disputa resolvida: reembolso total ao casal.'
    when 'refund_partial' then 'Disputa resolvida: reembolso de ' || to_char(p_refund_amount, 'FM999990D00') || ' € ao casal.'
    else 'Disputa resolvida a favor do parceiro.'
  end;
  insert into public.notifications (wedding_id, type, title, body)
  values (v_booking.wedding_id, 'dispute_resolved', 'Disputa com ' || coalesce((select pp.business_name from public.partner_profiles pp where pp.id = v_booking.partner_id), 'o parceiro'), v_text || ' ' || trim(p_note));
  insert into public.notifications (wedding_id, partner_id, type, title, body)
  values (v_booking.wedding_id, v_booking.partner_id, 'dispute_resolved', 'Disputa com ' || public.couple_label(v_booking.wedding_id), v_text || ' ' || trim(p_note));
end;
$$;

-- Lembretes de pagamento: sem número de reserva
create or replace function public.daily_reminders()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
declare
  p record;
  w record;
  g record;
begin
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.booking_number, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Restante por pagar' end,
            coalesce(p.business_name, 'Parceiro') || ' · até '
            || to_char(p.due_at at time zone 'Europe/Lisbon', 'DD/MM HH24:MI'), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;
  perform public.set_private_context(null);

  for w in
    select id, wedding_date - current_date as days from public.weddings
    where wedding_date - current_date in (1, 7)
  loop
    insert into public.notifications (wedding_id, type, title, body, link)
    values (w.id, 'event_reminder',
            case when w.days = 1 then 'O grande dia é amanhã!' else 'Falta uma semana!' end,
            case when w.days = 1 then 'Confirma os últimos detalhes com os parceiros.'
                 else 'Revê as tarefas e os pagamentos que faltam.' end,
            '/tasks');
  end loop;

  for g in
    select distinct gu.linked_profile_id as profile_id, wd.id as wedding_id
    from public.guests gu join public.weddings wd on wd.id = gu.wedding_id
    where gu.linked_profile_id is not null and wd.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$function$;

-- Pagamento recebido/pago: sem número de reserva
create or replace function public.notify_payment_paid()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
  v_partner text;
  v_label text;
begin
  if new.status <> 'paid' or old.status = 'paid' then return new; end if;
  select * into b from public.bookings where id = new.booking_id;
  if b is null then return new; end if;
  select business_name into v_partner from public.partner_profiles where id = b.partner_id;
  v_label := case when new.type = 'deposit' then 'Sinal' else 'Restante' end;
  insert into public.notifications (partner_id, type, title, body, link)
  values (b.partner_id, 'payment_received', v_label || ' recebido',
          public.couple_label(b.wedding_id) || ' · '
          || replace(to_char(new.amount, 'FM9999990.00'), '.', ',') || ' €', '/partner-payments');
  insert into public.notifications (wedding_id, type, title, body, link)
  values (b.wedding_id, 'payment_confirmed', v_label || ' pago',
          coalesce(v_partner, 'Parceiro') || '. Obrigado!', '/bookings');
  return new;
end;
$$;
commit;
