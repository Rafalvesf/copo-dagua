import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Período do painel "Resultados" do parceiro.
enum AnalyticsPeriod {
  week('7 dias', 7),
  month('30 dias', 30),
  year('12 meses', 365);

  const AnalyticsPeriod(this.label, this.days);
  final String label;
  final int days;
}

/// Um ponto de uma série (início do intervalo + valor).
class AnalyticsPoint {
  final DateTime start;
  final double value;

  const AnalyticsPoint(this.start, this.value);
}

/// Números do painel "Resultados" (pedido do utilizador 2026-10-16:
/// "faz gráficos para o parceiro ver como está tudo a correr, como
/// Shopify"). Tudo vem de dados reais:
/// - receita e reservas: `bookings` confirmadas/concluídas, pela data em
///   que ficaram confirmadas (`confirmed_at`, ou `created_at`);
/// - pedidos, propostas e reservas do funil: `quote_requests` pelo
///   `created_at` e o `status`;
/// - avaliação: `reviews` do parceiro.
/// Não há visualizações de perfil — não existe esse evento na base de
/// dados, por isso não aparecem (em vez de números inventados).
class PartnerAnalytics {
  final AnalyticsPeriod period;
  final double revenue;
  final double previousRevenue;
  final List<AnalyticsPoint> revenueSeries;
  final List<AnalyticsPoint> previousRevenueSeries;
  final int bookings;
  final int previousBookings;
  final List<AnalyticsPoint> bookingsSeries;
  final int requests;
  final int previousRequests;
  final List<AnalyticsPoint> requestsSeries;
  final int proposals;
  final int accepted;
  final List<AnalyticsPoint> requestsByWeek;
  final double? averageRating;
  final int reviewCount;

  const PartnerAnalytics({
    required this.period,
    required this.revenue,
    required this.previousRevenue,
    required this.revenueSeries,
    required this.previousRevenueSeries,
    required this.bookings,
    required this.previousBookings,
    required this.bookingsSeries,
    required this.requests,
    required this.previousRequests,
    required this.requestsSeries,
    required this.proposals,
    required this.accepted,
    required this.requestsByWeek,
    required this.averageRating,
    required this.reviewCount,
  });

  double get averageValue => bookings == 0 ? 0 : revenue / bookings;
  double get previousAverageValue =>
      previousBookings == 0 ? 0 : previousRevenue / previousBookings;

  /// Pedidos deste período que acabaram em reserva.
  double get conversion => requests == 0 ? 0 : accepted / requests;
}

/// Intervalos (buckets) de um período: dias para 7/30 dias, meses para
/// 12 meses. [end] é exclusivo.
List<DateTime> _bucketStarts(AnalyticsPeriod period, DateTime end) {
  if (period == AnalyticsPeriod.year) {
    return [
      for (var i = 11; i >= 0; i--) DateTime(end.year, end.month - i, 1),
    ];
  }
  final today = DateTime(end.year, end.month, end.day);
  return [
    for (var i = period.days - 1; i >= 0; i--)
      today.subtract(Duration(days: i)),
  ];
}

DateTime _bucketEnd(AnalyticsPeriod period, DateTime start) =>
    period == AnalyticsPeriod.year
        ? DateTime(start.year, start.month + 1, 1)
        : start.add(const Duration(days: 1));

List<AnalyticsPoint> _series(
  AnalyticsPeriod period,
  List<DateTime> starts,
  Iterable<({DateTime at, double value})> events,
) {
  return [
    for (final s in starts)
      AnalyticsPoint(
        s,
        events
            .where((e) => !e.at.isBefore(s) && e.at.isBefore(_bucketEnd(period, s)))
            .fold<double>(0, (sum, e) => sum + e.value),
      ),
  ];
}

DateTime _parse(Object? v) => DateTime.parse(v as String).toLocal();

final partnerAnalyticsProvider =
    FutureProvider.family<PartnerAnalytics, AnalyticsPeriod>((ref, period) async {
  final partnerId =
      ref.watch(authControllerProvider.select((s) => s.profile!.id));
  final now = DateTime.now();

  final starts = _bucketStarts(period, now);
  final currentStart = starts.first;
  final currentEnd = _bucketEnd(period, starts.last);
  // Período anterior com o mesmo número de intervalos, imediatamente antes.
  final previousStarts = period == AnalyticsPeriod.year
      ? [for (final s in starts) DateTime(s.year - 1, s.month, 1)]
      : [for (final s in starts) s.subtract(Duration(days: period.days))];
  final previousStart = previousStarts.first;

  final bookingRows = (await supabase
          .from('bookings')
          .select('total_amount, status, created_at, confirmed_at')
          .eq('partner_id', partnerId)
          .inFilter('status', ['confirmed', 'completed']))
      .cast<Map<String, dynamic>>();
  final bookingEvents = [
    for (final r in bookingRows)
      (
        at: _parse(r['confirmed_at'] ?? r['created_at']),
        value: (r['total_amount'] as num).toDouble(),
      ),
  ];

  final requestRows = (await supabase
          .from('quote_requests')
          .select('status, created_at')
          .eq('partner_id', partnerId))
      .cast<Map<String, dynamic>>();
  final requestEvents = [
    for (final r in requestRows)
      (at: _parse(r['created_at']), status: r['status'] as String),
  ];

  bool inRange(DateTime at, DateTime from, DateTime to) =>
      !at.isBefore(from) && at.isBefore(to);

  final current = bookingEvents.where((e) => inRange(e.at, currentStart, currentEnd));
  final previous = bookingEvents.where((e) => inRange(e.at, previousStart, currentStart));
  final currentRequests =
      requestEvents.where((e) => inRange(e.at, currentStart, currentEnd)).toList();
  final previousRequests =
      requestEvents.where((e) => inRange(e.at, previousStart, currentStart)).length;

  // Últimas 8 semanas (segunda a domingo), independentemente do período.
  final today = DateTime(now.year, now.month, now.day);
  final thisMonday = today.subtract(Duration(days: today.weekday - 1));
  final weeks = [
    for (var i = 7; i >= 0; i--) thisMonday.subtract(Duration(days: 7 * i)),
  ];
  final byWeek = [
    for (final w in weeks)
      AnalyticsPoint(
        w,
        requestEvents
            .where((e) => inRange(e.at, w, w.add(const Duration(days: 7))))
            .length
            .toDouble(),
      ),
  ];

  final reviewRows = (await supabase
          .from('reviews')
          .select('rating')
          .eq('partner_id', partnerId)
          .eq('status', 'published'))
      .cast<Map<String, dynamic>>();
  final ratings = [for (final r in reviewRows) (r['rating'] as num).toDouble()];

  return PartnerAnalytics(
    period: period,
    revenue: current.fold(0.0, (s, e) => s + e.value),
    previousRevenue: previous.fold(0.0, (s, e) => s + e.value),
    revenueSeries: _series(period, starts, current),
    previousRevenueSeries: _series(period, previousStarts, previous),
    bookings: current.length,
    previousBookings: previous.length,
    bookingsSeries: _series(
      period,
      starts,
      current.map((e) => (at: e.at, value: 1.0)),
    ),
    requests: currentRequests.length,
    previousRequests: previousRequests,
    requestsSeries: _series(
      period,
      starts,
      currentRequests.map((e) => (at: e.at, value: 1.0)),
    ),
    proposals: currentRequests
        .where((e) => e.status == 'proposal_sent' || e.status == 'accepted')
        .length,
    accepted: currentRequests.where((e) => e.status == 'accepted').length,
    requestsByWeek: byWeek,
    averageRating: ratings.isEmpty
        ? null
        : ratings.reduce((a, b) => a + b) / ratings.length,
    reviewCount: ratings.length,
  );
});
