-- ============================================================
-- 152 — Reembolso de bilhetes e cancelamento de eventos pagos
-- ============================================================
-- Pedido do utilizador (2026-11-03, "por fazer" 1):
--   • O organizador pode reembolsar um bilhete ou cancelar o evento,
--     reembolsando todos os bilhetes pagos.
--   • Quem comprou recebe SEMPRE o valor total que pagou.
--   • O organizador paga as taxas (comissão de 4% e taxa da Stripe) dos
--     bilhetes reembolsados — a À Nossa! não perde dinheiro (a comissão
--     não é devolvida; ver `refund-event-tickets`).
-- O reembolso na Stripe é feito pela Edge Function `refund-event-tickets`;
-- estas funções só registam o resultado (service_role).
-- Corre DEPOIS da 149.

begin;

alter table public.event_tickets
  add column if not exists refunded_at timestamptz,
  add column if not exists refund_id text,
  add column if not exists refund_reason text;

alter table public.weddings
  add column if not exists cancelled_at timestamptz,
  add column if not exists cancel_reason text;

-- Regista o reembolso de um bilhete. p_event_cancelled = true quando é o
-- evento inteiro a ser cancelado (texto da notificação e não tira da lista).
create or replace function public.mark_event_ticket_refunded(
  p_ticket uuid, p_refund_id text, p_reason text default null, p_event_cancelled boolean default false
)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_t record;
  v_name text;
begin
  select * into v_t from public.event_tickets where id = p_ticket for update;
  if v_t is null or v_t.status = 'refunded' then
    return;
  end if;
  update public.event_tickets
  set status = 'refunded', refunded_at = now(), refund_id = p_refund_id, refund_reason = nullif(trim(p_reason), '')
  where id = p_ticket;

  select coalesce(nullif(concat_ws(' & ', nullif(trim(w.partner_name_1), ''), nullif(trim(w.partner_name_2), '')), ''), 'o evento') into v_name
  from public.weddings w where w.id = v_t.wedding_id;

  -- Bilhete reembolsado sem o evento ser cancelado: sai do evento, se não
  -- tiver outro bilhete pago.
  if not p_event_cancelled and not exists (
    select 1 from public.event_tickets t
    where t.wedding_id = v_t.wedding_id and t.buyer_id = v_t.buyer_id and t.status = 'paid'
  ) then
    delete from public.wedding_guest_members where wedding_id = v_t.wedding_id and guest_id = v_t.buyer_id;
    update public.guests set rsvp_status = 'declined', updated_at = now()
    where wedding_id = v_t.wedding_id and linked_profile_id = v_t.buyer_id;
  end if;

  insert into public.notifications (profile_id, type, title, body, link)
  values (v_t.buyer_id, 'ticket_refunded',
          case when p_event_cancelled then 'Evento cancelado' else 'Bilhete reembolsado' end,
          case when p_event_cancelled
               then v_name || ' foi cancelado. Devolvemos ' || replace(to_char(v_t.amount, 'FM999990.00'), '.', ',') || ' € ao teu cartão (pode demorar 5 a 10 dias).'
               else 'O teu bilhete para ' || v_name || ' foi reembolsado: ' || replace(to_char(v_t.amount, 'FM999990.00'), '.', ',') || ' € voltam ao teu cartão (pode demorar 5 a 10 dias).'
          end ||
          coalesce(' Motivo: ' || nullif(trim(p_reason), ''), ''),
          '/eventos');
end;
$$;
revoke execute on function public.mark_event_ticket_refunded(uuid, text, text, boolean) from public, anon, authenticated;
grant execute on function public.mark_event_ticket_refunded(uuid, text, text, boolean) to service_role;

-- Evento cancelado: sai do Descobrir e deixa de vender bilhetes.
create or replace function public.mark_event_cancelled(p_wedding uuid, p_reason text default null)
returns void
language sql security definer set search_path = public, pg_temp as $$
  update public.weddings
  set is_public = false, cancelled_at = coalesce(cancelled_at, now()), cancel_reason = nullif(trim(p_reason), '')
  where id = p_wedding;
$$;
revoke execute on function public.mark_event_cancelled(uuid, text) from public, anon, authenticated;
grant execute on function public.mark_event_cancelled(uuid, text) to service_role;

-- Um evento cancelado não volta ao Descobrir (nem a vender bilhetes).
create or replace function public.keep_cancelled_event_private()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  if new.cancelled_at is not null and new.is_public then
    new.is_public := false;
  end if;
  return new;
end;
$$;
drop trigger if exists keep_cancelled_event_private on public.weddings;
create trigger keep_cancelled_event_private before update on public.weddings
  for each row execute function public.keep_cancelled_event_private();

-- Lista de bilhetes para o organizador (nome de quem comprou incluído).
create or replace function public.event_ticket_list(p_wedding uuid)
returns table (id uuid, buyer_name text, quantity int, amount numeric, status text, paid_at timestamptz, refunded_at timestamptz)
language sql stable security definer set search_path = public, pg_temp as $$
  select t.id, coalesce(p.full_name, 'Convidado'), t.quantity, t.amount, t.status, t.paid_at, t.refunded_at
  from public.event_tickets t
  left join public.profiles p on p.id = t.buyer_id
  where t.wedding_id = p_wedding and t.status in ('paid', 'refunded') and public.is_wedding_member(p_wedding)
  order by coalesce(t.paid_at, t.created_at) desc;
$$;
revoke execute on function public.event_ticket_list(uuid) from public, anon;
grant execute on function public.event_ticket_list(uuid) to authenticated;

-- Resumo: os bilhetes reembolsados saem das vendas, mas as taxas que o
-- organizador pagou por eles continuam a contar.
drop function if exists public.event_ticket_summary(uuid);
create or replace function public.event_ticket_summary(p_wedding uuid)
returns table (sold int, gross numeric, platform_fee numeric, stripe_fee numeric, net numeric,
               refunded int, refunded_amount numeric, refunded_fees numeric)
language sql stable security definer set search_path = public, pg_temp as $$
  select coalesce(sum(quantity) filter (where status = 'paid'), 0)::int,
         coalesce(sum(amount) filter (where status = 'paid'), 0),
         coalesce(sum(platform_fee) filter (where status in ('paid', 'refunded')), 0),
         coalesce(sum(coalesce(stripe_fee, 0)) filter (where status in ('paid', 'refunded')), 0),
         coalesce(sum(amount - platform_fee - coalesce(stripe_fee, 0)) filter (where status = 'paid'), 0)
           - coalesce(sum(platform_fee + coalesce(stripe_fee, 0)) filter (where status = 'refunded'), 0),
         coalesce(sum(quantity) filter (where status = 'refunded'), 0)::int,
         coalesce(sum(amount) filter (where status = 'refunded'), 0),
         coalesce(sum(platform_fee + coalesce(stripe_fee, 0)) filter (where status = 'refunded'), 0)
  from public.event_tickets
  where wedding_id = p_wedding and public.is_wedding_member(p_wedding);
$$;
revoke execute on function public.event_ticket_summary(uuid) from public, anon;
grant execute on function public.event_ticket_summary(uuid) to authenticated;

commit;
