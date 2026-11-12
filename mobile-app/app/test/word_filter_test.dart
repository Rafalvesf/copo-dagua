import 'package:copo_dagua_app/core/moderation/word_filter.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('nomes e frases normais passam', () {
    for (final t in ['Rafael & Ana', 'Despedida de solteira', 'Festa do Cunha', 'Pisa 2027', 'Os anos da Inês', 'Concerto em Cascais', 'Pica-pau']) {
      expect(WordFilter.allowed(t), isTrue, reason: t);
    }
  });

  test('asneiras são bloqueadas, também disfarçadas', () {
    for (final t in ['Festa do caralho', 'merda', 'FODAAA', 'p.u.t.a', 'p u t a', 'c4r4lh0', 'cabrão', 'fuck this', 'sh1t']) {
      expect(WordFilter.allowed(t), isFalse, reason: t);
    }
  });

  test('vazio passa', () {
    expect(WordFilter.allowed(''), isTrue);
    expect(WordFilter.allowed(null), isTrue);
  });
}
