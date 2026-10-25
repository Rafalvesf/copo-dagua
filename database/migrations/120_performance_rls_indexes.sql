-- ============================================================
-- Desempenho da base de dados (2026-10-25, "otimiza a app toda")
-- ============================================================
-- Avisos do Supabase (Performance Advisor):
--  1. 78 × "multiple permissive policies": várias regras para a mesma
--     tabela e ação eram avaliadas uma a uma. Juntam-se numa só por ação
--     (as regras permissivas já se combinavam com OR, por isso QUEM pode
--     ver/alterar o quê NÃO muda). As regras "ALL" do dono passam a
--     INSERT/UPDATE/DELETE separadas para não repetirem o SELECT.
--  2. 45 × "auth_rls_initplan": `auth.uid()` era calculado por linha.
--     Passa a `(select auth.uid())`, calculado uma vez por consulta.
--  3. 36 × "unindexed foreign keys": índice em cada chave estrangeira.
-- Os 9 índices "nunca usados" ficam (com pouco tráfego ainda não dizem nada).

begin;

-- ---------- 1. Regras juntas ----------

-- guest_companions
drop policy if exists guest_companions_owner_all on public.guest_companions;
drop policy if exists guest_companions_members_read on public.guest_companions;
drop policy if exists guest_companions_select on public.guest_companions;
create policy guest_companions_select on public.guest_companions for select using (
  exists (select 1 from public.guests g where g.id = guest_companions.guest_id and g.linked_profile_id = (select auth.uid()))
  or is_wedding_member(wedding_id)
);
drop policy if exists guest_companions_insert on public.guest_companions;
create policy guest_companions_insert on public.guest_companions for insert with check (
  exists (select 1 from public.guests g where g.id = guest_companions.guest_id and g.linked_profile_id = (select auth.uid()) and g.wedding_id = guest_companions.wedding_id)
);
drop policy if exists guest_companions_update on public.guest_companions;
create policy guest_companions_update on public.guest_companions for update using (
  exists (select 1 from public.guests g where g.id = guest_companions.guest_id and g.linked_profile_id = (select auth.uid()))
) with check (
  exists (select 1 from public.guests g where g.id = guest_companions.guest_id and g.linked_profile_id = (select auth.uid()) and g.wedding_id = guest_companions.wedding_id)
);
drop policy if exists guest_companions_delete on public.guest_companions;
create policy guest_companions_delete on public.guest_companions for delete using (
  exists (select 1 from public.guests g where g.id = guest_companions.guest_id and g.linked_profile_id = (select auth.uid()))
);

-- guests
drop policy if exists "Members manage guests" on public.guests;
drop policy if exists "Guest can view own row" on public.guests;
drop policy if exists guests_select on public.guests;
create policy guests_select on public.guests for select using (
  linked_profile_id = (select auth.uid()) or is_wedding_member(wedding_id)
);
drop policy if exists guests_insert on public.guests;
create policy guests_insert on public.guests for insert with check (is_wedding_member(wedding_id));
drop policy if exists guests_update on public.guests;
create policy guests_update on public.guests for update using (is_wedding_member(wedding_id)) with check (is_wedding_member(wedding_id));
drop policy if exists guests_delete on public.guests;
create policy guests_delete on public.guests for delete using (is_wedding_member(wedding_id));

-- partner_portfolio_items
drop policy if exists "Owner manages own portfolio" on public.partner_portfolio_items;
drop policy if exists "Visible when parent profile visible" on public.partner_portfolio_items;
drop policy if exists partner_portfolio_items_select on public.partner_portfolio_items;
create policy partner_portfolio_items_select on public.partner_portfolio_items for select using (
  partner_id = (select auth.uid()) or is_partner_profile_visible(partner_id) or is_admin()
);
drop policy if exists partner_portfolio_items_insert on public.partner_portfolio_items;
create policy partner_portfolio_items_insert on public.partner_portfolio_items for insert with check (partner_id = (select auth.uid()));
drop policy if exists partner_portfolio_items_update on public.partner_portfolio_items;
create policy partner_portfolio_items_update on public.partner_portfolio_items for update using (partner_id = (select auth.uid())) with check (partner_id = (select auth.uid()));
drop policy if exists partner_portfolio_items_delete on public.partner_portfolio_items;
create policy partner_portfolio_items_delete on public.partner_portfolio_items for delete using (partner_id = (select auth.uid()));

-- partner_service_packages
drop policy if exists "Owner manages own packages" on public.partner_service_packages;
drop policy if exists "Visible when parent profile visible" on public.partner_service_packages;
drop policy if exists partner_service_packages_select on public.partner_service_packages;
create policy partner_service_packages_select on public.partner_service_packages for select using (
  partner_id = (select auth.uid()) or is_partner_profile_visible(partner_id) or is_admin()
);
drop policy if exists partner_service_packages_insert on public.partner_service_packages;
create policy partner_service_packages_insert on public.partner_service_packages for insert with check (partner_id = (select auth.uid()));
drop policy if exists partner_service_packages_update on public.partner_service_packages;
create policy partner_service_packages_update on public.partner_service_packages for update using (partner_id = (select auth.uid())) with check (partner_id = (select auth.uid()));
drop policy if exists partner_service_packages_delete on public.partner_service_packages;
create policy partner_service_packages_delete on public.partner_service_packages for delete using (partner_id = (select auth.uid()));

-- partner_profile_categories
drop policy if exists "Owner manages own categories" on public.partner_profile_categories;
drop policy if exists "Booking counterpart can view partner categories" on public.partner_profile_categories;
drop policy if exists "Visible when parent profile visible" on public.partner_profile_categories;
drop policy if exists partner_profile_categories_select on public.partner_profile_categories;
create policy partner_profile_categories_select on public.partner_profile_categories for select using (
  partner_id = (select auth.uid()) or is_partner_profile_visible(partner_id) or is_booking_counterpart(partner_id) or is_admin()
);
drop policy if exists partner_profile_categories_insert on public.partner_profile_categories;
create policy partner_profile_categories_insert on public.partner_profile_categories for insert with check (partner_id = (select auth.uid()));
drop policy if exists partner_profile_categories_update on public.partner_profile_categories;
create policy partner_profile_categories_update on public.partner_profile_categories for update using (partner_id = (select auth.uid())) with check (partner_id = (select auth.uid()));
drop policy if exists partner_profile_categories_delete on public.partner_profile_categories;
create policy partner_profile_categories_delete on public.partner_profile_categories for delete using (partner_id = (select auth.uid()));

-- partner_venue_tables
drop policy if exists "Owner manages own venue tables" on public.partner_venue_tables;
drop policy if exists "Booking counterpart can view venue tables" on public.partner_venue_tables;
drop policy if exists "Visible when parent profile visible" on public.partner_venue_tables;
drop policy if exists partner_venue_tables_select on public.partner_venue_tables;
create policy partner_venue_tables_select on public.partner_venue_tables for select using (
  partner_id = (select auth.uid()) or is_partner_profile_visible(partner_id) or is_booking_counterpart(partner_id) or is_admin()
);
drop policy if exists partner_venue_tables_insert on public.partner_venue_tables;
create policy partner_venue_tables_insert on public.partner_venue_tables for insert with check (partner_id = (select auth.uid()));
drop policy if exists partner_venue_tables_update on public.partner_venue_tables;
create policy partner_venue_tables_update on public.partner_venue_tables for update using (partner_id = (select auth.uid()));
drop policy if exists partner_venue_tables_delete on public.partner_venue_tables;
create policy partner_venue_tables_delete on public.partner_venue_tables for delete using (partner_id = (select auth.uid()));

-- partner_verification
drop policy if exists "Owner can manage own verification data" on public.partner_verification;
drop policy if exists "Admins can view verification data" on public.partner_verification;
drop policy if exists "Owner can view own verification data" on public.partner_verification;
drop policy if exists partner_verification_select on public.partner_verification;
create policy partner_verification_select on public.partner_verification for select using (
  partner_id = (select auth.uid()) or is_admin()
);
drop policy if exists partner_verification_insert on public.partner_verification;
create policy partner_verification_insert on public.partner_verification for insert with check (partner_id = (select auth.uid()));
drop policy if exists partner_verification_update on public.partner_verification;
create policy partner_verification_update on public.partner_verification for update using (partner_id = (select auth.uid())) with check (partner_id = (select auth.uid()));
drop policy if exists partner_verification_delete on public.partner_verification;
create policy partner_verification_delete on public.partner_verification for delete using (partner_id = (select auth.uid()));

-- partner_profiles
drop policy if exists "Admins can view all partner profiles" on public.partner_profiles;
drop policy if exists "Anyone authenticated can view published profiles" on public.partner_profiles;
drop policy if exists "Booking counterpart can view partner profile" on public.partner_profiles;
drop policy if exists "Owner can view own profile" on public.partner_profiles;
drop policy if exists "Admins can update any partner profile" on public.partner_profiles;
drop policy if exists "Owner can update own profile" on public.partner_profiles;
drop policy if exists partner_profiles_select on public.partner_profiles;
create policy partner_profiles_select on public.partner_profiles for select using (
  id = (select auth.uid()) or is_partner_profile_visible(id) or is_booking_counterpart(id) or is_admin()
);
drop policy if exists partner_profiles_update on public.partner_profiles;
create policy partner_profiles_update on public.partner_profiles for update using (
  id = (select auth.uid()) or is_admin()
);

-- profiles
drop policy if exists "Admins can view all profiles" on public.profiles;
drop policy if exists "Booking counterpart can view profile" on public.profiles;
drop policy if exists "Review partner can view couple profile" on public.profiles;
drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select using (
  id = (select auth.uid()) or is_booking_counterpart(id) or is_review_counterpart(id) or is_admin()
);

-- wedding_collaborators
drop policy if exists "Only owner manages collaborators" on public.wedding_collaborators;
drop policy if exists "Members can view collaborators" on public.wedding_collaborators;
drop policy if exists wedding_collaborators_select on public.wedding_collaborators;
create policy wedding_collaborators_select on public.wedding_collaborators for select using (
  is_wedding_member(wedding_id) or is_admin()
  or exists (select 1 from public.weddings w where w.id = wedding_collaborators.wedding_id and w.owner_id = (select auth.uid()))
);
drop policy if exists wedding_collaborators_insert on public.wedding_collaborators;
create policy wedding_collaborators_insert on public.wedding_collaborators for insert with check (
  exists (select 1 from public.weddings w where w.id = wedding_collaborators.wedding_id and w.owner_id = (select auth.uid()))
);
drop policy if exists wedding_collaborators_update on public.wedding_collaborators;
create policy wedding_collaborators_update on public.wedding_collaborators for update using (
  exists (select 1 from public.weddings w where w.id = wedding_collaborators.wedding_id and w.owner_id = (select auth.uid()))
);
drop policy if exists wedding_collaborators_delete on public.wedding_collaborators;
create policy wedding_collaborators_delete on public.wedding_collaborators for delete using (
  exists (select 1 from public.weddings w where w.id = wedding_collaborators.wedding_id and w.owner_id = (select auth.uid()))
);

-- wedding_tasks
drop policy if exists "Members manage wedding tasks" on public.wedding_tasks;
drop policy if exists "Admins can view all wedding tasks" on public.wedding_tasks;
drop policy if exists wedding_tasks_select on public.wedding_tasks;
create policy wedding_tasks_select on public.wedding_tasks for select using (
  (is_wedding_member(wedding_id) and (private_owner is null or private_owner = (select auth.uid()))) or is_admin()
);
drop policy if exists wedding_tasks_insert on public.wedding_tasks;
create policy wedding_tasks_insert on public.wedding_tasks for insert with check (
  is_wedding_member(wedding_id) and (private_owner is null or private_owner = (select auth.uid()))
);
drop policy if exists wedding_tasks_update on public.wedding_tasks;
create policy wedding_tasks_update on public.wedding_tasks for update using (
  is_wedding_member(wedding_id) and (private_owner is null or private_owner = (select auth.uid()))
) with check (
  is_wedding_member(wedding_id) and (private_owner is null or private_owner = (select auth.uid()))
);
drop policy if exists wedding_tasks_delete on public.wedding_tasks;
create policy wedding_tasks_delete on public.wedding_tasks for delete using (
  is_wedding_member(wedding_id) and (private_owner is null or private_owner = (select auth.uid()))
);

-- weddings
drop policy if exists "Booking partner can view wedding" on public.weddings;
drop policy if exists "Members can view wedding" on public.weddings;
drop policy if exists "Review partner can view wedding" on public.weddings;
drop policy if exists weddings_select on public.weddings;
create policy weddings_select on public.weddings for select using (
  is_wedding_member(id) or is_admin() or is_booking_partner_for_wedding(id) or is_review_partner_for_wedding(id)
);

-- ---------- 2. auth.uid() uma vez por consulta (restantes regras) ----------
do $$
declare
  p record;
  q text;
  c text;
  sql text;
begin
  for p in
    select tablename, policyname, qual, with_check from pg_policies
    where schemaname = 'public'
      and (coalesce(qual, '') ~ 'auth\.(uid|jwt|role)\(\)' or coalesce(with_check, '') ~ 'auth\.(uid|jwt|role)\(\)')
      and coalesce(qual, '') !~* 'select auth\.' and coalesce(with_check, '') !~* 'select auth\.'
  loop
    q := regexp_replace(p.qual, 'auth\.(uid|jwt|role)\(\)', '(select auth.\1())', 'g');
    c := regexp_replace(p.with_check, 'auth\.(uid|jwt|role)\(\)', '(select auth.\1())', 'g');
    sql := format('alter policy %I on public.%I', p.policyname, p.tablename);
    if q is not null then sql := sql || format(' using (%s)', q); end if;
    if c is not null then sql := sql || format(' with check (%s)', c); end if;
    execute sql;
  end loop;
end $$;

-- ---------- 3. Índices nas chaves estrangeiras ----------
do $$
declare
  f record;
  idx text;
begin
  for f in
    select c.conrelid::regclass as tbl, cl.relname as tname, c.conname,
           array_agg(a.attname order by k.ord) as cols
    from pg_constraint c
    join pg_class cl on cl.oid = c.conrelid
    join pg_namespace n on n.oid = cl.relnamespace and n.nspname = 'public'
    cross join lateral unnest(c.conkey) with ordinality as k(attnum, ord)
    join pg_attribute a on a.attrelid = c.conrelid and a.attnum = k.attnum
    where c.contype = 'f'
      and not exists (
        select 1 from pg_index i
        where i.indrelid = c.conrelid
          and (i.indkey::int2[])[0:array_length(c.conkey, 1) - 1] @> c.conkey
          and (i.indkey::int2[])[0:array_length(c.conkey, 1) - 1] <@ c.conkey
      )
    group by c.conrelid, cl.relname, c.conname
  loop
    idx := left(f.tname || '_' || array_to_string(f.cols, '_') || '_fk_idx', 63);
    execute format('create index if not exists %I on %s (%s)', idx, f.tbl,
      (select string_agg(format('%I', col), ', ') from unnest(f.cols) col));
  end loop;
end $$;

-- ---------- 4. Chat de grupo em tempo real ----------
-- A app deixa de perguntar a cada 4 s; recebe as mensagens novas pelo
-- Supabase Realtime (que respeita as mesmas regras de acesso).
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
     and not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'chat_group_messages') then
    alter publication supabase_realtime add table public.chat_group_messages;
  end if;
end $$;

commit;
