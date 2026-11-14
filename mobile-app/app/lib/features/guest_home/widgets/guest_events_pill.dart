import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Voltar atrás no modo convidado (2026-11-14): só a seta redonda, sem o
/// botão «Os meus eventos». No Início do evento volta a Eventos; na
/// Galeria e nos Presentes volta ao Início do evento.
class GuestEventsPill extends StatelessWidget {
  /// Para onde vai quando não há página anterior.
  final String to;
  const GuestEventsPill({super.key, this.to = '/eventos?tab=meus'});

  @override
  Widget build(BuildContext context) => V2RoundButton(
        icon: Hi.chevronLeft,
        tooltip: 'Voltar',
        onTap: () => context.canPop() ? context.pop() : context.go(to),
      );
}

/// Linha do topo com a seta, para os ecrãs com cabeçalho próprio.
class GuestEventsPillRow extends StatelessWidget {
  final String to;
  const GuestEventsPillRow({super.key, this.to = '/eventos?tab=meus'});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
        child: Align(alignment: Alignment.centerLeft, child: GuestEventsPill(to: to)),
      );
}
