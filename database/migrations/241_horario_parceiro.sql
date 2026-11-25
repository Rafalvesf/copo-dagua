-- 241 · Horário de funcionamento do parceiro (pedido do Rafael, 2026-11-25:
-- «falta o horário de funcionamento no onboarding parceiro e na página do
-- perfil»).
--
-- `partner_profiles.opening_hours` (jsonb): um objeto com os dias da semana
-- de 1 (segunda) a 7 (domingo); cada dia aberto tem {"from": "09:00",
-- "to": "19:00"}; um dia fechado não aparece. Nulo = ainda por indicar.
-- Ex.: {"1": {"from": "09:00", "to": "19:00"}, "6": {"from": "10:00", "to": "23:00"}}
-- O parceiro escreve o seu (a política de update de partner_profiles já
-- deixa); qualquer pessoa lê, como o resto do perfil publicado.

begin;

alter table public.partner_profiles add column if not exists opening_hours jsonb;

do $$ begin
  alter table public.partner_profiles add constraint partner_profiles_opening_hours_object
    check (opening_hours is null or (jsonb_typeof(opening_hours) = 'object' and pg_column_size(opening_hours) < 2000));
exception when duplicate_object then null; end $$;

insert into public.applied_migrations (id) values ('241') on conflict do nothing;

commit;
