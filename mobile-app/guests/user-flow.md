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
      → Pode trazer acompanhante? (sim/não)
      → Guardar → convidado aparece na lista com estado "Pendente"
```

## Enviar convite de RSVP

```
Lista de convidados → selecionar convidado (ou seleção múltipla)
  → [ Enviar convite de RSVP ]
      → Escolher canal: Email / WhatsApp / SMS (consoante contacto disponível)
      → Sistema gera token único e envia mensagem com link
      → Estado do convidado passa a "Convite enviado"
```

## RSVP do convidado (público, sem conta)

```
Convidado recebe mensagem → clica no link (ex: copodagua.pt/rsvp/{token})
  → Abre página pública de RSVP (browser, sem instalar app)
      → "Ana & Miguel convidam-te para o casamento deles"
      → [ Vou! ] [ Não vou poder ir ]
        → Se "Vou!":
            → Se plus_one_allowed → "Vais sozinho/a ou acompanhado/a?"
                → Nome do acompanhante (opcional)
            → Restrições alimentares / alergias (opcional)
            → Mensagem para os noivos (opcional)
            → [ Confirmar ]
        → Se "Não vou poder ir":
            → Mensagem opcional
            → [ Confirmar ]
      → Ecrã de agradecimento: "Obrigado! A tua resposta foi registada."
      → Convidado pode voltar ao mesmo link e alterar a resposta a qualquer momento
```

## Ver respostas (casal)

```
Lista de convidados → filtrar por estado (Todos / Confirmados / Pendentes / Recusados)
  → Selecionar convidado → ver detalhe da resposta (acompanhante, restrições, mensagem)
```
