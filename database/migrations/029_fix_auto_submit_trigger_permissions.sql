-- ============================================================
-- Bug real: qualquer escrita de um parceiro autenticado em
-- partner_profiles/partner_profile_categories/partner_portfolio_items/
-- partner_verification/partner_service_packages falhava com
-- "permission denied for function maybe_auto_submit_partner_profile".
--
-- `maybe_auto_submit_partner_profile()` tem EXECUTE revogado de
-- `authenticated` de propósito (026_partner_auto_submission.sql) — só
-- deveria ser chamável por triggers/service_role, nunca diretamente por
-- RPC de um cliente. Mas os triggers `trg_auto_submit_from_*` que a
-- chamam (`perform public.maybe_auto_submit_partner_profile(...)`) são
-- `security invoker` (omissão), por isso correm com o papel de quem
-- disparou o UPDATE/INSERT/DELETE original — 'authenticated' num
-- pedido real do parceiro — e essa chamada interna precisa da mesma
-- permissão EXECUTE que foi revogada. Nunca apanhado antes porque toda
-- a verificação anterior deste trigger corria via `supabase db query
-- --linked` (papel privilegiado do CLI), nunca como 'authenticated' a
-- sério — só apareceu agora que o utilizador testou pela app real.
--
-- Corrigido tornando os próprios adaptadores `security definer` (em vez
-- de alargar o grant em `maybe_auto_submit_partner_profile`, o que
-- voltaria a permitir chamá-la diretamente por RPC) — seguros porque só
-- são invocados pelo mecanismo de trigger, nunca expostos como RPC.
-- ============================================================

alter function public.trg_auto_submit_from_partner_profiles() security definer set search_path = public, pg_temp;
alter function public.trg_auto_submit_from_categories() security definer set search_path = public, pg_temp;
alter function public.trg_auto_submit_from_portfolio() security definer set search_path = public, pg_temp;
alter function public.trg_auto_submit_from_verification() security definer set search_path = public, pg_temp;
alter function public.trg_auto_submit_from_packages() security definer set search_path = public, pg_temp;

-- Postgres recusa chamar diretamente uma função `returns trigger` via
-- RPC ("trigger functions can only be called as triggers") — não é uma
-- fuga real. Revogado à mesma para bater certo com o resto da base de
-- dados (nenhuma outra função `security definer` fica com EXECUTE
-- aberto a `authenticated` sem ser de propósito) e para o
-- `db advisors --type security` deixar de assinalar isto a cada corrida.
revoke execute on function public.trg_auto_submit_from_partner_profiles() from public, anon, authenticated;
revoke execute on function public.trg_auto_submit_from_categories() from public, anon, authenticated;
revoke execute on function public.trg_auto_submit_from_portfolio() from public, anon, authenticated;
revoke execute on function public.trg_auto_submit_from_verification() from public, anon, authenticated;
revoke execute on function public.trg_auto_submit_from_packages() from public, anon, authenticated;
