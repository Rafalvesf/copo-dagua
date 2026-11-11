-- 179 — Apagar mensagens, grupos e conversas (pedido 2026-11-11).
--
-- * Mensagem própria (conversa com parceiro ou grupo): quem a enviou
--   apaga-a para todos. Propostas e avisos de pedido de orçamento não se
--   apagam (fazem parte do histórico da reserva).
-- * Grupo: quem o criou apaga-o para todos; os outros saem do grupo
--   (`leave_chat_group`, já existia).
-- * Conversa com parceiro: não se apaga do lado do parceiro. Cada lado
--   esconde-a para si (`couple_hidden_at` / `partner_hidden_at`) — some
--   da lista e o histórico até esse momento deixa de aparecer; uma
--   mensagem nova volta a mostrá-la.

begin;

alter table public.conversations
  add column if not exists couple_hidden_at timestamptz,
  add column if not exists partner_hidden_at timestamptz;

-- Atualiza a última mensagem de uma conversa depois de apagar.
create or replace function public.refresh_conversation_last_message(p_conversation_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.conversations c
  set last_message = m.body,
      last_message_at = coalesce(m.created_at, c.created_at)
  from (select null::int) x
  left join lateral (
    select body, created_at from public.messages
    where conversation_id = p_conversation_id
    order by created_at desc limit 1
  ) m on true
  where c.id = p_conversation_id;
$$;
revoke execute on function public.refresh_conversation_last_message(uuid) from public, anon, authenticated;

create or replace function public.delete_message(p_message_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_conv uuid;
begin
  delete from public.messages
  where id = p_message_id
    and sender_id = auth.uid()
    and proposal_id is null
    and coalesce(is_quote_request_notice, false) = false
  returning conversation_id into v_conv;
  if v_conv is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  perform public.refresh_conversation_last_message(v_conv);
end;
$$;
revoke execute on function public.delete_message(uuid) from public, anon;
grant execute on function public.delete_message(uuid) to authenticated;

create or replace function public.delete_group_message(p_message_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_group uuid;
begin
  delete from public.chat_group_messages
  where id = p_message_id and sender_id = auth.uid()
  returning group_id into v_group;
  if v_group is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  update public.chat_groups g
  set last_message = case
        when m.id is null then null
        when coalesce(trim(m.body), '') <> '' then left(m.body, 140)
        when m.attachment_type = 'image' then 'Foto'
        when m.attachment_type = 'gif' then 'GIF'
        when m.attachment_type = 'sticker' then 'Sticker'
        else 'Anexo'
      end,
      last_message_at = coalesce(m.created_at, g.created_at)
  from (select null::int) x
  left join lateral (
    select id, body, attachment_type, created_at from public.chat_group_messages
    where group_id = v_group order by created_at desc limit 1
  ) m on true
  where g.id = v_group;
end;
$$;
revoke execute on function public.delete_group_message(uuid) from public, anon;
grant execute on function public.delete_group_message(uuid) to authenticated;

create or replace function public.delete_chat_group(p_group_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.chat_groups where id = p_group_id and created_by = auth.uid();
  if not found then
    raise exception 'forbidden' using errcode = '42501';
  end if;
end;
$$;
revoke execute on function public.delete_chat_group(uuid) from public, anon;
grant execute on function public.delete_chat_group(uuid) to authenticated;

create or replace function public.hide_conversation(p_conversation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_wedding uuid;
  v_partner uuid;
  v_owner uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select wedding_id, partner_id, private_owner into v_wedding, v_partner, v_owner
  from public.conversations where id = p_conversation_id;
  if v_wedding is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_partner = auth.uid() then
    update public.conversations set partner_hidden_at = now() where id = p_conversation_id;
  elsif public.wedding_can(v_wedding, 'conversas'::text) and (v_owner is null or v_owner = auth.uid()) then
    update public.conversations set couple_hidden_at = now() where id = p_conversation_id;
  else
    raise exception 'forbidden' using errcode = '42501';
  end if;
end;
$$;
revoke execute on function public.hide_conversation(uuid) from public, anon;
grant execute on function public.hide_conversation(uuid) to authenticated;

insert into public.applied_migrations (id) values ('179') on conflict do nothing;

commit;
