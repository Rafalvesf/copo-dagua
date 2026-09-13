# Bookings — Máquina de Estados

```
                    accept_proposal()
                          │
                          ▼
                 awaiting_deposit ──────────────┐
                    │           │                │
   admin_confirm_deposit()   hold_expires_at      │ (sem função — ver tasks.md)
                    │        ultrapassado          │
                    │        (pg_cron, 15/15min)   │
                    ▼           ▼                  ▼
                confirmed    expired      cancelled_by_couple
                    │                     cancelled_by_partner
       admin_complete_booking()
                    │
                    ▼
                completed
```

`payment_overdue` e `disputed` existem no enum (`booking_status`) mas **nenhuma função os produz no MVP** — reservados para quando `Payments`/`admin-web/disputes/` existirem (ver `requirements.md`, "Fora de âmbito"). Documentados aqui para que o enum não precise de `alter type` quando esses módulos chegarem.

Ao contrário de `quote_requests`/`proposals` (`backend/quotations/state.md`), esta máquina de estados tem uma transição **automática e temporizada** (`awaiting_deposit → expired`) — é a única do projeto até agora que não é disparada por uma ação de utilizador, daí `pg_cron` em vez de só funções `security definer` chamadas via `supabase.rpc()`.
