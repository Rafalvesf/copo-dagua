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
      if (!(ModalRoute.of(context)?.isCurrent ?? true)) return;
      // Durante a abertura/brinde a barra está presa ao verde; na web
      // `setApplicationSwitcherDescription` também muda o theme-color e
      // deixava a barra branca por cima do brinde (2026-10-18).
      if (barColorLocked) return;
      SystemChrome.setApplicationSwitcherDescription(
        ApplicationSwitcherDescription(
          label: 'Tchin Tchin',
          primaryColor: color.toARGB32(),
        ),
      );
      setBarColor(color);
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
        body: body,
        floatingActionButton: floatingActionButton,
        bottomNavigationBar: bottomNavigationBar,
        resizeToAvoidBottomInset: resizeToAvoidBottomInset,
      ),
    );
  }
}
