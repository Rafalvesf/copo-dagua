import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/category_tag_color.dart';
import '../../../shared/widgets/assignee_cluster.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/staggered_fade_in.dart';

String _whoLabel(List<String> seeds) => seeds
    .map((s) => s.isEmpty ? s : s[0].toUpperCase() + s.substring(1))
    .join(', ');

class CalendarScreen extends ConsumerStatefulWidget {
  const CalendarScreen({super.key});

  @override
  ConsumerState<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends ConsumerState<CalendarScreen> {
  DateTime? _selected;
  DateTime? _visibleMonth;

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(checklistControllerProvider);
    final itemsWithDate = state.items.where((i) => i.dueDate != null).toList();
    final markedDays = itemsWithDate
        .map((i) => dayOnly(i.dueDate!))
        .toSet();

    final today = dayOnly(DateTime.now());
    final selected = _selected ?? (markedDays.contains(today)
        ? today
        : (markedDays.toList()..sort()).firstWhere(
            (d) => !d.isBefore(today),
            orElse: () => today,
          ));
    final visibleMonth =
        _visibleMonth ?? DateTime(selected.year, selected.month);

    final dayItems = itemsWithDate
        .where((i) => dayOnly(i.dueDate!) == selected)
        .toList()
      ..sort((a, b) => a.dueDate!.compareTo(b.dueDate!));

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            const PageHeader(
              title: 'Calendário',
              subtitle: 'As reuniões e prazos do vosso casamento.',
            ),
            const SizedBox(height: 16),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(
                  AppTheme.screenMargin,
                  0,
                  AppTheme.screenMargin,
                  24,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    MonthCalendarGrid(
                      visibleMonth: visibleMonth,
                      selected: selected,
                      markedDays: markedDays,
                      onSelectDay: (day) => setState(() => _selected = day),
                      onMonthChanged: (month) =>
                          setState(() => _visibleMonth = month),
                    ),
                    const SizedBox(height: 20),
                    Text(
                      'Compromissos de ${formatShortDatePt(selected)}',
                      style: const TextStyle(
                        fontWeight: FontWeight.w800,
                        fontSize: 15,
                        color: AppTheme.ink,
                      ),
                    ),
                    const SizedBox(height: 12),
                    if (dayItems.isEmpty)
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 20),
                        child: Text(
                          'Sem compromissos neste dia.',
                          style: TextStyle(color: AppTheme.inkMuted),
                        ),
                      )
                    else
                      StaggeredFadeIn(
                        listKey: selected,
                        children: [
                          for (final item in dayItems)
                            Padding(
                              padding: const EdgeInsets.only(bottom: 12),
                              child: _TaskAgendaCard(item: item),
                            ),
                        ],
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TaskAgendaCard extends StatelessWidget {
  final ChecklistItem item;

  const _TaskAgendaCard({required this.item});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.gray),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 48,
            child: Text(
              formatTimePt(item.dueDate!),
              style: const TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: 13.5,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.title,
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 15,
                    color: AppTheme.ink,
                  ),
                ),
                const SizedBox(height: 3),
                Text(
                  item.category,
                  style: TextStyle(
                    color: colorForTagLabel(item.category),
                    fontSize: 12.5,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                if (item.assigneeSeeds.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      AssigneeCluster(seeds: item.assigneeSeeds),
                      const SizedBox(width: 8),
                      Flexible(
                        child: Text(
                          _whoLabel(item.assigneeSeeds),
                          style: const TextStyle(
                            color: AppTheme.inkMuted,
                            fontSize: 12,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
