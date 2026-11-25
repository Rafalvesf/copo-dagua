import 'package:flutter/material.dart';

/// Avisos com «Desfazer» (pedido 2026-11-25). Em vez de perguntar «Tens a
/// certeza?», faz-se logo e dá-se uns segundos para voltar atrás.

const _undoFor = Duration(seconds: 5);

/// Aviso rápido com «Desfazer» para uma ação que já ficou feita
/// (p. ex. tirar dos favoritos): [onUndo] volta a pô-la como estava.
void showUndoToast(BuildContext context, String message, {required VoidCallback onUndo}) {
  final messenger = ScaffoldMessenger.of(context);
  messenger.hideCurrentSnackBar();
  messenger.showSnackBar(SnackBar(
    content: Text(message),
    duration: _undoFor,
    action: SnackBarAction(label: 'Desfazer', onPressed: onUndo),
  ));
}

/// Apagar com «Desfazer»: [hide] tira logo da lista; se a pessoa tocar em
/// «Desfazer», [restore] volta a mostrar e nada se apaga; senão, quando o
/// aviso fecha, [commit] apaga de vez (se falhar, volta a mostrar).
Future<void> deleteWithUndo(
  BuildContext context, {
  required String message,
  required VoidCallback hide,
  required VoidCallback restore,
  required Future<void> Function() commit,
}) async {
  final messenger = ScaffoldMessenger.of(context);
  hide();
  messenger.hideCurrentSnackBar();
  final reason = await messenger
      .showSnackBar(SnackBar(
        content: Text(message),
        duration: _undoFor,
        action: SnackBarAction(label: 'Desfazer', onPressed: () {}),
      ))
      .closed;
  if (reason == SnackBarClosedReason.action) {
    restore();
    return;
  }
  try {
    await commit();
  } catch (_) {
    restore();
    messenger.showSnackBar(const SnackBar(content: Text('Não foi possível apagar. Tenta outra vez.')));
  }
}
