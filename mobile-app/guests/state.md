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
├── sendingInvite
└── error
    ├── validationError
    └── networkError
```

## Lado do convidado (página pública)

```
PublicRsvpState
├── loadingInvite          (a validar token via get-rsvp-by-token)
├── invalidToken            (token não existe ou foi regenerado)
├── loaded
│   ├── coupleNames, weddingDate
│   └── currentResponse: RsvpResponse?   (se já respondeu antes, pré-preenche o formulário)
├── submitting
├── submitted
└── error
    ├── validationError
    ├── rateLimited
    └── networkError
```

`PublicRsvpState` é independente de `AuthState` (do módulo Authentication) — a página pública funciona inteiramente sem sessão.
