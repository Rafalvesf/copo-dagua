import 'dart:math' as math;

import 'package:flutter/material.dart';

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

  const AlertOutline({
    super.key,
    required this.tone,
    required this.child,
    this.radius = 14,
    this.padding = EdgeInsets.zero,
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
    _c.forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final color = alertColor(widget.tone);
    return AnimatedBuilder(
      animation: _c,
      builder: (context, child) {
        // 0 → 1 → 0 em cada ciclo; parado (0) quando acaba.
        final v = _c.isAnimating ? math.sin(math.pi * _c.value) : 0.0;
        return Container(
          padding: widget.padding,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(widget.radius),
            border: Border.all(color: color, width: 1.5),
            boxShadow: v <= 0.01
                ? null
                : [BoxShadow(color: color.withValues(alpha: 0.25 + 0.35 * v), blurRadius: 4 + 12 * v, spreadRadius: 3 * v)],
          ),
          child: child,
        );
      },
      child: widget.child,
    );
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
