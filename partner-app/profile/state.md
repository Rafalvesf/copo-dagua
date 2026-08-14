# Profile (partner-app) — Estados da Aplicação

## Ciclo de vida do perfil (`partner_profiles.status`)

```
draft ──(submit-partner-profile-for-review, completude OK)──▶ pending_review
draft ──(campos incompletos)──▶ draft (permanece, erro devolvido)

pending_review ──(approve-partner-profile)──▶ published
pending_review ──(reject-partner-profile + motivo)──▶ rejected

rejected ──(corrigir + re-submeter)──▶ pending_review

published ──(editar campo crítico: nome/NIF/categorias)──▶ pending_review
published ──(admin: suspend)──▶ suspended
published ──(is_paused = true, não muda status)──▶ published (pausado)

suspended ──(admin: reativar, fora de âmbito deste módulo — ver admin-web/partners/)──▶ published
```

`is_paused` é ortogonal ao `status` — só tem efeito quando `status = published` (ver RN10). Não existe transição de volta de `suspended` iniciada pelo próprio parceiro.

## Estado do wizard de configuração (Flutter)

```
ProfileWizardState
├── step: 1..6
├── loading
├── data
│   ├── businessInfo
│   ├── selectedCategories: List<CategoryId>   (0 a 5)
│   ├── serviceAreas: List<String> | nationwide: bool
│   ├── portfolioItems: List<PortfolioItem>
│   ├── pricesByCategory: Map<CategoryId, double>
│   └── verification: { nif, billingAddress, phone, ... }
├── stepValidation: Map<int, bool>             (por passo, para desbloquear "Seguinte")
├── submitting
├── submitError
│   ├── incompleteFields: List<String>
│   ├── invalidNif
│   └── networkError
```

## Estado do ecrã de perfil (pós-wizard)

```
ProfileScreenState
├── loading
├── loaded
│   ├── profile: PartnerProfile
│   ├── status: ProfileStatus
│   ├── isOwnerViewing: bool                   (true na partner-app; false quando reaproveitado por mobile-app/partner-profile)
│   └── rejectionReason: String?
├── editingSection: ProfileSection?            (Negócio | Categorias | Área | Portefólio | Preços | Fiscal)
├── saving
├── criticalEditConfirmPending                 (aviso RN08 antes de gravar campo crítico)
└── error
    ├── validationError
    └── networkError
```

## Contexto transversal

Este módulo não introduz um contexto global equivalente ao `ActiveWeddingContext` de Wedding — um parceiro tem exatamente um perfil (RN02), pelo que `PartnerProfileContext.partnerId` é sempre `auth.uid()`, sem seletor. Módulos seguintes da partner-app (Quotations, Bookings, Dashboard) devem, no entanto, ler `ProfileScreenState.status` para decidir se mostram o conteúdo normal ou um banner de bloqueio (perfil ainda não `published`) — ver `dependencies.md`.
