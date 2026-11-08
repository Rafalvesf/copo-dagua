import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gifts/envelopes.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/island_sheet.dart';

/// Envelope digital (migração 156): escolhe o valor e escreve uma mensagem;
/// depois vê o IBAN, o valor e a descrição para copiar, faz a
/// transferência no banco e confirma. O dinheiro vai direto para os
/// anfitriões — não passa pela À Nossa!.
Future<void> showEnvelopeSheet(BuildContext context, GuestWedding wedding) {
  return showIslandSheet<void>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _EnvelopeSheet(wedding: wedding),
  );
}

class _EnvelopeSheet extends ConsumerStatefulWidget {
  final GuestWedding wedding;
  const _EnvelopeSheet({required this.wedding});

  @override
  ConsumerState<_EnvelopeSheet> createState() => _EnvelopeSheetState();
}

class _EnvelopeSheetState extends ConsumerState<_EnvelopeSheet> {
  static const _amounts = [50.0, 100.0, 150.0, 200.0];
  final _custom = TextEditingController();
  final _message = TextEditingController();
  double? _amount = 100;
  bool _step2 = false;
  bool _sending = false;
  String? _error;

  @override
  void dispose() {
    _custom.dispose();
    _message.dispose();
    super.dispose();
  }

  double? get _value {
    if (_amount != null) return _amount;
    return double.tryParse(_custom.text.trim().replaceAll(' ', '').replaceAll('€', '').replaceAll(',', '.'));
  }

  String get _iban => (widget.wedding.giftIban ?? '').trim();

  String get _description {
    final me = ref.read(_myNameProvider);
    return 'Envelope ${widget.wedding.displayNames}${me.isEmpty ? '' : ' - $me'}';
  }

  Future<void> _copy(String text, String what) async {
    await Clipboard.setData(ClipboardData(text: text));
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$what copiado.')));
  }

  Future<void> _confirm() async {
    final v = _value;
    if (v == null) return;
    setState(() {
      _sending = true;
      _error = null;
    });
    try {
      await sendGiftEnvelope(weddingId: widget.wedding.weddingId, amount: v, message: _message.text.trim());
      ref.invalidate(myEnvelopesProvider(widget.wedding.weddingId));
      if (!mounted) return;
      Navigator.of(context).pop();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Envelope entregue. ${widget.wedding.displayNames} recebem a tua mensagem em Grupos.')),
      );
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível registar o envelope. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  Widget _copyRow(String label, String value, String what) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Material(
          color: const Color(0xFFF4F2EC),
          borderRadius: BorderRadius.circular(14),
          child: InkWell(
            borderRadius: BorderRadius.circular(14),
            onTap: () => _copy(value, what),
            child: Padding(
              padding: const EdgeInsets.fromLTRB(14, 10, 10, 10),
              child: Row(children: [
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(label, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                    const SizedBox(height: 2),
                    Text(value, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ]),
                ),
                Icon(Icons.copy_rounded, size: 18, color: AppTheme.accentOliveDark, semanticLabel: 'Copiar $what'),
              ]),
            ),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    final v = _value;
    final valid = v != null && v > 0 && v <= 100000;
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Center(
          child: Container(width: 40, height: 4, decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2))),
        ),
        const SizedBox(height: 14),
        Row(children: [
          Icon(Icons.mail_outline_rounded, color: green),
          const SizedBox(width: 8),
          Expanded(
            child: Text(_step2 ? 'Faz a transferência' : 'Envelope digital',
                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          ),
        ]),
        const SizedBox(height: 4),
        Text(
          _step2
              ? 'No teu banco (ou MB WAY para IBAN), transfere para ${widget.wedding.displayNames}. Toca para copiar.'
              : 'O dinheiro vai diretamente para a conta de ${widget.wedding.displayNames}, por transferência.',
          style: const TextStyle(fontSize: 13.5, height: 1.4, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 16),
        if (!_step2) ...[
          const Text('Quanto queres oferecer?', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final a in _amounts)
              ChoiceChip(
                label: Text(envelopeEuros(a)),
                selected: _amount == a,
                showCheckmark: false,
                selectedColor: green,
                labelStyle: TextStyle(fontWeight: FontWeight.w700, color: _amount == a ? Colors.white : AppTheme.ink),
                onSelected: (_) => setState(() => _amount = a),
              ),
            ChoiceChip(
              label: const Text('Outro valor'),
              selected: _amount == null,
              showCheckmark: false,
              selectedColor: green,
              labelStyle: TextStyle(fontWeight: FontWeight.w700, color: _amount == null ? Colors.white : AppTheme.ink),
              onSelected: (_) => setState(() => _amount = null),
            ),
          ]),
          if (_amount == null) ...[
            const SizedBox(height: 10),
            TextField(
              controller: _custom,
              autofocus: true,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(labelText: 'Valor', suffixText: '€'),
              onChanged: (_) => setState(() {}),
            ),
          ],
          const SizedBox(height: 14),
          TextField(
            controller: _message,
            maxLines: 3,
            maxLength: 600,
            decoration: const InputDecoration(labelText: 'Mensagem (opcional)', hintText: 'Muitas felicidades!'),
          ),
          const SizedBox(height: 8),
          FilledButton(
            onPressed: valid ? () => setState(() => _step2 = true) : null,
            style: FilledButton.styleFrom(backgroundColor: green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
            child: Text(valid ? 'Continuar · ${envelopeEuros(v)}' : 'Continuar'),
          ),
        ] else ...[
          _copyRow('IBAN', _iban, 'IBAN'),
          _copyRow('Valor', envelopeEuros(v ?? 0), 'Valor'),
          _copyRow('Descrição', _description, 'Descrição'),
          const SizedBox(height: 4),
          const Text(
            'Depois de fazeres a transferência, confirma aqui para os anfitriões saberem que o envelope é teu.',
            style: TextStyle(fontSize: 12.5, height: 1.4, color: AppTheme.inkMuted),
          ),
          if (_error != null) ...[
            const SizedBox(height: 8),
            Text(_error!, style: const TextStyle(color: Color(0xFFB3261E), fontSize: 13)),
          ],
          const SizedBox(height: 12),
          FilledButton(
            onPressed: _sending ? null : _confirm,
            style: FilledButton.styleFrom(backgroundColor: green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
            child: _sending
                ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Já fiz a transferência'),
          ),
          TextButton(onPressed: _sending ? null : () => setState(() => _step2 = false), child: const Text('Voltar')),
        ],
      ]),
    );
  }
}

/// Primeiro nome de quem oferece, para a descrição da transferência.
final _myNameProvider = Provider<String>((ref) {
  final n = ref.watch(authControllerProvider.select((s) => s.profile?.fullName)) ?? '';
  return n.trim().split(' ').where((p) => p.isNotEmpty).take(2).join(' ');
});
