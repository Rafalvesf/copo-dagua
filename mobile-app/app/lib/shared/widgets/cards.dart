import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'initials_avatar.dart';
import 'rsvp_status_badge.dart';
import 'snappy_tap.dart';

/// Fundo fotográfico para cartões de destaque (hero, parceiros): a
/// foto preenche o cartão todo e um gradiente escuro no fundo garante
/// legibilidade ao texto branco sobreposto, mesmo com fotos muito
/// claras. `fallbackColor` cobre o tempo de carregamento e falhas de
/// rede, para o cartão nunca ficar em branco.
class PhotoCardBackground extends StatelessWidget {
  final String imageUrl;
  final Color fallbackColor;

  const PhotoCardBackground({
    super.key,
    required this.imageUrl,
    required this.fallbackColor,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Container(color: fallbackColor),
        Image.network(
          imageUrl,
          fit: BoxFit.cover,
          loadingBuilder: (context, child, progress) =>
              progress == null ? child : const SizedBox.shrink(),
          errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
        ),
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [
                Colors.black.withValues(alpha: 0.12),
                Colors.black.withValues(alpha: 0.18),
                Colors.black.withValues(alpha: 0.85),
              ],
              stops: const [0.0, 0.25, 1.0],
            ),
          ),
        ),
      ],
    );
  }
}

class RoleSelectorCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const RoleSelectorCard({
    super.key,
    required this.icon,
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          border: Border.all(
            color: selected ? colorScheme.primary : colorScheme.outlineVariant,
            width: selected ? 2 : 1,
          ),
          color: selected
              ? colorScheme.primaryContainer.withValues(alpha: 0.4)
              : null,
        ),
        child: Row(
          children: [
            Icon(icon, size: 24, color: colorScheme.primary),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                label,
                style: Theme.of(context).textTheme.titleMedium,
              ),
            ),
            if (selected) Icon(Icons.check_circle, color: colorScheme.primary),
          ],
        ),
      ),
    );
  }
}

class GuestListItem extends StatelessWidget {
  final Guest guest;
  final VoidCallback onTap;

  const GuestListItem({super.key, required this.guest, required this.onTap});

  String get _adultsLabel => guest.maxCompanions == 0 ? '1 pessoa' : '${guest.maxCompanions + 1} pessoas';

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 24,
              backgroundColor: AppColors.green,
              backgroundImage: NetworkImage(
                'https://api.dicebear.com/7.x/notionists/png?seed=${guest.id}',
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    guest.name,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: AppFontSize.lg,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '${guest.group.isEmpty ? 'Sem grupo' : guest.group} · $_adultsLabel',
                    style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                  ),
                ],
              ),
            ),
            RsvpStatusBadge(status: guest.rsvpStatus, showIcon: true),
          ],
        ),
      ),
    );
  }
}

/// Linha de conversa — avatar, nome + hora, prévia da última mensagem
/// e selo de não-lidas. Usada pelo Chat do lado do Noivo/a e pelas
/// Mensagens do lado do Parceiro (mesma forma, contrapartes diferentes).
class ConversationListItem extends StatelessWidget {
  final ChatConversation conversation;
  final VoidCallback onTap;

  /// Variante das Mensagens do parceiro (design "Parceiro — mensagens"):
  /// separador a toda a largura da linha, hora e contador empilhados à
  /// direita, pré-visualização a 13 px.
  final bool partnerStyle;
  final bool isLast;

  const ConversationListItem({
    super.key,
    required this.conversation,
    required this.onTap,
    this.partnerStyle = false,
    this.isLast = false,
  });

  Widget _partnerRow(Color tint) {
    final unread = conversation.unreadCount > 0;
    final avatarUrl = conversation.avatarUrl;
    return SnappyTap(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 14),
          decoration: BoxDecoration(
            color: Colors.transparent,
            border: isLast ? null : const Border(bottom: BorderSide(color: AppTheme.borderMuted)),
          ),
          child: Row(
            children: [
              avatarUrl == null
                  ? InitialsAvatar(
                      name: conversation.name,
                      radius: 24,
                      background: tint,
                      foreground: AppTheme.accentOliveDark,
                    )
                  : CircleAvatar(radius: 24, backgroundColor: tint, backgroundImage: NetworkImage(avatarUrl)),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      conversation.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: unread ? FontWeight.w700 : FontWeight.w400,
                        color: AppTheme.ink,
                      ),
                    ),
                    const SizedBox(height: 3),
                    Text(
                      conversation.lastMessage ?? 'Sem mensagens ainda.',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  if (_timeLabel != null)
                    Text(
                      _timeLabel!,
                      style: TextStyle(
                        fontSize: 12,
                        color: unread ? AppTheme.accentOliveDark : AppTheme.inkMuted,
                        fontWeight: unread ? FontWeight.w700 : FontWeight.w400,
                      ),
                    ),
                  if (unread) ...[
                    const SizedBox(height: 6),
                    Container(
                      constraints: const BoxConstraints(minWidth: 20),
                      height: 20,
                      padding: const EdgeInsets.symmetric(horizontal: 6),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: AppTheme.accentOliveDark,
                        borderRadius: BorderRadius.circular(AppRadius.pill),
                      ),
                      child: Text(
                        '${conversation.unreadCount}',
                        style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700),
                      ),
                    ),
                  ],
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  String? get _timeLabel {
    final at = conversation.lastMessageAt;
    if (at == null) return null;
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final day = DateTime(at.year, at.month, at.day);
    if (day == today) {
      return '${at.hour.toString().padLeft(2, '0')}:${at.minute.toString().padLeft(2, '0')}';
    }
    if (today.difference(day).inDays == 1) return 'Ontem';
    return '${at.day.toString().padLeft(2, '0')}/${at.month.toString().padLeft(2, '0')}';
  }

  // Linhas sem cartão, com separador por baixo do texto, como no design
  // (canvas "Mensagens"): nome mais forte e hora a verde quando há
  // mensagens por ler.
  static const _tints = [
    Color(0xFFDDE5D3),
    Color(0xFFECE7DC),
    Color(0xFFF7EACA),
    Color(0xFFF3DEE0),
    Color(0xFFF4E1D2),
  ];

  @override
  Widget build(BuildContext context) {
    final avatarUrl = conversation.avatarUrl;
    final unread = conversation.unreadCount > 0;
    final tint = _tints[conversation.name.hashCode.abs() % _tints.length];
    if (partnerStyle) return _partnerRow(tint);
    return SnappyTap(
      onTap: onTap,
      child: Container(
        color: Colors.transparent,
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Row(
          children: [
            avatarUrl == null
                ? InitialsAvatar(name: conversation.name, radius: 24, background: tint)
                : CircleAvatar(
                    radius: 24,
                    backgroundColor: tint,
                    backgroundImage: NetworkImage(avatarUrl),
                  ),
            const SizedBox(width: 14),
            Expanded(
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 14),
                decoration: const BoxDecoration(
                  border: Border(bottom: BorderSide(color: AppTheme.borderMuted)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.baseline,
                      textBaseline: TextBaseline.alphabetic,
                      children: [
                        Expanded(
                          child: Text(
                            conversation.name,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontWeight: unread ? FontWeight.w700 : FontWeight.w600,
                              fontSize: 15,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                        if (_timeLabel != null) ...[
                          const SizedBox(width: 8),
                          Text(
                            _timeLabel!,
                            style: TextStyle(
                              color: unread ? AppTheme.accentOliveDark : AppTheme.inkMuted,
                              fontWeight: unread ? FontWeight.w700 : FontWeight.w400,
                              fontSize: AppFontSize.xs,
                            ),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 3),
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            conversation.lastMessage ?? 'Sem mensagens ainda.',
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              color: AppTheme.inkMuted,
                              fontSize: 14,
                              fontWeight: FontWeight.w300,
                            ),
                          ),
                        ),
                        if (unread) ...[
                          const SizedBox(width: 8),
                          Container(
                            constraints: const BoxConstraints(minWidth: 20),
                            height: 20,
                            padding: const EdgeInsets.symmetric(horizontal: 6),
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: AppTheme.accentOliveDark,
                              borderRadius: BorderRadius.circular(AppRadius.pill),
                            ),
                            child: Text(
                              '${conversation.unreadCount}',
                              style: const TextStyle(
                                color: Colors.white,
                                fontSize: 11,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
