# Roadmap — Copo d'Água

## Forma de trabalhar

Desenvolvemos **um módulo de cada vez**, nunca em paralelo, seguindo sempre a mesma sequência: Objetivo → Funcionalidades → Regras de negócio → Fluxo → Wireframe → Componentes UI → Modelo de dados → API → Estados → Validações → Casos limite → Critérios de aceitação → Testes → Backlog técnico → Melhorias futuras.

## Legenda de estado

- ✅ Documentado e completo
- 🔄 Em progresso
- ⏳ Por iniciar
- 🧊 Fora do MVP (futuro)

## Nota de terminologia

"Parceiro" é usado no produto com **dois significados distintos**, uma decisão consciente tomada a 2026-08-14 ao renomear "Fornecedor" para "Parceiro":

1. **Parceiro = a pessoa com quem o utilizador casa** (`Wedding.partnerName1`/`partnerName2`, passo de onboarding "Sobre o/a parceiro/a"). Este uso já existia antes e está documentado e testado em `mobile-app/onboarding/` e `mobile-app/wedding/`.
2. **Parceiro = prestador de serviços no marketplace** (`UserRole.partner`, `partner-app/`, `partner_profiles`). Este é o novo uso, que substituiu "Fornecedor".

A ambiguidade foi assumida deliberadamente (ver conversa de 2026-08-14) em vez de reverter ou escolher outro termo. Ao escrever UI copy ou documentação nova, desambiguar pelo contexto imediato ("o teu parceiro/a" vs. "parceiros no Marketplace") e evitar frases onde os dois sentidos possam colidir na mesma frase.

## Ordem de dependências (visão de arquiteto)

```
Authentication ✅
  └── Wedding (entidade central / tenant)
        ├── Onboarding
        ├── Guests → RSVP → Seating Plan
        ├── Checklist
        ├── Budget
        └── Marketplace
              ├── Partner Profile
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
| Partner Profile | ⏳ | `mobile-app/partner-profile/` |
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

### Partner App
| Módulo | Estado | Localização |
|---|---|---|
| Dashboard (parceiro) | ⏳ | `partner-app/dashboard/` |
| Calendar | ⏳ | `partner-app/calendar/` |
| Bookings | ⏳ | `partner-app/bookings/` |
| Quotations | ⏳ | `partner-app/quotations/` |
| Chat | ⏳ | `partner-app/chat/` |
| Contracts | ⏳ | `partner-app/contracts/` |
| Payouts | ⏳ | `partner-app/payouts/` |
| Analytics | ⏳ | `partner-app/analytics/` |
| Profile | ✅ | `partner-app/profile/` |

### Admin Web
| Módulo | Estado | Localização |
|---|---|---|
| Dashboard | ⏳ | `admin-web/dashboard/` |
| Users | ⏳ | `admin-web/users/` |
| Weddings | ⏳ | `admin-web/weddings/` |
| Partners | ⏳ | `admin-web/partners/` |
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
| `database/tests/rls_test_suite.sql` (T12–T21, Profile) | ⏳ | Testes escritos, ainda não corridos contra Postgres real — sem `psql`/Docker disponíveis na sessão em que foram escritos. Ver `database/README.md`. |

## Marco: implementação e testes da fundação

Depois de documentar Authentication, Onboarding, Wedding e Guests, o schema SQL destes 4 módulos foi implementado e testado contra um Postgres 16 real (não simulado) — ver `database/README.md` e `docs/architecture/TESTING_NOTES.md`. Resultado: 11/11 testes de RLS a passar, com 2 bugs reais corrigidos (policy de INSERT em falta em `weddings`; nota sobre GRANTs de tabela necessários em produção). A app Flutter e a ligação a um Supabase real ainda não foram testadas (fora do alcance deste ambiente de trabalho).

## Próximo módulo sugerido

Com Authentication, Onboarding, Wedding e Guests concluídos, sugestões por ordem de dependência natural:
- **Seating Plan** — depende diretamente de Guests (usa a lista de confirmados) e fecha o ciclo de "organização social" do casamento.
- **Budget** — já pode começar a refletir dados de Guests (nº de confirmados) para estimativas de custo por convidado.
- **Marketplace** — se preferires validar primeiro o lado da receita (parceiros), já que é o motor do modelo de negócio.

`partner-app/profile/` foi documentado (2026-08-14) como primeiro módulo do lado do parceiro — é a base de dados que o Marketplace, `mobile-app/partner-profile/` e o resto da partner-app vão consumir. Bloqueio identificado para produção: `admin-web/partners/` ainda não existe, e sem essa vista nenhum perfil sai de `pending_review` (ver `partner-app/profile/tasks.md`). Sugestões por ordem de dependência natural a partir daqui:
- **`admin-web/partners/`** (mínimo viável: listar + aprovar/rejeitar) — desbloqueia testar o ciclo de vida completo do Profile ponta a ponta.
- **`partner-app/quotations/`** — primeiro módulo de valor real para o parceiro (receber pedidos), já pode ser desenhado assumindo um `partner_profiles.status = published`.
- Correr `database/tests/rls_test_suite.sql` (T12–T21) contra Postgres real assim que houver `psql`/Docker disponível, para fechar a verificação de Profile ao mesmo nível dos módulos anteriores.
