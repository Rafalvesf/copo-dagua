import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../mock/mock_backend.dart';
import '../models/models.dart';

class ChatState {
  final bool loading;
  final List<ChatMessage> messages;

  const ChatState({this.loading = false, this.messages = const []});

  ChatState copyWith({bool? loading, List<ChatMessage>? messages}) {
    return ChatState(
      loading: loading ?? this.loading,
      messages: messages ?? this.messages,
    );
  }
}

/// Conversa entre o parceiro autenticado e o casal cliente. Versão mínima
/// de um único fio de conversa (só existe um casal na demo) — o modelo
/// completo (múltiplos clientes, anexos, etc.) fica documentado em
/// `partner-app/chat/`, ainda por implementar.
class ChatController extends Notifier<ChatState> {
  final _backend = MockBackend.instance;
  String? _partnerId;

  @override
  ChatState build() {
    final partnerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    _partnerId = partnerId;
    if (partnerId != null) {
      Future.microtask(() => load(partnerId));
    }
    return const ChatState();
  }

  Future<void> load(String partnerId) async {
    state = state.copyWith(loading: true);
    final messages = await _backend.listMessages(partnerId);
    state = ChatState(loading: false, messages: messages);
  }

  Future<void> sendText(String text) async {
    final partnerId = _partnerId;
    if (partnerId == null || text.trim().isEmpty) return;
    final message = await _backend.sendMessage(
      partnerId: partnerId,
      fromPartner: true,
      text: text.trim(),
    );
    state = state.copyWith(messages: [...state.messages, message]);
  }

  Future<void> sendContract(String title) async {
    final partnerId = _partnerId;
    if (partnerId == null || title.trim().isEmpty) return;
    final message = await _backend.sendMessage(
      partnerId: partnerId,
      fromPartner: true,
      contractTitle: title.trim(),
    );
    state = state.copyWith(messages: [...state.messages, message]);
  }
}

final chatControllerProvider = NotifierProvider<ChatController, ChatState>(ChatController.new);
