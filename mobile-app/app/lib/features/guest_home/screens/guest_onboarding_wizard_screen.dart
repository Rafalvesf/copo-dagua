import 'package:flutter/material.dart';
import '../../../core/supabase/supabase_config.dart';
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

  /// Só para as capturas de ecrã (`?step=N`).
  final int initialStep;

  /// Modo RSVP (096): resposta pelo link do convite, sem conta — grava
  /// com o `rsvp_token` em vez da sessão. Pedido 2026-10-17: o mesmo
  /// percurso "tanto para o RSVP como para quem instale a app".
  final String? rsvpToken;

  /// Dados do evento quando não vêm da lista do convidado (modo RSVP).
  final GuestWedding? event;

  /// Acompanhantes já guardados (para mudar a resposta).
  final List<GuestCompanion> initialCompanions;

  /// No fim do modo RSVP (ex.: convidar a instalar a app).
  final VoidCallback? onDone;

  const GuestOnboardingWizardScreen({
    super.key,
    required this.weddingId,
    required this.guest,
    this.initialStep = 0,
    this.rsvpToken,
    this.event,
    this.initialCompanions = const [],
    this.onDone,
  });

  @override
  ConsumerState<GuestOnboardingWizardScreen> createState() => _GuestOnboardingWizardScreenState();
}

enum _Step { attending, companions, ages, menu, allergies, side, relationship }

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

  /// 'child', 'adult' ou 'senior' (092).
  String ageGroup;
  bool get isChild => ageGroup == 'child';
  int? age;
  String phone;

  /// Email (093): obrigatório para adultos, opcional para crianças e
  /// seniores. Usado para cruzar com contas e evitar duplicados.
  String email;

  /// Crianças e seniores: com quem vai (nome de outra pessoa do grupo).
  String? accompaniedBy;

  /// Vai instalar a app (095).
  bool willInstall;
  String? menu;
  final Set<String> allergies;
  String otherAllergy;

  _Person({
    required this.name,
    this.ageGroup = 'adult',
    this.age,
    this.phone = '',
    this.email = '',
    this.accompaniedBy,
    this.willInstall = false,
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
  late int _index = widget.initialStep;
  bool _saving = false;
  bool _confirmed = false;
  late final _Person _me = _Person(
    name: widget.guest.name.split(' ').first,
    ageGroup: widget.guest.ageGroup,
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
    for (final c in widget.initialCompanions) {
      _companions.add(_Person(
        name: c.name,
        ageGroup: c.ageGroup,
        age: c.childAge,
        phone: c.phone ?? '',
        email: c.email ?? '',
        accompaniedBy: c.accompaniedBy,
        willInstall: c.willInstallApp,
        menu: c.menu,
        allergies: c.allergies.toSet(),
      ));
    }
    final plusOne = widget.guest.plusOneName?.trim();
    if (_companions.isEmpty && plusOne != null && plusOne.isNotEmpty) _companions.add(_Person(name: plusOne));
  }

  GuestWedding? get _wedding {
    if (widget.event != null) return widget.event;
    final list = ref.watch(guestWeddingsProvider).value ?? const [];
    for (final w in list) {
      if (w.weddingId == widget.weddingId) return w;
    }
    return null;
  }

  EventType get _eventType => _wedding?.eventType ?? EventType.wedding;
  String get _hosts => _wedding?.displayNames ?? 'os anfitriões';

  /// Limite definido pelo organizador (091); antes era sempre 5.
  int get _limit => widget.guest.maxCompanions > 0 ? widget.guest.maxCompanions : (widget.guest.plusOneAllowed ? 1 : 0);

  List<_Step> get _steps => [
        _Step.attending,
        if (_limit > 0) _Step.companions,
        _Step.ages,
        _Step.menu,
        _Step.allergies,
        if (_sideOptions != null) _Step.side,
        _Step.relationship,
      ];

  List<_Person> get _people => [_me, ..._companions];

  /// Lado, conforme o evento (canvas "Convidado 6 · Lado"): casamento
  /// noiva/noivo; batizado, comunhão e chá de bebé mãe/pai. Nos outros
  /// eventos não se pergunta.
  List<(WeddingSide, String)>? get _sideOptions => switch (_eventType) {
        EventType.wedding || EventType.engagement || EventType.vowRenewal => const [
            (WeddingSide.bride, 'Da noiva'),
            (WeddingSide.groom, 'Do noivo'),
            (WeddingSide.both, 'De ambos'),
          ],
        EventType.baptism || EventType.communion || EventType.babyShower => const [
            (WeddingSide.bride, 'Da mãe'),
            (WeddingSide.groom, 'Do pai'),
            (WeddingSide.both, 'De ambos'),
          ],
        _ => null,
      };

  Map<String, dynamic> _companionJson(_Person c) => {
        'name': c.name,
        'age_group': c.ageGroup,
        'child_age': c.age,
        'phone': c.phone.trim(),
        'email': c.email.trim(),
        'menu': c.menu,
        'allergies': c.allAllergies,
        'accompanied_by': c.ageGroup == 'adult' ? null : (c.accompaniedBy ?? _me.name),
        'will_install_app': c.willInstall,
      };

  Future<void> _finish({required bool attending}) async {
    setState(() => _saving = true);
    final groupLabel = _relationship == 'Outro' && _relationOther.text.trim().isNotEmpty ? _relationOther.text.trim() : _relationship;
    if (widget.rsvpToken != null) {
      try {
        try {
          await supabase.rpc('submit_rsvp_full', params: {
          'p_token': widget.rsvpToken,
          'p_attending': attending,
          'p_menu': _me.menu,
          'p_dietary': _me.allAllergies.isEmpty ? null : _me.allAllergies.join(', '),
          'p_age_group': _me.ageGroup,
          'p_side': switch (_side ?? widget.guest.side) {
            WeddingSide.groom => 'couple_a',
            WeddingSide.bride => 'couple_b',
            WeddingSide.both => 'both',
          },
          'p_group_label': groupLabel,
          'p_message': null,
          'p_companions': [for (final c in _companions) _companionJson(c)],
          });
        } catch (_) {
          // Enquanto a função nova não está no servidor: a resposta de
          // sempre (confirma/recusa, nomes dos acompanhantes, alergias).
          await supabase.functions.invoke('submit-rsvp', body: {
            'token': widget.rsvpToken,
            'rsvp_status': attending ? 'confirmed' : 'declined',
            'plus_one_name': _companions.isEmpty ? null : _companions.map((c) => c.name).join(', '),
            'dietary_restrictions': _people.every((p) => p.allAllergies.isEmpty)
                ? null
                : _people.where((p) => p.allAllergies.isNotEmpty).map((p) => '${p.name}: ${p.allAllergies.join(', ')}').join('; '),
            'guest_message': null,
          });
        }
        if (!mounted) return;
        if (attending) {
          setState(() => _confirmed = true);
        } else {
          widget.onDone?.call();
        }
      } catch (_) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')),
          );
        }
      } finally {
        if (mounted) setState(() => _saving = false);
      }
      return;
    }
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
        try {
          await setOwnAgeGroup(widget.weddingId, _me.ageGroup);
        } catch (_) {}
        await saveGuestCompanions(
          guestId: widget.guest.id,
          weddingId: widget.weddingId,
          companions: [
            for (final c in _companions)
              GuestCompanion(
                name: c.name,
                isChild: c.isChild,
                ageGroup: c.ageGroup,
                childAge: c.age,
                phone: c.phone.trim().isEmpty ? null : c.phone.trim(),
                email: c.email.trim().isEmpty ? null : c.email.trim(),
                accompaniedBy: c.ageGroup == 'adult' ? null : (c.accompaniedBy ?? _me.name),
                willInstallApp: c.willInstall,
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
      MaterialPageRoute(builder: (_) => _CompanionPage(
        existing: existing,
        step: _index + 1,
        total: _steps.length,
        // Quem pode acompanhar uma criança ou um sénior: tu e os outros
        // adultos já indicados.
        others: [
          _me.name,
          for (final c in _companions)
            if (c != existing && c.ageGroup == 'adult') c.name,
        ],
      )),
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
          ..ageGroup = result.ageGroup
          ..age = result.age
          ..phone = result.phone
          ..email = result.email
          ..accompaniedBy = result.accompaniedBy
          ..willInstall = result.willInstall;
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
          for (final c in _companions.where((c) => c.willInstall))
            '${c.name} já tem a app — fica ligado à conta dele/a',
          widget.rsvpToken != null ? 'Podes mudar a resposta pelo mesmo link' : 'Podes mudar tudo no teu perfil',
        ],
        rsvp: widget.rsvpToken != null,
        onContinue: widget.rsvpToken != null
            ? (widget.onDone ?? () {})
            : () => context.go('/guest-home/${widget.weddingId}'),
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
    // Quem já tem a app: o telemóvel é obrigatório — é com ele que a
    // resposta fica ligada à conta dessa pessoa (093/097).
    if (step == _Step.companions) {
      final missing = _companions.where((c) => c.willInstall && c.phone.replaceAll(RegExp(r'[^0-9]'), '').length < 9).toList();
      if (missing.isNotEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Indica o telemóvel de ${missing.first.name}.')),
        );
        return;
      }
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
        // Já indicado como acompanhante por outra pessoa (093): os dados
        // vêm preenchidos, só falta confirmar.
        final prefilled = widget.guest.rsvpStatus == RsvpStatus.confirmed && widget.guest.onboardingCompletedAt == null;
        return _StepScaffold(
          question: 'Vais ao ${_eventType.noun}${_wedding == null ? '' : ' de ${_wedding!.displayNames}'}?',
          subtitle: prefilled
              ? 'Já tínhamos a tua resposta e preenchemos o que sabíamos. Só tens de confirmar nos próximos passos.'
              : (sub.isEmpty ? null : sub),
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
          subtitle: _limit == 1 ? 'Os anfitriões deixaram levar 1 pessoa.' : 'Os anfitriões deixaram levar até $_limit pessoas.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _PersonRow(initials: _initials(widget.guest.name), name: widget.guest.name, subtitle: 'Tu'),
              for (final c in _companions)
                _PersonRow(
                  initials: _initials(c.name),
                  name: c.name,
                  subtitle: [
                    c.isChild ? 'Criança${c.age != null ? ' · ${c.age} anos' : ''}' : ageGroupLabel(c.ageGroup),
                    if (c.ageGroup != 'adult' && c.accompaniedBy != null) 'vai com ${c.accompaniedBy == _me.name ? 'contigo' : c.accompaniedBy}',
                  ].join(' · '),
                  onEdit: () => _editCompanion(c),
                ),
              if (_companions.length < _limit)
                SnappyTap(
                  onTap: () => _editCompanion(),
                  child: CustomPaint(
                    painter: const _DashedBorder(),
                    child: SizedBox(
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
              // Pedido 2026-10-17: na mesma página dos acompanhantes, em vez
              // de pedir email ou telemóvel a cada um.
              if (_companions.isNotEmpty) ...[
                const SizedBox(height: 24),
                Text(
                  _companions.length == 1
                      ? 'O teu acompanhante já tem a app Tchin Tchin?'
                      : 'Os teus acompanhantes já têm a app Tchin Tchin?',
                  style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Se já tem conta neste evento, juntamos as respostas — nada fica repetido.',
                  style: TextStyle(fontSize: 12, height: 17 / 12, color: AppTheme.inkMuted),
                ),
                const SizedBox(height: 12),
                for (final c in _companions)
                  _PersonChoices(
                    title: c.name,
                    options: const ['Sim', 'Não'],
                    equal: true,
                    selected: {c.willInstall ? 'Sim' : 'Não'},
                    onTap: (o) => setState(() => c.willInstall = o == 'Sim'),
                  ),
                if (_companions.any((c) => c.willInstall)) ...[
                  const SizedBox(height: 4),
                  const Text(
                    'Indica o telemóvel com que criou conta, para ligarmos a resposta à conta dele/a.',
                    style: TextStyle(fontSize: 12, height: 17 / 12, color: AppTheme.inkMuted),
                  ),
                  for (final c in _companions.where((c) => c.willInstall))
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: TextFormField(
                        key: ValueKey('phone-${c.hashCode}'),
                        initialValue: c.phone,
                        keyboardType: TextInputType.phone,
                        autofillHints: const [AutofillHints.telephoneNumber],
                        onChanged: (v) => c.phone = v.trim(),
                        decoration: InputDecoration(
                          labelText: 'Telemóvel de ${c.name.split(' ').first}',
                          hintText: '912 345 678',
                        ),
                      ),
                    ),
                ],
              ],
            ],
          ),
        );
      case _Step.ages:
        // Pedido 2026-10-17: criança, adulto ou sénior, para cada pessoa.
        return _StepScaffold(
          question: _people.length == 1 ? 'Em que faixa estás?' : 'Em que faixa está cada pessoa?',
          subtitle: 'Ajuda os anfitriões com os menus e os lugares.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final p in _people)
                _PersonChoices(
                  title: p == _me ? '${p.name} (tu)' : p.name,
                  options: const ['Criança', 'Adolescente', 'Adulto', 'Sénior'],
                  selected: {
                    switch (p.ageGroup) {
                      'child' => 'Criança',
                      'teen' => 'Adolescente',
                      'senior' => 'Sénior',
                      _ => 'Adulto',
                    },
                  },
                  onTap: (o) => setState(() {
                    p.ageGroup = switch (o) {
                      'Criança' => 'child',
                      'Adolescente' => 'teen',
                      'Sénior' => 'senior',
                      _ => 'adult',
                    };
                    if (p.menu != null && !(p.isChild ? _childMenus : _adultMenus).contains(p.menu)) p.menu = null;
                  }),
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
              for (final (i, (side, label)) in (_sideOptions ?? const <(WeddingSide, String)>[]).indexed) ...[
                if (i > 0) const SizedBox(width: 12),
                Expanded(
                  child: _BigChoice(
                    icon: side == WeddingSide.both ? Icons.groups_2_outlined : Icons.person_outline,
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
            Text('Editar', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
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
        // Só centra quando os botões têm largura fixa (refeição); nas
        // alergias ficam do tamanho do texto.
        alignment: equal ? Alignment.center : null,
        decoration: BoxDecoration(
          color: on ? AppTheme.accentOliveDark : Colors.white,
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: on ? AppTheme.accentOliveDark : AppTheme.borderMuted),
        ),
        child: Row(
          mainAxisSize: equal ? MainAxisSize.max : MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Flexible(
              child: Text(
                o,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 13, fontWeight: on ? FontWeight.w700 : FontWeight.w400, color: on ? Colors.white : AppTheme.ink),
              ),
            ),
          ],
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
  final List<String> others;
  const _CompanionPage({this.existing, required this.step, required this.total, this.others = const []});

  @override
  State<_CompanionPage> createState() => _CompanionPageState();
}

class _CompanionPageState extends State<_CompanionPage> {
  late final _name = TextEditingController(text: widget.existing?.name ?? '');
  late final _age = TextEditingController(text: widget.existing?.age?.toString() ?? '');
  late String? _with = widget.existing?.accompaniedBy ?? (widget.others.isEmpty ? null : widget.others.first);
  late String _group = widget.existing?.ageGroup ?? 'adult';
  bool get _child => _group == 'child';

  @override
  void dispose() {
    _name.dispose();
    _age.dispose();
    super.dispose();
  }

  bool get _adult => _group == 'adult';


  void _save() {
    final name = _name.text.trim();
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escreve o nome.')));
      return;
    }
    Navigator.of(context).pop(
      _Person(
        name: name,
        ageGroup: _group,
        age: _child ? int.tryParse(_age.text.trim()) : null,
        accompaniedBy: _adult ? null : _with,
        willInstall: widget.existing?.willInstall ?? false,
        phone: widget.existing?.phone ?? '',
      ),
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
        const SizedBox(height: 22),
        AuthField(label: 'Nome', controller: _name, topGap: 24),
        const SizedBox(height: 24),
        _RadioRow(label: 'Adulto', selected: _group == 'adult', onTap: () => setState(() => _group = 'adult')),
        const SizedBox(height: 10),
        _RadioRow(label: 'Criança', selected: _group == 'child', onTap: () => setState(() => _group = 'child')),
        const SizedBox(height: 10),
        _RadioRow(label: 'Adolescente', selected: _group == 'teen', onTap: () => setState(() => _group = 'teen')),
        const SizedBox(height: 10),
        _RadioRow(label: 'Sénior', selected: _group == 'senior', onTap: () => setState(() => _group = 'senior')),
        if (_child) AuthField(label: 'Idade', controller: _age, keyboardType: TextInputType.number),
        if (!_adult && widget.others.isNotEmpty) ...[
          const SizedBox(height: 22),
          const Text('Vai com quem?', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 10),
          for (final o in widget.others) ...[
            _RadioRow(label: o == widget.others.first ? '$o (tu)' : o, selected: _with == o, onTap: () => setState(() => _with = o)),
            const SizedBox(height: 8),
          ],
        ],
        const SizedBox(height: 12),
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
                    ? Container(width: 12, height: 12, decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
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
  final bool rsvp;

  const _ConfirmedView({required this.rows, required this.onContinue, this.rsvp = false});

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
                  UpIn(
                    delay: const Duration(milliseconds: 550),
                    child: Text(
                      rsvp
                          ? 'Os anfitriões já sabem. Instala a app para veres o programa, a tua mesa e as fotos.'
                          : 'Os anfitriões já sabem. Podes mudar as respostas no teu perfil.',
                      style: const TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted),
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
                      child: AuthPrimaryButton(label: rsvp ? 'Instalar a app' : 'Ver o evento →', onPressed: onContinue),
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

