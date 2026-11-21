-- ============================================================
-- 212 · O grupo do evento nasce com o evento
-- ============================================================
--
-- Pedido do Rafael (2026-11-21): ao criar um evento cria-se logo um grupo
-- com os membros desse evento, com a foto, a descrição e o nome do evento;
-- os anfitriões aparecem em primeiro, como na lista de convidados. É para
-- lá que vai o «Agradecer aos convidados» do painel do organizador.
--
-- O grupo «todos» já existia (189), mas só se criava quando alguém o
-- abria e chamava-se «Todos». Agora:
--   * cria-se quando o evento é criado (e já para os eventos que existem);
--   * tem o nome, a foto (capa) e uma descrição do evento («Casamento ·
--     12 jun 2027 · Quinta do Freixo»), que acompanham o evento quando muda;
--   * a lista de pessoas de um grupo põe os anfitriões em primeiro.
-- ============================================================

begin;

alter table public.chat_groups
  add column if not exists photo_url text,
  add column if not exists description text;

-- Nome, foto e descrição do grupo a partir do evento.
create or replace function public.event_group_look(p_event_id uuid)
returns table (name text, photo_url text, description text)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select
    left(coalesce(nullif(trim(e.partner_name_1), ''), 'Evento')
         || case when nullif(trim(e.partner_name_2), '') is null then '' else ' & ' || trim(e.partner_name_2) end, 60),
    e.cover_photo_url,
    nullif(concat_ws(' · ',
      case e.event_type
        when 'wedding' then 'Casamento'
        when 'baptism' then 'Batizado'
        when 'birthday' then 'Aniversário'
        when 'communion' then 'Comunhão'
        when 'engagement' then 'Noivado'
        when 'vow_renewal' then 'Renovação de votos'
        when 'graduation' then 'Festa de curso'
        when 'corporate' then 'Evento de empresa'
        when 'baby_shower' then 'Chá de bebé'
        when 'party' then 'Festa'
        when 'nightlife' then 'Noite'
        when 'concert' then 'Concerto'
        when 'festival' then 'Festival'
        else nullif(trim(e.event_type_other), '')
      end,
      case when e.wedding_date is null then null else
        extract(day from e.wedding_date)::int || ' '
        || (array['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'])[extract(month from e.wedding_date)::int]
        || ' ' || extract(year from e.wedding_date)::int
      end,
      coalesce(nullif(trim(e.venue), ''), nullif(trim(e.location), ''))
    ), '')
  from public.events e
  where e.id = p_event_id;
$$;

-- O grupo «todos» do evento, agora com o nome, a foto e a descrição.
create or replace function public.ensure_event_group(p_wedding_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_group uuid;
  v_owner uuid;
  v_look record;
begin
  select owner_id into v_owner from public.events where id = p_wedding_id and deleted_at is null;
  if v_owner is null then return null; end if;
  select * into v_look from public.event_group_look(p_wedding_id);

  select id into v_group from public.chat_groups where wedding_id = p_wedding_id and is_event_all;
  if v_group is null then
    insert into public.chat_groups (wedding_id, name, created_by, is_event_all, photo_url, description)
    values (p_wedding_id, v_look.name, v_owner, true, v_look.photo_url, v_look.description)
    on conflict do nothing
    returning id into v_group;
    if v_group is null then
      select id into v_group from public.chat_groups where wedding_id = p_wedding_id and is_event_all;
    end if;
  end if;

  insert into public.chat_group_members (group_id, profile_id)
  select v_group, p.id from (
    select v_owner as id
    union select c.user_id from public.wedding_collaborators c where c.wedding_id = p_wedding_id and c.status = 'active'
    union select m.guest_id from public.wedding_guest_members m where m.wedding_id = p_wedding_id
  ) p
  where p.id is not null
  on conflict do nothing;

  return v_group;
end;
$$;

-- Cria o grupo logo que o evento é criado.
create or replace function public.event_group_on_create()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  perform public.ensure_event_group(new.id);
  return new;
end;
$$;

drop trigger if exists event_group_on_create on public.events;
create trigger event_group_on_create
  after insert on public.events
  for each row execute function public.event_group_on_create();

-- O grupo acompanha o evento (nome, capa, tipo, data, local).
create or replace function public.event_group_follow_event()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_look record;
begin
  select * into v_look from public.event_group_look(new.id);
  update public.chat_groups g
     set name = v_look.name, photo_url = v_look.photo_url, description = v_look.description
   where g.wedding_id = new.id and g.is_event_all;
  return new;
end;
$$;

drop trigger if exists event_group_follow_event on public.events;
create trigger event_group_follow_event
  after update of partner_name_1, partner_name_2, cover_photo_url, event_type, event_type_other, wedding_date, venue, location
  on public.events
  for each row execute function public.event_group_follow_event();

-- Quem passa a organizar também entra no grupo.
create or replace function public.event_group_add_collaborator()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_group uuid;
begin
  if new.status = 'active' and new.user_id is not null then
    select id into v_group from public.chat_groups where wedding_id = new.wedding_id and is_event_all;
    if v_group is not null then
      insert into public.chat_group_members (group_id, profile_id) values (v_group, new.user_id) on conflict do nothing;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists event_group_add_collaborator on public.wedding_collaborators;
create trigger event_group_add_collaborator
  after insert or update of status on public.wedding_collaborators
  for each row execute function public.event_group_add_collaborator();

-- As pessoas de um grupo: os anfitriões (quem organiza) em primeiro.
create or replace function public.chat_group_people(p_group_id uuid)
returns table (profile_id uuid, full_name text, avatar_url text)
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.is_chat_group_member(p_group_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return query
    select p.id, coalesce(nullif(p.full_name, ''), 'Sem nome'), p.avatar_url
    from public.chat_group_members m
    join public.profiles p on p.id = m.profile_id
    join public.chat_groups g on g.id = m.group_id
    left join public.events e on e.id = g.wedding_id
    where m.group_id = p_group_id
    order by
      case when p.id = e.owner_id then 0
           when exists (select 1 from public.wedding_collaborators c
                        where c.wedding_id = g.wedding_id and c.user_id = p.id and c.status = 'active') then 1
           else 2 end,
      p.full_name;
end;
$$;

-- Os eventos que já existem: o grupo, com o nome, a foto e a descrição.
do $$
declare r record;
begin
  for r in select id from public.events where deleted_at is null loop
    perform public.ensure_event_group(r.id);
  end loop;
  update public.chat_groups g
     set name = l.name, photo_url = l.photo_url, description = l.description
    from public.events e, lateral public.event_group_look(e.id) l
   where g.is_event_all and g.wedding_id = e.id;
end;
$$;

insert into public.applied_migrations (id) values ('212') on conflict do nothing;

commit;
