-- 239 · Cartões automáticos nas conversas
-- (pedido do Rafael, 2026-11-25: «Cartões marcados «Sugestão» na prancheta:
-- «Menus e alergias prontos», «Lembrete do dia», «Avaliar depois do evento» e
-- o cartão «Pagamento do resto»… sim trata disto»; prancheta «Todos os
-- cartões», linhas 07 e 10–13).
--
-- A app publica sozinha um cartão na conversa da reserva (uma só vez por
-- reserva e tipo):
--   reminder   — na véspera do evento (reserva confirmada);
--   review     — no dia a seguir ao evento («Como correu?»);
--   final_due  — quando o pagamento do resto abre (6 dias antes do prazo);
--   menus      — no dia a seguir ao prazo dos menus (ficam fechados);
--   cancelled  — quando a reserva é cancelada (por qualquer lado).
-- `messages.auto_kind` + `messages.booking_id` dizem à app que cartão
-- desenhar; o texto (`body`) fica para quem tem a app antiga.

begin;

alter table public.messages add column if not exists auto_kind text;
alter table public.messages add column if not exists booking_id uuid references public.bookings(id) on delete set null;
alter table public.messages drop constraint if exists messages_auto_kind_check;
alter table public.messages add constraint messages_auto_kind_check
  check (auto_kind is null or auto_kind in ('reminder', 'review', 'final_due', 'menus', 'cancelled'));
create unique index if not exists messages_auto_card_uidx
  on public.messages (booking_id, auto_kind) where auto_kind is not null;

create or replace function public.post_booking_card(p_booking uuid, p_kind text, p_body text)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  b public.bookings%rowtype;
  v_conv uuid;
begin
  select * into b from public.bookings where id = p_booking;
  if not found then return; end if;
  v_conv := public.conversation_for(b.wedding_id, b.partner_id);
  if v_conv is null then return; end if;
  insert into public.messages (conversation_id, sender_role, sender_id, body, is_quote_request_notice, auto_kind, booking_id)
  values (v_conv, 'partner', b.partner_id, p_body, false, p_kind, p_booking)
  on conflict (booking_id, auto_kind) where auto_kind is not null do nothing;
end;
$$;
revoke execute on function public.post_booking_card(uuid, text, text) from public, anon, authenticated;

create or replace function public.post_booking_cards()
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  r record;
begin
  for r in select id from public.bookings
            where status = 'confirmed' and event_date = current_date + 1 loop
    perform public.post_booking_card(r.id, 'reminder', 'Amanhã é o dia!');
  end loop;
  for r in select id from public.bookings
            where status in ('confirmed', 'completed') and event_date = current_date - 1 loop
    perform public.post_booking_card(r.id, 'review', 'Como correu? Deixa a tua avaliação.');
  end loop;
  for r in select distinct p.booking_id as id from public.payments p
             join public.bookings b on b.id = p.booking_id
            where p.type <> 'deposit' and p.status = 'pending' and p.due_at is not null
              and p.due_at::date - 6 <= current_date
              and b.status in ('awaiting_deposit', 'confirmed') loop
    perform public.post_booking_card(r.id, 'final_due', 'Falta pagar o resto da reserva.');
  end loop;
  for r in select id from public.bookings
            where status in ('awaiting_deposit', 'confirmed') and choice_deadline is not null
              and choice_deadline::date < current_date and event_date >= current_date loop
    perform public.post_booking_card(r.id, 'menus', 'Os menus e as alergias estão prontos.');
  end loop;
end;
$$;
revoke execute on function public.post_booking_cards() from public, anon, authenticated;

create or replace function public.post_cancelled_card()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if new.status in ('cancelled_by_couple', 'cancelled_by_partner') and old.status is distinct from new.status then
    perform public.post_booking_card(new.id, 'cancelled', 'Reserva cancelada.');
  end if;
  return new;
end;
$$;
drop trigger if exists post_cancelled_card on public.bookings;
create trigger post_cancelled_card after update of status on public.bookings
  for each row execute function public.post_cancelled_card();

select cron.unschedule('post-booking-cards') where exists (select 1 from cron.job where jobname = 'post-booking-cards');
select cron.schedule('post-booking-cards', '10 * * * *', 'select public.post_booking_cards();');

insert into public.applied_migrations (id) values ('239') on conflict do nothing;

commit;
