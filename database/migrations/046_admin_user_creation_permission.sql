-- ============================================================
-- "Adicionar novo utilizador" no admin-web — pedido explícito do
-- utilizador (2026-09-01): casal, parceiro, suporte e moderador.
-- `support`/`moderator` já existiam como valores de `admin_role`
-- (018_admin_rbac.sql), só nunca havia nenhuma forma de os atribuir —
-- esta migração só acrescenta a permissão que falta, retrofit da
-- mesma `has_admin_permission()` (padrão já usado em 018).
--
-- RN: só `admin`/`super_admin` podem criar contas novas — `support`/
-- `moderator`/`finance` não entram na lista de `user.create`, para não
-- permitirem escalada de privilégio (um `support` a criar outro
-- `support`, ou pior, um `admin`).
-- ============================================================

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

  v_admin_role := coalesce(v_admin_role, 'admin');

  return case v_admin_role
    when 'super_admin' then true
    when 'admin' then p_permission in (
      'partner.read', 'partner.approve', 'partner.suspend',
      'booking.read', 'booking.manage',
      'user.read', 'user.suspend', 'user.create',
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
