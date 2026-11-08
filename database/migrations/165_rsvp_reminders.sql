-- 165 · Lembrar quem não respondeu
--
-- Pedido 2026-11-08: o botão "Lembrar" (convidados sem resposta) tem de
-- avisar de verdade. Quem tem conta na app (guests.linked_profile_id)
-- recebe uma notificação na app e push; quem não tem recebe o convite
-- por mensagem (partilha no telemóvel, do lado da app).
-- No máximo um lembrete por convidado a cada 24 h.

begin;

alter table public.guests add column if not exists last_reminded_at timestamptz;

-- Quantos faltam responder, quantos têm a app e quantos já foram
-- lembrados nas últimas 24 h.
create or replace function public.rsvp_reminder_summary(p_wedding uuid)
returns jsonb
language plpgsql stable security definer set search_path = public, pg_temp as $$
begin
  if not public.is_wedding_member(p_wedding) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return (
    select jsonb_build_object(
      'pending', count(*),
      'with_app', count(*) filter (where g.linked_profile_id is not null),
      'can_remind', count(*) filter (
        where g.linked_profile_id is not null
          and (g.last_reminded_at is null or g.last_reminded_at < now() - interval '24 hours')),
      'without_app', count(*) filter (where g.linked_profile_id is null)
    )
    from public.guests g
    where g.wedding_id = p_wedding and g.rsvp_status = 'pending'
  );
end;
$$;
revoke execute on function public.rsvp_reminder_summary(uuid) from public, anon;
grant execute on function public.rsvp_reminder_summary(uuid) to authenticated;

-- Envia o lembrete a quem tem a app e ainda não respondeu. Devolve
-- quantos receberam.
create or replace function public.remind_pending_guests(p_wedding uuid)
returns integer
language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_names text;
  v_count integer := 0;
  g record;
begin
  if not public.is_wedding_member(p_wedding) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  select case when coalesce(nullif(trim(partner_name_2), ''), '') = '' then partner_name_1
              else partner_name_1 || ' & ' || partner_name_2 end
    into v_names from public.weddings where id = p_wedding;

  for g in
    select id, linked_profile_id from public.guests
    where wedding_id = p_wedding and rsvp_status = 'pending' and linked_profile_id is not null
      and (last_reminded_at is null or last_reminded_at < now() - interval '24 hours')
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (
      g.linked_profile_id, 'rsvp_reminder', 'Ainda não respondeste',
      coalesce(v_names, 'Os anfitriões') || ' querem saber se vais. Responde em 1 minuto.',
      '/guest-presenca/' || p_wedding
    );
    update public.guests set last_reminded_at = now() where id = g.id;
    v_count := v_count + 1;
  end loop;
  return v_count;
end;
$$;
revoke execute on function public.remind_pending_guests(uuid) from public, anon;
grant execute on function public.remind_pending_guests(uuid) to authenticated;

commit;
