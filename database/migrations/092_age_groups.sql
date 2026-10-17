-- ============================================================
-- 092 — Criança, adulto ou sénior
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "no onboarding, para cada evento,
-- a opção de escolher se é criança, adulto ou sénior" — para o próprio
-- convidado e para cada acompanhante. Ajuda o organizador com menus,
-- lugares e acessibilidade.

alter table public.guests
  add column if not exists age_group text not null default 'adult'
    check (age_group in ('child', 'adult', 'senior'));

alter table public.guest_companions
  add column if not exists age_group text not null default 'adult'
    check (age_group in ('child', 'adult', 'senior'));

update public.guest_companions set age_group = 'child' where is_child and age_group = 'adult';

-- O convidado escolhe a sua faixa (só a da própria linha ligada à conta).
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
  if p_age_group not in ('child', 'adult', 'senior') then
    raise exception 'invalid_age_group' using errcode = '22023';
  end if;
  update public.guests
  set age_group = p_age_group, updated_at = now()
  where wedding_id = p_wedding_id and linked_profile_id = auth.uid();
end;
$$;

revoke execute on function public.set_own_age_group(uuid, text) from public, anon;
grant execute on function public.set_own_age_group(uuid, text) to authenticated;
