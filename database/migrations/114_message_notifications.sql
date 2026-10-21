-- ============================================================
-- Notificações de mensagens (organizadores, parceiros, equipa, convidados)
-- ============================================================
-- Pedido do utilizador (2026-10-21): avisar quem recebe uma mensagem —
-- conversa organizador ↔ parceiro, grupos do evento (organizadores,
-- equipa e convidados) e respostas da equipa À Nossa! ao suporte.
--
-- `profile_id`: notificação para UMA pessoa (grupos, suporte, convidados).
-- As do evento (wedding_id, partilhadas por todos os organizadores) e as
-- do parceiro (partner_id) continuam como estavam.
-- `link`: ecrã a abrir ao tocar.
-- Várias mensagens seguidas na mesma conversa juntam-se numa só
-- notificação por ler (atualiza o texto em vez de criar outra).

alter table public.notifications alter column wedding_id drop not null;
alter table public.notifications add column if not exists profile_id uuid references public.profiles(id) on delete cascade;
alter table public.notifications add column if not exists link text;
create index if not exists notifications_profile_idx on public.notifications (profile_id, created_at desc);
create index if not exists notifications_partner_idx on public.notifications (partner_id, created_at desc);

drop policy if exists "Members manage notifications" on public.notifications;
create policy "Members manage notifications" on public.notifications for all
  using (
    (profile_id is null and partner_id is null and public.is_wedding_member(wedding_id))
    or (profile_id is null and partner_id = auth.uid())
    or profile_id = auth.uid()
  )
  with check (
    (profile_id is null and partner_id is null and public.is_wedding_member(wedding_id))
    or (profile_id is null and partner_id = auth.uid())
    or profile_id = auth.uid()
  );

-- Texto curto da mensagem para a notificação.
create or replace function public.message_preview(p_body text, p_attachment_type text)
returns text language sql immutable as $$
  select case
    when nullif(trim(coalesce(p_body, '')), '') is not null then left(trim(p_body), 140)
    when p_attachment_type like 'image%' then 'Enviou uma foto'
    when p_attachment_type is not null then 'Enviou um ficheiro'
    else 'Nova mensagem'
  end;
$$;

-- Cria ou atualiza (junta mensagens seguidas) uma notificação por ler.
create or replace function public.upsert_message_notification(
  p_wedding_id uuid, p_partner_id uuid, p_profile_id uuid, p_title text, p_body text, p_link text
) returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_id uuid;
begin
  select id into v_id from public.notifications
  where type = 'new_message' and not read and link is not distinct from p_link
    and wedding_id is not distinct from p_wedding_id
    and partner_id is not distinct from p_partner_id
    and profile_id is not distinct from p_profile_id
    and created_at > now() - interval '1 day'
  order by created_at desc limit 1;

  if v_id is not null then
    update public.notifications set title = p_title, body = p_body, created_at = now() where id = v_id;
  else
    insert into public.notifications (wedding_id, partner_id, profile_id, type, title, body, link)
    values (p_wedding_id, p_partner_id, p_profile_id, 'new_message', p_title, p_body, p_link);
  end if;
end;
$$;

-- Conversa organizador ↔ parceiro.
create or replace function public.notify_direct_message()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_conv record;
  v_name text;
  v_preview text;
begin
  -- Pedidos de orçamento e propostas já têm o seu próprio aviso.
  if coalesce(new.is_quote_request_notice, false) or new.proposal_id is not null then
    return new;
  end if;
  select * into v_conv from public.conversations where id = new.conversation_id;
  if v_conv is null then return new; end if;
  v_preview := public.message_preview(new.body, new.attachment_type);

  if new.sender_role = 'partner' then
    select business_name into v_name from public.partner_profiles where id = v_conv.partner_id;
    perform public.upsert_message_notification(
      v_conv.wedding_id, null, null,
      'Mensagem de ' || coalesce(v_name, 'um parceiro'), v_preview, '/chat');
  else
    select nullif(concat_ws(' & ', nullif(partner_name_1, ''), nullif(partner_name_2, '')), '')
      into v_name from public.weddings where id = v_conv.wedding_id;
    perform public.upsert_message_notification(
      null, v_conv.partner_id, null,
      'Mensagem de ' || coalesce(v_name, 'um organizador'), v_preview, '/partner-messages');
  end if;
  return new;
end;
$$;

drop trigger if exists notify_direct_message on public.messages;
create trigger notify_direct_message after insert on public.messages
  for each row execute function public.notify_direct_message();

-- Grupos do evento: cada membro (organizadores, equipa, convidados),
-- menos quem enviou.
create or replace function public.notify_group_message()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_group record;
  v_sender text;
  v_preview text;
  m record;
begin
  select * into v_group from public.chat_groups where id = new.group_id;
  if v_group is null then return new; end if;
  select coalesce(nullif(split_part(full_name, ' ', 1), ''), 'Alguém') into v_sender from public.profiles where id = new.sender_id;
  v_preview := coalesce(v_sender, 'Alguém') || ': ' || public.message_preview(new.body, new.attachment_type);
  for m in select profile_id from public.chat_group_members where group_id = new.group_id and profile_id <> new.sender_id loop
    perform public.upsert_message_notification(
      null, null, m.profile_id, v_group.name, v_preview, '/groups/' || v_group.wedding_id);
  end loop;
  return new;
end;
$$;

drop trigger if exists notify_group_message on public.chat_group_messages;
create trigger notify_group_message after insert on public.chat_group_messages
  for each row execute function public.notify_group_message();

-- Resposta da equipa À Nossa! a um pedido de ajuda.
create or replace function public.notify_support_reply()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if new.resolution_note is not null and new.resolution_note is distinct from old.resolution_note then
    insert into public.notifications (profile_id, type, title, body, link)
    values (new.user_id, 'support_reply', 'Resposta da equipa À Nossa!', left(new.resolution_note, 140), '/support');
  end if;
  return new;
end;
$$;

drop trigger if exists notify_support_reply on public.support_tickets;
create trigger notify_support_reply after update on public.support_tickets
  for each row execute function public.notify_support_reply();
