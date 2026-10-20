import 'dart:js_interop';

@JS('tchinPayReturn')
external JSString? get _payReturn;

String? readPayReturn() {
  try {
    return _payReturn?.toDart;
  } catch (_) {
    return null;
  }
}
