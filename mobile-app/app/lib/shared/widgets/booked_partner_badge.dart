import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Empresa contratada na app, por baixo da categoria no Orçamento e em
/// Serviços tratados (2026-11). Só ícone pequeno + nome, para não cortar;
/// cada empresa é uma pílula que abre as Reservas.
class BookedPartnerBadge extends StatelessWidget {
  final List<String> names;
  const BookedPartnerBadge(this.names, {super.key});

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return Wrap(spacing: 6, runSpacing: 6, children: [
      for (final n in names)
        Semantics(
          button: true,
          label: 'Contratado na app: $n. Abrir reservas',
          child: SnappyTap(
            onTap: () => context.push('/bookings'),
            child: Container(
              constraints: const BoxConstraints(minHeight: 32),
              padding: const EdgeInsets.fromLTRB(8, 5, 6, 5),
              decoration: BoxDecoration(
                color: AppTheme.accentTint,
                borderRadius: BorderRadius.circular(999),
                border: Border.all(color: green.withValues(alpha: 0.25)),
              ),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Icon(Hi.checkCircle, size: 13, color: green),
                const SizedBox(width: 5),
                Flexible(
                  child: Text(n,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: AppFontSize.sm + 2, fontWeight: FontWeight.w800, color: green)),
                ),
                Icon(Hi.chevronRight, size: 16, color: green),
              ]),
            ),
          ),
        ),
    ]);
  }
}
