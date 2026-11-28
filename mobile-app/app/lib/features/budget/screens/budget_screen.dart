import '../../../shared/widgets/time_wheels.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/booked_partner_badge.dart';
import 'package:copo_dagua_app/core/event/event_controller.dart';
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
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar;
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/export_card.dart';
import '../../../core/exports/exports.dart';
import '../../../core/event/event_controller.dart';
import '../../../core/budget/all_budgets.dart';
import '../../../shared/widgets/event_pills.dart';
import '../../../shared/text_case.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

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

  /// «Todos» na barra de eventos (pedido 2026-11-23). Escolher outro evento
  /// abre esse evento (o Orçamento é sempre o do evento aberto).
  bool _all = false;

  Future<void> _pickEvent(String? id) async {
    if (id == null) {
      setState(() => _all = true);
      return;
    }
    setState(() => _all = false);
    final current = ref.read(eventControllerProvider).event?.id;
    if (id != current) await ref.read(eventControllerProvider.notifier).select(id);
  }

  @override
  void initState() {
    super.initState();
    // Sinais pagos entretanto entram logo no "Gasto".
    Future.microtask(() => ref.read(budgetControllerProvider.notifier).reload().catchError((_) {}));
  }

  Future<void> _addExpense() async {
    final eventId = ref
        .read(expenseControllerProvider.notifier)
        .currentEventId;
    if (eventId == null) return;
    final ceiling = ref.read(budgetControllerProvider).budget?.total;
    final spent = ref.read(expenseControllerProvider).expenses.fold<double>(0, (a, e) => a + e.amount);
    final evName = ref.read(eventControllerProvider).event?.displayNames;
    String eur(double v) => '${v.toStringAsFixed(0).replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+$)'), (m) => '${m[1]} ')} €';
    final result = await showIslandSheet<_AddExpenseResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _AddExpenseSheet(
        subtitle: [?evName, if (ceiling != null && ceiling > 0) 'teto de ${eur(ceiling)}'].join(' · '),
        ceiling: ceiling != null && ceiling > 0 ? ceiling : null,
        spent: spent,
      ),
    );
    if (result == null) return;
    ref
        .read(expenseControllerProvider.notifier)
        .addExpense(
          Expense(
            id: '',
            eventId: eventId,
            title: result.title,
            amount: result.amount,
            dueDate: result.dueDate,
            categorySlug: result.categorySlug,
            paid: result.paid,
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
    final currentId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
    if (_all) {
      return GradientScaffold(
        background: AppBackground.feed,
        body: KitPage(
          pinnedBack: true,
          rotateBack: false,
          children: [
            const KitHeader(),
            const KitTitle('Orçamento', subtitle: 'Todos os teus eventos'),
            EventPills(selected: null, onSelect: _pickEvent),
            _AllEventsBudget(bookings: bookings, onOpen: _pickEvent),
          ],
        ),
      );
    }
    // Só as reservas do evento aberto (antes entravam as de todos).
    final active = bookings.where((b) => b.status != BookingStatus.recusado && b.eventId == currentId);
    // Valores com a comissão: é o que o casal paga de facto (igual às
    // Reservas e ao ecrã de pagamento) — 2026-10-19.
    final orgFee = ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig();
    double fee(double v, [double? total]) => amountWithCommission(v, orgFee.effectivePct(total ?? v));
    final paid = [
      ...expenseState.paid,
      for (final b in active)
        if (b.paidAmount > 0)
          Expense(id: 'booking:${b.id}:paid', eventId: b.eventId, title: 'Pago · ${b.partnerName}', amount: fee(b.paidAmount, b.amount), paid: true),
    ];
    final pending = [
      ...expenseState.pending,
      for (final b in active) ...[
        if (b.pendingDepositPaymentId != null)
          Expense(
            id: 'booking:${b.id}:pay:${b.pendingDepositPaymentId}',
            eventId: b.eventId,
            title: 'Sinal · ${b.partnerName}',
            amount: fee(b.depositAmount ?? 0, b.amount),
            dueDate: b.pendingDepositDueAt,
          ),
        if (b.pendingFinalPaymentId != null)
          Expense(
            id: 'booking:${b.id}:pay:${b.pendingFinalPaymentId}',
            eventId: b.eventId,
            title: 'Restante · ${b.partnerName}',
            amount: fee(b.finalPaymentAmount ?? 0, b.amount),
            dueDate: b.finalPaymentDueAt,
          ),
      ],
    ];
    final shown = switch (_filter) {
      _BudgetFilter.all => [..._byDueDate(pending), ...paid],
      _BudgetFilter.paid => paid,
      _BudgetFilter.pending => _byDueDate(pending),
    };

    // Mockup «Páginas do evento · com molduras» → Orçamento (2026-11-22):
    // resumo que muda o teto ao tocar, números em caixas e cada secção
    // numa moldura.
    final pendingTotal = pending.fold<double>(0, (t, e) => t + e.amount);
    // Categorias: aparecem sozinhas quando há gastos ou teto.
    final cats = budget == null
        ? const <EffectiveBudgetCategory>[]
        : budget.categories.where((c) => c.amount > 0 || c.allocated > 0).toList();
    return GradientScaffold(
      background: AppBackground.feed,
      body: budget == null
          ? const SkeletonPage(carousel: false, stats: true, rows: 6)
          : KitPage(
              pinnedBack: true,
              rotateBack: false,
              children: [
                KitHeader(actions: [KitAddButton(tooltip: 'Nova despesa', onTap: _addExpense)]),
                const KitTitle('Orçamento'),
                EventPills(selected: currentId, onSelect: _pickEvent),
                _SummaryCard(budget: budget, onEdit: () => _editTotal(budget.total)),
                if (budget.total > 0 || paid.isNotEmpty || pending.isNotEmpty)
                  SectionFrame(title: 'Números', children: [
                    FrameNumbers([
                      FrameNumber('Gasto', euros(budget.spent), '${paid.length} ${paid.length == 1 ? 'pagamento' : 'pagamentos'}'),
                      FrameNumber('Por pagar', euros(pendingTotal), '${pending.length} ${pending.length == 1 ? 'pagamento' : 'pagamentos'}'),
                    ]),
                  ]),
                SectionFrame(title: 'Pagamentos', children: [
                  if (paid.isNotEmpty || pending.isNotEmpty) ...[
                    KitPills(top: 4, clip: true, [
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
                    const SizedBox(height: 4),
                  ],
                  _ExpenseList(expenses: shown, onAdd: _addExpense, nothingAtAll: paid.isEmpty && pending.isEmpty),
                ]),
                SectionFrame(title: 'Categorias', children: [
                  FrameNote(cats.isEmpty
                      ? 'Aparecem sozinhas quando reservares parceiros ou juntares despesas.'
                      : 'Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe pôr um teto.'),
                  if (cats.isNotEmpty)
                    _CategoriesSection(
                      categories: cats,
                      expanded: _categoriesExpanded,
                      onToggleExpand: () => setState(() => _categoriesExpanded = !_categoriesExpanded),
                    ),
                ]),
                // Relatórios para descarregar (2026-10-20).
                SectionFrame(title: 'Exportar', children: [
                  ExportCard(
                    reportLabel: 'Gastos e parceiros',
                    partnerSide: false,
                    load: () => loadCoupleReport(ref.read(eventControllerProvider).event!.id),
                  ),
                ]),
              ],
            ),
    );
  }

  /// Tocar no resumo muda o teto do orçamento (pedido 2026-11-22).
  Future<void> _editTotal(double current) async {
    final v = await _askAmount(context, current == 0 ? 'Teto do orçamento' : 'Mudar o teto', current);
    if (v == null) return;
    try {
      await ref.read(budgetControllerProvider.notifier).updateTotal(v);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar o teto.')));
      }
    }
  }
}

/// Pede um valor em euros num popup (teto do orçamento ou de uma categoria).
Future<double?> _askAmount(BuildContext context, String title, double current) async {
  final controller = TextEditingController(text: current == 0 ? '' : current.toStringAsFixed(0));
  final result = await showIslandDialog<double>(
    context: context,
    builder: (context) => IslandAlert(
      title: Text(title),
      content: TextField(
        controller: controller,
        autofocus: true,
        keyboardType: const TextInputType.numberWithOptions(decimal: true),
        decoration: const InputDecoration(suffixText: '€'),
      ),
      actions: [
        PressScale(child: TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar'))),
        PressScale(child: FilledButton(
          onPressed: () => Navigator.of(context).pop(
            double.tryParse(controller.text.trim().replaceAll(' ', '').replaceAll(',', '.')),
          ),
          child: const Text('Guardar'),
        )),
      ],
    ),
  );
  if (result == null || result < 0) return null;
  return result;
}

/// Teto de uma categoria (no resumo da categoria ou em «Pôr teto»).
Future<void> _editCategoryCap(BuildContext context, WidgetRef ref, String name, double current) async {
  final v = await _askAmount(context, 'Teto para $name', current);
  if (v == null) return;
  try {
    await ref.read(budgetControllerProvider.notifier).updateAllocated(name, v);
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar o teto.')));
    }
  }
}

List<Expense> _byDueDate(List<Expense> list) => List.of(list)
  ..sort((a, b) => (a.dueDate ?? DateTime(2100)).compareTo(b.dueDate ?? DateTime(2100)));

/// Resumo do topo: tocar muda o teto; sem teto, pede-o.
class _SummaryCard extends StatelessWidget {
  final EffectiveBudget budget;
  final VoidCallback onEdit;

  const _SummaryCard({required this.budget, required this.onEdit});

  @override
  Widget build(BuildContext context) {
    if (budget.total <= 0) {
      return KitSummary(
        kicker: 'Teto do orçamento',
        value: '—',
        unit: 'por definir',
        progress: 0,
        footer: budget.spent > 0 ? 'Gastos ${euros(budget.spent)} · diz quanto querem gastar' : 'Diz quanto querem gastar e vês quanto falta.',
        extra: FrameButton44('Definir o teto', onTap: onEdit),
      );
    }
    final pct = (budget.progress * 100).round();
    final over = budget.remaining < 0;
    return SnappyTap(
      onTap: onEdit,
      semanticLabel: 'Mudar o teto do orçamento',
      child: KitSummary(
        kicker: over ? 'Acima do teto' : 'Ainda tens',
        value: euros(budget.remaining.abs()),
        unit: 'de ${euros(budget.total)}',
        progress: budget.progress,
        footer: 'Gastos ${euros(budget.spent)} · $pct% do teto',
        extra: const Padding(
          padding: EdgeInsets.only(top: 8),
          child: Text('Mudar o teto ›', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ),
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
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        KitGroup([for (final category in visible) _CategoryRow(category: category)]),
        if (categories.length > _categoriesCollapsedLimit)
          FrameButton44(expanded ? 'Ver menos' : 'Ver todas (${categories.length})', outlined: true, onTap: onToggleExpand),
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
    final eventId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
    final booked = eventId == null ? const <String, List<String>>{} : (ref.watch(bookedPartnersBySlugProvider(eventId)).value ?? const {});
    final partners = [for (final slug in slugsForBudgetCategory(category.base.partnerCategory)) ...?booked[slug]];
    final ratio = allocated == 0 ? 0.0 : category.amount / allocated;
    void open() => showIslandSheet<void>(
          context: context,
          isScrollControlled: true,
          builder: (_) => _CategorySheet(category: category.base),
        );
    // Sem teto: «Pôr teto» (pedido 2026-11-22).
    if (allocated == 0) {
      return KitRow(
        title: category.name,
        sub: '${euros(category.amount)} gastos · sem teto',
        onTap: open,
        trailing: FrameButton36('Pôr teto', outlined: true, onTap: () => _editCategoryCap(context, ref, category.name, 0)),
      );
    }
    return KitRow(
      title: category.name,
      sub: '${euros(category.amount)} de ${euros(allocated)}',
      onTap: open,
      trailing: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.end, children: [
        SizedBox(width: 92, child: KitBar(ratio, height: 6)),
        if (partners.isNotEmpty) ...[const SizedBox(height: 6), BookedPartnerBadge(partners)],
      ]),
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
                        errorBuilder: (_, __, ___) => ColoredBox(color: Colors.white, child: Icon(Hi.buildingStorefront, color: green)), frameBuilder: skeletonImageFrame),
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
  final VoidCallback onAdd;
  final bool nothingAtAll;

  const _ExpenseList({required this.expenses, required this.onAdd, required this.nothingAtAll});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (expenses.isEmpty) {
      return nothingAtAll
          ? FrameEmpty(
              title: 'Ainda sem pagamentos',
              text: 'Aparecem aqui os das reservas e os que juntares à mão.',
              actions: [FrameButton44('+ Nova despesa', outlined: true, onTap: onAdd)],
            )
          : const FrameNote('Sem pagamentos nesta vista.', top: 8);
    }
    void toggle(Expense expense) {
      ref.read(expenseControllerProvider.notifier).togglePaid(expense.id);
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(expense.paid ? '"${expense.title}" marcada como por pagar.' : '"${expense.title}" marcada como paga.'),
      ));
    }

    final rows = <Widget>[];
    for (final expense in expenses) {
      final i = expense.id.indexOf(':pay:');
      // Reservas por pagar: o aviso com «Pagar» (abre o pagamento).
      if (expense.id.startsWith('booking:') && !expense.paid && i > 0) {
        rows.add(FrameTaskRow(
          lead: V2Avatar(expense.title.split(' · ').last, size: 44),
          title: expense.title.split(' · ').last,
          sub: '${expense.title.split(' · ').first} ${euros(expense.amount)}${expense.dueDate == null ? '' : ' · até ${_dm(expense.dueDate!)}'}',
          action: 'Pagar',
          urgent: toneForDue(expense.dueDate) == AlertTone.urgent,
          onTap: () => openPaymentFlow(context, ref, expense.id.substring(i + 5)),
        ));
        continue;
      }
      rows.add(_ExpenseRow(
        expense: expense,
        onTap: expense.id.startsWith('booking:') ? () => context.push('/bookings') : () => toggle(expense),
        onMarkPaid: expense.id.startsWith('booking:') || expense.paid ? null : () => toggle(expense),
      ));
    }
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      for (var k = 0; k < rows.length; k++) ...[
        if (k > 0 && rows[k] is _ExpenseRow && rows[k - 1] is _ExpenseRow) const Divider(height: 1, thickness: 1, color: AppTheme.line),
        rows[k],
      ],
      const FrameNote('Os pagamentos que fazes por fora: «Marcar pago» quando pagares.', top: 10),
    ]);
  }
}

String _dm(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}'
    '${d.year == DateTime.now().year ? '' : '/${d.year}'}';

/// Linha de pagamento: valor e data por baixo; à direita «Marcar pago»
/// (os que fazes por fora) ou a etiqueta «Pago».
class _ExpenseRow extends StatelessWidget {
  final Expense expense;
  final VoidCallback onTap;
  final VoidCallback? onMarkPaid;

  const _ExpenseRow({required this.expense, required this.onTap, this.onMarkPaid});

  @override
  Widget build(BuildContext context) {
    final due = expense.dueDate;
    return KitRow(
      title: expense.title,
      sub: [
        euros(expense.amount),
        if (!expense.paid && due != null) 'até ${_dm(due)}',
      ].join(' · '),
      trailing: expense.paid
          ? const KitTag('Pago')
          : onMarkPaid != null
              ? FrameButton36('Marcar pago', outlined: true, onTap: onMarkPaid!)
              : const KitTag('Por pagar', kind: KitTagKind.pending),
      onTap: onTap,
    );
  }
}

class _AddExpenseResult {
  final String title;
  final double amount;
  final DateTime? dueDate;
  final String? categorySlug;
  final bool paid;

  _AddExpenseResult({required this.title, required this.amount, this.dueDate, this.categorySlug, this.paid = false});
}

/// Popup «Nova despesa» (prancheta «Orçamento · adicionar despesa»,
/// 2026-11-24): o valor grande com o que ainda fica no teto, «O QUÊ»,
/// «CATEGORIA», «ESTADO» (Por pagar / Já está pago, com o prazo) e
/// «Guardar · valor».
class _AddExpenseSheet extends StatefulWidget {
  /// «Casamento · teto de 18 000 €».
  final String? subtitle;

  /// Teto e o que já está gasto (para «Ainda tens X no teto»).
  final double? ceiling;
  final double spent;
  const _AddExpenseSheet({this.subtitle, this.ceiling, this.spent = 0});

  @override
  State<_AddExpenseSheet> createState() => _AddExpenseSheetState();
}

class _AddExpenseSheetState extends State<_AddExpenseSheet> {
  final _title = TextEditingController();
  final _amount = TextEditingController();
  DateTime? _dueDate;
  String? _category;
  bool _paid = false;
  bool _tried = false;

  @override
  void initState() {
    super.initState();
    _title.addListener(() => setState(() {}));
    _amount.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _title.dispose();
    _amount.dispose();
    super.dispose();
  }

  double? get _value => double.tryParse(_amount.text.trim().replaceAll(' ', '').replaceAll(',', '.'));

  static String _eur(double v) {
    final whole = v == v.roundToDouble();
    final s = whole ? v.toStringAsFixed(0) : v.toStringAsFixed(2).replaceAll('.', ',');
    final parts = s.split(',');
    final int = parts[0].replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+$)'), (m) => '${m[1]} ');
    return '${parts.length > 1 ? '$int,${parts[1]}' : int} €';
  }

  void _save() {
    final v = _value;
    setState(() => _tried = true);
    if (_title.text.trim().isEmpty || v == null || v <= 0) return;
    Navigator.of(context).pop(_AddExpenseResult(
      title: _title.text.trim(),
      amount: v,
      dueDate: _paid ? null : _dueDate,
      categorySlug: _category,
      paid: _paid,
    ));
  }

  Widget _caps(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(t, style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      );

  Widget _state(String label, String sub, bool on, VoidCallback onTap, {bool line = true}) => Semantics(
        button: true,
        selected: on,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: onTap,
          child: Container(
            constraints: const BoxConstraints(minHeight: 56),
            padding: const EdgeInsets.symmetric(vertical: 6),
            decoration: BoxDecoration(border: line ? const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))) : null),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              Container(
                width: 24,
                height: 24,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: on ? AppTheme.brandGreen : null,
                  border: on ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
                ),
                child: on ? const Icon(Hi.check, size: 14, color: Colors.white) : null,
              ),
            ]),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final v = _value ?? 0;
    final left = widget.ceiling == null ? null : widget.ceiling! - widget.spent - v;
    final ok = _title.text.trim().isNotEmpty && v > 0;
    String two(int n) => n.toString().padLeft(2, '0');
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Nova despesa', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (widget.subtitle != null) Text(widget.subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox.shrink(),
          ]),
        ),
        Flexible(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), border: Border.all(color: AppTheme.ink, width: 1.5)),
                child: Column(children: [
                  const Text('VALOR', style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  Row(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
                    IntrinsicWidth(
                      child: TextField(
                        controller: _amount,
                        keyboardType: const TextInputType.numberWithOptions(decimal: true),
                        textAlign: TextAlign.right,
                        style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w700, color: AppTheme.ink),
                        decoration: const InputDecoration(
                          isCollapsed: true,
                          filled: false,
                          border: InputBorder.none,
                          enabledBorder: InputBorder.none,
                          focusedBorder: InputBorder.none,
                          hintText: '0,00',
                        ),
                      ),
                    ),
                    const SizedBox(width: 6),
                    const Text('€', style: TextStyle(fontSize: 40, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ]),
                  if (left != null)
                    Text(left >= 0 ? 'Ainda tens ${_eur(left)} no teto' : 'Passa o teto em ${_eur(-left)}',
                        style: TextStyle(fontSize: 13, color: left >= 0 ? AppTheme.inkMuted : const Color(0xFFC8553D))),
                  if (_tried && v <= 0)
                    const Text('Indica um valor válido', style: TextStyle(fontSize: 13, color: Color(0xFFC8553D))),
                ]),
              ),
              const SizedBox(height: 16),
              _caps('O QUÊ'),
              Container(
                height: 52,
                padding: const EdgeInsets.symmetric(horizontal: 18),
                decoration: BoxDecoration(
                  color: AppTheme.background,
                  borderRadius: BorderRadius.circular(26),
                  border: _tried && _title.text.trim().isEmpty ? Border.all(color: const Color(0xFFC8553D), width: 1.5) : null,
                ),
                alignment: Alignment.centerLeft,
                child: TextField(
                  controller: _title,
                  textCapitalization: TextCapitalization.sentences,
                  style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                  decoration: const InputDecoration(
                    isCollapsed: true,
                    filled: false,
                    border: InputBorder.none,
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    hintText: 'Ex.: vestido, convites, alianças',
                  ),
                ),
              ),
              if (_tried && _title.text.trim().isEmpty)
                const Padding(
                  padding: EdgeInsets.only(top: 6, left: 6),
                  child: Text('A despesa precisa de um título', style: TextStyle(fontSize: 13, color: Color(0xFFC8553D))),
                ),
              const SizedBox(height: 16),
              CompanyCategoryPicker(selected: _category, onChanged: (c) => setState(() => _category = c)),
              const SizedBox(height: 16),
              _caps('ESTADO'),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
                child: Column(children: [
                  _state('Por pagar', 'Fica em «Por pagar» até marcares como pago.', !_paid, () => setState(() => _paid = false)),
                  _state('Já está pago', 'Conta logo no «Gasto».', _paid, () => setState(() => _paid = true), line: !_paid),
                  if (!_paid)
                    Semantics(
                      button: true,
                      child: GestureDetector(
                        behavior: HitTestBehavior.opaque,
                        onTap: () async {
                          final now = DateTime.now();
                          final d = await pickDateWheel(context,
                              initial: _dueDate ?? now, first: DateTime(now.year - 1), last: DateTime(now.year + 5, 12, 31), title: 'Data do pagamento');
                          if (d != null && mounted) setState(() => _dueDate = d);
                        },
                        child: SizedBox(
                          height: 56,
                          child: Row(children: [
                            const Expanded(child: Text('Prazo', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
                            Text(_dueDate == null ? 'Opcional' : '${two(_dueDate!.day)}/${two(_dueDate!.month)}/${_dueDate!.year}',
                                style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                            const SizedBox(width: 4),
                            const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
                          ]),
                        ),
                      ),
                    ),
                ]),
              ),
              const SizedBox(height: 16),
              const Text('Fica só no orçamento: os pagamentos que juntas à mão fazem-se fora da app.',
                  style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
            ]),
          ),
        ),
        Padding(
          padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + MediaQuery.paddingOf(context).bottom),
          child: SizedBox(
            height: 52,
            child: PressScale(child: FilledButton(
              onPressed: _save,
              style: FilledButton.styleFrom(
                backgroundColor: ok ? AppTheme.action : AppTheme.action.withValues(alpha: 0.35),
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
              ),
              child: Text(ok ? 'Guardar · ${_eur(v)}' : 'Guardar'),
            )),
          ),
        ),
      ]),
    );
  }
}


/// Detalhe de uma categoria do orçamento — verba, gasto e as despesas
/// dessa categoria (marcar como paga). Antes mostrava "em breve".
class _CategorySheet extends ConsumerWidget {
  final BudgetCategory category;

  const _CategorySheet({required this.category});

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
    final eventId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
    final slugs = slugsForBudgetCategory(category.partnerCategory);
    final booked = eventId == null
        ? const <BookedPartner>[]
        : (ref.watch(bookedPartnersProvider(eventId)).value ?? const <BookedPartner>[])
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
                    onTap: () => _editCategoryCap(context, ref, live.name, live.allocated),
                    child: _SheetStat(
                      label: 'Teto · tocar para mudar',
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


/// «Todos» do Orçamento (pedido 2026-11-23): o total de todos os eventos e
/// uma linha por evento (gasto de teto), que abre o desse evento.
class _AllEventsBudget extends ConsumerWidget {
  final List<CoupleBooking> bookings;
  final ValueChanged<String> onOpen;
  const _AllEventsBudget({required this.bookings, required this.onOpen});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final events = ref.watch(eventControllerProvider.select((s) => s.events));
    final lines = ref.watch(allEventBudgetsProvider);
    final orgFee = ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig();
    double fee(double v, double total) => amountWithCommission(v, orgFee.effectivePct(total));
    return lines.when(
      loading: () => const Padding(padding: EdgeInsets.only(top: 40), child: SkeletonList()),
      error: (_, _) => FrameEmpty(
        title: 'Não foi possível carregar',
        text: 'Verifica a ligação e tenta outra vez.',
        actions: [FrameButton44('Tentar outra vez', onTap: () => ref.invalidate(allEventBudgetsProvider))],
      ),
      data: (lines) {
        // Reservas: o contratado conta como gasto; o por pagar, com a taxa
        // de serviço (igual ao Orçamento de cada evento).
        double bookedOf(String id) => bookings
            .where((b) => b.eventId == id && b.status != BookingStatus.recusado)
            .fold(0.0, (t, b) => t + b.amount);
        double toPayOf(String id) => bookings
            .where((b) => b.eventId == id && b.status != BookingStatus.recusado)
            .fold(0.0, (t, b) => t + (b.pendingDepositPaymentId != null ? fee(b.depositAmount ?? 0, b.amount) : 0) + (b.pendingFinalPaymentId != null ? fee(b.finalPaymentAmount ?? 0, b.amount) : 0));
        final total = lines.fold(0.0, (t, l) => t + l.total);
        final spent = lines.fold(0.0, (t, l) => t + l.spentByHand + bookedOf(l.eventId));
        final toPay = lines.fold(0.0, (t, l) => t + l.unpaidByHand + toPayOf(l.eventId));
        final names = {for (final e in events) e.id: capFirst(e.displayNames)};
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          KitSummary(
            kicker: 'Todos os eventos',
            value: euros(spent),
            unit: total > 0 ? 'de ${euros(total)}' : 'gastos',
            progress: total > 0 ? (spent / total).clamp(0.0, 1.0).toDouble() : 0,
            footer: '${lines.length} ${lines.length == 1 ? 'evento' : 'eventos'}${total > 0 ? ' · ${(spent / total * 100).round()}% dos tetos' : ''}',
          ),
          SectionFrame(title: 'Números', children: [
            FrameNumbers([
              FrameNumber('Gasto', euros(spent), 'em todos os eventos'),
              FrameNumber('Por pagar', euros(toPay), 'em todos os eventos'),
            ]),
          ]),
          SectionFrame(title: 'Por evento · ${lines.length}', children: [
            for (final (i, l) in lines.indexed) ...[
              if (i > 0) const Divider(height: 1, thickness: 1, color: AppTheme.line),
              SnappyTap(
                onTap: () => onOpen(l.eventId),
                child: Container(
                  constraints: const BoxConstraints(minHeight: 56),
                  color: Colors.transparent,
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(children: [
                    Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(names[l.eventId] ?? 'Evento',
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        const SizedBox(height: 2),
                        Text(
                          [
                            l.total > 0 ? 'Teto ${euros(l.total)}' : 'Sem teto',
                            if (l.unpaidByHand + toPayOf(l.eventId) > 0) 'por pagar ${euros(l.unpaidByHand + toPayOf(l.eventId))}',
                          ].join(' · '),
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                        ),
                      ]),
                    ),
                    const SizedBox(width: 10),
                    Text(euros(l.spentByHand + bookedOf(l.eventId)),
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(width: 6),
                    const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
                  ]),
                ),
              ),
            ],
          ]),
          const FrameNote('Toca num evento para ver os pagamentos e as categorias dele.', top: 12),
        ]);
      },
    );
  }
}
