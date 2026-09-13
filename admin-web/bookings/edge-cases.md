# Bookings (admin-web) — Casos Limite

- Admin abre uma booking `awaiting_deposit` cuja `hold_expires_at` já passou, mas o `pg_cron` ainda não correu (até 15 min de atraso, ver `backend/bookings/edge-cases.md`) → o botão "Confirmar sinal recebido" ainda aparece e ainda funciona (a função não verifica `hold_expires_at`, só `status`). Comportamento aceite no MVP, documentado também no lado backend.
- Dois admins abrem a mesma booking `awaiting_deposit` e ambos clicam em confirmar → o segundo recebe `invalid_state` (já `confirmed`), mesmo tratamento que `admin-web/partners/edge-cases.md`.
- Booking sem nenhuma entrada em `booking_events` além da criação (nenhuma ação administrativa ainda) → histórico mostra só "Reserva criada", sem erro.
- Admin introduz o valor errado (ex: transcreve mal a referência bancária) → `amount_mismatch`, mensagem clara, formulário permanece aberto para corrigir e tentar de novo — nunca confirma "porque o admin quis", mesmo que o admin tente várias vezes.
- Admin introduz o valor com vírgula decimal em vez de ponto (`100,00` em vez de `100.00`) → o `<input type="number">` do browser já impede isto ao nível do teclado/validação nativa; não há tratamento adicional no servidor.
