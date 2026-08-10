# Database — Migrações e Testes

Este diretório contém o **schema SQL real** dos módulos já implementados, extraído diretamente dos respetivos `database.md`, e uma suite de testes de RLS validada contra Postgres.

## Estado

| Módulo | Migração | Testado contra Postgres real |
|---|---|---|
| Stub do Supabase Auth (`auth.uid()`, `auth.users`) | `000_supabase_stub.sql` | — (infraestrutura de teste) |
| Authentication | `001_authentication.sql` | ✅ |
| Onboarding | `002_onboarding.sql` | ✅ |
| Wedding | `003_wedding.sql` | ✅ (incluindo correção de policy de INSERT em falta) |
| Guests | `004_guests.sql` | ✅ |

Ver `docs/architecture/TESTING_NOTES.md` para o relatório completo de testes, incluindo os bugs reais encontrados e corrigidos.

## Como correr localmente

Requer Postgres 16 (ou compatível) instalado.

```bash
createdb copodagua_test
psql -d copodagua_test -f migrations/000_supabase_stub.sql
psql -d copodagua_test -f migrations/001_authentication.sql
psql -d copodagua_test -f migrations/002_onboarding.sql
psql -d copodagua_test -f migrations/003_wedding.sql
psql -d copodagua_test -f migrations/004_guests.sql

# correr os testes de RLS
psql -d copodagua_test -f tests/rls_test_suite.sql
```

Devem passar **11 de 11 testes** (procurar por `PASS`/`FAIL` no output).

## Nota importante

O ficheiro `000_supabase_stub.sql` **não existe em produção** — é uma simulação mínima do schema `auth` do Supabase, criada apenas para permitir testar RLS localmente sem depender do runtime completo do Supabase. Ao aplicar estas migrações num projeto Supabase real, começar a partir de `001_authentication.sql` (o Supabase já fornece `auth.users` e `auth.uid()` nativamente).

## Próximos passos

- Confirmar os privilégios (`GRANT`) do role `authenticated` diretamente no projeto Supabase real — ver aviso em `docs/architecture/TESTING_NOTES.md`.
- Repetir este processo de validação para cada módulo novo que introduza uma função `security definer` nova ou um padrão de RLS não testado.
