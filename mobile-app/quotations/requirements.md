# Quotations (mobile-app) — Requisitos

## Funcionalidades

- Ecrã "Pedir orçamento" a partir do perfil de um parceiro: data desejada (com aviso se < 7 dias, RN01 de `backend/quotations/requirements.md`), local, orçamento estimado, mensagem.
- Lista "Os meus pedidos" com estado de cada um.
- Ecrã de proposta recebida: preço, sinal, condições, botões Aceitar/Recusar.
- Ao aceitar, redireciona para o ecrã de booking (`mobile-app/bookings/`).

## Regras de negócio

Todas herdadas de `backend/quotations/requirements.md` — este módulo não introduz nenhuma regra própria, só valida no cliente para feedback imediato (RN01, mesmo padrão de "validação client-side + autoritativa no servidor" já usado em `backend/auth/`).
