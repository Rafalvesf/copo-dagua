-- ============================================================
-- Testes de RLS reais — Authentication, Wedding, Guests
-- Corrigido: SET LOCAL precisa de estar dentro de BEGIN/COMMIT
-- ============================================================

\pset pager off

-- --- Setup (como superuser, ignora RLS) ---
insert into auth.users (id, email) values
  ('11111111-1111-1111-1111-111111111111', 'ana@example.com'),
  ('22222222-2222-2222-2222-222222222222', 'miguel@example.com'),
  ('33333333-3333-3333-3333-333333333333', 'sofia@example.com'),
  ('44444444-4444-4444-4444-444444444444', 'pedro@example.com');

insert into public.profiles (id, role, full_name) values
  ('11111111-1111-1111-1111-111111111111', 'couple', 'Ana Silva'),
  ('22222222-2222-2222-2222-222222222222', 'couple', 'Miguel Costa'),
  ('33333333-3333-3333-3333-333333333333', 'couple', 'Sofia Martins'),
  ('44444444-4444-4444-4444-444444444444', 'couple', 'Pedro Almeida');

insert into public.weddings (id, owner_id, partner_name_1) values
  ('aaaaaaaa-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'Ana'),
  ('bbbbbbbb-0000-0000-0000-000000000002', '33333333-3333-3333-3333-333333333333', 'Sofia');

insert into public.wedding_collaborators (wedding_id, user_id, invited_email, status) values
  ('aaaaaaaa-0000-0000-0000-000000000001', '22222222-2222-2222-2222-222222222222', 'miguel@example.com', 'active');

insert into public.guests (wedding_id, full_name) values
  ('aaaaaaaa-0000-0000-0000-000000000001', 'Rita Almeida'),
  ('bbbbbbbb-0000-0000-0000-000000000002', 'Carlos Ferreira');

create or replace function pg_temp.check(label text, condition boolean)
returns void language plpgsql as $$
begin
  if condition then
    raise notice 'PASS - %', label;
  else
    raise warning 'FAIL - %', label;
  end if;
end $$;

-- ============================================================
-- TESTE 1 e 2: Owner do casamento A
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T1 - Owner ve o proprio wedding',
    (select count(*) from public.weddings where id = 'aaaaaaaa-0000-0000-0000-000000000001') = 1
  );

  select pg_temp.check(
    'T2 - Owner NAO ve wedding de outro casal',
    (select count(*) from public.weddings where id = 'bbbbbbbb-0000-0000-0000-000000000002') = 0
  );
commit;

-- ============================================================
-- TESTE 3: Colaborador ativo consegue ver o casamento A
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '22222222-2222-2222-2222-222222222222';

  select pg_temp.check(
    'T3 - Colaborador ativo ve o wedding',
    (select count(*) from public.weddings where id = 'aaaaaaaa-0000-0000-0000-000000000001') = 1
  );
commit;

-- ============================================================
-- TESTE 4 e 5: Utilizador sem qualquer relação
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '44444444-4444-4444-4444-444444444444';

  select pg_temp.check(
    'T4 - Nao-membro nao ve nenhum wedding',
    (select count(*) from public.weddings) = 0
  );

  select pg_temp.check(
    'T5 - Nao-membro nao ve guests de nenhum casamento',
    (select count(*) from public.guests) = 0
  );
commit;

-- ============================================================
-- TESTE 6: Owner vê guests do próprio wedding, não do de outro
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T6a - Owner ve guests do proprio wedding',
    (select count(*) from public.guests where wedding_id = 'aaaaaaaa-0000-0000-0000-000000000001') = 1
  );

  select pg_temp.check(
    'T6b - Owner NAO ve guests do wedding de outro casal',
    (select count(*) from public.guests where wedding_id = 'bbbbbbbb-0000-0000-0000-000000000002') = 0
  );
commit;

-- ============================================================
-- TESTE 7: Colaborador consegue inserir um convidado
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '22222222-2222-2222-2222-222222222222';

  insert into public.guests (wedding_id, full_name)
  values ('aaaaaaaa-0000-0000-0000-000000000001', 'Convidado Teste Colaborador');

  select pg_temp.check(
    'T7 - Colaborador consegue inserir guest no wedding onde e membro',
    (select count(*) from public.guests where full_name = 'Convidado Teste Colaborador') = 1
  );
commit;

-- ============================================================
-- TESTE 8: Owner de B NÃO consegue inserir convidado no wedding A
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '33333333-3333-3333-3333-333333333333';

  do $$
  begin
    insert into public.guests (wedding_id, full_name)
    values ('aaaaaaaa-0000-0000-0000-000000000001', 'Intrusao Sofia');
    raise warning 'FAIL - T8 - Insercao indevida foi permitida (RLS nao bloqueou)';
  exception when insufficient_privilege or others then
    raise notice 'PASS - T8 - Insercao indevida bloqueada (%)', sqlstate;
  end $$;
rollback;

-- ============================================================
-- TESTE 9: Colaborador NÃO consegue eliminar o wedding (0 linhas)
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '22222222-2222-2222-2222-222222222222';

  do $$
  declare affected int;
  begin
    delete from public.weddings where id = 'aaaaaaaa-0000-0000-0000-000000000001';
    get diagnostics affected = row_count;
    if affected = 0 then
      raise notice 'PASS - T9 - Colaborador tentou eliminar wedding, 0 linhas afetadas (RLS bloqueou)';
    else
      raise warning 'FAIL - T9 - Colaborador conseguiu eliminar % linha(s) do wedding!', affected;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 10: Owner CONSEGUE eliminar o próprio wedding
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  declare affected int;
  begin
    delete from public.weddings where id = 'aaaaaaaa-0000-0000-0000-000000000001';
    get diagnostics affected = row_count;
    if affected = 1 then
      raise notice 'PASS - T10 - Owner conseguiu eliminar o proprio wedding (1 linha afetada)';
    else
      raise warning 'FAIL - T10 - Owner NAO conseguiu eliminar o proprio wedding (% linhas afetadas)', affected;
    end if;
  end $$;
rollback; -- não commitamos para não afetar testes seguintes

-- ============================================================
-- TESTE 11: is_wedding_member() devolve false para não-membro
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '44444444-4444-4444-4444-444444444444';

  select pg_temp.check(
    'T11 - is_wedding_member() devolve false para nao-membro',
    public.is_wedding_member('aaaaaaaa-0000-0000-0000-000000000001') is not true
  );
commit;

-- ============================================================
-- Setup adicional: Profile (partner-app)
-- ============================================================
insert into auth.users (id, email) values
  ('55555555-5555-5555-5555-555555555555', 'parceiro.a@example.com'),
  ('66666666-6666-6666-6666-666666666666', 'parceiro.b@example.com');

insert into public.profiles (id, role, full_name) values
  ('55555555-5555-5555-5555-555555555555', 'partner', 'Estúdio Luz & Sombra'),
  ('66666666-6666-6666-6666-666666666666', 'partner', 'Quinta das Rosas');

-- Parceiro A: perfil publicado e visível
insert into public.partner_profiles (id, business_name, description, status, is_paused) values
  ('55555555-5555-5555-5555-555555555555', 'Estúdio Luz & Sombra', 'Fotografia de casamento com mais de 10 anos de experiência.', 'published', false);

-- Parceiro B: perfil ainda em draft, não deve ser visível publicamente
insert into public.partner_profiles (id, business_name, description, status, is_paused) values
  ('66666666-6666-6666-6666-666666666666', 'Quinta das Rosas', 'Espaço para casamentos ao ar livre.', 'draft', false);

insert into public.partner_verification (partner_id, tax_id, billing_address) values
  ('55555555-5555-5555-5555-555555555555', '123456789', 'Rua das Flores, 10, Lisboa'),
  ('66666666-6666-6666-6666-666666666666', '987654321', 'Estrada Nacional 1, Sintra');

insert into public.partner_profile_categories (partner_id, category_id, starting_price)
  select '55555555-5555-5555-5555-555555555555', id, 800.00
  from public.partner_categories where slug = 'photography';

-- ============================================================
-- TESTE 12 e 13: Parceiro A vê e atualiza o próprio perfil
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '55555555-5555-5555-5555-555555555555';

  select pg_temp.check(
    'T12 - Parceiro A ve o proprio perfil (mesmo antes de published, sempre pode)',
    (select count(*) from public.partner_profiles where id = '55555555-5555-5555-5555-555555555555') = 1
  );

  update public.partner_profiles set description = 'Descrição atualizada.'
  where id = '55555555-5555-5555-5555-555555555555';

  select pg_temp.check(
    'T13 - Parceiro A consegue atualizar o proprio perfil',
    (select description from public.partner_profiles where id = '55555555-5555-5555-5555-555555555555') = 'Descrição atualizada.'
  );
commit;

-- ============================================================
-- TESTE 14: Parceiro B NÃO consegue atualizar o perfil do Parceiro A
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '66666666-6666-6666-6666-666666666666';

  do $$
  declare affected int;
  begin
    update public.partner_profiles set business_name = 'Hackeado'
    where id = '55555555-5555-5555-5555-555555555555';
    get diagnostics affected = row_count;
    if affected = 0 then
      raise notice 'PASS - T14 - Parceiro B tentou editar perfil de A, 0 linhas afetadas (RLS bloqueou)';
    else
      raise warning 'FAIL - T14 - Parceiro B conseguiu editar % linha(s) do perfil de A!', affected;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 15 e 16: Noivo vê perfil published, não vê perfil draft
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T15 - Noivo ve perfil PUBLISHED do Parceiro A',
    (select count(*) from public.partner_profiles where id = '55555555-5555-5555-5555-555555555555') = 1
  );

  select pg_temp.check(
    'T16 - Noivo NAO ve perfil DRAFT do Parceiro B',
    (select count(*) from public.partner_profiles where id = '66666666-6666-6666-6666-666666666666') = 0
  );
commit;

-- ============================================================
-- TESTE 17: Noivo NUNCA consegue ler partner_verification, nem de perfil publicado
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T17 - Noivo nao le partner_verification de nenhum parceiro (RN11)',
    (select count(*) from public.partner_verification) = 0
  );
commit;

-- ============================================================
-- TESTE 18: Parceiro A vê os próprios dados de verificação; não os de B
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '55555555-5555-5555-5555-555555555555';

  select pg_temp.check(
    'T18a - Parceiro A ve os proprios dados fiscais',
    (select count(*) from public.partner_verification where partner_id = '55555555-5555-5555-5555-555555555555') = 1
  );

  select pg_temp.check(
    'T18b - Parceiro A NAO ve dados fiscais do Parceiro B',
    (select count(*) from public.partner_verification where partner_id = '66666666-6666-6666-6666-666666666666') = 0
  );
commit;

-- ============================================================
-- TESTE 19: Parceiro B NÃO consegue inserir categoria no perfil do Parceiro A
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '66666666-6666-6666-6666-666666666666';

  do $$
  begin
    insert into public.partner_profile_categories (partner_id, category_id)
    select '55555555-5555-5555-5555-555555555555', id from public.partner_categories where slug = 'venue';
    raise warning 'FAIL - T19 - Parceiro B conseguiu inserir categoria no perfil de A (RLS nao bloqueou)';
  exception when insufficient_privilege or others then
    raise notice 'PASS - T19 - Insercao indevida bloqueada (%)', sqlstate;
  end $$;
rollback;

-- ============================================================
-- TESTE 20: Limite de 5 categorias (RN03) é aplicado pelo trigger
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '55555555-5555-5555-5555-555555555555';

  do $$
  begin
    insert into public.partner_profile_categories (partner_id, category_id)
    select '55555555-5555-5555-5555-555555555555', id from public.partner_categories
    where slug in ('videography', 'venue', 'catering', 'music_dj');

    -- 5 categorias já inseridas (photography + as 4 acima) — a 6ª deve falhar
    insert into public.partner_profile_categories (partner_id, category_id)
    select '55555555-5555-5555-5555-555555555555', id from public.partner_categories where slug = 'flowers_decor';

    raise warning 'FAIL - T20 - 6a categoria foi aceite (trigger nao bloqueou, RN03)';
  exception when others then
    raise notice 'PASS - T20 - 6a categoria bloqueada pelo trigger (%)', sqlstate;
  end $$;
rollback;

-- ============================================================
-- TESTE 21: is_partner_profile_visible() reflete o status correto
-- ============================================================
begin;
  set local role app_authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T21a - is_partner_profile_visible() true para perfil published',
    public.is_partner_profile_visible('55555555-5555-5555-5555-555555555555') is true
  );

  select pg_temp.check(
    'T21b - is_partner_profile_visible() false para perfil draft',
    public.is_partner_profile_visible('66666666-6666-6666-6666-666666666666') is not true
  );
commit;

\echo '=== FIM DOS TESTES ==='
