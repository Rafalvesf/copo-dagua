import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/month_calendar_grid.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../checklist/screens/checklist_screen.dart' show addChecklistTaskFlow;

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

    final weekday = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][selected.weekday - 1];
    final dayTitle = '$weekday, ${selected.day} de ${monthNamesPt[selected.month - 1].toLowerCase()}';

    // Mockup «Páginas do evento» → Calendário (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        children: [
          KitHeader(actions: [
            KitAddButton(tooltip: 'Nova tarefa', onTap: () => addChecklistTaskFlow(context, ref)),
          ]),
          const KitTitle('Calendário', subtitle: 'As reuniões e os prazos do vosso evento.'),
          const SizedBox(height: 20),
          MonthCalendarGrid(
            visibleMonth: visibleMonth,
            selected: selected,
            markedDays: markedDays,
            onSelectDay: (day) => setState(() => _selected = day),
            onMonthChanged: (month) => setState(() => _visibleMonth = month),
          ),
          KitSection(dayTitle),
          KitGroup([
            if (dayItems.isEmpty)
              const KitRow(title: 'Sem compromissos neste dia.')
            else
              for (final item in dayItems)
                KitRow(
                  lead: SizedBox(
                    width: 44,
                    child: Text(formatTimePt(item.dueDate!),
                        style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  ),
                  title: item.title,
                  sub: item.assigneeSeeds.isEmpty ? null : _whoLabel(item.assigneeSeeds),
                  trailing: item.category.isEmpty ? null : KitTag(item.category, kind: KitTagKind.neutral),
                ),
          ]),
        ],
      ),
    );
  }
}
