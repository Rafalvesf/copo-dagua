import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Contador por cima de um botão redondo (DESIGN.md §2): pílula branca 20
/// com o número 12 negrito preto e aro preto 2. «99+» acima de 99.
class CountBadge extends StatelessWidget {
  final int count;
  const CountBadge(this.count, {super.key});

  @override
  Widget build(BuildContext context) => IgnorePointer(
        child: Container(
          constraints: const BoxConstraints(minWidth: 20),
          height: 20,
          padding: const EdgeInsets.symmetric(horizontal: 4),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: AppTheme.ink, width: 2),
          ),
          child: Text(count > 99 ? '99+' : '$count',
              style: const TextStyle(fontSize: 12, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ),
      );
}

/// Põe o [CountBadge] no canto de cima à direita de [child] (só com
/// [count] > 0).
class WithCount extends StatelessWidget {
  final Widget child;
  final int count;
  const WithCount({super.key, required this.child, required this.count});

  @override
  Widget build(BuildContext context) {
    if (count <= 0) return child;
    return Stack(clipBehavior: Clip.none, children: [
      child,
      Positioned(top: -5, right: -5, child: CountBadge(count)),
    ]);
  }
}
