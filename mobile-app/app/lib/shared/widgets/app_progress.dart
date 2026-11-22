import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Barra de progresso da app (pedido do Rafael, 2026-11-21, DESIGN.md §6):
/// a barra **verde clarinha** (`AppTheme.progress`), **sem a mascote**
/// (pedido 2026-11-22), **animada quando o progresso muda** — a barra
/// cresce até ao sítio novo. Com «reduzir movimento», muda sem animação. Usar sempre esta em vez
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
    // Sem a estrela em cima (pedido 2026-11-22): só a barra, que cresce.
    final color = widget.color ?? AppTheme.progress;
    final track = widget.track ?? const Color(0xFFE0E0E0);
    return ClipRRect(
      borderRadius: BorderRadius.circular(widget.height / 2),
      child: SizedBox(
        height: widget.height,
        child: AnimatedBuilder(
          animation: _c,
          builder: (context, _) => Stack(children: [
            Positioned.fill(child: ColoredBox(color: track)),
            Positioned.fill(
              child: FractionallySizedBox(
                alignment: Alignment.centerLeft,
                widthFactor: _current,
                child: ColoredBox(color: color),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
