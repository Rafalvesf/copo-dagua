# Authentication — Backlog Técnico e Melhorias Futuras

## Backlog técnico

| Item | Prioridade | Nota |
|---|---|---|
| Decidir mecanismo de rate limiting (Edge Function custom vs nativo Supabase) | Alta | Bloqueia RN07 |
| Implementar `is_admin()` como função `security definer` reutilizável | Alta | Base para RLS de todos os módulos seguintes |
| Criar `mobile-app/shared/design-system.md` e pacote Flutter interno com os componentes de `ui.md` | Alta | Bloqueia velocidade de desenvolvimento dos módulos seguintes |
| Configurar deep linking (Universal Links iOS + App Links Android) | Alta | Necessário para verificação de email e reset de password |
| Job de anonimização de contas (`finalize-account-deletion`) | Média | Pode ser feito depois do MVP funcional, mas antes de lançamento público (GDPR) |
| MFA para administradores | Média | Antes de dar acesso de admin a operações reais |
| Testes de carga em `login_attempts` | Baixa | Só relevante a partir de escala significativa |

## Melhorias futuras

- **Login sem password (magic link)** — reduz fricção, especialmente para parceiros menos técnicos.
- **Contas multi-role** — resolver a limitação da RN01 (pessoa que é noiva e parceiroa).
- **SSO empresarial** para parceiros grandes (ex: cadeias de hotéis que gerem múltiplos casamentos) — relevante só se o produto evoluir para B2B2C.
- **Deteção de dispositivos suspeitos** (impossible travel, novo dispositivo) com notificação de segurança por email.
- **Internacionalização do fluxo de auth** — o `locale` já está no modelo de dados (`profiles.locale`) precisamente para preparar isto desde o início, mesmo que o MVP seja só PT.

## Nota de arquiteto

RLS e a função `is_admin()` devem ser tratadas como parte de um documento transversal (`docs/architecture/RLS_POLICY.md`) em vez de repetir a lógica em cada módulo — cada módulo só vai referenciar essa função. Isto evita 20 implementações ligeiramente diferentes da mesma verificação de permissão. Propor a estrutura desse documento assim que fecharmos mais 2-3 módulos e tivermos padrões suficientes para generalizar.
