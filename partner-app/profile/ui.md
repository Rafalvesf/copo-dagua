# Profile (partner-app) — UI

## Wireframes textuais

### Ecrã: Wizard — Passo 2/6 (Categorias)
```
┌───────────────────────────┐
│  ← Voltar         2 / 6    │
│  ▓▓▓▓▓▓░░░░░░░░░░░░░░░░    │
│                            │
│  "Que serviços ofereces?"  │
│  "Escolhe até 5"           │
│                            │
│  [📷 Fotografia] [🎥 Vídeo] │
│  [🏛 Espaço] [🍽 Catering]  │
│  [🎵 Música/DJ] [💐 Flores] │
│  [📋 Wedding Planner]      │
│  [🚗 Transporte] ...       │
│                            │
│  (chips selecionados       │
│   ficam preenchidos)       │
│                            │
│            [ Seguinte → ]  │
└───────────────────────────┘
```

### Ecrã: Wizard — Passo 4/6 (Portefólio)
```
┌───────────────────────────┐
│  ← Voltar         4 / 6    │
│  ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░    │
│                            │
│  "Mostra o teu trabalho"   │
│  "Mínimo 3 fotos"          │
│                            │
│  ┌────┐┌────┐┌────┐        │
│  │ ★  ││    ││    │        │
│  │capa││    ││    │        │
│  └────┘└────┘└────┘        │
│  ┌────┐ [ + Adicionar ]    │
│  │    │                    │
│  └────┘                    │
│                            │
│  2/3 mínimo — falta 1      │
│            [ Seguinte → ]  │
└───────────────────────────┘
```

### Ecrã: Perfil em revisão
```
┌───────────────────────────┐
│                            │
│         🕓                │
│  "O teu perfil está        │
│   em revisão"               │
│  "Costuma demorar até       │
│   2 dias úteis."            │
│                            │
│  [ Ver pré-visualização ]  │
│  [ Editar perfil ]         │
│                            │
└───────────────────────────┘
```

### Ecrã: Perfil rejeitado
```
┌───────────────────────────┐
│  ⚠️  Perfil rejeitado       │
│                            │
│  Motivo:                   │
│  "As fotos de portefólio    │
│   têm marca de água de      │
│   outra plataforma."        │
│                            │
│  [ Corrigir e re-submeter ]│
│                            │
└───────────────────────────┘
```

### Ecrã: Editar perfil (hub de secções, pós-publicação)
```
┌───────────────────────────┐
│  Perfil            ✓ Ativo │
│                            │
│  [ Foto de capa ]           │
│  Estúdio Luz & Sombra       │
│  📷 Fotografia  🎥 Vídeo    │
│  📍 Lisboa, Sintra, Cascais │
│                            │
│  ─── Secções ───            │
│  Negócio                 › │
│  Categorias               › │
│  Área de atuação          › │
│  Portefólio (12)          › │
│  Preços                   › │
│  Dados fiscais             › │
│                            │
│  Visibilidade no Marketplace│
│  [ Perfil pausado    ⚪──]  │
│                            │
└───────────────────────────┘
```

### Componente: Banner de estado do perfil
```
┌───────────────────────────┐
│ 🟡 Em revisão               │   (pending_review)
│ 🟢 Publicado                │   (published)
│ 🔴 Rejeitado — ver motivo   │   (rejected)
│ ⚫ Suspenso — contactar suporte│ (suspended)
│ ⏸ Pausado                   │   (published + is_paused)
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `ProfileStatusBanner` | Faixa de estado (revisão/publicado/rejeitado/suspenso/pausado), cor e CTA conforme o estado | Dashboard, Perfil |
| `WizardProgressBar` | Barra de progresso "passo X/6" com validação por passo | Wizard de configuração |
| `CategoryChipPicker` | Grelha de chips multi-seleção com limite (1–5) e contador | Wizard, Editar categorias |
| `ServiceAreaPicker` | Seletor de distritos/concelhos com toggle "âmbito nacional" | Wizard, Editar área |
| `PortfolioGrid` | Grelha de imagens com drag-to-reorder, marcação de capa, botão remover | Wizard, Editar portefólio |
| `PriceByCategoryInput` | Lista de inputs "a partir de ___€" gerada dinamicamente pelas categorias selecionadas | Wizard, Editar preços |
| `NifInput` | Campo de NIF com validação de checksum em tempo real (ver `validations.md`) | Wizard, Dados fiscais |
| `RejectionReasonCard` | Cartão de destaque com o motivo de rejeição do administrador | Ecrã de perfil rejeitado |
| `VisibilityToggle` | Switch "Perfil pausado" com texto explicativo do efeito imediato | Editar perfil |

Reutilizados de módulos anteriores: `PrimaryButton`, `ErrorBanner`, `LoadingSpinner` (Authentication); `LocationAutocomplete` (Onboarding, base para `ServiceAreaPicker`); padrão de upload de imagem a alinhar com `mobile-app/shared/components.md` (avatar/capa já usados em Wedding).
