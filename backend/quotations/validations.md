# Quotations — Validações

| Campo | Regra | Onde |
|---|---|---|
| `event_date` (pedido) | Se preenchida, ≥ hoje + 7 dias (RN01) | `request_quote()`, autoritativo |
| `price`, `deposit_amount` (proposta) | `price > 0`; `0 ≤ deposit_amount ≤ price` | `send_proposal()`, autoritativo (`errcode 22023`) |
| `budget_min`/`budget_max` (pedido) | Se ambos preenchidos, `budget_min` ≤ `budget_max` | Não validado no MVP — campos informativos, não bloqueiam nada a jusante |
