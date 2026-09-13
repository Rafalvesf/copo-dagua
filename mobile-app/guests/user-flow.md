# Guests — Fluxo do Utilizador

## Adicionar convidado (casal)

```
Wedding → "Convidados"
  → Lista de convidados (vazia inicialmente)
  → [ + Adicionar convidado ]
      → Nome (obrigatório)
      → Email e/ou Telefone (opcional)
      → Grupo/etiqueta (texto livre, com sugestões dos já usados)
      → Lado (Noivo / Noiva / Ambos)
      → Relação — como conhecem o convidado (Família / Amigos / Trabalho / Faculdade / Outro)
      → Nº de acompanhantes permitidos (0, 1, 2, ...)
      → Guardar → convidado aparece na lista com estado "Pendente"
```

Lado e relação ficam pré-preenchidos quando o convidado entrar pela primeira vez — ele só os confirma ou corrige no wizard de RSVP (RN13, `requirements.md`).

## Partilhar convite

```
Lista de convidados → [ Partilhar convite ]
  → Mostra o link (copodagua.pt/invite/{slug}) e o guest_code do casamento
  → O casal copia/envia manualmente (WhatsApp, email, papel)
```

Sem envio automático por canal nesta ronda — ver `tasks.md` para o backlog de integração com WhatsApp/SMS/email.

## Entrar como convidado (criar conta)

```
Convidado recebe o link → abre `copodagua.pt/invite/{slug}` (InvitePageScreen, pública)
  → Vê nomes do casal, data, contagem decrescente, local
  → [ Criar conta e confirmar presença ]
      → `/register?role=guest&code={guest_code}` (código pré-preenchido)
      → `lookup_wedding_by_guest_code()` valida o código ANTES do signup
      → Cria conta (nome, email, password)
      → `join_wedding_by_code()`:
          - associa a conta a `wedding_guest_members`
          - tenta ligar automaticamente a linha de `guests` cujo email coincida
            (`linked_profile_id`) — sem correspondência, o wizard fica por preencher
            manualmente no primeiro ecrã do Perfil (ver `edge-cases.md`)
  → Entra na app já autenticado
```

## RSVP do convidado (dentro da app, já autenticado)

Corre automaticamente uma única vez a seguir a `join_wedding_by_code()`, enquanto
`guests.rsvp_wizard_completed_at is null` para a linha ligada a esta conta (RN09).

```
"Inês & Miguel vão casar 💍"
"Vais estar connosco neste dia?"
  [ ✓ Sim, vou ]   [ ✕ Infelizmente não vou ]

  → Se "Não vou":
      "Vamos sentir a tua falta 🤍
       Obrigado por nos dizeres. Mesmo não podendo estar presente,
       queremos que continues a fazer parte deste momento."
      [ Entrar no casamento → ]
      → `rsvp_status = declined`, `rsvp_wizard_completed_at = now()`
      → Entra na app com acesso normal a O Casamento / Presentes / Galeria / Perfil (RN10)

  → Se "Sim, vou":
      "Quem vem contigo?"
        [ Vou sozinho ]   [ + Adicionar acompanhante ]
        → Cada acompanhante: só o nome nesta etapa (obrigatório)
        → Nunca mais do que `companions_limit` desta linha de `guests` (RN03)
      ↓
      "De que lado vens?"
        [ 👰 Noiva ]  [ 🤵 Noivo ]  [ 💍 Ambos ]
        → Pré-preenchido se o casal já o tiver definido; o convidado só confirma
      ↓
      "Como nos conhecemos?"
        [ Família ] [ Amigos ] [ Trabalho ] [ Faculdade ] [ Outro ]
        → Pré-preenchido se o casal já o tiver definido; o convidado só confirma
      ↓
      "E agora, a parte deliciosa 🍽️" — um ecrã por pessoa (o próprio, depois cada acompanhante)
        {Nome da pessoa}
        [ 🥩 Carne ] [ 🐟 Peixe ] [ 🌱 Vegetariano ] [ Outro ]
        "Tens alguma alergia ou intolerância alimentar?"
        [ Não tenho ]   [ + Adicionar alergia/intolerância ]
      ↓
      "Está tudo pronto! 🎉"
        Presença: ✓ Confirmada
        Convidados: {nome principal}, {acompanhante 1}, ...
        Relação: {relação} · {lado}
        Ementa: {nome} — {menu} · {alergias ou "Sem intolerâncias"} (uma linha por pessoa)
        [ Confirmar informações ]
      → `rsvp_status = confirmed`, grava acompanhantes/menu/alergias por pessoa,
        `rsvp_wizard_completed_at = now()`
      [ Entrar no casamento → ]
```

## Alterar resposta depois do wizard

```
Perfil → "Alterar RSVP"
  → Reabre o wizard com os valores atuais pré-preenchidos (RN05, RN11)
  → Mudar de "Sim" para "Não" NÃO apaga acompanhantes/menu/alergias — só o rsvp_status muda
  → Voltar a "Sim" reaproveita os dados anteriores em vez de pedir tudo de novo
```

## Ver respostas (casal)

```
Lista de convidados → filtrar por estado (Todos / Confirmados / Pendentes / Recusados)
  → Selecionar convidado → ver detalhe da resposta
      (lado, relação, cada acompanhante com o seu menu/alergias, mensagem)
```
