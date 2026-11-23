import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';
import 'scroll_aware_back_button.dart' show SafeScrollOffset;

/// Topo reduzido (mockup «Topo reduzido», D, dos parceiros — aplicado aos
/// eventos e aos perfis, pedido do Rafael 2026-11-22): depois de passar a
/// capa, aparece uma **barra branca** (cantos 35 em baixo, sombra da navbar)
/// com a foto 32, o nome 16 e a meta 13; por baixo, **atalhos para as
/// secções** em pílulas 32 brancas (a da secção onde estás a preto) que
/// levam à secção.
///
/// Vai num `Stack` por cima da lista, **por baixo** dos botões fixos da
/// página (a seta de voltar à esquerda): [leftReserve] deixa-lhes o lugar.
class ReducedTopBar extends StatelessWidget {
  final ScrollController scroll;

  /// A partir de quantos px de scroll a barra aparece (≈ a altura da capa).
  final double showAfter;
  final Widget thumb;
  final String title;
  final String meta;
  final List<Widget> actions;

  /// Botão à esquerda dentro da barra (quando a página não tem a seta fixa).
  final Widget? leading;
  final double leftReserve;
  final List<(String, GlobalKey)> sections;

  const ReducedTopBar({
    super.key,
    required this.scroll,
    required this.showAfter,
    required this.thumb,
    required this.title,
    required this.meta,
    this.actions = const [],
    this.leading,
    this.leftReserve = 16 + 44 + 10,
    this.sections = const [],
  });

  static const _barBody = 68.0;

  double? _top(GlobalKey k) {
    final box = k.currentContext?.findRenderObject() as RenderBox?;
    if (box == null || !box.attached || !box.hasSize || box.size.height <= 0) return null;
    try {
      return box.localToGlobal(Offset.zero).dy;
    } catch (_) {
      return null;
    }
  }

  void _go(GlobalKey k, double line) {
    final top = _top(k);
    if (top == null || !scroll.hasClients) return;
    final target = (scroll.safeOffset + top - line).clamp(0.0, scroll.positions.last.maxScrollExtent);
    scroll.animateTo(target, duration: const Duration(milliseconds: 450), curve: Curves.easeOutCubic);
  }

  @override
  Widget build(BuildContext context) {
    final topPad = MediaQuery.paddingOf(context).top;
    return AnimatedBuilder(
      animation: scroll,
      builder: (context, _) {
        final y = math.max(0.0, scroll.safeOffset);
        final show = ((y - showAfter) / 40).clamp(0.0, 1.0).toDouble();
        if (show <= 0) return const SizedBox.shrink();
        final barBottom = topPad + _barBody;
        // Sem a lista de secções por baixo da barra (pedido do Rafael,
        // 2026-11-23): fica só a barra branca, bloqueada no topo.
        final present = const <(String, GlobalKey)>[];
        final line = barBottom + (present.isEmpty ? 8 : 50);
        var active = 0;
        for (var i = 0; i < present.length; i++) {
          final t = _top(present[i].$2);
          if (t != null && t <= line + 16) active = i;
        }
        return IgnorePointer(
          ignoring: show < 1,
          child: Opacity(
            opacity: show,
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Container(
                height: barBottom,
                padding: EdgeInsets.fromLTRB(leading != null ? 16 : leftReserve, topPad + 12, 16, 12),
                decoration: const BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.vertical(bottom: Radius.circular(35)),
                  boxShadow: [BoxShadow(color: Color(0x1F171713), blurRadius: 24, offset: Offset(0, 8))],
                ),
                child: Row(children: [
                  if (leading != null) ...[leading!, const SizedBox(width: 10)],
                  SizedBox(width: 32, height: 32, child: ClipOval(child: thumb)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text(title, maxLines: 1, overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (meta.isNotEmpty)
                        Text(meta, maxLines: 1, overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ]),
                  ),
                  for (final a in actions) ...[const SizedBox(width: 8), a],
                ]),
              ),
              if (present.isNotEmpty)
                Container(
                  height: 50,
                  color: AppTheme.background,
                  padding: const EdgeInsets.only(top: 10, bottom: 8),
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                    itemCount: present.length,
                    separatorBuilder: (context, i) => const SizedBox(width: 6),
                    itemBuilder: (context, i) {
                      final on = i == active;
                      return SnappyTap(
                        onTap: () => _go(present[i].$2, line),
                        semanticLabel: present[i].$1,
                        child: Container(
                          height: 32,
                          padding: const EdgeInsets.symmetric(horizontal: 12),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(color: on ? AppTheme.ink : Colors.white, borderRadius: BorderRadius.circular(16)),
                          child: Text(present[i].$1,
                              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
                        ),
                      );
                    },
                  ),
                ),
            ]),
          ),
        );
      },
    );
  }
}

/// Botão redondo preto 44 com o ícone branco 20 (§2), para as ações da
/// barra reduzida.
class ReducedTopAction extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const ReducedTopAction(this.icon, {super.key, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: label,
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          child: Icon(icon, size: 20, color: Colors.white),
        ),
      );
}
