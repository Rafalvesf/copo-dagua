-- ============================================================
-- Chat real casal <-> parceiro (pedido do utilizador: "add the chat
-- and reservas to the app couple side and link it up with the
-- partners side too" — reservas/bookings já eram reais e ligadas dos
-- dois lados desde 009_quotations_bookings.sql; só o Chat continuava
-- 100% mock em `MockBackend.chatMessages`/`chatConversations`).
--
-- Identidade da conversa: par (wedding_id, partner_id), o mesmo
-- padrão de ligação casal<->parceiro já usado em `quote_requests` e
-- `bookings` (009_quotations_bookings.sql) — mas em vez de amarrar a
-- conversa a um pedido de orçamento específico, fica ao nível do
-- casamento inteiro (qualquer membro do casamento, não só quem pediu
-- o orçamento, vê e participa — mesmo critério de
-- is_wedding_member() usado em todo o resto da base de dados) para
-- que o botão "Chat" no perfil público do parceiro
-- (partner_detail_screen.dart) possa abrir conversa mesmo antes de
-- existir qualquer pedido de orçamento.
-- ============================================================

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  last_message text,
  last_message_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (wedding_id, partner_id)
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_role text not null check (sender_role in ('couple', 'partner')),
  sender_id uuid not null references public.profiles(id),
  body text not null,
  created_at timestamptz not null default now()
);

create index messages_conversation_id_created_at_idx
  on public.messages (conversation_id, created_at);

create index conversations_wedding_id_idx on public.conversations (wedding_id);
create index conversations_partner_id_idx on public.conversations (partner_id);

alter table public.conversations enable row level security;
alter table public.messages enable row level security;

create policy "Members can view own conversations"
  on public.conversations for select
  using (public.is_wedding_member(wedding_id) or partner_id = auth.uid() or public.is_admin());

-- Sem policy de UPDATE por desenho: `last_message`/`last_message_at`
-- só mudam via o trigger abaixo (security definer), nunca por
-- escrita direta do cliente.
create policy "Members can create own conversations"
  on public.conversations for insert
  with check (public.is_wedding_member(wedding_id) or partner_id = auth.uid());

create policy "Members can view own messages"
  on public.messages for select
  using (
    exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (public.is_wedding_member(c.wedding_id) or c.partner_id = auth.uid() or public.is_admin())
    )
  );

create policy "Members can send own messages"
  on public.messages for insert
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (
          (sender_role = 'couple' and public.is_wedding_member(c.wedding_id))
          or (sender_role = 'partner' and c.partner_id = auth.uid())
        )
    )
  );

-- Denormaliza a última mensagem para a lista de conversas não
-- precisar de um join/agregado a `messages` de cada vez. security
-- definer pelo mesmo motivo já corrigido em
-- 029_fix_auto_submit_trigger_permissions.sql: um trigger-adapter
-- security invoker (default) a escrever numa tabela sem policy de
-- UPDATE para `authenticated` falha para utilizadores reais mesmo
-- passando nos testes via o role privilegiado da CLI.
create or replace function public.trg_update_conversation_last_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.conversations
    set last_message = new.body,
        last_message_at = new.created_at
    where id = new.conversation_id;
  return new;
end;
$$;

revoke execute on function public.trg_update_conversation_last_message() from public, anon, authenticated;

create trigger update_conversation_last_message
  after insert on public.messages
  for each row execute function public.trg_update_conversation_last_message();
