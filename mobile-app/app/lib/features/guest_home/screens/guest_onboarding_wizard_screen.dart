import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/progress.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/staggered_fade_in.dart';

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
const _allergyOptions = ['Glúten', 'Lactose', 'Marisco', 'Frutos secos'];

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

  List<String> get allAllergies => [...allergies, if (otherAllergy.trim().isNotEmpty) otherAllergy.trim()];
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
        groupLabel: _relationship,
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
    final result = await showModalBottomSheet<_Person>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl))),
      builder: (_) => _CompanionSheet(existing: existing),
    );
    if (result == null) return;
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

    return GradientScaffold(
      background: AppBackground.hero,
      extendBodyBehindAppBar: false,
      appBar: AppBar(automaticallyImplyLeading: false),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 24, 24, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              StepProgressBar(totalSteps: steps.length, currentStep: _index),
              const SizedBox(height: 24),
              Expanded(child: SingleChildScrollView(child: _buildStep(step))),
              if (step != _Step.attending) _buildFooter(steps),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStep(_Step step) {
    switch (step) {
      case _Step.attending:
        return _StepScaffold(
          question: 'Vais ao ${_eventType.noun}?',
          subtitle: 'Responde a $_hosts — demora um minuto.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              PrimaryButton(label: 'Sim, vou!', loading: _saving, onPressed: () => setState(() => _index++)),
              const SizedBox(height: 12),
              OutlinedButton(
                onPressed: _saving ? null : () => _finish(attending: false),
                child: const Text('Não vou poder ir'),
              ),
            ],
          ),
        );
      case _Step.companions:
        return _StepScaffold(
          question: 'Quem vai contigo?',
          subtitle: 'Junta cada pessoa. Se ninguém vai contigo, continua.',
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
                  onRemove: () => setState(() => _companions.remove(c)),
                ),
              if (_companions.length < _maxCompanions) ...[
                const SizedBox(height: 10),
                OutlinedButton.icon(
                  onPressed: () => _editCompanion(),
                  icon: const Icon(Icons.add),
                  label: const Text('Adicionar acompanhante'),
                ),
              ],
              const SizedBox(height: 14),
              const Text(
                'O telemóvel é opcional: ajuda os anfitriões a contactar e, mais tarde, a ligar a conta da pessoa à tua resposta.',
                style: TextStyle(fontSize: AppFontSize.sm, height: 1.4, color: AppTheme.inkMuted),
              ),
            ],
          ),
        );
      case _Step.menu:
        return _StepScaffold(
          question: _people.length == 1 ? 'Que refeição preferes?' : 'Que refeição para cada pessoa?',
          subtitle: 'Cada um escolhe a sua. Podes mudar depois.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final p in _people)
                _PersonChoices(
                  title: p == _me ? '${p.name} (tu)' : p.name,
                  options: p.isChild ? _childMenus : _adultMenus,
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
          question: 'De que lado és?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _ChoiceRow(label: 'Lado da noiva', selected: _side == WeddingSide.bride, onTap: () => setState(() => _side = WeddingSide.bride)),
              const SizedBox(height: 10),
              _ChoiceRow(label: 'Lado do noivo', selected: _side == WeddingSide.groom, onTap: () => setState(() => _side = WeddingSide.groom)),
              const SizedBox(height: 10),
              _ChoiceRow(label: 'Ambos', selected: _side == WeddingSide.both, onTap: () => setState(() => _side = WeddingSide.both)),
            ],
          ),
        );
      case _Step.relationship:
        return _StepScaffold(
          question: 'Como conheces $_hosts?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final option in const ['Família', 'Amigo', 'Colega', 'Outro'])
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: _ChoiceRow(
                    label: option,
                    selected: _relationship == option,
                    onTap: () => setState(() => _relationship = option),
                  ),
                ),
            ],
          ),
        );
    }
  }

  Widget _buildFooter(List<_Step> steps) {
    final isLast = _index == steps.length - 1;
    return WizardFooter(
      onBack: () => setState(() => _index--),
      continueButton: ArrowCtaButton(
        label: isLast ? 'Concluir' : 'Continuar',
        onTap: _saving ? () {} : (isLast ? () => _finish(attending: true) : () => setState(() => _index++)),
      ),
    );
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
  final VoidCallback? onRemove;

  const _PersonRow({required this.initials, required this.name, required this.subtitle, this.onEdit, this.onRemove});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10),
      decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: AppTheme.borderMuted))),
      child: Row(
        children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: AppColors.yellow,
            child: Text(initials, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          if (onEdit != null) TextButton(onPressed: onEdit, child: const Text('Editar')),
          if (onRemove != null)
            IconButton(onPressed: onRemove, tooltip: 'Remover', icon: const Icon(Icons.close, size: 18, color: AppTheme.inkMuted)),
        ],
      ),
    );
  }
}

class _PersonChoices extends StatelessWidget {
  final String title;
  final List<String> options;
  final Set<String> selected;
  final ValueChanged<String> onTap;
  final String? other;
  final ValueChanged<String>? onOther;

  const _PersonChoices({
    required this.title,
    required this.options,
    required this.selected,
    required this.onTap,
    this.other,
    this.onOther,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              for (final o in options)
                ChoiceChip(
                  label: Text(o),
                  selected: selected.contains(o),
                  onSelected: (_) => onTap(o),
                  showCheckmark: false,
                  selectedColor: AppTheme.accentOliveDark,
                  labelStyle: TextStyle(
                    fontFamily: AppTheme.fontFamily,
                    fontFamilyFallback: AppTheme.fontFamilyFallback,
                    color: selected.contains(o) ? Colors.white : AppTheme.ink,
                    fontWeight: FontWeight.w700,
                  ),
                ),
            ],
          ),
          if (onOther != null) ...[
            const SizedBox(height: 8),
            TextFormField(
              initialValue: other,
              onChanged: onOther,
              decoration: const InputDecoration(hintText: 'Outra (escreve)', isDense: true),
            ),
          ],
        ],
      ),
    );
  }
}

class _CompanionSheet extends StatefulWidget {
  final _Person? existing;
  const _CompanionSheet({this.existing});

  @override
  State<_CompanionSheet> createState() => _CompanionSheetState();
}

class _CompanionSheetState extends State<_CompanionSheet> {
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

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(24, 20, 24, 24 + MediaQuery.of(context).viewInsets.bottom),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('Quem é o teu acompanhante?', style: TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 16),
          AuthTextField(label: 'Nome', controller: _name),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: _ChoiceRow(label: 'Adulto', selected: !_child, onTap: () => setState(() => _child = false)),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: _ChoiceRow(label: 'Criança', selected: _child, onTap: () => setState(() => _child = true)),
              ),
            ],
          ),
          if (_child) ...[
            const SizedBox(height: 12),
            AuthTextField(label: 'Idade', controller: _age, keyboardType: TextInputType.number),
          ],
          const SizedBox(height: 12),
          AuthTextField(label: 'Telemóvel (opcional)', controller: _phone, keyboardType: TextInputType.phone),
          const SizedBox(height: 20),
          PrimaryButton(
            label: 'Guardar acompanhante',
            onPressed: () {
              final name = _name.text.trim();
              if (name.isEmpty) return;
              Navigator.of(context).pop(
                _Person(
                  name: name,
                  isChild: _child,
                  age: _child ? int.tryParse(_age.text.trim()) : null,
                  phone: _phone.text.trim(),
                ),
              );
            },
          ),
        ],
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
        Text(question, style: Theme.of(context).textTheme.headlineSmall),
        if (subtitle != null) ...[
          const SizedBox(height: 6),
          Text(subtitle!, style: Theme.of(context).textTheme.bodyMedium),
        ],
        const SizedBox(height: 24),
        child,
      ],
    );
  }
}

class _ChoiceRow extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _ChoiceRow({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.md),
          border: Border.all(color: selected ? AppTheme.accentOliveDark : Colors.transparent, width: 1.5),
        ),
        child: Row(
          children: [
            Icon(
              selected ? Icons.check_circle : Icons.circle_outlined,
              size: 22,
              color: selected ? AppTheme.accentOliveDark : AppTheme.inkMuted,
            ),
            const SizedBox(width: 12),
            Expanded(child: Text(label, style: const TextStyle(fontWeight: FontWeight.w600))),
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
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          const Positioned.fill(
            child: ConfettiBurst(origin: Offset(0.5, 0.16), delay: Duration(milliseconds: 1050)),
          ),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(28, 24, 28, 34),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 24),
                  const Center(child: TchinClink(width: 210)),
                  const SizedBox(height: 20),
                  StaggeredFadeIn(
                    stagger: const Duration(milliseconds: 110),
                    itemDuration: const Duration(milliseconds: 420),
                    children: [
                      const Text(
                        'Presença confirmada!',
                        style: TextStyle(
                          fontSize: AppFontSize.h1,
                          height: 34 / 28,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.ink,
                        ),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Os anfitriões já sabem. Podes mudar as respostas no teu perfil.',
                        style: TextStyle(
                          fontSize: AppFontSize.base + 1,
                          height: 22 / 15,
                          fontWeight: FontWeight.w300,
                          color: AppTheme.inkMuted,
                        ),
                      ),
                      const SizedBox(height: 24),
                      for (final r in rows)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 10),
                          child: _CheckRow(text: r),
                        ),
                    ],
                  ),
                  const Spacer(),
                  PrimaryButton(label: 'Ver o evento →', onPressed: onContinue),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _CheckRow extends StatelessWidget {
  final String text;
  const _CheckRow({required this.text});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.md)),
      child: Row(
        children: [
          const Icon(Icons.check_rounded, size: 18, color: AppTheme.accentOliveDark),
          const SizedBox(width: 12),
          Expanded(child: Text(text, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.ink))),
        ],
      ),
    );
  }
}
