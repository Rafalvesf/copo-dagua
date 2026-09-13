# Partners (admin-web) — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Provisionar um projeto Supabase real e correr `database/tests/rls_test_suite.sql` (T1–T25) contra Postgres real | Alta | Nenhum módulo do projeto foi validado contra uma instância real ainda — bloqueia considerar qualquer módulo (não só este) "verificado ao mesmo nível" do que a suite local já cobre. Ver `database/README.md`. |
| Reavaliar as 4 funções Postgres de transição como uma função genérica única | Baixa | Implementadas como 4 funções separadas (`database/migrations/007_partner_review_transitions.sql`) por causa de pequenas variações de negócio (RN04: suspender não toca `reviewed_at`/`reviewed_by`); revisitar só se aparecer uma 5ª transição idêntica — ver "Risco técnico" em `api.md`. |
| Notificar o parceiro da decisão (push/email) | Alta | Depende de `backend/notifications/` (⏳). Sem isto, o parceiro só sabe da decisão ao reabrir a app. |
| Confirmação "este texto vai ser visível ao parceiro" antes de submeter motivo de rejeição/suspensão | Baixa | Mitiga o caso limite de um admin colar dados sensíveis por engano no motivo — ver `edge-cases.md`. |
| Sinalização automática de NIF duplicado suspeito | Baixa | Estava bloqueada por este módulo não existir (`partner-app/profile/tasks.md`); agora desbloqueada, mas ainda não priorizada. |
| Rever `audit_logs.action` como `text` livre vs. enum/tabela de lookup, quando houver mais módulos a escrever nela | Baixa | Ver decisão em `database.md`. |
| Dashboard `admin-web/` com KPIs reais | Alta (mas não deste módulo) | Depende de Bookings/Payments existirem; ver `ROADMAP.md`. Sidebar atual só tem "Dashboard" como placeholder. |

## Melhorias futuras

- **RBAC granular** (`SUPPORT`, `FINANCE`, `MODERATOR`, etc.) em vez de `is_admin()` flat — só quando houver múltiplos administradores com responsabilidades distintas. Decisão de arquitetura registada em `docs/architecture/RLS_POLICY.md`.
- **Bulk actions** (aprovar vários perfis de uma vez) — só faz sentido depois de haver volume real de submissões; prematuro no MVP.
- **Filtro por categoria/localização** na lista, além de estado e pesquisa por nome — útil quando o volume de parceiros crescer.
- **Exportação** da lista/histórico para CSV — fora de âmbito do MVP (ver `README.md` raiz, secção P2 "Exports" da spec de admin panel avaliada durante o planeamento).
- **Snapshot de perfil publicado durante revisão de campo crítico** — mesmo item já listado em `partner-app/profile/tasks.md` (RN08); quando implementado, este módulo passa a distinguir "primeira submissão" de "revisão por edição" na UI (hoje tratadas de forma idêntica, ver `requirements.md` RN08).

## Nota de arquiteto

Este módulo foi âmbito deliberadamente reduzido a partir de uma especificação de admin panel muito mais ampla (dashboard com KPIs, gestão de casais, reservas, pagamentos, disputas, reviews, categorias, comissões, analytics de funil, RBAC de 5 roles, settings de plataforma) recebida durante o planeamento. Essa especificação assume entidades — bookings, payments, quotations, reviews — que ainda não existem em nenhuma parte da plataforma (nem em `mobile-app/`, nem em `partner-app/`, nem na base de dados), e uma paleta de cores que não corresponde à identidade visual já implementada em `mobile-app/`.

Decisão: implementar agora só o que o próprio projeto já tinha identificado como bloqueador real (`partner-app/profile/tasks.md`), e registar o resto como trabalho futuro em `ROADMAP.md`, a retomar módulo a módulo, pela ordem de dependência já lá definida — nunca construir a vista de admin de uma entidade antes de essa entidade existir no produto (mesmo princípio que motivou não duplicar bookings entre casal/parceiro/admin, caso a caso, quando Bookings for documentado).
