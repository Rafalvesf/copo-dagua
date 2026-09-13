-- ============================================================
-- Tarefas dinâmicas por evento real (RN22-25 do pedido do
-- utilizador): "Pagar sinal" e "Rever proposta" não são template
-- genérico — nascem uma vez por pagamento/proposta real, não por
-- categoria. `source_entity_id` guarda a referência (payment.id ou
-- proposal.id) para nunca duplicar a mesma tarefa duas vezes.
-- ============================================================

alter table public.wedding_tasks add column source_entity_id uuid;

create unique index wedding_tasks_wedding_entity_uidx
  on public.wedding_tasks (wedding_id, source_entity_id)
  where source_entity_id is not null;
