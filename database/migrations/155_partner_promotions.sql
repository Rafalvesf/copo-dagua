-- ============================================================
-- 155 — Destaque pago dos parceiros + destaques personalizados
-- ============================================================
-- Pedido do utilizador (2026-11-03):
--   • Destaque pago: sem mensalidade; as reservas que vêm do destaque pagam
--     +6% de comissão do parceiro. Dura o tempo que o parceiro quiser.
--   • No máximo 6 parceiros em destaque por categoria e zona; os seguintes
--     ficam em fila e entram quando abrir lugar.
--   • Destaques diferentes para cada cliente, "como o Instagram": só das
--     categorias que ele anda a procurar (procura DJs e espaços → não vê
--     floristas), rotativos (cada pessoa e cada dia uma mistura diferente,
--     com alguns repetidos), e a mudar à medida que procura outras coisas.
--   • As mesmas sugestões nas Tarefas.
-- Corre DEPOIS da 151 (fundadores) — independente das outras.

begin;

-- ---------- Definições ----------
alter table public.platform_settings
  add column if not exists promotion_extra_pct numeric(5,2) not null default 6 check (promotion_extra_pct between 0 and 50),
  add column if not exists promotion_slots integer not null default 6 check (promotion_slots between 1 and 50),
  add column if not exists promotion_attribution_days integer not null default 30 check (promotion_attribution_days between 1 and 365);

-- ---------- Destaques ----------
create table if not exists public.partner_promotions (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  category_slug text not null,
  -- null = todo o país; senão a zona (uma das zonas do parceiro).
  region text,
  status text not null default 'active' check (status in ('active', 'waiting', 'ended')),
  extra_pct numeric(5,2) not null,
  created_at timestamptz not null default now(),
  started_at timestamptz,
  ended_at timestamptz
);
-- Um destaque vivo (ativo ou em fila) por parceiro.
create unique index if not exists partner_promotions_one_live_idx
  on public.partner_promotions (partner_id) where status in ('active', 'waiting');
create index if not exists partner_promotions_slot_idx
  on public.partner_promotions (category_slug, coalesce(region, ''), status, created_at);

alter table public.partner_promotions enable row level security;
drop policy if exists "Partner or admin reads promotions" on public.partner_promotions;
create policy "Partner or admin reads promotions" on public.partner_promotions for select to authenticated
  using (partner_id = (select auth.uid()) or public.is_admin());
-- Escrita só pelas funções abaixo.

-- Cliques nos destaques (para saber de onde veio a reserva).
create table if not exists public.promotion_clicks (
  id bigint generated always as identity primary key,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  promotion_id uuid references public.partner_promotions(id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists promotion_clicks_lookup_idx on public.promotion_clicks (profile_id, partner_id, created_at);
create index if not exists promotion_clicks_promo_idx on public.promotion_clicks (promotion_id, created_at);
alter table public.promotion_clicks enable row level security;
drop policy if exists "Admins read promotion clicks" on public.promotion_clicks;
create policy "Admins read promotion clicks" on public.promotion_clicks for select to authenticated using (public.is_admin());

-- Interesse de cada cliente por categoria (o que vê, filtra, pede…).
create table if not exists public.user_interest_events (
  id bigint generated always as identity primary key,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  category_slug text not null,
  partner_id uuid,
  kind text not null check (kind in ('filter', 'search', 'view', 'favorite', 'quote', 'task')),
  created_at timestamptz not null default now()
);
create index if not exists user_interest_events_profile_idx on public.user_interest_events (profile_id, created_at desc);
alter table public.user_interest_events enable row level security;
drop policy if exists "Own interest" on public.user_interest_events;
create policy "Own interest" on public.user_interest_events for select to authenticated
  using (profile_id = (select auth.uid()) or public.is_admin());

-- ---------- Parceiro: ligar / desligar ----------
-- Abre lugar: o primeiro da fila nessa categoria e zona passa a ativo.
create or replace function public.promote_next_in_queue(p_category text, p_region text)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_slots integer;
  v_next record;
begin
  select coalesce(promotion_slots, 6) into v_slots from public.platform_settings where id = 1;
  perform pg_advisory_xact_lock(hashtext('promo:' || p_category || ':' || coalesce(p_region, '')));
  loop
    exit when (select count(*) from public.partner_promotions
               where category_slug = p_category and coalesce(region, '') = coalesce(p_region, '') and status = 'active') >= v_slots;
    select * into v_next from public.partner_promotions
    where category_slug = p_category and coalesce(region, '') = coalesce(p_region, '') and status = 'waiting'
    order by created_at limit 1;
    exit when v_next is null;
    update public.partner_promotions set status = 'active', started_at = now() where id = v_next.id;
    insert into public.notifications (profile_id, type, title, body, link)
    values (v_next.partner_id, 'promotion_active', 'Já estás em destaque',
            'Abriu um lugar e o teu destaque está ativo.', '/partner-home');
  end loop;
end;
$$;
revoke all on function public.promote_next_in_queue(text, text) from public, anon, authenticated;

create or replace function public.start_partner_promotion(p_category text, p_region text default null)
returns text
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_slots integer;
  v_extra numeric;
  v_active integer;
  v_status text;
  v_region text := nullif(trim(p_region), '');
begin
  if v_uid is null or not exists (select 1 from public.partner_profiles where id = v_uid and status = 'published') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if not exists (
    select 1 from public.partner_profile_categories pc join public.partner_categories c on c.id = pc.category_id
    where pc.partner_id = v_uid and c.slug = p_category
  ) then
    raise exception 'invalid_category' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.partner_promotions where partner_id = v_uid and status in ('active', 'waiting')) then
    raise exception 'already_promoted' using errcode = 'P0001';
  end if;

  select coalesce(promotion_slots, 6), coalesce(promotion_extra_pct, 6) into v_slots, v_extra
  from public.platform_settings where id = 1;
  perform pg_advisory_xact_lock(hashtext('promo:' || p_category || ':' || coalesce(v_region, '')));
  select count(*) into v_active from public.partner_promotions
  where category_slug = p_category and coalesce(region, '') = coalesce(v_region, '') and status = 'active';
  v_status := case when v_active < v_slots then 'active' else 'waiting' end;

  insert into public.partner_promotions (partner_id, category_slug, region, status, extra_pct, started_at)
  values (v_uid, p_category, v_region, v_status, v_extra, case when v_status = 'active' then now() end);
  return v_status;
end;
$$;
revoke execute on function public.start_partner_promotion(text, text) from public, anon;
grant execute on function public.start_partner_promotion(text, text) to authenticated;

create or replace function public.stop_partner_promotion()
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_p record;
begin
  select * into v_p from public.partner_promotions
  where partner_id = auth.uid() and status in ('active', 'waiting') for update;
  if v_p is null then return; end if;
  update public.partner_promotions set status = 'ended', ended_at = now() where id = v_p.id;
  if v_p.status = 'active' then
    perform public.promote_next_in_queue(v_p.category_slug, v_p.region);
  end if;
end;
$$;
revoke execute on function public.stop_partner_promotion() from public, anon;
grant execute on function public.stop_partner_promotion() to authenticated;

-- ---------- Interesse e cliques ----------
create or replace function public.track_interest(p_category text, p_kind text, p_partner uuid default null)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if auth.uid() is null or p_category is null or length(p_category) > 60 then return; end if;
  -- Sem repetir o mesmo sinal em menos de 10 minutos.
  if exists (select 1 from public.user_interest_events
             where profile_id = auth.uid() and category_slug = p_category and kind = p_kind
               and coalesce(partner_id::text, '') = coalesce(p_partner::text, '')
               and created_at > now() - interval '10 minutes') then
    return;
  end if;
  insert into public.user_interest_events (profile_id, category_slug, partner_id, kind)
  values (auth.uid(), p_category, p_partner, p_kind);
exception when check_violation or foreign_key_violation then
  return;
end;
$$;
revoke execute on function public.track_interest(text, text, uuid) from public, anon;
grant execute on function public.track_interest(text, text, uuid) to authenticated;

create or replace function public.track_promotion_click(p_partner uuid)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_promo uuid;
begin
  if auth.uid() is null or auth.uid() = p_partner then return; end if;
  select id into v_promo from public.partner_promotions where partner_id = p_partner and status = 'active';
  if v_promo is null then return; end if;  -- destaque grátis (fundador/admin): não conta
  if exists (select 1 from public.promotion_clicks where profile_id = auth.uid() and partner_id = p_partner
             and created_at > now() - interval '1 day') then
    return;
  end if;
  insert into public.promotion_clicks (profile_id, partner_id, promotion_id) values (auth.uid(), p_partner, v_promo);
end;
$$;
revoke execute on function public.track_promotion_click(uuid) from public, anon;
grant execute on function public.track_promotion_click(uuid) to authenticated;

-- +% de uma reserva que veio do destaque: o cliente tocou no destaque do
-- parceiro nos `promotion_attribution_days` antes do primeiro pedido (ou
-- da reserva). Devolve 0 se não veio do destaque.
create or replace function public.booking_promotion_extra(p_booking uuid)
returns numeric
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_b record;
  v_first timestamptz;
  v_days integer;
  v_extra numeric;
begin
  select b.couple_id, b.partner_id, b.created_at into v_b from public.bookings b where b.id = p_booking;
  if v_b is null or v_b.couple_id is null then return 0; end if;
  select least(v_b.created_at, coalesce(min(q.created_at), v_b.created_at)) into v_first
  from public.quote_requests q where q.couple_id = v_b.couple_id and q.partner_id = v_b.partner_id;
  select coalesce(promotion_attribution_days, 30) into v_days from public.platform_settings where id = 1;
  select pp.extra_pct into v_extra
  from public.promotion_clicks k join public.partner_promotions pp on pp.id = k.promotion_id
  where k.profile_id = v_b.couple_id and k.partner_id = v_b.partner_id
    and k.created_at <= v_first and k.created_at > v_first - make_interval(days => v_days)
  order by k.created_at desc limit 1;
  return coalesce(v_extra, 0);
end;
$$;
revoke execute on function public.booking_promotion_extra(uuid) from public, anon;
grant execute on function public.booking_promotion_extra(uuid) to authenticated, service_role;

-- Estado para o painel do parceiro.
create or replace function public.my_partner_promotion()
returns table (status text, category_slug text, category_label text, region text, queue_position integer,
               clicks_30d integer, bookings_from_promo integer, extra_pct numeric, slots integer)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.status, p.category_slug, c.label_pt, p.region,
         case when p.status = 'waiting' then (
           select count(*)::int + 1 from public.partner_promotions q
           where q.category_slug = p.category_slug and coalesce(q.region, '') = coalesce(p.region, '')
             and q.status = 'waiting' and q.created_at < p.created_at) end,
         (select count(*)::int from public.promotion_clicks k where k.promotion_id = p.id and k.created_at > now() - interval '30 days'),
         (select count(*)::int from public.bookings b
          where b.partner_id = p.partner_id and public.booking_promotion_extra(b.id) > 0),
         p.extra_pct,
         (select coalesce(promotion_slots, 6) from public.platform_settings where id = 1)
  from public.partner_promotions p
  left join public.partner_categories c on c.slug = p.category_slug
  where p.partner_id = (select auth.uid()) and p.status in ('active', 'waiting')
  limit 1;
$$;

revoke execute on function public.my_partner_promotion() from public, anon;
grant execute on function public.my_partner_promotion() to authenticated;

-- ---------- Destaques para MIM ----------
-- Pontua cada parceiro em destaque (pago, fundador ou escolhido no admin)
-- pelo interesse do cliente na categoria dele (com mais peso no recente),
-- pela zona, e com uma rotação diária diferente para cada pessoa.
create or replace function public.featured_partners_for_me(p_location text default null, p_category text default null, p_limit integer default 6)
returns table (partner_id uuid, business_name text, cover_photo_url text, category_slug text, category_label text,
               paid boolean, score numeric)
language plpgsql security definer set search_path = public, pg_temp as $$
#variable_conflict use_column
declare
  v_uid uuid := auth.uid();
  v_has_interest boolean;
begin
  -- Interesse por categoria: filtrar 2, pesquisar 2, tarefa 2, ver 3,
  -- favorito 4, pedir orçamento 6 — a perder metade a cada ~10 dias.
  create temporary table if not exists _interest (slug text primary key, s numeric) on commit drop;
  truncate _interest;
  insert into _interest (slug, s)
  select e.category_slug,
         sum((case e.kind when 'filter' then 2 when 'search' then 2 when 'task' then 2 when 'view' then 3
                          when 'favorite' then 4 when 'quote' then 6 else 1 end)
             * exp(-extract(epoch from (now() - e.created_at)) / 86400.0 / 14.0))
  from public.user_interest_events e
  where e.profile_id = v_uid and e.created_at > now() - interval '90 days'
  group by e.category_slug;

  -- Sem histórico: o que o evento ainda precisa (Serviços → "precisamos").
  if not exists (select 1 from _interest) then
    insert into _interest (slug, s)
    select distinct sp.partner_category_slug, 1.0
    from public.wedding_service_preferences sp
    join public.weddings w on w.id = sp.wedding_id
    where (w.owner_id = v_uid or public.is_wedding_member(w.id)) and sp.preference = 'needed'
    on conflict do nothing;
  end if;
  v_has_interest := exists (select 1 from _interest);

  return query
  with cand as (
    select pp.id as partner_id, pp.business_name, pp.cover_photo_url,
           coalesce(pr.category_slug, (
             select c.slug from public.partner_profile_categories pc join public.partner_categories c on c.id = pc.category_id
             where pc.partner_id = pp.id order by c.slug limit 1)) as category_slug,
           pr.id is not null as paid,
           pr.region,
           pp.service_areas, pp.nationwide
    from public.partner_profiles pp
    left join public.partner_promotions pr on pr.partner_id = pp.id and pr.status = 'active'
    where pp.status = 'published'
      and (pr.id is not null or pp.featured)
      and pp.id <> coalesce(v_uid, '00000000-0000-0000-0000-000000000000'::uuid)
  ),
  scored as (
    select c.*,
           -- interesse na categoria (o melhor das categorias do parceiro)
           coalesce((select max(i.s) from _interest i
                     where i.slug = c.category_slug
                        or i.slug in (select cc.slug from public.partner_profile_categories pc2
                                      join public.partner_categories cc on cc.id = pc2.category_id
                                      where pc2.partner_id = c.partner_id)), 0) as interest,
           -- já reservou nesta categoria: menos interesse
           exists (select 1 from public.bookings b
                   join public.partner_profile_categories pc3 on pc3.partner_id = b.partner_id
                   join public.partner_categories c3 on c3.id = pc3.category_id
                   where b.couple_id = v_uid and c3.slug = c.category_slug
                     and b.status in ('awaiting_deposit', 'confirmed', 'payment_overdue', 'disputed', 'completed')) as booked_cat,
           -- zona: o destaque é nacional, o parceiro serve o país, ou serve a zona do cliente
           (p_location is null or trim(p_location) = '' or c.nationwide or c.region is null
            or exists (select 1 from unnest(coalesce(c.service_areas, '{}'::text[])) a
                       where lower(a) like '%' || lower(trim(p_location)) || '%' or lower(trim(p_location)) like '%' || lower(a) || '%')) as near
    from cand c
  )
  select x.partner_id, x.business_name, x.cover_photo_url, x.category_slug, x.category_label, x.paid, x.score
  from (
  select s.partner_id, s.business_name, s.cover_photo_url, s.category_slug,
           (select label_pt from public.partner_categories where slug = s.category_slug) as category_label,
           s.paid,
           round((case when v_has_interest then s.interest else 1 end)
             * (case when s.booked_cat then 0.25 else 1 end)
             * (case when s.near then 1.5 else 0.6 end)
             * (case when s.paid then 1.2 else 1 end)
             -- rotação: diferente por pessoa e por dia (0,7–1,3)
             * (0.7 + 0.6 * ((abs(hashtext(coalesce(v_uid::text, 'anon') || s.partner_id::text || current_date::text)) % 1000) / 1000.0)), 4) as score
    from scored s
    where (p_category is null or s.category_slug = p_category
           or exists (select 1 from public.partner_profile_categories pc4 join public.partner_categories c4 on c4.id = pc4.category_id
                      where pc4.partner_id = s.partner_id and c4.slug = p_category))
      -- procura DJs e espaços → não mostrar floristas
      and (p_category is not null or not v_has_interest or s.interest > 0)
  ) x
  -- Mistura as categorias que interessam (um de cada, depois o segundo
  -- de cada…), como um feed, em vez de 6 da mesma.
  order by row_number() over (partition by x.category_slug order by x.score desc), x.score desc
  limit greatest(1, least(coalesce(p_limit, 6), 20));
end;
$$;
revoke execute on function public.featured_partners_for_me(text, text, integer) from public, anon;
grant execute on function public.featured_partners_for_me(text, text, integer) to authenticated;

commit;
