import 'package:flutter/material.dart';

/// Carrega o código de um ecrã só quando se abre (imports `deferred` no
/// router; pedido 2026-11-09: "faz o load apenas da página que estás a ver
/// e nunca da app toda"). Na web cada ecrã fica num ficheiro à parte; nas
/// apps nativas `loadLibrary()` termina logo.
class LazyPage extends StatefulWidget {
  const LazyPage({super.key, required this.loads, required this.builder});

  final List<Future<void> Function()> loads;
  final Widget Function() builder;

  static final Set<Object> _loaded = {};

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
              setState(() => _error = null);
              _load();
            },
            child: const Text('Sem ligação. Tocar para tentar outra vez.'),
          ),
        ),
      );
    }
    return const Material(color: Colors.white, child: SizedBox.expand());
  }
}

Widget lazyPage(List<Future<void> Function()> loads, Widget Function() builder) =>
    LazyPage(loads: loads, builder: builder);
