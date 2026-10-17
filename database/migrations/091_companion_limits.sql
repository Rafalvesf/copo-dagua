-- ============================================================
-- 091 — Quantas pessoas cada convidado pode trazer
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "quantas pessoas podem os
-- convidados trazer — para os convidados aparece, mas os organizadores
-- não têm nada para mudar ou limitar".
--
-- - guests.max_companions: limite por convidado (0 = vem sozinho).
--   `plus_one_allowed` continua, sincronizado (= max_companions > 0),
--   para não partir quem ainda o lê.
-- - weddings.default_max_companions: o limite dado a quem entra pelo
--   código do evento (linhas criadas já ligadas a uma conta).
-- - guest_companions: o servidor recusa mais acompanhantes do que o
--   limite (não depende só da app).

alter table public.guests
  add column if not exists max_companions integer not null default 0
    check (max_companions between 0 and 10);

update public.guests
set max_companions = 1
where plus_one_allowed and max_companions = 0;

alter table public.weddings
  add column if not exists default_max_companions integer not null default 1
    check (default_max_companions between 0 and 10);

create or replace function public.guests_sync_companions()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if tg_op = 'INSERT' then
    -- Entrou pelo código do evento: usa o limite por omissão do evento.
    if new.linked_profile_id is not null and new.max_companions = 0 and not coalesce(new.plus_one_allowed, false) then
      select coalesce(w.default_max_companions, 1) into new.max_companions
      from public.weddings w where w.id = new.wedding_id;
    elsif coalesce(new.plus_one_allowed, false) and new.max_companions = 0 then
      new.max_companions := 1;
    end if;
  else
    if new.max_companions is distinct from old.max_companions then
      null; -- o limite manda
    elsif new.plus_one_allowed is distinct from old.plus_one_allowed then
      new.max_companions := case when new.plus_one_allowed then greatest(old.max_companions, 1) else 0 end;
    end if;
  end if;
  new.plus_one_allowed := coalesce(new.max_companions, 0) > 0;
  return new;
end;
$$;

drop trigger if exists guests_sync_companions on public.guests;
create trigger guests_sync_companions
  before insert or update on public.guests
  for each row execute function public.guests_sync_companions();

create or replace function public.guest_companions_enforce_limit()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_max integer;
  v_count integer;
begin
  select max_companions into v_max from public.guests where id = new.guest_id;
  select count(*) into v_count from public.guest_companions where guest_id = new.guest_id;
  if v_count > coalesce(v_max, 0) then
    raise exception 'companion_limit' using errcode = 'P0010',
      detail = format('Este convite permite até %s acompanhante(s).', coalesce(v_max, 0));
  end if;
  return null;
end;
$$;

drop trigger if exists guest_companions_enforce_limit on public.guest_companions;
create constraint trigger guest_companions_enforce_limit
  after insert on public.guest_companions
  for each row execute function public.guest_companions_enforce_limit();
