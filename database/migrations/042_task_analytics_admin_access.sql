-- ============================================================
-- Analytics reais do motor de tarefas (admin-web) — RN pedida em
-- "faz o que ficou de fora". `wedding_tasks` (039_task_engine.sql) só
-- tinha uma policy `for all using (is_wedding_member(...))`, sem ramo
-- de admin — o mesmo padrão que payments/quote_requests/bookings já
-- usam (`... or public.is_admin()`), aqui como policy adicional em vez
-- de reescrever a existente (policies permissivas somam-se com OR).
-- ============================================================

create policy "Admins can view all wedding tasks"
  on public.wedding_tasks for select
  using (public.is_admin());
