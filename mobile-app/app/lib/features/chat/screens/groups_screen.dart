import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/events/event_pass.dart' show myEventPassProvider;
import '../../../shared/widgets/feedback.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_attachments.dart';
import '../../../core/chat/chat_delete.dart';
import '../../../core/chat/group_chat.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Grupos do evento — organizadores e convidados (pedido do utilizador,
/// 2026-10-20).
class GroupsScreen extends ConsumerWidget {
  final String weddingId;
  const GroupsScreen({super.key, required this.weddingId});

  Future<void> _newGroup(BuildContext context, WidgetRef ref) async {
    final id = await showIslandSheet<String>(
      context: context,
      isScrollControlled: true,
      builder: (_) => NewGroupSheet(weddingId: weddingId),
    );
    if (id == null || !context.mounted) return;
    ref.invalidate(chatGroupsProvider(weddingId));
    final groups = await ref.read(chatGroupsProvider(weddingId).future);
    final g = groups.where((x) => x.id == id).firstOrNull;
    if (g != null && context.mounted) context.push('/group/${g.id}', extra: g);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(chatGroupsProvider(weddingId));
    // Convidados só criam grupos se o organizador deixar (2026-11-08).
    final organizer = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id)) == weddingId;
    final canCreate = organizer || (ref.watch(myEventPassProvider(weddingId)).value?.sections.groupsCreate ?? true);
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
              loading: () => const Center(child: CircularProgressIndicator()),
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
                      onRefresh: () async => ref.invalidate(chatGroupsProvider(weddingId)),
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
                                  decoration: const BoxDecoration(color: Color(0xFFF2F0EB), shape: BoxShape.circle),
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
  final String weddingId;
  const NewGroupSheet({super.key, required this.weddingId});

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
      final id = await createChatGroup(widget.weddingId, _name.text.trim(), _picked.toList());
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
    final people = ref.watch(eventPeopleProvider(widget.weddingId));
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
            decoration: const InputDecoration(labelText: 'Nome do grupo', hintText: 'Ex: Padrinhos, Família da noiva'),
          ),
          const SizedBox(height: 4),
          Text('Pessoas do evento${_picked.isEmpty ? '' : ' · ${_picked.length} escolhidas'}',
              style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(height: 6),
          Expanded(
            child: people.when(
              loading: () => const Center(child: CircularProgressIndicator()),
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
                      secondary: V2Avatar(p.name, size: 40, imageUrl: p.avatarUrl),
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

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final t = _text.text;
    if (t.trim().isEmpty) return;
    _text.clear();
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
    final people = ref.read(groupPeopleProvider(widget.group.id)).value?.values.toList() ?? const <EventPerson>[];
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
                    leading: V2Avatar(p.name, size: 38, imageUrl: p.avatarUrl),
                    title: Text(p.name),
                  ),
              ]),
            ),
            TextButton.icon(
              onPressed: () => Navigator.of(context).pop('add'),
              icon: const Icon(Hi.userPlus),
              label: const Text('Adicionar pessoas'),
            ),
            if (widget.group.isMine)
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
        ref.invalidate(chatGroupsProvider(widget.group.weddingId));
        ref.invalidate(myChatGroupsProvider);
        if (mounted) context.pop();
      }
      return;
    }
    if (action == 'leave') {
      await leaveChatGroup(widget.group.id);
      ref.invalidate(chatGroupsProvider(widget.group.weddingId));
      ref.invalidate(myChatGroupsProvider);
      if (mounted) context.pop();
    } else if (action == 'add') {
      final all = await ref.read(eventPeopleProvider(widget.group.weddingId).future);
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
    // Faixa do evento (mockup "Grupo do evento", 2026-11-12).
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final ev = ref.watch(weddingControllerProvider).events.where((w) => w.id == widget.group.weddingId).firstOrNull;
    final evDate = ev?.weddingDate;
    final eventTitle = ev == null
        ? null
        : [ev.displayNames, if (evDate != null) '${evDate.day} ${months[evDate.month - 1]} ${evDate.year}'].join(' · ');
    final names = others.map((p) => p.name.split(' ').first).toList();
    final subtitle = names.isEmpty
        ? 'Grupo'
        : names.length <= 3
            ? names.join(', ')
            : '${names.take(3).join(', ')} e mais ${names.length - 3}';
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Column(children: [
        SafeArea(
          top: false,
          bottom: false,
          child: ChatHeader(
            name: widget.group.name,
            subtitle: subtitle,
            onOpenProfile: _menu,
            leading: SizedBox(
              width: 46,
              height: 44,
              child: others.isEmpty
                  ? const V2Avatar('Grupo', size: 44)
                  : others.length == 1
                      ? V2Avatar(others[0].name, size: 44, imageUrl: others[0].avatarUrl)
                      : Stack(children: [
                          for (var i = 0; i < 2; i++)
                            Positioned(
                              left: i == 0 ? 0 : 16,
                              top: i == 0 ? 0 : 14,
                              child: Container(
                                decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                                child: V2Avatar(others[i].name, size: 28, imageUrl: others[i].avatarUrl),
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
          color: const Color(0xFFF2F0EB),
          child: thread.loading && thread.messages.isEmpty
              ? const Center(child: CircularProgressIndicator())
              : ChatEventIsland(
                  title: eventTitle ?? 'Grupo do evento',
                  subtitle: eventTitle == null ? null : 'Grupo do evento',
                  action: ev == null ? null : 'Ver evento',
                  onAction: ev == null ? null : () => context.go('/home'),
                  child: ListView.builder(
                  reverse: true,
                  padding: const EdgeInsets.fromLTRB(16, 82, 16, 16),
                  itemCount: msgs.length,
                  itemBuilder: (context, i) {
                    final m = msgs[i];
                    final mine = m.senderId == me;
                    final sender = people[m.senderId];
                    // Nome/foto só na primeira de uma sequência do mesmo autor.
                    final older = i + 1 < msgs.length ? msgs[i + 1] : null;
                    final firstOfRun = older == null || older.senderId != m.senderId;
                    final bubble = m.attachmentUrl != null
                        ? ChatAttachmentView(url: m.attachmentUrl!, type: m.attachmentType ?? 'file', name: m.attachmentName, isMe: mine)
                        : ChatBubble(text: m.body ?? '', isMe: mine);
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
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          if (!mine) ...[
                            SizedBox(
                              width: 32,
                              child: firstOfRun ? V2Avatar(sender?.name ?? '?', size: 30, imageUrl: sender?.avatarUrl) : null,
                            ),
                            const SizedBox(width: 6),
                          ],
                          Flexible(
                            child: Column(
                              crossAxisAlignment: mine ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                              children: [
                                if (!mine && firstOfRun)
                                  Padding(
                                    padding: const EdgeInsets.only(left: 4, bottom: 3),
                                    child: Text(sender?.name ?? '',
                                        style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
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
        ChatComposer(controller: _text, onSend: _send, onAttach: _attach),
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
                          secondary: V2Avatar(p.name, size: 38, imageUrl: p.avatarUrl),
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
