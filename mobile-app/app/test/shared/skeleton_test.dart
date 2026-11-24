import 'package:copo_dagua_app/core/theme/app_theme.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

Color _boxColor(WidgetTester tester) {
  final box = tester.widget<Container>(
    find.descendant(of: find.byType(SkeletonBox).first, matching: find.byType(Container)),
  );
  return (box.decoration! as BoxDecoration).color!;
}

void main() {
  // 2026-11-24: o esqueleto tinha a cor do fundo (#F2F2F2) e não se via.
  testWidgets('o esqueleto destaca-se do fundo e pulsa', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: SkeletonPage()));

    final first = _boxColor(tester);
    expect(first, isNot(AppTheme.background));
    expect(first, isNot(Colors.white));

    await tester.pump(const Duration(milliseconds: 450));
    final later = _boxColor(tester);
    expect(later, isNot(first), reason: 'a cor tem de mudar durante a pulsação');
    expect(later, isNot(AppTheme.background));
  });
}
