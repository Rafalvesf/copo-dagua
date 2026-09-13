# Dashboard (mobile-app) — UI

```
┌───────────────────────────┐
│  [Hero: nomes, contagem]     │
│                              │
│  [Orçamento] [Convid.] [Lugares] │
│                              │
│  Orçamento gasto  Parceiros    │
│  8.450€/25.000€   reservados: 3│
│                              │
│  ── Assuntos urgentes ──      │
│  Sinal DJ — 600€ até 15 Set   │
│                              │
│  ── Reservas ──      Ver todas → │
│  Miguel Fotografias    1.450€ │
│  Quinta da Regaleira   8.200€ │
│                              │
│  Sem pedidos de suporte       │
│                              │
│  Próximas tarefas             │
│  ...                          │
└───────────────────────────┘
```

O card "Reservas" é clicável (`Ver todas →`) e abre `CoupleBookingsScreen` (`/bookings`) com a lista completa — mesmo padrão de "Próximas tarefas → Ver todas" já existente para a checklist.

## Componentes novos (2026-08-30)

| Componente | Ficheiro |
|---|---|
| `_FinancialSummaryRow`, `_SummaryTile` | `home_feed_screen.dart` |
| `_UpcomingPaymentsCard` | `home_feed_screen.dart` |
| `_BookingsSection` (agora clicável → `/bookings`) | `home_feed_screen.dart` |
| `_SupportSummaryCard` | `home_feed_screen.dart` |
| `CoupleBookingsScreen` | `features/bookings/screens/couple_bookings_screen.dart` — lista completa de reservas, rota `/bookings` |

Um indicador "ao vivo" (`LiveIndicator`) foi implementado e depois removido a pedido explícito — sem sentido em dados mock estáticos, ver `README.md`.
