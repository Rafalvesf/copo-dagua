# Guests — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Implementar `070_guest_rsvp_wizard.sql` (`companions_limit`, `guest_companions`, `guest_rsvp_events`, `submit_own_rsvp`) | Alta | Bloqueia todo o wizard de RSVP inteligente descrito em `user-flow.md`/`ui.md` — ver `database.md` e `api.md` para o desenho já definido |
| Construir `GuestRsvpWizardScreen` (Flutter) e ligar como gate antes de `guest_home_screen.dart` quando `rsvp_wizard_completed_at is null` | Alta | Depende do item acima; reutiliza `StepProgressBar`/`WizardFooter` do Onboarding, ver `ui.md` |
| Adicionar "Alterar RSVP" ao `guest_profile_screen.dart`, reabrindo o wizard com valores atuais | Média | Depende dos dois itens acima |
| Integração de envio de WhatsApp (Business API ou equivalente) para partilhar o convite | Média | Canal preferido em Portugal; hoje o casal só copia o link/código manualmente |
| Integração de envio de SMS/email automático do convite | Baixa | Canal de fallback, menos prioritário que WhatsApp |
| Exportação da lista de convidados (CSV/PDF) | Média | Útil para partilhar com parceiros (ex: catering) — mas cuidado com GDPR, ver melhorias futuras |
| Rate limiting em `lookup_wedding_by_guest_code` | Média | Única função pública (`anon`) restante do módulo; um `guest_code` é mais previsível do que um UUID, vale a pena limitar tentativas por IP |

## Concluído ✅ (histórico)

- Conta de convidado (`UserRole.guest`), `guest_code` do casal e `join_wedding_by_code()` — `050_wedding_guest_code.sql`
- Ligação automática por email entre a conta e a linha de `guests` (`linked_profile_id`) — `067_guest_self_service.sql`
- Perfil do convidado (acompanhante, alergias, telefone, mesa) — `guest_profile_screen.dart`, `068_guest_table_roster.sql`
- Home do convidado (O Casamento / Presentes / Galeria / Perfil) e "Modo convidado" para contas de casal — `guest_home_screen.dart`, `guest_mode_screen.dart`

## Melhorias futuras

- **Import de convidados via contactos do telemóvel** — já identificado como melhoria futura no módulo Onboarding; aqui é onde a funcionalidade viveria de facto.
- **Deduplicação assistida** — alertar o casal se dois convidados parecerem ser a mesma pessoa (nome + telefone semelhantes).
- **Exportação controlada para parceiros** — permitir partilhar apenas a contagem/ementas/alergias agregadas com um parceiro de catering via Chat, sem expor a lista completa de contactos (relevante para GDPR — os convidados não deram consentimento para os seus dados serem partilhados com terceiros).
- **Lembretes automáticos** — notificar convidados que ainda não abriram o wizard de RSVP ao fim de X dias, com limite de lembretes para não ser intrusivo.
- **RSVP por família/grupo** — permitir a uma conta responder em nome de todo o seu grupo familiar de uma só vez, reduzindo o número de convites a gerir para famílias grandes.
