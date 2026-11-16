-- 197_harden_function_search_path.sql
--
-- Segurança: fixa o `search_path` de três funções que o Supabase Advisor
-- marcou como "function_search_path_mutable". Uma função SECURITY DEFINER
-- sem search_path fixo pode ser enganada se alguém criar um objeto com o
-- mesmo nome noutro schema no path da sessão. Fixar o path fecha essa porta.
--
-- `public, pg_temp` mantém a resolução de nomes atual (public já estava no
-- path por omissão), por isso não muda o comportamento das funções — só as
-- torna deterministas. Reversível com `RESET` (ver fim do ficheiro).
--
-- Ref.: https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable

alter function public.fee_region(p_country text)
  set search_path = public, pg_temp;

alter function public.event_display_name(p_w weddings)
  set search_path = public, pg_temp;

alter function public.newsletter_resubscribe()
  set search_path = public, pg_temp;

-- Reverter (se alguma vez for preciso):
--   alter function public.fee_region(p_country text) reset search_path;
--   alter function public.event_display_name(p_w weddings) reset search_path;
--   alter function public.newsletter_resubscribe() reset search_path;
