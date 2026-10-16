import 'package:flutter_test/flutter_test.dart';

import 'package:copo_dagua_app/shared/money.dart';

void main() {
  test('euros usa espaço nos milhares e vírgula nos cêntimos', () {
    expect(euros(0), '0 €');
    expect(euros(950), '950 €');
    expect(euros(8500), '8 500 €');
    expect(euros(1250000), '1 250 000 €');
    expect(euros(594, cents: true), '594,00 €');
    expect(euros(2550.5, cents: true), '2 550,50 €');
    expect(euros(-1200), '-1 200 €');
  });
}
