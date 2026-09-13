# Módulo: Bookings (admin-web)

**Estado:** ✅ Documentado (âmbito MVP)
**Camada:** Web admin
**Consumido por:** Administradores

## Objetivo

Dar visibilidade sobre as reservas em curso na plataforma e permitir ao admin avançar o ciclo de vida através dos dois stubs administrativos definidos em `backend/bookings/api.md` — "Confirmar sinal recebido" e "Marcar como concluída" — enquanto `Payments` (Stripe Connect) não existir.

Substitui a placeholder anterior (`components/ComingSoon.tsx` em `/bookings`) agora que `Quotations`/`Bookings` existem (`backend/quotations/`, `backend/bookings/`).

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`ui.md`](./ui.md) | Wireframes |
| [`database.md`](./database.md) | Queries — nenhuma tabela nova |
| [`api.md`](./api.md) | Aponta para `backend/bookings/api.md` |
| [`edge-cases.md`](./edge-cases.md) | Casos limite |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação |
| [`tasks.md`](./tasks.md) | Backlog |

## Resumo executivo

Lista filtrável por `status`, ecrã de detalhe com timeline de `booking_events` (não `audit_logs` — são históricos distintos, ver `backend/bookings/database.md`) e as duas ações stub. Mesmo padrão arquitetural de `admin-web/partners/`, reutilizando `SimpleActionButton`/`ReasonActionForm` de `components/ActionButtons.tsx`.

**Nota importante:** as ações "Confirmar sinal recebido"/"Marcar como concluída" **não processam pagamentos reais** — são um stub administrativo documentado como provisório em `backend/bookings/api.md`. A UI deste módulo deixa isso explícito (ver `ui.md`), para não dar a um admin real a falsa impressão de que confirmar aqui move dinheiro de facto.
