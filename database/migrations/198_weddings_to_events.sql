-- ============================================================================
-- À Nossa! — Migração: weddings -> events  +  my_wedding_permissions -> my_event_permissions
-- Data: 2026-11-17
--
-- Contexto: "weddings" deixa de ser a entidade; passa a ser apenas um TIPO de
-- evento. A tabela passa a chamar-se `events` e a função de permissões passa a
-- `my_event_permissions`.
--
-- Âmbito (decidido com o Rafael): SÓ a tabela e a função.
--   • As colunas `wedding_id` nas outras tabelas FICAM como estão.
--   • Os nomes de função com "wedding" no nome (is_wedding_member,
--     wedding_can, join_wedding_by_code, get_my_guest_weddings, ...) FICAM.
--   • A tabela `wedding_collaborators` FICA com esse nome.
--
-- Porque é preciso recriar funções: ao renomear a tabela, as políticas RLS,
-- as chaves estrangeiras, os índices e os triggers seguem a tabela
-- automaticamente, MAS o corpo das funções (texto) continua a dizer
-- "weddings" e partia. Por isso recriamos todas as que a referem.
--
-- Corre tudo DE UMA VEZ (uma só transação). Se algo falhar, nada é aplicado.
-- IRREVERSÍVEL na prática depois de confirmado: faz um backup/cópia antes.
-- ============================================================================

begin;

-- 1) Tabela ------------------------------------------------------------------
alter table public.weddings rename to events;

-- 2) Função de permissões (my_wedding_permissions(uuid)) ---------------------
alter function public.my_wedding_permissions(uuid) rename to my_event_permissions;

-- 3) Recriar as funções que mencionam 'weddings' (tabela) ou
--    'my_wedding_permissions' (função) no corpo, trocando esses nomes.
--
--    • 'weddings'  ->  'events'  (só a palavra inteira; NÃO toca em
--      wedding_id, wedding_collaborators, is_wedding_member,
--      get_my_guest_weddings, etc.)
--    • 'my_wedding_permissions' -> 'my_event_permissions'
--
--    Nota: se alguma função usar a palavra "weddings" no plural dentro de um
--    literal/comentário, também é trocada — foi verificado que não é o caso
--    (os tipos de evento são no singular, p.ex. 'wedding').
do $migrate$
declare
  r record;
  newdef text;
  n int := 0;
begin
  for r in
    select p.oid
    from pg_proc p
    join pg_namespace nsp on nsp.oid = p.pronamespace
    where nsp.nspname = 'public'
      and p.prokind in ('f','p')
      and (pg_get_functiondef(p.oid) ~* '\mweddings\M'
           or pg_get_functiondef(p.oid) ~* 'my_wedding_permissions')
  loop
    newdef := pg_get_functiondef(r.oid);
    newdef := regexp_replace(newdef, 'my_wedding_permissions', 'my_event_permissions', 'g');
    newdef := regexp_replace(newdef, '\mweddings\M', 'events', 'g');
    execute newdef;
    n := n + 1;
  end loop;
  raise notice 'Funções recriadas: %', n;
end
$migrate$;

commit;

-- ============================================================================
-- Verificação (correr DEPOIS, deve dar 0 linhas em cada):
--
--   -- Nenhuma função deve continuar a referir a tabela antiga nem a função antiga:
--   select nsp.nspname, p.proname
--   from pg_proc p join pg_namespace nsp on nsp.oid=p.pronamespace
--   where nsp.nspname='public' and p.prokind in ('f','p')
--     and (pg_get_functiondef(p.oid) ~* '\mweddings\M'
--          or pg_get_functiondef(p.oid) ~* 'my_wedding_permissions');
--
--   -- A tabela antiga não deve existir e a nova deve existir:
--   select to_regclass('public.weddings') as antiga, to_regclass('public.events') as nova;
-- ============================================================================
