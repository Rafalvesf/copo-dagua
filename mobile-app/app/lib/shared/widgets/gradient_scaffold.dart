import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Qual fundo plano um ecrã deve usar — ver AppGradients para os
/// valores concretos de cada um.
enum AppBackground { hero, feed, subtle, mood }

/// Scaffold com fundo plano cinzento claro — substitui Scaffold(...)
/// diretamente, sem alterar mais nada no ecrã.
class GradientScaffold extends StatelessWidget {
  const GradientScaffold({
    super.key,
    this.background = AppBackground.subtle,
    this.appBar,
    required this.body,
    this.extendBodyBehindAppBar = true,
    this.floatingActionButton,
    this.bottomNavigationBar,
    this.resizeToAvoidBottomInset,
  });

  final AppBackground background;

  final PreferredSizeWidget? appBar;
  final Widget body;
  final bool extendBodyBehindAppBar;
  final Widget? floatingActionButton;
  final Widget? bottomNavigationBar;
  final bool? resizeToAvoidBottomInset;

  Color get _flatColor {
    switch (background) {
      case AppBackground.hero:
        return AppGradients.hero;
      case AppBackground.feed:
        return AppGradients.feed;
      case AppBackground.subtle:
        return AppGradients.subtle;
      case AppBackground.mood:
        return AppGradients.moodSolid;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: _flatColor,
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
