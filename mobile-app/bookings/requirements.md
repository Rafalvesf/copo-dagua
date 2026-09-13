# Bookings (mobile-app) — Requisitos

## Funcionalidades

- Ecrã de booking `awaiting_deposit`: contador até `hold_expires_at`, valor do sinal, instrução de pagamento (stub — ver `README.md`).
- Ecrã de booking `confirmed`: resumo da reserva, dados de contacto do parceiro.
- Ecrã de booking `expired`: explica que a data foi libertada, sugere pedir novo orçamento.
- Lista "As minhas reservas".

## Regras de negócio

Todas herdadas de `backend/bookings/requirements.md`. O contador de 48h é só display — a fonte de verdade é sempre `hold_expires_at`/`status` lidos do servidor, nunca calculados/confiados no cliente.
