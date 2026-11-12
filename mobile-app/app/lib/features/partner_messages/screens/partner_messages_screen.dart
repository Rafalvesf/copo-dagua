import 'package:flutter/material.dart';
import '../../chat/widgets/message_row.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show softCard, V2Avatar;
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:copo_dagua_app/features/messages/team_messages.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/models/models.dart' show ChatConversation;
import '../../../core/theme/app_theme.dart';
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

  bool _unreadOnly = false;

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
      background: AppBackground.cream,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ScrollingHeader(
 header: [SizedBox(height: MediaQuery.paddingOf(context).top),
                const PageHeader(title: 'Mensagens', showBack: false, titleFontSize: 28),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: SearchPill(flat: true, controller: _search, hint: 'Pesquisar conversas'),
                ),
                const TeamThreadEntry()
 ],
 body: conversationsAsync.when(
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
                      // Como as Mensagens do organizador (mockup 2026-11-12):
                      // filtros, secções por dia e fotos redondas.
                      final unreadCount = all.where((c) => c.unreadCount > 0).length;
                      final shown = _unreadOnly ? conversations.where((c) => c.unreadCount > 0).toList() : conversations;
                      const names = ['HOJE', 'ESTA SEMANA', 'ANTES'];
                      final sections = <int, List<ChatConversation>>{};
                      for (final c in shown) {
                        sections.putIfAbsent(messageSection(c.lastMessageAt), () => []).add(c);
                      }
                      Widget chip(String label, bool on, VoidCallback onTap, {int? count}) => SnappyTap(
                            onTap: onTap,
                            child: Container(
                              height: 38,
                              padding: const EdgeInsets.symmetric(horizontal: 14),
                              decoration: BoxDecoration(
                                color: on ? AppTheme.accentOliveDark : Colors.white,
                                borderRadius: BorderRadius.circular(19),
                                border: on ? null : Border.all(color: const Color(0xFFE6E0D2), width: 1.5),
                              ),
                              child: Row(mainAxisSize: MainAxisSize.min, children: [
                                Text(label,
                                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
                                if (count != null && count > 0) ...[
                                  const SizedBox(width: 6),
                                  Container(
                                    constraints: const BoxConstraints(minWidth: 20),
                                    height: 20,
                                    padding: const EdgeInsets.symmetric(horizontal: 6),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(color: on ? Colors.white : AppTheme.ink, borderRadius: BorderRadius.circular(10)),
                                    child: Text('$count',
                                        style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: on ? AppTheme.accentOliveDark : Colors.white)),
                                  ),
                                ],
                              ]),
                            ),
                          );
                      return ListView(
                        padding: const EdgeInsets.only(bottom: 140),
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 0),
                            child: Row(children: [
                              chip('Todas', !_unreadOnly, () => setState(() => _unreadOnly = false)),
                              const SizedBox(width: 8),
                              chip('Não lidas', _unreadOnly, () => setState(() => _unreadOnly = true), count: unreadCount),
                            ]),
                          ),
                          for (final k in [0, 1, 2])
                            if (sections[k] != null) ...[
                              Padding(
                                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 4, 18, AppTheme.screenMargin, 8),
                                child: Text(names[k],
                                    style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                              ),
                              Padding(
                                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                                child: Container(
                                  clipBehavior: Clip.antiAlias,
                                  decoration: softCard(radius: 22),
                                  child: Column(children: [
                                    for (var i = 0; i < sections[k]!.length; i++)
                                      MessageRow(
                                        avatar: V2Avatar(sections[k]![i].name, size: 52, imageUrl: sections[k]![i].avatarUrl, flat: true),
                                        title: sections[k]![i].name,
                                        time: messageTime(sections[k]![i].lastMessageAt),
                                        preview: sections[k]![i].lastMessage ?? 'Sem mensagens ainda.',
                                        unread: sections[k]![i].unreadCount,
                                        last: i == sections[k]!.length - 1,
                                        onTap: () => context.push(
                                          '/partner-messages/${sections[k]![i].id}',
                                          extra: sections[k]![i],
                                        ),
                                      ),
                                  ]),
                                ),
                              ),
                            ],
                        ],
                      );
                    },
                  ),
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
