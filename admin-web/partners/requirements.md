# Partners (admin-web) — Requisitos

## Funcionalidades (MVP)

- Listar parceiros com filtro por `status` (`pending_review`, `published`, `rejected`, `suspended`; `draft` fica sempre fora da lista — ver RN02) e pesquisa por nome comercial.
- Ver o perfil completo de um parceiro: dados de negócio (`partner_profiles`), categorias, portefólio, e dados fiscais/verificação (`partner_verification`) — só visíveis a admin, nunca ao Marketplace.
- Aprovar um perfil em `pending_review` (→ `published`).
- Rejeitar um perfil em `pending_review` (→ `rejected`), com motivo obrigatório.
- Suspender um perfil `published` (→ `suspended`), com motivo obrigatório.
- Restaurar um perfil `suspended` (→ `published`).
- Ver o histórico de decisões administrativas sobre aquele parceiro (linhas de `audit_logs` filtradas por `target_id`).

## Fora de âmbito (MVP)

- Editar dados do parceiro em nome dele (nome, categorias, preços, portefólio) — só o próprio parceiro edita o seu perfil (RN02 de `partner-app/profile/requirements.md`); um admin que precise de corrigir algo contacta o parceiro, não edita diretamente.
- Sinalização automática de NIF duplicado / deteção de fraude (depende deste módulo existir primeiro — ver `partner-app/profile/tasks.md`).
- Notificar o parceiro por push/email da decisão — depende de `backend/notifications/` (⏳); por agora a decisão fica visível na app do parceiro via `partner_profiles.status`/`rejection_reason` (já lido em `ProfileScreenState`, ver `partner-app/profile/state.md`).
- Gestão de categorias do marketplace, comissões, dashboard de KPIs, bookings, payments, disputes, reviews, support — módulos próprios, ainda não iniciados, fora do âmbito deste módulo.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Só um utilizador com `profiles.role = 'admin'` acede a qualquer ecrã de `admin-web/`. Garantido em duas camadas: guarda no frontend (redireciona se não-admin) **e** RLS/`is_admin()` no backend (a fonte de verdade — o frontend nunca é a única barreira, ver `docs/architecture/RLS_POLICY.md`). |
| RN02 | A lista nunca mostra perfis em `draft` — são rascunhos privados do parceiro, ainda não submetidos para revisão (RN04 de `partner-app/profile/requirements.md`), e não são da conta do admin enquanto o parceiro não os submeter. |
| RN03 | Aprovar e rejeitar só são ações válidas a partir de `status = 'pending_review'` (RN06 de `partner-app/profile/requirements.md`). Tentar aprovar/rejeitar um perfil noutro estado é um erro de aplicação, não uma ação disponível na UI (o botão nem aparece). |
| RN04 | Rejeitar exige sempre um motivo em texto livre (RN07 de `partner-app/profile/requirements.md`), visível ao parceiro. Suspender também exige motivo (RN09), mas é um motivo interno separado — não é reaproveitado como `rejection_reason` (RN12). |
| RN05 | Suspender só é válido a partir de `status = 'published'`; restaurar só é válido a partir de `status = 'suspended'` (RN09/RN12 de `partner-app/profile/requirements.md`). |
| RN06 | Toda decisão administrativa (aprovar/rejeitar/suspender/restaurar) grava uma linha em `public.audit_logs` na mesma transação da mudança de `status` — nunca uma sem a outra. Ver `database.md` e `api.md`. |
| RN07 | O admin nunca edita campos de `partner_profiles` diretamente através deste módulo — só transiciona `status` (e campos de auditoria associados: `reviewed_at`, `reviewed_by`, `rejection_reason`). Qualquer necessidade de editar dados do parceiro é, por definição, fora de âmbito (ver "Fora de âmbito"). |
| RN08 | Um parceiro que edita um campo crítico enquanto `published` volta a `pending_review` automaticamente (RN08 de `partner-app/profile/requirements.md`) — este módulo trata essa reentrada em `pending_review` exatamente como qualquer outra submissão nova, sem distinguir "primeira revisão" de "revisão por edição". |

## Risco identificado

RN07 (admin nunca edita dados do parceiro) significa que, se um admin encontrar um erro óbvio (ex: erro de digitação no nome) durante a revisão, a única ação disponível é rejeitar com motivo e pedir correção — não há atalho para "aprovar com correção". Isto é consistente com a decisão já tomada em `partner-app/profile/requirements.md` (risco identificado sobre RN08, mesma tensão) e evita que o admin se torne um segundo editor de dados do parceiro, o que complicaria a autoria e a confiança nos dados. Aceite como trade-off do MVP.
