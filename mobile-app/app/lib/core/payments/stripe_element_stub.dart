import 'package:flutter/widgets.dart';

import 'stripe_element.dart';

class _Unsupported implements StripePay {
  @override
  bool get supported => false;

  @override
  Widget cardPart(CardPart part) => const SizedBox.shrink();

  @override
  Future<void> mountCard(String publishableKey, void Function(CardFieldsState s) onChange) async {}

  @override
  Future<Map<String, dynamic>> payCard(String clientSecret, String? email) async =>
      {'error': 'Pagamento indisponível neste dispositivo.'};

  @override
  Future<String> wallet(String publishableKey, int amountCents, String label) async => '';

  @override
  Future<Map<String, dynamic>> payWallet(Future<String?> Function() clientSecret) async =>
      {'error': 'Pagamento indisponível neste dispositivo.'};

  @override
  void dispose() {}
}

StripePay create() => _Unsupported();
