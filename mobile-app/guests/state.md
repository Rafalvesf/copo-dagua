# Guests — Estados da Aplicação

## Lado do casal

```
GuestsState
├── loading
├── loaded
│   ├── guests: List<Guest>
│   ├── summary: { confirmed, pending, declined, totalSeats }
│   └── activeFilter: all | confirmed | pending | declined
├── savingGuest
└── error
    ├── validationError
    └── networkError
```

## Lado do convidado (wizard de RSVP, dentro da app, autenticado)

```
GuestRsvpWizardState
├── loading                 (a carregar a própria linha de `guests` via linked_profile_id)
├── unlinked                (sem correspondência automática por email — pede para preencher manualmente)
├── gate                    ("Vais estar connosco?" — Sim/Não)
├── declineThanks           (ecrã de agradecimento, sem mais perguntas)
├── companions
│   ├── list: List<{name}>
│   └── limit: int          (`companions_limit` desta linha de `guests`)
├── relation
│   ├── side: WeddingSide?          (pré-preenchido pelo casal, editável)
│   └── relationshipLabel: String?  (pré-preenchido pelo casal, editável)
├── menuPerPerson
│   ├── currentPersonIndex: int
│   └── entries: List<{name, menuChoice, dietaryRestrictions}>
├── summary                 (revê tudo antes de confirmar)
├── submitting
├── done                    (`rsvp_wizard_completed_at` gravado — entra na app)
└── error
    ├── validationError
    └── networkError
```

Reaberto a partir do Perfil ("Alterar RSVP") com os valores atuais pré-preenchidos em cada etapa (RN05/RN11, `requirements.md`) — o fluxo é o mesmo, só a entrada muda (gate mostra a resposta atual em vez de nenhuma).

`GuestRsvpWizardState` depende de `AuthState` (precisa de sessão) mas é independente de `GuestsState` (que é só do lado do casal).
