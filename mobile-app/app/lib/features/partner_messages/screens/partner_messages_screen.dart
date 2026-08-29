import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

class PartnerMessagesScreen extends ConsumerWidget {
  const PartnerMessagesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final conversationsAsync = ref.watch(partnerConversationsProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(
                  title: 'Mensagens',
                  subtitle: 'Fala com os casais.',
                  showBack: false,
                  trailing: const AccountSwitcherBadge(),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: conversationsAsync.when(
                    loading: () =>
                        const Center(child: CircularProgressIndicator()),
                    error: (err, st) =>
                        const Center(child: Text('Não foi possível carregar.')),
                    data: (conversations) => ListView.builder(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        0,
                        AppTheme.screenMargin,
                        16,
                      ),
                      itemCount: conversations.length,
                      itemBuilder: (context, index) => Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: ConversationListItem(
                          conversation: conversations[index],
                          onTap: () => context.push(
                            '/partner-messages/${conversations[index].id}',
                            extra: conversations[index],
                          ),
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
                    110,
                  ),
                  child: SnappyTap.builder(
                    onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Já estás a ver todas as conversas.'),
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
                        'Ver todas as conversas',
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
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.chat),
          ),
          const Positioned.fill(child: DraggableChatBubble()),
        ],
      ),
    );
  }
}
