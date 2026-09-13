-- ============================================================
-- Deposit % fixa (não editável pelo parceiro) + penalização de
-- cancelamento tardio pelo casal
-- ============================================================
-- Pedido explícito do utilizador: "o sinal nunca pode ser editado pelo
-- parceiro, mas pode ser ajustado pelo administrador no admin web na
-- secção comissões" + regra de cancelamento: "Casal dispõe de até aos
-- últimos 30 dias até ao casamento para cancelar sem serem penalizados
-- monetariamente. Caso ultrapasse, o parceiro fica com o sinal e a
-- empresa com os 5% de comissão sobre o sinal. O sinal representa 20%
-- do valor total do orçamento ou plano definido pelo parceiro."
--
-- Os 5% de comissão sobre o sinal já são o `platform_commission_percentage`
-- existente (`019_platform_settings.sql`), cobrado no momento da Stripe
-- Checkout Session via `application_fee_amount`
-- (`create-deposit-checkout/index.ts`) — a plataforma já fica com essa
-- fatia assim que o sinal é pago, independentemente do que aconteça
-- depois. Não há nenhum automatismo novo de dinheiro a inventar aqui: o
-- que esta migração determina é só se um cancelamento dá direito a
-- reembolso do sinal já pago (fora da janela de penalização) ou não
-- (dentro dela, sinal fica cativo — nenhuma transação nova acontece,
-- simplesmente `refund_required` fica `false`).

alter table public.platform_settings
  add column deposit_percentage numeric(5,2) not null default 20.00,
  add column cancellation_penalty_days integer not null default 30;

-- send_proposal() deixa de aceitar `p_deposit_amount` do parceiro — o
-- sinal passa a ser sempre calculado a partir de `deposit_percentage`,
-- nunca um valor livre. Assinatura antiga removida explicitamente (não
-- basta `create or replace` com menos parâmetros — isso cria uma
-- segunda função sobrecarregada em vez de substituir a antiga, que
-- continuaria callable com um sinal arbitrário).
drop function if exists public.send_proposal(uuid, text, text, numeric, numeric, text);

create or replace function public.send_proposal(
  p_quote_request_id uuid, p_title text, p_description text,
  p_price numeric, p_payment_terms text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote record;
  v_deposit_pct numeric;
  v_deposit_amount numeric;
  v_proposal_id uuid;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if v_quote is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_quote.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_quote.status not in ('pending', 'viewed') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_price is null or p_price <= 0 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select deposit_percentage into v_deposit_pct from public.platform_settings where id = 1;
  v_deposit_amount := round(p_price * (v_deposit_pct / 100.0), 2);

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id, p_title, p_description, p_price, v_deposit_amount, p_payment_terms)
  returning id into v_proposal_id;

  update public.quote_requests set status = 'proposal_sent', updated_at = now() where id = p_quote_request_id;

  return v_proposal_id;
end;
$$;

revoke execute on function public.send_proposal(uuid, text, text, numeric, text) from public, anon;
grant execute on function public.send_proposal(uuid, text, text, numeric, text) to authenticated;

-- cancel_booking_by_couple() passa a aplicar a janela de penalização:
-- >= cancellation_penalty_days até ao evento -> sem penalização (sinal
-- já pago fica marcado para reembolso); dentro da janela -> sinal
-- cativo (nunca marcado para reembolso, mesmo que já pago). Metadata
-- regista `days_until_event`/`penalty_applied` para auditoria — nunca
-- escondido, mesmo raciocínio de `refund_required` já existente.
create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_penalty_days integer;
  v_days_until_event integer;
  v_penalty_applies boolean;
  v_deposit_paid boolean;
  v_refund_required boolean;
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

  select cancellation_penalty_days into v_penalty_days from public.platform_settings where id = 1;
  v_days_until_event := v_booking.event_date - current_date;
  v_penalty_applies := v_days_until_event < v_penalty_days;

  select exists (
    select 1 from public.payments
    where booking_id = p_booking_id and type = 'deposit' and status = 'paid'
  ) into v_deposit_paid;

  -- Sem penalização -> reembolsar se já pago. Com penalização -> sinal
  -- cativo, nunca reembolsar, independentemente de estar pago.
  v_refund_required := v_deposit_paid and not v_penalty_applies;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          jsonb_build_object(
            'reason', p_reason,
            'refund_required', v_refund_required,
            'days_until_event', v_days_until_event,
            'penalty_applied', v_penalty_applies
          ));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and type = 'deposit' and status = 'pending';
end;
$$;
