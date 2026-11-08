-- 166 · Crianças à parte nos acompanhantes
--
-- Pedido 2026-11-08 (Para os convidados › Acompanhantes): o organizador
-- pode dizer que as crianças não contam para o limite de acompanhantes.
-- A opção vive em weddings.guest_sections (chave opt_kids_free, como as
-- outras opções da página: opt_table_reveal, opt_table_mates,
-- opt_gallery_upload, opt_gallery_on_day, opt_groups_create,
-- opt_companion_details — essas só precisam da app). Aqui só muda a
-- contagem do limite em submit_rsvp_full (igual à 162 em tudo o resto).

begin;

create or replace function public.submit_rsvp_full(
  p_token uuid,
  p_attending boolean,
  p_menu text,
  p_dietary text,
  p_age_group text,
  p_side text,
  p_group_label text,
  p_message text,
  p_companions jsonb
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_guest public.guests%rowtype;
  v_c jsonb;
  v_req uuid;
  v_max int;
  v_kids_free boolean := false;
begin
  select * into v_guest from public.guests where rsvp_token = p_token;
  if not found then
    select r.id, greatest(coalesce(w.default_max_companions, 0), 0),
           coalesce((w.guest_sections->>'opt_kids_free')::boolean, false)
    into v_req, v_max, v_kids_free
    from public.guest_join_requests r
    join public.weddings w on w.id = r.wedding_id
    where r.rsvp_token = p_token;
    if v_req is null then
      raise exception 'not_found' using errcode = 'P0002';
    end if;
    -- Crianças à parte (166): não contam para o limite quando o
    -- organizador liga essa opção.
    if p_attending and jsonb_typeof(coalesce(p_companions, '[]'::jsonb)) = 'array'
       and (select count(*) from jsonb_array_elements(coalesce(p_companions, '[]'::jsonb)) c
            where not (v_kids_free and coalesce(c->>'age_group', 'adult') = 'child')) > v_max then
      raise exception 'too_many_companions' using errcode = '22023';
    end if;
    update public.guest_join_requests
    set answers = jsonb_build_object(
          'attending', p_attending,
          'menu', p_menu,
          'dietary', p_dietary,
          'age_group', p_age_group,
          'side', p_side,
          'group_label', p_group_label,
          'message', p_message,
          'companions', case when p_attending then coalesce(p_companions, '[]'::jsonb) else '[]'::jsonb end,
          'answered_at', now()
        )
    where id = v_req;
    return;
  end if;

  update public.guests
  set rsvp_status = (case when p_attending then 'confirmed' else 'declined' end)::public.rsvp_status,
      menu_selection = case when p_attending then p_menu else null end,
      dietary_restrictions = case when p_attending then p_dietary else null end,
      age_group = case when p_age_group in ('child', 'teen', 'adult', 'senior') then p_age_group else age_group end,
      side = coalesce(p_side::public.guest_side, side),
      group_label = coalesce(nullif(p_group_label, ''), group_label),
      guest_message = coalesce(nullif(p_message, ''), guest_message),
      rsvp_responded_at = now(),
      onboarding_completed_at = coalesce(onboarding_completed_at, now()),
      updated_at = now()
  where id = v_guest.id;

  delete from public.guest_companions where guest_id = v_guest.id;
  if p_attending and p_companions is not null then
    for v_c in select * from jsonb_array_elements(p_companions) loop
      insert into public.guest_companions (
        guest_id, wedding_id, name, age_group, is_child, child_age, phone, email,
        menu, allergies, accompanied_by, will_install_app
      ) values (
        v_guest.id, v_guest.wedding_id, v_c->>'name',
        coalesce(v_c->>'age_group', 'adult'),
        coalesce(v_c->>'age_group', 'adult') = 'child',
        nullif(v_c->>'child_age', '')::int,
        nullif(v_c->>'phone', ''), nullif(v_c->>'email', ''), nullif(v_c->>'menu', ''),
        coalesce(array(select jsonb_array_elements_text(coalesce(v_c->'allergies', '[]'::jsonb))), '{}'),
        nullif(v_c->>'accompanied_by', ''),
        coalesce((v_c->>'will_install_app')::boolean, false)
      );
    end loop;
  end if;
end;
$$;

revoke execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) from public;
grant execute on function public.submit_rsvp_full(uuid, boolean, text, text, text, text, text, text, jsonb) to anon, authenticated;

-- Marca para a página Migrações do admin (sai da lista quando corre).
create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('166') on conflict do nothing;

commit;
