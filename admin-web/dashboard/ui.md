# Dashboard (admin-web) — UI

**2026-08-30 — redesenhado a partir de um mockup fornecido pelo utilizador** ("Copo d'Água Admin", paleta verde-oliva/creme — a mesma de `mobile-app/app/lib/core/theme/app_theme.dart`, que a versão anterior deste ecrã, lavanda/roxo, nunca tinha batido certo apesar do comentário em `globals.css` já dizer que devia). Layout novo:

```
┌──────────────────────────────────────────────────────────────────┐
│ Olá, Rafael!                                    ● Atualizado há 4s│
│ Aqui está o que está a acontecer na plataforma hoje.               │
│                                                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│ │ Casais   │ │ Parceiros│ │ Reservas │ │ Volume   │  4 KpiCard,   │
│ │ 1.284    │ │ 143      │ │ 30 dias  │ │ 30 dias  │  cada um com  │
│ │ ↑12.4% ╱╲│ │ ↓8.2%  ╱╲│ │ 82  ↓17% │ │ 38.420€  │  delta % vs.  │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘  período      │
│                                                        anterior +  │
│                                                        sparkline   │
│ ┌────────────────────────────┐ ┌─────────────────────┐            │
│ │ Reservas — últimos 30 dias │ │ Estado das reservas │            │
│ │  ▁▂▃▅▇▆▄▂▃▅▇▆▄▂▃▅▇▆▄▂▃▅▇   │ │    ╭──╮  Confirm. 48%│            │
│ │  (barras diárias reais)    │ │   ╱    ╲ A aguardar 21%│          │
│ └────────────────────────────┘ └─────────────────────┘            │
│                                                                     │
│ ── Assuntos urgentes (2) ──────────────────────────────────────── │
│  #WED-1042 — janela de sinal expira em 30 Ago 22:00                │
│  Quinta das Rosas — a aguardar aprovação desde 25 Ago (5 dias)     │
│                                                                     │
│ ┌────────────────────────────┐ ┌─────────────────────┐            │
│ │ Reservas recentes      →   │ │ Ações rápidas        │            │
│ │  #WED-1042 Rita&Miguel ... │ │  Aprovar parceiro    │            │
│ │  (tabela, últimas 8)       │ │  Nova categoria       │            │
│ │                             │ ├─────────────────────┤            │
│ │                             │ │ Parceiros aguardam   │            │
│ │                             │ │ aprovação — 12       │            │
│ │                             │ │ [Rever parceiros →]  │            │
│ └────────────────────────────┘ └─────────────────────┘            │
│                                                                     │
│ ── Funil de reservas ────────────────────────────────────────────│
│    12          8          5          5          3                 │
│  Pedidos    Propostas   Propostas  Reservas   Reservas             │
│  orçamento  enviadas    aceites    criadas    confirmadas          │
│  (todos os números aqui são totais desde sempre, não 30 dias —     │
│   ao contrário dos KpiCard e do gráfico/donut acima)               │
│                                                                     │
│ ── Atividade recente ────────────────────────────────────────── │
│  Admin Rafael aprovou Estúdio Luz & Sombra         há 4 min       │
│                                                                     │
│ ── Suporte: ainda não disponível ──────────────────────────────  │
└──────────────────────────────────────────────────────────────────┘
```

O indicador "● Atualizado há Ns" (`LiveRefresh`) fica sempre visível no topo direito — é o "live count" pedido: o dashboard refaz as queries a cada 20s sem o admin precisar de recarregar a página.

**Escala temporal — importante para não misturar números incomparáveis:** os 4 `KpiCard`, o gráfico de barras e o donut são todos escopados aos últimos 30 dias (contagem/soma no período + delta % vs. os 30 dias anteriores). O funil, a atividade recente e "Assuntos urgentes" continuam com a semântica antiga (totais desde sempre / o que está pendente agora). Nunca comparar um número de um bloco com o de outro sem confirmar o âmbito temporal de cada um primeiro.

Os deltas de "Casais registados" e "Parceiros publicados" comparam **novos registos/aprovações no período**, não o total acumulado (o número grande do cartão continua a ser o total acumulado) — ver comentário em `page.tsx`, função `deltaPct`. O delta de "Parceiros publicados" usa `reviewed_at` como aproximação de "quando ficou publicado" (não há coluna de histórico de estado) — pode estar ligeiramente errado para um parceiro suspenso e depois restaurado, aceitável para uma tendência aproximada, não para um valor financeiro.

"Assuntos urgentes" só aparece com fundo destacado (`--status-rejected-bg`) quando há algo a mostrar; com zero itens, mostra "Nada a precisar de atenção imediata" em fundo neutro — nunca desaparece por completo (o admin não deve ter de adivinhar se a secção falhou a carregar ou se está genuinamente vazia).

A secção de Suporte é permanentemente um aviso, não um placeholder de dados — deixa claro que a ausência não é um bug.

## Componentes

| Componente | Descrição |
|---|---|
| `KpiCard` | Ícone + label + número grande + delta % (verde/vermelho) + `Sparkline`, variante com link (`components/KpiCard.tsx`) |
| `Sparkline` | Mini-gráfico de tendência em SVG puro, sem dependência externa (`components/Sparkline.tsx`) |
| `BookingsBarChart` | Barras diárias em SVG puro (`components/BookingsBarChart.tsx`) |
| `StatusDonut` | Donut em SVG puro (`stroke-dasharray` por segmento) + legenda (`components/StatusDonut.tsx`) |
| `LiveRefresh` | Indicador + polling de 20s (`components/LiveRefresh.tsx`) |
| `UrgentMattersList` | Lista heterogénea (reservas a expirar, aprovações atrasadas, reservas sinalizadas), cada item com o seu próprio link de contexto |
| `FunnelSteps` | Sequência de números com label, sem gráfico |
| `ActivityFeed` | Lista de `audit_logs`, reutiliza `AuditLogTimeline` de `admin-web/partners/ui.md` generalizado para qualquer `target_table` |

Nenhum destes gráficos usa uma biblioteca de charting — todo o resto do `admin-web` já era assim (estilos inline, sem componentes de UI externos), e o volume de dados de um admin panel não justifica o peso extra. Se o volume real vier a exigir mais tipos de gráfico, essa é a altura certa para reconsiderar.
