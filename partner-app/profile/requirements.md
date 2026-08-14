# Profile (partner-app) — Requisitos

## Objetivo

Permitir que um parceiro construa e mantenha o perfil de negócio que o representa na Copo d'Água — a informação que os noivos veem no Marketplace e que serve de base para receber pedidos de orçamento, reservas e contratos. Este módulo é a fonte de verdade dos dados de negócio do parceiro: `mobile-app/partner-profile/` (a vista pública para os noivos) e `backend/marketplace/` (pesquisa e filtros) leem-no, não o duplicam.

Sem um perfil completo e aprovado, um parceiro tem conta autenticada (`backend/auth/`) mas está invisível no Marketplace e não pode receber pedidos — a fronteira exata está definida em RN01.

**Fora de âmbito deste módulo:**
- Onboarding de pagamentos / Stripe Connect Express (dados fiscais recolhidos aqui são pré-requisito, mas a ligação à conta Stripe Connect é tratada em `partner-app/payouts/`).
- Aprovação/rejeição administrativa (a ação em si vive em `admin-web/partners/`; aqui documentamos apenas o contrato de dados e estados que essa ação consome).
- Avaliações e classificações de parceiros por noivos (futuro — ver `tasks.md`).

## Funcionalidades

### Configuração do perfil (wizard inicial)
- Dados de negócio: nome comercial, tipo (individual / empresa), descrição/bio, anos de experiência, tamanho da equipa.
- Categorias de serviço: seleção múltipla de uma taxonomia fixa (fotografia, vídeo, espaço/quinta, catering, música/DJ, flores e decoração, wedding planner, transporte, beleza, bolo, convites, celebrante, aluguer de material, outro).
- Área de atuação: distritos/concelhos cobertos, ou "âmbito nacional".
- Portefólio: upload de fotos (obrigatório, mínimo para submissão) e vídeos (opcional).
- Indicação de preço: valor "a partir de" por categoria oferecida (não é o preço final — isso fica para `mobile-app/quotations/`).
- Contactos e redes sociais: telefone de negócio, website, Instagram/Facebook (opcionais).
- Dados fiscais: NIF, morada de faturação — pré-requisito para poder faturar comissões e para o onboarding futuro do Stripe Connect.
- Submissão para revisão administrativa.

### Gestão contínua do perfil (pós-aprovação)
- Editar qualquer secção do perfil.
- Gerir portefólio: adicionar, remover, reordenar, definir imagem de capa.
- Pausar/retomar visibilidade no Marketplace (ex: agenda cheia, férias) sem eliminar o perfil.
- Ver o estado atual do perfil e, se rejeitado, o motivo da rejeição.
- Re-submeter após rejeição ou após alterar campos críticos (ver RN08).

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | O perfil só é visível no Marketplace quando `status = 'published'` **e** `is_paused = false` **e** a conta associada está `active` em `profiles.status` (não suspensa nem em soft-delete — ver RN08 de `backend/auth/requirements.md`). As três condições são avaliadas em conjunto; falhar qualquer uma remove o parceiro da pesquisa. |
| RN02 | Uma conta com `role = 'partner'` tem exatamente um `partner_profiles` (relação 1:1). O registo nasce em estado `draft` no momento do signup (via trigger, mesmo padrão de `on-user-created` em `backend/auth/api.md`). |
| RN03 | É obrigatório selecionar entre 1 e 5 categorias. O limite superior evita perfis genéricos de baixo valor ("faço tudo") que degradam a qualidade da pesquisa. |
| RN04 | Submissão para revisão (`draft`/`rejected` → `pending_review`) só é permitida quando o perfil cumpre os critérios mínimos de completude: nome comercial, descrição (mín. 50 caracteres), ≥ 1 categoria, ≥ 3 fotos de portefólio, ≥ 1 área de atuação, NIF válido. Ver `validations.md` para o detalhe campo a campo. |
| RN05 | O NIF é único por parceiro na plataforma — duas contas não podem partilhar o mesmo número de contribuinte (proteção contra contas duplicadas e fraude). Validado por checksum (algoritmo módulo 11) antes mesmo de verificar unicidade. |
| RN06 | Aprovação/rejeição do perfil é uma ação exclusiva de administrador (`admin-web/partners/`), nunca automática. Perfis ficam em `pending_review` até essa decisão manual. |
| RN07 | Uma rejeição exige sempre um motivo (texto livre do administrador), visível ao parceiro, para permitir correção e nova submissão. |
| RN08 | Depois de `published`, editar campos **não críticos** (descrição, portefólio, preços, redes sociais, área de atuação) fica imediatamente visível, sem nova revisão. Editar campos **críticos** (nome comercial, NIF, categorias) marca o perfil como `pending_review` novamente — o perfil anterior permanece visível até à decisão para não penalizar o parceiro com um "buraco" no Marketplace. |
| RN09 | Um administrador pode suspender um perfil já publicado (`published` → `suspended`) por incumprimento de políticas; o parceiro é notificado (ver `mobile-app/notifications/`, ainda ⏳) e o perfil desaparece do Marketplace imediatamente, mesmo sem passar por `is_paused`. |
| RN10 | Pausar o perfil (`is_paused = true`) é uma ação do próprio parceiro, reversível a qualquer momento, e não afeta o `status` de aprovação — um parceiro `published` que pausa continua `published`, só deixa de ser pesquisável (RN01). |
| RN11 | Dados fiscais (NIF, morada de faturação) e documentos de verificação nunca são expostos publicamente — vivem numa tabela separada (`partner_verification`) com RLS restrita ao próprio parceiro e a administradores. Ver `database.md` para a justificação arquitetural. |

## Risco identificado

RN08 (revisão parcial só em campos críticos) obriga a um mecanismo de "snapshot" ou de campos duplicados (visível vs. pendente) se quisermos que o perfil publicado continue visível *tal como estava* enquanto a alteração crítica aguarda aprovação. A abordagem mais simples para o MVP — e a adotada aqui — é não manter snapshot: a alteração crítica é gravada de imediato e o `status` muda para `pending_review`, o que significa que por baixo do capô os noivos deixam de ver esse parceiro até aprovação (contradiz a intenção original da regra). Documentado como trade-off consciente em `tasks.md` — a versão com snapshot fica para pós-MVP.
