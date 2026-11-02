import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/partners/partner_referrals.dart';
import '../../core/theme/app_theme.dart';

/// Selo "Fundador" dos primeiros parceiros (migração 151).
class FounderBadge extends ConsumerWidget {
  final String partnerId;
  final bool long;
  const FounderBadge(this.partnerId, {super.key, this.long = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final n = ref.watch(founderPartnersProvider).value?[partnerId];
    if (n == null) return const SizedBox.shrink();
    final green = AppTheme.accentOliveDark;
    return Tooltip(
      message: 'Um dos primeiros 100 parceiros da À Nossa!',
      child: Container(
        padding: const EdgeInsets.fromLTRB(5, 2, 8, 2),
        decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(Icons.workspace_premium_rounded, size: 13, color: green),
          const SizedBox(width: 3),
          Text(long ? 'Parceiro Fundador' : 'Fundador',
              style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w800, color: green)),
        ]),
      ),
    );
  }
}
