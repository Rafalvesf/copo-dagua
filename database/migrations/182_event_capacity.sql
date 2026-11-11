-- 182 — Limite de pessoas por evento (pedido 2026-11-11): escolhe-se ao
-- criar o evento e muda-se depois em "Acesso e entrada". Sem limite fica
-- null. Lugares ocupados = o maior entre quem entrou no evento e os
-- bilhetes pagos. Quando chega ao limite ninguém mais entra nem compra
-- bilhete ('event_full'); quem já está continua.

begin;

alter table public.weddings
  add column if not exists max_attendees integer;
alter table public.weddings
  drop constraint if exists weddings_max_attendees_check;
alter table public.weddings
  add constraint weddings_max_attendees_check check (max_attendees is null or max_attendees between 1 and 100000);

create or replace function public.event_spots_taken(p_wedding uuid)
returns integer
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select greatest(
    (select count(*)::int from public.wedding_guest_members where wedding_id = p_wedding),
    (select coalesce(sum(quantity), 0)::int from public.event_tickets where wedding_id = p_wedding and status = 'paid')
  );
$$;
revoke execute on function public.event_spots_taken(uuid) from public, anon;
grant execute on function public.event_spots_taken(uuid) to authenticated;

-- Entrar no evento (público, com código, convite ou bilhete).
create or replace function public.trg_event_capacity_member()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_max integer;
begin
  select max_attendees into v_max from public.weddings where id = new.wedding_id;
  if v_max is null then return new; end if;
  -- Já estava, ou pagou bilhete (o lugar foi contado na compra).
  if exists (select 1 from public.wedding_guest_members
             where wedding_id = new.wedding_id and guest_id = new.guest_id) then
    return new;
  end if;
  if exists (select 1 from public.event_tickets
             where wedding_id = new.wedding_id and buyer_id = new.guest_id and status = 'paid') then
    return new;
  end if;
  if public.event_spots_taken(new.wedding_id) >= v_max then
    raise exception 'event_full' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

drop trigger if exists event_capacity_member on public.wedding_guest_members;
create trigger event_capacity_member
  before insert on public.wedding_guest_members
  for each row execute function public.trg_event_capacity_member();

-- Comprar bilhetes: conta os pagos e os que estão a ser pagos (35 min).
create or replace function public.trg_event_capacity_ticket()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_max integer;
  v_taken integer;
begin
  if new.status <> 'pending' then return new; end if;
  select max_attendees into v_max from public.weddings where id = new.wedding_id;
  if v_max is null then return new; end if;
  select greatest(
           (select count(*)::int from public.wedding_guest_members where wedding_id = new.wedding_id),
           (select coalesce(sum(quantity), 0)::int from public.event_tickets
             where wedding_id = new.wedding_id and status = 'paid')
         )
         + (select coalesce(sum(quantity), 0)::int from public.event_tickets
             where wedding_id = new.wedding_id and status = 'pending'
               and created_at > now() - interval '35 minutes')
    into v_taken;
  if v_taken + new.quantity > v_max then
    raise exception 'event_full' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

drop trigger if exists event_capacity_ticket on public.event_tickets;
create trigger event_capacity_ticket
  before insert on public.event_tickets
  for each row execute function public.trg_event_capacity_ticket();

-- Descobrir: limite e lugares ocupados.
drop function if exists public.list_public_events();

create function public.list_public_events()
returns table (
  wedding_id uuid,
  event_type text,
  partner_name_1 text,
  partner_name_2 text,
  wedding_date date,
  ceremony_time text,
  venue text,
  location text,
  cover_photo_url text,
  welcome_message text,
  updated_at timestamptz,
  joined boolean,
  is_paid boolean,
  entry_price numeric,
  mine boolean,
  going_count integer,
  max_attendees integer,
  spots_taken integer
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select w.id, w.event_type, w.partner_name_1, w.partner_name_2,
         w.wedding_date, w.ceremony_time, w.venue, w.location,
         w.cover_photo_url, w.welcome_message, w.updated_at,
         exists (select 1 from public.wedding_guest_members m
                 where m.wedding_id = w.id and m.guest_id = auth.uid()) as joined,
         w.is_paid, w.entry_price,
         public.is_wedding_member(w.id) as mine,
         (select count(*)::int from public.wedding_guest_members m
           where m.wedding_id = w.id) as going_count,
         w.max_attendees,
         public.event_spots_taken(w.id) as spots_taken
  from public.weddings w
  where w.is_public
    and w.pending_deletion_at is null
    and (w.wedding_date is null or w.wedding_date >= current_date - 1)
    and auth.uid() is not null
  order by w.wedding_date nulls last
  limit 200;
$$;

revoke execute on function public.list_public_events() from public, anon;
grant execute on function public.list_public_events() to authenticated;

insert into public.applied_migrations (id) values ('182') on conflict do nothing;

commit;
