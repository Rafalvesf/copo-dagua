import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';

/// Voltar ao mesmo sítio (pedido do Rafael, 2026-11-26: «todas as páginas
/// têm que voltar para onde estavam, nunca para o topo»). Guarda a posição da
/// lista principal (a primeira lista vertical) de cada página, pelo seu
/// endereço, e repõe-na quando a página volta a ser criada (voltar atrás,
/// trocar de separador, swipe do Safari). Os carrosséis horizontais não
/// contam. Só em memória: ao fechar a app começa de novo no topo.
final Map<String, double> _offsets = {};

class RememberScroll extends StatefulWidget {
  const RememberScroll({super.key, required this.child});

  final Widget child;

  @override
  State<RememberScroll> createState() => _RememberScrollState();
}

class _RememberScrollState extends State<RememberScroll> {
  String? _key;
  Timer? _restore;
  bool _restoring = false;
  ScrollableState? _main;

  String? _routeKey() {
    try {
      return GoRouterState.of(context).uri.toString();
    } catch (_) {
      return null;
    }
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_key != null) return;
    _key = _routeKey();
    final saved = _key == null ? null : _offsets[_key];
    if (saved == null || saved <= 0) return;
    _restoring = true;
    var tries = 0;
    // O conteúdo pode chegar depois (carregar da rede): tenta até ~3 s.
    _restore = Timer.periodic(const Duration(milliseconds: 100), (t) {
      tries++;
      final s = _findMain();
      if (s != null && s.position.hasContentDimensions) {
        final max = s.position.maxScrollExtent;
        if (max >= saved || tries >= 30) {
          s.position.jumpTo(saved.clamp(0.0, max));
          _restoring = false;
          t.cancel();
          return;
        }
      }
      if (tries >= 30) {
        _restoring = false;
        t.cancel();
      }
    });
  }

  /// A primeira lista vertical dentro da página (guardada depois de achada).
  ScrollableState? _findMain() {
    final cached = _main;
    if (cached != null && cached.mounted) return cached;
    ScrollableState? found;
    void visit(Element e) {
      if (found != null) return;
      if (e is StatefulElement && e.state is ScrollableState) {
        final s = e.state as ScrollableState;
        if (s.widget.axis == Axis.vertical) {
          found = s;
          return;
        }
      }
      e.visitChildren(visit);
    }

    if (!mounted) return null;
    (context as Element).visitChildren(visit);
    return _main = found;
  }

  @override
  void dispose() {
    _restore?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => NotificationListener<ScrollUpdateNotification>(
        onNotification: (n) {
          if (_key == null || _restoring || n.metrics.axis != Axis.vertical || n.context == null) return false;
          final s = Scrollable.maybeOf(n.context!);
          if (s != null && identical(s, _findMain())) _offsets[_key!] = n.metrics.pixels;
          return false;
        },
        child: widget.child,
      );
}
