import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import '../../core/theme/app_theme.dart';

/// Abertura "Tchin Tchin" (canvas "Início 1" e "Início 7"): as duas
/// palavras brindam e o verde fecha num círculo. [t] vai de 0 a 1.
class TchinSplash extends StatelessWidget {
  final double t;

  /// Saudação opcional por baixo (ex.: "Olá, Rita!" depois de entrar).
  final String? greeting;
  final String tagline;

  const TchinSplash({super.key, required this.t, this.greeting, this.tagline = 'Para todas as festas'});

  /// Verde-eucalipto da abertura (igual a `MenuColor` eucalipto).
  static const eucalyptus = Color(0xFF4F6B4A);

  static double _seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  @override
  Widget build(BuildContext context) {
    // Mesmos tempos do canvas (ciclo de 5 s): 0–0.22 entrada · 0.22–0.32
    // brinde · 0.32–0.64 pausa com a frase · 0.64–0.78 o verde fecha em
    // círculo · 0.78–1 confetti.
    final enter = Curves.easeOutBack.transform(_seg(t, 0, 0.22));
    final knock = t > 0.22 && t < 0.32 ? math.sin(_seg(t, 0.22, 0.32) * math.pi) : 0.0;
    final spark = t < 0.21 ? 0.0 : (t < 0.25 ? _seg(t, 0.21, 0.25) : 1 - _seg(t, 0.25, 0.42));
    final taglineOpacity = _seg(t, 0.32, 0.42) * (1 - _seg(t, 0.62, 0.70));
    final lift = Curves.easeIn.transform(_seg(t, 0.64, 0.74));
    final close = Curves.easeInOutCubic.transform(_seg(t, 0.64, 0.78));
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
        // Abertura e brinde sempre em eucalipto (canvas Início 1 e 7): a
        // cor da app muda a meio do brinde para os organizadores e a
        // barra do topo ficava diferente.
        color: eucalyptus,
        alignment: Alignment.center,
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Canvas "Início 1": "A preparar o brinde…" em baixo.
            if (greeting == null)
              Positioned(
                bottom: 48,
                child: Opacity(
                  opacity: taglineOpacity,
                  child: Text.rich(
                    TextSpan(
                      text: 'A preparar o brinde',
                      children: [
                        // ".", "..", "..." a aparecer um a um.
                        for (var i = 1; i <= 3; i++)
                          TextSpan(
                            text: '.',
                            style: TextStyle(
                              color: (t * 5 / 0.3).floor() % 4 >= i ? const Color(0xFFDDE5D3) : const Color(0x00DDE5D3),
                            ),
                          ),
                      ],
                    ),
                    style: const TextStyle(fontSize: 13, color: Color(0xFFDDE5D3)),
                  ),
                ),
              ),
            Opacity(
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
                      style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: Colors.white),
                    ),
                  ),
                  const SizedBox(height: 6),
                ],
                Opacity(
                  opacity: taglineOpacity,
                  child: Text(
                    tagline,
                    style: const TextStyle(fontSize: 15, color: Color(0xFFDDE5D3)),
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
                          value: _seg(t, 0.32, 0.62),
                          minHeight: 4,
                          backgroundColor: Colors.white.withValues(alpha: 0.22),
                          // Barra branca no brinde (canvas "Início 7", 2026-10-18).
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
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


/// Faz avançar [controller] ao ritmo real, mas sem saltos: se o telemóvel
/// engasgar (ex.: a carregar a app), cada imagem avança no máximo 1/30 s
/// em vez de saltar o resto da animação (bug 2026-10-17, vídeo do
/// utilizador: a abertura "acabava" num instante).
class SteadyDriver {
  final AnimationController controller;
  final double seconds;
  late final Ticker _ticker;
  Duration? _last;

  SteadyDriver(TickerProvider vsync, this.controller, {this.seconds = 5}) {
    _ticker = vsync.createTicker(_tick);
  }

  void start({double from = 0}) {
    _ticker.stop();
    _last = null;
    controller.value = from;
    _ticker.start();
  }

  void _tick(Duration elapsed) {
    final prev = _last ?? elapsed;
    _last = elapsed;
    final dt = ((elapsed - prev).inMicroseconds / 1e6).clamp(0.0, 1 / 30);
    final next = (controller.value + dt / seconds).clamp(0.0, 1.0);
    controller.value = next;
    if (next >= 1.0) _ticker.stop();
  }

  void dispose() => _ticker.dispose();
}
