-- ============================================================
-- 191 · Sem sinal em restaurantes, lojas e serviços mais baratos
-- ============================================================
--
-- Pedido do Rafael (2026-11-16): «em restaurantes, lojas (produtos) e
-- outros serviços com valores mais baixos, por exemplo floristas, não há
-- sinal, pagas tudo». Escolha por categoria:
--   * SEM sinal (paga-se tudo ao confirmar): restaurantes, bares, flores
--     e decoração, bolos, convites, aluguer, photobooth, experiências,
--     aventura, escape/jogos, animação infantil, spa e bem-estar,
--     transporte. (A Loja já cobra os produtos por inteiro.)
--   * COM sinal (como hoje): espaço, catering, fotografia, música/DJ,
--     bandas, alojamento — e qualquer categoria nova.
-- Um parceiro com várias categorias tem sinal se alguma delas o tiver.
--
-- «Sem sinal» = o único pagamento é o «deposit» com 100 % do valor: a
-- reserva confirma-se quando é pago e não há restante. O dinheiro vai
-- para o parceiro como o restante (3 dias depois do evento), não 48 h
-- depois de pago como um sinal), e devolve-se e fica cativo segundo as
-- regras de cancelamento do parceiro, como o restante.
-- ============================================================

begin;

create or replace function public.partner_takes_deposit(p_partner_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select not exists (
    select 1 from public.partner_profile_categories pc
    join public.partner_categories c on c.id = pc.category_id
    where pc.partner_id = p_partner_id
  ) or exists (
    select 1 from public.partner_profile_categories pc
    join public.partner_categories c on c.id = pc.category_id
    where pc.partner_id = p_partner_id
      and c.slug not in (
        'restaurants', 'bars_nightlife', 'flowers_decor', 'cake', 'invitations',
        'rentals', 'photobooth_entertainment', 'experiences_tours', 'adventure_activities',
        'games_escape', 'kids_entertainment', 'spa_wellness', 'transport'
      )
  );
$$;

-- Percentagem do primeiro pagamento: o sinal da plataforma, ou 100 %.
create or replace function public.partner_deposit_pct(p_partner_id uuid)
returns numeric
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case when public.partner_takes_deposit(p_partner_id)
              then (select deposit_percentage from public.platform_settings where id = 1)
              else 100 end;
$$;

grant execute on function public.partner_takes_deposit(uuid) to authenticated;
grant execute on function public.partner_deposit_pct(uuid) to authenticated;

-- ---------- proposta: sinal conforme a categoria ----------
create or replace function public.send_proposal(p_quote_request_id uuid, p_title text, p_description text, p_price numeric, p_payment_terms text, p_deposit_refundable boolean default true)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote record; v_deposit_pct numeric; v_deposit_amount numeric; v_proposal_id uuid;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if v_quote is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_quote.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_quote.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if p_price is null or p_price <= 0 then raise exception 'validation_error' using errcode = '22023'; end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  v_deposit_pct := public.partner_deposit_pct(v_quote.partner_id);
  v_deposit_amount := round(p_price * (v_deposit_pct / 100.0), 2);
  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id, p_title, p_description, p_price, v_deposit_amount, p_payment_terms, coalesce(p_deposit_refundable, true))
  returning id into v_proposal_id;
  update public.quote_requests set status = 'proposal_sent', updated_at = now() where id = p_quote_request_id;
  return v_proposal_id;
end;
$$;

-- ---------- aceitar pacote: sinal conforme a categoria ----------
create or replace function public.accept_package_request(p_quote_request_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_quote public.quote_requests%rowtype;
  v_deposit_pct numeric;
  v_deposit numeric;
  v_proposal_id uuid;
  v_booking_id uuid;
  v_hold_hours integer;
  v_hold_expires_at timestamptz;
  v_event_date date;
  v_desc text;
  v_each boolean;
begin
  select * into v_quote from public.quote_requests where id = p_quote_request_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_quote.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v_quote.status not in ('pending', 'viewed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if v_quote.package_snapshot is null or v_quote.total_amount is null or v_quote.total_amount <= 0 then
    raise exception 'needs_proposal' using errcode = 'P0001';
  end if;
  if public.couple_has_booking_with_partner(v_quote.couple_id, v_quote.partner_id) then
    raise exception 'already_booked_with_partner' using errcode = 'P0008';
  end if;
  if public.partner_blocked_by_secret(v_quote.wedding_id, v_quote.partner_id) then
    raise exception 'partner_unavailable' using errcode = 'P0010';
  end if;

  v_event_date := coalesce(v_quote.event_date, current_date);
  if exists (select 1 from public.bookings where partner_id = v_quote.partner_id and event_date = v_event_date and status in ('awaiting_deposit', 'confirmed')) then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end if;

  v_each := v_quote.payer_mode = 'each';
  select default_booking_hold_hours into v_hold_hours from public.platform_settings where id = 1;
  -- 191: sem sinal (100 %) em restaurantes, flores, bolos… — paga-se tudo.
  v_deposit_pct := public.partner_deposit_pct(v_quote.partner_id);
  -- Cada um paga o seu: sem sinal, cada convidado paga a sua parte.
  v_deposit := case when v_each then 0 else round(v_quote.total_amount * (v_deposit_pct / 100.0), 2) end;
  v_hold_expires_at := now() + (v_hold_hours || ' hours')::interval;

  select string_agg(x, ' · ') into v_desc
  from jsonb_array_elements_text(coalesce(v_quote.package_snapshot->'includes', '[]'::jsonb)) as x;

  insert into public.proposals (quote_request_id, partner_id, couple_id, title, description, price, deposit_amount, payment_terms, deposit_refundable, status)
  values (p_quote_request_id, v_quote.partner_id, v_quote.couple_id,
          v_quote.package_snapshot->>'name', coalesce(v_desc, v_quote.package_snapshot->>'description', ''),
          v_quote.total_amount, v_deposit, null, true, 'accepted')
  returning id into v_proposal_id;

  update public.quote_requests set status = 'accepted', updated_at = now() where id = p_quote_request_id;

  begin
    insert into public.bookings (couple_id, partner_id, wedding_id, proposal_id, event_date, total_amount, deposit_amount, hold_expires_at,
                                 status, confirmed_at, choice_mode, payer_mode, people, choice_deadline)
    values (v_quote.couple_id, v_quote.partner_id, v_quote.wedding_id, v_proposal_id, v_event_date, v_quote.total_amount, v_deposit, v_hold_expires_at,
            case when v_each then 'confirmed' else 'awaiting_deposit' end::public.booking_status,
            case when v_each then now() end,
            'same', v_quote.payer_mode, v_quote.people, v_event_date - 3)
    returning id into v_booking_id;
  exception when unique_violation then
    raise exception 'partner_already_booked' using errcode = 'P0007';
  end;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (v_booking_id, 'booking_created', null, (case when v_each then 'confirmed' else 'awaiting_deposit' end)::public.booking_status, 'partner', auth.uid());

  if not v_each then
    insert into public.payments (booking_id, payer_id, partner_id, type, amount, due_at, status)
    values (v_booking_id, v_quote.couple_id, v_quote.partner_id, 'deposit', v_deposit, v_hold_expires_at, 'pending');
  end if;

  return v_booking_id;
end;
$$;

grant execute on function public.accept_package_request(uuid) to authenticated;

-- ---------- pagamento por inteiro vai para o parceiro como o restante ----------
create or replace function public.payments_to_release()
returns table(payment_id uuid, booking_id uuid, provider_payment_id text, amount numeric, partner_id uuid, partner_account text, booking_number text)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.id, b.id, p.provider_payment_id, p.amount, b.partner_id, pp.stripe_account_id, b.booking_number
  from public.payments p
  join public.bookings b on b.id = p.booking_id
  join public.partner_profiles pp on pp.id = b.partner_id
  cross join lateral (
    select coalesce((select deposit_refund_window_hours from public.platform_settings where id = 1), 48) as window_hours
  ) s
  where p.status = 'paid' and p.released_at is null
    and p.provider_payment_id like 'pi_%'
    and not exists (select 1 from public.disputes d where d.booking_id = b.id and d.status = 'open')
    and pp.stripe_account_id is not null
    and (
      -- Sinal: 48 h depois de pago, reserva confirmada.
      (p.type = 'deposit'
        and b.deposit_amount < b.total_amount
        and b.status in ('confirmed', 'completed')
        and p.paid_at is not null
        and p.paid_at + make_interval(hours => s.window_hours) <= now())
      or
      -- Restante, pagamento por inteiro (191) e outros: 3 dias depois do evento.
      ((p.type <> 'deposit' or b.deposit_amount >= b.total_amount)
        and b.status in ('confirmed', 'completed')
        and b.event_date + 3 <= (now() at time zone 'Europe/Lisbon')::date)
    );
$$;

-- ---------- pagamento por inteiro: devolução e cativação como o restante ----------
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
  v_full boolean;
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
  -- 191: o «sinal» é o valor todo (sem sinal nesta categoria).
  v_full := coalesce(v_booking.deposit_amount, 0) >= coalesce(v_booking.total_amount, 0) and coalesce(v_booking.total_amount, 0) > 0;

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

  -- Pago por inteiro: devolve-se também como o restante (dentro do prazo
  -- de cancelamento grátis do parceiro).
  if v_full and v_kind in ('hours', 'standard') then
    v_refund_deposit := coalesce(v_refund_deposit, false) or (v_deposit_paid_at is not null and v_free);
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
    'penalty_applied', (v_deposit_paid_at is not null and not coalesce(v_refund_deposit, false)),
    'full_payment', v_full
  );
end;
$$;

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
begin
  select p.*, b.partner_id as b_partner, b.proposal_id, b.deposit_amount as b_deposit, b.total_amount as b_total into v_pay
    from public.payments p join public.bookings b on b.id = p.booking_id where p.id = p_payment_id;
  if v_pay is null then return now(); end if;
  select kind into v_kind from public.partner_cancellation_policy(v_pay.b_partner);
  select coalesce(deposit_refund_window_hours, 48) into v_window from public.platform_settings where id = 1;
  select coalesce((select deposit_refundable from public.proposals where id = v_pay.proposal_id), true) into v_refundable;
  v_until := public.booking_free_cancel_until(v_pay.booking_id);
  v_deposit_end := coalesce(v_pay.paid_at, v_pay.updated_at, now()) + make_interval(hours => v_window);
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

insert into public.applied_migrations (id) values ('191') on conflict do nothing;

commit;
