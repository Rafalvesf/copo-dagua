import 'dart:js_interop';

extension type _TchinCamera(JSObject _) implements JSObject {
  external JSPromise<JSString> status();
  external JSPromise<JSString> request();
}

@JS('tchinCamera')
external _TchinCamera? get _camera;

Future<String> cameraStatus() async {
  final c = _camera;
  if (c == null) return 'unsupported';
  try {
    return (await c.status().toDart).toDart;
  } catch (_) {
    return 'prompt';
  }
}

Future<String> cameraRequest() async {
  final c = _camera;
  if (c == null) return 'unsupported';
  try {
    return (await c.request().toDart).toDart;
  } catch (_) {
    return 'denied';
  }
}
