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
  // Animação «fantasma» (pedido 2026-11-25): uma faixa clara passa pelo
  // bloco da esquerda para a direita, com um pequeno atraso entre blocos
  // (lê-se como uma onda), em vez de só pulsar a cor.
  late final AnimationController _controller = AnimationController(vsync: this, duration: _sweep)
    ..value = (widget.delay % 3) * 0.12
    ..repeat();

  static const _sweep = Duration(milliseconds: 1400);

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final base = widget.color;
    final light = Color.lerp(base, Colors.white, 0.55)!;
    final shape = BorderRadius.circular(widget.radius);
    // Reduzir movimento: o bloco fica parado.
    if (MediaQuery.of(context).disableAnimations) {
      return ExcludeSemantics(
        child: Container(width: widget.width, height: widget.height, decoration: BoxDecoration(color: base, borderRadius: shape)),
      );
    }
    return ExcludeSemantics(
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, _) {
          // A faixa anda de fora (à esquerda) até fora (à direita).
          final t = Curves.easeInOut.transform(_controller.value) * 3 - 1.5;
          return Container(
            width: widget.width,
            height: widget.height,
            decoration: BoxDecoration(
              borderRadius: shape,
              gradient: LinearGradient(
                begin: Alignment(t - 1, -0.3),
                end: Alignment(t + 1, 0.3),
                colors: [base, light, base],
                stops: const [0.25, 0.5, 0.75],
              ),
            ),
          );
        },
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

  /// Fila de números por baixo do título (orçamento, resumos).
  final bool stats;
  const SkeletonPage({super.key, this.carousel = true, this.rows = 4, this.stats = false});

  @override
  // SizedBox.expand: ocupa sempre o ecrã inteiro, mesmo dentro de um Stack
  // ou de outro pai que não o estique (2026-11-24: ficava meio ecrã cinzento).
  Widget build(BuildContext context) => SizedBox.expand(
        child: Material(
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
                if (stats) ...const [SkeletonStats(), SizedBox(height: 20)],
                if (carousel) ...const [SkeletonEventCarousel(), SizedBox(height: 20)],
                for (var i = 0; i < rows; i++) SkeletonListRow(delay: i),
              ],
            ),
          ),
        ),
        ),
      );
}

/// Conversa a carregar: balões alternados (recebidos à esquerda, enviados à
/// direita), com larguras e alturas variadas, como as mensagens reais.
class SkeletonChat extends StatelessWidget {
  final int count;
  const SkeletonChat({super.key, this.count = 6});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            for (var i = 0; i < count; i++)
              Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: Row(
                  mainAxisAlignment: i.isOdd ? MainAxisAlignment.end : MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    if (i.isEven) ...[SkeletonCircle(size: 28, delay: i), const SizedBox(width: 8)],
                    Flexible(
                      child: FractionallySizedBox(
                        widthFactor: const [0.62, 0.48, 0.7, 0.4, 0.55, 0.66][i % 6],
                        child: SkeletonBox(height: i % 3 == 2 ? 58 : 38, radius: 18, delay: i),
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ),
      );
}

/// Página de perfil ou de parceiro a carregar.
class SkeletonProfilePage extends StatelessWidget {
  const SkeletonProfilePage({super.key});

  @override
  Widget build(BuildContext context) => const SizedBox.expand(
        child: Material(
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

// ---------------------------------------------------------------------------
// Cartões com foto (PhotoCard): parceiros, eventos públicos, eventos reais.
// 2026-11-24 («o esqueleto tem que ficar respetivo a cada elemento e ao seu
// tamanho»): as medidas são as do PhotoCard (shared/widgets/photo_card.dart)
// — moldura 1 #E3E3E3 cantos 22, foto 150 com cantos 21, avatar 44 (+3 de
// borda branca) a sair 22 por baixo da foto, informação a partir de 28,
// título 19, coração 32, metas 13, divisor 1 e rodapé.
// ---------------------------------------------------------------------------

/// Esqueleto de um `PhotoCard` com o mesmo tamanho. Com [height] (p.ex. 332
/// do cartão de parceiro) fica exatamente com essa altura; sem ela, fica
/// com a altura natural do conteúdo.
class SkeletonPhotoCard extends StatelessWidget {
  final double? width;
  final double? height;
  final bool avatar;
  final bool footer;
  final int delay;

  const SkeletonPhotoCard({
    super.key,
    this.width,
    this.height,
    this.avatar = true,
    this.footer = true,
    this.delay = 0,
  });

  /// O cartão de parceiro (`PartnerBigCard`).
  const SkeletonPhotoCard.partner({super.key, this.width = 330, this.delay = 0})
      : height = 332,
        avatar = true,
        footer = true;

  @override
  Widget build(BuildContext context) {
    final cover = SizedBox(
      height: 150,
      child: Stack(clipBehavior: Clip.none, fit: StackFit.expand, children: [
        SkeletonBox(height: 150, radius: 21, delay: delay),
        if (avatar)
          Positioned(
            left: 12,
            bottom: -22,
            child: Container(
              padding: const EdgeInsets.all(3),
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
              child: SkeletonCircle(size: 44, delay: delay + 1),
            ),
          ),
      ]),
    );
    final info = Padding(
      padding: EdgeInsets.fromLTRB(12, avatar ? 28 : 12, 12, 0),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          Expanded(child: SkeletonLine(widthFactor: 0.65, height: 19, delay: delay + 1)),
          const SizedBox(width: 8),
          SkeletonCircle(size: 26, delay: delay + 2),
        ]),
        const SizedBox(height: 7),
        SkeletonLine(widthFactor: 0.45, height: 12, delay: delay + 2),
        const SizedBox(height: 6),
        SkeletonLine(widthFactor: 0.7, height: 12, delay: delay),
      ]),
    );
    final foot = !footer
        ? null
        : Padding(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
              const SizedBox(height: 10),
              Row(children: [
                for (var i = 0; i < 3; i++)
                  Align(widthFactor: 0.7, child: SkeletonCircle(size: 24, delay: delay + i)),
                const SizedBox(width: 10),
                Expanded(child: SkeletonLine(widthFactor: 0.6, height: 11, delay: delay + 1)),
                const SizedBox(width: 8),
                Column(crossAxisAlignment: CrossAxisAlignment.end, mainAxisSize: MainAxisSize.min, children: [
                  SkeletonBox(width: 30, height: 9, radius: 4, delay: delay + 2),
                  const SizedBox(height: 4),
                  SkeletonBox(width: 56, height: 16, radius: 5, delay: delay),
                ]),
              ]),
            ]),
          );
    final body = height != null
        ? Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            cover,
            Expanded(child: Align(alignment: Alignment.topLeft, child: info)),
            ?foot,
            const SizedBox(height: 8),
          ])
        : Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            cover,
            info,
            ?foot,
            const SizedBox(height: 8),
          ]);
    return ExcludeSemantics(
      child: SizedBox(
        width: width,
        height: height,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: AppTheme.line),
          ),
          child: body,
        ),
      ),
    );
  }
}

/// Título de secção (22, negrito) como o `SectionHeading`, com a ação à
/// direita opcional («Ver todos», «Filtrar»).
class SkeletonSectionHeading extends StatelessWidget {
  final bool action;
  final double widthFactor;
  final EdgeInsetsGeometry padding;
  const SkeletonSectionHeading({
    super.key,
    this.action = false,
    this.widthFactor = 0.5,
    this.padding = const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 12),
  });

  @override
  Widget build(BuildContext context) => Padding(
        padding: padding,
        child: Row(children: [
          Expanded(child: SkeletonLine(widthFactor: widthFactor, height: 24)),
          if (action) ...const [SizedBox(width: 12), SkeletonBox(width: 52, height: 14, radius: 6, delay: 1)],
        ]),
      );
}

/// Pílulas das categorias (altura 52: «Todos» fixo com 72 à esquerda e as
/// outras com larguras de palavras diferentes).
class SkeletonPills extends StatelessWidget {
  const SkeletonPills({super.key});

  static const _widths = [96.0, 78.0, 110.0, 70.0, 92.0, 84.0];

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 52,
        child: Padding(
          padding: const EdgeInsets.only(top: 12, bottom: 6),
          child: ClipRect(
            child: OverflowBox(
              alignment: Alignment.centerLeft,
              maxWidth: double.infinity,
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                const SizedBox(width: AppTheme.screenMargin),
                const SkeletonBox(width: 72, height: 34, radius: 999),
                for (final (i, w) in _widths.indexed) ...[
                  const SizedBox(width: 8),
                  SkeletonBox(width: w, height: 34, radius: 999, delay: i + 1),
                ],
              ]),
            ),
          ),
        ),
      );
}

/// Página dos parceiros a carregar, com o mesmo desenho da página real:
/// «Em destaque» + carrossel de cartões de 330, «N parceiros» + «Filtrar» e
/// os cartões a toda a largura separados pela linha grossa (CardsDivider).
/// Não faz scroll nem transborda (fica no `body` de um NestedScrollView).
class SkeletonPartnersPage extends StatelessWidget {
  const SkeletonPartnersPage({super.key});

  @override
  Widget build(BuildContext context) => ListView(
        physics: const NeverScrollableScrollPhysics(),
        padding: EdgeInsets.zero,
        children: [
          const SkeletonSectionHeading(widthFactor: 0.45),
          SizedBox(
            height: 332 + 20,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              physics: const NeverScrollableScrollPhysics(),
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 20),
              itemCount: 3,
              separatorBuilder: (context, i) => const SizedBox(width: 10),
              itemBuilder: (context, i) => SkeletonPhotoCard.partner(delay: i),
            ),
          ),
          const SkeletonSectionHeading(
            action: true,
            widthFactor: 0.4,
            padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
          ),
          const SkeletonPhotoCardList(count: 2),
        ],
      );
}

/// Cartões com foto empilhados a toda a largura, separados pela linha grossa
/// (como as listas de parceiros, favoritos e eventos públicos).
class SkeletonPhotoCardList extends StatelessWidget {
  final int count;
  final double? cardHeight;
  final bool avatar;
  const SkeletonPhotoCardList({super.key, this.count = 2, this.cardHeight = 332, this.avatar = true});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
          for (var i = 0; i < count; i++) ...[
            if (i > 0)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 16),
                child: SizedBox(height: 2, child: ColoredBox(color: AppTheme.sectionLine)),
              ),
            SkeletonPhotoCard(height: cardHeight, avatar: avatar, delay: i),
          ],
        ]),
      );
}

/// Painel do evento a carregar (pedido 2026-11-25: «falta para os
/// eventos»): a capa a toda a largura, o resumo e duas molduras com linhas,
/// como o painel novo (§6.5). Organizador, convidado e eventos reais.
class SkeletonEventPanel extends StatelessWidget {
  final double cover;
  const SkeletonEventPanel({super.key, this.cover = 260});

  Widget _frame(int seed) => Container(
        margin: const EdgeInsets.only(top: 16),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: const Color(0xFFCFCFCF), width: 1.5),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SkeletonLine(widthFactor: 0.35, height: 10, delay: seed),
          const SizedBox(height: 8),
          SkeletonListRow(delay: seed, avatar: 44),
          SkeletonListRow(delay: seed + 1, avatar: 44),
        ]),
      );

  @override
  Widget build(BuildContext context) => SizedBox.expand(
        child: Material(
          color: AppTheme.background,
          child: SingleChildScrollView(
            physics: const NeverScrollableScrollPhysics(),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              SkeletonBox(height: cover + MediaQuery.paddingOf(context).top, radius: 0),
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 120),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const SkeletonBox(height: 120, radius: 22, delay: 1),
                  _frame(0),
                  _frame(1),
                ]),
              ),
            ]),
          ),
        ),
      );
}
