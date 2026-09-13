-- ============================================================
-- Módulo: Payments (admin-web) — ledger real
-- ============================================================
--
-- Antes desta migração não existia nenhuma tabela `payments` — o único
-- rasto de dinheiro era `bookings.total_amount`/`deposit_amount` (o valor
-- acordado, não o que foi de facto movimentado) e um evento em
-- `booking_events` quando o admin confirmava o sinal manualmente
-- (`admin_confirm_deposit()`, stub sem Stripe/processor real, ver
-- `010_deposit_cross_reference.sql`). `/admin/payments` era só
-- `ComingSoon`. Esta migração cria o ledger e liga-o aos dois pontos que
-- já existem no fluxo real de reserva.
--
-- Âmbito propositadamente limitado ao que já acontece de facto no
-- sistema: só pagamentos `deposit` são criados (por `accept_proposal()`)
-- e liquidados (por `admin_confirm_deposit()`). `installment`/
-- `final_payment` ficam no enum — o schema já os prevê — mas nenhum
-- código cria linhas desse tipo, porque não existe ainda nenhum fluxo de
-- pagamento final/faseado em lado nenhum da plataforma. Não inventado
-- aqui.

create type public.payment_type as enum ('deposit', 'installment', 'final_payment', 'refund');
create type public.payment_status as enum ('pending', 'paid', 'overdue', 'refunded', 'failed');

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id),
  payer_id uuid not null references public.profiles(id),
  partner_id uuid not null references public.partner_profiles(id),
  type public.payment_type not null,
  amount numeric(10,2) not null,
  currency text not null default 'EUR',
  due_at timestamptz,
  paid_at timestamptz,
  status public.payment_status not null default 'pending',
  provider text,
  provider_payment_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index payments_booking_idx on public.payments (booking_id);
create index payments_status_idx on public.payments (status);
create index payments_partner_idx on public.payments (partner_id);

alter table public.payments enable row level security;

create policy "Participants can view payments"
  on public.payments for select
  using (payer_id = auth.uid() or partner_id = auth.uid() or public.is_admin());

-- Sem policy de insert/update para authenticated — mesmo raciocínio de
-- bookings/quote_requests: todas as escritas passam pelas funções abaixo.

-- ============================================================
-- accept_proposal() — cria também o pagamento pendente do sinal, com o
-- mesmo prazo (`due_at = hold_expires_at`) que já bloqueia a data.
-- ============================================================

create or replace function public.accept_proposal(p_proposal_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_proposal record;
  v_quote record;
  v_booking_id uuid;
  v_hold_hours integer;
  v_hold_expires_at timestamptz;
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
  select default_booking_hold_hours into v_hold_hours from public.platform_settings where id = 1;
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;

  update public.proposals set status = 'accepted', updated_at = now() where id = p_proposal_id;
  update public.quote_requests set status = 'accepted', updated_at = now() where id = v_proposal.quote_request_id;

  insert into public.bookings (
    couple_id, partner_id, wedding_id, proposal_id, event_date,
    total_amount, deposit_amount, hold_expires_at
  )
  values (
    v_proposal.couple_id, v_proposal.partner_id, v_quote.wedding_id, p_proposal_id,
    coalesce(v_quote.event_date, current_date),
    v_proposal.price, v_proposal.deposit_amount, v_hold_expires_at
  )
  returning id into v_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, 'awaiting_deposit', 'couple', auth.uid());

  insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
  values (v_booking_id, v_proposal.couple_id, v_proposal.partner_id, 'deposit', v_proposal.deposit_amount, v_hold_expires_at, 'pending');

  return v_booking_id;
end;
$$;

-- ============================================================
-- admin_confirm_deposit() — liquida o pagamento pendente criado acima em
-- vez de só anotar em booking_events.
-- ============================================================

create or replace function public.admin_confirm_deposit(p_booking_id uuid, p_amount_received numeric)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
  v_deposit_amount numeric;
begin
  if not public.has_admin_permission('payment.write') then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status, deposit_amount into v_status, v_deposit_amount
  from public.bookings where id = p_booking_id for update;

  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'awaiting_deposit' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_amount_received is null or p_amount_received <> v_deposit_amount then
    raise exception 'amount_mismatch' using errcode = 'P0004';
  end if;

  update public.bookings set status = 'confirmed', confirmed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'deposit_confirmed_stub', 'awaiting_deposit', 'confirmed', 'admin', auth.uid(),
          jsonb_build_object(
            'note', 'Confirmado manualmente — sem integração de pagamento real ainda',
            'amount_received', p_amount_received,
            'expected_deposit_amount', v_deposit_amount
          ));

  update public.payments
  set status = 'paid', paid_at = now(), provider = 'manual_admin', updated_at = now()
  where booking_id = p_booking_id and type = 'deposit' and status = 'pending';
end;
$$;

-- ============================================================
-- expire_overdue_bookings() — falha também o pagamento pendente cujo
-- prazo passou, em vez de o deixar `pending` para sempre.
-- ============================================================

create or replace function public.expire_overdue_bookings()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
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
end;
$$;
