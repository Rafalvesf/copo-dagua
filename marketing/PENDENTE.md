# O que falta (19 out 2026)

## Decisões do Rafael

- **Mascote nova**: aprovar a proposta em `mascote/copos.html`. Depois de aprovada, trocar os copos na app (`mobile-app/app/assets/mascot/`), no site e no vídeo.
- **Domínio**: verificar no Namecheap se `anossa.app`, `a-nossa.app`, `anossa.pt` ou `anossaapp.com` estão livres. A verificação ficou por fazer porque a extensão do Chrome não estava ligada.
- **Propostas repetidas**: há 2 propostas "Flores e Decoração" concluídas e pagas da Cravos & Canela no chat do casal de teste. Falta decidir se se apagam.

## Base de dados

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
