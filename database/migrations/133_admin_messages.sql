-- ============================================================
-- Mensagens da equipa a qualquer utilizador — 2026-10-28
-- ============================================================
-- No admin (Comunicação → Mensagens) a equipa envia uma mensagem a uma
-- pessoa ou a um grupo (todos, organizadores, parceiros, convidados).
-- Cada mensagem é uma notificação `admin_message` (aparece nas
-- notificações da app) e, pelo trigger da 115, chega também como
-- notificação no telemóvel/browser.

begin;

create table if not exists public.admin_messages (
  id uuid primary key default gen_random_uuid(),
  sent_by uuid references public.profiles(id) on delete set null,
  audience text not null check (audience in ('user', 'all', 'couple', 'partner', 'guest')),
  recipient_id uuid references public.profiles(id) on delete set null,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  body text not null check (char_length(btrim(body)) between 1 and 1000),
  link text check (link is null or link ~ '^/[A-Za-z0-9/_\-?=&.#]*$'),
  recipients int not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists admin_messages_created_idx on public.admin_messages (created_at desc);
create index if not exists admin_messages_recipient_idx on public.admin_messages (recipient_id);
create index if not exists admin_messages_sent_by_idx on public.admin_messages (sent_by);

alter table public.admin_messages enable row level security;
drop policy if exists "Admins read admin messages" on public.admin_messages;
create policy "Admins read admin messages" on public.admin_messages for select using (public.is_admin());

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

  insert into public.notifications (profile_id, type, title, body, link)
  select x, 'admin_message', btrim(p_title), btrim(p_body), nullif(btrim(p_link), '')
  from unnest(v_ids) x;
  get diagnostics v_count = row_count;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values ((select auth.uid()), 'admin_message_sent', 'admin_messages', v_msg,
          jsonb_build_object('audience', p_audience, 'recipient', p_recipient, 'count', v_count));
  return v_count;
end;
$$;
revoke execute on function public.admin_send_message(text, text, text, uuid, text) from public, anon;
grant execute on function public.admin_send_message(text, text, text, uuid, text) to authenticated;

commit;
