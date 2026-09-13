# Dashboard (admin-web) — Modelo de Dados

Nenhuma tabela, policy ou migração nova — só leitura agregada sobre `profiles`, `partner_profiles`, `weddings`, `bookings`, `quote_requests`, `proposals` e `audit_logs`, todas já legíveis por `is_admin()`.

```sql
select count(*) from profiles where role = 'couple';
select count(*) from partner_profiles where status = 'published';
select count(*) from partner_profiles where status = 'pending_review';
select count(*) from weddings;
select count(*) from bookings where status = 'confirmed';
select count(*) from bookings where status = 'awaiting_deposit';
select total_amount from bookings where status in ('confirmed', 'completed'); -- somado em JS, ver tasks.md

-- Assuntos urgentes
select id, booking_number, hold_expires_at from bookings
  where status = 'awaiting_deposit' and hold_expires_at < now() + interval '6 hours'
  order by hold_expires_at asc;
select id, business_name, submitted_at from partner_profiles
  where status = 'pending_review' and submitted_at < now() - interval '3 days'
  order by submitted_at asc;
select id, booking_number, status from bookings where status in ('disputed', 'payment_overdue');

-- Funil
select count(*) from quote_requests;
select count(*) from proposals;
select count(*) from proposals where status = 'accepted';
select count(*) from bookings;

select al.*, p.full_name as actor_name
from audit_logs al
join profiles p on p.id = al.actor_id
order by al.created_at desc
limit 10;
```

`sum(total_amount)` é feito em JavaScript sobre as linhas devolvidas, não `sum()` em SQL — o cliente Supabase JS não expõe agregados SQL diretamente na query builder sem uma função/view Postgres própria; ao volume de dados do MVP, somar em JS é simples e suficiente. Revisitar como função/view se o número de reservas confirmadas crescer o suficiente para tornar isto lento (ver `tasks.md`).
