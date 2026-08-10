# Onboarding — Estados da Aplicação

```
OnboardingState
├── loading                  (a verificar progresso existente)
├── inProgress
│   ├── step: <nome do passo atual>
│   └── draftData: {...}
├── submitting                (a criar wedding/supplier_profile)
├── completed
└── error
    ├── validationError
    ├── networkError
    └── uploadError            (falha no upload de fotos — fluxo Fornecedor)
```

Ao entrar no módulo, primeiro passo: verificar `onboarding_progress`. Se existir registo incompleto, retomar em `current_step`; caso contrário, iniciar do passo 1.
