# Users (admin-web) — Modelo de Dados

Nenhuma tabela nova. Opera sobre `public.profiles`, já existente, cuja policy `"Admins can view all profiles"` (`database/migrations/001_authentication.sql`) já cobre a leitura. Falta só a escrita administrativa de `status`, adicionada por uma nova migração com o mesmo padrão de `database/migrations/007_partner_review_transitions.sql`.

```sql
create or replace function public.suspend_user_account(p_user_id uuid, p_reason text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status text;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_user_id = auth.uid() then
    raise exception 'invalid_state' using errcode = 'P0001'; -- RN03
  end if;
  if p_reason is null or length(trim(p_reason)) < 10 then
    raise exception 'validation_error' using errcode = '22023';
  end if;

  select status into v_status from public.profiles where id = p_user_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'active' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.profiles set status = 'suspended' where id = p_user_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'suspend_user', 'profiles', p_user_id, jsonb_build_object('previous_status', v_status, 'reason', p_reason));
end;
$$;

create or replace function public.restore_user_account(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status text;
begin
  if not public.is_admin() then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select status into v_status from public.profiles where id = p_user_id for update;
  if v_status is null then
    raise exception 'not_found' using errcode = 'P0002';
  end if;
  if v_status <> 'suspended' then
    raise exception 'invalid_state' using errcode = 'P0001';
  end if;

  update public.profiles set status = 'active' where id = p_user_id;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (auth.uid(), 'restore_user', 'profiles', p_user_id, jsonb_build_object('previous_status', v_status));
end;
$$;

revoke execute on function public.suspend_user_account(uuid, text) from public, anon;
revoke execute on function public.restore_user_account(uuid) from public, anon;
grant execute on function public.suspend_user_account(uuid, text) to authenticated;
grant execute on function public.restore_user_account(uuid) to authenticated;
```

RN03 (não suspender a própria conta) é aplicada dentro da função, não só escondendo o botão na UI — mesmo princípio de autorização em duas camadas de `admin-web/partners/api.md`.
