import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../theme_color/theme_color.dart';

import '../../core/theme/app_theme.dart';

/// Qual tratamento de fundo em gradiente um ecrã deve usar — ver
/// AppGradients para os valores concretos de cada um.
enum AppBackground { hero, feed, subtle, mood }

/// Scaffold com fundo em gradiente. ThemeData.scaffoldBackgroundColor só
/// aceita uma Color sólida, por isso este widget pinta o gradiente num
/// Container e embrulha um Scaffold transparente por cima — substitui
/// Scaffold(...) diretamente, sem alterar mais nada no ecrã.
class GradientScaffold extends StatelessWidget {
  const GradientScaffold({
    super.key,
    this.background = AppBackground.subtle,
    this.gradientOverride,
    this.appBar,
    required this.body,
    this.extendBodyBehindAppBar = true,
    this.floatingActionButton,
    this.bottomNavigationBar,
    this.resizeToAvoidBottomInset,
  });

  final AppBackground background;

  /// Escape hatch para ecrãs com um gradiente próprio (ex: cards de
  /// destaque que já definem o seu gradiente localmente).
  final Gradient? gradientOverride;

  final PreferredSizeWidget? appBar;
  final Widget body;
  final bool extendBodyBehindAppBar;
  final Widget? floatingActionButton;
  final Widget? bottomNavigationBar;
  final bool? resizeToAvoidBottomInset;

  Gradient? get _gradient {
    if (gradientOverride != null) return gradientOverride;
    switch (background) {
      case AppBackground.hero:
        return AppGradients.hero;
      case AppBackground.feed:
        return AppGradients.feed;
      case AppBackground.subtle:
        return AppGradients.subtle;
      case AppBackground.mood:
        return null;
    }
  }

  Color? get _flatColor =>
      background == AppBackground.mood ? AppGradients.moodSolid : null;

  /// Cor no topo do ecrã — a primeira do gradiente, ou a cor sólida.
  Color get _topColor =>
      _flatColor ?? _gradient?.colors.first ?? AppTheme.background;

  /// Pedido do utilizador (2026-10-16): "passa [a barra do topo] para a
  /// cor que a app tem nesse momento". No browser, isto atualiza o
  /// `<meta name="theme-color">` (barra de estado/endereço do telemóvel);
  /// nas apps nativas, a cor da app no seletor de apps. Só o ecrã da
  /// rota visível muda a cor.
  void _syncTopColor(BuildContext context) {
    final color = _topColor;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!context.mounted) return;
      // Durante a abertura/brinde a barra está presa ao verde; na web
      // `setApplicationSwitcherDescription` também muda o theme-color e
      // deixava a barra branca por cima do brinde (2026-10-18).
      // A cor fica associada a esta página: ao voltar a ela (ou quando a
      // abertura/brinde soltar a barra) é esta que aparece.
      setRouteBarColor(ModalRoute.of(context), color);
      if (barColorLocked || kIsWeb) return;
      SystemChrome.setApplicationSwitcherDescription(
        ApplicationSwitcherDescription(
          label: 'À Nossa!',
          primaryColor: color.toARGB32(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    _syncTopColor(context);
    return Container(
      decoration: BoxDecoration(gradient: _gradient, color: _flatColor),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        extendBodyBehindAppBar: extendBodyBehindAppBar,
        appBar: appBar,
        // Nevoeiro no topo (2026-11-11, "como no Claude"): o conteúdo que
        // sobe com o scroll desvanece por baixo das horas e da bateria,
        // em vez de ser cortado a direito.
        body: _FogBody(color: _topColor, child: body),
        floatingActionButton: floatingActionButton,
        bottomNavigationBar: bottomNavigationBar,
        resizeToAvoidBottomInset: resizeToAvoidBottomInset,
      ),
    );
  }
}

/// Nevoeiro no topo (2026-11-11, "como no Claude"): quando a página já
/// subiu, o conteúdo desvanece por baixo do topo do ecrã (horas, bateria)
/// em vez de ser cortado a direito. Com a página no início não aparece,
/// para não tapar o título nem os botões.
class _FogBody extends StatefulWidget {
  final Color color;
  final Widget child;
  const _FogBody({required this.color, required this.child});

  @override
  State<_FogBody> createState() => _FogBodyState();
}

class _FogBodyState extends State<_FogBody> {
  bool _scrolled = false;

  bool _onScroll(ScrollNotification n) {
    if (n.metrics.axis != Axis.vertical) return false;
    final s = n.metrics.pixels > 6;
    if (s != _scrolled) setState(() => _scrolled = s);
    return false;
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.color;
    return Stack(children: [
      Positioned.fill(
        child: NotificationListener<ScrollNotification>(onNotification: _onScroll, child: widget.child),
      ),
      Positioned(
        top: 0,
        left: 0,
        right: 0,
        height: MediaQuery.paddingOf(context).top + 34,
        child: IgnorePointer(
          child: AnimatedOpacity(
            opacity: _scrolled ? 1 : 0,
            duration: const Duration(milliseconds: 200),
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [c, c.withValues(alpha: 0.85), c.withValues(alpha: 0)],
                  stops: const [0, 0.4, 1],
                ),
              ),
            ),
          ),
        ),
      ),
    ]);
  }
}
