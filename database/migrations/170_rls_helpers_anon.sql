-- 170 · Sem "permission denied for function" quando não há sessão
--
-- Sentry COPO-DAGUA-4/6/7 (2026-11-08): pedidos sem sessão (convite
-- público, ou a sessão ainda a restaurar no iPhone) passam pelas
-- políticas RLS, que chamam estas funções; o anon não as podia executar
-- e a app rebentava com 42501 em vez de receber "sem linhas".
-- Todas só devolvem true para a própria conta (auth.uid(), nulo sem
-- sessão) ou informação já pública, por isso o anon pode executá-las.

begin;

grant execute on function public.is_admin() to anon;
grant execute on function public.wedding_can(uuid, text) to anon;
grant execute on function public.is_wedding_member(uuid) to anon;
grant execute on function public.is_partner_profile_visible(uuid) to anon;
grant execute on function public.is_booking_counterpart(uuid) to anon;
grant execute on function public.is_wedding_guest_member(uuid) to anon;
grant execute on function public.can_see_gallery_photo(uuid) to anon;
grant execute on function public.has_admin_permission(text) to anon;
grant execute on function public.guest_offers_enabled() to anon;
grant execute on function public.is_booking_partner_for_wedding(uuid) to anon;
grant execute on function public.is_review_counterpart(uuid) to anon;
grant execute on function public.is_review_partner_for_wedding(uuid) to anon;

commit;
