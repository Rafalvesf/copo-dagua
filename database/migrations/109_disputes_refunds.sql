-- ============================================================
-- Disputas e reembolsos manuais (admin)
-- ============================================================
-- Pedido do utilizador (2026-10-20): secção Disputas e Reembolsos no admin.
-- - O organizador ou o parceiro abrem uma disputa sobre uma reserva
--   (confirmada, concluída ou com pagamento em atraso). A reserva passa a
--   'disputed' até o admin decidir.
-- - O admin decide: reembolso total, reembolso parcial ou a favor do
--   parceiro. O dinheiro é devolvido pela Edge Function
--   `admin-refund-payment`; aqui fica só o registo da decisão.
-- - `payments.refunded_amount`: quanto já foi devolvido ao casal desse
--   pagamento, em euros do que o casal pagou (com comissão). Um pagamento
--   só passa a 'refunded' quando é devolvido por inteiro.

-- Parte 1 — valor já reembolsado em cada pagamento
alter table public.payments
  add column if not exists refunded_amount numeric(10,2) not null default 0;

-- Parte 2 — tabela das disputas
create table if not exists public.disputes (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  opened_by uuid not null references public.profiles(id),
  opened_by_role text not null check (opened_by_role in ('couple', 'partner')),
  reason text not null check (reason in (
    'service_not_provided', 'service_different', 'partner_no_show',
    'couple_no_show', 'payment_issue', 'other'
  )),
  description text not null check (length(trim(description)) >= 10),
  status text not null default 'open' check (status in ('open', 'resolved')),
  resolution text check (resolution in ('refund_full', 'refund_partial', 'partner_favor')),
  refund_amount numeric(10,2),
  admin_note text,
  previous_booking_status public.booking_status not null,
  resolved_by uuid references public.profiles(id),
  resolved_at timestamptz,
  created_at timestamptz not null default now()
);
create unique index if not exists disputes_one_open_per_booking on public.disputes (booking_id) where status = 'open';
create index if not exists disputes_status_idx on public.disputes (status, created_at desc);

alter table public.disputes enable row level security;
drop policy if exists "Participants and admins view disputes" on public.disputes;
create policy "Participants and admins view disputes" on public.disputes for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.bookings b
      where b.id = booking_id and (b.couple_id = auth.uid() or b.partner_id = auth.uid())
    )
  );
grant select on public.disputes to authenticated;

-- Parte 3 — abrir disputa (organizador ou parceiro)
create or replace function public.open_dispute(p_booking_id uuid, p_reason text, p_description text)
returns uuid language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_booking record;
  v_role text;
  v_id uuid;
begin
  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_booking.couple_id = auth.uid() then
    v_role := 'couple';
  elsif v_booking.partner_id = auth.uid() then
    v_role := 'partner';
  else
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status not in ('confirmed', 'completed', 'payment_overdue') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if length(trim(coalesce(p_description, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  insert into public.disputes (booking_id, opened_by, opened_by_role, reason, description, previous_booking_status)
  values (p_booking_id, auth.uid(), v_role, p_reason, trim(p_description), v_booking.status)
  returning id into v_id;

  update public.bookings set status = 'disputed' where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'dispute_opened', v_booking.status, 'disputed', v_role::public.booking_actor_type, auth.uid(),
          jsonb_build_object('dispute_id', v_id, 'reason', p_reason));

  if v_role = 'couple' then
    insert into public.notifications (wedding_id, partner_id, type, title, body)
    values (v_booking.wedding_id, v_booking.partner_id, 'dispute_opened', 'Disputa aberta',
            'O casal abriu uma disputa sobre a reserva ' || v_booking.booking_number || '. A equipa À Nossa! vai analisar.');
  else
    insert into public.notifications (wedding_id, type, title, body)
    values (v_booking.wedding_id, 'dispute_opened', 'Disputa aberta',
            'O parceiro abriu uma disputa sobre a reserva ' || v_booking.booking_number || '. A equipa À Nossa! vai analisar.');
  end if;

  return v_id;
end;
$$;
revoke execute on function public.open_dispute(uuid, text, text) from public, anon;
grant execute on function public.open_dispute(uuid, text, text) to authenticated;

-- Parte 4 — decisão do admin (o reembolso em si já foi feito pela Edge Function)
create or replace function public.admin_resolve_dispute(
  p_dispute_id uuid, p_resolution text, p_refund_amount numeric, p_note text
)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_dispute record;
  v_booking record;
  v_text text;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_resolution not in ('refund_full', 'refund_partial', 'partner_favor') then
    raise exception 'validation_error' using errcode = '22023';
  end if;
  if length(trim(coalesce(p_note, ''))) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select * into v_dispute from public.disputes where id = p_dispute_id for update;
  if v_dispute is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_dispute.status <> 'open' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  select * into v_booking from public.bookings where id = v_dispute.booking_id for update;

  update public.disputes
  set status = 'resolved', resolution = p_resolution, refund_amount = p_refund_amount,
      admin_note = trim(p_note), resolved_by = auth.uid(), resolved_at = now()
  where id = p_dispute_id;

  -- A reserva volta ao estado em que estava antes da disputa.
  update public.bookings set status = v_dispute.previous_booking_status
  where id = v_dispute.booking_id and status = 'disputed';

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (v_dispute.booking_id, 'dispute_resolved', 'disputed', v_dispute.previous_booking_status, 'admin', auth.uid(),
          jsonb_build_object('dispute_id', p_dispute_id, 'resolution', p_resolution, 'refund_amount', p_refund_amount));

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'dispute_' || p_resolution, 'disputes', p_dispute_id,
          jsonb_build_object('booking_id', v_dispute.booking_id, 'refund_amount', p_refund_amount));

  v_text := case p_resolution
    when 'refund_full' then 'Disputa resolvida: reembolso total ao casal.'
    when 'refund_partial' then 'Disputa resolvida: reembolso de ' || to_char(p_refund_amount, 'FM999990D00') || ' € ao casal.'
    else 'Disputa resolvida a favor do parceiro.'
  end;
  insert into public.notifications (wedding_id, type, title, body)
  values (v_booking.wedding_id, 'dispute_resolved', 'Disputa da reserva ' || v_booking.booking_number, v_text || ' ' || trim(p_note));
  insert into public.notifications (wedding_id, partner_id, type, title, body)
  values (v_booking.wedding_id, v_booking.partner_id, 'dispute_resolved', 'Disputa da reserva ' || v_booking.booking_number, v_text || ' ' || trim(p_note));
end;
$$;
revoke execute on function public.admin_resolve_dispute(uuid, text, numeric, text) from public, anon;
grant execute on function public.admin_resolve_dispute(uuid, text, numeric, text) to authenticated;
