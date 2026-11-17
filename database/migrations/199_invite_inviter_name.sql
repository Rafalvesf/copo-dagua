-- ============================================================================
-- get_partner_invite passa a devolver também o NOME de quem convidou
-- (wedding_partner_invites.created_by -> profiles.full_name), para o mostrar
-- na página do link /juntar ("O que ele vê no link").
--
-- Mudar a assinatura (nova coluna no RETURNS TABLE) obriga a DROP + CREATE.
-- Os GRANT voltam ao padrão (PUBLIC/anon/authenticated já têm EXECUTE por
-- omissão numa função nova), como estava antes.
-- Já aplicada por mim na Supabase (2026-11-17); fica aqui para o histórico.
-- ============================================================================

drop function if exists public.get_partner_invite(uuid);

create function public.get_partner_invite(p_token uuid)
  returns table(partner_name_1 text, partner_name_2 text, inviter_name text, valid boolean)
  language sql
  stable
  security definer
  set search_path to 'public', 'pg_temp'
as $function$
  select w.partner_name_1,
         w.partner_name_2,
         pr.full_name as inviter_name,
         (i.used_at is null and i.expires_at > now())
  from public.wedding_partner_invites i
  join public.events w on w.id = i.wedding_id
  left join public.profiles pr on pr.id = i.created_by
  where i.token = p_token;
$function$;
