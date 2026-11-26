import 'package:copo_dagua_app/core/theme/app_theme.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/v2_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// 2026-11-24 («mostram ícone castanho ao fazer load»): um avatar com foto
/// mostra o círculo cinzento do esqueleto enquanto a foto não chega, e não
/// o círculo de cor (castanho, verde…).
void avatarTests() {
  testWidgets('avatar com foto: esqueleto cinzento enquanto carrega', (tester) async {
    await tester.pumpWidget(const MaterialApp(
      home: Center(child: V2Avatar('Quinta do Vale', size: 44, imageUrl: 'https://example.invalid/a.jpg')),
    ));
    expect(find.byType(SkeletonBox), findsOneWidget);
    // Nenhum círculo com a cor do nome (a cor só aparece se a foto falhar).
    final tint = V2Avatar.tintFor('Quinta do Vale');
    final tinted = tester.widgetList<Container>(find.byType(Container)).where(
          (c) => c.decoration is BoxDecoration && (c.decoration! as BoxDecoration).color == tint,
        );
    expect(tinted, isEmpty);
  });

  testWidgets('avatar sem foto: iniciais na cor do nome', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: Center(child: V2Avatar('Quinta do Vale', size: 44))));
    expect(find.text('QV'), findsOneWidget);
    expect(find.byType(SkeletonBox), findsNothing);
  });

  testWidgets('conversa a carregar mostra balões dos dois lados', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: Scaffold(body: SkeletonChat())));
    expect(find.byType(SkeletonBox), findsWidgets);
    expect(find.byType(SkeletonCircle), findsNWidgets(3));
  });
}

BoxDecoration _boxDecoration(WidgetTester tester) {
  final box = tester.widget<Container>(
    find.descendant(of: find.byType(SkeletonBox).first, matching: find.byType(Container)),
  );
  return box.decoration! as BoxDecoration;
}

/// A cor de base do bloco: a cor sólida ou, no «fantasma» (2026-11-25), a
/// cor das pontas do degradê.
Color _boxColor(WidgetTester tester) {
  final d = _boxDecoration(tester);
  return d.color ?? d.gradient!.colors.first;
}

void main() {
  avatarTests();

  // 2026-11-24: o esqueleto tinha a cor do fundo (#F2F2F2) e não se via.
  testWidgets('o esqueleto destaca-se do fundo e pulsa', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: SkeletonPage()));

    final first = _boxColor(tester);
    expect(first, isNot(AppTheme.background));
    expect(first, isNot(Colors.white));

    // «Fantasma» (2026-11-25): a faixa clara anda pelo bloco.
    final before = _boxDecoration(tester).gradient! as LinearGradient;
    await tester.pump(const Duration(milliseconds: 450));
    final after = _boxDecoration(tester).gradient! as LinearGradient;
    expect(after.begin, isNot(before.begin), reason: 'a faixa tem de andar');
    expect(_boxColor(tester), isNot(AppTheme.background));
  });

  // 2026-11-24: num Stack (aviso «Sem ligação») a página encolhia à altura
  // do conteúdo e via-se meio ecrã cinzento por baixo.
  testWidgets('a página a carregar ocupa o ecrã inteiro, mesmo num Stack', (tester) async {
    tester.view.physicalSize = const Size(400, 1600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    for (final page in const <Widget>[SkeletonPage(), SkeletonProfilePage()]) {
      await tester.pumpWidget(MaterialApp(home: Stack(children: [page])));
      final size = tester.getSize(find.byWidget(page));
      expect(size.height, 1600, reason: '${page.runtimeType} tem de ocupar a altura toda');
    }
  });
}
