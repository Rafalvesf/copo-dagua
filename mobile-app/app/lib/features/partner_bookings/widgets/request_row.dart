import '../../../shared/widgets/page_kit.dart';
import 'package:flutter/material.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';

const _monthsPt = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

String requestDateLabel(DateTime d) => '${d.day} ${_monthsPt[d.month - 1]} ${d.year}';

/// Cartão de um pedido do lado do parceiro (redesign 2026-10, igual ao
/// canvas "Parceiro — pedidos"): iniciais, nome do casal, data · local e
/// estado; por baixo, o serviço pedido e o ponto de situação. [compact]
/// (painel) mostra só a primeira linha.
class RequestRow extends StatelessWidget {
  final Booking booking;
  final VoidCallback onTap;
  final bool compact;

  /// Linha de um grupo (mockup «Páginas do parceiro» → Pedidos): sem
  /// cartão próprio, para ir dentro de um `KitGroup`.
  final bool flat;

  const RequestRow({
    super.key,
    required this.booking,
    required this.onTap,
    this.compact = false,
    this.flat = false,
  });

  KitTag get _tag {
    if (booking.proposalSent && booking.status != BookingStatus.confirmado && booking.status != BookingStatus.concluido) {
      return const KitTag('Proposta enviada', kind: KitTagKind.neutral);
    }
    return switch (booking.status) {
      BookingStatus.novo => const KitTag('Por responder', kind: KitTagKind.pending),
      BookingStatus.emAnalise => const KitTag('Em análise', kind: KitTagKind.neutral),
      BookingStatus.aceite => const KitTag('Sinal pendente', kind: KitTagKind.pending),
      BookingStatus.confirmado => const KitTag('Confirmado'),
      BookingStatus.concluido => const KitTag('Concluído', kind: KitTagKind.neutral),
      BookingStatus.recusado => const KitTag('Recusado', kind: KitTagKind.neutral),
    };
  }


  ({String label, Color fg, Color bg}) get _status => switch (booking.status) {
        BookingStatus.novo => (
            label: 'Novo',
            fg: Colors.white,
            bg: AppTheme.accentOliveDark,
          ),
        BookingStatus.emAnalise => (
            label: 'Em análise',
            fg: const Color(0xFF7A5000),
            bg: const Color(0xFFFCEFD6),
          ),
        BookingStatus.aceite => (
            label: 'Sinal pendente',
            fg: const Color(0xFF7A5000),
            bg: const Color(0xFFFCEFD6),
          ),
        BookingStatus.confirmado => (
            label: 'Confirmado',
            fg: const Color(0xFF2F6B45),
            bg: const Color(0xFFE4EFE5),
          ),
        BookingStatus.concluido => (
            label: 'Concluído',
            fg: AppTheme.inkMuted,
            bg: Colors.white,
          ),
        BookingStatus.recusado => (
            label: 'Recusado',
            fg: const Color(0xFFA3412E),
            bg: const Color(0xFFF7E3DC),
          ),
      };

  String get _situation {
    if (booking.proposalSent) return 'Proposta enviada';
    return switch (booking.status) {
      BookingStatus.novo => 'Por responder',
      BookingStatus.emAnalise => 'Em análise',
      BookingStatus.aceite => 'À espera do sinal',
      BookingStatus.confirmado => 'Reserva confirmada',
      BookingStatus.concluido => 'Concluído',
      BookingStatus.recusado => 'Recusado',
    };
  }

  @override
  Widget build(BuildContext context) {
    final status = _status;
    final meta = [
      requestDateLabel(booking.eventDate),
      if (booking.city.isNotEmpty) booking.city,
    ].join(' · ');
    if (flat) {
      return KitRow(
        lead: V2Avatar(booking.clientName, imageUrl: booking.clientAvatarUrl),
        title: booking.clientName,
        // 188: num pedido de pacote mostra o pacote e o nº de pessoas.
        sub: [
          meta,
          if (booking.isPackageRequest) ...[
            'Pacote ${booking.packageSnapshot!['name']}',
            if (booking.extrasSnapshot.isNotEmpty) '+ ${booking.extrasSnapshot.length} extra',
            if (booking.people != null) '${booking.people} p.',
          ] else if (booking.fromQuoteRequest)
            'Orçamento'
          else if (booking.packageLabel.isNotEmpty)
            booking.packageLabel,
        ].join(' · '),
        trailing: _tag,
        onTap: onTap,
      );
    }
    final header = Row(
      children: [
        V2Avatar(booking.clientName, imageUrl: booking.clientAvatarUrl),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                booking.clientName,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontSize: AppFontSize.base + 1,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                meta,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontSize: AppFontSize.sm,
                  color: AppTheme.inkMuted,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(width: 8),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
          decoration: BoxDecoration(
            color: status.bg,
            borderRadius: BorderRadius.circular(AppRadius.pill),
          ),
          child: Text(
            status.label,
            style: TextStyle(
              fontSize: AppFontSize.xs,
              fontWeight: FontWeight.w700,
              color: status.fg,
            ),
          ),
        ),
      ],
    );
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.all(compact ? 14 : 16),
        // Cartão branco com sombra suave (canvas "Parceiro — redesign").
        decoration: softCard(),
        child: compact
            ? header
            : Column(
                children: [
                  header,
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.only(top: 12),
                    decoration: const BoxDecoration(
                      border: Border(top: BorderSide(color: Color(0xFFEEF2EC))),
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            '${booking.eventType.label} · ${booking.packageLabel.isEmpty ? (booking.category ?? 'Serviço') : booking.packageLabel}',
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              fontSize: AppFontSize.sm,
                              color: AppTheme.inkMuted,
                            ),
                          ),
                        ),
                        Text(
                          _situation,
                          style: TextStyle(
                            fontSize: AppFontSize.sm,
                            fontWeight: FontWeight.w700,
                            color: booking.status == BookingStatus.novo &&
                                    !booking.proposalSent
                                ? const Color(0xFF7A5000)
                                : AppTheme.inkMuted,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
      ),
    );
  }
}
