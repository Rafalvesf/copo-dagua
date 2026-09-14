-- ============================================================
-- complete_guest_onboarding() — wizard "Vais ao casamento?"
-- ============================================================
--
-- Pedido explícito do utilizador (spec "Modo Convidado"): depois de uma
-- conta ficar ligada a uma linha de `guests` (por código ou por convite
-- individual), o primeiro ecrã deve ser sempre "Vais ao casamento?" —
-- RPC dedicada em vez de reaproveitar `update_own_guest_info()`
-- (`067_guest_self_service.sql`) porque este wizard também escreve
-- `rsvp_status`/`side`/`group_label`/`onboarding_completed_at`, campos
-- que essa função nunca expôs de propósito (geridos pelo casal, não
-- pelo convidado) — aqui só é seguro porque é sempre a PRIMEIRA vez
-- (nunca corre novamente depois de `onboarding_completed_at` gravado).
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
  set rsvp_status = case when p_attending then 'confirmed' else 'declined' end,
      plus_one_name = case when p_attending then p_plus_one_name else null end,
      menu_selection = case when p_attending then p_menu_selection else null end,
      dietary_restrictions = case when p_attending then p_dietary_restrictions else null end,
      side = coalesce(p_side::guest_side, side),
      group_label = coalesce(p_group_label, group_label),
      rsvp_responded_at = now(),
      onboarding_completed_at = now(),
      updated_at = now()
  where linked_profile_id = auth.uid()
    and onboarding_completed_at is null;
end;
$$;

revoke execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text)
  from public, anon;
grant execute on function public.complete_guest_onboarding(boolean, text, text, text, text, text)
  to authenticated;
