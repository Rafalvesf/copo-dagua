# Partners (admin-web) — Estados da Aplicação

## Ciclo de vida consumido (não gerido por este módulo — ver `partner-app/profile/state.md`)

```
pending_review ──(approve-partner-profile)──▶ published
pending_review ──(reject-partner-profile + motivo)──▶ rejected

published ──(suspend-partner-profile + motivo)──▶ suspended
suspended ──(restore-partner-profile)──▶ published
```

`draft` e a transição `rejected → pending_review` (re-submissão) são geridas inteiramente pelo parceiro em `partner-app/profile/` — este módulo só lê esses estados, nunca os produz.

## Estado do ecrã de lista

```
PartnersListState
├── loading
├── loaded
│   ├── partners: List<PartnerListItem>
│   ├── statusFilter: PartnerStatus (default: pending_review)
│   └── searchQuery: String
└── error
    └── networkError
```

## Estado do ecrã de detalhe

```
PartnerDetailState
├── loading
├── loaded
│   ├── profile: PartnerProfile
│   ├── verification: PartnerVerification
│   ├── categories, portfolio
│   └── auditHistory: List<AuditLogEntry>
├── actionPending: 'approve' | 'reject' | 'suspend' | 'restore' | null
├── reasonModalOpen: 'reject' | 'suspend' | null
└── error
    ├── invalidState        (outro admin já decidiu entretanto — ver edge-cases.md)
    ├── validationError      (motivo vazio)
    └── networkError
```

`actionPending` bloqueia os botões durante a chamada à Edge Function — nenhuma atualização otimista do `status` no cliente; o ecrã só reflete o novo estado depois da resposta confirmar sucesso (ver `user-flow.md`, "Falha de ação").

## Ações disponíveis por estado (deriva `PartnerDetailState.loaded.profile.status`)

| `status` | Ações visíveis |
|---|---|
| `pending_review` | Aprovar, Rejeitar |
| `published` | Suspender |
| `suspended` | Restaurar |
| `rejected` | Nenhuma (parceiro re-submete; admin só observa) |
| `draft` | N/A — nunca aparece na lista (RN02) |
