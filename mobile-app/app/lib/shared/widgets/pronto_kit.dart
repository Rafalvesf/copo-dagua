import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'steady_ticker.dart';

/// Peças dos ecrãs "Pronto" do canvas (Onboarding 5 · Pronto, Convidado 8 ·
/// Pronto, Parceiro 7 · Pronto), com os mesmos tempos do desenho.
/// Pedido do utilizador (2026-10-17): "estas animações ficaram off" —
/// correm sempre, mesmo com "reduzir movimento" ligado no telemóvel.

/// Controlador que arranca sozinho depois de [delay] e corre uma vez.
mixin _DelayedStart<T extends StatefulWidget> on State<T>, SteadyTickerProviderStateMixin<T> {
  late final AnimationController ctrl;
  Timer? _timer;

  Duration get delay;
  Duration get duration;
  bool get repeat => false;

  @override
  void initState() {
    super.initState();
    ctrl = AnimationController(vsync: this, duration: duration);
    _timer = Timer(delay, () {
      if (!mounted) return;
      repeat ? ctrl.repeat() : ctrl.forward();
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    ctrl.dispose();
    super.dispose();
  }
}

/// `upIn` do canvas: aparece de baixo (14 px) em 0,5 s, depois de [delay].
class UpIn extends StatefulWidget {
  final Duration delay;
  final Widget child;
  const UpIn({super.key, required this.delay, required this.child});

  @override
  State<UpIn> createState() => _UpInState();
}

class _UpInState extends State<UpIn> with SteadyTickerProviderStateMixin, _DelayedStart {
  @override
  Duration get delay => widget.delay;
  @override
  Duration get duration => const Duration(milliseconds: 500);

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: ctrl,
      builder: (context, child) {
        final t = Curves.easeOut.transform(ctrl.value);
        return Opacity(
          opacity: t,
          child: Transform.translate(offset: Offset(0, 14 * (1 - t)), child: child),
        );
      },
      child: widget.child,
    );
  }
}

/// Brilho que passa pelo botão principal (`shine` do canvas): começa em
/// [delay] e repete a cada 2,8 s.
class ShineSweep extends StatefulWidget {
  final Duration delay;
  final BorderRadius borderRadius;
  final Widget child;
  const ShineSweep({
    super.key,
    required this.delay,
    this.borderRadius = const BorderRadius.all(Radius.circular(16)),
    required this.child,
  });

  @override
  State<ShineSweep> createState() => _ShineSweepState();
}

class _ShineSweepState extends State<ShineSweep> with SteadyTickerProviderStateMixin, _DelayedStart {
  @override
  Duration get delay => widget.delay;
  @override
  Duration get duration => const Duration(milliseconds: 2800);
  @override
  bool get repeat => true;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        widget.child,
        Positioned.fill(
          child: IgnorePointer(
            child: ClipRRect(
              borderRadius: widget.borderRadius,
              child: AnimatedBuilder(
                animation: ctrl,
                builder: (context, _) {
                  final t = ctrl.value;
                  if (!ctrl.isAnimating || t < 0.6) return const SizedBox.shrink();
                  final p = Curves.easeInOut.transform((t - 0.6) / 0.4);
                  return LayoutBuilder(
                    builder: (context, c) {
                      final w = c.maxWidth * 0.4;
                      final x = -1.2 * w + p * (c.maxWidth + 2.4 * w);
                      return Stack(
                        children: [
                          Positioned(
                            left: x,
                            top: -10,
                            bottom: -10,
                            width: w,
                            child: Transform(
                              transform: Matrix4.skewX(-0.35),
                              child: const DecoratedBox(
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    colors: [Color(0x00FFFFFF), Color(0x59FFFFFF), Color(0x00FFFFFF)],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      );
                    },
                  );
                },
              ),
            ),
          ),
        ),
      ],
    );
  }
}

/// Confetti a cair do topo (`cfFall` do canvas): 18 peças, cada uma com o
/// seu atraso, 2,8 s a descer ~420 px enquanto roda.
class FallingConfetti extends StatefulWidget {
  final Duration delay;

  /// Espalhar as peças no tempo (parceiro: 1,30 → 1,89 s) ou quase juntas
  /// (organizador/convidado: 1,90 → 2,06 s).
  final Duration spread;
  const FallingConfetti({super.key, required this.delay, this.spread = const Duration(milliseconds: 160)});

  @override
  State<FallingConfetti> createState() => _FallingConfettiState();
}

class _FallingConfettiState extends State<FallingConfetti> with SteadyTickerProviderStateMixin, _DelayedStart {
  static const _colors = [
    Color(0xFF4F6B4A),
    Color(0xFFF2D98D),
    Color(0xFFF3C9CF),
    Color(0xFFA9BC8F),
    Color(0xFFE8B44C),
    Color(0xFFDDE5D3),
  ];

  @override
  Duration get delay => widget.delay;
  @override
  Duration get duration => widget.spread + const Duration(milliseconds: 2800);

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: AnimatedBuilder(
        animation: ctrl,
        builder: (context, _) => ctrl.value == 0 || ctrl.value == 1
            ? const SizedBox.expand()
            : CustomPaint(
                size: Size.infinite,
                painter: _FallPainter(
                  ctrl.value * duration.inMilliseconds / 1000,
                  widget.spread.inMilliseconds / 1000,
                ),
              ),
      ),
    );
  }
}

class _FallPainter extends CustomPainter {
  final double seconds;
  final double spread;
  _FallPainter(this.seconds, this.spread);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    for (var i = 0; i < 18; i++) {
      // Posições e rotações iguais às do canvas.
      final left = (i < 9 ? 25 + 41 * i : 34 + 41 * (i - 9)) / 390 * size.width;
      final rot = (i.isEven ? -1 : 1) * (200 + 25 * i) * math.pi / 180;
      final d = spread * ((i * 7) % 18) / 17;
      final lt = ((seconds - d) / 2.8).clamp(0.0, 1.0);
      if (lt <= 0 || lt >= 1) continue;
      final e = Curves.easeOut.transform(lt);
      final opacity = lt < 0.08 ? lt / 0.08 : (lt > 0.8 ? (1 - lt) / 0.2 : 1.0);
      paint.color = _FallingConfettiState._colors[i % 6].withValues(alpha: opacity);
      canvas.save();
      canvas.translate(left, -30 + 450 * e);
      canvas.rotate(rot * e);
      if (i % 3 == 0) {
        canvas.drawCircle(Offset.zero, 3.5, paint);
      } else {
        canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-3.5, -6, 7, 12), const Radius.circular(2)), paint);
      }
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(_FallPainter old) => old.seconds != seconds;
}

/// O Tchin e o Tchin a brindar como no canvas (`duoIn` + `clL/clR` +
/// estrelas): entram (0,6 s), ficam afastados, batem aos ~1,9 s com
/// ressalto e uma estrela, e ficam encostados.
class DuoClink extends StatefulWidget {
  final double width;
  const DuoClink({super.key, this.width = 210});

  @override
  State<DuoClink> createState() => _DuoClinkState();
}

class _DuoClinkState extends State<DuoClink> with SteadyTickerProviderStateMixin {
  // 0 → 3,4 s: entrada em 0–0,6 s; brinde em 0,4 + 3 s.
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400))
    ..forward();

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  static double _seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  /// Rotação extra (graus) e deslocamento (px do desenho) do copo da
  /// esquerda; o da direita é o espelho. Chaves do `clL` do canvas.
  static (double, double) _pose(double k) {
    const keys = [
      (0.0, -14.0, -10.0),
      (0.38, -14.0, -10.0),
      (0.50, 3.0, 4.0),
      (0.56, -1.0, 0.0),
      (0.64, 0.0, 0.0),
    ];
    if (k >= 0.64) return (0, 0);
    for (var i = 0; i < keys.length - 1; i++) {
      final a = keys[i], b = keys[i + 1];
      if (k <= b.$1) {
        final p = Curves.easeInOut.transform(_seg(k, a.$1, b.$1));
        return (a.$2 + (b.$2 - a.$2) * p, a.$3 + (b.$3 - a.$3) * p);
      }
    }
    return (0, 0);
  }

  @override
  Widget build(BuildContext context) {
    final w = widget.width;
    final s = w / 200; // escala do desenho (viewBox 200×160)
    return Semantics(
      label: 'Duas taças a brindar',
      image: true,
      child: SizedBox(
        width: w,
        height: 160 * s,
        child: AnimatedBuilder(
          animation: _c,
          builder: (context, _) {
            final sec = _c.value * 3.4;
            final enter = Curves.easeOutBack.transform(_seg(sec, 0, 0.6));
            final k = _seg(sec, 0.4, 3.4);
            final (rot, dx) = _pose(k);
            final spark = k < 0.46 ? 0.0 : (k < 0.54 ? _seg(k, 0.46, 0.54) : 1 - _seg(k, 0.54, 0.70));
            final spark2 = k < 0.5 ? 0.0 : (k < 0.58 ? _seg(k, 0.5, 0.58) : (k < 0.8 ? 1.0 : 1 - _seg(k, 0.8, 1)));
            Widget glass(String asset, bool left) => Positioned(
                  left: left ? -4 * s : 84 * s,
                  top: 8 * s,
                  width: 120 * s,
                  height: 150 * s,
                  child: Transform.translate(
                    offset: Offset((left ? dx : -dx) * s, 0),
                    child: Transform.rotate(
                      angle: ((left ? 13 : -13) + (left ? rot : -rot)) * math.pi / 180,
                      alignment: const Alignment(0, 0.86),
                      child: Image.asset(asset, fit: BoxFit.contain),
                    ),
                  ),
                );
            return Opacity(
              opacity: _seg(sec, 0, 0.3),
              child: Transform.translate(
                offset: Offset(0, 30 * (1 - enter)),
                child: Transform.scale(
                  scale: 0.8 + 0.2 * enter,
                  child: Stack(
                    clipBehavior: Clip.none,
                    children: [
                      glass('assets/mascot/glass_gold.png', true),
                      glass('assets/mascot/glass_rose.png', false),
                      if (spark > 0)
                        Positioned(
                          left: 88 * s,
                          top: 6 * s,
                          child: Transform.scale(
                            scale: 1.4 * spark,
                            child: Transform.rotate(
                              angle: spark * math.pi / 4,
                              child: Icon(Icons.auto_awesome, size: 24 * s, color: const Color(0xFFE8B44C)),
                            ),
                          ),
                        ),
                      if (spark2 > 0) ...[
                        Positioned(
                          left: 20 * s,
                          top: 20 * s,
                          child: Opacity(opacity: spark2, child: Icon(Icons.star_rounded, size: 13 * s, color: const Color(0xFFA9BC8F))),
                        ),
                        Positioned(
                          left: 168 * s,
                          top: 26 * s,
                          child: Opacity(opacity: spark2, child: Icon(Icons.star_rounded, size: 12 * s, color: const Color(0xFFF3B9C1))),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

/// Linha com visto num cartão cinzento (as linhas dos ecrãs "Pronto").
class ProntoRow extends StatelessWidget {
  final String text;
  final Widget? trailing;
  const ProntoRow({super.key, required this.text, this.trailing});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(16)),
      child: Row(
        children: [
          Icon(Icons.check_rounded, size: 18, color: AppTheme.accentOliveDark),
          const SizedBox(width: 12),
          Expanded(child: Text(text, style: const TextStyle(fontSize: 14, color: AppTheme.ink))),
          ?trailing,
        ],
      ),
    );
  }
}

/// O círculo do "Perfil enviado!" (canvas Parceiro 7): o avião sai a
/// voar deixando um rasto tracejado, o círculo passa a verde com um
/// anel e aparece o visto. 2,2 s.
class SentBadge extends StatefulWidget {
  const SentBadge({super.key});

  @override
  State<SentBadge> createState() => _SentBadgeState();
}

class _SentBadgeState extends State<SentBadge> with SteadyTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))
    ..forward();

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  static double _seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 88,
      height: 88,
      child: AnimatedBuilder(
        animation: _c,
        builder: (context, _) {
          final t = _c.value;
          // cPop: 0–50% claro; 62% maior e verde; 75% normal.
          final pop = t < 0.5 ? 0.0 : (t < 0.62 ? _seg(t, 0.5, 0.62) : 1.0);
          final scale = t < 0.5 ? 1.0 : (t < 0.62 ? 1 + 0.12 * _seg(t, 0.5, 0.62) : 1.12 - 0.12 * _seg(t, 0.62, 0.75));
          final ring = t < 0.58 ? 0.0 : _seg(t, 0.58, 1);
          final ringOpacity = t < 0.58 ? 0.0 : (t < 0.62 ? 0.6 * _seg(t, 0.58, 0.62) : 0.6 * (1 - _seg(t, 0.62, 1)));
          // plFly: recua um pouco (15%), voa até (230,-150) aos 70%.
          final back = Curves.easeOut.transform(_seg(t, 0, 0.15));
          final fly = Curves.easeIn.transform(_seg(t, 0.15, 0.70));
          final planeVisible = t < 0.72;
          final px = -6 * back + (230 + 6) * fly;
          final py = 6 * back - (150 + 6) * fly;
          final prot = (-8 * back + 20 * fly) * math.pi / 180;
          final pscale = 1 - 0.4 * fly;
          final trailDraw = _seg(t, 0.12, 0.60);
          final trailOpacity = 1 - _seg(t, 0.60, 1);
          final check = Curves.easeOut.transform(_seg(t, 0.55, 0.80));
          return Stack(
            clipBehavior: Clip.none,
            children: [
              if (trailOpacity > 0)
                Positioned(
                  left: 44,
                  top: -110,
                  child: Opacity(
                    opacity: trailOpacity,
                    child: CustomPaint(size: const Size(260, 160), painter: _TrailPainter(trailDraw)),
                  ),
                ),
              if (ring > 0)
                Positioned.fill(
                  child: Transform.scale(
                    scale: 1 + 0.9 * ring,
                    child: Container(
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: const Color(0xFFA9BC8F).withValues(alpha: ringOpacity), width: 2),
                      ),
                    ),
                  ),
                ),
              Positioned.fill(
                child: Transform.scale(
                  scale: scale,
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Color.lerp(const Color(0xFFEEF2E9), AppTheme.accentOliveDark, pop),
                    ),
                  ),
                ),
              ),
              if (planeVisible)
                Positioned(
                  left: 24 + px,
                  top: 24 + py,
                  child: Transform.rotate(
                    angle: prot,
                    child: Transform.scale(
                      scale: pscale,
                      child: Icon(Icons.send_outlined, size: 40, color: AppTheme.accentOliveDark),
                    ),
                  ),
                ),
              if (check > 0)
                Positioned(
                  left: 24,
                  top: 24,
                  child: CustomPaint(size: const Size(40, 40), painter: _CheckPainter(check)),
                ),
            ],
          );
        },
      ),
    );
  }
}

class _TrailPainter extends CustomPainter {
  final double draw;
  _TrailPainter(this.draw);

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(0, 150)
      ..cubicTo(60, 140, 90, 90, 130, 80)
      ..cubicTo(170, 70, 210, 40, 250, 10);
    final paint = Paint()
      ..color = const Color(0xFFA9BC8F)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;
    for (final m in path.computeMetrics()) {
      final end = m.length * draw;
      for (double d = 0; d < end; d += 13) {
        canvas.drawPath(m.extractPath(d, math.min(d + 6, end)), paint);
      }
    }
  }

  @override
  bool shouldRepaint(_TrailPainter old) => old.draw != draw;
}

class _CheckPainter extends CustomPainter {
  final double draw;
  _CheckPainter(this.draw);

  @override
  void paint(Canvas canvas, Size size) {
    final s = size.width / 24;
    final path = Path()
      ..moveTo(5 * s, 12 * s)
      ..lineTo(10 * s, 17 * s)
      ..lineTo(20 * s, 7 * s);
    final paint = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4 * s
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;
    for (final m in path.computeMetrics()) {
      canvas.drawPath(m.extractPath(0, m.length * draw), paint);
    }
  }

  @override
  bool shouldRepaint(_CheckPainter old) => old.draw != draw;
}
