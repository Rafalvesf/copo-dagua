# Product — Metodologia

Este projeto desenvolve **um módulo de cada vez**, nunca em paralelo.

## Sequência obrigatória por módulo

1. Objetivo
2. Funcionalidades
3. Regras de negócio
4. Fluxo do utilizador
5. Wireframe textual
6. Componentes UI
7. Modelo de dados
8. API
9. Estados da aplicação
10. Validações
11. Casos limite
12. Critérios de aceitação
13. Testes
14. Backlog técnico
15. Melhorias futuras

## Padrão de ficheiros por módulo

Cada módulo funcional (em `mobile-app/`, `supplier-app/`, `admin-web/` ou `backend/`) deve conter, no mínimo:

- `README.md` — resumo executivo e índice
- `requirements.md` — funcionalidades e regras de negócio
- `user-flow.md` — fluxos de utilizador
- `ui.md` — wireframes e componentes
- `database.md` — modelo de dados (quando aplicável)
- `api.md` — contratos de API
- `state.md` — estados da aplicação
- `validations.md` — validações
- `edge-cases.md` — casos limite
- `test-cases.md` — critérios de aceitação e testes
- `tasks.md` — backlog técnico e melhorias futuras
- `dependencies.md` — dependências do e para o módulo

Ver `backend/auth/` como implementação de referência completa deste padrão.

## Qualidade esperada

Documentação comparável à produzida por empresas como Stripe, Linear, Notion ou Airbnb. Evitar respostas superficiais. Sempre que se encontrar uma forma melhor de estruturar o produto, explicar a razão antes de a adotar — agir como cofundador técnico, não como executor passivo.

Ver estado de cada módulo em `ROADMAP.md` na raiz do projeto.
