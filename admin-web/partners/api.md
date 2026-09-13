# Partners (admin-web) — API

Leitura é sempre direta via SDK Supabase (ver `database.md`). As quatro escritas passam por Edge Functions já anunciadas em `partner-app/profile/api.md` — este documento é o contrato completo de cada uma.

## Edge Functions — wrappers finos sobre funções Postgres

Todas: chamada autenticada, exigem `is_admin()`, e devem escrever `partner_profiles` + `audit_logs` atomicamente (RN06). Duas chamadas REST sequenciais do Edge Function (`update` seguido de `insert`) **não** garantem isso — cada chamada `supabase-js` ao PostgREST é a sua própria transação, não há transação partilhada entre elas. Por isso a lógica de cada transição vive numa função `plpgsql security definer` (`database/migrations/007_partner_review_transitions.sql`: `approve_partner_profile`, `reject_partner_profile`, `suspend_partner_profile`, `restore_partner_profile`), cujo corpo é uma única transação implícita, e o Edge Function é só um wrapper HTTP fino que chama `supabase.rpc(...)`. Ver código em `supabase/functions/`.

### `approve-partner-profile`

| | |
|---|---|
| Input | `{ partner_id: uuid }` |
| Pré-condição | `partner_profiles.status = 'pending_review'`, senão erro `invalid_state` |
| Efeito | `status = 'published'`, `reviewed_at = now()`, `reviewed_by = auth.uid()`, `rejection_reason = null` |
| Auditoria | `audit_logs.action = 'approve_partner'`, `metadata = { previous_status: 'pending_review' }` |
| Output | `{ status: 'published' }` |

### `reject-partner-profile`

| | |
|---|---|
| Input | `{ partner_id: uuid, reason: string }` |
| Pré-condição | `partner_profiles.status = 'pending_review'`; `reason` não vazio (RN04) |
| Efeito | `status = 'rejected'`, `reviewed_at = now()`, `reviewed_by = auth.uid()`, `rejection_reason = reason` |
| Auditoria | `audit_logs.action = 'reject_partner'`, `metadata = { previous_status: 'pending_review', reason }` |
| Output | `{ status: 'rejected' }` |

### `suspend-partner-profile`

| | |
|---|---|
| Input | `{ partner_id: uuid, reason: string }` |
| Pré-condição | `partner_profiles.status = 'published'`; `reason` não vazio (RN04) |
| Efeito | `status = 'suspended'` — `reviewed_at`/`reviewed_by`/`rejection_reason` não são tocados (não é uma revisão, é uma suspensão; ver RN04 de `requirements.md`) |
| Auditoria | `audit_logs.action = 'suspend_partner'`, `metadata = { previous_status: 'published', reason }` |
| Output | `{ status: 'suspended' }` |

### `restore-partner-profile`

| | |
|---|---|
| Input | `{ partner_id: uuid }` |
| Pré-condição | `partner_profiles.status = 'suspended'` |
| Efeito | `status = 'published'` |
| Auditoria | `audit_logs.action = 'restore_partner'`, `metadata = { previous_status: 'suspended' }` |
| Output | `{ status: 'published' }` |

## Autorização em duas camadas

Cada função Postgres começa por verificar `public.is_admin()` explicitamente no corpo (não confia só na RLS de `partner_profiles`/`audit_logs`), porque corre `security definer` — se corresse com os privilégios de quem a definiu sem essa verificação explícita, um utilizador não-admin autenticado poderia invocá-la (via `supabase.rpc()` direto, sem passar pelo Edge Function) e contornar a RLS. Mesmo padrão de risco (e mesma mitigação) que `approve-partner-profile`/`reject-partner-profile` já assumem em `partner-app/profile/api.md`.

```sql
if not public.is_admin() then
  raise exception 'forbidden' using errcode = '42501';
end if;
```

## Erros

| Código lógico | `sqlstate` da função Postgres | Quando |
|---|---|---|
| `forbidden` | `42501` | Chamador não é admin |
| `invalid_state` | `P0001` | Pré-condição de estado falha (ex: aprovar um perfil que já não está `pending_review` — outro admin decidiu entretanto, ver `edge-cases.md`) |
| `validation_error` | `22023` | `reason` com menos de 10 caracteres em `reject`/`suspend` (ver `validations.md`) |
| `not_found` | `P0002` | `partner_id` não corresponde a nenhum `partner_profiles` |

O Edge Function traduz o `sqlstate` devolvido pelo `supabase.rpc()` de volta para o código lógico antes de responder ao cliente (ver `admin-web/app/lib/dal.ts`-equivalente do lado da função, ou diretamente o `catch` no wrapper).

## Risco técnico

As quatro funções Postgres repetem a mesma estrutura (verificar admin → `select ... for update` → verificar pré-condição de estado → `update` → `insert` em `audit_logs`). Ficaram como quatro funções separadas em vez de uma função genérica parametrizada por `from_status`/`to_status`/`action` porque cada uma tem uma pequena variação de negócio (ex: `suspend` não toca `reviewed_at`/`reviewed_by`, RN04) que tornaria os parâmetros de uma função genérica quase tão longos como as próprias funções. Revisitar se aparecer uma quinta transição igual às quatro.
