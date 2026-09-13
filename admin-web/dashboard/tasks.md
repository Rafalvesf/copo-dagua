# Dashboard (admin-web) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Pedidos de suporte pendentes | Alta (assim que existir) | Depende de um sistema de tickets de suporte (`backend/support/`, `admin-web/support/`) — nenhum dos dois existe. Pedido explicitamente 2026-08-30, deixado de fora por não haver dado nenhum. |
| `sum(total_amount)` em JS em vez de SQL | Baixa | Suficiente ao volume atual; migrar para uma função/view Postgres (`sum()` real) se o número de reservas confirmadas crescer o suficiente para tornar a leitura de todas as linhas lenta. |
| Gráfico de reservas por período, donut de estado | Média | Precisa de volume real de dados para ser informativo, não só da tabela existir. |
| Percentagens "vs. período anterior" em qualquer KPI | Baixa | Tecnicamente simples (`created_at` já existe em tudo), mas cada KPI adicional multiplica o que há para manter certo — adiar até haver pedido real. |
| Upgrade de "live count" por polling para Supabase Realtime | Baixa | O polling atual (`components/LiveRefresh.tsx`, 20s) é suficiente para um dashboard administrativo; Realtime (websockets, `postgres_changes`) traria latência menor mas exige adicionar as tabelas a uma publication e gerir subscrições/reconexão no cliente — só vale a pena se 20s de atraso se tornar um problema real. |

## Melhorias futuras

- Filtro de período (7/30/90 dias) nos KPIs — mais relevante agora que "Volume confirmado" e o funil de reservas têm variação temporal real.
- KPIs de GMV/receita real, não "Volume confirmado" — quando `Payments` (Stripe Connect) existir.
