# Bookings — Backlog Técnico e Melhorias Futuras

## Backlog técnico — bloqueadores reais de lançamento

| Item | Prioridade | Nota |
|---|---|---|
| ~~Substituir o stub de pagamento por Stripe Connect real~~ | ~~Crítica~~ | **Resolvido 2026-08-31** — Stripe Connect Express implementado para o sinal (`021_stripe_connect.sql`, três Edge Functions, testado de ponta a ponta contra a Stripe real). `admin_confirm_deposit()`/`admin_complete_booking()` **mantêm-se de propósito** como caminho alternativo (parceiro que prefira ser pago por transferência bancária) — coexistem com o Stripe, não são o único caminho já. Ver `ROADMAP.md`, "Stripe Connect (Express)". |
| ~~Prevenir overbooking (duas bookings ativas do mesmo parceiro na mesma data)~~ | ~~Alta~~ | **Resolvido 2026-09-12** — `056_prevent_partner_overbooking.sql` (usou `P0004` por engano na primeira versão — já em uso para `amount_mismatch`; corrigido para `P0007` em `057_fix_overbooking_errcode.sql`): `accept_proposal()` recusa com `partner_already_booked` (`P0007`) se o parceiro já tiver uma booking `awaiting_deposit`/`confirmed` na mesma `event_date`; índice único parcial (`bookings_partner_active_date_uniq`) como cinto-e-suspensórios contra a corrida real entre dois `accept_proposal()` concorrentes. Verificado ao vivo (`rollback`-wrapped) contra o Supabase real: 1ª aceitação cria a booking, 2ª é bloqueada, exatamente 1 booking sobrevive. Mensagem amigável ligada em `couple_bookings_screen.dart`/`chat_thread_screen.dart`. |
| ~~`cancel_booking_by_couple()`/`cancel_booking_by_partner()`~~ | ~~Alta~~ | **Resolvido 2026-09-12** — `059_cancel_booking.sql`: ambas as funções cancelam uma booking `awaiting_deposit`/`confirmed`, falham o sinal `pending` associado (se ainda não pago), e sinalizam `refund_required` em `booking_events.metadata` quando o sinal já estava pago (sem reembolso automático — fora de âmbito, sem Stripe refund). UI real ligada: "Cancelar reserva" em `couple_bookings_screen.dart` (casal) e `booking_detail_screen.dart` (parceiro), ambos com diálogo de confirmação. Verificado ao vivo: `forbidden` para um estranho (erro `42501` real), cancelamento bem-sucedido com `reason`/`refund_required` corretos em `booking_events`, pagamento pendente marcado `failed`. |
| `admin_confirm_deposit()` não verifica se `hold_expires_at` já passou | Baixa | Ver caso limite em `edge-cases.md`. |

## Melhorias futuras

- `payment_overdue`/`disputed` como estados alcançáveis — quando `Payments`/`admin-web/disputes/` existirem.
- Verificação de disponibilidade do parceiro num calendário próprio, em vez de inferida de `bookings` ativas.
- ~~`platform_settings.default_booking_hold_hours` configurável~~ — **já resolvido** desde `019_platform_settings.sql`/`020_payments.sql` (2026-08-31): `accept_proposal()` lê o valor de `platform_settings`, editável em `/admin/settings` (só `super_admin`). Esta nota tinha ficado por remover.
