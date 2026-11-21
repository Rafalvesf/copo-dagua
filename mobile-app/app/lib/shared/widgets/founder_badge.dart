import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/partners/partner_referrals.dart';
import 'line_icon.dart';

/// Selo "Fundador" dos primeiros parceiros (migração 151).
class FounderBadge extends ConsumerWidget {
  final String partnerId;
  final bool long;
  const FounderBadge(this.partnerId, {super.key, this.long = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final n = ref.watch(founderPartnersProvider).value?[partnerId];
    if (n == null) return const SizedBox.shrink();
    // Etiqueta verde do DESIGN.md (fundo #E6EDE1, texto #3F7A4F, 12
    // negrito), com uma estrela — distinta do visto de "verificado".
    return Tooltip(
      message: 'Um dos primeiros 100 parceiros da À Nossa! (nº $n)',
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: long ? 10 : 8, vertical: long ? 5 : 3),
        decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          const LineIcon(LineIcon.star, size: 11, fill: true, color: Color(0xFF3F7A4F)),
          const SizedBox(width: 4),
          Text(long ? 'Parceiro fundador' : 'Fundador',
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
        ]),
      ),
    );
  }
}
