-- 168 · Recolher e guardar só o necessário (RGPD, minimização e prazos)
--
-- Pedido 2026-11-08 (lista de conformidade, ponto 7). Uma vez por dia:
--  · alergias e restrições alimentares (podem revelar saúde) são apagadas
--    90 dias depois da data do evento — já não servem para o catering;
--  · pedidos para entrar num evento que já passou há mais de 90 dias são
--    apagados (têm nome, email, telefone e respostas);
--  · passos de utilização sem conta (id anónimo) são apagados aos 90 dias;
--  · dados de utilização (passos, interesses, cliques em destaques) são
--    apagados aos 24 meses.

begin;

create or replace function public.purge_old_personal_data()
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  update public.guests g
     set dietary_restrictions = null
    from public.weddings w
   where w.id = g.wedding_id
     and w.wedding_date < current_date - 90
     and g.dietary_restrictions is not null;

  update public.guest_companions c
     set allergies = '{}'
    from public.weddings w
   where w.id = c.wedding_id
     and w.wedding_date < current_date - 90
     and coalesce(cardinality(c.allergies), 0) > 0;

  delete from public.guest_join_requests r
   using public.weddings w
   where w.id = r.wedding_id
     and w.wedding_date < current_date - 90;

  delete from public.funnel_events where profile_id is null and created_at < now() - interval '90 days';
  delete from public.funnel_events where created_at < now() - interval '24 months';
  delete from public.user_interest_events where created_at < now() - interval '24 months';
  delete from public.promotion_clicks where created_at < now() - interval '24 months';
end;
$$;
revoke execute on function public.purge_old_personal_data() from public, anon, authenticated;

select cron.unschedule('purge-old-personal-data') where exists (select 1 from cron.job where jobname = 'purge-old-personal-data');
select cron.schedule('purge-old-personal-data', '17 3 * * *', $$select public.purge_old_personal_data();$$);

-- Marca para a página Migrações do admin (sai da lista quando corre).
create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('168') on conflict do nothing;

commit;
