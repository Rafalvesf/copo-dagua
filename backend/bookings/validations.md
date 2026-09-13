# Bookings — Validações

Este módulo não introduz validação de campos novos — `total_amount`/`deposit_amount` já são validados como `price`/`deposit_amount` em `send_proposal()` (`backend/quotations/validations.md`) antes de a `booking` sequer existir; `event_date` já é validado (RN01 dos 7 dias) em `request_quote()`.

A única validação própria deste módulo é de **estado**, não de campo: cada função de transição (`admin_confirm_deposit`, `admin_complete_booking`) verifica o `status` atual antes de escrever (`invalid_state`, ver `api.md`) — mesmo padrão de `admin-web/partners/validations.md`.

Desde `010_deposit_cross_reference.sql`, `admin_confirm_deposit` valida também `amount_received = bookings.deposit_amount` (igualdade exata, sem tolerância) — `amount_mismatch` (P0004) caso contrário. Sem tolerância deliberadamente: um valor "quase certo" é mais provavelmente um erro de transcrição do admin do que um pagamento parcial legítimo; se pagamentos parciais vierem a ser um caso real, tratar como uma regra de negócio própria (ex: `payment_overdue`), não como tolerância de arredondamento aqui.
