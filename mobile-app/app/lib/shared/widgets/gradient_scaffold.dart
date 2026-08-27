import 'package:flutter/material.dart';

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

  @override
  Widget build(BuildContext context) {
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
