-- ============================================================
-- NIF opcional nas faturas + notas de crédito parciais — 2026-10-28
-- ============================================================
-- Em Definições → Conta → "Dados de faturação", quem paga reservas pode
-- pôr o NIF (e o nome que quer na fatura). A função
-- `issue-commission-invoices` usa-os; sem NIF a fatura sai como
-- "Consumidor final" (999999990).
-- Tabela à parte (e não em `profiles`) porque os perfis são visíveis aos
-- parceiros com quem há reservas; o NIF só o próprio vê.

begin;

create table if not exists public.billing_details (
  profile_id uuid primary key references public.profiles(id) on delete cascade default auth.uid(),
  nif text check (nif is null or nif ~ '^[0-9]{9}$'),
  name text check (name is null or char_length(btrim(name)) between 1 and 120),
  updated_at timestamptz not null default now()
);

alter table public.billing_details enable row level security;
drop policy if exists "Own billing details" on public.billing_details;
create policy "Own billing details" on public.billing_details for all
  using (profile_id = (select auth.uid())) with check (profile_id = (select auth.uid()));
grant select, insert, update, delete on public.billing_details to authenticated;

-- Faturas: várias notas de crédito por pagamento (reembolsos parciais
-- sucessivos). `seq` numera os documentos do mesmo tipo.
alter table public.commission_invoices add column if not exists seq int not null default 1;
alter table public.commission_invoices drop constraint if exists commission_invoices_payment_id_kind_key;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'commission_invoices_payment_kind_seq_key') then
    alter table public.commission_invoices
      add constraint commission_invoices_payment_kind_seq_key unique (payment_id, kind, seq);
  end if;
end $$;

-- Apagar conta (122) também apaga os dados de faturação e os bloqueios.
create or replace function public.erase_account(p_user uuid)
returns integer
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_active integer;
  w record;
  v_heir uuid;
  v_has_records boolean;
begin
  select count(*) into v_active
  from public.bookings b
  where (b.couple_id = p_user or b.partner_id = p_user)
    and b.status in ('awaiting_deposit', 'confirmed', 'payment_overdue', 'disputed')
    and (b.event_date is null or b.event_date >= current_date - 3);
  if v_active > 0 then
    return v_active;
  end if;

  -- Pessoal, em qualquer evento.
  delete from public.push_subscriptions where profile_id = p_user;
  -- 130/132: bloqueios e dados de faturação.
  delete from public.user_blocks where blocker_id = p_user or blocked_id = p_user;
  delete from public.billing_details where profile_id = p_user;
  delete from public.notifications where profile_id = p_user;
  delete from public.gallery_photo_likes where profile_id = p_user;
  delete from public.gallery_photo_comments where profile_id = p_user;
  delete from public.chat_group_messages where sender_id = p_user;
  delete from public.chat_group_members where profile_id = p_user;
  delete from public.chat_groups where created_by = p_user;
  delete from public.support_tickets where user_id = p_user;
  delete from public.onboarding_progress where user_id = p_user;
  delete from public.wedding_guest_members where guest_id = p_user;
  delete from public.guest_offer_reservations where guest_id = p_user;
  delete from public.wedding_collaborators where user_id = p_user;
  update public.guests set linked_profile_id = null where linked_profile_id = p_user;
  delete from public.wedding_gallery_photos where uploaded_by = p_user;

  -- Eventos de que é dono.
  for w in select id from public.weddings where owner_id = p_user loop
    select c.user_id into v_heir
    from public.wedding_collaborators c
    where c.wedding_id = w.id and c.user_id is not null and c.status = 'active'
    order by c.accepted_at nulls last
    limit 1;
    if v_heir is not null then
      update public.weddings set owner_id = v_heir where id = w.id;
      delete from public.wedding_collaborators where wedding_id = w.id and user_id = v_heir;
      continue;
    end if;

    select exists (select 1 from public.bookings where wedding_id = w.id)
        or exists (select 1 from public.quote_requests where wedding_id = w.id)
      into v_has_records;
    if not v_has_records then
      delete from public.weddings where id = w.id;
    else
      delete from public.guests where wedding_id = w.id;
      delete from public.wedding_gallery_photos where wedding_id = w.id;
      delete from public.wedding_tasks where wedding_id = w.id;
      delete from public.checklist_items where wedding_id = w.id;
      delete from public.seating_tables where wedding_id = w.id;
      delete from public.expenses where wedding_id = w.id;
      delete from public.budget_categories where wedding_id = w.id;
      delete from public.budgets where wedding_id = w.id;
      delete from public.chat_groups where wedding_id = w.id;
      delete from public.wedding_partner_invites where wedding_id = w.id;
      delete from public.favorite_partners where wedding_id = w.id;
      update public.weddings set
        partner_name_1 = 'Conta apagada', partner_name_2 = null,
        partner_1_age = null, partner_2_age = null,
        partner1_phone = null, partner2_phone = null,
        cover_photo_url = null, profile_photo_url = null,
        welcome_message = null, gift_list_url = null, gift_iban = null, gift_message = null,
        guest_code = null, venue_address = null, venue_latitude = null, venue_longitude = null,
        pending_deletion_at = now()
      where id = w.id;
    end if;
  end loop;

  -- Parceiro.
  if exists (select 1 from public.partner_profiles where id = p_user) then
    delete from public.partner_portfolio_items where partner_id = p_user;
    delete from public.partner_service_packages where partner_id = p_user;
    delete from public.partner_venue_tables where partner_id = p_user;
    delete from public.partner_verification where partner_id = p_user;
    delete from public.favorite_partners where partner_id = p_user;
    update public.partner_profiles set
      status = 'suspended', is_paused = true, featured = false,
      description = '', phone = null, contact_email = null,
      website_url = null, instagram_url = null, facebook_url = null,
      cover_photo_url = null, address_line = null, postal_code = null,
      latitude = null, longitude = null
    where id = p_user;
  end if;

  update public.profiles set
    full_name = 'Conta apagada', avatar_url = null, phone = null,
    status = 'deleted', pending_deletion_at = now(), updated_at = now()
  where id = p_user;

  insert into public.audit_logs (actor_id, action, target_table, target_id, metadata)
  values (p_user, 'account_erased', 'profiles', p_user, '{}'::jsonb);

  return 0;
end;
$$;

commit;
