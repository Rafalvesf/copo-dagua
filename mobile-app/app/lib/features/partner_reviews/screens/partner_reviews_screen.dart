import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/review_tile.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/island_sheet.dart';

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
    final reviewsAsync = ref.watch(partnerReviewsProvider);
    final profile = ref.watch(authControllerProvider).profile;
    final partnerName = (profile?.businessName?.isNotEmpty ?? false) ? profile!.businessName! : (profile?.fullName ?? 'Parceiro');
    final partnerAvatar = profile?.logoUrl ?? profile?.avatarUrl;

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
            const SizedBox(height: 12),
            Expanded(
              child: reviewsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerReviewsProvider)),
                data: (reviews) => ListView(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 32),
                  children: [
                    // Redesign 2026-10-20: resumo com distribuição, cartões
                    // com a foto do casal e a resposta em conversa.
                    ReviewSummaryCard(reviews: reviews),
                    const SizedBox(height: 16),
                    if (reviews.isEmpty)
                      const Padding(
                        padding: EdgeInsets.all(24),
                        child: InfoNote(
                          'Ainda não tens avaliações — aparecem aqui assim que um casal avaliar uma reserva concluída.',
                          icon: Icons.star_outline_rounded,
                        ),
                      )
                    else ...[
                      if (reviews.any((r) => r.response == null))
                        Padding(
                          padding: const EdgeInsets.only(bottom: 12, left: 4),
                          child: Text(
                            '${reviews.where((r) => r.response == null).length} por responder — responder mostra aos casais que te importas.',
                            style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                          ),
                        ),
                      for (final r in reviews) ...[
                        ReviewTile(
                          review: r,
                          partnerName: partnerName,
                          partnerAvatarUrl: partnerAvatar,
                          partnerSide: true,
                          onRespond: () => _respond(context, ref, r),
                          onReport: () => _report(context, ref, r),
                        ),
                        const SizedBox(height: 12),
                      ],
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
