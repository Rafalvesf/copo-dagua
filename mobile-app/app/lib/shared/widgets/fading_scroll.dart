import 'package:flutter/material.dart';

/// Desvanece as bordas de um conteúdo scrollável, para ele nunca
/// terminar de forma abrupta por baixo de elementos flutuantes (navbar,
/// bolha de chat). Usa a mesma técnica do ecrã principal: um
/// [ShaderMask] aplicado diretamente sobre os pixels do conteúdo, para
/// o efeito acompanhar o scroll em vez de ficar preso a uma posição.
class EdgeFade extends StatelessWidget {
  final Widget child;
  final double topFadeHeight;
  final double bottomFadeHeight;

  const EdgeFade({
    super.key,
    required this.child,
    this.topFadeHeight = 0,
    this.bottomFadeHeight = 0,
  });

  @override
  Widget build(BuildContext context) {
    return ShaderMask(
      blendMode: BlendMode.dstIn,
      shaderCallback: (rect) {
        final topEnd = (topFadeHeight / rect.height).clamp(0.0, 1.0);
        // O desvanecimento em si só ocorre nos primeiros 35% da zona do
        // fundo — o resto fica completamente invisível (mesma curva da
        // home), em vez de um degradê linear ao longo de toda a altura.
        final bottomStart = (1 - bottomFadeHeight / rect.height).clamp(
          0.0,
          1.0,
        );
        final bottomEnd = (1 - bottomFadeHeight * 0.35 / rect.height).clamp(
          0.0,
          1.0,
        );
        return LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: const [
            Colors.transparent,
            Colors.black,
            Colors.black,
            Colors.transparent,
            Colors.transparent,
          ],
          stops: [0.0, topEnd, bottomStart, bottomEnd, 1.0],
        ).createShader(rect);
      },
      child: child,
    );
  }
}
