# Users (admin-web) — UI

```
┌────────────────────────────────────────────────────────┐
│ Utilizadores                                              │
│ Todas as contas da plataforma.                             │
│                                                              │
│ [Pesquisar...] [Papel ▾: Todos] [Estado ▾: Ativos]          │
│                                                              │
│ Nome            Papel      Email verificado   Estado        │
│ Ana Silva       Casal      ✓                  🟢 Ativo       │
│ Estúdio Luz&S.  Parceiro   ✓                  🟢 Ativo       │
│ Miguel Costa    Casal      —                  🟢 Ativo       │
└────────────────────────────────────────────────────────┘
```

Detalhe (`/users/:id`): mesma estrutura de secções que `admin-web/partners/[id]` (`Section`/`Field` reutilizados) — identidade, estado, link contextual (perfil de parceiro ou casamento), botão Suspender/Reativar.

## Componentes

Reutiliza `PartnerStatusBadge` generalizado para `AccountStatusBadge` (mesmo padrão de cor `alpha 0.15`), `ReasonActionForm`/`SimpleActionButton` de `admin-web/partners/[id]/action-buttons.tsx` (genéricos o suficiente para reutilizar diretamente, ver `dependencies.md`).
