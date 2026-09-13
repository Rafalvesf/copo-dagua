# Bookings (admin-web) — Modelo de Dados

Nenhuma tabela nova. `bookings`/`booking_events` já existem com RLS que já concede leitura a `is_admin()` (`database/migrations/009_quotations_bookings.sql`).

```sql
-- Lista
select id, booking_number, couple_id, partner_id, event_date, total_amount, status
from bookings
order by created_at desc;

-- Detalhe
select * from bookings where id = :id;
select * from booking_events where booking_id = :id order by created_at desc;
select id, full_name from profiles where id = :couple_id;
select id, business_name from partner_profiles where id = :partner_id;
```

Escrita só via `admin_confirm_deposit()`/`admin_complete_booking()` (`backend/bookings/api.md`) — nunca `update` direto, mesmo princípio de `admin-web/partners/database.md`.
