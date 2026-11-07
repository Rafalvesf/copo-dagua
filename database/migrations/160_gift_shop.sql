-- ============================================================
-- 160 — Lista de presentes: loja dos parceiros + desejos
-- ============================================================
-- Pedido do utilizador (2026-11-07): "para os presentes... algo tipo Etsy...
-- e um bloco de notas do que o organizador precisa"; "pagam na app para o
-- parceiro ou compram fora o item. O dinheiro nunca vai para o organizador".
--
--   • partner_products: a loja de cada parceiro (artesãos, lojas).
--   • gift_list_items: a lista do evento. Dois tipos:
--       product → um produto da loja; o convidado paga na app e o dinheiro
--                 vai para o parceiro (menos a comissão da À Nossa!); o
--                 parceiro envia para a morada que o organizador indicou.
--       wish    → uma nota do que o organizador precisa ("bloco de notas"),
--                 com link opcional; o convidado reserva ("vou oferecer") e
--                 compra fora. Nenhum dinheiro passa pela app.
--   • gift_claims: reservas dos desejos. gift_orders: compras na loja.
--
-- Corre DEPOIS da 159 (usa wedding_can).

begin;

alter table public.platform_settings
  add column if not exists gift_fee_percentage numeric(5,2) not null default 4;

alter table public.weddings
  add column if not exists gift_delivery_address text check (length(gift_delivery_address) <= 400);

-- ---------- Loja dos parceiros ----------
create table if not exists public.partner_products (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  title text not null check (length(trim(title)) between 2 and 120),
  description text check (length(description) <= 2000),
  price numeric(10,2) not null check (price >= 1 and price <= 20000),
  photo_url text check (photo_url is null or photo_url ~ '^https://'),
  stock int check (stock is null or stock >= 0),
  delivery_note text check (length(delivery_note) <= 300),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists partner_products_partner_idx on public.partner_products (partner_id);
create index if not exists partner_products_active_idx on public.partner_products (active, created_at desc);

alter table public.partner_products enable row level security;
drop policy if exists "Read active products of published partners" on public.partner_products;
create policy "Read active products of published partners" on public.partner_products for select to authenticated
  using (
    partner_id = (select auth.uid())
    or public.is_admin()
    or (active and exists (select 1 from public.partner_profiles pp where pp.id = partner_id and pp.status = 'published' and not coalesce(pp.is_paused, false)))
  );
drop policy if exists "Partner manages own products" on public.partner_products;
create policy "Partner manages own products" on public.partner_products for all to authenticated
  using (partner_id = (select auth.uid()))
  with check (partner_id = (select auth.uid()));

-- ---------- Lista do evento ----------
create table if not exists public.gift_list_items (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  kind text not null check (kind in ('product', 'wish')),
  product_id uuid references public.partner_products(id) on delete cascade,
  title text check (length(title) <= 120),
  note text check (length(note) <= 600),
  link_url text check (link_url is null or link_url ~ '^https?://'),
  price numeric(10,2) check (price is null or (price >= 0 and price <= 100000)),
  quantity_wanted int not null default 1 check (quantity_wanted between 1 and 50),
  sort int not null default 0,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  check ((kind = 'product' and product_id is not null) or (kind = 'wish' and title is not null and length(trim(title)) >= 2))
);
create index if not exists gift_list_items_wedding_idx on public.gift_list_items (wedding_id, sort, created_at);

alter table public.gift_list_items enable row level security;
drop policy if exists "Hosts and guests read gift list" on public.gift_list_items;
create policy "Hosts and guests read gift list" on public.gift_list_items for select to authenticated
  using (
    public.is_wedding_member(wedding_id)
    or exists (select 1 from public.wedding_guest_members m where m.wedding_id = gift_list_items.wedding_id and m.guest_id = (select auth.uid()))
  );
drop policy if exists "Hosts manage gift list" on public.gift_list_items;
create policy "Hosts manage gift list" on public.gift_list_items for all to authenticated
  using (public.wedding_can(wedding_id, 'evento'))
  with check (public.wedding_can(wedding_id, 'evento'));

-- Reservas dos desejos ("vou oferecer"; compra fora da app).
create table if not exists public.gift_claims (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.gift_list_items(id) on delete cascade,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  guest_id uuid not null references public.profiles(id) on delete cascade,
  guest_name text not null,
  quantity int not null default 1 check (quantity between 1 and 50),
  message text check (length(message) <= 600),
  created_at timestamptz not null default now()
);
create index if not exists gift_claims_item_idx on public.gift_claims (item_id);
alter table public.gift_claims enable row level security;
drop policy if exists "Guest or hosts read claims" on public.gift_claims;
create policy "Guest or hosts read claims" on public.gift_claims for select to authenticated
  using (guest_id = (select auth.uid()) or public.wedding_can(wedding_id, 'evento'));

-- Compras na loja (pagas na app ao parceiro).
create table if not exists public.gift_orders (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references public.gift_list_items(id) on delete set null,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  product_id uuid references public.partner_products(id) on delete set null,
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  buyer_name text not null,
  product_title text not null,
  quantity int not null check (quantity between 1 and 20),
  unit_price numeric(10,2) not null,
  amount numeric(10,2) not null,
  platform_fee numeric(10,2) not null default 0,
  stripe_fee numeric(10,2),
  message text check (length(message) <= 600),
  status text not null default 'pending' check (status in ('pending', 'paid', 'cancelled', 'refunded')),
  shipped_at timestamptz,
  checkout_session_id text unique,
  payment_intent_id text,
  destination_account text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists gift_orders_wedding_idx on public.gift_orders (wedding_id, status);
create index if not exists gift_orders_partner_idx on public.gift_orders (partner_id, status, paid_at desc);
alter table public.gift_orders enable row level security;
drop policy if exists "Buyer, hosts or partner read gift orders" on public.gift_orders;
create policy "Buyer, hosts or partner read gift orders" on public.gift_orders for select to authenticated
  using (buyer_id = (select auth.uid()) or partner_id = (select auth.uid()) or public.wedding_can(wedding_id, 'evento') or public.is_admin());
-- Escrita só pelas funções abaixo e pela Edge Function (service_role).

-- ---------- A lista, para convidados e anfitriões ----------
create or replace function public.gift_list(p_wedding uuid)
returns table (
  id uuid, kind text, product_id uuid, title text, note text, link_url text, price numeric, photo_url text,
  partner_id uuid, partner_name text, delivery_note text, available boolean,
  quantity_wanted int, quantity_taken int, my_quantity int, my_claim_id uuid, sort int
)
language sql stable security definer set search_path = public, pg_temp as $$
  select i.id, i.kind, i.product_id,
         coalesce(p.title, i.title), i.note, i.link_url,
         coalesce(p.price, i.price), p.photo_url,
         p.partner_id, pp.business_name, p.delivery_note,
         (i.kind = 'wish' or (p.active and pp.status = 'published' and not coalesce(pp.is_paused, false)
                              and (p.stock is null or p.stock > 0))),
         i.quantity_wanted,
         (coalesce((select sum(c.quantity) from public.gift_claims c where c.item_id = i.id), 0)
          + coalesce((select sum(o.quantity) from public.gift_orders o where o.item_id = i.id and o.status = 'paid'), 0))::int,
         (coalesce((select sum(c.quantity) from public.gift_claims c where c.item_id = i.id and c.guest_id = auth.uid()), 0)
          + coalesce((select sum(o.quantity) from public.gift_orders o where o.item_id = i.id and o.status = 'paid' and o.buyer_id = auth.uid()), 0))::int,
         (select c.id from public.gift_claims c where c.item_id = i.id and c.guest_id = auth.uid() order by c.created_at desc limit 1),
         i.sort
  from public.gift_list_items i
  left join public.partner_products p on p.id = i.product_id
  left join public.partner_profiles pp on pp.id = p.partner_id
  where i.wedding_id = p_wedding
    and (public.is_wedding_member(p_wedding)
         or exists (select 1 from public.wedding_guest_members m where m.wedding_id = p_wedding and m.guest_id = auth.uid()))
  order by i.sort, i.created_at;
$$;
revoke execute on function public.gift_list(uuid) from public, anon;
grant execute on function public.gift_list(uuid) to authenticated;

-- Quem ofereceu o quê (anfitriões).
create or replace function public.gift_givers(p_wedding uuid)
returns table (item_id uuid, title text, kind text, guest_name text, quantity int, message text, amount numeric, shipped_at timestamptz, created_at timestamptz)
language sql stable security definer set search_path = public, pg_temp as $$
  select c.item_id, coalesce(p.title, i.title), 'wish', c.guest_name, c.quantity, c.message, null::numeric, null::timestamptz, c.created_at
  from public.gift_claims c
  join public.gift_list_items i on i.id = c.item_id
  left join public.partner_products p on p.id = i.product_id
  where c.wedding_id = p_wedding and public.wedding_can(p_wedding, 'evento')
  union all
  select o.item_id, o.product_title, 'product', o.buyer_name, o.quantity, o.message, o.amount, o.shipped_at, o.paid_at
  from public.gift_orders o
  where o.wedding_id = p_wedding and o.status = 'paid' and public.wedding_can(p_wedding, 'evento')
  order by 9 desc;
$$;
revoke execute on function public.gift_givers(uuid) from public, anon;
grant execute on function public.gift_givers(uuid) to authenticated;

-- ---------- Desejos: "vou oferecer" ----------
create or replace function public.claim_gift(p_item uuid, p_quantity int default 1, p_message text default null)
returns uuid
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
  v_item record;
  v_taken int;
  v_name text;
  v_id uuid;
begin
  if v_uid is null then raise exception 'forbidden' using errcode = '42501'; end if;
  select * into v_item from public.gift_list_items where id = p_item for update;
  if v_item is null or v_item.kind <> 'wish' then raise exception 'not_found' using errcode = 'P0002'; end if;
  if not exists (select 1 from public.wedding_guest_members m where m.wedding_id = v_item.wedding_id and m.guest_id = v_uid)
     and not public.is_wedding_member(v_item.wedding_id) then
    raise exception 'not_guest' using errcode = '42501';
  end if;
  if p_quantity is null or p_quantity < 1 then raise exception 'invalid_quantity' using errcode = 'P0001'; end if;
  select coalesce(sum(quantity), 0) into v_taken from public.gift_claims where item_id = p_item;
  if v_taken + p_quantity > v_item.quantity_wanted then
    raise exception 'already_taken' using errcode = 'P0001';
  end if;
  select coalesce(nullif(trim(full_name), ''), 'Convidado') into v_name from public.profiles where id = v_uid;
  insert into public.gift_claims (item_id, wedding_id, guest_id, guest_name, quantity, message)
  values (p_item, v_item.wedding_id, v_uid, v_name, p_quantity, nullif(trim(p_message), ''))
  returning id into v_id;

  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select w.owner_id, 'gift_claimed', 'Presente reservado', v_name,
         v_item.title || case when p_quantity > 1 then ' · ' || p_quantity || ' unidades' else '' end
           || coalesce(' · «' || left(nullif(trim(p_message), ''), 120) || '»', ''),
         '/gift-list'
  from public.weddings w where w.id = v_item.wedding_id;
  return v_id;
end;
$$;
revoke execute on function public.claim_gift(uuid, int, text) from public, anon;
grant execute on function public.claim_gift(uuid, int, text) to authenticated;

create or replace function public.unclaim_gift(p_claim uuid)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  delete from public.gift_claims
  where id = p_claim and (guest_id = auth.uid() or public.wedding_can(wedding_id, 'evento'));
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
end;
$$;
revoke execute on function public.unclaim_gift(uuid) from public, anon;
grant execute on function public.unclaim_gift(uuid) to authenticated;

-- ---------- Loja: produtos para escolher ----------
create or replace function public.shop_products(p_query text default null)
returns table (id uuid, partner_id uuid, partner_name text, city text, title text, description text, price numeric,
               photo_url text, delivery_note text, in_stock boolean)
language sql stable security definer set search_path = public, pg_temp as $$
  select p.id, p.partner_id, pp.business_name, pp.city, p.title, p.description, p.price, p.photo_url, p.delivery_note,
         (p.stock is null or p.stock > 0)
  from public.partner_products p
  join public.partner_profiles pp on pp.id = p.partner_id
  where p.active and pp.status = 'published' and not coalesce(pp.is_paused, false)
    and auth.uid() is not null
    and (p_query is null or trim(p_query) = ''
         or p.title ilike '%' || trim(p_query) || '%'
         or pp.business_name ilike '%' || trim(p_query) || '%'
         or p.description ilike '%' || trim(p_query) || '%')
  order by p.created_at desc
  limit 100;
$$;
revoke execute on function public.shop_products(text) from public, anon;
grant execute on function public.shop_products(text) to authenticated;

-- ---------- Compras: confirmar (Edge Function) ----------
create or replace function public.confirm_gift_order(p_session_id text, p_payment_intent_id text)
returns uuid
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_o record;
begin
  select * into v_o from public.gift_orders where checkout_session_id = p_session_id for update;
  if v_o is null then return null; end if;
  if v_o.status = 'paid' then return v_o.id; end if;
  update public.gift_orders set status = 'paid', payment_intent_id = p_payment_intent_id, paid_at = now() where id = v_o.id;
  update public.partner_products set stock = greatest(stock - v_o.quantity, 0), updated_at = now()
  where id = v_o.product_id and stock is not null;

  -- Anfitriões: quem ofereceu.
  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select w.owner_id, 'gift_bought', 'Presente oferecido', v_o.buyer_name,
         v_o.product_title || case when v_o.quantity > 1 then ' · ' || v_o.quantity || ' unidades' else '' end
           || coalesce(' · «' || left(v_o.message, 120) || '»', ''),
         '/gift-list'
  from public.weddings w where w.id = v_o.wedding_id;
  -- Parceiro: nova encomenda para enviar.
  insert into public.notifications (partner_id, type, title, subtitle, body, link)
  values (v_o.partner_id, 'gift_order', 'Nova encomenda', public.couple_label(v_o.wedding_id),
          v_o.product_title || ' · ' || v_o.quantity || ' × · ' || public.fmt_eur(v_o.amount), '/partner-shop');
  return v_o.id;
end;
$$;
revoke execute on function public.confirm_gift_order(text, text) from public, anon, authenticated;
grant execute on function public.confirm_gift_order(text, text) to service_role;

-- ---------- Parceiro: encomendas ----------
create or replace function public.partner_gift_orders()
returns table (id uuid, product_title text, quantity int, amount numeric, platform_fee numeric, stripe_fee numeric,
               buyer_name text, message text, client text, delivery_address text, paid_at timestamptz, shipped_at timestamptz)
language sql stable security definer set search_path = public, pg_temp as $$
  select o.id, o.product_title, o.quantity, o.amount, o.platform_fee, o.stripe_fee, o.buyer_name, o.message,
         public.couple_label(o.wedding_id), w.gift_delivery_address, o.paid_at, o.shipped_at
  from public.gift_orders o
  join public.weddings w on w.id = o.wedding_id
  where o.partner_id = auth.uid() and o.status = 'paid'
  order by o.shipped_at nulls first, o.paid_at desc;
$$;
revoke execute on function public.partner_gift_orders() from public, anon;
grant execute on function public.partner_gift_orders() to authenticated;

create or replace function public.mark_gift_order_shipped(p_order uuid)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_o record;
begin
  select * into v_o from public.gift_orders where id = p_order and partner_id = auth.uid() and status = 'paid' for update;
  if v_o is null then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v_o.shipped_at is not null then return; end if;
  update public.gift_orders set shipped_at = now() where id = p_order;
  insert into public.notifications (profile_id, type, title, subtitle, body, link)
  select w.owner_id, 'gift_shipped', 'Presente a caminho',
         coalesce((select business_name from public.partner_profiles where id = v_o.partner_id), 'Parceiro'),
         v_o.product_title || ', oferecido por ' || v_o.buyer_name || '.', '/gift-list'
  from public.weddings w where w.id = v_o.wedding_id;
end;
$$;
revoke execute on function public.mark_gift_order_shipped(uuid) from public, anon;
grant execute on function public.mark_gift_order_shipped(uuid) to authenticated;

commit;
