import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../shared/widgets/island_sheet.dart';
import '../home/home_providers.dart';
import '../supabase/supabase_config.dart';
import '../theme/app_theme.dart';

/// Contratações em segredo (migração 116, 2026-10-21): quem contrata
/// escolhe se os outros organizadores do evento ficam a saber (ex.: uma
/// surpresa). Em segredo, a reserva, a conversa com o parceiro, as
/// tarefas e as notificações só aparecem a quem contratou.

/// Quantos outros organizadores tem o evento. 0 se a migração ainda não
/// correu (nesse caso não se pergunta nada).
Future<int> otherOrganizersCount(String? weddingId) async {
  if (weddingId == null) return 0;
  try {
    final n = await supabase.rpc('other_organizers_count', params: {'p_wedding_id': weddingId});
    return (n as num?)?.toInt() ?? 0;
  } catch (_) {
    return 0;
  }
}

Future<void> setBookingPrivate(String bookingId, bool private) async {
  await supabase.rpc('set_booking_private', params: {'p_booking_id': bookingId, 'p_private': private});
}

/// Antes de aceitar uma proposta: `true` = em segredo, `false` =
/// partilhar, `null` = desistiu. Pergunta sempre (2026-10-25): quem ainda
/// organiza sozinho pode convidar alguém depois, e a surpresa tem de já
/// estar guardada.
Future<bool?> askHirePrivacy(BuildContext context, String? weddingId, String partnerName) async {
  final others = await otherOrganizersCount(weddingId);
  if (!context.mounted) return null;
  return showIslandDialog<bool>(
    context: context,
    builder: (ctx) => IslandAlert(
      title: const Text('Partilhar esta contratação?'),
      content: Text(
        others > 0
            ? 'Os outros organizadores podem ver a contratação de $partnerName, a conversa, '
                'os pagamentos e as tarefas. Se for uma surpresa, guarda-a só para ti.'
            : 'Se convidares outro organizador, ele vai poder ver a contratação de $partnerName, '
                'a conversa, os pagamentos e as tarefas. Se for uma surpresa, guarda-a só para ti.',
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(ctx).pop(true),
          child: const Text('Só para mim'),
        ),
        FilledButton(
          onPressed: () => Navigator.of(ctx).pop(false),
          child: const Text('Partilhar'),
        ),
      ],
    ),
  );
}

/// No detalhe da reserva: mudar de ideias (revelar a surpresa, ou
/// escondê-la). Aparece sempre (2026-10-25).
class HirePrivacyCard extends ConsumerStatefulWidget {
  final String bookingId;
  final String weddingId;
  final bool isPrivate;

  const HirePrivacyCard({super.key, required this.bookingId, required this.weddingId, required this.isPrivate});

  @override
  ConsumerState<HirePrivacyCard> createState() => _HirePrivacyCardState();
}

class _HirePrivacyCardState extends ConsumerState<HirePrivacyCard> {
  late bool _private = widget.isPrivate;
  bool _busy = false;

  Future<void> _toggle(bool value) async {
    setState(() {
      _busy = true;
      _private = value;
    });
    try {
      await setBookingPrivate(widget.bookingId, value);
      ref.invalidate(coupleBookingsProvider);
    } catch (_) {
      if (!mounted) return;
      setState(() => _private = !value);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível mudar. Tenta novamente.')),
      );
    }
    if (mounted) setState(() => _busy = false);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 12, 8, 12),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Row(children: [
        Icon(_private ? Icons.lock_outline : Icons.group_outlined, color: AppTheme.accentOliveDark),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Surpresa', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(
              _private
                  ? 'Só tu vês esta contratação, a conversa e os pagamentos.'
                  : 'Os outros organizadores (e quem convidares) veem esta contratação.',
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.35),
            ),
          ]),
        ),
        Switch(
          value: _private,
          activeTrackColor: AppTheme.accentOliveDark,
          onChanged: _busy ? null : _toggle,
        ),
      ]),
    );
  }
}
