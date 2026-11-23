-- 221 · Tarefa no «Pendentes» do admin: ligar o Google Maps (pedido do
-- Rafael, 2026-11-23). Sem a chave, o seletor de moradas e o «Onde fica» /
-- «Como chegar» usam o OpenStreetMap (a função `places` responde 503).
insert into public.admin_tasks (title, detail, area, owner, sort)
select
  'Ligar o Google Maps (moradas e mapas)',
  'Google Cloud: criar uma chave com a Places API (New) e a Maps Static API (restringida a essas duas). Supabase → Edge Functions → Secrets → GOOGLE_MAPS_API_KEY. Não a enviar no chat. Depois testar: criar evento → escolher o local (sugestões do Google) e «Onde fica» num parceiro.',
  'Lojas e contas',
  'tu',
  1
where not exists (
  select 1 from public.admin_tasks where title = 'Ligar o Google Maps (moradas e mapas)'
);

insert into public.applied_migrations (id) values ('221') on conflict do nothing;
