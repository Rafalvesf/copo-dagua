# Quotations — API

Leitura direta via SDK Supabase (RLS garante isolamento). Escrita só via três funções Postgres `security definer` (`database/migrations/009_quotations_bookings.sql`) — mesmo padrão de `admin-web/partners/api.md`.

| Função | Chamador | Efeito | Erros |
|---|---|---|---|
| `request_quote(partner_id, wedding_id, event_date, location, budget_min, budget_max, message)` | Casal | Cria `quote_requests` em `pending` | `forbidden` (42501 — não é membro do wedding, ou perfil de parceiro não visível), `too_late` (P0003 — RN01) |
| `send_proposal(quote_request_id, title, description, price, deposit_amount, payment_terms)` | Parceiro | Cria `proposals` em `sent`, transiciona `quote_requests.status → proposal_sent` | `not_found` (P0002), `forbidden` (42501 — não é o parceiro do pedido), `invalid_state` (P0001 — já tem proposta enviada, RN04) |
| `accept_proposal(proposal_id)` | Casal | Transiciona `proposals.status → accepted`, `quote_requests.status → accepted`, **cria uma `booking`** (ver `backend/bookings/api.md`) | `not_found`, `forbidden` (não é o casal do pedido), `invalid_state` (proposta já decidida) |

Não existe `decline_proposal()` nem `expire_quote_request()` explícitos no MVP — recusar é feito no cliente simplesmente não aceitando (o `quote_request` fica `proposal_sent` indefinidamente); expiração automática de pedidos não respondidos fica como melhoria futura (ver `tasks.md`), ao contrário de `bookings` onde a expiração de 48h é crítica ao negócio (dinheiro em jogo, data bloqueada) e por isso tem `pg_cron` desde o MVP.

## Autorização

Mesma verificação explícita dentro de cada função (não confiar só em RLS) que `admin-web/partners/api.md` já documenta como padrão — `request_quote` verifica `is_wedding_member()`, `send_proposal`/`accept_proposal` verificam que o chamador é o `partner_id`/`couple_id` da linha.
