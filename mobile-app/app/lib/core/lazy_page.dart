import 'dart:async';

import 'package:flutter/material.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

import '../shared/widgets/skeleton.dart';
import 'lazy_reload_stub.dart' if (dart.library.js_interop) 'lazy_reload_web.dart';

/// Carrega o código de um ecrã só quando se abre (imports `deferred` no
/// router; pedido 2026-11-09: "faz o load apenas da página que estás a ver
/// e nunca da app toda"). Na web cada ecrã fica num ficheiro à parte; nas
/// apps nativas `loadLibrary()` termina logo.
///
/// Nunca mostra um ecrã de erro (2026-11-24: «Não foi possível abrir»
/// aparecia constantemente ao mudar de página). Se o ecrã não carrega:
/// - há uma versão nova publicada (a app esteve aberta durante várias
///   publicações e os ficheiros da versão antiga já não existem) →
///   recarrega logo a página, sem o limite de um minuto;
/// - é a mesma versão (rede fraca ou sem rede) → continua a tentar sozinho,
///   com o esqueleto, e só ao fim de uns segundos mostra um aviso discreto
///   «Sem ligação» por cima; tocar tenta já.
class LazyPage extends StatefulWidget {
  const LazyPage({super.key, required this.loads, required this.builder});

  final List<Future<void> Function()> loads;
  final Widget Function() builder;

  static final Set<Object> _loaded = {};

  static void markLoaded(Iterable<Future<void> Function()> loads) => _loaded.addAll(loads);

  static bool isLoaded(Iterable<Future<void> Function()> loads) => loads.every(_loaded.contains);

  @override
  State<LazyPage> createState() => _LazyPageState();
}

/// Pausas entre tentativas: rápidas ao início, depois de 10 em 10 s.
Duration retryDelay(int attempt) =>
    Duration(milliseconds: (500 * (1 << attempt.clamp(0, 5))).clamp(500, 10000));

class _LazyPageState extends State<LazyPage> {
  late bool _ready = LazyPage.isLoaded(widget.loads);
  bool _offline = false;
  int _attempt = 0;
  Timer? _retry;
  bool _reported = false;

  @override
  void initState() {
    super.initState();
    if (!_ready) _load();
  }

  @override
  void dispose() {
    _retry?.cancel();
    super.dispose();
  }

  Future<void> _load() async {
    _retry?.cancel();
    try {
      await Future.wait([for (final l in widget.loads) l()]);
      LazyPage.markLoaded(widget.loads);
      if (mounted) setState(() => _ready = true);
      return;
    } catch (e, st) {
      if (!mounted) return;
      // Versão nova publicada com a app aberta: os ficheiros da versão
      // antiga já não encaixam (ou já foram apagados). Recarrega já.
      final newer = await newerVersionAvailable();
      if (!mounted) return;
      if (newer == true && reloadNow()) return;
      if (_attempt >= 3 && !_reported) {
        _reported = true;
        Sentry.captureException(e, stackTrace: st).ignore();
      }
      // Mesma versão: rede. Volta a tentar sozinho, sem ecrã de erro.
      _attempt++;
      if (_attempt >= 3 && !_offline) setState(() => _offline = true);
      _retry = Timer(retryDelay(_attempt), _load);
    }
  }

  void _retryNow() {
    if (_ready) return;
    _attempt = 0;
    setState(() => _offline = false);
    _load();
  }

  @override
  Widget build(BuildContext context) {
    if (_ready) return widget.builder();
    // Enquanto o código do ecrã chega: esqueleto a pulsar (2026-11-23).
    if (!_offline) return const SkeletonPage();
    return Stack(children: [
      const SkeletonPage(),
      Positioned(
        left: 0,
        right: 0,
        bottom: 24,
        child: SafeArea(
          top: false,
          child: Center(
            child: Material(
              color: const Color(0xFF171713),
              borderRadius: BorderRadius.circular(999),
              child: InkWell(
                borderRadius: BorderRadius.circular(999),
                onTap: _retryNow,
                child: const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    SizedBox(
                      width: 14,
                      height: 14,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    ),
                    SizedBox(width: 10),
                    Text('Sem ligação. A tentar outra vez…', style: TextStyle(color: Colors.white, fontSize: 13)),
                  ]),
                ),
              ),
            ),
          ),
        ),
      ),
    ]);
  }
}

Widget lazyPage(List<Future<void> Function()> loads, Widget Function() builder) =>
    LazyPage(loads: loads, builder: builder);
