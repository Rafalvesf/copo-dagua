import '../models/models.dart';

/// Categoria de orçamento — antes somava aqui o preço dos parceiros
/// escolhidos na Checklist a um valor estático de [BudgetCategory],
/// via `MockBackend.getPartner()` (parceiros fictícios). Removido ao
/// ligar o Marketplace a dados reais: [BudgetCategory.amount] já é a
/// única fonte do gasto por categoria, e não havia nenhum ecrã capaz
/// de mostrar a lista de parceiros escolhidos mesmo antes disto —
/// `chosenPartners` nunca chegou a ser lido em `budget_screen.dart`.
/// Ver `ROADMAP.md`, 2026-08-31, para o âmbito completo desta ronda.
class EffectiveBudgetCategory {
  final BudgetCategory base;

  const EffectiveBudgetCategory({required this.base});

  String get name => base.name;

  double get amount => base.amount;

  double get allocated => base.allocated;
}

class EffectiveBudget {
  final double total;
  final List<EffectiveBudgetCategory> categories;

  const EffectiveBudget({required this.total, required this.categories});

  double get spent => categories.fold(0, (sum, c) => sum + c.amount);

  double get remaining => total - spent;

  double get progress => total == 0 ? 0 : (spent / total).clamp(0, 1);
}

EffectiveBudget computeEffectiveBudget(
  Budget budget,
  List<ChecklistItem> checklistItems,
) {
  return EffectiveBudget(
    total: budget.total,
    categories: [
      for (final base in budget.categories) EffectiveBudgetCategory(base: base),
    ],
  );
}
