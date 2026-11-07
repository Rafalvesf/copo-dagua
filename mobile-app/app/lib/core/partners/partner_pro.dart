import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException, PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Plano Pro dos parceiros (migração 161): selo Pro e mais visibilidade,
/// estatísticas detalhadas e loja sem limites. Subscrição Stripe.
class PartnerPro {
  final bool enabled;
  final bool active;
  final DateTime? until;
  final String? interval; // month | year | gift
  final bool hasSubscription;
  final double priceMonthly;
  final double priceYearly;
  final int freeShopProducts;
  final int products;
  const PartnerPro({
    this.enabled = false,
    this.active = false,
    this.until,
    this.interval,
    this.hasSubscription = false,
    this.priceMonthly = 19,
    this.priceYearly = 190,
    this.freeShopProducts = 5,
    this.products = 0,
  });

  bool get shopFull => !active && products >= freeShopProducts;
}

/// `enabled: false` também antes da migração 161 (o Pro não aparece).
final myPartnerProProvider = FutureProvider<PartnerPro>((ref) async {
  try {
    final r = await supabase.rpc('my_partner_pro');
    if (r is! Map) return const PartnerPro();
    return PartnerPro(
      enabled: r['enabled'] != false,
      active: r['active'] == true,
      until: DateTime.tryParse('${r['until'] ?? ''}')?.toLocal(),
      interval: r['interval'] as String?,
      hasSubscription: r['has_subscription'] == true,
      priceMonthly: (r['price_monthly'] as num?)?.toDouble() ?? 19,
      priceYearly: (r['price_yearly'] as num?)?.toDouble() ?? 190,
      freeShopProducts: (r['free_shop_products'] as num?)?.toInt() ?? 5,
      products: (r['products'] as num?)?.toInt() ?? 0,
    );
  } on PostgrestException {
    return const PartnerPro();
  }
});

/// Parceiros Pro: selo e sobem na lista.
final proPartnerIdsProvider = FutureProvider<Set<String>>((ref) async {
  try {
    final rows = await supabase.rpc('pro_partner_ids') as List;
    return {for (final r in rows) r is Map ? '${r.values.first}' : '$r'};
  } catch (_) {
    return const {};
  }
});

class ProStats {
  final bool pro;
  final int views30d;
  final int viewsPrev30d;
  final int quoteStarts30d;
  final int requests30d;
  final int promotionClicks30d;
  final List<({DateTime start, int views})> viewsByWeek;
  const ProStats({
    this.pro = false,
    this.views30d = 0,
    this.viewsPrev30d = 0,
    this.quoteStarts30d = 0,
    this.requests30d = 0,
    this.promotionClicks30d = 0,
    this.viewsByWeek = const [],
  });
}

final partnerProStatsProvider = FutureProvider<ProStats>((ref) async {
  try {
    final r = await supabase.rpc('partner_pro_stats');
    if (r is! Map || r['pro'] != true) return const ProStats();
    int n(String k) => (r[k] as num?)?.toInt() ?? 0;
    return ProStats(
      pro: true,
      views30d: n('views_30d'),
      viewsPrev30d: n('views_prev_30d'),
      quoteStarts30d: n('quote_starts_30d'),
      requests30d: n('requests_30d'),
      promotionClicks30d: n('promotion_clicks_30d'),
      viewsByWeek: [
        for (final w in (r['views_by_week'] as List? ?? const []).cast<Map>())
          (start: DateTime.tryParse('${w['start']}') ?? DateTime.now(), views: (w['views'] as num?)?.toInt() ?? 0),
      ],
    );
  } on PostgrestException {
    return const ProStats();
  }
});

class ProError implements Exception {
  final String code;
  const ProError(this.code);
  String get message => switch (code) {
        'already_pro' => 'Já és Pro.',
        'pro_disabled' => 'O Pro não está disponível de momento.',
        'portal_unavailable' => 'Não foi possível abrir a gestão da subscrição. Fala connosco no suporte.',
        'no_subscription' => 'Não tens uma subscrição para gerir.',
        _ => 'Não foi possível abrir o pagamento. Tenta novamente.',
      };
}

Future<String> _invoke(Map<String, dynamic> body) async {
  try {
    final res = await supabase.functions.invoke('partner-pro', body: body);
    final url = (res.data as Map?)?['url'] as String?;
    if (url == null) throw const ProError('unknown');
    return url;
  } on FunctionException catch (e) {
    final d = e.details;
    throw ProError(d is Map ? (d['error'] as String? ?? 'unknown') : 'unknown');
  }
}

String get _back => kIsWeb ? publicLink('/partner-pro') : 'anossa://partner-pro';

Future<String> proCheckoutUrl({required bool yearly}) =>
    _invoke({'action': 'checkout', 'interval': yearly ? 'year' : 'month', 'success_url': '$_back?ok=1', 'cancel_url': _back});

Future<String> proPortalUrl() => _invoke({'action': 'portal', 'return_url': _back});

Future<void> syncPro() async {
  try {
    await supabase.functions.invoke('partner-pro', body: {'action': 'sync'});
  } catch (_) {}
}
