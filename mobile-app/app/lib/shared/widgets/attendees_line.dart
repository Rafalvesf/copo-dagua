import 'package:flutter/material.dart';

import '../../core/events/event_people.dart';
import '../../core/theme/app_theme.dart';
import 'v2_kit.dart' show V2Avatar;

/// Quem confirmou, no rodapé dos cartões de evento (pedido do Rafael,
/// 2026-11-22, mockup «Quem vai nos eventos», forma D; DESIGN.md §4):
/// fotos de 24 sobrepostas (como o «Seguido por» do perfil), amigos
/// primeiro e com o nome a negrito — «**Ana e João** + 10 confirmados»;
/// sem amigos, «12 confirmados» com as fotos que se podem ver; ninguém
/// ainda: três círculos tracejados e [emptyText].
class AttendeesLine extends StatelessWidget {
  final List<EventPerson> people;
  final int total;
  final String emptyText;
  final String? suffix;
  const AttendeesLine({super.key, required this.people, required this.total, this.emptyText = 'Sê o primeiro a ir!', this.suffix});

  static const _muted = TextStyle(fontSize: 13, color: AppTheme.inkMuted);

  @override
  Widget build(BuildContext context) {
    if (total <= 0) {
      return Row(mainAxisSize: MainAxisSize.min, children: [
        const _Ghosts(),
        const SizedBox(width: 8),
        Flexible(child: Text(emptyText, maxLines: 1, overflow: TextOverflow.ellipsis, style: _muted)),
      ]);
    }
    final friends = people.where((p) => p.isFriend).take(2).toList();
    final shown = friends.isNotEmpty ? friends : people.take(3).toList();
    final rest = total - friends.length;
    final tail = suffix == null ? '' : ' · $suffix';
    final InlineSpan text = friends.isNotEmpty
        ? TextSpan(children: [
            TextSpan(
              text: friends.length == 1 ? friends.first.firstName : '${friends[0].firstName} e ${friends[1].firstName}',
              style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink),
            ),
            TextSpan(
              text: rest > 0
                  ? ' + $rest ${rest == 1 ? 'confirmado' : 'confirmados'}$tail'
                  : '${friends.length == 1 ? ' confirmou' : ' confirmaram'}$tail',
            ),
          ])
        : TextSpan(text: '$total ${total == 1 ? 'confirmado' : 'confirmados'}$tail');
    return Row(mainAxisSize: MainAxisSize.min, children: [
      if (shown.isNotEmpty) ...[
        SizedBox(
          width: 24 + (shown.length - 1) * 16,
          height: 24,
          child: Stack(children: [
            for (var i = 0; i < shown.length; i++)
              Positioned(
                left: i * 16,
                child: Container(
                  decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: AppTheme.background, width: 2)),
                  child: V2Avatar(shown[i].name, size: 20, imageUrl: shown[i].avatarUrl, flat: true),
                ),
              ),
          ]),
        ),
        const SizedBox(width: 8),
      ],
      Flexible(child: Text.rich(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: _muted)),
    ]);
  }
}

/// Três lugares vazios (círculos tracejados 24): ainda ninguém confirmou.
class _Ghosts extends StatelessWidget {
  const _Ghosts();

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 24 + 2 * 18,
        height: 24,
        child: Stack(children: [
          for (var i = 0; i < 3; i++) Positioned(left: i * 18.0, child: const CustomPaint(size: Size(24, 24), painter: _DashedCircle())),
        ]),
      );
}

class _DashedCircle extends CustomPainter {
  const _DashedCircle();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFB5B0A8)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final r = Rect.fromLTWH(0.75, 0.75, size.width - 1.5, size.height - 1.5);
    const n = 12;
    const step = 2 * 3.141592653589793 / n;
    for (var i = 0; i < n; i++) {
      canvas.drawArc(r, i * step, step * 0.55, false, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
