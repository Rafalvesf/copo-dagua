import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';
import 'snappy_tap.dart';

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

  String get _initials {
    final parts = name.trim().split(RegExp(r'\s+'))
      ..removeWhere((p) => p.isEmpty || p == '&');
    if (parts.isEmpty) return '?';
    final first = parts.first[0];
    final last = parts.length > 1 ? parts.last[0] : '';
    return (first + last).toUpperCase();
  }

  @override
  Widget build(BuildContext context) {
    final url = avatarUrl;
    final avatar = CircleAvatar(
      radius: 20,
      backgroundColor: AppColors.green,
      foregroundImage: url == null ? null : NetworkImage(url),
      child: Text(
        _initials,
        style: TextStyle(
          fontSize: AppFontSize.md,
          fontWeight: FontWeight.w700,
          color: AppTheme.accentOliveDark,
        ),
      ),
    );
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
                    color: AppTheme.inkMuted,
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
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: AppTheme.borderMuted)),
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
