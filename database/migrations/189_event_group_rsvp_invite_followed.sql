-- ============================================================
-- 189 · Grupo «todos» do evento, respostas no grupo e convidar quem sigo
-- ============================================================
--
-- Mockups «Páginas do convidado» (Grupo do evento) e «Páginas do
-- evento» (Convidar · quem sigo), 2026-11-15:
--   * Cada evento tem um grupo com toda a gente (organizadores e
--     convidados com conta). Entra-se automaticamente.
--   * Quando um convidado com conta responde (vai / não vai), aparece no
--     grupo para todos, com o perfil dele para seguir.
--   * O organizador convida quem segue: a pessoa entra na lista de
--     convidados ligada à conta, vê o evento na app e recebe uma
--     notificação — sem link.
-- ============================================================

begin;

alter table public.chat_groups
  add column if not exists is_event_all boolean not null default false;

create unique index if not exists chat_groups_event_all_uidx
  on public.chat_groups (wedding_id) where is_event_all;

-- Mensagens automáticas (ex.: resposta ao convite).
alter table public.chat_group_messages
  add column if not exists kind text,
  add column if not exists meta jsonb;

-- Garante o grupo «todos» do evento e põe lá toda a gente com conta.
create or replace function public.ensure_event_group(p_wedding_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_group uuid;
  v_owner uuid;
begin
  select owner_id into v_owner from public.weddings where id = p_wedding_id and deleted_at is null;
  if v_owner is null then return null; end if;

  select id into v_group from public.chat_groups where wedding_id = p_wedding_id and is_event_all;
  if v_group is null then
    insert into public.chat_groups (wedding_id, name, created_by, is_event_all)
    values (p_wedding_id, 'Todos', v_owner, true)
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

-- Quem pode pedir o grupo: quem organiza ou é convidado do evento.
create or replace function public.my_event_group(p_wedding_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if not (
    public.wedding_can(p_wedding_id, 'convidados'::text)
    or exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding_id and m.guest_id = auth.uid())
    or exists (select 1 from public.weddings w where w.id = p_wedding_id and w.owner_id = auth.uid())
  ) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return public.ensure_event_group(p_wedding_id);
end;
$$;

grant execute on function public.my_event_group(uuid) to authenticated;

-- Quem entra no evento entra também no grupo (se já existir).
create or replace function public.event_group_add_member()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_group uuid;
begin
  select id into v_group from public.chat_groups where wedding_id = new.wedding_id and is_event_all;
  if v_group is not null then
    insert into public.chat_group_members (group_id, profile_id) values (v_group, new.guest_id) on conflict do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists event_group_add_member on public.wedding_guest_members;
create trigger event_group_add_member
  after insert on public.wedding_guest_members
  for each row execute function public.event_group_add_member();

-- A resposta de um convidado com conta aparece no grupo para todos.
create or replace function public.event_group_rsvp_message()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_group uuid;
  v_name text;
  v_body text;
begin
  if new.linked_profile_id is null or new.rsvp_status = 'pending' then return new; end if;
  if tg_op = 'UPDATE' and old.rsvp_status = new.rsvp_status then return new; end if;

  v_group := public.ensure_event_group(new.wedding_id);
  if v_group is null then return new; end if;
  insert into public.chat_group_members (group_id, profile_id) values (v_group, new.linked_profile_id) on conflict do nothing;

  select coalesce(nullif(trim(p.full_name), ''), new.full_name) into v_name from public.profiles p where p.id = new.linked_profile_id;
  v_body := coalesce(v_name, new.full_name) || case when new.rsvp_status = 'confirmed' then ' disse que vai' else ' disse que não vai' end;

  insert into public.chat_group_messages (group_id, sender_id, body, kind, meta)
  values (v_group, new.linked_profile_id, v_body, 'rsvp',
          jsonb_build_object('status', new.rsvp_status, 'profile_id', new.linked_profile_id));

  update public.chat_groups set last_message = v_body, last_message_at = now() where id = v_group;
  return new;
end;
$$;

drop trigger if exists event_group_rsvp_message on public.guests;
create trigger event_group_rsvp_message
  after insert or update of rsvp_status on public.guests
  for each row execute function public.event_group_rsvp_message();

-- Pessoas que sigo, para convidar dentro da app (primeiro quem me segue
-- de volta), e se já estão no evento.
create or replace function public.event_followed_people(p_wedding_id uuid)
returns table (id uuid, full_name text, avatar_url text, username text, mutual boolean, invited boolean, rsvp text)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.id, p.full_name, p.avatar_url, p.username,
         exists (select 1 from public.follows b where b.follower_id = p.id and b.profile_id = auth.uid()) as mutual,
         g.id is not null as invited,
         g.rsvp_status::text
  from public.follows f
  join public.profiles p on p.id = f.profile_id
  left join lateral (
    select gg.id, gg.rsvp_status from public.guests gg
    where gg.wedding_id = p_wedding_id and gg.linked_profile_id = p.id
    limit 1
  ) g on true
  where f.follower_id = auth.uid()
    and f.profile_id is not null
    and public.wedding_can(p_wedding_id, 'convidados'::text)
  order by mutual desc, p.full_name;
$$;

grant execute on function public.event_followed_people(uuid) to authenticated;

-- Convidar quem sigo: entra na lista ligado à conta, vê o evento e
-- recebe uma notificação.
create or replace function public.invite_followed(p_wedding_id uuid, p_profile_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest uuid;
  v_name text;
  v_event text;
begin
  if not public.wedding_can(p_wedding_id, 'convidados'::text) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not exists (select 1 from public.follows f where f.follower_id = auth.uid() and f.profile_id = p_profile_id) then
    raise exception 'not_following' using errcode = 'P0002';
  end if;

  select id into v_guest from public.guests where wedding_id = p_wedding_id and linked_profile_id = p_profile_id limit 1;
  if v_guest is not null then return v_guest; end if;

  select full_name into v_name from public.profiles where id = p_profile_id;
  insert into public.guests (wedding_id, full_name, linked_profile_id, invite_sent_at)
  values (p_wedding_id, coalesce(nullif(trim(v_name), ''), 'Convidado'), p_profile_id, now())
  returning id into v_guest;

  insert into public.wedding_guest_members (wedding_id, guest_id) values (p_wedding_id, p_profile_id) on conflict do nothing;

  select trim(coalesce(partner_name_1, '') || case when coalesce(partner_name_2, '') <> '' then ' & ' || partner_name_2 else '' end)
    into v_event from public.weddings where id = p_wedding_id;
  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (p_profile_id, p_wedding_id, 'event_invite', 'Convite por responder',
          'Foste convidado para ' || coalesce(nullif(v_event, ''), 'um evento') || '.', '/guest-home/' || p_wedding_id);

  return v_guest;
end;
$$;

grant execute on function public.invite_followed(uuid, uuid) to authenticated;

insert into public.applied_migrations (id) values ('189') on conflict do nothing;

commit;
