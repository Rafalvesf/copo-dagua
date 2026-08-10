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
│  ☐ Pode trazer acompanhante│
│                            │
│  [   Guardar   ]           │
└───────────────────────────┘
```

### Página pública de RSVP (web, sem app)
```
┌───────────────────────────┐
│                            │
│   💍 Ana & Miguel          │
│   12 de Setembro, 2026     │
│                            │
│   "Vais celebrar connosco?"│
│                            │
│   [   Vou!   ]              │
│   [ Não vou poder ir ]     │
│                            │
└───────────────────────────┘
```

### Detalhe de resposta (casal)
```
┌───────────────────────────┐
│  ← Voltar                 │
│                            │
│  Rita Almeida        ✅    │
│  Confirmou presença         │
│  + Acompanhante: João       │
│  🥗 Vegetariana              │
│  💬 "Mal posso esperar!"    │
│                            │
│  [ Reenviar convite ]       │
│  [ Editar ]  [ Remover ]    │
└───────────────────────────┘
```

## Componentes UI

| Componente | Descrição | Reutilizável em |
|---|---|---|
| `GuestListItem` | Linha de convidado com badge de estado RSVP | Lista de convidados |
| `RsvpStatusFilterTabs` | Tabs de filtro (Todos/Confirmados/Pendentes/Recusados) | Guests, futuramente Seating |
| `GuestFormSheet` | Formulário de adicionar/editar convidado | Guests |
| `RsvpSummaryBar` | Barra com contagem agregada (✅/⏳/❌) | Guests, Dashboard |
| `PublicRsvpCard` | Cartão da página pública de RSVP (fora do design system mobile, mas com a mesma identidade visual) | Página pública de RSVP |
| `SendInviteChannelPicker` | Seletor de canal de envio (Email/WhatsApp/SMS) | Guests |

Reutilizados de módulos anteriores: `PrimaryButton`, `AuthTextField`, `LoadingOverlay` (Authentication).

**Nota de arquiteto:** `PublicRsvpCard` não pode depender do `mobile-app/shared/design-system.md` compilado dentro do binário Flutter mobile — precisa de uma versão web-friendly (ver `tasks.md`).
