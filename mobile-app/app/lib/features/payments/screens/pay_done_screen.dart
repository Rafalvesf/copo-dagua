import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/theme_color/theme_color.dart';
import '../../../shared/widgets/steady_ticker.dart';

class PayDoneArgs {
  final String partnerName;

  /// "Sinal" ou "Restante".
  final String title;
  final String amountLabel;

  /// Textos próprios (ex.: levantamento do parceiro); por omissão os do
  /// pagamento do casal.
  final String? headline;
  final String? subtitle;
  final List<(IconData, String)>? lines;
  final String primaryLabel;
  final String primaryRoute;
  final String secondaryLabel;
  final String secondaryRoute;

  const PayDoneArgs({
    required this.partnerName,
    required this.title,
    required this.amountLabel,
    this.headline,
    this.subtitle,
    this.lines,
    this.primaryLabel = 'Ver reservas',
    this.primaryRoute = '/bookings',
    this.secondaryLabel = 'Voltar ao início',
    this.secondaryRoute = '/',
  });
}

/// Página depois do pagamento feito (pedido 2026-10-19): fundo eucalipto,
/// visto animado com confetes, valor e o que acontece a seguir.
class PayDoneScreen extends StatefulWidget {
  final PayDoneArgs args;
  const PayDoneScreen({super.key, required this.args});

  @override
  State<PayDoneScreen> createState() => _PayDoneScreenState();
}

class _PayDoneScreenState extends State<PayDoneScreen> with SteadyTickerProviderStateMixin {
  late final AnimationController _c =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..forward();

  static const _green = AppTheme.brandGreen;

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final a = widget.args;
    final deposit = a.title == 'Sinal';
    final pop = CurvedAnimation(parent: _c, curve: const Interval(0, 0.45, curve: Curves.elasticOut));
    final fade = CurvedAnimation(parent: _c, curve: const Interval(0.3, 0.8, curve: Curves.easeOut));
    return BarColorScope(
      color: _green,
      child: Scaffold(
        backgroundColor: _green,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 16),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.centerRight,
                  child: IconButton(
                    onPressed: () => context.go(a.primaryRoute),
                    icon: const Icon(Icons.close_rounded, color: Colors.white),
                  ),
                ),
                const Spacer(flex: 2),
                SizedBox(
                  width: 220,
                  height: 220,
                  child: AnimatedBuilder(
                    animation: _c,
                    builder: (context, _) => CustomPaint(
                      painter: _ConfettiPainter(_c.value),
                      child: Center(
                        child: Transform.scale(
                          scale: pop.value,
                          child: Transform.rotate(
                            angle: -0.06,
                            child: Container(
                              width: 112,
                              height: 112,
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(34),
                                boxShadow: const [
                                  BoxShadow(color: Color(0x33171713), blurRadius: 30, offset: Offset(0, 14)),
                                ],
                              ),
                              child: const Icon(Icons.check_rounded, size: 64, color: _green),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 18),
                FadeTransition(
                  opacity: fade,
                  child: Column(children: [
                    Text(
                      a.headline ?? (deposit ? 'Sinal pago!' : 'Tudo pago!'),
                      style: const TextStyle(
                        fontSize: AppFontSize.displayLg,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                        height: 1.1,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      a.subtitle ?? '${a.amountLabel} para ${a.partnerName}',
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: AppFontSize.lg, color: Colors.white),
                    ),
                    const SizedBox(height: 22),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.14),
                        borderRadius: BorderRadius.circular(22),
                      ),
                      child: Column(children: [
                        for (final (i, (icon, text)) in (a.lines ?? [
                          (
                            deposit ? Icons.event_available_outlined : Icons.verified_outlined,
                            deposit
                                ? 'A reserva está confirmada. O restante paga-se até 30 dias antes do evento.'
                                : 'A reserva está paga na totalidade.',
                          ),
                          (Icons.receipt_long_outlined, 'Vês este pagamento no Orçamento, em Pagas.'),
                        ]).indexed) ...[
                          if (i > 0) const SizedBox(height: 10),
                          _Line(icon: icon, text: text),
                        ],
                      ]),
                    ),
                  ]),
                ),
                const Spacer(flex: 3),
                SizedBox(
                  width: double.infinity,
                  height: 54,
                  child: FilledButton(
                    onPressed: () => context.go(a.primaryRoute),
                    style: FilledButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: _green,
                      shape: const StadiumBorder(),
                      textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: AppFontSize.lg, fontWeight: FontWeight.w700),
                    ),
                    child: Text(a.primaryLabel),
                  ),
                ),
                const SizedBox(height: 8),
                TextButton(
                  onPressed: () => context.go(a.secondaryRoute),
                  child: Text(a.secondaryLabel,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _Line extends StatelessWidget {
  final IconData icon;
  final String text;
  const _Line({required this.icon, required this.text});

  @override
  Widget build(BuildContext context) {
    return Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Icon(icon, size: 20, color: Colors.white),
      const SizedBox(width: 10),
      Expanded(
        child: Text(text, style: const TextStyle(color: Colors.white, fontSize: AppFontSize.base, height: 1.35)),
      ),
    ]);
  }
}

class _ConfettiPainter extends CustomPainter {
  final double t;
  _ConfettiPainter(this.t);

  static const _colors = [
    Color(0xFFF2D98D),
    Color(0xFFF3C9CF),
    Color(0xFFA9BC8F),
    Color(0xFFE8B44C),
    Color(0xFFFFFFFF),
  ];

  @override
  void paint(Canvas canvas, Size size) {
    final p = Curves.easeOutCubic.transform(((t - 0.12) / 0.7).clamp(0.0, 1.0));
    if (p <= 0) return;
    final c = size.center(Offset.zero);
    final fadeOut = t < 0.75 ? 1.0 : (1 - (t - 0.75) / 0.25).clamp(0.0, 1.0);
    for (var i = 0; i < 22; i++) {
      final ang = i / 22 * math.pi * 2 + (i.isEven ? 0.12 : -0.08);
      final dist = 70 + (i * 37 % 40) * 1.0;
      final o = c + Offset(math.cos(ang), math.sin(ang)) * dist * p;
      final paint = Paint()..color = _colors[i % _colors.length].withValues(alpha: fadeOut);
      canvas.save();
      canvas.translate(o.dx, o.dy);
      canvas.rotate(p * (i.isEven ? 3 : -3));
      if (i % 3 == 0) {
        canvas.drawCircle(Offset.zero, 4, paint);
      } else {
        canvas.drawRRect(
          RRect.fromRectAndRadius(const Rect.fromLTWH(-5, -2.5, 10, 5), const Radius.circular(2)),
          paint,
        );
      }
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(_ConfettiPainter old) => old.t != t;
}
