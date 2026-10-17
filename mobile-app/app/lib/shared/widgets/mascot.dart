import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Mascote "o Tchin e o Tchin" — duas taças (espumante e rosé).
/// Pedido do utilizador (2026-10-17): "criar um avatar para a app, como o
/// duolingo" → escolhida a variante "o Tchin e o Tchin". As poses vêm do
/// canvas de design, exportadas para `assets/mascot/` (PNG a 3x).
enum MascotPose {
  wave('assets/mascot/duo_wave.png'),
  budget('assets/mascot/duo_budget.png'),
  sleep('assets/mascot/duo_sleep.png'),
  sad('assets/mascot/duo_sad.png'),
  chat('assets/mascot/duo_chat.png'),
  clink('assets/mascot/duo_clink.png');

  final String asset;
  const MascotPose(this.asset);
}

const _confettiColors = [
  Color(0xFF5F7545),
  Color(0xFFF2D98D),
  Color(0xFFF3C9CF),
  Color(0xFFA9BC8F),
  Color(0xFFE8B44C),
  Color(0xFFDDE5D3),
];

/// Uma pose estática da mascote, com um balançar suave (algumas vezes,
/// depois pára — nunca uma animação infinita).
class TchinMascot extends StatefulWidget {
  final MascotPose pose;
  final double width;
  final bool bob;
  final String? semanticLabel;

  const TchinMascot({
    super.key,
    required this.pose,
    this.width = 200,
    this.bob = true,
    this.semanticLabel,
  });

  @override
  State<TchinMascot> createState() => _TchinMascotState();
}

class _TchinMascotState extends State<TchinMascot> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 2400),
  );

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.bob && !_c.isAnimating && _c.value == 0) {
      _runCycles();
    }
  }

  Future<void> _runCycles() async {
    for (var i = 0; i < 4 && mounted; i++) {
      await _c.forward(from: 0).orCancel.catchError((_) {});
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final image = Image.asset(
      widget.pose.asset,
      width: widget.width,
      fit: BoxFit.contain,
      semanticLabel: widget.semanticLabel ?? 'O Tchin e o Tchin',
    );
    return AnimatedBuilder(
      animation: _c,
      builder: (context, child) {
        final t = math.sin(_c.value * math.pi * 2);
        return Transform.translate(
          offset: Offset(0, -6 * t.abs()),
          child: Transform.rotate(
            angle: -0.035 * t,
            alignment: Alignment.bottomCenter,
            child: child,
          ),
        );
      },
      child: image,
    );
  }
}

/// As duas taças a brindar uma vez: entram afastadas, batem com um
/// ressalto, aparece uma estrela e [onClink] dispara (para o confetti).
class TchinClink extends StatefulWidget {
  final double width;
  final Duration delay;
  final VoidCallback? onClink;

  const TchinClink({
    super.key,
    this.width = 210,
    this.delay = const Duration(milliseconds: 300),
    this.onClink,
  });

  @override
  State<TchinClink> createState() => _TchinClinkState();
}

class _TchinClinkState extends State<TchinClink> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 1500),
  );
  bool _fired = false;

  @override
  void initState() {
    super.initState();
    _c.addListener(() {
      if (!_fired && _c.value >= 0.5) {
        _fired = true;
        widget.onClink?.call();
      }
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_c.value == 0 && !_c.isAnimating) {
      Future.delayed(widget.delay, () {
        if (mounted) _c.forward();
      });
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  // 0 → 0.38 entrada (afastadas); 0.38 → 0.5 aproximam; 0.5 → 0.64
  // ressalto; depois ficam encostadas.
  double _angle(double t) {
    const rest = 13 * math.pi / 180;
    const apart = -1 * math.pi / 180;
    if (t < 0.38) return apart;
    if (t < 0.5) return apart + (rest + 0.06 - apart) * Curves.easeIn.transform((t - 0.38) / 0.12);
    if (t < 0.64) return rest + 0.06 - 0.06 * Curves.easeOut.transform((t - 0.5) / 0.14);
    return rest;
  }

  double _shift(double t) {
    if (t < 0.38) return -0.06;
    if (t < 0.5) return -0.06 + 0.08 * ((t - 0.38) / 0.12);
    if (t < 0.64) return 0.02 - 0.02 * ((t - 0.5) / 0.14);
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    final w = widget.width;
    final glassW = w * 0.6;
    final h = w * 0.8;
    return Semantics(
      label: 'O Tchin e o Tchin a brindar',
      image: true,
      child: SizedBox(
        width: w,
        height: h,
        child: AnimatedBuilder(
          animation: _c,
          builder: (context, _) {
            final t = _c.value;
            final enter = Curves.easeOutBack.transform((t / 0.38).clamp(0.0, 1.0));
            final a = _angle(t);
            final dx = _shift(t) * w;
            final spark = t < 0.46 ? 0.0 : (t < 0.56 ? (t - 0.46) / 0.1 : (1 - (t - 0.56) / 0.3).clamp(0.0, 1.0));
            return Opacity(
              opacity: enter.clamp(0.0, 1.0),
              child: Transform.translate(
                offset: Offset(0, 24 * (1 - enter)),
                child: Stack(
                  clipBehavior: Clip.none,
                  children: [
                    Positioned(
                      left: -0.02 * w + dx,
                      top: 0.05 * h,
                      width: glassW,
                      child: Transform.rotate(
                        angle: a,
                        alignment: const Alignment(0, 0.9),
                        child: Image.asset('assets/mascot/glass_gold.png', width: glassW),
                      ),
                    ),
                    Positioned(
                      left: 0.42 * w - dx,
                      top: 0.05 * h,
                      width: glassW,
                      child: Transform.rotate(
                        angle: -a,
                        alignment: const Alignment(0, 0.9),
                        child: Image.asset('assets/mascot/glass_rose.png', width: glassW),
                      ),
                    ),
                    if (spark > 0)
                      Positioned(
                        left: w / 2 - 16,
                        top: -6,
                        child: Transform.scale(
                          scale: 0.6 + spark * 0.7,
                          child: Opacity(
                            opacity: spark,
                            child: const Icon(Icons.auto_awesome, color: Color(0xFFE8B44C), size: 32),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

/// Confetti que cai do topo (ou rebenta de um ponto) uma única vez.
class ConfettiBurst extends StatefulWidget {
  /// `null` = cai do topo; caso contrário rebenta a partir deste ponto
  /// (coordenadas relativas 0..1).
  final Offset? origin;
  final Duration delay;
  final int count;

  const ConfettiBurst({
    super.key,
    this.origin,
    this.delay = Duration.zero,
    this.count = 28,
  });

  @override
  State<ConfettiBurst> createState() => _ConfettiBurstState();
}

class _ConfettiBurstState extends State<ConfettiBurst> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 2600),
  );
  late final List<_Piece> _pieces = List.generate(widget.count, (i) {
    final r = math.Random(i * 7919 + 13);
    return _Piece(
      x: r.nextDouble(),
      angle: (i / widget.count) * math.pi * 2 + r.nextDouble() * 0.3,
      dist: 0.25 + r.nextDouble() * 0.3,
      spin: (r.nextBool() ? 1 : -1) * (2 + r.nextDouble() * 4),
      delay: r.nextDouble() * 0.25,
      color: _confettiColors[i % _confettiColors.length],
      round: i % 4 == 0,
    );
  });

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_c.value == 0 && !_c.isAnimating) {
      Future.delayed(widget.delay, () {
        if (mounted) _c.forward();
      });
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: AnimatedBuilder(
        animation: _c,
        builder: (context, _) => _c.value == 0 || _c.value == 1
            ? const SizedBox.expand()
            : CustomPaint(
                size: Size.infinite,
                painter: _ConfettiPainter(_pieces, _c.value, widget.origin),
              ),
      ),
    );
  }
}

class _Piece {
  final double x, angle, dist, spin, delay;
  final Color color;
  final bool round;
  const _Piece({
    required this.x,
    required this.angle,
    required this.dist,
    required this.spin,
    required this.delay,
    required this.color,
    required this.round,
  });
}

class _ConfettiPainter extends CustomPainter {
  final List<_Piece> pieces;
  final double t;
  final Offset? origin;
  _ConfettiPainter(this.pieces, this.t, this.origin);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    for (final p in pieces) {
      final lt = ((t - p.delay) / (1 - p.delay)).clamp(0.0, 1.0);
      if (lt <= 0) continue;
      final Offset pos;
      if (origin == null) {
        pos = Offset(p.x * size.width, -20 + lt * (size.height * 0.75));
      } else {
        final o = Offset(origin!.dx * size.width, origin!.dy * size.height);
        final burst = Curves.easeOutCubic.transform(math.min(1, lt * 1.6));
        final d = p.dist * size.width * burst;
        pos = o + Offset(math.cos(p.angle) * d, math.sin(p.angle) * d + 140 * lt * lt);
      }
      final opacity = lt > 0.8 ? (1 - lt) / 0.2 : 1.0;
      paint.color = p.color.withValues(alpha: opacity);
      canvas.save();
      canvas.translate(pos.dx, pos.dy);
      canvas.rotate(p.spin * lt);
      if (p.round) {
        canvas.drawCircle(Offset.zero, 3.5, paint);
      } else {
        canvas.drawRRect(
          RRect.fromRectAndRadius(const Rect.fromLTWH(-3.5, -6, 7, 12), const Radius.circular(2)),
          paint,
        );
      }
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(_ConfettiPainter old) => old.t != t;
}
