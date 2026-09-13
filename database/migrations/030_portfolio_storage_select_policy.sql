-- ============================================================
-- Bug real, encontrado ao investigar "clicar em Concluir fica preso a
-- carregar": `storage.objects` nunca teve NENHUMA policy de SELECT
-- (023_portfolio_storage.sql só criou INSERT/UPDATE/DELETE). O upload
-- real via Storage API (`uploadBinary`) faz um INSERT ... RETURNING
-- internamente para devolver os metadados do objeto na resposta —
-- RETURNING aplica as policies de SELECT tal como uma leitura normal
-- (mesmo motivo já documentado para `INSERT...RETURNING` noutras
-- tabelas nesta base de dados). Sem nenhuma policy de SELECT, essa
-- parte do pedido falha com "new row violates row-level security
-- policy", mesmo a policy de INSERT estando perfeitamente correta —
-- por isso TODOS os uploads (logótipo, portefólio) falhavam sempre,
-- desde 023_portfolio_storage.sql, nunca antes apanhado porque nenhuma
-- verificação anterior chegou a testar um upload real via a Storage
-- API com uma sessão autenticada a sério.
--
-- Confirmado com diagnóstico isolado: um bucket novo, criado pela
-- própria Storage API (não SQL direto), com uma policy de INSERT
-- totalmente aberta (sem nenhuma condição de dono), continuava a falhar
-- exatamente da mesma forma — só depois de acrescentar uma policy de
-- SELECT é que o upload passou a funcionar.
--
-- `portfolio` é um bucket público (023_portfolio_storage.sql) para
-- conteúdo de marketing não sensível — a policy de SELECT reflete essa
-- mesma decisão, sem restringir por dono.
-- ============================================================

create policy "Anyone can view portfolio media"
  on storage.objects for select
  using (bucket_id = 'portfolio');
