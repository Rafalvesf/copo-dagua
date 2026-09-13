# Guests — Requisitos

## Funcionalidades

### Lado do casal (dentro da app, autenticado)
- Adicionar convidado manualmente (nome, contacto, grupo, lado — noivo/noiva/ambos)
- Editar e remover convidado
- Organizar convidados por grupo/etiqueta (família, amigos, trabalho, etc. — etiquetas livres definidas pelo casal)
- Marcar se o convidado pode trazer acompanhante (plus-one)
- Ver e filtrar a lista por estado de RSVP (todos, confirmados, pendentes, recusados)
- Ver resumo agregado (nº confirmados, pendentes, recusados, total de "lugares" incluindo acompanhantes) — dado consumido pelo Dashboard e pelo Budget
- Enviar convite de RSVP digital (email e/ou WhatsApp/SMS) com link único por convidado
- Reenviar convite (caso o convidado não tenha respondido)
- Ver detalhe da resposta de um convidado (confirmação, acompanhante, restrições alimentares, notas)
- Adicionar convidados manualmente sem contacto (para convites em papel, sem RSVP digital)

### Lado do convidado (conta obrigatória)
- Abrir link único de convite → redireciona sempre para a criação de conta (`register_screen.dart`, `?role=guest&code=...`), nunca para um formulário de RSVP anónimo
- Criar conta com o `guest_code` do casal (`050_wedding_guest_code.sql`) pré-preenchido a partir do link, ou introduzido manualmente
- Confirmar ou recusar presença, já autenticado
- Se aplicável, indicar nome do acompanhante
- Indicar restrições alimentares/alergias
- Deixar uma mensagem opcional para os noivos
- Alterar a resposta depois de submetida

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Todo o convidado pertence a exatamente um `wedding_id`. Gestão restrita a owner e colaboradores ativos (via `is_wedding_member()`, herdado do módulo Wedding). |
| RN02 | **Revista (2026-09-06):** criar conta é obrigatório para o convidado — deixou de existir RSVP anónimo por token. O convidado entra pelo `guest_code` do casal (`050_wedding_guest_code.sql`), validado por `lookup_wedding_by_guest_code()` antes do signup e associado por `join_wedding_by_code()` depois. O link de convite (`invite_page_screen.dart`) continua a existir mas agora só encaminha para `/register?role=guest&code=...` com o código pré-preenchido, em vez de abrir um formulário de RSVP sem conta. |
| RN03 | Um convidado só pode indicar acompanhante se `plus_one_allowed = true` nesse registo, definido previamente pelo casal. |
| RN04 | O convite de RSVP digital só pode ser enviado se o convidado tiver email ou telefone preenchido. Convidados sem contacto ficam marcados como "convite em papel" e o casal atualiza o estado manualmente. |
| RN05 | O convidado pode alterar a resposta quantas vezes quiser enquanto o token for válido — não há "resposta final" bloqueada, porque planos mudam (ex: alguém que tinha recusado e afinal pode ir). |
| RN06 | Remover um convidado é eliminação definitiva (hard delete), não soft-delete — o risco legal/contratual de manter este dado é baixo comparado com contas de utilizador, e o casal deve poder "limpar" a lista livremente. |
| RN07 | Os grupos/etiquetas são livres (texto definido pelo casal), não uma lista fechada — casais têm categorizações muito diferentes (ex: "padrinhos", "colegas de curso"). |
| RN08 | O `estimated_guests` definido no Onboarding **não é reconciliado automaticamente** com o número real de convidados adicionados aqui — são conceitos distintos (estimativa vs. lista real). O Dashboard pode mostrar os dois lado a lado para contexto, mas não força igualdade. |

## Risco identificado

RN05 (sem "resposta final" bloqueada) favorece correção de respostas ao longo do tempo. Com RN02 revista, a superfície pública deixou de ser um token de RSVP e passou a ser `lookup_wedding_by_guest_code()` (só devolve nomes do casal, chamada antes de existir conta) — continua a precisar de proteção contra brute-force do `guest_code` (ver `edge-cases.md` e `tasks.md` — rate limiting na função pública, à semelhança do que já fizemos para login em Authentication).
