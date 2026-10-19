import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

import 'stripe_onboarding.dart';

extension type _TchinConnect(JSObject _) implements JSObject {
  external JSObject createHost();
  external JSPromise<JSString> mountOnboarding(
    JSObject host,
    JSString pk,
    JSString secret,
    JSString fnUrl,
    JSString anon,
    JSString token,
    JSFunction onHeight,
    JSFunction onEvent,
  );
  external void unmount();
}

@JS('tchinConnect')
external _TchinConnect? get _connect;

int _seq = 0;

class _WebOnboarding implements StripeOnboarding {
  late final String _viewType;
  JSObject? _host;

  _WebOnboarding() {
    _viewType = 'tchin-stripe-onboarding-${_seq++}';
    final c = _connect;
    if (c == null) return;
    final host = c.createHost();
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
    required String functionUrl,
    required String anonKey,
    required String accessToken,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  }) async {
    final c = _connect;
    final host = _host;
    if (c == null || host == null) throw StateError('stripe_unavailable');
    await c
        .mountOnboarding(
          host,
          publishableKey.toJS,
          clientSecret.toJS,
          functionUrl.toJS,
          anonKey.toJS,
          accessToken.toJS,
          ((JSNumber h) => onHeight(h.toDartDouble)).toJS,
          ((JSString e) => onEvent(e.toDart)).toJS,
        )
        .toDart;
  }

  @override
  void dispose() => _connect?.unmount();
}

StripeOnboarding create() => _WebOnboarding();
