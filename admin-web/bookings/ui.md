# Bookings (admin-web) — UI

```
┌────────────────────────────────────────────────────────┐
│ Reservas                                                   │
│                                                              │
│ [Pesquisar #WED-...] [Estado ▾: Todos]                       │
│                                                              │
│ Reserva    Casal          Parceiro            Data    Estado │
│ #WED-1042  Rita & Miguel  Estúdio Luz&Sombra  24 Ago  🟡     │
└────────────────────────────────────────────────────────┘
```

Detalhe (`/bookings/:id`): `Section`/`Field` reutilizados de `admin-web/partners/[id]`.

```
┌────────────────────────────────────────────┐
│ #WED-1042                       🟡 A aguardar sinal │
│                                                │
│ ⚠ As ações abaixo são um registo administrativo,  │
│   não processam pagamento real (sem Stripe ainda). │
│                                                │
│ ── Detalhe ──────────────────────────────────│
│ Casal            Rita & Miguel  →             │
│ Parceiro         Estúdio Luz & Sombra →       │
│ Valor total      1.250 €                      │
│ Sinal            250 €                        │
│ Janela expira em 01d 14h 32m                  │
│                                                │
│ ── Histórico ────────────────────────────────│
│ 13 Mai 18:44 — Reserva criada                 │
│                                                │
│      [ Confirmar sinal recebido ]              │
└────────────────────────────────────────────┘
```

Ao clicar, expande um formulário inline (mesmo padrão de `ReasonActionForm` em `admin-web/partners/ui.md`, generalizado para `AmountVerificationForm`):

```
┌──────────────────────────────────────────────┐
│ Valor recebido (€) — esperado: 100 €           │
│ [______]                                        │
│ O valor é cruzado automaticamente com o sinal    │
│ esperado — só avança se coincidir.               │
│                                                   │
│        [ Cancelar ]   [ Verificar e confirmar ]  │
└──────────────────────────────────────────────┘
```

O aviso "⚠ ... não processam pagamento real" é permanente, não um tooltip — visível sempre que há uma ação disponível, para nunca ser mal-interpretado como um checkout real.

## Componentes

| Componente | Descrição |
|---|---|
| `BookingStatusBadge` | Mesmo padrão de `PartnerStatusBadge`/`AccountStatusBadge`, cores para os 8 valores de `booking_status` |
| `BookingEventsTimeline` | Lista de `booking_events`, generalização de `AuditLogTimeline` (`admin-web/partners/ui.md`) para outra tabela de histórico |
| `AmountVerificationForm` | Formulário de valor com verificação cruzada (`components/ActionButtons.tsx`) — generalização de `ReasonActionForm` para um input numérico em vez de texto livre |
