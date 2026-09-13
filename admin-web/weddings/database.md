# Weddings (admin-web) — Modelo de Dados

Nenhuma tabela, policy ou migração nova. `weddings` já tem `"Members can view wedding" using (public.is_wedding_member(id) or public.is_admin())` desde `database/migrations/003_wedding.sql` — um admin já lê qualquer wedding sem alterações.

```sql
-- Lista
select id, partner_name_1, partner_name_2, wedding_date, location, status, owner_id
from weddings
order by created_at desc;

-- Detalhe
select * from weddings where id = :id;
select * from wedding_collaborators where wedding_id = :id;
select id, full_name from profiles where id = :owner_id; -- dono
```
