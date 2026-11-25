import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Categorias — um só desenho nos dois lados da app (pedido do Rafael,
/// 2026-11-25: «alguns ficam desformatados e diferentes»; prancheta
/// «Categorias · desenho fixo»).

/// Pílula de categoria (filtrar ou escolher): 38, cantos 19, texto 14
/// negrito. Escolhida: verde #4F6B4A com texto branco. Não escolhida: [fill]
/// (branca na página, #F2F2F2 dentro de popups), sem contorno.
class CategoryPill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback? onTap;
  final Color fill;
  final int? count;

  /// Ocupa a largura toda que tem (numa grelha que divide o espaço por
  /// igual), com o texto ao centro (pedido 2026-11-25).
  final bool expand;
  const CategoryPill({
    super.key,
    required this.label,
    required this.selected,
    required this.onTap,
    this.fill = Colors.white,
    this.count,
    this.expand = false,
  });

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        child: SnappyTap(
          onTap: onTap ?? () {},
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            height: 38,
            width: expand ? double.infinity : null,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: selected ? AppTheme.accentOliveDark : fill,
              borderRadius: BorderRadius.circular(19),
            ),
            child: Row(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [
              Flexible(
                child: Text(label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
              ),
              if (count != null) ...[
                const SizedBox(width: 8),
                Container(
                  constraints: const BoxConstraints(minWidth: 20),
                  height: 20,
                  padding: const EdgeInsets.symmetric(horizontal: 5),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: selected ? Colors.white : AppTheme.ink,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text('$count',
                      style: TextStyle(
                          fontSize: 12, fontWeight: FontWeight.w700, color: selected ? AppTheme.accentOliveDark : Colors.white)),
                ),
              ],
            ]),
          ),
        ),
      );
}

/// Mosaico de categoria (escolher, em grelha de 3 colunas): 82 de altura,
/// cantos 22, ícone 24 e nome 12 negrito ao centro (até 2 linhas).
/// Escolhido: verde com ícone e texto brancos.
class CategoryTile extends StatelessWidget {
  final String label;
  final IconData icon;
  final bool selected;
  final VoidCallback onTap;
  final Color fill;
  const CategoryTile({
    super.key,
    required this.label,
    required this.icon,
    required this.selected,
    required this.onTap,
    this.fill = Colors.white,
  });

  /// A altura fixa do mosaico (para o `mainAxisExtent` da grelha).
  static const double height = 82;

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            height: height,
            padding: const EdgeInsets.symmetric(horizontal: 6),
            decoration: BoxDecoration(
              color: selected ? AppTheme.accentOliveDark : fill,
              borderRadius: BorderRadius.circular(22),
            ),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, size: 24, color: selected ? Colors.white : AppTheme.accentOliveDark),
              const SizedBox(height: 6),
              Text(label,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, height: 14 / 12, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
            ]),
          ),
        ),
      );
}

/// Grelha de pílulas que divide o espaço por igual ([columns] por linha),
/// cada uma com o texto ao centro (escolher categorias num popup).
class CategoryPillGrid extends StatelessWidget {
  final List<Widget> children;
  final int columns;
  const CategoryPillGrid({super.key, required this.children, this.columns = 2});

  @override
  Widget build(BuildContext context) => GridView(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        padding: EdgeInsets.zero,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: columns,
          mainAxisSpacing: 8,
          crossAxisSpacing: 8,
          mainAxisExtent: 38,
        ),
        children: children,
      );
}
