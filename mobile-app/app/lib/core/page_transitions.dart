import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

/// Animações de navegação da app (pedido do utilizador, 2026-10-19):
/// - navbar: o separador novo desliza na horizontal, sem sombra;
/// - botões (qualquer outra página): a página desce de cima para baixo,
///   com sombra.

/// Ordem dos separadores de cada navbar (organizadores, parceiros e
/// convidados). Decide para que lado desliza a troca de separador.
const Map<String, int> _tabOrder = {
  '/partners': 0, '/wedding': 1, '/chat': 2, '/home': 3,
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

const _tabDuration = Duration(milliseconds: 320);
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
      if (index != _currentTab) {
        _tabDir = index > _currentTab ? 1 : -1;
        _currentTab = index;
      }
      return CustomTransitionPage<void>(
        key: state.pageKey,
        transitionDuration: _tabDuration,
        reverseTransitionDuration: _tabDuration,
        transitionsBuilder: (context, animation, secondary, child) => _TabSlide(animation: animation, child: child),
        child: child,
      );
    },
  );
}

class _TabSlide extends StatelessWidget {
  final Animation<double> animation;
  final Widget child;
  const _TabSlide({required this.animation, required this.child});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animation,
      child: child,
      builder: (context, child) {
        // A entrar vem do lado da direção; a sair vai para o lado oposto.
        final leaving = animation.status == AnimationStatus.reverse;
        final t = Curves.easeOutCubic.transform(animation.value);
        final dx = (leaving ? -_tabDir : _tabDir) * (1 - t);
        return LayoutBuilder(builder: (context, c) {
          final o = Offset(dx * c.maxWidth, 0);
          return Transform.translate(offset: o, child: PageMotion(offset: o, child: child!));
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
