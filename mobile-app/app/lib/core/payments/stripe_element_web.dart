import 'dart:convert';
import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

import 'stripe_element.dart';

extension type _TchinPay(JSObject _) implements JSObject {
  external JSObject createHost();
  external JSPromise<JSString> mount(
    JSObject host,
    JSString pk,
    JSString secret,
    JSString email,
    JSFunction onHeight,
    JSFunction onEvent,
  );
  external JSPromise<JSString> confirm();
  external void unmount();
}

@JS('tchinPay')
external _TchinPay? get _pay;

int _seq = 0;

class _WebStripeElement implements StripeElement {
  late final String _viewType;
  JSObject? _host;

  _WebStripeElement() {
    final pay = _pay;
    _viewType = 'tchin-stripe-element-${_seq++}';
    if (pay == null) return;
    final host = pay.createHost();
    _host = host;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) => host);
  }

  @override
  bool get supported => _host != null;

  @override
  Widget view() => supported ? HtmlElementView(viewType: _viewType) : const SizedBox.shrink();

  @override
  Future<void> mount({
    required String publishableKey,
    required String clientSecret,
    String? email,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  }) async {
    final pay = _pay;
    final host = _host;
    if (pay == null || host == null) throw StateError('stripe_unavailable');
    await pay
        .mount(
          host,
          publishableKey.toJS,
          clientSecret.toJS,
          (email ?? '').toJS,
          ((JSNumber h) => onHeight(h.toDartDouble)).toJS,
          ((JSString e) => onEvent(e.toDart)).toJS,
        )
        .toDart;
  }

  @override
  Future<Map<String, dynamic>> confirm() async {
    final pay = _pay;
    if (pay == null) return {'error': 'Pagamento indisponível.'};
    final raw = (await pay.confirm().toDart).toDart;
    return jsonDecode(raw) as Map<String, dynamic>;
  }

  @override
  void dispose() {
    _pay?.unmount();
  }
}

StripeElement create() => _WebStripeElement();
