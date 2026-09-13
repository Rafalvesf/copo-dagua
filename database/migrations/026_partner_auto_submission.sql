-- ============================================================
-- Módulo: Partner review — submissão automática
-- ============================================================
--
-- Pedido explícito do utilizador: "Não quero um botão separado de
-- 'Enviar para revisão'... Assim que o último requisito obrigatório for
-- concluído e validado" o perfil passa sozinho para `pending_review`. A
-- regra tem de viver na base de dados (não só num botão client-side) —
-- os requisitos podem deixar de estar cumpridos depois de já estarem
-- (ex: apagar uma foto do portefólio até ficar com menos de 3), por isso
-- a verificação real acontece a cada escrita relevante, não só numa
-- ação explícita do parceiro.
--
-- `partner_profile_requirements_met()` centraliza a mesma lista de
-- condições que `submit_partner_profile_for_review()` já validava
-- (`011_auth_provisioning.sql`), mais o logótipo
-- (`partner_profiles.cover_photo_url`, novo requisito) — reutilizada
-- pelas duas: a função de submissão manual mantém-se (chamada
-- diretamente se algum dia for útil, ex: um reenvio forçado por
-- suporte), mas a UI deixa de ter qualquer botão de "submeter" — ver
-- `partner_profile_screen.dart`.

create or replace function public.partner_profile_requirements_met(p_partner_id uuid)
returns boolean
language plpgsql
stable
set search_path = public, pg_temp
as $$
declare
  v_profile record;
  v_category_count int;
  v_image_count int;
  v_tax_id text;
begin
  select * into v_profile from public.partner_profiles where id = p_partner_id;
  if v_profile is null then
    return false;
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = p_partner_id;
  select count(*) into v_image_count
    from public.partner_portfolio_items
    where partner_id = p_partner_id and media_type = 'image';
  select tax_id into v_tax_id from public.partner_verification where partner_id = p_partner_id;

  return v_profile.business_name <> ''
    and length(v_profile.description) >= 50
    and v_category_count >= 1
    and v_image_count >= 3
    and (v_profile.nationwide or array_length(v_profile.service_areas, 1) is not null)
    and v_tax_id is not null and v_tax_id <> ''
    and v_profile.cover_photo_url is not null and v_profile.cover_photo_url <> '';
end;
$$;

-- ============================================================
-- submit_partner_profile_for_review() — reescrita para usar a mesma
-- função partilhada acima, e a lista de campos em falta usa os mesmos
-- nomes que a UI já traduz (`_missingFieldLabels`,
-- `partner_profile_screen.dart`), mais `'logo'`. Continua a existir
-- (não removida) para o caso de alguma vez ser preciso chamar
-- explicitamente, mas a UI já não a chama em lado nenhum.
-- ============================================================

create or replace function public.submit_partner_profile_for_review()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_profile record;
  v_category_count int;
  v_image_count int;
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
  if v_profile.status not in ('draft', 'rejected', 'changes_required') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = auth.uid();
  select count(*) into v_image_count
    from public.partner_portfolio_items
    where partner_id = auth.uid() and media_type = 'image';
  select tax_id into v_tax_id from public.partner_verification where partner_id = auth.uid();

  if v_profile.business_name = '' then v_missing := array_append(v_missing, 'business_name'); end if;
  if length(v_profile.description) < 50 then v_missing := array_append(v_missing, 'description'); end if;
  if v_category_count < 1 then v_missing := array_append(v_missing, 'categories'); end if;
  if v_image_count < 3 then v_missing := array_append(v_missing, 'portfolio'); end if;
  if not v_profile.nationwide and array_length(v_profile.service_areas, 1) is null then
    v_missing := array_append(v_missing, 'service_areas');
  end if;
  if v_tax_id is null or v_tax_id = '' then v_missing := array_append(v_missing, 'tax_id'); end if;
  if v_profile.cover_photo_url is null or v_profile.cover_photo_url = '' then
    v_missing := array_append(v_missing, 'logo');
  end if;

  if array_length(v_missing, 1) is not null then
    raise exception 'incomplete_profile' using errcode = 'P0005', detail = array_to_string(v_missing, ',');
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = auth.uid();
end;
$$;

-- ============================================================
-- Transição automática — chamada por triggers em todas as tabelas que
-- alimentam partner_profile_requirements_met(). `security definer`
-- porque corre a partir de triggers noutras tabelas, algumas das quais
-- (`partner_verification`) só o próprio dono consegue escrever de
-- qualquer forma — não abre nenhuma escrita nova, só reage a uma que já
-- era permitida.
-- ============================================================

create or replace function public.maybe_auto_submit_partner_profile(p_partner_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status partner_profile_status;
begin
  select status into v_status from public.partner_profiles where id = p_partner_id for update;
  if v_status is null or v_status not in ('draft', 'changes_required') then
    return;
  end if;
  if not public.partner_profile_requirements_met(p_partner_id) then
    return;
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = p_partner_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (p_partner_id, 'auto_submit_partner', 'partner_profiles', p_partner_id,
          jsonb_build_object('previous_status', v_status, 'note', 'Submissão automática — todos os requisitos obrigatórios ficaram satisfeitos.'));
end;
$$;

revoke execute on function public.maybe_auto_submit_partner_profile(uuid) from public, anon, authenticated;
grant execute on function public.maybe_auto_submit_partner_profile(uuid) to service_role;

-- ============================================================
-- Triggers — uma função pequena por tabela de origem, cada uma só a
-- derivar o partner_id certo do NEW/OLD antes de chamar a função
-- partilhada acima.
-- ============================================================

create or replace function public.trg_auto_submit_from_partner_profiles()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  perform public.maybe_auto_submit_partner_profile(new.id);
  return new;
end;
$$;

create trigger auto_submit_after_partner_profile_update
  after update on public.partner_profiles
  for each row execute function public.trg_auto_submit_from_partner_profiles();

create or replace function public.trg_auto_submit_from_categories()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  perform public.maybe_auto_submit_partner_profile(coalesce(new.partner_id, old.partner_id));
  return coalesce(new, old);
end;
$$;

create trigger auto_submit_after_category_change
  after insert or delete on public.partner_profile_categories
  for each row execute function public.trg_auto_submit_from_categories();

create or replace function public.trg_auto_submit_from_portfolio()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  perform public.maybe_auto_submit_partner_profile(coalesce(new.partner_id, old.partner_id));
  return coalesce(new, old);
end;
$$;

create trigger auto_submit_after_portfolio_change
  after insert or delete on public.partner_portfolio_items
  for each row execute function public.trg_auto_submit_from_portfolio();

create or replace function public.trg_auto_submit_from_verification()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  perform public.maybe_auto_submit_partner_profile(new.partner_id);
  return new;
end;
$$;

create trigger auto_submit_after_verification_update
  after update on public.partner_verification
  for each row execute function public.trg_auto_submit_from_verification();
