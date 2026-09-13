-- ============================================================
-- Módulo: Partners / admin-web (admin-web/partners/database.md)
-- ============================================================

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

alter table public.audit_logs enable row level security;

-- Append-only: só existe policy de leitura e de escrita, nunca de update/delete —
-- ver docs/architecture/RLS_POLICY.md ("Auditoria").
create policy "Admins can view audit logs"
  on public.audit_logs for select
  using (public.is_admin());

create policy "Admins can insert audit logs"
  on public.audit_logs for insert
  with check (public.is_admin() and actor_id = auth.uid());

grant select, insert on public.audit_logs to authenticated;
