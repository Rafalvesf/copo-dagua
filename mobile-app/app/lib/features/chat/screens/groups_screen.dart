import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import '../../../core/event/event_controller.dart';
import '../../../core/events/event_pass.dart' show myEventPassProvider;
import '../../../shared/widgets/feedback.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_attachments.dart';
import '../../../core/chat/chat_delete.dart';
import '../../../core/chat/group_chat.dart';
import '../../../core/chat/presence.dart';
import '../../../core/social/social.dart' show followPerson;
import '../../../core/auth/auth_controller.dart';
import '../../../core/moderation/moderation.dart';
import '../../../shared/widgets/page_kit.dart' show KitTag;
import '../../../core/theme/app_theme.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/chat_summary_sheets.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Grupos do evento — organizadores e convidados (pedido do utilizador,
/// 2026-10-20).
class GroupsScreen extends ConsumerWidget {
  final String eventId;
  const GroupsScreen({super.key, required this.eventId});

  Future<void> _newGroup(BuildContext context, WidgetRef ref) async {
    final id = await showIslandSheet<String>(
      context: context,
      isScrollControlled: true,
      builder: (_) => NewGroupSheet(eventId: eventId),
    );
    if (id == null || !context.mounted) return;
    ref.invalidate(chatGroupsProvider(eventId));
    final groups = await ref.read(chatGroupsProvider(eventId).future);
    final g = groups.where((x) => x.id == id).firstOrNull;
    if (g != null && context.mounted) context.push('/group/${g.id}', extra: g);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(chatGroupsProvider(eventId));
    // Convidados só criam grupos se o organizador deixar (2026-11-08).
    final organizer = ref.watch(eventControllerProvider.select((s) => s.event?.id)) == eventId;
    final canCreate = organizer || (ref.watch(myEventPassProvider(eventId)).value?.sections.groupsCreate ?? true);
    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(top: false, 
        bottom: false,
        child: ScrollingHeader(
 header: [SizedBox(height: MediaQuery.paddingOf(context).top),
          PageHeader(
            title: 'Grupos',
            centered: true,
            trailing: canCreate ? AddActionButton(onTap: () => _newGroup(context, ref)) : null,
          )
 ],
 body: async.when(
              loading: () => const SkeletonList(),
              error: (e, _) => const _Empty(
                title: 'Grupos ainda indisponíveis',
                text: 'Os grupos ficam disponíveis assim que a atualização da base de dados for aplicada.',
              ),
              data: (groups) => groups.isEmpty
                  ? _Empty(
                      title: 'Ainda sem grupos',
                      text: canCreate
                          ? 'Cria um grupo com as pessoas do evento — família, padrinhos, amigos da faculdade…'
                          : 'Os anfitriões ainda não criaram grupos.',
                      action: canCreate ? () => _newGroup(context, ref) : null,
                    )
                  : RefreshIndicator(
                      onRefresh: () async => ref.invalidate(chatGroupsProvider(eventId)),
                      child: ListView.separated(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
                        itemCount: groups.length,
                        separatorBuilder: (_, _) => const SizedBox(height: 10),
                        itemBuilder: (context, i) {
                          final g = groups[i];
                          return InkWell(
                            borderRadius: BorderRadius.circular(22),
                            onTap: () => context.push('/group/${g.id}', extra: g),
                            child: Container(
                              padding: const EdgeInsets.all(14),
                              decoration: softCard(radius: 22),
                              child: Row(children: [
                                Container(
                                  width: 48,
                                  height: 48,
                                  decoration: const BoxDecoration(color: Color(0xFFF2F2F2), shape: BoxShape.circle),
                                  child: Icon(Hi.userGroup, color: AppTheme.accentOliveDark),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                    Text(g.name,
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(
                                            fontSize: AppFontSize.base,
                                            fontWeight: g.unread ? FontWeight.w800 : FontWeight.w700,
                                            color: AppTheme.ink)),
                                    const SizedBox(height: 2),
                                    Text(g.lastMessage ?? 'Sem mensagens',
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(fontSize: AppFontSize.sm, color: v2Muted)),
                                  ]),
                                ),
                                if (g.unread)
                                  Container(width: 10, height: 10, decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle)),
                              ]),
                            ),
                          );
                        },
                      ),
                    ),
            ),
),
      ),
    );
  }
}

class _Empty extends StatelessWidget {
  final String title;
  final String text;
  final VoidCallback? action;
  const _Empty({required this.title, required this.text, this.action});

  @override
  Widget build(BuildContext context) => Center(
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Icon(Hi.userGroup, size: 56, color: AppTheme.accentOliveDark),
            const SizedBox(height: 12),
            Text(title, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            Text(text, textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted)),
            if (action != null) ...[
              const SizedBox(height: 16),
              FilledButton(
                onPressed: action,
                style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, shape: const StadiumBorder()),
                child: const Text('Criar grupo'),
              ),
            ],
          ]),
        ),
      );
}

/// Nome do grupo + escolha das pessoas do evento. Devolve o id do grupo.
class NewGroupSheet extends ConsumerStatefulWidget {
  final String eventId;
  const NewGroupSheet({super.key, required this.eventId});

  @override
  ConsumerState<NewGroupSheet> createState() => _NewGroupSheetState();
}

class _NewGroupSheetState extends ConsumerState<NewGroupSheet> {
  final _name = TextEditingController();
  final _picked = <String>{};
  bool _saving = false;

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  Future<void> _create() async {
    if (_name.text.trim().isEmpty || _picked.isEmpty) return;
    setState(() => _saving = true);
    try {
      final id = await createChatGroup(widget.eventId, _name.text.trim(), _picked.toList());
      if (mounted) Navigator.of(context).pop(id);
    } catch (_) {
      if (mounted) {
        setState(() => _saving = false);
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível criar o grupo.')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final people = ref.watch(eventPeopleProvider(widget.eventId));
    final me = currentUserId();
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.75,
      child: Padding(
        padding: EdgeInsets.fromLTRB(20, 20, 20, 16 + MediaQuery.of(context).viewInsets.bottom),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          const Text('Novo grupo', style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 12),
          TextField(
            controller: _name,
            maxLength: 60,
            onChanged: (_) => setState(() {}),
            decoration: const InputDecoration(labelText: 'Nome do grupo', hintText: 'Ex: Padrinhos, Família'),
          ),
          const SizedBox(height: 4),
          Text('Pessoas do evento${_picked.isEmpty ? '' : ' · ${_picked.length} escolhidas'}',
              style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(height: 6),
          Expanded(
            child: people.when(
              loading: () => const SkeletonList(),
              error: (e, _) => const Center(child: Text('Os grupos ainda não estão ativos — falta aplicar a atualização da base de dados.', textAlign: TextAlign.center, style: TextStyle(color: AppTheme.inkMuted))),
              data: (list) {
                final others = list.where((p) => p.id != me).toList();
                if (others.isEmpty) {
                  return const Padding(
                    padding: EdgeInsets.all(16),
                    child: InfoNote('Ainda não há convidados com conta neste evento.', icon: Hi.informationCircle),
                  );
                }
                return ListView(children: [
                  for (final p in others)
                    CheckboxListTile(
                      value: _picked.contains(p.id),
                      onChanged: (v) => setState(() => v == true ? _picked.add(p.id) : _picked.remove(p.id)),
                      secondary: V2Avatar(p.name, size: 40, imageUrl: p.avatarUrl, flat: true),
                      title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w700)),
                      subtitle: Text(p.role == 'organizador' ? 'Organizador' : 'Convidado'),
                      activeColor: AppTheme.accentOliveDark,
                      contentPadding: EdgeInsets.zero,
                    ),
                ]);
              },
            ),
          ),
          const SizedBox(height: 8),
          FilledButton(
            onPressed: _saving || _name.text.trim().isEmpty || _picked.isEmpty ? null : _create,
            style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
            child: Text(_saving ? 'A criar…' : 'Criar grupo'),
          ),
        ]),
      ),
    );
  }
}

/// Conversa de grupo: mensagens com o nome e a foto de quem enviou.
class GroupThreadScreen extends ConsumerStatefulWidget {
  final ChatGroup group;
  const GroupThreadScreen({super.key, required this.group});

  @override
  ConsumerState<GroupThreadScreen> createState() => _GroupThreadScreenState();
}

class _GroupThreadScreenState extends ConsumerState<GroupThreadScreen> {
  final _text = TextEditingController();
  final _scroll = ScrollController();

  @override
  void dispose() {
    _text.dispose();
    _scroll.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final t = _text.text;
    if (t.trim().isEmpty) return;
    _text.clear();
    ref.read(typingNowProvider('g:${widget.group.id}').notifier).stop();
    try {
      await ref.read(groupThreadControllerProvider(widget.group.id).notifier).sendText(t);
    } catch (_) {
      if (!mounted) return;
      _text.text = t;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível enviar a mensagem.')));
    }
  }

  Future<void> _attach() async {
    try {
      final a = await pickChatAttachment(context);
      if (a == null || !mounted) return;
      await ref.read(groupThreadControllerProvider(widget.group.id).notifier).sendAttachment(a);
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível enviar o anexo.')));
    }
  }

  Future<void> _menu() async {
    final people = <EventPerson>[...?ref.read(groupPeopleProvider(widget.group.id)).value?.values];
    // Os anfitriões (quem organiza) aparecem em primeiro, como na lista de
    // convidados (212); a etiqueta diz quem são.
    final hosts = widget.group.eventId.isEmpty
        ? const <String>{}
        : {
            for (final p in await ref.read(eventPeopleProvider(widget.group.eventId).future).catchError((_) => const <EventPerson>[]))
              if (p.role == 'organizador') p.id,
          };
    if (!mounted) return;
    people.sort((a, b) => (hosts.contains(a.id) ? 0 : 1).compareTo(hosts.contains(b.id) ? 0 : 1));
    final action = await showIslandSheet<String>(
      context: context,
      isScrollControlled: true,
      builder: (context) => SizedBox(
        height: MediaQuery.of(context).size.height * 0.6,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Text('${people.length} membros', style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 8),
            Expanded(
              child: ListView(children: [
                for (final p in people)
                  ListTile(
                    contentPadding: EdgeInsets.zero,
                    leading: V2Avatar(p.name, size: 38, imageUrl: p.avatarUrl, flat: true),
                    title: Text(p.name),
                    trailing: hosts.contains(p.id) ? const KitTag('Anfitrião') : null,
                  ),
              ]),
            ),
            TextButton.icon(
              onPressed: () => Navigator.of(context).pop('add'),
              icon: const Icon(Hi.userPlus),
              label: const Text('Adicionar pessoas'),
            ),
            // O grupo do evento não se apaga: vive enquanto o evento existir.
            if (widget.group.isMine && !widget.group.isEventAll)
              TextButton.icon(
                onPressed: () => Navigator.of(context).pop('delete'),
                style: TextButton.styleFrom(foregroundColor: const Color(0xFFA3412E)),
                icon: const Icon(Hi.trash),
                label: const Text('Apagar grupo'),
              ),
            TextButton.icon(
              onPressed: () => Navigator.of(context).pop('leave'),
              style: TextButton.styleFrom(foregroundColor: const Color(0xFFA3412E)),
              icon: const Icon(Hi.arrowRightStartOnRectangle),
              label: const Text('Sair do grupo'),
            ),
          ]),
        ),
      ),
    );
    if (!mounted || action == null) return;
    if (action == 'delete') {
      final ok = await confirmChatDelete(context,
          title: 'Apagar o grupo?',
          body: 'O grupo "${widget.group.name}" e as mensagens desaparecem para todos os membros.',
          cta: 'Apagar grupo');
      if (!ok || !mounted) return;
      if (await runChatDelete(context, () => deleteChatGroup(widget.group.id))) {
        ref.invalidate(chatGroupsProvider(widget.group.eventId));
        ref.invalidate(myChatGroupsProvider);
        if (mounted) context.pop();
      }
      return;
    }
    if (action == 'leave') {
      await leaveChatGroup(widget.group.id);
      ref.invalidate(chatGroupsProvider(widget.group.eventId));
      ref.invalidate(myChatGroupsProvider);
      if (mounted) context.pop();
    } else if (action == 'add') {
      final all = await ref.read(eventPeopleProvider(widget.group.eventId).future);
      final inGroup = people.map((p) => p.id).toSet();
      if (!mounted) return;
      final picked = await showIslandSheet<List<String>>(
        context: context,
        isScrollControlled: true,
        builder: (_) => _AddPeopleSheet(people: all.where((p) => !inGroup.contains(p.id)).toList()),
      );
      if (picked == null || picked.isEmpty) return;
      await addChatGroupMembers(widget.group.id, picked);
      ref.invalidate(groupPeopleProvider(widget.group.id));
    }
  }

  @override
  Widget build(BuildContext context) {
    final thread = ref.watch(groupThreadControllerProvider(widget.group.id));
    final people = ref.watch(groupPeopleProvider(widget.group.id)).value ?? const <String, EventPerson>{};
    final me = currentUserId();
    final blocked = ref.watch(blockedProfilesProvider).value ?? const <String>{};
    final msgs = thread.messages.reversed.where((m) => !blocked.contains(m.senderId)).toList();
    final reads = ref.watch(_groupReadsProvider(widget.group.id)).value ?? const <DateTime>[];
    final others = people.values.where((p) => p.id != me).toList();
    final names = others.map((p) => p.name.split(' ').first).toList();
    final subtitle = names.isEmpty
        ? 'Grupo'
        : names.length <= 3
            ? names.join(', ')
            : '${names.take(3).join(', ')} e mais ${names.length - 3}';
    return GradientScaffold(
      background: AppBackground.cream,
      body: Column(children: [
        SafeArea(
          top: false,
          bottom: false,
          // Conversa direta (192): o nome da outra pessoa; tocar abre o perfil.
          child: ChatHeader(
            name: widget.group.isDirect ? (others.firstOrNull?.name ?? 'Conversa') : widget.group.name,
            // Grupo do evento (212): a descrição do evento por baixo do nome.
            subtitle: widget.group.isDirect
                ? 'Mensagem direta'
                : widget.group.isEventAll && widget.group.description?.isNotEmpty == true
                    ? widget.group.description!
                    : subtitle,
            // Tocar no topo: o resumo da pessoa (conversa direta) ou do
            // grupo — o evento e quem está (pranchetas de 2026-11-25).
            onOpenProfile: widget.group.isDirect
                ? () {
                    final o = others.firstOrNull;
                    if (o != null) showPersonSummary(context, personId: o.id, name: o.name, avatarUrl: o.avatarUrl);
                  }
                : () => showGroupSummary(context, group: widget.group, onOpenEvent: () => context.go('/home')),
            menu: widget.group.isDirect ? const [] : [('Gerir o grupo', _menu)],
            leading: SizedBox(
              width: 46,
              height: 44,
              // Grupo do evento (212): a foto do evento.
              child: widget.group.isEventAll
                  ? V2Avatar(widget.group.name, size: 44, imageUrl: widget.group.photoUrl, flat: true)
                  : others.isEmpty
                  ? const V2Avatar('Grupo', size: 44, flat: true)
                  : others.length == 1
                      ? V2Avatar(others[0].name, size: 44, imageUrl: others[0].avatarUrl, flat: true)
                      : Stack(children: [
                          for (var i = 0; i < 2; i++)
                            Positioned(
                              left: i == 0 ? 0 : 16,
                              top: i == 0 ? 0 : 14,
                              child: Container(
                                decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                                child: V2Avatar(others[i].name, size: 30, imageUrl: others[i].avatarUrl, flat: true),
                              ),
                            ),
                        ]),
            ),
            onReport: () => showReportPicker(context, ref,
                kind: ReportKind.groupMessage,
                recentFirst: [
                  for (final m in msgs)
                    if (m.senderId != me)
                      ReportableMessage(
                          id: m.id, text: m.body ?? m.attachmentName ?? '', authorId: m.senderId, authorName: people[m.senderId]?.name),
                ]),
          ),
        ),
        Expanded(
          child: ColoredBox(
          color: const Color(0xFFF2F2F2),
          child: thread.loading && thread.messages.isEmpty
              ? const SkeletonChat()
              // Sem a ilha «Ver evento» (2026-11-25): tocar no topo abre o
              // resumo do grupo / da pessoa.
              : JumpToLatest(
                  controller: _scroll,
                  messageCount: msgs.length,
                  child: ListView.builder(
                  controller: _scroll,
                  reverse: true,
                  padding: const EdgeInsets.all(16),
                  itemCount: msgs.length,
                  itemBuilder: (context, i) {
                    final m = msgs[i];
                    final mine = m.senderId == me;
                    final sender = people[m.senderId];
                    // Resposta ao convite (189): cartão ao centro com o perfil
                    // para seguir (mockup «Grupo do evento», 2026-11-15).
                    if (m.isRsvp) {
                      return Padding(
                        padding: const EdgeInsets.only(top: 10),
                        child: _RsvpCard(
                          message: m,
                          name: sender?.name ?? (m.body ?? '').replaceAll(RegExp(r' disse que (não )?vai\$'), ''),
                          avatarUrl: sender?.avatarUrl,
                          mine: mine,
                        ),
                      );
                    }
                    // Nome/foto só na primeira de uma sequência do mesmo autor.
                    final older = i + 1 < msgs.length ? msgs[i + 1] : null;
                    final firstOfRun = older == null || older.senderId != m.senderId;
                    // Foto ao fundo da última da sequência (mockup "Grupo").
                    final newer = i > 0 ? msgs[i - 1] : null;
                    final lastOfRun = newer == null || newer.senderId != m.senderId;
                    final bubble = m.attachmentUrl != null
                        ? ChatAttachmentView(url: m.attachmentUrl!, type: m.attachmentType ?? 'file', name: m.attachmentName, isMe: mine)
                        : ChatBubble(text: m.body ?? '', isMe: mine, sender: !mine && firstOfRun ? (sender?.name ?? '') : null);
                    // Toque longo numa mensagem de outra pessoa: denunciar / bloquear.
                    final content = mine
                        // Toque longo numa mensagem minha: apagar (179).
                        ? GestureDetector(
                            onLongPress: () async {
                              final ok = await confirmChatDelete(context,
                                  title: 'Apagar a mensagem?',
                                  body: 'A mensagem desaparece para todos no grupo.',
                                  cta: 'Apagar mensagem');
                              if (!ok || !context.mounted) return;
                              await runChatDelete(
                                  context, () => ref.read(groupThreadControllerProvider(widget.group.id).notifier).delete(m.id));
                            },
                            child: bubble,
                          )
                        : GestureDetector(
                            onLongPress: () => showModerationSheet(context, ref,
                                kind: ReportKind.groupMessage, targetId: m.id, authorId: m.senderId, authorName: sender?.name),
                            child: bubble,
                          );
                    // "Visto por N" por baixo da minha última mensagem.
                    final seenBy = mine && i == 0 ? reads.where((r) => !r.isBefore(m.sentAt)).length : 0;
                    final row = Padding(
                      padding: EdgeInsets.only(top: firstOfRun ? 10 : 3),
                      child: Row(
                        mainAxisAlignment: mine ? MainAxisAlignment.end : MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          if (!mine) ...[
                            SizedBox(
                              width: 32,
                              child: lastOfRun ? V2Avatar(sender?.name ?? '?', size: 30, imageUrl: sender?.avatarUrl, flat: true) : null,
                            ),
                            const SizedBox(width: 6),
                          ],
                          Flexible(
                            child: Column(
                              crossAxisAlignment: mine ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                              children: [
                                if (!mine && firstOfRun && m.attachmentUrl != null)
                                  Padding(
                                    padding: const EdgeInsets.only(left: 4, bottom: 3),
                                    child: Text(sender?.name ?? '',
                                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: ChatBubble.senderColor(sender?.name ?? ''))),
                                  ),
                                content,
                              ],
                            ),
                          ),
                        ],
                      ),
                    );
                    if (!(mine && i == 0)) return row;
                    final t = m.sentAt.toLocal();
                    final hhmm = '${t.hour.toString().padLeft(2, '0')}:${t.minute.toString().padLeft(2, '0')}';
                    return Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                      row,
                      Padding(
                        padding: const EdgeInsets.only(top: 4),
                        child: Text(seenBy > 0 ? '$hhmm · Visto por $seenBy' : hhmm,
                            style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                      ),
                    ]);
                  },
                ),
                ),
          ),
        ),
        ColoredBox(
          color: const Color(0xFFF2F2F2),
          child: ChatTypingLine(typingLine(ref.watch(typingNowProvider('g:${widget.group.id}')))),
        ),
        ChatComposer(
          controller: _text,
          onSend: _send,
          onAttach: _attach,
          hint: 'Mensagem para o grupo',
          onChanged: (_) => ref
              .read(typingNowProvider('g:${widget.group.id}').notifier)
              .typing(ref.read(authControllerProvider).profile?.fullName ?? ''),
        ),
      ]),
    );
  }
}

/// «Canela disse que vai» no grupo, com o perfil para seguir.
class _RsvpCard extends StatefulWidget {
  final GroupMessage message;
  final String name;
  final String? avatarUrl;
  final bool mine;
  const _RsvpCard({required this.message, required this.name, this.avatarUrl, required this.mine});

  @override
  State<_RsvpCard> createState() => _RsvpCardState();
}

class _RsvpCardState extends State<_RsvpCard> {
  bool? _following;
  bool _busy = false;

  String get _personId => (widget.message.meta?['profile_id'] as String?) ?? widget.message.senderId;

  @override
  void initState() {
    super.initState();
    if (!widget.mine) _load();
  }

  Future<void> _load() async {
    final me = supabase.auth.currentUser?.id;
    if (me == null) return;
    try {
      final r = await supabase.from('follows').select('profile_id').eq('follower_id', me).eq('profile_id', _personId).maybeSingle();
      if (mounted) setState(() => _following = r != null);
    } catch (_) {
      if (mounted) setState(() => _following = false);
    }
  }

  Future<void> _toggle() async {
    final next = !(_following ?? false);
    setState(() => _busy = true);
    try {
      await followPerson(_personId, next);
      if (mounted) setState(() => _following = next);
    } catch (_) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não deu para seguir. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final going = widget.message.rsvpGoing;
    final t = widget.message.sentAt.toLocal();
    final hhmm = '${t.hour.toString().padLeft(2, '0')}:${t.minute.toString().padLeft(2, '0')}';
    final title = widget.mine
        ? (going ? 'Tu disseste que vais' : 'Tu disseste que não vais')
        : '${widget.name} ${going ? 'disse que vai' : 'disse que não vai'}';
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Row(children: [
        V2Avatar(widget.name, size: 44, imageUrl: widget.avatarUrl, flat: true),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Row(children: [
              Text(hhmm, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                decoration: BoxDecoration(
                  color: going ? const Color(0xFFE6EDE1) : const Color(0xFFF2F2F2),
                  borderRadius: BorderRadius.circular(99),
                ),
                child: Text(going ? 'Vai' : 'Não vai',
                    style: TextStyle(
                        fontSize: 12, fontWeight: FontWeight.w700, color: going ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
              ),
            ]),
          ]),
        ),
        if (!widget.mine && _following != null) ...[
          const SizedBox(width: 8),
          _following!
              ? OutlinedButton(
                  onPressed: _busy ? null : _toggle,
                  style: OutlinedButton.styleFrom(
                    minimumSize: const Size(0, 36),
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    shape: const StadiumBorder(),
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    foregroundColor: AppTheme.ink,
                    textStyle: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('A seguir'),
                )
              : FilledButton(
                  onPressed: _busy ? null : _toggle,
                  style: FilledButton.styleFrom(
                    minimumSize: const Size(0, 36),
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    shape: const StadiumBorder(),
                    backgroundColor: AppTheme.ink,
                    foregroundColor: Colors.white,
                    textStyle: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Seguir'),
                ),
        ],
      ]),
    );
  }
}

class _AddPeopleSheet extends StatefulWidget {
  final List<EventPerson> people;
  const _AddPeopleSheet({required this.people});

  @override
  State<_AddPeopleSheet> createState() => _AddPeopleSheetState();
}

class _AddPeopleSheetState extends State<_AddPeopleSheet> {
  final _picked = <String>{};

  @override
  Widget build(BuildContext context) => SizedBox(
        height: MediaQuery.of(context).size.height * 0.6,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const Text('Adicionar pessoas', style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Expanded(
              child: widget.people.isEmpty
                  ? const Center(child: Text('Já estão todos no grupo.'))
                  : ListView(children: [
                      for (final p in widget.people)
                        CheckboxListTile(
                          value: _picked.contains(p.id),
                          onChanged: (v) => setState(() => v == true ? _picked.add(p.id) : _picked.remove(p.id)),
                          secondary: V2Avatar(p.name, size: 38, imageUrl: p.avatarUrl, flat: true),
                          title: Text(p.name),
                          activeColor: AppTheme.accentOliveDark,
                          contentPadding: EdgeInsets.zero,
                        ),
                    ]),
            ),
            FilledButton(
              onPressed: _picked.isEmpty ? null : () => Navigator.of(context).pop(_picked.toList()),
              style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
              child: const Text('Adicionar'),
            ),
          ]),
        ),
      );
}

/// Quando cada outro membro leu o grupo ("Visto por N").
final _groupReadsProvider = FutureProvider.autoDispose.family<List<DateTime>, String>((ref, groupId) async {
  try {
    final me = currentUserId();
    final rows = await supabase.from('chat_group_members').select('profile_id, last_read_at').eq('group_id', groupId);
    return [
      for (final r in (rows as List).cast<Map<String, dynamic>>())
        if (r['profile_id'] != me && r['last_read_at'] != null) DateTime.parse(r['last_read_at'] as String),
    ];
  } catch (_) {
    return const [];
  }
});
