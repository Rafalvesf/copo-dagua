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

\echo '=== FIM DOS TESTES ==='
