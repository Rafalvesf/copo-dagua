# Módulo: Bookings

**Estado:** ✅ Documentado (âmbito MVP — ver "stub de pagamento" abaixo)
**Camada:** Backend (Supabase — funções `security definer`, RLS, `pg_cron`)
**Consumido por:** `mobile-app/bookings/`, `partner-app/bookings/` (documentação sem código Flutter nesta ronda), `admin-web/bookings/` (com código)

## Objetivo

Modelar a reserva confirmada de um serviço — o que acontece depois de um casal aceitar uma proposta (`backend/quotations/`) até ao serviço estar concluído. É a entidade central da plataforma (`README.md` raiz, secção "Relação central"): liga casal, parceiro, casamento e (no futuro) pagamento e avaliação.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`database.md`](./database.md) | Modelo de dados e RLS |
| [`api.md`](./api.md) | Funções `security definer`, incl. o stub de pagamento |
| [`state.md`](./state.md) | Máquina de estados completa |
| [`validations.md`](./validations.md) | Validações |
| [`edge-cases.md`](./edge-cases.md) | Casos limite |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e testes |
| [`tasks.md`](./tasks.md) | Backlog técnico — inclui a substituição do stub de pagamento |
| [`dependencies.md`](./dependencies.md) | Dependências |

## Resumo executivo

Uma `booking` nasce em `awaiting_deposit` no momento em que `accept_proposal()` (`backend/quotations/api.md`) é chamado — nunca antes. Tem uma janela de 48h para o sinal ser pago (`hold_expires_at`), findas as quais um job `pg_cron` (`expire_overdue_bookings()`, a cada 15 min) transiciona automaticamente para `expired`. `booking_events` regista cada transição (criação, expiração, confirmação), incluindo quem/o quê a causou (`actor_type`: `couple`/`partner`/`admin`/`system`) — é a "timeline" pedida na especificação original de admin panel (secção 23).

**Decisão de arquitetura mais importante — stub de pagamento:** a transição `awaiting_deposit → confirmed` deveria acontecer automaticamente quando o sinal é pago via Stripe Connect, mas `Payments` não existe ainda (`mobile-app/payments/stripe-connect.md` continua ⏳, decisão de arquitetura crítica ainda por tomar — Standard vs. Express, escrow vs. destination charge). Em vez de bloquear todo este módulo à espera dessa decisão, `admin_confirm_deposit()` é um stub explícito, só-admin, documentado em maiúsculas como provisório: confirma manualmente "o sinal foi pago" sem processar dinheiro nenhum. Isto desbloqueia testar o resto do ciclo de vida (confirmada → concluída) sem fingir que há pagamentos reais.
