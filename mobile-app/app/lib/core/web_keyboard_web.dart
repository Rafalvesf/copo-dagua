import 'dart:js_interop';

import 'package:flutter/widgets.dart';

@JS('tchinKbNav')
external set _kbNav(JSFunction f);

@JS('tchinKbDone')
external set _kbDone(JSFunction f);

FocusNode? _lastText;

bool _isText(FocusNode n) {
  final c = n.context;
  return c != null && c.mounted && c.findAncestorStateOfType<EditableTextState>() != null;
}

/// Barra do teclado do Safari (⌃ ⌄ ✓) a funcionar na app (pedido
/// 2026-11-09). O index.html põe dois campos invisíveis antes e depois da
/// app: as setas do Safari vão para eles e daqui mudamos para o campo de
/// texto anterior ou seguinte. O ✓ fecha o teclado.
void setupWebKeyboard() {
  FocusManager.instance.addListener(() {
    final f = FocusManager.instance.primaryFocus;
    if (f != null && _isText(f)) _lastText = f;
  });
  _kbNav = ((JSString dir) {
    _move(dir.toDart == 'next');
  }).toJS;
  _kbDone = (() {
    final f = FocusManager.instance.primaryFocus;
    if (f != null && _isText(f)) f.unfocus();
  }).toJS;
}

void _move(bool forward) {
  final start = _lastText;
  if (start == null || start.context == null || !start.context!.mounted) return;
  final scope = start.nearestScope;
  final fields = [
    for (final n in scope?.traversalDescendants ?? const <FocusNode>[])
      if (n.canRequestFocus && !n.skipTraversal && _isText(n)) n,
  ];
  final i = fields.indexOf(start);
  final j = i + (forward ? 1 : -1);
  if (i < 0 || j < 0 || j >= fields.length) {
    start.unfocus();
    return;
  }
  fields[j].requestFocus();
  // Mostra o campo novo (pode estar fora do ecrã).
  WidgetsBinding.instance.addPostFrameCallback((_) {
    final c = fields[j].context;
    if (c != null && c.mounted) {
      Scrollable.ensureVisible(c, alignment: 0.3, duration: const Duration(milliseconds: 200));
    }
  });
}
