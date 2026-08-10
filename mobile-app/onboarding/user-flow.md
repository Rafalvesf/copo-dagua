# Onboarding — Fluxo do Utilizador

## Onboarding — Noivos

```
Email verificado → entra no Onboarding
  → Passo 1: "Como se chamam os noivos?"
      [Nome A] (preenchido do registo) [Nome B] (opcional)
  → Passo 2: "Quando é o grande dia?"
      [Seletor de data] ou [ Ainda não sei ]
  → Passo 3: "Onde vai ser?"
      [Cidade/Região] (autocomplete)
  → Passo 4: "Mais ou menos quantos convidados?"
      [Slider ou input numérico]
  → Passo 5: "Tens uma ideia do orçamento?" (opcional)
      [Input valor] ou [ Saltar ]
  → Passo 6: "Convida o teu/a tua parceiro/a" (opcional)
      [Input email] ou [ Fazer depois ]
  → Ecrã final: "Tudo pronto!"
      → cria `wedding`
      → redireciona para Dashboard
```

## Onboarding — Fornecedores

```
Email verificado → entra no Onboarding
  → Passo 1: "Qual é o nome do teu negócio?"
      [Input texto]
  → Passo 2: "Que serviços ofereces?"
      [Multi-seleção de categorias]
      → cria supplier_profile em draft
  → Passo 3: "Onde atuas?"
      [Multi-seleção de distritos/concelhos]
  → Passo 4: "Dados fiscais"
      [NIF] [Nome fiscal/empresa]
  → Passo 5: "Mostra o teu trabalho"
      [Upload de 1-3 fotos] (mínimo 1 obrigatório)
  → Ecrã final: "O teu perfil está quase pronto!"
      → supplier_profile passa a status = pending_review
      → redireciona para Dashboard (supplier-app)
```
