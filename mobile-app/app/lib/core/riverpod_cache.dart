import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';

/// «Stale-while-revalidate» (pedido 2026-11-25): ao sair de uma página, o
/// que se carregou fica guardado [keep]; ao voltar, mostra-se logo o que
/// estava (sem esqueleto) e, se tiver mais de [fresh], atualiza-se por trás.
extension StaleWhileRevalidate on Ref {
  void staleWhileRevalidate({
    Duration keep = const Duration(minutes: 5),
    Duration fresh = const Duration(seconds: 30),
  }) {
    final link = keepAlive();
    final loadedAt = DateTime.now();
    Timer? timer;
    onCancel(() => timer = Timer(keep, link.close));
    onResume(() {
      timer?.cancel();
      if (DateTime.now().difference(loadedAt) > fresh) {
        Future.microtask(invalidateSelf);
      }
    });
    onDispose(() => timer?.cancel());
  }
}
