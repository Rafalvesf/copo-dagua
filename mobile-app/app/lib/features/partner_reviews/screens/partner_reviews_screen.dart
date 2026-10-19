import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/island_sheet.dart';

/// "Há quanto tempo tem conta" — só a antiguidade, nunca a data exata
/// (evita ler como um dado pessoal/sensível). Pedido explícito do
/// utilizador.
String _accountAge(DateTime createdAt) {
  final days = DateTime.now().difference(createdAt).inDays;
  if (days < 30) return 'conta há ${days < 1 ? 1 : days} dias';
  if (days < 365) return 'conta há ${(days / 30).floor()} meses';
  final years = (days / 365).floor();
  return 'conta há $years ${years == 1 ? 'ano' : 'anos'}';
}

class PartnerReviewsScreen extends ConsumerWidget {
  const PartnerReviewsScreen({super.key});

  Future<void> _respond(
    BuildContext context,
    WidgetRef ref,
    Review review,
  ) async {
    final controller = TextEditingController(text: review.response ?? '');
    final text = await showIslandDialog<String>(
      context: context,
      builder: (context) => IslandAlert(
        title: Text(
          review.response == null ? 'Responder' : 'Editar resposta',
        ),
        content: TextField(
          controller: controller,
          autofocus: true,
          maxLines: 3,
          decoration: const InputDecoration(
            hintText: 'Escreve a tua resposta...',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (text == null || text.trim().isEmpty) return;
    await respondToReview(ref, review.id, text.trim());
  }

  Future<void> _report(BuildContext context, WidgetRef ref, Review review) async {
    final confirmed = await showIslandDialog<bool>(
      context: context,
      builder: (context) => IslandAlert(
        title: const Text('Denunciar avaliação'),
        content: const Text(
          'Denunciar esta avaliação para revisão da equipa À Nossa!? Deixa de aparecer no teu perfil público até a equipa decidir.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: const Text('Denunciar'),
          ),
        ],
      ),
    );
    if (confirmed != true) return;
    await flagReview(ref, review.id);
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Avaliação denunciada para revisão.')),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final summary = ref.watch(partnerReviewSummaryProvider);
    final reviewsAsync = ref.watch(partnerReviewsProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            PageHeader(
              title: 'Avaliações',
              subtitle: 'O que os casais dizem sobre ti.',
              trailing: const AccountSwitcherBadge(),
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: AppTheme.screenMargin,
              ),
              child: Row(
                children: [
                  Text(
                    summary.average.toStringAsFixed(1),
                    style: AppTypography.displaySerif(
                      fontSize: AppFontSize.display,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(width: 12),
                  _StarRow(rating: summary.average.round(), size: 18),
                  const SizedBox(width: 8),
                  Text(
                    '(${summary.count} avaliações)',
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: AppFontSize.md,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: reviewsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerReviewsProvider)),
                data: (reviews) => reviews.isEmpty
                    ? Center(
                        child: Padding(
                          padding: const EdgeInsets.all(24),
                          child: Text(
                            'Ainda não têm avaliações — aparecem aqui assim que um casal avaliar uma reserva concluída.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: AppTheme.inkMuted),
                          ),
                        ),
                      )
                    : ListView.builder(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          0,
                          AppTheme.screenMargin,
                          16,
                        ),
                        itemCount: reviews.length,
                        itemBuilder: (context, index) => Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: _ReviewCard(
                            review: reviews[index],
                            onRespond: () => _respond(context, ref, reviews[index]),
                            onReport: () => _report(context, ref, reviews[index]),
                          ),
                        ),
                      ),
              ),
            ),
            // Saiu o botão "Ver todas as avaliações": a lista acima já
            // mostra todas, e o botão só dizia isso numa mensagem.
          ],
        ),
      ),
    );
  }
}

class _ReviewCard extends StatelessWidget {
  final Review review;
  final VoidCallback onRespond;
  final VoidCallback onReport;

  const _ReviewCard({
    required this.review,
    required this.onRespond,
    required this.onReport,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              review.coupleAvatarUrl == null
                  ? InitialsAvatar(name: review.coupleDisplayName, radius: 20)
                  : CircleAvatar(
                      radius: 20,
                      backgroundColor: AppColors.gray,
                      backgroundImage: NetworkImage(review.coupleAvatarUrl!),
                    ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            review.coupleDisplayName,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: AppFontSize.md,
                              color: AppTheme.ink,
                            ),
                          ),
                        ),
                        Text(
                          '${review.createdAt.day.toString().padLeft(2, '0')}/${review.createdAt.month.toString().padLeft(2, '0')}/${review.createdAt.year}',
                          style: const TextStyle(
                            color: AppTheme.inkMuted,
                            fontSize: AppFontSize.xs,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 2),
                    // Só factos já públicos no perfil do casal, nunca
                    // orçamento/contactos — pedido explícito do
                    // utilizador: "informações... interessantes mas
                    // não secretas ou pessoais".
                    Text(
                      [
                        _accountAge(review.accountCreatedAt),
                        if (review.weddingDate != null)
                          'casamento em ${review.weddingDate!.day.toString().padLeft(2, '0')}/${review.weddingDate!.month.toString().padLeft(2, '0')}/${review.weddingDate!.year}',
                        if (review.location != null && review.location!.isNotEmpty)
                          review.location!,
                        if (review.estimatedGuests != null)
                          '~${review.estimatedGuests} convidados',
                      ].join(' · '),
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
                    ),
                    const SizedBox(height: 6),
                    Row(
                      children: [
                        _StarRow(rating: review.rating, size: 14),
                        if (review.status != 'published') ...[
                          const SizedBox(width: 6),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                            decoration: BoxDecoration(
                              color: review.status == 'flagged'
                                  ? AppStatusColors.declined.withValues(alpha: 0.15)
                                  : AppTheme.borderMuted,
                              borderRadius: BorderRadius.circular(AppRadius.pill),
                            ),
                            child: Text(
                              review.status == 'flagged' ? 'Denunciada' : 'Removida',
                              style: TextStyle(
                                fontSize: AppFontSize.xxs,
                                fontWeight: FontWeight.w700,
                                color: review.status == 'flagged'
                                    ? AppStatusColors.declined
                                    : AppTheme.inkMuted,
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                    if (review.comment != null) ...[
                      const SizedBox(height: 6),
                      Text(
                        review.comment!,
                        style: const TextStyle(
                          color: AppTheme.inkMuted,
                          fontSize: AppFontSize.md,
                          height: 1.4,
                        ),
                      ),
                    ],
                  ],
                ),
              ),
              PopupMenuButton<String>(
                icon: const Icon(
                  Icons.more_horiz,
                  size: 18,
                  color: AppTheme.inkMuted,
                ),
                onSelected: (value) {
                  if (value == 'respond') onRespond();
                  if (value == 'report') onReport();
                },
                itemBuilder: (context) => [
                  PopupMenuItem(
                    value: 'respond',
                    child: Text(
                      review.response == null ? 'Responder' : 'Editar resposta',
                    ),
                  ),
                  const PopupMenuItem(
                    value: 'report',
                    child: Text('Denunciar'),
                  ),
                ],
              ),
            ],
          ),
          if (review.response != null) ...[
            const SizedBox(height: 10),
            Container(
              margin: const EdgeInsets.only(left: 32),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppColors.muted,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'A tua resposta',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: AppFontSize.xs,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    review.response!,
                    style: const TextStyle(
                      color: AppTheme.ink,
                      fontSize: AppFontSize.sm,
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _StarRow extends StatelessWidget {
  final int rating;
  final double size;

  const _StarRow({required this.rating, this.size = 16});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (var i = 1; i <= 5; i++)
          Icon(
            i <= rating ? Icons.star_rounded : Icons.star_border_rounded,
            size: size,
            color: Colors.amber,
          ),
      ],
    );
  }
}
