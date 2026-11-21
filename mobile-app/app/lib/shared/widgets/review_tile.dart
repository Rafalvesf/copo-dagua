import 'organizers_card.dart' show RowPillButton;
import 'snappy_tap.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'line_icon.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/app_progress.dart';

String _date(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';

/// "Há quanto tempo tem conta" — só a antiguidade, nunca a data exata.
String reviewAccountAge(DateTime createdAt) {
  final days = DateTime.now().difference(createdAt).inDays;
  if (days < 30) return 'conta há ${days < 1 ? 1 : days} dias';
  if (days < 365) return 'conta há ${(days / 30).floor()} meses';
  final years = (days / 365).floor();
  return 'conta há $years ${years == 1 ? 'ano' : 'anos'}';
}

/// Avaliação com a foto do casal e a resposta do parceiro em conversa
/// (com a foto/logótipo do parceiro) — igual no perfil público e na
/// página de avaliações do parceiro (pedido do utilizador, 2026-10-20).
class ReviewTile extends StatelessWidget {
  final Review review;
  final String partnerName;
  final String? partnerAvatarUrl;

  /// Lado do parceiro: mostra os factos públicos do casal e as ações.
  final bool partnerSide;
  final VoidCallback? onRespond;
  final VoidCallback? onReport;

  const ReviewTile({
    super.key,
    required this.review,
    required this.partnerName,
    this.partnerAvatarUrl,
    this.partnerSide = false,
    this.onRespond,
    this.onReport,
    this.embedded = false,
  });

  /// Dentro do cartão «Experiência geral» do perfil do parceiro (mockup
  /// «Perfil do parceiro», 2026-11-20): sem cartão próprio, linha por cima,
  /// meta «Lisboa · outubro 2026» e o comentário justificado.
  final bool embedded;

  @override
  Widget build(BuildContext context) {
    final r = review;
    final meta = partnerSide
        ? [
            reviewAccountAge(r.accountCreatedAt),
            if (r.weddingDate != null) 'evento a ${_date(r.weddingDate!)}',
            if (r.location != null && r.location!.isNotEmpty) r.location!,
            if (r.estimatedGuests != null) '~${r.estimatedGuests} convidados',
          ].join(' · ')
        : embedded
            ? [
                if (r.location != null && r.location!.isNotEmpty) r.location!.split(', ').first,
                _monthYear(r.weddingDate ?? r.createdAt),
              ].join(' · ')
            : _date(r.createdAt);
    return Container(
      // Mockup "Perfil do parceiro" (2026-11-12): cartão branco liso.
      padding: embedded ? const EdgeInsets.only(top: 16) : const EdgeInsets.all(16),
      decoration: embedded
          ? const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFD9D9D9))))
          : BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
          V2Avatar(r.coupleDisplayName, size: partnerSide ? 44 : 40, imageUrl: r.coupleAvatarUrl, flat: true),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(r.coupleDisplayName,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          // Do lado do parceiro as estrelas já estão por baixo (mockup).
          if (!partnerSide) ...[const SizedBox(width: 8), _RatingChip(r.rating, ink: embedded)],
        ]),
        if (partnerSide || r.status != 'published') ...[
        const SizedBox(height: 10),
        Row(children: [
          for (var i = 1; i <= 5; i++)
            Icon(i <= r.rating ? Hi.star : Hi.starOutline, size: 18, color: const Color(0xFFF2B33D)),
          if (partnerSide) ...[
            const SizedBox(width: 8),
            Text(_date(r.createdAt), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ],
          if (r.status != 'published') ...[
            const SizedBox(width: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              decoration: BoxDecoration(
                color: r.status == 'flagged' ? AppStatusColors.declined.withValues(alpha: 0.12) : const Color(0xFFF2F2F2),
                borderRadius: BorderRadius.circular(99),
              ),
              child: Text(r.status == 'flagged' ? 'Denunciada' : 'Removida',
                  style: TextStyle(
                      fontSize: AppFontSize.xxs,
                      fontWeight: FontWeight.w700,
                      color: r.status == 'flagged' ? AppStatusColors.declined : v2Muted)),
            ),
          ],
        ]),
        ],
        if (r.comment != null && r.comment!.trim().isNotEmpty) ...[
          const SizedBox(height: 10),
          Text(r.comment!.trim(),
              textAlign: embedded ? TextAlign.justify : TextAlign.start,
              style: TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w600, color: embedded ? AppTheme.ink : const Color(0xFF3A3733))),
        ],
        if (r.response != null && r.response!.trim().isNotEmpty) ...[
          const SizedBox(height: 12),
          _Reply(
            partnerName: partnerName,
            partnerAvatarUrl: partnerAvatarUrl,
            text: r.response!.trim(),
            date: r.responseAt,
            mine: partnerSide,
          ),
        ],
        if (partnerSide && (onRespond != null || onReport != null)) ...[
          const SizedBox(height: 12),
          Row(children: [
            // Mockup «Páginas do parceiro» → Avaliações: «Responder»
            // secundário 36 e «Denunciar» em texto.
            if (onRespond != null)
              RowPillButton(
                label: r.response == null ? 'Responder' : 'Editar resposta',
                secondary: true,
                onTap: onRespond,
              ),
            const Spacer(),
            if (onReport != null && r.status == 'published')
              SnappyTap(
                onTap: onReport,
                child: const Text('Denunciar', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
          ]),
        ],
      ]),
    );
  }
}

class _RatingChip extends StatelessWidget {
  final int rating;

  /// Estrela preta e 12 negrito, como a nota do resumo (mockup).
  final bool ink;
  const _RatingChip(this.rating, {this.ink = false});

  @override
  Widget build(BuildContext context) => Row(mainAxisSize: MainAxisSize.min, children: [
        LineIcon(LineIcon.star, size: 13, fill: true, color: ink ? AppTheme.ink : const Color(0xFFC9A24A)),
        SizedBox(width: ink ? 4 : 3),
        Text('$rating,0', style: TextStyle(fontSize: ink ? 12 : 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      ]);
}

const _months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
String _monthYear(DateTime d) => '${_months[d.month - 1]} ${d.year}';

/// Resposta do parceiro: ligada à avaliação por uma linha, com a foto do
/// parceiro e o texto num balão.
class _Reply extends StatelessWidget {
  final String partnerName;
  final String? partnerAvatarUrl;
  final String text;
  final DateTime? date;
  final bool mine;
  const _Reply({required this.partnerName, required this.partnerAvatarUrl, required this.text, required this.date, required this.mine});

  @override
  Widget build(BuildContext context) {
    return IntrinsicHeight(
      child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        // Linha de ligação, à altura do avatar do casal.
        Container(
          width: 2,
          margin: const EdgeInsets.only(left: 21, right: 12, bottom: 18),
          decoration: BoxDecoration(color: const Color(0xFFE4E2DC), borderRadius: BorderRadius.circular(2)),
        ),
        Expanded(
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            V2Avatar(partnerName, size: 30, imageUrl: partnerAvatarUrl, flat: true),
            const SizedBox(width: 8),
            Expanded(
              child: Container(
                padding: const EdgeInsets.fromLTRB(12, 9, 12, 10),
                decoration: const BoxDecoration(
                  color: Color(0xFFF2F2F2),
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(4),
                    topRight: Radius.circular(16),
                    bottomLeft: Radius.circular(16),
                    bottomRight: Radius.circular(16),
                  ),
                ),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Flexible(
                      child: Text(mine ? 'A tua resposta' : partnerName,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    const SizedBox(width: 6),
                    Icon(Hi.checkBadge, size: 14, color: AppTheme.accentOliveDark),
                    if (date != null) ...[
                      const SizedBox(width: 6),
                      Text(_date(date!), style: const TextStyle(fontSize: AppFontSize.xxs, color: v2Muted)),
                    ],
                  ]),
                  const SizedBox(height: 3),
                  Text(text, style: const TextStyle(fontSize: AppFontSize.sm, height: 1.4, color: AppTheme.ink)),
                ]),
              ),
            ),
          ]),
        ),
      ]),
    );
  }
}

class _Pill extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _Pill({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => Material(
        color: const Color(0xFFF2F2F2),
        shape: const StadiumBorder(),
        child: InkWell(
          customBorder: const StadiumBorder(),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 8, 14, 8),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, size: 16, color: AppTheme.accentOliveDark),
              const SizedBox(width: 6),
              Text(label, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
        ),
      );
}

/// Resumo: média, estrelas e distribuição 5→1.
class ReviewSummaryCard extends StatelessWidget {
  final List<Review> reviews;
  const ReviewSummaryCard({super.key, required this.reviews});

  @override
  Widget build(BuildContext context) {
    final n = reviews.length;
    final avg = n == 0 ? 0.0 : reviews.map((r) => r.rating).reduce((a, b) => a + b) / n;
    final counts = {for (var s = 1; s <= 5; s++) s: reviews.where((r) => r.rating == s).length};
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Row(children: [
        Column(children: [
          Text(avg.toStringAsFixed(1).replaceAll('.', ','),
              style: AppTypography.displaySerif(fontSize: 44, color: AppTheme.ink)),
          Row(mainAxisSize: MainAxisSize.min, children: [
            for (var i = 1; i <= 5; i++)
              Icon(i <= avg.round() ? Hi.star : Hi.starOutline, size: 16, color: const Color(0xFFF2B33D)),
          ]),
          const SizedBox(height: 4),
          Text('$n ${n == 1 ? 'avaliação' : 'avaliações'}', style: const TextStyle(fontSize: AppFontSize.xs, color: v2Muted)),
        ]),
        const SizedBox(width: 20),
        Expanded(
          child: Column(children: [
            for (var s = 5; s >= 1; s--)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 2.5),
                child: Row(children: [
                  SizedBox(width: 12, child: Text('$s', style: const TextStyle(fontSize: AppFontSize.xs, color: v2Muted))),
                  const SizedBox(width: 6),
                  Expanded(
                    child: AppProgressBar(value: n == 0 ? 0 : counts[s]! / n, height: 7, track: const Color(0xFFF2F2F2)),
                  ),
                  const SizedBox(width: 8),
                  SizedBox(width: 18, child: Text('${counts[s]}', textAlign: TextAlign.right, style: const TextStyle(fontSize: AppFontSize.xs, color: v2Muted))),
                ]),
              ),
          ]),
        ),
      ]),
    );
  }
}
