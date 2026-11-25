import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'island_sheet.dart';

/// Uma coluna da roda: o título («COMEÇA ÀS»), as opções e a escolhida.
class WheelColumn {
  final String label;
  final List<String> options;
  final String? value;
  final ValueChanged<String> onChanged;

  /// A que aparece ao meio quando ainda não há escolha (senão a primeira).
  final String? fallback;
  const WheelColumn({required this.label, required this.options, required this.value, required this.onChanged, this.fallback});

  int get start {
    final i = options.indexOf(value ?? fallback ?? '');
    return i < 0 ? 0 : i;
  }
}

/// Seletor de horas como o do iPhone (pedido do Rafael, 2026-11-25: «tem
/// muitas horas de escolha, faz um seletor como tem o iPhone — um único
/// sítio com múltiplas opções, começa às e acaba às»): uma caixa #F2F2F2,
/// cantos 22, com uma roda por coluna lado a lado e a faixa branca da
/// escolha ao meio. Escolhe ao rodar.
class TimeWheels extends StatefulWidget {
  final List<WheelColumn> columns;
  const TimeWheels({super.key, required this.columns});

  @override
  State<TimeWheels> createState() => _TimeWheelsState();
}

class _TimeWheelsState extends State<TimeWheels> {
  late final List<FixedExtentScrollController> _ctrls = [
    for (final c in widget.columns)
      FixedExtentScrollController(initialItem: c.start),
  ];

  @override
  void initState() {
    super.initState();
    // Sem escolha ainda: fica a que se vê ao meio (a primeira).
    WidgetsBinding.instance.addPostFrameCallback((_) {
      for (final c in widget.columns) {
        if (c.value == null && c.options.isNotEmpty) c.onChanged(c.options[c.start]);
      }
    });
  }

  @override
  void dispose() {
    for (final c in _ctrls) {
      c.dispose();
    }
    super.dispose();
  }

  static const _item = 40.0;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 12, 8, 8),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        Row(children: [
          for (final c in widget.columns)
            Expanded(
              child: Text(c.label,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ),
        ]),
        const SizedBox(height: 4),
        SizedBox(
          height: _item * 5,
          child: Stack(children: [
            // Faixa da escolha ao meio, branca, como no iPhone.
            Center(
              child: Container(
                height: _item,
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
              ),
            ),
            Row(children: [
              for (var i = 0; i < widget.columns.length; i++)
                Expanded(
                  child: CupertinoPicker.builder(
                    scrollController: _ctrls[i],
                    itemExtent: _item,
                    useMagnifier: true,
                    magnification: 1.08,
                    squeeze: 1.1,
                    selectionOverlay: const SizedBox.shrink(),
                    backgroundColor: Colors.transparent,
                    childCount: widget.columns[i].options.length,
                    onSelectedItemChanged: (k) => widget.columns[i].onChanged(widget.columns[i].options[k]),
                    itemBuilder: (_, k) => Center(
                      child: Text(widget.columns[i].options[k],
                          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ),
                ),
            ]),
          ]),
        ),
      ]),
    );
  }
}

/// Escolher uma hora (programa, ofertas, momentos…) — a mesma roda num
/// popup (DESIGN §6, «Horas — sempre a roda», 2026-11-25). Nunca o
/// `showTimePicker` do Material. De 15 em 15 minutos.
Future<TimeOfDay?> pickTimeWheel(BuildContext context, {TimeOfDay? initial, String title = 'Escolhe a hora', String label = 'HORA'}) {
  String two(int v) => v.toString().padLeft(2, '0');
  final options = [for (var m = 0; m < 24 * 60; m += 15) '${two(m ~/ 60)}:${two(m % 60)}'];
  final init = initial ?? const TimeOfDay(hour: 16, minute: 0);
  final snapped = (init.hour * 60 + init.minute) ~/ 15 * 15;
  var value = '${two(snapped ~/ 60)}:${two(snapped % 60)}';
  return showIslandSheet<TimeOfDay>(
    context: context,
    builder: (c) => SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            Expanded(child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            Semantics(
              button: true,
              label: 'Fechar',
              child: GestureDetector(
                onTap: () => Navigator.of(c).pop(),
                child: Container(
                  width: 44,
                  height: 44,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                  child: const Icon(Hi.xMark, size: 20, color: Colors.white),
                ),
              ),
            ),
          ]),
          const SizedBox(height: 16),
          TimeWheels(columns: [
            WheelColumn(label: label, options: options, value: value, onChanged: (v) => value = v),
          ]),
          const SizedBox(height: 16),
          SizedBox(
            height: 52,
            child: FilledButton(
              style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, shape: const StadiumBorder()),
              onPressed: () {
                final p = value.split(':');
                Navigator.of(c).pop(TimeOfDay(hour: int.parse(p[0]), minute: int.parse(p[1])));
              },
              child: const Text('OK', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
            ),
          ),
        ]),
      ),
    ),
  );
}

const _monthsPt = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// Escolher um dia (pedido 2026-11-25: «falta o scroll para escolher os
/// dias»): a mesma roda das horas, com DIA · MÊS · ANO, num popup. Substitui
/// o `showDatePicker` do Material. O dia é acertado ao fim do mês (31 → 30).
Future<DateTime?> pickDateWheel(
  BuildContext context, {
  DateTime? initial,
  required DateTime first,
  required DateTime last,
  String title = 'Escolhe o dia',
}) {
  final init = initial == null || initial.isBefore(first) ? first : (initial.isAfter(last) ? last : initial);
  var day = '${init.day}';
  var month = _monthsPt[init.month - 1];
  var year = '${init.year}';
  final years = [for (var y = first.year; y <= last.year; y++) '$y'];
  return showIslandSheet<DateTime>(
    context: context,
    builder: (c) => SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            Expanded(child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            GestureDetector(
              onTap: () => Navigator.of(c).pop(),
              child: Container(
                width: 44,
                height: 44,
                decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                child: const Icon(Hi.xMark, size: 20, color: Colors.white),
              ),
            ),
          ]),
          const SizedBox(height: 16),
          TimeWheels(columns: [
            WheelColumn(label: 'DIA', options: [for (var d = 1; d <= 31; d++) '$d'], value: day, onChanged: (v) => day = v),
            WheelColumn(label: 'MÊS', options: _monthsPt, value: month, onChanged: (v) => month = v),
            WheelColumn(label: 'ANO', options: years, value: year, onChanged: (v) => year = v),
          ]),
          const SizedBox(height: 16),
          SizedBox(
            height: 52,
            child: FilledButton(
              style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, shape: const StadiumBorder()),
              onPressed: () {
                final y = int.parse(year);
                final m = _monthsPt.indexOf(month) + 1;
                final maxDay = DateTime(y, m + 1, 0).day;
                var d = DateTime(y, m, int.parse(day).clamp(1, maxDay));
                if (d.isBefore(first)) d = first;
                if (d.isAfter(last)) d = last;
                Navigator.of(c).pop(d);
              },
              child: const Text('OK', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
            ),
          ),
        ]),
      ),
    ),
  );
}
