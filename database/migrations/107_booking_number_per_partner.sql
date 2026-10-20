-- ============================================================
-- Número da reserva por parceiro: WED-1, WED-2, …
-- ============================================================
-- Pedido do utilizador (2026-10-20): em vez de WED-1033 (contagem global
-- a começar em 1000), cada parceiro vê as suas reservas numeradas a partir
-- de 1. O mesmo número pode existir em parceiros diferentes, por isso a
-- unicidade passa a ser (partner_id, booking_number).

-- Parte 1 — tirar a unicidade global e a sequência
alter table public.bookings drop constraint if exists bookings_booking_number_key;
alter table public.bookings alter column booking_number drop default;

-- Parte 2 — renumerar as reservas existentes, por ordem de criação
with r as (
  select id, row_number() over (partition by partner_id order by created_at, id) as n
  from public.bookings
)
update public.bookings b set booking_number = 'WED-' || r.n from r where r.id = b.id;

create unique index if not exists bookings_partner_number_uniq on public.bookings (partner_id, booking_number);

-- Parte 3 — próximas reservas: número seguinte desse parceiro
create or replace function public.trg_booking_number_per_partner()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_next integer;
begin
  -- Duas reservas do mesmo parceiro ao mesmo tempo não apanham o mesmo número.
  perform pg_advisory_xact_lock(hashtext('booking_number:' || new.partner_id::text));
  select coalesce(max(nullif(regexp_replace(booking_number, '\D', '', 'g'), '')::integer), 0) + 1
    into v_next
    from public.bookings
    where partner_id = new.partner_id;
  new.booking_number := 'WED-' || v_next;
  return new;
end;
$$;

drop trigger if exists booking_number_per_partner on public.bookings;
create trigger booking_number_per_partner before insert on public.bookings
  for each row execute function public.trg_booking_number_per_partner();
