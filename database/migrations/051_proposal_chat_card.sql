-- ============================================================
-- Chat — cartão de proposta
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-04): "a proposta deve
-- aparecer no chat tanto para o casal como para o parceiro!". Até
-- agora `send_proposal()` (009_quotations_bookings.sql) só criava a
-- linha em `proposals`, visível apenas na secção "Propostas recebidas"
-- de `couple_bookings_screen.dart` — nada aparecia na conversa real
-- entre o casal e o parceiro (`036_chat.sql`). Denormaliza preço/sinal
-- na própria mensagem (mesmo raciocínio de `conversations.last_message`
-- já denormalizado) para o cartão renderizar sem precisar de um join a
-- `proposals` de cada vez que o chat carrega.
alter table public.messages
  add column proposal_id uuid references public.proposals(id),
  add column proposal_title text,
  add column proposal_price numeric(10,2),
  add column proposal_deposit_amount numeric(10,2);
