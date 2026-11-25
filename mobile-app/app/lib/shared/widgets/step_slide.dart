import 'package:flutter/material.dart';

/// Passos a deslizar (skill `animacoes`, pedido 2026-11-25): quando o passo
/// muda ([id] diferente), o novo entra do lado para onde se vai — da
/// direita ao avançar, da esquerda ao voltar — e o antigo sai pelo outro
/// lado, em vez de aparecer por cima. [order] diz se se avançou (maior) ou
/// voltou (menor). Com «reduzir movimento», troca sem animação.
class StepSlide extends StatefulWidget {
  const StepSlide({super.key, required this.id, required this.order, required this.child});

  final Object id;
  final num order;
  final Widget child;

  @override
  State<StepSlide> createState() => _StepSlideState();
}

class _StepSlideState extends State<StepSlide> {
  double _dir = 1;

  @override
  void didUpdateWidget(StepSlide old) {
    super.didUpdateWidget(old);
    if (old.id != widget.id) _dir = widget.order >= old.order ? 1 : -1;
  }

  @override
  Widget build(BuildContext context) {
    if (MediaQuery.maybeDisableAnimationsOf(context) ?? false) return widget.child;
    final current = ValueKey<Object>(widget.id);
    return ClipRect(
      child: AnimatedSwitcher(
        duration: const Duration(milliseconds: 320),
        switchInCurve: Curves.easeOutCubic,
        switchOutCurve: Curves.easeInCubic,
        layoutBuilder: (cur, previous) => Stack(
          alignment: Alignment.topCenter,
          children: [...previous, ?cur],
        ),
        transitionBuilder: (child, animation) {
          final incoming = child.key == current;
          // O que sai corre a animação ao contrário (1 → 0): acaba do lado
          // oposto ao que entra.
          final from = Offset(incoming ? _dir : -_dir, 0);
          return SlideTransition(
            position: Tween<Offset>(begin: from, end: Offset.zero).animate(animation),
            child: child,
          );
        },
        child: KeyedSubtree(key: current, child: widget.child),
      ),
    );
  }
}
