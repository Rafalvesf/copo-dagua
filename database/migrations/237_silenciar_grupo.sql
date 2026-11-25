-- 237 · Silenciar um grupo e quantos vão ao evento
-- (pedido do Rafael, 2026-11-25: «Sim, aplica» — «exatamente como está nos
-- mockups»; prancheta «Grupo sem «Ver evento» · resumo do evento e quem
-- está»: «Silenciar» + «Abrir o evento», e os números dias / no grupo / vão).
--
-- - `chat_group_members.muted`: quem silencia deixa de receber os avisos
--   das mensagens desse grupo (`notify_group_message` salta-o).
-- - `set_group_muted(p_group, p_muted)`: cada um muda só o seu.
-- - `event_going_count(p_wedding)`: quantos confirmaram, para quem está num
--   grupo desse evento ou o organiza (nulo para os outros).

begin;

alter table public.chat_group_members add column if not exists muted boolean not null default false;

create or replace function public.set_group_muted(p_group uuid, p_muted boolean)
returns void language plpgsql volatile security definer set search_path = public, pg_temp as $$
begin
  update public.chat_group_members set muted = coalesce(p_muted, false)
   where group_id = p_group and profile_id = auth.uid();
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
end;
$$;
revoke execute on function public.set_group_muted(uuid, boolean) from public, anon;
grant execute on function public.set_group_muted(uuid, boolean) to authenticated;

create or replace function public.notify_group_message()
returns trigger language plpgsql security definer set search_path = public, pg_temp as $function$
declare
  v_group record;
  v_sender text;
  v_preview text;
  m record;
begin
  select * into v_group from public.chat_groups where id = new.group_id;
  if v_group is null then return new; end if;
  select coalesce(nullif(split_part(full_name, ' ', 1), ''), 'Alguém') into v_sender from public.profiles where id = new.sender_id;
  if v_group.is_direct then
    v_preview := public.message_preview(new.body, new.attachment_type);
    for m in select profile_id from public.chat_group_members
              where group_id = new.group_id and profile_id <> new.sender_id and not muted loop
      perform public.upsert_message_notification(null, null, m.profile_id, coalesce(v_sender, 'Alguém'), v_preview, '/chat');
    end loop;
    return new;
  end if;
  v_preview := coalesce(v_sender, 'Alguém') || ': ' || public.message_preview(new.body, new.attachment_type);
  for m in select profile_id from public.chat_group_members
            where group_id = new.group_id and profile_id <> new.sender_id and not muted loop
    perform public.upsert_message_notification(
      null, null, m.profile_id, v_group.name, v_preview, '/groups/' || v_group.wedding_id);
  end loop;
  return new;
end;
$function$;

create or replace function public.event_going_count(p_wedding uuid)
returns int language sql stable security definer set search_path = public, pg_temp as $$
  select case
           when public.wedding_can(p_wedding, 'evento')
             or exists (select 1 from public.chat_group_members m
                          join public.chat_groups g on g.id = m.group_id
                         where g.wedding_id = p_wedding and m.profile_id = auth.uid())
           then (select count(*)::int from public.guests where wedding_id = p_wedding and rsvp_status = 'confirmed')
           else null
         end;
$$;
revoke execute on function public.event_going_count(uuid) from public, anon;
grant execute on function public.event_going_count(uuid) to authenticated;

insert into public.applied_migrations (id) values ('237') on conflict do nothing;

commit;
