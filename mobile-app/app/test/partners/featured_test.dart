import 'package:copo_dagua_app/core/models/models.dart';
import 'package:copo_dagua_app/features/partners/screens/partners_list_screen.dart';
import 'package:flutter_test/flutter_test.dart';

Partner _p(String id, {double? rating, bool featured = false}) =>
    Partner(id: id, name: id, location: '', description: '', rating: rating, featured: featured);

void main() {
  test('destaque manual aparece primeiro, depois o automático', () {
    final list = featured([
      _p('a', rating: 4.0),
      _p('b', rating: 5.0),
      _p('c', rating: 3.0),
      _p('casa-tilia', featured: true),
      _p('d', rating: 4.5),
    ]);
    expect(list.map((p) => p.id).toList(), ['casa-tilia', 'b', 'd', 'a', 'c']);
  });

  test('sem destaque manual mantém o automático e no máximo 6', () {
    final list = featured([for (var i = 0; i < 9; i++) _p('$i', rating: i.toDouble() + 1)]);
    expect(list.length, 6);
    expect(list.first.id, '8');
    expect(list.any((p) => p.featured), isFalse);
  });
}
