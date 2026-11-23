-- 225 · Código do evento sem «CASAL» (pedido do Rafael, 2026-11-23: a app
-- fala de eventos e organizadores, nunca de «casal»). Quando o evento não
-- tem nome, o código passa a começar por EVENTO em vez de CASAL. Os códigos
-- que já existem não mudam.

create or replace function public.set_wedding_guest_code()
returns trigger
language plpgsql
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_base text;
  v_code text;
begin
  if new.guest_code is not null then
    return new;
  end if;

  v_base := upper(regexp_replace(coalesce(new.partner_name_1, 'EVENTO'), '[^A-Za-z]', '', 'g'));
  if new.partner_name_2 is not null and new.partner_name_2 <> '' then
    v_base := v_base || '-' || upper(regexp_replace(new.partner_name_2, '[^A-Za-z]', '', 'g'));
  end if;
  if v_base = '' then
    v_base := 'EVENTO';
  end if;

  loop
    v_code := v_base || '-' || lpad(floor(random() * 10000)::text, 4, '0');
    exit when not exists (select 1 from public.events where guest_code = v_code);
  end loop;

  new.guest_code := v_code;
  return new;
end;
$function$;

insert into public.applied_migrations (id) values ('225') on conflict do nothing;
