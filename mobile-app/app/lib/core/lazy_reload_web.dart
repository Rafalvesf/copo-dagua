import 'dart:js_interop';

@JS('tchinReloadForNewVersion')
external JSFunction? get _reload;

/// Recarrega a página uma vez (ver `tchinReloadForNewVersion` no
/// index.html). Devolve `false` se já se tentou há pouco.
bool reloadForNewVersion() {
  final f = _reload;
  if (f == null) return false;
  final r = f.callAsFunction(null);
  return r is JSBoolean && r.toDart;
}
