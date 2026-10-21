-- ============================================================
-- Notificação ao parceiro quando a equipa decide sobre o perfil
-- ============================================================
-- Pedido do utilizador (2026-10-21): o parceiro deve receber uma
-- notificação na app quando o admin aprova, pede alterações, rejeita,
-- suspende ou restaura o perfil — antes só via o aviso em Perfil.
--
-- As notificações dos parceiros não pertencem a nenhum evento, por isso
-- `wedding_id` passa a poder ser nulo (a policy já cobre
-- `partner_id = auth.uid()`).

alter table public.notifications alter column wedding_id drop not null;

create or replace function public.notify_partner_profile_decision()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_title text;
  v_body text;
begin
  if new.status is not distinct from old.status then
    return new;
  end if;

  if new.status = 'published' then
    v_title := case when old.status = 'suspended' then 'Perfil reativado' else 'Perfil aprovado' end;
    v_body := 'O teu perfil já aparece no Marketplace da À Nossa!.';
  elsif new.status = 'changes_required' then
    v_title := 'A equipa À Nossa! pediu alterações';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Abre o teu perfil para ver o que falta.');
  elsif new.status = 'rejected' then
    v_title := 'Perfil não aprovado';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Abre o teu perfil para ver o motivo.');
  elsif new.status = 'suspended' then
    v_title := 'Perfil suspenso';
    v_body := coalesce(nullif(trim(new.rejection_reason), ''), 'Fala com a equipa À Nossa! para saber mais.');
  else
    return new;
  end if;

  insert into public.notifications (wedding_id, partner_id, type, title, body)
  values (null, new.id, 'partner_profile_' || new.status::text, v_title, v_body);
  return new;
end;
$$;

drop trigger if exists notify_partner_profile_decision on public.partner_profiles;
create trigger notify_partner_profile_decision
  after update of status on public.partner_profiles
  for each row execute function public.notify_partner_profile_decision();

-- Pedido de alterações já feito ao DJ Lucas (21/10, antes deste aviso existir).
insert into public.notifications (wedding_id, partner_id, type, title, body)
select null, p.id, 'partner_profile_changes_required', 'A equipa À Nossa! pediu alterações', p.rejection_reason
from public.partner_profiles p
where p.id = '1390f123-700d-4748-9adf-d67627a62327'
  and p.status = 'changes_required'
  and not exists (
    select 1 from public.notifications n
    where n.partner_id = p.id and n.type = 'partner_profile_changes_required'
  );
