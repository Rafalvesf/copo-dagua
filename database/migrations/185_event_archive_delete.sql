-- 185 · Arquivar e apagar eventos (2026-11-12).
--
-- O organizador pode arquivar ou apagar um evento que criou (na página do
-- evento ou com um toque longo no cartão). Os arquivados e apagados ficam
-- só nas Definições → Organização → "Eventos arquivados e apagados", de
-- onde se restauram.
--
-- * Arquivar: sai das listas do organizador; os convidados continuam a vê-lo.
-- * Apagar: sai de todo o lado (organizador, convidados, Descobrir). Fica
--   recuperável. "Apagar de vez" só quando não há nada com dinheiro ou
--   parceiros ligado ao evento.
-- * Não se apaga um evento com reservas ativas, bilhetes vendidos ou
--   presentes pagos — nesse caso, arquiva-se.

begin;

alter table public.weddings
  add column if not exists archived_at timestamptz,
  add column if not exists deleted_at timestamptz;

-- Porque é que este evento não pode ser apagado (null = pode).
create or replace function public.event_delete_blocker(p_wedding uuid)
returns text
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select case
    when exists (select 1 from public.bookings b
                 where b.wedding_id = p_wedding
                   and b.status in ('awaiting_deposit', 'confirmed', 'payment_overdue', 'disputed'))
      then 'Tem reservas ativas com parceiros. Podes arquivá-lo.'
    when exists (select 1 from public.event_tickets t where t.wedding_id = p_wedding)
      then 'Já tem bilhetes vendidos. Podes arquivá-lo.'
    when exists (select 1 from public.gift_orders g where g.wedding_id = p_wedding)
      then 'Já recebeu presentes pagos. Podes arquivá-lo.'
  end;
$$;
revoke execute on function public.event_delete_blocker(uuid) from public;
grant execute on function public.event_delete_blocker(uuid) to authenticated;

-- Arquivar / desarquivar (quem pode editar o evento).
create or replace function public.set_event_archived(p_wedding uuid, p_archived boolean)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.wedding_can(p_wedding, 'evento') then
    raise exception 'Sem permissão para este evento.';
  end if;
  update public.weddings
     set archived_at = case when p_archived then now() end,
         deleted_at = case when p_archived then null else deleted_at end
   where id = p_wedding;
end;
$$;
revoke execute on function public.set_event_archived(uuid, boolean) from public;
grant execute on function public.set_event_archived(uuid, boolean) to authenticated;

-- Apagar (fica recuperável) — só quem criou o evento.
create or replace function public.delete_event(p_wedding uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_block text;
begin
  if not exists (select 1 from public.weddings where id = p_wedding and owner_id = auth.uid()) then
    raise exception 'Só quem criou o evento o pode apagar.';
  end if;
  v_block := public.event_delete_blocker(p_wedding);
  if v_block is not null then
    raise exception '%', v_block;
  end if;
  update public.weddings set deleted_at = now(), archived_at = null, is_public = false where id = p_wedding;
end;
$$;
revoke execute on function public.delete_event(uuid) from public;
grant execute on function public.delete_event(uuid) to authenticated;

-- Restaurar (arquivado ou apagado) — quem pode editar o evento.
create or replace function public.restore_event(p_wedding uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.wedding_can(p_wedding, 'evento') then
    raise exception 'Sem permissão para este evento.';
  end if;
  update public.weddings set archived_at = null, deleted_at = null where id = p_wedding;
end;
$$;
revoke execute on function public.restore_event(uuid) from public;
grant execute on function public.restore_event(uuid) to authenticated;

-- Apagar de vez um evento já apagado, sem nada de parceiros ou dinheiro.
create or replace function public.purge_event(p_wedding uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not exists (select 1 from public.weddings
                 where id = p_wedding and owner_id = auth.uid() and deleted_at is not null) then
    raise exception 'Só um evento apagado, por quem o criou, se apaga de vez.';
  end if;
  if exists (select 1 from public.bookings where wedding_id = p_wedding)
     or exists (select 1 from public.quote_requests where wedding_id = p_wedding)
     or exists (select 1 from public.event_tickets where wedding_id = p_wedding)
     or exists (select 1 from public.gift_orders where wedding_id = p_wedding) then
    raise exception 'Este evento tem pedidos a parceiros, bilhetes ou presentes. Fica guardado como apagado.';
  end if;
  delete from public.weddings where id = p_wedding;
end;
$$;
revoke execute on function public.purge_event(uuid) from public;
grant execute on function public.purge_event(uuid) to authenticated;

-- Descobrir: sem apagados nem arquivados.
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
    and w.deleted_at is null
    and w.archived_at is null
    and (w.wedding_date is null or w.wedding_date >= current_date - 1)
    and auth.uid() is not null
  order by w.wedding_date nulls last
  limit 200;
$$;

revoke execute on function public.list_public_events() from public, anon;
grant execute on function public.list_public_events() to authenticated;

-- Convidados: eventos apagados deixam de aparecer.
create or replace function public.get_my_guest_weddings()
returns table(wedding_id uuid, joined_at timestamptz, wedding jsonb)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select m.wedding_id,
         m.joined_at,
         jsonb_build_object(
           'partner_name_1', w.partner_name_1,
           'partner_name_2', w.partner_name_2,
           'wedding_date', w.wedding_date,
           'venue', w.venue,
           'location', w.location,
           'quote', w.quote,
           'cover_photo_url', w.cover_photo_url,
           'ceremony_time', w.ceremony_time,
           'welcome_message', w.welcome_message,
           'theme_colors', w.theme_colors,
           'updated_at', w.updated_at,
           'gift_list_url', w.gift_list_url,
           'gift_iban', w.gift_iban,
           'gift_message', w.gift_message,
           'event_type', w.event_type,
           'program', w.program,
           'dress_code', w.dress_code,
           'venue_address', w.venue_address,
           'venue_latitude', w.venue_latitude,
           'venue_longitude', w.venue_longitude
         )
  from public.wedding_guest_members m
  join public.weddings w on w.id = m.wedding_id
  where m.guest_id = auth.uid()
    and w.deleted_at is null
  order by m.joined_at desc;
$$;

insert into public.applied_migrations (id) values ('185') on conflict do nothing;

commit;
