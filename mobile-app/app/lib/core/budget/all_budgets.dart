import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import '../event/event_controller.dart';

/// Orçamento de um evento no «Todos» do Orçamento (pedido 2026-11-23).
typedef EventBudgetLine = ({String eventId, double total, double spentByHand, double unpaidByHand});

/// Tetos, gastos escritos à mão e despesas por pagar de todos os eventos
/// que organizas — só se lê quando se escolhe «Todos» (o resto da página
/// usa o evento aberto). As reservas entram no ecrã, a partir das reservas
/// já carregadas.
final allEventBudgetsProvider = FutureProvider.autoDispose<List<EventBudgetLine>>((ref) async {
  final events = ref.watch(eventControllerProvider.select((s) => s.events));
  if (events.isEmpty) return const [];
  final ids = [for (final e in events) e.id];
  final budgetsF = supabase.from('budgets').select('wedding_id, total').inFilter('wedding_id', ids).then((r) => r);
  final catsF = supabase.from('budget_categories').select('wedding_id, amount').inFilter('wedding_id', ids).then((r) => r);
  final expF = supabase.from('expenses').select('wedding_id, amount, paid').inFilter('wedding_id', ids).then((r) => r);
  final budgets = {
    for (final r in (await budgetsF).cast<Map<String, dynamic>>()) r['wedding_id'] as String: (r['total'] as num).toDouble(),
  };
  final spent = <String, double>{};
  for (final r in (await catsF).cast<Map<String, dynamic>>()) {
    final id = r['wedding_id'] as String;
    spent[id] = (spent[id] ?? 0) + ((r['amount'] as num?)?.toDouble() ?? 0);
  }
  final unpaid = <String, double>{};
  for (final r in (await expF).cast<Map<String, dynamic>>()) {
    if (r['paid'] == true) continue;
    final id = r['wedding_id'] as String;
    unpaid[id] = (unpaid[id] ?? 0) + ((r['amount'] as num?)?.toDouble() ?? 0);
  }
  return [
    for (final e in events)
      (
        eventId: e.id,
        total: budgets[e.id] ?? e.estimatedBudget ?? 0,
        spentByHand: spent[e.id] ?? 0,
        unpaidByHand: unpaid[e.id] ?? 0,
      ),
  ];
});
