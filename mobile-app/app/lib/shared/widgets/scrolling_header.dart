import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';

/// Topo que acompanha o scroll (2026-11-11: "têm que mexer todas top to
/// bottom quando se faz scroll"): o que estava fixo por cima da lista
/// (título, pesquisa, filtros) passa a subir com ela.
///
/// A seta de voltar NÃO sobe (DESIGN.md §6, pedido 2026-11-23): se o topo
/// tem um [PageHeader] com voltar, a seta fica fixa no canto superior
/// esquerdo, por cima da lista, e o [PageHeader] deixa o lugar vazio.
class ScrollingHeader extends StatelessWidget {
  final List<Widget> header;
  final Widget body;
  const ScrollingHeader({super.key, required this.header, required this.body});

  @override
  Widget build(BuildContext context) => PinnedBackFrame(
        child: NestedScrollView(
          headerSliverBuilder: (context, _) => [
            SliverToBoxAdapter(
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: header),
            ),
          ],
          body: body,
        ),
      );
}

/// Seta de voltar fixa por cima de uma página (DESIGN.md §6): quando um
/// [PageHeader] com voltar está lá dentro, a seta fica no canto superior
/// esquerdo e não desce com a lista. O `GradientScaffold` já envolve todas
/// as páginas com isto.
class PinnedBackFrame extends StatefulWidget {
  final Widget child;
  const PinnedBackFrame({super.key, required this.child});

  @override
  State<PinnedBackFrame> createState() => _PinnedBackFrameState();
}

class _PinnedBackFrameState extends State<PinnedBackFrame> {
  final _hasBack = ValueNotifier<bool>(false);

  @override
  void dispose() {
    _hasBack.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final top = MediaQuery.paddingOf(context).top;
    return PinnedBackScope(
      hasBack: _hasBack,
      child: Stack(children: [
        Positioned.fill(child: widget.child),
        ValueListenableBuilder<bool>(
          valueListenable: _hasBack,
          builder: (context, has, _) => has
              ? Positioned(left: AppTheme.screenMargin, top: top + 12, child: const CircleBackButton())
              : const SizedBox.shrink(),
        ),
      ]),
    );
  }
}

/// Diz ao [PageHeader] que a seta de voltar está fixa por cima (e ele só
/// deixa o lugar vazio).
class PinnedBackScope extends InheritedWidget {
  final ValueNotifier<bool> hasBack;
  const PinnedBackScope({super.key, required this.hasBack, required super.child});

  static PinnedBackScope? of(BuildContext context) => context.dependOnInheritedWidgetOfExactType<PinnedBackScope>();

  @override
  bool updateShouldNotify(PinnedBackScope old) => old.hasBack != hasBack;
}
