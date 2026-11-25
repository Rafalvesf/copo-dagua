-- 240 · O aviso de uma mensagem de grupo abre esse grupo
-- (pedido do Rafael, 2026-11-25: «quando clico nas notificações, num grupo
-- vai para uma página grupos. Devia ir logo para a página do grupo referente
-- à notificação. Apaga essa página grupos»).
--
-- O link passa de `/groups/<evento>` (a lista de grupos, que saiu da app)
-- para `/group/<grupo>`. Os avisos antigos continuam a funcionar: a app abre
-- o grupo do evento.

begin;

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
      perform public.upsert_message_notification(null, null, m.profile_id, coalesce(v_sender, 'Alguém'), v_preview, '/group/' || v_group.id);
    end loop;
    return new;
  end if;
  v_preview := coalesce(v_sender, 'Alguém') || ': ' || public.message_preview(new.body, new.attachment_type);
  for m in select profile_id from public.chat_group_members
            where group_id = new.group_id and profile_id <> new.sender_id and not muted loop
    perform public.upsert_message_notification(
      null, null, m.profile_id, v_group.name, v_preview, '/group/' || v_group.id);
  end loop;
  return new;
end;
$function$;

insert into public.applied_migrations (id) values ('240') on conflict do nothing;

commit;
