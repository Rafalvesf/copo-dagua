import 'package:copo_dagua_app/core/models/models.dart';
import 'package:copo_dagua_app/features/partners/widgets/partner_cards.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// 2026-11-24 («o esqueleto loading tem que ficar respetivo a cada elemento
/// e ao seu tamanho! neste momento não aparece na página dos parceiros»).
void main() {
  Widget host(Widget child) => MaterialApp(home: Scaffold(body: Center(child: child)));

  testWidgets('o esqueleto do cartão de parceiro tem o tamanho do cartão real', (tester) async {
    await tester.pumpWidget(host(const SkeletonPhotoCard.partner()));
    final size = tester.getSize(find.byType(SkeletonPhotoCard));
    expect(size.width, PartnerBigCard.carouselWidth);
    expect(size.height, PartnerBigCard.height);
    expect(tester.takeException(), isNull, reason: 'não pode transbordar');
  });

  testWidgets('a página dos parceiros a carregar não transborda num telemóvel', (tester) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: Scaffold(body: SkeletonPartnersPage())));
    expect(tester.takeException(), isNull);
    expect(find.byType(SkeletonPhotoCard), findsWidgets);

    await tester.pumpWidget(const MaterialApp(home: Scaffold(body: Column(children: [SkeletonPills()]))));
    expect(tester.takeException(), isNull);
    expect(tester.getSize(find.byType(SkeletonPills)).height, 52);
  });

  testWidgets('a foto do parceiro mostra o esqueleto enquanto carrega', (tester) async {
    const p = Partner(
      id: 'p1',
      name: 'Quinta do Vale',
      location: 'Sintra',
      description: '',
      imageUrl: 'https://example.invalid/foto.jpg',
    );
    await tester.pumpWidget(host(const SizedBox(width: 330, height: 150, child: PartnerPhoto(p))));
    expect(find.byType(SkeletonBox), findsOneWidget);
  });
}
