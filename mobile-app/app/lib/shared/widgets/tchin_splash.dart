import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Abertura "Tchin Tchin" (canvas "Início 1" e "Início 7"): as duas
/// palavras brindam e o verde fecha num círculo. [t] vai de 0 a 1.
class TchinSplash extends StatelessWidget {
  final double t;

  /// Saudação opcional por baixo (ex.: "Olá, Rita!" depois de entrar).
  final String? greeting;
  final String tagline;

  const TchinSplash({super.key, required this.t, this.greeting, this.tagline = 'Para todas as festas'});

  static double _seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  @override
  Widget build(BuildContext context) {
    // 0–0.3 entrada e brinde · 0.3–0.62 pausa · 0.62–0.86 círculo fecha.
    final enter = Curves.easeOutBack.transform(_seg(t, 0, 0.26));
    final knock = t > 0.26 && t < 0.34 ? math.sin(_seg(t, 0.26, 0.34) * math.pi) : 0.0;
    final spark = t < 0.24 ? 0.0 : (t < 0.3 ? _seg(t, 0.24, 0.3) : 1 - _seg(t, 0.3, 0.46));
    final taglineOpacity = _seg(t, 0.32, 0.42) * (1 - _seg(t, 0.6, 0.7));
    final lift = Curves.easeIn.transform(_seg(t, 0.6, 0.72));
    final close = Curves.easeInOutCubic.transform(_seg(t, 0.64, 0.86));
    final word = TextStyle(
      fontFamily: AppTheme.fontFamily,
      fontFamilyFallback: AppTheme.fontFamilyFallback,
      fontSize: 56,
      height: 52 / 56,
      fontWeight: FontWeight.w700,
      color: Colors.white,
      letterSpacing: -0.5,
    );
    return ClipPath(
      clipper: _CircleClipper(1 - close),
      child: Container(
        color: AppTheme.accentOliveDark,
        alignment: Alignment.center,
        child: Opacity(
          opacity: 1 - lift,
          child: Transform.translate(
            offset: Offset(0, -40 * lift),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Stack(
                  clipBehavior: Clip.none,
                  alignment: Alignment.center,
                  children: [
                    Column(
                      children: [
                        Transform.translate(
                          offset: Offset(-170 * (1 - enter) + 4 * knock, 0),
                          child: Transform.rotate(
                            angle: -0.2 * (1 - enter),
                            child: Opacity(opacity: enter.clamp(0.0, 1.0), child: Text('Tchin', style: word)),
                          ),
                        ),
                        Transform.translate(
                          offset: Offset(170 * (1 - enter) - 4 * knock, 0),
                          child: Transform.rotate(
                            angle: 0.2 * (1 - enter),
                            child: Opacity(opacity: enter.clamp(0.0, 1.0), child: Text('Tchin', style: word)),
                          ),
                        ),
                      ],
                    ),
                    if (spark > 0)
                      Opacity(
                        opacity: spark.clamp(0.0, 1.0),
                        child: Transform.scale(
                          scale: 0.5 + spark,
                          child: const Icon(Icons.auto_awesome, color: Color(0xFFF2D98D), size: 34),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: 14),
                if (greeting != null) ...[
                  Opacity(
                    opacity: taglineOpacity,
                    child: Text(
                      greeting!,
                      style: const TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: Colors.white),
                    ),
                  ),
                  const SizedBox(height: 6),
                ],
                Opacity(
                  opacity: taglineOpacity,
                  child: Text(
                    tagline,
                    style: const TextStyle(fontSize: AppFontSize.lg - 1, color: Color(0xFFDDE5D3)),
                  ),
                ),
                if (greeting != null) ...[
                  const SizedBox(height: 18),
                  Opacity(
                    opacity: taglineOpacity,
                    child: SizedBox(
                      width: 120,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(9),
                        child: LinearProgressIndicator(
                          value: _seg(t, 0.3, 0.62),
                          minHeight: 4,
                          backgroundColor: Colors.white.withValues(alpha: 0.22),
                          color: const Color(0xFFF2D98D),
                        ),
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _CircleClipper extends CustomClipper<Path> {
  final double factor;
  _CircleClipper(this.factor);

  @override
  Path getClip(Size size) {
    final r = math.sqrt(size.width * size.width + size.height * size.height) / 2 * factor;
    return Path()..addOval(Rect.fromCircle(center: size.center(Offset.zero), radius: r));
  }

  @override
  bool shouldReclip(_CircleClipper old) => old.factor != factor;
}

