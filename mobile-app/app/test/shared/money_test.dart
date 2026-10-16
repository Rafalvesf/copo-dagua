import 'package:flutter_test/flutter_test.dart';

import 'package:copo_dagua_app/shared/money.dart';

String _n(String s) => s.replaceAll('\u00A0', ' ');

void main() {
  test('euros usa espaço nos milhares e vírgula nos cêntimos', () {
    expect(_n(euros(0)), '0 €');
    expect(_n(euros(950)), '950 €');
    expect(_n(euros(8500)), '8 500 €');
    expect(_n(euros(1250000)), '1 250 000 €');
    expect(_n(euros(594, cents: true)), '594,00 €');
    expect(_n(euros(2550.5, cents: true)), '2 550,50 €');
    expect(_n(euros(-1200)), '-1 200 €');
  });

  test('euros não deixa o € partir para outra linha', () {
    expect(euros(8500).contains(' '), isFalse);
  });
}
