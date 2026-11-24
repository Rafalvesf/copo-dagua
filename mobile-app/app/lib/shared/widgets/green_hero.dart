import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'page_kit.dart';

/// Cartão de resumo do topo (antes verde; desde os mockups de 2026-11-14
/// é o cartão branco das «Páginas do evento»): rótulo em maiúsculas,
/// número 40, unidade 13, barra verde de 10 e etiquetas por baixo.
/// [doodles] ficou só por compatibilidade — já não se desenham.
class GreenHero extends StatelessWidget {
  final String label;
  final String value;
  final String? suffix;
  final double? progress;
  final Widget? footer;
  final List<IconData> doodles;

  const GreenHero({
    super.key,
    required this.label,
    required this.value,
    this.suffix,
    this.progress,
    this.footer,
    this.doodles = const [],
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(),
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          if (value.isNotEmpty) ...[
            const SizedBox(height: 8),
            Wrap(
              crossAxisAlignment: WrapCrossAlignment.end,
              spacing: 8,
              children: [
                Text(value,
                    style: value.length > 12
                        ? const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)
                        : const TextStyle(fontSize: 40, height: 44 / 40, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (suffix != null)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: Text(suffix!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ),
              ],
            ),
          ],
          if (progress != null) ...[const SizedBox(height: 12), KitBar(progress!)],
          if (footer != null) ...[const SizedBox(height: 12), footer!],
        ],
      ),
    );
  }
}

/// Etiqueta do resumo: verde quando é o destaque, neutra no resto, ou
/// pendente (linha amarela) — as etiquetas da DESIGN.md §6.
class HeroPill extends StatelessWidget {
  final String text;
  final bool solid;
  final bool pending;
  const HeroPill(this.text, {super.key, this.solid = false, this.pending = false});

  @override
  Widget build(BuildContext context) => KitTag(
        text,
        kind: pending ? KitTagKind.pending : (solid ? KitTagKind.green : KitTagKind.neutral),
      );
}

/// Título de secção (22, negrito) com um extra opcional à direita.
class SectionTitle extends StatelessWidget {
  final String text;
  final Widget? trailing;
  const SectionTitle(this.text, {super.key, this.trailing});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 12, bottom: 12),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        // Linha mais grossa entre secções diferentes (pedido 2026-11-21).
        const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
        const SizedBox(height: 16),
        Row(
        children: [
          // Títulos de secção como "Os meus eventos" / "Descobrir" (22, negrito).
          Text(text, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (trailing != null) ...[const SizedBox(width: 8), Expanded(child: Align(alignment: Alignment.centerRight, child: trailing!))],
        ],
      ),
      ]),
    );
  }
}
