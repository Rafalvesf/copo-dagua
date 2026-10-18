import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Ícone "autocolante" dos menus novos (canvas, 2026-10-18): quadrado
/// branco ligeiramente inclinado, com sombra, e o ícone na cor do evento.
class StickerIcon extends StatelessWidget {
  final IconData icon;
  final double turns;
  final double size;
  final Color? color;
  const StickerIcon(this.icon, {super.key, this.turns = -0.016, this.size = 40, this.color});

  /// Inclinações alternadas para uma lista (como no canvas).
  static double tilt(int index) => const [-0.014, 0.011, -0.008, 0.016][index % 4];

  static const shadow = [
    BoxShadow(color: Color(0x14171713), offset: Offset(0, 3)),
    BoxShadow(color: Color(0x1A171713), blurRadius: 12, offset: Offset(0, 4)),
  ];

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: turns * 6.283,
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(size * 0.35), boxShadow: shadow),
        child: Icon(icon, size: size * 0.55, color: color ?? AppTheme.accentOliveDark),
      ),
    );
  }
}

/// Cartão branco dos ecrãs redesenhados: linha verde fina e sombra suave.
BoxDecoration whiteLineCard({double radius = 22, Color? line, double width = 1}) => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: line ?? AppTheme.accentOliveDark.withValues(alpha: 0.45), width: width),
      boxShadow: const [
        BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6)),
        BoxShadow(color: Color(0x0D171713), blurRadius: 3, offset: Offset(0, 1)),
      ],
    );

const _mesesCurtos = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

/// Data num quadrado branco inclinado ("15 / NOV"), dos pagamentos.
class DateSticker extends StatelessWidget {
  final DateTime date;
  final double turns;
  final Color monthColor;
  const DateSticker({super.key, required this.date, this.turns = -0.014, this.monthColor = const Color(0xFFA3412E)});

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: turns * 6.283,
      child: Container(
        width: 44,
        height: 44,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), boxShadow: StickerIcon.shadow),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('${date.day}',
                style: const TextStyle(fontSize: 15, height: 16 / 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(_mesesCurtos[date.month - 1],
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: monthColor)),
          ],
        ),
      ),
    );
  }
}
