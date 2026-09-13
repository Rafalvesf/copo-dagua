-- ============================================================
-- Módulo: Authentication + Profile (partner-app)
-- (backend/auth/api.md "on-user-created", partner-app/profile/api.md
--  "on-partner-created" e "submit-partner-profile-for-review")
-- ============================================================
--
-- BUG REAL CORRIGIDO 2026-08-30: estas duas triggers/função estavam
-- documentadas desde a sessão de Authentication/Profile mas nunca tinham
-- sido escritas em nenhuma migração — um signup real no Supabase criava
-- `auth.users` sem nenhuma linha correspondente em `profiles`, partindo
-- todas as policies de RLS que dependem de `profiles` existir
-- (`is_admin()`, `is_wedding_member()`, etc.) para esse utilizador.
-- Só descoberto ao planear ligar a app Flutter ao projeto real.

-- ============================================================
-- on-user-created / on-partner-created
-- ============================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_role public.user_role;
  v_full_name text;
begin
  v_role := coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'couple');
  v_full_name := coalesce(new.raw_user_meta_data->>'full_name', '');

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

-- Corre como o superuser que possui a função (security definer), não
-- como o utilizador que se está a registar — é por isso que consegue
-- escrever em profiles/partner_profiles apesar de essas tabelas não
-- terem policy de insert para authenticated (ver
-- partner-app/profile/database.md, nota sobre on-partner-created).
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- submit-partner-profile-for-review (RN04 de partner-app/profile/requirements.md)
-- ============================================================
--
-- NIF: só verifica presença (`tax_id <> ''`), não o checksum módulo 11
-- documentado em partner-app/profile/validations.md — essa validação
-- (`validate-nif`) é outra Edge Function nunca implementada; fora de
-- âmbito desta migração, ver database/README.md.
create or replace function public.submit_partner_profile_for_review()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_profile record;
  v_category_count int;
  v_portfolio_count int;
  v_tax_id text;
  v_missing text[] := '{}';
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_profile from public.partner_profiles where id = auth.uid() for update;
  if v_profile is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_profile.status not in ('draft', 'rejected') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = auth.uid();
  select count(*) into v_portfolio_count from public.partner_portfolio_items where partner_id = auth.uid();
  select tax_id into v_tax_id from public.partner_verification where partner_id = auth.uid();

  if v_profile.business_name = '' then v_missing := array_append(v_missing, 'business_name'); end if;
  if length(v_profile.description) < 50 then v_missing := array_append(v_missing, 'description'); end if;
  if v_category_count < 1 then v_missing := array_append(v_missing, 'categories'); end if;
  if v_portfolio_count < 3 then v_missing := array_append(v_missing, 'portfolio'); end if;
  if not v_profile.nationwide and array_length(v_profile.service_areas, 1) is null then
    v_missing := array_append(v_missing, 'service_areas');
  end if;
  if v_tax_id is null or v_tax_id = '' then v_missing := array_append(v_missing, 'tax_id'); end if;

  if array_length(v_missing, 1) is not null then
    raise exception 'incomplete_profile' using errcode = 'P0005', detail = array_to_string(v_missing, ',');
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = auth.uid();
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.submit_partner_profile_for_review() from public, anon;
grant execute on function public.submit_partner_profile_for_review() to authenticated;
