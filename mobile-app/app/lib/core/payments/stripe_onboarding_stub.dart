import 'package:flutter/widgets.dart';

import 'stripe_onboarding.dart';

class _Unsupported implements StripeOnboarding {
  @override
  bool get supported => false;

  @override
  Widget view() => const SizedBox.shrink();

  @override
  Future<void> mount({
    required String publishableKey,
    required String clientSecret,
    required String functionUrl,
    required String anonKey,
    required String accessToken,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  }) async {}

  @override
  void dispose() {}
}

StripeOnboarding create() => _Unsupported();
