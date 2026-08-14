# Authentication — Requisitos

## Funcionalidades

### Comuns a todos os perfis
- Registo com email + password
- Registo com OAuth (Google, Apple — obrigatório na App Store se houver login social)
- Login com email + password
- Login com OAuth
- Recuperação de password ("Esqueci-me da password")
- Verificação de email (obrigatória antes de aceder a funcionalidades sensíveis como pagamentos)
- Logout
- Refresh de sessão automático (tokens Supabase)
- Eliminação de conta (GDPR — direito ao esquecimento)
- Alteração de password (autenticado)
- Autenticação multifator (MFA) — opcional no MVP, obrigatório para Administradores

### Específicas
- **Seleção de papel (role)** no registo: Noivo(a) ou Parceiro. Administradores não se registam publicamente — são criados manualmente via painel interno (`admin-web/users/`).
- **Deep linking** para verificação de email e reset de password (abrir diretamente na app mobile).
- **Biometria local** (Face ID / Touch ID) para reautenticação rápida em sessões já iniciadas — não substitui o login inicial, é uma camada de conveniência sobre uma sessão já válida.

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Um utilizador tem exatamente um `role` principal: `couple`, `partner` ou `admin`. Não existem contas híbridas no MVP (uma pessoa que é noiva e também parceiroa precisa de duas contas com emails diferentes). |
| RN02 | O email tem de ser único em toda a plataforma, independentemente do role. |
| RN03 | A password mínima é 8 caracteres, com pelo menos 1 letra e 1 número. Sem imposição de símbolos especiais (reduz fricção, alinhado com guidelines NIST modernas). |
| RN04 | O acesso a funcionalidades que envolvem dinheiro (Payments, Contracts, Bookings) exige email verificado. Sem verificação, o utilizador pode navegar e explorar, mas não pode transacionar. |
| RN05 | Contas de Parceiro só ficam com o perfil "visível" no Marketplace depois de completarem o onboarding de parceiro (dados fiscais, portefólio mínimo) — validado em `backend/partners/`, mas a conta de autenticação já existe antes disso. |
| RN06 | Sessões expiram ao fim de 7 dias de inatividade (refresh token). Access token de curta duração (1h), renovado silenciosamente via Supabase. |
| RN07 | Após 5 tentativas de login falhadas para o mesmo email em 15 minutos, a conta fica temporariamente bloqueada por 15 minutos (proteção contra brute-force). |
| RN08 | Eliminação de conta é "soft delete" durante 30 dias (permite recuperação e cumpre obrigações fiscais/contratuais em curso — ex: um parceiro não pode desaparecer com um contrato ativo). Eliminação definitiva e anonimização após esse período. |
| RN09 | Administradores só podem ser criados por outro Administrador já existente, nunca por auto-registo. |
| RN10 | Login social (Google/Apple) que use um email já registado por password faz *account linking* automático após confirmação de identidade — não cria conta duplicada. |

## Risco identificado

RN01 (sem contas híbridas) é uma decisão de simplicidade para o MVP, mas é uma limitação de produto real — muitos parceiros de casamentos (ex: fotógrafos) também se casam e vão querer usar a plataforma como noivos. Revisitar no roadmap pós-MVP com um sistema de "perfis múltiplos por conta" em vez de re-arquitetar mais tarde. Ver `melhorias-futuras` em `tasks.md`.
