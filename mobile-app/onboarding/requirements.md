# Onboarding — Requisitos

## Funcionalidades

### Onboarding — Noivos (role = couple)
- Definir nomes dos noivos (utilizador + opcionalmente parceiro/a)
- Definir data do casamento (ou "ainda não sei")
- Definir localização aproximada do casamento
- Estimativa inicial de número de convidados (editável depois em Guests)
- Estimativa inicial de orçamento total (opcional, editável depois em Budget)
- Convidar o parceiro/a para colaborar na mesma wedding (opcional)
- Criação automática da entidade `wedding` no fim do wizard

### Onboarding — Fornecedores (role = supplier)
- Nome do negócio / marca
- Categoria(s) de serviço (multi-seleção, lista fechada)
- Zona de atuação (concelhos/distritos)
- NIF / dados fiscais básicos
- Upload de 1 a 3 fotos de portefólio (mínimo 1 obrigatório)
- Criação automática do registo `supplier_profile` (estado `draft`, não visível no Marketplace)

### Comuns
- Barra de progresso sempre visível
- Passos não obrigatórios podem ser saltados
- Persistência de progresso — retoma exatamente onde ficou

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Onboarding só acessível com email verificado (dependência de backend/auth RN04). |
| RN02 | Onboarding é obrigatório antes do Dashboard — não há "saltar tudo". |
| RN03 | Noivos: a `wedding` só é criada no fim do wizard, não campo a campo — evita registos parciais. |
| RN04 | Fornecedores: o `supplier_profile` é criado em `draft` assim que nome + categoria estão definidos — reduz custo de abandono a meio, ao contrário de RN03. |
| RN05 | Convite ao parceiro nunca bloqueia o avanço — sempre opcional. |
| RN06 | Data do casamento pode ficar por definir; funcionalidades dependentes (contagem decrescente, prazos) mostram estado alternativo. |
| RN07 | Um utilizador só pode ser `owner_id` de uma wedding; pode ser colaborador de outras (fora de âmbito aqui, ver mobile-app/wedding). |
| RN08 | NIF validado só por formato/checksum no onboarding — validação fiscal completa acontece na ligação ao Stripe Connect. |

## Risco identificado

RN08 significa que podemos ter NIFs mal preenchidos até ao momento de pagamento — trade-off consciente para reduzir fricção no onboarding, resolvido mais tarde no funil quando o fornecedor já está mais investido.
