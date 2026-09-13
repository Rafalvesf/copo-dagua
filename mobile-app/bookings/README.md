# Módulo: Bookings (mobile-app)

**Estado:** 🔄 Parcialmente implementado — ver "O que existe vs. o que não existe" abaixo
**Camada:** Mobile (Noivos)
**Consumido por:** Casal

## Objetivo

Ecrã da reserva confirmada: contagem decrescente da janela de 48h, valores, e (por agora) instrução para pagar o sinal fora da plataforma enquanto o stub de pagamento estiver em vigor (`backend/bookings/api.md`, "STUB DE PAGAMENTO").

## O que existe vs. o que não existe (atualizado 2026-08-30)

Este documento foi escrito para o cenário completo (contagem de 48h ligada ao `hold_expires_at` real de `backend/bookings/`). O que foi efetivamente construído, a pedido do utilizador de "adicionar reservas" ao dashboard do casal, é mais simples: `CoupleBookingsScreen` (`features/bookings/screens/couple_bookings_screen.dart`, rota `/bookings`) — uma lista de parceiros contratados com nome, data, valor e estado, sobre um modelo mock novo (`CoupleBooking`, `core/models/models.dart`). **Não** tem contagem decrescente, **não** está ligado à janela de 48h nem ao stub de pagamento (nenhum dos dois existe do lado mock) — é uma listagem, não o ecrã de "reserva em `awaiting_deposit`" descrito no resto deste documento. Esse ecrã específico continua por fazer, ver `tasks.md`.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades |
| [`ui.md`](./ui.md) | Wireframes, incl. o contador "A tua data está reservada durante..." pedido na especificação original |
| [`database.md`](./database.md) | Aponta para `backend/bookings/` |
| [`tasks.md`](./tasks.md) | Backlog, incl. o botão "Pagar sinal" real (Stripe) quando existir |
