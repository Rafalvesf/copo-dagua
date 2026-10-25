import 'package:flutter/widgets.dart';

import 'stripe_element.dart';

class _Unsupported implements StripeElement {
  @override
  bool get supported => false;

  @override
  Widget view() => const SizedBox.shrink();

  @override
  Future<void> mount({
    required String publishableKey,
    required String clientSecret,
    String? email,
    required void Function(double height) onHeight,
    required void Function(String event) onEvent,
  }) async {}

  @override
  Future<Map<String, dynamic>> confirm({String? returnUrl}) async => {'error': 'Pagamento indisponível neste dispositivo.'};

  @override
  void dispose() {}
}

StripeElement create() => _Unsupported();
