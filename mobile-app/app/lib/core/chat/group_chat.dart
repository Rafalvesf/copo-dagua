import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart'
    show PostgresChangeEvent, PostgresChangeFilter, PostgresChangeFilterType, PostgrestException, RealtimeChannel;

import '../supabase/supabase_config.dart';
import 'chat_attachments.dart';
import 'chat_delete.dart';

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
  final String? createdBy;

  /// Conversa direta entre duas pessoas (192): sem evento (`weddingId`
  /// vazio); mostra-se com o nome e a foto da outra pessoa.
  final bool isDirect;
  const ChatGroup({
    required this.id,
    required this.weddingId,
    required this.name,
    this.lastMessage,
    this.lastMessageAt,
    this.unread = false,
    this.createdBy,
    this.isDirect = false,
  });

  bool get isMine => createdBy != null && createdBy == supabase.auth.currentUser?.id;
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
  /// Mensagem automática (189): 'rsvp' = «X disse que vai / não vai».
  final String? kind;
  final Map<String, dynamic>? meta;
  const GroupMessage({
    required this.id,
    required this.senderId,
    this.body,
    this.attachmentUrl,
    this.attachmentType,
    this.attachmentName,
    required this.sentAt,
    this.kind,
    this.meta,
  });

  bool get isRsvp => kind == 'rsvp';
  bool get rsvpGoing => meta?['status'] == 'confirmed';

  factory GroupMessage.fromRow(Map<String, dynamic> r) => GroupMessage(
        id: r['id'] as String,
        senderId: r['sender_id'] as String,
        body: r['body'] as String?,
        attachmentUrl: r['attachment_url'] as String?,
        attachmentType: r['attachment_type'] as String?,
        attachmentName: r['attachment_name'] as String?,
        sentAt: DateTime.parse(r['created_at'] as String),
        kind: r['kind'] as String?,
        meta: r['meta'] is Map ? Map<String, dynamic>.from(r['meta'] as Map) : null,
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
      .select('id, wedding_id, name, last_message, last_message_at, created_at, created_by')
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
          weddingId: (r['wedding_id'] as String?) ?? '',
          name: r['name'] as String,
          lastMessage: r['last_message'] as String?,
          lastMessageAt: last,
          unread: last != null && (read == null || last.isAfter(read)),
          createdBy: r['created_by'] as String?,
          isDirect: r['is_direct'] == true,
        );
      }(),
  ];
}, retry: _noRetry);

/// Todos os grupos onde estou, de todos os eventos (2026-11-11: os grupos
/// aparecem nas Mensagens como uma conversa normal). A policy de
/// `chat_groups` só deixa ver os grupos de que sou membro.
final myChatGroupsProvider = FutureProvider.autoDispose<List<ChatGroup>>((ref) async {
  if (supabase.auth.currentUser == null) return const [];
  final rows = await supabase
      .from('chat_groups')
      // `*` para apanhar `is_direct` (192) sem falhar antes da migração.
      .select('*')
      .order('last_message_at', ascending: false, nullsFirst: false);
  final reads = await supabase.from('chat_group_members').select('group_id, last_read_at').eq('profile_id', _me);
  final readAt = {
    for (final r in (reads as List).cast<Map<String, dynamic>>())
      r['group_id'] as String: r['last_read_at'] == null ? null : DateTime.parse(r['last_read_at'] as String),
  };
  return [
    for (final r in (rows as List).cast<Map<String, dynamic>>())
      if (readAt.containsKey(r['id']))
        () {
          final last = r['last_message_at'] == null
              ? DateTime.parse(r['created_at'] as String)
              : DateTime.parse(r['last_message_at'] as String);
          final read = readAt[r['id']];
          return ChatGroup(
            id: r['id'] as String,
            weddingId: (r['wedding_id'] as String?) ?? '',
            name: r['name'] as String,
            lastMessage: r['last_message'] as String?,
            lastMessageAt: last,
            unread: r['last_message_at'] != null && (read == null || last.isAfter(read)),
            createdBy: r['created_by'] as String?,
            isDirect: r['is_direct'] == true,
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

/// Mensagens de um grupo. As novas chegam em tempo real (Supabase
/// Realtime, 2026-10-25 — antes perguntava ao servidor a cada 4 s). Fica
/// uma verificação a cada 60 s para o caso de a ligação em tempo real cair.
const _groupColumns = '*';

class GroupThreadController extends Notifier<GroupThreadState> {
  GroupThreadController(this.groupId);
  final String groupId;
  Timer? _timer;
  RealtimeChannel? _channel;

  @override
  GroupThreadState build() {
    Future.microtask(load);
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => load(silent: true));
    _channel = supabase
        .channel('group-chat-$groupId')
        .onPostgresChanges(
          event: PostgresChangeEvent.insert,
          schema: 'public',
          table: 'chat_group_messages',
          filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'group_id', value: groupId),
          callback: (payload) => _onInsert(payload.newRecord),
        )
        .subscribe();
    ref.onDispose(() {
      _timer?.cancel();
      final c = _channel;
      if (c != null) unawaited(supabase.removeChannel(c));
    });
    return const GroupThreadState();
  }

  void _onInsert(Map<String, dynamic> row) {
    if (row['id'] == null || row['created_at'] == null) return;
    final m = GroupMessage.fromRow(row);
    if (state.messages.any((x) => x.id == m.id)) return;
    state = GroupThreadState(loading: false, messages: [...state.messages, m]);
    _markRead();
  }

  void _markRead() =>
      unawaited(supabase.rpc('mark_chat_group_read', params: {'p_group_id': groupId}).then((_) {}, onError: (_) {}));

  Future<void> load({bool silent = false}) async {
    try {
      final rows = await supabase
          .from('chat_group_messages')
          .select(_groupColumns)
          .eq('group_id', groupId)
          .order('created_at', ascending: true)
          .limit(500);
      final list = [for (final r in (rows as List).cast<Map<String, dynamic>>()) GroupMessage.fromRow(r)];
      if (!silent || list.length != state.messages.length) {
        state = GroupThreadState(loading: false, messages: list);
      }
      _markRead();
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
        .select(_groupColumns)
        .single();
    _append(GroupMessage.fromRow(row));
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
        .select(_groupColumns)
        .single();
    _append(GroupMessage.fromRow(row));
  }

  /// Apaga uma mensagem minha (`delete_group_message`, 179).
  Future<void> delete(String id) async {
    await deleteGroupMessage(id);
    state = GroupThreadState(loading: false, messages: [for (final m in state.messages) if (m.id != id) m]);
  }

  void _append(GroupMessage m) {
    if (state.messages.any((x) => x.id == m.id)) return;
    state = GroupThreadState(loading: false, messages: [...state.messages, m]);
  }
}

final groupThreadControllerProvider =
    NotifierProvider.autoDispose.family<GroupThreadController, GroupThreadState, String>(GroupThreadController.new);

String currentUserId() => _me;


/// Grupo «todos» do evento (189). Null se a migração ainda não correu.
Future<ChatGroup?> openEventGroup(String weddingId) async {
  try {
    final id = await supabase.rpc('my_event_group', params: {'p_wedding_id': weddingId});
    if (id is! String) return null;
    final r = await supabase
        .from('chat_groups')
        .select('id, wedding_id, name, last_message, last_message_at, created_at, created_by')
        .eq('id', id)
        .maybeSingle();
    if (r == null) return null;
    return ChatGroup(
      id: r['id'] as String,
      weddingId: (r['wedding_id'] as String?) ?? '',
      name: r['name'] as String,
      lastMessage: r['last_message'] as String?,
      lastMessageAt: r['last_message_at'] == null ? null : DateTime.parse(r['last_message_at'] as String),
      createdBy: r['created_by'] as String?,
    );
  } catch (_) {
    return null;
  }
}


/// Abre (ou cria) a conversa direta com esta pessoa (192). Lança
/// [DirectChatUnavailable] quando não é possível (sem se seguirem nem
/// evento em comum, bloqueio, ou migração por correr).
class DirectChatUnavailable implements Exception {
  final String message;
  const DirectChatUnavailable(this.message);
}

Future<ChatGroup> openDirectChat(String profileId) async {
  final Object? id;
  try {
    id = await supabase.rpc('open_direct_chat', params: {'p_profile_id': profileId});
  } on PostgrestException catch (e) {
    if (e.message.contains('not_allowed')) {
      throw const DirectChatUnavailable('Para mandar mensagem, segue esta pessoa ou estejam no mesmo evento.');
    }
    if (e.message.contains('blocked')) throw const DirectChatUnavailable('Não é possível enviar mensagem a esta pessoa.');
    if (e.code == 'PGRST202' || e.code == '42883') {
      throw const DirectChatUnavailable('As mensagens diretas ainda não estão disponíveis.');
    }
    throw const DirectChatUnavailable('Não foi possível abrir a conversa. Tenta outra vez.');
  }
  final r = await supabase.from('chat_groups').select('*').eq('id', id as String).single();
  return ChatGroup(
    id: r['id'] as String,
    weddingId: (r['wedding_id'] as String?) ?? '',
    name: r['name'] as String,
    lastMessage: r['last_message'] as String?,
    lastMessageAt: r['last_message_at'] == null ? null : DateTime.parse(r['last_message_at'] as String),
    createdBy: r['created_by'] as String?,
    isDirect: true,
  );
}
