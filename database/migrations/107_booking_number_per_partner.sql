-- ============================================================
-- Número da reserva por parceiro e por tipo de evento: WED-1, BAP-1, …
-- ============================================================
-- Pedido do utilizador (2026-10-20): em vez de WED-1033 (contagem global
-- a começar em 1000), cada parceiro vê as suas reservas numeradas a partir
-- de 1, com o prefixo do tipo de evento (casamento WED, batizado BAP, …).
-- O mesmo número pode existir em parceiros diferentes, por isso a
-- unicidade passa a ser (partner_id, booking_number). O nome do parceiro
-- aparece ao lado do número na app e no admin.

-- Parte 1 — prefixo por tipo de evento
create or replace function public.event_type_prefix(p_event_type text)
returns text language sql immutable as $$
  select case p_event_type
    when 'wedding' then 'WED'
    when 'baptism' then 'BAP'
    when 'birthday' then 'BDY'
    when 'communion' then 'COM'
    when 'engagement' then 'ENG'
    when 'vow_renewal' then 'VOW'
    when 'graduation' then 'GRD'
    when 'corporate' then 'CRP'
    when 'baby_shower' then 'BBS'
    else 'EVT'
  end;
$$;

-- Parte 2 — tirar a unicidade global e a sequência
alter table public.bookings drop constraint if exists bookings_booking_number_key;
alter table public.bookings alter column booking_number drop default;

-- Parte 3 — renumerar as reservas existentes, por ordem de criação
with r as (
  select b.id,
         public.event_type_prefix(w.event_type) as prefix,
         row_number() over (
           partition by b.partner_id, public.event_type_prefix(w.event_type)
           order by b.created_at, b.id
         ) as n
  from public.bookings b
  left join public.weddings w on w.id = b.wedding_id
)
update public.bookings b set booking_number = r.prefix || '-' || r.n from r where r.id = b.id;

create unique index if not exists bookings_partner_number_uniq on public.bookings (partner_id, booking_number);

-- Parte 4 — próximas reservas: número seguinte desse parceiro, nesse tipo de evento
create or replace function public.trg_booking_number_per_partner()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_prefix text;
  v_next integer;
begin
  select public.event_type_prefix(event_type) into v_prefix from public.weddings where id = new.wedding_id;
  v_prefix := coalesce(v_prefix, 'EVT');
  -- Duas reservas do mesmo parceiro ao mesmo tempo não apanham o mesmo número.
  perform pg_advisory_xact_lock(hashtext('booking_number:' || new.partner_id::text));
  select coalesce(max(nullif(split_part(booking_number, '-', 2), '')::integer), 0) + 1
    into v_next
    from public.bookings
    where partner_id = new.partner_id
      and booking_number like v_prefix || '-%'
      and split_part(booking_number, '-', 2) ~ '^[0-9]+$';
  new.booking_number := v_prefix || '-' || v_next;
  return new;
end;
$$;

drop trigger if exists booking_number_per_partner on public.bookings;
create trigger booking_number_per_partner before insert on public.bookings
  for each row execute function public.trg_booking_number_per_partner();
