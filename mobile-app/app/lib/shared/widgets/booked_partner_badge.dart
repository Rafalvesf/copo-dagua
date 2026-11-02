import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Selo "Contratado na app" com o nome da empresa (2026-11): bem visível
/// por baixo da categoria no Orçamento e em Serviços tratados.
class BookedPartnerBadge extends StatelessWidget {
  final List<String> names;
  const BookedPartnerBadge(this.names, {super.key});

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return Container(
      padding: const EdgeInsets.fromLTRB(6, 4, 10, 4),
      decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(999)),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Icon(Icons.check_circle_rounded, size: 16, color: green),
        const SizedBox(width: 5),
        Flexible(
          child: Text.rich(
            TextSpan(children: [
              TextSpan(text: 'Contratado na app · ', style: TextStyle(fontWeight: FontWeight.w600, color: green)),
              TextSpan(text: names.join(', '), style: TextStyle(fontWeight: FontWeight.w800, color: green)),
            ]),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: AppFontSize.sm + 1),
          ),
        ),
      ]),
    );
  }
}
