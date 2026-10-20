import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import 'chat_attachments.dart';

/// Grupos do evento (pedido do utilizador, 2026-10-20): organizadores e
/// convidados criam grupos com as pessoas desse evento.
/// Base de dados: `105_chat_groups_attachments.sql`.

class ChatGroup {
  final String id;
  final String weddingId;
  final String name;
  final String? lastMessage;
  final DateTime? lastMessageAt;
  final bool unread;
  const ChatGroup({
    required this.id,
    required this.weddingId,
    required this.name,
    this.lastMessage,
    this.lastMessageAt,
    this.unread = false,
  });
}

class EventPerson {
  final String id;
  final String name;
  final String? avatarUrl;
  final String role; // organizador | convidado
  const EventPerson(this.id, this.name, this.avatarUrl, this.role);
}

class GroupMessage {
  final String id;
  final String senderId;
  final String? body;
  final String? attachmentUrl;
  final String? attachmentType;
  final String? attachmentName;
  final DateTime sentAt;
  const GroupMessage({
    required this.id,
    required this.senderId,
    this.body,
    this.attachmentUrl,
    this.attachmentType,
    this.attachmentName,
    required this.sentAt,
  });

  factory GroupMessage.fromRow(Map<String, dynamic> r) => GroupMessage(
        id: r['id'] as String,
        senderId: r['sender_id'] as String,
        body: r['body'] as String?,
        attachmentUrl: r['attachment_url'] as String?,
        attachmentType: r['attachment_type'] as String?,
        attachmentName: r['attachment_name'] as String?,
        sentAt: DateTime.parse(r['created_at'] as String),
      );
}

String get _me => supabase.auth.currentUser!.id;

/// Sem novas tentativas automáticas: se a base de dados dos grupos ainda
/// não existir, mostra logo o aviso em vez de ficar a carregar para
/// sempre (reportado 2026-10-20).
Duration? _noRetry(int count, Object error) => null;

final chatGroupsProvider = FutureProvider.autoDispose.family<List<ChatGroup>, String>((ref, weddingId) async {
  final rows = await supabase
      .from('chat_groups')
      .select('id, wedding_id, name, last_message, last_message_at, created_at')
      .eq('wedding_id', weddingId)
      .order('last_message_at', ascending: false, nullsFirst: false);
  final reads = await supabase.from('chat_group_members').select('group_id, last_read_at').eq('profile_id', _me);
  final readAt = {
    for (final r in (reads as List).cast<Map<String, dynamic>>())
      r['group_id'] as String: r['last_read_at'] == null ? null : DateTime.parse(r['last_read_at'] as String),
  };
  return [
    for (final r in (rows as List).cast<Map<String, dynamic>>())
      () {
        final last = r['last_message_at'] == null ? null : DateTime.parse(r['last_message_at'] as String);
        final read = readAt[r['id']];
        return ChatGroup(
          id: r['id'] as String,
          weddingId: r['wedding_id'] as String,
          name: r['name'] as String,
          lastMessage: r['last_message'] as String?,
          lastMessageAt: last,
          unread: last != null && (read == null || last.isAfter(read)),
        );
      }(),
  ];
}, retry: _noRetry);

final eventPeopleProvider = FutureProvider.autoDispose.family<List<EventPerson>, String>((ref, weddingId) async {
  final rows = await supabase.rpc('event_chat_people', params: {'p_wedding_id': weddingId}) as List;
  return [
    for (final r in rows.cast<Map<String, dynamic>>())
      EventPerson(r['profile_id'] as String, r['full_name'] as String, r['avatar_url'] as String?, r['role'] as String),
  ];
}, retry: _noRetry);

final groupPeopleProvider = FutureProvider.autoDispose.family<Map<String, EventPerson>, String>((ref, groupId) async {
  final rows = await supabase.rpc('chat_group_people', params: {'p_group_id': groupId}) as List;
  return {
    for (final r in rows.cast<Map<String, dynamic>>())
      r['profile_id'] as String: EventPerson(r['profile_id'] as String, r['full_name'] as String, r['avatar_url'] as String?, ''),
  };
}, retry: _noRetry);

Future<String> createChatGroup(String weddingId, String name, List<String> memberIds) async {
  final id = await supabase.rpc('create_chat_group', params: {
    'p_wedding_id': weddingId,
    'p_name': name,
    'p_member_ids': memberIds,
  });
  return id as String;
}

Future<void> addChatGroupMembers(String groupId, List<String> memberIds) =>
    supabase.rpc('add_chat_group_members', params: {'p_group_id': groupId, 'p_member_ids': memberIds});

Future<void> leaveChatGroup(String groupId) => supabase.rpc('leave_chat_group', params: {'p_group_id': groupId});

class GroupThreadState {
  final bool loading;
  final List<GroupMessage> messages;
  const GroupThreadState({this.loading = true, this.messages = const []});
}

/// Mensagens de um grupo — volta a carregar a cada 4 s enquanto está aberto.
class GroupThreadController extends Notifier<GroupThreadState> {
  GroupThreadController(this.groupId);
  final String groupId;
  Timer? _timer;

  @override
  GroupThreadState build() {
    Future.microtask(load);
    _timer = Timer.periodic(const Duration(seconds: 4), (_) => load(silent: true));
    ref.onDispose(() => _timer?.cancel());
    return const GroupThreadState();
  }

  Future<void> load({bool silent = false}) async {
    try {
      final rows = await supabase
          .from('chat_group_messages')
          .select()
          .eq('group_id', groupId)
          .order('created_at', ascending: true)
          .limit(500);
      final list = [for (final r in (rows as List).cast<Map<String, dynamic>>()) GroupMessage.fromRow(r)];
      if (!silent || list.length != state.messages.length) {
        state = GroupThreadState(loading: false, messages: list);
      }
      unawaited(supabase.rpc('mark_chat_group_read', params: {'p_group_id': groupId}).then((_) {}, onError: (_) {}));
    } catch (_) {
      if (!silent) state = const GroupThreadState(loading: false);
    }
  }

  Future<void> sendText(String text) async {
    final t = text.trim();
    if (t.isEmpty) return;
    final row = await supabase
        .from('chat_group_messages')
        .insert({'group_id': groupId, 'sender_id': _me, 'body': t})
        .select()
        .single();
    state = GroupThreadState(loading: false, messages: [...state.messages, GroupMessage.fromRow(row)]);
  }

  Future<void> sendAttachment(ChatAttachment a) async {
    final row = await supabase
        .from('chat_group_messages')
        .insert({
          'group_id': groupId,
          'sender_id': _me,
          'attachment_url': a.url,
          'attachment_type': a.type,
          'attachment_name': a.name,
        })
        .select()
        .single();
    state = GroupThreadState(loading: false, messages: [...state.messages, GroupMessage.fromRow(row)]);
  }
}

final groupThreadControllerProvider =
    NotifierProvider.autoDispose.family<GroupThreadController, GroupThreadState, String>(GroupThreadController.new);

String currentUserId() => _me;
