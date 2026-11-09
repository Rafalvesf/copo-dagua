import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import 'category_figure.dart';

/// Regra de cancelamento de um parceiro (migração 173). Cada categoria
/// tem uma regra por defeito; o parceiro pode trocá-la (pedido
/// 2026-11-09: "todos os parceiros têm liberdade de mudar").
/// [standard]: regra base (sinal nas 48 h após pagar, se reembolsável;
/// restante com 30+ dias de antecedência). Igual a `partner_cancellation_policy` (174).
enum CancellationKind { standard, hours, untilPurchase, partnerTerms }

class CancellationRule {
  const CancellationRule(this.kind, {this.hours, this.note = '', this.custom = false});

  final CancellationKind kind;
  final int? hours;
  final String note;

  /// `true` quando foi o parceiro a escolher (não é a regra por defeito).
  final bool custom;

  static const _hoursCategories = {
    'restaurants', 'bars_nightlife', 'adventure_activities', 'experiences_tours',
    'games_escape', 'spa_wellness', 'kids_entertainment',
  };
  static const _ownTermsCategories = {'transport', 'lodging'};

  /// Regra por defeito da categoria.
  /// Mesma prioridade que o servidor: atividades primeiro, depois
  /// transporte/alojamento, senão a regra base.
  static CancellationRule defaultFor(String? slug, [Iterable<String> others = const []]) {
    final all = {?slug, ...others};
    if (all.any(_hoursCategories.contains)) return const CancellationRule(CancellationKind.hours, hours: 2);
    if (all.any(_ownTermsCategories.contains)) return const CancellationRule(CancellationKind.partnerTerms);
    return const CancellationRule(CancellationKind.standard);
  }

  static CancellationRule fromRow(Map<String, dynamic>? row, String? slug, [Iterable<String> others = const []]) {
    final base = defaultFor(slug, others);
    final kind = switch (row?['cancellation_rule'] as String?) {
      'hours' => CancellationKind.hours,
      'until_purchase' => CancellationKind.untilPurchase,
      'partner_terms' => CancellationKind.partnerTerms,
      _ => null,
    };
    final note = (row?['cancellation_note'] as String?)?.trim() ?? '';
    if (kind == null) return CancellationRule(base.kind, hours: base.hours, note: note);
    return CancellationRule(kind, hours: row?['cancellation_hours'] as int? ?? base.hours ?? 2, note: note, custom: true);
  }

  String? get dbValue => switch (kind) {
        CancellationKind.standard => null,
        CancellationKind.hours => 'hours',
        CancellationKind.untilPurchase => 'until_purchase',
        CancellationKind.partnerTerms => 'partner_terms',
      };

  /// "2 h", "1 dia", "30 dias".
  static String hoursLabel(int h) {
    if (h < 24 || h % 24 != 0) return '$h h';
    final d = h ~/ 24;
    return d == 1 ? '1 dia' : '$d dias';
  }

  /// Uma linha para mostrar aos clientes.
  String summary(String? slug) => switch (kind) {
        CancellationKind.standard => 'Sinal devolvido nas 48 h após pagar; restante até 30 dias antes',
        CancellationKind.hours => 'Cancelamento grátis até ${hoursLabel(hours ?? 2)} antes',
        CancellationKind.untilPurchase => 'Cancela até à compra; depois, segundo o parceiro',
        CancellationKind.partnerTerms =>
          note.isNotEmpty ? note : (slug == 'lodging' ? 'Cancelamento segundo o alojamento' : 'Cancelamento segundo o parceiro'),
      };
}

/// Regra de um parceiro. Nunca falha: se a migração ainda não correu,
/// devolve a regra por defeito da categoria.
final partnerCancellationProvider =
    FutureProvider.family<CancellationRule, (String, String?)>((ref, args) async {
  final (partnerId, slug) = args;
  var others = const <String>[];
  try {
    final cats = await supabase
        .from('partner_profile_categories')
        .select('partner_categories(slug)')
        .eq('partner_id', partnerId);
    others = [
      for (final c in cats as List)
        if ((c['partner_categories'] as Map?)?['slug'] case final String s) s,
    ];
  } catch (_) {}
  try {
    final row = await supabase
        .from('partner_profiles')
        .select('cancellation_rule, cancellation_hours, cancellation_note')
        .eq('id', partnerId)
        .maybeSingle();
    return CancellationRule.fromRow(row, slug, others);
  } catch (_) {
    return CancellationRule.defaultFor(slug, others);
  }
});

/// Slug da primeira categoria a partir do rótulo (perfil do parceiro).
String? slugForCategoryLabel(String? label) => categorySlugForLabel(label);
