# Bookings (admin-web) — Requisitos

## Funcionalidades

- Listar reservas com filtro por `status`, pesquisa por `booking_number`.
- Ver detalhe: casal, parceiro, casamento, valores, timeline (`booking_events`).
- Confirmar sinal recebido quando `status = awaiting_deposit`: o admin introduz o valor recebido, o sistema cruza-o automaticamente com o sinal esperado e só avança se coincidir (RN06 de `backend/bookings/requirements.md`) — continua um stub sem Stripe, mas deixou de ser um clique cego.
- Marcar como concluída quando `status = confirmed`.

## Fora de âmbito (MVP)

- Cancelar uma reserva — sem função `cancel_booking_*` ainda (`backend/bookings/tasks.md`).
- Reembolsos — depende de `Payments`.
- Editar valores de uma reserva — os valores vêm da proposta aceite; um admin que precise de os corrigir contacta as partes, não edita diretamente (mesmo princípio de `admin-web/partners/requirements.md`, RN07).

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Confirmar sinal só é ação válida a partir de `awaiting_deposit`; concluir só a partir de `confirmed` — mesmo princípio de `admin-web/partners/requirements.md` RN03, aplicado à máquina de estados de `backend/bookings/state.md`. |
| RN02 | Ambas as ações deste módulo são, por agora, um stub administrativo — não confirmam pagamento real nenhum (ver `README.md`). A UI tem de deixar isto claro, nunca apresentar como se fosse uma confirmação de pagamento real. |
| RN03 | Confirmar sinal exige que o admin introduza o valor recebido — nunca um botão de confirmação sem nenhum dado associado. O valor é cruzado automaticamente com `bookings.deposit_amount`; um valor diferente é rejeitado com uma mensagem clara, não silenciosamente aceite nem arredondado. |
