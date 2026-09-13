-- ============================================================
-- Wedding Gallery — galeria de fotos moderada (casal + convidados)
-- ============================================================
-- Pedido explícito do utilizador: um botão de Galeria na navbar onde
-- aparecem fotos tiradas por todos (convidados e casal), mas só depois
-- de verificadas/permitidas pelo casal.
--
-- `wedding_guest_members` (050_wedding_guest_code.sql) já liga uma
-- conta `UserRole.guest` real a um casamento — é a base de autorização
-- aqui (`is_wedding_guest_member()`, novo, mesmo padrão de
-- `is_wedding_member()`).
--
-- Ordem de escrita desenhada para evitar o mesmo bug real já encontrado
-- em `023_portfolio_storage.sql`/corrigido em
-- `030_portfolio_storage_select_policy.sql`: `uploadBinary()` faz um
-- `insert ... returning` internamente, que passa pela policy de SELECT
-- de storage.objects mesmo antes do upload terminar. Aqui a policy de
-- SELECT depende de `wedding_gallery_photos` já ter uma linha — por
-- isso o cliente cria sempre a linha de metadados primeiro (com o
-- `storage_path` já calculado, gerado no próprio cliente, não pelo
-- servidor) e só depois sobe o ficheiro para esse caminho exato.

create or replace function public.is_wedding_guest_member(target_wedding_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.wedding_guest_members m
    where m.wedding_id = target_wedding_id and m.guest_id = auth.uid()
  );
$$;

revoke execute on function public.is_wedding_guest_member(uuid) from public, anon;
grant execute on function public.is_wedding_guest_member(uuid) to authenticated;

create type public.gallery_photo_status as enum ('pending', 'approved', 'rejected');

create table public.wedding_gallery_photos (
  id uuid primary key default gen_random_uuid(),
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  uploaded_by uuid not null references public.profiles(id),
  storage_path text not null unique,
  caption text,
  status public.gallery_photo_status not null default 'pending',
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create index wedding_gallery_photos_wedding_idx on public.wedding_gallery_photos (wedding_id, status);

alter table public.wedding_gallery_photos enable row level security;

-- O casal vê tudo (fila de moderação); um convidado vê as suas próprias
-- fotos em qualquer estado (para saber se foi aprovada/recusada) mais
-- as `approved` de todos os outros.
create policy "Gallery visibility"
  on public.wedding_gallery_photos for select
  using (
    public.is_wedding_member(wedding_id)
    or uploaded_by = auth.uid()
    or (status = 'approved' and public.is_wedding_guest_member(wedding_id))
  );

create policy "Wedding/guest members can upload"
  on public.wedding_gallery_photos for insert
  with check (
    uploaded_by = auth.uid()
    and (public.is_wedding_member(wedding_id) or public.is_wedding_guest_member(wedding_id))
  );

-- O próprio autor pode remover a sua foto (mesmo já aprovada); o casal
-- pode remover qualquer uma (conteúdo indesejado, mesmo depois de
-- aprovado por engano). Sem policy de update direta — a transição de
-- estado só acontece via moderate_gallery_photo() abaixo.
create policy "Uploader or wedding member can delete"
  on public.wedding_gallery_photos for delete
  using (uploaded_by = auth.uid() or public.is_wedding_member(wedding_id));

grant select, insert, delete on public.wedding_gallery_photos to authenticated;

create or replace function public.moderate_gallery_photo(p_photo_id uuid, p_approve boolean)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_photo record;
begin
  select * into v_photo from public.wedding_gallery_photos where id = p_photo_id for update;
  if v_photo is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.is_wedding_member(v_photo.wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_photo.status <> 'pending' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.wedding_gallery_photos
  set status = case when p_approve then 'approved' else 'rejected' end,
      reviewed_by = auth.uid(),
      reviewed_at = now()
  where id = p_photo_id;
end;
$$;

revoke execute on function public.moderate_gallery_photo(uuid, boolean) from public, anon;
grant execute on function public.moderate_gallery_photo(uuid, boolean) to authenticated;

-- ============================================================
-- Storage — bucket privado (ao contrário de `portfolio`/`wedding-banners`,
-- que são conteúdo de marketing deliberadamente público; fotos de
-- convidados ainda não moderadas nunca devem ser publicamente legíveis).
-- ============================================================

insert into storage.buckets (id, name, public)
values ('wedding-gallery', 'wedding-gallery', false)
on conflict (id) do nothing;

create policy "Gallery upload by wedding/guest members"
  on storage.objects for insert
  with check (
    bucket_id = 'wedding-gallery'
    and (
      public.is_wedding_member((storage.foldername(name))[1]::uuid)
      or public.is_wedding_guest_member((storage.foldername(name))[1]::uuid)
    )
  );

-- Depende de `wedding_gallery_photos` já ter a linha correspondente
-- (ver nota no topo do ficheiro) — cobre tanto o `insert ... returning`
-- imediatamente a seguir ao upload como qualquer leitura normal depois.
create policy "Gallery select follows wedding_gallery_photos visibility"
  on storage.objects for select
  using (
    bucket_id = 'wedding-gallery'
    and exists (
      select 1 from public.wedding_gallery_photos p
      where p.storage_path = name
        and (
          p.uploaded_by = auth.uid()
          or public.is_wedding_member(p.wedding_id)
          or (p.status = 'approved' and public.is_wedding_guest_member(p.wedding_id))
        )
    )
  );

create policy "Gallery delete by uploader or wedding member"
  on storage.objects for delete
  using (
    bucket_id = 'wedding-gallery'
    and exists (
      select 1 from public.wedding_gallery_photos p
      where p.storage_path = name
        and (p.uploaded_by = auth.uid() or public.is_wedding_member(p.wedding_id))
    )
  );
