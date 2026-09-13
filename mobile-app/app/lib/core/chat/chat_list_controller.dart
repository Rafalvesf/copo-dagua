import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
import '../wedding/wedding_controller.dart';

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

/// Lista de conversas do separador Chat — liga-se a `conversations`
/// real (036_chat.sql), substitui `MockBackend.listChatConversations`.
/// [ChatConversation.unreadCount] agora é real
/// (`couple_last_read_at`, `055_chat_unread_tracking.sql`) — conta
/// mensagens do parceiro mais recentes do que a última leitura do
/// casal. Uma segunda query para todas as mensagens de todas as
/// conversas (em vez de N queries, uma por conversa) — à escala do MVP
/// (poucas dezenas de conversas por casamento) é simples e correto,
/// mesmo raciocínio já usado em `core/partners/partner_providers.dart`.
class ChatListController extends Notifier<ChatListState> {
  @override
  ChatListState build() {
    final weddingId = ref.watch(
      weddingControllerProvider.select((s) => s.wedding?.id),
    );
    if (weddingId != null) {
      Future.microtask(() => load(weddingId));
    }
    return const ChatListState();
  }

  Future<void> load(String weddingId) async {
    state = state.copyWith(loading: true);
    final rows = await supabase
        .from('conversations')
        .select(
          'id, wedding_id, partner_id, last_message, last_message_at, couple_last_read_at, '
          'partner_profiles(business_name, cover_photo_url)',
        )
        .eq('wedding_id', weddingId)
        .order('last_message_at', ascending: false);
    final conversationRows = (rows as List).cast<Map<String, dynamic>>();

    final conversationIds = conversationRows
        .map((r) => r['id'] as String)
        .toList();
    final unreadCounts = await _unreadCountsByConversation(conversationIds);

    state = ChatListState(
      loading: false,
      conversations: conversationRows
          .map((r) => _fromRow(r, unreadCounts[r['id']] ?? 0))
          .toList(),
    );
  }

  Future<Map<String, int>> _unreadCountsByConversation(
    List<String> conversationIds,
  ) async {
    if (conversationIds.isEmpty) return const {};
    final messageRows = await supabase
        .from('messages')
        .select('conversation_id, created_at')
        .inFilter('conversation_id', conversationIds)
        .eq('sender_role', 'partner');

    final lastReadByConversation = <String, DateTime?>{};
    // Reaproveita a query já feita acima seria mais eficiente, mas
    // manter separado deixa esta função pura/testável por si só.
    final conversations = await supabase
        .from('conversations')
        .select('id, couple_last_read_at')
        .inFilter('id', conversationIds);
    for (final row in (conversations as List).cast<Map<String, dynamic>>()) {
      final lastRead = row['couple_last_read_at'] as String?;
      lastReadByConversation[row['id'] as String] = lastRead == null
          ? null
          : DateTime.parse(lastRead);
    }

    final counts = <String, int>{};
    for (final row in (messageRows as List).cast<Map<String, dynamic>>()) {
      final conversationId = row['conversation_id'] as String;
      final createdAt = DateTime.parse(row['created_at'] as String);
      final lastRead = lastReadByConversation[conversationId];
      if (lastRead == null || createdAt.isAfter(lastRead)) {
        counts[conversationId] = (counts[conversationId] ?? 0) + 1;
      }
    }
    return counts;
  }

  ChatConversation _fromRow(Map<String, dynamic> row, int unreadCount) {
    final partner = row['partner_profiles'] as Map<String, dynamic>?;
    return ChatConversation(
      id: row['id'] as String,
      weddingId: row['wedding_id'] as String,
      partnerId: row['partner_id'] as String,
      name: (partner?['business_name'] as String?)?.trim().isNotEmpty == true
          ? partner!['business_name'] as String
          : 'Parceiro',
      avatarSeed: row['partner_id'] as String,
      avatarUrl: partner?['cover_photo_url'] as String?,
      lastMessage: row['last_message'] as String?,
      lastMessageAt: row['last_message_at'] == null
          ? null
          : DateTime.parse(row['last_message_at'] as String),
      unreadCount: unreadCount,
    );
  }
}

/// Total de mensagens não lidas em todas as conversas do casal — para o
/// selo no separador "Chat" da navbar (`floating_bottom_nav.dart`),
/// pedido explícito do utilizador (2026-09-05). Provider próprio (em
/// vez de derivar de [chatListControllerProvider]) porque a navbar
/// aparece em ecrãs que não montam a lista de conversas.
final unreadMessagesCountProvider = FutureProvider<int>((ref) async {
  final weddingId = ref.watch(
    weddingControllerProvider.select((s) => s.wedding?.id),
  );
  if (weddingId == null) return 0;

  final rows = await supabase
      .from('conversations')
      .select('id, couple_last_read_at')
      .eq('wedding_id', weddingId);
  final conversations = (rows as List).cast<Map<String, dynamic>>();
  if (conversations.isEmpty) return 0;

  final lastReadByConversation = <String, DateTime?>{
    for (final row in conversations)
      row['id'] as String: (row['couple_last_read_at'] as String?) == null
          ? null
          : DateTime.parse(row['couple_last_read_at'] as String),
  };

  final messageRows = await supabase
      .from('messages')
      .select('conversation_id, created_at')
      .inFilter(
        'conversation_id',
        conversations.map((r) => r['id'] as String).toList(),
      )
      .eq('sender_role', 'partner');

  var total = 0;
  for (final row in (messageRows as List).cast<Map<String, dynamic>>()) {
    final lastRead = lastReadByConversation[row['conversation_id'] as String];
    final createdAt = DateTime.parse(row['created_at'] as String);
    if (lastRead == null || createdAt.isAfter(lastRead)) total++;
  }
  return total;
});

final chatListControllerProvider =
    NotifierProvider<ChatListController, ChatListState>(ChatListController.new);
