# Shared — design system

Fonte de verdade visual da app. Todas as telas, componentes e estados novos devem reutilizar estes tokens — paleta, gradientes, tipografia, espaçamento, border-radius, sombras, ícones e hierarquia — em vez de inventar valores ad-hoc. Em caso de dúvida, prioriza a semelhança com o ecrã de Boas-vindas (`mobile-app/app/lib/features/auth/screens/welcome_screen.dart`) ou o Feed principal (`mobile-app/app/lib/features/home/screens/home_feed_screen.dart`), que serviram de referência visual principal para este redesign.

Os tokens abaixo estão implementados em `mobile-app/app/lib/core/theme/app_theme.dart` (`AppTheme`, `AppColors`, `AppGradients`, `AppStatusColors`, `AppTypography`) — este documento descreve a intenção; o código é a implementação executável.

## DNA visual

Limpo e neutro — fundo cinzento bem claro e uniforme em todos os ecrãs, cards brancos que "flutuam" com sombra difusa e tingida (nunca cinzenta/dura), formas em pílula/circulares, títulos serifados misturados com corpo de texto sans-serif limpo.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `AppTheme.ink` | `#1E1A22` | Texto principal, ícones, botão primário (pílula escura) |
| `AppTheme.inkMuted` | `#7A7480` | Texto secundário |
| `AppTheme.background` | `#F4F4F5` | Fundo plano de todos os ecrãs (cinzento bem claro, via `GradientScaffold`) |
| `AppTheme.accentLavender` | `#9C8FD9` | Acento de marca — estados selecionados/ativos, `GradientMark` |
| `AppTheme.accentDeep` | `#6C56B3` | Variante mais escura do acento — tinge as sombras dos cards |
| `AppTheme.borderMuted` | `#E6DFD6` | Contorno neutro e quente (chips, botões outline, separadores) |
| `AppColors.green` | `#E7F0DE` | Verde suave — destaque/seleção (chips, pills, tile "Todos") |
| `AppStatusColors.confirmed` | `#2EAD65` | Confirmado / ativo |
| `AppColors.greenDark` | `#174D3B` | Destaque forte — com moderação (cards de destaque, progresso importante, ícones/números que precisam de mais peso). Nunca como cor de base. |
| `AppStatusColors.pending` | `#F2A01B` | Pendente (fundo creme suave = a própria cor a 15% alpha) |
| `AppStatusColors.declined` | `#EF5350` | Recusado (fundo vermelho muito claro = a própria cor a 15% alpha) |

As cores de estado nunca aparecem em bloco sólido sobre fundo — os badges (`RsvpStatusBadge`) usam a cor a `alpha: 0.15` como fundo e a cor cheia no texto/ícone, gerando o tom pastel suave a partir de uma única fonte de verdade.

Hierarquia dos três verdes: `AppColors.green` (normal) → `AppStatusColors.confirmed` (ativo/confirmado) → `AppColors.greenDark` (destaque forte, usado com moderação, nunca em todo o lado).

## Fundo (`AppGradients`)

Apesar do nome (herdado do redesign anterior, em gradiente), `AppGradients` guarda hoje 4 cores planas — todas o mesmo cinzento bem claro (`#F4F4F5`). Aplica-se sempre através de `GradientScaffold` (`mobile-app/app/lib/shared/widgets/gradient_scaffold.dart`) — nunca diretamente num `Scaffold`. Os 4 valores (`hero`, `feed`, `subtle`, `moodSolid`) existem só para não obrigar a tocar em todos os ecrãs se um dia se quiser voltar a diferenciar o fundo por tipo de ecrã — hoje são idênticos.

`GradientScaffold(background: AppBackground.hero|feed|subtle|mood, ...)` substitui `Scaffold(...)` sem alterar mais nada no ecrã — só o fundo muda.

## Layout

- Mobile-first.
- Margem lateral partilhada por **todos** os ecrãs: `AppTheme.screenMargin` (28px) — conteúdo e navbar flutuante alinham-se à mesma largura.
- Header no topo (título + `CircleBackButton` + ações), conteúdo central, `FloatingBottomNav` fixo no fundo.
- Elementos organizados verticalmente, alinhados à mesma margem.
- `AppBarTheme` é transparente por omissão — deixa o gradiente do `GradientScaffold` mostrar-se através de qualquer `AppBar` sem precisar de configuração por ecrã.

### Separadores principais

A app tem 4 separadores de topo, sempre acessíveis através do `FloatingBottomNav`: **Home** (`/home`), **Parceiros** (`/partners`), **Chat** (`/chat`) e o boneco/mascote (`/mascot`, ecrã `MascotHubScreen`). O ecrã `/wedding` (`WeddingDetailsScreen`, com o formulário de edição e o seletor de boneco) deixou de estar diretamente na navbar — é alcançado a partir do ícone de editar na capa do Home ou do atalho "Ver agenda do casamento" no hub do boneco.

## Componentes

- **Cards**: fundo branco (contraste sobre o fundo cinzento claro), `border-radius` 18–24px, sombra sempre a mesma dupla: `AppTheme.cardShadow` (normal) / `AppTheme.cardShadowStrong` (hover/destaque) — difusa, tingida com `AppTheme.accentDeep` a baixa opacidade, nunca cinzenta/dura.
- **Botões/filtros**: formato pill (`border-radius: 999`). Seleção usa `AppColors.green` como fundo — nunca preto (isso é reservado ao CTA primário).
- **Seletor de opções** (categorias, filtros, ícone da navbar): `CoverFlowPicker` — carrossel horizontal em loop infinito, a opção centrada fica maior/opaca, snap suave ao largar. Rótulos de texto usam `CategoryPillLabel` (fundo verde + sombra só quando selecionado).
- **Campo de pesquisa**: grande, `AppColors.gray`, pill.
- **Avatares**: circulares.
- **Botão primário**: pílula escura (`AppTheme.ink`) — `PrimaryButton` para ações simples, `ArrowCtaButton` quando o padrão pede a seta circular branca embutida no canto.
- **Marca/logo** (`GradientMark`): círculo com gradiente lavanda (`accentLavender` → `accentDeep`), nunca preenchimento sólido.
- **Bottom nav** (`FloatingBottomNav`): pílula branca flutuante, destacada do fundo em todos os lados (margem `AppTheme.screenMargin`), com 4 separadores lado a lado — Home, Parceiros, Chat e o boneco do casal. O separador ativo ganha um círculo preenchido a `AppTheme.ink` com ícone branco (não `accentLavender` — reservado ao anel do boneco). O boneco do casal é sempre uma foto/ilustração circular (nunca um ícone Material) com um anel `accentLavender`; o anel passa a `AppTheme.ink` quando este é o separador ativo.
- **Botões circulares de ícone** (`CircleIconButton`): fundo branco, sombra igual à dos cards, feedback de toque via `SnappyTap` (encolhe ligeiramente e volta com leve ressalto).
- **Ícones**: `Icons` do Material, sempre em variante `_outlined` quando disponível — finos, nunca preenchidos a não ser para indicar estado ativo.

## Tipografia

Dois papéis, nunca misturados dentro do mesmo bloco de texto:

- **Serifado (Fraunces, via `google_fonts`)** — só para títulos de página/saudações/perguntas de destaque (`textTheme.headlineMedium`/`headlineSmall`, ou `AppTypography.displaySerif()` fora do `textTheme`). Editorial mas arredondado/amigável, nunca formal-rígido.
- **Sans (Inter, via `google_fonts`)** — tudo o resto: corpo de texto, botões, labels, nomes, badges.

Escala definida para ecrã de referência 375px:

| Papel | Fonte | Tamanho | Peso |
|---|---|---|---|
| Saudação/pergunta de destaque (`headlineMedium`/`headlineSmall`) | Fraunces | 34–50px | w600 |
| Títulos (`textTheme.titleLarge`) | Inter | 22px | w600 |
| Nomes (convidado, parceiro) | Inter | ~16px | w600–w700 |
| Texto secundário/subtítulos | Inter | ~13px | w400–w600 |
| Labels / status (badges) | Inter | 13–14px | w600 |
| Números de destaque (stat tiles) | Inter | 17–18px | w800 |

## Regra de consistência

Não criar novos padrões visuais sem necessidade. Componentes novos reutilizam os tokens acima; se um valor não existir ainda (nova cor, novo gradiente, novo raio), adiciona-o a `AppTheme`/`AppColors`/`AppGradients` em vez de o hardcodar localmente — assim uma correção futura propaga-se à app inteira em vez de ficar presa a um ecrã.
