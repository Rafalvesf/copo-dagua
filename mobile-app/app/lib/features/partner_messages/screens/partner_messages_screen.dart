import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/search_pill.dart';

/// Mensagens do parceiro — igual ao canvas "Parceiro — mensagens" e à
/// lista do casal: título, pesquisa e conversas. (Saiu o botão "Ver todas
/// as conversas", que não fazia nada.)
class PartnerMessagesScreen extends ConsumerStatefulWidget {
  const PartnerMessagesScreen({super.key});

  @override
  ConsumerState<PartnerMessagesScreen> createState() =>
      _PartnerMessagesScreenState();
}

class _PartnerMessagesScreenState extends ConsumerState<PartnerMessagesScreen> {
  final _search = TextEditingController();

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final conversationsAsync = ref.watch(partnerConversationsProvider);
    final query = _search.text.trim().toLowerCase();

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Mensagens', showBack: false, centered: true),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: SearchPill(controller: _search, hint: 'Pesquisar conversas'),
                ),
                Expanded(
                  child: conversationsAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(
                      onRetry: () => ref.invalidate(partnerConversationsProvider),
                    ),
                    data: (all) {
                      final conversations = query.isEmpty
                          ? all
                          : all
                              .where((c) => c.name.toLowerCase().contains(query))
                              .toList();
                      if (all.isEmpty) {
                        return const IllustratedEmptyState(
                          mascot: MascotPose.chat,
                          circularImage: false,
                          imageSize: 180,
                          title: 'Ainda sem conversas',
                          message:
                              'Quando um cliente te pedir um orçamento, a conversa aparece aqui.',
                        );
                      }
                      if (conversations.isEmpty) {
                        return Center(
                          child: Text('Sem conversas para "${_search.text.trim()}".'),
                        );
                      }
                      return ListView.builder(
                        padding: const EdgeInsets.fromLTRB(0, 16, 0, 140),
                        itemCount: conversations.length,
                        itemBuilder: (context, index) => Padding(
                          padding: EdgeInsets.zero,
                          child: ConversationListItem(
                            partnerStyle: true,
                            isLast: index == conversations.length - 1,
                            conversation: conversations[index],
                            onTap: () => context.push(
                              '/partner-messages/${conversations[index].id}',
                              extra: conversations[index],
                            ),
                          ),
                        ),
                      );
                    },
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
        ],
      ),
    );
  }
}
