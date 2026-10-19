import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_helpers.dart';
import '../../../core/chat/chat_list_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/search_pill.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';

class ChatListScreen extends ConsumerStatefulWidget {
  const ChatListScreen({super.key});

  @override
  ConsumerState<ChatListScreen> createState() => _ChatListScreenState();
}

class _ChatListScreenState extends ConsumerState<ChatListScreen> {
  final _search = TextEditingController();
  bool _startingConversation = false;

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

  Future<void> _startNewConversation() async {
    if (_startingConversation) return;
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null) return;
    setState(() => _startingConversation = true);
    try {
      final partner = await context.push<Partner>(
        '/partners',
        extra: const PartnerPickerArgs(selectionMode: true),
      );
      if (partner == null || !mounted) return;
      final conversationId = await getOrCreateConversation(
        weddingId: wedding.id,
        partnerId: partner.id,
      );
      if (!mounted) return;
      await context.push(
        '/chat/$conversationId',
        extra: ChatConversation(
          id: conversationId,
          weddingId: wedding.id,
          partnerId: partner.id,
          name: partner.name,
          avatarSeed: partner.id,
          avatarUrl: partner.imageUrl,
        ),
      );
      if (mounted) {
        ref.read(chatListControllerProvider.notifier).load(wedding.id);
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível iniciar a conversa.')),
        );
      }
    } finally {
      if (mounted) setState(() => _startingConversation = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(chatListControllerProvider);
    final query = _search.text.trim().toLowerCase();
    final conversations = query.isEmpty
        ? state.conversations
        : state.conversations
              .where((c) => c.name.toLowerCase().contains(query))
              .toList();

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(
                  title: 'Mensagens',
                  showBack: false,
                  centered: true,
                  // "+" (nova conversa com um parceiro) no cabeçalho, como
                  // nos outros ecrãs; a pesquisa ocupa a largura toda
                  // (design "Mensagens").
                  trailing: AddActionButton(
                    onTap: _startingConversation ? () {} : _startNewConversation,
                  ),
                ),
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
                  child: state.loading && state.conversations.isEmpty
                      ? const Center(child: CircularProgressIndicator())
                      : conversations.isEmpty && query.isEmpty
                      ? IllustratedEmptyState(
                          mascot: MascotPose.chat,
                          circularImage: false,
                          imageSize: 180,
                          title: 'Ainda sem conversas',
                          message: 'Quando pedirem um orçamento a um parceiro, a conversa e as propostas aparecem aqui.',
                          primaryLabel: 'Explorar parceiros',
                          onPrimary: () => context.go('/partners'),
                        )
                      : conversations.isEmpty
                      ? Center(
                          child: Text('Sem conversas para "${_search.text.trim()}".'),
                        )
                      : EdgeFade(
                          topFadeHeight: 24,
                          bottomFadeHeight: 140,
                          child: ListView.builder(
                            padding: const EdgeInsets.fromLTRB(0, 16, 0, 140),
                            itemCount: conversations.length,
                            itemBuilder: (context, index) => Padding(
                              padding: EdgeInsets.zero,
                              child: ConversationListItem(
                                conversation: conversations[index],
                                onTap: () => context.push(
                                  '/chat/${conversations[index].id}',
                                  extra: conversations[index],
                                ),
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
            child: FloatingBottomNav(current: AppTab.chat),
          ),
        ],
      ),
    );
  }
}
