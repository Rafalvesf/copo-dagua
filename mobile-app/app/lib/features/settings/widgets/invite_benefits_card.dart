import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/home/home_providers.dart' show organizerFeeConfigProvider, partnerFeeRatesProvider;
import '../../../core/invites/invites.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/page_kit.dart' show KitTag;

/// «Convidar» nas Definições (pedido 2026-11-16, migração 193): o link de
/// convite (parceiros e organizadores), o progresso «1 de 5», os
/// descontos por usar e o da 1.ª transação.
class InviteBenefitsCard extends ConsumerWidget {
  const InviteBenefitsCard({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final s = ref.watch(myInviteStatsProvider).value;
    final code = s?.code;
    if (s == null || code == null) return const SizedBox.shrink();
    final link = inviteLink(code);
    final green = AppTheme.accentOliveDark;
    final pct = s.creditPct.toStringAsFixed(0);
    // Prémio de convites em pontos (migração 210): 4 % + 1 € → 2 % + 1 €.
    final pts = s.creditPoints == s.creditPoints.roundToDouble()
        ? s.creditPoints.toStringAsFixed(0)
        : s.creditPoints.toStringAsFixed(1).replaceAll('.', ',');
    // A taxa como fica com a oferta (DESIGN.md §6.3: «2 % + 1 €», não só
    // «−2 %»): o 1.º escalão de quem convida menos os pontos.
    final me = ref.watch(authControllerProvider).profile?.id;
    final cfg = s.isPartner
        ? (me == null ? null : ref.watch(partnerFeeRatesProvider(me)).value?.partner)
        : ref.watch(organizerFeeConfigProvider).value;
    final base = cfg == null ? null : (cfg.tiers.isNotEmpty ? cfg.tiers.first.pct : cfg.flatPct);
    String fmt(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(1).replaceAll('.', ',');
    final now = base == null ? null : (base - s.creditPoints).clamp(0, 100).toDouble();
    final feeNow = now == null ? null : '${fmt(now)} % + 1 €';

    Future<void> share() => SharePlus.instance.share(ShareParams(
          text: s.isPartner
              ? 'Organiza o teu evento comigo na À Nossa!: orçamento, contrato e pagamento protegido num só sítio. $link'
              : 'Organiza os teus eventos na À Nossa!. Entra pelo meu convite: $link',
          subject: 'Convite À Nossa!',
        ));

    Future<void> copy() async {
      await copyText(link);
      if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }

    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (s.isFounder || s.credits > 0 || s.welcome)
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: Wrap(spacing: 8, runSpacing: 8, children: [
              if (s.isFounder) KitTag('Parceiro Fundador #${s.founderNumber}'),
              if (s.credits > 0)
                KitTag(feeNow == null
                    ? (s.credits == 1 ? 'Taxa −$pts % na próxima transação' : 'Taxa −$pts % em ${s.credits} transações')
                    : (s.credits == 1 ? 'Taxa a $feeNow na próxima transação' : 'Taxa a $feeNow em ${s.credits} transações')),
              if (s.welcome) KitTag('$pct % na 1.ª transação'),
            ]),
          ),
        Text(s.isPartner ? 'Convida os teus clientes' : 'Convida amigos',
            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        Text(
          'A cada ${s.step} pessoas que entram pelo teu link e fazem o primeiro pagamento, '
          'a taxa de serviço desce $pts % numa transação (ex.: 4 % + 1 € passa a 2 % + 1 €). '
          '${s.step * 2} pessoas, 2 transações; e assim por diante.',
          style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 14),
        Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text('${s.progress}', style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w700, height: 1, color: AppTheme.ink)),
          const SizedBox(width: 8),
          Padding(
            padding: const EdgeInsets.only(bottom: 4),
            child: Text('de ${s.step} convidados', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
        ]),
        const SizedBox(height: 10),
        Row(children: [
          for (var i = 1; i <= s.step; i++) ...[
            if (i > 1) const SizedBox(width: 6),
            Expanded(
              child: Container(
                height: 10,
                decoration: BoxDecoration(
                  color: i <= s.progress ? green : const Color(0xFFECE7DC),
                  borderRadius: BorderRadius.circular(5),
                ),
              ),
            ),
          ],
        ]),
        if (s.pending > 0) ...[
          const SizedBox(height: 8),
          Text('${s.pending} ${s.pending == 1 ? 'entrou e ainda não pagou' : 'entraram e ainda não pagaram'}.',
              style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
        const SizedBox(height: 14),
        Container(
          height: 48,
          padding: const EdgeInsets.only(left: 16, right: 4),
          decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(24)),
          child: Row(children: [
            Expanded(
              child: Text(link, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 14, color: AppTheme.ink)),
            ),
            TextButton(
              onPressed: copy,
              style: TextButton.styleFrom(foregroundColor: AppTheme.ink),
              child: const Text('Copiar', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700)),
            ),
          ]),
        ),
        const SizedBox(height: 12),
        FilledButton(
          onPressed: share,
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.ink,
            foregroundColor: Colors.white,
            minimumSize: const Size.fromHeight(44),
            shape: const StadiumBorder(),
            textStyle: const TextStyle(
                fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
          ),
          child: const Text('Partilhar convite'),
        ),
      ]),
    );
  }
}
