-- 175 · Parceiro cancela → paga a taxa de serviço
--
-- Pedido 2026-11-09: quando é o parceiro a cancelar, o organizador recebe
-- tudo de volta e o parceiro paga sempre a taxa de serviço desse
-- pagamento. A taxa fica aqui como valor em dívida e é descontada nos
-- pagamentos seguintes do parceiro (release-partner-funds).

begin;

create table if not exists public.partner_charges (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_profiles(id) on delete cascade,
  booking_id uuid references public.bookings(id) on delete set null,
  payment_id uuid references public.payments(id) on delete set null,
  amount numeric(12, 2) not null check (amount > 0),
  settled_amount numeric(12, 2) not null default 0 check (settled_amount >= 0),
  reason text not null default 'partner_cancellation',
  created_at timestamptz not null default now(),
  settled_at timestamptz,
  unique (payment_id, reason)
);

alter table public.partner_charges enable row level security;

drop policy if exists partner_charges_own on public.partner_charges;
create policy partner_charges_own on public.partner_charges
  for select to authenticated
  using (partner_id = auth.uid() or public.is_admin());

-- Desconta (FIFO) até p_max euros da dívida do parceiro; devolve o total
-- descontado. Só o service role (release-partner-funds).
create or replace function public.settle_partner_charges(p_partner uuid, p_max numeric)
returns numeric
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_left numeric := greatest(coalesce(p_max, 0), 0);
  v_taken numeric := 0;
  r record;
  v_part numeric;
begin
  for r in
    select id, amount - settled_amount as due from public.partner_charges
    where partner_id = p_partner and settled_amount < amount
    order by created_at
    for update
  loop
    exit when v_left <= 0;
    v_part := least(r.due, v_left);
    update public.partner_charges
       set settled_amount = settled_amount + v_part,
           settled_at = case when settled_amount + v_part >= amount then now() else settled_at end
     where id = r.id;
    v_left := v_left - v_part;
    v_taken := v_taken + v_part;
  end loop;
  return v_taken;
end;
$$;

revoke execute on function public.settle_partner_charges(uuid, numeric) from public, anon, authenticated;
grant execute on function public.settle_partner_charges(uuid, numeric) to service_role;
grant select on public.partner_charges to authenticated;
grant all on public.partner_charges to service_role;

create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('175') on conflict do nothing;

commit;
