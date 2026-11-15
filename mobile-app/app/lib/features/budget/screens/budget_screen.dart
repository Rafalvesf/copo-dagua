import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/booked_partner_badge.dart';
import 'package:copo_dagua_app/core/wedding/wedding_controller.dart';
import 'package:copo_dagua_app/core/budget/booked_partners.dart';
import '../../../shared/widgets/feedback.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/effective_budget.dart';
import '../../../core/budget/expense_controller.dart';
import '../../../core/checklist/checklist_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../payments/open_payment.dart';
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
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../core/wedding/wedding_controller.dart';

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
    final result = await showIslandSheet<_AddExpenseResult>(
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
            categorySlug: result.categorySlug,
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
    // Valores com a comissão: é o que o casal paga de facto (igual às
    // Reservas e ao ecrã de pagamento) — 2026-10-19.
    final orgFee = ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig();
    double fee(double v, [double? total]) => amountWithCommission(v, orgFee.effectivePct(total ?? v));
    final paid = [
      ...expenseState.paid,
      for (final b in active)
        if (b.paidAmount > 0)
          Expense(id: 'booking:${b.id}:paid', weddingId: b.weddingId, title: 'Pago · ${b.partnerName}', amount: fee(b.paidAmount, b.amount), paid: true),
    ];
    final pending = [
      ...expenseState.pending,
      for (final b in active) ...[
        if (b.pendingDepositPaymentId != null)
          Expense(
            id: 'booking:${b.id}:pay:${b.pendingDepositPaymentId}',
            weddingId: b.weddingId,
            title: 'Sinal · ${b.partnerName}',
            amount: fee(b.depositAmount ?? 0, b.amount),
            dueDate: b.pendingDepositDueAt,
          ),
        if (b.pendingFinalPaymentId != null)
          Expense(
            id: 'booking:${b.id}:pay:${b.pendingFinalPaymentId}',
            weddingId: b.weddingId,
            title: 'Restante · ${b.partnerName}',
            amount: fee(b.finalPaymentAmount ?? 0, b.amount),
          ),
      ],
    ];
    final shown = switch (_filter) {
      _BudgetFilter.all => [..._byDueDate(pending), ...paid],
      _BudgetFilter.paid => paid,
      _BudgetFilter.pending => _byDueDate(pending),
    };

    // Mockup «Páginas do evento» → Orçamento (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: budget == null
          ? const Center(child: CircularProgressIndicator())
          : KitPage(
              children: [
                KitHeader(actions: [KitAddButton(tooltip: 'Nova despesa', onTap: _addExpense)]),
                const KitTitle('Orçamento'),
                _SummaryCard(budget: budget),
                const KitSection('Categorias'),
                _CategoriesSection(
                  categories: budget.categories,
                  expanded: _categoriesExpanded,
                  onToggleExpand: () => setState(() => _categoriesExpanded = !_categoriesExpanded),
                ),
                const KitSection('Pagamentos'),
                KitPills(top: 0, [
                  KitPill(
                    label: 'Todos',
                    count: paid.length + pending.length,
                    selected: _filter == _BudgetFilter.all,
                    onTap: () => setState(() => _filter = _BudgetFilter.all),
                  ),
                  KitPill(
                    label: 'Pendentes',
                    count: pending.length,
                    selected: _filter == _BudgetFilter.pending,
                    onTap: () => setState(() => _filter = _BudgetFilter.pending),
                  ),
                  KitPill(
                    label: 'Pagos',
                    count: paid.length,
                    selected: _filter == _BudgetFilter.paid,
                    onTap: () => setState(() => _filter = _BudgetFilter.paid),
                  ),
                ]),
                const SizedBox(height: 12),
                _ExpenseList(expenses: shown),
                // Relatórios para descarregar (2026-10-20).
                const KitSection('Exportar'),
                ExportCard(
                  reportLabel: 'Gastos e parceiros',
                  partnerSide: false,
                  load: () => loadCoupleReport(ref.read(weddingControllerProvider).wedding!.id),
                ),
              ],
            ),
    );
  }
}

List<Expense> _byDueDate(List<Expense> list) => List.of(list)
  ..sort((a, b) => (a.dueDate ?? DateTime(2100)).compareTo(b.dueDate ?? DateTime(2100)));

/// Resumo «Ainda tens» (mockup Orçamento).
class _SummaryCard extends StatelessWidget {
  final EffectiveBudget budget;

  const _SummaryCard({required this.budget});

  @override
  Widget build(BuildContext context) {
    final pct = (budget.progress * 100).round();
    final over = budget.remaining < 0;
    return KitSummary(
      kicker: over ? 'Acima do orçamento' : 'Ainda tens',
      value: euros(budget.remaining.abs()),
      unit: 'de ${euros(budget.total)}',
      progress: budget.progress,
      footer: 'Gastos ${euros(budget.spent)} · $pct% do orçamento',
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
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        KitGroup([for (final category in visible) _CategoryRow(category: category)]),
        if (categories.length > _categoriesCollapsedLimit)
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: SnappyTap(
              onTap: onToggleExpand,
              child: Text(
                expanded ? 'Ver menos' : 'Ver todas as categorias (${categories.length})',
                style: const TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 14),
              ),
            ),
          ),
      ],
    );
  }
}

class _CategoryRow extends ConsumerWidget {
  final EffectiveBudgetCategory category;

  const _CategoryRow({required this.category});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final allocated = category.allocated;
    // Empresa contratada na app para esta categoria (pedido 2026-11).
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final booked = weddingId == null ? const <String, List<String>>{} : (ref.watch(bookedPartnersBySlugProvider(weddingId)).value ?? const {});
    final partners = [for (final slug in slugsForBudgetCategory(category.base.partnerCategory)) ...?booked[slug]];
    final ratio = allocated == 0 ? 0.0 : category.amount / allocated;
    return SnappyTap(
      onTap: () => showIslandSheet<void>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.white,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
        ),
        builder: (_) => _CategorySheet(category: category.base),
      ),
      child: KitRow(
        title: category.name,
        sub: '${euros(category.amount)} de ${euros(allocated)}',
        trailing: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.end, children: [
          SizedBox(width: 92, child: KitBar(ratio, height: 6)),
          if (partners.isNotEmpty) ...[const SizedBox(height: 6), BookedPartnerBadge(partners)],
        ]),
      ),
    );
  }
}

/// Empresa contratada na app, na folha da categoria do Orçamento.
class _BookedPartnerCard extends StatelessWidget {
  final BookedPartner partner;
  const _BookedPartnerCard(this.partner);

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: SnappyTap(
        onTap: () {
          Navigator.of(context).pop();
          context.push('/bookings');
        },
        child: Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: AppTheme.accentTint.withValues(alpha: 0.55),
            borderRadius: BorderRadius.circular(18),

          ),
          child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: SizedBox(
                width: 48,
                height: 48,
                child: partner.photoUrl == null
                    ? ColoredBox(color: Colors.white, child: Icon(Hi.buildingStorefront, color: green))
                    : Image.network(partner.photoUrl!, fit: BoxFit.cover, cacheWidth: 144,
                        errorBuilder: (_, __, ___) => ColoredBox(color: Colors.white, child: Icon(Hi.buildingStorefront, color: green))),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(partner.name,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                const SizedBox(height: 3),
                Row(children: [
                  Icon(Hi.checkCircle, size: 14, color: green),
                  const SizedBox(width: 4),
                  Flexible(
                    child: Text(
                      partner.total > 0 ? '${partner.statusLabel} · ${euros(partner.total)}' : partner.statusLabel,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: AppFontSize.sm + 1, fontWeight: FontWeight.w600, color: green),
                    ),
                  ),
                ]),
              ]),
            ),
            Icon(Hi.chevronRight, color: green),
          ]),
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
                fontWeight: FontWeight.w700,
                color: AppTheme.inkMuted,
              ),
            ),
          ],
        ),
      );
    }
    return KitGroup([
        for (final expense in expenses)
          _ExpenseRow(
            expense: expense,
            onTap: () {
              // Pagamentos de reservas pagam-se nas Reservas.
              if (expense.id.startsWith('booking:')) {
                // Pendente: abre logo o pagamento desse sinal/restante.
                final i = expense.id.indexOf(':pay:');
                if (!expense.paid && i > 0) {
                  openPaymentFlow(context, ref, expense.id.substring(i + 5));
                } else {
                  context.push('/bookings');
                }
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
      ]);
  }
}

/// Linha de pagamento: valor e data por baixo; etiqueta à direita —
/// vermelha a 3 dias ou menos, amarela pendente, verde paga.
class _ExpenseRow extends StatelessWidget {
  final Expense expense;
  final VoidCallback onTap;

  const _ExpenseRow({required this.expense, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final due = expense.dueDate;
    String dm(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}'
        '${d.year == DateTime.now().year ? '' : '/${d.year}'}';
    final today = DateUtils.dateOnly(DateTime.now());
    final days = due == null ? null : DateUtils.dateOnly(due).difference(today).inDays;
    final KitTag tag = expense.paid
        ? const KitTag('Pago')
        : days != null && days <= 3
            ? KitTag(days < 0 ? 'Atrasado' : (days == 0 ? 'Hoje' : (days == 1 ? '1 dia' : '$days dias')), kind: KitTagKind.urgent)
            : const KitTag('Pendente', kind: KitTagKind.pending);
    return KitRow(
      title: expense.title,
      sub: [
        euros(expense.amount),
        if (!expense.paid && due != null) 'até ${dm(due)}',
      ].join(' · '),
      trailing: tag,
      onTap: onTap,
    );
  }
}

class _AddExpenseResult {
  final String title;
  final double amount;
  final DateTime? dueDate;
  final String? categorySlug;

  _AddExpenseResult({required this.title, required this.amount, this.dueDate, this.categorySlug});
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
  String? _category;
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
    return SingleChildScrollView(
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
          const SizedBox(height: 14),
          CompanyCategoryPicker(selected: _category, onChanged: (c) => setState(() => _category = c)),
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
                  categorySlug: _category,
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
    final result = await showIslandDialog<double>(
      context: context,
      builder: (context) => IslandAlert(
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
    // Empresas contratadas na app nesta categoria (2026-11).
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final slugs = slugsForBudgetCategory(category.partnerCategory);
    final booked = weddingId == null
        ? const <BookedPartner>[]
        : (ref.watch(bookedPartnersProvider(weddingId)).value ?? const <BookedPartner>[])
            .where((b) => slugs.contains(b.slug))
            .toList();

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
            if (booked.isNotEmpty) ...[
              const SizedBox(height: 20),
              Text('Contratado na app', style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 8),
              for (final b in booked) _BookedPartnerCard(b),
            ],
            const SizedBox(height: 20),
            Text('Despesas', style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            if (expenses.isEmpty)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 12),
                child: InfoNote('Ainda não há despesas nesta categoria.', icon: Hi.informationCircle),
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
