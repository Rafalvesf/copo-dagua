-- ============================================================
-- Corrige os lembretes diários — 2026-10-27
-- ============================================================
-- O cron `daily-reminders` falhava todos os dias com
-- `column reference "w.id" is ambiguous`: a variável do ciclo dos eventos
-- chamava-se `w` e a consulta dos convidados usava `w` como alias da
-- tabela `weddings`. Resultado: nenhum lembrete de pagamento, de "falta
-- uma semana" ou "é amanhã" era enviado. Só muda o nome do alias.

begin;

create or replace function public.daily_reminders()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
declare
  p record;
  w record;
  g record;
begin
  for p in
    select pay.id, pay.type, pay.amount, pay.due_at, b.wedding_id, b.booking_number, b.private_owner, pp.business_name
    from public.payments pay
    join public.bookings b on b.id = pay.booking_id
    left join public.partner_profiles pp on pp.id = b.partner_id
    where pay.status = 'pending' and pay.reminder_sent_at is null
      and pay.due_at is not null and pay.due_at between now() and now() + interval '48 hours'
      and b.status in ('awaiting_deposit', 'confirmed', 'completed')
  loop
    perform public.set_private_context(null);
    insert into public.notifications (wedding_id, profile_id, type, title, body, link)
    values (p.wedding_id, p.private_owner, 'payment_due',
            case when p.type = 'deposit' then 'Sinal por pagar' else 'Restante por pagar' end,
            coalesce(p.business_name, 'Parceiro') || ' · ' || p.booking_number || ' · até '
            || to_char(p.due_at at time zone 'Europe/Lisbon', 'DD/MM HH24:MI'), '/bookings');
    update public.payments set reminder_sent_at = now() where id = p.id;
  end loop;
  perform public.set_private_context(null);

  for w in
    select id, wedding_date - current_date as days from public.weddings
    where wedding_date - current_date in (1, 7)
  loop
    insert into public.notifications (wedding_id, type, title, body, link)
    values (w.id, 'event_reminder',
            case when w.days = 1 then 'O grande dia é amanhã!' else 'Falta uma semana!' end,
            case when w.days = 1 then 'Confirma os últimos detalhes com os parceiros.'
                 else 'Revê as tarefas e os pagamentos que faltam.' end,
            '/tasks');
  end loop;

  for g in
    select distinct gu.linked_profile_id as profile_id, wd.id as wedding_id
    from public.guests gu join public.weddings wd on wd.id = gu.wedding_id
    where gu.linked_profile_id is not null and wd.wedding_date = current_date + 1
      and coalesce(gu.rsvp_status::text, '') <> 'declined'
  loop
    insert into public.notifications (profile_id, type, title, body, link)
    values (g.profile_id, 'event_reminder', 'É amanhã!', 'Vê o programa e onde ficas sentado.', '/guest-home/' || g.wedding_id);
  end loop;
end;
$function$;

revoke execute on function public.daily_reminders() from public, anon, authenticated;

commit;
