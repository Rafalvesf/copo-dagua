-- ============================================================
-- Notificações com a app fechada (Web Push)
-- ============================================================
-- Pedido do utilizador (2026-10-21): mensagens, pagamentos, reservas e
-- propostas, tarefas e lembretes têm de chegar ao telemóvel/computador
-- mesmo com a app fechada.
--
-- Como funciona:
-- 1. Cada dispositivo que aceita notificações guarda a sua subscrição em
--    `push_subscriptions` (uma por browser/telemóvel).
-- 2. Sempre que se cria (ou junta) uma linha em `notifications`, a base de
--    dados chama a Edge Function `send-push` (pg_net), que envia o aviso a
--    todos os dispositivos das pessoas a quem a notificação se destina.
-- 3. Os eventos que ainda não criavam notificação passam a criar
--    (pedido de orçamento, proposta, reserva, pagamento) e há lembretes
--    diários (pagamentos a 48 h do prazo, evento daqui a 7 dias e amanhã).
--
-- Segredos: as chaves VAPID e o segredo entre a base de dados e a função
-- ficam em `private.app_config` (fora da API), nunca na app nem no código.

create extension if not exists pg_net with schema extensions;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table if not exists private.app_config (key text primary key, value text not null);
insert into private.app_config (key, value)
values ('push_secret', encode(extensions.gen_random_bytes(24), 'hex'))
on conflict (key) do nothing;

-- ---------- Subscrições ----------
create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  user_agent text,
  created_at timestamptz not null default now(),
  last_used_at timestamptz
);
create index if not exists push_subscriptions_profile_idx on public.push_subscriptions (profile_id);
alter table public.push_subscriptions enable row level security;
drop policy if exists "Own push subscriptions" on public.push_subscriptions;
create policy "Own push subscriptions" on public.push_subscriptions for all
  using (profile_id = auth.uid()) with check (profile_id = auth.uid());

-- ---------- Funções só para a Edge Function (service_role) ----------
create or replace function public.push_config()
returns jsonb language sql security definer set search_path = private, public, pg_temp as $$
  select coalesce(jsonb_object_agg(key, value), '{}'::jsonb) from private.app_config;
$$;

create or replace function public.push_set_vapid(p_public text, p_private text)
returns void language plpgsql security definer set search_path = private, public, pg_temp as $$
begin
  insert into private.app_config (key, value) values ('vapid_public', p_public)
    on conflict (key) do nothing;
  insert into private.app_config (key, value) values ('vapid_private', p_private)
    on conflict (key) do nothing;
end;
$$;

-- Quem recebe uma notificação: a pessoa (profile_id), o parceiro
-- (partner_id) ou todos os organizadores do evento (dono + colaboradores).
create or replace function public.notification_recipient_ids(p_id uuid)
returns setof uuid language plpgsql security definer set search_path = public, pg_temp as $$
declare
  n record;
begin
  select * into n from public.notifications where id = p_id;
  if n is null then return; end if;
  if n.profile_id is not null then
    return next n.profile_id;
  elsif n.partner_id is not null then
    return next n.partner_id;
  elsif n.wedding_id is not null then
    return query
      select owner_id from public.weddings where id = n.wedding_id and owner_id is not null
      union
      select user_id from public.wedding_collaborators
      where wedding_id = n.wedding_id and status = 'accepted' and removed_at is null and user_id is not null;
  end if;
end;
$$;

revoke all on function public.push_config() from public, anon, authenticated;
revoke all on function public.push_set_vapid(text, text) from public, anon, authenticated;
revoke all on function public.notification_recipient_ids(uuid) from public, anon, authenticated;
grant execute on function public.push_config() to service_role;
grant execute on function public.push_set_vapid(text, text) to service_role;
grant execute on function public.notification_recipient_ids(uuid) to service_role;

-- ---------- Cada notificação nova → push ----------
create or replace function public.push_on_notification()
returns trigger language plpgsql security definer set search_path = private, public, extensions, pg_temp as $$
declare
  v_secret text;
begin
  -- Mensagens juntas numa notificação só voltam a avisar quando chega outra.
  if tg_op = 'UPDATE' and new.created_at is not distinct from old.created_at then
    return new;
  end if;
  select value into v_secret from private.app_config where key = 'push_secret';
  perform net.http_post(
    url := 'https://yknbtsmcmjxzzhijyiav.supabase.co/functions/v1/send-push',
    body := jsonb_build_object('id', new.id),
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', v_secret)
  );
  return new;
exception when others then
  -- Nunca bloqueia a criação da notificação por causa do push.
  return new;
end;
$$;

drop trigger if exists push_on_notification on public.notifications;
create trigger push_on_notification after insert or update of created_at on public.notifications
  for each row execute function public.push_on_notification();

-- ---------- Eventos que passam a gerar notificação ----------
create or replace function public.couple_label(p_wedding_id uuid)
returns text language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce(nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), ''), 'Um organizador')
  from public.weddings where id = p_wedding_id;
$$;

-- Novo pedido de orçamento → parceiro.
create or replace function public.notify_quote_request()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  insert into public.notifications (partner_id, type, title, body, link)
  values (new.partner_id, 'quote_request', 'Novo pedido de orçamento',
          public.couple_label(new.wedding_id) || coalesce(' · ' || to_char(new.event_date, 'DD/MM/YYYY'), '')
          || coalesce(' — ' || left(nullif(trim(new.message), ''), 100), ''),
          '/partner-requests');
  return new;
end;
$$;
drop trigger if exists notify_quote_request on public.quote_requests;
create trigger notify_quote_request after insert on public.quote_requests
  for each row execute function public.notify_quote_request();

-- Proposta recebida → organizadores. Proposta aceite → parceiro.
create or replace function public.notify_proposal()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_wedding uuid;
  v_partner text;
begin
  select wedding_id into v_wedding from public.quote_requests where id = new.quote_request_id;
  if tg_op = 'INSERT' and new.status = 'sent' then
    select business_name into v_partner from public.partner_profiles where id = new.partner_id;
    insert into public.notifications (wedding_id, type, title, body, link)
    values (v_wedding, 'proposal_received', 'Nova proposta de ' || coalesce(v_partner, 'um parceiro'),
            new.title || ' · ' || replace(to_char(new.price, 'FM9999990.00'), '.', ',') || ' €', '/bookings');
  elsif tg_op = 'UPDATE' and new.status = 'accepted' and old.status is distinct from 'accepted' then
    insert into public.notifications (partner_id, type, title, body, link)
    values (new.partner_id, 'proposal_accepted', 'Proposta aceite',
            public.couple_label(v_wedding) || ' aceitou “' || new.title || '”. Aguarda o pagamento do sinal.',
            '/partner-contracts');
  end if;
  return new;
end;
$$;
drop trigger if exists notify_proposal on public.proposals;
create trigger notify_proposal after insert or update of status on public.proposals
  for each row execute function public.notify_proposal();

-- Pagamento recebido → parceiro e organizadores.
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
          b.booking_number || ' · ' || public.couple_label(b.wedding_id) || ' · '
          || replace(to_char(new.amount, 'FM9999990.00'), '.', ',') || ' €', '/partner-payments');
  insert into public.notifications (wedding_id, type, title, body, link)
  values (b.wedding_id, 'payment_confirmed', v_label || ' pago',
          b.booking_number || ' · ' || coalesce(v_partner, 'parceiro') || '. Obrigado!', '/bookings');
  return new;
end;
$$;
drop trigger if exists notify_payment_paid on public.payments;
create trigger notify_payment_paid after update of status on public.payments
  for each row execute function public.notify_payment_paid();

-- ---------- Lembretes diários ----------
alter table public.payments add column if not exists reminder_sent_at timestamptz;

create or replace function public.daily_reminders()
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  p record;
  w record;
  g record;
begin
  -- Pagamentos que terminam nas próximas 48 h.
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.booking_number, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    insert into public.notifications (wedding_id, type, title, body, link)
    values (p.wedding_id, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Restante por pagar' end,
            coalesce(p.business_name, 'Parceiro') || ' · ' || p.booking_number || ' · até '
            || to_char(p.due_at at time zone 'Europe/Lisbon', 'DD/MM HH24:MI'), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;

  -- Evento daqui a 7 dias e amanhã → organizadores.
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

  -- Evento amanhã → convidados com conta.
  for g in
    select distinct gu.linked_profile_id as profile_id, w.id as wedding_id
    from public.guests gu join public.weddings w on w.id = gu.wedding_id
    where gu.linked_profile_id is not null and w.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$$;
revoke all on function public.daily_reminders() from public, anon, authenticated;

-- Todos os dias às 09:00 (Lisboa, hora de inverno).
select cron.unschedule('daily-reminders') where exists (select 1 from cron.job where jobname = 'daily-reminders');
select cron.schedule('daily-reminders', '0 9 * * *', $$select public.daily_reminders();$$);

-- O mesmo browser pode mudar de conta: a subscrição passa para quem está
-- agora com sessão (o RLS não deixa ver a da outra conta).
create or replace function public.claim_push_subscription(p_endpoint text, p_p256dh text, p_auth text)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  insert into public.push_subscriptions (profile_id, endpoint, p256dh, auth)
  values (auth.uid(), p_endpoint, p_p256dh, p_auth)
  on conflict (endpoint) do update set profile_id = auth.uid(), p256dh = excluded.p256dh, auth = excluded.auth, created_at = now();
end;
$$;
grant execute on function public.claim_push_subscription(text, text, text) to authenticated;
