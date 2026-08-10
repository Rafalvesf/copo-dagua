# Onboarding — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Implementar `create-supplier-profile-draft` e `complete-*-onboarding` como Edge Functions | Alta | Bloqueia todo o módulo |
| Fila de curadoria em `admin-web/moderation/` para `supplier_profile.status = pending_review` | Alta | Sem isto, fornecedores ficam presos em `pending_review` indefinidamente |
| Serviço de autocomplete de localização (Google Places API ou equivalente) | Média | Necessário para `LocationAutocomplete` |
| Validação de checksum de NIF português (algoritmo local) | Média | Simples, sem dependência externa |
| Compressão/otimização de imagens no upload de portefólio | Média | Custo de storage a médio prazo |

## Melhorias futuras

- Onboarding assistido por IA — sugestão automática de orçamento com base em localização e nº de convidados.
- Import de convidados via contactos do telemóvel durante o onboarding.
- Onboarding progressivo real para Fornecedores — publicar com perfil "básico" e completar portefólio depois.
- A/B testing da ordem dos passos — validar impacto na taxa de conclusão.
