import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../../core/wedding/date_format_pt.dart';
import 'snappy_tap.dart';

DateTime dayOnly(DateTime d) => DateTime(d.year, d.month, d.day);

/// Calendário de mês completo — cabeçalho com mês/ano navegável, linha
/// de dias da semana e grelha de células de dia (com ponto para dias
/// com eventos, destaque para o dia selecionado). Estilo mais plano
/// (borda subtil em vez da sombra pesada dos cards do resto da app),
/// para ficar mais perto da referência partilhada.
class MonthCalendarGrid extends StatelessWidget {
  final DateTime visibleMonth;
  final DateTime? selected;
  final Set<DateTime> markedDays;
  final ValueChanged<DateTime> onSelectDay;
  final ValueChanged<DateTime> onMonthChanged;

  const MonthCalendarGrid({
    super.key,
    required this.visibleMonth,
    required this.selected,
    required this.markedDays,
    required this.onSelectDay,
    required this.onMonthChanged,
  });

  @override
  Widget build(BuildContext context) {
    final firstOfMonth = DateTime(visibleMonth.year, visibleMonth.month, 1);
    final daysInMonth = DateTime(
      visibleMonth.year,
      visibleMonth.month + 1,
      0,
    ).day;
    // weekday: segunda=1 ... domingo=7 — número de células vazias antes
    // do dia 1, para a grelha começar sempre numa segunda-feira.
    final leadingBlanks = firstOfMonth.weekday - 1;
    final today = dayOnly(DateTime.now());

    final cells = <Widget>[];
    for (var i = 0; i < leadingBlanks; i++) {
      cells.add(const SizedBox.shrink());
    }
    for (var day = 1; day <= daysInMonth; day++) {
      final date = DateTime(visibleMonth.year, visibleMonth.month, day);
      final isSelected = selected != null && dayOnly(selected!) == date;
      final isToday = date == today;
      final isMarked = markedDays.contains(date);
      cells.add(
        _DayCell(
          day: day,
          isSelected: isSelected,
          isToday: isToday,
          isMarked: isMarked,
          onTap: () => onSelectDay(date),
        ),
      );
    }

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppColors.gray),
      ),
      child: Column(
        children: [
          Row(
            children: [
              IconButton(
                onPressed: () => onMonthChanged(
                  DateTime(visibleMonth.year, visibleMonth.month - 1),
                ),
                icon: const Icon(Icons.chevron_left),
                color: AppTheme.inkMuted,
              ),
              Expanded(
                child: Text(
                  '${monthNamesPt[visibleMonth.month - 1]} ${visibleMonth.year}',
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 15,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              IconButton(
                onPressed: () => onMonthChanged(
                  DateTime(visibleMonth.year, visibleMonth.month + 1),
                ),
                icon: const Icon(Icons.chevron_right),
                color: AppTheme.inkMuted,
              ),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              for (final label in weekdayAbbrPt)
                Expanded(
                  child: Center(
                    child: Text(
                      label.substring(0, 1),
                      style: const TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w700,
                        color: AppTheme.inkMuted,
                      ),
                    ),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 4),
          GridView.count(
            crossAxisCount: 7,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            childAspectRatio: 1,
            children: cells,
          ),
        ],
      ),
    );
  }
}

class _DayCell extends StatelessWidget {
  final int day;
  final bool isSelected;
  final bool isToday;
  final bool isMarked;
  final VoidCallback onTap;

  const _DayCell({
    required this.day,
    required this.isSelected,
    required this.isToday,
    required this.isMarked,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Center(
        child: Container(
          width: 32,
          height: 32,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: isSelected ? AppTheme.accentOliveDark : Colors.transparent,
            border: !isSelected && isToday
                ? Border.all(color: AppTheme.accentOliveDark)
                : null,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                '$day',
                style: TextStyle(
                  fontSize: 12.5,
                  fontWeight: FontWeight.w700,
                  color: isSelected ? Colors.white : AppTheme.ink,
                ),
              ),
              if (isMarked)
                Container(
                  margin: const EdgeInsets.only(top: 1),
                  width: 4,
                  height: 4,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: isSelected ? Colors.white : AppTheme.accentOliveDark,
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
