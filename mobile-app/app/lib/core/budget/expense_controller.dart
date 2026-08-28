import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';
import '../wedding/wedding_controller.dart';

class ExpenseState {
  final bool loading;
  final List<Expense> expenses;

  const ExpenseState({this.loading = false, this.expenses = const []});

  List<Expense> get paid => expenses.where((e) => e.paid).toList();
  List<Expense> get pending => expenses.where((e) => !e.paid).toList();

  ExpenseState copyWith({bool? loading, List<Expense>? expenses}) {
    return ExpenseState(
      loading: loading ?? this.loading,
      expenses: expenses ?? this.expenses,
    );
  }
}

/// Despesas individuais do orçamento — Todas/Pagas/Pendentes e
/// "Pagamentos próximos" em Orçamento. Segue o mesmo padrão de
/// `ChecklistController` (`core/checklist/checklist_controller.dart`).
class ExpenseController extends Notifier<ExpenseState> {
  final _backend = MockBackend.instance;
  String? currentWeddingId;

  @override
  ExpenseState build() {
    final weddingId = ref.watch(
      weddingControllerProvider.select((s) => s.wedding?.id),
    );
    currentWeddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const ExpenseState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final items = await _backend.listExpenses(weddingId);
    state = ExpenseState(loading: false, expenses: items);
  }

  Future<void> addExpense(Expense expense) async {
    final added = await _backend.addExpense(expense);
    state = state.copyWith(expenses: [...state.expenses, added]);
  }

  Future<void> togglePaid(String expenseId) async {
    final expense = state.expenses.firstWhere((e) => e.id == expenseId);
    final updated = await _backend.updateExpense(
      expense.copyWith(paid: !expense.paid),
    );
    state = state.copyWith(
      expenses: [
        for (final e in state.expenses) if (e.id == updated.id) updated else e,
      ],
    );
  }
}

final expenseControllerProvider =
    NotifierProvider<ExpenseController, ExpenseState>(ExpenseController.new);
