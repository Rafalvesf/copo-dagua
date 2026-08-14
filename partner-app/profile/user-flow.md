# Profile (partner-app) — Fluxo do Utilizador

## Configuração inicial (wizard, primeira vez após signup)

```
Signup como Parceiro (backend/auth) → partner_profiles criado em 'draft' (trigger)
  → Wizard "Cria o teu perfil" (não pode ser saltado — bloqueia acesso ao resto da partner-app)
      Passo 1/6 — Negócio
        [Nome comercial] [Tipo: Individual/Empresa] [Descrição] [Anos de experiência] [Tamanho da equipa]
      Passo 2/6 — Categorias
        Grelha de chips selecionáveis (1 a 5) — ver taxonomia em requirements.md
      Passo 3/6 — Área de atuação
        [Seletor de distritos/concelhos] ou toggle "Atuo em todo o país"
      Passo 4/6 — Portefólio
        Upload de fotos (mínimo 3 para poder submeter, sem máximo rígido no MVP)
        → Definir imagem de capa (long-press ou botão "Tornar capa")
      Passo 5/6 — Preços
        Por cada categoria selecionada no Passo 2: campo "A partir de ___€"
      Passo 6/6 — Dados fiscais
        [NIF] [Morada de faturação] [Telefone de negócio] [Website/Instagram — opcionais]
      → "Submeter para revisão"
          → Validação de completude (RN04) — se falhar, aponta o(s) passo(s) em falta
          → Sucesso → status = 'pending_review' → ecrã "O teu perfil está em revisão"
```

## Ecrã de estado "em revisão"

```
Ecrã "Perfil em revisão"
  "A nossa equipa está a rever o teu perfil. Costuma demorar até 2 dias úteis."
  [ Ver perfil (pré-visualização, como os noivos o vão ver) ]
  [ Editar antes da decisão ]   → volta ao wizard/edição normal, mantém-se pending_review
```

## Decisão do administrador (executada em admin-web/partners/, refletida aqui)

```
pending_review → published
  → Notificação ao parceiro (mobile-app/notifications, ⏳) → "O teu perfil está publicado!"
  → partner-app liberta o acesso normal (dashboard, quotations, etc.)

pending_review → rejected (com motivo)
  → Notificação ao parceiro com o motivo
  → Ecrã "Perfil rejeitado" → mostra o motivo → [ Corrigir e voltar a submeter ]
      → volta ao wizard pré-preenchido com os dados existentes
```

## Edição pós-publicação

```
Perfil (menu principal) → "Editar perfil"
  → Ecrã com secções (Negócio, Categorias, Área, Portefólio, Preços, Dados fiscais)
  → Editar secção não-crítica (Portefólio, Preços, Área, Descrição)
      → Guardar → alteração fica imediatamente visível (RN08)
  → Editar secção crítica (Nome comercial, NIF, Categorias)
      → Aviso: "Esta alteração exige nova revisão. O teu perfil atual deixa de estar visível até aprovação."
      → Confirmar → Guardar → status = 'pending_review'
```

## Pausar / retomar visibilidade

```
Perfil → "Definições de visibilidade"
  → Toggle "Perfil pausado" (is_paused)
      Ligado  → "O teu perfil não aparece no Marketplace enquanto estiver pausado."
      Desligado → volta a aparecer imediatamente (se status = published)
```

## Perfil suspenso pelo administrador

```
Notificação: "O teu perfil foi suspenso" + motivo
  → Ecrã "Perfil suspenso" (bloqueia edição normal, mostra motivo e contacto de suporte)
  → Sem ação de auto-reativação — requer contacto com a Copo d'Água (fora de âmbito deste módulo)
```
