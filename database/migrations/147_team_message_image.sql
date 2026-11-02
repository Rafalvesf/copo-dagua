-- ============================================================
-- 147 — Imagem nas mensagens da Equipa À Nossa!
-- ============================================================
--
-- Pedido do utilizador (2026-11): juntar uma imagem à mensagem
-- (notificação, banner ou direta). O admin redimensiona e comprime a
-- imagem para o tamanho em que aparece na app antes de a enviar.
-- Bucket PÚBLICO `team-media` (as mensagens vão para muita gente); só a
-- equipa (admin) pode enviar ficheiros.
--
-- Corre DEPOIS da 146.

begin;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('team-media', 'team-media', true, 2 * 1024 * 1024, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update
  set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Team media readable" on storage.objects;
create policy "Team media readable" on storage.objects for select
  using (bucket_id = 'team-media');

drop policy if exists "Team media upload admin" on storage.objects;
create policy "Team media upload admin" on storage.objects for insert to authenticated
  with check (bucket_id = 'team-media' and public.is_admin());

alter table public.admin_messages add column if not exists image_url text;

drop function if exists public.admin_send_message(text, text, text, uuid, text, text, timestamptz);
create or replace function public.admin_send_message(
  p_audience text, p_title text, p_body text, p_recipient uuid default null, p_link text default null,
  p_style text default 'notification', p_expires_at timestamptz default null, p_image_url text default null
) returns int
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
  v_count int;
  v_msg uuid;
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
  if p_style not in ('notification', 'banner', 'direct') then raise exception 'invalid_style'; end if;
  if coalesce(p_image_url, '') <> '' and p_image_url !~ '^https://[a-z0-9.-]+/storage/v1/object/public/team-media/' then
    raise exception 'invalid_image';
  end if;
  if p_audience = 'user' then
    if p_recipient is null then raise exception 'recipient_required'; end if;
    v_ids := array[p_recipient];
  elsif p_audience in ('all', 'couple', 'partner', 'guest') then
    select array_agg(id) into v_ids from public.profiles
     where status is distinct from 'deleted'
       and role <> 'admin'
       and (p_audience = 'all' or role::text = p_audience);
  else
    raise exception 'invalid_audience';
  end if;
  v_ids := coalesce(v_ids, '{}');

  insert into public.admin_messages (sent_by, audience, recipient_id, title, body, link, recipients, style, expires_at, image_url)
  values ((select auth.uid()), p_audience, p_recipient, btrim(p_title), btrim(p_body), nullif(btrim(p_link), ''),
          cardinality(v_ids), p_style, case when p_style = 'banner' then p_expires_at end, nullif(btrim(p_image_url), ''))
  returning id into v_msg;

  if p_style = 'notification' then
    insert into public.notifications (profile_id, type, title, body, link)
    select x, 'admin_message', btrim(p_title), btrim(p_body), '/mensagem/' || v_msg
    from unnest(v_ids) x;
  elsif p_style = 'direct' then
    insert into public.notifications (profile_id, type, title, body, link)
    select x, 'admin_message', 'Equipa À Nossa!: ' || btrim(p_title), btrim(p_body), '/equipa'
    from unnest(v_ids) x;
  end if;
  v_count := cardinality(v_ids);

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values ((select auth.uid()), 'admin_message_sent', 'admin_messages', v_msg,
          jsonb_build_object('audience', p_audience, 'recipient', p_recipient, 'count', v_count, 'style', p_style));
  return v_count;
end;
$$;
revoke execute on function public.admin_send_message(text, text, text, uuid, text, text, timestamptz, text) from public, anon;
grant execute on function public.admin_send_message(text, text, text, uuid, text, text, timestamptz, text) to authenticated;

drop function if exists public.get_admin_message(uuid);
create or replace function public.get_admin_message(p_id uuid)
returns table (id uuid, title text, body text, link text, created_at timestamptz, image_url text)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, m.title, m.body, m.link, m.created_at, m.image_url
  from public.admin_messages m
  where m.id = p_id and public.can_see_admin_message(m.id);
$$;
revoke execute on function public.get_admin_message(uuid) from public, anon;
grant execute on function public.get_admin_message(uuid) to authenticated;

drop function if exists public.get_my_banners();
create or replace function public.get_my_banners()
returns table (id uuid, title text, body text, link text, created_at timestamptz, image_url text)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, m.title, m.body, m.link, m.created_at, m.image_url
  from public.admin_messages m
  where m.style = 'banner'
    and (m.expires_at is null or m.expires_at > now())
    and m.created_at > now() - interval '60 days'
    and public.can_see_admin_message(m.id)
  order by m.created_at desc
  limit 5;
$$;
revoke execute on function public.get_my_banners() from public, anon;
grant execute on function public.get_my_banners() to authenticated;

drop function if exists public.get_my_team_thread();
create or replace function public.get_my_team_thread()
returns table (id uuid, from_team boolean, title text, body text, link text, created_at timestamptz, image_url text)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, true, m.title, m.body, m.link, m.created_at, m.image_url
  from public.admin_messages m
  where m.style = 'direct' and public.can_see_admin_message(m.id)
  union all
  select t.id, false, null, t.description, null, t.created_at, null
  from public.support_tickets t
  join public.admin_messages m on m.id = t.admin_message_id and m.style = 'direct'
  where t.user_id = (select auth.uid())
  union all
  select t.id, true, null, t.resolution_note, null, coalesce(t.resolved_at, t.updated_at), null
  from public.support_tickets t
  join public.admin_messages m on m.id = t.admin_message_id and m.style = 'direct'
  where t.user_id = (select auth.uid()) and t.resolution_note is not null
  order by 6
  limit 300;
$$;
revoke execute on function public.get_my_team_thread() from public, anon;
grant execute on function public.get_my_team_thread() to authenticated;

commit;
