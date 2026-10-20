-- ============================================================
-- Parceiros em destaque: automático + escolha manual no admin
-- ============================================================
-- Pedido do utilizador (2026-10-20): o carrossel "Em destaque" continua
-- automático (melhor avaliação) e o admin pode marcar parceiros à mão,
-- que passam à frente. Só admins mudam `featured`.

alter table public.partner_profiles
  add column if not exists featured boolean not null default false;

-- Ninguém além de um admin consegue mudar `featured` (o parceiro edita o
-- próprio perfil, mas a alteração a este campo é ignorada).
create or replace function public.guard_partner_featured()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  if new.featured is distinct from old.featured
     and coalesce(auth.role(), '') in ('authenticated', 'anon')
     and not public.is_admin() then
    new.featured := old.featured;
  end if;
  return new;
end;
$$;

drop trigger if exists guard_partner_featured on public.partner_profiles;
create trigger guard_partner_featured before update on public.partner_profiles
  for each row execute function public.guard_partner_featured();

-- Usado pelo admin-web (botão "Pôr em destaque" / "Tirar do destaque").
create or replace function public.set_partner_featured(p_partner_id uuid, p_featured boolean)
returns void language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  update public.partner_profiles set featured = p_featured where id = p_partner_id;
  if not found then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), case when p_featured then 'featured' else 'unfeatured' end,
          'partner_profiles', p_partner_id, '{}'::jsonb);
end;
$$;

revoke execute on function public.set_partner_featured(uuid, boolean) from public, anon;
grant execute on function public.set_partner_featured(uuid, boolean) to authenticated;
