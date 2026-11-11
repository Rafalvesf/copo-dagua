import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:copo_dagua_app/features/messages/team_messages.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_helpers.dart';
import '../../../core/chat/chat_list_controller.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart' show softCard, V2Avatar;
import '../../../shared/widgets/snappy_tap.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/chat/group_chat.dart';
import '../../../core/guest_home/guest_home_providers.dart';
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
    } on PartnerUnavailableException {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text(PartnerUnavailableException.message)),
        );
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

  /// "+": falar com um parceiro ou criar um grupo num dos eventos.
  Future<void> _newMenu(List<(String, String)> events) async {
    if (events.isEmpty) return _startNewConversation();
    final mine = ref.read(weddingControllerProvider).events.map((w) => w.id).toSet();
    final choice = await showIslandSheet<String>(
      context: context,
      builder: (sheet) => Padding(
        padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          const Text('Nova conversa', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 12),
          if (mine.isNotEmpty)
            ListTile(
              contentPadding: EdgeInsets.zero,
              leading: const Icon(Hi.buildingStorefront, color: AppTheme.ink),
              title: const Text('Falar com um parceiro'),
              onTap: () => Navigator.of(sheet).pop('partner'),
            ),
          for (final (id, name) in events)
            ListTile(
              contentPadding: EdgeInsets.zero,
              leading: const Icon(Hi.userGroup, color: AppTheme.ink),
              title: Text(events.length == 1 ? 'Novo grupo' : 'Novo grupo · $name', maxLines: 1, overflow: TextOverflow.ellipsis),
              onTap: () => Navigator.of(sheet).pop('group:$id'),
            ),
        ]),
      ),
    );
    if (!mounted || choice == null) return;
    if (choice == 'partner') return _startNewConversation();
    await context.push('/groups/${choice.substring(6)}');
    ref.invalidate(myChatGroupsProvider);
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

    // Grupos como conversas normais, na mesma lista (2026-11-11).
    final allGroups = ref.watch(myChatGroupsProvider).value ?? const <ChatGroup>[];
    final groups = query.isEmpty ? allGroups : allGroups.where((g) => g.name.toLowerCase().contains(query)).toList();
    final items = <(DateTime?, Object)>[
      for (final c in conversations) (c.lastMessageAt, c),
      for (final g in groups) (g.lastMessageAt, g),
    ]..sort((a, b) {
        if (a.$1 == null && b.$1 == null) return 0;
        if (a.$1 == null) return 1;
        if (b.$1 == null) return -1;
        return b.$1!.compareTo(a.$1!);
      });

    final mine = ref.watch(weddingControllerProvider).events;
    final invited = ref.watch(guestWeddingsProvider).value ?? const [];
    final groupEvents = <(String, String)>[
      for (final w in mine) (w.id, w.displayNames),
      for (final g in invited)
        if (!mine.any((w) => w.id == g.weddingId)) (g.weddingId, g.displayNames),
    ];

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ScrollingHeader(
 header: [SizedBox(height: MediaQuery.paddingOf(context).top),
                PageHeader(
                  title: 'Mensagens',
                  topPadding: 8,
                  showBack: false,
                  // "+" (nova conversa com um parceiro) no cabeçalho, como
                  // nos outros ecrãs; a pesquisa ocupa a largura toda
                  // (design "Mensagens").
                  trailing: AddActionButton(
                    onTap: _startingConversation ? () {} : () => _newMenu(groupEvents),
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
                // Mensagens diretas da equipa (migração 146).
                const TeamThreadEntry()
 ],
 body: state.loading && items.isEmpty
                      ? const Center(child: CircularProgressIndicator())
                      : items.isEmpty && query.isEmpty
                      ? IllustratedEmptyState(
                          mascot: MascotPose.chat,
                          circularImage: false,
                          imageSize: 180,
                          title: 'Ainda sem conversas',
                          message: 'Quando pedirem um orçamento a um parceiro, a conversa e as propostas aparecem aqui.',
                          primaryLabel: 'Explorar parceiros',
                          onPrimary: () => context.go('/partners'),
                        )
                      : items.isEmpty
                      ? Center(
                          child: Text('Sem conversas para "${_search.text.trim()}".'),
                        )
                      : EdgeFade(
                          topFadeHeight: 24,
                          bottomFadeHeight: 140,
                          child: ListView.builder(
                            padding: const EdgeInsets.fromLTRB(0, 12, 0, 140),
                            itemCount: items.length,
                            itemBuilder: (context, index) {
                              final it = items[index].$2;
                              if (it is ChatGroup) {
                                return _GroupListItem(
                                  group: it,
                                  onTap: () async {
                                    await context.push('/group/${it.id}', extra: it);
                                    ref.invalidate(myChatGroupsProvider);
                                  },
                                );
                              }
                              final c = it as ChatConversation;
                              return ConversationListItem(
                                conversation: c,
                                onTap: () => context.push('/chat/${c.id}', extra: c),
                              );
                            },
                          ),
                        ),
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

/// Grupo na lista das Mensagens, igual a uma conversa: as caras de quem
/// está no grupo, o nome, a última mensagem e a hora.
class _GroupListItem extends ConsumerWidget {
  final ChatGroup group;
  final VoidCallback onTap;
  const _GroupListItem({required this.group, required this.onTap});

  String? get _time {
    final at = group.lastMessageAt;
    if (at == null) return null;
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final day = DateTime(at.year, at.month, at.day);
    if (day == today) return '${at.hour.toString().padLeft(2, '0')}:${at.minute.toString().padLeft(2, '0')}';
    if (today.difference(day).inDays == 1) return 'Ontem';
    return '${at.day.toString().padLeft(2, '0')}/${at.month.toString().padLeft(2, '0')}';
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    final people = ref.watch(groupPeopleProvider(group.id)).value?.values.where((p) => p.id != me).toList() ?? const <EventPerson>[];
    final shown = people.take(3).toList();
    return SnappyTap(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: softCard(),
          child: Row(children: [
            SizedBox(
              width: 48,
              height: 48,
              child: shown.isEmpty
                  ? const V2Avatar('Grupo', size: 48)
                  : Stack(children: [
                      for (var i = 0; i < shown.length; i++)
                        Positioned(
                          left: shown.length == 1 ? 0 : (i == 0 ? 0 : (i == 1 ? 16 : 8)),
                          top: shown.length == 1 ? 0 : (i == 0 ? 0 : (i == 1 ? 16 : 24)),
                          child: Container(
                            decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                            child: V2Avatar(shown[i].name, size: shown.length == 1 ? 44 : 30, imageUrl: shown[i].avatarUrl),
                          ),
                        ),
                    ]),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(group.name,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 15, fontWeight: group.unread ? FontWeight.w700 : FontWeight.w400, color: AppTheme.ink)),
                const SizedBox(height: 3),
                Text(
                  group.lastMessage ?? (people.isEmpty ? 'Grupo' : people.map((p) => p.name.split(' ').first).take(4).join(', ')),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ]),
            ),
            const SizedBox(width: 12),
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
              if (_time != null)
                Text(_time!,
                    style: TextStyle(
                      fontSize: 12,
                      color: group.unread ? AppTheme.accentOliveDark : AppTheme.inkMuted,
                      fontWeight: group.unread ? FontWeight.w700 : FontWeight.w400,
                    )),
              if (group.unread) ...[
                const SizedBox(height: 6),
                Container(width: 10, height: 10, decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle)),
              ],
            ]),
          ]),
        ),
      ),
    );
  }
}
