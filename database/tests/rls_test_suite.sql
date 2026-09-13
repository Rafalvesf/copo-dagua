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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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
  set local role authenticated;
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

-- ============================================================
-- Fixture: primeiro utilizador admin da suite (is_admin() nunca
-- tinha sido exercitado por um teste real com role = 'admin')
-- ============================================================
insert into auth.users (id, email) values
  ('77777777-7777-7777-7777-777777777777', 'admin@example.com');

insert into public.profiles (id, role, full_name) values
  ('77777777-7777-7777-7777-777777777777', 'admin', 'Admin Rafael');

-- ============================================================
-- TESTE 22: is_admin() é true só para o utilizador admin
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  select pg_temp.check(
    'T22a - is_admin() true para utilizador com role admin',
    public.is_admin() is true
  );
commit;

begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T22b - is_admin() false para noivo',
    public.is_admin() is not true
  );
commit;

-- ============================================================
-- TESTE 23: Admin regista uma ação em audit_logs e consegue lê-la
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (
    '77777777-7777-7777-7777-777777777777',
    'approve_partner',
    'partner_profiles',
    '66666666-6666-6666-6666-666666666666',
    '{"previous_status": "pending_review"}'
  );

  select pg_temp.check(
    'T23 - Admin le a propria entrada de audit_logs que acabou de criar',
    (select count(*) from public.audit_logs where actor_id = '77777777-7777-7777-7777-777777777777') = 1
  );
commit;

-- ============================================================
-- TESTE 24: Ninguém além de admins lê audit_logs (nem o próprio
-- parceiro visado pela ação, nem um noivo qualquer)
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '66666666-6666-6666-6666-666666666666';

  select pg_temp.check(
    'T24a - Parceiro visado pela acao NAO le audit_logs (sem policy de owner)',
    (select count(*) from public.audit_logs) = 0
  );
commit;

begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select pg_temp.check(
    'T24b - Noivo sem qualquer relacao NAO le audit_logs',
    (select count(*) from public.audit_logs) = 0
  );
commit;

-- ============================================================
-- TESTE 25: Não-admin não consegue inserir em audit_logs
-- (RLS bloqueia, não apenas disciplina de aplicação)
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '55555555-5555-5555-5555-555555555555';

  do $$
  begin
    insert into public.audit_logs (actor_id, action, target_table, target_id)
    values ('55555555-5555-5555-5555-555555555555', 'approve_partner', 'partner_profiles', '66666666-6666-6666-6666-666666666666');
    raise warning 'FAIL - T25 - Nao-admin conseguiu inserir em audit_logs (RLS nao bloqueou)';
  exception when insufficient_privilege or others then
    raise notice 'PASS - T25 - Insercao indevida em audit_logs bloqueada (%)', sqlstate;
  end $$;
rollback;

-- ============================================================
-- TESTE 26: approve_partner_profile() transiciona e regista auditoria
-- atomicamente (RN06 de admin-web/partners/requirements.md)
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  -- 66666666... está em 'draft' na fixture original; força pending_review
  -- para testar a transição válida sem depender de outro teste já ter corrido.
  update public.partner_profiles set status = 'pending_review' where id = '66666666-6666-6666-6666-666666666666';

  select public.approve_partner_profile('66666666-6666-6666-6666-666666666666');

  select pg_temp.check(
    'T26a - approve_partner_profile() publica o perfil',
    (select status from public.partner_profiles where id = '66666666-6666-6666-6666-666666666666') = 'published'
  );

  select pg_temp.check(
    'T26b - approve_partner_profile() regista audit_logs na mesma operacao',
    (select count(*) from public.audit_logs where action = 'approve_partner' and target_id = '66666666-6666-6666-6666-666666666666') = 1
  );
rollback;

-- ============================================================
-- TESTE 27: approve_partner_profile() falha com invalid_state fora de pending_review
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  do $$
  begin
    -- 55555555... já está 'published' na fixture original.
    perform public.approve_partner_profile('55555555-5555-5555-5555-555555555555');
    raise warning 'FAIL - T27 - approve_partner_profile aceitou um perfil que ja nao estava pending_review';
  exception when others then
    if sqlstate = 'P0001' then
      raise notice 'PASS - T27 - invalid_state corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T27 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 28: Não-admin não consegue chamar approve_partner_profile()
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  begin
    perform public.approve_partner_profile('55555555-5555-5555-5555-555555555555');
    raise warning 'FAIL - T28 - noivo conseguiu chamar approve_partner_profile()';
  exception when others then
    if sqlstate = '42501' then
      raise notice 'PASS - T28 - forbidden corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T28 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 29: reject_partner_profile() exige motivo com pelo menos 10 caracteres
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  update public.partner_profiles set status = 'pending_review' where id = '66666666-6666-6666-6666-666666666666';

  do $$
  begin
    perform public.reject_partner_profile('66666666-6666-6666-6666-666666666666', 'curto');
    raise warning 'FAIL - T29 - reject_partner_profile aceitou motivo com menos de 10 caracteres';
  exception when others then
    if sqlstate = '22023' then
      raise notice 'PASS - T29 - validation_error corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T29 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 30: Admin consegue criar categoria; noivo não consegue
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  insert into public.partner_categories (slug, label_pt) values ('test_category', 'Categoria de Teste');

  select pg_temp.check(
    'T30 - Admin consegue criar categoria',
    (select count(*) from public.partner_categories where slug = 'test_category') = 1
  );
rollback;

begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  begin
    insert into public.partner_categories (slug, label_pt) values ('test_category_2', 'Categoria de Teste 2');
    raise warning 'FAIL - T30b - Noivo conseguiu criar categoria (RLS nao bloqueou)';
  exception when insufficient_privilege or others then
    raise notice 'PASS - T30b - Insercao indevida de categoria bloqueada (%)', sqlstate;
  end $$;
rollback;

-- ============================================================
-- TESTE 31: suspend_user_account() transiciona e regista auditoria
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  select public.suspend_user_account('11111111-1111-1111-1111-111111111111', 'Comportamento abusivo reportado por outro utilizador');

  select pg_temp.check(
    'T31a - suspend_user_account() suspende a conta',
    (select status from public.profiles where id = '11111111-1111-1111-1111-111111111111') = 'suspended'
  );

  select pg_temp.check(
    'T31b - suspend_user_account() regista audit_logs',
    (select count(*) from public.audit_logs where action = 'suspend_user' and target_id = '11111111-1111-1111-1111-111111111111') = 1
  );
rollback;

-- ============================================================
-- TESTE 32: Admin não consegue suspender a própria conta (RN03)
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '77777777-7777-7777-7777-777777777777';

  do $$
  begin
    perform public.suspend_user_account('77777777-7777-7777-7777-777777777777', 'Motivo qualquer com mais de dez caracteres');
    raise warning 'FAIL - T32 - Admin conseguiu suspender a propria conta';
  exception when others then
    if sqlstate = 'P0001' then
      raise notice 'PASS - T32 - Auto-suspensao bloqueada (%)', sqlerrm;
    else
      raise warning 'FAIL - T32 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 33: Não-admin não consegue chamar suspend_user_account()
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '22222222-2222-2222-2222-222222222222';

  do $$
  begin
    perform public.suspend_user_account('11111111-1111-1111-1111-111111111111', 'Motivo qualquer com mais de dez caracteres');
    raise warning 'FAIL - T33 - Nao-admin conseguiu suspender uma conta';
  exception when others then
    if sqlstate = '42501' then
      raise notice 'PASS - T33 - forbidden corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T33 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 34: request_quote() bloqueado por RN01 (7 dias) e RN02 (wedding alheio)
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  begin
    perform public.request_quote(
      '55555555-5555-5555-5555-555555555555', 'aaaaaaaa-0000-0000-0000-000000000001',
      current_date + interval '2 days', 'Lisboa', 500, 1000, 'teste'
    );
    raise warning 'FAIL - T34a - request_quote aceitou data a menos de 7 dias (RN01)';
  exception when others then
    if sqlstate = 'P0003' then
      raise notice 'PASS - T34a - too_late corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T34a - excecao inesperada (%)', sqlstate;
    end if;
  end $$;

  do $$
  begin
    perform public.request_quote(
      '55555555-5555-5555-5555-555555555555', 'bbbbbbbb-0000-0000-0000-000000000002',
      current_date + interval '30 days', 'Lisboa', 500, 1000, 'teste'
    );
    raise warning 'FAIL - T34b - request_quote aceitou wedding_id alheio (RN02)';
  exception when others then
    if sqlstate = '42501' then
      raise notice 'PASS - T34b - forbidden corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T34b - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 35: fluxo feliz request_quote -> send_proposal -> accept_proposal cria booking
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  select public.request_quote(
    '55555555-5555-5555-5555-555555555555', 'aaaaaaaa-0000-0000-0000-000000000001',
    current_date + interval '30 days', 'Lisboa', 500, 1000, 'teste T35'
  ) as quote_id \gset

  select pg_temp.check(
    'T35a - request_quote() cria quote_requests em pending',
    (select status from public.quote_requests where id = :'quote_id') = 'pending'
  );
commit;

begin;
  set local role authenticated;
  set local app.current_user_id = '55555555-5555-5555-5555-555555555555';

  do $$
  declare v_quote_id uuid; v_proposal_id uuid;
  begin
    select id into v_quote_id from public.quote_requests where couple_id = '11111111-1111-1111-1111-111111111111' order by created_at desc limit 1;
    v_proposal_id := public.send_proposal(v_quote_id, 'Proposta T35', 'desc', 1000, 200, 'termos');
    raise notice 'PASS - T35b - send_proposal() criou proposta %', v_proposal_id;
  end $$;
commit;

begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  declare v_proposal_id uuid; v_booking_id uuid;
  begin
    select id into v_proposal_id from public.proposals where couple_id = '11111111-1111-1111-1111-111111111111' order by created_at desc limit 1;
    v_booking_id := public.accept_proposal(v_proposal_id);
    if (select status from public.bookings where id = v_booking_id) = 'awaiting_deposit' then
      raise notice 'PASS - T35c - accept_proposal() criou booking em awaiting_deposit';
    else
      raise warning 'FAIL - T35c - booking nao ficou em awaiting_deposit';
    end if;
  end $$;
rollback;

-- ============================================================
-- TESTE 36: Não-participante não vê quote_requests/proposals/bookings alheios
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '44444444-4444-4444-4444-444444444444';

  select pg_temp.check(
    'T36 - Nao-participante nao ve quote_requests de outros',
    (select count(*) from public.quote_requests) = 0
  );
commit;

-- ============================================================
-- TESTE 37: admin_confirm_deposit()/admin_complete_booking() só admin
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '22222222-2222-2222-2222-222222222222';

  do $$
  begin
    perform public.admin_confirm_deposit(gen_random_uuid());
    raise warning 'FAIL - T37 - Nao-admin conseguiu chamar admin_confirm_deposit()';
  exception when others then
    if sqlstate = '42501' then
      raise notice 'PASS - T37 - forbidden corretamente devolvido (%)', sqlerrm;
    else
      raise warning 'FAIL - T37 - excecao inesperada (%)', sqlstate;
    end if;
  end $$;
rollback;

\echo 'NOTA: pg_cron nao esta instalado no stub local (000_supabase_stub.sql) — expire_overdue_bookings() so foi validada por chamada direta contra o Supabase real (ver database/README.md), nao por um teste automatizado aqui.'

-- ============================================================
-- TESTE 38: admin_confirm_deposit() cruza amount_received com deposit_amount
-- ============================================================
begin;
  set local role authenticated;
  set local app.current_user_id = '11111111-1111-1111-1111-111111111111';

  do $$
  declare v_quote_id uuid; v_proposal_id uuid;
  begin
    v_quote_id := public.request_quote(
      '55555555-5555-5555-5555-555555555555', 'aaaaaaaa-0000-0000-0000-000000000001',
      current_date + interval '30 days', 'Lisboa', 500, 1000, 'teste T38'
    );
    perform set_config('app.current_user_id', '55555555-5555-5555-5555-555555555555', true);
    v_proposal_id := public.send_proposal(v_quote_id, 'Proposta T38', 'desc', 1000, 200, 'termos');
    perform set_config('app.current_user_id', '11111111-1111-1111-1111-111111111111', true);
    perform public.accept_proposal(v_proposal_id);
  end $$;

  do $$
  declare v_booking_id uuid;
  begin
    select id into v_booking_id from public.bookings where couple_id = '11111111-1111-1111-1111-111111111111' order by created_at desc limit 1;
    perform set_config('app.current_user_id', '77777777-7777-7777-7777-777777777777', true);

    begin
      perform public.admin_confirm_deposit(v_booking_id, 999);
      raise warning 'FAIL - T38a - admin_confirm_deposit aceitou valor errado';
    exception when others then
      if sqlstate = 'P0004' then
        raise notice 'PASS - T38a - amount_mismatch corretamente devolvido (%)', sqlerrm;
      else
        raise warning 'FAIL - T38a - excecao inesperada (%)', sqlstate;
      end if;
    end;

    perform public.admin_confirm_deposit(v_booking_id, 200);
    if (select status from public.bookings where id = v_booking_id) = 'confirmed' then
      raise notice 'PASS - T38b - admin_confirm_deposit() confirma automaticamente com o valor certo';
    else
      raise warning 'FAIL - T38b - booking nao ficou confirmed com o valor certo';
    end if;
  end $$;
rollback;

\echo '=== FIM DOS TESTES ==='
