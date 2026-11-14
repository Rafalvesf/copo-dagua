import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'steady_ticker.dart';

part 'estrela_svgs.dart';

/// A mascote da À Nossa! (2026-11-14): a estrela verde, com 12 reações
/// desenhadas pelo Rafael (canvas «Estrela · reações»).
///
/// Cada reação anima algumas vezes ao aparecer e fica parada (como os
/// alertas). Só [Estrela.pensar] com `loop: true` continua — para quando
/// algo está a carregar. Com «reduzir movimento» ligado, fica parada.
enum Estrela {
  /// O normal: Início, perfil, quando corre bem.
  feliz,

  /// Evento criado, pagamento feito, reserva confirmada.
  parabens,

  /// Convites, «vou» no RSVP, favoritos.
  apaixonada,

  /// Tudo tratado, perfil completo.
  fixe,

  /// Dicas e sugestões; conversas vazias.
  piscar,

  /// Proposta ou mensagem nova, algo inesperado.
  surpresa,

  /// Listas vazias, manutenção.
  dormir,

  /// A carregar, a procurar, a decidir.
  pensar,

  /// Convidado confirmou, proposta aceite.
  contente,

  /// Erros, pedido recusado, link inválido.
  triste,

  /// Algo falhou de vez: pagamento recusado, link expirado.
  zangada,

  /// Sugestões e próximos passos.
  ideia,
}

class _EstrelaSvg {
  final String body;
  final String? extras;
  final String? winkBody;
  final double shadowY;
  const _EstrelaSvg({required this.body, this.extras, this.winkBody, required this.shadowY});
}

class EstrelaMascot extends StatefulWidget {
  final Estrela reaction;

  /// Largura; a altura é 350/384 da largura.
  final double size;

  /// Continua a animar (só faz sentido em [Estrela.pensar]).
  final bool loop;

  /// Quantas vezes anima antes de parar.
  final int cycles;

  final String? semanticLabel;

  const EstrelaMascot(
    this.reaction, {
    super.key,
    this.size = 160,
    this.loop = false,
    this.cycles = 3,
    this.semanticLabel,
  });

  @override
  State<EstrelaMascot> createState() => _EstrelaMascotState();
}

class _EstrelaMascotState extends State<EstrelaMascot> with SteadyTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: _period(widget.reaction));
  bool _started = false;

  static Duration _period(Estrela r) => switch (r) {
        Estrela.parabens => const Duration(milliseconds: 2200),
        Estrela.contente => const Duration(milliseconds: 1800),
        Estrela.dormir => const Duration(milliseconds: 3600),
        Estrela.triste || Estrela.pensar => const Duration(milliseconds: 3000),
        Estrela.zangada => const Duration(milliseconds: 2600),
        Estrela.piscar => const Duration(milliseconds: 2600),
        _ => const Duration(milliseconds: 2400),
      };

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started) return;
    _started = true;
    if (MediaQuery.maybeDisableAnimationsOf(context) ?? false) return;
    _run();
  }

  @override
  void didUpdateWidget(EstrelaMascot old) {
    super.didUpdateWidget(old);
    if (old.reaction != widget.reaction) {
      _c.duration = _period(widget.reaction);
      if (!(MediaQuery.maybeDisableAnimationsOf(context) ?? false)) _run();
    }
  }

  Future<void> _run() async {
    if (widget.loop) {
      _c.repeat();
      return;
    }
    for (var i = 0; i < widget.cycles && mounted; i++) {
      await _c.forward(from: 0).orCancel.catchError((_) {});
    }
    if (mounted) _c.value = 0;
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final svg = _estrelaSvgs[widget.reaction]!;
    final w = widget.size;
    final h = w * 350 / 384;
    final k = w / 384; // px por unidade do desenho
    return Semantics(
      label: widget.semanticLabel ?? 'Estrela',
      image: true,
      child: SizedBox(
        width: w,
        height: h,
        child: AnimatedBuilder(
          animation: _c,
          builder: (context, _) {
            final t = _c.value;
            final m = _motion(widget.reaction, t);
            final a = _extras(widget.reaction, t);
            final wink = svg.winkBody != null && t > 0.38 && t < 0.62;
            return Stack(
              clipBehavior: Clip.none,
              children: [
                // Sombra no chão: encolhe quando a estrela sobe.
                Positioned(
                  left: w / 2 - 70 * k,
                  top: svg.shadowY * k - 6 * k,
                  child: Transform.scale(
                    scaleX: 1 - (m.lift.clamp(0.0, 70.0) / 140),
                    child: Opacity(
                      opacity: 1 - (m.lift.clamp(0.0, 70.0) / 140),
                      child: Container(
                        width: 140 * k,
                        height: 12 * k,
                        decoration: const BoxDecoration(
                          color: Color(0xFFE2DED2),
                          borderRadius: BorderRadius.all(Radius.elliptical(70, 6)),
                        ),
                      ),
                    ),
                  ),
                ),
                Positioned.fill(
                  child: Transform.translate(
                    offset: Offset(m.dx * k, -m.lift * k),
                    child: Transform(
                      alignment: const Alignment(0, 0.6),
                      transform: Matrix4.rotationZ(m.rot)..multiply(Matrix4.diagonal3Values(m.sx, m.sy, 1)),
                      child: SvgPicture.string(wink ? svg.winkBody! : svg.body, width: w, height: h),
                    ),
                  ),
                ),
                if (svg.extras != null)
                  Positioned.fill(
                    child: Opacity(
                      opacity: a.opacity,
                      child: Transform.translate(
                        offset: Offset(a.dx * k, a.dy * k),
                        child: Transform.scale(
                          scale: a.scale,
                          child: SvgPicture.string(svg.extras!, width: w, height: h),
                        ),
                      ),
                    ),
                  ),
              ],
            );
          },
        ),
      ),
    );
  }
}

class _M {
  final double lift; // unidades do desenho, para cima
  final double dx;
  final double rot;
  final double sx;
  final double sy;
  const _M({this.lift = 0, this.dx = 0, this.rot = 0, this.sx = 1, this.sy = 1});
}

class _A {
  final double opacity;
  final double dx;
  final double dy;
  final double scale;
  const _A({this.opacity = 1, this.dx = 0, this.dy = 0, this.scale = 1});
}

double _bump(double t, double a, double b) {
  if (t <= a || t >= b) return 0;
  return math.sin((t - a) / (b - a) * math.pi);
}

_M _motion(Estrela r, double t) {
  switch (r) {
    case Estrela.parabens:
      final up = _bump(t, 0.08, 0.42);
      final squash = _bump(t, 0, 0.1) + _bump(t, 0.38, 0.5);
      return _M(lift: 40 * up, rot: -0.1 * up, sx: 1 + 0.06 * squash, sy: 1 - 0.08 * squash);
    case Estrela.contente:
      return _M(lift: 34 * _bump(t, 0, 0.3) + 22 * _bump(t, 0.3, 0.6));
    case Estrela.surpresa:
      return _M(lift: 30 * _bump(t, 0, 0.24), sx: 1 + 0.04 * _bump(t, 0, 0.24), sy: 1 + 0.04 * _bump(t, 0, 0.24));
    case Estrela.dormir:
      final b = (1 - math.cos(t * math.pi * 2)) / 2;
      return _M(sx: 1 + 0.03 * b, sy: 1 - 0.03 * b);
    case Estrela.triste:
      final b = (1 - math.cos(t * math.pi * 2)) / 2;
      return _M(lift: -10 * b, rot: -0.05 * b);
    case Estrela.zangada:
      final s = t > 0.6 && t < 0.9 ? math.sin((t - 0.6) / 0.3 * math.pi * 6) : 0.0;
      return _M(dx: 10 * s, rot: 0.035 * s);
    case Estrela.pensar:
      return _M(rot: -0.1 * (1 - math.cos(t * math.pi * 2)) / 2);
    default:
      return _M(lift: 14 * (1 - math.cos(t * math.pi * 2)) / 2);
  }
}

_A _extras(Estrela r, double t) {
  switch (r) {
    case Estrela.apaixonada:
      final b = (1 - math.cos(t * math.pi * 2)) / 2;
      return _A(dy: -14 * b, scale: 1 + 0.12 * b);
    case Estrela.fixe:
      final b = _bump(t, 0.7, 1);
      return _A(scale: 1 - 0.3 * b);
    case Estrela.pensar:
      return _A(dy: -10 * (1 - math.cos(t * math.pi * 2)) / 2);
    case Estrela.zangada:
      return _A(scale: 1 + 0.08 * (1 - math.cos(t * math.pi * 4)) / 2);
    case Estrela.ideia:
      return _A(opacity: 0.75 + 0.25 * (1 - math.cos(t * math.pi * 2)) / 2);
    case Estrela.parabens:
      // Confetti: sobe com o salto e cai.
      return _A(dy: -20 * _bump(t, 0.05, 0.5), opacity: 1 - 0.5 * _bump(t, 0.5, 1));
    default:
      final b = (1 - math.cos(t * math.pi * 2)) / 2;
      return _A(opacity: 1 - 0.6 * b, dx: 6 * b, dy: -6 * b);
  }
}
