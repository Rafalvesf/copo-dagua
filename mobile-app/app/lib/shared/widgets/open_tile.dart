import 'package:animations/animations.dart';
import 'package:flutter/material.dart';

import 'snappy_tap.dart';

/// Cartão que "abre" para o ecrã seguinte (pedido 2026-10-17): ao tocar
/// encolhe ligeiramente ([SnappyTap]) e, ao largar, o próprio cartão cresce
/// até ocupar o ecrã todo e transforma-se na página — como se estivesse
/// mesmo a abrir. Ao voltar, a página encolhe de volta para o cartão.
class OpenTile extends StatelessWidget {
  final Widget child;
  final WidgetBuilder page;
  final Color color;
  final double radius;

  const OpenTile({
    super.key,
    required this.child,
    required this.page,
    required this.color,
    this.radius = 20,
  });

  @override
  Widget build(BuildContext context) {
    return OpenContainer<void>(
      transitionType: ContainerTransitionType.fadeThrough,
      transitionDuration: const Duration(milliseconds: 450),
      closedColor: color,
      openColor: Colors.white,
      middleColor: color,
      closedElevation: 0,
      openElevation: 0,
      closedShape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radius)),
      openShape: const RoundedRectangleBorder(),
      tappable: false,
      closedBuilder: (context, open) => SnappyTap(onTap: open, child: child),
      openBuilder: (context, _) => page(context),
    );
  }
}
