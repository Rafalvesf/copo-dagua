-- ============================================================
-- Reviews — visibilidade do casal para o parceiro avaliado
-- ============================================================
-- Pedido explícito do utilizador: "as reviews devem mostrar o nome dos
-- noivos e o icon deles, tal como o perfil deles. a quanto tempo tem
-- conta e outras informações que aches interessantes mas não secretas
-- ou pessoais". Mesma classe de gap já corrigida em
-- `015_booking_participant_visibility.sql`/`016_booking_partner_wedding_visibility.sql`
-- para `bookings`: `weddings` só deixa `is_wedding_member()` ver a
-- linha, `profiles` só deixa o próprio dono — um join
-- `reviews -> weddings`/`reviews -> profiles` a partir do parceiro
-- avaliado voltaria sempre `null` em silêncio sem isto.
--
-- Funções próprias em vez de reaproveitar `is_booking_counterpart()`/
-- `is_booking_partner_for_wedding()`: `reviews.couple_id` é quem
-- escreveu a review (`auth.uid()` em `submit_review()`), que pode não
-- ser exatamente `bookings.couple_id` se o casamento tiver mais do que
-- um colaborador — verificar contra `reviews` diretamente (a fonte de
-- verdade real deste acesso) é mais correto do que inferir a partir de
-- `bookings`. Restrito a `status = 'published'` por defesa em
-- profundidade, mesmo que a policy de select de `reviews` já garanta
-- isso a montante.

create or replace function public.is_review_counterpart(target_profile_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.reviews r
    where r.couple_id = target_profile_id and r.partner_id = auth.uid() and r.status = 'published'
  );
$$;

revoke execute on function public.is_review_counterpart(uuid) from public, anon;
grant execute on function public.is_review_counterpart(uuid) to authenticated;

create policy "Review partner can view couple profile"
  on public.profiles for select
  using (public.is_review_counterpart(id));

create or replace function public.is_review_partner_for_wedding(target_wedding_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.reviews r
    where r.wedding_id = target_wedding_id and r.partner_id = auth.uid() and r.status = 'published'
  );
$$;

revoke execute on function public.is_review_partner_for_wedding(uuid) from public, anon;
grant execute on function public.is_review_partner_for_wedding(uuid) to authenticated;

create policy "Review partner can view wedding"
  on public.weddings for select
  using (public.is_review_partner_for_wedding(id));
