-- 236 · Hora do pedido, preço do outro dia e linhas da proposta
-- (pedido do Rafael, 2026-11-25: «Sim quero aplica essas 3»; pranchetas
-- «Editar pedido», «Propor outro dia» e «Enviar ou editar proposta»).
--
-- - `quote_requests.start_time` / `end_time` ('14:00'): a «HORA» do pedido,
--   que o organizador muda em «Editar pedido» (`update_quote_request` ganha
--   `p_start` e `p_end`).
-- - `booking_change_requests.new_price`: o «PREÇO» de «Propor outro dia»
--   («Mesmo preço» = nulo; «Outro preço» = o novo total). Aceite num pedido
--   que já tem proposta, a proposta passa a esse total.
-- - `proposals.lines` (jsonb `[{"name","meta","value"}]`): o «O QUE INCLUI»
--   da proposta (`update_proposal` ganha `p_lines`).

begin;

alter table public.quote_requests add column if not exists start_time text;
alter table public.quote_requests add column if not exists end_time text;
alter table public.booking_change_requests add column if not exists new_price numeric(12, 2);
alter table public.proposals add column if not exists lines jsonb;

-- ── update_quote_request: + hora ──
drop function if exists public.update_quote_request(uuid, int, text);
create or replace function public.update_quote_request(p_id uuid, p_people int default null, p_message text default null,
                                                       p_start text default null, p_end text default null)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v public.quote_requests%rowtype;
  v_had_proposal boolean;
begin
  select * into v from public.quote_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.couple_id <> auth.uid() and not public.wedding_can(v.wedding_id, 'evento') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v.cancelled_at is not null or v.status not in ('pending', 'viewed', 'proposal_sent') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_people is not null and p_people < 1 then raise exception 'invalid_people' using errcode = '22023'; end if;
  if (nullif(trim(p_start), '') is not null and trim(p_start) !~ '^\d{1,2}:\d{2}$')
     or (nullif(trim(p_end), '') is not null and trim(p_end) !~ '^\d{1,2}:\d{2}$') then
    raise exception 'invalid_time' using errcode = '22023';
  end if;
  v_had_proposal := v.status = 'proposal_sent';
  update public.quote_requests
     set people = coalesce(p_people, people),
         message = coalesce(nullif(trim(p_message), ''), message),
         start_time = coalesce(nullif(trim(p_start), ''), start_time),
         end_time = coalesce(nullif(trim(p_end), ''), end_time),
         status = case when v_had_proposal then 'pending'::quote_request_status else status end,
         updated_at = now()
   where id = p_id;
  if v_had_proposal then
    update public.proposals set status = 'expired', rejection_reason = 'pedido_alterado', updated_at = now()
     where quote_request_id = p_id and status = 'sent';
  end if;
  perform public.post_notice(v.wedding_id, v.partner_id, 'couple',
    'Atualizei o pedido de orçamento' ||
    coalesce(': ' || coalesce(p_people, v.people)::text || ' pessoas', '') ||
    case when v_had_proposal then '. A proposta anterior deixou de valer.' else '.' end);
  insert into public.notifications (partner_id, type, title, body, link)
  values (v.partner_id, 'quote_request_updated', 'Pedido de orçamento atualizado',
          case when v_had_proposal then 'A proposta que enviaste deixou de valer: envia uma nova.' else 'Vê o que mudou no pedido.' end,
          '/partner-requests');
end;
$$;
revoke execute on function public.update_quote_request(uuid, int, text, text, text) from public, anon;
grant execute on function public.update_quote_request(uuid, int, text, text, text) to authenticated;

-- ── update_proposal: + linhas ──
drop function if exists public.update_proposal(uuid, text, text, numeric, numeric, timestamptz);
create or replace function public.update_proposal(p_id uuid, p_title text, p_description text, p_price numeric,
                                                  p_deposit numeric, p_expires_at timestamptz default null,
                                                  p_lines jsonb default null)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v public.proposals%rowtype;
  v_wedding uuid;
begin
  select * into v from public.proposals where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v.status <> 'sent' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if p_price is null or p_price <= 0 or p_deposit is null or p_deposit < 0 or p_deposit > p_price then
    raise exception 'invalid_amount' using errcode = '22023';
  end if;
  if p_lines is not null and jsonb_typeof(p_lines) <> 'array' then
    raise exception 'invalid_lines' using errcode = '22023';
  end if;
  update public.proposals
     set title = coalesce(nullif(trim(p_title), ''), title),
         description = p_description,
         price = p_price,
         deposit_amount = p_deposit,
         expires_at = coalesce(p_expires_at, expires_at),
         lines = coalesce(p_lines, lines),
         updated_at = now()
   where id = p_id;
  update public.messages
     set proposal_title = coalesce(nullif(trim(p_title), ''), proposal_title),
         proposal_price = p_price,
         proposal_deposit_amount = p_deposit
   where proposal_id = p_id;
  select wedding_id into v_wedding from public.quote_requests where id = v.quote_request_id;
  perform public.post_notice(v_wedding, v.partner_id, 'partner', 'Atualizei a proposta.');
  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (v.couple_id, v_wedding, 'proposal_updated', 'Proposta atualizada',
          coalesce(nullif(trim(p_title), ''), v.title), '/bookings');
end;
$$;
revoke execute on function public.update_proposal(uuid, text, text, numeric, numeric, timestamptz, jsonb) from public, anon;
grant execute on function public.update_proposal(uuid, text, text, numeric, numeric, timestamptz, jsonb) to authenticated;

-- ── propose_request_day: + preço ──
drop function if exists public.propose_request_day(uuid, date, text);
create or replace function public.propose_request_day(p_quote_request uuid, p_date date, p_message text default null,
                                                      p_price numeric default null)
returns uuid language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  q public.quote_requests%rowtype;
  v_id uuid;
begin
  select * into q from public.quote_requests where id = p_quote_request;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if q.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if q.cancelled_at is not null or q.status not in ('pending', 'viewed', 'proposal_sent') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_date is null or p_date < current_date then raise exception 'invalid_date' using errcode = '22023'; end if;
  if p_price is not null and p_price <= 0 then raise exception 'invalid_amount' using errcode = '22023'; end if;
  update public.booking_change_requests
     set status = 'cancelled', responded_at = now(), updated_at = now()
   where quote_request_id = p_quote_request and kind = 'date' and status = 'open';
  insert into public.booking_change_requests
    (quote_request_id, requested_by, requested_by_role, kind, from_value, to_value, message, new_price)
  values (p_quote_request, auth.uid(), 'partner', 'date', q.event_date::text, p_date::text, nullif(trim(p_message), ''), p_price)
  returning id into v_id;
  perform public.post_notice(q.wedding_id, q.partner_id, 'partner',
    'Proposta de outro dia' || coalesce(': ' || nullif(trim(p_message), ''), ''), v_id);
  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (q.couple_id, q.wedding_id, 'booking_change', 'Proposta de outro dia', 'Responde na conversa.', '/chat');
  return v_id;
end;
$$;
revoke execute on function public.propose_request_day(uuid, date, text, numeric) from public, anon;
grant execute on function public.propose_request_day(uuid, date, text, numeric) to authenticated;

-- ── respond_booking_change: o novo preço passa para a proposta do pedido ──
create or replace function public.respond_booking_change(p_id uuid, p_accept boolean)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  c public.booking_change_requests%rowtype;
  v_partner uuid;
  v_couple uuid;
  v_wedding uuid;
  v_role text;
begin
  select * into c from public.booking_change_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if c.booking_id is not null then
    select partner_id, couple_id, wedding_id into v_partner, v_couple, v_wedding
      from public.bookings where id = c.booking_id for update;
  else
    select partner_id, couple_id, wedding_id into v_partner, v_couple, v_wedding
      from public.quote_requests where id = c.quote_request_id for update;
  end if;
  if v_partner = auth.uid() then v_role := 'partner';
  elsif v_couple = auth.uid() or public.wedding_can(v_wedding, 'evento') then v_role := 'couple';
  else raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_role = c.requested_by_role then raise exception 'forbidden' using errcode = '42501'; end if;
  if c.status <> 'open' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  update public.booking_change_requests
     set status = case when p_accept then 'accepted' else 'declined' end, responded_at = now(), updated_at = now()
   where id = p_id;
  if p_accept then
    if c.booking_id is not null then
      if c.kind = 'people' then update public.bookings set people = c.to_value::int, updated_at = now() where id = c.booking_id; end if;
      if c.kind = 'date' then update public.bookings set event_date = c.to_value::date, updated_at = now() where id = c.booking_id; end if;
    elsif c.kind = 'date' then
      update public.quote_requests set event_date = c.to_value::date, updated_at = now() where id = c.quote_request_id;
      if c.new_price is not null then
        update public.proposals
           set price = c.new_price,
               deposit_amount = least(deposit_amount, c.new_price),
               updated_at = now()
         where quote_request_id = c.quote_request_id and status = 'sent';
        update public.messages m
           set proposal_price = c.new_price
          from public.proposals p
         where m.proposal_id = p.id and p.quote_request_id = c.quote_request_id and p.status = 'sent';
      end if;
    end if;
  end if;
  perform public.post_notice(v_wedding, v_partner, v_role,
    case when p_accept then 'Aceitei a alteração.' else 'Recusei a alteração.' end);
end;
$$;

insert into public.applied_migrations (id) values ('236') on conflict do nothing;

commit;
