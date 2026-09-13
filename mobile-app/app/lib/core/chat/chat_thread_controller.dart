import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
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

  final String conversationId;

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
        .eq('conversation_id', conversationId)
        .order('created_at', ascending: true);
    state = ChatThreadState(
      loading: false,
      messages: (rows as List)
          .map((r) => _fromRow(r as Map<String, dynamic>))
          .toList(),
    );
    // Abrir a conversa marca-a como lida — `mark_conversation_read()`
    // (`055_chat_unread_tracking.sql`) decide sozinha que é o lado do
    // casal a ler. Melhor esforço: uma falha aqui não deve impedir o
    // ecrã de mostrar as mensagens já carregadas.
    try {
      await supabase.rpc(
        'mark_conversation_read',
        params: {'p_conversation_id': conversationId},
      );
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
          'conversation_id': conversationId,
          'sender_role': 'couple',
          'sender_id': supabase.auth.currentUser!.id,
          'body': trimmed,
        })
        .select()
        .single();
    state = state.copyWith(messages: [...state.messages, _fromRow(row)]);
  }

  ChatMessage _fromRow(Map<String, dynamic> row) {
    return ChatMessage(
      id: row['id'] as String,
      conversationId: row['conversation_id'] as String,
      fromPartner: row['sender_role'] == 'partner',
      text: row['body'] as String,
      sentAt: DateTime.parse(row['created_at'] as String),
      proposalId: row['proposal_id'] as String?,
      proposalTitle: row['proposal_title'] as String?,
      proposalPrice: (row['proposal_price'] as num?)?.toDouble(),
      proposalDepositAmount: (row['proposal_deposit_amount'] as num?)
          ?.toDouble(),
      isQuoteRequestNotice: row['is_quote_request_notice'] as bool? ?? false,
    );
  }
}

final chatThreadControllerProvider =
    NotifierProvider.family<ChatThreadController, ChatThreadState, String>(
      ChatThreadController.new,
    );
