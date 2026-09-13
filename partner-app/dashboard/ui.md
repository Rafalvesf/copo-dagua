# Dashboard (partner-app) — UI

```
┌───────────────────────────┐
│ PAINEL                        ⋮│
│ Olá, Miguel, o que precisas    │
│ hoje?                          │
│                                 │
│ Reservas       Vendas este     │
│ pendentes: 2   mês: 3.250€     │
│                                 │
│ ── Assuntos urgentes (1) ──    │
│ Mariana & Pedro — sem resposta │
│                                 │
│ Sem pedidos de suporte em      │
│ aberto                         │
│                                 │
│ [grelha de módulos existente]  │
└───────────────────────────┘
```

O tile "Reservas" da grelha (antes sem ação, mostrava "Em breve.") passou a abrir `PartnerBookingsScreen` no separador "Confirmados" (`/partner-requests?segment=confirmados`) — distinto do tile "Pedidos de orçamento", que abre no separador "Recebidos". Mesmo ecrã real, dois pontos de entrada.

## Componentes novos (2026-08-30)

| Componente | Ficheiro |
|---|---|
| `_PartnerDashboardSummary` | `partner_home_screen.dart` |
| `_MetricCard` | `partner_home_screen.dart` |
| `_UrgentMattersCard` | `partner_home_screen.dart` |
| `_SupportSummaryCard` | `partner_home_screen.dart` |

Um indicador "ao vivo" (`LiveIndicator`) foi implementado e depois removido a pedido explícito — sem sentido em dados mock estáticos, ver `README.md`.
