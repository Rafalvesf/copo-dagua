-- ============================================================
-- Pagamentos antecipados e fundos retidos até 3 dias depois do evento
-- ============================================================
-- Pedido do utilizador (2026-10-25): "os pagamentos têm de ser feitos
-- antes. Depois libertamos os fundos 3 dias depois se não for reportado
-- qualquer problema."
--
-- - O organizador paga o sinal ao aceitar e o restante até 30 dias antes
--   do evento (antes o restante só era pedido depois de o admin marcar a
--   reserva como concluída).
-- - O dinheiro fica na À Nossa! (a app deixa de transferir logo para o
--   parceiro). 3 dias depois do evento, sem disputa aberta, a Edge
--   Function `release-partner-funds` transfere a parte do parceiro (sem a
--   comissão). Corre todos os dias às 10:00.
-- Requer a migração 115 (pg_net e private.app_config).

alter table public.payments add column if not exists released_at timestamptz;
alter table public.payments add column if not exists transfer_id text;

-- Pagamentos feitos antes desta mudança já foram transferidos na hora.
update public.payments set released_at = coalesce(paid_at, updated_at), transfer_id = 'destination_charge'
where status in ('paid', 'refunded') and released_at is null;

-- ---------- Restante 30 dias antes do evento ----------
create or replace function public.final_payment_due_at(p_event_date date)
returns timestamptz language sql immutable as $$
  -- Até 30 dias antes do evento (fim do dia, Lisboa).
  select ((p_event_date - 30)::timestamp + interval '23 hours 59 minutes') at time zone 'Europe/Lisbon';
$$;

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
    greatest(now() + interval '2 days', public.final_payment_due_at(b.event_date)),
    'pending'
  );
  return new;
end;
$$;
drop trigger if exists create_final_payment_after_deposit on public.payments;
create trigger create_final_payment_after_deposit after update of status on public.payments
  for each row execute function public.create_final_payment_after_deposit();

-- Reservas já confirmadas sem pedido do restante: cria-o agora.
insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
select b.id, b.couple_id, b.partner_id, 'final_payment', b.total_amount - b.deposit_amount,
       greatest(now() + interval '2 days', public.final_payment_due_at(b.event_date)), 'pending'
from public.bookings b
where b.status = 'confirmed' and b.total_amount > b.deposit_amount
  and not exists (
    select 1 from public.payments p
    where p.booking_id = b.id and p.type = 'final_payment' and p.status in ('pending', 'overdue', 'paid')
  );

-- Concluir uma reserva já não cria o restante (é pedido antes).
create or replace function public.admin_complete_booking(p_booking_id uuid)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_booking record;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.status <> 'confirmed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.bookings set status = 'completed', completed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (p_booking_id, 'booking_completed', 'confirmed', 'completed', 'admin', auth.uid());

  if v_booking.total_amount > v_booking.deposit_amount and not exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'final_payment' and status in ('pending', 'overdue', 'paid')
  ) then
    insert into public.payments (booking_id, payer_id, partner_id, type, amount, status)
    values (p_booking_id, v_booking.couple_id, v_booking.partner_id, 'final_payment',
            v_booking.total_amount - v_booking.deposit_amount, 'pending');
  end if;
end;
$$;

-- ---------- Libertar os fundos ----------
-- Pagamentos prontos a libertar: pagos, 3 dias depois do evento, sem
-- disputa aberta e com a conta do parceiro criada.
create or replace function public.payments_to_release()
returns table (payment_id uuid, booking_id uuid, provider_payment_id text, amount numeric, partner_id uuid, partner_account text, booking_number text)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.id, b.id, p.provider_payment_id, p.amount, b.partner_id, pp.stripe_account_id, b.booking_number
  from public.payments p
  join public.bookings b on b.id = p.booking_id
  join public.partner_profiles pp on pp.id = b.partner_id
  where p.status = 'paid' and p.released_at is null
    and p.provider_payment_id like 'pi_%'
    and b.status in ('confirmed', 'completed')
    and b.event_date + 3 <= (now() at time zone 'Europe/Lisbon')::date
    and not exists (select 1 from public.disputes d where d.booking_id = b.id and d.status = 'open')
    and pp.stripe_account_id is not null;
$$;
revoke all on function public.payments_to_release() from public, anon, authenticated;

create or replace function public.mark_payment_released(p_payment_id uuid, p_transfer_id text)
returns void language sql security definer set search_path = public, pg_temp as $$
  update public.payments set released_at = now(), transfer_id = p_transfer_id, updated_at = now()
  where id = p_payment_id and released_at is null;
$$;
revoke all on function public.mark_payment_released(uuid, text) from public, anon, authenticated;

-- Todos os dias às 10:00 (Lisboa, hora de inverno).
create or replace function public.trigger_release_partner_funds()
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_secret text;
begin
  select value into v_secret from private.app_config where key = 'push_secret';
  perform net.http_post(
    url := 'https://yknbtsmcmjxzzhijyiav.supabase.co/functions/v1/release-partner-funds',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', coalesce(v_secret, '')),
    body := '{}'::jsonb
  );
end;
$$;
revoke all on function public.trigger_release_partner_funds() from public, anon, authenticated;

select cron.unschedule('release-partner-funds') where exists (select 1 from cron.job where jobname = 'release-partner-funds');
select cron.schedule('release-partner-funds', '0 10 * * *', $$select public.trigger_release_partner_funds();$$);
