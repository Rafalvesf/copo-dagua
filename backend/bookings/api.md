# Bookings — API

Leitura direta via SDK. Escrita só via funções `security definer` (`database/migrations/009_quotations_bookings.sql`, `010_deposit_cross_reference.sql`).

| Função | Chamador | Efeito | Erros |
|---|---|---|---|
| `accept_proposal(proposal_id)` | Casal | Cria a `booking` (ver `backend/quotations/api.md`) | — |
| `admin_confirm_deposit(booking_id, amount_received)` | **Admin (stub com verificação cruzada)** | Cruza `amount_received` com `bookings.deposit_amount`; só se coincidirem: `awaiting_deposit → confirmed`, `confirmed_at = now()` | `forbidden`, `not_found`, `invalid_state`, `amount_mismatch` (P0004) |
| `admin_complete_booking(booking_id)` | **Admin (stub)** | `confirmed → completed`, `completed_at = now()` | `forbidden`, `not_found`, `invalid_state` |
| `expire_overdue_bookings()` | **Só `pg_cron`** — nenhum role de cliente tem `execute` | `awaiting_deposit → expired` para todas as bookings com `hold_expires_at < now()` | N/A (chamada em lote, não por id) |

## STUB DE PAGAMENTO — ler antes de usar em produção

`admin_confirm_deposit()` e `admin_complete_booking()` são **placeholders manuais**, não integração de pagamento. Não há Stripe, não há verificação bancária automática de que dinheiro real mudou de mãos — um admin vê a prova de pagamento por fora da plataforma (ex: referência de transferência bancária) e introduz o valor que recebeu.

**Verificação cruzada automática (2026-08-30):** `admin_confirm_deposit()` deixou de confiar cegamente no clique do admin — agora exige o valor recebido como parâmetro e compara-o automaticamente com `bookings.deposit_amount`; só transiciona o estado se coincidirem exatamente (`amount_mismatch`, P0004, caso contrário). Isto não é pagamento real (continua sem Stripe), mas fecha um risco real do stub anterior: um admin conseguia confirmar "sinal recebido" sem introduzir nenhum valor, sem qualquer verificação. Agora a decisão de avançar deixa de ser manual — é automática, condicionada ao cruzamento correto do valor introduzido pelo humano.

Isto é intencional para desbloquear o teste do resto do ciclo de vida (RN04 de `requirements.md`), mas **não deve chegar a produção real sem ser substituído por Stripe Connect**. Ver `tasks.md` para o plano de substituição.

## Expiração automática

```sql
select cron.schedule('expire-overdue-bookings', '*/15 * * * *', 'select public.expire_overdue_bookings();');
```

Corre como o utilizador que agendou o job (via `supabase db query --linked`, tipicamente um role com privilégios equivalentes a `postgres`), não via PostgREST — por isso `expire_overdue_bookings()` não tem, nem precisa de, `grant execute` a `authenticated`/`anon` (ver `database.md`).
