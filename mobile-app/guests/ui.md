# Guests — UI

## Wireframes textuais

### Ecrã: Lista de convidados (casal)
```
┌───────────────────────────┐
│  ← Voltar        🔍        │
│                            │
│  128 convidados             │
│  ✅ 64  ⏳ 52  ❌ 12       │
│                            │
│  [Todos][Confirm.][Pend.][Recus.]│
│                            │
│  👤 Rita Almeida    ✅     │
│     Família noiva            │
│  👤 Carlos Ferreira  ⏳    │
│     Amigos                  │
│  👤 Sofia Martins    ❌    │
│     Trabalho                 │
│                            │
│  [ + Adicionar convidado ] │
└───────────────────────────┘
```

### Ecrã: Adicionar/editar convidado
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  Nome                      │
│  [_______________________]│
│  Email                     │
│  [_______________________]│
│  Telefone                  │
│  [_______________________]│
│  Grupo                     │
│  [_______________________]│
│  Lado: ( ) Noivo ( ) Noiva │
│        ( ) Ambos            │
│  Relação: [Família ▾]      │
│  Acompanhantes permitidos  │
│  [ - ]   1   [ + ]         │
│                            │
│  [   Guardar   ]           │
└───────────────────────────┘
```

### Wizard de RSVP (convidado, dentro da app — 1º acesso)

```
┌───────────────────────────┐        ┌───────────────────────────┐
│   Inês & Miguel vão casar 💍│        │  Vamos sentir a tua       │
│   Vais estar connosco      │        │  falta 🤍                 │
│   neste dia?               │        │  Obrigado por nos dizeres.│
│                            │        │  Continuas a fazer parte  │
│  [ ✓ Sim, vou ]            │  ───▶  │  deste momento.           │
│  [ ✕ Não vou poder ir ]    │  "Não" │                            │
│                            │        │  [ Entrar no casamento → ]│
└───────────────────────────┘        └───────────────────────────┘
        │ "Sim"
        ▼
┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐
│  Quem vem contigo?         │   │  De que lado vens?         │   │  Como nos conhecemos?      │
│                            │   │                            │   │                            │
│  [ Vou sozinho ]           │──▶│  [ 👰 Noiva ]              │──▶│  [Família][Amigos][Trabalho]│
│  [+ Adicionar acompanhante]│   │  [ 🤵 Noivo ]              │   │  [Faculdade][Outro]        │
│    Nome do acompanhante    │   │  [ 💍 Ambos ]              │   │                            │
│  [+ Adicionar outro]       │   │  (pré-preenchido pelo casal)│  │  (pré-preenchido pelo casal)│
└───────────────────────────┘   └───────────────────────────┘   └───────────────────────────┘
                                                                          │
                                                                          ▼
┌───────────────────────────┐   ┌───────────────────────────┐
│  🍽️ João Silva              │   │  Está tudo pronto! 🎉       │
│  [Carne][Peixe][Vegetariano]│   │                            │
│  [Outro]                   │   │  Presença: ✓ Confirmada    │
│  Alergias/intolerâncias?   │──▶│  Convidados: João, Maria   │
│  [ Não tenho ]              │   │  Relação: Família · Noiva  │
│  [+ Adicionar]              │   │  Ementa: João — Carne       │
│  (repete para cada          │   │          Maria — Vegetariano│
│   acompanhante)             │   │                            │
└───────────────────────────┘   │  [ Confirmar informações ] │
                                 │  [ Entrar no casamento → ] │
                                 └───────────────────────────┘
```

### Detalhe de resposta (casal)
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  Rita Almeida        ✅    │
│  Confirmou presença         │
│  Família · Noiva            │
│                            │
│  Rita — Vegetariana         │
│  + João (acompanhante)      │
│    Carne · Sem intolerâncias│
│                            │
│  💬 "Mal posso esperar!"    │
│                            │
│  [ Editar ]  [ Remover ]    │
└───────────────────────────┘
```

### "O meu perfil" (convidado, depois do wizard)
```
┌───────────────────────────┐
│  O meu perfil               │
│                            │
│  Presença: ✓ Confirmada    │
│  [ Alterar RSVP ]          │
│                            │
│  Acompanhantes  [ Editar ] │
│  Menu           [ Editar ] │
│  Alergias       [ Editar ] │
│  A tua mesa      Mesa 5    │
│                            │
│  Histórico                 │
│  ✓ Presença confirmada     │
│  + Maria adicionada         │
│  🍽️ Menu Carne selecionado  │
│  ⚠️ Intolerância à lactose  │
│     adicionada para Maria   │
│  🎁 Presente enviado        │
│  📷 4 fotografias adicionadas│
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `GuestListItem` | Linha de convidado com badge de estado RSVP | Lista de convidados |
| `RsvpStatusFilterTabs` | Tabs de filtro (Todos/Confirmados/Pendentes/Recusados) | Guests, futuramente Seating |
| `GuestFormSheet` | Formulário de adicionar/editar convidado (com lado, relação e nº de acompanhantes) | Guests |
| `RsvpSummaryBar` | Barra com contagem agregada (✅/⏳/❌) | Guests, Dashboard |
| `RsvpGateStep` | Ecrã "Vais estar connosco?" (Sim/Não), primeiro do wizard | Wizard de RSVP |
| `CompanionListEditor` | Adicionar/remover acompanhantes, respeitando `companions_limit` | Wizard de RSVP, Perfil |
| `PerPersonMenuStep` | Um ecrã de menu + alergias por pessoa (convidado ou acompanhante) | Wizard de RSVP, Perfil |
| `RsvpSummaryCard` | Resumo final antes de confirmar (presença, convidados, relação, ementa) | Wizard de RSVP |
| `GuestActivityTimeline` | Lista de eventos (`guest_rsvp_events`) no Perfil do convidado | Perfil do convidado |

Reutilizados de módulos anteriores: `PrimaryButton`, `AuthTextField`, `LoadingOverlay` (Authentication), `StepProgressBar`, `WizardFooter` (Onboarding).

**Nota de arquiteto:** o wizard vive dentro do binário Flutter mobile (o convidado já está autenticado quando o vê) — ao contrário da versão anterior desta spec, não precisa de nenhuma superfície web separada. `InvitePageScreen` continua a ser a única peça pública (pré-login), e só encaminha para o registo.
