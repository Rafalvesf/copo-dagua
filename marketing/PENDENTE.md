# O que falta (19 out 2026)

## Decisões do Rafael

- **Mascote nova**: aplicada na app, no site e no vídeo.
- **Domínio**: `anossa.app` está livre (confirmado pelo Rafael). Falta registá-lo e apontá-lo para o GitHub Pages. O vídeo já mostra `anossa.app`.


## Por aplicar no Supabase (pedido de aprovação cancelado)

- `database/migrations/104_payments_required_for_verification.sql` — pagamentos ativos obrigatórios para o parceiro ser verificado.
- `database/migrations/105_chat_groups_attachments.sql` — grupos do evento e anexos no chat (fotos, ficheiros, stickers, GIFs).

Correr cada ficheiro no SQL Editor do Supabase (ou aprovar quando o Claude voltar a tentar).

## GIFs

- Criar uma chave em developers.giphy.com e guardá-la no GitHub como segredo `GIPHY_KEY` (Settings → Secrets and variables → Actions). O deploy já a passa à app.


## Base de dados

- **Reservas repetidas da Cravos & Canela**: o Rafael aprovou apagá-las, mas o pedido de aprovação ficou cancelado. Fica a WED-1016 e saem a WED-1017 e a WED-1018 (com pagamentos, avaliações e mensagens). Correr no SQL Editor:

  ```sql
  begin;
  delete from payments where booking_id in ('d4ae94a6-916f-4df5-973b-c0bbf1a589b4','1df10a25-9f92-4443-8ad0-ec0fa03db4f2');
  delete from bookings where id in ('d4ae94a6-916f-4df5-973b-c0bbf1a589b4','1df10a25-9f92-4443-8ad0-ec0fa03db4f2');
  delete from messages where proposal_id in ('f1d90d71-15cc-4b84-bddc-7321a710dc89','15c51aba-8fb9-492a-b6c7-46f99f63d113');
  delete from proposals where id in ('f1d90d71-15cc-4b84-bddc-7321a710dc89','15c51aba-8fb9-492a-b6c7-46f99f63d113');
  delete from quote_requests where id in ('dda75365-436c-46fe-8518-4b344f15462d','c06d1d12-8ef3-4241-95f5-8ebd98da5cad');
  commit;
  ```

- **Uma reserva por parceiro** (migração 102, aplicada): o casal só pode ter outra reserva com o mesmo parceiro se a anterior foi cancelada ou expirou sem o sinal pago.

- **Parceiros em destaque**: a alteração não foi aplicada (o pedido de aprovação ficou cancelado). Para pôr a Casa Tília em destaque, correr no SQL Editor do Supabase:

  ```sql
  alter table public.partner_profiles
    add column if not exists featured boolean not null default false;

  create or replace function public.guard_partner_featured()
  returns trigger language plpgsql as $$
  begin
    if new.featured is distinct from old.featured
       and coalesce(auth.role(), '') in ('authenticated', 'anon') then
      new.featured := old.featured;
    end if;
    return new;
  end; $$;

  drop trigger if exists guard_partner_featured on public.partner_profiles;
  create trigger guard_partner_featured
    before update on public.partner_profiles
    for each row execute function public.guard_partner_featured();

  update public.partner_profiles set featured = true where business_name = 'Casa Tília';
  ```

  Depois disto falta a parte da app: ler `featured` em `partnersProvider` e pôr esses parceiros primeiro no carrossel "Em destaque perto de ti".

## Pagamentos (Stripe)

- Falta a chave publicável `pk_test_…` para criar o segredo `STRIPE_PUBLISHABLE_KEY` nas Edge Functions. Sem ela, o pagamento usa o checkout antigo da Stripe.
- Ativar MB WAY e Multibanco no painel da Stripe.
- Configurar o webhook com o evento `payment_intent.succeeded`.
- A Casa Tília ainda não tem conta Stripe, por isso o sinal dela não se consegue pagar na app.
- Não há reembolso automático: a reserva da Cravos cancelada pelo casal tem o sinal de 40 € pago.
