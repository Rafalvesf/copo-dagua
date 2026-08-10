# Notas de Implementação e Testes — Fundação (Auth, Onboarding, Wedding, Guests)

**Data:** ver histórico do repositório
**O que foi testado:** o schema SQL completo dos 4 módulos da fundação, corrido contra um **Postgres 16 real** (não simulado), incluindo uma suite de testes de RLS que impersona utilizadores distintos.

## Metodologia

Como o Supabase gere `auth.uid()` através de claims JWT que só existem no runtime completo da plataforma, foi criado um **stub mínimo** do schema `auth` (`auth.users` + `auth.uid()`) que lê o utilizador "autenticado" de uma variável de sessão (`app.current_user_id`), permitindo testar RLS em Postgres puro com alto grau de fidelidade ao comportamento real do Supabase.

Ficheiros de trabalho (fora do scaffolding de produto, uso interno de validação):
- `db-test/migrations/000_supabase_stub.sql` — stub do schema `auth`
- `db-test/migrations/001-004_*.sql` — schema real dos 4 módulos, extraído diretamente dos `database.md` de cada módulo
- `db-test/tests/rls_test_suite_v2.sql` — 11 testes de RLS

## Resultado

**11 de 11 testes de RLS passaram** contra Postgres real, cobrindo:
- Owner vê o próprio casamento, não vê o de outro casal
- Colaborador ativo vê o casamento onde está associado
- Utilizador sem qualquer relação não vê nenhum casamento nem convidados
- Owner vê convidados do próprio casamento, não do de outro
- Colaborador consegue inserir convidados no casamento onde é membro
- Inserção indevida de convidado por um não-membro é corretamente bloqueada (`42501 insufficient_privilege`)
- Colaborador não consegue eliminar o casamento (0 linhas afetadas)
- Owner consegue eliminar o próprio casamento (1 linha afetada)
- `is_wedding_member()` devolve `false` corretamente para não-membros

## Bugs reais encontrados (e corrigidos) durante este processo

Isto é o valor concreto de passar de documentação para implementação — nenhum destes seria apanhado só por reler o texto.

| # | Problema | Onde | Correção |
|---|---|---|---|
| 1 | A tabela `weddings` tinha RLS ativado com policies de `select`/`update`/`delete`, mas **nenhuma policy de `insert`**. Isto bloquearia silenciosamente a criação de qualquer casamento em produção (nem o Onboarding, nem nenhum outro fluxo, conseguiria criar uma `wedding`). | `mobile-app/wedding/database.md` | Adicionada policy `"Owner can insert wedding"`. **Já corrigido no documento.** |
| 2 | A migração de teste inicial não incluía `grant delete on weddings`. Sem essa concessão de privilégio ao nível da tabela (distinto de RLS), o `DELETE` falha com `permission denied` mesmo com a policy correta. | Migração de teste (`003_wedding.sql`) | Corrigido na migração de teste. **Ponto de atenção para produção** — ver secção seguinte. |
| 3 | Uso incorreto de `SET LOCAL` fora de um bloco de transação no primeiro script de testes, fazendo com que `auth.uid()` nunca resolvesse corretamente e todos os testes de "utilizador autenticado" falhassem por omissão. | Script de testes (não o schema) | Corrigido — cada cenário de teste corre agora dentro do seu próprio `BEGIN`/`COMMIT`/`ROLLBACK`. |

## Nota importante para a implementação real em Supabase

Nenhum dos documentos `database.md` escritos até agora (Authentication, Onboarding, Wedding, Guests) inclui declarações `GRANT` explícitas para o role `authenticated`. Em Postgres puro isso é obrigatório (RLS não substitui privilégios de tabela). O Supabase **normalmente** já configura privilégios base razoáveis para os roles `anon`/`authenticated`/`service_role` no schema `public`, mas isto deve ser **confirmado explicitamente** no projeto Supabase real antes de assumir que as policies documentadas são suficientes por si só — não confiar apenas na documentação de RLS sem verificar os grants de tabela no ambiente real.

## O que ainda não foi testado

- A app Flutter em si (sem SDK Flutter neste ambiente de trabalho).
- Ligação real a um projeto Supabase hospedado (sem acesso de rede a `supabase.co` neste ambiente).
- Edge Functions como runtime Deno real (a lógica de negócio pode ser validada como TypeScript, mas não no runtime exato do Supabase Edge Functions).
- Testes de carga / concorrência (ex: dois colaboradores a editar em simultâneo).

## Recomendação

Antes de continuar a documentar novos módulos (Seating Plan, Budget, etc.), vale a pena repetir este mesmo processo de validação sempre que um módulo introduzir uma **nova função `security definer`** ou um **novo padrão de RLS** — é precisamente aí que os bugs 1 e 2 acima foram encontrados. Módulos que só reutilizam `is_wedding_member()` sobre uma tabela simples têm risco bastante mais baixo e podem ser validados de forma mais leve.
