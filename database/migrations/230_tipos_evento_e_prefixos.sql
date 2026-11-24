-- ============================================================
-- 230 — Sete tipos de evento e a referência das reservas em português
-- ============================================================
-- Pedidos do utilizador (2026-11-23):
--   • "ainda aparece WED em todos, devia ter uma diferença ou uma
--     referência única para cada evento" → escolheu prefixo em português.
--   • "escolhe apenas 5 das mais comuns no mundo" + "e adiciona Passagem
--     De Ano e outros" → escolheu aplicar aos tipos de evento E aos prefixos.
--
-- Os sete tipos (a app só mostra estes ao criar um evento):
--   Aniversário ANI · Casamento CAS · Festa FES · Evento de empresa EMP
--   Batizado/cerimónia religiosa BAT · Passagem de Ano PAN · Outros EVT
--
-- Eventos que já existem com outros tipos:
--   comunhão → batizado (cerimónia religiosa) · noite → festa
--   noivado, renovação de votos, festa de curso, chá de bebé, concerto,
--   festival → «Outros», guardando o nome antigo em event_type_other
--   (ex.: «Noivado»), para o evento não perder o que era.
-- A base de dados continua a aceitar os valores antigos (apps antigas
-- ainda os podem enviar); só deixam de aparecer para escolher.
--
-- Reservas: prefixo novo; o número fica igual quando não colide. Quando
-- dois tipos passam ao mesmo prefixo (ex.: batizado BAP-1 e comunhão COM-1
-- → BAT), a mais recente recebe o número seguinte livre desse parceiro.
-- Textos antigos já enviados (notificações) ficam com o número antigo.
--
-- Corre DEPOIS da 229 (independente das 228–229).

begin;

-- 1. Novo tipo: Passagem de Ano (pode ser público, como festa).
alter table public.events drop constraint if exists weddings_event_type_check;
alter table public.events
  add constraint weddings_event_type_check
  check (event_type = any (array[
    'wedding','baptism','birthday','communion','engagement','vow_renewal',
    'graduation','corporate','baby_shower',
    'party','nightlife','concert','festival','new_year',
    'other'
  ]));

alter table public.events drop constraint if exists weddings_public_type_check;
alter table public.events
  add constraint weddings_public_type_check
  check (not is_public or event_type in ('corporate','party','nightlife','concert','festival','new_year','other'));

-- 2. Eventos que já existem → os sete tipos.
update public.events set event_type = 'baptism' where event_type = 'communion';
update public.events set event_type = 'party' where event_type = 'nightlife';
update public.events
set event_type_other = coalesce(nullif(trim(event_type_other), ''), case event_type
      when 'engagement' then 'Noivado'
      when 'vow_renewal' then 'Renovação de votos'
      when 'graduation' then 'Festa de curso'
      when 'baby_shower' then 'Chá de bebé'
      when 'concert' then 'Concerto'
      when 'festival' then 'Festival'
    end),
    event_type = 'other'
where event_type in ('engagement', 'vow_renewal', 'graduation', 'baby_shower', 'concert', 'festival');

-- 3. Prefixos em português.
create or replace function public.event_type_prefix(p_event_type text)
returns text language sql immutable set search_path = public, pg_temp as $$
  select case p_event_type
    when 'birthday' then 'ANI'
    when 'wedding' then 'CAS'
    when 'party' then 'FES'
    when 'nightlife' then 'FES'
    when 'corporate' then 'EMP'
    when 'baptism' then 'BAT'
    when 'communion' then 'BAT'
    when 'new_year' then 'PAN'
    else 'EVT'
  end;
$$;
revoke all on function public.event_type_prefix(text) from public, anon;

-- 4. Renomear as reservas existentes (mais antigas primeiro).
do $$
declare
  r record;
  v_prefix text;
  v_num text;
  v_next int;
begin
  for r in
    select b.id, b.partner_id, b.booking_number, e.event_type
    from public.bookings b
    join public.events e on e.id = b.wedding_id
    order by b.created_at, b.id
  loop
    v_prefix := public.event_type_prefix(r.event_type);
    v_num := split_part(r.booking_number, '-', 2);
    continue when split_part(r.booking_number, '-', 1) = v_prefix or v_num !~ '^[0-9]+$';
    if exists (select 1 from public.bookings
               where partner_id = r.partner_id and booking_number = v_prefix || '-' || v_num and id <> r.id) then
      select coalesce(max(split_part(booking_number, '-', 2)::int), 0) + 1 into v_next
      from public.bookings
      where partner_id = r.partner_id and booking_number like v_prefix || '-%'
        and split_part(booking_number, '-', 2) ~ '^[0-9]+$';
      v_num := v_next::text;
    end if;
    update public.bookings set booking_number = v_prefix || '-' || v_num where id = r.id;
  end loop;
end $$;

insert into public.applied_migrations (id) values ('230') on conflict do nothing;

commit;
