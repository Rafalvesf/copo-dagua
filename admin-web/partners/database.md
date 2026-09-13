# Partners (admin-web) — Modelo de Dados

Este módulo **não introduz tabelas novas para dados de parceiros** — `partner_profiles`, `partner_verification`, `partner_categories`, `partner_profile_categories` e `partner_portfolio_items` já existem, com RLS que já concede leitura e escrita a `is_admin()` (ver `partner-app/profile/database.md`, `database/migrations/005_partner_profile.sql`). A única tabela nova é `audit_logs`, genérica e reutilizável por qualquer módulo `admin-web/` futuro, não específica de parceiros.

## `audit_logs` (nova)

```sql
create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid not null references public.profiles(id),
  action text not null,
  target_table text not null,
  target_id uuid not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index audit_logs_target_idx on public.audit_logs (target_table, target_id);
create index audit_logs_actor_idx on public.audit_logs (actor_id, created_at);
```

Ver migração completa (incl. RLS) em `database/migrations/006_admin_audit_log.sql`.

- `action` é texto livre em vez de enum — este módulo usa `approve_partner`, `reject_partner`, `suspend_partner`, `restore_partner`, mas a tabela é genérica para qualquer ação administrativa futura (moderar review, resolver denúncia) sem precisar de `alter type` a cada módulo novo. Trade-off consciente: perde-se validação ao nível da BD do valor de `action`, ganha-se não acoplar esta tabela transversal ao ciclo de vida de cada módulo. Se o volume de ações justificar, revisitar como enum ou tabela de lookup — ver `tasks.md`.
- `metadata jsonb` guarda o necessário para reconstruir o "porquê" sem sobrecarregar a tabela com colunas específicas de cada ação: `{ "previous_status": "pending_review", "reason": "..." }` para rejeitar/suspender, `{ "previous_status": "pending_review" }` para aprovar.
- Nunca há `update`/`delete` — nem policy, nem grant. Um registo de auditoria incorreto exige uma nova entrada corretiva, nunca a edição da original (mesmo princípio de nunca apagar dados financeiros — ver `README.md` raiz, "O que NÃO quero").

## Row Level Security

```sql
alter table public.audit_logs enable row level security;

create policy "Admins can view audit logs"
  on public.audit_logs for select
  using (public.is_admin());

create policy "Admins can insert audit logs"
  on public.audit_logs for insert
  with check (public.is_admin() and actor_id = auth.uid());

grant select, insert on public.audit_logs to authenticated;
```

`actor_id = auth.uid()` no `with check` impede um admin de gravar uma entrada de auditoria em nome de outro admin — quem executa a ação é sempre quem assina o registo.

## Queries usadas por este módulo

Todas via SDK Supabase no cliente (mesmo padrão de `partner-app/profile/api.md` — RLS garante o isolamento, não há backend próprio):

```sql
-- Lista, filtrada por estado
select id, business_name, status, submitted_at
from partner_profiles
where status = :status
order by submitted_at asc; -- mais antigo primeiro = fila FIFO de revisão

-- Detalhe
select * from partner_profiles where id = :id;
select * from partner_verification where partner_id = :id;
select * from partner_profile_categories join partner_categories ... where partner_id = :id;
select * from partner_portfolio_items where partner_id = :id order by position;

-- Histórico de decisões deste parceiro
select * from audit_logs
where target_table = 'partner_profiles' and target_id = :id
order by created_at desc;
```

Nenhuma destas é uma escrita — as escritas (mudança de `status` + linha em `audit_logs`, atomicamente) passam sempre pelas funções Postgres de `database/migrations/007_partner_review_transitions.sql`, invocadas via Edge Function → `supabase.rpc(...)` (ver `api.md`), nunca por `update`/`insert` direto do cliente. `partner_profiles` já não tem, de propósito, uma policy de `update` genérica para admin que a UI possa usar sem passar por uma destas funções — a policy `"Admins can update any partner profile"` existe para a própria função `security definer` (que corre como o utilizador autenticado, não como `service_role`), não para ser chamada diretamente pelo cliente React.

## Decisões de arquitetura

1. **`audit_logs` como tabela transversal única, não `partner_review_log` específica** — evita uma tabela de log por módulo admin (parceiros, disputas, suporte...); todas as ações administrativas convergem para o mesmo sítio, o que também simplifica um futuro ecrã "Atividade recente do admin" sem precisar de `UNION` entre várias tabelas.
2. **Nenhuma tabela nova para o ciclo de vida de `partner_profiles`** — o enum `partner_profile_status` e as colunas `reviewed_at`/`reviewed_by`/`rejection_reason` já cobrem tudo o que este módulo precisa; adicionar colunas específicas de admin a `partner_profiles` duplicaria o que `audit_logs` já regista de forma mais genérica e mais completa (histórico, não só o último estado).
