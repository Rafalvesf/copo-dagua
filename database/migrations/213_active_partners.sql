-- ============================================================
-- 213 · Conquista «Mais ativo» dos parceiros
-- ============================================================
--
-- Pedido do Rafael (2026-11-22): os cartões de parceiro mostram as
-- conquistas no canto da foto (Fundador, Modo Pro, Mais ativo).
-- «Mais ativo» = os 10 % de parceiros publicados com mais reservas
-- confirmadas nos últimos 30 dias (pelo menos 1 parceiro e pelo menos uma
-- reserva). Calcula-se na hora; a app guarda a lista em memória.
-- ============================================================

begin;

create or replace function public.active_partner_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  with counts as (
    select b.partner_id, count(*) as n
      from public.bookings b
      join public.partner_profiles p on p.id = b.partner_id and p.status = 'published'
     where b.status::text in ('confirmed', 'completed')
       and coalesce(b.confirmed_at, b.created_at) > now() - interval '30 days'
     group by b.partner_id
  ),
  quota as (
    select greatest(1, ceil(0.10 * (select count(*) from public.partner_profiles where status = 'published')))::int as k
  ),
  ranked as (
    select partner_id, n, rank() over (order by n desc) as r from counts
  )
  select partner_id from ranked, quota where r <= quota.k;
$$;

revoke all on function public.active_partner_ids() from public;
grant execute on function public.active_partner_ids() to anon, authenticated;

insert into public.applied_migrations (id) values ('213') on conflict do nothing;

commit;
