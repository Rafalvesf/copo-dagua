-- ============================================================
-- 159 — O que cada co-organizador pode fazer
-- ============================================================
-- Pedido do utilizador (2026-11-03): "dá liberdade ao organizador
-- administrador de adicionar e remover estas capacidades e manter apenas
-- uma, por exemplo: ver os bilhetes vendidos e validar entradas".
--
-- wedding_collaborators.permissions: chave a false = não pode. Chaves que
-- faltam = pode (quem já organiza continua a poder tudo).
--
--   evento      editar o evento, o que os convidados veem, galeria, envelopes
--   convidados  lista, mesas, pedidos para entrar
--   tarefas     tarefas partilhadas e checklist
--   conversas   conversas com os parceiros e pedidos de orçamento
--   bilhetes    bilhetes vendidos e validar entradas
--   orcamento   orçamento, despesas, favoritos e preferências de serviços
--
-- O dono do evento pode sempre tudo. Ver o evento continua aberto a todos
-- os organizadores; apagar o evento, gerir organizadores e reembolsar
-- bilhetes continuam só do dono.
--
-- As políticas e funções existentes são reescritas trocando
-- is_wedding_member(x) por wedding_can(x, '<capacidade>'), sem mudar mais nada.
-- Corre DEPOIS da 158.

begin;

alter table public.wedding_collaborators
  add column if not exists permissions jsonb not null default '{}'::jsonb;

create or replace function public.wedding_can(target_wedding_id uuid, perm text)
returns boolean
language sql stable security definer set search_path = public, pg_temp as $$
  select exists (
    select 1 from public.weddings w
    where w.id = target_wedding_id and w.owner_id = auth.uid()
  )
  or exists (
    select 1 from public.wedding_collaborators wc
    where wc.wedding_id = target_wedding_id
      and wc.user_id = auth.uid()
      and wc.status = 'active'
      and coalesce(wc.permissions ->> perm, 'true') <> 'false'
  );
$$;
revoke execute on function public.wedding_can(uuid, text) from public, anon;
grant execute on function public.wedding_can(uuid, text) to authenticated;

-- ---------- Políticas ----------
do $do$
declare
  m record;
  pol record;
  v_qual text;
  v_check text;
  v_sql text;
  re constant text := '(public\.)?is_wedding_member\(([^()]+)\)';
begin
  for m in
    select * from (values
      ('public', 'weddings', 'Members can update wedding', 'evento'),
      ('storage', 'objects', 'Wedding members can upload own banner', 'evento'),
      ('storage', 'objects', 'Wedding members can update own banner', 'evento'),
      ('storage', 'objects', 'Wedding members can delete own banner', 'evento'),
      ('storage', 'objects', 'Gallery delete by uploader or wedding member', 'evento'),
      ('public', 'wedding_gallery_photos', 'Uploader or wedding member can delete', 'evento'),
      ('public', 'gallery_photo_comments', 'Delete own comment or as couple', 'evento'),
      ('public', 'gift_envelopes', 'Guest or hosts read envelopes', 'evento'),
      ('public', 'guests', 'guests_select', 'convidados'),
      ('public', 'guests', 'guests_insert', 'convidados'),
      ('public', 'guests', 'guests_update', 'convidados'),
      ('public', 'guests', 'guests_delete', 'convidados'),
      ('public', 'seating_tables', 'Members manage seating', 'convidados'),
      ('public', 'guest_companions', 'guest_companions_select', 'convidados'),
      ('public', 'guest_join_requests', 'Organizers and requester read join requests', 'convidados'),
      ('public', 'wedding_guest_members', 'Guest sees own membership, wedding members see their guests', 'convidados'),
      ('public', 'wedding_tasks', 'wedding_tasks_select', 'tarefas'),
      ('public', 'wedding_tasks', 'wedding_tasks_insert', 'tarefas'),
      ('public', 'wedding_tasks', 'wedding_tasks_update', 'tarefas'),
      ('public', 'wedding_tasks', 'wedding_tasks_delete', 'tarefas'),
      ('public', 'checklist_items', 'Members manage checklist', 'tarefas'),
      ('public', 'conversations', 'Members can create own conversations', 'conversas'),
      ('public', 'conversations', 'Members can view own conversations', 'conversas'),
      ('public', 'messages', 'Members can send own messages', 'conversas'),
      ('public', 'messages', 'Members can view own messages', 'conversas'),
      ('public', 'event_tickets', 'Buyer or organizer reads tickets', 'bilhetes'),
      ('public', 'budget_categories', 'Members manage budget categories', 'orcamento'),
      ('public', 'budgets', 'Members manage budget', 'orcamento'),
      ('public', 'expenses', 'Members manage expenses', 'orcamento'),
      ('public', 'favorite_partners', 'Members manage favorites', 'orcamento'),
      ('public', 'wedding_service_preferences', 'Members manage service preferences', 'orcamento')
    ) as t(sch, tbl, pname, perm)
  loop
    select * into pol from pg_policies p
    where p.schemaname = m.sch and p.tablename = m.tbl and p.policyname = m.pname;
    if pol is null then
      raise notice 'política não encontrada: %.% "%"', m.sch, m.tbl, m.pname;
      continue;
    end if;
    v_qual := case when pol.qual is null then null
                   else regexp_replace(pol.qual, re, format('public.wedding_can(\2, %L::text)', m.perm), 'g') end;
    v_check := case when pol.with_check is null then null
                    else regexp_replace(pol.with_check, re, format('public.wedding_can(\2, %L::text)', m.perm), 'g') end;
    if v_qual is not distinct from pol.qual and v_check is not distinct from pol.with_check then
      continue;
    end if;
    v_sql := format('alter policy %I on %I.%I', m.pname, m.sch, m.tbl);
    if v_qual is not null then v_sql := v_sql || ' using (' || v_qual || ')'; end if;
    if v_check is not null then v_sql := v_sql || ' with check (' || v_check || ')'; end if;
    execute v_sql;
  end loop;
end;
$do$;

-- ---------- Funções ----------
do $do$
declare
  m record;
  f record;
  v_def text;
  re constant text := '(public\.)?is_wedding_member\(([^()]+)\)';
begin
  for m in
    select * from (values
      ('check_in_ticket', 'bilhetes'),
      ('event_ticket_list', 'bilhetes'),
      ('event_ticket_summary', 'bilhetes'),
      ('review_join_request', 'convidados'),
      ('set_guest_sections', 'evento'),
      ('update_gift_envelope', 'evento'),
      ('moderate_gallery_photo', 'evento'),
      ('mark_conversation_read', 'conversas'),
      ('request_quote', 'conversas')
    ) as t(fname, perm)
  loop
    for f in
      select p.oid from pg_proc p join pg_namespace n on n.oid = p.pronamespace
      where n.nspname = 'public' and p.proname = m.fname
    loop
      v_def := pg_get_functiondef(f.oid);
      if v_def ~ re then
        execute regexp_replace(v_def, re, format('public.wedding_can(\2, %L::text)', m.perm), 'g');
      end if;
    end loop;
  end loop;
end;
$do$;

-- ---------- Organizadores do evento ----------
create or replace function public.wedding_organizers(p_wedding uuid)
returns table (collaborator_id uuid, user_id uuid, name text, email text, status text, is_owner boolean, permissions jsonb)
language sql stable security definer set search_path = public, pg_temp as $$
  select null::uuid, w.owner_id, coalesce(nullif(trim(p.full_name), ''), 'Organizador'), u.email::text, 'active', true, '{}'::jsonb
  from public.weddings w
  left join public.profiles p on p.id = w.owner_id
  left join auth.users u on u.id = w.owner_id
  where w.id = p_wedding and public.is_wedding_member(p_wedding)
  union all
  select wc.id, wc.user_id, coalesce(nullif(trim(p.full_name), ''), wc.invited_email, 'Organizador'),
         coalesce(u.email::text, wc.invited_email), wc.status::text, false, wc.permissions
  from public.wedding_collaborators wc
  left join public.profiles p on p.id = wc.user_id
  left join auth.users u on u.id = wc.user_id
  where wc.wedding_id = p_wedding and wc.status <> 'removed' and public.is_wedding_member(p_wedding);
$$;
revoke execute on function public.wedding_organizers(uuid) from public, anon;
grant execute on function public.wedding_organizers(uuid) to authenticated;

-- O que eu posso neste evento (a app esconde o resto).
create or replace function public.my_wedding_permissions(p_wedding uuid)
returns jsonb
language sql stable security definer set search_path = public, pg_temp as $$
  select jsonb_build_object(
    'is_owner', exists (select 1 from public.weddings where id = p_wedding and owner_id = auth.uid()),
    'evento', public.wedding_can(p_wedding, 'evento'),
    'convidados', public.wedding_can(p_wedding, 'convidados'),
    'tarefas', public.wedding_can(p_wedding, 'tarefas'),
    'conversas', public.wedding_can(p_wedding, 'conversas'),
    'bilhetes', public.wedding_can(p_wedding, 'bilhetes'),
    'orcamento', public.wedding_can(p_wedding, 'orcamento')
  );
$$;
revoke execute on function public.my_wedding_permissions(uuid) from public, anon;
grant execute on function public.my_wedding_permissions(uuid) to authenticated;

-- Só o dono muda o que cada organizador pode.
create or replace function public.set_organizer_permissions(p_collaborator uuid, p_permissions jsonb)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_wedding uuid;
begin
  select wedding_id into v_wedding from public.wedding_collaborators where id = p_collaborator;
  if v_wedding is null or not exists (select 1 from public.weddings where id = v_wedding and owner_id = auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if jsonb_typeof(p_permissions) <> 'object' or pg_column_size(p_permissions) > 1000 then
    raise exception 'invalid_permissions' using errcode = 'P0001';
  end if;
  update public.wedding_collaborators set permissions = p_permissions where id = p_collaborator;
end;
$$;
revoke execute on function public.set_organizer_permissions(uuid, jsonb) from public, anon;
grant execute on function public.set_organizer_permissions(uuid, jsonb) to authenticated;

-- Só o dono retira um organizador.
create or replace function public.remove_organizer(p_collaborator uuid)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_wedding uuid;
begin
  select wedding_id into v_wedding from public.wedding_collaborators where id = p_collaborator;
  if v_wedding is null or not exists (select 1 from public.weddings where id = v_wedding and owner_id = auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  update public.wedding_collaborators set status = 'removed', removed_at = now() where id = p_collaborator;
end;
$$;
revoke execute on function public.remove_organizer(uuid) from public, anon;
grant execute on function public.remove_organizer(uuid) to authenticated;

commit;
