# Shared — design system

Fonte de verdade visual da app. Todas as telas, componentes e estados novos reutilizam estes tokens — cor, fundo, tipografia, raios, sombras e estados — em vez de inventar valores ad hoc.

Os tokens estão implementados em `mobile-app/app/lib/core/theme/app_theme.dart` (`AppTheme`, `AppColors`, `AppGradients`, `AppStatusColors`, `AppTypography`, `AppFontSize`, `AppRadius`). **O código é a fonte de verdade**; este documento descreve a intenção e tem de ser atualizado na mesma alteração que mudar um token.

## DNA visual

Limpo e calmo: fundo branco liso, um único verde-oliva como acento, caixas em cinzento-claro **sem sombra** (pedido explícito 2026-08-31), formas em pílula, títulos em Roboto Black e o resto em Roboto Regular/SemiBold. Sombra só onde dá contraste necessário: barras de pesquisa e a navbar flutuante.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `AppTheme.background` | `#FFFFFF` | Fundo de todos os ecrãs |
| `AppTheme.ink` | `#171713` | Texto, ícones |
| `AppTheme.inkMuted` | = `ink` | Texto secundário — mesmo preto sólido de propósito; a hierarquia faz-se por tamanho/peso, não por cinza |
| `AppTheme.navIconMuted` | `#57534E` | Só ícones inativos da navbar e ícones de estados vazio/erro |
| `AppTheme.accentOliveDark` | `#5F7545` | Única cor de acento: botões primários, estado ativo, progresso, spinners |
| `AppTheme.surface` | `#F0F0F0` | Cards e caixas (substitui a sombra) |
| `AppTheme.borderMuted` | `#E6E0D2` | Contornos subtis (chips, outline, separadores, trilho de progresso) |
| `AppTheme.outerBackdrop` | `#EAE3D1` | Fundo atrás da moldura de telemóvel em janelas largas |
| `AppColors.green` | `#DDE5D3` | Seleção suave (chips, pills) |
| `AppColors.gray` / `muted` | `#EEF2E9` | Campos de input, pesquisa |
| `AppColors.blue/yellow/pink/purple` | pastéis | Cards de destaque por categoria |
| `AppStatusColors.confirmed` | `#2EAD65` | Confirmado / ativo |
| `AppStatusColors.pending` | `#F2A01B` | Pendente |
| `AppStatusColors.declined` | `#EF5350` | Recusado |

Cores de estado nunca aparecem em bloco sólido: os badges usam a cor a `alpha: 0.15` como fundo e a cor cheia no texto/ícone.

## Fundos (`AppGradients` via `GradientScaffold`)

| Fundo | Valor | Quando |
|---|---|---|
| `AppBackground.hero` | sálvia `#E6E7D5` → branco, diagonal | Primeira impressão: boas-vindas, onboarding, escolha de papel |
| `AppBackground.feed` | branco liso | Listas e dashboard |
| `AppBackground.subtle` | branco liso | Formulários e detalhe |
| `AppBackground.mood` | sálvia sólido `#DCE3C8` | Momento celebratório único (fim do onboarding) |

Usar sempre `GradientScaffold(background: ...)` em vez de `Scaffold` para manter a escolha centralizada.

## Tipografia

Uma só família: **Roboto, embutida em `assets/fonts/roboto/`** (pesos 400, 500, 600, 700, 800, 900 + itálico 400; subset Latin + Latin-1 + Latin Extended-A). Não usar `google_fonts` nem outra família. Como os pesos estão declarados no `pubspec.yaml`, `FontWeight.w700` usa o ficheiro Bold real, sem negrito sintetizado.

- Títulos de destaque (`headlineMedium`/`headlineSmall`, `AppTypography.displaySerif()`): Roboto Black (w900). O nome `displaySerif` é histórico e não tem serifa.
- Todo o resto: Roboto 400–800.

### Escala (`AppFontSize`) — os únicos tamanhos permitidos

| Token | px | Uso típico |
|---|---|---|
| `xxxs` | 9 | Micro-labels (navbar, avatares agrupados) |
| `xxs` | 10 | Contadores, legendas mínimas |
| `xs` | 11 | Badges, meta-info |
| `sm` | 12 | Texto auxiliar |
| `md` | 13 | Texto secundário |
| `base` | 14 | Corpo (`bodyMedium`) |
| `lg` | 16 | Nomes, botões (`labelLarge`) |
| `xl` | 18 | Títulos de módulo (`titleMedium`) |
| `xxl` | 20 | Subtítulos de secção |
| `h3` | 22 | Título de ecrã/card (`titleLarge`, AppBar) |
| `h2` | 24 | |
| `h1` | 28 | `displaySerif()` por omissão |
| `display` | 34 | |
| `displayLg` | 42 | |
| `hero` | 50 | Saudação (`headlineMedium`) |

Na migração (2026-10), os meios-pontos foram arredondados para baixo (12.5 → 12, 13.5 → 13…) para nunca aumentar texto em sítios apertados. Exceções: 15 → 16 (nomes), 17 → 16, 26 → 24, 30 → 28. Fica um único literal, `7.5`, no badge numérico do checklist.

## Raios (`AppRadius`)

| Token | px | Uso |
|---|---|---|
| `xs` | 4 | Barras de progresso, indicadores finos |
| `sm` | 12 | Chips pequenos, thumbnails, badges |
| `md` | 16 | Botões, tiles, campos compactos |
| `lg` | 20 | Inputs, cards secundários |
| `xl` | 24 | Cards principais, topo de bottom sheets |
| `xxl` | 28 | Sheets/cards hero, topo da navbar de parceiro |
| `pill` | 999 | Pílulas e círculos |

Exceções que ficaram como literal: a moldura de telemóvel (`phone_frame.dart`, 40) e o ponto de notificação (2).

## Sombras

- `AppTheme.searchBarShadow` — só barras de pesquisa.
- `AppTheme.navBarShadow` — só docas ancoradas ao fundo (offset para cima).
- Nenhuma outra caixa tem sombra; o contraste vem de `AppTheme.surface`.

## Layout

- Mobile-first, ecrã de referência 375px.
- Margem lateral partilhada: `AppTheme.screenMargin` (28px). Conteúdo e navbar alinham-se a ela.
- AppBar transparente por omissão.

## Componentes

- **Botões primários** (`FilledButton`/`ElevatedButton` do tema): verde `accentOliveDark`, altura 54, raio `AppRadius.md`. `ArrowCtaButton` é a variante com seta circular embutida.
- **Botões/filtros**: pílula (`AppRadius.pill`); seleção com fundo `AppColors.green`.
- **Seletor de opções**: `CoverFlowPicker` (carrossel em loop, item central maior).
- **Pesquisa**: grande, `AppColors.gray`, pílula, `searchBarShadow`.
- **Avatares**: circulares (`InitialsAvatar`).
- **Toque**: `SnappyTap` (encolhe ligeiramente e volta com ressalto).
- **Ícones**: Material, variante `_outlined` sempre que exista; preenchido só para estado ativo.

## Estados

- **Erro** (`AsyncValue.when(error: ...)`): `AsyncErrorView(message?, onRetry?)` de `shared/widgets/feedback.dart`, com `onRetry: () => ref.invalidate(<provider>)`. Não escrever `Center(child: Text('Não foi possível carregar.'))` à mão.
- **Vazio** (ecrã ou lista inteira): `EmptyStateView(message, icon)`. Dentro de caixas de altura fixa basta um `Text`.
- **A carregar**: `CircularProgressIndicator()` sem cor própria; o tema já o pinta com `accentOliveDark`. Bloqueio de ecrã durante uma ação: `LoadingOverlay`.
- **Avisos**: `ErrorBanner` (erro de formulário), `PersistentWarningBanner` (aviso persistente com ação).

## Regra de consistência

Não criar padrões visuais novos sem necessidade. Se um valor não existir ainda (cor, tamanho, raio), adiciona-se a `app_theme.dart`, nunca como literal num ecrã. Assim uma correção futura chega à app inteira e não fica presa a um ecrã.
