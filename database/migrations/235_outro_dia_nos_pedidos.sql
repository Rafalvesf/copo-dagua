-- 235 · «Propor outro dia» também nos pedidos (antes de haver reserva)
-- (pedido do Rafael, 2026-11-24: «Outro dia = cartão a sério»; mockups
-- «Já tens uma marcação nesse dia/hora» e «Propor outro dia»).
--
-- - `booking_change_requests` passa a aceitar um pedido (`quote_request_id`)
--   em vez de uma reserva: um dos dois tem de estar preenchido.
-- - `propose_request_day(p_quote_request, p_date, p_message)`: o parceiro
--   propõe outro dia a um pedido; cartão na conversa (`messages.
--   change_request_id`) e notificação ao organizador.
-- - `respond_booking_change` (233) passa a tratar os pedidos: aceitar muda
--   o dia do pedido (`quote_requests.event_date`). O dia do evento não muda
--   sozinho.
-- - Quem pode ler: os dois lados do pedido ou da reserva.

begin;

alter table public.booking_change_requests alter column booking_id drop not null;
alter table public.booking_change_requests
  add column if not exists quote_request_id uuid references public.quote_requests(id) on delete cascade;
alter table public.booking_change_requests drop constraint if exists booking_change_requests_target_chk;
alter table public.booking_change_requests add constraint booking_change_requests_target_chk
  check ((booking_id is not null) <> (quote_request_id is not null));
create index if not exists booking_change_requests_request_idx
  on public.booking_change_requests (quote_request_id, status);

drop policy if exists "Both sides read" on public.booking_change_requests;
create policy "Both sides read" on public.booking_change_requests for select to authenticated
  using (
    exists (
      select 1 from public.bookings b
      where b.id = booking_id
        and (b.partner_id = (select auth.uid()) or b.couple_id = (select auth.uid())
             or public.wedding_can(b.wedding_id, 'evento'))
    )
    or exists (
      select 1 from public.quote_requests q
      where q.id = quote_request_id
        and (q.partner_id = (select auth.uid()) or q.couple_id = (select auth.uid())
             or public.wedding_can(q.wedding_id, 'evento'))
    )
  );

create or replace function public.propose_request_day(p_quote_request uuid, p_date date, p_message text default null)
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
  -- Uma proposta de dia aberta de cada vez: a anterior sai.
  update public.booking_change_requests
     set status = 'cancelled', responded_at = now(), updated_at = now()
   where quote_request_id = p_quote_request and kind = 'date' and status = 'open';
  insert into public.booking_change_requests
    (quote_request_id, requested_by, requested_by_role, kind, from_value, to_value, message)
  values (p_quote_request, auth.uid(), 'partner', 'date', q.event_date::text, p_date::text, nullif(trim(p_message), ''))
  returning id into v_id;
  perform public.post_notice(q.wedding_id, q.partner_id, 'partner',
    'Proposta de outro dia' || coalesce(': ' || nullif(trim(p_message), ''), ''), v_id);
  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (q.couple_id, q.wedding_id, 'booking_change', 'Proposta de outro dia', 'Responde na conversa.', '/chat');
  return v_id;
end;
$$;
revoke execute on function public.propose_request_day(uuid, date, text) from public, anon;
grant execute on function public.propose_request_day(uuid, date, text) to authenticated;

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
    end if;
  end if;
  perform public.post_notice(v_wedding, v_partner, v_role,
    case when p_accept then 'Aceitei a alteração.' else 'Recusei a alteração.' end);
end;
$$;

insert into public.applied_migrations (id) values ('235') on conflict do nothing;

commit;
