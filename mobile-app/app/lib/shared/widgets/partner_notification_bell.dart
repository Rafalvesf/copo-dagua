import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/notifications/partner_notifications_providers.dart';
import '../../core/theme/app_theme.dart';
import 'count_badge.dart';
import 'feedback.dart';
import 'island_sheet.dart';
import 'push_opt_in.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Sino de notificações do parceiro e do convidado — versão simples do sino do casal
/// (`home_feed_screen.dart`, `_NotificationsSheet`), sem os separadores
/// Todas/Não lidas/Lidas. Ver `partner_notifications_providers.dart`.
class PartnerNotificationBell extends ConsumerWidget {
  /// Já não muda nada: o sino é sempre o redondo preto 44.
  final bool round;
  const PartnerNotificationBell({super.key, this.round = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final unread = ref.watch(partnerUnreadNotificationsCountProvider);
    // Sempre o botão redondo preto 44 com o sino branco e o número por ler
    // (DESIGN.md §2; pedido 2026-11-23 — antes, fora do perfil, era um sino
    // solto com um ponto verde).
    return Tooltip(
      message: 'Notificações',
      excludeFromSemantics: true,
      child: Semantics(
        button: true,
        label: unread > 0 ? 'Notificações, $unread por ler' : 'Notificações',
        child: GestureDetector(
          onTap: () async {
            await showIslandSheet(
              context: context,
              isScrollControlled: true,
              builder: (context) => const _PartnerNotificationsSheet(),
            );
            ref.invalidate(partnerNotificationsProvider);
          },
          child: WithCount(
            count: unread,
            child: Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: const Center(child: Icon(Hi.bell, size: 20, color: Colors.white)),
            ),
          ),
        ),
      ),
    );
  }
}

class _PartnerNotificationsSheet extends ConsumerWidget {
  const _PartnerNotificationsSheet();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final notificationsAsync = ref.watch(partnerNotificationsProvider);

    return DraggableScrollableSheet(
      initialChildSize: 0.6,
      minChildSize: 0.3,
      maxChildSize: 0.9,
      expand: false,
      builder: (context, scrollController) {
        return Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
          ),
          child: Column(
            children: [
              const SizedBox(height: 12),
              Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: AppTheme.borderMuted,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                'Notificações',
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg),
              ),
              const SizedBox(height: 12),
              const PushOptInCard(),
              Expanded(
                child: notificationsAsync.when(
                  loading: () => const SkeletonList(),
                  error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(partnerNotificationsProvider)),
                  data: (notifications) {
                    if (notifications.isEmpty) {
                      return const EmptyStateView(message: 'Sem notificações.', icon: Hi.bell);
                    }
                    return ListView.builder(
                      controller: scrollController,
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      itemCount: notifications.length,
                      itemBuilder: (context, index) {
                        final n = notifications[index];
                        return ListTile(
                          leading: Icon(
                            switch (n.type) {
                              'new_message' => n.read ? Hi.chatBubbleOvalLeft : Hi.chatBubbleOvalLeft,
                              'support_reply' => Hi.lifebuoy,
                              'admin_message' => Hi.megaphone,
                              _ => n.read ? Hi.bell : Hi.bellAlert,
                            },
                            color: n.read ? AppTheme.inkMuted : AppTheme.accentOliveDark,
                          ),
                          title: Text(
                            n.title,
                            style: TextStyle(
                              fontWeight: n.read ? FontWeight.w600 : FontWeight.w700,
                            ),
                          ),
                          subtitle: n.body == null ? null : Text(n.body!, maxLines: 2, overflow: TextOverflow.ellipsis),
                          onTap: () async {
                            if (!n.read) {
                              await markPartnerNotificationRead(n.id);
                              ref.invalidate(partnerNotificationsProvider);
                            }
                            final link = n.link;
                            if (link != null && context.mounted) {
                              Navigator.of(context).pop();
                              GoRouter.of(context).push(link);
                            }
                          },
                        );
                      },
                    );
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
