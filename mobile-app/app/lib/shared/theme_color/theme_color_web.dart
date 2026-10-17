import 'dart:js_interop';

@JS('tchinSetThemeColor')
external JSFunction? get _setter;

void setThemeColor(String hex) {
  final f = _setter;
  if (f != null) f.callAsFunction(null, hex.toJS);
}
