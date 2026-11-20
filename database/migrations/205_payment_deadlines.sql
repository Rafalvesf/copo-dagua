-- 205_payment_deadlines.sql
-- Prazos do sinal e do resto (pedido do Rafael, 2026-11-20). Precisa da 204.
--
--   * Resto: até 14 dias antes do evento por defeito; o parceiro pode
--     baixar até 1 (`partner_profiles.final_payment_days`). Só se paga nos
--     6 dias antes do prazo (fica cativo até ao prazo).
--   * Sinal: até 30 dias antes do evento. Reservas aceites depois disso:
--     o prazo de sempre (48 h depois de aceite) e o sinal fica cativo 48 h
--     (janela de reembolso, migrações 112/124).
--   * Categorias sem sinal (191, pagam tudo de uma vez — restaurantes,
--     atividades… que se cancelam até 2 h antes): o pagamento único segue
--     o prazo do resto e também só se paga nos 6 dias antes do prazo.
--   * Prazo do resto / pagamento único: regra base 14 dias antes (fim do
--     dia); o parceiro pode baixar até 1 dia. Quem cancela grátis até X h
--     antes do início conta em horas: N × 24 h antes do início (no mínimo
--     24 h antes).
--   * O único prazo que o parceiro ajusta é o do resto / pagamento único.
--   * Avisos iguais para o sinal e o resto: 6 dias antes do prazo e nos
--     últimos 3 dias. Sem pagamento no fim do prazo, a reserva cancela
--     (sinal: `expire_overdue_bookings` pelo `hold_expires_at`; resto: 204).

begin;

-- ---------- resto: 14 dias por defeito, até 1 ----------
alter table public.partner_profiles drop constraint if exists partner_profiles_final_payment_days_check;
alter table public.partner_profiles alter column final_payment_days set default 14;
update public.partner_profiles set final_payment_days = 14 where final_payment_days > 14;
alter table public.partner_profiles add constraint partner_profiles_final_payment_days_check
  check (final_payment_days between 1 and 14);

create or replace function public.final_payment_due_at(p_event_date date, p_days integer)
returns timestamptz language sql immutable set search_path = public, pg_temp as $$
  select ((p_event_date - greatest(1, least(14, coalesce(p_days, 14))))::timestamp
          + interval '23 hours 59 minutes') at time zone 'Europe/Lisbon';
$$;

-- Prazo do resto / pagamento único de uma reserva.
create or replace function public.final_payment_deadline(p_booking_id uuid)
returns timestamptz language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_partner uuid;
  v_date date;
  v_days integer;
  v_kind text;
  v_start timestamptz;
begin
  select partner_id, event_date into v_partner, v_date from public.bookings where id = p_booking_id;
  if v_date is null then return null; end if;
  select final_payment_days into v_days from public.partner_profiles where id = v_partner;
  v_days := greatest(1, least(14, coalesce(v_days, 14)));
  select kind into v_kind from public.partner_cancellation_policy(v_partner);
  if v_kind = 'hours' then
    v_start := public.booking_event_start(p_booking_id);
    if v_start is not null then return v_start - make_interval(hours => 24 * v_days); end if;
  end if;
  return public.final_payment_due_at(v_date, v_days);
end;
$$;
revoke execute on function public.final_payment_deadline(uuid) from public, anon, authenticated;

create or replace function public.create_final_payment_after_deposit()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
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
  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (
    b.id, b.couple_id, b.partner_id, 'final_payment', b.total_amount - b.deposit_amount,
    greatest(now() + interval '2 days', public.final_payment_deadline(b.id)),
    'pending'
  );
  return new;
end;
$$;

-- ---------- sinal: até 30 dias antes ----------
create or replace function public.deposit_due_at(p_event_date date)
returns timestamptz language sql immutable set search_path = public, pg_temp as $$
  select ((p_event_date - 30)::timestamp + interval '23 hours 59 minutes') at time zone 'Europe/Lisbon';
$$;

create or replace function public.set_deposit_due()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b record;
begin
  if new.type <> 'deposit' or new.status <> 'pending' then return new; end if;
  select bk.id, bk.event_date, bk.total_amount, bk.deposit_amount into b
    from public.bookings bk where bk.id = new.booking_id;
  if b is null or b.event_date is null then
    return new;
  end if;
  if coalesce(b.deposit_amount, 0) >= coalesce(b.total_amount, 0) then
    -- Sem sinal: o pagamento único segue o prazo do resto.
    new.due_at := greatest(coalesce(new.due_at, now() + interval '48 hours'),
                           public.final_payment_deadline(b.id));
  else
    new.due_at := greatest(coalesce(new.due_at, now() + interval '48 hours'), public.deposit_due_at(b.event_date));
  end if;
  return new;
end;
$$;
drop trigger if exists set_deposit_due on public.payments;
create trigger set_deposit_due before insert on public.payments
  for each row execute function public.set_deposit_due();

-- A reserva fica guardada até ao prazo do sinal (antes eram só 48 h).
create or replace function public.extend_hold_to_deposit_due()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if new.type = 'deposit' and new.status = 'pending' and new.due_at is not null then
    update public.bookings set hold_expires_at = new.due_at
    where id = new.booking_id and status = 'awaiting_deposit'
      and (hold_expires_at is null or hold_expires_at < new.due_at);
  end if;
  return new;
end;
$$;
drop trigger if exists extend_hold_to_deposit_due on public.payments;
create trigger extend_hold_to_deposit_due after insert on public.payments
  for each row execute function public.extend_hold_to_deposit_due();

-- ---------- avisos iguais para o sinal e o resto ----------
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
  v_what text;
begin
  -- Outros pagamentos (partes de convidados): 48 h antes do prazo, como antes.
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null
      and pay.type not in ('deposit', 'final_payment')
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due', 'Pagamento por fazer',
            coalesce(p.business_name, 'Parceiro'),
            public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;

  -- Sinal e resto: quando faltam 6 dias e nos últimos 3 dias.
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, pay.open_notice_at, pay.urgent_notice_at,
           b.wedding_id, b.private_owner, pp.business_name,
           (pay.type = 'deposit' and coalesce(b.deposit_amount, 0) >= coalesce(b.total_amount, 0)) as full_pay
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.type in ('deposit', 'final_payment') and pay.status = 'pending'
      and pay.due_at is not null and pay.due_at > now()
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
      and (
        (pay.open_notice_at is null and now() >= public.final_payment_opens_at(pay.due_at))
        or (pay.urgent_notice_at is null and pay.due_at <= now() + interval '3 days')
      )
  loop
    perform public.set_private_context(null);
    v_what := case when p.full_pay then 'a reserva' when p.type = 'deposit' then 'o sinal' else 'o resto' end;
    if p.urgent_notice_at is null and p.due_at <= now() + interval '3 days' then
      insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
      values (p.wedding_id, p.private_owner, 'payment_due', 'Último aviso: paga ' || v_what,
              coalesce(p.business_name, 'Parceiro'),
              public.fmt_eur(p.amount) || ' até ' || public.fmt_quando(p.due_at) || '. Sem pagamento, a reserva é cancelada.',
              '/bookings');
      update public.payments set urgent_notice_at = now(), open_notice_at = coalesce(open_notice_at, now()) where id = p.id;
    else
      insert into public.notifications (wedding_id, profile_id, type, title, subtitle, body, link)
      values (p.wedding_id, p.private_owner, 'payment_due',
              case when p.full_pay then 'Já podes pagar a reserva'
                   when p.type = 'deposit' then 'Falta pagar o sinal' else 'Já podes pagar o resto' end,
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

insert into public.applied_migrations (id) values ('205') on conflict do nothing;

commit;
