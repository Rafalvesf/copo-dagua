-- 167 · Descarregar os meus dados (RGPD, direito de acesso e portabilidade)
--
-- Pedido 2026-11-08 (lista de conformidade): Definições › Conta ›
-- "Descarregar os meus dados" devolve, num ficheiro JSON, os dados
-- pessoais associados à conta. Só os da própria pessoa (auth.uid()).
-- Ficam de fora segredos técnicos (subscrições de push) e dados de
-- outras pessoas além do necessário (ex.: mensagens dos outros).

begin;

create or replace function public.export_my_data()
returns jsonb
language plpgsql stable security definer set search_path = public, pg_temp as $$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  return jsonb_build_object(
    'gerado_em', now(),
    'conta', (select to_jsonb(p) from public.profiles p where p.id = v_uid),
    'dados_de_faturacao', (select to_jsonb(b) from public.billing_details b where b.profile_id = v_uid),
    'negocio', (select to_jsonb(pp) from public.partner_profiles pp where pp.id = v_uid),
    'eventos_que_crias', coalesce((select jsonb_agg(to_jsonb(w)) from public.weddings w where w.owner_id = v_uid), '[]'),
    'eventos_que_organizas', coalesce((select jsonb_agg(to_jsonb(c)) from public.wedding_collaborators c where c.user_id = v_uid), '[]'),
    'eventos_como_convidado', coalesce((select jsonb_agg(to_jsonb(m)) from public.wedding_guest_members m where m.guest_id = v_uid), '[]'),
    'as_tuas_respostas', coalesce((select jsonb_agg(to_jsonb(g)) from public.guests g where g.linked_profile_id = v_uid), '[]'),
    'acompanhantes', coalesce((select jsonb_agg(to_jsonb(gc)) from public.guest_companions gc
                                 join public.guests g on g.id = gc.guest_id where g.linked_profile_id = v_uid), '[]'),
    'pedidos_para_entrar', coalesce((select jsonb_agg(to_jsonb(r)) from public.guest_join_requests r where r.profile_id = v_uid), '[]'),
    'pedidos_de_orcamento', coalesce((select jsonb_agg(to_jsonb(q)) from public.quote_requests q where q.couple_id = v_uid), '[]'),
    'propostas', coalesce((select jsonb_agg(to_jsonb(pr)) from public.proposals pr where pr.couple_id = v_uid), '[]'),
    'reservas', coalesce((select jsonb_agg(to_jsonb(bk)) from public.bookings bk where bk.couple_id = v_uid), '[]'),
    'avaliacoes', coalesce((select jsonb_agg(to_jsonb(rv)) from public.reviews rv where rv.couple_id = v_uid), '[]'),
    'envelopes_oferecidos', coalesce((select jsonb_agg(to_jsonb(e)) from public.gift_envelopes e where e.guest_profile_id = v_uid), '[]'),
    'mensagens_enviadas', coalesce((select jsonb_agg(jsonb_build_object('conversa', m.conversation_id, 'texto', m.body, 'em', m.created_at))
                                      from public.messages m where m.sender_id = v_uid), '[]'),
    'mensagens_de_grupo_enviadas', coalesce((select jsonb_agg(jsonb_build_object('grupo', gm.group_id, 'texto', gm.body, 'em', gm.created_at))
                                      from public.chat_group_messages gm where gm.sender_id = v_uid), '[]'),
    'fotos_publicadas', coalesce((select jsonb_agg(to_jsonb(ph)) from public.wedding_gallery_photos ph where ph.uploaded_by = v_uid), '[]'),
    'comentarios_em_fotos', coalesce((select jsonb_agg(to_jsonb(pc)) from public.gallery_photo_comments pc where pc.profile_id = v_uid), '[]'),
    'notificacoes', coalesce((select jsonb_agg(to_jsonb(n)) from public.notifications n where n.profile_id = v_uid), '[]'),
    'pedidos_de_ajuda', coalesce((select jsonb_agg(to_jsonb(t)) from public.support_tickets t where t.user_id = v_uid), '[]'),
    'denuncias_feitas', coalesce((select jsonb_agg(to_jsonb(cr)) from public.content_reports cr where cr.reporter_id = v_uid), '[]'),
    'utilizacao_da_app', jsonb_build_object(
      'passos', coalesce((select jsonb_agg(to_jsonb(f)) from public.funnel_events f where f.profile_id = v_uid), '[]'),
      'interesses', coalesce((select jsonb_agg(to_jsonb(ui)) from public.user_interest_events ui where ui.profile_id = v_uid), '[]'),
      'cliques_em_destaques', coalesce((select jsonb_agg(to_jsonb(pc2)) from public.promotion_clicks pc2 where pc2.profile_id = v_uid), '[]')
    )
  );
end;
$$;
revoke execute on function public.export_my_data() from public, anon;
grant execute on function public.export_my_data() to authenticated;

-- Marca para a página Migrações do admin (sai da lista quando corre).
create table if not exists public.applied_migrations (id text primary key, applied_at timestamptz not null default now());
alter table public.applied_migrations enable row level security;
insert into public.applied_migrations (id) values ('167') on conflict do nothing;

commit;
