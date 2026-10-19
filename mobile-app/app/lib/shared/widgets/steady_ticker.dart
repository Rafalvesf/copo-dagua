import 'package:flutter/foundation.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/widgets.dart';

/// Igual a `TickerProviderStateMixin`, mas o tempo das animações avança
/// sem saltos: se o telemóvel engasgar (app a carregar, imagens a
/// descodificar), cada imagem avança no máximo 1/30 s. Antes, depois de
/// uma pausa, as animações de entrada "saltavam" para o fim e pareciam
/// aceleradas (revisão de todas as animações, 2026-10-19). Mesma ideia
/// do [SteadyDriver] da abertura, aplicada a qualquer
/// [AnimationController] que use este `vsync`.
mixin SteadyTickerProviderStateMixin<T extends StatefulWidget> on State<T> implements TickerProvider {
  static const _maxStep = Duration(microseconds: 33333);

  final Set<Ticker> _tickers = <Ticker>{};
  ValueListenable<bool>? _mode;

  @override
  Ticker createTicker(TickerCallback onTick) {
    Duration? last;
    var steady = Duration.zero;
    final ticker = Ticker((elapsed) {
      // Recomeço (forward de novo) ou primeira imagem: tempo a zero.
      if (last == null || elapsed < last! || elapsed == Duration.zero) {
        last = elapsed;
        steady = Duration.zero;
        onTick(steady);
        return;
      }
      final step = elapsed - last!;
      last = elapsed;
      steady += step > _maxStep ? _maxStep : step;
      onTick(steady);
    }, debugLabel: 'steady ${describeIdentity(this)}');
    _tickers.add(ticker);
    _listenMode();
    ticker.muted = !(_mode?.value ?? true);
    return ticker;
  }

  void _listenMode() {
    final notifier = TickerMode.getNotifier(context);
    if (identical(notifier, _mode)) return;
    _mode?.removeListener(_applyMode);
    notifier.addListener(_applyMode);
    _mode = notifier;
  }

  void _applyMode() {
    final enabled = _mode?.value ?? true;
    for (final t in _tickers) {
      t.muted = !enabled;
    }
  }

  @override
  void activate() {
    super.activate();
    _listenMode();
    _applyMode();
  }

  @override
  void dispose() {
    _mode?.removeListener(_applyMode);
    _mode = null;
    super.dispose();
  }
}
