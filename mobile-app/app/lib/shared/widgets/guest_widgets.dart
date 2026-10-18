import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import 'buttons.dart';
import 'form_fields.dart';

class GuestFormResult {
  final String name;
  final String? email;
  final String? phone;
  final String group;
  final WeddingSide side;
  final bool plusOneAllowed;
  final int maxCompanions;

  GuestFormResult({
    this.maxCompanions = 0,
    required this.name,
    this.email,
    this.phone,
    required this.group,
    required this.side,
    required this.plusOneAllowed,
  });
}

Future<GuestFormResult?> showGuestFormSheet(
  BuildContext context, {
  Guest? existing,
}) {
  return showModalBottomSheet<GuestFormResult>(
    context: context,
    isScrollControlled: true,
    builder: (context) => _GuestFormSheet(existing: existing),
  );
}

class _GuestFormSheet extends StatefulWidget {
  final Guest? existing;

  const _GuestFormSheet({this.existing});

  @override
  State<_GuestFormSheet> createState() => _GuestFormSheetState();
}

class _GuestFormSheetState extends State<_GuestFormSheet> {
  late final _name = TextEditingController(text: widget.existing?.name ?? '');
  late final _email = TextEditingController(text: widget.existing?.email ?? '');
  late final _phone = TextEditingController(text: widget.existing?.phone ?? '');
  late final _group = TextEditingController(text: widget.existing?.group ?? '');
  late WeddingSide _side = widget.existing?.side ?? WeddingSide.both;
  late int _maxCompanions = widget.existing?.maxCompanions ?? 0;
  String? _nameError;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              widget.existing == null
                  ? 'Adicionar convidado'
                  : 'Editar convidado',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 16),
            AuthTextField(
              label: 'Nome',
              controller: _name,
              errorText: _nameError,
            ),
            const SizedBox(height: 12),
            AuthTextField(
              label: 'Email',
              controller: _email,
              keyboardType: TextInputType.emailAddress,
            ),
            const SizedBox(height: 12),
            AuthTextField(
              label: 'Telefone',
              controller: _phone,
              keyboardType: TextInputType.phone,
            ),
            const SizedBox(height: 12),
            AuthTextField(label: 'Grupo', controller: _group),
            const SizedBox(height: 12),
            Text('Lado', style: Theme.of(context).textTheme.labelLarge),
            RadioGroup<WeddingSide>(
              groupValue: _side,
              onChanged: (v) => setState(() => _side = v ?? _side),
              child: Column(
                children: WeddingSide.values
                    .map(
                      (side) => RadioListTile<WeddingSide>(
                        contentPadding: EdgeInsets.zero,
                        title: Text(switch (side) {
                          WeddingSide.groom => 'Noivo',
                          WeddingSide.bride => 'Noiva',
                          WeddingSide.both => 'Ambos',
                        }),
                        value: side,
                      ),
                    )
                    .toList(),
              ),
            ),
            // Limite de acompanhantes (pedido 2026-10-17: os
            // organizadores não tinham como mudar ou limitar).
            const SizedBox(height: 8),
            CompanionLimitRow(
              title: 'Pode trazer',
              value: _maxCompanions,
              onChanged: (v) => setState(() => _maxCompanions = v),
            ),
            const SizedBox(height: 12),
            PrimaryButton(
              label: 'Guardar',
              onPressed: () {
                if (_name.text.trim().isEmpty) {
                  setState(() => _nameError = 'O nome é obrigatório');
                  return;
                }
                Navigator.of(context).pop(
                  GuestFormResult(
                    name: _name.text.trim(),
                    email: _email.text.trim().isEmpty
                        ? null
                        : _email.text.trim(),
                    phone: _phone.text.trim().isEmpty
                        ? null
                        : _phone.text.trim(),
                    group: _group.text.trim(),
                    side: _side,
                    plusOneAllowed: _maxCompanions > 0,
                    maxCompanions: _maxCompanions,
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}


/// "Pode trazer: − 2 pessoas +" — limite de acompanhantes de um
/// convidado (ou o valor por omissão do evento).
class CompanionLimitRow extends StatelessWidget {
  final String title;
  final String? subtitle;
  final int value;
  final ValueChanged<int> onChanged;
  final int max;

  const CompanionLimitRow({
    super.key,
    required this.title,
    this.subtitle,
    required this.value,
    required this.onChanged,
    this.max = 10,
  });

  static String label(int n) => n == 0 ? 'Só ele/ela' : (n == 1 ? '+1 pessoa' : '+$n pessoas');

  @override
  Widget build(BuildContext context) {
    Widget btn(IconData icon, VoidCallback? onTap) => Material(
          color: onTap == null ? const Color(0xFFF2F0EB) : const Color(0xFFEEF2E9),
          shape: const CircleBorder(),
          child: InkWell(
            customBorder: const CircleBorder(),
            onTap: onTap,
            child: SizedBox(
              width: 38,
              height: 38,
              child: Icon(icon, size: 20, color: onTap == null ? const Color(0xFFB5B0A6) : const Color(0xFF4F6B4A)),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 12, 10, 12),
      decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(16)),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Color(0xFF171713))),
                Text(
                  subtitle ?? label(value),
                  style: const TextStyle(fontSize: 12, color: Color(0xFF57534E)),
                ),
              ],
            ),
          ),
          btn(Icons.remove_rounded, value > 0 ? () => onChanged(value - 1) : null),
          SizedBox(
            width: 36,
            child: Text('$value', textAlign: TextAlign.center, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: Color(0xFF171713))),
          ),
          btn(Icons.add_rounded, value < max ? () => onChanged(value + 1) : null),
        ],
      ),
    );
  }
}
