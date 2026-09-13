# Dashboard (mobile-app) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| **Ligar a Supabase real** | Crítica, mas deliberadamente adiada | Nenhuma parte de `mobile-app/` está ligada a um backend real — nem autenticação. Decisão explícita do utilizador (2026-08-30) de manter mock por agora; este item cobre toda a app, não só o dashboard. Ver `README.md`. |
| `SupportTicket`/`CoupleBooking` sem contraparte real desenhada | Média | `backend/support/` não existe (`admin-web/support/` também é placeholder); `CoupleBooking` deve mapear para `bookings` (`backend/bookings/`) quando ligado. |
| `_UpcomingPaymentsCard` não distingue "hoje/amanhã" de "daqui a 3 semanas" | Baixa | Mostra sempre os 3 mais próximos, sem indicar urgência relativa — suficiente para o MVP mock. |

## Melhorias futuras

- Countdown de `hold_expires_at` para reservas em `awaiting_deposit` (mesma janela de 48h de `backend/bookings/`) — só faz sentido com dados reais, `CoupleBooking.status` hoje só usa os valores mock de `BookingStatus`, que não incluem esse estado.
