-- ============================================================
-- Denunciar conteúdo e bloquear pessoas — 2026-10-28
-- ============================================================
-- Exigido pela App Store (1.2) e pela Google Play (conteúdo gerado por
-- utilizadores): quem vê uma fotografia, um comentário ou uma mensagem
-- tem de a poder denunciar, e de poder bloquear quem a publicou.
-- - `content_reports`: as denúncias; a equipa decide no admin
--   (Conteúdo → Denúncias) em menos de 24 h.
-- - `user_blocks`: quem bloqueaste deixa de te aparecer na galeria, nos
--   comentários e nos chats de grupo (filtro na app).
-- - `report_content()` corre com os direitos de quem denuncia: só se pode
--   denunciar o que se consegue ver.
-- - `admin_resolve_report()`: remover o conteúdo ou arquivar a denúncia.

begin;

create table if not exists public.content_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('gallery_photo', 'gallery_comment', 'group_message', 'message')),
  target_id uuid not null,
  reported_profile_id uuid references public.profiles(id) on delete set null,
  wedding_id uuid references public.weddings(id) on delete set null,
  reason text not null check (reason in ('offensive', 'harassment', 'sexual', 'spam', 'violence', 'other')),
  note text check (char_length(note) <= 500),
  excerpt text,
  status text not null default 'open' check (status in ('open', 'removed', 'dismissed')),
  resolved_by uuid references public.profiles(id) on delete set null,
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  unique (reporter_id, kind, target_id)
);
create index if not exists content_reports_status_idx on public.content_reports (status, created_at);
create index if not exists content_reports_reported_idx on public.content_reports (reported_profile_id);
create index if not exists content_reports_wedding_idx on public.content_reports (wedding_id);
create index if not exists content_reports_resolved_by_idx on public.content_reports (resolved_by);

alter table public.content_reports enable row level security;
drop policy if exists "Reporters see own reports, admins all" on public.content_reports;
create policy "Reporters see own reports, admins all" on public.content_reports
  for select using (reporter_id = (select auth.uid()) or public.is_admin());

create table if not exists public.user_blocks (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);
create index if not exists user_blocks_blocked_idx on public.user_blocks (blocked_id);

alter table public.user_blocks enable row level security;
drop policy if exists "Own blocks" on public.user_blocks;
create policy "Own blocks" on public.user_blocks
  for all using (blocker_id = (select auth.uid())) with check (blocker_id = (select auth.uid()));

-- Denunciar: corre com os direitos de quem denuncia (security invoker),
-- por isso só encontra o que essa pessoa consegue ver.
drop policy if exists "Report as self" on public.content_reports;
create policy "Report as self" on public.content_reports
  for insert with check (reporter_id = (select auth.uid()) and status = 'open');
drop policy if exists "Re-report own" on public.content_reports;
create policy "Re-report own" on public.content_reports
  for update using (reporter_id = (select auth.uid())) with check (reporter_id = (select auth.uid()) and status = 'open');

create or replace function public.report_content(p_kind text, p_target uuid, p_reason text, p_note text default null)
returns void
language plpgsql security invoker set search_path = public, pg_temp
as $$
declare
  v_author uuid;
  v_wedding uuid;
  v_excerpt text;
begin
  if p_kind = 'gallery_photo' then
    select uploaded_by, wedding_id, caption into v_author, v_wedding, v_excerpt
      from public.wedding_gallery_photos where id = p_target;
  elsif p_kind = 'gallery_comment' then
    select c.profile_id, p.wedding_id, c.body into v_author, v_wedding, v_excerpt
      from public.gallery_photo_comments c join public.wedding_gallery_photos p on p.id = c.photo_id
      where c.id = p_target;
  elsif p_kind = 'group_message' then
    select m.sender_id, g.wedding_id, coalesce(m.body, m.attachment_name) into v_author, v_wedding, v_excerpt
      from public.chat_group_messages m join public.chat_groups g on g.id = m.group_id
      where m.id = p_target;
  elsif p_kind = 'message' then
    select m.sender_id, c.wedding_id, coalesce(m.body, m.attachment_name) into v_author, v_wedding, v_excerpt
      from public.messages m join public.conversations c on c.id = m.conversation_id
      where m.id = p_target;
  else
    raise exception 'invalid_kind';
  end if;
  if not found then raise exception 'not_found'; end if;
  if v_author = (select auth.uid()) then raise exception 'own_content'; end if;
  insert into public.content_reports (reporter_id, kind, target_id, reported_profile_id, wedding_id, reason, note, excerpt)
  values ((select auth.uid()), p_kind, p_target, v_author, v_wedding, p_reason, nullif(trim(p_note), ''), left(v_excerpt, 300))
  on conflict (reporter_id, kind, target_id) do update
    set reason = excluded.reason, note = excluded.note, status = 'open', created_at = now();
end;
$$;
revoke execute on function public.report_content(text, uuid, text, text) from public, anon;
grant execute on function public.report_content(text, uuid, text, text) to authenticated;

grant select, insert, update on public.content_reports to authenticated;
grant select, insert, delete on public.user_blocks to authenticated;

-- Admin: remover o conteúdo denunciado ou arquivar a denúncia. Remover
-- fecha também as outras denúncias do mesmo conteúdo.
create or replace function public.admin_resolve_report(p_report uuid, p_action text)
returns void
language plpgsql security definer set search_path = public, pg_temp
as $$
declare
  r public.content_reports;
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
  select * into r from public.content_reports where id = p_report;
  if not found then raise exception 'not_found'; end if;

  if p_action = 'remove' then
    if r.kind = 'gallery_photo' then
      update public.wedding_gallery_photos
        set status = 'rejected', reviewed_by = (select auth.uid()), reviewed_at = now()
        where id = r.target_id;
    elsif r.kind = 'gallery_comment' then
      delete from public.gallery_photo_comments where id = r.target_id;
    elsif r.kind = 'group_message' then
      update public.chat_group_messages
        set body = 'Mensagem removida pela equipa À Nossa!', attachment_url = null, attachment_type = null, attachment_name = null
        where id = r.target_id;
    elsif r.kind = 'message' then
      update public.messages
        set body = 'Mensagem removida pela equipa À Nossa!', attachment_url = null, attachment_type = null, attachment_name = null
        where id = r.target_id;
    end if;
    update public.content_reports
      set status = 'removed', resolved_by = (select auth.uid()), resolved_at = now()
      where kind = r.kind and target_id = r.target_id and status = 'open';
  elsif p_action = 'dismiss' then
    update public.content_reports
      set status = 'dismissed', resolved_by = (select auth.uid()), resolved_at = now()
      where id = p_report;
  else
    raise exception 'invalid_action';
  end if;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values ((select auth.uid()), 'content_report_' || p_action, 'content_reports', p_report,
          jsonb_build_object('kind', r.kind, 'target_id', r.target_id));
end;
$$;
revoke execute on function public.admin_resolve_report(uuid, text) from public, anon;
grant execute on function public.admin_resolve_report(uuid, text) to authenticated;

commit;
