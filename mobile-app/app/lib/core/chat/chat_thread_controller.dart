import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';

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

/// Fio de conversa genérico do separador Chat, parametrizado pela
/// conversa ([ChatConversation.partnerId] ?? [ChatConversation.id]).
/// Reaproveita o mesmo [ChatMessage]/`MockBackend.listMessages`/
/// `sendMessage` do chat de parceiro (`core/chat/chat_controller.dart`),
/// mas com `fromPartner: false` — aqui é sempre o casal a enviar,
/// nunca o parceiro/contacto do outro lado.
class ChatThreadController extends Notifier<ChatThreadState> {
  ChatThreadController(this.conversationKey);

  final String conversationKey;
  final _backend = MockBackend.instance;

  @override
  ChatThreadState build() {
    Future.microtask(load);
    return const ChatThreadState();
  }

  Future<void> load() async {
    state = state.copyWith(loading: true);
    final messages = await _backend.listMessages(conversationKey);
    state = ChatThreadState(loading: false, messages: messages);
  }

  Future<void> sendText(String text) async {
    if (text.trim().isEmpty) return;
    final message = await _backend.sendMessage(
      partnerId: conversationKey,
      fromPartner: false,
      text: text.trim(),
    );
    state = state.copyWith(messages: [...state.messages, message]);
  }
}

final chatThreadControllerProvider =
    NotifierProvider.family<ChatThreadController, ChatThreadState, String>(
      ChatThreadController.new,
    );
