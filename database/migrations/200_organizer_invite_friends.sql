-- ============================================================================
-- Convidar para organizar amigos que já segues (seguir recíproco).
-- Já aplicada por mim na Supabase (2026-11-18); fica aqui para o histórico.
--
--  • organizer_invite_candidates(p_wedding): amigos com seguir recíproco que
--    ainda não organizam o evento (só o dono vê candidatos).
--  • invite_organizer(p_wedding, p_user): cria um convite direcionado
--    (wedding_partner_invites) e NOTIFICA a pessoa com um link /juntar/<token>,
--    que ela aceita com a sessão iniciada. Devolve o token.
-- ============================================================================

create or replace function public.organizer_invite_candidates(p_wedding uuid)
  returns table(id uuid, full_name text, avatar_url text, username text)
  language sql stable security definer
  set search_path to 'public','pg_temp'
as $$
  select p.id, p.full_name, p.avatar_url, p.username
  from public.follows f1
  join public.follows f2
    on f2.follower_id = f1.profile_id and f2.profile_id = f1.follower_id
  join public.profiles p on p.id = f1.profile_id
  where f1.follower_id = auth.uid()
    and f1.profile_id is not null
    and p.id <> auth.uid()
    and exists (select 1 from public.events w where w.id = p_wedding and w.owner_id = auth.uid())
    and not exists (select 1 from public.events w where w.id = p_wedding and w.owner_id = p.id)
    and not exists (
      select 1 from public.wedding_collaborators c
      where c.wedding_id = p_wedding and c.user_id = p.id and c.status in ('active','pending')
    )
  order by p.full_name
  limit 30;
$$;

create or replace function public.invite_organizer(p_wedding uuid, p_user uuid)
  returns uuid
  language plpgsql security definer
  set search_path to 'public','pg_temp'
as $$
declare
  v_token uuid;
  v_names text;
  v_inviter text;
begin
  if auth.uid() is null
     or not exists (select 1 from public.events w where w.id = p_wedding and w.owner_id = auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_user = auth.uid() then
    raise exception 'self' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.events w where w.id = p_wedding and w.owner_id = p_user)
     or exists (select 1 from public.wedding_collaborators c
                where c.wedding_id = p_wedding and c.user_id = p_user and c.status in ('active','pending')) then
    raise exception 'already_organizer' using errcode = 'P0001';
  end if;

  insert into public.wedding_partner_invites (wedding_id, created_by)
  values (p_wedding, auth.uid())
  returning token into v_token;

  select nullif(btrim(concat_ws(' & ',
           nullif(btrim(coalesce(partner_name_1,'')),''),
           nullif(btrim(coalesce(partner_name_2,'')),''))), '')
    into v_names from public.events where id = p_wedding;
  select full_name into v_inviter from public.profiles where id = auth.uid();

  insert into public.notifications (profile_id, wedding_id, type, title, body, link)
  values (
    p_user, p_wedding, 'organizer_invite',
    concat(coalesce(nullif(btrim(v_inviter),''),'Alguém'), ' convidou-te para organizar'),
    concat('Toca para te juntares a ', coalesce(v_names,'um evento'), '.'),
    concat('/juntar/', v_token::text)
  );

  return v_token;
end;
$$;
