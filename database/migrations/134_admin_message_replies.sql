-- ============================================================
-- Responder às mensagens da equipa → pedido de suporte — 2026-10-28
-- ============================================================
-- A notificação de uma mensagem do admin (133) abre a mensagem completa
-- na app (/mensagem/<id>). Quem a recebeu pode responder: a resposta cria
-- um pedido de suporte (support_tickets), ligado à mensagem, que aparece
-- no admin em Suporte.

begin;

alter table public.support_tickets
  add column if not exists admin_message_id uuid references public.admin_messages(id) on delete set null;
create index if not exists support_tickets_admin_message_idx on public.support_tickets (admin_message_id);

create or replace function public.admin_send_message(
  p_audience text, p_title text, p_body text, p_recipient uuid default null, p_link text default null
) returns int
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
  v_count int;
  v_msg uuid;
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
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

  insert into public.admin_messages (sent_by, audience, recipient_id, title, body, link, recipients)
  values ((select auth.uid()), p_audience, p_recipient, btrim(p_title), btrim(p_body), nullif(btrim(p_link), ''), cardinality(v_ids))
  returning id into v_msg;

  -- Ao tocar, abre a mensagem completa na app (/mensagem/<id>), onde se
  -- pode responder; o ecrã escolhido (p_link) fica como botão lá dentro.
  insert into public.notifications (profile_id, type, title, body, link)
  select x, 'admin_message', btrim(p_title), btrim(p_body), '/mensagem/' || v_msg
  from unnest(v_ids) x;
  get diagnostics v_count = row_count;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values ((select auth.uid()), 'admin_message_sent', 'admin_messages', v_msg,
          jsonb_build_object('audience', p_audience, 'recipient', p_recipient, 'count', v_count));
  return v_count;
end;
$$;

-- Só quem recebeu a mensagem a pode ler.
create or replace function public.get_admin_message(p_id uuid)
returns table (id uuid, title text, body text, link text, created_at timestamptz)
language sql stable security definer set search_path = public, pg_temp
as $$
  select m.id, m.title, m.body, m.link, m.created_at
  from public.admin_messages m
  where m.id = p_id
    and exists (select 1 from public.notifications n
                where n.profile_id = (select auth.uid()) and n.type = 'admin_message'
                  and n.link = '/mensagem/' || m.id);
$$;
revoke execute on function public.get_admin_message(uuid) from public, anon;
grant execute on function public.get_admin_message(uuid) to authenticated;

-- Responder: cria um pedido de suporte em nome de quem responde.
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
   where m.id = p_id
     and exists (select 1 from public.notifications n
                 where n.profile_id = (select auth.uid()) and n.type = 'admin_message'
                   and n.link = '/mensagem/' || m.id);
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
