import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

class PartnerReviewsScreen extends ConsumerWidget {
  const PartnerReviewsScreen({super.key});

  Future<void> _respond(
    BuildContext context,
    WidgetRef ref,
    Review review,
  ) async {
    final controller = TextEditingController(text: review.response ?? '');
    final text = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
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
    await MockBackend.instance.respondToReview(review.id, text.trim());
    ref.invalidate(partnerReviewsProvider);
  }

  Future<void> _report(BuildContext context, Review review) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Denunciar avaliação'),
        content: Text(
          'Denunciar a avaliação de ${review.authorName} para revisão da equipa Copo d\'Água?',
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
    if (confirmed != true || !context.mounted) return;
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
                      fontSize: 34,
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
                      fontSize: 13,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: reviewsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) =>
                    const Center(child: Text('Não foi possível carregar.')),
                data: (reviews) => ListView.builder(
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
                      onReport: () => _report(context, reviews[index]),
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                0,
                AppTheme.screenMargin,
                16,
              ),
              child: SnappyTap.builder(
                onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Já estás a ver todas as avaliações.'),
                  ),
                ),
                builder: (context, hovered) => Container(
                  height: 52,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    borderRadius: BorderRadius.circular(999),
                    boxShadow: hovered
                        ? AppTheme.cardShadowStrong
                        : AppTheme.cardShadow,
                  ),
                  child: const Text(
                    'Ver todas as avaliações',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                      fontSize: 15,
                    ),
                  ),
                ),
              ),
            ),
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
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CircleAvatar(
                radius: 20,
                backgroundColor: AppColors.green,
                backgroundImage: NetworkImage(
                  'https://i.pravatar.cc/150?u=${review.avatarSeed}',
                ),
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
                            review.authorName,
                            style: const TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 14,
                            ),
                          ),
                        ),
                        Text(
                          '${review.date.day.toString().padLeft(2, '0')}/${review.date.month.toString().padLeft(2, '0')}/${review.date.year}',
                          style: const TextStyle(
                            color: AppTheme.inkMuted,
                            fontSize: 11.5,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4),
                    _StarRow(rating: review.rating, size: 14),
                    const SizedBox(height: 6),
                    Text(
                      review.comment,
                      style: const TextStyle(
                        color: AppTheme.inkMuted,
                        fontSize: 13,
                        height: 1.4,
                      ),
                    ),
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
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'A tua resposta',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 11.5,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    review.response!,
                    style: const TextStyle(
                      color: AppTheme.ink,
                      fontSize: 12.5,
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
