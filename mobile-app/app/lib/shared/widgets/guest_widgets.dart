import 'type_count.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

class GuestFormResult {
  final String name;
  final String? email;
  final String? phone;
  final String group;
  final WeddingSide side;
  final bool plusOneAllowed;
  final int maxCompanions;

  /// «Guardar e outro»: quem abriu o popup volta a abri-lo vazio.
  final bool another;

  GuestFormResult({
    this.maxCompanions = 0,
    required this.name,
    this.email,
    this.phone,
    required this.group,
    required this.side,
    required this.plusOneAllowed,
    this.another = false,
  });
}

Future<GuestFormResult?> showGuestFormSheet(
  BuildContext context, {
  Guest? existing,
  String? subtitle,
}) {
  return showIslandSheet<GuestFormResult>(
    context: context,
    isScrollControlled: true,
    builder: (context) => _GuestFormSheet(existing: existing, subtitle: subtitle),
  );
}

/// Popup «Adicionar convidado» (prancheta «Convidados · adicionar
/// convidado», 2026-11-24): «QUEM É» com os campos em pílula e o rótulo
/// lá dentro, «GRUPO» em pílulas com «+ Novo grupo», «PODE TRAZER» num
/// grupo, a nota e «Guardar e outro» + «Guardar».
class _GuestFormSheet extends StatefulWidget {
  final Guest? existing;
  final String? subtitle;

  const _GuestFormSheet({this.existing, this.subtitle});

  @override
  State<_GuestFormSheet> createState() => _GuestFormSheetState();
}

class _GuestFormSheetState extends State<_GuestFormSheet> {
  static const _presetGroups = ['Família', 'Amigos', 'Trabalho'];
  late final _name = TextEditingController(text: widget.existing?.name ?? '');
  late final _email = TextEditingController(text: widget.existing?.email ?? '');
  late final _phone = TextEditingController(text: widget.existing?.phone ?? '');
  late final _newGroup = TextEditingController(
      text: _presetGroups.contains(widget.existing?.group) ? '' : (widget.existing?.group ?? ''));
  late String _group = widget.existing?.group ?? '';
  late bool _customGroup = (widget.existing?.group ?? '').isNotEmpty && !_presetGroups.contains(widget.existing?.group);
  late final WeddingSide _side = widget.existing?.side ?? WeddingSide.both;
  late int _maxCompanions = widget.existing?.maxCompanions ?? 1;
  bool _tried = false;

  @override
  void dispose() {
    _name.dispose();
    _email.dispose();
    _phone.dispose();
    _newGroup.dispose();
    super.dispose();
  }

  void _save({bool another = false}) {
    if (_name.text.trim().isEmpty) {
      setState(() => _tried = true);
      return;
    }
    String? opt(TextEditingController c) => c.text.trim().isEmpty ? null : c.text.trim();
    Navigator.of(context).pop(GuestFormResult(
      name: _name.text.trim(),
      email: opt(_email),
      phone: opt(_phone),
      group: _customGroup ? _newGroup.text.trim() : _group,
      side: _side,
      plusOneAllowed: _maxCompanions > 0,
      maxCompanions: _maxCompanions,
      another: another,
    ));
  }

  Widget _caps(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(t, style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: Color(0xFF57534E))),
      );

  Widget _field(String label, TextEditingController c, {String hint = '', TextInputType? type, bool error = false}) => Container(
        height: 52,
        padding: const EdgeInsets.symmetric(horizontal: 18),
        decoration: BoxDecoration(
          color: const Color(0xFFF2F2F2),
          borderRadius: BorderRadius.circular(26),
          border: error ? Border.all(color: const Color(0xFFC8553D), width: 1.5) : null,
        ),
        child: Row(children: [
          SizedBox(width: 64, child: Text(label, style: const TextStyle(fontSize: 13, color: Color(0xFF57534E)))),
          const SizedBox(width: 10),
          Expanded(
            child: TextField(
              controller: c,
              keyboardType: type,
              textCapitalization: type == null ? TextCapitalization.words : TextCapitalization.none,
              onChanged: (_) {
                if (_tried) setState(() {});
              },
              style: const TextStyle(fontSize: 15, color: Color(0xFF171713)),
              decoration: InputDecoration(
                isCollapsed: true,
                filled: false,
                border: InputBorder.none,
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                hintText: hint,
              ),
            ),
          ),
        ]),
      );

  Widget _pill(String label, bool on, VoidCallback onTap, {bool outline = false}) => Semantics(
        button: true,
        selected: on,
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: on ? const Color(0xFF4F6B4A) : (outline ? Colors.white : const Color(0xFFF2F2F2)),
              borderRadius: BorderRadius.circular(19),
              border: outline && !on ? Border.all(color: const Color(0xFF171713), width: 1.5) : null,
            ),
            child: Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : const Color(0xFF171713))),
          ),
        ),
      );

  Widget _plusRow(int n, String label, String sub, bool last) {
    final on = _maxCompanions == n;
    return Semantics(
      button: true,
      selected: on,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => setState(() => _maxCompanions = n),
        child: Container(
          constraints: const BoxConstraints(minHeight: 56),
          padding: const EdgeInsets.symmetric(vertical: 6),
          decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9)))),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: Color(0xFF171713))),
                const SizedBox(height: 2),
                Text(sub, style: const TextStyle(fontSize: 13, color: Color(0xFF57534E))),
              ]),
            ),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: on ? const Color(0xFF4F6B4A) : null,
                border: on ? null : Border.all(color: const Color(0xFFC9C3B8), width: 1.5),
              ),
              child: on ? const Icon(Hi.check, size: 14, color: Colors.white) : null,
            ),
          ]),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final editing = widget.existing != null;
    final nameError = _tried && _name.text.trim().isEmpty;
    final options = <(int, String, String)>[
      (0, 'Só a pessoa', 'Vem sozinha.'),
      (1, '+1 pessoa', 'Pode trazer acompanhante.'),
      (2, '+2 pessoas', 'Por exemplo, com os filhos.'),
      if (_maxCompanions > 2) (_maxCompanions, '+$_maxCompanions pessoas', 'Como estava definido.'),
    ];
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(editing ? 'Editar convidado' : 'Adicionar convidado',
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: Color(0xFF171713))),
                if (widget.subtitle != null) Text(widget.subtitle!, style: const TextStyle(fontSize: 13, color: Color(0xFF57534E))),
              ]),
            ),
            const SizedBox.shrink(),
          ]),
        ),
        Flexible(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _caps('QUEM É'),
              _field('Nome', _name, hint: 'Nome e apelido', error: nameError),
              if (nameError)
                const Padding(
                  padding: EdgeInsets.only(top: 6, left: 6),
                  child: Text('O nome é obrigatório', style: TextStyle(fontSize: 13, color: Color(0xFFC8553D))),
                ),
              const SizedBox(height: 8),
              _field('Email', _email, hint: 'Opcional', type: TextInputType.emailAddress),
              const SizedBox(height: 8),
              _field('Telefone', _phone, hint: 'Opcional', type: TextInputType.phone),
              const SizedBox(height: 16),
              _caps('GRUPO'),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final g in _presetGroups)
                  _pill(g, !_customGroup && _group == g, () => setState(() {
                        _customGroup = false;
                        _group = _group == g ? '' : g;
                      })),
                _pill('+ Novo grupo', _customGroup, () => setState(() => _customGroup = !_customGroup), outline: true),
              ]),
              if (_customGroup) ...[
                const SizedBox(height: 8),
                _field('Grupo', _newGroup, hint: 'Ex.: Vizinhos'),
              ],
              const SizedBox(height: 16),
              _caps('PODE TRAZER'),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                decoration: BoxDecoration(color: const Color(0xFFF2F2F2), borderRadius: BorderRadius.circular(22)),
                child: Column(children: [
                  for (var i = 0; i < options.length; i++) _plusRow(options[i].$1, options[i].$2, options[i].$3, i == options.length - 1),
                ]),
              ),
              const SizedBox(height: 16),
              Text(
                editing ? 'As mudanças aparecem logo na lista.' : 'Fica na lista como «Por responder». Mandas o convite em «Convidar» quando quiseres.',
                style: const TextStyle(fontSize: 13, height: 1.4, color: Color(0xFF57534E)),
              ),
            ]),
          ),
        ),
        Padding(
          padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + MediaQuery.paddingOf(context).bottom),
          child: Row(children: [
            if (!editing) ...[
              Expanded(
                child: SizedBox(
                  height: 52,
                  child: PressScale(child: OutlinedButton(
                    onPressed: () => _save(another: true),
                    style: OutlinedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: const Color(0xFF171713),
                      side: const BorderSide(color: Color(0xFF171713), width: 1.5),
                      shape: const StadiumBorder(),
                      textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                    ),
                    child: const Text('Guardar e outro'),
                  )),
                ),
              ),
              const SizedBox(width: 8),
            ],
            Expanded(
              child: SizedBox(
                height: 52,
                child: PressScale(child: FilledButton(
                  onPressed: _save,
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.action,
                    foregroundColor: Colors.white,
                    shape: const StadiumBorder(),
                    textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Guardar'),
                )),
              ),
            ),
          ]),
        ),
      ]),
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
          // Botões pretos com ícone branco (2026-11-11: "botões claros").
          color: onTap == null ? const Color(0xFFE4E1D8) : const Color(0xFF171713),
          shape: const CircleBorder(),
          child: InkWell(
            customBorder: const CircleBorder(),
            onTap: onTap,
            child: SizedBox(
              width: 38,
              height: 38,
              child: Icon(icon, size: 20, color: onTap == null ? const Color(0xFFB5B0A6) : Colors.white),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 12, 10, 12),
      decoration: BoxDecoration(color: const Color(0xFFF2F2F2), borderRadius: BorderRadius.circular(16)),
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
          btn(Hi.minus, value > 0 ? () => onChanged(value - 1) : null),
          TypeCount(value: value, onChanged: onChanged, max: max, width: 40),
          btn(Hi.plus, value < max ? () => onChanged(value + 1) : null),
        ],
      ),
    );
  }
}
