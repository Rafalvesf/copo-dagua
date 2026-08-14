# Onboarding — API

## Edge Functions custom

| Função | Trigger | Descrição |
|---|---|---|
| `save-onboarding-step` | A cada passo concluído | Atualiza `onboarding_progress.draft_data` e `current_step` |
| `complete-couple-onboarding` | Ecrã final (Noivos) | Cria a `wedding` a partir de `draft_data`, marca `onboarding_progress.completed_at`, atualiza `profiles.onboarding_completed = true` |
| `complete-partner-onboarding` | Ecrã final (Parceiros) | Atualiza `partner_profile.status = pending_review`, envia para fila de curadoria (`admin-web/moderation/`), atualiza `profiles.onboarding_completed = true` |
| `create-partner-profile-draft` | Passo 2 (Parceiros) | Cria `partner_profile` em `draft` assim que nome + categoria estão definidos (RN04) |
| `invite-partner` | Passo 6 (Noivos, opcional) | Envia convite por email com deep link para o parceiro se juntar à wedding |
