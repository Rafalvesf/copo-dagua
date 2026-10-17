-- ============================================================
-- 084 — entrar/criar conta com Google e Apple
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "adiciona o Google e a Apple sign
-- up e log in". Com Google/Apple a conta nasce sem `role` nos metadados
-- (fica 'couple' por omissão em `handle_new_user()`). Quem escolheu
-- "Sou parceiro" ou "Fui convidado" antes de carregar no botão acerta o
-- papel logo a seguir, uma única vez: só funciona numa conta acabada de
-- criar (menos de 1 hora) e ainda sem onboarding feito.

create or replace function public.set_new_account_role(p_role text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_profile record;
  v_created timestamptz;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_role not in ('couple', 'partner', 'guest') then
    raise exception 'invalid_role' using errcode = '22023';
  end if;

  select * into v_profile from public.profiles where id = auth.uid();
  select created_at into v_created from auth.users where id = auth.uid();
  if v_profile is null or v_profile.role::text = p_role then
    return;
  end if;
  if v_profile.onboarding_completed or v_created < now() - interval '1 hour' then
    raise exception 'too_late' using errcode = '42501';
  end if;

  update public.profiles set role = p_role::public.user_role where id = auth.uid();

  if p_role = 'partner' then
    insert into public.partner_profiles (id, business_name)
    values (auth.uid(), coalesce(v_profile.full_name, ''))
    on conflict (id) do nothing;
    insert into public.partner_verification (partner_id, tax_id, billing_address)
    values (auth.uid(), '', '')
    on conflict do nothing;
  end if;
end;
$$;

revoke execute on function public.set_new_account_role(text) from public, anon;
grant execute on function public.set_new_account_role(text) to authenticated;
