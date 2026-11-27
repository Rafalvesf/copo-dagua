import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:copo_dagua_app/main.dart';

void main() {
  testWidgets('App arranca no ecrã de boas-vindas', (WidgetTester tester) async {
    // Primeira abertura neste aparelho: ainda não viu as boas-vindas.
    SharedPreferences.setMockInitialValues({});
    await tester.pumpWidget(const ProviderScope(child: CopoDaguaApp()));
    await tester.pumpAndSettle();

    // Boas-vindas 1 (fluxo novo, 2026-11-27): só na primeira vez.
    expect(find.text('Organiza\nsem stress'), findsOneWidget);
    expect(find.text('Continuar'), findsOneWidget);
    expect(find.text('Saltar'), findsOneWidget);
    expect(find.textContaining('Entrar', findRichText: true), findsWidgets);
  });
}
