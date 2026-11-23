import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/v2_kit.dart' show softCard;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../shared/category_tag_color.dart';
import '../../../shared/widgets/assignee_cluster.dart';
import '../../partners/partner_style.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/island_sheet.dart';

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
    final eventId = ref
        .read(checklistControllerProvider.notifier)
        .currentEventId;
    if (eventId == null) return;
    final result = await _showAddTaskSheet(context);
    if (result == null) return;
    ref
        .read(checklistControllerProvider.notifier)
        .addItem(
          ChecklistItem(
            id: '',
            eventId: eventId,
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
        categorySlug: item.partnerCategory == null
            ? null
            : slugForPartnerCategory(item.partnerCategory!),
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

    final pct = state.totalCount == 0 ? 0 : (state.doneCount * 100 / state.totalCount).round();
    void toggle(ChecklistItem item) => ref.read(checklistControllerProvider.notifier).toggleDone(item.id);
    void remove(ChecklistItem item) => ref.read(checklistControllerProvider.notifier).removeItem(item.id);

    // Mockup «Páginas do evento» → Checklist (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: state.loading && state.items.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : KitPage(
              pinnedBack: true,
              children: [
                KitHeader(actions: [
                  _DateShortcut(onTap: () => context.push('/calendar')),
                  KitAddButton(tooltip: 'Nova tarefa', onTap: _addTask),
                ]),
                const KitTitle('Checklist', subtitle: 'Organizem tudo e nunca percam nada.'),
                KitPills([
                  for (final f in _StatusFilter.values)
                    KitPill(
                      label: switch (f) {
                        _StatusFilter.all => 'Todas',
                        _StatusFilter.todo => 'Por fazer',
                        _StatusFilter.inProgress => 'Em curso',
                        _StatusFilter.done => 'Concluídas',
                      },
                      count: switch (f) {
                        _StatusFilter.all => state.items.length,
                        _StatusFilter.todo => byStatus[ChecklistStatus.todo]!.length,
                        _StatusFilter.inProgress => byStatus[ChecklistStatus.inProgress]!.length,
                        _StatusFilter.done => byStatus[ChecklistStatus.done]!.length,
                      },
                      selected: _filter == f,
                      onTap: () => setState(() => _filter = f),
                    ),
                ]),
                KitSummary(
                  kicker: 'Progresso',
                  value: '$pct%',
                  unit: '${state.doneCount} de ${state.totalCount} tarefas concluídas',
                  progress: state.totalCount == 0 ? 0 : state.doneCount / state.totalCount,
                ),
                if (state.items.isEmpty)
                  const KitGroup([KitRow(title: 'Sem tarefas ainda.')], top: 24)
                else
                  for (final status in _visibleStatuses)
                    _StatusGroup(
                      title: _groupTitles[status]!,
                      items: byStatus[status]!,
                      expanded: _expandedGroups.contains(status),
                      onToggleExpand: () => setState(() {
                        if (!_expandedGroups.remove(status)) _expandedGroups.add(status);
                      }),
                      onToggleDone: toggle,
                      onRemove: remove,
                      onPickPartner: _pickPartner,
                    ),
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
      semanticLabel: 'Abrir calendário',
      child: Container(
        height: 44,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Text(
          formatShortDatePt(DateTime.now()),
          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink),
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
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        KitCaps('$title · ${sorted.length}', top: 24),
        KitGroup([
          for (final item in visible)
            _TaskTile(
              item: item,
              onToggle: () => onToggleDone(item),
              onRemove: () => onRemove(item),
              onPickPartner: item.partnerCategory == null ? null : () => onPickPartner(item),
            ),
        ]),
        if (sorted.length > _collapsedLimit)
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: SnappyTap(
              onTap: onToggleExpand,
              child: Text(
                expanded ? 'Ver menos' : 'Ver todas (${sorted.length})',
                style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 14),
              ),
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
    String dm(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}';
    return KitRow(
      lead: SnappyTap(onTap: onToggle, child: _StatusIndicator(item: item)),
      title: item.title,
      done: item.done,
      sub: due == null ? null : (item.done ? 'Concluída a ${dm(due)}' : 'Até ${dm(due)}'),
      trailing: Row(mainAxisSize: MainAxisSize.min, children: [
        if (item.assigneeSeeds.isNotEmpty) ...[
          AssigneeCluster(seeds: item.assigneeSeeds),
          const SizedBox(width: 8),
        ],
        if (item.category.isNotEmpty) KitTag(item.category, kind: KitTagKind.neutral),
        IslandMenuButton<String>(
          padding: EdgeInsets.zero,
          tooltip: 'Mais opções',
          icon: const Icon(Hi.ellipsisHorizontal, size: 18, color: AppTheme.inkMuted),
          onSelected: (value) {
            if (value == 'remove') onRemove();
            if (value == 'partner') onPickPartner?.call();
          },
          itemBuilder: (context) => [
            if (onPickPartner != null) const PopupMenuItem(value: 'partner', child: Text('Escolher parceiro')),
            const PopupMenuItem(value: 'remove', child: Text('Remover')),
          ],
        ),
      ]),
    );
  }
}

class _StatusIndicator extends StatelessWidget {
  final ChecklistItem item;

  const _StatusIndicator({required this.item});

  @override
  Widget build(BuildContext context) {
    if (item.done) return const KitCheck(done: true);
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
              backgroundColor: Colors.white,
              valueColor: AlwaysStoppedAnimation(
                AppTheme.accentOliveDark,
              ),
            ),
            Text(
              '$progress',
              style: TextStyle(
                fontSize: 7.5,
                fontWeight: FontWeight.w800,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ],
        ),
      );
    }
    return KitCheck(inProgress: item.status == ChecklistStatus.inProgress);
  }
}

class _AddTaskResult {
  final String title;
  final String category;
  final DateTime? dueDate;

  _AddTaskResult({required this.title, required this.category, this.dueDate});
}

/// «+» do Calendário: a mesma folha de nova tarefa da Checklist.
Future<void> addChecklistTaskFlow(BuildContext context, WidgetRef ref) async {
  final eventId = ref.read(checklistControllerProvider.notifier).currentEventId;
  if (eventId == null) return;
  final result = await _showAddTaskSheet(context);
  if (result == null) return;
  ref.read(checklistControllerProvider.notifier).addItem(
        ChecklistItem(id: '', eventId: eventId, title: result.title, category: result.category, dueDate: result.dueDate),
      );
}

Future<_AddTaskResult?> _showAddTaskSheet(BuildContext context) {
  return showIslandSheet<_AddTaskResult>(
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
