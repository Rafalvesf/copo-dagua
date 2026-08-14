# Profile (partner-app) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Implementar `admin-web/partners/` com ações de aprovar/rejeitar/suspender | Alta | Sem isto, todo o fluxo de revisão fica bloqueado — nenhum perfil consegue sair de `pending_review` em produção |
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
