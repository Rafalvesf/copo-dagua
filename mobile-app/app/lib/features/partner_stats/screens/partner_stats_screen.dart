import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/partner_app/partner_analytics.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/charts.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

const _monthsShort = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

String _eur(double v) {
  final s = v.round().abs().toString();
  final buf = StringBuffer();
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) buf.write(' ');
    buf.write(s[i]);
  }
  return '${v < 0 ? '-' : ''}$buf €';
}

String _compactEur(double v) {
  if (v >= 1000) {
    final k = v / 1000;
    return '${k == k.roundToDouble() ? k.toStringAsFixed(0) : k.toStringAsFixed(1).replaceAll('.', ',')}k';
  }
  return v.toStringAsFixed(0);
}

/// Variação em % entre dois valores; `null` quando não há base.
double? _deltaPct(double current, double previous) {
  if (previous == 0) return current == 0 ? 0 : null;
  return (current - previous) / previous * 100;
}

/// Painel "Resultados" do parceiro (pedido do utilizador 2026-10-16:
/// "faz gráficos para o parceiro ver como está tudo a correr, como
/// Shopify"). Igual ao canvas "Parceiro — resultados"; os números vêm de
/// [partnerAnalyticsProvider], só de dados reais.
class PartnerStatsScreen extends ConsumerStatefulWidget {
  const PartnerStatsScreen({super.key});

  @override
  ConsumerState<PartnerStatsScreen> createState() => _PartnerStatsScreenState();
}

class _PartnerStatsScreenState extends ConsumerState<PartnerStatsScreen> {
  AnalyticsPeriod _period = AnalyticsPeriod.month;

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(partnerAnalyticsProvider(_period));
    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
          children: [
            const PageHeader(title: 'Resultados'),
            Padding(
              padding: const EdgeInsets.fromLTRB(28, 18, 28, 0),
              child: _PeriodSwitch(
                value: _period,
                onChanged: (p) => setState(() => _period = p),
              ),
            ),
            async.when(
              loading: () => const Padding(
                padding: EdgeInsets.all(48),
                child: Center(child: CircularProgressIndicator()),
              ),
              error: (err, st) => Padding(
                padding: const EdgeInsets.only(top: 32),
                child: AsyncErrorView(
                  message: 'Não foi possível carregar os resultados.',
                  onRetry: () => ref.invalidate(partnerAnalyticsProvider(_period)),
                ),
              ),
              data: (a) => _Dashboard(a),
            ),
          ],
        ),
      ),
    );
  }
}

class _PeriodSwitch extends StatelessWidget {
  final AnalyticsPeriod value;
  final ValueChanged<AnalyticsPeriod> onChanged;

  const _PeriodSwitch({required this.value, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.pill),
      ),
      child: Row(
        children: [
          for (final p in AnalyticsPeriod.values)
            Expanded(
              child: Semantics(
                button: true,
                selected: p == value,
                child: SnappyTap(
                  onTap: () => onChanged(p),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 160),
                    height: 36,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: p == value ? Colors.white : Colors.transparent,
                      borderRadius: BorderRadius.circular(AppRadius.pill),
                      boxShadow: p == value
                          ? const [
                              BoxShadow(
                                color: Color(0x1F171713),
                                blurRadius: 3,
                                offset: Offset(0, 1),
                              ),
                            ]
                          : null,
                    ),
                    child: Text(
                      p.label,
                      style: TextStyle(
                        fontSize: AppFontSize.md,
                        fontWeight: p == value ? FontWeight.w700 : FontWeight.w400,
                        color: p == value ? AppTheme.ink : AppTheme.inkMuted,
                      ),
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _Dashboard extends StatelessWidget {
  final PartnerAnalytics a;

  const _Dashboard(this.a);

  String _bucketLabel(DateTime d) => a.period == AnalyticsPeriod.year
      ? '${_monthsShort[d.month - 1]} ${d.year}'
      : '${d.day} ${_monthsShort[d.month - 1]}';

  List<String> _xLabels() {
    final n = a.revenueSeries.length;
    final picks = <int>{0, n ~/ 3, (2 * n) ~/ 3, n - 1};
    return [
      for (var i = 0; i < n; i++)
        picks.contains(i)
            ? (a.period == AnalyticsPeriod.year
                ? _monthsShort[a.revenueSeries[i].start.month - 1]
                : '${a.revenueSeries[i].start.day}/${a.revenueSeries[i].start.month}')
            : '',
    ];
  }

  @override
  Widget build(BuildContext context) {
    final revenueDelta = _deltaPct(a.revenue, a.previousRevenue);
    final noData = a.revenue == 0 && a.requests == 0 && a.bookings == 0;
    return Padding(
      padding: const EdgeInsets.fromLTRB(28, 20, 28, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Receita · reservas confirmadas',
            style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 2),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Flexible(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(
                    _eur(a.revenue),
                    style: const TextStyle(
                      fontSize: 40,
                      height: 46 / 40,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              _Delta(pct: revenueDelta),
            ],
          ),
          Text(
            'vs. ${a.period.label} anteriores (${_eur(a.previousRevenue)})',
            style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 12),
          LineAreaChart(
            values: [for (final p in a.revenueSeries) p.value],
            previous: [for (final p in a.previousRevenueSeries) p.value],
            xLabels: _xLabels(),
            formatValue: _compactEur,
            describePoint: (i) => _bucketLabel(a.revenueSeries[i].start),
          ),
          const SizedBox(height: 6),
          const Row(
            children: [
              _LegendKey(dashed: false, label: 'Este período'),
              SizedBox(width: 16),
              _LegendKey(dashed: true, label: 'Período anterior'),
            ],
          ),
          if (noData) ...[
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: AppColors.gray,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: const Text(
                'Ainda sem pedidos nem reservas neste período. Assim que chegarem, os gráficos enchem-se sozinhos.',
                style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.accentOliveDark),
              ),
            ),
          ],
          const SizedBox(height: 22),
          GridView.count(
            crossAxisCount: 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.35,
            children: [
              _KpiTile(
                label: 'Reservas',
                value: '${a.bookings}',
                deltaText: _countDelta(a.bookings, a.previousBookings),
                up: a.bookings >= a.previousBookings,
                spark: [for (final p in a.bookingsSeries) p.value],
              ),
              _KpiTile(
                label: 'Pedidos recebidos',
                value: '${a.requests}',
                deltaText: _countDelta(a.requests, a.previousRequests),
                up: a.requests >= a.previousRequests,
                spark: [for (final p in a.requestsSeries) p.value],
              ),
              _KpiTile(
                label: 'Conversão',
                value: '${(a.conversion * 100).round()}%',
                deltaText: null,
                up: true,
                spark: null,
                caption: '${a.accepted} de ${a.requests} pedidos',
              ),
              _KpiTile(
                label: 'Valor médio',
                value: _eur(a.averageValue),
                deltaText: _pctText(_deltaPct(a.averageValue, a.previousAverageValue)),
                up: a.averageValue >= a.previousAverageValue,
                spark: null,
                caption: 'por reserva',
              ),
            ],
          ),
          const SizedBox(height: 24),
          const Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Expanded(
                child: Text(
                  'Pedidos por semana',
                  style: TextStyle(
                    fontSize: AppFontSize.xl,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              Text(
                'últimas 8 semanas',
                style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
              ),
            ],
          ),
          const SizedBox(height: 12),
          SimpleBarChart(
            values: [for (final p in a.requestsByWeek) p.value],
            labels: [
              for (final p in a.requestsByWeek) '${p.start.day}/${p.start.month}',
            ],
            describe: (i) =>
                'Semana de ${_bucketLabel(a.requestsByWeek[i].start)}: ${a.requestsByWeek[i].value.round()} pedidos',
          ),
          const SizedBox(height: 24),
          const Text(
            'Do pedido à reserva',
            style: TextStyle(
              fontSize: AppFontSize.xl,
              fontWeight: FontWeight.w700,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 14),
          _FunnelRow(label: 'Pedidos recebidos', value: a.requests, total: a.requests),
          const SizedBox(height: 14),
          _FunnelRow(label: 'Propostas enviadas', value: a.proposals, total: a.requests),
          const SizedBox(height: 14),
          _FunnelRow(label: 'Reservas', value: a.accepted, total: a.requests),
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppColors.gray,
              borderRadius: BorderRadius.circular(AppRadius.lg),
            ),
            child: Row(
              children: [
                Text(
                  a.averageRating == null
                      ? '—'
                      : a.averageRating!.toStringAsFixed(1).replaceAll('.', ','),
                  style: const TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.ink,
                  ),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          for (var i = 1; i <= 5; i++)
                            Icon(
                              (a.averageRating ?? 0) >= i - 0.25
                                  ? Icons.star_rounded
                                  : Icons.star_outline_rounded,
                              size: 18,
                              color: AppTheme.ink,
                            ),
                        ],
                      ),
                      const SizedBox(height: 2),
                      Text(
                        a.reviewCount == 0
                            ? 'Ainda sem avaliações'
                            : 'Avaliação média · ${a.reviewCount} ${a.reviewCount == 1 ? 'avaliação' : 'avaliações'}',
                        style: const TextStyle(
                          fontSize: AppFontSize.sm,
                          color: AppTheme.accentOliveDark,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static String? _countDelta(int current, int previous) {
    final d = current - previous;
    if (d == 0) return null;
    return '${d.abs()}';
  }

  static String? _pctText(double? pct) {
    if (pct == null || pct.round() == 0) return null;
    return '${pct.abs().round()}%';
  }
}

class _Delta extends StatelessWidget {
  final double? pct;

  const _Delta({required this.pct});

  @override
  Widget build(BuildContext context) {
    final p = pct;
    if (p == null || p.round() == 0) return const SizedBox.shrink();
    final up = p > 0;
    return Text(
      '${up ? '↑' : '↓'} ${p.abs().round()}%',
      style: TextStyle(
        fontSize: AppFontSize.md,
        fontWeight: FontWeight.w700,
        color: up ? const Color(0xFF2F6B45) : const Color(0xFFA3412E),
      ),
    );
  }
}

class _LegendKey extends StatelessWidget {
  final bool dashed;
  final String label;

  const _LegendKey({required this.dashed, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          width: 16,
          height: 2,
          child: dashed
              ? Row(
                  children: [
                    for (var i = 0; i < 3; i++) ...[
                      Container(width: 4, height: 2, color: const Color(0xFFB8B2A6)),
                      if (i < 2) const SizedBox(width: 2),
                    ],
                  ],
                )
              : Container(color: AppTheme.accentOliveDark),
        ),
        const SizedBox(width: 6),
        Text(
          label,
          style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
        ),
      ],
    );
  }
}

class _KpiTile extends StatelessWidget {
  final String label;
  final String value;
  final String? deltaText;
  final bool up;
  final List<double>? spark;
  final String? caption;

  const _KpiTile({
    required this.label,
    required this.value,
    required this.deltaText,
    required this.up,
    required this.spark,
    this.caption,
  });

  @override
  Widget build(BuildContext context) {
    final s = spark;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 4),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Flexible(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(
                    value,
                    style: const TextStyle(
                      fontSize: AppFontSize.h3,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                ),
              ),
              if (deltaText != null) ...[
                const SizedBox(width: 6),
                Text(
                  '${up ? '↑' : '↓'} $deltaText',
                  style: TextStyle(
                    fontSize: AppFontSize.sm,
                    fontWeight: FontWeight.w700,
                    color: up ? const Color(0xFF2F6B45) : const Color(0xFFA3412E),
                  ),
                ),
              ],
            ],
          ),
          const Spacer(),
          if (s != null && s.any((v) => v > 0))
            Sparkline(values: s)
          else if (caption != null)
            Text(
              caption!,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
        ],
      ),
    );
  }
}

class _FunnelRow extends StatelessWidget {
  final String label;
  final int value;
  final int total;

  const _FunnelRow({required this.label, required this.value, required this.total});

  @override
  Widget build(BuildContext context) {
    final pct = total == 0 ? 0.0 : value / total;
    return Semantics(
      label: '$label: $value, ${(pct * 100).round()}%',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  label,
                  style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink),
                ),
              ),
              Text(
                '$value',
                style: const TextStyle(
                  fontSize: AppFontSize.md,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
              Text(
                ' · ${(pct * 100).round()}%',
                style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
              ),
            ],
          ),
          const SizedBox(height: 6),
          ClipRRect(
            borderRadius: BorderRadius.circular(AppRadius.pill),
            child: LinearProgressIndicator(
              value: pct,
              minHeight: 10,
              backgroundColor: AppTheme.borderMuted,
              color: AppTheme.accentOliveDark,
            ),
          ),
        ],
      ),
    );
  }
}
