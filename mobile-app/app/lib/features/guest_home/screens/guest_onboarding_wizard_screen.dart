import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/pronto_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Onboarding do convidado — uma pergunta por ecrã (canvas "Convidado
/// 1–8"). Pedido do utilizador (2026-10-17): não só casamentos, vários
/// acompanhantes, refeição e alergias de cada pessoa e telemóvel de cada
/// acompanhante (`081_onboarding_v2.sql`, `guest_companions`).
class GuestOnboardingWizardScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final Guest guest;

  const GuestOnboardingWizardScreen({super.key, required this.weddingId, required this.guest});

  @override
  ConsumerState<GuestOnboardingWizardScreen> createState() => _GuestOnboardingWizardScreenState();
}

enum _Step { attending, companions, menu, allergies, side, relationship }

const _maxCompanions = 5;
const _adultMenus = ['Carne', 'Peixe', 'Vegetariano'];
const _childMenus = ['Menu criança', 'Carne', 'Peixe'];
const _allergyOptions = ['Glúten', 'Lactose', 'Marisco', 'Frutos secos', 'Outra'];
const _relationOptions = <(String, IconData)>[
  ('Família', Icons.favorite_border),
  ('Amigos', Icons.groups_2_outlined),
  ('Trabalho', Icons.work_outline),
  ('Vizinhos', Icons.home_outlined),
  ('Escola / Faculdade', Icons.school_outlined),
  ('Outro', Icons.star_border_rounded),
];

class _Person {
  String name;
  bool isChild;
  int? age;
  String phone;
  String? menu;
  final Set<String> allergies;
  String otherAllergy;

  _Person({
    required this.name,
    this.isChild = false,
    this.age,
    this.phone = '',
    this.menu,
    Set<String>? allergies,
    this.otherAllergy = '',
  }) : allergies = allergies ?? {};

  List<String> get allAllergies => [
        ...allergies.where((a) => a != 'Outra'),
        if (allergies.contains('Outra') && otherAllergy.trim().isNotEmpty) otherAllergy.trim(),
      ];
}

class _GuestOnboardingWizardScreenState extends ConsumerState<GuestOnboardingWizardScreen> {
  int _index = 0;
  bool _saving = false;
  bool _confirmed = false;
  late final _Person _me = _Person(
    name: widget.guest.name.split(' ').first,
    menu: widget.guest.menuSelection,
    otherAllergy: widget.guest.dietaryRestrictions ?? '',
  );
  final List<_Person> _companions = [];
  WeddingSide? _side;
  String? _relationship;
  final _relationOther = TextEditingController();

  @override
  void dispose() {
    _relationOther.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _side = widget.guest.side;
    final plusOne = widget.guest.plusOneName?.trim();
    if (plusOne != null && plusOne.isNotEmpty) _companions.add(_Person(name: plusOne));
  }

  GuestWedding? get _wedding {
    final list = ref.watch(guestWeddingsProvider).value ?? const [];
    for (final w in list) {
      if (w.weddingId == widget.weddingId) return w;
    }
    return null;
  }

  EventType get _eventType => _wedding?.eventType ?? EventType.wedding;
  String get _hosts => _wedding?.displayNames ?? 'os anfitriões';

  List<_Step> get _steps => [
        _Step.attending,
        if (widget.guest.plusOneAllowed) _Step.companions,
        _Step.menu,
        _Step.allergies,
        if (_eventType == EventType.wedding) _Step.side,
        _Step.relationship,
      ];

  List<_Person> get _people => [_me, ..._companions];

  Future<void> _finish({required bool attending}) async {
    setState(() => _saving = true);
    try {
      await completeGuestOnboarding(
        attending: attending,
        plusOneName: _companions.isEmpty ? null : _companions.map((c) => c.name).join(', '),
        menuSelection: _me.menu,
        dietaryRestrictions: _me.allAllergies.isEmpty ? null : _me.allAllergies.join(', '),
        side: _side ?? widget.guest.side,
        groupLabel: _relationship == 'Outro' && _relationOther.text.trim().isNotEmpty ? _relationOther.text.trim() : _relationship,
      );
      if (attending) {
        await saveGuestCompanions(
          guestId: widget.guest.id,
          weddingId: widget.weddingId,
          companions: [
            for (final c in _companions)
              GuestCompanion(
                name: c.name,
                isChild: c.isChild,
                childAge: c.age,
                phone: c.phone.trim().isEmpty ? null : c.phone.trim(),
                menu: c.menu,
                allergies: c.allAllergies,
              ),
          ],
        );
      }
      ref.invalidate(myGuestRowProvider(widget.weddingId));
      if (!mounted) return;
      if (attending) {
        setState(() => _confirmed = true);
        return;
      }
      context.go('/guest-home/${widget.weddingId}');
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  Future<void> _editCompanion([_Person? existing]) async {
    final result = await Navigator.of(context).push<_Person>(
      MaterialPageRoute(builder: (_) => _CompanionPage(existing: existing, step: _index + 1, total: _steps.length)),
    );
    if (result == null) return;
    if (result.name.isEmpty) {
      if (existing != null) setState(() => _companions.remove(existing));
      return;
    }
    setState(() {
      if (existing == null) {
        _companions.add(result);
      } else {
        existing
          ..name = result.name
          ..isChild = result.isChild
          ..age = result.age
          ..phone = result.phone;
        if (existing.isChild && existing.menu != null && !_childMenus.contains(existing.menu)) existing.menu = null;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_confirmed) {
      final names = _companions.map((c) => c.name).toList();
      return _ConfirmedView(
        rows: [
          names.isEmpty ? 'Vais tu' : '${_people.length} pessoas: tu, ${names.join(', ')}',
          if (_people.any((p) => p.menu != null)) _people.map((p) => p.menu ?? '—').join(' · '),
          _people.every((p) => p.allAllergies.isEmpty)
              ? 'Sem alergias indicadas'
              : 'Alergias: ${_people.where((p) => p.allAllergies.isNotEmpty).map((p) => '${p.allAllergies.join(', ')} (${p == _me ? 'tu' : p.name})').join(', ')}',
          'Podes mudar tudo no teu perfil',
        ],
        onContinue: () => context.go('/guest-home/${widget.weddingId}'),
      );
    }
    final steps = _steps;
    if (_index >= steps.length) _index = steps.length - 1;
    final step = steps[_index];

    // Canvas "Convidado 1–8": branco, "Passo X de N", barra fina,
    // pergunta 28/34 e botão verde em baixo.
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SizedBox(
                height: 44,
                child: Row(
                  children: [
                    if (_index > 0) CircleBackButton(onTap: () => setState(() => _index--)),
                    const Spacer(),
                    if (step == _Step.allergies)
                      TextButton(
                        onPressed: () {
                          setState(() {
                            for (final p in _people) {
                              p.allergies.clear();
                              p.otherAllergy = '';
                            }
                          });
                          _continue(steps);
                        },
                        style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted),
                        child: const Text('Ninguém tem', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              Text('Passo ${_index + 1} de ${steps.length}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(3),
                child: TweenAnimationBuilder<double>(
                  tween: Tween(end: (_index + 1) / steps.length),
                  duration: const Duration(milliseconds: 260),
                  builder: (context, v, _) => LinearProgressIndicator(
                    value: v,
                    minHeight: 3,
                    backgroundColor: AppTheme.borderMuted,
                    color: AppTheme.accentOliveDark,
                  ),
                ),
              ),
              Expanded(child: SingleChildScrollView(child: _buildStep(step))),
              const SizedBox(height: 12),
              SizedBox(
                height: 54,
                child: FilledButton(
                  onPressed: _saving ? null : () => _continue(steps),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
                  ),
                  child: _saving
                      ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
                      : Text(_index == steps.length - 1 ? 'Concluir' : 'Continuar'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  bool _going = true;

  void _continue(List<_Step> steps) {
    final step = steps[_index];
    if (step == _Step.attending && !_going) {
      _finish(attending: false);
      return;
    }
    if (_index == steps.length - 1) {
      _finish(attending: true);
    } else {
      setState(() => _index++);
    }
  }

  Widget _buildStep(_Step step) {
    switch (step) {
      case _Step.attending:
        final sub = [
            if (_wedding?.weddingDate != null) formatWeddingDateCaps(_wedding!.weddingDate!),
            if (_wedding?.venue?.isNotEmpty == true) _wedding!.venue!,
          ].join(' · ');
        return _StepScaffold(
          question: 'Vais ao ${_eventType.noun}${_wedding == null ? '' : ' de ${_wedding!.displayNames}'}?',
          subtitle: sub.isEmpty ? null : sub,
          child: Row(
            children: [
              Expanded(child: _BigChoice(icon: Icons.check_circle_outline, label: 'Sim, vou!', selected: _going, onTap: () => setState(() => _going = true))),
              const SizedBox(width: 12),
              Expanded(child: _BigChoice(icon: Icons.close_rounded, label: 'Não vou poder ir', selected: !_going, onTap: () => setState(() => _going = false))),
            ],
          ),
        );
      case _Step.companions:
        return _StepScaffold(
          question: 'Quem vai contigo?',
          subtitle: 'Os anfitriões deixaram levar até $_maxCompanions pessoas.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _PersonRow(initials: _initials(widget.guest.name), name: widget.guest.name, subtitle: 'Tu'),
              for (final c in _companions)
                _PersonRow(
                  initials: _initials(c.name),
                  name: c.name,
                  subtitle: [c.isChild ? 'Criança${c.age != null ? ' · ${c.age} anos' : ''}' : 'Adulto', if (c.phone.trim().isNotEmpty) c.phone.trim()].join(' · '),
                  onEdit: () => _editCompanion(c),
                ),
              if (_companions.length < _maxCompanions)
                SnappyTap(
                  onTap: () => _editCompanion(),
                  child: CustomPaint(
                    painter: const _DashedBorder(),
                    child: const SizedBox(
                      height: 52,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.add, size: 18, color: AppTheme.accentOliveDark),
                          SizedBox(width: 8),
                          Text('Adicionar acompanhante', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                        ],
                      ),
                    ),
                  ),
                ),
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                decoration: BoxDecoration(
                  color: AppTheme.surface,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFD9D6CF)),
                ),
                child: const Text(
                  'O telemóvel é opcional: se a pessoa criar conta com esse número, fica logo ligada à tua resposta.',
                  style: TextStyle(fontSize: 12, height: 17 / 12, color: AppTheme.inkMuted),
                ),
              ),
            ],
          ),
        );
      case _Step.menu:
        return _StepScaffold(
          question: _people.length == 1 ? 'Que refeição preferes?' : 'Que refeição para cada pessoa?',
          subtitle: _people.length == 1 ? 'Podes mudar depois.' : 'Cada um escolhe a sua.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final p in _people)
                _PersonChoices(
                  title: p == _me ? '${p.name} (tu)' : p.name,
                  options: p.isChild ? _childMenus : _adultMenus,
                  equal: true,
                  selected: {if (p.menu != null) p.menu!},
                  onTap: (o) => setState(() => p.menu = p.menu == o ? null : o),
                ),
            ],
          ),
        );
      case _Step.allergies:
        return _StepScaffold(
          question: 'Alguma alergia ou intolerância?',
          subtitle: 'De cada pessoa. Deixa vazio se não houver.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final p in _people)
                _PersonChoices(
                  title: p == _me ? '${p.name} (tu)' : p.name,
                  options: _allergyOptions,
                  selected: p.allergies,
                  onTap: (o) => setState(() => p.allergies.contains(o) ? p.allergies.remove(o) : p.allergies.add(o)),
                  other: p.otherAllergy,
                  onOther: (v) => p.otherAllergy = v,
                ),
            ],
          ),
        );
      case _Step.side:
        return _StepScaffold(
          question: 'És convidado de quem?',
          child: Row(
            children: [
              for (final (i, (side, label, icon)) in const [
                (WeddingSide.bride, 'Da noiva', Icons.person_outline),
                (WeddingSide.groom, 'Do noivo', Icons.person_outline),
                (WeddingSide.both, 'De ambos', Icons.groups_2_outlined),
              ].indexed) ...[
                if (i > 0) const SizedBox(width: 12),
                Expanded(
                  child: _BigChoice(
                    icon: icon,
                    label: label,
                    height: 110,
                    selected: _side == side,
                    onTap: () => setState(() => _side = side),
                  ),
                ),
              ],
            ],
          ),
        );
      case _Step.relationship:
        return _StepScaffold(
          question: 'Como conheces $_hosts?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              GridView(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  mainAxisExtent: 78,
                ),
                children: [
                  for (final (label, icon) in _relationOptions)
                    _BigChoice(
                      icon: icon,
                      label: label,
                      height: 78,
                      selected: _relationship == label,
                      onTap: () => setState(() => _relationship = label),
                    ),
                ],
              ),
              if (_relationship == 'Outro') ...[
                const SizedBox(height: 16),
                AuthField(label: 'Qual?', controller: _relationOther, topGap: 0),
              ],
            ],
          ),
        );
    }
  }


}

String _initials(String name) => name
    .trim()
    .split(RegExp(r'\s+'))
    .where((w) => w.isNotEmpty)
    .take(2)
    .map((w) => w[0].toUpperCase())
    .join();

class _PersonRow extends StatelessWidget {
  final String initials;
  final String name;
  final String subtitle;
  final VoidCallback? onEdit;

  const _PersonRow({required this.initials, required this.name, required this.subtitle, this.onEdit});

  @override
  Widget build(BuildContext context) {
    final row = Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(16)),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Color(0xFFDDE5D3), shape: BoxShape.circle),
            child: Text(initials, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          if (onEdit != null)
            const Text('Editar', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
        ],
      ),
    );
    return onEdit == null ? row : SnappyTap(onTap: onEdit!, child: row);
  }
}

class _DashedBorder extends CustomPainter {
  const _DashedBorder();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFD9D6CF)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final path = Path()..addRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(16)));
    for (final m in path.computeMetrics()) {
      for (double d = 0; d < m.length; d += 9) {
        canvas.drawPath(m.extractPath(d, d + 5), paint);
      }
    }
  }

  @override
  bool shouldRepaint(_DashedBorder old) => false;
}

class _PersonChoices extends StatelessWidget {
  final String title;
  final List<String> options;
  final Set<String> selected;
  final ValueChanged<String> onTap;
  final String? other;
  final ValueChanged<String>? onOther;

  /// Refeição: três botões iguais lado a lado (canvas "Convidado 4").
  final bool equal;

  const _PersonChoices({
    required this.title,
    required this.options,
    required this.selected,
    required this.onTap,
    this.other,
    this.onOther,
    this.equal = false,
  });

  Widget _pill(String o) {
    final on = selected.contains(o);
    return SnappyTap(
      onTap: () => onTap(o),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        height: equal ? 36 : 32,
        padding: const EdgeInsets.symmetric(horizontal: 12),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: on ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: on ? AppTheme.accentOliveDark : AppTheme.borderMuted),
        ),
        child: Text(
          o,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(fontSize: 13, fontWeight: on ? FontWeight.w700 : FontWeight.w400, color: on ? Colors.white : AppTheme.ink),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(16)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(title, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 8),
          if (equal)
            Row(
              children: [
                for (final (i, o) in options.indexed) ...[
                  if (i > 0) const SizedBox(width: 6),
                  Expanded(child: _pill(o)),
                ],
              ],
            )
          else
            Wrap(spacing: 6, runSpacing: 6, children: [for (final o in options) _pill(o)]),
          if (onOther != null && selected.contains('Outra')) ...[
            const SizedBox(height: 8),
            TextFormField(
              initialValue: other,
              onChanged: onOther,
              decoration: const InputDecoration(hintText: 'Qual?', isDense: true, filled: true, fillColor: Colors.white),
            ),
          ],
        ],
      ),
    );
  }
}

/// "Convidado 3 · Acompanhante": página própria, no mesmo estilo dos
/// passos. Devolve a pessoa, ou um nome vazio para a remover.
class _CompanionPage extends StatefulWidget {
  final _Person? existing;
  final int step;
  final int total;
  const _CompanionPage({this.existing, required this.step, required this.total});

  @override
  State<_CompanionPage> createState() => _CompanionPageState();
}

class _CompanionPageState extends State<_CompanionPage> {
  late final _name = TextEditingController(text: widget.existing?.name ?? '');
  late final _age = TextEditingController(text: widget.existing?.age?.toString() ?? '');
  late final _phone = TextEditingController(text: widget.existing?.phone ?? '');
  late bool _child = widget.existing?.isChild ?? false;

  @override
  void dispose() {
    _name.dispose();
    _age.dispose();
    _phone.dispose();
    super.dispose();
  }

  void _save() {
    final name = _name.text.trim();
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escreve o nome.')));
      return;
    }
    Navigator.of(context).pop(
      _Person(name: name, isChild: _child, age: _child ? int.tryParse(_age.text.trim()) : null, phone: _phone.text.trim()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AuthPage(
      children: [
        const SizedBox(height: 20),
        Text('Passo ${widget.step} de ${widget.total}', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        ClipRRect(
          borderRadius: BorderRadius.circular(3),
          child: LinearProgressIndicator(
            value: widget.step / widget.total,
            minHeight: 3,
            backgroundColor: AppTheme.borderMuted,
            color: AppTheme.accentOliveDark,
          ),
        ),
        const SizedBox(height: 32),
        const Text('Quem é o teu acompanhante?', style: TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        AuthField(label: 'Nome', controller: _name, topGap: 24),
        const SizedBox(height: 24),
        _RadioRow(label: 'Adulto', selected: !_child, onTap: () => setState(() => _child = false)),
        const SizedBox(height: 10),
        _RadioRow(label: 'Criança', selected: _child, onTap: () => setState(() => _child = true)),
        if (_child) AuthField(label: 'Idade', controller: _age, keyboardType: TextInputType.number),
        AuthField(label: 'Telemóvel (opcional)', controller: _phone, keyboardType: TextInputType.phone),
        const SizedBox(height: 12),
        const Text(
          'Enviamos-lhe um convite para criar conta e ver os detalhes do evento. Fica ligado a ti pelo número.',
          style: TextStyle(fontSize: 13, height: 18 / 13, color: AppTheme.inkMuted),
        ),
      ],
      footer: [
        AuthPrimaryButton(label: 'Guardar acompanhante', onPressed: _save),
        if (widget.existing != null)
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: TextButton(
              onPressed: () => Navigator.of(context).pop(_Person(name: '')),
              style: TextButton.styleFrom(foregroundColor: AppStatusColors.declined),
              child: const Text('Remover acompanhante', style: TextStyle(fontWeight: FontWeight.w700)),
            ),
          ),
      ],
    );
  }
}

class _RadioRow extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _RadioRow({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      inMutuallyExclusiveGroup: true,
      checked: selected,
      button: true,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          height: 56,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(
            color: selected ? const Color(0xFFEEF2E9) : AppTheme.surface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: selected ? AppTheme.accentOliveDark : Colors.transparent, width: 1.5),
          ),
          child: Row(
            children: [
              Container(
                width: 22,
                height: 22,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: selected ? AppTheme.accentOliveDark : const Color(0xFF8F8B84), width: 1.5),
                ),
                child: selected
                    ? Container(width: 12, height: 12, decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
                    : null,
              ),
              const SizedBox(width: 12),
              Text(label, style: TextStyle(fontSize: 15, fontWeight: selected ? FontWeight.w700 : FontWeight.w400, color: AppTheme.ink)),
            ],
          ),
        ),
      ),
    );
  }
}

class _StepScaffold extends StatelessWidget {
  final String question;
  final String? subtitle;
  final Widget child;

  const _StepScaffold({required this.question, this.subtitle, required this.child});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SizedBox(height: 32),
        Text(question, style: const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (subtitle != null) ...[
          const SizedBox(height: 8),
          Text(subtitle!, style: const TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted)),
        ],
        const SizedBox(height: 20),
        child,
      ],
    );
  }
}

class _BigChoice extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;
  final double height;

  const _BigChoice({required this.icon, required this.label, required this.selected, required this.onTap, this.height = 132});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        height: height,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Icon(icon, size: 28, color: selected ? Colors.white : AppTheme.accentOliveDark),
            Text(label, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 15, height: 1.15, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
          ],
        ),
      ),
    );
  }
}

class _ConfirmedView extends StatelessWidget {
  final List<String> rows;
  final VoidCallback onContinue;

  const _ConfirmedView({required this.rows, required this.onContinue});

  @override
  Widget build(BuildContext context) {
    // Canvas "Convidado 8 · Pronto" — mesmos tempos.
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          const Positioned.fill(child: FallingConfetti(delay: Duration(milliseconds: 1900))),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 84),
                  const Center(child: DuoClink(width: 210)),
                  const SizedBox(height: 20),
                  const UpIn(
                    delay: Duration(milliseconds: 400),
                    child: Text(
                      'Presença confirmada!',
                      style: TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink),
                    ),
                  ),
                  const SizedBox(height: 8),
                  const UpIn(
                    delay: Duration(milliseconds: 550),
                    child: Text(
                      'Os anfitriões já sabem. Podes mudar as respostas no teu perfil.',
                      style: TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted),
                    ),
                  ),
                  const SizedBox(height: 24),
                  for (final (i, r) in rows.indexed)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: UpIn(delay: Duration(milliseconds: 720 + 120 * i), child: ProntoRow(text: r)),
                    ),
                  const Spacer(),
                  UpIn(
                    delay: const Duration(milliseconds: 1200),
                    child: ShineSweep(
                      delay: const Duration(milliseconds: 1600),
                      child: AuthPrimaryButton(label: 'Ver o evento →', onPressed: onContinue),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

