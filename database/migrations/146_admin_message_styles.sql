-- ============================================================
-- 146 — Mensagens da Equipa À Nossa!: notificação, banner ou direta
-- ============================================================
--
-- Pedido do utilizador (2026-11): ao enviar uma mensagem no admin,
-- escolher como aparece na app:
--   • notification — como até agora: notificação (e push) que abre a
--     mensagem completa (/mensagem/<id>).
--   • banner — cartão de novidade/notícia no topo da app, até a pessoa o
--     fechar ou até à data de fim. Sem push.
--   • direct — mensagem direta: aparece no Chat, numa conversa fixa
--     "Equipa À Nossa!", onde a pessoa responde. Também notifica.
--
-- Corre DEPOIS da 133 e 134.

begin;

alter table public.admin_messages
  add column if not exists style text not null default 'notification',
  add column if not exists expires_at timestamptz;

alter table public.admin_messages drop constraint if exists admin_messages_style_check;
alter table public.admin_messages
  add constraint admin_messages_style_check check (style in ('notification', 'banner', 'direct'));

-- Quem pode ver uma mensagem (usado pelas funções abaixo).
create or replace function public.can_see_admin_message(p_id uuid)
returns boolean
language sql stable security definer set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.admin_messages m
    join public.profiles p on p.id = (select auth.uid())
    where m.id = p_id
      and (
        (m.audience = 'user' and m.recipient_id = p.id)
        or m.audience = 'all'
        or m.audience = p.role::text
      )
      and p.role <> 'admin'
      -- Mensagens para todos/um grupo: só quem já tinha conta quando foram enviadas.
      and (m.audience = 'user' or p.created_at <= m.created_at + interval '1 day')
  );
$$;
revoke execute on function public.can_see_admin_message(uuid) from public, anon;
grant execute on function public.can_see_admin_message(uuid) to authenticated;

-- Envio (substitui a versão da 134; agora com o estilo e a data de fim).
drop function if exists public.admin_send_message(text, text, text, uuid, text);
create or replace function public.admin_send_message(
  p_audience text, p_title text, p_body text, p_recipient uuid default null, p_link text default null,
  p_style text default 'notification', p_expires_at timestamptz default null
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

  insert into public.admin_messages (sent_by, audience, recipient_id, title, body, link, recipients, style, expires_at)
  values ((select auth.uid()), p_audience, p_recipient, btrim(p_title), btrim(p_body), nullif(btrim(p_link), ''),
          cardinality(v_ids), p_style, case when p_style = 'banner' then p_expires_at end)
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
revoke execute on function public.admin_send_message(text, text, text, uuid, text, text, timestamptz) from public, anon;
grant execute on function public.admin_send_message(text, text, text, uuid, text, text, timestamptz) to authenticated;

-- Ler uma mensagem (qualquer estilo).
create or replace function public.get_admin_message(p_id uuid)
returns table (id uuid, title text, body text, link text, created_at timestamptz)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, m.title, m.body, m.link, m.created_at
  from public.admin_messages m
  where m.id = p_id and public.can_see_admin_message(m.id);
$$;
revoke execute on function public.get_admin_message(uuid) from public, anon;
grant execute on function public.get_admin_message(uuid) to authenticated;

-- Banners ativos para mim (os fechados ficam guardados no telemóvel).
create or replace function public.get_my_banners()
returns table (id uuid, title text, body text, link text, created_at timestamptz)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, m.title, m.body, m.link, m.created_at
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

-- Conversa "Equipa À Nossa!": mensagens diretas da equipa, as minhas
-- respostas e as respostas da equipa a essas respostas.
create or replace function public.get_my_team_thread()
returns table (id uuid, from_team boolean, title text, body text, link text, created_at timestamptz)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, true, m.title, m.body, m.link, m.created_at
  from public.admin_messages m
  where m.style = 'direct' and public.can_see_admin_message(m.id)
  union all
  select t.id, false, null, t.description, null, t.created_at
  from public.support_tickets t
  join public.admin_messages m on m.id = t.admin_message_id and m.style = 'direct'
  where t.user_id = (select auth.uid())
  union all
  select t.id, true, null, t.resolution_note, null, coalesce(t.resolved_at, t.updated_at)
  from public.support_tickets t
  join public.admin_messages m on m.id = t.admin_message_id and m.style = 'direct'
  where t.user_id = (select auth.uid()) and t.resolution_note is not null
  order by 6
  limit 300;
$$;
revoke execute on function public.get_my_team_thread() from public, anon;
grant execute on function public.get_my_team_thread() to authenticated;

-- Responder (qualquer estilo) — abre um pedido em Suporte.
create or replace function public.reply_admin_message(p_id uuid, p_body text)
returns uuid
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_title text;
  v_ticket uuid;
begin
  if (select auth.uid()) is null then raise exception 'forbidden'; end if;
  if p_body is null or char_length(btrim(p_body)) < 2 or char_length(p_body) > 2000 then
    raise exception 'invalid_body';
  end if;
  select m.title into v_title from public.admin_messages m
   where m.id = p_id and public.can_see_admin_message(m.id);
  if v_title is null then raise exception 'not_found'; end if;

  insert into public.support_tickets (user_id, category, subject, description, admin_message_id)
  values ((select auth.uid()), 'general', left('Resposta: ' || v_title, 200), btrim(p_body), p_id)
  returning id into v_ticket;
  return v_ticket;
end;
$$;
revoke execute on function public.reply_admin_message(uuid, text) from public, anon;
grant execute on function public.reply_admin_message(uuid, text) to authenticated;

commit;
