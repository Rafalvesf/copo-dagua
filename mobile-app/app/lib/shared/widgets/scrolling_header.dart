import 'package:flutter/material.dart';

/// Topo que acompanha o scroll (2026-11-11: "têm que mexer todas top to
/// bottom quando se faz scroll"): o que estava fixo por cima da lista
/// (título, pesquisa, filtros) passa a subir com ela.
class ScrollingHeader extends StatelessWidget {
  final List<Widget> header;
  final Widget body;
  const ScrollingHeader({super.key, required this.header, required this.body});

  @override
  Widget build(BuildContext context) => NestedScrollView(
        headerSliverBuilder: (context, _) => [
          SliverToBoxAdapter(
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: header),
          ),
        ],
        body: body,
      );
}
