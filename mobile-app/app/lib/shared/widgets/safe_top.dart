import 'package:flutter/widgets.dart';

import '../../core/safe_top_stub.dart' if (dart.library.js_interop) '../../core/safe_top_web.dart';

/// A app ocupa o ecrã todo, também por baixo das horas e da bateria
/// (2026-11-11: "conteúdo a passar por baixo das horas"). Na web o Flutter
/// não sabe a altura dessa barra, por isso passamo-la à mão: os topos das
/// páginas continuam a começar abaixo das horas, mas o conteúdo pode subir
/// por baixo delas ao fazer scroll.
class SafeTop extends StatelessWidget {
  final Widget child;
  const SafeTop({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);
    final top = webSafeTop();
    if (top <= mq.padding.top) return child;
    return MediaQuery(
      data: mq.copyWith(
        padding: mq.padding.copyWith(top: top),
        viewPadding: mq.viewPadding.copyWith(top: top),
      ),
      child: child,
    );
  }
}
