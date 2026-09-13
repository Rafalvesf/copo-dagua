-- ============================================================
-- Módulo: Payments — Stripe Connect (Express)
-- ============================================================
--
-- Decisão de arquitetura registada em `mobile-app/payments/stripe-connect.md`:
-- Connect Express (Stripe trata onboarding/compliance dos parceiros),
-- destination charges (o casal paga a plataforma diretamente, a
-- plataforma transfere para o parceiro menos `application_fee_amount`),
-- Checkout Sessions hospedadas pela Stripe (sem nenhum campo de cartão a
-- passar por este código — fora do âmbito de PCI DSS por desenho).
--
-- Âmbito desta ronda: só o pagamento do sinal (`payments.type = 'deposit'`)
-- passa a poder ser cobrado via Stripe em vez de só confirmado
-- manualmente pelo admin — mesmo âmbito de `020_payments.sql`.
-- `admin_confirm_deposit()` mantém-se como via alternativa para
-- transferência bancária; passa a coexistir com o caminho Stripe, não é
-- substituída.

alter table public.partner_profiles
  add column stripe_account_id text,
  add column stripe_charges_enabled boolean not null default false,
  add column stripe_payouts_enabled boolean not null default false;

create unique index partner_profiles_stripe_account_idx
  on public.partner_profiles (stripe_account_id)
  where stripe_account_id is not null;

-- ============================================================
-- record_stripe_checkout_session() — chamada pela Edge Function
-- create-deposit-checkout (autenticada como o casal) depois de criar a
-- Checkout Session na Stripe, para guardar o id da sessão antes de
-- redirecionar. `payments` não tem policy de update para authenticated
-- (mesmo padrão de bookings/quote_requests — só escreve via função) —
-- esta é a única exceção deliberada nesta ronda.
-- ============================================================

create or replace function public.record_stripe_checkout_session(
  p_payment_id uuid, p_session_id text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_payer_id uuid;
  v_status payment_status;
begin
  select payer_id, status into v_payer_id, v_status from public.payments where id = p_payment_id for update;
  if v_payer_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_payer_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_status <> 'pending' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.payments
  set provider = 'stripe', provider_payment_id = p_session_id, updated_at = now()
  where id = p_payment_id;
end;
$$;

revoke execute on function public.record_stripe_checkout_session(uuid, text) from public, anon;
grant execute on function public.record_stripe_checkout_session(uuid, text) to authenticated;

-- ============================================================
-- confirm_stripe_deposit_payment() / sync_stripe_account_status() —
-- chamadas só pela Edge Function stripe-webhook, nunca por um cliente:
-- a autenticação real é a assinatura do evento Stripe (verificada na
-- própria função, com STRIPE_WEBHOOK_SECRET), não uma sessão Supabase —
-- o webhook não tem nenhum utilizador autenticado por trás. Por isso
-- `execute` é concedido só a `service_role` e explicitamente revogado de
-- `authenticated`, ao contrário de todas as outras funções deste
-- projeto — mesmo raciocínio de `expire_overdue_bookings()`
-- (`009_quotations_bookings.sql`), que só o pg_cron chama.
-- ============================================================

create or replace function public.confirm_stripe_deposit_payment(
  p_session_id text, p_payment_intent_id text
)
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

  update public.bookings
  set status = 'confirmed', confirmed_at = now()
  where id = v_payment.booking_id and status = 'awaiting_deposit';

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, metadata)
  values (v_payment.booking_id, 'deposit_confirmed_stripe', 'awaiting_deposit', 'confirmed', 'system',
          jsonb_build_object('payment_intent_id', p_payment_intent_id));
end;
$$;

create or replace function public.sync_stripe_account_status(
  p_account_id text, p_charges_enabled boolean, p_payouts_enabled boolean
)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.partner_profiles
  set stripe_charges_enabled = p_charges_enabled,
      stripe_payouts_enabled = p_payouts_enabled
  where stripe_account_id = p_account_id;
$$;

revoke execute on function public.confirm_stripe_deposit_payment(text, text) from public, anon, authenticated;
revoke execute on function public.sync_stripe_account_status(text, boolean, boolean) from public, anon, authenticated;
grant execute on function public.confirm_stripe_deposit_payment(text, text) to service_role;
grant execute on function public.sync_stripe_account_status(text, boolean, boolean) to service_role;
