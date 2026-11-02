import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../shared/public_link.dart';
import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Convites de clientes pelo parceiro e Parceiros Fundadores (migração
/// 151, pedido 2026-11-02): dos clientes que entram pelo link
/// `/p/CODIGO` de um parceiro (antes de qualquer pedido com ele), contam
/// os que pagam a 1.ª reserva com ele (≥ mínimo, 500 €); a cada 5 que
/// contam, o 5.º fica sem comissão do parceiro nas reservas com ele.

const _pendingKey = 'pending_partner_referral';

String partnerInviteLink(String code) => publicLink('/p/$code');

class PartnerReferralResult {
  final String partnerId;
  final String businessName;
  final bool valid;
  const PartnerReferralResult(this.partnerId, this.businessName, this.valid);
}

class PartnerReferralError implements Exception {
  final String code;
  const PartnerReferralError(this.code);

  String get message => switch (code) {
        'not_found' => 'Este convite já não é válido.',
        'own_code' => 'Este é o teu próprio link de convite.',
        _ => 'Não foi possível abrir o convite. Tenta novamente.',
      };
}

Future<PartnerReferralResult> claimPartnerReferral(String code) async {
  try {
    final rows = await supabase.rpc('claim_partner_referral', params: {'p_code': code.trim()}) as List;
    final r = (rows.first as Map).cast<String, dynamic>();
    return PartnerReferralResult(r['partner_id'] as String, r['business_name'] as String? ?? 'Parceiro', r['valid'] == true);
  } on PostgrestException catch (e) {
    throw PartnerReferralError(e.code == 'P0002' ? 'not_found' : e.message.contains('own_code') ? 'own_code' : 'unknown');
  }
}

/// Sem sessão: guarda o código até a conta ficar ativa.
Future<void> savePendingPartnerReferral(String code) async {
  try {
    (await SharedPreferences.getInstance()).setString(_pendingKey, code.trim());
  } catch (_) {}
}

/// Chamado quando entra uma conta (main.dart).
Future<void> claimPendingPartnerReferral() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final code = prefs.getString(_pendingKey);
    if (code == null || code.isEmpty) return;
    await prefs.remove(_pendingKey);
    await claimPartnerReferral(code);
  } catch (_) {}
}

class PartnerReferralStats {
  final String? code;
  final int? founderNumber;
  final DateTime? featuredUntil;
  final int clients;
  /// Clientes que já contam (pagaram a 1.ª reserva contigo, ≥ mínimo).
  final int countedClients;
  /// Entraram pelo link mas ainda não pagaram nenhuma reserva.
  final int pendingClients;
  /// A cada quantos clientes um fica sem comissão (5).
  final int freeEvery;
  /// Valor mínimo da reserva para o cliente contar.
  final double minBooking;
  const PartnerReferralStats({
    this.code,
    this.founderNumber,
    this.featuredUntil,
    this.clients = 0,
    this.countedClients = 0,
    this.pendingClients = 0,
    this.freeEvery = 5,
    this.minBooking = 500,
  });

  /// Clientes que ficaram sem comissão até agora.
  int get freeClients => countedClients ~/ freeEvery;

  /// Quantos faltam para o próximo cliente sem comissão (o próprio conta).
  int get untilNextFree => freeEvery - (countedClients % freeEvery);

  bool get isFounder => founderNumber != null;
  bool get featuredActive => featuredUntil != null && featuredUntil!.isAfter(DateTime.now());
}

final myPartnerReferralStatsProvider = FutureProvider<PartnerReferralStats>((ref) async {
  ref.watch(authControllerProvider.select((s) => s.profile?.id));
  try {
    final rows = await supabase.rpc('my_partner_referral_stats') as List;
    if (rows.isEmpty) return const PartnerReferralStats();
    final r = (rows.first as Map).cast<String, dynamic>();
    return PartnerReferralStats(
      code: r['referral_code'] as String?,
      founderNumber: (r['founder_number'] as num?)?.toInt(),
      featuredUntil: DateTime.tryParse('${r['featured_until'] ?? ''}')?.toLocal(),
      clients: (r['clients'] as num?)?.toInt() ?? 0,
      countedClients: (r['counted_clients'] as num?)?.toInt() ?? 0,
      pendingClients: (r['pending_clients'] as num?)?.toInt() ?? 0,
      freeEvery: (r['free_every'] as num?)?.toInt() ?? 5,
      minBooking: (r['min_booking'] as num?)?.toDouble() ?? 500,
    );
  } catch (_) {
    // Antes da migração 151.
    return const PartnerReferralStats();
  }
});

/// Parceiros Fundadores (id → n.º), para o selo nas listas e no perfil.
final founderPartnersProvider = FutureProvider<Map<String, int>>((ref) async {
  try {
    final rows = await supabase.from('partner_profiles').select('id, founder_number').not('founder_number', 'is', null);
    return {
      for (final r in (rows as List).cast<Map<String, dynamic>>())
        r['id'] as String: (r['founder_number'] as num).toInt(),
    };
  } catch (_) {
    return const {};
  }
});
