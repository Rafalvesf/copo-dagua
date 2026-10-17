import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/menu_style.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Aparência do menu" (098, pedido 2026-10-17): escolher o estilo do menu
/// principal (Clássico por defeito, Autocolantes, Polaroid Mural, Polaroid
/// Estendal) e a cor (verde-eucalipto por defeito, as cores dos eventos e
/// um rosa). Grava logo ao tocar.
class MenuStyleScreen extends ConsumerWidget {
  const MenuStyleScreen({super.key});

  static IconData _iconFor(MenuLayout l) => switch (l) {
        MenuLayout.classic => Icons.dashboard_outlined,
        MenuLayout.stickers => Icons.emoji_objects_outlined,
        MenuLayout.mural => Icons.push_pin_outlined,
        MenuLayout.clothesline => Icons.photo_outlined,
      };

  Future<void> _save(BuildContext context, WidgetRef ref, {MenuLayout? layout, MenuColor? color}) async {
    try {
      await saveMenuStyle(ref, layout: layout, color: color);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
      }
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final style = ref.watch(currentMenuStyleProvider);
    final accent = style.color.accent;
    Widget swatches(List<MenuColor> colors) =>
                  Wrap(
                    spacing: 14,
                    runSpacing: 16,
                    children: [
                      for (final c in colors)
                        SizedBox(
                          width: 64,
                          child: Semantics(
                            button: true,
                            selected: c.id == style.color.id,
                            label: c.label,
                            child: SnappyTap(
                              onTap: () => _save(context, ref, color: c),
                              child: Column(
                                children: [
                                  AnimatedContainer(
                                    duration: const Duration(milliseconds: 160),
                                    width: 52,
                                    height: 52,
                                    decoration: BoxDecoration(
                                      color: c.color,
                                      shape: BoxShape.circle,
                                      border: Border.all(color: Colors.white, width: 3),
                                      boxShadow: [
                                        BoxShadow(
                                          color: c.id == style.color.id ? c.color : const Color(0x22171713),
                                          spreadRadius: c.id == style.color.id ? 2 : 0,
                                          blurRadius: c.id == style.color.id ? 0 : 8,
                                        ),
                                      ],
                                    ),
                                    child: c.id == style.color.id ? const Icon(Icons.check, color: c.on, size: 22) : null,
                                  ),
                                  const SizedBox(height: 6),
                                  Text(c.label, textAlign: TextAlign.center, style: const TextStyle(fontSize: 11, color: AppTheme.ink)),
                                ],
                              ),
                            ),
                          ),
                        ),
                    ],
                  );
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const PageHeader(title: 'Aparência do menu', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 60),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text('Estilo', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 4),
                  const Text('Como aparece a página principal do teu evento.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  const SizedBox(height: 12),
                  for (final l in MenuLayout.values) ...[
                    SnappyTap(
                      onTap: () => _save(context, ref, layout: l),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 160),
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: l == style.layout ? style.color.tint : AppTheme.surface,
                          borderRadius: BorderRadius.circular(18),
                          border: Border.all(color: l == style.layout ? accent : Colors.transparent, width: 1.5),
                        ),
                        child: Row(
                          children: [
                            Container(
                              width: 44,
                              height: 44,
                              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
                              child: Icon(_iconFor(l), color: accent),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    l == MenuLayout.classic ? '${l.label} (recomendado)' : l.label,
                                    style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                  ),
                                  const SizedBox(height: 2),
                                  Text(l.description, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                                ],
                              ),
                            ),
                            if (l == style.layout) Icon(Icons.check_circle, color: accent),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 10),
                  ],
                  const SizedBox(height: 18),
                  const Text('Cor', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 4),
                  const Text('O verde-eucalipto é a cor de todos os eventos; podes trocar.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  const SizedBox(height: 14),
                  const Text('Fortes', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  const SizedBox(height: 10),
                  swatches(MenuColor.strong),
                  const SizedBox(height: 20),
                  const Text('Pastel', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  const SizedBox(height: 10),
                  swatches(MenuColor.pastels),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
