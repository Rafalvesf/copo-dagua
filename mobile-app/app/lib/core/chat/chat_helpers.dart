import '../models/models.dart';
import '../supabase/supabase_config.dart';

/// Devolve o id da conversa real entre este casamento e este parceiro
/// (036_chat.sql), criando-a se ainda não existir. Usado tanto pelo
/// botão "Chat" no perfil público do parceiro (lado do casal) como
/// pelo botão "Responder" no detalhe de uma reserva/pedido (lado do
/// parceiro) — os dois lados podem iniciar a conversa.
Future<String> getOrCreateConversation({
  required String weddingId,
  required String partnerId,
}) async {
  final existing = await supabase
      .from('conversations')
      .select('id')
      .eq('wedding_id', weddingId)
      .eq('partner_id', partnerId)
      .maybeSingle();
  if (existing != null) return existing['id'] as String;

  final row = await supabase
      .from('conversations')
      .insert({'wedding_id': weddingId, 'partner_id': partnerId})
      .select('id')
      .single();
  return row['id'] as String;
}

/// Resolve a conversa real (`conversations`) a partir de uma proposta —
/// usado pela tarefa "Rever proposta — {parceiro}" (`task_engine_controller.dart`)
/// para abrir o chat certo em vez do Marketplace genérico (`/partners`).
/// Bug real reportado pelo utilizador (2026-09-05): "o botão na lista de
/// tarefas que informa do partner ter respondido deve remeter ao chat
/// deles e não à página dos parceiros" — `tasks_screen.dart` só sabia
/// rotear por `category` ('parceiros' -> `/partners`), sem noção de qual
/// parceiro/conversa específica esta tarefa dinâmica representa.
Future<ChatConversation> resolveProposalConversation({
  required String weddingId,
  required String proposalId,
}) async {
  final row = await supabase
      .from('proposals')
      .select('partner_id, partner_profiles(business_name, cover_photo_url)')
      .eq('id', proposalId)
      .single();
  final partnerId = row['partner_id'] as String;
  final partner = row['partner_profiles'] as Map<String, dynamic>?;

  final conversationId = await getOrCreateConversation(
    weddingId: weddingId,
    partnerId: partnerId,
  );

  return ChatConversation(
    id: conversationId,
    weddingId: weddingId,
    partnerId: partnerId,
    name: (partner?['business_name'] as String?) ?? 'Parceiro',
    avatarSeed: partnerId,
    avatarUrl: partner?['cover_photo_url'] as String?,
  );
}

/// Publica no chat que o casal acabou de pedir um orçamento — pedido
/// explícito do utilizador (2026-09-04): "tanto receber o pedido de
/// orçamento, como o valor do orçamento" devem aparecer na conversa,
/// não só a proposta com o valor ([sendProposalMessage]). Chamado logo a
/// seguir a `request_quote()` (`partner_detail_screen.dart`). Texto
/// simples (sem cartão dedicado, ao contrário da proposta) — o pedido
/// ainda não tem nenhum valor associado para mostrar.
Future<void> sendQuoteRequestMessage({
  required String weddingId,
  required String partnerId,
  required String partnerName,
  DateTime? eventDate,
  String? location,
  String? message,
}) async {
  final conversationId = await getOrCreateConversation(
    weddingId: weddingId,
    partnerId: partnerId,
  );
  // Pedido explícito do utilizador (2026-09-05): "Pediu um orçamento
  // (ou semelhante) para $partner" — nomeia o parceiro mesmo dentro da
  // própria conversa com ele (`isQuoteRequestNotice` torna a mensagem
  // clicável para o perfil, ver `chat_thread_screen.dart`).
  var body = 'Pediu um orçamento para $partnerName.';
  final details = <String>[];
  if (eventDate != null) {
    details.add(
      '${eventDate.day.toString().padLeft(2, '0')}/${eventDate.month.toString().padLeft(2, '0')}/${eventDate.year}',
    );
  }
  if (location != null && location.isNotEmpty) {
    details.add(location);
  }
  if (details.isNotEmpty) {
    body += ' Casamento: ${details.join(' · ')}.';
  }
  if (message != null && message.isNotEmpty) {
    body += '\n"$message"';
  }

  await supabase.from('messages').insert({
    'conversation_id': conversationId,
    'sender_role': 'couple',
    'sender_id': supabase.auth.currentUser!.id,
    'body': body,
    'is_quote_request_notice': true,
  });
}

/// Publica o cartão de proposta na conversa real, logo a seguir a
/// `send_proposal()` (`send_proposal_screen.dart`) — pedido explícito do
/// utilizador (2026-09-04): "a proposta deve aparecer no chat tanto para
/// o casal como para o parceiro". Sempre `sender_role: 'partner'` (só o
/// parceiro envia propostas); `body` é o texto de fallback para quem
/// ainda não atualizou a app e não sabe renderizar o cartão
/// ([ChatMessage.isProposal]).
Future<void> sendProposalMessage({
  required String conversationId,
  required String proposalId,
  required String title,
  required double price,
  required double depositAmount,
}) async {
  await supabase.from('messages').insert({
    'conversation_id': conversationId,
    'sender_role': 'partner',
    'sender_id': supabase.auth.currentUser!.id,
    'body':
        'Enviou uma proposta: $title — ${price.toStringAsFixed(0)} € (sinal ${depositAmount.toStringAsFixed(0)} €)',
    'proposal_id': proposalId,
    'proposal_title': title,
    'proposal_price': price,
    'proposal_deposit_amount': depositAmount,
  });
}
