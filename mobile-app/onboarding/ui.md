# Onboarding — UI

## Wireframes textuais

### Passo genérico
```
┌───────────────────────────┐
│  ← Voltar      ●●●○○○     │
│                            │
│  "Pergunta do passo"      │
│  Subtexto de apoio          │
│                            │
│  [   Campo/Input   ]       │
│                            │
│  [ Saltar ]   [ Continuar ]│
└───────────────────────────┘
```

### Ecrã final (Noivos)
```
┌───────────────────────────┐
│      🎉                   │
│  "Tudo pronto, [Nome]!"   │
│  "O vosso casamento já    │
│   tem um lugar só dele."   │
│  [ Ver o meu casamento ]   │
└───────────────────────────┘
```

### Ecrã final (Fornecedores)
```
┌───────────────────────────┐
│      ✅                   │
│  "Perfil criado!"          │
│  "Estamos a rever o teu    │
│   perfil. Normalmente leva │
│   até 24h a ficar visível." │
│  [ Ir para o dashboard ]   │
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `OnboardingStepScaffold` | Layout base de cada passo | Onboarding Noivos e Fornecedores |
| `StepProgressBar` | Indicador visual de passos | Wizards em geral |
| `DatePickerField` | Seletor de data com "ainda não sei" | Checklist, Bookings |
| `CategoryMultiSelectGrid` | Grelha multi-seleção de categorias | Marketplace, Supplier Profile |
| `LocationAutocomplete` | Campo de localização com sugestões | Wedding, Marketplace |
| `ImageUploadGrid` | Grelha de upload com preview | Supplier Profile, Chat |
| `SkipOrContinueFooter` | Footer "Saltar"/"Continuar" | Todos os passos opcionais |
| `NIFInputField` | Campo com máscara e validação de checksum | Supplier onboarding, faturação |

Reutilizados de `backend/auth`: `AuthTextField`, `PrimaryButton`, `LoadingOverlay`.
