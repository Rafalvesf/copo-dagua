-- ============================================================
-- 194 · Fechar tarefas do admin já feitas (2026-11-16)
-- ============================================================
--
-- Feitas nos PRs de 15–16 nov:
--   * booking-extras  — extras dos parceiros nos pacotes (188).
--   * split-pay       — «Cada um escolhe / cada um paga o seu» (190).
--   * referral-v2     — convites com 50 % na taxa e 50 % na 1.ª
--                       transação (193).
-- Fica aberta «split-pay-payouts» só com a parte que falta.
-- Nova tarefa para ti: testar no telemóvel o que entrou hoje.
-- ============================================================

begin;

update public.admin_tasks
set done = true, done_at = now()
where id in ('booking-extras', 'split-pay', 'referral-v2') and not done;

update public.admin_tasks
set title = 'Pagamento ao parceiro só após fecho da mesa',
    detail = 'Cada um paga o seu já existe (190). Falta: o restaurante confirma presenças e fecho antes de o dinheiro ser libertado (hoje é libertado 3 dias depois do evento). Base para o check-in QR/faltas.'
where id = 'split-pay-payouts' and not done;

insert into public.admin_tasks (id, title, detail, area, owner, sort) values
  ('test-2026-11-16', 'Testar no telemóvel o que entrou a 15–16 nov',
   'Pedir um pacote com extras; reservar mesa «cada um escolhe» e escolher/pagar como convidado; categorias sem sinal (pagar tudo); grupo do evento com «vai/não vai»; convidar quem sigo; mensagem direta num perfil; convites e desconto de 50 % nas Definições.',
   'Testes', 'tu', 5)
on conflict (id) do nothing;

insert into public.applied_migrations (id) values ('194') on conflict do nothing;

commit;
