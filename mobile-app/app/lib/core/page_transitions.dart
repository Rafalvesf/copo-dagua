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
  '/eventos': 0, '/evento': 0, '/wedding': 0, '/partners': 1, '/chat': 2, '/home': 3,
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
// ux-motion (2026-11-25): os separadores usam-se a toda a hora (§20) —
// 260 ms em vez de 460; as páginas abrem em 300 ms e fecham mais
// depressa, em 180 ms (§18).
const _tabDuration = Duration(milliseconds: 260);

/// Fotografia da página que sai, para deslizar ao lado da que entra
/// (2026-11-11: "vê-se o conteúdo da página anterior e aparece o novo").
final Map<ValueKey<String>, GlobalKey> _boundaryKeys = {};
ValueKey<String>? _shownPage;
DateTime? _tabSwitchAt;
bool get _tabSwitching =>
    _tabSwitchAt != null && DateTime.now().difference(_tabSwitchAt!) < _tabDuration + const Duration(milliseconds: 150);
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
const _pushDuration = Duration(milliseconds: 300);
const _popDuration = Duration(milliseconds: 180);

/// Páginas de separador abertas a partir de um cartão (ver [tabRoute]).
final Set<ValueKey<String>> _expandPages = {};

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
      // Aberta a partir de um cartão (2026-11-26: «continua a aparecer por
      // cima»): os eventos abrem rotas de separador (/evento, /guest-home/…)
      // — usam a animação do cartão que cresce e lembram-se disso para,
      // ao sair, encolher para o cartão.
      if (ExpandOrigin.hasPending) _expandPages.add(state.pageKey);
      if ((asButton?.call(state) ?? false) || _expandPages.contains(state.pageKey)) {
        return CustomTransitionPage<void>(
          key: state.pageKey,
          transitionDuration: _pushDuration,
          reverseTransitionDuration: _popDuration,
          transitionsBuilder: (context, a, s, c) => PushTransition(animation: a, child: c),
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
        _tabSwitchAt = DateTime.now();
      }
      final boundary = _boundaryKeys.putIfAbsent(pageKey, () => GlobalKey());
      return CustomTransitionPage<void>(
        key: pageKey,
        transitionDuration: _tabDuration,
        reverseTransitionDuration: _tabDuration,
        transitionsBuilder: (context, animation, secondary, child) =>
            _TabSlide(animation: animation, secondary: secondary, pageKey: pageKey, child: child),
        child: RepaintBoundary(key: boundary, child: child),
      );
    },
  );
}

class _TabSlide extends StatelessWidget {
  final Animation<double> animation;
  final Animation<double> secondary;
  final ValueKey<String> pageKey;
  final Widget child;
  const _TabSlide({required this.animation, required this.secondary, required this.pageKey, required this.child});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([animation, secondary]),
      child: child,
      builder: (context, child) {
        // A entrar vem do lado do separador tocado; a sair vai para o
        // lado oposto. A página que está à vista é arrastada para fora
        // pela nova (2026-11-11), em vez de a nova passar por cima.
        final leaving = animation.status == AnimationStatus.reverse;
        // Voltar com o gesto do Safari: o Safari já animou; a app não
        // mostra a página a sair (evita o "piscar", reportado 2026-10-20).
        if (_fromBrowserBack) {
          return leaving ? Opacity(opacity: 0, child: child) : child!;
        }
        final t = Curves.easeInOutCubic.transform(animation.value);
        final dir = leaving ? -_tabDir : _tabDir;
        // Esta página está a ser tapada por outro separador: sai para o
        // lado oposto ao mesmo ritmo.
        // Só quando quem chega é outro separador (não uma página aberta
        // por um botão, que desce de cima).
        final pushed = _tabSwitching && secondary.status == AnimationStatus.forward
            ? Curves.easeInOutCubic.transform(secondary.value)
            : (secondary.isCompleted && _tabSwitching ? 1.0 : 0.0);
        if (!leaving && animation.isCompleted) {
          _leavingShots.remove(pageKey)?.dispose();
        }
        final shot = leaving || animation.isCompleted ? null : _leavingShots[pageKey];
        return LayoutBuilder(builder: (context, c) {
          final w = c.maxWidth;
          final o = Offset(dir * (1 - t) * w - _tabDir * pushed * w, 0);
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
  Duration get reverseTransitionDuration => _fromBrowserBack ? Duration.zero : _popDuration;

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
    return PushTransition(animation: animation, child: child);
  }
}

/// Cartão que cresce até à página (pedido 2026-11-25, vídeo do Rafael):
/// ao tocar num cartão, guarda-se onde ele está ([capture]); a página que
/// abre a seguir cresce desse retângulo até ao ecrã todo e, ao voltar,
/// encolhe para o mesmo sítio. Só vale para a página aberta logo a seguir
/// ao toque (até 0,8 s).
class ExpandOrigin {
  static Rect? _pending;
  static DateTime? _at;

  static void capture(BuildContext context) {
    final box = context.findRenderObject();
    if (box is! RenderBox || !box.attached || !box.hasSize) return;
    _pending = box.localToGlobal(Offset.zero) & box.size;
    _at = DateTime.now();
  }

  // Até 3 s (2026-11-26): o cartão do organizador espera pela escolha do
  // evento antes de abrir a página.
  static const _window = Duration(seconds: 3);

  /// Há um cartão tocado há pouco à espera da página que vai abrir.
  static bool get hasPending => _pending != null && _at != null && DateTime.now().difference(_at!) < _window;

  static Rect? _take() {
    final fresh = _at != null && DateTime.now().difference(_at!) < _window;
    final r = fresh ? _pending : null;
    _pending = null;
    _at = null;
    return r;
  }
}

final Expando<Rect> _routeOrigin = Expando('origem');
final Expando<bool> _routeDecided = Expando('decidida');

Rect? _originFor(Route<dynamic>? route) {
  if (route == null) return null;
  if (_routeDecided[route] != true) {
    _routeDecided[route] = true;
    final r = ExpandOrigin._take();
    if (r != null) _routeOrigin[route] = r;
  }
  return _routeOrigin[route];
}

/// Escolhe a animação de uma página aberta por um botão: a do cartão que
/// cresce (se veio de um cartão) ou a de cima para baixo.
class PushTransition extends StatelessWidget {
  final Animation<double> animation;
  final Widget child;
  const PushTransition({super.key, required this.animation, required this.child});

  @override
  Widget build(BuildContext context) {
    final origin = _originFor(ModalRoute.of(context));
    final still = MediaQuery.maybeDisableAnimationsOf(context) ?? false;
    if (origin == null || still || _fromBrowserBack) {
      return TopDownTransition(animation: animation, child: child);
    }
    return ExpandTransition(animation: animation, origin: origin, child: child);
  }
}

/// A caixa branca cresce do cartão até ao ecrã todo (cantos 22 → 0, com a
/// sombra das barras) e a página aparece dentro dela; ao voltar, faz o
/// caminho ao contrário. Só pinta (recorte e caixa), não muda o layout.
class ExpandTransition extends StatefulWidget {
  final Animation<double> animation;
  final Rect origin;
  final Widget child;
  const ExpandTransition({super.key, required this.animation, required this.origin, required this.child});

  @override
  State<ExpandTransition> createState() => _ExpandTransitionState();
}

class _ExpandTransitionState extends State<ExpandTransition> {
  Offset _at = Offset.zero;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final b = context.findRenderObject();
      if (!mounted || b is! RenderBox || !b.attached) return;
      final o = b.localToGlobal(Offset.zero);
      if (o != _at) setState(() => _at = o);
    });
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: widget.animation,
      child: widget.child,
      builder: (context, child) {
        final v = widget.animation.value;
        if (v >= 1) return child!;
        final t = Curves.fastOutSlowIn.transform(v);
        final fade = ((v - 0.2) / 0.45).clamp(0.0, 1.0);
        return LayoutBuilder(builder: (context, c) {
          final full = Offset.zero & c.biggest;
          final rect = Rect.lerp(widget.origin.shift(-_at), full, t)!;
          final rrect = RRect.fromRectAndRadius(rect, Radius.circular(22 * (1 - t)));
          return CustomPaint(
            painter: _GrowingBox(rrect),
            child: ClipPath(
              clipper: _RRectClip(rrect),
              child: Opacity(opacity: fade, child: child),
            ),
          );
        });
      },
    );
  }
}

class _GrowingBox extends CustomPainter {
  final RRect rrect;
  _GrowingBox(this.rrect);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRRect(
      rrect.shift(const Offset(0, 8)),
      Paint()
        ..color = const Color(0x1F171713)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12),
    );
    canvas.drawRRect(rrect, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(_GrowingBox old) => old.rrect != rrect;
}

class _RRectClip extends CustomClipper<Path> {
  final RRect rrect;
  _RRectClip(this.rrect);

  @override
  Path getClip(Size size) => Path()..addRRect(rrect);

  @override
  bool shouldReclip(_RRectClip old) => old.rrect != rrect;
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
