import 'dart:ui';

/// Paleta pastel para o dress code (pedido 2026-10-17: "oferece opção
/// dos organizadores escolherem entre opções de cores pastel"). Guardada
/// em `weddings.theme_colors` como hex ("#RRGGBB").
class PastelColor {
  final String hex;
  final String name;
  const PastelColor(this.hex, this.name);

  Color get color => colorFromHex(hex);
}

const pastelPalette = <PastelColor>[
  PastelColor('#DDE5D3', 'Salva'),
  PastelColor('#CFE8D8', 'Menta'),
  PastelColor('#C8DDF0', 'Azul céu'),
  PastelColor('#B9C9DE', 'Azul pó'),
  PastelColor('#D9CCEB', 'Lavanda'),
  PastelColor('#E8C9E0', 'Lilás'),
  PastelColor('#F3D1D6', 'Rosa'),
  PastelColor('#E9B8BE', 'Rosa velho'),
  PastelColor('#F4C7B8', 'Coral'),
  PastelColor('#F7D6BF', 'Pêssego'),
  PastelColor('#F7EACA', 'Manteiga'),
  PastelColor('#F3E9D2', 'Champanhe'),
  PastelColor('#EADFCB', 'Areia'),
  PastelColor('#E6E0D2', 'Pérola'),
];

/// Máximo de cores escolhidas.
const maxDressColors = 5;

Color colorFromHex(String hex) {
  var v = hex.replaceAll('#', '');
  if (v.length == 6) v = 'FF$v';
  return Color(int.tryParse(v, radix: 16) ?? 0xFFCCCCCC);
}

/// Nome da cor da paleta, ou `null` se for uma cor fora dela.
String? pastelName(String hex) {
  for (final p in pastelPalette) {
    if (p.hex.toUpperCase() == hex.toUpperCase()) return p.name;
  }
  return null;
}
