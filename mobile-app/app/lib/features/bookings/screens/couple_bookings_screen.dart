import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/home/home_providers.dart';
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../core/models/models.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../guest_offers/widgets/organizer_guest_offers.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../features/partner_bookings/booking_style.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/island_sheet.dart';

/// Reservas do lado do casal — lê `coupleBookingsProvider`
/// (`core/home/home_providers.dart`), mesmos dados mock que alimentam
/// `_BookingsSection` no dashboard (`home_feed_screen.dart`); este ecrã é
/// a versão completa, com todas as reservas em vez de só um resumo.
/// Ver `mobile-app/bookings/README.md` — sem motor real ligado ainda.
class CoupleBookingsScreen extends ConsumerStatefulWidget {
  /// Abre diretamente no separador "Convidados" (alojamento e transporte).
  final bool guestsTab;
  const CoupleBookingsScreen({super.key, this.guestsTab = false});

  @override
  ConsumerState<CoupleBookingsScreen> createState() => _CoupleBookingsScreenState();
}

class _CoupleBookingsScreenState extends ConsumerState<CoupleBookingsScreen> {
  late bool _guests = widget.guestsTab;

  @override
  Widget build(BuildContext context) {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final bookingsAsync = ref.watch(coupleBookingsProvider);
    final proposalsAsync = ref.watch(pendingProposalsProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            const PageHeader(
              title: 'Reservas',
              centered: true,
              subtitle: 'Parceiros contratados e reservas dos convidados.',
            ),
            const SizedBox(height: 16),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: _TabSwitch(guests: _guests, onChanged: (g) => setState(() => _guests = g)),
            ),
            const SizedBox(height: 16),
            if (_guests)
              Expanded(
                child: weddingId == null
                    ? const SizedBox.shrink()
                    : OrganizerGuestOffers(weddingId: weddingId),
              )
            else
            Expanded(
              child: bookingsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(coupleBookingsProvider)),
                data: (bookings) {
                  final proposals = proposalsAsync.maybeWhen(
                    data: (p) => p,
                    orElse: () => const <ReceivedProposal>[],
                  );
                  if (bookings.isEmpty && proposals.isEmpty) {
                    return const EmptyStateView(
                      message: 'Ainda sem parceiros reservados.',
                      icon: Icons.storefront_outlined,
                    );
                  }
                  return ListView(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      0,
                      AppTheme.screenMargin,
                      140,
                    ),
                    children: [
                      // Canvas "Reservas — redesign": cartão verde com os
                      // serviços tratados (sinal pago ou mais).
                      Builder(builder: (context) {
                        final active = bookings.where((b) => b.status != BookingStatus.recusado).toList();
                        final handled = active.where((b) => b.paidAmount > 0 || b.status == BookingStatus.concluido).length;
                        final urgent = active.where((b) => b.pendingDepositPaymentId != null || b.pendingFinalPaymentId != null).length;
                        return GreenHero(
                          label: 'SERVIÇOS TRATADOS',
                          value: '$handled',
                          suffix: 'de ${active.length} ${active.length == 1 ? 'serviço' : 'serviços'}',
                          progress: active.isEmpty ? 0 : handled / active.length,
                          doodles: const [Icons.work_outline, Icons.photo_camera_outlined, Icons.music_note_outlined],
                          footer: Wrap(spacing: 8, runSpacing: 8, children: [
                            HeroPill('$urgent ${urgent == 1 ? 'pagamento urgente' : 'pagamentos urgentes'}', solid: true),
                            HeroPill('${proposals.length} ${proposals.length == 1 ? 'proposta' : 'propostas'}'),
                          ]),
                        );
                      }),
                      if (proposals.isNotEmpty) ...[
                        const SectionTitle('Propostas recebidas'),
                        for (final proposal in proposals)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 12),
                            child: _ProposalRow(proposal: proposal),
                          ),
                      ],
                      if (bookings.isNotEmpty) const SectionTitle('Os vossos serviços'),
                      for (final booking in bookings)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: _CoupleBookingRow(booking: booking),
                        ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CoupleBookingRow extends ConsumerStatefulWidget {
  final CoupleBooking booking;

  const _CoupleBookingRow({required this.booking});

  @override
  ConsumerState<_CoupleBookingRow> createState() => _CoupleBookingRowState();
}

class _CoupleBookingRowState extends ConsumerState<_CoupleBookingRow> {
  CoupleBooking get booking => widget.booking;
  bool _cancelling = false;

  /// `cancel_booking_by_couple()` (`059_cancel_booking.sql`) — só
  /// oferecido enquanto a booking está `aceite`/`confirmado`
  /// (`awaiting_deposit`/`confirmed` reais), mesmos dois estados que a
  /// função aceita (`invalid_state` para qualquer outro).
  Future<void> _cancel() async {
    if (_cancelling) return;
    final confirmed = await showIslandDialog<bool>(
      context: context,
      builder: (context) => IslandAlert(
        title: const Text('Cancelar reserva'),
        content: Text(
          'Cancelar a reserva com ${booking.partnerName}? Esta ação não pode ser desfeita.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: const Text('Voltar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: const Text('Cancelar reserva'),
          ),
        ],
      ),
    );
    if (confirmed != true || !mounted) return;

    setState(() => _cancelling = true);
    try {
      await cancelBookingByCouple(booking.id);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Não foi possível cancelar a reserva. Tenta novamente.'),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _cancelling = false);
      ref.invalidate(coupleBookingsProvider);
      // O sinal pendente já foi marcado `failed` por `cancel_booking_by_couple()`
      // — recomputar agora dispensa a tarefa "Pagar sinal" desatualizada
      // em vez de esperar por um recompute não relacionado (próximo
      // carregamento do Home). Mesmo padrão de `service_preferences_screen.dart`.
      ref.read(taskEngineControllerProvider.notifier).recompute();
    }
  }

  // Rótulo livre (`partner_categories.label_pt`, taxonomia real de 13
  // valores) em vez do switch exaustivo de 5 casos de [PartnerCategory] —
  // mapeamento por palavra-chave com ícone genérico de recurso, mesmo
  // espírito de `colorForTagLabel` em `shared/category_tag_color.dart`.
  IconData get _icon {
    final label = booking.category?.toLowerCase() ?? '';
    if (label.contains('foto') || label.contains('víde')) {
      return Icons.camera_alt_outlined;
    }
    if (label.contains('cater') || label.contains('bolo')) {
      return Icons.restaurant_outlined;
    }
    if (label.contains('músic') || label.contains('dj')) {
      return Icons.music_note_outlined;
    }
    if (label.contains('flor') || label.contains('decor')) {
      return Icons.local_florist_outlined;
    }
    if (label.contains('espaç') || label.contains('venue')) {
      return Icons.villa_outlined;
    }
    return Icons.celebration_outlined;
  }

  /// Abre o pagamento dentro da app (escolher método → Stripe embutida →
  /// página de pago), sem abrir o browser — 2026-10-19.
  Future<void> _payPending(String? paymentId, {required bool deposit, required double amount}) async {
    if (paymentId == null) return;
    await context.push('/pay', extra: PayArgs(
      paymentId: paymentId,
      partnerName: booking.partnerName,
      kind: deposit ? 'deposit' : 'final_payment',
      amount: amount,
    ));
    if (mounted) ref.invalidate(coupleBookingsProvider);
  }

  @override
  Widget build(BuildContext context) {
    final date = booking.serviceDate;
    final dateLabel =
        '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';
    final needsDeposit = booking.pendingDepositPaymentId != null;
    final needsFinalPayment = booking.pendingFinalPaymentId != null;
    // Valor que a Stripe vai mesmo cobrar (parceiro + comissão por cima,
    // ver `amountWithCommission`) — nunca mostrar só o valor do parceiro
    // aqui, para o botão nunca prometer um valor diferente do checkout
    // a seguir.
    final commissionPct = ref
        .watch(platformCommissionPercentageProvider)
        .maybeWhen(data: (pct) => pct, orElse: () => 0.0);

    return SnappyTap(
      onTap: () => context.push(
        '/bookings/detail',
        extra: booking,
      ),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: whiteLineCard(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                StickerIcon(_icon, turns: StickerIcon.tilt(booking.id.hashCode)),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        booking.partnerName,
                        style: const TextStyle(
                          fontWeight: FontWeight.w700,
                          fontSize: AppFontSize.base,
                          color: AppTheme.ink,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        '$dateLabel · ${euros(amountWithCommission(booking.amount, commissionPct))}',
                        style: const TextStyle(
                          color: AppTheme.inkMuted,
                          fontSize: AppFontSize.sm,
                        ),
                      ),
                    ],
                  ),
                ),
                // `needsFinalPayment` só existe quando `admin_complete_booking()`
                // já correu (`053_final_payment.sql`) mas ainda sobra valor por
                // cobrar além do sinal — mostrar "Concluído" nesse intervalo
                // era enganador (parecia que já não havia nada pendente). Bug
                // real reportado pelo utilizador (2026-09-12): a reserva
                // aparecia como concluída logo após o sinal, devia mostrar o
                // restante como pendente.
                // Só o sinal pago não é "tudo pago" (2026-10-17): se ainda
                // falta valor, a etiqueta diz isso em vez de "Concluído".
                StatusPill(
                  label: needsFinalPayment
                      ? 'Falta pagar o restante'
                      : (booking.paidAmount > 0 && booking.remainingAmount > 0.009)
                          ? 'Sinal pago'
                          : (booking.paidAmount > 0 && booking.remainingAmount <= 0.009)
                              ? 'Tudo pago'
                              : booking.status.label,
                  color: needsFinalPayment || (booking.paidAmount > 0 && booking.remainingAmount > 0.009)
                      ? AppStatusColors.pending
                      : bookingStatusColor(booking.status),
                ),
              ],
            ),
            if (booking.paidAmount > 0) ...[
              const SizedBox(height: 10),
              ClipRRect(
                borderRadius: BorderRadius.circular(3),
                child: LinearProgressIndicator(
                  value: booking.amount <= 0 ? 1 : (booking.paidAmount / booking.amount).clamp(0.0, 1.0),
                  minHeight: 5,
                  backgroundColor: AppTheme.borderMuted,
                  color: AppTheme.accentOliveDark,
                ),
              ),
              const SizedBox(height: 6),
              Text(
                booking.remainingAmount > 0.009
                    ? 'Pago ${euros(amountWithCommission(booking.paidAmount, commissionPct), cents: true)} · falta ${euros(amountWithCommission(booking.remainingAmount, commissionPct), cents: true)}'
                        '${needsFinalPayment ? '' : ' (pede-se depois do serviço)'}'
                    : 'Pago na totalidade',
                style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
              ),
            ],
            if (needsDeposit) ...[
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => _payPending(
                    booking.pendingDepositPaymentId,
                    deposit: true,
                    amount: amountWithCommission(booking.depositAmount ?? 0, commissionPct),
                  ),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(AppRadius.sm),
                    ),
                  ),
                  child: Text(
                    'Pagar sinal — ${euros(amountWithCommission(booking.depositAmount ?? 0, commissionPct), cents: true)}',
                  ),
                ),
              ),
            ],
            if (needsFinalPayment) ...[
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => _payPending(
                    booking.pendingFinalPaymentId,
                    deposit: false,
                    amount: amountWithCommission(booking.finalPaymentAmount ?? 0, commissionPct),
                  ),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(AppRadius.sm),
                    ),
                  ),
                  child: Text(
                    'Pagar restante — ${euros(amountWithCommission(booking.finalPaymentAmount ?? 0, commissionPct), cents: true)}',
                  ),
                ),
              ),
            ],
            if (booking.status == BookingStatus.aceite ||
                booking.status == BookingStatus.confirmado) ...[
              const SizedBox(height: 8),
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: _cancelling ? null : _cancel,
                  style: TextButton.styleFrom(
                    foregroundColor: AppStatusColors.declined,
                  ),
                  child: Text(_cancelling ? 'A cancelar...' : 'Cancelar reserva'),
                ),
              ),
            ],
            if (booking.status == BookingStatus.concluido) ...[
              const SizedBox(height: 12),
              ReviewAction(booking: booking),
            ],
          ],
        ),
      ),
    );
  }
}

/// Proposta pendente (`pendingProposalsProvider`) — "Aceitar" chama
/// `accept_proposal()`, que cria a reserva real; sem isto o casal nunca
/// tinha forma de sair de `quote_requests`/`proposals` para `bookings`.
class _ProposalRow extends ConsumerStatefulWidget {
  final ReceivedProposal proposal;

  const _ProposalRow({required this.proposal});

  @override
  ConsumerState<_ProposalRow> createState() => _ProposalRowState();
}

class _ProposalRowState extends ConsumerState<_ProposalRow> {
  bool _accepting = false;

  Future<void> _accept() async {
    setState(() => _accepting = true);
    try {
      await acceptProposal(widget.proposal.id);
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Proposta aceite! Paga o sinal abaixo para confirmar a reserva.')),
        );
      }
    } on PostgrestException catch (e) {
      // `P0001` = `accept_proposal()` já não aceita esta proposta
      // (`invalid_state`). Verifica o estado real antes de mostrar
      // erro — se entretanto já foi aceite (ex: pelo cartão no Chat),
      // não é uma falha, só a lista aqui que ainda não sabia. Bug real
      // reportado pelo utilizador (2026-09-05).
      // `P0007` = `partner_already_booked` — o parceiro já tem outra
      // reserva ativa (`awaiting_deposit`/`confirmed`) na mesma data
      // (backend/bookings/tasks.md, "Prevenir overbooking").
      String? status;
      if (e.code == 'P0001') {
        status = await fetchProposalStatus(widget.proposal.id);
      }
      if (mounted && status != 'accepted') {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              e.code == 'P0001'
                  ? 'Esta proposta já não está disponível — foi recusada ou expirou.'
                  : e.code == 'P0007'
                      ? 'Este parceiro já tem outra reserva confirmada nessa data. Não é possível aceitar esta proposta.'
                      // `P0008` = `already_booked_with_partner` (migração 102).
                      : e.code == 'P0008'
                          ? 'Já tens uma reserva com este parceiro. Só podes aceitar outra se essa for cancelada sem o sinal pago.'
                          : 'Não foi possível aceitar a proposta. Tenta novamente.',
            ),
          ),
        );
      }
      ref.invalidate(pendingProposalsProvider);
      ref.invalidate(coupleBookingsProvider);
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
    final proposal = widget.proposal;
    final dateLabel = proposal.eventDate == null
        ? null
        : '${proposal.eventDate!.day.toString().padLeft(2, '0')}/${proposal.eventDate!.month.toString().padLeft(2, '0')}/${proposal.eventDate!.year}';
    final fee = ref.watch(platformCommissionPercentageProvider).value ?? 0;

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: whiteLineCard(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            proposal.partnerName,
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: AppFontSize.base,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            proposal.title,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
          ),
          const SizedBox(height: 2),
          Text(
            [
              if (dateLabel != null) dateLabel,
              '${euros(amountWithCommission(proposal.price, fee))} · sinal ${euros(amountWithCommission(proposal.depositAmount, fee))} (com comissão)',
            ].join(' · '),
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
          ),
          const SizedBox(height: 12),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              onPressed: _accepting ? null : _accept,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.accentOliveDark,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 10),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadius.sm),
                ),
              ),
              child: Text(_accepting ? 'A aceitar...' : 'Aceitar proposta'),
            ),
          ),
        ],
      ),
    );
  }
}

/// Convite a avaliar (RN — só reservas concluídas) ou, se já existir
/// uma avaliação real para esta reserva, a mostra em vez de repetir o
/// convite (nunca deixa avaliar duas vezes — `submit_review()` já
/// bloqueia server-side, isto é só refletir isso na UI).
/// Pública (não `_ReviewAction`) para ser reutilizada também no ecrã de
/// detalhe da reserva (`couple_booking_detail_screen.dart`) — pedido
/// explícito do utilizador: "faz com que os casais possam editar as
/// suas reviews no local das reservas apos clicar em detalhes da
/// reserva".
class ReviewAction extends ConsumerWidget {
  final CoupleBooking booking;

  const ReviewAction({super.key, required this.booking});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final reviewAsync = ref.watch(reviewForBookingProvider(booking.id));

    return reviewAsync.when(
      loading: () => const SizedBox.shrink(),
      error: (err, st) => const SizedBox.shrink(),
      data: (review) {
        if (review != null) {
          return SnappyTap(
            onTap: () => _showReviewSheet(context, ref, booking, review),
            child: Row(
              children: [
                Text(
                  'A tua avaliação:',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                ),
                const SizedBox(width: 6),
                _InlineStars(rating: review.rating),
                const SizedBox(width: 6),
                const Icon(Icons.edit_outlined, size: 14, color: AppTheme.inkMuted),
              ],
            ),
          );
        }
        return SizedBox(
          width: double.infinity,
          child: OutlinedButton(
            onPressed: () => _showReviewSheet(context, ref, booking, null),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppTheme.accentOliveDark,
              side: BorderSide(color: AppTheme.accentOliveDark),
              padding: const EdgeInsets.symmetric(vertical: 10),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(AppRadius.sm),
              ),
            ),
            child: Text('Avaliar ${booking.partnerName}'),
          ),
        );
      },
    );
  }

  Future<void> _showReviewSheet(
    BuildContext context,
    WidgetRef ref,
    CoupleBooking booking,
    Review? existingReview,
  ) {
    return showIslandSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => ReviewFormSheet(
        booking: booking,
        existingReview: existingReview,
      ),
    );
  }
}

class _InlineStars extends StatelessWidget {
  final int rating;

  const _InlineStars({required this.rating});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (var i = 1; i <= 5; i++)
          Icon(
            i <= rating ? Icons.star_rounded : Icons.star_border_rounded,
            size: 15,
            color: Colors.amber,
          ),
      ],
    );
  }
}

class ReviewFormSheet extends ConsumerStatefulWidget {
  final CoupleBooking booking;

  /// Não-nulo -> ecrã em modo edição (`update_review()`), pré-preenche
  /// `_rating`/`_comment` com o que já foi escrito. Pedido explícito do
  /// utilizador: "faz com que os casais possam editar as suas reviews
  /// no local das reservas apos clicar em detalhes da reserva".
  final Review? existingReview;

  const ReviewFormSheet({super.key, required this.booking, this.existingReview});

  @override
  ConsumerState<ReviewFormSheet> createState() => ReviewFormSheetState();
}

class ReviewFormSheetState extends ConsumerState<ReviewFormSheet> {
  late int _rating = widget.existingReview?.rating ?? 0;
  late final _comment = TextEditingController(
    text: widget.existingReview?.comment ?? '',
  );
  bool _submitting = false;

  @override
  void dispose() {
    _comment.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_rating == 0 || _submitting) return;
    setState(() => _submitting = true);
    try {
      final comment = _comment.text.trim().isEmpty ? null : _comment.text.trim();
      final existing = widget.existingReview;
      if (existing != null) {
        await updateReview(
          ref,
          reviewId: existing.id,
          bookingId: widget.booking.id,
          rating: _rating,
          comment: comment,
        );
      } else {
        await submitReview(
          ref,
          bookingId: widget.booking.id,
          rating: _rating,
          comment: comment,
        );
      }
      if (mounted) Navigator.of(context).pop();
    } on PostgrestException catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              // `P0008` = `wedding_not_yet_held` (066_update_review.sql)
              // — pedido explícito do utilizador: "os casais so podem
              // fazer review depois da data do seu casamento".
              e.code == 'P0008'
                  ? 'Só é possível avaliar depois da data do casamento.'
                  : 'Não foi possível enviar a avaliação. Tenta novamente.',
            ),
          ),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Não foi possível enviar a avaliação. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isEditing = widget.existingReview != null;
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            isEditing
                ? 'Editar avaliação — ${widget.booking.partnerName}'
                : 'Avaliar ${widget.booking.partnerName}',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Como foi a vossa experiência?',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 1; i <= 5; i++)
                SnappyTap(
                  onTap: () => setState(() => _rating = i),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: Icon(
                      i <= _rating
                          ? Icons.star_rounded
                          : Icons.star_border_rounded,
                      size: 34,
                      color: Colors.amber,
                    ),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _comment,
            maxLines: 3,
            decoration: const InputDecoration(
              hintText: 'Conta-nos como correu (opcional)...',
            ),
          ),
          const SizedBox(height: 16),
          FilledButton(
            onPressed: _rating == 0 || _submitting ? null : _submit,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.accentOliveDark,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(AppRadius.sm),
              ),
            ),
            child: Text(
              _submitting
                  ? 'A enviar...'
                  : isEditing
                      ? 'Guardar alterações'
                      : 'Enviar avaliação',
            ),
          ),
        ],
      ),
    );
  }
}

/// "Serviços | Convidados" — pílula branca com a linha fina verde.
class _TabSwitch extends StatelessWidget {
  final bool guests;
  final ValueChanged<bool> onChanged;
  const _TabSwitch({required this.guests, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    Widget tab(String label, bool selected, bool value) => Expanded(
          child: Semantics(
            selected: selected,
            button: true,
            child: GestureDetector(
              onTap: () => onChanged(value),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                height: 40,
                alignment: Alignment.center,
                decoration: BoxDecoration(color: selected ? c : Colors.transparent, borderRadius: BorderRadius.circular(999)),
                child: Text(label,
                    style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.inkMuted)),
              ),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: c.withValues(alpha: 0.45)),
        boxShadow: const [BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6))],
      ),
      child: Row(children: [tab('Serviços', !guests, false), const SizedBox(width: 4), tab('Convidados', guests, true)]),
    );
  }
}
