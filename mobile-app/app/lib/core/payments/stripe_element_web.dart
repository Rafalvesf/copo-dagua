import 'dart:convert';
import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

import 'stripe_element.dart';

extension type _TchinPay(JSObject _) implements JSObject {
  external JSObject createHost();
  external JSPromise<JSString> mountCard(JSString pk, JSObject hosts, JSFunction onChange);
  external JSPromise<JSString> payCard(JSString secret, JSString email);
  external JSPromise<JSString> wallet(JSString pk, JSNumber cents, JSString label);
  external JSPromise<JSString> payWallet(JSFunction getSecret);
  external void unmount();
}

extension type _Hosts._(JSObject _) implements JSObject {
  external factory _Hosts({JSObject number, JSObject expiry, JSObject cvc});
}

@JS('tchinPay')
external _TchinPay? get _pay;

int _seq = 0;

class _WebStripePay implements StripePay {
  final Map<CardPart, String> _views = {};
  final Map<CardPart, JSObject> _hosts = {};

  _WebStripePay() {
    final pay = _pay;
    if (pay == null) return;
    final n = _seq++;
    for (final p in CardPart.values) {
      final host = pay.createHost();
      final type = 'tchin-card-${p.name}-$n';
      ui_web.platformViewRegistry.registerViewFactory(type, (int _) => host);
      _views[p] = type;
      _hosts[p] = host;
    }
  }

  @override
  bool get supported => _pay != null;

  @override
  Widget cardPart(CardPart part) {
    final type = _views[part];
    return type == null ? const SizedBox.shrink() : HtmlElementView(viewType: type);
  }

  @override
  Future<void> mountCard(String publishableKey, void Function(CardFieldsState s) onChange) async {
    final pay = _pay;
    if (pay == null) throw StateError('stripe_unavailable');
    await pay
        .mountCard(
          publishableKey.toJS,
          _Hosts(number: _hosts[CardPart.number]!, expiry: _hosts[CardPart.expiry]!, cvc: _hosts[CardPart.cvc]!),
          ((JSString raw) {
            final m = jsonDecode(raw.toDart) as Map<String, dynamic>;
            onChange(CardFieldsState(complete: m['complete'] == true, error: (m['error'] as String?) ?? ''));
          }).toJS,
        )
        .toDart;
  }

  @override
  Future<Map<String, dynamic>> payCard(String clientSecret, String? email) async {
    final pay = _pay;
    if (pay == null) return {'error': 'Pagamento indisponível.'};
    final raw = (await pay.payCard(clientSecret.toJS, (email ?? '').toJS).toDart).toDart;
    return jsonDecode(raw) as Map<String, dynamic>;
  }

  @override
  Future<String> wallet(String publishableKey, int amountCents, String label) async {
    final pay = _pay;
    if (pay == null) return '';
    try {
      return (await pay.wallet(publishableKey.toJS, amountCents.toJS, label.toJS).toDart).toDart;
    } catch (_) {
      return '';
    }
  }

  @override
  Future<Map<String, dynamic>> payWallet(Future<String?> Function() clientSecret) async {
    final pay = _pay;
    if (pay == null) return {'error': 'Pagamento indisponível.'};
    // Chamado de forma síncrona no toque: `pr.show()` exige-o.
    final promise = pay.payWallet((() => clientSecret().then((s) => (s ?? '').toJS).toJS).toJS);
    final raw = (await promise.toDart).toDart;
    return jsonDecode(raw) as Map<String, dynamic>;
  }

  @override
  void dispose() => _pay?.unmount();
}

StripePay create() => _WebStripePay();
