# Payments - stripe-connect

## Decisão de arquitetura (2026-08-31)

- **Connect account type: Express.** Stripe trata o onboarding (KYC) e a
  maior parte da compliance de cada parceiro; a plataforma mantém
  controlo sobre a marca e vê o estado de `charges_enabled`/
  `payouts_enabled` de cada conta. Alternativas consideradas: Standard
  (menos esforço/responsabilidade da plataforma, mas exige que o parceiro
  já tenha conta Stripe própria e reduz o controlo sobre a experiência) e
  Custom (controlo total, mas o maior esforço de implementação e o maior
  peso de compliance do lado da plataforma). Express é o equilíbrio certo
  para o tamanho atual da plataforma.
- **Destination charges**, não charges diretas na conta do parceiro nem
  separate charges + transfers. O casal paga a plataforma diretamente
  (`payment_intent_data.transfer_data.destination` = conta do parceiro);
  a Stripe transfere automaticamente para o parceiro, retendo
  `application_fee_amount` (a comissão, `platform_settings.platform_commission_percentage`)
  do lado da plataforma. Uma só Checkout Session, uma só operação Stripe
  por pagamento.
- **Checkout Sessions hospedadas pela Stripe**, não Payment Element/
  campos de cartão embutidos na app. Nenhum dado de cartão passa por
  código deste projeto em momento nenhum — fora do âmbito de PCI DSS por
  desenho, e é a integração mais rápida de implementar corretamente numa
  só ronda. A app (mobile-app) só abre o URL devolvido pela Stripe
  (`url_launcher`) e volta a fechar quando a Stripe redireciona para
  `success_url`/`cancel_url`.

## Âmbito desta ronda

Só o **sinal** (`payments.type = 'deposit'`, criado por `accept_proposal()`,
ver `database/migrations/020_payments.sql`) pode ser pago via Stripe.
`admin_confirm_deposit()` (confirmação manual pelo admin, ex: transferência
bancária) mantém-se como via alternativa — as duas coexistem, uma não
substitui a outra. Pagamento faseado/final (`installment`/`final_payment`)
continua sem nenhum fluxo em lado nenhum, Stripe incluído — ver
`commissions.md`/`payouts.md`/`refunds.md`, todos ainda "Por desenvolver":
comissão por parceiro, payouts geridos pela plataforma e reembolsos
continuam fora desta ronda.

## Modelo de dados

`database/migrations/021_stripe_connect.sql`:

- `partner_profiles.stripe_account_id` (text, único quando não nulo),
  `stripe_charges_enabled`, `stripe_payouts_enabled` (bool, sincronizados
  pelo webhook a partir do evento `account.updated`).
- `payments.provider`/`provider_payment_id` já existiam
  (`020_payments.sql`) — passam a poder valer `'stripe'` + o id da
  Checkout Session (antes do pagamento) ou do Payment Intent (depois de
  confirmado), em vez de só `'manual_admin'`.

Três funções novas, duas delas com um padrão de autorização que não
existia ainda neste projeto — não são chamadas por nenhum utilizador
autenticado, só pelo webhook:

- `record_stripe_checkout_session(payment_id, session_id)` — `authenticated`,
  RLS via `payer_id = auth.uid()`. Chamada pela Edge Function
  `create-deposit-checkout` depois de criar a sessão.
- `confirm_stripe_deposit_payment(session_id, payment_intent_id)` — só
  `service_role`, `execute` revogado de `authenticated`. Chamada pelo
  webhook depois de verificar a assinatura do evento — essa assinatura
  (não uma sessão Supabase) é a autenticação real desta escrita.
- `sync_stripe_account_status(account_id, charges_enabled, payouts_enabled)`
  — mesmo padrão, só `service_role`.

## Edge Functions (`supabase/functions/`)

- `create-connect-onboarding-link` — chamada pelo parceiro. Cria a conta
  Express na primeira chamada (fica guardada), devolve sempre um Account
  Link novo (expiram ao fim de minutos, nunca são guardados).
- `create-deposit-checkout` — chamada pelo casal com um `payment_id`.
  Valida que o pagamento é seu, é um sinal pendente, e que o parceiro já
  tem `stripe_charges_enabled = true` (senão devolve `partner_not_onboarded`
  em vez de deixar a Stripe falhar com um erro menos claro). Cria a
  Checkout Session e devolve o URL.
- `stripe-webhook` — sem CORS, sem JWT do Supabase, só a assinatura
  Stripe. Trata `checkout.session.completed` (liquida o pagamento +
  confirma a reserva) e `account.updated` (sincroniza os dois booleanos
  de capacidade do parceiro). Outros tipos de evento são ignorados de
  propósito — nada mais é consumido ainda.

## Fluxo (sinal)

```
Casal abre reserva em awaiting_deposit
        ↓
App chama create-deposit-checkout(payment_id)
        ↓
Edge Function cria Checkout Session (destination charge)
        ↓
App abre o URL devolvido (browser/webview)
        ↓
Casal paga na página da Stripe (fora desta app)
        ↓
Stripe → stripe-webhook: checkout.session.completed
        ↓
confirm_stripe_deposit_payment(): payments.status = 'paid',
bookings.status = 'confirmed'
        ↓
Casal é redirecionado para success_url
```

## Gap real encontrado ao testar contra a API real da Stripe (2026-08-31)

`account_links.create()` (onboarding do parceiro) **recusa qualquer `return_url`/`refresh_url` que não seja `http(s)`** — confirmado diretamente contra a API real (`{"code":"url_invalid","param":"return_url"}`), depois de `create-connect-onboarding-link` devolver silenciosamente `stripe_error` com os valores `copodagua://...` originais. Isto é diferente da Checkout Session (`create-deposit-checkout`), cujo `success_url`/`cancel_url` a Stripe documenta suportar esquemas próprios para apps móveis — só os Account Links têm esta restrição.

Corrigido em `createConnectOnboardingUrl()` (`core/partner_app/partner_app_providers.dart`): `return_url`/`refresh_url` passaram a `https://yknbtsmcmjxzzhijyiav.supabase.co` (o próprio domínio do projeto, único HTTPS real disponível — não existe nenhuma página web pública própria desta plataforma ainda). A Stripe desaconselha depender do conteúdo desta página de qualquer forma (recomenda reverificar o estado da conta pela API ao regressar à app), o que já é o que o webhook `account.updated` faz — por isso este placeholder não é um problema funcional, só cosmético. Substituir por uma página própria (ex: "podes voltar à app") fica para quando existir um domínio público real.

Verificado de ponta a ponta contra o projeto real e a API real da Stripe (não só `rollback`-wrapped): sessão real obtida para a conta de teste do parceiro via `POST /auth/v1/admin/generate_link` (não altera a password, não envia email — só gera e verifica um magic link server-to-server), usada para chamar `create-connect-onboarding-link` já implantada — devolveu `200` com um URL real da Stripe (`https://connect.stripe.com/setup/e/acct_.../...`), e `partner_profiles.stripe_account_id` confirmado escrito com o id da conta Express real criada. Conta de diagnóstico avulsa criada ao isolar o bug foi apagada da Stripe; a conta real ligada ao parceiro de teste ficou.

## Por fazer (fora de âmbito nesta ronda, sinalizado, não escondido)

- Onboarding Express só verificado em teste — nenhum parceiro real
  passou ainda pelo fluxo completo até `charges_enabled = true`.
- `payment_grace_period_days` (`platform_settings`) continua sem nenhum
  código a aplicá-lo — `expire_overdue_bookings()` continua a ser um
  corte único às 48h, sem estado intermédio `payment_overdue`.
- Reembolsos, payouts geridos pela plataforma e comissão por
  parceiro/categoria — ver `refunds.md`/`payouts.md`/`commissions.md`.
- Pagamento final/faseado — precisa de um desenho próprio (quando é
  criado, como se relaciona com o sinal), não uma extensão direta deste.
