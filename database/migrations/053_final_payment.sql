-- ============================================================
-- Payments — pagamento final automático
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-04): "e para tratar de envios
-- aos clientes? automaticamente pela app, dos pagamentos pelos serviços
-- deles" — até agora só `payments.type = 'deposit'` era criado/cobrado
-- em algum ponto da plataforma (`020_payments.sql`, comentário original:
-- "installment/final_payment ficam no enum... nenhum código cria linhas
-- desse tipo"). Decisão confirmada com o utilizador: mesmo padrão do
-- sinal — pedido de pagamento com Stripe Checkout Session, o casal
-- confirma manualmente (não cobrança silenciosa/off-session, que exigia
-- guardar cartão e lidar com SCA).
--
-- "Automaticamente" aqui significa que o PEDIDO é criado sozinho (a
-- linha em `payments`), assim que o parceiro marca o serviço como
-- concluído — não que o dinheiro é cobrado sem o casal agir.

create or replace function public.admin_complete_booking(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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

  if v_booking.total_amount > v_booking.deposit_amount then
    insert into public.payments (booking_id, payer_id, partner_id, type, amount, status)
    values (
      p_booking_id, v_booking.couple_id, v_booking.partner_id, 'final_payment',
      v_booking.total_amount - v_booking.deposit_amount, 'pending'
    );
  end if;
end;
$$;

-- confirm_stripe_deposit_payment() generalizado: continua a ser chamado
-- pelo mesmo webhook (checkout.session.completed) para qualquer tipo de
-- pagamento, não só sinal — nome mantido (evita quebrar a referência já
-- configurada no webhook Stripe/Edge Function) mas o corpo passa a
-- ramificar por `payments.type`.
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
