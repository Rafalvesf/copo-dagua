import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:go_router/go_router.dart';

import 'browser_back_stub.dart' if (dart.library.js_interop) 'browser_back_web.dart' as back;

/// Quando o utilizador volta atrás com o gesto do Safari (deslizar da
/// esquerda para a direita) o próprio Safari já anima a saída — a app não
/// repete a animação (pedido do utilizador, 2026-10-20).
DateTime? _browserBackAt;
bool get _fromBrowserBack =>
    _browserBackAt != null && DateTime.now().difference(_browserBackAt!) < const Duration(milliseconds: 900);

/// Chamado uma vez no arranque (`main.dart`).
void installBrowserBackDetection() => back.listenBrowserBack(() => _browserBackAt = DateTime.now());

/// Animações de navegação da app (pedido do utilizador, 2026-10-19):
/// - navbar: o separador novo desliza na horizontal, sem sombra;
/// - botões (qualquer outra página): a página desce de cima para baixo,
///   com sombra.

/// Ordem dos separadores de cada navbar (organizadores, parceiros e
/// convidados). Decide para que lado desliza a troca de separador.
const Map<String, int> _tabOrder = {
  '/partners': 0, '/eventos': 1, '/wedding': 1, '/chat': 2, '/home': 3,
  '/partner-home': 0, '/partner-requests': 1, '/partner-messages': 2, '/partner-profile': 3,
  '/guest-home': 0, '/guest-gallery': 1, '/guest-gifts': 2, '/guest-profile': 3,
};

int? _tabIndexForPath(String path) {
  if (_tabOrder.containsKey(path)) return _tabOrder[path];
  final i = path.indexOf('/:');
  return i > 0 ? _tabOrder[path.substring(0, i)] : null;
}

/// Último separador mostrado e a direção da troca em curso
/// (1 = o novo entra pela direita, -1 = pela esquerda).
int _currentTab = 0;
int _tabDir = 1;

// Mais lenta, como um carrossel (2026-11-11: "está muito rápida").
const _tabDuration = Duration(milliseconds: 460);

/// Fotografia da página que sai, para deslizar ao lado da que entra
/// (2026-11-11: "vê-se o conteúdo da página anterior e aparece o novo").
final Map<ValueKey<String>, GlobalKey> _boundaryKeys = {};
ValueKey<String>? _shownPage;
final Map<ValueKey<String>, ui.Image> _leavingShots = {};

ui.Image? _snapshot(ValueKey<String>? key) {
  if (key == null) return null;
  final ctx = _boundaryKeys[key]?.currentContext;
  final ro = ctx?.findRenderObject();
  if (ro is! RenderRepaintBoundary || !ro.attached) return null;
  try {
    final dpr = ctx != null ? MediaQuery.maybeDevicePixelRatioOf(ctx) ?? 1.0 : 1.0;
    return ro.toImageSync(pixelRatio: dpr.clamp(1.0, 2.0));
  } catch (_) {
    return null;
  }
}
const _pushDuration = Duration(milliseconds: 380);

/// Rota de um separador da navbar: troca com slide horizontal, sem sombra.
/// [asButton] devolve true quando a mesma rota é aberta a partir de um
/// botão (ex: escolher parceiro) — aí usa a animação dos botões.
GoRoute tabRoute({
  required String path,
  required GoRouterWidgetBuilder builder,
  bool Function(GoRouterState state)? asButton,
}) {
  final index = _tabIndexForPath(path) ?? 0;
  return GoRoute(
    path: path,
    pageBuilder: (context, state) {
      final child = builder(context, state);
      if (asButton?.call(state) ?? false) {
        return CustomTransitionPage<void>(
          key: state.pageKey,
          transitionDuration: _pushDuration,
          reverseTransitionDuration: _pushDuration,
          transitionsBuilder: (context, a, s, c) => TopDownTransition(animation: a, child: c),
          child: child,
        );
      }
      final pageKey = state.pageKey;
      if (_shownPage != pageKey) {
        if (index != _currentTab) {
          _tabDir = index > _currentTab ? 1 : -1;
          _currentTab = index;
        }
        final shot = _snapshot(_shownPage);
        if (shot != null) {
          _leavingShots.remove(pageKey)?.dispose();
          _leavingShots[pageKey] = shot;
        }
        _shownPage = pageKey;
      }
      final boundary = _boundaryKeys.putIfAbsent(pageKey, () => GlobalKey());
      return CustomTransitionPage<void>(
        key: pageKey,
        transitionDuration: _tabDuration,
        reverseTransitionDuration: _tabDuration,
        transitionsBuilder: (context, animation, secondary, child) =>
            _TabSlide(animation: animation, pageKey: pageKey, child: child),
        child: RepaintBoundary(key: boundary, child: child),
      );
    },
  );
}

class _TabSlide extends StatelessWidget {
  final Animation<double> animation;
  final ValueKey<String> pageKey;
  final Widget child;
  const _TabSlide({required this.animation, required this.pageKey, required this.child});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animation,
      child: child,
      builder: (context, child) {
        // A entrar vem do lado do separador tocado; a sair vai para o
        // lado oposto.
        final leaving = animation.status == AnimationStatus.reverse;
        // Voltar com o gesto do Safari: o Safari já animou; a app não
        // mostra a página a sair (evita o "piscar", reportado 2026-10-20).
        if (_fromBrowserBack) {
          return leaving ? Opacity(opacity: 0, child: child) : child!;
        }
        final t = Curves.easeInOutCubic.transform(animation.value);
        final dir = leaving ? -_tabDir : _tabDir;
        if (!leaving && animation.isCompleted) {
          _leavingShots.remove(pageKey)?.dispose();
        }
        final shot = leaving || animation.isCompleted ? null : _leavingShots[pageKey];
        return LayoutBuilder(builder: (context, c) {
          final w = c.maxWidth;
          final o = Offset(dir * (1 - t) * w, 0);
          final page = Transform.translate(offset: o, child: PageMotion(offset: o, child: child!));
          if (shot == null) return page;
          // A página anterior sai para o outro lado, ao mesmo tempo.
          return Stack(fit: StackFit.expand, children: [
            Transform.translate(
              offset: Offset(-dir * t * w, 0),
              child: IgnorePointer(child: RawImage(image: shot, fit: BoxFit.fill)),
            ),
            page,
          ]);
        });
      },
    );
  }
}

/// Página aberta por um botão: desce de cima para baixo, com sombra.
class TopDownTransition extends StatelessWidget {
  final Animation<double> animation;
  final Widget child;
  const TopDownTransition({super.key, required this.animation, required this.child});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animation,
      child: child,
      builder: (context, child) {
        // Voltar pelo gesto do Safari: sem animação de cima para baixo.
        if (_fromBrowserBack) {
          return animation.status == AnimationStatus.reverse ? Opacity(opacity: 0, child: child) : child!;
        }
        final t = Curves.easeOutCubic.transform(animation.value);
        final shadow = (1 - t) * 0.9 + 0.1;
        return LayoutBuilder(builder: (context, c) {
          final o = Offset(0, -(1 - t) * c.maxHeight);
          return Transform.translate(
          offset: o,
          child: PageMotion(offset: o, child: DecoratedBox(
            decoration: BoxDecoration(
              boxShadow: t >= 1
                  ? const []
                  : [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: 0.22 * shadow),
                        blurRadius: 32,
                        offset: const Offset(0, 14),
                      ),
                    ],
            ),
            child: child,
          )),
        );
        });
      },
    );
  }
}

/// Deslocamento atual da página durante a animação. A navbar desfaz este
/// deslocamento ([StayOverNav]) para ficar sempre fixa por cima: só o
/// conteúdo da página se mexe (pedido do utilizador, 2026-10-20).
class PageMotion extends InheritedWidget {
  final Offset offset;
  const PageMotion({super.key, required this.offset, required super.child});

  static Offset of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<PageMotion>()?.offset ?? Offset.zero;

  @override
  bool updateShouldNotify(PageMotion old) => old.offset != offset;
}

/// Mantém a navbar parada enquanto a página anima.
class StayOverNav extends StatelessWidget {
  final Widget child;
  const StayOverNav({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final o = PageMotion.of(context);
    if (o == Offset.zero) return child;
    return Transform.translate(offset: -o, child: child);
  }
}

/// Usada no tema para todas as páginas abertas com `context.push`,
/// `Navigator.push` e rotas sem animação própria.
class TopDownPageTransitionsBuilder extends PageTransitionsBuilder {
  const TopDownPageTransitionsBuilder();

  @override
  Duration get transitionDuration => _pushDuration;

  /// Lido no momento de voltar atrás: com o gesto do Safari, sai logo.
  @override
  Duration get reverseTransitionDuration => _fromBrowserBack ? Duration.zero : _pushDuration;

  @override
  Widget buildTransitions<T>(
    PageRoute<T> route,
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    // Sem condição de "primeira página": com `context.go` a página nova
    // passa logo a ser a primeira da pilha, e a animação nunca aparecia.
    // A página inicial da app já não anima por si (o Navigator começa-a
    // completa).
    return TopDownTransition(animation: animation, child: child);
  }
}

const topDownPageTransitions = PageTransitionsTheme(
  builders: {
    TargetPlatform.android: TopDownPageTransitionsBuilder(),
    TargetPlatform.iOS: TopDownPageTransitionsBuilder(),
    TargetPlatform.macOS: TopDownPageTransitionsBuilder(),
    TargetPlatform.windows: TopDownPageTransitionsBuilder(),
    TargetPlatform.linux: TopDownPageTransitionsBuilder(),
    TargetPlatform.fuchsia: TopDownPageTransitionsBuilder(),
  },
);
