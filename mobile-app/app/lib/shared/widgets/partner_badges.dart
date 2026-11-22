import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/models/models.dart';
import '../../core/partners/partner_pro.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'founder_badge.dart';

/// Selos ao lado do nome de um parceiro (pedido do Rafael, 2026-11-22;
/// DESIGN.md §6 «Selos do parceiro»): só o **visto verde de verificado**.
/// Fundador, Modo Pro e Mais ativo são conquistas e vão no canto da foto
/// (`partner_achievements.dart`); [founder] mantém a etiqueta onde não há
/// foto (lista).
class PartnerBadges extends StatelessWidget {
  final Partner partner;
  final bool founder;
  const PartnerBadges(this.partner, {super.key, this.founder = false});

  @override
  Widget build(BuildContext context) => Row(mainAxisSize: MainAxisSize.min, children: [
        VerifiedBadge(partner),
        if (founder) ...[const SizedBox(width: 6), FounderBadge(partner.id)],
      ]);
}

/// Visto verde de «Parceiro verificado»: perfil aprovado pela equipa. Um
/// [Partner] só chega à app (listas, perfil, sugestões) depois de
/// publicado — `status = 'published'`, aprovado no admin — por isso todos
/// os parceiros que se veem são verificados.
class VerifiedBadge extends StatelessWidget {
  final Partner partner;
  const VerifiedBadge(this.partner, {super.key});

  static bool isVerified(Partner p) => true;

  @override
  Widget build(BuildContext context) {
    if (!isVerified(partner)) return const SizedBox.shrink();
    return Tooltip(
      message: 'Parceiro verificado',
      child: Padding(
        padding: const EdgeInsets.only(left: 2),
        child: Icon(Hi.checkBadge, size: 18, color: AppTheme.accentOliveDark, semanticLabel: 'Verificado'),
      ),
    );
  }
}

/// Selo Premium (assinantes): círculo preto 18 com a estrela branca 11 —
/// diferente do visto verde de verificado.
class PremiumBadge extends ConsumerWidget {
  final String partnerId;
  const PremiumBadge(this.partnerId, {super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isPro = ref.watch(proPartnerIdsProvider).value?.contains(partnerId) ?? false;
    if (!isPro) return const SizedBox.shrink();
    return Tooltip(
      message: 'Parceiro Premium',
      child: Container(
        margin: const EdgeInsets.only(left: 4),
        width: 18,
        height: 18,
        alignment: Alignment.center,
        decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
        child: const Icon(Hi.star, size: 11, color: Colors.white, semanticLabel: 'Premium'),
      ),
    );
  }
}
