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

  /// Cor do aro das fotos: a do fundo por trás (branco nos cartões
  /// brancos de «Os meus eventos»).
  final Color ring;
  const AttendeesLine({super.key, required this.people, required this.total, this.emptyText = 'Sê o primeiro a ir!', this.suffix, this.ring = AppTheme.background});

  static const _muted = TextStyle(fontSize: 13, color: AppTheme.inkMuted);

  @override
  Widget build(BuildContext context) {
    if (total <= 0) {
      return Row(mainAxisSize: MainAxisSize.min, children: [
        _Ghosts(ring: ring),
        const SizedBox(width: 8),
        Flexible(child: Text(emptyText, maxLines: 1, overflow: TextOverflow.ellipsis, style: _muted)),
      ]);
    }
    final friends = people.where((p) => p.isFriend).take(2).toList();
    // Sempre 3 fotos (pedido 2026-11-23): amigos primeiro, depois quem se
    // pode ver; o que faltar fica nos círculos cinzentos.
    final shown = [...friends, ...people.where((p) => !friends.contains(p))].take(3).toList();
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
      SizedBox(
        width: 24 + 2 * 16,
        height: 24,
        child: Stack(children: [
          for (var i = 0; i < 3; i++)
            Positioned(
              left: i * 16.0,
              child: Container(
                decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: ring, width: 2)),
                child: i < shown.length
                    ? V2Avatar(shown[i].name, size: 20, imageUrl: shown[i].avatarUrl, flat: true)
                    : Container(width: 20, height: 20, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFE0E0E0))),
              ),
            ),
        ]),
      ),
      const SizedBox(width: 8),
      Flexible(child: Text.rich(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: _muted)),
    ]);
  }
}

/// Três lugares vazios: ainda ninguém confirmou. Com a mesma forma das
/// fotos (círculo 20 com o aro 2 da cor do fundo, sobrepostos a 16), mas
/// cinzentos (pedido 2026-11-22).
class _Ghosts extends StatelessWidget {
  final Color ring;
  const _Ghosts({required this.ring});

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 24 + 2 * 16,
        height: 24,
        child: Stack(children: [
          for (var i = 0; i < 3; i++)
            Positioned(
              left: i * 16.0,
              child: Container(
                width: 24,
                height: 24,
                decoration: BoxDecoration(
                  color: const Color(0xFFE0E0E0),
                  shape: BoxShape.circle,
                  border: Border.all(color: ring, width: 2),
                ),
              ),
            ),
        ]),
      );
}
