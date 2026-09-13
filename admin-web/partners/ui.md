# Partners (admin-web) — UI

## Nota sobre identidade visual

`mobile-app/shared/design-system.md` é a fonte de verdade da marca (paleta lavanda/creme/rosa, serifado **Fraunces** para títulos + **Inter** para o resto, cards brancos com sombra difusa tingida, formas em pílula). `admin-web/` reutiliza os mesmos tokens de cor/tipografia — não inventa uma paleta nova — mas adapta o layout a um contexto desktop denso em dados: tabelas em vez de cards de lista, sem gradiente de fundo full-screen (prejudicaria a legibilidade de uma tabela longa), sem bottom nav (usa sidebar fixa, ver abaixo).

Esta é uma decisão explícita: uma especificação genérica de admin panel avaliada durante o planeamento deste módulo sugeria uma paleta verde (`#5F7545`) e tipografia diferentes (DM Serif Display) — rejeitada por não corresponder à identidade de marca já implementada e testada em `mobile-app/`.

## Wireframes textuais

### Ecrã: Login

```
┌──────────────────────────────────────┐
│                                        │
│           [GradientMark]              │
│         Copo d'Água — Admin           │
│                                        │
│   Email                               │
│   [______________________]            │
│   Password                            │
│   [______________________]            │
│                                        │
│            [ Entrar ]                 │
│                                        │
└──────────────────────────────────────┘
```

### Ecrã: `/partners` (lista)

```
┌───────────┬────────────────────────────────────────────────────┐
│ [Logo]    │  Parceiros                                          │
│           │  Rever, aprovar e gerir perfis do Marketplace.      │
│ Dashboard │                                                      │
│ Parceiros │  [Pesquisar por nome...] [Estado ▾: A aguardar (12)]│
│ (12)      │                                                      │
│           │  ┌──────────────────────────────────────────────┐  │
│           │  │ Parceiro          Categoria   Local   Estado  │  │
│           │  │ Estúdio Luz&Sombra Fotografia Lisboa  🟡 Pend.│  │
│           │  │ Quinta das Rosas   Espaços    Sintra  🟡 Pend.│  │
│           │  │ ...                                            │  │
│           │  └──────────────────────────────────────────────┘  │
│           │                                                      │
│ ────────  │                                                      │
│ Admin     │                                                      │
│ Terminar  │                                                      │
│ sessão    │                                                      │
└───────────┴────────────────────────────────────────────────────┘
```

Sidebar mínima nesta fase: só `Dashboard` (placeholder, sem KPIs — ver `tasks.md`) e `Parceiros`, com badge de contagem de `pending_review`. Não construir as restantes secções (Casais, Reservas, Pagamentos, ...) enquanto não tiverem dados reais por trás — ver `README.md` raiz de `admin-web/` (a criar quando um segundo módulo justificar a navegação partilhada).

### Ecrã: `/partners/:id` (detalhe)

```
┌────────────────────────────────────────────────────────┐
│ ← Parceiros                                              │
│                                                            │
│ Estúdio Luz & Sombra                        🟡 Pendente   │
│ Fotografia · Lisboa                                       │
│                                                            │
│ ── Negócio ──────────────────────────────────────────────│
│ Nome comercial   Estúdio Luz & Sombra                     │
│ Tipo             Individual                                │
│ Descrição        "Fotografia de casamento com mais..."    │
│ Categorias       Fotografia                                │
│ Área de atuação  Lisboa, Sintra, Cascais                   │
│ Website          —                                          │
│ Submetido em      13 Mai 2026, 10:03                       │
│                                                            │
│ ── Dados fiscais (só admin) ───────────────────────────────│
│ NIF               123456789                                │
│ Morada de faturação  Rua das Flores, 10, Lisboa            │
│                                                            │
│ ── Portefólio (3) ─────────────────────────────────────────│
│ [img] [img] [img]                                          │
│                                                            │
│ ── Histórico ──────────────────────────────────────────────│
│ 13 Mai 10:03 — Submetido para revisão                      │
│                                                            │
│              [ Rejeitar ]        [ Aprovar ]               │
└────────────────────────────────────────────────────────┘
```

Quando `status = published`: os botões mudam para `[ Suspender ]`; quando `status = suspended`: `[ Restaurar ]`. Nunca mais do que as ações válidas para o estado atual (RN03/RN05 de `requirements.md`) — evita que o admin tente uma transição inválida em vez de a Edge Function ter de rejeitar silenciosamente.

### Modal: Rejeitar / Suspender

```
┌──────────────────────────────┐
│  Rejeitar perfil               │
│                                │
│  Motivo (visível ao parceiro) │
│  [____________________]       │
│  [____________________]       │
│                                │
│      [Cancelar]  [Confirmar]  │
└──────────────────────────────┘
```

Mesmo componente para Suspender, só muda o título e a nota "visível ao parceiro" (a suspensão também deve ser explicada ao parceiro, mesmo que o motivo não vá para `rejection_reason` — ver RN04).

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `AdminSidebar` | Navegação lateral fixa, colapsável, com badges de contagem | Todos os ecrãs `admin-web/` futuros |
| `PartnerStatusBadge` | Pastilha de estado (pendente/publicado/rejeitado/suspenso) — mesma paleta e regra de `alpha: 0.15` de fundo que `ProfileStatusBanner` em `partner-app/shared`, ver `mobile-app/shared/design-system.md` | Lista, detalhe |
| `PartnersTable` | Tabela com colunas Parceiro/Categoria/Local/Estado, ordenável, paginada | `/partners` |
| `PartnerReviewCard` | Bloco de secção (Negócio / Fiscal / Portefólio / Histórico) do ecrã de detalhe | `/partners/:id` |
| `ReasonModal` | Modal de texto livre obrigatório, reutilizado por Rejeitar e Suspender | `/partners/:id` |
| `AuditLogTimeline` | Lista cronológica de entradas de `audit_logs` para um `target_id` | `/partners/:id`, futuros ecrãs de detalhe admin |

Reutilizados de `mobile-app/shared/components.md` como referência de tom (cores de estado, cards, tipografia) — não como componentes Flutter partilhados, já que `admin-web/` é uma stack web separada (ver `dependencies.md`).
