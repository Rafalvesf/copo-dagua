-- ============================================================
-- Authentication — bloquear auto-registo como admin
-- ============================================================
--
-- BUG DE SEGURANÇA REAL encontrado pelo utilizador (2026-09-04): uma
-- conta criada através do registo público apareceu no admin-web com
-- `role = admin`. Causa: `handle_new_user()` (011_auth_provisioning.sql)
-- sempre confiou cegamente em `raw_user_meta_data->>'role'`, sem
-- verificar de onde veio o pedido — e o registo público
-- (`register_screen.dart` → `supabase.auth.signUp()`) manda esse campo
-- diretamente para o Auth. Qualquer chamada direta à API do Supabase
-- Auth (fora da app, ex: devtools/curl) com `data: {role: 'admin'}`
-- criava um admin completo, sem nenhuma autorização — viola RN09 de
-- `backend/auth/requirements.md` ("Administradores só podem ser criados
-- por outro Administrador já existente, nunca por auto-registo").
--
-- O único caminho legítimo para `role = 'admin'` é
-- `admin-web/app/(admin)/users/new/actions.ts`
-- (`admin.auth.admin.inviteUserByEmail()`, gated por
-- `has_admin_permission('user.create')`, `046_admin_user_creation_permission.sql`)
-- — que passa pela mesma trigger, mas usa a API de convite do Supabase
-- (service_role), não `signUp()` público. A diferença observável em
-- `auth.users`: só contas convidadas por essa via têm `invited_at`
-- preenchido; `signUp()` público nunca o define. Usa-se esse sinal para
-- distinguir os dois casos dentro da trigger, em vez de confiar
-- cegamente no valor enviado pelo cliente.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_requested_role text;
  v_role public.user_role;
  v_full_name text;
begin
  v_requested_role := new.raw_user_meta_data->>'role';
  v_full_name := coalesce(new.raw_user_meta_data->>'full_name', '');

  if v_requested_role = 'admin' and new.invited_at is null then
    -- Pedido de admin vindo de signUp() público (sem convite) — nunca
    -- confiar, cai para 'couple' em vez de deixar escalar privilégio.
    v_role := 'couple';
  else
    v_role := coalesce(v_requested_role::public.user_role, 'couple');
  end if;

  insert into public.profiles (id, role, full_name)
  values (new.id, v_role, v_full_name);

  if v_role = 'partner' then
    insert into public.partner_profiles (id, business_name)
    values (new.id, v_full_name);

    insert into public.partner_verification (partner_id, tax_id, billing_address)
    values (new.id, '', '');
  end if;

  return new;
end;
$$;
