import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';

/// Folhas e diálogos "ilha" (pedido 2026-10-18): um cartão branco a
/// flutuar, cantos redondos em toda a volta e sombra — nunca encostado ao
/// fundo do ecrã. Substitui `showModalBottomSheet` e `showDialog` em toda
/// a app, com a mesma forma de chamar.
///
/// Pedido do Rafael (2026-11-20): todos os popups têm **o tamanho da
/// navbar** — 20 dos lados (a largura das caixas de conteúdo), 20 em baixo (ou a margem segura, se for maior),
/// cantos 35 — e **nascem na navbar**: uma onda de cor (verde da marca)
/// sai do centro da navbar e cresce em círculo até encher o popup; depois a
/// cor desfaz-se no branco à medida que o conteúdo entra. Ao fechar, a onda
/// volta a encolher para a navbar. Com «reduzir movimento» só aparece e
/// desaparece.
///
/// Sair pergunta sempre (pedido do Rafael, 2026-11-20): tocar no «×»
/// ([IslandCloseButton]), tocar fora ou puxar para baixo abre «Tens a
/// certeza que queres sair?». Escolher uma opção ou terminar o popup
/// (`Navigator.pop(context, valor)`) fecha sem perguntar. Os diálogos
/// ([showIslandDialog]) e os menus «⋯» ([IslandMenuButton]) não perguntam:
/// já são, eles próprios, a pergunta ou a escolha.
Future<T?> showIslandSheet<T>({
  required BuildContext context,
  required WidgetBuilder builder,
  bool isScrollControlled = false,
  // Aceites só para manter as chamadas antigas; a ilha define o seu
  // próprio fundo e forma.
  Color? backgroundColor,
  ShapeBorder? shape,
  bool isDismissible = true,
  bool confirmExit = true,
}) {
  final navigator = Navigator.of(context);
  return navigator.push<T>(
    _IslandRoute<T>(
      builder: builder,
      isScrollControlled: isScrollControlled,
      dismissible: isDismissible,
      confirmExit: confirmExit,
      capturedThemes: InheritedTheme.capture(from: context, to: navigator.context),
      barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,
    ),
  );
}

/// Medidas da navbar (`floating_bottom_nav.dart`: `kNavRadius`, margens
/// 20/20 — a mesma largura das caixas de conteúdo) — o popup ocupa o mesmo sítio e a onda nasce no centro dela.
const double kIslandRadius = 35;
const double _kIslandSide = AppTheme.screenMargin;
const double _kIslandBottom = 20;
const double _kNavHeight = 70;

class _IslandRoute<T> extends PopupRoute<T> {
  _IslandRoute({
    required this.builder,
    required this.isScrollControlled,
    required this.dismissible,
    required this.confirmExit,
    required this.capturedThemes,
    required String barrierLabel,
  }) : _barrierLabel = barrierLabel;

  final WidgetBuilder builder;
  final bool isScrollControlled;
  final bool dismissible;
  final bool confirmExit;
  final CapturedThemes capturedThemes;
  bool _asking = false;
  final String _barrierLabel;

  @override
  Color? get barrierColor => const Color(0x52171713);

  @override
  bool get barrierDismissible => dismissible;

  @override
  String? get barrierLabel => _barrierLabel;

  @override
  Duration get transitionDuration => const Duration(milliseconds: 560);

  @override
  Duration get reverseTransitionDuration => const Duration(milliseconds: 320);

  @override
  Widget buildPage(BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation) {
    final mq = MediaQuery.of(context);
    final bottom = math.max(_kIslandBottom, mq.padding.bottom) + mq.viewInsets.bottom;
    final full = mq.size.height - mq.padding.top - 24 - bottom;
    // Sem isScrollControlled a folha antiga ficava em 9/16 do ecrã.
    final maxH = isScrollControlled ? full : math.min(full, mq.size.height * 9 / 16);

    // O conteúdo já não precisa de afastar o teclado nem a barra de baixo
    // — a ilha trata disso. Caixas de texto cinzentas dentro da folha branca.
    final content = MediaQuery(
      data: mq.copyWith(viewInsets: EdgeInsets.zero, padding: EdgeInsets.zero, viewPadding: EdgeInsets.zero),
      child: Builder(
        builder: (c) {
          final t = Theme.of(c);
          return Theme(
            data: t.copyWith(inputDecorationTheme: t.inputDecorationTheme.copyWith(fillColor: AppTheme.surface)),
            child: Builder(builder: builder),
          );
        },
      ),
    );

    final island = capturedThemes.wrap(
      Padding(
        padding: EdgeInsets.fromLTRB(_kIslandSide, 0, _kIslandSide, bottom),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            ConstrainedBox(
              constraints: BoxConstraints(maxHeight: math.max(200, maxH), maxWidth: 560),
              child: GestureDetector(
                // Puxar para baixo fecha, como a folha antiga.
                onVerticalDragEnd: dismissible
                    ? (d) {
                        if ((d.primaryVelocity ?? 0) > 700) Navigator.of(context).maybePop();
                      }
                    : null,
                child: _NavGrow(animation: animation, child: content),
              ),
            ),
          ],
        ),
      ),
    );
    if (!confirmExit) return island;
    // «×», tocar fora, puxar para baixo e o «voltar» do sistema passam
    // todos por aqui (maybePop) e perguntam antes de fechar.
    return PopScope<T>(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) async {
        if (didPop || _asking) return;
        _asking = true;
        final leave = await askLeaveIsland(context);
        _asking = false;
        if (leave && context.mounted && isCurrent) Navigator.of(context).pop();
      },
      child: island,
    );
  }

  @override
  Widget buildTransitions(BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation, Widget child) =>
      child;
}

/// A animação: a onda nasce no centro da navbar e cresce até ser o popup.
class _NavGrow extends StatelessWidget {
  final Animation<double> animation;
  final Widget child;

  const _NavGrow({required this.animation, required this.child});

  static const _shadows = [
    BoxShadow(color: Color(0x2E171713), blurRadius: 40, offset: Offset(0, 16)),
    BoxShadow(color: Color(0x14171713), blurRadius: 6, offset: Offset(0, 2)),
  ];

  @override
  Widget build(BuildContext context) {
    final radius = BorderRadius.circular(kIslandRadius);
    if (MediaQuery.of(context).disableAnimations) {
      return FadeTransition(
        opacity: animation,
        child: DecoratedBox(
          decoration: BoxDecoration(borderRadius: radius, boxShadow: _shadows),
          child: Material(color: Colors.white, borderRadius: radius, clipBehavior: Clip.antiAlias, child: child),
        ),
      );
    }

    // Crescer: o círculo da onda, do centro da navbar até cobrir o popup.
    final grow = CurvedAnimation(
      parent: animation,
      curve: const Interval(0, 0.8, curve: Cubic(0.3, 0.7, 0.2, 1)),
      reverseCurve: const Interval(0, 0.65, curve: Curves.easeInCubic),
    );
    // Assentar: a cor da onda desfaz-se no branco e o conteúdo entra.
    final settle = CurvedAnimation(
      parent: animation,
      curve: const Interval(0.45, 1, curve: Curves.easeOut),
      reverseCurve: const Interval(0.55, 1, curve: Curves.easeIn),
    );
    final content = FadeTransition(
      opacity: settle,
      child: SlideTransition(
        position: Tween(begin: const Offset(0, 0.03), end: Offset.zero).animate(settle),
        child: child,
      ),
    );

    return AnimatedBuilder(
      animation: animation,
      child: content,
      builder: (context, content) {
        final s = settle.value;
        return DecoratedBox(
          decoration: BoxDecoration(
            borderRadius: radius,
            boxShadow: [
              for (final b in _shadows)
                BoxShadow(color: b.color.withValues(alpha: b.color.a * s), blurRadius: b.blurRadius, offset: b.offset),
            ],
          ),
          child: ClipPath(
            clipper: _WaveClipper(grow.value),
            child: ClipRRect(
              borderRadius: radius,
              child: Stack(
              children: [
                Material(color: Colors.white, child: content),
                if (s < 1)
                  Positioned.fill(
                    child: IgnorePointer(
                      child: ColoredBox(color: AppTheme.accentOliveDark.withValues(alpha: 1 - s)),
                    ),
                  ),
              ],
            ),
            ),
          ),
        );
      },
    );
  }
}

/// Recorte em círculo com centro no meio da navbar. A navbar e o popup
/// estão ambos a 20 do fundo, por isso o centro dela fica a 35 (metade da
/// altura) acima do fundo do popup. O raio vai de 0 até ao canto mais longe.
class _WaveClipper extends CustomClipper<Path> {
  final double t;

  const _WaveClipper(this.t);

  @override
  Path getClip(Size size) {
    final origin = Offset(size.width / 2, size.height - _kNavHeight / 2);
    final maxR = math.sqrt(origin.dx * origin.dx + origin.dy * origin.dy) + 2;
    final r = math.max(0.01, maxR * t.clamp(0.0, 1.0).toDouble());
    return Path()..addOval(Rect.fromCircle(center: origin, radius: r));
  }

  @override
  bool shouldReclip(_WaveClipper old) => old.t != t;
}

/// `showDialog` em forma de ilha (mesma assinatura usada na app).
Future<T?> showIslandDialog<T>({
  required BuildContext context,
  required WidgetBuilder builder,
  bool barrierDismissible = true,
}) =>
    showIslandSheet<T>(context: context, builder: builder, isDismissible: barrierDismissible, confirmExit: false);

/// «Tens a certeza que queres sair?» (DESIGN.md §6.1). Devolve `true` se a
/// pessoa escolher «Sair». Sem «×»: é a própria pergunta de sair.
Future<bool> askLeaveIsland(BuildContext context) async {
  final r = await showIslandSheet<bool>(
    context: context,
    confirmExit: false,
    builder: (ctx) => Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('Tens a certeza que queres sair?',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 4),
          const Text('O que preencheste neste popup não fica guardado.',
              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 20),
          Row(children: [
            Expanded(
              child: SizedBox(
                height: 52,
                child: OutlinedButton(
                  onPressed: () => Navigator.of(ctx).pop(true),
                  style: OutlinedButton.styleFrom(
                    shape: const StadiumBorder(),
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    foregroundColor: AppTheme.ink,
                    textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Sair'),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: SizedBox(
                height: 52,
                child: FilledButton(
                  onPressed: () => Navigator.of(ctx).pop(false),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.ink,
                    foregroundColor: Colors.white,
                    shape: const StadiumBorder(),
                    textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Continuar'),
                ),
              ),
            ),
          ]),
        ],
      ),
    ),
  );
  return r ?? false;
}

/// Botão redondo 44 dos popups (`#F2F0EB`, ícone 20): o «×» de fechar à
/// direita do título e o voltar à esquerda (DESIGN.md §6.1).
class IslandRoundButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const IslandRoundButton({super.key, required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: label,
        excludeSemantics: true,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
            child: Icon(icon, size: 20, color: AppTheme.ink),
          ),
        ),
      );
}

/// «×» de um popup: pergunta antes de sair (passa pelo `maybePop`).
class IslandCloseButton extends StatelessWidget {
  const IslandCloseButton({super.key});

  @override
  Widget build(BuildContext context) =>
      IslandRoundButton(icon: Hi.xMark, label: 'Fechar', onTap: () => Navigator.of(context).maybePop());
}

/// Voltar ao passo anterior de um popup com passos: sempre no canto superior
/// esquerdo, ao lado do título — nunca um botão «Voltar» em baixo.
class IslandBackButton extends StatelessWidget {
  final VoidCallback onTap;

  const IslandBackButton({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) => IslandRoundButton(icon: Hi.arrowLeft, label: 'Voltar', onTap: onTap);
}

/// Conteúdo de diálogo dentro da ilha: título, texto/campo e botões em
/// pílula lado a lado (o principal a verde, o secundário claro).
/// Mesma API que o `AlertDialog` usado antes (title, content, actions).
class IslandAlert extends StatelessWidget {
  final Widget? title;
  final Widget? content;
  final List<Widget>? actions;

  const IslandAlert({super.key, this.title, this.content, this.actions});

  @override
  Widget build(BuildContext context) {
    // Botões pretos com letra branca; o secundário branco com contorno
    // (deep fix 2026-11-11).
    const c = AppTheme.ink;
    final base = Theme.of(context);
    const pill = StadiumBorder();
    final theme = base.copyWith(
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          minimumSize: const Size.fromHeight(50),
          backgroundColor: Colors.white,
          foregroundColor: AppTheme.ink,
          side: const BorderSide(color: AppTheme.ink, width: 1.5),
          shape: pill,
          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
        ),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(50),
          backgroundColor: c,
          foregroundColor: Colors.white,
          shape: pill,
          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
        ),
      ),
    );
    final acts = actions ?? const <Widget>[];
    return Theme(
      data: theme,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
              ),
            ),
            if (title != null) ...[
              const SizedBox(height: 16),
              DefaultTextStyle(
                style: const TextStyle(
                  fontFamily: AppTheme.fontFamily,
                  fontFamilyFallback: AppTheme.fontFamilyFallback,
                  fontSize: AppFontSize.xl + 2,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
                child: title!,
              ),
            ],
            if (content != null) ...[
              const SizedBox(height: 12),
              DefaultTextStyle(
                style: const TextStyle(
                  fontFamily: AppTheme.fontFamily,
                  fontFamilyFallback: AppTheme.fontFamilyFallback,
                  fontSize: AppFontSize.base,
                  height: 1.45,
                  color: AppTheme.inkMuted,
                ),
                child: content!,
              ),
            ],
            if (acts.isNotEmpty) ...[
              const SizedBox(height: 20),
              Row(
                children: [
                  for (var i = 0; i < acts.length; i++) ...[
                    if (i > 0) const SizedBox(width: 10),
                    Expanded(child: acts[i]),
                  ],
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}

/// Menu «⋯» em ilha (pedido do Rafael, 2026-11-20: todos os popups iguais,
/// a nascer na navbar). Mesma forma de usar que o `PopupMenuButton` — mesmos
/// `itemBuilder` com `PopupMenuItem`, `onSelected`, `icon`/`child` e
/// `tooltip` — mas as opções abrem numa ilha (`showIslandSheet`) em vez do
/// menu flutuante do Material.
class IslandMenuButton<T> extends StatelessWidget {
  final List<PopupMenuEntry<T>> Function(BuildContext context) itemBuilder;
  final void Function(T value)? onSelected;
  final Widget? icon;
  final Widget? child;
  final String? tooltip;
  final EdgeInsetsGeometry? padding;

  /// Aceite só para manter as chamadas antigas; a ilha abre sempre em baixo.
  final Object? position;

  const IslandMenuButton({
    super.key,
    required this.itemBuilder,
    this.onSelected,
    this.icon,
    this.child,
    this.tooltip,
    this.padding,
    this.position,
  });

  Future<void> _open(BuildContext context) async {
    final items = itemBuilder(context).whereType<PopupMenuItem<T>>().toList();
    if (items.isEmpty) return;
    final picked = await showIslandSheet<_Picked<T>>(
      context: context,
      confirmExit: false,
      builder: (ctx) => Padding(
        padding: const EdgeInsets.fromLTRB(20, 14, 20, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
              ),
            ),
            const SizedBox(height: 16),
            DecoratedBox(
              decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    for (var i = 0; i < items.length; i++) ...[
                      if (i > 0) const Divider(height: 1, thickness: 1, color: Color(0xFFECE7DC)),
                      InkWell(
                        onTap: items[i].enabled ? () => Navigator.of(ctx).pop(_Picked<T>(items[i].value as T)) : null,
                        child: ConstrainedBox(
                          constraints: const BoxConstraints(minHeight: 56),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Opacity(
                              opacity: items[i].enabled ? 1 : 0.4,
                              child: DefaultTextStyle.merge(
                                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                child: items[i].child ?? const SizedBox.shrink(),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            SizedBox(
              height: 52,
              child: OutlinedButton(
                onPressed: () => Navigator.of(ctx).pop(),
                style: OutlinedButton.styleFrom(
                  shape: const StadiumBorder(),
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  foregroundColor: AppTheme.ink,
                  textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                ),
                child: const Text('Cancelar'),
              ),
            ),
          ],
        ),
      ),
    );
    if (picked != null) onSelected?.call(picked.value);
  }

  @override
  Widget build(BuildContext context) {
    final c = child;
    if (c != null) {
      final tappable = GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => _open(context), child: c);
      return tooltip == null ? tappable : Tooltip(message: tooltip!, child: tappable);
    }
    return IconButton(
      tooltip: tooltip,
      padding: padding ?? const EdgeInsets.all(8),
      icon: icon ?? const Icon(Hi.ellipsisHorizontal),
      onPressed: () => _open(context),
    );
  }
}

/// Embrulha o valor escolhido para distinguir «escolheu null» de «fechou».
class _Picked<T> {
  final T value;
  const _Picked(this.value);
}
