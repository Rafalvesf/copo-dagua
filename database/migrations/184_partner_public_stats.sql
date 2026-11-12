-- 184 · Página pública do parceiro e "Responde em ~1 h" (2026-11-12).
--
-- partner_public_stats(id): números públicos de um parceiro publicado,
-- também para quem abre o link sem sessão (anon):
--   * followers      — quantas pessoas o seguem;
--   * events_done    — reservas confirmadas ou concluídas;
--   * response_minutes — tempo típico (mediana) até responder a uma
--     mensagem de um cliente, nos últimos 90 dias. Só aparece com pelo
--     menos 3 respostas; senão vem null.
-- Devolve null se o parceiro não estiver visível (não publicado/pausado).

begin;

create or replace function public.partner_public_stats(p_partner uuid)
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with asks as (
    -- Primeira mensagem do cliente de cada sequência (a anterior não é dele).
    select m.conversation_id, m.created_at
    from public.messages m
    join public.conversations c on c.id = m.conversation_id
    where c.partner_id = p_partner
      and m.sender_role = 'couple'
      and m.created_at > now() - interval '90 days'
      and coalesce((
        select prev.sender_role from public.messages prev
        where prev.conversation_id = m.conversation_id and prev.created_at < m.created_at
        order by prev.created_at desc limit 1
      ), 'partner') = 'partner'
  ),
  delays as (
    select extract(epoch from (r.created_at - a.created_at)) / 60.0 as minutes
    from asks a
    join lateral (
      select r.created_at from public.messages r
      where r.conversation_id = a.conversation_id
        and r.sender_role = 'partner'
        and r.created_at > a.created_at
      order by r.created_at
      limit 1
    ) r on true
  )
  select jsonb_build_object(
    'followers', (select count(*) from public.follows f where f.partner_id = p_partner),
    'events_done', (
      select count(*) from public.bookings b
      where b.partner_id = p_partner and b.status in ('confirmed', 'completed')
    ),
    'response_minutes', (
      select case when count(*) >= 3
        then round(percentile_cont(0.5) within group (order by minutes))::int
      end
      from delays
    )
  )
  where public.is_partner_profile_visible(p_partner)
     or p_partner = auth.uid();
$$;
revoke execute on function public.partner_public_stats(uuid) from public;
grant execute on function public.partner_public_stats(uuid) to anon, authenticated;

insert into public.applied_migrations (id) values ('184') on conflict do nothing;

commit;
