-- 204_final_payment_window.sql
-- Prazo do restante (pedido do Rafael, 2026-11-20, mockups «Pagar ·
-- extras e loja»):
--
--   * O restante paga-se até N dias antes do evento: 30 por defeito, o
--     parceiro pode baixar até 1 (`partner_profiles.final_payment_days`).
--   * Só se pode pagar nos 6 dias antes do prazo: com cartão fica cativo
--     até ao prazo e a Stripe só deixa cativar 7 dias. Assim não há
--     reembolsos nem taxa da Stripe perdida quando alguém cancela a tempo.
--     (A Edge Function `create-payment-intent` recusa antes disso.)
--   * Avisos: quando o pagamento abre (6 dias antes) e 3 dias antes do
--     prazo. A app também abre o popup «Pagar o resto» ao arrancar.
--   * Sem pagamento no fim do prazo, a reserva é cancelada (o sinal fica
--     com o parceiro, como num cancelamento fora de prazo).

begin;

-- ---------- prazo escolhido pelo parceiro ----------
alter table public.partner_profiles
  add column if not exists final_payment_days integer not null default 30
    check (final_payment_days between 1 and 30);

-- Avisos já enviados (para não repetir).
alter table public.payments add column if not exists open_notice_at timestamptz;
alter table public.payments add column if not exists urgent_notice_at timestamptz;

-- Prazo com o número de dias do parceiro (fim do dia, Lisboa).
create or replace function public.final_payment_due_at(p_event_date date, p_days integer)
returns timestamptz language sql immutable set search_path = public, pg_temp as $$
  select ((p_event_date - greatest(1, least(30, coalesce(p_days, 30))))::timestamp
          + interval '23 hours 59 minutes') at time zone 'Europe/Lisbon';
$$;

-- Quando abre o pagamento do restante: 6 dias antes do prazo.
create or replace function public.final_payment_opens_at(p_due_at timestamptz)
returns timestamptz language sql immutable set search_path = public, pg_temp as $$
  select p_due_at - interval '6 days';
$$;

create or replace function public.create_final_payment_after_deposit()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
  v_days integer;
begin
  if new.type <> 'deposit' or new.status <> 'paid' or old.status = 'paid' then
    return new;
  end if;
  select * into b from public.bookings where id = new.booking_id;
  if b is null or b.total_amount <= b.deposit_amount then
    return new;
  end if;
  if exists (
    select 1 from public.payments
    where booking_id = b.id and type = 'final_payment' and status in ('pending', 'overdue', 'paid')
  ) then
    return new;
  end if;
  select final_payment_days into v_days from public.partner_profiles where id = b.partner_id;
  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (
    b.id, b.couple_id, b.partner_id, 'final_payment', b.total_amount - b.deposit_amount,
    greatest(now() + interval '2 days', public.final_payment_due_at(b.event_date, v_days)),
    'pending'
  );
  return new;
end;
$$;

-- ---------- avisos ----------
create or replace function public.daily_reminders()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  p record;
  w record;
  g record;
begin
  -- Sinal (e outros pagamentos): 48 h antes do prazo, como antes.
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.booking_number, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null and pay.type <> 'final_payment'
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Pagamento por fazer' end,
            coalesce(p.business_name, 'Parceiro'),
            public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;

  -- Restante: quando abre (6 dias antes do prazo) e 3 dias antes.
  for p in
    select pay.id, pay.amount, pay.due_at, pay.open_notice_at, pay.urgent_notice_at,
           b.wedding_id, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.type = 'final_payment' and pay.status = 'pending'
      and pay.due_at is not null and pay.due_at > now()
      and b.status in ('confirmed', 'completed')
      and (
        (pay.open_notice_at is null and now() >= public.final_payment_opens_at(pay.due_at))
        or (pay.urgent_notice_at is null and pay.due_at <= now() + interval '3 days')
      )
  loop
    perform public.set_private_context(null);
    if p.urgent_notice_at is null and p.due_at <= now() + interval '3 days' then
      insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
      values (p.wedding_id, p.private_owner, 'payment_due', 'Faltam 3 dias para pagar o resto',
              coalesce(p.business_name, 'Parceiro'),
              public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at) || '. Sem pagamento, a reserva é cancelada.',
              '/bookings');
      update public.payments set urgent_notice_at = now(), open_notice_at = coalesce(open_notice_at, now()) where id = p.id;
    else
      insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
      values (p.wedding_id, p.private_owner, 'payment_due', 'Já podes pagar o resto',
              coalesce(p.business_name, 'Parceiro'),
              public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at) || '.',
              '/bookings');
      update public.payments set open_notice_at = now() where id = p.id;
    end if;
  end loop;
  perform public.set_private_context(null);

  for w in
    select id, wedding_date - current_date as days from public.events
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
    from public.guests gu join public.events wd on wd.id = gu.wedding_id
    where gu.linked_profile_id is not null and wd.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$$;

-- ---------- sem pagamento no fim do prazo: cancela ----------
create or replace function public.expire_overdue_bookings()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  r record;
begin
  with expired as (
    update public.bookings
    set status = 'expired'
    where status = 'awaiting_deposit' and hold_expires_at < now()
    returning id
  )
  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type)
  select id, 'hold_expired', 'awaiting_deposit', 'expired', 'system' from expired;

  update public.payments
  set status = 'failed', updated_at = now()
  where type = 'deposit' and status = 'pending'
    and booking_id in (select id from public.bookings where status = 'expired');

  -- Restante não pago a tempo (só os criados com esta regra: prazo
  -- depois de 2026-11-20). O sinal não é devolvido.
  for r in
    select pay.id as payment_id, b.id as booking_id, b.status, b.wedding_id, b.partner_id, b.private_owner
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    where pay.type = 'final_payment' and pay.status = 'pending'
      and pay.due_at < now() and pay.due_at > '2026-11-21'::timestamptz
      and b.status = 'confirmed'
    for update of b
  loop
    update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = r.booking_id;
    insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, metadata)
    values (r.booking_id, 'final_payment_missed', r.status, 'cancelled_by_couple', 'system',
            jsonb_build_object('refund_deposit', false, 'refund_final', false));
    update public.payments set status = 'failed', updated_at = now()
    where booking_id = r.booking_id and status in ('pending', 'overdue');
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, body, link)
    values (r.wedding_id, r.private_owner, 'booking_cancelled', 'Reserva cancelada',
            'O resto não foi pago até ao prazo e a reserva foi cancelada. O sinal não é devolvido.', '/bookings');
    insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
    values (r.wedding_id, r.partner_id, 'booking_cancelled', 'Reserva cancelada',
            public.couple_label(r.wedding_id),
            'O organizador não pagou o resto até ao prazo. A data fica livre e o sinal fica contigo.');
  end loop;
end;
$$;

-- ---------- quando abre o pagamento (lido pela app) ----------
-- A app calcula com `due_at`; esta função fica para a Edge Function.
grant execute on function public.final_payment_opens_at(timestamptz) to authenticated, service_role;

insert into public.applied_migrations (id) values ('204') on conflict do nothing;

commit;
