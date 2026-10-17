-- ============================================================
-- 094 — Faixa "Adolescente"
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "adiciona adolescente também".

alter table public.guests drop constraint if exists guests_age_group_check;
alter table public.guests
  add constraint guests_age_group_check check (age_group in ('child', 'teen', 'adult', 'senior'));

alter table public.guest_companions drop constraint if exists guest_companions_age_group_check;
alter table public.guest_companions
  add constraint guest_companions_age_group_check check (age_group in ('child', 'teen', 'adult', 'senior'));

create or replace function public.set_own_age_group(p_wedding_id uuid, p_age_group text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_age_group not in ('child', 'teen', 'adult', 'senior') then
    raise exception 'invalid_age_group' using errcode = '22023';
  end if;
  update public.guests
  set age_group = p_age_group, updated_at = now()
  where wedding_id = p_wedding_id and linked_profile_id = auth.uid();
end;
$$;
