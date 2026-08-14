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
| Profile (partner-app) | `005_partner_profile.sql` | ⏳ — escrita e com testes adicionados a `rls_test_suite.sql` (T12–T21), mas **não executada** contra um Postgres real neste ambiente de trabalho (sem `psql`/Docker disponíveis aqui). Ver nota abaixo. |

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
psql -d copodagua_test -f migrations/005_partner_profile.sql

# correr os testes de RLS
psql -d copodagua_test -f tests/rls_test_suite.sql
```

Deviam passar **21 de 21 testes** (procurar por `PASS`/`FAIL` no output) — os 11 originais (Authentication/Wedding/Guests) mais os 10 novos de Profile (T12–T21). **Nota:** os testes T12–T21 ainda não foram corridos contra um Postgres real (ver tabela acima); a próxima sessão com acesso a `psql` ou Docker deve validar isto antes de considerar o módulo `partner-app/profile/` verificado ao mesmo nível dos restantes.

## Nota importante

O ficheiro `000_supabase_stub.sql` **não existe em produção** — é uma simulação mínima do schema `auth` do Supabase, criada apenas para permitir testar RLS localmente sem depender do runtime completo do Supabase. Ao aplicar estas migrações num projeto Supabase real, começar a partir de `001_authentication.sql` (o Supabase já fornece `auth.users` e `auth.uid()` nativamente).

## Próximos passos

- Confirmar os privilégios (`GRANT`) do role `authenticated` diretamente no projeto Supabase real — ver aviso em `docs/architecture/TESTING_NOTES.md`.
- Repetir este processo de validação para cada módulo novo que introduza uma função `security definer` nova ou um padrão de RLS não testado.
