import 'package:flutter/widgets.dart';

/// Ícones de traço dos mockups (2026-11-12): os mesmos desenhos SVG
/// (viewBox 24×24, traço redondo) que estão nos mockups do Perfil, das
/// Mensagens e do Parceiro, desenhados tal e qual.
class LineIcon extends StatelessWidget {
  final String path;
  final double size;
  final Color color;
  final double stroke;

  /// Preenchido em vez de traço (ex.: a estrela das avaliações).
  final bool fill;

  /// Círculos extra (cx, cy, r) — o SVG dos mockups usa <circle>.
  final List<(double, double, double)> circles;

  const LineIcon(
    this.path, {
    super.key,
    this.size = 20,
    this.color = const Color(0xFF171713),
    this.stroke = 2,
    this.fill = false,
    this.circles = const [],
  });

  // Desenhos dos mockups.
  static const back = 'M15 18l-6-6 6-6';
  static const forward = 'M9 18l6-6-6-6';
  static const bell = 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0';
  static const gear =
      'M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z';
  static const gearCircle = [(12.0, 12.0, 3.0)];
  static const dots = 'M5 12h.01M12 12h.01M19 12h.01';
  static const plus = 'M12 5v14M5 12h14';
  static const sendUp = 'M12 19V5M5 12l7-7 7 7';
  static const search = 'M20 20l-3.5-3.5';
  static const searchCircle = [(11.0, 11.0, 7.0)];
  static const share = 'M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v14';
  static const heart = 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z';
  static const pin = 'M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z';
  static const pinCircle = [(12.0, 9.0, 2.5)];
  static const calendar = 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M3 10h18';
  static const star = 'M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z';
  static const checks = 'M2 13l4 4L16 7M10 15l2 2 10-10';
  static const check = 'M5 13l4 4L19 7';

  @override
  Widget build(BuildContext context) => SizedBox(
        width: size,
        height: size,
        child: CustomPaint(painter: _LinePainter(path, color, stroke, fill, circles)),
      );
}

class _LinePainter extends CustomPainter {
  final String d;
  final Color color;
  final double stroke;
  final bool fill;
  final List<(double, double, double)> circles;
  _LinePainter(this.d, this.color, this.stroke, this.fill, this.circles);

  static final _cache = <String, Path>{};

  @override
  void paint(Canvas canvas, Size size) {
    final s = size.width / 24;
    canvas.save();
    canvas.scale(s, s);
    final paint = Paint()
      ..color = color
      ..style = fill ? PaintingStyle.fill : PaintingStyle.stroke
      ..strokeWidth = stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round
      ..isAntiAlias = true;
    canvas.drawPath(_cache.putIfAbsent(d, () => parseSvgPath(d)), paint);
    for (final (cx, cy, r) in circles) {
      canvas.drawCircle(Offset(cx, cy), r, paint);
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(_LinePainter old) =>
      old.d != d || old.color != color || old.stroke != stroke || old.fill != fill || old.circles != circles;
}

/// Leitor mínimo de `d` de SVG (M L H V C S A Z, maiúsculas e minúsculas).
Path parseSvgPath(String d) {
  final path = Path();
  final tokens = RegExp(r'[MmLlHhVvCcSsAaZz]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?').allMatches(d).map((m) => m.group(0)!).toList();
  var i = 0;
  var cmd = 'M';
  double x = 0, y = 0, sx = 0, sy = 0;
  double? lcx, lcy; // último ponto de controlo (para S)
  bool isCmd(String t) => RegExp(r'^[A-Za-z]$').hasMatch(t);
  double n() => double.parse(tokens[i++]);
  while (i < tokens.length) {
    if (isCmd(tokens[i])) cmd = tokens[i++];
    final rel = cmd == cmd.toLowerCase();
    switch (cmd.toUpperCase()) {
      case 'M':
        x = (rel ? x : 0) + n();
        y = (rel ? y : 0) + n();
        path.moveTo(x, y);
        sx = x;
        sy = y;
        cmd = rel ? 'l' : 'L';
        lcx = null;
      case 'L':
        x = (rel ? x : 0) + n();
        y = (rel ? y : 0) + n();
        path.lineTo(x, y);
        lcx = null;
      case 'H':
        x = (rel ? x : 0) + n();
        path.lineTo(x, y);
        lcx = null;
      case 'V':
        y = (rel ? y : 0) + n();
        path.lineTo(x, y);
        lcx = null;
      case 'C':
        final x1 = (rel ? x : 0) + n(), y1 = (rel ? y : 0) + n();
        final x2 = (rel ? x : 0) + n(), y2 = (rel ? y : 0) + n();
        final ex = (rel ? x : 0) + n(), ey = (rel ? y : 0) + n();
        path.cubicTo(x1, y1, x2, y2, ex, ey);
        lcx = x2;
        lcy = y2;
        x = ex;
        y = ey;
      case 'S':
        final x1 = lcx == null ? x : 2 * x - lcx;
        final y1 = lcy == null || lcx == null ? y : 2 * y - lcy;
        final x2 = (rel ? x : 0) + n(), y2 = (rel ? y : 0) + n();
        final ex = (rel ? x : 0) + n(), ey = (rel ? y : 0) + n();
        path.cubicTo(x1, y1, x2, y2, ex, ey);
        lcx = x2;
        lcy = y2;
        x = ex;
        y = ey;
      case 'A':
        final rx = n(), ry = n(), rot = n();
        final large = n() != 0, sweep = n() != 0;
        final ex = (rel ? x : 0) + n(), ey = (rel ? y : 0) + n();
        path.arcToPoint(Offset(ex, ey),
            radius: Radius.elliptical(rx, ry), rotation: rot, largeArc: large, clockwise: sweep);
        x = ex;
        y = ey;
        lcx = null;
      case 'Z':
        path.close();
        x = sx;
        y = sy;
        lcx = null;
      default:
        i++;
    }
  }
  return path;
}
