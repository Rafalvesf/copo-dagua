-- ============================================================
-- 088 — "Concluir" do onboarding do convidado falhava sempre
-- ============================================================
--
-- Reportado (2026-10-17): "o onboarding não me deixa avançar depois de
-- clicar em Concluir". `complete_guest_onboarding` (073) atribuía um
-- `case … end` de texto a `guests.rsvp_status` (enum `rsvp_status`) —
-- Postgres recusava com 42804 e a app recebia 400. Agora com cast.

create or replace function public.complete_guest_onboarding(
  p_attending boolean,
  p_plus_one_name text,
  p_menu_selection text,
  p_dietary_restrictions text,
  p_side text,
  p_group_label text
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
    and onboarding_completed_at is null;
end;
$$;

revoke execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text) from public, anon;
grant execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text) to authenticated;
