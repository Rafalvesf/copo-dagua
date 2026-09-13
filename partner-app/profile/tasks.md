# Profile (partner-app) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| **Ecrã para preencher o NIF** (`partner_verification.tax_id`) | **Alta — bloqueia produção** | Não existe nenhum ecrã Flutter para o parceiro preencher o próprio NIF — `submit_partner_profile_for_review()` exige-o (RN04) e nenhum parceiro real consegue passar por ele sem escrever diretamente na base de dados. Descoberto 2026-08-30 ao ligar `business_info_screen.dart`/`partner_profile_screen.dart` ao Supabase real (Fase 3 de `ROADMAP.md`) — o botão "Submeter para revisão" já funciona e reporta corretamente `tax_id` em falta, só falta o ecrã que o preenche. |
| **Ligar `partner_portfolio_items` ao Supabase real** (`partner_portfolio_screen.dart` continua 100% mock) | **Alta — bloqueia produção** | Mesma razão que o NIF acima: `submit_partner_profile_for_review()` exige ≥3 itens de portefólio (RN04), mas nenhum item criado no ecrã mock chega à base de dados real — decisão de âmbito deliberada da Fase 1-3 (`ROADMAP.md`, "Explicitamente não feito aqui"), agora o próximo bloqueador real a resolver. |
| Implementar o trigger `on-partner-created` (documentado em `api.md`) | ✅ Feito (2026-08-30, `011_auth_provisioning.sql`, parte de `handle_new_user()`) | Ver `ROADMAP.md`, Fase 1. |
| Reconciliar RN04 de `mobile-app/onboarding/requirements.md` ("perfil criado em draft no passo 2 do wizard") com `api.md` aqui ("criado via trigger no momento do signup") | Média | Duas descrições diferentes do mesmo mecanismo, nunca reconciliadas — ver nota em `mobile-app/onboarding/database.md`, secção `partner_profiles`. |
| Implementar `admin-web/partners/` com ações de aprovar/rejeitar/suspender | ✅ Feito (2026-08-30) — `admin-web/partners/`, âmbito MVP | Sem isto, todo o fluxo de revisão ficava bloqueado — nenhum perfil conseguia sair de `pending_review` em produção. |
| Implementar snapshot de perfil publicado durante revisão de campo crítico (RN08) | Alta | Trade-off consciente assumido no MVP em `requirements.md` — atualmente uma edição crítica torna o parceiro invisível até aprovação, o que penaliza quem só quer corrigir um erro de digitação no nome |
| Normalizar `service_areas` para tabela de localizações geográficas | Média | Necessário antes do Marketplace suportar pesquisa por proximidade/raio; decisão documentada em `database.md` |
| Job de limpeza de ficheiros órfãos em Storage (upload sem linha correspondente) | Média | Ver caso limite em `edge-cases.md` |
| Sincronizar regras de completude (RN04) entre wizard Flutter e Edge Function `submit-partner-profile-for-review` | Média | Risco de divergência documentado em `api.md` — considerar gerar as duas a partir de uma única definição (ex: JSON schema partilhado) |
| Definir política de bucket e limites de tamanho em `backend/storage/` | Alta | Bloqueia o upload real de portefólio; hoje só documentado como dependência |
| Sinalização automática de NIF duplicado suspeito para revisão de fraude | Baixa | Depende de `admin-web/partners/` existir primeiro |

## Melhorias futuras

- **Reviews e classificações** de parceiros por noivos, com impacto na ordenação do Marketplace — módulo próprio a decidir (possivelmente `mobile-app/reviews/`), fora de âmbito do MVP.
- **Perfil multi-idioma** (descrição em PT/EN) para parceiros com clientela internacional — o precedente de `profiles.locale` em Authentication já aponta nessa direção.
- **Vídeo de apresentação** no topo do perfil (além do portefólio em grelha).
- **Posicionamento "em destaque"** no Marketplace como funcionalidade de monetização adicional para parceiros (além da comissão de 3%) — ligar a `BUSINESS_MODEL.md` se for adotado.
- **Analytics de perfil** (visualizações, cliques, taxa de conversão para pedido de orçamento) — alimenta diretamente `partner-app/analytics/`, ainda ⏳.
- **Contas multi-role** (a mesma limitação identificada em `backend/auth/requirements.md`) — um parceiro que também vai casar-se precisa hoje de duas contas com emails diferentes.

## Nota de arquiteto

Este módulo assume que `admin-web/partners/` vai existir antes de haver parceiros reais na plataforma — sem uma vista de administração, aprovar um perfil exige escrever diretamente na base de dados. Isto é aceitável para desenvolvimento e testes internos, mas é um bloqueador real de lançamento que vale a pena marcar explicitamente no `ROADMAP.md` em vez de descobrir tarde. Sugestão: tratar `admin-web/partners/` (mesmo que numa versão mínima — lista + aprovar/rejeitar) como parte do "MVP mínimo viável" do Marketplace, não como um módulo de administração opcional.
