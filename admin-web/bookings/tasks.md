# Bookings (admin-web) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Substituir as ações stub quando `Payments` existir | Crítica | Ver `backend/bookings/tasks.md`. |
| Ação de cancelar reserva | Alta | Depende de `cancel_booking_by_*()` existir (`backend/bookings/tasks.md`). |
| Mostrar `quote_requests`/`proposals` que antecederam a reserva no detalhe | Baixa | Contexto útil para suporte, não crítico para o MVP. |

## Melhorias futuras

- KPI de GMV/receita — depende de `Payments` real, não do stub (ver `admin-web/dashboard/tasks.md`).
