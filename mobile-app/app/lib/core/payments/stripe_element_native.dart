import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_stripe/flutter_stripe.dart';

import '../theme/app_theme.dart';
import 'stripe_element.dart';

/// Android / iOS (2026-10-28): SDK nativo da Stripe (`flutter_stripe`).
/// - Cartão: um único campo nativo (número, validade e CVC juntos); o
///   número nunca passa pela app (regras PCI). 3-D Secure é tratado pelo
///   próprio SDK.
/// - Apple Pay / Google Pay: a janela de pagamento do sistema.
class _NativeStripePay implements StripePay {
  void Function(CardFieldsState s)? _onChange;
  String _label = 'À Nossa!';
  bool _testMode = true;

  static String? _configuredKey;

  static Future<void> _configure(String pk) async {
    if (_configuredKey == pk) return;
    Stripe.publishableKey = pk;
    Stripe.merchantIdentifier = 'merchant.pt.anossa.app';
    Stripe.urlScheme = 'anossa';
    await Stripe.instance.applySettings();
    _configuredKey = pk;
  }

  @override
  bool get supported => !kIsWeb && (defaultTargetPlatform == TargetPlatform.android || defaultTargetPlatform == TargetPlatform.iOS);

  @override
  bool get splitFields => false;

  @override
  Widget cardPart(CardPart part) {
    if (part != CardPart.number) return const SizedBox.shrink();
    return CardField(
      enablePostalCode: false,
      countryCode: 'PT',
      style: const TextStyle(fontSize: 16, color: AppTheme.ink, fontFamily: 'LouisGeorgeCafe'),
      cursorColor: AppTheme.accentOliveDark,
      decoration: const InputDecoration(border: InputBorder.none, contentPadding: EdgeInsets.zero),
      onCardChanged: (d) {
        final cb = _onChange;
        if (cb == null) return;
        final complete = d?.complete ?? false;
        String error = '';
        if (d != null && !complete) {
          if (d.validNumber == CardValidationState.Invalid) {
            error = 'O número do cartão não é válido.';
          } else if (d.validExpiryDate == CardValidationState.Invalid) {
            error = 'A validade do cartão não é válida.';
          } else if (d.validCVC == CardValidationState.Invalid) {
            error = 'O CVC não é válido.';
          }
        }
        cb(CardFieldsState(complete: complete, error: error));
      },
    );
  }

  @override
  Future<void> mountCard(String publishableKey, void Function(CardFieldsState s) onChange) async {
    await _configure(publishableKey);
    _testMode = publishableKey.startsWith('pk_test');
    _onChange = onChange;
  }

  @override
  Future<Map<String, dynamic>> payCard(String clientSecret, String? email) async {
    try {
      final pi = await Stripe.instance.confirmPayment(
        paymentIntentClientSecret: clientSecret,
        data: PaymentMethodParams.card(
          paymentMethodData: PaymentMethodData(billingDetails: BillingDetails(email: email)),
        ),
      );
      return {'status': _status(pi.status)};
    } on StripeException catch (e) {
      if (e.error.code == FailureCode.Canceled) return {'error': 'Pagamento cancelado.'};
      return {'error': e.error.localizedMessage ?? 'O pagamento não foi aceite. Tenta outro cartão.'};
    } catch (_) {
      return {'error': 'Não foi possível concluir o pagamento. Tenta outra vez.'};
    }
  }

  @override
  Future<String> wallet(String publishableKey, int amountCents, String label) async {
    if (!supported) return '';
    try {
      await _configure(publishableKey);
      _testMode = publishableKey.startsWith('pk_test');
      _label = label;
      final ok = await Stripe.instance.isPlatformPaySupported(
        googlePay: IsGooglePaySupportedParams(testEnv: _testMode, existingPaymentMethodRequired: false),
      );
      if (!ok) return '';
      return defaultTargetPlatform == TargetPlatform.iOS ? 'apple_pay' : 'google_pay';
    } catch (_) {
      return '';
    }
  }

  @override
  Future<Map<String, dynamic>> payWallet(Future<String?> Function() clientSecret) async {
    final secret = await clientSecret();
    if (secret == null) return {'cancelled': true};
    try {
      final intent = await Stripe.instance.retrievePaymentIntent(secret);
      final amount = (intent.amount / 100).toStringAsFixed(2);
      final PaymentIntent pi;
      if (defaultTargetPlatform == TargetPlatform.iOS) {
        pi = await Stripe.instance.confirmPlatformPayPaymentIntent(
          clientSecret: secret,
          confirmParams: PlatformPayConfirmParams.applePay(
            applePay: ApplePayParams(
              cartItems: [ApplePayCartSummaryItem.immediate(label: 'À Nossa!', amount: amount)],
              merchantCountryCode: 'PT',
              currencyCode: 'EUR',
            ),
          ),
        );
      } else {
        pi = await Stripe.instance.confirmPlatformPayPaymentIntent(
          clientSecret: secret,
          confirmParams: PlatformPayConfirmParams.googlePay(
            googlePay: GooglePayParams(
              testEnv: _testMode,
              merchantName: _label,
              merchantCountryCode: 'PT',
              currencyCode: 'EUR',
            ),
          ),
        );
      }
      return {'status': _status(pi.status)};
    } on StripeException catch (e) {
      if (e.error.code == FailureCode.Canceled) return {'cancelled': true};
      return {'error': e.error.localizedMessage ?? 'O pagamento não foi aceite.'};
    } catch (_) {
      return {'error': 'Não foi possível concluir o pagamento. Tenta outra vez.'};
    }
  }

  static String _status(PaymentIntentsStatus s) => switch (s) {
        PaymentIntentsStatus.Succeeded => 'succeeded',
        PaymentIntentsStatus.Processing => 'processing',
        PaymentIntentsStatus.RequiresCapture => 'succeeded',
        _ => 'processing',
      };

  @override
  void dispose() {
    _onChange = null;
  }
}

StripePay create() => _NativeStripePay();
