-- ============================================================
-- 148 — Banners fechados em todos os aparelhos + imagem no push
-- ============================================================
--
-- Pedido do utilizador (2026-11):
-- 1. Fechar o banner da equipa num telemóvel fecha-o em todos.
-- 2. A imagem da mensagem da equipa também vai na notificação push.
--
-- Corre DEPOIS da 147.

begin;

create table if not exists public.admin_message_dismissals (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  message_id uuid not null references public.admin_messages(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (profile_id, message_id)
);
alter table public.admin_message_dismissals enable row level security;
drop policy if exists "Own dismissals" on public.admin_message_dismissals;
create policy "Own dismissals" on public.admin_message_dismissals for all to authenticated
  using (profile_id = (select auth.uid())) with check (profile_id = (select auth.uid()));

create or replace function public.dismiss_banner(p_id uuid)
returns void
language sql security definer set search_path = public, pg_temp
as $$
  insert into public.admin_message_dismissals (profile_id, message_id)
  select (select auth.uid()), p_id
  where (select auth.uid()) is not null and public.can_see_admin_message(p_id)
  on conflict do nothing;
$$;
revoke execute on function public.dismiss_banner(uuid) from public, anon;
grant execute on function public.dismiss_banner(uuid) to authenticated;

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
    and not exists (select 1 from public.admin_message_dismissals d
                    where d.message_id = m.id and d.profile_id = (select auth.uid()))
  order by m.created_at desc
  limit 5;
$$;
revoke execute on function public.get_my_banners() from public, anon;
grant execute on function public.get_my_banners() to authenticated;

alter table public.notifications add column if not exists image_url text;

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
    insert into public.notifications (profile_id, type, title, body, link, image_url)
    select x, 'admin_message', btrim(p_title), btrim(p_body), '/mensagem/' || v_msg, nullif(btrim(p_image_url), '')
    from unnest(v_ids) x;
  elsif p_style = 'direct' then
    insert into public.notifications (profile_id, type, title, body, link, image_url)
    select x, 'admin_message', 'Equipa À Nossa!: ' || btrim(p_title), btrim(p_body), '/equipa', nullif(btrim(p_image_url), '')
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

commit;
