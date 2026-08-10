# Módulo: Wedding

**Estado:** ✅ Documentado
**Camada:** Mobile (Flutter) + Backend (Supabase)
**Consumido por:** Noivos (owner e colaboradores)

## Objetivo

Gerir a entidade `wedding` — o "tenant" central da plataforma — depois de criada em estado semente pelo Onboarding. Este módulo é responsável pela edição contínua dos dados do casamento, pela gestão de colaboradores (o parceiro/a e, no futuro, planners), pelo ciclo de vida do casamento (planeamento → realizado → arquivado) e por fornecer a base de isolamento de dados (`wedding_id`) que todos os módulos seguintes (Guests, Budget, Checklist, Marketplace, Chat, Contracts, Payments) vão referenciar.

Se o Authentication estabelece "quem é o utilizador", o Wedding estabelece "a que casamento pertence este dado" — é o segundo pilar de isolamento de dados da plataforma, depois do utilizador.

**Fora de âmbito:** gestão de convidados (`mobile-app/guests/`), orçamento (`mobile-app/budget/`), checklist (`mobile-app/checklist/`) — este módulo só gere os dados *da própria entidade wedding*, não os módulos que dependem dela.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`user-flow.md`](./user-flow.md) | Fluxos de utilizador |
| [`ui.md`](./ui.md) | Wireframes textuais e componentes UI |
| [`database.md`](./database.md) | Modelo de dados, `is_wedding_member()` e RLS |
| [`api.md`](./api.md) | Edge Functions |
| [`state.md`](./state.md) | Estados da aplicação |
| [`validations.md`](./validations.md) | Regras de validação de campos |
| [`edge-cases.md`](./edge-cases.md) | Casos limite identificados |
| [`test-cases.md`](./test-cases.md) | Critérios de aceitação e plano de testes |
| [`tasks.md`](./tasks.md) | Backlog técnico e melhorias futuras |
| [`dependencies.md`](./dependencies.md) | Dependências deste módulo e módulos que dependem dele |

## Decisão de arquitetura mais relevante

Introdução da função `is_wedding_member()` como `security definer`, seguindo o mesmo padrão já estabelecido para `is_admin()` no módulo Authentication. Esta função torna-se o mecanismo central de RLS para **todos** os módulos ligados a um `wedding_id` (Guests, Budget, Checklist, etc.) — cada um desses módulos vai referenciar esta função em vez de reimplementar a verificação de pertença. Ver `database.md`.
