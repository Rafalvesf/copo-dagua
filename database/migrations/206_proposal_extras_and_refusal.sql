-- 206_proposal_extras_and_refusal.sql
-- Propostas (mockups «Reservar por categoria» · Só orçamento, 2026-11-20):
-- 1. Depois de aceitar uma proposta, antes de pagar o sinal, a app mostra
--    «Queres juntar alguma coisa?» com os extras do parceiro. Juntar extras
--    soma ao total e acerta o sinal por pagar, na mesma proporção que o
--    parceiro pôs na proposta.
-- 2. «Recusar» a proposta pergunta o motivo; fica guardado e o parceiro
--    recebe-o na conversa.

begin;

-- Extras que ainda se podem juntar a uma reserva à espera do 1.º pagamento.
create or replace function public.booking_extra_options(p_booking_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
declare
  b record;
  q record;
  v_people integer;
begin
  select * into b from public.bookings where id = p_booking_id;
  if b is null or b.couple_id <> auth.uid() then return '[]'::jsonb; end if;
  if b.status <> 'awaiting_deposit' then return '[]'::jsonb; end if;
  select qr.package_id, qr.extras_snapshot, qr.people into q
    from public.proposals pr join public.quote_requests qr on qr.id = pr.quote_request_id
    where pr.id = b.proposal_id;
  if q is null then return '[]'::jsonb; end if;
  v_people := greatest(coalesce(b.people, q.people, 1), 1);
  return coalesce((
    select jsonb_agg(jsonb_build_object(
             'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
             'price', e.price, 'price_unit', e.price_unit,
             'amount', case e.price_unit when 'person' then e.price * v_people else e.price end)
           order by e.position, e.name)
    from public.partner_service_extras e
    where e.partner_id = b.partner_id
      and (cardinality(e.package_ids) = 0 or (q.package_id is not null and q.package_id = any(e.package_ids)))
      and not exists (
        select 1 from jsonb_array_elements(coalesce(q.extras_snapshot, '[]'::jsonb)) x
        where x->>'id' = e.id::text
      )
  ), '[]'::jsonb);
end;
$$;
grant execute on function public.booking_extra_options(uuid) to authenticated;

-- Junta extras: total, sinal (ou valor todo) e o pagamento por fazer.
create or replace function public.add_booking_extras(p_booking_id uuid, p_extra_ids uuid[])
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  b record;
  q record;
  v_people integer;
  v_add numeric(12,2);
  v_added jsonb;
  v_total numeric(12,2);
  v_deposit numeric(12,2);
  v_full boolean;
begin
  select * into b from public.bookings where id = p_booking_id for update;
  if b is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if b.couple_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if b.status <> 'awaiting_deposit' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if coalesce(cardinality(p_extra_ids), 0) = 0 then
    return jsonb_build_object('total', b.total_amount, 'deposit', b.deposit_amount);
  end if;
  select qr.id, qr.package_id, qr.extras_snapshot, qr.people into q
    from public.proposals pr join public.quote_requests qr on qr.id = pr.quote_request_id
    where pr.id = b.proposal_id;
  if q is null then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  v_people := greatest(coalesce(b.people, q.people, 1), 1);

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'name', e.name, 'details', to_jsonb(e.details),
           'price', e.price, 'price_unit', e.price_unit) order by e.position, e.name), '[]'::jsonb),
         coalesce(sum(case e.price_unit when 'person' then e.price * v_people else e.price end), 0)
    into v_added, v_add
  from public.partner_service_extras e
  where e.partner_id = b.partner_id
    and e.id = any(p_extra_ids)
    and (cardinality(e.package_ids) = 0 or (q.package_id is not null and q.package_id = any(e.package_ids)))
    and not exists (
      select 1 from jsonb_array_elements(coalesce(q.extras_snapshot, '[]'::jsonb)) x
      where x->>'id' = e.id::text
    );
  if v_add <= 0 then
    return jsonb_build_object('total', b.total_amount, 'deposit', b.deposit_amount);
  end if;

  -- O sinal mantém a proporção da proposta (sem sinal = valor todo).
  v_full := b.deposit_amount >= b.total_amount or coalesce(b.total_amount, 0) <= 0;
  v_total := b.total_amount + v_add;
  v_deposit := case when v_full then v_total
                    else round(v_total * (b.deposit_amount / b.total_amount), 2) end;

  update public.bookings set total_amount = v_total, deposit_amount = v_deposit where id = b.id;
  update public.proposals set price = v_total, deposit_amount = v_deposit where id = b.proposal_id;
  update public.quote_requests
     set extras_snapshot = coalesce(extras_snapshot, '[]'::jsonb) || v_added, total_amount = v_total, updated_at = now()
   where id = q.id;
  update public.payments set amount = v_deposit, updated_at = now()
   where booking_id = b.id and type = 'deposit' and status = 'pending';

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (b.id, 'extras_added', b.status, b.status, 'couple', auth.uid(), jsonb_build_object('extras', v_added, 'amount', v_add));

  return jsonb_build_object('total', v_total, 'deposit', v_deposit);
end;
$$;
grant execute on function public.add_booking_extras(uuid, uuid[]) to authenticated;

-- ---------- Recusar a proposta, com o motivo ----------
alter table public.proposals add column if not exists rejection_reason text;
alter table public.proposals add column if not exists rejection_message text;

-- p_reason: 'price' | 'date' | 'other_partner' | 'other'.
create or replace function public.reject_proposal(p_proposal_id uuid, p_reason text, p_message text default null)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v record;
begin
  select * into v from public.proposals where id = p_proposal_id for update;
  if v is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.couple_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v.status <> 'sent' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if p_reason is null or p_reason not in ('price', 'date', 'other_partner', 'other') then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  update public.proposals
     set status = 'rejected', rejection_reason = p_reason,
         rejection_message = nullif(btrim(coalesce(p_message, '')), ''), updated_at = now()
   where id = p_proposal_id;
  -- O pedido fica fechado: pode voltar a pedir a este parceiro (201).
  if v.quote_request_id is not null then
    update public.quote_requests set status = 'declined', updated_at = now()
     where id = v.quote_request_id and status in ('pending', 'viewed', 'proposal_sent');
  end if;
end;
$$;
revoke execute on function public.reject_proposal(uuid, text, text) from public, anon;
grant execute on function public.reject_proposal(uuid, text, text) to authenticated;

insert into public.applied_migrations (id) values ('206') on conflict do nothing;

commit;
