-- ============================================================
-- Módulo: Admin RBAC (admin-web)
-- ============================================================
--
-- Até aqui, "é admin" era um único booleano (`profiles.role = 'admin'`,
-- via `is_admin()`) — sem distinção nenhuma entre quem só precisa de ver
-- dados e quem pode aprovar parceiros, suspender contas ou confirmar
-- pagamentos. Pedido explícito do utilizador para fechar este gap.
--
-- `is_admin()` mantém-se tal como está e continua a ser usada em todas as
-- policies de SELECT "admin vê tudo" — leitura ampla para qualquer admin
-- continua a fazer sentido (RN implícita: "ADMIN: gestão operacional"
-- precisa de visibilidade total para poder atuar). O que muda é que as
-- ações de escrita mais sensíveis (aprovar/suspender parceiro, suspender
-- conta, confirmar sinal, fechar reserva) passam a exigir uma permissão
-- concreta em vez de só "é admin" — `has_admin_permission()` abaixo.

create type public.admin_role as enum ('super_admin', 'admin', 'support', 'finance', 'moderator');

alter table public.profiles add column admin_role public.admin_role;

-- Backfill: o(s) admin(s) que já existem tornam-se super_admin — são o
-- fundador da plataforma, não uma conta criada por um super_admin.
update public.profiles set admin_role = 'super_admin' where role = 'admin';

create or replace function public.has_admin_permission(p_permission text)
returns boolean
language plpgsql
security definer
stable
set search_path = public, pg_temp
as $$
declare
  v_role public.user_role;
  v_admin_role public.admin_role;
begin
  select role, admin_role into v_role, v_admin_role from public.profiles where id = auth.uid();
  if v_role is distinct from 'admin' then
    return false;
  end if;

  -- Sem `admin_role` atribuído (conta admin anterior a esta migração, ou
  -- ainda não classificada) cai em 'admin' por omissão — nunca deve
  -- trancar um admin já existente fora de ações que já conseguia fazer.
  v_admin_role := coalesce(v_admin_role, 'admin');

  return case v_admin_role
    when 'super_admin' then true
    when 'admin' then p_permission in (
      'partner.read', 'partner.approve', 'partner.suspend',
      'booking.read', 'booking.manage',
      'user.read', 'user.suspend',
      'review.moderate',
      'payment.read'
    )
    when 'support' then p_permission in ('booking.read', 'user.read', 'user.suspend', 'support.manage')
    when 'finance' then p_permission in ('payment.read', 'payment.write', 'payment.refund', 'booking.read')
    when 'moderator' then p_permission in ('partner.read', 'partner.approve', 'partner.suspend', 'review.moderate')
    else false
  end;
end;
$$;

revoke execute on function public.has_admin_permission(text) from public, anon;
grant execute on function public.has_admin_permission(text) to authenticated;

-- ============================================================
-- Retrofit das funções de escrita já existentes — só a linha do check de
-- autorização muda (is_admin() -> has_admin_permission('...')); o resto
-- de cada função fica byte-a-byte igual ao que já estava em produção.
-- ============================================================

create or replace function public.approve_partner_profile(p_partner_id uuid)
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
  if not public.has_admin_permission('partner.suspend') then
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
  if not public.has_admin_permission('partner.suspend') then
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

create or replace function public.suspend_user_account(p_user_id uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status text;
begin
  if not public.has_admin_permission('user.suspend') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_user_id = auth.uid() then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_reason is null or length(trim(p_reason)) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select status into v_status from public.profiles where id = p_user_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'active' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.profiles set status = 'suspended' where id = p_user_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'suspend_user', 'profiles', p_user_id, jsonb_build_object('previous_status', v_status, 'reason', p_reason));
end;
$$;

create or replace function public.restore_user_account(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status text;
begin
  if not public.has_admin_permission('user.suspend') then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.profiles where id = p_user_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'suspended' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.profiles set status = 'active' where id = p_user_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'restore_user', 'profiles', p_user_id, jsonb_build_object('previous_status', v_status));
end;
$$;

create or replace function public.admin_confirm_deposit(p_booking_id uuid, p_amount_received numeric)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
  v_deposit_amount numeric;
begin
  if not public.has_admin_permission('payment.write') then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status, deposit_amount into v_status, v_deposit_amount
  from public.bookings where id = p_booking_id for update;

  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'awaiting_deposit' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_amount_received is null or p_amount_received <> v_deposit_amount then
    raise exception 'amount_mismatch' using errcode = 'P0004';
  end if;

  update public.bookings set status = 'confirmed', confirmed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id, metadata)
  values (p_booking_id, 'deposit_confirmed_stub', 'awaiting_deposit', 'confirmed', 'admin', auth.uid(),
          jsonb_build_object(
            'note', 'Confirmado manualmente — sem integração de pagamento real ainda',
            'amount_received', p_amount_received,
            'expected_deposit_amount', v_deposit_amount
          ));
end;
$$;

create or replace function public.admin_complete_booking(p_booking_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status booking_status;
begin
  if not public.has_admin_permission('booking.manage') then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.bookings where id = p_booking_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'confirmed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.bookings set status = 'completed', completed_at = now() where id = p_booking_id;

  insert into public.booking_events (booking_id, event_type, old_status, new_status, actor_type, actor_id)
  values (p_booking_id, 'booking_completed', 'confirmed', 'completed', 'admin', auth.uid());
end;
$$;
