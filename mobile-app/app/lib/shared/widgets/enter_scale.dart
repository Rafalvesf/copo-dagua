import 'package:flutter/material.dart';

/// Entrada (skill `animacoes`, pedido 2026-11-25): o que aparece começa a
/// 0,97 do tamanho e transparente e chega ao normal em 220 ms (ease-out) —
/// nunca a crescer do zero. Só ao aparecer pela primeira vez. Parado com
/// «reduzir movimento».
class EnterScale extends StatefulWidget {
  const EnterScale({super.key, required this.child});

  final Widget child;

  @override
  State<EnterScale> createState() => _EnterScaleState();
}

class _EnterScaleState extends State<EnterScale> with SingleTickerProviderStateMixin {
  late final _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 220));
  late final _t = CurvedAnimation(parent: _c, curve: Curves.easeOut);

  @override
  void initState() {
    super.initState();
    _c.forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (MediaQuery.maybeDisableAnimationsOf(context) ?? false) return widget.child;
    return FadeTransition(
      opacity: _t,
      child: ScaleTransition(scale: Tween<double>(begin: 0.97, end: 1).animate(_t), child: widget.child),
    );
  }
}

/// Acordeões (skill `animacoes`, pedido 2026-11-25): quando o conteúdo
/// cresce ou encolhe («Ler mais», «Ver todos», secções que abrem), a
/// altura acompanha em 280 ms em vez de saltar. Parado com «reduzir
/// movimento».
class SmoothSize extends StatelessWidget {
  const SmoothSize({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    if (MediaQuery.maybeDisableAnimationsOf(context) ?? false) return child;
    return AnimatedSize(
      duration: const Duration(milliseconds: 280),
      curve: Curves.easeOut,
      alignment: Alignment.topCenter,
      child: child,
    );
  }
}
