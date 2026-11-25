import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

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
