import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_list_controller.dart';
import '../../../core/theme/app_theme.dart';
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
                  titleFontSize: 32,
                  showBack: false,
                  trailing: SnappyTap.builder(
                    onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Nova conversa em breve.'),
                      ),
                    ),
                    builder: (context, hovered) => Container(
                      width: 46,
                      height: 46,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                        boxShadow: hovered
                            ? AppTheme.cardShadowStrong
                            : AppTheme.cardShadow,
                      ),
                      child: const Icon(
                        Icons.add_rounded,
                        color: AppTheme.ink,
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(999),
                      boxShadow: AppTheme.cardShadow,
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
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: const EdgeInsets.symmetric(
                          vertical: 12,
                        ),
                      ),
                    ),
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
