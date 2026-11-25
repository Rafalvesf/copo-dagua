-- 238 · A hora ao pedir orçamento e o preço ao editar o outro dia
-- (pedido do Rafael, 2026-11-25: «Hora ao criar o pedido… (Mockup desta
-- secção)» e «Editar um outro dia já enviado… o popup completo»; pranchetas
-- «Pedir orçamento · O que procuras? com a hora» e «Propor outro dia»).
--
-- - `set_quote_request_time(p_id, p_start, p_end)`: grava a hora no pedido
--   logo a seguir a criá-lo, sem avisar o parceiro outra vez (ao contrário
--   de `update_quote_request`, que é para mudanças depois).
-- - `update_booking_change` ganha `p_price` (o «Outro preço» de «Editar
--   outro dia»; nulo = mantém; 0 = volta ao mesmo preço).

begin;

create or replace function public.set_quote_request_time(p_id uuid, p_start text default null, p_end text default null)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  v public.quote_requests%rowtype;
begin
  select * into v from public.quote_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if v.couple_id <> auth.uid() and not public.wedding_can(v.wedding_id, 'evento') then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if (nullif(trim(p_start), '') is not null and trim(p_start) !~ '^\d{1,2}:\d{2}$')
     or (nullif(trim(p_end), '') is not null and trim(p_end) !~ '^\d{1,2}:\d{2}$') then
    raise exception 'invalid_time' using errcode = '22023';
  end if;
  update public.quote_requests
     set start_time = nullif(trim(p_start), ''), end_time = nullif(trim(p_end), ''), updated_at = now()
   where id = p_id;
end;
$$;
revoke execute on function public.set_quote_request_time(uuid, text, text) from public, anon;
grant execute on function public.set_quote_request_time(uuid, text, text) to authenticated;

drop function if exists public.update_booking_change(uuid, text, text);
create or replace function public.update_booking_change(p_id uuid, p_to text, p_message text default null, p_price numeric default null)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
declare
  c public.booking_change_requests%rowtype;
begin
  select * into c from public.booking_change_requests where id = p_id for update;
  if not found then raise exception 'not_found' using errcode = 'P0002'; end if;
  if c.requested_by <> auth.uid() then raise exception 'forbidden' using errcode = '42501'; end if;
  if c.status <> 'open' then raise exception 'invalid_state' using errcode = 'P0001'; end if;
  if coalesce(trim(p_to), '') = '' then raise exception 'invalid_change' using errcode = '22023'; end if;
  if p_price is not null and p_price < 0 then raise exception 'invalid_amount' using errcode = '22023'; end if;
  update public.booking_change_requests
     set to_value = trim(p_to),
         message = coalesce(nullif(trim(p_message), ''), message),
         new_price = case when p_price is null then new_price when p_price = 0 then null else p_price end,
         updated_at = now()
   where id = p_id;
end;
$$;
revoke execute on function public.update_booking_change(uuid, text, text, numeric) from public, anon;
grant execute on function public.update_booking_change(uuid, text, text, numeric) to authenticated;

insert into public.applied_migrations (id) values ('238') on conflict do nothing;

commit;
