# Módulo: Quotations

**Estado:** ✅ Documentado
**Camada:** Backend (Supabase — funções `security definer` + RLS)
**Consumido por:** `mobile-app/quotations/` (casal, documentação sem código Flutter nesta ronda), `partner-app/quotations/` (parceiro, idem)

## Objetivo

Modelar o pedido de orçamento de um casal a um parceiro e a proposta que o parceiro envia de volta — a fase de negociação que antecede uma reserva (`backend/bookings/`). É o primeiro elo da cadeia de receita da plataforma (`BUSINESS_MODEL.md`): sem um pedido de orçamento aceite não há reserva, e sem reserva não há comissão de 3%.

**Fora de âmbito deste módulo:** a reserva em si (`backend/bookings/`), pagamento do sinal, pesquisa/descoberta de parceiros (`mobile-app/marketplace/`, ⏳).

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`database.md`](./database.md) | Modelo de dados e RLS |
| [`api.md`](./api.md) | Funções `security definer` |
| [`state.md`](./state.md) | Estados de `quote_requests` e `proposals` |
| [`validations.md`](./validations.md) | Regras de validação |
| [`edge-cases.md`](./edge-cases.md) | Casos limite |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e testes |
| [`tasks.md`](./tasks.md) | Backlog técnico |
| [`dependencies.md`](./dependencies.md) | Dependências |

## Resumo executivo

Duas tabelas, `quote_requests` (o pedido) e `proposals` (a resposta do parceiro), cada uma com o seu próprio ciclo de vida curto. Toda a escrita passa por três funções `security definer` (`request_quote`, `send_proposal`, `accept_proposal`) — nunca `insert`/`update` direto do cliente, mesmo padrão já estabelecido em `admin-web/partners/api.md` e `docs/architecture/RLS_POLICY.md`. `accept_proposal` é o ponto de transição: cria a linha em `bookings` (`backend/bookings/`) atomicamente com a aceitação da proposta.

**Decisão de arquitetura mais relevante:** a regra dos "mínimo 7 dias antes do evento" (RN01) é validada dentro de `request_quote()`, não só no cliente — é a mesma regra de negócio que a spec original de admin panel pedia como configurável em `platform_settings`; fica fixa em código por agora (ver `tasks.md` e `admin-web/settings/README.md`) até haver um segundo caso de uso real que justifique a tabela.
