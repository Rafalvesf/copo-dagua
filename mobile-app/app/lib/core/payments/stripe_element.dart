import 'package:flutter/widgets.dart';

import 'stripe_element_native.dart' if (dart.library.js_interop) 'stripe_element_web.dart' as impl;

/// O que o ecrã de pagamento precisa da Stripe (2026-10-25, "quero tudo
/// feito na app"). O ecrã é todo desenhado pela app; daqui só vêm:
/// - os 3 campos do cartão ([CardPart]) — iframes mínimos da Stripe com a
///   letra e as cores da app (o número do cartão nunca passa pela app,
///   regras PCI);
/// - Apple Pay / Google Pay — a janela de pagamento do próprio telemóvel.
/// Implementação web: `tchinPay` em `web/index.html`; Android/iOS:
/// `stripe_element_native.dart` (flutter_stripe).
enum CardPart { number, expiry, cvc }

class CardFieldsState {
  final bool complete;
  final String error;
  const CardFieldsState({this.complete = false, this.error = ''});
}

abstract class StripePay {
  /// `false` se não houver Stripe neste dispositivo.
  bool get supported;

  /// Web: 3 campos separados (número, validade, CVC). Android/iOS: um só
  /// campo nativo, devolvido por `cardPart(CardPart.number)`.
  bool get splitFields;

  /// Um dos campos do cartão (altura dada por quem o usa, ~24 px).
  Widget cardPart(CardPart part);

  Future<void> mountCard(String publishableKey, void Function(CardFieldsState s) onChange);

  /// Devolve `{status}` ou `{error}`.
  Future<Map<String, dynamic>> payCard(String clientSecret, String? email);

  /// `apple_pay`, `google_pay` ou `''` (não disponível neste telemóvel).
  Future<String> wallet(String publishableKey, int amountCents, String label);

  /// Abre a janela do telemóvel — chamar diretamente no toque. Devolve
  /// `{status}`, `{error}` ou `{cancelled: true}`.
  Future<Map<String, dynamic>> payWallet(Future<String?> Function() clientSecret);

  void dispose();
}

StripePay createStripePay() => impl.create();
