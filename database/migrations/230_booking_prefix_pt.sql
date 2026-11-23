-- ============================================================
-- 230 — Referência das reservas com prefixo em português
-- ============================================================
-- Pedido do utilizador (2026-11-23): "ainda aparece WED em todos, devia ter
-- uma diferença ou uma referência única para cada evento" → escolheu
-- "Prefixo em português": um prefixo por tipo de evento, sem repetidos.
-- A numeração continua a ser por parceiro e por prefixo (migração 107).
--
--   casamento CAS · batizado BAT · aniversário ANI · comunhão COM
--   noivado NOI · renovação de votos REN · festa de curso CUR
--   evento de empresa EMP · chá de bebé CHA · festa FES · noite NOT
--   concerto CON · festival FTV · outro EVT
--
-- As reservas que já existem mudam só o prefixo; o número fica igual
-- (WED-3 → CAS-3). Antes, festa/noite/concerto/festival/outro partilhavam
-- EVT; agora cada um tem o seu, e os números já eram únicos dentro de EVT,
-- por isso não há colisões. Textos antigos já enviados (notificações)
-- continuam com o número antigo.
--
-- Corre DEPOIS da 229 (independente das 228–229).

begin;

create or replace function public.event_type_prefix(p_event_type text)
returns text language sql immutable set search_path = public, pg_temp as $$
  select case p_event_type
    when 'wedding' then 'CAS'
    when 'baptism' then 'BAT'
    when 'birthday' then 'ANI'
    when 'communion' then 'COM'
    when 'engagement' then 'NOI'
    when 'vow_renewal' then 'REN'
    when 'graduation' then 'CUR'
    when 'corporate' then 'EMP'
    when 'baby_shower' then 'CHA'
    when 'party' then 'FES'
    when 'nightlife' then 'NOT'
    when 'concert' then 'CON'
    when 'festival' then 'FTV'
    else 'EVT'
  end;
$$;
revoke all on function public.event_type_prefix(text) from public, anon;

-- Renomear as existentes: só o prefixo, o número fica.
update public.bookings b
set booking_number = public.event_type_prefix(e.event_type) || '-' || split_part(b.booking_number, '-', 2)
from public.events e
where e.id = b.wedding_id
  and split_part(b.booking_number, '-', 2) ~ '^[0-9]+$'
  and split_part(b.booking_number, '-', 1) <> public.event_type_prefix(e.event_type);

insert into public.applied_migrations (id) values ('230') on conflict do nothing;

commit;
