# Users (admin-web) — API

Leitura direta via SDK (RLS). Escrita via RPC às duas funções de `database.md` — mesmo padrão de `admin-web/partners/api.md`.

| Função | Erros |
|---|---|
| `suspend_user_account(p_user_id, p_reason)` | `forbidden` (42501), `invalid_state` (P0001 — já suspenso, ou a tentar suspender a própria conta, RN03), `validation_error` (22023 — motivo curto), `not_found` (P0002) |
| `restore_user_account(p_user_id)` | `forbidden`, `invalid_state` (já ativo), `not_found` |

```
supabase.rpc('suspend_user_account', { p_user_id, p_reason })
supabase.rpc('restore_user_account', { p_user_id })
```

Chamadas diretas via `supabase.rpc()` a partir do servidor Next.js (Server Action), não via Edge Function — ao contrário de `admin-web/partners/`, não há necessidade de um passo intermédio HTTP próprio (nenhum dos dois lados desta operação — casal/parceiro que está a ser suspenso — recebe notificação síncrona nem há outro side-effect a orquestrar); chamar a função Postgres diretamente do backend do Next.js via `supabase.rpc()` autenticado é suficiente e mais simples. Se `backend/notifications/` vier a exigir um passo assíncrono aqui, revisitar como Edge Function nessa altura.
