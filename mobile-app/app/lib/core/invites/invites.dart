import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../shared/public_link.dart';
import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Convites e descontos na taxa de serviço (migração 193, pedido
/// 2026-11-16): parceiros e organizadores convidam pelo seu link; cada
/// convidado conta quando faz o 1.º pagamento; a cada 5, quem convidou
/// tem a taxa de serviço 2 pontos mais baixa numa transação (migração 210:
/// 4 % + 1 € → 2 % + 1 €; 6 % + 1 € → 4 % + 1 €). Contas novas têm 50 % na
/// 1.ª transação.
String inviteLink(String code) => publicLink('/p/$code');

class InviteStats {
  final String? code;
  final bool isPartner;
  final int? founderNumber;
  final DateTime? featuredUntil;

  /// Entraram pelo link.
  final int joined;

  /// Já fizeram o 1.º pagamento (contam).
  final int counted;

  /// A cada quantos se ganha o desconto (5).
  final int step;

  /// Descontos de convite por usar.
  final int credits;
  final double creditPct;

  /// 210: pontos tirados à taxa por cada prémio de convites (2).
  final double creditPoints;

  /// Ainda tem o desconto da 1.ª transação.
  final bool welcome;

  const InviteStats({
    this.code,
    this.isPartner = false,
    this.founderNumber,
    this.featuredUntil,
    this.joined = 0,
    this.counted = 0,
    this.step = 5,
    this.credits = 0,
    this.creditPct = 50,
    this.creditPoints = 2,
    this.welcome = false,
  });

  /// Quantos do grupo atual de 5 já contam (0–4).
  int get progress => counted % step;
  int get pending => joined - counted;
  bool get isFounder => founderNumber != null;
  bool get featuredActive => featuredUntil != null && featuredUntil!.isAfter(DateTime.now());
}

final myInviteStatsProvider = FutureProvider<InviteStats?>((ref) async {
  ref.watch(authControllerProvider.select((s) => s.profile?.id));
  try {
    final rows = await supabase.rpc('my_invite_stats') as List;
    if (rows.isEmpty) return null;
    final r = (rows.first as Map).cast<String, dynamic>();
    return InviteStats(
      code: r['code'] as String?,
      isPartner: r['is_partner'] == true,
      founderNumber: (r['founder_number'] as num?)?.toInt(),
      featuredUntil: DateTime.tryParse('${r['featured_until'] ?? ''}')?.toLocal(),
      joined: (r['joined'] as num?)?.toInt() ?? 0,
      counted: (r['counted'] as num?)?.toInt() ?? 0,
      step: (r['step'] as num?)?.toInt() ?? 5,
      credits: (r['credits'] as num?)?.toInt() ?? 0,
      creditPct: (r['credit_pct'] as num?)?.toDouble() ?? 50,
      creditPoints: (r['credit_points'] as num?)?.toDouble() ?? 2,
      welcome: r['welcome'] == true,
    );
  } catch (_) {
    // Antes da migração 193.
    return null;
  }
});
