-- ============================================================
-- Pendentes no admin — 2026-11-01
-- ============================================================
-- Pedido do utilizador: "coloca o pendentes à nossa no admin dashboard".
-- Lista do que falta fazer para lançar (migrações, segurança, lojas,
-- pagamentos, marketing), para a equipa ir riscando em Admin → Pendentes.
-- Só admins leem e escrevem.

begin;

create table if not exists public.admin_tasks (
  id text primary key default gen_random_uuid()::text,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  detail text check (detail is null or char_length(detail) <= 500),
  area text not null default 'Outros' check (char_length(area) between 1 and 60),
  owner text not null default 'tu' check (owner in ('tu', 'claude')),
  sort int not null default 1000,
  done boolean not null default false,
  done_at timestamptz,
  done_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists admin_tasks_open_idx on public.admin_tasks (done, sort);

alter table public.admin_tasks enable row level security;
drop policy if exists "Admins manage admin tasks" on public.admin_tasks;
create policy "Admins manage admin tasks" on public.admin_tasks for all
  using (public.is_admin()) with check (public.is_admin());
grant select, insert, update, delete on public.admin_tasks to authenticated;

insert into public.admin_tasks (id, title, detail, area, owner, sort) values
  ('m132', 'Correr a migração 132', 'NIF opcional nas faturas e notas de crédito parciais. SQL Editor do Supabase.', 'Base de dados', 'tu', 1),
  ('fn-faturas', 'Publicar a nova função de faturas (InvoiceXpress)', 'Só depois da 132. Avisa o Claude quando a correres.', 'Base de dados', 'claude', 2),
  ('m133', 'Correr a migração 133', 'Mensagens da equipa a qualquer utilizador, a partir do admin.', 'Base de dados', 'tu', 3),
  ('m134', 'Correr a migração 134', 'Respostas às mensagens da equipa abrem um pedido de suporte.', 'Base de dados', 'tu', 4),
  ('m135', 'Correr a migração 135', 'Parceiros novos sem comissão nos 2 primeiros meses.', 'Base de dados', 'tu', 5),
  ('m136', 'Correr a migração 136, sozinha', 'Reportar erros e classificar a app. Tem de ser corrida à parte porque acrescenta um valor a um tipo.', 'Base de dados', 'tu', 6),
  ('m137', 'Correr a migração 137', 'Esta lista de pendentes no admin.', 'Base de dados', 'tu', 7),
  ('firebase-keys', 'Rodar e restringir as chaves Firebase (Android e iOS)', 'Na Google Cloud: criar chaves novas, restringir à app pt.anossa.app e apagar as antigas, que ficaram no histórico do GitHub.', 'Segurança', 'tu', 10),
  ('gh-secrets', 'Pôr as chaves novas nos segredos do GitHub', 'FIREBASE_ANDROID_API_KEY e FIREBASE_IOS_API_KEY, em Settings → Secrets → Actions.', 'Segurança', 'tu', 11),
  ('repo-history', 'Decidir: repositório privado ou limpar o histórico', 'O histórico do git ainda tem chaves e emails antigos.', 'Segurança', 'tu', 12),
  ('google-consent', 'Confirmar o ecrã de consentimento Google em produção', 'Google Cloud → OAuth consent screen: tipo External e estado In production, para qualquer pessoa entrar com Google.', 'Segurança', 'tu', 13),
  ('apple-dev', 'Criar conta Apple Developer', '99 USD por ano. Necessária para TestFlight e App Store.', 'Lojas e contas', 'tu', 20),
  ('play-console', 'Criar conta Google Play Console', '25 USD, pagamento único.', 'Lojas e contas', 'tu', 21),
  ('apns', 'Criar a chave APNs (.p8) e pô-la no Firebase', 'Para as notificações no iPhone. Não a coles no chat.', 'Lojas e contas', 'tu', 22),
  ('legal', 'Dados legais nos Termos', 'Nome da empresa, NIF e morada.', 'Lojas e contas', 'tu', 23),
  ('demo', 'Contas de demonstração para os revisores', 'Criar as duas contas, pôr os emails em database/seeds/review_demo.sql e correr o ficheiro.', 'Lojas e contas', 'tu', 24),
  ('native-next', 'Login Apple e Google nativos, envio para TestFlight e Play, deep links', 'O Claude faz depois de as contas Apple e Google existirem.', 'Lojas e contas', 'claude', 25),
  ('stripe-live', 'Passar a Stripe para modo real', 'Ativar a conta, chaves live e webhook live.', 'Pagamentos e faturação', 'tu', 30),
  ('ix-setup', 'Configurar o InvoiceXpress', 'Série de faturação, comunicação com a AT e imposto IVA23.', 'Pagamentos e faturação', 'tu', 31),
  ('empresa', 'Empresa e contabilista', 'Decidir a unipessoal e escolher contabilista.', 'Pagamentos e faturação', 'tu', 32),
  ('stripe-fees', 'Decidir quem paga a taxa da Stripe', 'Hoje é a À Nossa! que paga cerca de 1,5% + 0,25 € por pagamento.', 'Pagamentos e faturação', 'tu', 33),
  ('reel-parceiros', 'Publicar o reel Desafio para parceiros', 'anossa_desafio_parceiros_voz.mp4, com a capa.', 'Marketing', 'tu', 40),
  ('reel-org', 'Publicar o reel Desafio para organizadores', 'anossa_desafio_organizadores_voz.mp4, com a capa.', 'Marketing', 'tu', 41),
  ('carrossel', 'Publicar o carrossel para parceiros', '6 slides, 1080×1350.', 'Marketing', 'tu', 42),
  ('store-badges', 'Trocar os botões "Brevemente" pelos oficiais das lojas', 'Nos vídeos e no carrossel, quando a app estiver publicada.', 'Marketing', 'claude', 43)
on conflict (id) do nothing;

commit;
