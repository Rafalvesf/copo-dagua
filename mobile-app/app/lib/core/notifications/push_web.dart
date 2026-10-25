import 'dart:js_interop';

extension type _TchinPush(JSObject _) implements JSObject {
  external JSString status();
  external JSPromise<JSString> subscribe(JSString publicKey);
  external JSPromise<JSString> current();
  external JSPromise<JSString> unsubscribe();
}

@JS('tchinPush')
external _TchinPush? get _push;

String pushStatus() {
  try {
    return _push?.status().toDart ?? 'unsupported';
  } catch (_) {
    return 'unsupported';
  }
}

Future<String> pushSubscribe(String publicKey) async {
  final p = _push;
  if (p == null) return '{"error":"unsupported"}';
  return (await p.subscribe(publicKey.toJS).toDart).toDart;
}

Future<String> pushCurrent() async {
  final p = _push;
  if (p == null) return '';
  return (await p.current().toDart).toDart;
}

Future<String> pushUnsubscribe() async {
  final p = _push;
  if (p == null) return '';
  return (await p.unsubscribe().toDart).toDart;
}
