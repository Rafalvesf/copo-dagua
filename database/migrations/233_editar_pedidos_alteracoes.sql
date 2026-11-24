-- ============================================================
-- 233 — Editar pedidos e propostas, pedidos de alteração e outro dia
-- ============================================================
-- Pedido do utilizador (2026-11-24), página de design «Mensagens,
-- notificações, orçamento e convidados» (cartões nas conversas): tudo o
-- que se pede ou oferece tem de se poder editar ou cancelar.
--
-- Regras de dinheiro decididas pelo utilizador:
--   • Cancelar um pedido de reserva antes de o parceiro aceitar liberta o
--     sinal cativo POR INTEIRO (fica 'declined' com cancelled_at; a
--     `release-partner-funds` liberta-o na hora seguinte, como já faz).
--   • Pedido de alteração aceite que muda o preço: o parceiro envia uma
--     proposta nova e a diferença junta-se ao pagamento do resto (este
--     SQL não mexe em valores).
--   • Outro dia aceite depois de pago o sinal: a reserva passa para o dia
--     novo e o sinal mantém-se (só muda bookings.event_date; o dia do
--     evento não muda).
--
-- Só acrescenta: colunas novas, uma tabela nova e funções novas.
-- Corre depois da 232.

begin;

-- ---------- Colunas novas ----------
alter table public.quote_requests add column if not exists cancelled_at timestamptz;

create table if not exists public.booking_change_requests (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  requested_by uuid not null references public.profiles(id),
  requested_by_role text not null check (requested_by_role in ('couple', 'partner')),
  kind text not null check (kind in ('people', 'time', 'scope', 'date', 'other')),
  from_value text,
  to_value text not null,
  message text,
  status text not null default 'open' check (status in ('open', 'accepted', 'declined', 'cancelled')),
  responded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists booking_change_requests_booking_idx on public.booking_change_requests (booking_id, status);

alter table public.messages add column if not exists change_request_id uuid
  references public.booking_change_requests(id) on delete set null;

alter table public.booking_change_requests enable row level security;
drop policy if exists "Both sides read" on public.booking_change_requests;
create policy "Both sides read" on public.booking_change_requests for select to authenticated
  using (exists (
    select 1 from public.bookings b
    where b.id = booking_id
      and (b.partner_id = (select auth.uid()) or b.couple_id = (select auth.uid())
           or public.wedding_can(b.wedding_id, 'evento'))
  ));
-- Escreve-se só pelas funções abaixo.
revoke insert, update, delete on public.booking_change_requests from anon, authenticated;
grant select on public.booking_change_requests to authenticated;

-- ---------- Ajudas ----------
-- Conversa entre o evento e o parceiro (para os cartões e avisos).
create or replace function public.conversation_for(p_wedding uuid, p_partner uuid)
returns uuid language sql stable security definer set search_path = public, pg_temp as $$
  select id from public.conversations
  where wedding_id = p_wedding and partner_id = p_partner
  order by created_at limit 1;
$$;
revoke execute on function public.conversation_for(uuid, uuid) from public, anon, authenticated;

-- Aviso na conversa (aparece como cartão/aviso, nunca como mensagem solta).
create or replace function public.post_notice(p_wedding uuid, p_partner uuid, p_role text, p_body text,
                                              p_change uuid default null)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_conv uuid := public.conversation_for(p_wedding, p_partner);
begin
  if v_conv is null then return; end if;
  insert into public.messages (conversation_id, sender_role, sender_id, body, is_quote_request_notice, change_request_id)
  values (v_conv, p_role, auth.uid(), p_body, p_change is null, p_change);
end;
$$;
revoke execute on function public.post_notice(uuid, uuid, text, text, uuid) from public, anon, authenticated;

-- ---------- Pedido de orçamento: editar e cancelar ----------
create or replace function public.update_quote_request(p_id uuid, p_people int default null, p_message text default null)
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
  v_had_proposal := v.status = 'proposal_sent';
  update public.quote_requests
     set people = coalesce(p_people, people),
         message = coalesce(nullif(trim(p_message), ''), message),
         status = case when v_had_proposal then 'pending'::quote_request_status else status end,
         updated_at = now()
   where id = p_id;
  -- A proposta antiga deixa de valer: o parceiro envia uma nova.
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

create or replace function public.cancel_quote_request(p_id uuid)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v public.quote_requests%rowtype;
begin
  select * into v from public.quote_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.couple_id <> auth.uid() and not public.wedding_can(v.wedding_id, 'evento') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v.cancelled_at is not null or v.status not in ('pending', 'viewed', 'proposal_sent') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  -- 'declined' faz a release-partner-funds libertar o sinal cativo todo.
  update public.quote_requests set status = 'declined', cancelled_at = now(), updated_at = now() where id = p_id;
  update public.proposals set status = 'expired', rejection_reason = 'pedido_cancelado', updated_at = now()
   where quote_request_id = p_id and status = 'sent';
  perform public.post_notice(v.wedding_id, v.partner_id, 'couple', 'Cancelei o pedido.');
  insert into public.notifications (partner_id, type, title, body, link)
  values (v.partner_id, 'quote_request_cancelled', 'Pedido cancelado',
          'O organizador cancelou o pedido. Se havia sinal cativo, foi libertado.', '/partner-requests');
end;
$$;

-- ---------- Proposta: editar e retirar ----------
create or replace function public.update_proposal(p_id uuid, p_title text, p_description text, p_price numeric,
                                                  p_deposit numeric, p_expires_at timestamptz default null)
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
  update public.proposals
     set title = coalesce(nullif(trim(p_title), ''), title),
         description = p_description,
         price = p_price,
         deposit_amount = p_deposit,
         expires_at = coalesce(p_expires_at, expires_at),
         updated_at = now()
   where id = p_id;
  -- O cartão na conversa mostra a versão nova.
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

create or replace function public.withdraw_proposal(p_id uuid)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v public.proposals%rowtype;
  v_wedding uuid;
begin
  select * into v from public.proposals where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.partner_id <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if v.status <> 'sent' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  update public.proposals set status = 'expired', rejection_reason = 'retirada', updated_at = now() where id = p_id;
  update public.quote_requests set status = 'viewed', updated_at = now()
   where id = v.quote_request_id and status = 'proposal_sent';
  select wedding_id into v_wedding from public.quote_requests where id = v.quote_request_id;
  perform public.post_notice(v_wedding, v.partner_id, 'partner', 'Retirei a proposta.');
  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (v.couple_id, v_wedding, 'proposal_withdrawn', 'Proposta retirada', v.title, '/bookings');
end;
$$;

-- ---------- Pedido de alteração e outro dia ----------
create or replace function public.request_booking_change(p_booking uuid, p_kind text, p_to text, p_message text default null)
returns uuid language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  b public.bookings%rowtype;
  v_role text;
  v_from text;
  v_id uuid;
  v_label text;
begin
  select * into b from public.bookings where id = p_booking;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if b.partner_id = auth.uid() then v_role := 'partner';
  elsif b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'evento') then v_role := 'couple';
  else raise exception 'forbidden' using errcode = '42501';
  end if;
  if b.status not in ('awaiting_deposit', 'confirmed') then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if p_kind not in ('people', 'time', 'scope', 'date', 'other') or coalesce(trim(p_to), '') = '' then
    raise exception 'invalid_change' using errcode = '22023';
  end if;
  if p_kind = 'people' and (p_to !~ '^[0-9]+$' or p_to::int < 1) then raise exception 'invalid_people' using errcode = '22023'; end if;
  if p_kind = 'date' and p_to !~ '^\d{4}-\d{2}-\d{2}$' then raise exception 'invalid_date' using errcode = '22023'; end if;
  v_from := case p_kind when 'people' then b.people::text when 'date' then b.event_date::text else null end;
  insert into public.booking_change_requests (booking_id, requested_by, requested_by_role, kind, from_value, to_value, message)
  values (p_booking, auth.uid(), v_role, p_kind, v_from, trim(p_to), nullif(trim(p_message), ''))
  returning id into v_id;
  v_label := case p_kind when 'date' then 'Proposta de outro dia' else 'Pedido de alteração' end;
  perform public.post_notice(b.wedding_id, b.partner_id, v_role, v_label || coalesce(': ' || nullif(trim(p_message), ''), ''), v_id);
  if v_role = 'couple' then
    insert into public.notifications (partner_id, wedding_id, type, title, body, link)
    values (b.partner_id, b.wedding_id, 'booking_change', v_label, 'Responde na conversa.', '/partner-messages');
  else
    insert into public.notifications (profile_id, wedding_id, type, title, body, link)
    values (b.couple_id, b.wedding_id, 'booking_change', v_label, 'Responde na conversa.', '/chat');
  end if;
  return v_id;
end;
$$;

create or replace function public.update_booking_change(p_id uuid, p_to text, p_message text default null)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  c public.booking_change_requests%rowtype;
begin
  select * into c from public.booking_change_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if c.requested_by <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if c.status <> 'open' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if coalesce(trim(p_to), '') = '' then raise exception 'invalid_change' using errcode = '22023'; end if;
  update public.booking_change_requests
     set to_value = trim(p_to), message = coalesce(nullif(trim(p_message), ''), message), updated_at = now()
   where id = p_id;
end;
$$;

create or replace function public.cancel_booking_change(p_id uuid)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  c public.booking_change_requests%rowtype;
begin
  select * into c from public.booking_change_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if c.requested_by <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if c.status <> 'open' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  update public.booking_change_requests set status = 'cancelled', responded_at = now(), updated_at = now() where id = p_id;
end;
$$;

create or replace function public.respond_booking_change(p_id uuid, p_accept boolean)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  c public.booking_change_requests%rowtype;
  b public.bookings%rowtype;
  v_role text;
begin
  select * into c from public.booking_change_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  select * into b from public.bookings where id = c.booking_id for update;
  if b.partner_id = auth.uid() then v_role := 'partner';
  elsif b.couple_id = auth.uid() or public.wedding_can(b.wedding_id, 'evento') then v_role := 'couple';
  else raise exception 'forbidden' using errcode = '42501';
  end if;
  -- Responde quem não pediu.
  if v_role = c.requested_by_role then raise exception 'forbidden' using errcode = '42501'; end if;
  if c.status <> 'open' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  update public.booking_change_requests
     set status = case when p_accept then 'accepted' else 'declined' end, responded_at = now(), updated_at = now()
   where id = p_id;
  if p_accept then
    -- Pessoas e dia mudam já; o preço, se mudar, vem numa proposta nova e
    -- a diferença junta-se ao resto. O sinal pago mantém-se.
    if c.kind = 'people' then update public.bookings set people = c.to_value::int, updated_at = now() where id = b.id; end if;
    if c.kind = 'date' then update public.bookings set event_date = c.to_value::date, updated_at = now() where id = b.id; end if;
  end if;
  perform public.post_notice(b.wedding_id, b.partner_id, v_role,
    case when p_accept then 'Aceitei a alteração.' else 'Recusei a alteração.' end);
end;
$$;

revoke execute on function public.update_quote_request(uuid, int, text) from public, anon;
revoke execute on function public.cancel_quote_request(uuid) from public, anon;
revoke execute on function public.update_proposal(uuid, text, text, numeric, numeric, timestamptz) from public, anon;
revoke execute on function public.withdraw_proposal(uuid) from public, anon;
revoke execute on function public.request_booking_change(uuid, text, text, text) from public, anon;
revoke execute on function public.update_booking_change(uuid, text, text) from public, anon;
revoke execute on function public.cancel_booking_change(uuid) from public, anon;
revoke execute on function public.respond_booking_change(uuid, boolean) from public, anon;
grant execute on function public.update_quote_request(uuid, int, text) to authenticated;
grant execute on function public.cancel_quote_request(uuid) to authenticated;
grant execute on function public.update_proposal(uuid, text, text, numeric, numeric, timestamptz) to authenticated;
grant execute on function public.withdraw_proposal(uuid) to authenticated;
grant execute on function public.request_booking_change(uuid, text, text, text) to authenticated;
grant execute on function public.update_booking_change(uuid, text, text) to authenticated;
grant execute on function public.cancel_booking_change(uuid) to authenticated;
grant execute on function public.respond_booking_change(uuid, boolean) to authenticated;

insert into public.applied_migrations (id) values ('233') on conflict do nothing;

commit;
