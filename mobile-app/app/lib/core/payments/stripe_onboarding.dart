import 'package:flutter/widgets.dart';

import 'stripe_onboarding_stub.dart' if (dart.library.js_interop) 'stripe_onboarding_web.dart' as impl;

/// Formulário de dados da Stripe Connect (onboarding embutido) dentro da
/// app — 2026-10-19. Na web é o componente da Stripe num platform view
/// (`tchinConnect` em `web/index.html`).
abstract class StripeOnboarding {
  bool get supported;
  Widget view();

  /// [event]: `ready`, `exit` (o parceiro terminou/saiu), `loaderror`.
  Future<void> mount({
    required String publishableKey,
    required String clientSecret,
    required String functionUrl,
    required String anonKey,
    required String accessToken,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  });

  void dispose();
}

StripeOnboarding createStripeOnboarding() => impl.create();
