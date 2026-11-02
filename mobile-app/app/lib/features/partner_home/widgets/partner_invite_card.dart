import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/partners/partner_referrals.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Painel do parceiro (migração 151): selo "Parceiro Fundador" e o link
/// para convidar os próprios clientes — a cada 5, o 5.º sem comissão.
class PartnerInviteCard extends ConsumerWidget {
  const PartnerInviteCard({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final stats = ref.watch(myPartnerReferralStatsProvider).value;
    final code = stats?.code;
    if (stats == null || code == null) return const SizedBox.shrink();
    final link = partnerInviteLink(code);
    final green = AppTheme.accentOliveDark;

    Future<void> share() async {
      await SharePlus.instance.share(ShareParams(
        text: 'Organiza o teu evento comigo na À Nossa!: orçamento, contrato e pagamento protegido num só sítio. $link',
        subject: 'Convite À Nossa!',
      ));
    }

    Future<void> copy() async {
      await Clipboard.setData(ClipboardData(text: link));
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
      }
    }

    return Container(
      padding: const EdgeInsets.all(18),
      decoration: softCard(radius: 24),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        if (stats.isFounder) ...[
          Container(
            padding: const EdgeInsets.fromLTRB(8, 4, 10, 4),
            decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(999)),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(Icons.workspace_premium_rounded, size: 16, color: green),
              const SizedBox(width: 5),
              Text('Parceiro Fundador #${stats.founderNumber}',
                  style: TextStyle(fontSize: AppFontSize.sm + 1, fontWeight: FontWeight.w800, color: green)),
            ]),
          ),
          if (stats.featuredActive) ...[
            const SizedBox(height: 6),
            Text(
              'Em destaque grátis até ${_date(stats.featuredUntil!)}.',
              style: const TextStyle(fontSize: AppFontSize.sm + 1, color: AppTheme.inkMuted),
            ),
          ],
          const SizedBox(height: 14),
        ],
        const Text('Convida os teus clientes',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        const SizedBox(height: 4),
        Text(
          'A cada ${stats.freeEvery} clientes que trazes pelo teu link, o ${stats.freeEvery}.º fica '
          'sem comissão nas reservas contigo. Os outros pagam a comissão normal.',
          style: const TextStyle(fontSize: AppFontSize.sm + 1, height: 1.4, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 12),
        // Progresso até ao próximo cliente sem comissão.
        Row(children: [
          for (var i = 1; i <= stats.freeEvery; i++) ...[
            if (i > 1) const SizedBox(width: 6),
            Expanded(
              child: Container(
                height: 8,
                decoration: BoxDecoration(
                  color: i <= stats.freeEvery - stats.untilNextFree ? green : AppTheme.accentTint,
                  borderRadius: BorderRadius.circular(999),
                ),
              ),
            ),
          ],
        ]),
        const SizedBox(height: 12),
        Container(
          padding: const EdgeInsets.fromLTRB(12, 4, 4, 4),
          decoration: BoxDecoration(color: const Color(0xFFF4F2EC), borderRadius: BorderRadius.circular(14)),
          child: Row(children: [
            Expanded(
              child: Text(link,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: AppFontSize.sm + 1, fontWeight: FontWeight.w600, color: AppTheme.ink)),
            ),
            IconButton(
              tooltip: 'Copiar link',
              onPressed: copy,
              icon: Icon(Icons.copy_rounded, size: 18, color: green),
            ),
          ]),
        ),
        const SizedBox(height: 12),
        FilledButton.icon(
          onPressed: share,
          icon: const Icon(Icons.ios_share_rounded, size: 18),
          label: const Text('Partilhar convite'),
          style: FilledButton.styleFrom(
            backgroundColor: green,
            foregroundColor: Colors.white,
            minimumSize: const Size.fromHeight(46),
            shape: const StadiumBorder(),
          ),
        ),
        const SizedBox(height: 10),
        Text(
          [
            stats.validClients == 0
                ? 'Ainda nenhum cliente entrou pelo teu link.'
                : '${stats.validClients} ${stats.validClients == 1 ? 'cliente entrou' : 'clientes entraram'} pelo teu link'
                    '${stats.freeClients > 0 ? ' (${stats.freeClients} sem comissão)' : ''}.',
            stats.untilNextFree == 1
                ? 'O próximo cliente fica sem comissão.'
                : 'Faltam ${stats.untilNextFree} para o próximo sem comissão.',
          ].join(' '),
          style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
        ),
      ]),
    );
  }

  static String _date(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
}
