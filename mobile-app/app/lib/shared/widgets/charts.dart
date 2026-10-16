import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Gráficos simples desenhados à mão (redesign 2026-10, painel
/// "Resultados" do parceiro). Uma só série em verde-oliva; o período
/// anterior, quando existe, é uma linha tracejada cinzenta. Tocar ou
/// arrastar mostra o valor do ponto mais próximo (linha) ou da barra.

const _seriesColor = AppTheme.accentOliveDark;
const _previousColor = Color(0xFFB8B2A6);
const _gridColor = AppTheme.borderMuted;

/// Linha com área por baixo, eixo Y com 3 marcas e etiquetas no eixo X.
class LineAreaChart extends StatefulWidget {
  final List<double> values;
  final List<double>? previous;
  final List<String> xLabels;
  final String Function(double) formatValue;
  final String Function(int index) describePoint;
  final double height;

  const LineAreaChart({
    super.key,
    required this.values,
    this.previous,
    required this.xLabels,
    required this.formatValue,
    required this.describePoint,
    this.height = 170,
  });

  @override
  State<LineAreaChart> createState() => _LineAreaChartState();
}

class _LineAreaChartState extends State<LineAreaChart> {
  int? _active;

  void _pick(Offset local, double width) {
    final n = widget.values.length;
    if (n < 2) return;
    const left = _LineAreaPainter.leftPad;
    final plotW = width - left - _LineAreaPainter.rightPad;
    final t = ((local.dx - left) / plotW).clamp(0.0, 1.0);
    setState(() => _active = (t * (n - 1)).round());
  }

  @override
  Widget build(BuildContext context) {
    final active = _active;
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        return Semantics(
          label: 'Gráfico de linha',
          child: GestureDetector(
            onTapDown: (d) => _pick(d.localPosition, width),
            onHorizontalDragUpdate: (d) => _pick(d.localPosition, width),
            onHorizontalDragEnd: (_) => setState(() => _active = null),
            onTapUp: (_) {},
            child: Stack(
              clipBehavior: Clip.none,
              children: [
                CustomPaint(
                  size: Size(width, widget.height),
                  painter: _LineAreaPainter(
                    values: widget.values,
                    previous: widget.previous,
                    xLabels: widget.xLabels,
                    format: widget.formatValue,
                    active: active,
                  ),
                ),
                if (active != null)
                  Positioned(
                    top: 0,
                    left: 0,
                    right: 0,
                    child: Align(
                      alignment: Alignment(
                        widget.values.length < 2
                            ? 0
                            : -1 + 2 * active / (widget.values.length - 1),
                        -1,
                      ),
                      child: _Tooltip(
                        title: widget.describePoint(active),
                        value: widget.formatValue(widget.values[active]),
                        previous: widget.previous == null
                            ? null
                            : widget.formatValue(widget.previous![active]),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _Tooltip extends StatelessWidget {
  final String title;
  final String value;
  final String? previous;

  const _Tooltip({required this.title, required this.value, this.previous});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: AppTheme.ink,
        borderRadius: BorderRadius.circular(AppRadius.sm),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            value,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w700,
              fontSize: AppFontSize.md,
            ),
          ),
          Text(
            previous == null ? title : '$title · antes $previous',
            style: const TextStyle(color: Color(0xFFD9D6CF), fontSize: AppFontSize.xs),
          ),
        ],
      ),
    );
  }
}

/// Arredonda o máximo para um valor "bonito" (1, 2, 2.5, 5 × 10ⁿ).
double niceMax(double v) {
  if (v <= 0) return 1;
  final exp = math.pow(10, (math.log(v) / math.ln10).floor()).toDouble();
  for (final m in [1.0, 2.0, 2.5, 5.0, 10.0]) {
    if (m * exp >= v) return m * exp;
  }
  return 10 * exp;
}

class _LineAreaPainter extends CustomPainter {
  static const leftPad = 40.0;
  static const rightPad = 8.0;
  static const topPad = 10.0;
  static const bottomPad = 22.0;

  final List<double> values;
  final List<double>? previous;
  final List<String> xLabels;
  final String Function(double) format;
  final int? active;

  _LineAreaPainter({
    required this.values,
    required this.previous,
    required this.xLabels,
    required this.format,
    required this.active,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final n = values.length;
    final maxV = niceMax(
      [...values, ...?previous].fold<double>(0, math.max),
    );
    final plotW = size.width - leftPad - rightPad;
    final plotH = size.height - topPad - bottomPad;
    Offset pt(int i, double v) => Offset(
          leftPad + (n < 2 ? 0 : plotW * i / (n - 1)),
          topPad + plotH * (1 - v / maxV),
        );

    final gridPaint = Paint()
      ..color = _gridColor
      ..strokeWidth = 1;
    for (final f in [0.0, 0.5, 1.0]) {
      final y = topPad + plotH * (1 - f);
      canvas.drawLine(Offset(leftPad, y), Offset(size.width - rightPad, y), gridPaint);
      _text(canvas, format(maxV * f), Offset(leftPad - 6, y), align: TextAlign.right);
    }
    for (var i = 0; i < xLabels.length && i < n; i++) {
      if (xLabels[i].isEmpty) continue;
      _text(canvas, xLabels[i], Offset(pt(i, 0).dx, size.height - 8), align: TextAlign.center);
    }
    if (n < 2) return;

    final prev = previous;
    if (prev != null && prev.length == n) {
      final p = Path()..moveTo(pt(0, prev[0]).dx, pt(0, prev[0]).dy);
      for (var i = 1; i < n; i++) {
        p.lineTo(pt(i, prev[i]).dx, pt(i, prev[i]).dy);
      }
      _dashed(canvas, p, Paint()
        ..color = _previousColor
        ..strokeWidth = 2
        ..style = PaintingStyle.stroke
        ..strokeCap = StrokeCap.round);
    }

    final line = Path()..moveTo(pt(0, values[0]).dx, pt(0, values[0]).dy);
    for (var i = 1; i < n; i++) {
      line.lineTo(pt(i, values[i]).dx, pt(i, values[i]).dy);
    }
    final area = Path.from(line)
      ..lineTo(pt(n - 1, 0).dx, pt(n - 1, 0).dy)
      ..lineTo(pt(0, 0).dx, pt(0, 0).dy)
      ..close();
    canvas.drawPath(
      area,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            _seriesColor.withValues(alpha: 0.18),
            _seriesColor.withValues(alpha: 0),
          ],
        ).createShader(Rect.fromLTWH(0, topPad, size.width, plotH)),
    );
    canvas.drawPath(
      line,
      Paint()
        ..color = _seriesColor
        ..strokeWidth = 2
        ..style = PaintingStyle.stroke
        ..strokeJoin = StrokeJoin.round
        ..strokeCap = StrokeCap.round,
    );

    final markIndex = active ?? n - 1;
    final mark = pt(markIndex, values[markIndex]);
    if (active != null) {
      canvas.drawLine(
        Offset(mark.dx, topPad),
        Offset(mark.dx, topPad + plotH),
        Paint()
          ..color = AppTheme.inkMuted.withValues(alpha: 0.4)
          ..strokeWidth = 1,
      );
    }
    canvas.drawCircle(mark, 6, Paint()..color = Colors.white);
    canvas.drawCircle(mark, 4, Paint()..color = _seriesColor);
  }

  void _dashed(Canvas canvas, Path path, Paint paint) {
    for (final metric in path.computeMetrics()) {
      var d = 0.0;
      while (d < metric.length) {
        canvas.drawPath(metric.extractPath(d, math.min(d + 4, metric.length)), paint);
        d += 8;
      }
    }
  }

  void _text(Canvas canvas, String s, Offset at, {TextAlign align = TextAlign.left}) {
    final tp = TextPainter(
      text: TextSpan(
        text: s,
        style: const TextStyle(
          fontFamily: AppTheme.fontFamily,
          fontFamilyFallback: AppTheme.fontFamilyFallback,
          fontSize: 10,
          color: AppTheme.inkMuted,
        ),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    final dx = switch (align) {
      TextAlign.right => at.dx - tp.width,
      TextAlign.center => at.dx - tp.width / 2,
      _ => at.dx,
    };
    tp.paint(canvas, Offset(dx, at.dy - tp.height / 2));
  }

  @override
  bool shouldRepaint(covariant _LineAreaPainter old) =>
      old.values != values || old.previous != previous || old.active != active;
}

/// Linha pequena sem eixos para os quadrados de indicadores.
class Sparkline extends StatelessWidget {
  final List<double> values;
  final double height;

  const Sparkline({super.key, required this.values, this.height = 32});

  @override
  Widget build(BuildContext context) {
    return ExcludeSemantics(
      child: CustomPaint(
        size: Size(double.infinity, height),
        painter: _SparkPainter(values),
      ),
    );
  }
}

class _SparkPainter extends CustomPainter {
  final List<double> values;

  _SparkPainter(this.values);

  @override
  void paint(Canvas canvas, Size size) {
    if (values.length < 2) return;
    final minV = values.reduce(math.min);
    final maxV = values.reduce(math.max);
    final range = maxV - minV == 0 ? 1 : maxV - minV;
    final p = Path();
    for (var i = 0; i < values.length; i++) {
      final x = size.width * i / (values.length - 1);
      final y = size.height - 3 - (size.height - 6) * (values[i] - minV) / range;
      i == 0 ? p.moveTo(x, y) : p.lineTo(x, y);
    }
    canvas.drawPath(
      p,
      Paint()
        ..color = _seriesColor
        ..strokeWidth = 2
        ..style = PaintingStyle.stroke
        ..strokeJoin = StrokeJoin.round
        ..strokeCap = StrokeCap.round,
    );
  }

  @override
  bool shouldRepaint(covariant _SparkPainter old) => old.values != values;
}

/// Barras verticais; a última fica em verde forte e com o valor por cima.
/// Tocar numa barra mostra o seu valor.
class SimpleBarChart extends StatefulWidget {
  final List<double> values;
  final List<String> labels;
  final String Function(int index) describe;
  final double height;

  const SimpleBarChart({
    super.key,
    required this.values,
    required this.labels,
    required this.describe,
    this.height = 120,
  });

  @override
  State<SimpleBarChart> createState() => _SimpleBarChartState();
}

class _SimpleBarChartState extends State<SimpleBarChart> {
  int? _active;

  @override
  Widget build(BuildContext context) {
    final maxV = niceMax(widget.values.fold<double>(0, math.max));
    final active = _active ?? widget.values.length - 1;
    return SizedBox(
      height: widget.height,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          for (var i = 0; i < widget.values.length; i++)
            Expanded(
              child: Semantics(
                button: true,
                label: widget.describe(i),
                child: GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () => setState(() => _active = i),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 5),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        if (i == active)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 4),
                            child: Text(
                              widget.values[i].toStringAsFixed(0),
                              style: const TextStyle(
                                fontSize: AppFontSize.xs,
                                fontWeight: FontWeight.w700,
                                color: AppTheme.ink,
                              ),
                            ),
                          ),
                        AnimatedContainer(
                          duration: const Duration(milliseconds: 220),
                          height: math.max(
                            3,
                            (widget.height - 40) * widget.values[i] / maxV,
                          ),
                          decoration: BoxDecoration(
                            color: i == active ? _seriesColor : const Color(0xFFC9D3B0),
                            borderRadius: const BorderRadius.vertical(
                              top: Radius.circular(4),
                            ),
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          widget.labels[i],
                          style: const TextStyle(
                            fontSize: 10,
                            color: AppTheme.inkMuted,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
