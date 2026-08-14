-- ============================================================
-- Módulo: Profile / partner-app (partner-app/profile/database.md)
-- ============================================================

create type partner_profile_status as enum ('draft', 'pending_review', 'published', 'rejected', 'suspended');
create type partner_business_type as enum ('individual', 'company');

create table public.partner_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label_pt text not null,
  is_active boolean not null default true
);

create table public.partner_profiles (
  id uuid primary key references public.profiles(id) on delete cascade,
  business_name text not null default '',
  business_type partner_business_type not null default 'individual',
  description text not null default '',
  years_experience integer,
  team_size integer,
  service_areas text[] not null default '{}',
  nationwide boolean not null default false,
  phone text,
  website_url text,
  instagram_url text,
  facebook_url text,
  cover_photo_url text,
  status partner_profile_status not null default 'draft',
  is_paused boolean not null default false,
  rejection_reason text,
  submitted_at timestamptz,
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index partner_profiles_status_idx on public.partner_profiles (status);

create table public.partner_profile_categories (
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  category_id uuid not null references public.partner_categories(id),
  starting_price numeric(10,2),
  primary key (partner_id, category_id)
);

-- Limite de 5 categorias (RN03) — regra entre linhas, não expressável como check constraint simples
create or replace function public.enforce_partner_category_limit()
returns trigger
language plpgsql
as $$
begin
  if (select count(*) from public.partner_profile_categories where partner_id = new.partner_id) >= 5 then
    raise exception 'Um parceiro pode ter no máximo 5 categorias (RN03)';
  end if;
  return new;
end;
$$;

create trigger partner_category_limit_check
  before insert on public.partner_profile_categories
  for each row execute function public.enforce_partner_category_limit();

create table public.partner_portfolio_items (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  media_url text not null,
  media_type text not null default 'image',
  position integer not null default 0,
  created_at timestamptz not null default now()
);
create index partner_portfolio_items_partner_idx on public.partner_portfolio_items (partner_id, position);

-- RN11: dados fiscais/verificação isolados numa tabela própria, nunca lida pelo Marketplace
create table public.partner_verification (
  partner_id uuid primary key references public.partner_profiles(id) on delete cascade,
  tax_id text not null,
  billing_address text not null,
  verification_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index partner_verification_tax_id_idx on public.partner_verification (tax_id);

-- Seed da taxonomia fixa de categorias
insert into public.partner_categories (slug, label_pt) values
  ('photography', 'Fotografia'),
  ('videography', 'Vídeo'),
  ('venue', 'Espaço / Quinta'),
  ('catering', 'Catering'),
  ('music_dj', 'Música / DJ'),
  ('flowers_decor', 'Flores e Decoração'),
  ('wedding_planner', 'Wedding Planner'),
  ('transport', 'Transporte'),
  ('beauty', 'Beleza'),
  ('cake', 'Bolo'),
  ('invitations', 'Convites'),
  ('officiant', 'Celebrante'),
  ('rentals', 'Aluguer de Material'),
  ('other', 'Outro');

alter table public.partner_profiles enable row level security;
alter table public.partner_categories enable row level security;
alter table public.partner_profile_categories enable row level security;
alter table public.partner_portfolio_items enable row level security;
alter table public.partner_verification enable row level security;

-- Helper de visibilidade pública — implementa RN01 num único ponto
create or replace function public.is_partner_profile_visible(target_partner_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.partner_profiles sp
    join public.profiles p on p.id = sp.id
    where sp.id = target_partner_id
      and sp.status = 'published'
      and sp.is_paused = false
      and p.status = 'active'
  );
$$;

create policy "Owner can view own profile"
  on public.partner_profiles for select
  using (auth.uid() = id);

create policy "Anyone authenticated can view published profiles"
  on public.partner_profiles for select
  using (public.is_partner_profile_visible(id));

create policy "Admins can view all partner profiles"
  on public.partner_profiles for select
  using (public.is_admin());

create policy "Owner can update own profile"
  on public.partner_profiles for update
  using (auth.uid() = id);

create policy "Admins can update any partner profile"
  on public.partner_profiles for update
  using (public.is_admin());

create policy "Anyone authenticated can view categories"
  on public.partner_categories for select
  using (true);

create policy "Visible when parent profile visible"
  on public.partner_profile_categories for select
  using (
    partner_id = auth.uid()
    or public.is_partner_profile_visible(partner_id)
    or public.is_admin()
  );

create policy "Owner manages own categories"
  on public.partner_profile_categories for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

create policy "Visible when parent profile visible"
  on public.partner_portfolio_items for select
  using (
    partner_id = auth.uid()
    or public.is_partner_profile_visible(partner_id)
    or public.is_admin()
  );

create policy "Owner manages own portfolio"
  on public.partner_portfolio_items for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

create policy "Owner can view own verification data"
  on public.partner_verification for select
  using (partner_id = auth.uid());

create policy "Admins can view verification data"
  on public.partner_verification for select
  using (public.is_admin());

create policy "Owner can manage own verification data"
  on public.partner_verification for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

grant select, update on public.partner_profiles to app_authenticated;
grant select on public.partner_categories to app_authenticated;
grant select, insert, update, delete on public.partner_profile_categories to app_authenticated;
grant select, insert, update, delete on public.partner_portfolio_items to app_authenticated;
grant select, insert, update on public.partner_verification to app_authenticated;
