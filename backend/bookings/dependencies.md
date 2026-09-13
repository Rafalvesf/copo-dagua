# Bookings — Dependências

## Este módulo depende de

| Módulo | Como |
|---|---|
| `backend/quotations/` | `accept_proposal()` cria a `booking`; `bookings.proposal_id` |
| `backend/auth/` | `is_admin()` |
| `docs/architecture/RLS_POLICY.md` | Padrão `security definer` |
| Extensão `pg_cron` (nativa Supabase) | `expire_overdue_bookings()` agendada a cada 15 min |

## Módulos que dependem deste

| Módulo | Como |
|---|---|
| `mobile-app/bookings/`, `partner-app/bookings/` (⏳, docs sem código Flutter) | Consomem `bookings`/`booking_events` diretamente |
| `admin-web/bookings/` | Lista + detalhe com timeline, ações de confirmar sinal/concluir |
| `admin-web/dashboard/` | KPI "Reservas confirmadas" |
| `Payments` (⏳) | Vai substituir o stub de pagamento — ver `tasks.md` |
| `admin-web/disputes/` (⏳) | Vai consumir `booking_events` como parte da timeline de uma disputa |

## Bloqueios conhecidos

- **Sem projeto Supabase real com dados de teste orgânicos** — não há ainda UI de casal/parceiro para gerar `quote_requests`/`proposals`/`bookings` naturalmente; testar este módulo exige inserir dados via SQL diretamente (ver verificação em `admin-web/bookings/tasks.md`).
- **Stub de pagamento** — ver `tasks.md`, item crítico.
