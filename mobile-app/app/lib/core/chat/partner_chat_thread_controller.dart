import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../partner_app/partner_app_providers.dart'
    show partnerUnreadMessagesCountProvider;
import '../supabase/supabase_config.dart';
import 'chat_thread_controller.dart' show ChatThreadState;

/// Fio de conversa das Mensagens (lado do parceiro) — mesma tabela
/// `messages` (036_chat.sql) que [ChatThreadController], mas grava
/// `sender_role: 'partner'` em vez de `'couple'`. Substitui as
/// chamadas diretas a `MockBackend.listMessages`/`sendMessage` em
/// `partner_chat_thread_screen.dart`.
class PartnerChatThreadController extends Notifier<ChatThreadState> {
  PartnerChatThreadController(this.conversationId);

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
    try {
      await supabase.rpc(
        'mark_conversation_read',
        params: {'p_conversation_id': conversationId},
      );
      ref.invalidate(partnerUnreadMessagesCountProvider);
    } catch (_) {}
  }

  Future<void> sendText(String text) async {
    final trimmed = text.trim();
    if (trimmed.isEmpty) return;
    final row = await supabase
        .from('messages')
        .insert({
          'conversation_id': conversationId,
          'sender_role': 'partner',
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

final partnerChatThreadControllerProvider =
    NotifierProvider.family<
      PartnerChatThreadController,
      ChatThreadState,
      String
    >(PartnerChatThreadController.new);
