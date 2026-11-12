import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:copo_dagua_app/main.dart';

void main() {
  testWidgets('App arranca no ecrã de boas-vindas', (WidgetTester tester) async {
    await tester.pumpWidget(const ProviderScope(child: CopoDaguaApp()));
    await tester.pumpAndSettle();

    expect(find.text('Organiza, convida e celebra.'), findsOneWidget);
    expect(find.text('Começar'), findsOneWidget);
    expect(find.text('Já tenho conta'), findsOneWidget);
  });
}
