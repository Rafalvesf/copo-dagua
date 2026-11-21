import 'package:flutter/material.dart';

import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// «Recusar» uma proposta (mockups «Reservar por categoria» · Só orçamento,
/// 2026-11-21): pergunta o motivo e uma mensagem opcional, grava-os
/// (`reject_proposal`, migração 206) e envia-os ao parceiro na conversa.
/// [sendMessage] publica o texto na conversa com o parceiro. Devolve `true`
/// se a proposta foi recusada.
Future<bool> rejectProposalFlow(
  BuildContext context, {
  required String proposalId,
  required String partnerName,
  required Future<void> Function(String text) sendMessage,
}) async {
  final r = await showIslandSheet<(String, String, String?)>(
    context: context,
    isScrollControlled: true,
    builder: (_) => RejectProposalSheet(partnerName: partnerName),
  );
  if (r == null) return false;
  final (code, label, note) = r;
  try {
    await supabase.rpc('reject_proposal', params: {'p_proposal_id': proposalId, 'p_reason': code, 'p_message': note});
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível recusar a proposta. Tenta outra vez.')));
    }
    return false;
  }
  try {
    await sendMessage(['Recusámos a proposta. Motivo: $label.', if (note != null) note].join('\n'));
  } catch (_) {}
  return true;
}

/// «Recusar a proposta?»: o motivo (obrigatório) e uma mensagem opcional.
/// Devolve (código, texto do motivo, mensagem).
class RejectProposalSheet extends StatefulWidget {
  final String partnerName;
  const RejectProposalSheet({required this.partnerName});

  @override
  State<RejectProposalSheet> createState() => _RejectProposalSheetState();
}

class RejectProposalSheetState extends State<RejectProposalSheet> {
  static const _reasons = [
    ('price', 'O preço', 'Ficou acima do que queríamos gastar'),
    ('date', 'A data ou o horário', 'Não dá para o nosso evento'),
    ('other_partner', 'Escolhemos outro parceiro', ''),
    ('other', 'Outro motivo', ''),
  ];
  String? _code;
  final _note = TextEditingController();

  @override
  void dispose() {
    _note.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Recusar a proposta?', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              Text(widget.partnerName, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        const Text('PORQUÊ?', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        for (final (code, title, sub) in _reasons)
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Semantics(
              button: true,
              selected: _code == code,
              child: SnappyTap(
                onTap: () => setState(() => _code = code),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 160),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: _code == code ? AppTheme.accentOliveDark : AppTheme.background,
                    borderRadius: BorderRadius.circular(22),
                  ),
                  child: Row(children: [
                    Container(
                      width: 22,
                      height: 22,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white,
                        border: _code == code ? null : Border.all(color: AppTheme.inkMuted, width: 1.5),
                      ),
                      child: _code == code
                          ? Container(width: 12, height: 12, decoration: const BoxDecoration(shape: BoxShape.circle, color: AppTheme.accentOliveDark))
                          : null,
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(title,
                            style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: _code == code ? Colors.white : AppTheme.ink)),
                        if (sub.isNotEmpty)
                          Text(sub,
                              style: TextStyle(
                                  fontSize: 13, color: _code == code ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted)),
                      ]),
                    ),
                  ]),
                ),
              ),
            ),
          ),
        const SizedBox(height: 8),
        const Text('MENSAGEM (OPCIONAL)', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        TextField(
          controller: _note,
          minLines: 2,
          maxLines: 5,
          maxLength: 500,
          textCapitalization: TextCapitalization.sentences,
          style: const TextStyle(fontSize: 15, color: AppTheme.ink),
          decoration: InputDecoration(
            hintText: 'Uma palavra para ${widget.partnerName}…',
            filled: true,
            fillColor: AppTheme.background,
            counterText: '',
            contentPadding: const EdgeInsets.all(16),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(22), borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(22), borderSide: const BorderSide(color: AppTheme.ink, width: 1.5)),
          ),
        ),
        const SizedBox(height: 8),
        Text('${widget.partnerName} recebe o motivo e a mensagem na conversa.',
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 20),
        SizedBox(
          height: 52,
          child: FilledButton(
            onPressed: _code == null
                ? null
                : () {
                    final r = _reasons.firstWhere((x) => x.$1 == _code);
                    final note = _note.text.trim();
                    Navigator.of(context).pop((r.$1, r.$2, note.isEmpty ? null : note));
                  },
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
              disabledForegroundColor: Colors.white,
              shape: const StadiumBorder(),
              textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
            ),
            child: const Text('Recusar proposta'),
          ),
        ),
      ]),
    );
  }
}
