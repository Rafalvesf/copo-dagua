# Módulo: Dashboard (mobile-app)

**Estado:** ✅ Documentado — **implementado com dados mock**, sem backend real ligado (ver nota abaixo)
**Camada:** Mobile (Noivos)
**Consumido por:** Casal

## Objetivo

`home_feed_screen.dart` é o ecrã principal do casal — hero do casamento com contagem decrescente, atalhos, tarefas próximas, e (2026-08-30) reservas, resumo financeiro, pagamentos a vencer e estado de suporte, pedido explicitamente para espelhar o que já existe no dashboard admin (`admin-web/dashboard/`).

## Nota sobre dados — importante

Ao contrário de `admin-web/`, **nenhuma parte de `mobile-app/`/`partner-app/` está ligada a um Supabase real** — não há sequer `supabase_flutter` no `pubspec.yaml`, nem uma única chamada de rede em toda a app (confirmado 2026-08-30). Todos os dados vêm de `core/mock/mock_backend.dart`, uma classe em memória com valores fixos/semeados. Isto **não é uma omissão deste módulo** — é o estado de toda a app mobile desde sempre; decisão explícita do utilizador (2026-08-30) manter assim por agora em vez de wire-up real, que seria um esforço à parte (autenticação real, sessão, etc.) antes de qualquer dado poder deixar de ser mock.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`ui.md`](./ui.md) | Estrutura do ecrã |
| [`database.md`](./database.md) | Modelos mock envolvidos |
| [`tasks.md`](./tasks.md) | Backlog — sobretudo "ligar a dados reais" |

## Resumo executivo

Novo nesta sessão: `_FinancialSummaryRow` (orçamento gasto/total + nº de parceiros reservados), `_UpcomingPaymentsCard` (despesas por pagar com prazo próximo — "assuntos urgentes" financeiros, complementar às "Próximas tarefas" já existentes), `_BookingsSection` (reservas com parceiros, novo modelo `CoupleBooking`), `_SupportSummaryCard` (pedidos de suporte em aberto, novo modelo `SupportTicket`).

`LiveIndicator` (indicador "ao vivo" equivalente ao `LiveRefresh` do admin-web) foi implementado e depois removido a pedido explícito do utilizador — sem sentido aqui já que não há nada real a atualizar (dados mock estáticos, ver nota acima); mantinha-se só no admin-web, onde os números vêm de um Supabase real.
