import '../../../shared/widgets/section_frame.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../core/partners/partner_pro.dart';

import '../../../core/partner_app/partner_analytics.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/charts.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/money.dart';
import 'package:copo_dagua_app/shared/widgets/app_progress.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

const _monthsShort = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

String _eur(double v) => euros(v);

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
      background: AppBackground.subtle,
      body: SafeArea(top: false, 
        bottom: false,
        child: ListView(
          padding: ( const EdgeInsets.fromLTRB(0, 0, 0, 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'Resultados', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 0),
              child: _PeriodSwitch(
                value: _period,
                onChanged: (p) => setState(() => _period = p),
              ),
            ),
            async.when(
              loading: () => const Padding(
                padding: EdgeInsets.all(AppTheme.screenMargin),
                child: Column(children: [SkeletonStats(), SizedBox(height: 12), SkeletonStats(), SizedBox(height: 20), SkeletonBox(height: 180)]),
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
            // Estatísticas Pro (migração 161).
            const _ProInsights(),
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

  // Pílula branca com o período ativo a verde (redesign 2026-10-19).
  @override
  Widget build(BuildContext context) {
    // Mockup «Páginas do parceiro» → Resultados: filtros em pílula.
    return KitPills(top: 0, [
      for (final p in AnalyticsPeriod.values)
        KitPill(label: p.label, selected: p == value, onTap: () => onChanged(p)),
    ]);
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
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Mockup «Parceiro · Resultados» (2026-11-25): resumo branco e
          // cada secção numa moldura; números em caixas.
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('RECEITA · RESERVAS CONFIRMADAS',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              const SizedBox(height: 4),
              Text(_eur(a.revenue), style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 10),
              Wrap(spacing: 6, runSpacing: 6, children: [
                if (revenueDelta != null && _pctText(revenueDelta) != null)
                  KitTag('${revenueDelta >= 0 ? '+' : '−'}${_pctText(revenueDelta)}',
                      kind: revenueDelta >= 0 ? KitTagKind.green : KitTagKind.neutral),
                KitTag('vs. ${_eur(a.previousRevenue)} antes', kind: KitTagKind.neutral),
              ]),
            ]),
          ),
          SectionFrame(title: 'Receita', children: [
            LineAreaChart(
              values: [for (final p in a.revenueSeries) p.value],
              previous: [for (final p in a.previousRevenueSeries) p.value],
              xLabels: _xLabels(),
              formatValue: _compactEur,
              describePoint: (i) => _bucketLabel(a.revenueSeries[i].start),
            ),
            const SizedBox(height: 6),
            const Row(children: [
              _LegendKey(dashed: false, label: 'Este período'),
              SizedBox(width: 16),
              _LegendKey(dashed: true, label: 'Período anterior'),
            ]),
            if (noData) const FrameNote('Ainda sem pedidos nem reservas neste período.', top: 10),
          ]),
          SectionFrame(title: 'Números', children: [
            FrameNumbers([
              FrameNumber('Reservas', '${a.bookings}', _countDelta(a.bookings, a.previousBookings) ?? ''),
              FrameNumber('Pedidos', '${a.requests}', _countDelta(a.requests, a.previousRequests) ?? ''),
              FrameNumber('Conversão', '${(a.conversion * 100).round()} %', '${a.accepted} de ${a.requests} pedidos'),
              FrameNumber('Valor médio', _eur(a.averageValue), 'por reserva'),
            ]),
          ]),
          SectionFrame(title: 'Pedidos por semana', children: [
            SimpleBarChart(
              values: [for (final p in a.requestsByWeek) p.value],
              labels: [for (final p in a.requestsByWeek) '${p.start.day}/${p.start.month}'],
              describe: (i) => 'Semana de ${_bucketLabel(a.requestsByWeek[i].start)}: ${a.requestsByWeek[i].value.round()} pedidos',
            ),
            const FrameNote('Últimas 8 semanas.', top: 8),
          ]),
          SectionFrame(title: 'Do pedido à reserva', children: [
            _FunnelRow(label: 'Pedidos recebidos', value: a.requests, total: a.requests),
            const SizedBox(height: 14),
            _FunnelRow(label: 'Propostas enviadas', value: a.proposals, total: a.requests),
            const SizedBox(height: 14),
            _FunnelRow(label: 'Reservas', value: a.accepted, total: a.requests),
          ]),
          SectionFrame(title: 'Avaliações', children: [
            Row(children: [
              Text(a.averageRating == null ? '—' : a.averageRating!.toStringAsFixed(1).replaceAll('.', ','),
                  style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(width: 14),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    for (var i = 1; i <= 5; i++)
                      Icon((a.averageRating ?? 0) >= i - 0.25 ? Hi.star : Hi.starOutline, size: 18, color: AppTheme.ink),
                  ]),
                  const SizedBox(height: 2),
                  Text(
                    a.reviewCount == 0
                        ? 'Ainda sem avaliações'
                        : '${a.reviewCount} ${a.reviewCount == 1 ? 'avaliação' : 'avaliações'}',
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                  ),
                ]),
              ),
            ]),
          ]),
        ],
      ),
    );
  }

  static String? _countDelta(int current, int previous) {
    final d = current - previous;
    if (d == 0) return 'igual a antes';
    return '${d > 0 ? '+' : '−'}${d.abs()} que antes';
  }

  static String? _pctText(double? pct) {
    if (pct == null || pct.round() == 0) return null;
    return '${pct.abs().round()}%';
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
          AppProgressBar(value: pct, height: 10, track: AppTheme.borderMuted),
        ],
      ),
    );
  }
}


/// Estatísticas Pro (migração 161): visitas ao perfil e pedidos começados.
/// Sem Pro mostra o que se ganha, com ligação ao Pro.
class _ProInsights extends ConsumerWidget {
  const _ProInsights();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pro = ref.watch(myPartnerProProvider).value;
    if (pro == null || (!pro.enabled && !pro.active)) return const SizedBox.shrink();
    final green = AppTheme.accentOliveDark;
    if (!pro.active) {
      return Padding(
        padding: const EdgeInsets.fromLTRB(20, 24, 20, 0),
        child: InkWell(
          onTap: () => context.push('/partner-pro'),
          borderRadius: BorderRadius.circular(22),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Row(children: [
              Icon(Hi.lockClosed, color: green),
              const SizedBox(width: 12),
              const Expanded(
                child: Text(
                  'Com o Premium vês as visitas ao teu perfil por semana, quantos começaram um pedido e a conversão.',
                  style: TextStyle(fontSize: 13.5, height: 1.4, color: AppTheme.ink),
                ),
              ),
              const Icon(Hi.chevronRight, color: AppTheme.inkMuted),
            ]),
          ),
        ),
      );
    }
    final st = ref.watch(partnerProStatsProvider).value;
    if (st == null || !st.pro) return const SizedBox.shrink();
    final delta = st.viewsPrev30d == 0 ? null : ((st.views30d - st.viewsPrev30d) / st.viewsPrev30d * 100).round();
    final conv = st.views30d == 0 ? null : (st.requests30d / st.views30d * 100).round();
    Widget tile(String label, String value, [String? sub]) => Expanded(
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              const SizedBox(height: 4),
              Text(value, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w800, color: AppTheme.ink)),
              if (sub != null) Text(sub, style: TextStyle(fontSize: 12, color: green, fontWeight: FontWeight.w700)),
            ]),
          ),
        );
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 24, 20, 0),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Icon(Hi.trophy, size: 18, color: green),
          const SizedBox(width: 6),
          const Text('Premium · últimos 30 dias', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ]),
        const SizedBox(height: 12),
        Row(children: [
          tile('Visitas ao perfil', '${st.views30d}', delta == null ? null : '${delta >= 0 ? '+' : ''}$delta% vs. 30 dias antes'),
          const SizedBox(width: 10),
          tile('Começaram um pedido', '${st.quoteStarts30d}'),
        ]),
        const SizedBox(height: 10),
        Row(children: [
          tile('Pedidos recebidos', '${st.requests30d}', conv == null ? null : '$conv% das visitas'),
          const SizedBox(width: 10),
          tile('Cliques no destaque', '${st.promotionClicks30d}'),
        ]),
        if (st.viewsByWeek.isNotEmpty) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.fromLTRB(14, 16, 14, 10),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: SimpleBarChart(
              values: [for (final w in st.viewsByWeek) w.views.toDouble()],
              labels: [for (final w in st.viewsByWeek) '${w.start.day}/${w.start.month}'],
              describe: (i) => 'Semana de ${st.viewsByWeek[i].start.day}/${st.viewsByWeek[i].start.month}: ${st.viewsByWeek[i].views} visitas',
            ),
          ),
        ],
      ]),
    );
  }
}
