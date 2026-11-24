import 'dart:js_interop';

@JS('tchinReloadForNewVersion')
external JSFunction? get _reload;

@JS('tchinReloadNow')
external JSFunction? get _reloadNow;

@JS('tchinNewerVersionAvailable')
external JSFunction? get _newer;

/// Recarrega a página uma vez (ver `tchinReloadForNewVersion` no
/// index.html). Devolve `false` se já se tentou há pouco.
bool reloadForNewVersion() {
  final f = _reload;
  if (f == null) return false;
  final r = f.callAsFunction(null);
  // `dartify` em vez de `is JSBoolean`: funciona igual em JS e WebAssembly.
  return r?.dartify() == true;
}

/// Recarrega já, porque há uma versão nova publicada (ver `tchinReloadNow`
/// no index.html). Devolve `false` se se recarregou há menos de 10 s.
bool reloadNow() {
  final f = _reloadNow;
  if (f == null) return false;
  return f.callAsFunction(null)?.dartify() == true;
}

/// Pergunta ao servidor se há uma versão publicada mais recente do que a
/// que está a correr: `true`, `false`, ou `null` se não se sabe (sem rede).
Future<bool?> newerVersionAvailable() async {
  final f = _newer;
  if (f == null) return null;
  try {
    final p = f.callAsFunction(null);
    if (p == null) return null;
    final r = await (p as JSPromise<JSAny?>).toDart;
    final v = r?.dartify();
    return v is bool ? v : null;
  } catch (_) {
    return null;
  }
}
