import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'estrela.dart';

/// Barra de progresso da app (pedido do Rafael, 2026-11-21, DESIGN.md §6):
/// a barra **verde clarinha** (`AppTheme.progress`) com **a estrela (o ícone novo da app) em cima da ponta**, e
/// **animada quando o progresso muda** — a barra cresce e a estrela dá um saltinho até ao sítio
/// novo. Com «reduzir movimento», muda sem animação. Usar sempre esta em vez
/// de `LinearProgressIndicator` com valor.
class AppProgressBar extends StatefulWidget {
  /// 0..1
  final double value;

  /// Espessura da barra (10 no resumo/onboarding, 6 nas linhas).
  final double height;
  final Color? color;
  final Color? track;

  const AppProgressBar({super.key, required this.value, this.height = 10, this.color, this.track});

  @override
  State<AppProgressBar> createState() => _AppProgressBarState();
}

class _AppProgressBarState extends State<AppProgressBar> with SingleTickerProviderStateMixin {
  late final AnimationController _c =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 700));
  late double _from = 0;
  late double _to = _clamp(widget.value);
  bool _started = false;

  static double _clamp(double v) => v.isNaN ? 0 : v.clamp(0.0, 1.0);

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started) return;
    _started = true;
    // Ao aparecer, a barra enche desde o início (a mesma animação).
    if (MediaQuery.of(context).disableAnimations) {
      _c.value = 1;
    } else {
      _c.forward(from: 0);
    }
  }

  @override
  void didUpdateWidget(AppProgressBar old) {
    super.didUpdateWidget(old);
    final v = _clamp(widget.value);
    if (v == _to) return;
    _from = _current;
    _to = v;
    if (MediaQuery.of(context).disableAnimations) {
      _c.value = 1;
    } else {
      _c.forward(from: 0);
    }
  }

  double get _current => _from + (_to - _from) * Curves.easeOutCubic.transform(_c.value);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // A estrela vai em cima da ponta da barra, como quem anda nela, e
    // anima como as outras mascotes (3 vezes ao aparecer, 2026-11-21).
    // Grande o suficiente para se ver bem (pedido 2026-11-21: «muito pequeno»).
    final starW = math.max(40.0, widget.height * 6.8);
    final starH = starW * 350 / 384;
    // No desenho (350 de altura) o corpo da estrela vai de 68 a 301: o
    // vazio de cima sai (fica só uma folga para o saltinho) e as pontas de
    // baixo assentam em cima da barra, sem sombra (2026-11-21).
    final topCut = starH * 56 / 350;
    final barTop = starH * 301 / 350 - topCut;
    // Verde clarinho (pedido 2026-11-21).
    final color = widget.color ?? AppTheme.progress;
    final track = widget.track ?? const Color(0xFFE0E0E0);
    return SizedBox(
      height: barTop + widget.height,
      child: LayoutBuilder(builder: (context, box) {
        final w = box.maxWidth;
        return AnimatedBuilder(
          animation: _c,
          builder: (context, _) {
            final v = _current;
            final t = _c.value;
            // Saltinho enquanto anda; parada no fim.
            final hop = _c.isAnimating ? math.sin(t * math.pi) : 0.0;
            final left = (w * v - starW / 2).clamp(0.0, math.max(0.0, w - starW)).toDouble();
            return Stack(clipBehavior: Clip.none, children: [
              Positioned(
                left: 0,
                right: 0,
                top: barTop,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(widget.height / 2),
                  child: SizedBox(
                    height: widget.height,
                    child: Stack(children: [
                      Positioned.fill(child: ColoredBox(color: track)),
                      Positioned(
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: w * v,
                        child: ColoredBox(color: color),
                      ),
                    ]),
                  ),
                ),
              ),
              Positioned(
                left: left,
                top: -topCut - 6 * hop,
                child: Transform.rotate(
                  angle: 0.18 * math.sin(t * math.pi * 2) * hop,
                  child: EstrelaMascot(Estrela.feliz, size: starW, semanticLabel: '', shadow: false),
                ),
              ),
            ]);
          },
        );
      }),
    );
  }
}
