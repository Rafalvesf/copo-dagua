# Bookings — Requisitos

## Funcionalidades

- Uma `booking` é criada automaticamente quando uma proposta é aceite (`accept_proposal()`, `backend/quotations/api.md`) — nunca criada diretamente.
- Casal/parceiro/admin veem os bookings de que fazem parte.
- Admin confirma o sinal recebido (stub, ver `api.md`) e marca o serviço como concluído.
- Um booking cuja janela de 48h expira sem confirmação é automaticamente marcado `expired`, libertando a data.

## Fora de âmbito (MVP)

- Cancelamento pelo casal ou pelo parceiro — sem UI Flutter para isto ainda; fica como função por implementar (`tasks.md`), não como decisão de produto adiada.
- Disputas (`status = 'disputed'`) — o valor do enum existe (mesmo vocabulário da spec original de admin panel), mas não há nenhuma função que o produza; fica para quando `admin-web/disputes/` for implementado.
- `payment_overdue` — idem; distinto de `expired` (que é a janela inicial de 48h) porque cobriria pagamentos parcelados/atrasados após a confirmação, um conceito que só faz sentido com `Payments` real.
- Pagamento real via Stripe Connect — ver "stub de pagamento" em `README.md`.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Uma `booking` nasce sempre em `awaiting_deposit`, criada atomicamente com a aceitação da proposta que lhe deu origem (`accept_proposal()`) — nunca um estado intermédio "aceite mas sem booking". |
| RN02 | A reserva fica temporariamente bloqueada durante 48h (`hold_expires_at`) a partir da criação. Valor fixo em código (não em `platform_settings` — ver `admin-web/settings/README.md`). |
| RN03 | Se as 48h passarem sem confirmação, a `booking` expira automaticamente (`pg_cron`, a cada 15 min) — a data volta a ficar disponível (nenhuma outra tabela precisa de saber disto: a "disponibilidade" do parceiro nesse dia é, por agora, simplesmente "não ter uma booking `confirmed`/`awaiting_deposit` não expirada nesse `event_date`" — não há tabela de calendário própria ainda). |
| RN04 | Confirmar o sinal (`awaiting_deposit → confirmed`) e marcar como concluída (`confirmed → completed`) são ações exclusivas de administrador no MVP — stub explícito enquanto `Payments` não existir, ver `README.md`. |
| RN06 | Confirmar o sinal exige que o admin introduza o valor recebido; a transição só acontece se esse valor coincidir exatamente com `bookings.deposit_amount` (`amount_mismatch` caso contrário) — verificação cruzada automática acrescentada 2026-08-30, ver `api.md`. Não substitui Stripe, mas impede uma confirmação sem nenhum valor associado. |
| RN05 | Todas as transições de estado de uma `booking` são registadas em `booking_events`, incluindo transições automáticas (`actor_type = 'system'`) — é o histórico pedido na especificação original (secção 23, "Timeline"), crítico para suporte/disputas mesmo antes de `admin-web/disputes/` existir. |
