import 'package:copo_dagua_app/shared/widgets/charts.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

Widget _wrap(Widget child) => MaterialApp(
      home: Scaffold(
        body: Center(child: SizedBox(width: 334, child: child)),
      ),
    );

void main() {
  testWidgets('LineAreaChart desenha e mostra o valor ao tocar', (tester) async {
    await tester.pumpWidget(_wrap(LineAreaChart(
      values: const [1, 2, 3, 2, 4],
      previous: const [1, 1, 2, 2, 3],
      xLabels: const ['a', '', 'c', '', 'e'],
      formatValue: (v) => v.toStringAsFixed(0),
      describePoint: (i) => 'ponto $i',
    )));
    expect(tester.takeException(), isNull);
    await tester.tapAt(tester.getCenter(find.byType(LineAreaChart)));
    await tester.pump();
    expect(find.textContaining('ponto'), findsOneWidget);
  });

  testWidgets('LineAreaChart aguenta tudo a zero', (tester) async {
    await tester.pumpWidget(_wrap(LineAreaChart(
      values: const [0, 0, 0],
      xLabels: const ['', '', ''],
      formatValue: (v) => '$v',
      describePoint: (i) => '$i',
    )));
    expect(tester.takeException(), isNull);
  });

  testWidgets('SimpleBarChart e Sparkline desenham', (tester) async {
    await tester.pumpWidget(_wrap(Column(
      children: [
        SimpleBarChart(
          values: const [0, 2, 5, 1],
          labels: const ['1', '2', '3', '4'],
          describe: (i) => 'barra $i',
        ),
        const Sparkline(values: [1, 3, 2]),
      ],
    )));
    expect(tester.takeException(), isNull);
    expect(find.text('1'), findsWidgets);
  });
}
