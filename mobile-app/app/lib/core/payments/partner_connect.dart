import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException;

import '../supabase/supabase_config.dart';

/// Conta Stripe do parceiro dentro da app (`connect-account`, 2026-10-19).

class ConnectPayout {
  final String id;
  final int amountCents;
  final DateTime? arrival;
  final DateTime? created;
  final String status; // pending | in_transit | paid | failed | canceled
  const ConnectPayout({required this.id, required this.amountCents, this.arrival, this.created, required this.status});

  static DateTime? _ts(Object? v) => v is num ? DateTime.fromMillisecondsSinceEpoch(v.toInt() * 1000) : null;

  factory ConnectPayout.fromJson(Map j) => ConnectPayout(
        id: j['id'] as String,
        amountCents: (j['amount_cents'] as num).toInt(),
        arrival: _ts(j['arrival_date']),
        created: _ts(j['created']),
        status: j['status'] as String? ?? 'pending',
      );

  String get statusLabel => switch (status) {
        'paid' => 'Depositado',
        'failed' => 'Falhou',
        'canceled' => 'Cancelado',
        _ => 'A caminho',
      };
}

class ConnectStatus {
  final bool hasAccount;
  final bool detailsSubmitted;
  final bool chargesEnabled;
  final bool payoutsEnabled;
  final List<String> currentlyDue;
  final List<String> eventuallyDue;
  final List<String> pastDue;
  final List<String> pendingVerification;
  final String? disabledReason;
  final String? bankLast4;
  final String? bankName;
  final int availableCents;
  final int pendingCents;
  final List<ConnectPayout> payouts;

  /// `manual` | `daily` | `weekly` | `monthly` (Stripe).
  final String payoutSchedule;

  const ConnectStatus({
    this.payoutSchedule = 'manual',
    this.hasAccount = false,
    this.detailsSubmitted = false,
    this.chargesEnabled = false,
    this.payoutsEnabled = false,
    this.currentlyDue = const [],
    this.eventuallyDue = const [],
    this.pastDue = const [],
    this.pendingVerification = const [],
    this.disabledReason,
    this.bankLast4,
    this.bankName,
    this.availableCents = 0,
    this.pendingCents = 0,
    this.payouts = const [],
  });

  static List<String> _l(Object? v) => v is List ? v.map((e) => e.toString()).toList() : const [];

  factory ConnectStatus.fromJson(Map j) {
    if (j['has_account'] != true) return const ConnectStatus();
    final r = (j['requirements'] as Map?) ?? const {};
    final bank = j['bank'] as Map?;
    final bal = (j['balance'] as Map?) ?? const {};
    return ConnectStatus(
      hasAccount: true,
      detailsSubmitted: j['details_submitted'] == true,
      chargesEnabled: j['charges_enabled'] == true,
      payoutsEnabled: j['payouts_enabled'] == true,
      currentlyDue: _l(r['currently_due']),
      eventuallyDue: _l(r['eventually_due']),
      pastDue: _l(r['past_due']),
      pendingVerification: _l(r['pending_verification']),
      disabledReason: r['disabled_reason'] as String?,
      bankLast4: bank?['last4'] as String?,
      bankName: bank?['bank_name'] as String?,
      availableCents: (bal['available_cents'] as num?)?.toInt() ?? 0,
      pendingCents: (bal['pending_cents'] as num?)?.toInt() ?? 0,
      payoutSchedule: j['payout_schedule'] as String? ?? 'daily',
      payouts: ((j['payouts'] as List?) ?? const []).map((p) => ConnectPayout.fromJson(p as Map)).toList(),
    );
  }

  bool get needsData => currentlyDue.isNotEmpty || pastDue.isNotEmpty || !detailsSubmitted;
  bool get active => chargesEnabled && payoutsEnabled;
  bool get manualPayouts => payoutSchedule == 'manual';
}

/// Os grupos de dados que a Stripe pede, em português, para a página de
/// confirmação. Cada requisito da Stripe (`individual.dob.day`,
/// `external_account`, …) cai num destes grupos.
enum ConnectGroup {
  identity(Icons.badge_outlined, 'Identidade', 'Nome completo, data de nascimento e NIF do responsável'),
  contact(Icons.alternate_email, 'Contacto', 'Email e telemóvel'),
  address(Icons.home_outlined, 'Morada', 'Morada fiscal completa com código postal'),
  business(Icons.storefront_outlined, 'Atividade', 'Tipo de negócio (empresário ou empresa) e descrição do serviço'),
  bank(Icons.account_balance_outlined, 'Conta bancária', 'IBAN em teu nome ou da tua empresa'),
  document(Icons.document_scanner_outlined, 'Documento de identificação', 'Cartão de Cidadão ou passaporte, se a Stripe pedir'),
  terms(Icons.handshake_outlined, 'Termos da Stripe', 'Aceitar o contrato de conta da Stripe');

  final IconData icon;
  final String title;
  final String hint;
  const ConnectGroup(this.icon, this.title, this.hint);

  static ConnectGroup of(String req) {
    if (req.contains('external_account')) return bank;
    if (req.contains('verification')) return document;
    if (req.contains('tos_acceptance')) return terms;
    if (req.contains('address')) return address;
    if (req.contains('email') || req.contains('phone')) return contact;
    if (req.contains('business_profile') || req.contains('business_type') || req.startsWith('company')) {
      return business;
    }
    return identity;
  }
}

enum GroupState { missing, verifying, later, done, todo }

extension ConnectGroups on ConnectStatus {
  GroupState stateOf(ConnectGroup g) {
    bool any(List<String> l) => l.any((r) => ConnectGroup.of(r) == g);
    if (!hasAccount) return GroupState.todo;
    if (any(currentlyDue) || any(pastDue)) return GroupState.missing;
    if (any(pendingVerification)) return GroupState.verifying;
    if (any(eventuallyDue)) return GroupState.later;
    if (!detailsSubmitted) return GroupState.todo;
    return GroupState.done;
  }

  int get groupsDone => ConnectGroup.values.where((g) => stateOf(g) == GroupState.done).length;
}

class ConnectError implements Exception {
  final String code;
  const ConnectError(this.code);
}

Future<Map<String, dynamic>> _call(Map<String, dynamic> body) async {
  try {
    final res = await supabase.functions.invoke('connect-account', body: body);
    return (res.data as Map).cast<String, dynamic>();
  } on FunctionException catch (e) {
    final d = e.details;
    throw ConnectError(d is Map ? (d['error'] as String? ?? 'unknown_error') : 'unknown_error');
  }
}

final partnerConnectStatusProvider = FutureProvider.autoDispose<ConnectStatus>((ref) async {
  final j = await _call({'action': 'status'});
  return ConnectStatus.fromJson(j);
});

/// Sessão para o formulário embutido (cria a conta se ainda não existir).
Future<(String clientSecret, String publishableKey)> createConnectSession() async {
  final j = await _call({'action': 'session'});
  return (j['client_secret'] as String, j['publishable_key'] as String);
}

/// Levanta [amountCents] (ou todo o disponível) para o IBAN.
Future<ConnectPayout> requestPayout({int? amountCents}) async {
  final j = await _call({'action': 'payout', if (amountCents != null) 'amount_cents': amountCents});
  return ConnectPayout.fromJson(j['payout'] as Map);
}

/// Modos de levantamento que o parceiro pode escolher.
enum PayoutMode {
  manual('manual', 'Manual', 'Levantas quando quiseres, com o botão Levantar'),
  daily('daily', 'Automático · diário', 'A Stripe envia o saldo disponível todos os dias'),
  weekly('weekly', 'Automático · semanal', 'Todas as sextas-feiras'),
  monthly('monthly', 'Automático · mensal', 'No dia 1 de cada mês');

  final String code;
  final String label;
  final String hint;
  const PayoutMode(this.code, this.label, this.hint);

  static PayoutMode of(String code) =>
      PayoutMode.values.firstWhere((m) => m.code == code, orElse: () => PayoutMode.daily);
}

Future<void> setPayoutMode(PayoutMode mode) async {
  await _call({'action': 'schedule', 'interval': mode.code});
}

String connectErrorMessage(String code) => switch (code) {
      'not_configured' => 'Os pagamentos na app ainda estão a ser configurados.',
      'payouts_disabled' => 'A Stripe ainda não ativou os levantamentos. Confirma os teus dados.',
      'no_balance' => 'Ainda não tens saldo disponível para levantar.',
      'automatic_payouts' => 'Os levantamentos estão em automático. Muda para manual para levantar agora.',
      'insufficient_balance' => 'O valor é maior do que o saldo disponível.',
      _ => 'Algo correu mal com a Stripe. Tenta novamente.',
    };
