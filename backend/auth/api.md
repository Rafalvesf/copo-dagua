# Authentication — API

Usamos diretamente o SDK Supabase Auth no cliente (Flutter), não uma API REST custom, exceto para lógica de negócio adicional (ex: criar `profile` após signup, verificar regras RN07).

## Endpoints Supabase nativos (via SDK)

- `auth.signUp({ email, password, data: { role, full_name } })`
- `auth.signInWithPassword({ email, password })`
- `auth.signInWithOAuth({ provider })`
- `auth.resetPasswordForEmail(email)`
- `auth.updateUser({ password })`
- `auth.signOut()`
- `auth.refreshSession()`

## Edge Functions custom (Supabase Functions)

| Função | Trigger | Descrição |
|---|---|---|
| `check-login-rate-limit` | Chamada antes do login (Edge Function) | Verifica `login_attempts`, aplica RN07 |
| `request-account-deletion` | Chamada autenticada | Marca `status = pending_deletion`, agenda job de anonimização a 30 dias |
| `finalize-account-deletion` | Cron job diário | Anonimiza/apaga contas com `pending_deletion_at` > 30 dias |

## Trigger de provisionamento (implementado, não é Edge Function)

`on-user-created` acabou por ser implementado como trigger Postgres simples em vez de Edge Function — mais barato e sem cold start, e não precisa de nenhuma chamada de rede externa. Ver `database/migrations/011_auth_provisioning.sql`:

- `handle_new_user()` (`security definer`) corre em `after insert on auth.users` (trigger `on_auth_user_created`), lê `role`/`full_name` de `raw_user_meta_data` e insere a linha em `public.profiles`.
- Quando `role = 'partner'`, também cria a linha inicial em `public.partner_profiles` (`status = 'draft'`) e uma linha vazia em `public.partner_verification` — ver `partner-app/profile/api.md` para o `on-partner-created` correspondente.
- 2026-08-30: esta função esteve documentada mas nunca implementada durante várias sessões — qualquer signup real teria criado um `auth.users` sem `profiles` correspondente, partindo `is_admin()`/`is_wedding_member()`/todas as RLS policies para esse utilizador. Descoberto e corrigido ao ligar `mobile-app/`/`partner-app/` ao Supabase real (ver `ROADMAP.md`).

## Risco técnico

RN07 (rate limiting) não deve ser implementado só client-side. Como o Supabase Auth não expõe nativamente rate limiting por email a este nível de granularidade, isto exige uma Edge Function intermédia antes do `signInWithPassword`, ou o uso do rate limiting nativo do Supabase (mais genérico, por IP). Decisão pendente — ver `tasks.md`.
