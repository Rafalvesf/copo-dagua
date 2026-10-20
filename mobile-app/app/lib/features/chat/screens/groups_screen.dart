import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_attachments.dart';
import '../../../core/chat/group_chat.dart';
import '../../../core/theme/app_theme.dart';
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
    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(children: [
          PageHeader(
            title: 'Grupos',
            centered: true,
            trailing: AddActionButton(onTap: () => _newGroup(context, ref)),
          ),
          Expanded(
            child: async.when(
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (e, _) => const _Empty(
                title: 'Grupos ainda indisponíveis',
                text: 'Os grupos ficam disponíveis assim que a atualização da base de dados for aplicada.',
              ),
              data: (groups) => groups.isEmpty
                  ? _Empty(
                      title: 'Ainda sem grupos',
                      text: 'Cria um grupo com as pessoas do evento — família, padrinhos, amigos da faculdade…',
                      action: () => _newGroup(context, ref),
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
                                  child: Icon(Icons.groups_rounded, color: AppTheme.accentOliveDark),
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
        ]),
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
            Icon(Icons.groups_rounded, size: 56, color: AppTheme.accentOliveDark),
            const SizedBox(height: 12),
            Text(title, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            Text(text, textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted)),
            if (action != null) ...[
              const SizedBox(height: 16),
              FilledButton(
                onPressed: action,
                style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, shape: const StadiumBorder()),
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
                  return const Center(
                    child: Text('Ainda não há convidados com conta neste evento.', textAlign: TextAlign.center, style: TextStyle(color: AppTheme.inkMuted)),
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
            style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
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
              icon: const Icon(Icons.person_add_alt_1_rounded),
              label: const Text('Adicionar pessoas'),
            ),
            TextButton.icon(
              onPressed: () => Navigator.of(context).pop('leave'),
              style: TextButton.styleFrom(foregroundColor: const Color(0xFFA3412E)),
              icon: const Icon(Icons.logout_rounded),
              label: const Text('Sair do grupo'),
            ),
          ]),
        ),
      ),
    );
    if (!mounted || action == null) return;
    if (action == 'leave') {
      await leaveChatGroup(widget.group.id);
      ref.invalidate(chatGroupsProvider(widget.group.weddingId));
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
    final msgs = thread.messages.reversed.toList();
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Column(children: [
        SafeArea(
          bottom: false,
          child: ChatHeader(
            name: widget.group.name,
            subtitle: people.isEmpty ? 'Grupo' : '${people.length} membros · ver',
            onOpenProfile: _menu,
          ),
        ),
        Expanded(
          child: thread.loading && thread.messages.isEmpty
              ? const Center(child: CircularProgressIndicator())
              : ListView.builder(
                  reverse: true,
                  padding: const EdgeInsets.all(16),
                  itemCount: msgs.length,
                  itemBuilder: (context, i) {
                    final m = msgs[i];
                    final mine = m.senderId == me;
                    final sender = people[m.senderId];
                    // Nome/foto só na primeira de uma sequência do mesmo autor.
                    final older = i + 1 < msgs.length ? msgs[i + 1] : null;
                    final firstOfRun = older == null || older.senderId != m.senderId;
                    final content = m.attachmentUrl != null
                        ? ChatAttachmentView(url: m.attachmentUrl!, type: m.attachmentType ?? 'file', name: m.attachmentName, isMe: mine)
                        : ChatBubble(text: m.body ?? '', isMe: mine);
                    return Padding(
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
                  },
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
              style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
              child: const Text('Adicionar'),
            ),
          ]),
        ),
      );
}
