import 'package:flutter/material.dart';

import '../../core/guests/guest_controller.dart';
import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'buttons.dart';
import 'form_fields.dart';

class RsvpStatusFilterTabs extends StatelessWidget {
  final GuestFilter selected;
  final ValueChanged<GuestFilter> onChanged;

  const RsvpStatusFilterTabs({super.key, required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final options = {
      GuestFilter.all: 'Todos',
      GuestFilter.confirmed: 'Confirm.',
      GuestFilter.pending: 'Pend.',
      GuestFilter.declined: 'Recus.',
    };
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: options.entries
            .map(
              (e) => Padding(
                padding: const EdgeInsets.only(right: 8),
                child: ChoiceChip(
                  label: Text(e.value),
                  selected: selected == e.key,
                  onSelected: (_) => onChanged(e.key),
                  selectedColor: AppTheme.ink,
                  labelStyle: TextStyle(
                    color: selected == e.key ? Colors.white : AppTheme.ink,
                    fontWeight: FontWeight.w600,
                  ),
                  backgroundColor: Colors.white,
                  side: const BorderSide(color: Color(0xFFE2D9CF)),
                ),
              ),
            )
            .toList(),
      ),
    );
  }
}

class GuestFormResult {
  final String name;
  final String? email;
  final String? phone;
  final String group;
  final WeddingSide side;
  final bool plusOneAllowed;

  GuestFormResult({
    required this.name,
    this.email,
    this.phone,
    required this.group,
    required this.side,
    required this.plusOneAllowed,
  });
}

Future<GuestFormResult?> showGuestFormSheet(BuildContext context, {Guest? existing}) {
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
  late bool _plusOneAllowed = widget.existing?.plusOneAllowed ?? false;
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
              widget.existing == null ? 'Adicionar convidado' : 'Editar convidado',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 16),
            AuthTextField(label: 'Nome', controller: _name, errorText: _nameError),
            const SizedBox(height: 12),
            AuthTextField(label: 'Email', controller: _email, keyboardType: TextInputType.emailAddress),
            const SizedBox(height: 12),
            AuthTextField(label: 'Telefone', controller: _phone, keyboardType: TextInputType.phone),
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
            CheckboxListTile(
              contentPadding: EdgeInsets.zero,
              controlAffinity: ListTileControlAffinity.leading,
              value: _plusOneAllowed,
              title: const Text('Pode trazer acompanhante'),
              onChanged: (v) => setState(() => _plusOneAllowed = v ?? false),
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
                    email: _email.text.trim().isEmpty ? null : _email.text.trim(),
                    phone: _phone.text.trim().isEmpty ? null : _phone.text.trim(),
                    group: _group.text.trim(),
                    side: _side,
                    plusOneAllowed: _plusOneAllowed,
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
