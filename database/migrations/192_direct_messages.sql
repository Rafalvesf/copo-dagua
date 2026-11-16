-- ============================================================
-- 192 · Mensagens diretas entre pessoas na app
-- ============================================================
--
-- Pedido do Rafael (2026-11-16): botão «Mensagem» nos perfis (perfil de
-- um amigo, perfil de um convidado) que abre uma conversa direta na app,
-- em vez de SMS, chamada ou email.
--
-- Usa os grupos de conversa (mesmas mensagens, anexos, lidas,
-- notificações): uma conversa direta é um grupo com duas pessoas, sem
-- evento, marcado `is_direct`, uma só por par (`direct_key`).
-- Quem pode abrir: quem se segue (num sentido ou noutro) ou está no
-- mesmo evento; nunca com bloqueio de um dos lados.
-- ============================================================

begin;

alter table public.chat_groups alter column wedding_id drop not null;

alter table public.chat_groups
  add column if not exists is_direct boolean not null default false,
  add column if not exists direct_key text;

create unique index if not exists chat_groups_direct_key_uidx
  on public.chat_groups (direct_key) where direct_key is not null;

-- Estou neste evento (organizo, colaboro ou sou convidado com conta)?
create or replace function public.profile_in_event(p_profile_id uuid, p_wedding_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (select 1 from public.weddings w where w.id = p_wedding_id and w.owner_id = p_profile_id)
      or exists (select 1 from public.wedding_collaborators c where c.wedding_id = p_wedding_id and c.user_id = p_profile_id and c.status = 'active')
      or exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding_id and m.guest_id = p_profile_id)
      or exists (select 1 from public.guests g where g.wedding_id = p_wedding_id and g.linked_profile_id = p_profile_id);
$$;

create or replace function public.open_direct_chat(p_profile_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_me uuid := auth.uid();
  v_key text;
  v_group uuid;
begin
  if v_me is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if p_profile_id is null or p_profile_id = v_me then raise exception 'validation_error' using errcode = '22023'; end if;
  if not exists (select 1 from public.profiles where id = p_profile_id) then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if exists (
    select 1 from public.user_blocks
    where (blocker_id = v_me and blocked_id = p_profile_id) or (blocker_id = p_profile_id and blocked_id = v_me)
  ) then
    raise exception 'blocked' using errcode = '42501';
  end if;

  v_key := least(v_me::text, p_profile_id::text) || ':' || greatest(v_me::text, p_profile_id::text);
  select id into v_group from public.chat_groups where direct_key = v_key;

  if v_group is null then
    -- Só entre quem se segue ou está no mesmo evento.
    if not (
      exists (select 1 from public.follows f
              where (f.follower_id = v_me and f.profile_id = p_profile_id)
                 or (f.follower_id = p_profile_id and f.profile_id = v_me))
      or exists (select 1 from public.weddings w
                 where w.deleted_at is null
                   and public.profile_in_event(v_me, w.id)
                   and public.profile_in_event(p_profile_id, w.id))
    ) then
      raise exception 'not_allowed' using errcode = '42501';
    end if;

    insert into public.chat_groups (wedding_id, name, created_by, is_direct, direct_key)
    values (null, 'Conversa', v_me, true, v_key)
    on conflict do nothing
    returning id into v_group;
    if v_group is null then
      select id into v_group from public.chat_groups where direct_key = v_key;
    end if;
  end if;

  -- Volta a pôr os dois (se alguém tinha saído).
  insert into public.chat_group_members (group_id, profile_id)
  values (v_group, v_me), (v_group, p_profile_id)
  on conflict do nothing;

  return v_group;
end;
$$;

grant execute on function public.open_direct_chat(uuid) to authenticated;

-- Notificação: numa conversa direta o título é quem escreveu e o link
-- abre as Mensagens (o grupo de evento continua a abrir os grupos).
create or replace function public.notify_group_message()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_group record;
  v_sender text;
  v_preview text;
  m record;
begin
  select * into v_group from public.chat_groups where id = new.group_id;
  if v_group is null then return new; end if;
  select coalesce(nullif(split_part(full_name, ' ', 1), ''), 'Alguém') into v_sender from public.profiles where id = new.sender_id;
  if v_group.is_direct then
    v_preview := public.message_preview(new.body, new.attachment_type);
    for m in select profile_id from public.chat_group_members where group_id = new.group_id and profile_id <> new.sender_id loop
      perform public.upsert_message_notification(null, null, m.profile_id, coalesce(v_sender, 'Alguém'), v_preview, '/chat');
    end loop;
    return new;
  end if;
  v_preview := coalesce(v_sender, 'Alguém') || ': ' || public.message_preview(new.body, new.attachment_type);
  for m in select profile_id from public.chat_group_members where group_id = new.group_id and profile_id <> new.sender_id loop
    perform public.upsert_message_notification(
      null, null, m.profile_id, v_group.name, v_preview, '/groups/' || v_group.wedding_id);
  end loop;
  return new;
end;
$$;

insert into public.applied_migrations (id) values ('192') on conflict do nothing;

commit;
