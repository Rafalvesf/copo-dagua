-- ============================================================
-- Dados de demonstração para os revisores da App Store / Google Play
-- ============================================================
-- 1. Cria tu as duas contas NA APP (Criar conta), com emails teus:
--    - Organizador: completa a criação do evento (casamento daqui a ~3 meses).
--    - Parceiro: completa o perfil (categoria, descrição, pacotes, fotos).
-- 2. Muda os dois emails abaixo e corre este ficheiro no SQL Editor.
--    Pode correr-se mais de uma vez (não duplica).
-- O script só acrescenta dados de exemplo a essas duas contas:
-- - 8 convidados com respostas variadas no evento do organizador;
-- - o parceiro fica verificado e publicado (aparece na pesquisa);
-- - uma conversa entre os dois, com mensagens.
-- O pedido de orçamento e a proposta faz-se depois na app (passo 3 do
-- docs/store-review.md), para o revisor ver o fluxo real.

do $$
declare
  v_org_email text := 'review.organizador@EXEMPLO.pt';  -- ← muda
  v_par_email text := 'review.parceiro@EXEMPLO.pt';     -- ← muda
  v_org uuid;
  v_par uuid;
  v_wedding uuid;
  v_conv uuid;
begin
  select id into v_org from auth.users where lower(email) = lower(v_org_email);
  select id into v_par from auth.users where lower(email) = lower(v_par_email);
  if v_org is null then raise exception 'Conta do organizador não encontrada: %', v_org_email; end if;
  if v_par is null then raise exception 'Conta do parceiro não encontrada: %', v_par_email; end if;

  select id into v_wedding from public.weddings where owner_id = v_org order by created_at limit 1;
  if v_wedding is null then
    raise exception 'O organizador ainda não criou o evento na app.';
  end if;

  -- Convidados (só se ainda houver poucos)
  if (select count(*) from public.guests where wedding_id = v_wedding) < 3 then
    insert into public.guests (wedding_id, full_name, phone, side, rsvp_status, group_label, dietary_restrictions, plus_one_allowed)
    values
      (v_wedding, 'Ana Ribeiro',     '912000001', 'couple_a', 'confirmed', 'Família',  null,          true),
      (v_wedding, 'Bruno Costa',     '912000002', 'couple_a', 'confirmed', 'Amigos',   'Vegetariano', false),
      (v_wedding, 'Carla Mendes',    '912000003', 'couple_b', 'pending',   'Família',  null,          true),
      (v_wedding, 'Diogo Santos',    '912000004', 'couple_b', 'declined',  'Trabalho', null,          false),
      (v_wedding, 'Eva Martins',     '912000005', 'both',     'confirmed', 'Amigos',   'Sem glúten',  false),
      (v_wedding, 'Filipe Rocha',    '912000006', 'couple_a', 'invited',   'Amigos',   null,          false),
      (v_wedding, 'Graça Almeida',   '912000007', 'couple_b', 'confirmed', 'Família',  null,          false),
      (v_wedding, 'Hugo Fernandes',  '912000008', 'both',     'pending',   'Trabalho', null,          true);
  end if;

  -- Parceiro verificado e publicado
  insert into public.partner_verification (partner_id, tax_id, billing_address)
  values (v_par, '29' || lpad((abs(hashtext(v_par::text)) % 10000000)::text, 7, '0'), 'Rua de Exemplo 1, 1000-001 Lisboa')
  on conflict (partner_id) do nothing;
  update public.partner_profiles
     set status = 'published', reviewed_at = now(), submitted_at = coalesce(submitted_at, now())
   where id = v_par and status <> 'published';

  -- Conversa entre os dois
  select id into v_conv from public.conversations where wedding_id = v_wedding and partner_id = v_par limit 1;
  if v_conv is null then
    insert into public.conversations (wedding_id, partner_id) values (v_wedding, v_par) returning id into v_conv;
    insert into public.messages (conversation_id, sender_role, sender_id, body, created_at) values
      (v_conv, 'couple',  v_org, 'Olá! Ainda têm disponibilidade para a nossa data?', now() - interval '2 days'),
      (v_conv, 'partner', v_par, 'Olá! Temos sim. Quantos convidados estão a prever?', now() - interval '2 days' + interval '20 minutes'),
      (v_conv, 'couple',  v_org, 'Cerca de 120. Podem enviar-nos uma proposta?', now() - interval '1 day');
    update public.conversations
       set last_message = 'Cerca de 120. Podem enviar-nos uma proposta?', last_message_at = now() - interval '1 day'
     where id = v_conv;
  end if;

  raise notice 'Pronto: evento %, parceiro %, conversa %', v_wedding, v_par, v_conv;
end $$;
