import 'package:flutter/material.dart';

import '../core/theme/app_theme.dart';

const _tagPalette = [
  AppColors.pink,
  AppColors.yellow,
  AppColors.blue,
  AppColors.purple,
  AppColors.green,
  AppColors.gray,
];

/// Cor pastel determinística para uma etiqueta de texto livre (ex:
/// categoria de uma tarefa) — mesmo padrão de `colorForPartnerCategory`
/// (`features/partners/partner_style.dart`), mas para strings
/// arbitrárias em vez de um enum fixo, para categorias de tarefas
/// criadas pelo utilizador continuarem a ter uma cor consistente sem
/// precisar de mapear cada nome à mão.
Color colorForTagLabel(String label) {
  return _tagPalette[label.hashCode.abs() % _tagPalette.length];
}
