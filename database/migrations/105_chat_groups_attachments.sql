-- ============================================================
-- Chat: grupos do evento e anexos (fotos, ficheiros, stickers, GIFs)
-- ============================================================
-- Pedido do utilizador (2026-10-20): nas mensagens, organizadores e
-- convidados podem criar grupos com as pessoas desse evento, e enviar
-- anexos, fotos, stickers e GIFs.
--
-- Pessoas de um evento = dono do casamento + co-organizadores ativos
-- (wedding_collaborators) + convidados com conta (wedding_guest_members).

-- 1. Anexos nas conversas casal ↔ parceiro --------------------------
alter table public.messages alter column body drop not null;
alter table public.messages
  add column if not exists attachment_url text,
  add column if not exists attachment_type text,
  add column if not exists attachment_name text;
alter table public.messages drop constraint if exists messages_attachment_type_check;
alter table public.messages add constraint messages_attachment_type_check
  check (attachment_type is null or attachment_type in ('image', 'file', 'sticker', 'gif'));

-- 2. Pessoas do evento ------------------------------------------------
create or replace function public.is_event_person(p_wedding_id uuid, p_profile_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (select 1 from public.weddings w where w.id = p_wedding_id and w.owner_id = p_profile_id)
      or exists (select 1 from public.wedding_collaborators c
                 where c.wedding_id = p_wedding_id and c.user_id = p_profile_id and c.status = 'active')
      or exists (select 1 from public.wedding_guest_members g
                 where g.wedding_id = p_wedding_id and g.guest_id = p_profile_id);
$$;

-- Lista das pessoas do evento para escolher membros de um grupo.
create or replace function public.event_chat_people(p_wedding_id uuid)
returns table (profile_id uuid, full_name text, avatar_url text, role text)
language plpgsql
stable
security definer
set search_path = public, pg_temp
as $$
begin
  if not public.is_event_person(p_wedding_id, auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return query
    select distinct on (p.id) p.id, coalesce(nullif(p.full_name, ''), 'Sem nome'), p.avatar_url, x.role
    from (
      select w.owner_id as pid, 'organizador'::text as role from public.weddings w where w.id = p_wedding_id
      union all
      select c.user_id, 'organizador' from public.wedding_collaborators c where c.wedding_id = p_wedding_id and c.status = 'active'
      union all
      select g.guest_id, 'convidado' from public.wedding_guest_members g where g.wedding_id = p_wedding_id
    ) x
    join public.profiles p on p.id = x.pid
    order by p.id, x.role desc;
end;
$$;

-- 3. Grupos -----------------------------------------------------------
create table if not exists public.chat_groups (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  name text not null check (length(trim(name)) between 1 and 60),
  created_by uuid not null references public.profiles(id) on delete cascade,
  last_message text,
  last_message_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.chat_group_members (
  group_id uuid not null references public.chat_groups(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  last_read_at timestamptz,
  added_at timestamptz not null default now(),
  primary key (group_id, profile_id)
);

create table if not exists public.chat_group_messages (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.chat_groups(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text,
  attachment_url text,
  attachment_type text check (attachment_type is null or attachment_type in ('image', 'file', 'sticker', 'gif')),
  attachment_name text,
  created_at timestamptz not null default now(),
  check (coalesce(length(trim(body)), 0) > 0 or attachment_url is not null)
);
create index if not exists chat_group_messages_group_idx on public.chat_group_messages (group_id, created_at);
create index if not exists chat_group_members_profile_idx on public.chat_group_members (profile_id);

create or replace function public.is_chat_group_member(p_group_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (select 1 from public.chat_group_members m where m.group_id = p_group_id and m.profile_id = auth.uid());
$$;

alter table public.chat_groups enable row level security;
alter table public.chat_group_members enable row level security;
alter table public.chat_group_messages enable row level security;

drop policy if exists "Members view groups" on public.chat_groups;
create policy "Members view groups" on public.chat_groups for select using (public.is_chat_group_member(id));

drop policy if exists "Members view members" on public.chat_group_members;
create policy "Members view members" on public.chat_group_members for select using (public.is_chat_group_member(group_id));

drop policy if exists "Members view messages" on public.chat_group_messages;
create policy "Members view messages" on public.chat_group_messages for select using (public.is_chat_group_member(group_id));

drop policy if exists "Members send messages" on public.chat_group_messages;
create policy "Members send messages" on public.chat_group_messages for insert
  with check (sender_id = auth.uid() and public.is_chat_group_member(group_id));

-- Criar grupo: quem cria tem de ser do evento; só entram pessoas do evento.
create or replace function public.create_chat_group(p_wedding_id uuid, p_name text, p_member_ids uuid[])
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_id uuid;
begin
  if auth.uid() is null or not public.is_event_person(p_wedding_id, auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  insert into public.chat_groups (wedding_id, name, created_by)
  values (p_wedding_id, trim(p_name), auth.uid())
  returning id into v_id;
  insert into public.chat_group_members (group_id, profile_id, last_read_at)
  values (v_id, auth.uid(), now());
  insert into public.chat_group_members (group_id, profile_id)
  select v_id, m from unnest(coalesce(p_member_ids, '{}')) m
  where m <> auth.uid() and public.is_event_person(p_wedding_id, m)
  on conflict do nothing;
  return v_id;
end;
$$;

create or replace function public.add_chat_group_members(p_group_id uuid, p_member_ids uuid[])
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding uuid;
begin
  if not public.is_chat_group_member(p_group_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select wedding_id into v_wedding from public.chat_groups where id = p_group_id;
  insert into public.chat_group_members (group_id, profile_id)
  select p_group_id, m from unnest(coalesce(p_member_ids, '{}')) m
  where public.is_event_person(v_wedding, m)
  on conflict do nothing;
end;
$$;

create or replace function public.leave_chat_group(p_group_id uuid)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  delete from public.chat_group_members where group_id = p_group_id and profile_id = auth.uid();
$$;

create or replace function public.mark_chat_group_read(p_group_id uuid)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.chat_group_members set last_read_at = now()
  where group_id = p_group_id and profile_id = auth.uid();
$$;

-- Última mensagem do grupo (para a lista).
create or replace function public.trg_chat_group_last_message()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  update public.chat_groups
  set last_message = case
        when coalesce(trim(new.body), '') <> '' then left(new.body, 140)
        when new.attachment_type = 'image' then 'Foto'
        when new.attachment_type = 'gif' then 'GIF'
        when new.attachment_type = 'sticker' then 'Sticker'
        else 'Anexo'
      end,
      last_message_at = new.created_at
  where id = new.group_id;
  return new;
end;
$$;
drop trigger if exists chat_group_last_message on public.chat_group_messages;
create trigger chat_group_last_message after insert on public.chat_group_messages
  for each row execute function public.trg_chat_group_last_message();

grant execute on function public.event_chat_people(uuid), public.create_chat_group(uuid, text, uuid[]),
  public.add_chat_group_members(uuid, uuid[]), public.leave_chat_group(uuid), public.mark_chat_group_read(uuid)
  to authenticated;

-- 4. Ficheiros dos anexos ---------------------------------------------
-- Bucket público com caminhos aleatórios por utilizador ({uid}/{uuid}.ext).
insert into storage.buckets (id, name, public, file_size_limit)
values ('chat-attachments', 'chat-attachments', true, 15728640)
on conflict (id) do nothing;

drop policy if exists "Chat attachments readable" on storage.objects;
create policy "Chat attachments readable" on storage.objects for select
  using (bucket_id = 'chat-attachments');

drop policy if exists "Chat attachments upload own" on storage.objects;
create policy "Chat attachments upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat-attachments' and (storage.foldername(name))[1] = auth.uid()::text);

-- Membros do grupo com nome e foto (o RLS de profiles não deixa ler
-- outras contas diretamente).
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
    from public.chat_group_members m join public.profiles p on p.id = m.profile_id
    where m.group_id = p_group_id
    order by p.full_name;
end;
$$;
grant execute on function public.chat_group_people(uuid) to authenticated;
