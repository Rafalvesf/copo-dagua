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
import '../../../shared/widgets/snappy_tap.dart';

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
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                PageHeader(
                  title: 'Chat',
                  titleFontSize: 30,
                  showBack: false,
                  // Mesma arquitetura/layout do cabeçalho de
                  // "Parceiros" (`partners_list_screen.dart`): cabeçalho
                  // só com o título, e o ícone de ação (lá é o coração,
                  // aqui é o "+" de nova conversa) ao lado da barra de
                  // pesquisa, na linha por baixo. `trailing` aqui é só
                  // um espaçador invisível — mantém a altura do
                  // cabeçalho (ver o mesmo comentário em
                  // `partners_list_screen.dart`).
                  trailing: const SizedBox(width: 46, height: 46),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: AppTheme.searchBarShadow,
                          ),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Pesquisar conversas...',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(999),
                                borderSide: const BorderSide(
                                  color: AppTheme.accentOliveDark,
                                ),
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                vertical: 12,
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      SnappyTap(
                        onTap: _startingConversation ? null : _startNewConversation,
                        child: Container(
                          width: 46,
                          height: 46,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.add_rounded,
                            color: AppTheme.ink,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: state.loading && state.conversations.isEmpty
                      ? const Center(child: CircularProgressIndicator())
                      : conversations.isEmpty
                      ? Center(
                          child: Text(
                            query.isEmpty
                                ? 'Sem conversas ainda.'
                                : 'Sem conversas para "${_search.text.trim()}".',
                          ),
                        )
                      : EdgeFade(
                          topFadeHeight: 24,
                          bottomFadeHeight: 140,
                          child: ListView.builder(
                            padding: const EdgeInsets.fromLTRB(
                              AppTheme.screenMargin,
                              20,
                              AppTheme.screenMargin,
                              140,
                            ),
                            itemCount: conversations.length,
                            itemBuilder: (context, index) => Padding(
                              padding: const EdgeInsets.only(bottom: 14),
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
