# Authentication — UI

## Wireframes textuais

### Ecrã: Bem-vindo
```
┌───────────────────────────┐
│                            │
│      [Logo Copo d'Água]   │
│                            │
│   "O teu casamento,        │
│    num só lugar"           │
│                            │
│  [ Entrar ]                │
│  [ Criar conta ]           │
│                            │
└───────────────────────────┘
```

### Ecrã: Escolher papel
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  "Como te vamos ajudar?"  │
│                            │
│  ┌──────────────────────┐ │
│  │ 💍 Vou casar-me       │ │
│  └──────────────────────┘ │
│  ┌──────────────────────┐ │
│  │ 🧑‍💼 Sou fornecedor    │ │
│  └──────────────────────┘ │
│                            │
└───────────────────────────┘
```

### Ecrã: Registo
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  Nome completo             │
│  [_______________________]│
│  Email                     │
│  [_______________________]│
│  Password                  │
│  [_______________________]│
│  ⓘ Mín. 8 caracteres,      │
│    1 letra e 1 número      │
│                            │
│  ☐ Aceito os Termos e a    │
│    Política de Privacidade │
│                            │
│  [   Criar conta   ]       │
│                            │
│  ──── ou ────              │
│  [ Continuar com Google ]  │
│  [ Continuar com Apple  ]  │
│                            │
└───────────────────────────┘
```

### Ecrã: Verifica o teu email
```
┌───────────────────────────┐
│                            │
│     [Ícone de envelope]   │
│                            │
│  "Enviámos um link para   │
│   nome@email.com"          │
│                            │
│  [ Reenviar email ]        │
│  (disponível em 60s)       │
│                            │
│  [ Já verifiquei ]         │
│                            │
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `AuthTextField` | Input com label flutuante, validação inline, estado de erro | Todos os formulários da app |
| `PasswordField` | Variante de `AuthTextField` com toggle mostrar/ocultar | Registo, Login, Reset |
| `RoleSelectorCard` | Cartão selecionável grande (papel: Noivo/Fornecedor) | Registo, futuramente em multi-perfil |
| `PrimaryButton` | Botão principal, estado loading incluído | Toda a app |
| `SocialLoginButton` | Botão OAuth com ícone da provider | Login, Registo |
| `ErrorBanner` | Faixa de erro inline (não bloqueia layout) | Toda a app |
| `PersistentWarningBanner` | Banner fixo topo (ex: "email não verificado") | Dashboard, todos os ecrãs pós-login |
| `OTPInput` | Input de 6 dígitos para MFA | Login (admins), reset avançado |
| `LoadingOverlay` | Overlay de carregamento em ações assíncronas | Toda a app |

**Nota de design system:** todos estes componentes devem entrar no pacote Flutter interno `mobile-app/shared/` (ver `components.md` e `design-system.md`) desde o início — vão ser reutilizados por praticamente todos os módulos seguintes.
