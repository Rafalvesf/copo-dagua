import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';
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

class BudgetController extends Notifier<BudgetState> {
  final _backend = MockBackend.instance;
  String? currentWeddingId;

  @override
  BudgetState build() {
    final weddingId = ref.watch(
      weddingControllerProvider.select((s) => s.wedding?.id),
    );
    currentWeddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const BudgetState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final budget = await _backend.getBudget(weddingId);
    state = BudgetState(loading: false, budget: budget);
  }

  Future<void> updateTotal(double total) async {
    final weddingId = currentWeddingId;
    if (weddingId == null) return;
    final updated = await _backend.updateBudgetTotal(weddingId, total);
    state = state.copyWith(budget: updated);
  }
}

final budgetControllerProvider =
    NotifierProvider<BudgetController, BudgetState>(BudgetController.new);
