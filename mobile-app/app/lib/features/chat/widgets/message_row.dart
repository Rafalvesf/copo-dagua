import 'package:flutter/material.dart';

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
  });

  @override
  Widget build(BuildContext context) {
    final hasUnread = unread > 0;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        color: Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 14),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 14),
          decoration: BoxDecoration(
            border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFECE7DC))),
          ),
          child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            SizedBox(width: 52, height: 52, child: avatar),
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
                            fontWeight: hasUnread ? FontWeight.w700 : FontWeight.w400,
                            color: AppTheme.ink)),
                  ),
                  if (time != null) ...[
                    const SizedBox(width: 6),
                    Text(time!,
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: hasUnread ? FontWeight.w700 : FontWeight.w400,
                          color: hasUnread ? AppTheme.accentOliveDark : AppTheme.inkMuted,
                        )),
                  ],
                ]),
                const SizedBox(height: 3),
                Row(children: [
                  if (mine) ...[
                    Icon(mineSeen ? Icons.done_all_rounded : Icons.done_rounded,
                        size: 16, color: mineSeen ? AppTheme.accentOliveDark : AppTheme.inkMuted),
                    const SizedBox(width: 4),
                  ],
                  Expanded(
                    child: Text.rich(
                      TextSpan(children: [
                        if (previewPrefix != null)
                          TextSpan(text: '$previewPrefix: ', style: const TextStyle(color: AppTheme.inkMuted)),
                        TextSpan(text: preview),
                      ]),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 14,
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
                      decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(10)),
                      child: Text('$unread',
                          style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white)),
                    ),
                  ],
                ]),
                if (chips.isNotEmpty) ...[
                  const SizedBox(height: 6),
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

enum MessageChipTone { plain, warn, done }

class MessageChip extends StatelessWidget {
  final String text;
  final MessageChipTone tone;
  const MessageChip(this.text, {super.key, this.tone = MessageChipTone.plain});

  @override
  Widget build(BuildContext context) {
    final (bg, fg) = switch (tone) {
      MessageChipTone.warn => (const Color(0xFFF7EACA), const Color(0xFF5A3E0C)),
      MessageChipTone.done => (const Color(0xFFE6EDE1), const Color(0xFF3F7A4F)),
      MessageChipTone.plain => (const Color(0xFFF2F0EB), const Color(0xFF3A3733)),
    };
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
      child: Text(text, maxLines: 1, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: fg)),
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
