import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/wedding/wedding_controller.dart';
import '../text_case.dart';
import 'page_kit.dart';

/// Barra de eventos das Reservas e do Orçamento (pedido 2026-11-23):
/// «Todos» + uma pílula por cada evento que organizas. [selected] é o id do
/// evento escolhido (null = «Todos»). Com um só evento não aparece.
class EventPills extends ConsumerWidget {
  final String? selected;
  final ValueChanged<String?> onSelect;
  final double top;
  const EventPills({super.key, required this.selected, required this.onSelect, this.top = 16});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final events = ref.watch(weddingControllerProvider.select((s) => s.events));
    if (events.length < 2) return const SizedBox.shrink();
    return KitPills(top: top, [
      KitPill(label: 'Todos', selected: selected == null, onTap: () => onSelect(null)),
      for (final e in events)
        KitPill(label: capFirst(e.displayNames), selected: selected == e.id, onTap: () => onSelect(e.id)),
    ]);
  }
}
