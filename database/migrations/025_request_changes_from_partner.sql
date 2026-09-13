-- ============================================================
-- Módulo: Partner review — request_changes_from_partner()
-- ============================================================
--
-- Terceiro desfecho da revisão, ao lado de approve_partner_profile()/
-- reject_partner_profile() (007_partner_review_transitions.sql) — mesmo
-- padrão de autorização (has_admin_permission('partner.approve'), motivo
-- obrigatório ≥10 carateres) e mesmo campo (`rejection_reason`) para não
-- duplicar coluna: o significado de "o que falta corrigir" já é o mesmo
-- texto, só o `status` resultante é que distingue um desfecho do outro.

create or replace function public.request_changes_from_partner(p_partner_id uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  if not public.has_admin_permission('partner.approve') then
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
  set status = 'changes_required', reviewed_at = now(), reviewed_by = auth.uid(), rejection_reason = p_reason
  where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'request_changes_partner', 'partner_profiles', p_partner_id, jsonb_build_object('previous_status', v_status, 'reason', p_reason));
end;
$$;

revoke execute on function public.request_changes_from_partner(uuid, text) from public, anon;
grant execute on function public.request_changes_from_partner(uuid, text) to authenticated;
