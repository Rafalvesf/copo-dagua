import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

import '../supabase/supabase_config.dart';

extension type _TchinGoogle(JSObject _) implements JSObject {
  external JSObject createHost();
  external JSPromise<JSAny?> render(JSObject host, JSString clientId, JSNumber width, JSFunction onCred);
}

@JS('tchinGoogle')
external _TchinGoogle? get _google;

int _seq = 0;

Widget? googleWebButton({required void Function(String idToken, String nonce) onCredential}) {
  if (_google == null) return null;
  return _GoogleButton(onCredential: onCredential);
}

class _GoogleButton extends StatefulWidget {
  final void Function(String idToken, String nonce) onCredential;
  const _GoogleButton({required this.onCredential});

  @override
  State<_GoogleButton> createState() => _GoogleButtonState();
}

class _GoogleButtonState extends State<_GoogleButton> {
  late final String _type;
  late final JSObject _host;
  double _width = 0;

  @override
  void initState() {
    super.initState();
    _host = _google!.createHost();
    _type = 'tchin-google-${_seq++}';
    ui_web.platformViewRegistry.registerViewFactory(_type, (int _) => _host);
  }

  void _render(double width) {
    if ((width - _width).abs() < 8) return;
    _width = width;
    _google?.render(
      _host,
      SupabaseConfig.googleWebClientId.toJS,
      width.toJS,
      ((JSString token, JSString nonce) {
        if (mounted) widget.onCredential(token.toDart, nonce.toDart);
      }).toJS,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: SizedBox(
        height: 52,
        child: LayoutBuilder(builder: (context, c) {
          WidgetsBinding.instance.addPostFrameCallback((_) => _render(c.maxWidth));
          return HtmlElementView(viewType: _type);
        }),
      ),
    );
  }
}
