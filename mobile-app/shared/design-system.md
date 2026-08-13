# Shared — design system

Fonte de verdade visual da app. Todas as telas, componentes e estados novos devem reutilizar estes tokens — paleta, tipografia, espaçamento, border-radius, sombras, ícones e hierarquia — em vez de inventar valores ad-hoc. Em caso de dúvida, prioriza a semelhança com o ecrã de Convidados (`mobile-app/app/lib/features/guests/screens/guests_list_screen.dart`), que serviu de referência visual principal.

Os tokens abaixo estão implementados em `mobile-app/app/lib/core/theme/app_theme.dart` (`AppTheme`, `AppColors`, `AppStatusColors`, `AppTypography`) — este documento descreve a intenção; o código é a implementação executável.

## DNA visual

Minimalista, elegante, clean, moderno e amigável — estética de app de casamento/eventos. Fundo predominantemente branco, muito espaço em branco, baixa densidade visual, sombras extremamente suaves.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `AppTheme.ink` | `#141719` | Texto principal, ícones, botão primário |
| `AppTheme.inkMuted` | `#6E7378` | Texto secundário |
| `AppTheme.background` | `#FFFFFF` | Fundo predominante |
| `AppColors.green` | `#E2F7DE` | Verde suave — destaque/seleção (chips, pills, tile "Todos") |
| `AppStatusColors.confirmed` | `#2EAD65` | Confirmado |
| `AppStatusColors.pending` | `#F2A01B` | Pendente (fundo creme suave = a própria cor a 15% alpha) |
| `AppStatusColors.declined` | `#EF5350` | Recusado (fundo vermelho muito claro = a própria cor a 15% alpha) |

As cores de estado nunca aparecem em bloco sólido sobre fundo — os badges (`RsvpStatusBadge`) usam a cor a `alpha: 0.15` como fundo e a cor cheia no texto/ícone, gerando o tom pastel suave a partir de uma única fonte de verdade.

## Layout

- Mobile-first.
- Margem lateral partilhada por **todos** os ecrãs: `AppTheme.screenMargin` (28px) — conteúdo e navbar flutuante alinham-se à mesma largura.
- Header no topo (título + `CircleBackButton` + ações), conteúdo central, `FloatingBottomNav` fixo no fundo.
- Elementos organizados verticalmente, alinhados à mesma margem.

## Componentes

- **Cards**: fundo branco, `border-radius` 18–20px, sombra sempre a mesma: `BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: Offset(0, 3))`.
- **Botões/filtros**: formato pill (`border-radius: 999`). Seleção usa `AppColors.green` como fundo — nunca preto (isso é reservado ao CTA primário).
- **Seletor de opções** (categorias, filtros, ícone da navbar): `CoverFlowPicker` — carrossel horizontal em loop infinito, a opção centrada fica maior/opaca, snap suave ao largar. Rótulos de texto usam `CategoryPillLabel` (fundo verde + sombra só quando selecionado).
- **Campo de pesquisa**: grande, `AppColors.gray`, pill.
- **Avatares**: circulares.
- **Botão primário**: circular ou pill preto (`AppTheme.ink`).
- **Bottom nav**: cápsula preta, cantos totalmente arredondados (`FloatingBottomNav`).
- **Botões circulares de ícone** (`CircleIconButton`): fundo branco, sombra igual à dos cards, feedback de toque via `SnappyTap` (encolhe ligeiramente e volta com leve ressalto).
- **Ícones**: `Icons` do Material, sempre em variante `_outlined` quando disponível — finos, nunca preenchidos a não ser para indicar estado ativo.

## Tipografia

Inter (via `google_fonts`), escala definida para ecrã de referência 375px:

| Papel | Tamanho | Peso |
|---|---|---|
| Títulos (`textTheme.titleLarge`) | 22px | w600 |
| Nomes (convidado, fornecedor) | ~16px | w600–w700 |
| Texto secundário/subtítulos | ~13px | w400–w600 |
| Labels / status (badges) | 13–14px | w600 |
| Números de destaque (stat tiles) | 17–18px | w800 |

## Regra de consistência

Não criar novos padrões visuais sem necessidade. Componentes novos reutilizam os tokens acima; se um valor não existir ainda (nova cor, novo raio), adiciona-o a `AppTheme`/`AppColors` em vez de o hardcodar localmente — assim uma correção futura propaga-se à app inteira em vez de ficar presa a um ecrã.
