import 'package:flutter/material.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/chat/chat_attachments.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_thread_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/bookings/hire_privacy.dart';
import '../../../core/chat/chat_helpers.dart' show PartnerUnavailableException;
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/chat_header.dart';
import '../../../shared/widgets/chat_ui.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../partners/screens/partner_detail_screen.dart';

/// Fio de conversa genérico do separador Chat — parceiros contratados
/// e contactos do cortejo partilham este mesmo ecrã (ver
/// [ChatThreadController]); o chat dedicado do lado do parceiro
/// (`features/partner_home/screens/partner_chat_screen.dart`) mantém-se
/// inalterado.
class ChatThreadScreen extends ConsumerStatefulWidget {
  final ChatConversation conversation;

  const ChatThreadScreen({super.key, required this.conversation});

  @override
  ConsumerState<ChatThreadScreen> createState() => _ChatThreadScreenState();
}

class _ChatThreadScreenState extends ConsumerState<ChatThreadScreen> {
  final _messageController = TextEditingController();
  final _scrollController = ScrollController();

  String get _conversationKey => widget.conversation.id;

  @override
  void dispose() {
    _messageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scrollController.hasClients) return;
      // Lista invertida: a mensagem mais recente está no offset 0.
      _scrollController.animateTo(
        0,
        duration: const Duration(milliseconds: 250),
        curve: Curves.easeOut,
      );
    });
  }

  /// Abre o perfil do parceiro desta conversa — pedido explícito do
  /// utilizador (2026-09-05): o aviso de pedido de orçamento no chat
  /// "deve remeter ao perfil do parceiro". Busca o [Partner] completo
  /// (`partnerByIdProvider`) porque só temos o id/nome resumido em
  /// [ChatConversation]; mesmo modal-sheet de `partners_list_screen.dart`.
  Future<void> _openPartnerProfile() async {
    final partnerId = widget.conversation.partnerId;
    if (partnerId == null) return;
    final partner = await ref.read(partnerByIdProvider(partnerId).future);
    if (!mounted || partner == null) return;
    PartnerDetailScreen.show(context, partner);
  }

  Future<void> _send() async {
    final text = _messageController.text;
    if (text.trim().isEmpty) return;
    _messageController.clear();
    try {
      await ref
          .read(chatThreadControllerProvider(_conversationKey).notifier)
          .sendText(text);
      _scrollToBottom();
    } catch (_) {
      if (!mounted) return;
      _messageController.text = text;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar a mensagem. Tenta novamente.')),
      );
    }
  }

  /// Fotos, ficheiros, stickers e GIFs (2026-10-20).
  Future<void> _attach() async {
    try {
      final a = await pickChatAttachment(context);
      if (a == null || !mounted) return;
      await ref.read(chatThreadControllerProvider(_conversationKey).notifier).sendAttachment(a);
      _scrollToBottom();
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar o anexo. Tenta novamente.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final chat = ref.watch(chatThreadControllerProvider(_conversationKey));

    ref.listen(chatThreadControllerProvider(_conversationKey), (
      previous,
      next,
    ) {
      if ((previous?.messages.length ?? 0) != next.messages.length) {
        _scrollToBottom();
      }
    });

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Column(
        children: [
          SafeArea(
            bottom: false,
            child: ChatHeader(
              name: widget.conversation.name,
              avatarUrl: widget.conversation.avatarUrl,
              subtitle: widget.conversation.partnerId == null ? null : 'Ver perfil',
              onOpenProfile: widget.conversation.partnerId == null
                  ? null
                  : _openPartnerProfile,
              onReport: () => showReportPicker(context, ref,
                  kind: ReportKind.message,
                  allowBlock: false,
                  recentFirst: [
                    for (final m in chat.messages.reversed)
                      if (m.fromPartner && !m.isProposal && !m.isQuoteRequestNotice) ReportableMessage(id: m.id, text: m.text ?? m.attachmentName ?? ''),
                  ]),
            ),
          ),
          Expanded(
            child: chat.loading && chat.messages.isEmpty
                ? const Center(child: CircularProgressIndicator())
                // Invertida para abrir SEMPRE nas mensagens mais recentes
                // (antes saltava para o fim com animação e, com cartões
                // a crescer depois de desenhados, ficava a meio —
                // reportado 2026-10-18).
                : ListView(
                    controller: _scrollController,
                    reverse: true,
                    padding: const EdgeInsets.all(16),
                    children: chatTimeline(
                      messages: chat.messages,
                      // Aqui é sempre o casal a enviar — `fromPartner`
                      // significa "veio da outra parte".
                      isMine: (m) => !m.fromPartner,
                      content: (message, isMe) => message.hasAttachment
                          ? ChatAttachmentView(url: message.attachmentUrl!, type: message.attachmentType ?? 'file', name: message.attachmentName, isMe: isMe)
                          : message.isProposal
                          ? _ProposalCard(message: message, onRequestNew: _openPartnerProfile)
                          : message.isQuoteRequestNotice
                          ? GestureDetector(
                              onTap: _openPartnerProfile,
                              child: ChatBubble(text: message.text ?? '', isMe: isMe),
                            )
                          : isMe
                          ? ChatBubble(text: message.text ?? '', isMe: isMe)
                          : GestureDetector(
                              // Toque longo: denunciar a mensagem.
                              onLongPress: () => showModerationSheet(context, ref,
                                  kind: ReportKind.message, targetId: message.id, allowBlock: false),
                              child: ChatBubble(text: message.text ?? '', isMe: isMe),
                            ),
                    ).reversed.toList(),
                  ),
          ),
          ChatComposer(controller: _messageController, onSend: _send, onAttach: _attach),
        ],
      ),
    );
  }
}

/// Cartão de proposta real (`message.isProposal`,
/// `051_proposal_chat_card.sql`) — o parceiro só recebe/envia texto pela
/// mesma tabela (`partner_chat_thread_screen.dart` mostra o mesmo
/// cartão, sem botão de aceitar), mas só o casal pode aceitar
/// (`accept_proposal()`, mesma RPC de `couple_bookings_screen.dart`).
class _ProposalCard extends ConsumerStatefulWidget {
  final ChatMessage message;

  final VoidCallback? onRequestNew;
  const _ProposalCard({required this.message, this.onRequestNew});

  @override
  ConsumerState<_ProposalCard> createState() => _ProposalCardState();
}

class _ProposalCardState extends ConsumerState<_ProposalCard> {
  bool _accepting = false;
  bool _accepted = false;

  @override
  void initState() {
    super.initState();
    // Estado real da proposta logo ao abrir: uma proposta já aceite (ou
    // recusada) mostrava "Aceitar" e tocar não fazia nada visível
    // (reportado 2026-10-18).
    final id = widget.message.proposalId;
    if (id != null) {
      fetchProposalStatus(id).then((status) async {
        if (!mounted || status == null) return;
        setState(() {
          _accepted = status == 'accepted';
          _unavailable = status != 'sent' && status != 'accepted';
        });
        if (status == 'accepted') {
          // O sinal pode já estar pago — não pedir para pagar outra vez
          // (reportado 2026-10-18).
          final booking = await fetchProposalBookingState(id);
          if (mounted) setState(() => _bookingState = booking);
        }
      }).catchError((_) {});
    }
  }

  bool _unavailable = false;
  String? _bookingState;

  /// Texto do botão depois de aceite, conforme o pagamento da reserva.
  String get _acceptedLabel => switch (_bookingState) {
        'deposit_paid' => 'Sinal pago ✓',
        'final_due' => 'Pagar restante',
        'paid' => 'Tudo pago ✓',
        'completed' => 'Concluído ✓',
        'cancelled' => 'Reserva cancelada',
        _ => 'Aceite · pagar sinal',
      };

  void _acceptedFeedback() {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: const Text('Proposta aceite! Paga o sinal para confirmar.'),
        action: SnackBarAction(
          label: 'Pagar',
          onPressed: () => _openPay(
            (ref.read(organizerFeeConfigProvider).value ?? const FeeConfig())
                .effectivePct(widget.message.proposalPrice ?? 0),
          ),
        ),
      ),
    );
  }

  /// Abre o pagamento dentro da app para o que estiver pendente.
  Future<void> _openPay(double pct) async {
    final id = widget.message.proposalId;
    if (id == null) return;
    final p = await fetchProposalPendingPayment(id);
    if (!mounted) return;
    if (p == null) {
      context.push('/bookings');
      return;
    }
    final (paymentId, type, amount, partner) = p;
    await context.push('/pay', extra: PayArgs(
      paymentId: paymentId,
      partnerName: partner,
      kind: type,
      amount: amountWithCommission(amount, pct),
    ));
    if (!mounted) return;
    final booking = await fetchProposalBookingState(id);
    if (mounted) setState(() => _bookingState = booking);
  }

  Future<void> _accept() async {
    // Partilhar com os outros organizadores ou guardar em segredo (2026-10-21).
    final secret = await askHirePrivacy(context, ref.read(weddingControllerProvider).wedding?.id, 'este parceiro');
    if (secret == null || !mounted) return;
    setState(() => _accepting = true);
    try {
      await acceptProposal(widget.message.proposalId!, private: secret);
      if (!mounted) return;
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
      setState(() => _accepted = true);
      _acceptedFeedback();
    } on PostgrestException catch (e) {
      // `P0001` = já não está `sent`. Verifica o estado real em vez de
      // assumir logo um erro — se já foi aceite (ex: pelas Reservas,
      // este cartão do chat não sabia), reflete isso como sucesso em
      // vez de assustar com "não disponível".
      if (e.code == 'P0001') {
        final status = await fetchProposalStatus(widget.message.proposalId!);
        if (status == 'accepted') {
          if (!mounted) return;
          ref.invalidate(pendingProposalsProvider);
          ref.invalidate(coupleBookingsProvider);
          setState(() => _accepted = true);
          _acceptedFeedback();
          return;
        }
        if (mounted) setState(() => _unavailable = true);
      }
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              e.code == 'P0001'
                  ? 'Esta proposta já não está disponível — foi recusada ou expirou.'
                  // `P0007` = `partner_already_booked` (backend/bookings/tasks.md,
                  // "Prevenir overbooking") — o parceiro já tem outra reserva
                  // ativa na mesma data.
                  : e.code == 'P0007'
                      ? 'Este parceiro já tem outra reserva confirmada nessa data. Não é possível aceitar esta proposta.'
                      // `P0008` = `already_booked_with_partner` (migração 102).
                      : e.code == 'P0010'
                          ? PartnerUnavailableException.message
                      : e.code == 'P0008'
                          ? 'Já tens uma reserva com este parceiro. Só podes aceitar outra se essa for cancelada sem o sinal pago.'
                          : 'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _accepting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final message = widget.message;
    // Como no design: "Casamento · 12 jun 2027" e o serviço por baixo.
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final date = wedding?.weddingDate;
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final heading = date == null
        ? null
        : '${wedding!.eventType.label} · ${date.day} ${months[date.month - 1]} ${date.year}';
    final pct = (ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig())
        .effectivePct(message.proposalPrice ?? 0);
    double withFee(double v) => amountWithCommission(v, pct);
    return ChatProposalCard(
      title: heading ?? message.proposalTitle ?? 'Proposta',
      subtitle: heading == null ? null : message.proposalTitle,
      // O cliente vê logo o que vai pagar: valor do parceiro + comissão
      // (mesma conta do checkout). Pedido 2026-10-17.
      price: message.proposalPrice == null ? null : withFee(message.proposalPrice!),
      deposit: message.proposalDepositAmount == null ? null : withFee(message.proposalDepositAmount!),
      note: pct > 0 ? 'Valores já com a comissão da À Nossa!' : null,
      actions: [
        ChatCardAction('Ver detalhe', () => context.push('/bookings')),
        if (_accepted && _bookingState == 'cancelled')
          // Reserva cancelada: pode pedir uma proposta nova (2026-10-21).
          ChatCardAction('Pedir nova proposta', widget.onRequestNew, primary: true)
        else if (_accepted)
          // Já aceite: o passo seguinte é pagar o sinal nas Reservas.
          ChatCardAction(
            _acceptedLabel,
            () => (_bookingState == null || _bookingState == 'deposit_due' || _bookingState == 'final_due')
                ? _openPay(pct)
                : context.push('/bookings'),
            primary: true,
          )
        else if (_unavailable)
          const ChatCardAction('Indisponível', null, primary: true)
        else
          ChatCardAction(
            _accepting ? 'A aceitar…' : 'Aceitar',
            _accepting ? null : _accept,
            primary: true,
          ),
      ],
    );
  }
}
