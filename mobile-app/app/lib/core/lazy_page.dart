import 'package:flutter/material.dart';

import 'lazy_reload_stub.dart' if (dart.library.js_interop) 'lazy_reload_web.dart';

/// Carrega o código de um ecrã só quando se abre (imports `deferred` no
/// router; pedido 2026-11-09: "faz o load apenas da página que estás a ver
/// e nunca da app toda"). Na web cada ecrã fica num ficheiro à parte; nas
/// apps nativas `loadLibrary()` termina logo.
class LazyPage extends StatefulWidget {
  const LazyPage({super.key, required this.loads, required this.builder});

  final List<Future<void> Function()> loads;
  final Widget Function() builder;

  static final Set<Object> _loaded = {};

  static void markLoaded(Iterable<Future<void> Function()> loads) => _loaded.addAll(loads);

  @override
  State<LazyPage> createState() => _LazyPageState();
}

class _LazyPageState extends State<LazyPage> {
  late bool _ready = widget.loads.every(LazyPage._loaded.contains);
  Object? _error;

  @override
  void initState() {
    super.initState();
    if (!_ready) _load();
  }

  Future<void> _load() async {
    try {
      await Future.wait([for (final l in widget.loads) l()]);
      LazyPage._loaded.addAll(widget.loads);
      if (mounted) setState(() => _ready = true);
    } catch (e) {
      // Na web isto acontece quando sai uma versão nova com a app aberta:
      // o código antigo já não encaixa nos ficheiros novos. Recarrega a
      // página (uma vez) para ficar com a versão nova — a ligação está boa.
      if (reloadForNewVersion()) return;
      if (mounted) setState(() => _error = e);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_ready) return widget.builder();
    if (_error != null) {
      return Material(
        color: Colors.white,
        child: Center(
          child: TextButton(
            onPressed: () {
              if (reloadForNewVersion()) return;
              setState(() => _error = null);
              _load();
            },
            child: const Text('Não foi possível abrir. Tocar para tentar outra vez.'),
          ),
        ),
      );
    }
    return const Material(color: Colors.white, child: SizedBox.expand());
  }
}

Widget lazyPage(List<Future<void> Function()> loads, Widget Function() builder) =>
    LazyPage(loads: loads, builder: builder);
