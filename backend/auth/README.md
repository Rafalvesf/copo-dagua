# Módulo: Authentication

**Estado:** ✅ Documentado
**Camada:** Backend (Supabase Auth + lógica de negócio custom)
**Consumido por:** `mobile-app/` (Noivos), `partner-app/` (Parceiros), `admin-web/` (Administradores)

## Objetivo

Garantir que qualquer pessoa que acede à Copo d'Água — noivo, parceiro ou administrador — consegue criar conta, autenticar-se de forma segura e ser corretamente identificada pelo sistema, para que todas as permissões, dados e fluxos subsequentes (Wedding, Marketplace, Chat, Pagamentos) sejam corretamente isolados por utilizador e por "tenant" (o casamento).

Este módulo é a fundação de todo o produto: nenhum outro módulo funciona sem ele. Erros aqui propagam-se para todo o sistema (RLS mal configurado = fugas de dados entre casamentos ou parceiros).

**Fora de âmbito deste módulo:** onboarding funcional (escolher tipo de casamento, convidar parceiro, etc.) — ver `mobile-app/onboarding/`.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxos de utilizador (registo, login, recuperação, eliminação) |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados e políticas RLS |
| [`api.md`](./api.md) | Endpoints Supabase e Edge Functions |
| [`state.md`](./state.md) | Estados da aplicação (state machine) |
| [`validations.md`](./validations.md) | Regras de validação de campos |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Resumo executivo

Três tipos de utilizador (`couple`, `partner`, `admin`), cada um com exatamente um papel — sem contas híbridas no MVP. Autenticação via Supabase Auth (email/password + OAuth Google/Apple), estendida com uma tabela `profiles` própria para dados de negócio (role, onboarding, MFA, soft-delete). Acesso a funcionalidades que envolvem dinheiro exige email verificado. RLS é a linha de defesa principal para isolamento de dados entre utilizadores e casamentos.

**Decisão de arquitetura mais relevante:** RLS e a função `is_admin()` são tratadas como padrão transversal (ver `docs/architecture/`), não reimplementadas módulo a módulo.
