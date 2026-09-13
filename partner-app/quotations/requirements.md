# Quotations (partner-app) — Requisitos

## Funcionalidades

- Lista de pedidos recebidos ("Leads"), filtrável por estado (`pending`/`viewed`/`proposal_sent`).
- Ecrã de detalhe do pedido: dados do casal, casamento, orçamento estimado, mensagem.
- Formulário de proposta: título, descrição, preço, sinal, condições de pagamento.

## Regras de negócio

Todas herdadas de `backend/quotations/requirements.md` (RN03, RN04) — este módulo só valida no cliente para feedback imediato (ex: `deposit_amount ≤ price`, já autoritativo em `send_proposal()`).
