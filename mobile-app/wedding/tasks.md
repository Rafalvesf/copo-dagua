# Wedding — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Implementar `is_wedding_member()` e aplicar em todas as policies deste módulo | Alta | Bloqueia todo o módulo e serve de base para todos os módulos seguintes ligados a `wedding_id` |
| Cron job `mark-wedding-completed` (D+1 após `wedding_date`) | Alta | Necessário para RN06 |
| Integração entre eliminação de conta (Authentication) e transferência obrigatória de propriedade de casamento | Alta | Ponto de integração crítico identificado em `edge-cases.md` — requer alterar também `backend/auth/api.md` (`request-account-deletion`) |
| Formalizar `docs/architecture/RLS_POLICY.md` com `is_admin()` + `is_wedding_member()` documentados como padrão oficial | Média | Pendente desde o módulo Authentication, agora com dois exemplos concretos para generalizar |
| Lock otimista simples via `updated_at` para evitar conflitos de edição concorrente | Baixa | Só relevante com uso real de múltiplos colaboradores em simultâneo |

## Melhorias futuras

- **Permissões granulares por colaborador** (ex: wedding planner com acesso só a Checklist e Budget, não a Payments) — revisitar RN04 quando o produto abrir a segmento profissional.
- **Website de casamento público** — gerar uma página pública partilhável a partir dos dados deste módulo (nomes, data, RSVP) — grande oportunidade de produto, fora do MVP.
- **Histórico de alterações (audit log)** dos dados do casamento, útil em caso de disputa entre colaboradores.
- **Múltiplos donos** (co-ownership real, não só colaboração) — atualmente há sempre um único `owner_id`; alguns casais podem querer paridade total de controlo, incluindo poder de eliminação.
