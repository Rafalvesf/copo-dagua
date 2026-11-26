import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/enter_scale.dart';

/// Tom de um alerta (DESIGN.md, "Alertas", 2026-11-12):
/// - [pending] amarelo — algo por fazer;
/// - [urgent] vermelho — o prazo termina em 3 dias ou menos (ou já passou);
/// - [invite] verde — convite para um evento.
enum AlertTone { pending, urgent, invite }

Color alertColor(AlertTone t) => switch (t) {
      AlertTone.pending => const Color(0xFFF2A01B),
      AlertTone.urgent => const Color(0xFFC8553D),
      AlertTone.invite => const Color(0xFF4F6B4A),
    };

/// Urgente quando o prazo acaba em 3 dias ou menos (ou já acabou).
AlertTone toneForDue(DateTime? due) {
  if (due == null) return AlertTone.pending;
  final now = DateTime.now();
  final d = DateTime(due.year, due.month, due.day).difference(DateTime(now.year, now.month, now.day)).inDays;
  return d <= 3 ? AlertTone.urgent : AlertTone.pending;
}

/// Caixa de alerta: fundo branco e linha fina da cor do tom. Ao aparecer,
/// a linha brilha uns segundos (amarelo/verde 3×, vermelho 4× mais rápido)
/// e depois fica parada.
class AlertOutline extends StatefulWidget {
  final AlertTone tone;
  final Widget child;
  final double radius;
  final EdgeInsetsGeometry padding;

  /// Fundo dentro da linha (branco; transparente na moldura dos cartões).
  final Color fill;

  /// Brilho ao aparecer (sem ele na tarefa dos cartões, 2026-11-22).
  final bool glow;

  const AlertOutline({
    super.key,
    required this.tone,
    required this.child,
    this.radius = 14,
    this.padding = EdgeInsets.zero,
    this.fill = Colors.white,
    this.glow = true,
  });

  @override
  State<AlertOutline> createState() => _AlertOutlineState();
}

class _AlertOutlineState extends State<AlertOutline> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  int _left = 0;

  ({int ms, int times}) get _spec => switch (widget.tone) {
        AlertTone.urgent => (ms: 1400, times: 4),
        AlertTone.invite => (ms: 2400, times: 3),
        AlertTone.pending => (ms: 2000, times: 3),
      };

  @override
  void initState() {
    super.initState();
    final spec = _spec;
    _left = spec.times;
    _c = AnimationController(vsync: this, duration: Duration(milliseconds: spec.ms))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed) {
          _left--;
          if (_left > 0 && mounted) _c.forward(from: 0);
        }
      });
    if (widget.glow) _c.forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final color = alertColor(widget.tone);
    return EnterScale(child: AnimatedBuilder(
      animation: _c,
      builder: (context, child) {
        // 0 → 1 → 0 em cada ciclo; parado (0) quando acaba.
        final v = _c.isAnimating ? math.sin(math.pi * _c.value) : 0.0;
        // O brilho pulsa só na linha e uns pixéis para dentro (pedido
        // 2026-11-22) — nunca o cartão todo.
        return CustomPaint(
          foregroundPainter: _LineGlow(color: color, radius: widget.radius, v: v),
          child: Container(
            padding: widget.padding,
            decoration: ShapeDecoration(color: widget.fill, shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(widget.radius), side: BorderSide(color: color, width: 1.5))),
            child: child,
          ),
        );
      },
      child: widget.child,
    ));
  }
}

/// Ponto da cor do alerta, antes do texto.
class AlertDot extends StatelessWidget {
  final AlertTone tone;
  const AlertDot(this.tone, {super.key});

  @override
  Widget build(BuildContext context) => Container(
        width: 8,
        height: 8,
        decoration: BoxDecoration(color: alertColor(tone), shape: BoxShape.circle),
      );
}

/// Sinal de alerta no canto de baixo à direita da foto de um cartão de
/// evento (pedido do Rafael, 2026-11-22, mockup «Alertas nos cartões», B1;
/// DESIGN.md §7): círculo 36 na cor do tom (32 + aro branco 2) com «!» 17,
/// e o número de coisas por fazer num contador branco 18 com aro preto 2.
/// Com tarefas de tons diferentes, é a cor da mais urgente com o total.
/// Brilha como os outros alertas ao aparecer; parado com «reduzir
/// movimento». Tocar abre o que há para fazer.
class AlertBadge extends StatefulWidget {
  final AlertTone tone;
  final int count;
  final VoidCallback? onTap;
  final String? semanticLabel;
  const AlertBadge({super.key, required this.tone, required this.count, this.onTap, this.semanticLabel});

  @override
  State<AlertBadge> createState() => _AlertBadgeState();
}

class _AlertBadgeState extends State<AlertBadge> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  int _left = 0;
  bool _started = false;

  ({int ms, int times}) get _spec => switch (widget.tone) {
        AlertTone.urgent => (ms: 1400, times: 4),
        AlertTone.invite => (ms: 2400, times: 3),
        AlertTone.pending => (ms: 2000, times: 3),
      };

  @override
  void initState() {
    super.initState();
    final spec = _spec;
    _left = spec.times;
    _c = AnimationController(vsync: this, duration: Duration(milliseconds: spec.ms))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed) {
          _left--;
          if (_left > 0 && mounted) _c.forward(from: 0);
        }
      });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started) return;
    _started = true;
    final reduce = MediaQuery.maybeDisableAnimationsOf(context) ?? false;
    if (!reduce) _c.forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final color = alertColor(widget.tone);
    final n = widget.count;
    return Semantics(
      button: widget.onTap != null,
      label: widget.semanticLabel ?? '$n ${n == 1 ? 'coisa' : 'coisas'} por fazer',
      excludeSemantics: true,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: widget.onTap,
        // Igual ao mockup «Alertas nos cartões» (B): círculo 36 (32 + aro
        // branco 2), «!» 17; contador 18 a sair 6 para fora, em cima à
        // direita.
        child: SizedBox(
          width: 36,
          height: 36,
          child: Stack(clipBehavior: Clip.none, children: [
            AnimatedBuilder(
              animation: _c,
              builder: (context, _) {
                final v = _c.isAnimating ? math.sin(math.pi * _c.value) : 0.0;
                return Container(
                  width: 36,
                  height: 36,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: color,
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white, width: 2),
                    boxShadow: v <= 0.01
                        ? null
                        : [BoxShadow(color: color.withValues(alpha: 0.25 + 0.35 * v), blurRadius: 4 + 12 * v, spreadRadius: 3 * v)],
                  ),
                  child: const Text('!', style: TextStyle(fontSize: 17, height: 1, fontWeight: FontWeight.w700, color: Colors.white)),
                );
              },
            ),
            if (n > 0)
              Positioned(
                right: -6,
                top: -6,
                child: Container(
                  constraints: const BoxConstraints(minWidth: 18),
                  height: 18,
                  padding: const EdgeInsets.symmetric(horizontal: 4),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(9),
                    border: Border.all(color: const Color(0xFF171713), width: 2),
                  ),
                  child: Text('$n', style: const TextStyle(fontSize: 11, height: 1, fontWeight: FontWeight.w700, color: Color(0xFF171713))),
                ),
              ),
          ]),
        ),
      ),
    );
  }
}


/// Brilho da linha: um traço desfocado sobre a própria linha, cortado pela
/// caixa, para só se ver para dentro (uns pixéis) e nunca por cima do resto.
class _LineGlow extends CustomPainter {
  final Color color;
  final double radius;
  final double v;
  const _LineGlow({required this.color, required this.radius, required this.v});

  @override
  void paint(Canvas canvas, Size size) {
    if (v <= 0.01) return;
    final rect = Offset.zero & size;
    final rr = RRect.fromRectAndRadius(rect, Radius.circular(radius));
    canvas.save();
    canvas.clipRRect(rr);
    canvas.drawRRect(
      rr,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3 + 5 * v
        ..color = color.withValues(alpha: 0.25 + 0.45 * v)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, 1 + 3 * v),
    );
    canvas.restore();
  }

  @override
  bool shouldRepaint(_LineGlow old) => old.v != v || old.color != color || old.radius != radius;
}
