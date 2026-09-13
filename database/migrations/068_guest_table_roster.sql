-- ============================================================
-- Módulo: "A tua mesa" (ecrã de perfil do convidado)
-- ============================================================
--
-- Mostra ao convidado quem mais está sentado na sua própria mesa —
-- pedido explícito do utilizador (mockup de referência). Um convidado
-- não tem acesso a `seating_tables` (política "Members manage seating",
-- só o casal, `032_seating_tables.sql`), e não deveria conseguir ver o
-- resto do mapa de lugares de qualquer forma — esta função devolve só
-- os nomes da MESMA mesa do chamador, nunca o mapa completo.

create or replace function public.get_my_table_roster(p_wedding_id uuid)
returns table (guest_id uuid, full_name text, group_label text, plus_one_allowed boolean, plus_one_name text)
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select g.id, g.full_name, g.group_label, g.plus_one_allowed, g.plus_one_name
  from public.seating_tables t
  join public.guests me on me.wedding_id = t.wedding_id
    and me.linked_profile_id = auth.uid()
    and me.id = any(t.guest_ids)
  join public.guests g on g.wedding_id = t.wedding_id and g.id = any(t.guest_ids)
  where t.wedding_id = p_wedding_id;
$$;

revoke execute on function public.get_my_table_roster(uuid) from public, anon;
grant execute on function public.get_my_table_roster(uuid) to authenticated;
