# Categories (admin-web) — Modelo de Dados

Nenhuma tabela nova. `partner_categories` já existe (`database/migrations/005_partner_profile.sql`) com leitura pública (`select using (true)`) e sem qualquer policy de escrita — faltava a via administrativa, que este módulo adiciona.

## RLS adicional (nova migration)

```sql
create policy "Admins can insert categories"
  on public.partner_categories for insert
  with check (public.is_admin());

create policy "Admins can update categories"
  on public.partner_categories for update
  using (public.is_admin());

grant insert, update on public.partner_categories to authenticated;
```

Sem policy de `delete` — RN01 (nunca eliminar) é garantida ao nível de RLS, não só de UI: mesmo uma chamada direta à tabela por um admin não consegue apagar uma linha.

## Query de contagem de parceiros por categoria

```sql
select c.*, count(ppc.partner_id) as partner_count
from partner_categories c
left join partner_profile_categories ppc on ppc.category_id = c.id
group by c.id
order by c.label_pt;
```
