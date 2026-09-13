import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/notifications/partner_notifications_providers.dart';
import '../../core/theme/app_theme.dart';

/// Sino de notificações do parceiro — versão simples do sino do casal
/// (`home_feed_screen.dart`, `_NotificationsSheet`), sem os separadores
/// Todas/Não lidas/Lidas. Ver `partner_notifications_providers.dart`.
class PartnerNotificationBell extends ConsumerWidget {
  const PartnerNotificationBell({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final unread = ref.watch(partnerUnreadNotificationsCountProvider);

    return Stack(
      clipBehavior: Clip.none,
      children: [
        IconButton(
          icon: const Icon(Icons.notifications_none_rounded, color: AppTheme.ink),
          onPressed: () => showModalBottomSheet(
            context: context,
            isScrollControlled: true,
            builder: (context) => const _PartnerNotificationsSheet(),
          ),
        ),
        if (unread > 0)
          Positioned(
            top: 6,
            right: 6,
            child: Container(
              width: 9,
              height: 9,
              decoration: const BoxDecoration(
                color: AppTheme.accentOliveDark,
                shape: BoxShape.circle,
              ),
            ),
          ),
      ],
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
            borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
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
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16),
              ),
              const SizedBox(height: 12),
              Expanded(
                child: notificationsAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (err, st) =>
                      const Center(child: Text('Não foi possível carregar.')),
                  data: (notifications) {
                    if (notifications.isEmpty) {
                      return const Center(child: Text('Sem notificações.'));
                    }
                    return ListView.builder(
                      controller: scrollController,
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      itemCount: notifications.length,
                      itemBuilder: (context, index) {
                        final n = notifications[index];
                        return ListTile(
                          leading: Icon(
                            n.read
                                ? Icons.notifications_none_rounded
                                : Icons.notifications_active_rounded,
                            color: n.read ? AppTheme.inkMuted : AppTheme.accentOliveDark,
                          ),
                          title: Text(
                            n.title,
                            style: TextStyle(
                              fontWeight: n.read ? FontWeight.w500 : FontWeight.w700,
                            ),
                          ),
                          subtitle: n.body == null ? null : Text(n.body!),
                          onTap: n.read
                              ? null
                              : () async {
                                  await markPartnerNotificationRead(n.id);
                                  ref.invalidate(partnerNotificationsProvider);
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
