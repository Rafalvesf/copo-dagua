import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Os contadores (notificações, mensagens) voltam a ler-se sozinhos de
/// [every] em [every] enquanto alguém os mostra — antes só se liam uma vez
/// e ficavam parados (ou a 0) até reabrir a app.
void keepFresh(Ref ref, {Duration every = const Duration(seconds: 30)}) {
  final t = Timer(every, () {
    if (ref.mounted) ref.invalidateSelf();
  });
  ref.onDispose(t.cancel);
}
