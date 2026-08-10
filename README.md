# Copo d'Água

> O casamento, num só lugar.

Plataforma mobile-first para organização completa de casamentos — do planeamento ao pagamento dos fornecedores, tudo num único produto.

## O que é

O Copo d'Água não é uma app de listas de tarefas. É a plataforma onde o casamento inteiro acontece: organização, convidados, RSVP, orçamento, marketplace de fornecedores, pedidos de orçamento, chat, contratos, pagamentos, notificações e cronograma do evento — tudo interligado e associado ao mesmo "casamento".

## Modelo de negócio

Comissão de **3%** sobre todos os pagamentos realizados a fornecedores dentro da plataforma. Ver detalhe em [`BUSINESS_MODEL.md`](./BUSINESS_MODEL.md).

## Produtos

Este monorepo de documentação cobre três superfícies de produto distintas:

| Produto | Utilizador | Descrição |
|---|---|---|
| `mobile-app/` | Noivos | App Flutter mobile-first, o produto principal |
| `supplier-app/` | Fornecedores | App/portal para gerir agenda, propostas, contratos e pagamentos |
| `admin-web/` | Administradores | Painel web interno para operações, moderação e suporte |

## Stack tecnológico

- **Frontend:** Flutter (mobile-app + supplier-app), Web admin a definir (React/Next.js — a confirmar em `docs/architecture/`)
- **Backend:** Supabase (Auth, Realtime, Storage, Postgres)
- **Base de dados:** PostgreSQL
- **Pagamentos:** Stripe Connect
- **Push notifications:** Firebase Cloud Messaging

## Estrutura da documentação

```
copo-dagua/
├── docs/            → produto, UX, arquitetura, API, base de dados, legal, marketing (transversal)
├── mobile-app/       → um módulo por pasta, documentação funcional completa
├── supplier-app/     → idem, do lado do fornecedor
├── admin-web/        → idem, do lado da administração
├── backend/          → um módulo por domínio, contratos de API e lógica de negócio
├── database/         → schema, ERD, migrações, seed
└── assets/           → branding, ilustrações, ícones, mockups
```

Cada módulo funcional segue a mesma sequência de trabalho, documentada em [`docs/product/`](./docs/product/): Objetivo → Funcionalidades → Regras de negócio → Fluxo → Wireframe → Componentes UI → Modelo de dados → API → Estados → Validações → Casos limite → Critérios de aceitação → Testes → Backlog → Melhorias futuras.

## Estado atual

Ver [`ROADMAP.md`](./ROADMAP.md) para o estado de cada módulo.

## Visão

Ver [`VISION.md`](./VISION.md).
