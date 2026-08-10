# Roadmap — Copo d'Água

## Forma de trabalhar

Desenvolvemos **um módulo de cada vez**, nunca em paralelo, seguindo sempre a mesma sequência: Objetivo → Funcionalidades → Regras de negócio → Fluxo → Wireframe → Componentes UI → Modelo de dados → API → Estados → Validações → Casos limite → Critérios de aceitação → Testes → Backlog técnico → Melhorias futuras.

## Legenda de estado

- ✅ Documentado e completo
- 🔄 Em progresso
- ⏳ Por iniciar
- 🧊 Fora do MVP (futuro)

## Ordem de dependências (visão de arquiteto)

```
Authentication ✅
  └── Wedding (entidade central / tenant)
        ├── Onboarding
        ├── Guests → RSVP → Seating Plan
        ├── Checklist
        ├── Budget
        └── Marketplace
              ├── Supplier Profile
              ├── Quotations
              ├── Bookings
              ├── Contracts
              ├── Payments (Stripe Connect)
              └── Chat (transversal, ligado a Quotations/Contracts/Payments)
                    └── Notifications (transversal)
```

`Calendar`, `Profile` e `Settings` são transversais e podem ser desenvolvidos em paralelo com módulos de negócio, mas ainda assim um de cada vez.

## Estado dos módulos

### Fundação
| Módulo | Estado | Localização |
|---|---|---|
| Authentication | ✅ | `backend/auth/` |
| Onboarding | ✅ | `mobile-app/onboarding/` |
| Wedding | ✅ | `mobile-app/wedding/` |
| Dashboard | ⏳ | `mobile-app/dashboard/` |

### Organização do casamento
| Módulo | Estado | Localização |
|---|---|---|
| Guests | ✅ | `mobile-app/guests/` |
| RSVP | ✅ | `mobile-app/guests/` (integrado, ver requirements.md) |
| Seating Plan | ⏳ | `mobile-app/seating/` |
| Checklist | 🔄 | `mobile-app/checklist/` — implementado em mock na app, documentação formal por escrever |
| Budget | ⏳ | `mobile-app/budget/` |
| Calendar | ⏳ | `mobile-app/shared/` ou módulo próprio (a decidir) |

### Marketplace e transação
| Módulo | Estado | Localização |
|---|---|---|
| Marketplace | ⏳ | `mobile-app/marketplace/` |
| Supplier Profile | ⏳ | `mobile-app/supplier-profile/` |
| Quotations | ⏳ | `mobile-app/quotations/` |
| Bookings | ⏳ | `mobile-app/bookings/` |
| Contracts | ⏳ | `mobile-app/contracts/` |
| Payments | ⏳ | `mobile-app/payments/` |

### Comunicação
| Módulo | Estado | Localização |
|---|---|---|
| Chat | ⏳ | `mobile-app/chat/` |
| Notifications | ⏳ | `mobile-app/notifications/` |

### Conta e definições
| Módulo | Estado | Localização |
|---|---|---|
| Profile | ⏳ | `mobile-app/profile/` |
| Settings | ⏳ | `mobile-app/settings/` |

### Supplier App
| Módulo | Estado | Localização |
|---|---|---|
| Dashboard (fornecedor) | ⏳ | `supplier-app/dashboard/` |
| Calendar | ⏳ | `supplier-app/calendar/` |
| Bookings | ⏳ | `supplier-app/bookings/` |
| Quotations | ⏳ | `supplier-app/quotations/` |
| Chat | ⏳ | `supplier-app/chat/` |
| Contracts | ⏳ | `supplier-app/contracts/` |
| Payouts | ⏳ | `supplier-app/payouts/` |
| Analytics | ⏳ | `supplier-app/analytics/` |
| Profile | ⏳ | `supplier-app/profile/` |

### Admin Web
| Módulo | Estado | Localização |
|---|---|---|
| Dashboard | ⏳ | `admin-web/dashboard/` |
| Users | ⏳ | `admin-web/users/` |
| Weddings | ⏳ | `admin-web/weddings/` |
| Suppliers | ⏳ | `admin-web/suppliers/` |
| Categories | ⏳ | `admin-web/categories/` |
| Payments | ⏳ | `admin-web/payments/` |
| Commissions | ⏳ | `admin-web/commissions/` |
| Disputes | ⏳ | `admin-web/disputes/` |
| Support | ⏳ | `admin-web/support/` |
| Moderation | ⏳ | `admin-web/moderation/` |
| Analytics | ⏳ | `admin-web/analytics/` |
| Settings | ⏳ | `admin-web/settings/` |

## Documentação transversal pendente

| Documento | Estado | Nota |
|---|---|---|
| `docs/architecture/RLS_POLICY.md` | ⏳ | Padrão de `is_admin()` e RLS reutilizável, identificado durante Authentication |
| `docs/architecture/TESTING_NOTES.md` | ✅ | Schema dos 4 módulos da fundação testado contra Postgres real — 11/11 testes de RLS a passar, 2 bugs reais encontrados e corrigidos |
| `mobile-app/shared/design-system.md` | ⏳ | Bloqueia velocidade dos módulos seguintes — recomenda-se priorizar cedo |
| `database/erd.md` | ⏳ | Deve começar a ganhar forma a partir do módulo Wedding |
| `mobile-app/payments/stripe-connect.md` | ⏳ | Decisão de arquitetura crítica (Standard vs Express, escrow vs destination charge) |

## Marco: implementação e testes da fundação

Depois de documentar Authentication, Onboarding, Wedding e Guests, o schema SQL destes 4 módulos foi implementado e testado contra um Postgres 16 real (não simulado) — ver `database/README.md` e `docs/architecture/TESTING_NOTES.md`. Resultado: 11/11 testes de RLS a passar, com 2 bugs reais corrigidos (policy de INSERT em falta em `weddings`; nota sobre GRANTs de tabela necessários em produção). A app Flutter e a ligação a um Supabase real ainda não foram testadas (fora do alcance deste ambiente de trabalho).

## Próximo módulo sugerido

Com Authentication, Onboarding, Wedding e Guests concluídos, sugestões por ordem de dependência natural:
- **Seating Plan** — depende diretamente de Guests (usa a lista de confirmados) e fecha o ciclo de "organização social" do casamento.
- **Budget** — já pode começar a refletir dados de Guests (nº de confirmados) para estimativas de custo por convidado.
- **Marketplace** — se preferires validar primeiro o lado da receita (fornecedores), já que é o motor do modelo de negócio.
