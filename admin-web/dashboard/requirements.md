# Dashboard (admin-web) — Requisitos

## KPIs incluídos (dados reais)

| KPI | Query |
|---|---|
| Casais registados | `count(profiles) where role = 'couple'` |
| Parceiros publicados | `count(partner_profiles) where status = 'published'` |
| Parceiros a aguardar aprovação | `count(partner_profiles) where status = 'pending_review'` — link para `/partners?status=pending_review` |
| Casamentos criados | `count(weddings)` |
| Reservas confirmadas | `count(bookings) where status = 'confirmed'` — link para `/bookings?status=confirmed` |
| Reservas a aguardar sinal | `count(bookings) where status = 'awaiting_deposit'` — link para `/bookings?status=awaiting_deposit`. Adicionado 2026-08-30. |
| Volume confirmado (€) | `sum(bookings.total_amount) where status in ('confirmed', 'completed')` — ver "Decisão revista" abaixo. Adicionado 2026-08-30. |

## Decisão revista (2026-08-30) — "Volume confirmado" deixou de estar excluído

Este documento excluía originalmente qualquer soma de `bookings.total_amount`, com o argumento de que somar valores fingiria haver dinheiro real a passar pela plataforma quando a confirmação é só um stub administrativo (`backend/bookings/api.md`). Revisto depois de `admin_confirm_deposit()` passar a exigir verificação cruzada do valor recebido (`database/migrations/010_deposit_cross_reference.sql`): uma reserva `confirmed`/`completed` já não é "um admin clicou sim" sem mais — é uma reserva cujo valor foi verificado contra o que o admin introduziu como recebido. O número ainda não representa pagamento processado por Stripe, mas representa uma decisão administrativa verificada, não um clique cego. Chamado **"Volume confirmado"**, não "GMV" ou "Receita" — para não sugerir mais rigor financeiro do que o que existe.

## Assuntos urgentes

Secção separada dos KPIs, para chamar a atenção do admin sem precisar de vasculhar cada lista:

- Reservas `awaiting_deposit` cuja `hold_expires_at` está a menos de 6h — RN02.
- Perfis de parceiro `pending_review` há mais de 3 dias — RN03.
- Reservas `disputed`/`payment_overdue` — hoje sempre vazio (nenhuma função produz estes estados ainda, ver `backend/bookings/state.md`), mas a query já existe para quando existirem.

## Funil de reservas

Contagens simples (não percentagens de conversão, ver `tasks.md`) ao longo de `quote_requests → proposals → proposals aceites → bookings → bookings confirmadas` — a primeira vista de funil da plataforma, possível desde que `backend/quotations/`/`backend/bookings/` existem.

## Atualização automática ("live count")

O dashboard atualiza-se sozinho a cada 20s (`components/LiveRefresh.tsx`) — pedido explícito do utilizador ("live count"). Implementado por **polling** (`router.refresh()` periódico), não por Supabase Realtime/websockets — mais simples, sem precisar de adicionar tabelas a uma publication nem de gerir subscrições no cliente; suficiente para um dashboard administrativo onde alguns segundos de atraso não têm impacto. Ver `tasks.md` para a alternativa com Realtime, se algum dia for necessária latência menor.

## Atividade recente

Últimas 10 entradas de `audit_logs`, com `actor_id` resolvido para `full_name` via join a `profiles`.

## Explicitamente excluído (sem dados reais)

| Pedido | Por que fica de fora |
|---|---|
| Pedidos de suporte pendentes | Não existe nenhum sistema de tickets de suporte em nenhuma parte da plataforma — `admin-web/support/` continua um placeholder (`components/ComingSoon.tsx`). Pedido explicitamente pelo utilizador (2026-08-30) a par de bookings/sales/urgent matters/live count — só este item ficou de fora, por não haver dado nenhum para mostrar, nem inventado nem real. |
| Gráficos de reservas por período, donut de estado de reservas | Precisam de volume real de dados para serem informativos, não só de a tabela existir; adiado até haver reservas orgânicas (ver `admin-web/bookings/dependencies.md`, "Bloqueios conhecidos") |
| Percentagens "vs. mês anterior" em qualquer KPI | Adiado — não é tecnicamente impossível, mas não é o mínimo necessário para o MVP; ver `tasks.md`. |

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Nenhum KPI mostra um número inventado ou um placeholder tipo "0" a fingir ser um dado real — um KPI sem dados reais por trás simplesmente não existe no dashboard até a entidade que o alimenta existir (caso de "Pedidos de suporte", acima). |
| RN02 | Uma reserva entra em "Assuntos urgentes" por prazo (`hold_expires_at` a menos de `URGENT_HOLD_WINDOW_HOURS` = 6h) — valor fixo em código, mesmo padrão de "sem `platform_settings` ainda" já usado para o próprio prazo de 48h (`backend/bookings/requirements.md`, RN02). |
| RN03 | Um perfil de parceiro entra em "Assuntos urgentes" por estar `pending_review` há mais de `STALE_APPROVAL_DAYS` = 3 dias — mesmo raciocínio de RN02. |
