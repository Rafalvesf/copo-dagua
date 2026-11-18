-- 202_organizer_invite_in_events_tab.sql
-- Convites de organização direcionados: guardar a QUEM se destinam e listar
-- os que estão por responder para a pessoa convidada, para aparecerem na aba
-- dos eventos (linha de convite verde, §7), tal como os convites de
-- convidado. 2026-11-18.

-- 1. A quem se destina o convite (null = convite por link, aberto a qualquer
--    pessoa que receba o link).
alter table public.wedding_partner_invites
  add column if not exists target_user uuid references public.profiles(id);

create index if not exists wedding_partner_invites_target_user
  on public.wedding_partner_invites (target_user)
  where target_user is not null and used_at is null;

-- 2. invite_organizer passa a marcar target_user e a reutilizar um convite
--    pendente para a mesma pessoa/evento (não cria duplicados).
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

  -- Reutiliza um convite direcionado ainda por usar (evita duplicados).
  select token into v_token
    from public.wedding_partner_invites
   where wedding_id = p_wedding and target_user = p_user
     and used_at is null and expires_at > now()
   order by created_at desc
   limit 1;

  if v_token is null then
    insert into public.wedding_partner_invites (wedding_id, created_by, target_user)
    values (p_wedding, auth.uid(), p_user)
    returning token into v_token;
  end if;

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

-- 3. Convites de organização por responder, para a pessoa convidada (para a
--    aba dos eventos). Exclui quem já é dono ou colaborador do evento.
create or replace function public.my_organizer_invites()
  returns table (token uuid, wedding_id uuid, event_name text, inviter_name text, created_at timestamptz)
  language sql security definer
  set search_path to 'public','pg_temp'
as $$
  select i.token,
         i.wedding_id,
         nullif(btrim(concat_ws(' & ',
           nullif(btrim(coalesce(w.partner_name_1,'')),''),
           nullif(btrim(coalesce(w.partner_name_2,'')),''))), '') as event_name,
         p.full_name as inviter_name,
         i.created_at
    from public.wedding_partner_invites i
    join public.events w on w.id = i.wedding_id
    left join public.profiles p on p.id = i.created_by
   where i.target_user = auth.uid()
     and i.used_at is null
     and i.expires_at > now()
     and w.owner_id <> auth.uid()
     and not exists (
       select 1 from public.wedding_collaborators c
       where c.wedding_id = i.wedding_id
         and c.user_id = auth.uid()
         and c.status in ('active','pending')
     )
   order by i.created_at desc;
$$;

revoke execute on function public.my_organizer_invites() from public, anon;
grant execute on function public.my_organizer_invites() to authenticated;
