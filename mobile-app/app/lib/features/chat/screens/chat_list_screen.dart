import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:copo_dagua_app/features/messages/team_messages.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_delete.dart';
import '../../../core/chat/chat_helpers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../widgets/message_row.dart';
import '../../../core/chat/chat_list_controller.dart';
import '../../../core/chat/presence.dart';
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
  // Apagados nesta sessão: saem logo da lista (o Dismissible exige-o).
  final _removed = <String>{};
  _Filter _filter = _Filter.all;

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

  /// Conversa: apaga só do nosso lado. Grupo: quem criou apaga para
  /// todos; os outros saem do grupo.
  Future<bool> _delete(Object it) async {
    final String id;
    final String title;
    final String body;
    final String cta;
    final Future<void> Function() action;
    if (it is ChatGroup) {
      id = it.id;
      if (it.isMine) {
        title = 'Apagar o grupo?';
        body = 'O grupo "${it.name}" e as mensagens desaparecem para todos os membros.';
        cta = 'Apagar grupo';
        action = () => deleteChatGroup(it.id);
      } else {
        title = 'Sair do grupo?';
        body = 'Deixas de ver "${it.name}". Só quem o criou o pode apagar para todos.';
        cta = 'Sair do grupo';
        action = () => leaveChatGroup(it.id);
      }
    } else {
      final c = it as ChatConversation;
      id = c.id;
      title = 'Apagar a conversa?';
      body = 'A conversa com ${c.name} sai da tua lista. ${c.name} continua a vê-la; se te escrever, volta a aparecer.';
      cta = 'Apagar conversa';
      action = () => ref.read(chatListControllerProvider.notifier).hide(c.id);
    }
    if (!await confirmChatDelete(context, title: title, body: body, cta: cta)) return false;
    if (!mounted) return false;
    final ok = await runChatDelete(context, action);
    if (ok && mounted) {
      setState(() => _removed.add(id));
      if (it is ChatGroup) ref.invalidate(myChatGroupsProvider);
    }
    return ok;
  }

  Widget _deletable(String id, Object it, Widget child) => Dismissible(
        key: ValueKey('del-$id'),
        direction: DismissDirection.endToStart,
        confirmDismiss: (_) => _delete(it),
        background: Container(
          alignment: Alignment.centerRight,
          padding: const EdgeInsets.only(right: 22),
          color: const Color(0xFFA3412E),
          child: const Icon(Hi.trash, color: Colors.white, size: 24),
        ),
        child: GestureDetector(onLongPress: () => _delete(it), child: child),
      );

  Widget _filterChip(String label, _Filter f, {int? count}) {
    final on = _filter == f;
    return SnappyTap(
      onTap: () => setState(() => _filter = f),
      child: Container(
        height: 38,
        padding: const EdgeInsets.symmetric(horizontal: 14),
        decoration: BoxDecoration(
          color: on ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(19),
          border: on ? null : Border.all(color: const Color(0xFFE6E0D2), width: 1.5),
        ),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
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
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(chatListControllerProvider);
    final query = _search.text.trim().toLowerCase();
    final meta = ref.watch(_convMetaProvider).value ?? const <String, _ConvMeta>{};
    final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    final online = ref.watch(onlineNowProvider);

    // Nome de cada evento (as conversas e os grupos de todos os eventos).
    final mine = ref.watch(weddingControllerProvider).events;
    final invited = ref.watch(guestWeddingsProvider).value ?? const [];
    final eventNames = <String, String>{
      for (final g in invited) g.weddingId: g.displayNames,
      for (final w in mine) w.id: w.displayNames,
    };
    final groupEvents = <(String, String)>[
      for (final w in mine) (w.id, w.displayNames),
      for (final g in invited)
        if (!mine.any((w) => w.id == g.weddingId)) (g.weddingId, g.displayNames),
    ];

    final allConvs = [for (final c in state.conversations) if (!_removed.contains(c.id)) c];
    final allGroups = [
      for (final g in ref.watch(myChatGroupsProvider).value ?? const <ChatGroup>[])
        if (!_removed.contains(g.id)) g
    ];
    final unreadTotal = allConvs.where((c) => c.unreadCount > 0).length + allGroups.where((g) => g.unread).length;

    bool match(String name) => query.isEmpty || name.toLowerCase().contains(query);
    final items = <(DateTime?, Object)>[
      if (_filter != _Filter.groups)
        for (final c in allConvs)
          if (match(c.name) && (_filter != _Filter.unread || c.unreadCount > 0)) (c.lastMessageAt, c),
      if (_filter != _Filter.partners)
        for (final g in allGroups)
          if (match(g.name) && (_filter != _Filter.unread || g.unread)) (g.lastMessageAt, g),
    ]..sort((a, b) {
        if (a.$1 == null && b.$1 == null) return 0;
        if (a.$1 == null) return 1;
        if (b.$1 == null) return -1;
        return b.$1!.compareTo(a.$1!);
      });

    Widget row(Object it, bool last) {
      if (it is ChatGroup) {
        final people = ref.watch(groupPeopleProvider(it.id)).value?.values.where((p) => p.id != me).toList() ??
            const <EventPerson>[];
        final ev = eventNames[it.weddingId];
        return _deletable(
          it.id,
          it,
          MessageRow(
            avatar: _GroupAvatar(people: people),
            title: it.name,
            time: messageTime(it.lastMessageAt),
            preview: it.lastMessage ??
                (people.isEmpty ? 'Grupo' : people.map((p) => p.name.split(' ').first).take(4).join(', ')),
            unread: it.unread ? 1 : 0,
            last: last,
            chips: [
              if (ev != null) MessageChip(ev),
              if (people.isNotEmpty) MessageChip('${people.length + 1} pessoas'),
            ],
            onTap: () async {
              await context.push('/group/${it.id}', extra: it);
              ref.invalidate(myChatGroupsProvider);
            },
          ),
        );
      }
      final c = it as ChatConversation;
      final m = meta[c.id];
      final ev = c.weddingId == null ? null : eventNames[c.weddingId];
      return _deletable(
        c.id,
        c,
        MessageRow(
          avatar: V2Avatar(c.name, size: 52, imageUrl: c.avatarUrl, flat: true),
          online: c.partnerId != null && online.contains(c.partnerId),
          title: c.name,
          time: messageTime(c.lastMessageAt),
          preview: c.lastMessage ?? 'Sem mensagens ainda.',
          previewPrefix: m?.lastMine == true ? 'Tu' : null,
          mine: m?.lastMine == true,
          mineSeen: m?.seen == true,
          unread: c.unreadCount,
          last: last,
          chips: [
            if (ev != null) MessageChip(ev),
            if (m?.status == _Status.proposal) const MessageChip('Proposta por responder', tone: MessageChipTone.warn),
            if (m?.status == _Status.toPay) const MessageChip('Sinal por pagar', tone: MessageChipTone.warn),
            if (m?.status == _Status.booked) const MessageChip('Reserva confirmada', tone: MessageChipTone.done),
          ],
          onTap: () => context.push('/chat/${c.id}', extra: c),
        ),
      );
    }

    const sectionNames = ['HOJE', 'ESTA SEMANA', 'ANTES'];
    final sections = <int, List<Object>>{};
    for (final (at, it) in items) {
      sections.putIfAbsent(messageSection(at), () => []).add(it);
    }

    final listChildren = <Widget>[
      Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, 0, 0),
        child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(children: [
            _filterChip('Todas', _Filter.all),
            const SizedBox(width: 8),
            _filterChip('Não lidas', _Filter.unread, count: unreadTotal),
            const SizedBox(width: 8),
            _filterChip('Parceiros', _Filter.partners),
            const SizedBox(width: 8),
            _filterChip('Grupos', _Filter.groups),
            const SizedBox(width: AppTheme.screenMargin),
          ]),
        ),
      ),
      for (final k in [0, 1, 2])
        if (sections[k] != null) ...[
          Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 4, 18, AppTheme.screenMargin, 8),
            child: Text(sectionNames[k],
                style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
            child: Container(
              clipBehavior: Clip.antiAlias,
              decoration: softCard(radius: 22),
              child: Column(children: [
                for (var i = 0; i < sections[k]!.length; i++) row(sections[k]![i], i == sections[k]!.length - 1),
              ]),
            ),
          ),
        ],
      if (items.isNotEmpty)
        const Padding(
          padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 0),
          child: Text('Desliza uma conversa para a esquerda para a apagar.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        ),
      if (items.isEmpty && !(state.loading && allConvs.isEmpty))
        Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 40, AppTheme.screenMargin, 0),
          child: Text(
            query.isNotEmpty ? 'Sem conversas para "${_search.text.trim()}".' : 'Nada aqui por agora.',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
          ),
        ),
    ];

    final empty = !state.loading && allConvs.isEmpty && allGroups.isEmpty;

    return GradientScaffold(
      background: AppBackground.cream,
      body: Stack(
        children: [
          SafeArea(
            top: false,
            bottom: false,
            child: ScrollingHeader(
              header: [
                SizedBox(height: MediaQuery.paddingOf(context).top),
                // Mockup "Mensagens — lista" (2026-11-12): título à esquerda,
                // "+" preto, pesquisa, filtros, secções por dia.
                PageHeader(
                  title: 'Mensagens',
                  titleFontSize: 28,
                  topPadding: 8,
                  showBack: false,
                  trailing: AddActionButton(
                    line: true,
                    onTap: _startingConversation ? () {} : () => _newMenu(groupEvents),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                  child: SearchPill(flat: true, controller: _search, hint: 'Pesquisar pessoas, parceiros ou grupos'),
                ),
                // Mensagens diretas da equipa (migração 146).
                const TeamThreadEntry(),
              ],
              body: state.loading && allConvs.isEmpty && allGroups.isEmpty
                  ? const Center(child: CircularProgressIndicator())
                  : empty
                      ? IllustratedEmptyState(
                          mascot: MascotPose.chat,
                          circularImage: false,
                          imageSize: 180,
                          title: 'Ainda sem conversas',
                          message: 'Quando pedirem um orçamento a um parceiro, a conversa e as propostas aparecem aqui.',
                          primaryLabel: 'Explorar parceiros',
                          onPrimary: () => context.go('/partners'),
                        )
                      : ListView(
                          padding: const EdgeInsets.only(bottom: 140),
                          children: listChildren,
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

enum _Filter { all, unread, partners, groups }

enum _Status { none, proposal, toPay, booked }

class _ConvMeta {
  final _Status status;
  final bool lastMine;
  final bool seen;
  const _ConvMeta({this.status = _Status.none, this.lastMine = false, this.seen = false});
}

/// Estado de cada conversa com parceiro: proposta por responder, sinal por
/// pagar ou reserva confirmada; e se a última mensagem é minha (e se já
/// foi vista pelo parceiro).
final _convMetaProvider = FutureProvider.autoDispose<Map<String, _ConvMeta>>((ref) async {
  final convs = ref.watch(chatListControllerProvider).conversations;
  if (convs.isEmpty) return const {};
  final ids = [for (final c in convs) c.id];
  final weddings = {for (final c in convs) if (c.weddingId != null) c.weddingId!}.toList();
  final out = <String, _ConvMeta>{};
  final status = <String, _Status>{};
  String key(String? w, String? p) => '$w|$p';
  try {
    final b = await supabase.from('bookings').select('wedding_id, partner_id, status').inFilter('wedding_id', weddings);
    for (final r in (b as List).cast<Map<String, dynamic>>()) {
      final s = r['status'] as String? ?? '';
      final k = key(r['wedding_id'] as String?, r['partner_id'] as String?);
      if (s == 'confirmed' || s == 'completed') {
        status[k] = _Status.booked;
      } else if ((s == 'pending_payment' || s == 'on_hold' || s == 'pending') && status[k] != _Status.booked) {
        status[k] = _Status.toPay;
      }
    }
  } catch (_) {}
  try {
    final p = await supabase
        .from('proposals')
        .select('partner_id, status, quote_requests!inner(wedding_id)')
        .inFilter('quote_requests.wedding_id', weddings)
        .inFilter('status', ['sent', 'pending']);
    for (final r in (p as List).cast<Map<String, dynamic>>()) {
      final w = (r['quote_requests'] as Map?)?['wedding_id'] as String?;
      final k = key(w, r['partner_id'] as String?);
      status.putIfAbsent(k, () => _Status.proposal);
    }
  } catch (_) {}
  final lastMine = <String, DateTime>{};
  final seenAt = <String, DateTime?>{};
  try {
    final m = await supabase
        .from('messages')
        .select('conversation_id, sender_role, created_at')
        .inFilter('conversation_id', ids)
        .order('created_at', ascending: false)
        .limit(400);
    final seenConv = <String>{};
    for (final r in (m as List).cast<Map<String, dynamic>>()) {
      final cid = r['conversation_id'] as String;
      if (!seenConv.add(cid)) continue;
      if (r['sender_role'] == 'couple') lastMine[cid] = DateTime.parse(r['created_at'] as String);
    }
    final rd = await supabase.from('conversations').select('id, partner_last_read_at').inFilter('id', ids);
    for (final r in (rd as List).cast<Map<String, dynamic>>()) {
      final v = r['partner_last_read_at'] as String?;
      seenAt[r['id'] as String] = v == null ? null : DateTime.parse(v);
    }
  } catch (_) {}
  for (final c in convs) {
    final mineAt = lastMine[c.id];
    final read = seenAt[c.id];
    out[c.id] = _ConvMeta(
      status: status[key(c.weddingId, c.partnerId)] ?? _Status.none,
      lastMine: mineAt != null,
      seen: mineAt != null && read != null && !read.isBefore(mineAt),
    );
  }
  return out;
});

/// Caras de quem está no grupo, redondas e sobrepostas.
class _GroupAvatar extends StatelessWidget {
  final List<EventPerson> people;
  const _GroupAvatar({required this.people});

  @override
  Widget build(BuildContext context) {
    final shown = people.take(2).toList();
    if (shown.isEmpty) return const V2Avatar('Grupo', size: 52, flat: true);
    if (shown.length == 1) return V2Avatar(shown[0].name, size: 52, imageUrl: shown[0].avatarUrl, flat: true);
    return Stack(children: [
      for (var i = 0; i < 2; i++)
        Positioned(
          left: i == 0 ? 0 : 18,
          top: i == 0 ? 0 : 18,
          child: Container(
            decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
            child: V2Avatar(shown[i].name, size: 30, imageUrl: shown[i].avatarUrl, flat: true),
          ),
        ),
    ]);
  }
}
