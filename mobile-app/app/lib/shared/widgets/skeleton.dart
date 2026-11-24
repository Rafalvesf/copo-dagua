import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Esqueletos "a carregar" (pedido 2026-11-23: «loading animado em vez de
/// aparecer uma imagem incorreta»). Três peças repetidas — bloco
/// ([SkeletonBox]), linha ([SkeletonLine]) e círculo ([SkeletonCircle]) — e,
/// com elas, um esqueleto por elemento da app com o tamanho do elemento
/// real, para o ecrã não saltar quando o conteúdo chega.
///
/// Os blocos pulsam com um pequeno atraso entre si (`delay` 0, 1 ou 2): lê-se
/// como uma onda em vez de piscar tudo ao mesmo tempo.

const _pulse = Duration(milliseconds: 900);

/// Cores do esqueleto (2026-11-24, «não vejo a animação do load»): antes o
/// bloco era `AppTheme.surface` (#F2F2F2), a mesma cor do fundo da página,
/// e não se via. Agora é um cinzento que se destaca do fundo e dos cartões
/// brancos, e pulsa entre este tom e um mais escuro.
const skeletonBase = Color(0xFFE2E2E2);
const skeletonPeak = Color(0xFFCFCFCF);

/// Bloco que pulsa suavemente. Fotos, botões, QR, números.
class SkeletonBox extends StatefulWidget {
  final double? width;
  final double height;
  final double radius;

  /// Cor de base; a pulsação escurece-a um pouco. Por omissão, [skeletonBase].
  final Color color;

  /// Atraso da pulsação, em passos de 150 ms (0, 1 ou 2).
  final int delay;

  const SkeletonBox({
    super.key,
    this.width,
    required this.height,
    this.radius = AppRadius.lg,
    this.color = skeletonBase,
    this.delay = 0,
  });

  @override
  State<SkeletonBox> createState() => _SkeletonBoxState();
}

class _SkeletonBoxState extends State<SkeletonBox> with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(vsync: this, duration: _pulse)
    ..value = (widget.delay % 3) * 150 / _pulse.inMilliseconds
    ..repeat(reverse: true);

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Pulsa a cor (não a transparência): com transparência, um bloco
    // claro sobre um fundo claro quase não mudava.
    final peak = widget.color == skeletonBase
        ? skeletonPeak
        : Color.lerp(widget.color, const Color(0xFF000000), 0.08)!;
    final curve = CurvedAnimation(parent: _controller, curve: Curves.easeInOut);
    return ExcludeSemantics(
      child: AnimatedBuilder(
        animation: curve,
        builder: (context, _) => Container(
          width: widget.width,
          height: widget.height,
          decoration: BoxDecoration(
            color: Color.lerp(widget.color, peak, curve.value),
            borderRadius: BorderRadius.circular(widget.radius),
          ),
        ),
      ),
    );
  }
}

/// Linha de texto (títulos, nomes, datas). [widthFactor] é a fração da
/// largura disponível; [height] segue o tamanho da letra.
class SkeletonLine extends StatelessWidget {
  final double widthFactor;
  final double height;
  final int delay;

  const SkeletonLine({super.key, this.widthFactor = 1, this.height = 12, this.delay = 0});

  @override
  Widget build(BuildContext context) => FractionallySizedBox(
        alignment: Alignment.centerLeft,
        widthFactor: widthFactor,
        child: SkeletonBox(height: height, radius: 6, delay: delay),
      );
}

/// Círculo (avatares, logótipos).
class SkeletonCircle extends StatelessWidget {
  final double size;
  final int delay;

  const SkeletonCircle({super.key, this.size = 40, this.delay = 0});

  @override
  Widget build(BuildContext context) =>
      SkeletonBox(width: size, height: size, radius: AppRadius.pill, delay: delay);
}

// ---------------------------------------------------------------------------
// Elementos montados com as três peças.
// ---------------------------------------------------------------------------

/// Título de página (28) e, opcionalmente, de secção (22).
class SkeletonTitle extends StatelessWidget {
  final bool section;
  const SkeletonTitle({super.key, this.section = true});

  @override
  Widget build(BuildContext context) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const SkeletonLine(widthFactor: 0.55, height: 26),
          if (section) ...const [SizedBox(height: 18), SkeletonLine(widthFactor: 0.4, height: 18, delay: 1)],
        ],
      );
}

/// Cartão de evento ou de parceiro com foto (carrosséis e listas).
class SkeletonEventCard extends StatelessWidget {
  final double? width;
  final double photoHeight;
  final int delay;

  const SkeletonEventCard({super.key, this.width, this.photoHeight = 150, this.delay = 0});

  @override
  Widget build(BuildContext context) => SizedBox(
        width: width,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            SkeletonBox(height: photoHeight, radius: AppRadius.xl, delay: delay),
            const SizedBox(height: 10),
            SkeletonLine(widthFactor: 0.8, height: 17, delay: delay + 1),
            const SizedBox(height: 8),
            SkeletonLine(widthFactor: 0.55, height: 12, delay: delay + 2),
            const SizedBox(height: 10),
            Row(children: [
              for (var i = 0; i < 3; i++)
                Align(widthFactor: 0.75, child: SkeletonCircle(size: 24, delay: delay + i)),
            ]),
          ],
        ),
      );
}

/// Carrossel horizontal de cartões de evento.
class SkeletonEventCarousel extends StatelessWidget {
  final int count;
  final double cardWidth;
  const SkeletonEventCarousel({super.key, this.count = 3, this.cardWidth = 240});

  @override
  Widget build(BuildContext context) => SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        physics: const NeverScrollableScrollPhysics(),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (var i = 0; i < count; i++) ...[
              if (i > 0) const SizedBox(width: 12),
              SkeletonEventCard(width: cardWidth, delay: i),
            ],
          ],
        ),
      );
}

/// Lista vertical de cartões de evento (p.ex. «Os meus eventos» do convidado).
class SkeletonEventCards extends StatelessWidget {
  final int count;
  const SkeletonEventCards({super.key, this.count = 3});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 16),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          for (var i = 0; i < count; i++) ...[
            if (i > 0) const SizedBox(height: 20),
            SkeletonEventCard(photoHeight: 180, delay: i),
          ],
        ]),
      );
}

/// Linha de lista: avatar + nome + subtítulo (mensagens, convidados,
/// reservas, pagamentos...).
class SkeletonListRow extends StatelessWidget {
  final int delay;
  final double avatar;
  const SkeletonListRow({super.key, this.delay = 0, this.avatar = 40});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Row(children: [
          SkeletonCircle(size: avatar, delay: delay),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                SkeletonLine(widthFactor: const [0.6, 0.5, 0.7][delay % 3], height: 14, delay: delay),
                const SizedBox(height: 7),
                SkeletonLine(widthFactor: const [0.85, 0.7, 0.6][delay % 3], height: 11, delay: delay + 1),
              ],
            ),
          ),
        ]),
      );
}

/// Lista de [count] linhas — o substituto do spinner no meio do ecrã.
/// Não faz scroll, por isso cabe dentro de qualquer lista ou coluna.
class SkeletonList extends StatelessWidget {
  final int count;
  final EdgeInsetsGeometry padding;
  const SkeletonList({
    super.key,
    this.count = 6,
    this.padding = const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 16),
  });

  @override
  Widget build(BuildContext context) => Padding(
        padding: padding,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [for (var i = 0; i < count; i++) SkeletonListRow(delay: i)],
        ),
      );
}

/// Grelha de fotos (galeria, portefólio).
class SkeletonGrid extends StatelessWidget {
  final int count;
  final int columns;
  const SkeletonGrid({super.key, this.count = 9, this.columns = 3});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.all(AppTheme.screenMargin),
        child: LayoutBuilder(builder: (context, c) {
          const gap = 6.0;
          final side = (c.maxWidth - gap * (columns - 1)) / columns;
          return Wrap(
            spacing: gap,
            runSpacing: gap,
            children: [
              for (var i = 0; i < count; i++)
                SkeletonBox(width: side, height: side, radius: AppRadius.sm, delay: i % 3),
            ],
          );
        }),
      );
}

/// Cabeçalho de perfil ou de parceiro: foto + nome + subtítulo.
class SkeletonProfileHeader extends StatelessWidget {
  const SkeletonProfileHeader({super.key});

  @override
  Widget build(BuildContext context) => const Row(children: [
        SkeletonCircle(size: 64),
        SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              SkeletonLine(widthFactor: 0.7, height: 18, delay: 1),
              SizedBox(height: 8),
              SkeletonLine(widthFactor: 0.45, height: 12, delay: 2),
            ],
          ),
        ),
      ]);
}

/// Fila de números (estatísticas do parceiro, resumo do evento).
class SkeletonStats extends StatelessWidget {
  final int count;
  const SkeletonStats({super.key, this.count = 3});

  @override
  Widget build(BuildContext context) => Row(children: [
        for (var i = 0; i < count; i++) ...[
          if (i > 0) const SizedBox(width: 8),
          Expanded(child: SkeletonBox(height: 56, radius: AppRadius.md, delay: i)),
        ],
      ]);
}

/// QR (entrada e pagamento) com a linha por baixo.
class SkeletonQr extends StatelessWidget {
  final double size;
  const SkeletonQr({super.key, this.size = 200});

  @override
  Widget build(BuildContext context) => Column(mainAxisSize: MainAxisSize.min, children: [
        SkeletonBox(width: size, height: size, radius: AppRadius.md),
        const SizedBox(height: 10),
        SkeletonBox(width: size * 0.6, height: 12, radius: 6, delay: 1),
      ]);
}

/// Botão principal (pílula).
class SkeletonButton extends StatelessWidget {
  final double height;
  const SkeletonButton({super.key, this.height = 48});

  @override
  Widget build(BuildContext context) => SkeletonBox(height: height, radius: AppRadius.pill);
}

/// Página inteira a carregar: título, carrossel e lista. Para ecrãs que
/// ainda não sabem o que vão mostrar (p.ex. enquanto o código do ecrã chega).
class SkeletonPage extends StatelessWidget {
  final bool carousel;
  final int rows;
  const SkeletonPage({super.key, this.carousel = true, this.rows = 4});

  @override
  Widget build(BuildContext context) => Material(
        color: AppTheme.background,
        child: SafeArea(
          child: SingleChildScrollView(
            physics: const NeverScrollableScrollPhysics(),
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 24, AppTheme.screenMargin, 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SkeletonTitle(),
                const SizedBox(height: 16),
                if (carousel) ...const [SkeletonEventCarousel(), SizedBox(height: 20)],
                for (var i = 0; i < rows; i++) SkeletonListRow(delay: i),
              ],
            ),
          ),
        ),
      );
}

/// Página de perfil ou de parceiro a carregar.
class SkeletonProfilePage extends StatelessWidget {
  const SkeletonProfilePage({super.key});

  @override
  Widget build(BuildContext context) => const Material(
        color: AppTheme.background,
        child: SafeArea(
          child: SingleChildScrollView(
            physics: NeverScrollableScrollPhysics(),
            padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 24, AppTheme.screenMargin, 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SkeletonBox(height: 200, radius: AppRadius.xl),
                SizedBox(height: 16),
                SkeletonProfileHeader(),
                SizedBox(height: 16),
                SkeletonStats(),
                SizedBox(height: 20),
                SkeletonLine(height: 12),
                SizedBox(height: 8),
                SkeletonLine(widthFactor: 0.9, height: 12, delay: 1),
                SizedBox(height: 8),
                SkeletonLine(widthFactor: 0.6, height: 12, delay: 2),
                SizedBox(height: 24),
                SkeletonButton(),
              ],
            ),
          ),
        ),
      );
}

/// `frameBuilder` de fotos da internet: o bloco a pulsar enquanto a foto
/// carrega e, quando chega, a foto aparece com um fade por cima. Usado por
/// `SizedNetworkImage` e por qualquer `Image(frameBuilder: skeletonImageFrame)`.
Widget skeletonImageFrame(BuildContext context, Widget child, int? frame, bool wasSynchronouslyLoaded) {
  if (wasSynchronouslyLoaded) return child;
  return Stack(fit: StackFit.passthrough, children: [
    const Positioned.fill(child: SkeletonBox(height: double.infinity, radius: 0)),
    AnimatedOpacity(
      opacity: frame == null ? 0 : 1,
      duration: const Duration(milliseconds: 220),
      curve: Curves.easeOut,
      child: child,
    ),
  ]);
}

/// `errorBuilder` de fotos: bloco neutro com um ícone, em vez de nada ou
/// de uma foto errada.
Widget skeletonImageError(BuildContext context, Object error, StackTrace? stack) => Container(
      color: skeletonBase,
      alignment: Alignment.center,
      child: const Icon(Icons.image_not_supported_outlined, color: AppTheme.inkMuted, size: 22),
    );
