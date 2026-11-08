import 'package:flutter/services.dart';

/// Copia texto sem rebentar a app (Sentry COPO-DAGUA-5/8): na web, o
/// Safari pode recusar escrever na área de transferência
/// (`PlatformException(copy_fail)`). Devolve se conseguiu.
Future<bool> copyText(String text) async {
  try {
    await Clipboard.setData(ClipboardData(text: text));
    return true;
  } catch (_) {
    return false;
  }
}
