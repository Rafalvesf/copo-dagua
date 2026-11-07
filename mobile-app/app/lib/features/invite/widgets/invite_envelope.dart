import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../../core/invite/public_invite.dart';
import '../../../core/models/models.dart';

/// Envelope do convite (canvas "Envelope do convite", 2026-11-07): o
/// convidado abre o link e vê primeiro o envelope fechado; ao tocar no
/// selo (ou em "Abrir convite") a aba abre, o cartão sobe e segue para o
/// convite. Casamentos: clássico (lacre bordô, ramos de oliveira);
/// outros eventos: geral (selo com brinde e o tipo do evento).
class InviteEnvelopeScreen extends StatefulWidget {
  final InviteEvent event;
  final VoidCallback onOpened;

  const InviteEnvelopeScreen({super.key, required this.event, required this.onOpened});

  @override
  State<InviteEnvelopeScreen> createState() => _InviteEnvelopeScreenState();
}

const _bg = Color(0xFF2E3B2B);
const _paper = Color(0xFFF4EEDF);
const _paperDark = Color(0xFFDCD1B7);
const _flapPaper = Color(0xFFEFE8D6);
const _liner = Color(0xFF4E5B32);
const _gold = Color(0xFFB8995A);
const _muted = Color(0xFFC9BE9C);
const _ink = Color(0xFF2E3B2B);

const _monthsRoman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const _weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const _months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

class _InviteEnvelopeScreenState extends State<InviteEnvelopeScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 1700));
  bool _opening = false;

  bool get _wedding => const {EventType.wedding, EventType.engagement, EventType.vowRenewal}.contains(widget.event.eventType);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  Future<void> _open() async {
    if (_opening) return;
    _opening = true;
    if (MediaQuery.of(context).disableAnimations) {
      widget.onOpened();
      return;
    }
    await _c.forward();
    await Future<void>.delayed(const Duration(milliseconds: 250));
    if (mounted) widget.onOpened();
  }

  String get _monogram {
    final ev = widget.event;
    String first(String s) => s.trim().isEmpty ? '' : s.trim().characters.first.toUpperCase();
    return ev.isCouple ? '${first(ev.name1)}&${first(ev.name2!)}' : first(ev.name1);
  }

  String get _dateLine {
    final ev = widget.event;
    final d = ev.date;
    final place = ev.location ?? ev.venue;
    if (_wedding) {
      return [
        if (d != null) '${d.day} · ${_monthsRoman[d.month - 1]} · ${d.year}',
        ?place,
      ].join(' · ');
    }
    return [
      if (d != null) '${_weekdays[d.weekday - 1]}, ${d.day} de ${_months[d.month - 1]}',
      ?ev.time,
      ?place,
    ].join(' · ');
  }

  @override
  Widget build(BuildContext context) {
    final ev = widget.event;
    final sealColor = _wedding ? const Color(0xFF7A2E2E) : const Color(0xFF6B7A3F);
    return Scaffold(
      backgroundColor: _bg,
      body: SafeArea(
        child: LayoutBuilder(builder: (context, box) {
          final w = math.min(342.0, box.maxWidth - 48);
          final h = w * 242 / 342;
          return Padding(
            padding: const EdgeInsets.fromLTRB(24, 40, 24, 28),
            child: Column(
              children: [
                Text(
                  (_wedding ? 'Um convite para ti' : '${ev.name1} convidou-te').toUpperCase(),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 12, letterSpacing: 2.6, fontWeight: FontWeight.w700, color: _muted),
                ),
                const Spacer(),
                AnimatedBuilder(
                  animation: _c,
                  builder: (context, _) {
                    final t = _c.value;
                    final flap = Curves.easeInOut.transform((t / 0.4).clamp(0.0, 1.0));
                    final rise = Curves.easeOutCubic.transform(((t - 0.4) / 0.6).clamp(0.0, 1.0));
                    return SizedBox(
                      width: w,
                      height: h + h * 0.75,
                      child: Stack(
                        clipBehavior: Clip.none,
                        children: [
                          // Fundo do envelope + aba aberta (atrás do cartão).
                          Positioned(
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: h,
                            child: CustomPaint(painter: _BackPainter(flap: flap)),
                          ),
                          // O cartão sobe.
                          Positioned(
                            left: w * 0.07,
                            right: w * 0.07,
                            bottom: h * 0.12 + rise * h * 0.72,
                            height: h * 0.86,
                            child: Opacity(opacity: flap >= 0.5 ? 1 : 0, child: _Card(event: ev, wedding: _wedding)),
                          ),
                          // Frente do envelope (bolso).
                          Positioned(
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: h,
                            child: CustomPaint(painter: _FrontPainter()),
                          ),
                          Positioned(
                            left: w * 0.075,
                            bottom: h * 0.1,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text('PARA', style: TextStyle(fontSize: 10, letterSpacing: 2, fontWeight: FontWeight.w700, color: Color(0xFF8A7F62))),
                                const SizedBox(height: 4),
                                Container(
                                  width: w * 0.42,
                                  padding: const EdgeInsets.only(bottom: 3),
                                  decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFCFC3A4)))),
                                  child: const Text('ti', style: TextStyle(fontSize: 22, fontStyle: FontStyle.italic, color: _ink)),
                                ),
                              ],
                            ),
                          ),
                          // Aba fechada por cima, com o selo.
                          if (flap < 0.5)
                            Positioned(
                              left: 0,
                              right: 0,
                              bottom: 0,
                              height: h,
                              child: CustomPaint(painter: _FlapPainter(flap: flap, sprigs: _wedding)),
                            ),
                          if (!_wedding)
                            Positioned(
                              right: w * 0.05,
                              bottom: h * 0.85,
                              child: Opacity(
                                opacity: 1 - flap,
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                                  decoration: BoxDecoration(color: sealColor, borderRadius: BorderRadius.circular(999)),
                                  child: Text(ev.eventType.label.toUpperCase(),
                                      style: const TextStyle(fontSize: 10, letterSpacing: 1, fontWeight: FontWeight.w700, color: _paper)),
                                ),
                              ),
                            ),
                          Positioned(
                            left: w / 2 - w * 0.15,
                            bottom: h - h * 0.545 - w * 0.15,
                            width: w * 0.3,
                            height: w * 0.3,
                            child: Opacity(
                              opacity: (1 - flap * 3).clamp(0.0, 1.0),
                              child: Semantics(
                                button: true,
                                label: 'Abrir o convite',
                                child: GestureDetector(
                                  onTap: _open,
                                  child: CustomPaint(
                                    painter: _SealPainter(color: sealColor),
                                    child: Center(
                                      child: _wedding
                                          ? Text(_monogram,
                                              style: TextStyle(fontSize: w * 0.06, fontWeight: FontWeight.w700, color: _paper))
                                          : Icon(Icons.wine_bar_outlined, size: w * 0.08, color: _paper),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
                const SizedBox(height: 28),
                Text(
                  ev.displayNames,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 30, height: 1.1, fontWeight: FontWeight.w700, color: Colors.white),
                ),
                const SizedBox(height: 8),
                Text(
                  _wedding ? _dateLine.toUpperCase() : _dateLine,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 13,
                    letterSpacing: _wedding ? 2.4 : 0,
                    fontWeight: _wedding ? FontWeight.w700 : FontWeight.w400,
                    color: _muted,
                  ),
                ),
                const Spacer(),
                SizedBox(
                  width: double.infinity,
                  height: 54,
                  child: FilledButton(
                    onPressed: _open,
                    style: FilledButton.styleFrom(
                      backgroundColor: _paper,
                      foregroundColor: _ink,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
                    ),
                    child: const Text('Abrir convite'),
                  ),
                ),
                const SizedBox(height: 10),
                const Text('ou toca no selo', style: TextStyle(fontSize: 13, color: _muted)),
              ],
            ),
          );
        }),
      ),
    );
  }
}

/// Cartão que sai do envelope.
class _Card extends StatelessWidget {
  final InviteEvent event;
  final bool wedding;
  const _Card({required this.event, required this.wedding});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(6),
        decoration: BoxDecoration(
          color: const Color(0xFFFBF8F1),
          borderRadius: BorderRadius.circular(3),
          boxShadow: const [BoxShadow(color: Color(0x40000000), blurRadius: 18, offset: Offset(0, 8))],
        ),
        child: Container(
          decoration: BoxDecoration(border: Border.all(color: _gold)),
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 10),
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(wedding ? 'VAMOS CASAR' : 'ESTÁS CONVIDADO',
                    style: const TextStyle(fontSize: 10, letterSpacing: 2.2, fontWeight: FontWeight.w700, color: Color(0xFF5E5D52))),
                const SizedBox(height: 8),
                Text(event.displayNames,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 28, height: 1.05, fontWeight: FontWeight.w700, color: _ink)),
                if (event.date != null) ...[
                  const SizedBox(height: 8),
                  Text('${event.date!.day} · ${_monthsRoman[event.date!.month - 1]} · ${event.date!.year}',
                      style: const TextStyle(fontSize: 11, letterSpacing: 2, fontWeight: FontWeight.w700, color: Color(0xFF5E5D52))),
                ],
              ],
            ),
          ),
        ),
      );
}

/// Interior do envelope e a aba já aberta (forro verde com folhas).
class _BackPainter extends CustomPainter {
  final double flap;
  _BackPainter({required this.flap});

  @override
  void paint(Canvas canvas, Size s) {
    final r = RRect.fromRectAndRadius(Offset.zero & s, const Radius.circular(5));
    canvas.drawRRect(r, Paint()..color = _paperDark);
    if (flap >= 0.5) {
      // Aba virada para cima: de 0 (deitada) até à altura total.
      final k = (flap - 0.5) * 2;
      final tipY = -s.height * 0.545 * k;
      final outer = Path()
        ..moveTo(0, 0)
        ..lineTo(s.width / 2, tipY)
        ..lineTo(s.width, 0)
        ..close();
      canvas.drawPath(outer, Paint()..color = _paper);
      final inset = s.width * 0.03;
      final inner = Path()
        ..moveTo(inset, 0)
        ..lineTo(s.width / 2, tipY + (tipY < 0 ? inset : 0))
        ..lineTo(s.width - inset, 0)
        ..close();
      canvas.drawPath(inner, Paint()..color = _liner);
      canvas.save();
      canvas.clipPath(inner);
      final leaf = Paint()..color = const Color(0xFF7E8C52);
      final leafGold = Paint()..color = _gold.withValues(alpha: 0.7);
      for (var x = 0.0; x < s.width; x += 26) {
        for (var y = tipY; y < 0; y += 22) {
          canvas.save();
          canvas.translate(x + ((y / 22).round().isEven ? 0 : 13), y + 8);
          canvas.rotate(-0.7);
          canvas.drawOval(Rect.fromCenter(center: Offset.zero, width: 9, height: 3.4), (x ~/ 26).isEven ? leaf : leafGold);
          canvas.restore();
        }
      }
      canvas.restore();
      canvas.drawPath(inner, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..color = _gold);
    }
  }

  @override
  bool shouldRepaint(_BackPainter old) => old.flap != flap;
}

/// Bolso da frente (com as dobras de baixo).
class _FrontPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final pocket = Path()
      ..moveTo(0, 0)
      ..lineTo(s.width / 2, s.height * 0.48)
      ..lineTo(s.width, 0)
      ..lineTo(s.width, s.height - 5)
      ..quadraticBezierTo(s.width, s.height, s.width - 5, s.height)
      ..lineTo(5, s.height)
      ..quadraticBezierTo(0, s.height, 0, s.height - 5)
      ..close();
    canvas.drawShadow(pocket, Colors.black, 6, false);
    canvas.drawPath(pocket, Paint()..color = _paper);
    final fold = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = const Color(0xFFE2D8C0);
    canvas.drawLine(Offset(0, s.height), Offset(s.width / 2, s.height * 0.52), fold);
    canvas.drawLine(Offset(s.width, s.height), Offset(s.width / 2, s.height * 0.52), fold);
    canvas.drawPath(
      Path()
        ..moveTo(0, 0)
        ..lineTo(s.width / 2, s.height * 0.48)
        ..lineTo(s.width, 0),
      fold..color = const Color(0xFFDCD1B7),
    );
  }

  @override
  bool shouldRepaint(_FrontPainter old) => false;
}

/// Aba fechada (a dobrar-se para cima enquanto abre) e os ramos.
class _FlapPainter extends CustomPainter {
  final double flap;
  final bool sprigs;
  _FlapPainter({required this.flap, required this.sprigs});

  @override
  void paint(Canvas canvas, Size s) {
    final k = 1 - flap * 2; // 1 → fechada, 0 → deitada
    final tipY = s.height * 0.545 * k;
    final path = Path()
      ..moveTo(0, 0)
      ..lineTo(s.width / 2, tipY)
      ..lineTo(s.width, 0)
      ..close();
    canvas.drawShadow(path, Colors.black, 3, false);
    canvas.drawPath(path, Paint()..color = _flapPaper);
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2
        ..color = const Color(0xFFD2C6A8),
    );
    if (sprigs && k > 0.8) {
      final c = Offset(s.width / 2, tipY);
      final stem = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.6
        ..strokeCap = StrokeCap.round
        ..color = const Color(0xFF6B7A3F);
      final leafA = Paint()..color = const Color(0xFF7E8C52);
      final leafB = Paint()..color = const Color(0xFF6B7A3F);
      for (final dir in [-1.0, 1.0]) {
        final start = c + Offset(-dir * 56, 22);
        final end = c + Offset(dir * 30, -42);
        canvas.drawPath(
          Path()
            ..moveTo(start.dx, start.dy)
            ..quadraticBezierTo(c.dx - dir * 10, c.dy + 2, end.dx, end.dy),
          stem,
        );
        for (var i = 1; i <= 4; i++) {
          final t = i / 5;
          final p = Offset.lerp(start, end, t)! + Offset(0, -6 * math.sin(t * math.pi));
          canvas.save();
          canvas.translate(p.dx, p.dy);
          canvas.rotate(dir * (i.isEven ? -0.9 : -0.3));
          canvas.drawOval(Rect.fromCenter(center: Offset.zero, width: 20, height: 7), i.isEven ? leafA : leafB);
          canvas.restore();
        }
      }
    }
  }

  @override
  bool shouldRepaint(_FlapPainter old) => old.flap != flap || old.sprigs != sprigs;
}

/// Selo de lacre com o rebordo irregular.
class _SealPainter extends CustomPainter {
  final Color color;
  _SealPainter({required this.color});

  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.shortestSide / 2;
    const n = 28;
    final pts = [
      for (var i = 0; i < n; i++)
        c + Offset.fromDirection(i * 2 * math.pi / n, r * (i.isEven ? 0.96 : 0.88) + (i % 5 == 0 ? r * 0.03 : 0)),
    ];
    final path = Path()..moveTo((pts[0].dx + pts[1].dx) / 2, (pts[0].dy + pts[1].dy) / 2);
    for (var i = 1; i <= n; i++) {
      final p = pts[i % n];
      final q = pts[(i + 1) % n];
      path.quadraticBezierTo(p.dx, p.dy, (p.dx + q.dx) / 2, (p.dy + q.dy) / 2);
    }
    path.close();
    canvas.drawShadow(path, Colors.black, 4, false);
    canvas.drawPath(path, Paint()..color = color);
    canvas.drawCircle(
      c,
      r * 0.62,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = Colors.black.withValues(alpha: 0.18),
    );
    canvas.drawCircle(
      c,
      r * 0.62,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..color = Colors.white.withValues(alpha: 0.22),
    );
  }

  @override
  bool shouldRepaint(_SealPainter old) => old.color != color;
}
