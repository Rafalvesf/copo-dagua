import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/category_tag_color.dart';
import '../../../shared/widgets/assignee_cluster.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

enum _StatusFilter { all, todo, inProgress, done }

const _groupTitles = {
  ChecklistStatus.todo: 'Por fazer',
  ChecklistStatus.inProgress: 'Em curso',
  ChecklistStatus.done: 'Concluídas',
};

const _collapsedLimit = 5;

class ChecklistScreen extends ConsumerStatefulWidget {
  const ChecklistScreen({super.key});

  @override
  ConsumerState<ChecklistScreen> createState() => _ChecklistScreenState();
}

class _ChecklistScreenState extends ConsumerState<ChecklistScreen> {
  _StatusFilter _filter = _StatusFilter.all;
  final _expandedGroups = <ChecklistStatus>{};

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

  Future<void> _pickPartner(ChecklistItem item) async {
    final partner = await context.push<Partner>(
      '/partners',
      extra: PartnerPickerArgs(
        category: item.partnerCategory,
        selectionMode: true,
      ),
    );
    if (partner == null) return;
    ref
        .read(checklistControllerProvider.notifier)
        .selectPartner(item.id, partner.id);
  }

  List<ChecklistStatus> get _visibleStatuses => switch (_filter) {
    _StatusFilter.all => const [
      ChecklistStatus.todo,
      ChecklistStatus.inProgress,
      ChecklistStatus.done,
    ],
    _StatusFilter.todo => const [ChecklistStatus.todo],
    _StatusFilter.inProgress => const [ChecklistStatus.inProgress],
    _StatusFilter.done => const [ChecklistStatus.done],
  };

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(checklistControllerProvider);
    final byStatus = <ChecklistStatus, List<ChecklistItem>>{
      for (final s in ChecklistStatus.values)
        s: state.items.where((i) => i.status == s).toList(),
    };

    return GradientScaffold(
      background: AppBackground.feed,
      body: state.loading && state.items.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 8,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: EdgeInsets.zero,
                      children: [
                        PageHeader(
                          title: 'Tarefas',
                          subtitle: 'Organizem tudo e nunca percam nada',
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              _DateShortcut(
                                onTap: () => context.push('/calendar'),
                              ),
                              const SizedBox(width: 8),
                              AddActionButton(onTap: _addTask),
                            ],
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            20,
                            AppTheme.screenMargin,
                            140,
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              _OverallProgressCard(
                                done: state.doneCount,
                                total: state.totalCount,
                                progress: state.totalCount == 0
                                    ? 0
                                    : state.doneCount / state.totalCount,
                              ),
                              const SizedBox(height: 18),
                              _FilterChipsRow(
                                selected: _filter,
                                total: state.items.length,
                                todo: byStatus[ChecklistStatus.todo]!.length,
                                inProgress:
                                    byStatus[ChecklistStatus.inProgress]!
                                        .length,
                                done: byStatus[ChecklistStatus.done]!.length,
                                onChanged: (f) => setState(() => _filter = f),
                              ),
                              const SizedBox(height: 24),
                              if (state.items.isEmpty)
                                const Padding(
                                  padding: EdgeInsets.symmetric(vertical: 40),
                                  child: Center(
                                    child: Text('Sem tarefas ainda.'),
                                  ),
                                )
                              else
                                for (final status in _visibleStatuses) ...[
                                  _StatusGroup(
                                    title: _groupTitles[status]!,
                                    items: byStatus[status]!,
                                    expanded: _expandedGroups.contains(status),
                                    onToggleExpand: () => setState(() {
                                      if (!_expandedGroups.remove(status)) {
                                        _expandedGroups.add(status);
                                      }
                                    }),
                                    onToggleDone: (item) => ref
                                        .read(
                                          checklistControllerProvider.notifier,
                                        )
                                        .toggleDone(item.id),
                                    onRemove: (item) => ref
                                        .read(
                                          checklistControllerProvider.notifier,
                                        )
                                        .removeItem(item.id),
                                    onPickPartner: _pickPartner,
                                  ),
                                  const SizedBox(height: 22),
                                ],
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

/// Atalho para o Calendário — mostra a data de hoje, ao lado do botão
/// "+ Nova tarefa" no cabeçalho de Tarefas.
class _DateShortcut extends StatelessWidget {
  final VoidCallback onTap;

  const _DateShortcut({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        height: 46,
        padding: const EdgeInsets.symmetric(horizontal: 14),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(999),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.calendar_today_outlined,
              size: 15,
              color: AppTheme.accentOliveDark,
            ),
            const SizedBox(width: 6),
            Text(
              formatShortDatePt(DateTime.now()),
              style: const TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w700,
                color: AppTheme.ink,
              ),
            ),
          ],
        ),
      ),
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
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Progresso geral',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                ),
                const SizedBox(height: 4),
                Text(
                  '$pct%',
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 26,
                    color: AppTheme.accentOliveDark,
                  ),
                ),
                const SizedBox(height: 10),
                ClipRRect(
                  borderRadius: BorderRadius.circular(999),
                  child: LinearProgressIndicator(
                    value: progress,
                    minHeight: 7,
                    backgroundColor: AppColors.muted,
                    valueColor: const AlwaysStoppedAnimation(
                      AppTheme.accentOliveDark,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  '$done de $total tarefas concluídas',
                  style: const TextStyle(
                    fontSize: 12,
                    color: AppTheme.inkMuted,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          const Opacity(
            opacity: 0.3,
            child: Icon(
              Icons.eco_outlined,
              size: 46,
              color: AppTheme.accentOliveDark,
            ),
          ),
        ],
      ),
    );
  }
}

class _FilterChipsRow extends StatelessWidget {
  final _StatusFilter selected;
  final int total;
  final int todo;
  final int inProgress;
  final int done;
  final ValueChanged<_StatusFilter> onChanged;

  const _FilterChipsRow({
    required this.selected,
    required this.total,
    required this.todo,
    required this.inProgress,
    required this.done,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    final entries = [
      (_StatusFilter.all, 'Todas', total),
      (_StatusFilter.todo, 'Por fazer', todo),
      (_StatusFilter.inProgress, 'Em curso', inProgress),
      (_StatusFilter.done, 'Concluídas', done),
    ];
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: [
          for (final (index, entry) in entries.indexed) ...[
            _FilterChip(
              label: entry.$2,
              count: entry.$3,
              selected: selected == entry.$1,
              onTap: () => onChanged(entry.$1),
            ),
            if (index != entries.length - 1) const SizedBox(width: 8),
          ],
        ],
      ),
    );
  }
}

class _FilterChip extends StatelessWidget {
  final String label;
  final int count;
  final bool selected;
  final VoidCallback onTap;

  const _FilterChip({
    required this.label,
    required this.count,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: TextStyle(
                color: selected ? Colors.white : AppTheme.ink,
                fontWeight: FontWeight.w700,
                fontSize: 13,
              ),
            ),
            const SizedBox(width: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
              decoration: BoxDecoration(
                color: selected
                    ? Colors.white.withValues(alpha: 0.25)
                    : AppColors.muted,
                borderRadius: BorderRadius.circular(999),
              ),
              child: Text(
                '$count',
                style: TextStyle(
                  color: selected ? Colors.white : AppTheme.inkMuted,
                  fontWeight: FontWeight.w700,
                  fontSize: 11.5,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _StatusGroup extends StatelessWidget {
  final String title;
  final List<ChecklistItem> items;
  final bool expanded;
  final VoidCallback onToggleExpand;
  final ValueChanged<ChecklistItem> onToggleDone;
  final ValueChanged<ChecklistItem> onRemove;
  final ValueChanged<ChecklistItem> onPickPartner;

  const _StatusGroup({
    required this.title,
    required this.items,
    required this.expanded,
    required this.onToggleExpand,
    required this.onToggleDone,
    required this.onRemove,
    required this.onPickPartner,
  });

  @override
  Widget build(BuildContext context) {
    if (items.isEmpty) return const SizedBox.shrink();
    final sorted = [...items]
      ..sort((a, b) {
        final ad = a.dueDate;
        final bd = b.dueDate;
        if (ad == null && bd == null) return 0;
        if (ad == null) return 1;
        if (bd == null) return -1;
        return ad.compareTo(bd);
      });
    final showAll = expanded || sorted.length <= _collapsedLimit;
    final visible = showAll ? sorted : sorted.take(_collapsedLimit).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Text(title, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(width: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              decoration: BoxDecoration(
                color: AppColors.muted,
                borderRadius: BorderRadius.circular(999),
              ),
              child: Text(
                '${sorted.length}',
                style: const TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 11.5,
                  color: AppTheme.inkMuted,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        for (final item in visible) ...[
          _TaskTile(
            item: item,
            onToggle: () => onToggleDone(item),
            onRemove: () => onRemove(item),
            onPickPartner: item.partnerCategory == null
                ? null
                : () => onPickPartner(item),
          ),
          const SizedBox(height: 10),
        ],
        if (sorted.length > _collapsedLimit)
          SnappyTap(
            onTap: onToggleExpand,
            child: Row(
              children: [
                Text(
                  expanded ? 'Ver menos' : 'Ver todas (${sorted.length})',
                  style: const TextStyle(
                    color: AppTheme.accentOliveDark,
                    fontWeight: FontWeight.w700,
                    fontSize: 13,
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
    );
  }
}

class _TaskTile extends StatelessWidget {
  final ChecklistItem item;
  final VoidCallback onToggle;
  final VoidCallback onRemove;
  final VoidCallback? onPickPartner;

  const _TaskTile({
    required this.item,
    required this.onToggle,
    required this.onRemove,
    this.onPickPartner,
  });

  @override
  Widget build(BuildContext context) {
    final due = item.dueDate;
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Row(
        children: [
          SnappyTap(
            onTap: onToggle,
            child: _StatusIndicator(item: item),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 13.5,
                    decoration: item.done ? TextDecoration.lineThrough : null,
                    color: item.done ? AppTheme.inkMuted : AppTheme.ink,
                  ),
                ),
                if (due != null) ...[
                  const SizedBox(height: 3),
                  Text(
                    item.done
                        ? 'Concluída a ${due.day.toString().padLeft(2, '0')}/${due.month.toString().padLeft(2, '0')}'
                        : 'Até ${due.day.toString().padLeft(2, '0')}/${due.month.toString().padLeft(2, '0')}',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
                  ),
                ],
              ],
            ),
          ),
          if (item.assigneeSeeds.isNotEmpty) ...[
            AssigneeCluster(seeds: item.assigneeSeeds),
            const SizedBox(width: 8),
          ],
          StatusPill(
            label: item.category,
            color: colorForTagLabel(item.category),
          ),
          PopupMenuButton<String>(
            padding: EdgeInsets.zero,
            icon: const Icon(
              Icons.more_horiz,
              size: 18,
              color: AppTheme.inkMuted,
            ),
            onSelected: (value) {
              if (value == 'remove') onRemove();
              if (value == 'partner') onPickPartner?.call();
            },
            itemBuilder: (context) => [
              if (onPickPartner != null)
                const PopupMenuItem(
                  value: 'partner',
                  child: Text('Escolher parceiro'),
                ),
              const PopupMenuItem(value: 'remove', child: Text('Remover')),
            ],
          ),
        ],
      ),
    );
  }
}

class _StatusIndicator extends StatelessWidget {
  final ChecklistItem item;

  const _StatusIndicator({required this.item});

  @override
  Widget build(BuildContext context) {
    if (item.done) {
      return const CircleAvatar(
        radius: 12,
        backgroundColor: AppStatusColors.confirmed,
        child: Icon(Icons.check, size: 14, color: Colors.white),
      );
    }
    final progress = item.progressPercent;
    if (progress != null && progress > 0) {
      return SizedBox(
        width: 24,
        height: 24,
        child: Stack(
          alignment: Alignment.center,
          children: [
            CircularProgressIndicator(
              value: progress / 100,
              strokeWidth: 3,
              backgroundColor: AppColors.muted,
              valueColor: const AlwaysStoppedAnimation(
                AppTheme.accentOliveDark,
              ),
            ),
            Text(
              '$progress',
              style: const TextStyle(
                fontSize: 7.5,
                fontWeight: FontWeight.w800,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ],
        ),
      );
    }
    return Container(
      width: 24,
      height: 24,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: AppTheme.borderMuted, width: 2),
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
