import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

class PartnerStatsScreen extends ConsumerStatefulWidget {
  const PartnerStatsScreen({super.key});

  @override
  ConsumerState<PartnerStatsScreen> createState() =>
      _PartnerStatsScreenState();
}

class _PartnerStatsScreenState extends ConsumerState<PartnerStatsScreen> {
  static const _periods = ['Este mês', 'Últimos 3 meses', 'Este ano'];
  String _period = _periods.first;

  Future<void> _pickPeriod() async {
    final chosen = await showModalBottomSheet<String>(
      context: context,
      builder: (context) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            for (final p in _periods)
              ListTile(title: Text(p), onTap: () => Navigator.of(context).pop(p)),
          ],
        ),
      ),
    );
    if (chosen != null) setState(() => _period = chosen);
  }

  @override
  Widget build(BuildContext context) {
    final statsAsync = ref.watch(partnerStatsProvider(_period));

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Estatísticas',
              trailing: _PeriodFilterPill(
                label: _period,
                onTap: _pickPeriod,
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: statsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) =>
                    const Center(child: Text('Não foi possível carregar.')),
                data: (stats) => ListView(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    0,
                    AppTheme.screenMargin,
                    24,
                  ),
                  children: [
                    _StatHeroCard(
                      label: 'Visualizações',
                      value: '${stats.views}',
                      deltaLabel:
                          '↑ ${stats.viewsDeltaPct.toStringAsFixed(0)}% vs mês anterior',
                      trend: stats.viewsTrend,
                    ),
                    const SizedBox(height: 14),
                    Row(
                      children: [
                        Expanded(
                          child: _StatTile(
                            label: 'Pedidos',
                            value: '${stats.requestCount}',
                            deltaLabel:
                                '↑ ${stats.requestDeltaPct.toStringAsFixed(0)}%',
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: _StatTile(
                            label: 'Taxa de conversão',
                            value: '${stats.conversionPct.toStringAsFixed(0)}%',
                            deltaLabel:
                                '↑ ${stats.conversionDeltaPct.toStringAsFixed(0)}%',
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 14),
                    _AverageRatingCard(
                      rating: stats.avgRating,
                      delta: stats.avgRatingDelta,
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PeriodFilterPill extends StatelessWidget {
  final String label;
  final VoidCallback onTap;

  const _PeriodFilterPill({required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: AppTheme.borderMuted),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: const TextStyle(fontSize: 12.5, fontWeight: FontWeight.w600),
            ),
            const SizedBox(width: 4),
            const Icon(Icons.expand_more, size: 18, color: AppTheme.inkMuted),
          ],
        ),
      ),
    );
  }
}

class _StatHeroCard extends StatelessWidget {
  final String label;
  final String value;
  final String deltaLabel;
  final List<double> trend;

  const _StatHeroCard({
    required this.label,
    required this.value,
    required this.deltaLabel,
    required this.trend,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: 13),
          ),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                value,
                style: AppTypography.displaySerif(
                  fontSize: 34,
                  color: AppTheme.ink,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: SizedBox(
                  height: 40,
                  child: CustomPaint(painter: _SparklinePainter(trend)),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            deltaLabel,
            style: const TextStyle(
              color: AppStatusColors.confirmed,
              fontWeight: FontWeight.w700,
              fontSize: 12.5,
            ),
          ),
        ],
      ),
    );
  }
}

/// Sparkline desenhada à mão — não há biblioteca de gráficos no
/// projeto. Mesmo padrão `CustomPainter` de `_SpotlightPainter` em
/// `support_screen.dart`, aqui a desenhar uma polilinha simples em vez
/// de um recorte.
class _SparklinePainter extends CustomPainter {
  final List<double> points;

  _SparklinePainter(this.points);

  @override
  void paint(Canvas canvas, Size size) {
    if (points.length < 2) return;
    final minValue = points.reduce((a, b) => a < b ? a : b);
    final maxValue = points.reduce((a, b) => a > b ? a : b);
    final range = (maxValue - minValue).abs() < 0.001
        ? 1
        : maxValue - minValue;

    final path = Path();
    for (var i = 0; i < points.length; i++) {
      final x = size.width * i / (points.length - 1);
      final y = size.height * (1 - (points[i] - minValue) / range);
      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    }

    final paint = Paint()
      ..color = AppStatusColors.confirmed
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant _SparklinePainter oldDelegate) =>
      oldDelegate.points != points;
}

class _StatTile extends StatelessWidget {
  final String label;
  final String value;
  final String deltaLabel;

  const _StatTile({
    required this.label,
    required this.value,
    required this.deltaLabel,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
          ),
          const SizedBox(height: 6),
          Text(
            value,
            style: const TextStyle(
              fontWeight: FontWeight.w800,
              fontSize: 22,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            deltaLabel,
            style: const TextStyle(
              color: AppStatusColors.confirmed,
              fontWeight: FontWeight.w700,
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }
}

class _AverageRatingCard extends StatelessWidget {
  final double rating;
  final double delta;

  const _AverageRatingCard({required this.rating, required this.delta});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Avaliação média',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
          ),
          const SizedBox(height: 6),
          Row(
            children: [
              Text(
                rating.toStringAsFixed(1),
                style: const TextStyle(
                  fontWeight: FontWeight.w800,
                  fontSize: 22,
                  color: AppTheme.ink,
                ),
              ),
              const SizedBox(width: 8),
              Row(
                children: [
                  for (var i = 1; i <= 5; i++)
                    Icon(
                      i <= rating.round()
                          ? Icons.star_rounded
                          : Icons.star_border_rounded,
                      size: 16,
                      color: Colors.amber,
                    ),
                ],
              ),
              const Spacer(),
              Text(
                '↑ ${delta.toStringAsFixed(1)}',
                style: const TextStyle(
                  color: AppStatusColors.confirmed,
                  fontWeight: FontWeight.w700,
                  fontSize: 12.5,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
