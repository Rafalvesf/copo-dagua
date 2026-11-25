import 'package:flutter/material.dart';

/// Abanar um campo errado (skill `animacoes`, pedido 2026-11-25): sempre
/// que [trigger] muda, o filho anda 0, −10, 10, −6, 6, −3, 0 px em 360 ms
/// (só `transform`). Usa-se junto com a linha vermelha do campo. Parado
/// com «reduzir movimento».
class Shake extends StatefulWidget {
  const Shake({super.key, required this.trigger, required this.child});

  final int trigger;
  final Widget child;

  @override
  State<Shake> createState() => _ShakeState();
}

class _ShakeState extends State<Shake> with SingleTickerProviderStateMixin {
  late final _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 360));
  late final Animation<double> _x = TweenSequence<double>([
    for (final (a, b) in const [(0.0, -10.0), (-10.0, 10.0), (10.0, -6.0), (-6.0, 6.0), (6.0, -3.0), (-3.0, 0.0)])
      TweenSequenceItem(tween: Tween(begin: a, end: b), weight: 1),
  ]).animate(_c);

  @override
  void didUpdateWidget(Shake old) {
    super.didUpdateWidget(old);
    if (old.trigger != widget.trigger && !(MediaQuery.maybeDisableAnimationsOf(context) ?? false)) {
      _c.forward(from: 0);
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
        animation: _x,
        child: widget.child,
        builder: (context, child) => Transform.translate(offset: Offset(_x.value, 0), child: child),
      );
}
