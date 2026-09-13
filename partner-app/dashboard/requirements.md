# Dashboard (partner-app) — Requisitos

## Funcionalidades

- Reservas pendentes: contagem de bookings `novo` + `emAnalise`.
- Vendas este mês: `PartnerStats.revenue` (novo campo).
- Assuntos urgentes: bookings `novo` (sem qualquer resposta ainda) — lista os primeiros 3, com nome do cliente.
- Suporte: contagem de pedidos não `resolved`.
- Indicador "ao vivo": `LiveIndicator`, mesmo componente do lado casal.
- Grelha de módulos existente (Pedidos, Reservas, Calendário, Perfil, Contratos, Pagamentos) mantém-se abaixo, inalterada.

## Fora de âmbito

- Qualquer dado real — ver `README.md`.
- Responder a um pedido urgente a partir do dashboard — o card é só um atalho informativo; a ação em si vive em `partner-app/quotations/` (documentado, sem código Flutter ainda — ver `partner-app/quotations/tasks.md`).

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | "Assuntos urgentes" usa `BookingStatus.novo` especificamente (não `emAnalise`) — um pedido `emAnalise` já teve alguma atenção do parceiro; só `novo` significa "ninguém respondeu ainda", que é o que torna algo urgente em vez de só pendente. |
| RN02 | O card de assuntos urgentes só aparece quando há pelo menos um item — mesmo princípio de `mobile-app/dashboard/requirements.md` RN02. |
