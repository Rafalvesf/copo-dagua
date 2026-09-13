import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
import '../wedding/wedding_controller.dart';

class BudgetState {
  final bool loading;
  final Budget? budget;

  const BudgetState({this.loading = false, this.budget});

  BudgetState copyWith({bool? loading, Budget? budget}) {
    return BudgetState(
      loading: loading ?? this.loading,
      budget: budget ?? this.budget,
    );
  }
}

BudgetCategory _categoryFromRow(Map<String, dynamic> row) => BudgetCategory(
  name: row['name'] as String,
  amount: (row['amount'] as num).toDouble(),
  partnerCategory: (row['partner_category'] as String?) == null
      ? null
      : PartnerCategory.values.byName(row['partner_category'] as String),
  allocated: (row['allocated'] as num).toDouble(),
);

/// Liga-se às tabelas reais `budgets`/`budget_categories`
/// (`database/migrations/033_budget.sql`) — substitui
/// `MockBackend.getBudget/updateBudgetTotal`. `.maybeSingle()` em vez
/// de `.single()` de propósito: um casamento real recém-criado ainda
/// não tem nenhuma linha em `budgets` (o mock antigo, ao contrário,
/// tinha sempre uma pré-semeada) — sem isto, o ecrã ficava preso a
/// carregar para sempre para qualquer casamento novo (bug real
/// reportado: "a página orçamento fica a carregar infinitamente").
/// `budget == null` nunca acontece depois de carregado: um casamento
/// sem `budgets` ainda gera um [Budget] com o total semeado a partir de
/// `weddings.estimated_budget` (ou 0€, se também não existir) em vez de
/// ficar por resolver.
class BudgetController extends Notifier<BudgetState> {
  String? currentWeddingId;

  @override
  BudgetState build() {
    final wedding = ref.watch(weddingControllerProvider.select((s) => s.wedding));
    currentWeddingId = wedding?.id;
    if (wedding != null) {
      Future.microtask(() => load(wedding));
    }
    return const BudgetState();
  }

  Future<void> load(Wedding wedding) async {
    state = state.copyWith(loading: true);
    final row = await supabase
        .from('budgets')
        .select()
        .eq('wedding_id', wedding.id)
        .maybeSingle();
    final categoryRows = await supabase
        .from('budget_categories')
        .select()
        .eq('wedding_id', wedding.id)
        .order('position', ascending: true);

    double total;
    if (row != null) {
      total = (row['total'] as num).toDouble();
    } else {
      // Sem nenhuma linha em `budgets` ainda — semeia a partir do
      // "orçamento estimado" já dado no onboarding
      // (`weddings.estimated_budget`, `wedding_controller.dart#create`)
      // em vez de mostrar sempre 0€. Pedido explícito do utilizador: "o
      // orçamento foi colocado no onboarding mas não ficou atualizado
      // no orçamento dentro da app" — as duas telas mostravam o mesmo
      // conceito ("orçamento total") a partir de duas tabelas nunca
      // ligadas uma à outra.
      total = wedding.estimatedBudget ?? 0;
      if (total > 0) {
        await supabase.from('budgets').upsert({'wedding_id': wedding.id, 'total': total});
      }
    }

    state = BudgetState(
      loading: false,
      budget: Budget(
        weddingId: wedding.id,
        total: total,
        categories: categoryRows.map(_categoryFromRow).toList(),
      ),
    );
  }

  Future<void> updateTotal(double total) async {
    final weddingId = currentWeddingId;
    if (weddingId == null) return;
    await supabase.from('budgets').upsert({
      'wedding_id': weddingId,
      'total': total,
      'updated_at': DateTime.now().toIso8601String(),
    });
    final current = state.budget;
    if (current == null) return;
    state = state.copyWith(
      budget: Budget(weddingId: weddingId, total: total, categories: current.categories),
    );
  }
}

final budgetControllerProvider =
    NotifierProvider<BudgetController, BudgetState>(BudgetController.new);
