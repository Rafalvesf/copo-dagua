import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
import 'chat_attachments.dart';
import 'chat_delete.dart';
import 'chat_list_controller.dart' show unreadMessagesCountProvider;

class ChatThreadState {
  final bool loading;
  final List<ChatMessage> messages;

  const ChatThreadState({this.loading = false, this.messages = const []});

  ChatThreadState copyWith({bool? loading, List<ChatMessage>? messages}) {
    return ChatThreadState(
      loading: loading ?? this.loading,
      messages: messages ?? this.messages,
    );
  }
}

/// Fio de conversa do separador Chat (lado do casal) — liga-se a
/// `messages` real (036_chat.sql), filtrado por `conversationId`
/// (`conversations.id`). Substitui `MockBackend.listMessages`/
/// `sendMessage`. `fromPartner` passa a refletir `sender_role`
/// ('partner' → true) em vez de vir sempre fixo pelo chamador.
class ChatThreadController extends Notifier<ChatThreadState> {
  ChatThreadController(this.conversationId);

  /// Um id, ou vários separados por vírgulas (uma só conversa por parceiro,
  /// 2026-11-25: as conversas de vários eventos com o mesmo parceiro
  /// mostram-se juntas). Escreve-se sempre na primeira.
  final String conversationId;

  List<String> get _ids => conversationId.split(',').where((s) => s.isNotEmpty).toList();
  String get _target => _ids.first;

  @override
  ChatThreadState build() {
    Future.microtask(load);
    return const ChatThreadState();
  }

  Future<void> load() async {
    state = state.copyWith(loading: true);
    final rows = await supabase
        .from('messages')
        .select()
        .inFilter('conversation_id', _ids)
        .order('created_at', ascending: true);
    // Conversa apagada deste lado (`couple_hidden_at`, 179): o histórico
    // até esse momento deixa de aparecer. Antes da migração a coluna não
    // existe — mostra tudo.
    final hidden = <String, DateTime>{};
    try {
      final cs = await supabase.from('conversations').select('id, couple_hidden_at').inFilter('id', _ids);
      for (final c in cs as List) {
        final h = c['couple_hidden_at'] as String?;
        if (h != null) hidden[c['id'] as String] = DateTime.parse(h);
      }
    } catch (_) {}
    state = ChatThreadState(
      loading: false,
      messages: (rows as List)
          .map((r) => _fromRow(r as Map<String, dynamic>))
          .where((m) {
            final h = hidden[m.conversationId];
            return h == null || m.sentAt.isAfter(h);
          })
          .toList(),
    );
    // Abrir a conversa marca-a como lida — `mark_conversation_read()`
    // (`055_chat_unread_tracking.sql`) decide sozinha que é o lado do
    // casal a ler. Melhor esforço: uma falha aqui não deve impedir o
    // ecrã de mostrar as mensagens já carregadas.
    try {
      for (final id in _ids) {
        await supabase.rpc('mark_conversation_read', params: {'p_conversation_id': id});
      }
      // Sem isto o selo da navbar (`unreadMessagesCountProvider`) ficava
      // com o valor em cache de antes de abrir esta conversa — a leitura
      // já tinha sido gravada na base de dados, só o provider é que
      // nunca voltava a perguntar. Bug real reportado pelo utilizador
      // (2026-09-05): "o icon de mensagens não lidas não desaparece
      // após se ler".
      ref.invalidate(unreadMessagesCountProvider);
    } catch (_) {}
  }

  Future<void> sendText(String text) async {
    final trimmed = text.trim();
    if (trimmed.isEmpty) return;
    final row = await supabase
        .from('messages')
        .insert({
          'conversation_id': _target,
          'sender_role': 'couple',
          'sender_id': supabase.auth.currentUser!.id,
          'body': trimmed,
        })
        .select()
        .single();
    state = state.copyWith(messages: [...state.messages, _fromRow(row)]);
  }

  /// Foto, ficheiro, sticker ou GIF (`core/chat/chat_attachments.dart`).
  Future<void> sendAttachment(ChatAttachment a) async {
    final row = await supabase
        .from('messages')
        .insert({
          'conversation_id': _target,
          'sender_role': 'couple',
          'sender_id': supabase.auth.currentUser!.id,
          'body': null,
          'attachment_url': a.url,
          'attachment_type': a.type,
          'attachment_name': a.name,
        })
        .select()
        .single();
    state = state.copyWith(messages: [...state.messages, _fromRow(row)]);
  }

  /// Apaga uma mensagem minha (`delete_message`, 179).
  Future<void> delete(String id) async {
    await deleteMessage(id);
    state = state.copyWith(messages: [for (final m in state.messages) if (m.id != id) m]);
  }

  ChatMessage _fromRow(Map<String, dynamic> row) {
    return ChatMessage(
      id: row['id'] as String,
      conversationId: row['conversation_id'] as String,
      fromPartner: row['sender_role'] == 'partner',
      text: row['body'] as String?,
      attachmentUrl: row['attachment_url'] as String?,
      attachmentType: row['attachment_type'] as String?,
      attachmentName: row['attachment_name'] as String?,
      sentAt: DateTime.parse(row['created_at'] as String),
      proposalId: row['proposal_id'] as String?,
      proposalTitle: row['proposal_title'] as String?,
      proposalPrice: (row['proposal_price'] as num?)?.toDouble(),
      proposalDepositAmount: (row['proposal_deposit_amount'] as num?)
          ?.toDouble(),
      isQuoteRequestNotice: row['is_quote_request_notice'] as bool? ?? false,
      changeRequestId: row['change_request_id'] as String?,
      autoKind: row['auto_kind'] as String?,
      bookingId: row['booking_id'] as String?,
    );
  }
}

final chatThreadControllerProvider =
    NotifierProvider.family<ChatThreadController, ChatThreadState, String>(
      ChatThreadController.new,
    );
