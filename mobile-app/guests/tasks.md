# Guests — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Implementar página pública de RSVP fora do binário mobile (web leve, ex: Next.js ou HTML estático servido via Supabase Edge) | Alta | Bloqueia todo o fluxo de RSVP do convidado — decisão de stack a validar com `docs/architecture/` |
| Rate limiting em `submit-rsvp` e `get-rsvp-by-token` | Alta | Única superfície pública da plataforma; risco de abuso sem esta proteção |
| Integração de envio de WhatsApp (Business API ou equivalente) | Média | Canal de convite preferido em Portugal, mais do que email para muitos casais |
| Integração de envio de SMS | Baixa | Canal de fallback, menos prioritário que WhatsApp |
| Exportação da lista de convidados (CSV/PDF) | Média | Útil para partilhar com fornecedores (ex: catering) — mas cuidado com GDPR, ver melhorias futuras |

## Melhorias futuras

- **Import de convidados via contactos do telemóvel** — já identificado como melhoria futura no módulo Onboarding; aqui é onde a funcionalidade viveria de facto.
- **Deduplicação assistida** — alertar o casal se dois convidados parecerem ser a mesma pessoa (nome + telefone semelhantes).
- **Exportação controlada para fornecedores** — permitir partilhar apenas a contagem/restrições alimentares com um fornecedor de catering via Chat, sem expor a lista completa de contactos (relevante para GDPR — os convidados não deram consentimento para os seus dados serem partilhados com terceiros).
- **Lembretes automáticos** — reenvio automático de convite a convidados que não responderam ao fim de X dias, com limite de lembretes para não ser intrusivo.
- **RSVP por família/grupo** — permitir a um convidado responder em nome de todo o seu grupo familiar de uma só vez, reduzindo o número de links a gerir para famílias grandes.
