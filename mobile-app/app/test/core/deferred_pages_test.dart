import 'dart:io';

import 'package:copo_dagua_app/core/lazy_page.dart';
import 'package:flutter_test/flutter_test.dart';

/// 2026-11-24 («Não foi possível abrir» ao mudar de página): os ecrãs que
/// não estavam na lista de pré-carregamento só se iam buscar ao abrir, às
/// vezes depois de a versão antiga ter sido apagada do servidor.
void main() {
  test('todos os ecrãs deferred estão no pré-carregamento', () {
    final src = File('lib/core/router.dart').readAsStringSync();
    final deferred = RegExp(r'deferred as (\w+);').allMatches(src).map((m) => m.group(1)!).toSet();
    final listStart = src.indexOf('get _deferredPages');
    expect(listStart, greaterThan(0));
    final list = src.substring(listStart, src.indexOf('];', listStart));
    final listed = RegExp(r'(\w+)\.loadLibrary').allMatches(list).map((m) => m.group(1)!).toSet();
    expect(deferred.difference(listed), isEmpty,
        reason: 'acrescenta estes prefixos a _deferredPages no router.dart');
  });

  test('as pausas entre tentativas crescem e ficam nos 10 s', () {
    expect(retryDelay(0), const Duration(milliseconds: 500));
    expect(retryDelay(1), const Duration(seconds: 1));
    expect(retryDelay(3), const Duration(seconds: 4));
    expect(retryDelay(10), const Duration(seconds: 10));
  });
}
