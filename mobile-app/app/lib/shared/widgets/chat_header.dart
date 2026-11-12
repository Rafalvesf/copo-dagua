import 'package:flutter/material.dart';
import 'line_icon.dart';

import '../../core/theme/app_theme.dart';
import 'floating_bottom_nav.dart' show kNavRadius;
import 'snappy_tap.dart';
import 'v2_kit.dart';

/// Cabeçalho de uma conversa (redesign 2026-10, igual ao canvas): voltar,
/// avatar com foto ou iniciais, nome em Bold e uma linha secundária.
/// Tocar no nome abre [onOpenProfile], quando existe.
class ChatHeader extends StatelessWidget {
  final String name;
  final String? avatarUrl;
  final String? subtitle;

  /// Verde quando a linha diz "Online" (mockup "Conversa").
  final bool subtitleOnline;
  final VoidCallback? onOpenProfile;

  /// Botão "Denunciar" visível no cabeçalho (exigência das lojas: o toque
  /// longo nas mensagens continua, mas ninguém o descobria — 2026-10-31).
  final VoidCallback? onReport;

  /// Caras por cima da foto (grupos): no lugar da foto redonda.
  final Widget? leading;

  const ChatHeader({
    super.key,
    required this.name,
    this.avatarUrl,
    this.subtitle,
    this.subtitleOnline = false,
    this.onOpenProfile,
    this.onReport,
    this.leading,
  });

  @override
  Widget build(BuildContext context) {
    final info = Row(
      children: [
        leading ?? V2Avatar(name, size: 44, imageUrl: avatarUrl, flat: true),
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
                    style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w700,
                        color: subtitleOnline ? const Color(0xFF3F7A4F) : AppTheme.inkMuted)),
            ],
          ),
        ),
      ],
    );
    Widget roundBtn(Widget icon, String tip, VoidCallback onTap) => Tooltip(
          message: tip,
          child: SnappyTap(
            onTap: onTap,
            child: Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: const BoxDecoration(color: Color(0xFFF2F0EB), shape: BoxShape.circle),
              child: icon,
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
            roundBtn(const LineIcon(LineIcon.back, stroke: 2.2), 'Voltar', () => Navigator.of(context).maybePop()),
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
                  child: const LineIcon(LineIcon.dots, stroke: 2.4),
                ),
              ),
            ],
          ],
        ),
      ]),
    );
  }
}

/// Ilha do evento por cima das mensagens (pedido 2026-11-12): solta do
/// cabeçalho, cantos redondos como a navbar. Esconde-se com uma animação
/// suave quando fazes scroll para ler mensagens antigas e volta quando
/// regressas às recentes. [child] é a lista (invertida) das mensagens.
class ChatEventIsland extends StatefulWidget {
  final String? title;
  final String? subtitle;
  final String? action;
  final VoidCallback? onAction;
  final Widget child;

  const ChatEventIsland({
    super.key,
    required this.title,
    required this.child,
    this.subtitle,
    this.action,
    this.onAction,
  });

  @override
  State<ChatEventIsland> createState() => _ChatEventIslandState();
}

class _ChatEventIslandState extends State<ChatEventIsland> {
  bool _visible = true;

  bool _onScroll(ScrollUpdateNotification n) {
    if (n.metrics.axis != Axis.vertical) return false;
    final d = n.scrollDelta ?? 0;
    // Lista invertida: pixels a subir = mensagens mais antigas.
    final show = n.metrics.pixels <= 8 ? true : (d > 2 ? false : (d < -2 ? true : _visible));
    if (show != _visible) setState(() => _visible = show);
    return false;
  }

  @override
  Widget build(BuildContext context) {
    if (widget.title == null) return widget.child;
    final island = Container(
      padding: const EdgeInsets.fromLTRB(18, 8, 8, 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(kNavRadius),
        boxShadow: [BoxShadow(color: AppTheme.ink.withValues(alpha: 0.10), blurRadius: 18, offset: const Offset(0, 6))],
      ),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            Text(widget.title!,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (widget.subtitle != null)
              Text(widget.subtitle!,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ]),
        ),
        if (widget.action != null && widget.onAction != null) ...[
          const SizedBox(width: 8),
          SnappyTap(
            onTap: widget.onAction,
            child: Container(
              height: 38,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(19),
                border: Border.all(color: AppTheme.ink, width: 1.5),
              ),
              child: Text(widget.action!,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
          ),
        ],
      ]),
    );
    return Stack(children: [
      Positioned.fill(
        child: NotificationListener<ScrollUpdateNotification>(onNotification: _onScroll, child: widget.child),
      ),
      Positioned(
        top: 10,
        left: 16,
        right: 16,
        child: IgnorePointer(
          ignoring: !_visible,
          child: AnimatedSlide(
            offset: _visible ? Offset.zero : const Offset(0, -1.3),
            duration: const Duration(milliseconds: 280),
            curve: Curves.easeOutCubic,
            child: AnimatedOpacity(
              opacity: _visible ? 1 : 0,
              duration: const Duration(milliseconds: 220),
              curve: Curves.easeOut,
              child: island,
            ),
          ),
        ),
      ),
    ]);
  }
}
