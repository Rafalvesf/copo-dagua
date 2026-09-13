-- ============================================================
-- Chat — marcador do aviso de pedido de orçamento
-- ============================================================
--
-- Pedido explícito do utilizador (2026-09-05): a mensagem que anuncia um
-- pedido de orçamento no chat deve nomear o parceiro e ser clicável para
-- o perfil dele. Precisa de um marcador próprio (tal como
-- `proposal_id` para o cartão de proposta, `051_proposal_chat_card.sql`)
-- para o cliente saber que mensagem é esta sem ter de comparar texto —
-- não guarda mais nada (o `partner_id` já vem de `conversations`, a
-- mesma conversa é sempre com o mesmo parceiro).
alter table public.messages
  add column is_quote_request_notice boolean not null default false;
