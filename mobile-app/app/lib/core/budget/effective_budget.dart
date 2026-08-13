import '../mock/mock_backend.dart';
import '../models/models.dart';

/// Uma categoria de orçamento com o preço dos fornecedores escolhidos
/// na checklist já somado à base estática — e a lista desses
/// fornecedores, para mostrar o pequeno perfil de quem foi escolhido.
class EffectiveBudgetCategory {
  final BudgetCategory base;
  final List<Supplier> chosenSuppliers;

  const EffectiveBudgetCategory({
    required this.base,
    required this.chosenSuppliers,
  });

  String get name => base.name;

  double get chosenTotal =>
      chosenSuppliers.fold(0, (sum, s) => sum + s.startingPrice);

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
/// fornecedores que o utilizador já escolheu na checklist — o custo de
/// cada fornecedor escolhido soma-se à categoria correspondente.
EffectiveBudget computeEffectiveBudget(
  Budget budget,
  List<ChecklistItem> checklistItems,
) {
  final backend = MockBackend.instance;
  final chosenByCategory = <SupplierCategory, List<Supplier>>{};
  for (final item in checklistItems) {
    final supplierId = item.selectedSupplierId;
    if (supplierId == null) continue;
    final supplier = backend.getSupplier(supplierId);
    chosenByCategory.putIfAbsent(supplier.category, () => []).add(supplier);
  }

  return EffectiveBudget(
    total: budget.total,
    categories: [
      for (final base in budget.categories)
        EffectiveBudgetCategory(
          base: base,
          chosenSuppliers: chosenByCategory[base.supplierCategory] ?? const [],
        ),
    ],
  );
}
