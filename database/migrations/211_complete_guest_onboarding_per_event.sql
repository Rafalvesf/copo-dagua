-- ============================================================
-- 211 — O onboarding do convidado só responde ao evento certo
-- ============================================================
--
-- `complete_guest_onboarding` (073/088) atualizava todas as linhas de
-- `guests` ligadas à conta com o onboarding por fazer. Quem tinha dois
-- convites por responder e acabava o onboarding de um ficava com «Vou»
-- (ou «Não vou») também no outro. Desde 2026-11-21 o «Vou / Não vou» está
-- só na página dos eventos, por isso há mais convites por responder ao
-- mesmo tempo. Agora recebe o evento (`p_wedding_id`) e só mexe nessa
-- linha. Sem evento (versões antigas da app) faz como antes.

begin;

drop function if exists public.complete_guest_onboarding(boolean, text, text, text, text, text);

create or replace function public.complete_guest_onboarding(
  p_attending boolean,
  p_plus_one_name text,
  p_menu_selection text,
  p_dietary_restrictions text,
  p_side text,
  p_group_label text,
  p_wedding_id uuid default null
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.guests
  set rsvp_status = (case when p_attending then 'confirmed' else 'declined' end)::public.rsvp_status,
      plus_one_name = case when p_attending then p_plus_one_name else null end,
      menu_selection = case when p_attending then p_menu_selection else null end,
      dietary_restrictions = case when p_attending then p_dietary_restrictions else null end,
      side = coalesce(p_side::public.guest_side, side),
      group_label = coalesce(p_group_label, group_label),
      rsvp_responded_at = now(),
      onboarding_completed_at = now(),
      updated_at = now()
  where linked_profile_id = auth.uid()
    and onboarding_completed_at is null
    and (p_wedding_id is null or wedding_id = p_wedding_id);
end;
$$;

revoke execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text, uuid) from public, anon;
grant execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text, uuid) to authenticated;

insert into public.applied_migrations (id) values ('211') on conflict do nothing;

commit;
