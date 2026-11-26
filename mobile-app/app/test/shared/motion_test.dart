import 'package:copo_dagua_app/features/partners/widgets/partner_cards.dart';
import 'package:copo_dagua_app/shared/motion.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Regras da skill `ux-motion` aplicadas à app (2026-11-25).
class _Probe extends StatefulWidget {
  const _Probe();
  @override
  State<_Probe> createState() => _ProbeState();
}

class _ProbeState extends State<_Probe> with SingleTickerProviderStateMixin {
  late final c = AnimationController(vsync: this, duration: const Duration(milliseconds: 500));
  bool started = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (started) return;
    started = true;
    startMotion(c, context);
  }

  @override
  void dispose() {
    c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Text('${c.value}');
}

Widget _app(Widget child, {bool reduce = false}) => MediaQuery(
      data: MediaQueryData(disableAnimations: reduce),
      child: MaterialApp(home: Scaffold(body: Center(child: child))),
    );

void main() {
  testWidgets('§20 com «reduzir movimento» a animação salta para o fim', (tester) async {
    await tester.pumpWidget(_app(const _Probe(), reduce: true));
    final s = tester.state<_ProbeState>(find.byType(_Probe));
    expect(s.c.value, 1);
    expect(s.c.isAnimating, isFalse);
  });

  testWidgets('§20 sem «reduzir movimento» a animação corre', (tester) async {
    await tester.pumpWidget(_app(const _Probe()));
    final s = tester.state<_ProbeState>(find.byType(_Probe));
    expect(s.c.isAnimating, isTrue);
    await tester.pumpAndSettle();
    expect(s.c.value, 1);
  });

  double scaleOf(WidgetTester t) =>
      t.widget<ScaleTransition>(find.descendant(of: find.byType(HeartPop), matching: find.byType(ScaleTransition))).scale.value;

  testWidgets('§7/§9 o coração salta ao guardar e não ao tirar', (tester) async {
    await tester.pumpWidget(_app(const HeartPop(on: false, child: Icon(Icons.favorite))));
    await tester.pumpWidget(_app(const HeartPop(on: true, child: Icon(Icons.favorite))));
    await tester.pump(const Duration(milliseconds: 88));
    expect(scaleOf(tester), greaterThan(1.1));
    await tester.pumpAndSettle();
    expect(scaleOf(tester), 1.0);

    await tester.pumpWidget(_app(const HeartPop(on: false, child: Icon(Icons.favorite))));
    await tester.pump(const Duration(milliseconds: 88));
    expect(scaleOf(tester), 1.0);
  });

  testWidgets('§20 o coração não salta com «reduzir movimento»', (tester) async {
    await tester.pumpWidget(_app(const HeartPop(on: false, child: Icon(Icons.favorite)), reduce: true));
    await tester.pumpWidget(_app(const HeartPop(on: true, child: Icon(Icons.favorite)), reduce: true));
    await tester.pump(const Duration(milliseconds: 88));
    expect(scaleOf(tester), 1.0);
  });
}
