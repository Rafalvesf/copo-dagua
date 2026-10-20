import 'package:flutter/widgets.dart';

import 'stripe_element_stub.dart' if (dart.library.js_interop) 'stripe_element_web.dart' as impl;

/// Formulário de pagamento da Stripe (Payment Element) dentro da app —
/// pedido 2026-10-19: "não quero que a app abra o browser". Na web é o
/// iframe da própria Stripe num platform view (ver `tchinPay` em
/// `web/index.html`); os dados do cartão nunca passam pela app.
abstract class StripeElement {
  /// `false` fora da web (sem Stripe.js) — o ecrã mostra uma alternativa.
  bool get supported;

  /// O widget onde o formulário aparece (altura gerida por quem o usa).
  Widget view();

  Future<void> mount({
    required String publishableKey,
    required String clientSecret,
    String? email,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  });

  /// Confirma o pagamento. Devolve `{status, multibanco}` ou `{error}`.
  Future<Map<String, dynamic>> confirm({String? returnUrl});

  void dispose();
}

StripeElement createStripeElement() => impl.create();
