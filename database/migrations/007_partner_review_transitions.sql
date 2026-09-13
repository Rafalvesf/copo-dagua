-- ============================================================
-- Módulo: Partners / admin-web (admin-web/partners/api.md)
-- ============================================================
--
-- Uma função Postgres por transição em vez de deixar o Edge Function fazer
-- update + insert como duas chamadas REST separadas: o corpo de uma função
-- plpgsql é uma única transação implícita, o que é a única forma real de
-- garantir "status muda e audit_logs regista, nunca só um dos dois" (RN06
-- de admin-web/partners/requirements.md). O Edge Function correspondente
-- (supabase/functions/<nome>/) é só um wrapper fino sobre supabase.rpc().

create or replace function public.approve_partner_profile(p_partner_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.partner_profiles where id = p_partner_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'pending_review' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.partner_profiles
  set status = 'published', reviewed_at = now(), reviewed_by = auth.uid(), rejection_reason = null
  where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'approve_partner', 'partner_profiles', p_partner_id, jsonb_build_object('previous_status', v_status));
end;
$$;

create or replace function public.reject_partner_profile(p_partner_id uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_reason is null or length(trim(p_reason)) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select status into v_status from public.partner_profiles where id = p_partner_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'pending_review' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.partner_profiles
  set status = 'rejected', reviewed_at = now(), reviewed_by = auth.uid(), rejection_reason = p_reason
  where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'reject_partner', 'partner_profiles', p_partner_id, jsonb_build_object('previous_status', v_status, 'reason', p_reason));
end;
$$;

create or replace function public.suspend_partner_profile(p_partner_id uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_reason is null or length(trim(p_reason)) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select status into v_status from public.partner_profiles where id = p_partner_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'published' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  -- RN04: suspensão não toca reviewed_at/reviewed_by/rejection_reason — não é uma revisão.
  update public.partner_profiles set status = 'suspended' where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'suspend_partner', 'partner_profiles', p_partner_id, jsonb_build_object('previous_status', v_status, 'reason', p_reason));
end;
$$;

create or replace function public.restore_partner_profile(p_partner_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.partner_profiles where id = p_partner_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'suspended' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.partner_profiles set status = 'published' where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'restore_partner', 'partner_profiles', p_partner_id, jsonb_build_object('previous_status', v_status));
end;
$$;

-- security definer + verificação explícita de is_admin() dentro de cada função
-- (não confiar só em quem pode chamar) — mesmo padrão de risco documentado em
-- admin-web/partners/api.md, "Autorização em duas camadas".
revoke execute on function public.approve_partner_profile(uuid) from public, anon;
revoke execute on function public.reject_partner_profile(uuid, text) from public, anon;
revoke execute on function public.suspend_partner_profile(uuid, text) from public, anon;
revoke execute on function public.restore_partner_profile(uuid) from public, anon;

grant execute on function public.approve_partner_profile(uuid) to authenticated;
grant execute on function public.reject_partner_profile(uuid, text) to authenticated;
grant execute on function public.suspend_partner_profile(uuid, text) to authenticated;
grant execute on function public.restore_partner_profile(uuid) to authenticated;
