import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import 'island_sheet.dart';
import 'v2_kit.dart';

/// Disputas (migração 109, 2026-10-20): o organizador ou o parceiro abrem
/// uma disputa sobre uma reserva confirmada ou concluída; a equipa À Nossa!
/// decide no admin (reembolso total, parcial ou a favor do parceiro).

class _DisputeInfo {
  final String bookingStatus;
  final Map<String, dynamic>? latest;
  const _DisputeInfo(this.bookingStatus, this.latest);
  bool get open => latest?['status'] == 'open';
  bool get canOpen =>
      !open && const {'confirmed', 'completed', 'payment_overdue'}.contains(bookingStatus);
}

final _disputeProvider = FutureProvider.autoDispose.family<_DisputeInfo?, String>((ref, bookingId) async {
  try {
    final row = await supabase
        .from('bookings')
        .select('status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)')
        .eq('id', bookingId)
        .maybeSingle();
    if (row == null) return null;
    final list = ((row['disputes'] as List?) ?? const []).cast<Map<String, dynamic>>()
      ..sort((a, b) => (b['created_at'] as String).compareTo(a['created_at'] as String));
    return _DisputeInfo(row['status'] as String, list.isEmpty ? null : list.first);
  } catch (_) {
    // Base de dados das disputas ainda por aplicar — não mostra nada.
    return null;
  }
}, retry: (count, error) => null);

const _reasons = <String, String>{
  'service_not_provided': 'Serviço não prestado',
  'service_different': 'Serviço diferente do combinado',
  'partner_no_show': 'O parceiro não apareceu',
  'couple_no_show': 'O organizador não apareceu',
  'payment_issue': 'Problema com pagamento',
  'other': 'Outro',
};

const _resolutions = <String, String>{
  'refund_full': 'Reembolso total ao organizador',
  'refund_partial': 'Reembolso parcial ao organizador',
  'partner_favor': 'Decidido a favor do parceiro',
};

class DisputeCard extends ConsumerWidget {
  final String bookingId;
  final bool partnerSide;
  const DisputeCard({super.key, required this.bookingId, required this.partnerSide});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final info = ref.watch(_disputeProvider(bookingId)).value;
    if (info == null) return const SizedBox.shrink();
    final d = info.latest;

    if (info.open) {
      return _box(
        icon: Icons.gavel_rounded,
        color: const Color(0xFFA3412E),
        title: 'Em disputa',
        body: 'A equipa À Nossa! está a analisar: ${_reasons[d?['reason']] ?? 'disputa aberta'}. '
            'Recebes uma notificação com a decisão.',
      );
    }
    if (d != null && d['status'] == 'resolved' && !info.canOpen) {
      return _box(
        icon: Icons.verified_rounded,
        color: AppTheme.accentOliveDark,
        title: _resolutions[d['resolution']] ?? 'Disputa resolvida',
        body: (d['admin_note'] as String?) ?? '',
      );
    }
    if (!info.canOpen) return const SizedBox.shrink();

    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      if (d != null && d['status'] == 'resolved') ...[
        _box(
          icon: Icons.verified_rounded,
          color: AppTheme.accentOliveDark,
          title: _resolutions[d['resolution']] ?? 'Disputa resolvida',
          body: (d['admin_note'] as String?) ?? '',
        ),
        const SizedBox(height: 10),
      ],
      TextButton.icon(
        onPressed: () async {
          final opened = await showIslandSheet<bool>(
            context: context,
            isScrollControlled: true,
            builder: (_) => _OpenDisputeSheet(bookingId: bookingId, partnerSide: partnerSide),
          );
          if (opened == true) ref.invalidate(_disputeProvider(bookingId));
        },
        icon: const Icon(Icons.flag_outlined, size: 18),
        label: const Text('Há um problema com esta reserva? Abrir disputa'),
        style: TextButton.styleFrom(foregroundColor: v2Muted),
      ),
    ]);
  }

  Widget _box({required IconData icon, required Color color, required String title, required String body}) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: softCard(radius: 22),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(icon, color: color, size: 22),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: color)),
            if (body.isNotEmpty) ...[
              const SizedBox(height: 4),
              Text(body, style: const TextStyle(fontSize: AppFontSize.sm, color: v2Muted, height: 1.35)),
            ],
          ]),
        ),
      ]),
    );
  }
}

class _OpenDisputeSheet extends StatefulWidget {
  final String bookingId;
  final bool partnerSide;
  const _OpenDisputeSheet({required this.bookingId, required this.partnerSide});

  @override
  State<_OpenDisputeSheet> createState() => _OpenDisputeSheetState();
}

class _OpenDisputeSheetState extends State<_OpenDisputeSheet> {
  String _reason = 'service_different';
  final _text = TextEditingController();
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_text.text.trim().length < 10) {
      setState(() => _error = 'Explica o que aconteceu (mín. 10 caracteres).');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await supabase.rpc('open_dispute', params: {
        'p_booking_id': widget.bookingId,
        'p_reason': _reason,
        'p_description': _text.text.trim(),
      });
      if (mounted) Navigator.of(context).pop(true);
    } on PostgrestException catch (e) {
      setState(() {
        _busy = false;
        _error = e.code == 'P0001'
            ? 'Esta reserva já não permite abrir disputa (ou já tem uma aberta).'
            : 'Não foi possível abrir a disputa. Tenta novamente.';
      });
    } catch (_) {
      setState(() {
        _busy = false;
        _error = 'Não foi possível abrir a disputa. Tenta novamente.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final reasons = Map.of(_reasons)
      ..remove(widget.partnerSide ? 'partner_no_show' : 'couple_no_show');
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
        const Text('Abrir disputa', style: TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        const SizedBox(height: 6),
        const Text(
          'A equipa À Nossa! analisa e decide em poucos dias úteis. Enquanto isso, a reserva fica em disputa.',
          style: TextStyle(fontSize: AppFontSize.sm, color: v2Muted, height: 1.35),
        ),
        const SizedBox(height: 16),
        Wrap(spacing: 8, runSpacing: 8, children: [
          for (final e in reasons.entries)
            ChoiceChip(
              label: Text(e.value),
              selected: _reason == e.key,
              onSelected: (_) => setState(() => _reason = e.key),
              selectedColor: AppTheme.accentOliveDark,
              labelStyle: TextStyle(color: _reason == e.key ? Colors.white : AppTheme.ink, fontWeight: FontWeight.w600),
              showCheckmark: false,
            ),
        ]),
        const SizedBox(height: 14),
        TextField(
          controller: _text,
          maxLines: 5,
          minLines: 3,
          decoration: const InputDecoration(labelText: 'O que aconteceu?', alignLabelWithHint: true),
        ),
        if (_error != null) ...[
          const SizedBox(height: 8),
          Text(_error!, style: const TextStyle(color: Color(0xFFA3412E), fontSize: AppFontSize.sm)),
        ],
        const SizedBox(height: 16),
        FilledButton(
          onPressed: _busy ? null : _submit,
          style: FilledButton.styleFrom(
            minimumSize: const Size.fromHeight(50),
            backgroundColor: AppTheme.accentOliveDark,
            shape: const StadiumBorder(),
          ),
          child: Text(_busy ? 'A enviar…' : 'Enviar disputa'),
        ),
      ]),
    );
  }
}
