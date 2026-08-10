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
| `on-user-created` | Trigger DB (`after insert on auth.users`) | Cria automaticamente a linha em `public.profiles` com o `role` vindo dos metadados do signup |
| `check-login-rate-limit` | Chamada antes do login (Edge Function) | Verifica `login_attempts`, aplica RN07 |
| `request-account-deletion` | Chamada autenticada | Marca `status = pending_deletion`, agenda job de anonimização a 30 dias |
| `finalize-account-deletion` | Cron job diário | Anonimiza/apaga contas com `pending_deletion_at` > 30 dias |

## Risco técnico

RN07 (rate limiting) não deve ser implementado só client-side. Como o Supabase Auth não expõe nativamente rate limiting por email a este nível de granularidade, isto exige uma Edge Function intermédia antes do `signInWithPassword`, ou o uso do rate limiting nativo do Supabase (mais genérico, por IP). Decisão pendente — ver `tasks.md`.
