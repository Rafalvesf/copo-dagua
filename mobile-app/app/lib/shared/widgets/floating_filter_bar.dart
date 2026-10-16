import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Uma opção dos filtros.
class FilterBarItem {
  final String label;
  final IconData? icon;
  final int? count;

  const FilterBarItem(this.label, {this.icon, this.count});
}

/// Filtros como "segunda navbar" (redesign 2026-10). Pedidos do
/// utilizador: "coloca como segunda navbar o filter picker" e "a navbar
/// principal deve ter uma cor verde como o dos filtros e ambas
/// conectadas".
///
/// - Em ecrãs com navbar, passa-se [FilterChipsRow] como `top` da
///   `FloatingBottomNav` / `GuestBottomNav` — ficam uma só ilha verde,
///   filtros em cima e separadores em baixo.
/// - Em ecrãs sem navbar (Orçamento, Convidados), usa-se
///   [FloatingFilterBar], a mesma ilha verde só com os filtros.
class FilterChipsRow extends StatelessWidget {
  final List<FilterBarItem> items;
  final int selected;
  final ValueChanged<int> onSelected;

  const FilterChipsRow({
    super.key,
    required this.items,
    required this.selected,
    required this.onSelected,
  });

  /// Altura da linha de filtros (6 + 40 + 6).
  static const double height = 52;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
        itemCount: items.length,
        separatorBuilder: (context, index) => const SizedBox(width: 4),
        itemBuilder: (context, index) => _FilterBarChip(
          item: items[index],
          selected: index == selected,
          onTap: () => onSelected(index),
        ),
      ),
    );
  }
}

/// Ilha verde só com filtros, no lugar da navbar (ecrãs sem navbar).
/// Usar dentro de um `Stack` com `Positioned(left: 0, right: 0, bottom: 0)`.
class FloatingFilterBar extends StatelessWidget {
  final List<FilterBarItem> items;
  final int selected;
  final ValueChanged<int> onSelected;

  const FloatingFilterBar({
    super.key,
    required this.items,
    required this.selected,
    required this.onSelected,
  });

  /// Altura da navbar sem filtros: 10 + 50 + 10.
  static const double _navHeight = 70;

  /// Margem inferior a dar a listas que passam por baixo da ilha:
  /// [aboveNav] `true` quando os filtros estão ligados à navbar.
  static double bottomPadding({required bool aboveNav}) =>
      26 + FilterChipsRow.height + (aboveNav ? _navHeight : 0) + 24;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: false,
      minimum: const EdgeInsets.fromLTRB(16, 0, 16, 26),
      child: Container(
        decoration: BoxDecoration(
          color: AppTheme.accentOliveDark,
          borderRadius: BorderRadius.circular(AppRadius.xxl),
          boxShadow: AppTheme.navBarShadow,
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(AppRadius.xxl),
          child: FilterChipsRow(
            items: items,
            selected: selected,
            onSelected: onSelected,
          ),
        ),
      ),
    );
  }
}

class _FilterBarChip extends StatelessWidget {
  final FilterBarItem item;
  final bool selected;
  final VoidCallback onTap;

  const _FilterBarChip({
    required this.item,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    // Sobre o verde: selecionado = pílula branca com texto verde;
    // restantes = texto branco translúcido.
    final fg = selected
        ? AppTheme.accentOliveDark
        : Colors.white.withValues(alpha: 0.82);
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          curve: Curves.easeOut,
          height: 40,
          padding: EdgeInsets.only(
            left: 14,
            right: item.count == null ? 14 : 6,
          ),
          decoration: BoxDecoration(
            color: selected ? Colors.white : Colors.transparent,
            borderRadius: BorderRadius.circular(AppRadius.pill),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (item.icon != null) ...[
                Icon(item.icon, size: 18, color: fg),
                const SizedBox(width: 6),
              ],
              Text(
                item.label,
                style: TextStyle(
                  fontSize: AppFontSize.base,
                  fontWeight: selected ? FontWeight.w700 : FontWeight.w400,
                  color: fg,
                ),
              ),
              if (item.count != null) ...[
                const SizedBox(width: 6),
                Container(
                  constraints: const BoxConstraints(minWidth: 22),
                  height: 22,
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: selected
                        ? AppTheme.accentOliveDark.withValues(alpha: 0.12)
                        : Colors.white.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                  ),
                  child: Text(
                    '${item.count}',
                    style: TextStyle(
                      fontSize: AppFontSize.xs,
                      fontWeight: FontWeight.w700,
                      color: fg,
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
