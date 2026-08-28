import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';

class ChatListState {
  final bool loading;
  final List<ChatConversation> conversations;

  const ChatListState({this.loading = false, this.conversations = const []});

  ChatListState copyWith({
    bool? loading,
    List<ChatConversation>? conversations,
  }) {
    return ChatListState(
      loading: loading ?? this.loading,
      conversations: conversations ?? this.conversations,
    );
  }
}

/// Lista de conversas do separador Chat — parceiros contratados e
/// contactos do cortejo, ver [ChatConversation].
class ChatListController extends Notifier<ChatListState> {
  final _backend = MockBackend.instance;

  @override
  ChatListState build() {
    Future.microtask(load);
    return const ChatListState();
  }

  Future<void> load() async {
    state = state.copyWith(loading: true);
    final conversations = await _backend.listChatConversations();
    state = ChatListState(loading: false, conversations: conversations);
  }
}

final chatListControllerProvider =
    NotifierProvider<ChatListController, ChatListState>(
      ChatListController.new,
    );
