# Authentication — Estados da Aplicação

```
AuthState
├── unauthenticated
├── authenticating          (loading durante login/signup)
├── authenticated
│   ├── emailUnverified
│   ├── onboardingIncomplete
│   └── active
├── error
│   ├── invalidCredentials
│   ├── accountLocked
│   ├── networkError
│   └── unknown
└── sessionExpired
```

## Gestão de estado

Sugerido: **Riverpod** (ou Bloc, a decidir no documento de arquitetura Flutter em `docs/architecture/`) com um `AuthStateNotifier` global, ouvido por um `router redirect` que decide para onde navegar em cada mudança de estado — evita lógica de navegação espalhada pelos ecrãs.
