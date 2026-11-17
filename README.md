# À Nossa!

Plataforma mobile-first para organizar eventos de todo o tipo (casamentos,
batizados, aniversários e outros), que liga quem organiza aos parceiros que
prestam os serviços: espaços, catering, fotografia, música, decoração e
outros.

> O nome do repositório (`copo-dagua`) vem da primeira versão do produto, que
> era só para casamentos.

## Os dois lados

| Lado | Quem | O que faz na app |
|---|---|---|
| **Organizadores e convidados** | Quem organiza um evento e quem é convidado para ele (a mesma pessoa pode organizar um evento e ser convidada para outro) | Criar e gerir eventos, convidados e RSVP, mesas, tarefas, orçamento, procurar parceiros, pedir orçamentos, conversar, pagar; os convidados respondem ao convite e partilham fotografias na galeria |
| **Parceiros** | Prestadores de serviços | Perfil e pacotes, agenda, pedidos de orçamento e propostas, reservas, contratos, conversas, pagamentos recebidos e avaliações |

Os dois lados estão na mesma app Flutter (`mobile-app/app/`). O tipo de conta
escolhe-se no registo. Há ainda um painel web interno (`admin-web/`) para a
equipa: aprovação de parceiros, moderação, disputas, pagamentos e apoio.

## Modelo de negócio

A À Nossa! cobra uma **taxa de serviço** sobre os pagamentos feitos a
parceiros dentro da app, por escalões sobre o valor da reserva. Os valores em
vigor e as regras (descontos, destaque, convites) estão nos Termos, em
`mobile-app/app/lib/features/legal/legal_texts.dart`.

## Stack tecnológico

- **App (organizadores, convidados e parceiros):** Flutter
- **Painel de administração:** Next.js
- **Backend:** Supabase (Auth, Postgres, Realtime, Storage, Edge Functions)
- **Pagamentos:** Stripe Connect
- **Notificações push:** Firebase Cloud Messaging

## Estrutura do repositório

```
copo-dagua/
├── mobile-app/app/   → a app Flutter (código)
├── mobile-app/…      → documentação funcional dos módulos do organizador
├── partner-app/      → documentação funcional dos módulos do parceiro
├── admin-web/        → painel de administração (código em admin-web/app/)
├── backend/          → documentação por domínio: contratos de API e regras de negócio
├── database/         → migrações, seeds e testes da base de dados
├── supabase/         → Edge Functions
├── docs/             → produto, UX, arquitetura, API, legal, marketing, lojas
└── marketing/        → materiais de marketing
```

## Design

O aspeto da app (cores, letra, botões, componentes) está definido em
[`DESIGN.md`](./DESIGN.md) e é a fonte de verdade para qualquer ecrã.

## Estado atual

Ver [`ROADMAP.md`](./ROADMAP.md). Alguns documentos mais antigos (por
exemplo `VISION.md` e `BUSINESS_MODEL.md`) ainda descrevem a versão só para
casamentos, com o nome Copo d'Água.
