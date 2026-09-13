-- ============================================================
-- Módulo: Portfolio (partner-app) — armazenamento real
-- ============================================================
--
-- Pedido explícito do utilizador: "at least 3 images (mandatory) and 1
-- video (optional)" — fecha o gap sinalizado em várias notas desta sessão
-- ("nenhum parceiro real consegue ainda completar a submissão... porque
-- Portfolio não tem nenhum ecrã de upload real"). `partner_portfolio_items`
-- já existia como tabela real (`005_partner_profile.sql`,
-- `media_url`/`media_type`/`position`) mas nada escrevia lá — o ecrã
-- "+ Adicionar fotos" só chamava `MockBackend.addPortfolioItem()`.
--
-- Bucket público (`public = true`): as imagens/vídeos de portefólio são
-- conteúdo de marketing, não dados sensíveis (ao contrário de NIF/
-- documentos em `partner_verification`) — mesmo raciocínio de qualquer
-- galeria pública normal (URLs com UUID aleatório, não enumeráveis).
-- Simplifica muito o lado do cliente: `Image.network`/`VideoPlayer`
-- direto no URL público, sem gerir signed URLs com expiração. A escrita
-- (upload/update/delete) fica restrita ao dono via RLS em
-- `storage.objects`, usando o primeiro segmento do caminho
-- (`portfolio/{partner_id}/{ficheiro}`) como o id do parceiro.

insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

create policy "Partner can upload own portfolio media"
  on storage.objects for insert
  with check (bucket_id = 'portfolio' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Partner can update own portfolio media"
  on storage.objects for update
  using (bucket_id = 'portfolio' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Partner can delete own portfolio media"
  on storage.objects for delete
  using (bucket_id = 'portfolio' and (storage.foldername(name))[1] = auth.uid()::text);

-- ============================================================
-- submit_partner_profile_for_review() — o requisito de portefólio
-- passou de "3 itens quaisquer" para "3 imagens especificamente" (o
-- vídeo é sempre opcional, nunca conta para o mínimo). Resto da função
-- fica igual ao que já estava em produção.
-- ============================================================

create or replace function public.submit_partner_profile_for_review()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_profile record;
  v_category_count int;
  v_image_count int;
  v_tax_id text;
  v_missing text[] := '{}';
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_profile from public.partner_profiles where id = auth.uid() for update;
  if v_profile is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_profile.status not in ('draft', 'rejected') then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  select count(*) into v_category_count from public.partner_profile_categories where partner_id = auth.uid();
  select count(*) into v_image_count
    from public.partner_portfolio_items
    where partner_id = auth.uid() and media_type = 'image';
  select tax_id into v_tax_id from public.partner_verification where partner_id = auth.uid();

  if v_profile.business_name = '' then v_missing := array_append(v_missing, 'business_name'); end if;
  if length(v_profile.description) < 50 then v_missing := array_append(v_missing, 'description'); end if;
  if v_category_count < 1 then v_missing := array_append(v_missing, 'categories'); end if;
  if v_image_count < 3 then v_missing := array_append(v_missing, 'portfolio'); end if;
  if not v_profile.nationwide and array_length(v_profile.service_areas, 1) is null then
    v_missing := array_append(v_missing, 'service_areas');
  end if;
  if v_tax_id is null or v_tax_id = '' then v_missing := array_append(v_missing, 'tax_id'); end if;

  if array_length(v_missing, 1) is not null then
    raise exception 'incomplete_profile' using errcode = 'P0005', detail = array_to_string(v_missing, ',');
  end if;

  update public.partner_profiles
  set status = 'pending_review', submitted_at = now(), rejection_reason = null
  where id = auth.uid();
end;
$$;

-- RN nova: no máximo 1 vídeo por parceiro (o pedido foi "1 vídeo
-- opcional", não "vídeos ilimitados") — reforçada aqui, não só na UI,
-- mesmo raciocínio de enforce_partner_category_limit() para o limite de
-- 5 categorias (005_partner_profile.sql): a UI evita chegar lá, mas a
-- regra real vive na base de dados.
create or replace function public.enforce_portfolio_video_limit()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if new.media_type = 'video' and (
    select count(*) from public.partner_portfolio_items
    where partner_id = new.partner_id and media_type = 'video'
  ) >= 1 then
    raise exception 'video_limit_reached' using errcode = 'P0006';
  end if;
  return new;
end;
$$;

create trigger portfolio_video_limit
  before insert on public.partner_portfolio_items
  for each row execute function public.enforce_portfolio_video_limit();
