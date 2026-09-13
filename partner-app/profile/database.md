# Profile (partner-app) — Modelo de Dados

`partner_profiles.id` é também `profiles.id` (mesma relação 1:1 por PK-como-FK já usada em `profiles` → `auth.users`). Dados sensíveis (NIF, morada de faturação) vivem numa tabela à parte, `partner_verification`, nunca exposta ao Marketplace — ver RN11 e a secção de decisões abaixo.

```sql
create type partner_profile_status as enum ('draft', 'pending_review', 'published', 'rejected', 'suspended');
create type partner_business_type as enum ('individual', 'company');

-- Taxonomia fixa de categorias (seed via migração, gerida por admin no futuro)
create table public.partner_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label_pt text not null,
  is_active boolean not null default true
);

create type partner_pricing_mode as enum ('packages', 'quote_only');

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
  contact_email text, -- email público de contacto do negócio, distinto do email de login (auth.users.email); ver 013_partner_contact_email.sql
  cover_photo_url text, -- também usado como logótipo obrigatório de onboarding, ver Profile.logoUrl (mobile-app)
  status partner_profile_status not null default 'draft',
  pricing_mode partner_pricing_mode not null default 'quote_only', -- RN: parceiro escolhe UM dos dois modos, nunca os dois — ver partner_service_packages abaixo
  is_paused boolean not null default false,
  rejection_reason text,
  submitted_at timestamptz,
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index partner_profiles_status_idx on public.partner_profiles (status);

-- Categorias oferecidas por cada parceiro (RN03: 1 a 5)
create table public.partner_profile_categories (
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  category_id uuid not null references public.partner_categories(id),
  starting_price numeric(10,2),
  primary key (partner_id, category_id)
);

-- Limite de 5 categorias — regra entre linhas, não expressável como check constraint simples
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
  media_type text not null default 'image', -- image | video
  position integer not null default 0,
  created_at timestamptz not null default now()
);
create index partner_portfolio_items_partner_idx on public.partner_portfolio_items (partner_id, position);

-- Pacotes de serviço reais (RN: até 3 por parceiro, só usados quando
-- pricing_mode = 'packages'). Ver database/migrations/028_partner_service_packages.sql.
create table public.partner_service_packages (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  name text not null,
  description text not null default '',
  price numeric(10,2) not null,
  is_starting_price boolean not null default false, -- true = "A partir de X€", preço não fechado
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index partner_service_packages_partner_idx on public.partner_service_packages (partner_id, position);

create or replace function public.enforce_partner_package_limit()
returns trigger
language plpgsql
as $$
begin
  if (select count(*) from public.partner_service_packages where partner_id = new.partner_id) >= 3 then
    raise exception 'Um parceiro pode ter no máximo 3 pacotes de serviço';
  end if;
  return new;
end;
$$;

create trigger partner_package_limit_check
  before insert on public.partner_service_packages
  for each row execute function public.enforce_partner_package_limit();

-- RN11: dados fiscais/verificação isolados numa tabela própria, nunca lida pelo Marketplace
create table public.partner_verification (
  partner_id uuid primary key references public.partner_profiles(id) on delete cascade,
  tax_id text not null,
  billing_address text not null,
  verification_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
-- Parcial (não simples): exclui o placeholder '' que on-partner-created
-- insere para todo parceiro novo até preencher o NIF real — um índice
-- único simples só deixaria UM parceiro em toda a plataforma ficar por
-- preencher de cada vez. Corrigido em 014_partner_verification_tax_id_partial_unique.sql
-- (2026-08-30) depois de um segundo signup de parceiro real falhar com
-- "duplicate key value" antes de chegar a qualquer ecrã da app.
create unique index partner_verification_tax_id_idx
  on public.partner_verification (tax_id)
  where tax_id <> '';
```

## Row Level Security (RLS) — crítico

```sql
alter table public.partner_profiles enable row level security;
alter table public.partner_categories enable row level security;
alter table public.partner_profile_categories enable row level security;
alter table public.partner_portfolio_items enable row level security;
alter table public.partner_service_packages enable row level security;
alter table public.partner_verification enable row level security;

-- Helper de visibilidade pública — implementa RN01 num único ponto,
-- reutilizado por todas as tabelas filhas (mesmo padrão de is_wedding_member()).
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

create policy "Visible when parent profile visible"
  on public.partner_service_packages for select
  using (
    partner_id = auth.uid()
    or public.is_partner_profile_visible(partner_id)
    or public.is_admin()
  );

create policy "Owner manages own packages"
  on public.partner_service_packages for all
  using (partner_id = auth.uid())
  with check (partner_id = auth.uid());

-- partner_verification nunca tem policy de leitura pública — só owner e admin.
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

grant select, update on public.partner_profiles to authenticated;
grant select on public.partner_categories to authenticated;
grant select, insert, update, delete on public.partner_profile_categories to authenticated;
grant select, insert, update, delete on public.partner_portfolio_items to authenticated;
grant select, insert, update, delete on public.partner_service_packages to authenticated;
grant select, insert, update on public.partner_verification to authenticated;
```

Nota: `partner_profiles` não tem policy de `insert` para `authenticated` — a linha nasce via trigger `on-partner-created` (security definer, ver `api.md`) no momento do signup, não por escrita direta do cliente. Isto evita que um utilizador crie múltiplos `partner_profiles` para si próprio ou perfis "órfãos" sem conta associada.

## Decisões de arquitetura

1. **Tabela `partner_verification` separada de `partner_profiles`** — RLS do Postgres é ao nível da linha, não da coluna. Se o NIF e a morada de faturação vivessem na mesma tabela que os dados públicos, qualquer policy de `select` que exponha o perfil ao Marketplace exporia também esses campos a menos que a aplicação filtrasse colunas manualmente em cada query (frágil, fácil de esquecer num novo cliente/relatório). Separar em tabela própria com RLS restrita a owner+admin torna a fuga de dados estruturalmente impossível, não apenas uma disciplina de código.
2. **`is_partner_profile_visible()` como função central de RN01** — evita repetir a condição de três partes (`status`, `is_paused`, `profiles.status`) em cada policy de cada tabela filha; se a regra mudar (ex: adicionar verificação de Stripe Connect ativo antes de aparecer no Marketplace), muda-se num único sítio.
3. **Limite de categorias (RN03) via trigger, não `check constraint`** — Postgres não suporta `check` que agregue outras linhas da mesma tabela; a alternativa a um trigger seria validação só na aplicação, que não protege contra escrita direta ou concorrente. Mesmo trade-off que motivou `is_admin()`/`is_wedding_member()`: lógica crítica de negócio garantida na base de dados, não só no cliente.
4. **`service_areas` como `text[]` em vez de tabela normalizada** — decisão consciente de simplicidade para o MVP; pesquisa geográfica por proximidade fica pouco eficiente com array de texto. Documentado como débito técnico em `tasks.md`, a resolver quando o Marketplace precisar de pesquisa geográfica real.
