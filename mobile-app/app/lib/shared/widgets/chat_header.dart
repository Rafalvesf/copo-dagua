import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
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

  /// Botão "Denunciar" visível no cabeçalho (exigência das lojas: o toque
  /// longo nas mensagens continua, mas ninguém o descobria — 2026-10-31).
  final VoidCallback? onReport;

  /// Faixa do evento por baixo (mockup "Conversa", 2026-11-12):
  /// "Sofia & Tiago · 12 set 2027", uma linha por baixo e um botão.
  final String? eventTitle;
  final String? eventSubtitle;
  final String? eventAction;
  final VoidCallback? onEventAction;

  /// Caras por cima da foto (grupos): no lugar da foto redonda.
  final Widget? leading;

  const ChatHeader({
    super.key,
    required this.name,
    this.avatarUrl,
    this.subtitle,
    this.onOpenProfile,
    this.onReport,
    this.eventTitle,
    this.eventSubtitle,
    this.eventAction,
    this.onEventAction,
    this.leading,
  });

  @override
  Widget build(BuildContext context) {
    final info = Row(
      children: [
        leading ?? V2Avatar(name, size: 44, imageUrl: avatarUrl),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (subtitle != null)
                Text(subtitle!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ],
          ),
        ),
      ],
    );
    Widget roundBtn(IconData icon, String tip, VoidCallback onTap) => Tooltip(
          message: tip,
          child: SnappyTap(
            onTap: onTap,
            child: Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: const BoxDecoration(color: Color(0xFFF2F0EB), shape: BoxShape.circle),
              child: Icon(icon, size: 22, color: AppTheme.ink),
            ),
          ),
        );
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [BoxShadow(color: AppTheme.ink.withValues(alpha: 0.06), blurRadius: 14, offset: const Offset(0, 4))],
      ),
      padding: EdgeInsets.fromLTRB(16, MediaQuery.paddingOf(context).top + 10, 16, 12),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(
          children: [
            roundBtn(Hi.chevronLeft, 'Voltar', () => Navigator.of(context).maybePop()),
            const SizedBox(width: 10),
            Expanded(child: onOpenProfile == null ? info : SnappyTap(onTap: onOpenProfile, child: info)),
            if (onReport != null) ...[
              const SizedBox(width: 8),
              PopupMenuButton<String>(
                tooltip: 'Mais opções',
                position: PopupMenuPosition.under,
                onSelected: (_) => onReport!(),
                itemBuilder: (_) => const [PopupMenuItem(value: 'report', child: Text('Denunciar'))],
                child: Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(color: Color(0xFFF2F0EB), shape: BoxShape.circle),
                  child: const Icon(Hi.ellipsisHorizontal, size: 22, color: AppTheme.ink),
                ),
              ),
            ],
          ],
        ),
        if (eventTitle != null) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.fromLTRB(12, 8, 8, 8),
            decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(14)),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                  Text(eventTitle!,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (eventSubtitle != null)
                    Text(eventSubtitle!,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                ]),
              ),
              if (eventAction != null && onEventAction != null) ...[
                const SizedBox(width: 8),
                SnappyTap(
                  onTap: onEventAction,
                  child: Container(
                    height: 34,
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(17),
                      border: Border.all(color: AppTheme.ink, width: 1.5),
                    ),
                    child: Text(eventAction!,
                        style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                ),
              ],
            ]),
          ),
        ],
      ]),
    );
  }
}
