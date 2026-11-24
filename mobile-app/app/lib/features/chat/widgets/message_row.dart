import 'package:flutter/material.dart';
import '../../../shared/hero_icons.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Linha das Mensagens (mockup "Mensagens — lista", 2026-11-12): foto
/// redonda centrada com o texto, nome, hora, última mensagem (com "Tu:" e
/// visto quando é tua), contador de não lidas e etiquetas (evento, estado).
class MessageRow extends StatelessWidget {
  final Widget avatar;
  final String title;
  final String? time;
  final String preview;
  final String? previewPrefix;
  final bool mineSeen;
  final bool mine;
  final int unread;
  final List<MessageChip> chips;
  final VoidCallback onTap;
  final bool last;

  /// Ponto verde de "online agora" no canto da foto.
  final bool online;

  /// Grupo: o símbolo das pessoas no canto da foto (prancheta «Mensagens»).
  final bool group;

  const MessageRow({
    super.key,
    required this.avatar,
    required this.title,
    required this.preview,
    required this.onTap,
    this.time,
    this.previewPrefix,
    this.mine = false,
    this.mineSeen = false,
    this.unread = 0,
    this.chips = const [],
    this.last = false,
    this.online = false,
    this.group = false,
  });

  @override
  Widget build(BuildContext context) {
    final hasUnread = unread > 0;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        // Sem caixa: direto no fundo, alinhado com a margem 20 (DESIGN §4).
        color: Colors.transparent,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(
            border: last ? null : const Border(bottom: BorderSide(color: AppTheme.line)),
          ),
          child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            SizedBox(
              width: 52,
              height: 52,
              child: Stack(clipBehavior: Clip.none, children: [
                Positioned.fill(child: avatar),
                if (group)
                  Positioned(
                    right: -2,
                    bottom: -2,
                    child: Container(
                      width: 22,
                      height: 22,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: AppTheme.ink,
                        shape: BoxShape.circle,
                        border: Border.all(color: AppTheme.background, width: 2),
                      ),
                      child: const Icon(Hi.userGroup, size: 12, color: Colors.white),
                    ),
                  ),
                if (online)
                  Positioned(
                    right: -2,
                    bottom: -2,
                    child: Container(
                      width: 15,
                      height: 15,
                      decoration: BoxDecoration(
                        color: const Color(0xFF3F7A4F),
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 2.5),
                      ),
                    ),
                  ),
              ]),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Row(children: [
                  Expanded(
                    child: Text(title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                            fontSize: 16,
                            fontWeight: hasUnread ? FontWeight.w700 : FontWeight.w700,
                            color: AppTheme.ink)),
                  ),
                  if (time != null) ...[
                    const SizedBox(width: 6),
                    Text(time!,
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: hasUnread ? FontWeight.w700 : FontWeight.w400,
                          color: hasUnread ? AppTheme.ink : AppTheme.inkMuted,
                        )),
                  ],
                ]),
                const SizedBox(height: 2),
                Row(children: [
                  Expanded(
                    child: Text.rich(
                      TextSpan(children: [
                        if (previewPrefix != null)
                          TextSpan(text: '$previewPrefix: '),
                        TextSpan(text: preview),
                      ]),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: hasUnread ? FontWeight.w700 : FontWeight.w400,
                        color: hasUnread ? AppTheme.ink : AppTheme.inkMuted,
                      ),
                    ),
                  ),
                  if (hasUnread) ...[
                    const SizedBox(width: 6),
                    Container(
                      constraints: const BoxConstraints(minWidth: 20),
                      height: 20,
                      padding: const EdgeInsets.symmetric(horizontal: 6),
                      alignment: Alignment.center,
                      // Contador do §2: pílula branca com aro preto 2.
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: AppTheme.ink, width: 2),
                      ),
                      child: Text('$unread',
                          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ],
                ]),
                if (chips.isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Wrap(spacing: 6, runSpacing: 4, children: chips),
                ],
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

enum MessageChipTone { plain, warn, urgent, done }

class MessageChip extends StatelessWidget {
  final String text;
  final MessageChipTone tone;
  const MessageChip(this.text, {super.key, this.tone = MessageChipTone.plain});

  @override
  Widget build(BuildContext context) {
    // Prancheta «Mensagens» (2026-11-24): etiqueta 12 negrito com o ponto.
    // Pendente/urgente: branco com a linha da cor (DESIGN §7); feito: verde.
    final (Color bg, Color fg, Color dot, Color? line) = switch (tone) {
      MessageChipTone.warn => (Colors.white, AppTheme.ink, const Color(0xFFF2A01B), const Color(0xFFF2A01B)),
      MessageChipTone.urgent => (Colors.white, AppTheme.ink, const Color(0xFFC8553D), const Color(0xFFC8553D)),
      MessageChipTone.done => (const Color(0xFFE6EDE1), const Color(0xFF3F7A4F), const Color(0xFF3F7A4F), null),
      MessageChipTone.plain => (const Color(0xFFE6E6E6), const Color(0xFF3A3733), const Color(0xFF3A3733), null),
    };
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(999),
        border: line == null ? null : Border.all(color: line, width: 1.5),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 7, height: 7, decoration: BoxDecoration(color: dot, shape: BoxShape.circle)),
        const SizedBox(width: 6),
        Text(text, maxLines: 1, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: fg)),
      ]),
    );
  }
}

/// "Hoje", "Ontem", "Ter", "12/10".
String messageTime(DateTime? at) {
  if (at == null) return '';
  final l = at.toLocal();
  final now = DateTime.now();
  final today = DateTime(now.year, now.month, now.day);
  final day = DateTime(l.year, l.month, l.day);
  final diff = today.difference(day).inDays;
  if (diff == 0) return '${l.hour.toString().padLeft(2, '0')}:${l.minute.toString().padLeft(2, '0')}';
  if (diff == 1) return 'Ontem';
  if (diff < 7) return const ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][l.weekday - 1];
  return '${l.day.toString().padLeft(2, '0')}/${l.month.toString().padLeft(2, '0')}';
}

/// Secção da lista: 0 hoje, 1 esta semana, 2 antes.
int messageSection(DateTime? at) {
  if (at == null) return 2;
  final l = at.toLocal();
  final now = DateTime.now();
  final today = DateTime(now.year, now.month, now.day);
  final diff = today.difference(DateTime(l.year, l.month, l.day)).inDays;
  if (diff <= 0) return 0;
  if (diff < 7) return 1;
  return 2;
}
