-- ============================================================
-- 076 — o código do casal volta a funcionar para quem o recebe
-- ============================================================
--
-- Pedido do utilizador (2026-10-17): "o código do casal não funciona".
-- Desde a 071 o modo por omissão era 'code_with_match': quem entrava
-- com o código só ficava ligado a uma entrada da lista se o email ou o
-- telefone coincidissem com os que o casal escreveu. Para todos os
-- outros, o código "aceitava" mas o convidado ficava sem entrada na
-- lista — não conseguia confirmar presença, escolher menu nem ver mesa.
--
-- Agora o modo por omissão é 'code_open' (quem tem o código entra e é
-- acrescentado à lista, ou ligado à entrada que já existe com o mesmo
-- email/telefone). O casal pode voltar a restringir nas Definições
-- ("Quem pode entrar com o código").

alter table public.weddings alter column guest_join_mode set default 'code_open';

update public.weddings
set guest_join_mode = 'code_open'
where guest_join_mode = 'code_with_match';

-- Convidados que já entraram com o código e ficaram sem entrada na
-- lista: cria-lhes agora a entrada (mesma regra da `join_wedding_by_code`
-- em modo 'code_open').
insert into public.guests (wedding_id, full_name, email, phone, linked_profile_id)
select m.wedding_id, coalesce(p.full_name, 'Convidado'), u.email, p.phone, m.guest_id
from public.wedding_guest_members m
join public.weddings w on w.id = m.wedding_id and w.guest_join_mode = 'code_open'
join public.profiles p on p.id = m.guest_id and p.role = 'guest'
join auth.users u on u.id = m.guest_id
where not exists (
  select 1 from public.guests g
  where g.wedding_id = m.wedding_id and g.linked_profile_id = m.guest_id
)
on conflict (wedding_id, linked_profile_id) do nothing;
