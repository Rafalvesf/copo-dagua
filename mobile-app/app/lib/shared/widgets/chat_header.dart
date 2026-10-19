import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';
import 'snappy_tap.dart';
import 'v2_kit.dart';

/// Cabeçalho de uma conversa (redesign 2026-10, igual ao canvas): voltar,
/// avatar com foto ou iniciais, nome em Bold e uma linha secundária.
/// Tocar no nome abre [onOpenProfile], quando existe.
class ChatHeader extends StatelessWidget {
  final String name;
  final String? avatarUrl;
  final String? subtitle;
  final VoidCallback? onOpenProfile;

  const ChatHeader({
    super.key,
    required this.name,
    this.avatarUrl,
    this.subtitle,
    this.onOpenProfile,
  });

  @override
  Widget build(BuildContext context) {
    // Avatar com aro branco e sombra, como nas listas (redesign 2026-10-19).
    final avatar = V2Avatar(name, size: 44, imageUrl: avatarUrl);
    final info = Row(
      children: [
        avatar,
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                name,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontSize: AppFontSize.lg,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
              if (subtitle != null)
                Text(
                  subtitle!,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: AppFontSize.sm,
                    fontWeight: FontWeight.w700,
                    color: AppTheme.brandGreen,
                  ),
                ),
            ],
          ),
        ),
      ],
    );
    return Container(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        8,
        AppTheme.screenMargin,
        12,
      ),
      child: Row(
        children: [
          const CircleBackButton(),
          const SizedBox(width: 12),
          Expanded(
            child: onOpenProfile == null
                ? info
                : SnappyTap(onTap: onOpenProfile, child: info),
          ),
        ],
      ),
    );
  }
}
