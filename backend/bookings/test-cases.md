# Bookings — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Aceitar uma proposta cria uma `booking` em `awaiting_deposit` com `hold_expires_at` ≈ agora + 48h.
- [ ] `booking_number` é único, formato `WED-####`.
- [ ] Admin consegue confirmar o sinal (`admin_confirm_deposit`) só quando `status = awaiting_deposit`.
- [ ] Admin consegue marcar como concluída (`admin_complete_booking`) só quando `status = confirmed`.
- [ ] Uma `booking` com `hold_expires_at` no passado transiciona para `expired` depois do cron correr (ou da função ser chamada manualmente).
- [ ] `booking_events` regista exatamente uma linha por transição, com o `actor_type` correto (`system` para a expiração automática).
- [ ] Nem casal nem parceiro conseguem chamar `admin_confirm_deposit`/`admin_complete_booking` (`forbidden`).
- [ ] Um casal ou parceiro só vê os `bookings` de que é participante; um terceiro utilizador não vê nada.

## Testes de RLS

Ver `database/tests/rls_test_suite.sql`, T34+ — cobre: participante vê o próprio booking, não-participante não vê nada, `admin_confirm_deposit`/`admin_complete_booking` bloqueados para não-admin, transição de estado inválida rejeitada. Mesma situação de todos os testes desde T12: escritos, não corridos contra Postgres local nesta sessão (sem `psql`/Docker), mas a lógica já foi verificada por aplicação direta e revisão cuidadosa contra o Supabase real (ver `database/README.md`).
