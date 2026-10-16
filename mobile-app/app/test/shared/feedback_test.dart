import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:copo_dagua_app/core/theme/app_theme.dart';
import 'package:copo_dagua_app/shared/widgets/feedback.dart';

Widget _wrap(Widget child) => MaterialApp(
      theme: AppTheme.light,
      home: Scaffold(body: child),
    );

void main() {
  testWidgets('AsyncErrorView mostra a mensagem e chama onRetry', (tester) async {
    var retries = 0;
    await tester.pumpWidget(_wrap(AsyncErrorView(onRetry: () => retries++)));

    expect(find.text('Não foi possível carregar.'), findsOneWidget);
    await tester.tap(find.text('Tentar de novo'));
    expect(retries, 1);
  });

  testWidgets('AsyncErrorView sem onRetry não mostra o botão', (tester) async {
    await tester.pumpWidget(_wrap(const AsyncErrorView(message: 'Falhou.')));

    expect(find.text('Falhou.'), findsOneWidget);
    expect(find.text('Tentar de novo'), findsNothing);
  });

  testWidgets('EmptyStateView mostra a mensagem', (tester) async {
    await tester.pumpWidget(_wrap(const EmptyStateView(message: 'Sem convidados.')));

    expect(find.text('Sem convidados.'), findsOneWidget);
  });

  test('O tema usa a Roboto embutida em todos os estilos de texto', () {
    final theme = AppTheme.light;
    expect(theme.textTheme.bodyMedium?.fontFamily, AppTheme.fontFamily);
    expect(theme.textTheme.headlineMedium?.fontFamily, AppTheme.fontFamily);
    expect(theme.appBarTheme.titleTextStyle?.fontFamily, AppTheme.fontFamily);
  });
}
