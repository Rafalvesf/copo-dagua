-- ============================================================
-- Chat — contagem real de não lidas
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-05): "adiciona um ponto
-- vermelho ou verde no navbar no chat para indicar uma nova mensagem.
-- Um número a indicar quantas mensagens... tem" — até agora
-- `ChatConversation.unreadCount` ficava sempre 0 para dados reais
-- (`chat_list_controller.dart`: "a tabela não guarda estado de leitura
-- por mensagem"). Em vez de um registo por mensagem lida (overkill para
-- uma conversa 1:1 casal<->parceiro), basta um timestamp de "li até
-- aqui" por lado em `conversations` — mesmo padrão de
-- `last_message_at` já denormalizado ali.
alter table public.conversations
  add column couple_last_read_at timestamptz,
  add column partner_last_read_at timestamptz;

-- mark_conversation_read() — decide sozinha qual das duas colunas
-- atualizar a partir de quem está a chamar (nunca update direto do
-- cliente: RLS de `conversations` não tem policy de UPDATE para
-- nenhuma coluna, mesmo padrão de `record_stripe_checkout_session()`
-- ser a única exceção controlada em `payments`).
create or replace function public.mark_conversation_read(p_conversation_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_wedding_id uuid;
  v_partner_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select wedding_id, partner_id into v_wedding_id, v_partner_id
  from public.conversations where id = p_conversation_id;
  if v_wedding_id is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;

  if v_partner_id = auth.uid() then
    update public.conversations set partner_last_read_at = now() where id = p_conversation_id;
  elsif public.is_wedding_member(v_wedding_id) then
    update public.conversations set couple_last_read_at = now() where id = p_conversation_id;
  else
    raise exception 'forbidden' using errcode = '42501';
  end if;
end;
$$;

revoke execute on function public.mark_conversation_read(uuid) from public, anon;
grant execute on function public.mark_conversation_read(uuid) to authenticated;
