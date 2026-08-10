# Wedding — Estados da Aplicação

## Ciclo de vida do casamento (`weddings.status`)

```
planning ──(manual ou cron D+1 após wedding_date)──▶ completed
planning ──(request-wedding-deletion)──▶ pending_deletion ──(30 dias)──▶ deleted
```

## Estado do ecrã (Flutter)

```
WeddingState
├── loading
├── loaded
│   ├── wedding: Wedding
│   ├── collaborators: List<Collaborator>
│   └── currentUserIsOwner: bool
├── saving                    (durante update-wedding-details)
├── invitingCollaborator
├── error
│   ├── validationError
│   ├── networkError
│   └── deletionBlocked        (contratos/pagamentos ativos)
```

## Estado de seleção de casamento (transversal, usado por toda a app)

```
ActiveWeddingContext
├── weddingId: uuid
├── role: 'owner' | 'collaborator'
└── availableWeddings: List<WeddingSummary>   (para o seletor, se > 1)
```

Este contexto é global — todos os módulos seguintes (Guests, Budget, Checklist, etc.) leem `ActiveWeddingContext.weddingId` para saber a que casamento aplicar as suas queries.
