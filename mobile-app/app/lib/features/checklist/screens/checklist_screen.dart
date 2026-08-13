import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/suppliers/supplier_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cover_flow_picker.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

enum _ChecklistTab { phases, myPlan }

enum _StatusFilter { all, late, thisWeek, done }

class ChecklistScreen extends ConsumerStatefulWidget {
  const ChecklistScreen({super.key});

  @override
  ConsumerState<ChecklistScreen> createState() => _ChecklistScreenState();
}

class _ChecklistScreenState extends ConsumerState<ChecklistScreen> {
  _ChecklistTab _tab = _ChecklistTab.phases;
  _StatusFilter _statusFilter = _StatusFilter.all;
  final _expanded = <String>{};
  bool _expandedSeeded = false;
  final _search = TextEditingController();

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  bool _matchesFilter(ChecklistItem item) {
    final query = _search.text.trim().toLowerCase();
    if (query.isNotEmpty && !item.title.toLowerCase().contains(query)) {
      return false;
    }
    final due = item.dueDate;
    final now = DateTime.now();
    switch (_statusFilter) {
      case _StatusFilter.all:
        return true;
      case _StatusFilter.done:
        return item.done;
      case _StatusFilter.late:
        return !item.done &&
            due != null &&
            due.isBefore(DateTime(now.year, now.month, now.day));
      case _StatusFilter.thisWeek:
        if (item.done || due == null) return false;
        final diff = due.difference(now).inDays;
        return diff >= 0 && diff <= 7;
    }
  }

  Future<void> _addTask() async {
    final weddingId = ref
        .read(checklistControllerProvider.notifier)
        .currentWeddingId;
    if (weddingId == null) return;
    final result = await _showAddTaskSheet(context);
    if (result == null) return;
    ref
        .read(checklistControllerProvider.notifier)
        .addItem(
          ChecklistItem(
            id: '',
            weddingId: weddingId,
            title: result.title,
            category: result.category,
            dueDate: result.dueDate,
          ),
        );
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(checklistControllerProvider);
    final progress = state.totalCount == 0
        ? 0.0
        : state.doneCount / state.totalCount;
    final categories = state.byCategory;

    if (!_expandedSeeded && categories.isNotEmpty) {
      _expandedSeeded = true;
      _expanded.add(categories.keys.first);
    }

    final flatItems = [...state.items]
      ..sort((a, b) {
        if (a.done != b.done) return a.done ? 1 : -1;
        final ad = a.dueDate;
        final bd = b.dueDate;
        if (ad == null && bd == null) return 0;
        if (ad == null) return 1;
        if (bd == null) return -1;
        return ad.compareTo(bd);
      });
    final visibleFlatItems = flatItems.where(_matchesFilter).toList();

    return Scaffold(
      body: state.loading && state.items.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          20,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(
                          children: [
                            const CircleBackButton(),
                            const Spacer(),
                            CircleIconButton(
                              icon: Icons.add,
                              background: AppTheme.ink,
                              foreground: Colors.white,
                              onTap: _addTask,
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          16,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: AppTheme.cardShadow,
                          ),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Pesquisar tarefas...',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(999),
                                borderSide: BorderSide.none,
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                vertical: 12,
                              ),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          18,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: CoverFlowPicker<_StatusFilter>(
                          options: _StatusFilter.values,
                          selected: _statusFilter,
                          itemExtent: 20,
                          itemBuilder: (context, filter, isSelected) =>
                              CategoryPillLabel(
                                label: switch (filter) {
                                  _StatusFilter.all => 'Tudo',
                                  _StatusFilter.late => 'Em atraso',
                                  _StatusFilter.thisWeek => 'Esta semana',
                                  _StatusFilter.done => 'Concluídas',
                                },
                                big: filter == _StatusFilter.all,
                                selected: isSelected,
                              ),
                          onChanged: (filter) =>
                              setState(() => _statusFilter = filter),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          12,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: _ChecklistTabBar(
                          selected: _tab,
                          onChanged: (t) => setState(() => _tab = t),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          14,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: _OverallProgressCard(
                          done: state.doneCount,
                          total: state.totalCount,
                          progress: progress,
                        ),
                      ),
                      Expanded(
                        child: EdgeFade(
                          topFadeHeight: 32,
                          bottomFadeHeight: 140,
                          child: ListView(
                            padding: const EdgeInsets.fromLTRB(
                              AppTheme.screenMargin,
                              20,
                              AppTheme.screenMargin,
                              140,
                            ),
                            children: [
                              if (categories.isEmpty)
                                const Padding(
                                  padding: EdgeInsets.symmetric(vertical: 40),
                                  child: Center(
                                    child: Text('Sem tarefas ainda.'),
                                  ),
                                )
                              else if (_tab == _ChecklistTab.phases)
                                for (final entry in categories.entries)
                                  Padding(
                                    padding: const EdgeInsets.only(bottom: 10),
                                    child: _PhaseGroup(
                                      title: entry.key,
                                      items: entry.value,
                                      visibleItems: entry.value
                                          .where(_matchesFilter)
                                          .toList(),
                                      expanded: _expanded.contains(entry.key),
                                      onToggle: () => setState(() {
                                        if (!_expanded.remove(entry.key)) {
                                          _expanded.add(entry.key);
                                        }
                                      }),
                                      onToggleDone: (item) => ref
                                          .read(
                                            checklistControllerProvider
                                                .notifier,
                                          )
                                          .toggleDone(item.id),
                                      onRemove: (item) => ref
                                          .read(
                                            checklistControllerProvider
                                                .notifier,
                                          )
                                          .removeItem(item.id),
                                      onPickSupplier: (item) =>
                                          _pickSupplier(item),
                                    ),
                                  )
                              else if (visibleFlatItems.isEmpty)
                                const Padding(
                                  padding: EdgeInsets.symmetric(vertical: 40),
                                  child: Center(
                                    child: Text('Sem tarefas nesta vista.'),
                                  ),
                                )
                              else
                                Container(
                                  decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(20),
                                    boxShadow: AppTheme.cardShadow,
                                  ),
                                  padding: const EdgeInsets.symmetric(
                                    vertical: 4,
                                  ),
                                  child: Column(
                                    children: [
                                      for (final item in visibleFlatItems)
                                        _ChecklistTile(
                                          item: item,
                                          onToggle: () => ref
                                              .read(
                                                checklistControllerProvider
                                                    .notifier,
                                              )
                                              .toggleDone(item.id),
                                          onRemove: () => ref
                                              .read(
                                                checklistControllerProvider
                                                    .notifier,
                                              )
                                              .removeItem(item.id),
                                          onPickSupplier:
                                              item.supplierCategory == null
                                              ? null
                                              : () => _pickSupplier(item),
                                        ),
                                    ],
                                  ),
                                ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.checklist),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }

  Future<void> _pickSupplier(ChecklistItem item) async {
    final supplier = await context.push<Supplier>(
      '/suppliers',
      extra: SupplierPickerArgs(
        category: item.supplierCategory,
        selectionMode: true,
      ),
    );
    if (supplier == null) return;
    ref
        .read(checklistControllerProvider.notifier)
        .selectSupplier(item.id, supplier.id);
  }
}

class _ChecklistTabBar extends StatelessWidget {
  final _ChecklistTab selected;
  final ValueChanged<_ChecklistTab> onChanged;

  const _ChecklistTabBar({required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    Widget tab(_ChecklistTab value, String label) {
      final isSelected = selected == value;
      return Expanded(
        child: GestureDetector(
          onTap: () => onChanged(value),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                label,
                style: TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 15,
                  color: isSelected ? AppTheme.ink : AppTheme.inkMuted,
                ),
              ),
              const SizedBox(height: 8),
              Container(
                height: 3,
                decoration: BoxDecoration(
                  color: isSelected ? AppTheme.ink : Colors.transparent,
                  borderRadius: BorderRadius.circular(999),
                ),
              ),
            ],
          ),
        ),
      );
    }

    return Row(
      children: [
        tab(_ChecklistTab.phases, 'Por fases'),
        tab(_ChecklistTab.myPlan, 'Meu plano'),
      ],
    );
  }
}

class _OverallProgressCard extends StatelessWidget {
  final int done;
  final int total;
  final double progress;

  const _OverallProgressCard({
    required this.done,
    required this.total,
    required this.progress,
  });

  @override
  Widget build(BuildContext context) {
    final pct = (progress * 100).round();
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Text(
                'Progresso geral',
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
              ),
              const Spacer(),
              Text(
                '$pct%',
                style: const TextStyle(
                  fontWeight: FontWeight.w800,
                  fontSize: 14,
                  color: AppTheme.ink,
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          ClipRRect(
            borderRadius: BorderRadius.circular(999),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 8,
              backgroundColor: AppColors.muted,
              valueColor: const AlwaysStoppedAnimation(AppColors.greenDark),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            '$done de $total tarefas concluídas',
            style: TextStyle(fontSize: 12, color: AppTheme.inkMuted),
          ),
        ],
      ),
    );
  }
}

class _PhaseGroup extends StatelessWidget {
  final String title;
  final List<ChecklistItem> items;
  final List<ChecklistItem> visibleItems;
  final bool expanded;
  final VoidCallback onToggle;
  final ValueChanged<ChecklistItem> onToggleDone;
  final ValueChanged<ChecklistItem> onRemove;
  final ValueChanged<ChecklistItem> onPickSupplier;

  const _PhaseGroup({
    required this.title,
    required this.items,
    required this.visibleItems,
    required this.expanded,
    required this.onToggle,
    required this.onToggleDone,
    required this.onRemove,
    required this.onPickSupplier,
  });

  @override
  Widget build(BuildContext context) {
    final done = items.where((i) => i.done).length;
    final total = items.length;
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        children: [
          SnappyTap(
            onTap: onToggle,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      title,
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 14.5,
                      ),
                    ),
                  ),
                  Text(
                    '$done/$total',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 13,
                      color: done == total
                          ? AppStatusColors.confirmed
                          : AppTheme.inkMuted,
                    ),
                  ),
                  const SizedBox(width: 8),
                  Icon(
                    expanded ? Icons.expand_less : Icons.expand_more,
                    color: AppTheme.inkMuted,
                  ),
                ],
              ),
            ),
          ),
          if (expanded)
            if (visibleItems.isEmpty)
              const Padding(
                padding: EdgeInsets.fromLTRB(16, 0, 16, 14),
                child: Text('Sem tarefas nesta vista.'),
              )
            else
              Padding(
                padding: const EdgeInsets.only(bottom: 4),
                child: Column(
                  children: [
                    for (final item in visibleItems)
                      _ChecklistTile(
                        item: item,
                        onToggle: () => onToggleDone(item),
                        onRemove: () => onRemove(item),
                        onPickSupplier: item.supplierCategory == null
                            ? null
                            : () => onPickSupplier(item),
                      ),
                  ],
                ),
              ),
        ],
      ),
    );
  }
}

class _ChecklistTile extends StatelessWidget {
  final ChecklistItem item;
  final VoidCallback onToggle;
  final VoidCallback onRemove;
  final VoidCallback? onPickSupplier;

  const _ChecklistTile({
    required this.item,
    required this.onToggle,
    required this.onRemove,
    this.onPickSupplier,
  });

  @override
  Widget build(BuildContext context) {
    final due = item.dueDate;
    final selectedSupplier = item.selectedSupplierId == null
        ? null
        : MockBackend.instance.getSupplier(item.selectedSupplierId!);

    return ListTile(
      leading: SnappyTap(
        onTap: onToggle,
        child: Container(
          width: 24,
          height: 24,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: item.done ? AppStatusColors.confirmed : Colors.white,
            border: Border.all(
              color: item.done
                  ? AppStatusColors.confirmed
                  : const Color(0xFFE2D9CF),
              width: 2,
            ),
          ),
          child: item.done
              ? const Icon(Icons.check, size: 16, color: Colors.white)
              : null,
        ),
      ),
      title: Text(
        item.title,
        style: TextStyle(
          decoration: item.done ? TextDecoration.lineThrough : null,
          color: item.done ? AppTheme.inkMuted : AppTheme.ink,
          fontWeight: FontWeight.w600,
        ),
      ),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (item.done)
            const Text(
              'Concluída',
              style: TextStyle(
                color: AppStatusColors.confirmed,
                fontSize: 12,
                fontWeight: FontWeight.w600,
              ),
            )
          else if (due != null)
            Text(
              'Até ${due.day.toString().padLeft(2, '0')}/${due.month.toString().padLeft(2, '0')}',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
            ),
          if (onPickSupplier != null)
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: ActionChip(
                avatar: Icon(
                  selectedSupplier == null
                      ? Icons.storefront_outlined
                      : Icons.check_circle,
                  size: 16,
                ),
                label: Text(
                  selectedSupplier == null
                      ? 'Escolher fornecedor'
                      : 'Fornecedor: ${selectedSupplier.name}',
                ),
                onPressed: onPickSupplier,
              ),
            ),
        ],
      ),
      trailing: IconButton(
        icon: const Icon(Icons.close, size: 18),
        onPressed: onRemove,
      ),
    );
  }
}

class _AddTaskResult {
  final String title;
  final String category;
  final DateTime? dueDate;

  _AddTaskResult({required this.title, required this.category, this.dueDate});
}

Future<_AddTaskResult?> _showAddTaskSheet(BuildContext context) {
  return showModalBottomSheet<_AddTaskResult>(
    context: context,
    isScrollControlled: true,
    builder: (context) => const _AddTaskSheet(),
  );
}

class _AddTaskSheet extends StatefulWidget {
  const _AddTaskSheet();

  @override
  State<_AddTaskSheet> createState() => _AddTaskSheetState();
}

class _AddTaskSheetState extends State<_AddTaskSheet> {
  final _title = TextEditingController();
  final _category = TextEditingController(text: 'Geral');
  DateTime? _dueDate;
  String? _titleError;

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
            'Adicionar tarefa',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 16),
          AuthTextField(
            label: 'Tarefa',
            controller: _title,
            errorText: _titleError,
          ),
          const SizedBox(height: 12),
          AuthTextField(label: 'Categoria', controller: _category),
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
              if (_title.text.trim().isEmpty) {
                setState(() => _titleError = 'A tarefa precisa de um título');
                return;
              }
              Navigator.of(context).pop(
                _AddTaskResult(
                  title: _title.text.trim(),
                  category: _category.text.trim().isEmpty
                      ? 'Geral'
                      : _category.text.trim(),
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
