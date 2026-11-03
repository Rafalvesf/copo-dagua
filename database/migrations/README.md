# Migrações

- O Rafael corre as migrações à mão no SQL Editor do Supabase, por ordem.
- **Cada migração nova tem de ser acrescentada a
  `admin-web/app/lib/pending-migrations.ts`** (ficheiro, título, o que faz e
  uma verificação). A página **Migrações** do admin mostra as que faltam,
  com o SQL para copiar, e tira-as sozinha quando a verificação as encontra
  na base de dados.
