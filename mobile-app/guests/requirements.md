# Guests — Requisitos

## Funcionalidades

### Lado do casal (dentro da app, autenticado)
- Adicionar convidado manualmente (nome, contacto, grupo, lado — noivo/noiva/ambos)
- Editar e remover convidado
- Organizar convidados por grupo/etiqueta (família, amigos, trabalho, etc. — etiquetas livres definidas pelo casal)
- Definir quantos acompanhantes cada convidado pode trazer (`companions_limit`, um número — 0 quando não pode trazer ninguém — em vez de um simples sim/não)
- Pré-preencher o lado (noivo/noiva/ambos) e a relação (como conhece o casal — família, amigos, trabalho, faculdade, outro) de cada convidado; o próprio convidado só confirma ou corrige estes campos no wizard de RSVP, nunca parte de um campo em branco
- Ver e filtrar a lista por estado de RSVP (todos, confirmados, pendentes, recusados)
- Ver resumo agregado (nº confirmados, pendentes, recusados, total de "lugares" incluindo acompanhantes) — dado consumido pelo Dashboard e pelo Budget
- Partilhar o convite (link `copodagua.pt/invite/{slug}` com o `guest_code` do casamento) — sem envio automático por email/WhatsApp/SMS nesta ronda, ver `tasks.md`
- Ver detalhe da resposta de um convidado (confirmação, acompanhantes com o respetivo menu/alergias, lado, relação, mensagem)
- Adicionar convidados manualmente sem contacto (para convites em papel, sem conta na plataforma)

### Lado do convidado (conta obrigatória)
- Abrir link único de convite → redireciona sempre para a criação de conta (`register_screen.dart`, `?role=guest&code=...`), nunca para um formulário de RSVP anónimo
- Criar conta com o `guest_code` do casal (`050_wedding_guest_code.sql`) pré-preenchido a partir do link, ou introduzido manualmente
- Na primeira vez que entra (depois de `join_wedding_by_code()` ligar a conta à linha de `guests` correspondente), responder ao **wizard de RSVP**, ecrã a ecrã:
  1. **Vais estar connosco?** (Sim / Não) — a primeira pergunta, antes de tudo o resto
  2. Se "Não": ecrã de agradecimento, sem mais perguntas — entra logo na app
  3. Se "Sim": acompanhantes (até ao `companions_limit` definido pelo casal, cada um com nome próprio) → confirmar/corrigir lado e relação → menu e alergias **por pessoa** (o próprio convidado e cada acompanhante, um ecrã por pessoa) → ecrã de confirmação com o resumo de tudo
- Depois do wizard (em qualquer dos dois casos), acede normalmente à app: "O Casamento", "Presentes", "Galeria" e "Perfil"
- A partir do Perfil, pode reabrir o wizard para alterar RSVP, acompanhantes, menu ou alergias até à data-limite definida pelo casal

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Todo o convidado pertence a exatamente um `wedding_id`. Gestão restrita a owner e colaboradores ativos (via `is_wedding_member()`, herdado do módulo Wedding). |
| RN02 | **Revista (2026-09-06):** criar conta é obrigatório para o convidado — deixou de existir RSVP anónimo por token. O convidado entra pelo `guest_code` do casal (`050_wedding_guest_code.sql`), validado por `lookup_wedding_by_guest_code()` antes do signup e associado por `join_wedding_by_code()` depois. O link de convite (`invite_page_screen.dart`) continua a existir mas agora só encaminha para `/register?role=guest&code=...` com o código pré-preenchido, em vez de abrir um formulário de RSVP sem conta. |
| RN03 | **Revista (2026-09-13):** um convidado só pode adicionar acompanhantes até ao `companions_limit` definido previamente pelo casal nesse registo (substitui o antigo `plus_one_allowed` booleano — famílias inteiras podem precisar de mais do que um). Cada acompanhante tem nome, menu e alergias próprios (ver RN12). |
| RN04 | Sem envio automático de convite nesta ronda — o casal partilha o link/código manualmente (WhatsApp, email, papel). Envio automático por canal fica em `tasks.md`. |
| RN05 | O convidado pode alterar a resposta quantas vezes quiser — não há "resposta final" bloqueada, porque planos mudam (ex: alguém que tinha recusado e afinal pode ir). |
| RN06 | Remover um convidado é eliminação definitiva (hard delete), não soft-delete — o risco legal/contratual de manter este dado é baixo comparado com contas de utilizador, e o casal deve poder "limpar" a lista livremente. |
| RN07 | Os grupos/etiquetas são livres (texto definido pelo casal), não uma lista fechada — casais têm categorizações muito diferentes (ex: "padrinhos", "colegas de curso"). Distinto da "relação" (RN13), que é um campo estruturado com sugestões fixas. |
| RN08 | O `estimated_guests` definido no Onboarding **não é reconciliado automaticamente** com o número real de convidados adicionados aqui — são conceitos distintos (estimativa vs. lista real). O Dashboard pode mostrar os dois lado a lado para contexto, mas não força igualdade. |
| RN09 | **Nova (2026-09-13):** o wizard de RSVP é mostrado automaticamente uma única vez, logo a seguir a `join_wedding_by_code()` ligar a conta à linha de `guests` (por email) e enquanto `rsvp_wizard_completed_at is null`. Depois disso só reaparece se o próprio convidado o reabrir a partir de "O meu perfil → Alterar RSVP". |
| RN10 | **Nova (2026-09-13):** responder "Não vou" nunca bloqueia o acesso à app — o convidado continua a ver "O Casamento", "Presentes", "Galeria" e "Perfil" normalmente. Só os ecrãs de mesa/lugar ficam sem conteúdo (RSVP negativo não tem mesa atribuída). |
| RN11 | **Nova (2026-09-13):** mudar de "Confirmado" para "Recusado" (ou o inverso) nunca apaga acompanhantes, menu ou alergias já preenchidos — só o `rsvp_status` muda. Se o convidado voltar a confirmar, os dados anteriores são reaproveitados em vez de pedidos de novo. |
| RN12 | **Nova (2026-09-13):** menu e alergias são registados por pessoa — o convidado principal e cada acompanhante têm o seu próprio par menu/alergias, nunca um campo único para "a reserva toda". |
| RN13 | **Nova (2026-09-13):** lado e relação (como conhece o casal) podem ser pré-preenchidos pelo casal ao adicionar o convidado; o convidado só confirma ou corrige — nunca partem de um campo vazio quando o casal já os definiu, porque alimentam mesas e filtros do lado do casal (`mobile-app/seating/`). |

## Risco identificado

RN05 (sem "resposta final" bloqueada) combinada com RN11 (dados preservados entre mudanças de resposta) significa que acompanhantes/menu/alergias nunca podem ser apagados por um simples toggle de RSVP — só por remoção explícita de um acompanhante pelo próprio convidado. Isto tem de ser respeitado na implementação (ver `database.md` e `edge-cases.md`), sob risco de o convidado perder trabalho já feito ao mudar de ideias.
