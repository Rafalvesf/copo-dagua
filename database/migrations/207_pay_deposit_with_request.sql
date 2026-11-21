-- 207_pay_deposit_with_request.sql
-- Pagar o sinal ao pedir a reserva (mockups «Reservar por categoria»,
-- 2026-11-21; pedido do Rafael): no fim do pedido, «Pagar o sinal» ou
-- «Pagar mais tarde». Pago já, o sinal fica CATIVO no cartão até o parceiro
-- responder (48 h): se aceitar, passa a ser o sinal da reserva (que fica
-- confirmada logo); se recusar ou não responder em 48 h, é libertado.
--
-- Como: o pagamento do sinal existe antes da reserva — `payments` com
-- `quote_request_id` e sem `booking_id`. Quando o parceiro aceita
-- (`accept_package_request` cria a reserva e o sinal por pagar), um gatilho
-- troca esse sinal novo pelo que já foi pago. A libertação (cancelar no
-- Stripe) é feita pela `release-partner-funds`, de hora a hora.

alter table public.payments alter column booking_id drop not null;
alter table public.payments
  add column if not exists quote_request_id uuid references public.quote_requests(id) on delete set null;
create index if not exists payments_quote_request_idx
  on public.payments (quote_request_id) where quote_request_id is not null;
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'payments_booking_or_request') then
    alter table public.payments
      add constraint payments_booking_or_request check (booking_id is not null or quote_request_id is not null);
  end if;
end $$;

-- ---------- 1. O sinal do pedido ----------
-- Devolve o pagamento (por pagar) do sinal deste pedido; a app abre o ecrã
-- de pagar com ele. O valor é o sinal do parceiro sobre o total do pedido
-- (pacote + extras), igual ao que `accept_package_request` calcula.
create or replace function public.prepay_request_deposit(p_quote_request_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  q public.quote_requests%rowtype;
  v_pct numeric;
  v_id uuid;
  v_window integer;
begin
  select * into q from public.quote_requests where id = p_quote_request_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if q.couple_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if q.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if q.package_snapshot is null or q.total_amount is null or q.total_amount <= 0 or q.payer_mode = 'each' then
    raise exception 'no_deposit' using errcode = 'P0001';
  end if;
  v_pct := public.partner_deposit_pct(q.partner_id);
  if v_pct >= 100 then raise exception 'no_deposit' using errcode = 'P0001'; end if;

  select id into v_id from public.payments
   where quote_request_id = p_quote_request_id and booking_id is null and status in ('pending', 'paid')
   order by created_at desc limit 1;
  if v_id is not null then return v_id; end if;

  select coalesce(deposit_refund_window_hours, 48) into v_window from public.platform_settings where id = 1;
  insert into public.payments (booking_id, quote_request_id, payer_id, partner_id, type, amount, due_at, status)
  values (null, p_quote_request_id, q.couple_id, q.partner_id, 'deposit',
          round(q.total_amount * (v_pct / 100.0), 2), now() + make_interval(hours => coalesce(v_window, 48)), 'pending')
  returning id into v_id;
  return v_id;
end;
$$;
revoke execute on function public.prepay_request_deposit(uuid) from public, anon;
grant execute on function public.prepay_request_deposit(uuid) to authenticated;

-- ---------- 2. Cativo até o parceiro responder ----------
-- Sem reserva: cativo 48 h depois de pago (a `release-partner-funds` nunca o
-- cobra assim — só o liberta; ver `request_holds_to_release`). O resto é a
-- versão anterior (174/205), sem alterações.
create or replace function public.payment_hold_until(p_payment_id uuid)
returns timestamptz
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_pay record;
  v_kind text;
  v_window integer;
  v_refundable boolean;
  v_until timestamptz;
  v_deposit_end timestamptz;
  v_full boolean;
  v_req record;
begin
  select coalesce(deposit_refund_window_hours, 48) into v_window from public.platform_settings where id = 1;

  select id, paid_at, updated_at into v_req from public.payments
   where id = p_payment_id and booking_id is null and quote_request_id is not null;
  if v_req.id is not null then
    return coalesce(v_req.paid_at, now()) + make_interval(hours => coalesce(v_window, 48));
  end if;

  select p.*, b.partner_id as b_partner, b.proposal_id, b.deposit_amount as b_deposit, b.total_amount as b_total into v_pay
    from public.payments p join public.bookings b on b.id = p.booking_id where p.id = p_payment_id;
  if v_pay is null then return now(); end if;
  select kind into v_kind from public.partner_cancellation_policy(v_pay.b_partner);
  select coalesce((select deposit_refundable from public.proposals where id = v_pay.proposal_id), true) into v_refundable;
  v_until := public.booking_free_cancel_until(v_pay.booking_id);
  v_deposit_end := coalesce(v_pay.paid_at, v_pay.updated_at, now()) + make_interval(hours => coalesce(v_window, 48));
  v_full := coalesce(v_pay.b_deposit, 0) >= coalesce(v_pay.b_total, 0) and coalesce(v_pay.b_total, 0) > 0;

  if v_pay.type = 'deposit' then
    if v_kind = 'hours' or (v_full and v_kind = 'standard') then
      return greatest(case when v_refundable then v_deposit_end else now() end, coalesce(v_until, now()));
    end if;
    return case when v_refundable then v_deposit_end else now() end;
  end if;
  if v_kind in ('hours', 'standard') then
    return coalesce(v_until, now());
  end if;
  return now();
end;
$$;

-- ---------- 3. Confirmar o pagamento (webhook) ----------
-- Igual à versão anterior; sem reserva (sinal pago ao pedir) só marca o
-- pagamento como pago — a reserva confirma-se quando o parceiro aceitar.
create or replace function public.confirm_stripe_deposit_payment(p_session_id text, p_payment_intent_id text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_payment record;
begin
  select * into v_payment from public.payments
  where provider_payment_id = p_session_id and status = 'pending'
  for update;

  if v_payment is null then
    -- Evento duplicado (Stripe reenvia webhooks) ou sessão desconhecida —
    -- não é um erro do ponto de vista do webhook, só não há nada a fazer.
    return;
  end if;

  update public.payments
  set status = 'paid', paid_at = now(), provider_payment_id = p_payment_intent_id, updated_at = now()
  where id = v_payment.id;

  if v_payment.booking_id is null then
    return;
  end if;

  if v_payment.type = 'deposit' then
    update public.bookings
    set status = 'confirmed', confirmed_at = now()
    where id = v_payment.booking_id and status = 'awaiting_deposit';

    insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, metadata)
    values (v_payment.booking_id, 'deposit_confirmed_stripe', 'awaiting_deposit', 'confirmed', 'system',
            jsonb_build_object('payment_intent_id', p_payment_intent_id));
  elsif v_payment.type = 'final_payment' then
    insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, metadata)
    values (v_payment.booking_id, 'final_payment_confirmed_stripe', null, null, 'system',
            jsonb_build_object('payment_intent_id', p_payment_intent_id));
  end if;
end;
$$;

-- ---------- 4. O parceiro aceita: o sinal pago passa para a reserva ----------
-- `accept_package_request` cria a reserva e um sinal por pagar. Se o pedido
-- já tinha um sinal (pago ou a meio de pagar), fica esse: liga-se à reserva
-- e o novo apaga-se. Pago → a reserva fica confirmada logo.
create or replace function public.adopt_request_deposit()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_pre record;
  v_bk record;
  v_days integer;
begin
  if new.type <> 'deposit' or new.booking_id is null then return null; end if;

  select pr.id, pr.status, pr.amount, pr.provider_payment_id into v_pre
    from public.bookings b
    join public.proposals pp on pp.id = b.proposal_id
    join public.payments pr on pr.quote_request_id = pp.quote_request_id
   where b.id = new.booking_id
     and pr.booking_id is null
     and pr.status in ('pending', 'paid')
     and pr.id <> new.id
   order by (pr.status = 'paid') desc, pr.created_at desc
   limit 1
   for update of pr;
  if v_pre.id is null then return null; end if;

  update public.payments
     set booking_id = new.booking_id, due_at = coalesce(new.due_at, due_at), updated_at = now()
   where id = v_pre.id;
  delete from public.payments where id = new.id;
  update public.bookings set deposit_amount = v_pre.amount where id = new.booking_id;

  if v_pre.status = 'paid' then
    update public.bookings set status = 'confirmed', confirmed_at = now()
     where id = new.booking_id and status = 'awaiting_deposit';
    insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, metadata)
    values (new.booking_id, 'deposit_confirmed_stripe', 'awaiting_deposit', 'confirmed', 'system',
            jsonb_build_object('payment_intent_id', v_pre.provider_payment_id, 'paid_with_request', true));

    -- O que os gatilhos de «pago» fazem (o sinal foi pago quando ainda não
    -- havia reserva): o resto por pagar e o aviso ao parceiro.
    select * into v_bk from public.bookings where id = new.booking_id;
    if v_bk.total_amount > v_bk.deposit_amount and not exists (
      select 1 from public.payments
       where booking_id = v_bk.id and type = 'final_payment' and status in ('pending', 'overdue', 'paid')
    ) then
      select final_payment_days into v_days from public.partner_profiles where id = v_bk.partner_id;
      insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
      values (v_bk.id, v_bk.couple_id, v_bk.partner_id, 'final_payment', v_bk.total_amount - v_bk.deposit_amount,
              greatest(now() + interval '2 days', public.final_payment_due_at(v_bk.event_date, v_days)), 'pending');
    end if;
    insert into public.notifications (partner_id, type, title, subtitle, body, link)
    values (v_bk.partner_id, 'payment_received', 'Sinal recebido', public.couple_label(v_bk.wedding_id),
            public.fmt_eur(v_pre.amount), '/partner-payments');
  end if;
  return null;
end;
$$;

drop trigger if exists payments_adopt_request_deposit on public.payments;
create trigger payments_adopt_request_deposit
  after insert on public.payments
  for each row execute function public.adopt_request_deposit();

-- ---------- 5. Libertar quando o parceiro recusa ou não responde ----------
-- Sinais de pedidos sem reserva: o pedido foi recusado/expirou, ou passaram
-- 48 h desde que se pagou (ou desde que se começou a pagar).
create or replace function public.request_holds_to_release()
returns table (payment_id uuid, provider_payment_id text, status public.payment_status)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.id, p.provider_payment_id, p.status
    from public.payments p
    join public.quote_requests q on q.id = p.quote_request_id
   where p.booking_id is null
     and p.status in ('pending', 'paid')
     and (q.status in ('declined', 'expired')
          or coalesce(p.paid_at, p.created_at)
             + make_interval(hours => coalesce((select deposit_refund_window_hours from public.platform_settings where id = 1), 48))
             <= now());
$$;

-- Marca o sinal como libertado ANTES de o cancelar no Stripe, para o
-- parceiro não o conseguir aceitar a meio. Devolve false se entretanto já
-- passou para uma reserva.
create or replace function public.claim_request_hold_release(p_payment_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v record;
begin
  select id, booking_id, status, amount into v from public.payments where id = p_payment_id for update;
  if v.id is null or v.booking_id is not null or v.status not in ('pending', 'paid') then return false; end if;
  update public.payments
     set status = case when v.status = 'paid' then 'refunded'::public.payment_status else 'failed'::public.payment_status end,
         refunded_amount = case when v.status = 'paid' then v.amount else refunded_amount end,
         is_held = false,
         updated_at = now()
   where id = p_payment_id;
  return true;
end;
$$;

revoke execute on function public.request_holds_to_release() from public, anon, authenticated;
revoke execute on function public.claim_request_hold_release(uuid) from public, anon, authenticated;
revoke execute on function public.adopt_request_deposit() from public, anon, authenticated;
grant execute on function public.request_holds_to_release() to service_role;
grant execute on function public.claim_request_hold_release(uuid) to service_role;

insert into public.applied_migrations (id) values ('207') on conflict do nothing;
