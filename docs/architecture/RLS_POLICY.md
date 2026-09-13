# RLS — padrões transversais

**Estado:** ✅ Documentado
**Camada:** Base de dados (Postgres/Supabase)
**Consumido por:** todos os módulos com tabelas RLS — `backend/auth/`, `backend/weddings/` (via `mobile-app/wedding/`), `partner-app/profile/`, `admin-web/partners/`, e todos os módulos futuros com dados sensíveis.

## Objetivo

Row Level Security (RLS) é a linha de defesa principal de isolamento de dados nesta plataforma (ver `backend/auth/README.md`). Este documento fixa o **padrão de função helper `security definer`** usado para expressar regras de acesso não triviais em policies, para que cada módulo novo reutilize o mesmo mecanismo em vez de reimplementar `exists(...)` inline e divergir com o tempo.

Isto resolve o pendente listado em `ROADMAP.md` ("Documentação transversal pendente") e a decisão de arquitetura anunciada em `backend/auth/database.md`.

## O padrão

Sempre que uma policy precisa de uma condição reutilizada por múltiplas tabelas (ou que pode mudar de definição no futuro sem que se queira editar N policies), a condição vive numa função:

```sql
create or replace function public.<nome>()
returns boolean
language sql
security definer
stable
set search_path = public, pg_temp
as $$
  select exists (...);
$$;

revoke execute on function public.<nome>() from public, anon;
grant execute on function public.<nome>() to authenticated;
```

- `security definer` — corre com os privilégios de quem definiu a função, não do chamador, permitindo-lhe ler tabelas (ex: `profiles`) que a própria policy que a invoca pode não dar acesso direto de leitura ao utilizador.
- `stable` — sinaliza ao planeador do Postgres que o resultado não muda dentro da mesma query, permitindo otimização.
- Nome em `snake_case` com prefixo semântico (`is_`) quando devolve booleano.
- `set search_path = public, pg_temp` — **obrigatório em toda função `security definer`**. Sem isto, o `search_path` do chamador fica mutável dentro da função; um `search_path` malicioso poderia, em teoria, fazer a função resolver `profiles` ou outra tabela/função referenciada para um objeto diferente do pretendido, dado que a função corre com os privilégios de quem a definiu. Falta real encontrada 2026-08-30 (Supabase security advisor, `function_search_path_mutable`) em `is_admin()` e `is_wedding_member()` — nenhuma das duas tinha isto.
- `revoke ... from public, anon; grant ... to authenticated;` — por omissão o Postgres concede `execute` a `PUBLIC` em qualquer função nova, **e** um projeto Supabase tem, por omissão de plataforma, `alter default privileges in schema public grant execute on functions to anon, authenticated, service_role`, que reconcede `execute` a `anon` especificamente a cada função nova, independentemente de `revoke ... from public`. É por isso que `revoke ... from public` sozinho **não chega** — confirmado a tentar corrigir isto na prática (2026-08-30): o advisor continuou a assinalar `anon_security_definer_function_executable` até `anon` ser revogado explicitamente. `authenticated` precisa de `execute` porque a avaliação de uma policy RLS chama a função com os privilégios do role que está a correr a query — sem isto, qualquer query de um utilizador normal contra uma tabela cuja policy use `is_admin()` falharia com "permission denied for function", mesmo que o utilizador não seja admin. Continuar a ver `authenticated_security_definer_function_executable` como WARN no advisor depois desta correção é esperado e aceite: `authenticated` precisa mesmo de conseguir invocar a função, tanto via RLS como via `supabase.rpc()` direto — não é um bug a corrigir.

### Funções já implementadas

| Função | Ficheiro | Definição |
|---|---|---|
| `is_admin()` | `database/migrations/001_authentication.sql` | `true` se `profiles.role = 'admin'` para `auth.uid()`. Usada em `profiles`, `weddings` (`003_wedding.sql`), `partner_profiles`/`partner_verification`/`partner_profile_categories`/`partner_portfolio_items` (`005_partner_profile.sql`), e em `audit_logs` (`006_admin_audit_log.sql`). |
| `is_wedding_member(wedding_id)` | `database/migrations/003_wedding.sql` | Isola dados por "tenant" (o casamento) — par de `is_admin()` para RN de acesso de casal. |
| `is_partner_profile_visible(partner_id)` | `database/migrations/005_partner_profile.sql` | Implementa a regra de visibilidade pública de um perfil de parceiro (`status = 'published'`, `is_paused = false`, `profiles.status = 'active'`) num único ponto, reutilizado por todas as tabelas filhas de `partner_profiles`. |

Qualquer módulo novo com uma regra de acesso equivalente (ex: "só o dono ou admin", "só se o recurso estiver publicado") deve verificar primeiro se uma destas três já cobre o caso antes de escrever uma nova função.

## Uso em policies

```sql
create policy "Admins can view all X"
  on public.<tabela> for select
  using (public.is_admin());
```

Nunca escrever `exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')` diretamente numa policy nova — chamar sempre `public.is_admin()`.

## Decisão: `is_admin()` fica flat no MVP, RBAC granular fica para depois

`profiles.role` é um enum de 3 valores (`couple | partner | admin`) — não há hierarquia nem permissões por recurso. Isto é suficiente para o âmbito atual (aprovação de parceiros, moderação básica).

Especificações de produto mais amplas para o admin panel pedem RBAC granular (`SUPER_ADMIN`, `ADMIN`, `SUPPORT`, `FINANCE`, `MODERATOR`, cada um com permissões por recurso+ação). **Decisão consciente: não implementar isto agora.**

Razões:
1. `is_admin()` já é consumida por várias policies em produção-teste (`profiles`, `weddings`, `partner_profiles` e tabelas relacionadas). Substituir o modelo de autorização é uma mudança transversal com raio de ação em todos estes módulos, não um detalhe de um módulo novo.
2. Nenhum módulo atual precisa de diferenciar, por exemplo, um admin que só vê pagamentos de um admin que só modera reviews — essa necessidade só aparece quando os módulos de Payments/Reviews/Support existirem.
3. Introduzir RBAC granular sem uma equipa administrativa real para o justificar é complexidade especulativa (contra a filosofia do projeto — ver `docs/product/README.md`, "evitar respostas superficiais" não significa "adicionar tudo o que uma spec genérica pede").

Quando a plataforma tiver múltiplos administradores com responsabilidades distintas (ex: alguém só de suporte, alguém só de financeiro), a migração de `is_admin()` flat para RBAC deve ser o seu próprio módulo documentado (`backend/admin-roles/` ou semelhante), com:
- tabelas `admin_roles` / `admin_permissions` / `role_permissions`;
- `is_admin()` mantida como caso especial (`SUPER_ADMIN` ou qualquer role administrativa) para não partir as policies existentes, ou substituída por uma função `has_permission(resource, action)` que as policies existentes passam a chamar em vez de `is_admin()` — decisão a tomar nessa altura, não agora.

## Armadilha: `INSERT ... RETURNING` com policy de select self-referencial

Quando a policy de `select` de uma tabela depende de uma função como `is_wedding_member()` ou `is_admin()` que faz uma subquery à **própria tabela** (ex: `select 1 from public.weddings w where w.id = ... and w.owner_id = auth.uid()`), um `INSERT` que peça `RETURNING` (é o que o cliente Supabase faz sempre que se encadeia `.insert(...).select()`, incluindo `.single()`) pode falhar com `"new row violates row-level security policy"` **mesmo a policy de insert (`with_check`) já tendo passado**. O Postgres aplica a policy de `select` também à linha devolvida pelo `RETURNING`, e nesse momento a subquery self-referencial ainda não vê a linha nova dentro do mesmo comando.

Confirmado ao vivo 2026-08-30 (`mobile-app/wedding/`, Fase 2 de `ROADMAP.md`) com `weddings`/`is_wedding_member()`: `insert(...)` sozinho — sucesso; `select(...)` a seguir, num pedido separado — sucesso; `insert(...).select().single()` no mesmo pedido — falha com `42501`. Um `UPDATE ... RETURNING` na mesma tabela **não** tem este problema (a linha já existia antes do comando começar, a subquery vê-a normalmente).

**Padrão a seguir em todo módulo novo que insira numa tabela protegida por uma policy de select self-referencial** (`weddings`, e qualquer tabela futura cuja policy de select chame `is_wedding_member()`/`is_admin()`/equivalente sobre a própria tabela): não encadear `.select()` a seguir a `.insert(...)`. Fazer o insert sozinho, depois um `select` separado (por `id` devolvido, se o insert tiver alguma forma de o dar, ou por uma coluna única conhecida como `owner_id`). Ver `mobile-app/app/lib/core/wedding/wedding_controller.dart`, método `create()`, para o padrão aplicado.

Não é um problema em tabelas cuja policy de select seja mais simples (ex: só `owner_id = auth.uid()` direto, sem subquery à própria tabela) — só afeta o padrão "função helper que faz `exists(select ... from esta_mesma_tabela ...)`".

## Auditoria

Qualquer ação administrativa que altere estado de outro utilizador (aprovar/rejeitar/suspender um parceiro, etc.) deve ser registada em `public.audit_logs` (ver `database/migrations/006_admin_audit_log.sql` e `admin-web/partners/database.md`) — tabela append-only, sem policy de `update`/`delete` para ninguém, legível só por `is_admin()`. Isto é um padrão transversal independente do modelo de autorização (flat ou RBAC) escolhido.
