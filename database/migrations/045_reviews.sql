-- ============================================================
-- Reviews — pedido explícito do utilizador (2026-09-01): módulo
-- listado desde 2026-08-14 em `partner-app/profile/tasks.md` como
-- "melhoria futura, fora de âmbito do MVP" ("Reviews e classificações
-- de parceiros por noivos, com impacto na ordenação do Marketplace —
-- módulo próprio a decidir"), e referenciado por
-- `admin-web/moderation/` como bloqueador ("depende de um módulo de
-- reviews, ainda não iniciado"). Agora construído.
--
-- Só reservas `completed` podem ser avaliadas (RN explícita) — uma
-- review por reserva (`unique(booking_id)`), nunca por parceiro
-- diretamente, para impedir uma avaliação sem uma reserva real por
-- trás. `submit_review()`/`respond_to_review()` seguem o mesmo padrão
-- `security definer` de `request_quote()`/`send_proposal()`
-- (009_quotations_bookings.sql) — nunca inserção/update direto pela
-- app, para a validação de estado (reserva concluída, autor da
-- resposta) nunca poder ser contornada do lado do cliente.
-- ============================================================

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  wedding_id uuid not null references public.weddings(id) on delete cascade,
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  couple_id uuid not null references public.profiles(id),
  rating smallint not null check (rating between 1 and 5),
  comment text,
  partner_response text,
  partner_response_at timestamptz,
  -- Moderação (RN — admin-web/moderation/): nunca DELETE, só marca
  -- `removed` — mantém o registo para auditoria, só deixa de aparecer
  -- no Marketplace/perfil público. `flagged` — o parceiro denunciou
  -- (botão "Denunciar" já existia em `partner_reviews_screen.dart`,
  -- antes só um snackbar local sem persistência real); sai do
  -- Marketplace/perfil público de imediato (a policy de select abaixo
  -- só mostra `published` a quem não é autor/admin) até um admin
  -- decidir republicar ou remover.
  status text not null default 'published' check (status in ('published', 'flagged', 'removed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (booking_id)
);

create index reviews_partner_status_idx on public.reviews (partner_id) where status = 'published';
create index reviews_wedding_id_idx on public.reviews (wedding_id);

alter table public.reviews enable row level security;

-- Visível publicamente (Marketplace/perfil do parceiro) quando
-- `published`; o casal autor e o admin veem sempre, mesmo removida —
-- para o casal nunca perder o que escreveu e o admin poder auditar.
create policy "Published reviews are visible to authenticated users"
  on public.reviews for select
  using (status = 'published' or public.is_wedding_member(wedding_id) or public.is_admin());

-- Só o admin escreve diretamente na tabela (moderação — marcar
-- removed/published outra vez). Criar review e responder passam
-- sempre pelas RPCs abaixo, nunca por insert/update direto do casal
-- ou parceiro.
create policy "Admins can moderate reviews"
  on public.reviews for update
  using (public.is_admin())
  with check (public.is_admin());

grant select, update on public.reviews to authenticated;

create or replace function public.submit_review(
  p_booking_id uuid, p_rating smallint, p_comment text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_booking record;
  v_review_id uuid;
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select * into v_booking from public.bookings where id = p_booking_id for update;
  if v_booking is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if not public.is_wedding_member(v_booking.wedding_id) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if v_booking.status <> 'completed' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;
  if p_rating is null or p_rating < 1 or p_rating > 5 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  insert into public.reviews (booking_id, wedding_id, partner_id, couple_id, rating, comment)
  values (p_booking_id, v_booking.wedding_id, v_booking.partner_id, auth.uid(), p_rating, nullif(trim(p_comment), ''))
  on conflict (booking_id) do nothing
  returning id into v_review_id;

  if v_review_id is null then
    raise exception 'already_reviewed' using errcode = 'P0001';
  end if;

  return v_review_id;
end;
$$;

grant execute on function public.submit_review(uuid, smallint, text) to authenticated;

-- `partner_profiles.id = profiles(id)` (extensão 1:1, ver
-- 005_partner_profile.sql) — `partner_id = auth.uid()` já confirma
-- dono, sem precisar de join.
create or replace function public.respond_to_review(p_review_id uuid, p_response text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_review record;
begin
  select * into v_review from public.reviews where id = p_review_id for update;
  if v_review is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_review.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_response is null or length(trim(p_response)) = 0 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  update public.reviews
  set partner_response = trim(p_response), partner_response_at = now(), updated_at = now()
  where id = p_review_id;
end;
$$;

grant execute on function public.respond_to_review(uuid, text) to authenticated;

-- Só o próprio parceiro visado pode denunciar a review para revisão
-- do admin — nunca esconde silenciosamente por decisão unilateral do
-- parceiro, só marca `flagged` (sai do público, fica pendente de
-- decisão do admin, ver comentário na coluna `status` acima).
create or replace function public.flag_review(p_review_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_review record;
begin
  select * into v_review from public.reviews where id = p_review_id for update;
  if v_review is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_review.partner_id <> auth.uid() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.reviews set status = 'flagged', updated_at = now() where id = p_review_id;
end;
$$;

grant execute on function public.flag_review(uuid) to authenticated;
