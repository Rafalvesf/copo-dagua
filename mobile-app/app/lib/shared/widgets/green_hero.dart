import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Cartão verde do topo dos ecrãs redesenhados (canvas 2026-10-18):
/// etiqueta em maiúsculas, número grande, barra e etiquetas por baixo,
/// com três ícones decorativos a branco transparente.
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
    this.doodles = const [Icons.favorite_border, Icons.auto_awesome_outlined, Icons.eco_outlined],
  });

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    const faded = Color(0x38FFFFFF);
    return Container(
      width: double.infinity,
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: c,
        borderRadius: BorderRadius.circular(28),
        boxShadow: const [BoxShadow(color: Color(0x24171713), blurRadius: 28, offset: Offset(0, 10))],
      ),
      child: Stack(
        children: [
          if (doodles.isNotEmpty)
            Positioned(right: 18, top: 16, child: Transform.rotate(angle: 0.24, child: Icon(doodles[0], size: 26, color: faded))),
          if (doodles.length > 1)
            Positioned(right: 70, bottom: 18, child: Transform.rotate(angle: -0.2, child: Icon(doodles[1], size: 22, color: faded))),
          if (doodles.length > 2)
            Positioned(right: 150, top: 12, child: Transform.rotate(angle: 0.14, child: Icon(doodles[2], size: 16, color: faded))),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label,
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: Colors.white)),
                // Valores compridos (nomes) em 28 px, como no canvas; sem
                // valor, só a etiqueta e o conteúdo (ex.: mensagem).
                if (value.isNotEmpty) ...[
                const SizedBox(height: 4),
                Wrap(
                  crossAxisAlignment: WrapCrossAlignment.end,
                  spacing: 8,
                  children: [
                    Text(value,
                        style: value.length > 12
                            ? const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: Colors.white)
                            : const TextStyle(fontSize: 40, height: 44 / 40, fontWeight: FontWeight.w700, color: Colors.white)),
                    if (suffix != null)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 6),
                        child: Text(suffix!, style: const TextStyle(fontSize: 14, color: Colors.white)),
                      ),
                  ],
                ),
                ],
                if (progress != null) ...[
                  const SizedBox(height: 14),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(999),
                    child: LinearProgressIndicator(
                      value: progress!.clamp(0.0, 1.0),
                      minHeight: 10,
                      backgroundColor: Colors.white.withValues(alpha: 0.28),
                      color: Colors.white,
                    ),
                  ),
                ],
                if (footer != null) ...[const SizedBox(height: 14), footer!],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Etiqueta do cartão verde: branca sólida (destaque) ou translúcida.
class HeroPill extends StatelessWidget {
  final String text;
  final bool solid;
  const HeroPill(this.text, {super.key, this.solid = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: solid ? Colors.white : Colors.white.withValues(alpha: 0.2),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(text,
          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: solid ? AppTheme.accentOliveDark : Colors.white)),
    );
  }
}

/// Título de secção (18, negrito) com um extra opcional à direita.
class SectionTitle extends StatelessWidget {
  final String text;
  final Widget? trailing;
  const SectionTitle(this.text, {super.key, this.trailing});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 24, bottom: 12),
      child: Row(
        children: [
          Text(text, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (trailing != null) ...[const SizedBox(width: 8), Expanded(child: Align(alignment: Alignment.centerRight, child: trailing!))],
        ],
      ),
    );
  }
}
