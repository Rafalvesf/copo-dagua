import '../mock/mock_backend.dart';
import '../models/models.dart';

/// Uma categoria de orçamento com o preço dos parceiros escolhidos
/// na checklist já somado à base estática — e a lista desses
/// parceiros, para mostrar o pequeno perfil de quem foi escolhido.
class EffectiveBudgetCategory {
  final BudgetCategory base;
  final List<Partner> chosenPartners;

  const EffectiveBudgetCategory({
    required this.base,
    required this.chosenPartners,
  });

  String get name => base.name;

  double get chosenTotal =>
      chosenPartners.fold(0, (sum, s) => sum + s.startingPrice);

  double get amount => base.amount + chosenTotal;
}

class EffectiveBudget {
  final double total;
  final List<EffectiveBudgetCategory> categories;

  const EffectiveBudget({required this.total, required this.categories});

  double get spent => categories.fold(0, (sum, c) => sum + c.amount);

  double get remaining => total - spent;

  double get progress => total == 0 ? 0 : (spent / total).clamp(0, 1);
}

/// Combina o orçamento base (estático, por categoria) com os
/// parceiros que o utilizador já escolheu na checklist — o custo de
/// cada parceiro escolhido soma-se à categoria correspondente.
EffectiveBudget computeEffectiveBudget(
  Budget budget,
  List<ChecklistItem> checklistItems,
) {
  final backend = MockBackend.instance;
  final chosenByCategory = <PartnerCategory, List<Partner>>{};
  for (final item in checklistItems) {
    final partnerId = item.selectedPartnerId;
    if (partnerId == null) continue;
    final partner = backend.getPartner(partnerId);
    chosenByCategory.putIfAbsent(partner.category, () => []).add(partner);
  }

  return EffectiveBudget(
    total: budget.total,
    categories: [
      for (final base in budget.categories)
        EffectiveBudgetCategory(
          base: base,
          chosenPartners: chosenByCategory[base.partnerCategory] ?? const [],
        ),
    ],
  );
}
