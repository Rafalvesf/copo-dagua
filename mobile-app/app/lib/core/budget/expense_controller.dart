import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
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

Expense _expenseFromRow(Map<String, dynamic> row) => Expense(
  id: row['id'] as String,
  weddingId: row['wedding_id'] as String,
  title: row['title'] as String,
  category: (row['category'] as String?) == null
      ? null
      : PartnerCategory.values.byName(row['category'] as String),
  amount: (row['amount'] as num).toDouble(),
  dueDate: row['due_date'] == null ? null : DateTime.parse(row['due_date'] as String),
  paid: row['paid'] as bool? ?? false,
);

/// Liga-se à tabela `expenses` real (`database/migrations/033_budget.sql`)
/// — substitui `MockBackend.listExpenses/addExpense/updateExpense`.
/// Mesmo padrão de `ChecklistController`.
class ExpenseController extends Notifier<ExpenseState> {
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
    final rows = await supabase
        .from('expenses')
        .select()
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: true);
    state = ExpenseState(loading: false, expenses: rows.map(_expenseFromRow).toList());
  }

  Future<void> addExpense(Expense expense) async {
    final row = await supabase
        .from('expenses')
        .insert({
          'wedding_id': expense.weddingId,
          'title': expense.title,
          'category': expense.category?.name,
          'amount': expense.amount,
          'due_date': expense.dueDate?.toIso8601String().split('T').first,
        })
        .select()
        .single();
    state = state.copyWith(expenses: [...state.expenses, _expenseFromRow(row)]);
  }

  Future<void> togglePaid(String expenseId) async {
    final expense = state.expenses.firstWhere((e) => e.id == expenseId);
    final row = await supabase
        .from('expenses')
        .update({
          'paid': !expense.paid,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', expenseId)
        .select()
        .single();
    final updated = _expenseFromRow(row);
    state = state.copyWith(
      expenses: [
        for (final e in state.expenses) if (e.id == updated.id) updated else e,
      ],
    );
  }
}

final expenseControllerProvider =
    NotifierProvider<ExpenseController, ExpenseState>(ExpenseController.new);
