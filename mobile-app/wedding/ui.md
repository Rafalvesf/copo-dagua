# Wedding — UI

## Wireframes textuais

### Ecrã: Detalhes do casamento
```
┌───────────────────────────┐
│  ← Voltar        ⚙️        │
│                            │
│   [ Foto de capa ]         │
│                            │
│  Ana & Miguel               │
│  💍 12 de Setembro, 2026   │
│  📍 Sintra, Portugal        │
│                            │
│  ─── Editar detalhes ───   │
│  Nomes                     │
│  Data                      │
│  Localização                │
│  Local / Venue              │
│  Tipo de cerimónia          │
│                            │
│  [ Colaboradores ]          │
│                            │
└───────────────────────────┘
```

### Ecrã: Colaboradores
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  "Quem pode editar este    │
│   casamento?"               │
│                            │
│  👤 Ana Silva     [Dono]   │
│  👤 Miguel Costa  [Ativo]  │
│  ✉️ pedro@x.com   [Pendente]│
│                            │
│  [ + Convidar colaborador ] │
│                            │
└───────────────────────────┘
```

### Ecrã: Convite recebido
```
┌───────────────────────────┐
│                            │
│      💌                   │
│  "Ana convidou-te para     │
│   colaborar no casamento   │
│   de Ana & Miguel"          │
│                            │
│  [ Aceitar ]  [ Recusar ]  │
│                            │
└───────────────────────────┘
```

### Componente: Seletor de casamento (menu)
```
┌───────────────────────────┐
│  💍 Ana & Miguel      ✓    │  ← casamento ativo
│  💍 Sofia & João           │  ← colaborador noutro
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `WeddingCoverHeader` | Cabeçalho com foto de capa, nomes, data, localização | Dashboard, Detalhes do casamento |
| `CollaboratorListItem` | Linha de colaborador com badge de estado (Dono/Ativo/Pendente) | Colaboradores, futuramente Settings |
| `InviteCollaboratorSheet` | Bottom sheet para inserir email de convite | Colaboradores |
| `WeddingSwitcherMenu` | Dropdown/menu de alternância entre casamentos | Navegação global (topo da app) |
| `CountdownBadge` | Contagem decrescente até `wedding_date` | Dashboard |
| `DangerZoneSection` | Secção de ações destrutivas (eliminar, transferir propriedade) com confirmação reforçada | Settings, Wedding |

Reutilizados de módulos anteriores: `DatePickerField` e `LocationAutocomplete` (Onboarding), `PrimaryButton`, `ErrorBanner` (Authentication).
