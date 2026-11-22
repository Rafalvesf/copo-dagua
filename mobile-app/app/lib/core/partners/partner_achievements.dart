import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import 'partner_pro.dart';
import 'partner_referrals.dart';

/// Conquistas de um parceiro (pedido do Rafael, 2026-11-22; DESIGN.md §6
/// «Conquistas»), por esta ordem.
enum PartnerAchievement { founder, pro, active }

/// «Mais ativo»: os 10 % com mais reservas confirmadas nos últimos 30 dias
/// (migração 213). Antes da migração, vazio.
final activePartnerIdsProvider = FutureProvider<Set<String>>((ref) async {
  try {
    final rows = await supabase.rpc('active_partner_ids');
    if (rows is! List) return const {};
    return {
      for (final r in rows)
        if (r is String) r else if (r is Map && r.values.isNotEmpty) '${r.values.first}',
    };
  } catch (_) {
    return const {};
  }
});

final partnerAchievementsProvider = Provider.family<List<PartnerAchievement>, String>((ref, id) {
  final founder = ref.watch(founderPartnersProvider).value?.containsKey(id) ?? false;
  final pro = ref.watch(proPartnerIdsProvider).value?.contains(id) ?? false;
  final active = ref.watch(activePartnerIdsProvider).value?.contains(id) ?? false;
  return [
    if (founder) PartnerAchievement.founder,
    if (pro) PartnerAchievement.pro,
    if (active) PartnerAchievement.active,
  ];
});
