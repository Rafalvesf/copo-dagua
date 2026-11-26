import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

@JS('tchinConvertImage')
external JSFunction? get _convert;

/// Converte no próprio browser (canvas, sem passar a foto inteira pela
/// memória da app): lado maior até [maxSide], WebP — ou JPEG onde o
/// browser não cria WebP (iPhone). `null` se não deu (fica o original).
/// Ver `tchinConvertImage` no `web/index.html`.
Future<({Uint8List bytes, String type})?> convertImageForDisplay(Uint8List bytes, {required int maxSide}) async {
  final f = _convert;
  if (f == null) return null;
  try {
    final p = f.callAsFunction(null, bytes.toJS, maxSide.toJS, 0.82.toJS);
    if (p == null) return null;
    final r = await (p as JSPromise<JSAny?>).toDart;
    if (r == null) return null;
    final o = r as JSObject;
    final out = (o.getProperty('bytes'.toJS) as JSUint8Array).toDart;
    final type = (o.getProperty('type'.toJS) as JSString).toDart;
    if (out.isEmpty) return null;
    return (bytes: out, type: type);
  } catch (_) {
    return null;
  }
}
