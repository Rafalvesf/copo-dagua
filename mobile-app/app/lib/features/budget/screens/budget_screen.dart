import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/effective_budget.dart';
import '../../../core/budget/expense_controller.dart';
import '../../../core/checklist/checklist_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../features/partners/partner_style.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/money.dart';

enum _BudgetFilter { all, paid, pending }

const _categoriesCollapsedLimit = 5;

class BudgetScreen extends ConsumerStatefulWidget {
  const BudgetScreen({super.key});

  @override
  ConsumerState<BudgetScreen> createState() => _BudgetScreenState();
}

class _BudgetScreenState extends ConsumerState<BudgetScreen> {
  _BudgetFilter _filter = _BudgetFilter.all;
  bool _categoriesExpanded = false;

  @override
  void initState() {
    super.initState();
    // Sinais pagos entretanto entram logo no "Gasto".
    Future.microtask(() => ref.read(budgetControllerProvider.notifier).reload().catchError((_) {}));
  }

  Future<void> _addExpense() async {
    final weddingId = ref
        .read(expenseControllerProvider.notifier)
        .currentWeddingId;
    if (weddingId == null) return;
    final result = await showModalBottomSheet<_AddExpenseResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => const _AddExpenseSheet(),
    );
    if (result == null) return;
    ref
        .read(expenseControllerProvider.notifier)
        .addExpense(
          Expense(
            id: '',
            weddingId: weddingId,
            title: result.title,
            amount: result.amount,
            dueDate: result.dueDate,
          ),
        );
  }

  @override
  Widget build(BuildContext context) {
    final budgetState = ref.watch(budgetControllerProvider);
    final checklistState = ref.watch(checklistControllerProvider);
    final expenseState = ref.watch(expenseControllerProvider);
    final budget = budgetState.budget == null
        ? null
        : computeEffectiveBudget(budgetState.budget!, checklistState.items);

    // Pagas/Pendentes também mostram os pagamentos das reservas (sinal
    // pago, sinal ou restante por pagar), não só as despesas manuais —
    // antes ficavam vazios para quem só tinha reservas (2026-10-18).
    final bookings = ref.watch(coupleBookingsProvider).asData?.value ?? const <CoupleBooking>[];
    final active = bookings.where((b) => b.status != BookingStatus.recusado);
    final paid = [
      ...expenseState.paid,
      for (final b in active)
        if (b.paidAmount > 0)
          Expense(id: 'booking:${b.id}:paid', weddingId: b.weddingId, title: 'Pago · ${b.partnerName}', amount: b.paidAmount, paid: true),
    ];
    final pending = [
      ...expenseState.pending,
      for (final b in active) ...[
        if (b.pendingDepositPaymentId != null)
          Expense(id: 'booking:${b.id}:deposit', weddingId: b.weddingId, title: 'Sinal · ${b.partnerName}', amount: b.depositAmount ?? 0),
        if (b.pendingFinalPaymentId != null)
          Expense(id: 'booking:${b.id}:final', weddingId: b.weddingId, title: 'Restante · ${b.partnerName}', amount: b.finalPaymentAmount ?? 0),
      ],
    ];
    final total = expenseState.expenses.length;

    return GradientScaffold(
      background: AppBackground.feed,
      body: budget == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 8,
                    bottomFadeHeight: 32,
                    child: ListView(
                      padding: EdgeInsets.zero,
                      children: [
                        PageHeader(
                          title: 'Orçamento',
                          centered: true,
                          trailing: AddActionButton(onTap: _addExpense),
                        ),
                        Padding(
                          padding: EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            16,
                            AppTheme.screenMargin,
                            FloatingFilterBar.bottomPadding(aboveNav: false),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              _SummaryCard(budget: budget),
                              if (_filter == _BudgetFilter.paid) ...[
                                SectionTitle('Pagas', trailing: _TotalTag(paid)),
                                _ExpenseList(expenses: paid),
                              ] else if (_filter == _BudgetFilter.pending) ...[
                                SectionTitle('Pendentes', trailing: _TotalTag(pending)),
                                _ExpenseList(expenses: _byDueDate(pending)),
                              ] else ...[
                                const SizedBox(height: 24),
                                _CategoriesSection(
                                  categories: budget.categories,
                                  expanded: _categoriesExpanded,
                                  onToggleExpand: () => setState(
                                    () => _categoriesExpanded =
                                        !_categoriesExpanded,
                                  ),
                                ),
                                const SectionTitle('Pagamentos próximos'),
                                _ExpenseList(expenses: _byDueDate(pending)),
                              ],
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingFilterBar(
                    items: const [
                      FilterBarItem('Todas'),
                      FilterBarItem('Pagas'),
                      FilterBarItem('Pendentes'),
                    ],
                    selected: const [
                      _BudgetFilter.all,
                      _BudgetFilter.paid,
                      _BudgetFilter.pending,
                    ].indexOf(_filter),
                    onSelected: (i) => setState(
                      () => _filter = const [
                        _BudgetFilter.all,
                        _BudgetFilter.paid,
                        _BudgetFilter.pending,
                      ][i],
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}

List<Expense> _byDueDate(List<Expense> list) => List.of(list)
  ..sort((a, b) => (a.dueDate ?? DateTime(2100)).compareTo(b.dueDate ?? DateTime(2100)));

class _TotalTag extends StatelessWidget {
  final List<Expense> expenses;
  const _TotalTag(this.expenses);

  @override
  Widget build(BuildContext context) {
    final total = expenses.fold<double>(0, (sum, e) => sum + e.amount);
    return Text(euros(total),
        style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark));
  }
}

/// Canvas "Orçamento — redesign": cartão verde "AINDA TENS".
class _SummaryCard extends StatelessWidget {
  final EffectiveBudget budget;

  const _SummaryCard({required this.budget});

  @override
  Widget build(BuildContext context) {
    final pct = (budget.progress * 100).round();
    final over = budget.remaining < 0;
    return GreenHero(
      label: over ? 'ACIMA DO ORÇAMENTO' : 'AINDA TENS',
      value: euros(budget.remaining.abs()),
      suffix: 'de ${euros(budget.total)}',
      progress: budget.progress,
      doodles: const [Icons.savings_outlined, Icons.toll_outlined, Icons.favorite_border],
      footer: Row(
        children: [
          Expanded(
            child: Text('Gasto ${euros(budget.spent)}',
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
          HeroPill(over ? '$pct% · acima do orçamento' : '$pct% · dentro do orçamento', solid: true),
        ],
      ),
    );
  }
}

class _CategoriesSection extends StatelessWidget {
  final List<EffectiveBudgetCategory> categories;
  final bool expanded;
  final VoidCallback onToggleExpand;

  const _CategoriesSection({
    required this.categories,
    required this.expanded,
    required this.onToggleExpand,
  });

  @override
  Widget build(BuildContext context) {
    final showAll = expanded || categories.length <= _categoriesCollapsedLimit;
    final visible = showAll
        ? categories
        : categories.take(_categoriesCollapsedLimit).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('Categorias', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 12),
        for (final (index, category) in visible.indexed) ...[
          _CategoryRow(category: category, index: index),
          if (index != visible.length - 1) const SizedBox(height: 10),
        ],
        if (categories.length > _categoriesCollapsedLimit) ...[
          const SizedBox(height: 10),
          SnappyTap(
            onTap: onToggleExpand,
            child: Row(
              children: [
                Text(
                  expanded
                      ? 'Ver menos'
                      : 'Ver todas as categorias (${categories.length})',
                  style: TextStyle(
                    color: AppTheme.accentOliveDark,
                    fontWeight: FontWeight.w700,
                    fontSize: AppFontSize.md,
                  ),
                ),
                Icon(
                  expanded ? Icons.expand_less : Icons.expand_more,
                  size: 18,
                  color: AppTheme.accentOliveDark,
                ),
              ],
            ),
          ),
        ],
      ],
    );
  }
}

class _CategoryRow extends StatelessWidget {
  final EffectiveBudgetCategory category;
  final int index;

  const _CategoryRow({required this.category, required this.index});

  @override
  Widget build(BuildContext context) {
    final allocated = category.allocated;
    final ratio = allocated == 0 ? 0.0 : category.amount / allocated;
    final icon = category.base.partnerCategory == null
        ? Icons.receipt_long_outlined
        : iconForPartnerCategory(category.base.partnerCategory!);

    return SnappyTap(
      onTap: () => showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.white,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
        ),
        builder: (_) => _CategorySheet(category: category.base),
      ),
      // Canvas: cartão branco com a linha fina, ícone "autocolante",
      // "gasto de alocado" e uma barra (vermelha acima de 85%).
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: whiteLineCard(),
        child: Row(
          children: [
            StickerIcon(icon, turns: StickerIcon.tilt(index)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          category.name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '${euros(category.amount)} de ${euros(allocated)}',
                        style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                    child: LinearProgressIndicator(
                      value: ratio > 1 ? 1 : ratio.toDouble(),
                      minHeight: 6,
                      backgroundColor: const Color(0xFFEEF2EB),
                      valueColor: AlwaysStoppedAnimation(
                        ratio > 0.85 ? AppStatusColors.declined : AppTheme.accentOliveDark,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ExpenseList extends ConsumerWidget {
  final List<Expense> expenses;

  const _ExpenseList({required this.expenses});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (expenses.isEmpty) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Column(
          children: [
            const TchinMascot(pose: MascotPose.budget, width: 170),
            const SizedBox(height: 14),
            const Text(
              'Sem despesas nesta vista',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: AppFontSize.lg,
                fontWeight: FontWeight.w700,
                color: AppTheme.ink,
              ),
            ),
            const SizedBox(height: 4),
            const Text(
              'Usa o + para registar a primeira.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: AppFontSize.base,
                fontWeight: FontWeight.w300,
                color: AppTheme.inkMuted,
              ),
            ),
          ],
        ),
      );
    }
    return Column(
      children: [
        for (final (i, expense) in expenses.indexed) ...[
          _ExpenseRow(
            expense: expense,
            index: i,
            onTap: () {
              // Pagamentos de reservas pagam-se nas Reservas.
              if (expense.id.startsWith('booking:')) {
                context.push('/bookings');
                return;
              }
              ref
                  .read(expenseControllerProvider.notifier)
                  .togglePaid(expense.id);
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                    expense.paid
                        ? '"${expense.title}" marcada como pendente.'
                        : '"${expense.title}" marcada como paga.',
                  ),
                ),
              );
            },
          ),
          const SizedBox(height: 10),
        ],
      ],
    );
  }
}

/// Canvas: pendentes com data em cartão rosa; pagas em cartão branco
/// com "PAGO"; a data num quadrado branco inclinado.
class _ExpenseRow extends StatelessWidget {
  final Expense expense;
  final VoidCallback onTap;
  final int index;

  const _ExpenseRow({required this.expense, required this.onTap, this.index = 0});

  @override
  Widget build(BuildContext context) {
    final due = expense.dueDate;
    final icon = expense.category == null
        ? Icons.receipt_long_outlined
        : iconForPartnerCategory(expense.category!);
    final pink = !expense.paid && due != null && due.difference(DateTime.now()).inDays <= 30;

    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: pink
            ? BoxDecoration(
                color: const Color(0xFFF6E3DF),
                borderRadius: BorderRadius.circular(20),
                boxShadow: const [BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6))],
              )
            : whiteLineCard(radius: 20),
        child: Row(
          children: [
            due != null
                ? DateSticker(
                    date: due,
                    turns: StickerIcon.tilt(index),
                    monthColor: pink ? const Color(0xFFA3412E) : AppTheme.accentOliveDark,
                  )
                : StickerIcon(icon, size: 44, turns: StickerIcon.tilt(index)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    expense.title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    expense.id.startsWith('booking:')
                        ? (expense.paid ? 'Reserva · pago na app' : 'Reserva · toca para pagar')
                        : expense.paid
                            ? 'Paga · toca para desfazer'
                            : 'Pendente · toca para marcar como paga',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(euros(expense.amount),
                    style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base)),
                if (expense.paid) ...[
                  const SizedBox(height: 4),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                    decoration: BoxDecoration(
                      color: AppTheme.accentOliveDark.withValues(alpha: 0.14),
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text('PAGO',
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                  ),
                ],
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _AddExpenseResult {
  final String title;
  final double amount;
  final DateTime? dueDate;

  _AddExpenseResult({required this.title, required this.amount, this.dueDate});
}

class _AddExpenseSheet extends StatefulWidget {
  const _AddExpenseSheet();

  @override
  State<_AddExpenseSheet> createState() => _AddExpenseSheetState();
}

class _AddExpenseSheetState extends State<_AddExpenseSheet> {
  final _title = TextEditingController();
  final _amount = TextEditingController();
  DateTime? _dueDate;
  String? _titleError;
  String? _amountError;

  @override
  void dispose() {
    _title.dispose();
    _amount.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Adicionar despesa',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 16),
          AuthTextField(
            label: 'Despesa',
            controller: _title,
            errorText: _titleError,
          ),
          const SizedBox(height: 12),
          AuthTextField(
            label: 'Valor (€)',
            controller: _amount,
            keyboardType: TextInputType.number,
            errorText: _amountError,
          ),
          const SizedBox(height: 12),
          DatePickerField(
            label: 'Prazo (opcional)',
            value: _dueDate,
            onChanged: (d) => setState(() => _dueDate = d),
          ),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Guardar',
            onPressed: () {
              final amount = double.tryParse(
                _amount.text.trim().replaceAll(',', '.'),
              );
              setState(() {
                _titleError = _title.text.trim().isEmpty
                    ? 'A despesa precisa de um título'
                    : null;
                _amountError = amount == null ? 'Indica um valor válido' : null;
              });
              if (_titleError != null || _amountError != null) return;
              Navigator.of(context).pop(
                _AddExpenseResult(
                  title: _title.text.trim(),
                  amount: amount!,
                  dueDate: _dueDate,
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}


/// Detalhe de uma categoria do orçamento — verba, gasto e as despesas
/// dessa categoria (marcar como paga). Antes mostrava "em breve".
class _CategorySheet extends ConsumerWidget {
  final BudgetCategory category;

  const _CategorySheet({required this.category});

  Future<void> _editAllocated(BuildContext context, WidgetRef ref, double current) async {
    final controller = TextEditingController(
      text: current == 0 ? '' : current.toStringAsFixed(0),
    );
    final result = await showDialog<double>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Verba para ${category.name}'),
        content: TextField(
          controller: controller,
          autofocus: true,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          decoration: const InputDecoration(suffixText: '€'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar')),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(
              double.tryParse(controller.text.trim().replaceAll(' ', '').replaceAll(',', '.')),
            ),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (result == null || result < 0) return;
    try {
      await ref.read(budgetControllerProvider.notifier).updateAllocated(category.name, result);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar a verba.')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final live = ref.watch(budgetControllerProvider).budget?.categories
            .where((c) => c.name == category.name)
            .firstOrNull ??
        category;
    final expenses = ref
        .watch(expenseControllerProvider)
        .expenses
        .where((e) => e.category == category.partnerCategory)
        .toList()
      ..sort((a, b) => (a.dueDate ?? DateTime(2100)).compareTo(b.dueDate ?? DateTime(2100)));

    return SafeArea(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.8),
        child: ListView(
          shrinkWrap: true,
          padding: const EdgeInsets.fromLTRB(24, 12, 24, 24),
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: AppTheme.borderMuted,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text(live.name, style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 14),
            Row(
              children: [
                Expanded(child: _SheetStat(label: 'Gasto', value: euros(live.amount))),
                const SizedBox(width: 10),
                Expanded(
                  child: SnappyTap(
                    onTap: () => _editAllocated(context, ref, live.allocated),
                    child: _SheetStat(
                      label: 'Verba · tocar para mudar',
                      value: live.allocated == 0 ? 'Definir' : euros(live.allocated),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Text('Despesas', style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            if (expenses.isEmpty)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 12),
                child: Text(
                  'Ainda não há despesas nesta categoria.',
                  style: TextStyle(color: AppTheme.inkMuted),
                ),
              )
            else
              for (final e in expenses)
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  title: Text(e.title, style: const TextStyle(fontWeight: FontWeight.w700)),
                  subtitle: e.dueDate == null
                      ? null
                      : Text(
                          'Até ${e.dueDate!.day.toString().padLeft(2, '0')}/${e.dueDate!.month.toString().padLeft(2, '0')}/${e.dueDate!.year}',
                        ),
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(euros(e.amount), style: const TextStyle(fontWeight: FontWeight.w800)),
                      const SizedBox(width: 8),
                      Checkbox(
                        value: e.paid,
                        activeColor: AppTheme.accentOliveDark,
                        onChanged: (_) => ref.read(expenseControllerProvider.notifier).togglePaid(e.id),
                      ),
                    ],
                  ),
                ),
          ],
        ),
      ),
    );
  }
}

class _SheetStat extends StatelessWidget {
  final String label;
  final String value;

  const _SheetStat({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm)),
          const SizedBox(height: 4),
          Text(value, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: AppFontSize.lg)),
        ],
      ),
    );
  }
}
