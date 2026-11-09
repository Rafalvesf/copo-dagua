-- 174 · As regras de cancelamento de cada parceiro passam a contar no dinheiro
--
-- Pedido 2026-11-09 ("fix this"): o reembolso automático segue a regra do
-- parceiro (173). Sem regra escolhida, vale a da categoria:
--   restaurantes, bares, atividades, experiências, jogos, spa, animação
--     → grátis até 2 h antes do início;
--   transporte, alojamento → segundo o parceiro;
--   restantes → regra base (sinal nas 48 h após pagar, se o parceiro o
--     marcou reembolsável; restante com 30+ dias de antecedência).
-- Regras:
--   hours          → antes do prazo devolve tudo (sinal e restante);
--                    depois, só o sinal dentro das 48 h (se reembolsável).
--   until_purchase / partner_terms → só o sinal dentro das 48 h.
-- Cativo (pedido "30 dias apenas para os que a Stripe aceita"): com cartão,
-- o pagamento fica cativo até ao fim do prazo de cancelamento grátis,
-- enquanto a Stripe deixar (7 dias; até 30 com autorização estendida).
-- Depois cobra-se, e se cancelarem a tempo é reembolsado.
-- Só leitura de dados + funções; nenhum dinheiro se move aqui.

begin;

-- Pagamento ainda cativo no cartão (capturado por release-partner-funds).
alter table public.payments add column if not exists is_held boolean not null default false;
update public.payments set is_held = true
 where type = 'deposit' and status = 'paid' and released_at is null
   and provider_payment_id like 'pi_%' and paid_at > now() - interval '8 days';

-- Regra efetiva de um parceiro: (kind, hours). kind = 'standard' é a regra base.
create or replace function public.partner_cancellation_policy(p_partner_id uuid)
returns table (kind text, hours integer)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with pp as (
    select cancellation_rule, cancellation_hours from public.partner_profiles where id = p_partner_id
  ), cats as (
    select c.slug from public.partner_profile_categories ppc
    join public.partner_categories c on c.id = ppc.category_id
    where ppc.partner_id = p_partner_id
  )
  select
    coalesce(
      (select cancellation_rule from pp),
      case
        when exists (select 1 from cats where slug in ('restaurants','bars_nightlife','adventure_activities',
          'experiences_tours','games_escape','spa_wellness','kids_entertainment')) then 'hours'
        when exists (select 1 from cats where slug in ('transport','lodging')) then 'partner_terms'
        else 'standard'
      end),
    case
      when (select cancellation_rule from pp) = 'hours' then coalesce((select cancellation_hours from pp), 2)
      when (select cancellation_rule from pp) is null
        and exists (select 1 from cats where slug in ('restaurants','bars_nightlife','adventure_activities',
          'experiences_tours','games_escape','spa_wellness','kids_entertainment')) then 2
      else null
    end;
$$;

-- Início do evento: data da reserva + hora da cerimónia (Lisboa), ou 00:00.
create or replace function public.booking_event_start(p_booking_id uuid)
returns timestamptz
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select ((b.event_date::timestamp
          + case when w.ceremony_time ~ '^\s*([01]?[0-9]|2[0-3]):[0-5][0-9]'
                 then substring(w.ceremony_time from '([0-9]{1,2}:[0-9]{2})')::time
                 else time '00:00' end)
          at time zone 'Europe/Lisbon')
  from public.bookings b
  left join public.weddings w on w.id = b.wedding_id
  where b.id = p_booking_id;
$$;

-- Até quando o organizador cancela com tudo devolvido (null = nunca).
create or replace function public.booking_free_cancel_until(p_booking_id uuid)
returns timestamptz
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_partner uuid;
  v_kind text;
  v_hours integer;
  v_days integer;
  v_start timestamptz;
begin
  select partner_id into v_partner from public.bookings where id = p_booking_id;
  if v_partner is null then return null; end if;
  select p.kind, p.hours into v_kind, v_hours from public.partner_cancellation_policy(v_partner) p;
  v_start := public.booking_event_start(p_booking_id);
  if v_kind = 'hours' then
    return v_start - make_interval(hours => coalesce(v_hours, 2));
  elsif v_kind = 'standard' then
    select cancellation_penalty_days into v_days from public.platform_settings where id = 1;
    -- Regra base: só o restante (o sinal segue as 48 h).
    return (select (b.event_date - coalesce(v_days, 30))::timestamp at time zone 'Europe/Lisbon'
            from public.bookings b where b.id = p_booking_id);
  end if;
  return null;
end;
$$;

-- O que se devolve se o organizador cancelar agora. Usado pelo
-- cancelamento e pelo aviso na app (mesma decisão nos dois lados).
create or replace function public.booking_refund_decision(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_kind text;
  v_hours integer;
  v_penalty_days integer;
  v_window_hours integer;
  v_refundable boolean;
  v_deposit_paid_at timestamptz;
  v_final_paid boolean;
  v_until timestamptz;
  v_in_window boolean;
  v_free boolean;
  v_refund_deposit boolean;
  v_refund_final boolean;
begin
  select * into v_booking from public.bookings where id = p_booking_id;
  if v_booking is null then return null; end if;

  select p.kind, p.hours into v_kind, v_hours from public.partner_cancellation_policy(v_booking.partner_id) p;
  select cancellation_penalty_days, coalesce(deposit_refund_window_hours, 48)
    into v_penalty_days, v_window_hours
    from public.platform_settings where id = 1;
  select coalesce((select deposit_refundable from public.proposals where id = v_booking.proposal_id), true)
    into v_refundable;
  select max(coalesce(paid_at, updated_at)) into v_deposit_paid_at
    from public.payments where booking_id = p_booking_id and type = 'deposit' and status = 'paid';
  select exists (select 1 from public.payments where booking_id = p_booking_id and type <> 'deposit' and status = 'paid')
    into v_final_paid;

  v_until := public.booking_free_cancel_until(p_booking_id);
  v_free := v_until is not null and now() <= v_until;
  v_in_window := v_deposit_paid_at is not null and v_refundable
    and now() <= v_deposit_paid_at + make_interval(hours => v_window_hours);

  if v_kind = 'hours' then
    v_refund_deposit := v_deposit_paid_at is not null and (v_free or v_in_window);
    v_refund_final := v_final_paid and v_free;
  elsif v_kind = 'standard' then
    v_refund_deposit := v_in_window;
    v_refund_final := v_final_paid and v_free;
  else
    v_refund_deposit := v_in_window;
    v_refund_final := false;
  end if;

  return jsonb_build_object(
    'rule', v_kind,
    'rule_hours', v_hours,
    'free_until', v_until,
    'refund_required', coalesce(v_refund_deposit, false) or coalesce(v_refund_final, false),
    'refund_deposit', coalesce(v_refund_deposit, false),
    'refund_final', coalesce(v_refund_final, false),
    'deposit_paid', v_deposit_paid_at is not null,
    'final_paid', v_final_paid,
    'deposit_refundable', v_refundable,
    'deposit_paid_at', v_deposit_paid_at,
    'deposit_window_hours', v_window_hours,
    'days_until_event', v_booking.event_date - current_date,
    'penalty_days', v_penalty_days,
    'penalty_applied', (v_deposit_paid_at is not null and not coalesce(v_refund_deposit, false))
  );
end;
$$;

-- Aviso na app antes de cancelar: só o organizador ou o parceiro da reserva.
create or replace function public.booking_cancel_preview(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
begin
  if not exists (select 1 from public.bookings where id = p_booking_id
                 and (couple_id = auth.uid() or partner_id = auth.uid())) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return public.booking_refund_decision(p_booking_id);
end;
$$;

-- Até quando um pagamento fica cativo (release-partner-funds captura depois).
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
begin
  select p.*, b.partner_id as b_partner, b.proposal_id into v_pay
    from public.payments p join public.bookings b on b.id = p.booking_id where p.id = p_payment_id;
  if v_pay is null then return now(); end if;
  select kind into v_kind from public.partner_cancellation_policy(v_pay.b_partner);
  select coalesce(deposit_refund_window_hours, 48) into v_window from public.platform_settings where id = 1;
  select coalesce((select deposit_refundable from public.proposals where id = v_pay.proposal_id), true) into v_refundable;
  v_until := public.booking_free_cancel_until(v_pay.booking_id);
  v_deposit_end := coalesce(v_pay.paid_at, v_pay.updated_at, now()) + make_interval(hours => v_window);

  if v_pay.type = 'deposit' then
    if v_kind = 'hours' then
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

-- cancel_booking_by_couple: igual à 157, mas a decisão vem da regra do parceiro.
create or replace function public.cancel_booking_by_couple(p_booking_id uuid, p_reason text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_decision jsonb;
  v_refund_deposit boolean;
  v_deposit_paid boolean;
  v_window_hours integer;
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

  v_decision := public.booking_refund_decision(p_booking_id);
  v_refund_deposit := (v_decision->>'refund_deposit')::boolean;
  v_deposit_paid := (v_decision->>'deposit_paid')::boolean;
  v_window_hours := (v_decision->>'deposit_window_hours')::integer;

  update public.bookings set status = 'cancelled_by_couple', cancelled_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'cancelled_by_couple', v_booking.status, 'cancelled_by_couple', 'couple', auth.uid(),
          v_decision || jsonb_build_object('reason', p_reason));

  update public.payments
  set status = 'failed', updated_at = now()
  where booking_id = p_booking_id and status in ('pending', 'overdue');

  insert into public.notifications (wedding_id, partner_id, type, title, subtitle, body)
  values (
    v_booking.wedding_id, v_booking.partner_id, 'booking_cancelled',
    'Reserva cancelada', public.couple_label(v_booking.wedding_id),
    'O organizador cancelou a reserva.'
      || case
           when (v_decision->>'refund_final')::boolean then ' Cancelou dentro do prazo: o que pagou é devolvido.'
           when v_refund_deposit then ' O sinal é devolvido (cancelou nas primeiras ' || v_window_hours || ' h).'
           when v_deposit_paid then ' O sinal fica contigo.'
           else ''
         end
  );
end;
$$;

revoke execute on function public.partner_cancellation_policy(uuid) from public, anon, authenticated;
revoke execute on function public.booking_event_start(uuid) from public, anon, authenticated;
revoke execute on function public.booking_free_cancel_until(uuid) from public, anon, authenticated;
revoke execute on function public.booking_refund_decision(uuid) from public, anon, authenticated;
revoke execute on function public.payment_hold_until(uuid) from public, anon, authenticated;
grant execute on function public.partner_cancellation_policy(uuid) to service_role;
grant execute on function public.booking_free_cancel_until(uuid) to service_role;
grant execute on function public.booking_refund_decision(uuid) to service_role;
grant execute on function public.payment_hold_until(uuid) to service_role;
revoke execute on function public.booking_cancel_preview(uuid) from public, anon;
grant execute on function public.booking_cancel_preview(uuid) to authenticated;
revoke execute on function public.cancel_booking_by_couple(uuid, text) from public, anon;
grant execute on function public.cancel_booking_by_couple(uuid, text) to authenticated;

create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('174') on conflict do nothing;

commit;
