import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../core/auth/auth_controller.dart';
import '../core/models/models.dart' show UserRole;

/// Voltar / fechar que funciona sempre (pedido 2026-11-27: «verifica que
/// todos os botões de saída estão a funcionar»). Com uma página antes,
/// volta a ela (respeitando os `PopScope` que perguntam antes de sair);
/// sem nenhuma — página aberta pela navbar, por um link ou depois de
/// recarregar (p. ex. ao voltar do pagamento) — vai para o início:
/// Eventos, ou o Início do parceiro. Antes, a seta não fazia nada
/// (`maybePop`) ou dava erro (`context.pop`).
///
/// [force]: fecha mesmo com um `PopScope` a perguntar (botões «Fechar» /
/// «OK» no fim de um pagamento) — o mesmo que o `context.pop()` do
/// go_router fazia.
void leave(BuildContext context, {bool force = false}) {
  if (force) {
    if (context.canPop()) {
      context.pop();
      return;
    }
  } else {
    final nav = Navigator.of(context);
    if (nav.canPop()) {
      nav.maybePop();
      return;
    }
  }
  // Sem página por baixo: volta à página onde a pessoa estava antes
  // (também depois de recarregar), e só sem nenhuma vai para o início.
  final here = _here(context);
  while (_visits.isNotEmpty && _visits.last == here) {
    _visits.removeLast();
  }
  if (_visits.isNotEmpty) {
    final back = _visits.last;
    _save();
    context.go(back);
    return;
  }
  var role = UserRole.couple;
  try {
    role = ProviderScope.containerOf(context, listen: false).read(authControllerProvider).profile?.role ?? UserRole.couple;
  } catch (_) {}
  context.go(role == UserRole.partner ? '/partner-home' : '/eventos');
}

/// Últimas páginas visitadas (até 30), guardadas no telemóvel para
/// sobreviverem a um recarregar.
final List<String> _visits = [];
const _skip = {'/splash', '/welcome', '/login', '/signup', '/entrar', '/registo', '/pay/return'};

String? _here(BuildContext context) {
  try {
    return GoRouter.of(context).routeInformationProvider.value.uri.toString();
  } catch (_) {
    return null;
  }
}

void recordVisit(String uri) {
  final path = Uri.tryParse(uri)?.path ?? uri;
  if (_skip.contains(path)) return;
  if (_visits.isNotEmpty && _visits.last == uri) return;
  // Voltar a uma página que estava logo antes = voltar atrás.
  if (_visits.length >= 2 && _visits[_visits.length - 2] == uri) {
    _visits.removeLast();
  } else {
    _visits.add(uri);
    if (_visits.length > 30) _visits.removeAt(0);
  }
  _save();
}

Future<void> loadVisits() async {
  try {
    final raw = (await SharedPreferences.getInstance()).getString('nav_visits');
    if (raw != null && _visits.isEmpty) _visits.addAll((jsonDecode(raw) as List).cast<String>());
  } catch (_) {}
}

void _save() {
  SharedPreferences.getInstance().then((p) => p.setString('nav_visits', jsonEncode(_visits))).catchError((_) => true);
}
