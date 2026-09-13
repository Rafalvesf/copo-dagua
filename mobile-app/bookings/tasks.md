# Bookings (mobile-app) — Backlog Técnico

| Item | Prioridade | Nota |
|---|---|---|
| Ecrã de reserva individual com contagem de 48h/`awaiting_deposit` (o que este módulo descrevia originalmente) | Alta | `CoupleBookingsScreen` (2026-08-30) é só uma listagem — ver `README.md`, "O que existe vs. o que não existe". O ecrã de detalhe com contador continua por fazer. |
| Ligar `CoupleBooking` (mock) a `bookings` real | Crítica, deliberadamente adiada | Mesmo bloqueio geral da app — ver `mobile-app/dashboard/tasks.md`. |
| Botão "Pagar sinal" real (Stripe) | Crítica | Substitui o stub — ver `backend/bookings/tasks.md`. |
| Cancelamento pelo casal | Alta | Depende de `cancel_booking_by_couple()` existir (`backend/bookings/tasks.md`). |
