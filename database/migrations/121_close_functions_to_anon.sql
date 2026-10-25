-- ============================================================
-- Segurança: funções da base de dados só para quem tem sessão
-- ============================================================
-- Pedido do utilizador (2026-10-25). Aviso do Supabase: 46 funções
-- `security definer` podiam ser chamadas sem sessão iniciada (papel
-- `anon`) por /rest/v1/rpc/... Por dentro já verificavam o utilizador,
-- mas o mais seguro é nem as deixar chamar.
--
-- Ficam abertas a quem não tem sessão só as que as páginas públicas usam:
--   /invite/<código>   get_public_invite, lookup_wedding_by_guest_code
--   /rsvp/<token>      get_rsvp_details, submit_rsvp_full
--   convite de par     get_partner_invite
--   perfil público     get_review_authors
-- e as que as regras de acesso usam por dentro (is_*), para uma consulta
-- sem sessão dar "sem resultados" em vez de erro.
-- As funções de gatilho (trigger) não precisam de EXECUTE para correrem.
--
-- Também: search_path fixo nas 5 funções que não o tinham.

begin;

do $$
declare
  f record;
  keep text[] := array[
    'get_public_invite', 'lookup_wedding_by_guest_code', 'get_rsvp_details',
    'submit_rsvp_full', 'get_partner_invite', 'get_review_authors'
  ];
begin
  for f in
    select p.oid::regprocedure as sig, p.proname
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.prosecdef
      and p.prokind = 'f'
      and has_function_privilege('anon', p.oid, 'execute')
      and not (p.proname = any (keep))
      and p.proname not like 'is\_%'
  loop
    execute format('revoke execute on function %s from public, anon', f.sig);
    execute format('grant execute on function %s to authenticated, service_role', f.sig);
  end loop;
end $$;

-- search_path fixo (aviso "function_search_path_mutable").
do $$
declare
  f record;
begin
  for f in
    select p.oid::regprocedure as sig
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname in ('final_payment_due_at', 'phone_key', 'event_type_prefix', 'set_private_context', 'message_preview')
  loop
    execute format('alter function %s set search_path = public, pg_temp', f.sig);
  end loop;
end $$;

commit;
