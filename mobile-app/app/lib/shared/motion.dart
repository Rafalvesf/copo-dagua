import 'package:flutter/widgets.dart';

/// «Reduzir movimento» ligado no telemóvel (DESIGN.md: as animações ficam
/// paradas; skill `ux-motion` §20).
bool reduceMotion(BuildContext context) => MediaQuery.maybeDisableAnimationsOf(context) ?? false;

/// Arranca uma animação de uma só vez: com «reduzir movimento» salta logo
/// para o fim (o estado final aparece sem movimento); sem, anima.
/// 2026-11-25: algumas entradas (pagamento feito, mudar de modo, mascote,
/// confetes, cascatas) animavam mesmo com «reduzir movimento».
void startMotion(AnimationController c, BuildContext context, {bool repeat = false}) {
  if (reduceMotion(context)) {
    c.value = 1;
    return;
  }
  if (repeat) {
    c.repeat();
  } else {
    c.forward();
  }
}
