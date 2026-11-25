import 'package:flutter/material.dart';
import '../hero_icons.dart';

import '../../core/theme/app_theme.dart';
import 'floating_bottom_nav.dart' show kNavRadius;
import 'snappy_tap.dart';
import 'v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

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

  /// Pílula verde por baixo do nome («Responde em ~1 h», «Online»), como
  /// na prancheta «Conversa» (2026-11-24). Fica no lugar de [subtitle].
  final String? pill;

  /// Visto verde de parceiro verificado ao lado do nome (DESIGN §6).
  final bool verified;

  /// Mais opções no «⋯» antes de «Denunciar» («Pedir alteração»).
  final List<(String, VoidCallback)> menu;

  const ChatHeader({
    super.key,
    required this.name,
    this.avatarUrl,
    this.subtitle,
    this.subtitleOnline = false,
    this.onOpenProfile,
    this.onReport,
    this.leading,
    this.pill,
    this.verified = false,
    this.menu = const [],
  });

  @override
  Widget build(BuildContext context) {
    final info = Row(
      children: [
        leading ?? V2Avatar(name, size: 40, imageUrl: avatarUrl, flat: true),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(children: [
                Flexible(
                  child: Text(name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
                if (verified) ...[
                  const SizedBox(width: 4),
                  const Icon(Hi.checkBadge, size: 18, color: AppTheme.brandGreen, semanticLabel: 'Verificado'),
                ],
              ]),
              if (pill != null)
                Padding(
                  padding: const EdgeInsets.only(top: 3),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
                    child: Text(pill!,
                        maxLines: 1,
                        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
                  ),
                )
              else if (subtitle != null)
                Text(subtitle!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w400,
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
              // Botão redondo preto, ícone branco sólido (DESIGN.md §2).
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: icon,
            ),
          ),
        );
    return Container(
      // Prancheta «Conversa» (2026-11-24): branco, cantos 35 em baixo.
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.vertical(bottom: Radius.circular(kNavRadius)),
        boxShadow: [BoxShadow(color: AppTheme.ink.withValues(alpha: 0.06), blurRadius: 14, offset: const Offset(0, 4))],
      ),
      padding: EdgeInsets.fromLTRB(20, MediaQuery.paddingOf(context).top + 20, 20, 14),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(
          children: [
            roundBtn(const Icon(Hi.arrowLeft, size: 20, color: Colors.white), 'Voltar', () => Navigator.of(context).maybePop()),
            const SizedBox(width: 12),
            Expanded(child: onOpenProfile == null ? info : SnappyTap(onTap: onOpenProfile, child: info)),
            if (onReport != null || menu.isNotEmpty) ...[
              const SizedBox(width: 12),
              IslandMenuButton<String>(
                tooltip: 'Mais opções',
                position: PopupMenuPosition.under,
                onSelected: (v) {
                  if (v == 'report') {
                    onReport?.call();
                    return;
                  }
                  for (final (label, action) in menu) {
                    if (label == v) action();
                  }
                },
                itemBuilder: (_) => [
                  for (final (label, _) in menu) PopupMenuItem(value: label, child: Text(label)),
                  if (onReport != null) const PopupMenuItem(value: 'report', child: Text('Denunciar')),
                ],
                child: Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                  child: const Icon(Hi.ellipsisHorizontal, size: 20, color: Colors.white),
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
    // Prancheta «Conversa» (2026-11-24): ilha 52 com o calendário, uma só
    // linha («Casamento · Sáb, 12 jun · Quinta do Freixo») e «Ver evento»
    // preto 36.
    final island = Container(
      height: 52,
      padding: const EdgeInsets.fromLTRB(16, 0, 8, 0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(kNavRadius),
        boxShadow: [BoxShadow(color: AppTheme.ink.withValues(alpha: 0.12), blurRadius: 24, offset: const Offset(0, 8))],
      ),
      child: Row(children: [
        const Icon(Hi.calendar, size: 18, color: AppTheme.inkMuted),
        const SizedBox(width: 10),
        Expanded(
          child: Text.rich(
            TextSpan(children: [
              TextSpan(text: widget.title!, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (widget.subtitle != null) TextSpan(text: ' · ${widget.subtitle!}'),
            ]),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
        ),
        if (widget.action != null && widget.onAction != null) ...[
          const SizedBox(width: 10),
          SnappyTap(
            onTap: widget.onAction,
            child: Container(
              height: 36,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              alignment: Alignment.center,
              decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
              child: Text(widget.action!,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
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
        top: 12,
        left: AppTheme.screenMargin,
        right: AppTheme.screenMargin,
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
