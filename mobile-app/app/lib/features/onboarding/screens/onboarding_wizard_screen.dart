import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_onboarding/screens/partner_welcome_screen.dart';

/// Onboarding do organizador — uma pergunta por ecrã, igual ao canvas
/// aprovado (redesign 2026-10): tipo de evento, nome (+ par num
/// casamento), data, região, convidados, orçamento e o que já está
/// tratado; no fim, um resumo com os próximos passos.
enum _WizardStep { event, names, date, region, guests, budget, booked }

/// Passos que se podem saltar (o tipo de evento e o nome são precisos).
const _skippable = {
  _WizardStep.date,
  _WizardStep.region,
  _WizardStep.guests,
  _WizardStep.budget,
  _WizardStep.booked,
};

const _regions = [
  'Grande Lisboa',
  'Grande Porto',
  'Norte',
  'Centro',
  'Alentejo',
  'Algarve',
  'Madeira',
  'Açores',
];

/// Categorias "grandes" perguntadas logo no onboarding (RN37/38 do motor
/// de tarefas) — as restantes ficam para `/service-preferences`.
const _majorCategorySlugs = ['venue', 'photography', 'catering', 'music_dj'];

enum _DateMode { exact, month, unknown }

class OnboardingWizardScreen extends ConsumerStatefulWidget {
  const OnboardingWizardScreen({super.key});

  @override
  ConsumerState<OnboardingWizardScreen> createState() =>
      _OnboardingWizardScreenState();
}

class _OnboardingWizardScreenState
    extends ConsumerState<OnboardingWizardScreen> {
  int _step = 0;
  bool _saving = false;
  bool _ownNamePrefilled = false;
  Wedding? _createdWedding;
  final Set<String> _alreadyBookedSlugs = {};

  final _ownName = TextEditingController();
  final _partnerName = TextEditingController();
  final _location = TextEditingController();
  final _budget = TextEditingController();
  EventType _eventType = EventType.wedding;
  _DateMode _dateMode = _DateMode.exact;
  DateTime? _date;
  int? _guests;

  bool get _isWedding => _eventType == EventType.wedding;
  _WizardStep get _current => _WizardStep.values[_step];

  @override
  void initState() {
    super.initState();
    for (final c in [_ownName, _partnerName, _location, _budget]) {
      c.addListener(() => setState(() {}));
    }
  }

  @override
  void dispose() {
    _ownName.dispose();
    _partnerName.dispose();
    _location.dispose();
    _budget.dispose();
    super.dispose();
  }

  DateTime? get _savedDate => switch (_dateMode) {
        _DateMode.unknown => null,
        _ => _date,
      };

  String _firstName(Profile profile) {
    final typed = _ownName.text.trim();
    return typed.isEmpty ? profile.fullName.split(' ').first : typed;
  }

  bool get _canContinue => switch (_current) {
        _WizardStep.names => _ownName.text.trim().isNotEmpty,
        _ => true,
      };

  void _back() {
    if (_step > 0) setState(() => _step--);
  }

  Future<void> _next(Profile profile) async {
    if (_step < _WizardStep.values.length - 1) {
      setState(() => _step++);
      return;
    }
    await _create(profile);
  }

  /// Cria o evento no fim das perguntas e mostra o resumo. Se já existir
  /// um (ex: a app foi fechada no resumo), reaproveita-o em vez de criar
  /// outro.
  Future<void> _create(Profile profile) async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final existing = ref.read(weddingControllerProvider).wedding;
      final wedding = existing ??
          await ref.read(weddingControllerProvider.notifier).create(
                partnerName1: _firstName(profile),
                partnerName2: _isWedding && _partnerName.text.trim().isNotEmpty
                    ? _partnerName.text.trim()
                    : null,
                weddingDate: _savedDate,
                location: _location.text.trim().isEmpty
                    ? null
                    : _location.text.trim(),
                estimatedGuests: _guests,
                estimatedBudget: double.tryParse(
                  _budget.text.trim().replaceAll(' ', '').replaceAll(',', '.'),
                ),
                eventType: _eventType,
              );
      if (_alreadyBookedSlugs.isNotEmpty) {
        await supabase.from('wedding_service_preferences').upsert([
          for (final slug in _alreadyBookedSlugs)
            {
              'wedding_id': wedding.id,
              'partner_category_slug': slug,
              'preference': 'already_booked',
              'updated_at': DateTime.now().toIso8601String(),
            },
        ]);
      }
      if (!mounted) return;
      setState(() {
        _createdWedding = wedding;
        _saving = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() => _saving = false);
      messenger.showSnackBar(
        SnackBar(
          content: Text(
            'Não foi possível criar o ${_eventType.noun}. Tenta novamente.',
          ),
        ),
      );
    }
  }

  /// Marca o onboarding como feito e segue para [route].
  Future<void> _finish(String route, {Object? extra}) async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref.read(authControllerProvider.notifier).completeOnboarding();
    } catch (_) {
      if (mounted) setState(() => _saving = false);
      messenger.showSnackBar(
        const SnackBar(content: Text('Não foi possível guardar. Tenta de novo.')),
      );
      return;
    }
    if (!mounted) return;
    context.go(route, extra: extra);
  }

  Future<void> _invite(Wedding wedding) async {
    final email = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl)),
      ),
      builder: (context) => _InviteSheet(
        title: _isWedding && wedding.partnerName2 != null
            ? 'Convidar ${wedding.partnerName2}'
            : 'Convidar alguém para organizar',
      ),
    );
    if (email == null || email.isEmpty || !mounted) return;
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref
          .read(weddingControllerProvider.notifier)
          .inviteCollaborator(weddingId: wedding.id, email: email);
      messenger.showSnackBar(SnackBar(content: Text('Convite enviado para $email.')));
    } catch (_) {
      messenger.showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar o convite.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;
    if (profile == null) {
      return const GradientScaffold(
        background: AppBackground.subtle,
        body: Center(child: CircularProgressIndicator()),
      );
    }
    if (profile.role == UserRole.partner) return const PartnerWelcomeScreen();
    if (!_ownNamePrefilled) {
      _ownName.text = profile.fullName.split(' ').first;
      _ownNamePrefilled = true;
    }

    final created = _createdWedding;
    if (created != null) {
      return _DoneView(
        name: _firstName(profile),
        wedding: created,
        eventType: _eventType,
        dateMode: _dateMode,
        bookedSlugs: _alreadyBookedSlugs,
        saving: _saving,
        onStart: (route, extra) => _finish(route, extra: extra),
        onInvite: () => _invite(created),
      );
    }

    final total = _WizardStep.values.length;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28, 12, 28, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SizedBox(
                height: 44,
                child: Row(
                  children: [
                    if (_step > 0)
                      CircleBackButton(onTap: _back)
                    else
                      const SizedBox(width: 44),
                    const Spacer(),
                    if (_skippable.contains(_current))
                      TextButton(
                        onPressed: _saving ? null : () => _next(profile),
                        style: TextButton.styleFrom(
                          foregroundColor: AppTheme.inkMuted,
                          textStyle: const TextStyle(
                            fontSize: AppFontSize.base,
                            fontWeight: FontWeight.w300,
                          ),
                        ),
                        child: const Text('Saltar'),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              Text(
                'Passo ${_step + 1} de $total',
                style: const TextStyle(
                  fontSize: AppFontSize.md,
                  color: AppTheme.inkMuted,
                ),
              ),
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(3),
                child: TweenAnimationBuilder<double>(
                  tween: Tween(end: (_step + 1) / total),
                  duration: const Duration(milliseconds: 260),
                  curve: Curves.easeOutCubic,
                  builder: (context, value, _) => LinearProgressIndicator(
                    value: value,
                    minHeight: 3,
                    backgroundColor: AppTheme.borderMuted,
                    color: AppTheme.accentOliveDark,
                  ),
                ),
              ),
              Expanded(
                child: AnimatedSwitcher(
                  duration: const Duration(milliseconds: 220),
                  child: KeyedSubtree(
                    key: ValueKey(_current),
                    child: _buildStep(context),
                  ),
                ),
              ),
              if (_current == _WizardStep.names) ...[
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.lock_outline_rounded,
                        size: 14, color: AppTheme.inkMuted),
                    const SizedBox(width: 6),
                    Text(
                      _isWedding
                          ? 'Só tu e o teu par veem estes dados'
                          : 'Só tu e quem convidares veem estes dados',
                      style: const TextStyle(
                        fontSize: AppFontSize.sm,
                        color: AppTheme.inkMuted,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
              ],
              _BigButton(
                label: 'Continuar',
                loading: _saving,
                onPressed: _canContinue && !_saving ? () => _next(profile) : null,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStep(BuildContext context) {
    switch (_current) {
      case _WizardStep.event:
        return _StepScaffold(
          question: 'O que estão a organizar?',
          subtitle: 'Podes mudar de ideias mais tarde.',
          child: GridView.count(
            crossAxisCount: 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 1.25,
            children: [
              for (final type in EventType.values)
                _EventTypeTile(
                  type: type,
                  selected: _eventType == type,
                  onTap: () => setState(() => _eventType = type),
                ),
            ],
          ),
        );
      case _WizardStep.names:
        return _StepScaffold(
          question: 'Como te chamas?',
          subtitle: 'É assim que te tratamos na app e nos convites.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _LabeledField(
                label: 'Primeiro nome',
                controller: _ownName,
                autofocus: true,
              ),
              if (_isWedding) ...[
                const SizedBox(height: 20),
                _LabeledField(
                  label: 'Nome do teu par · opcional',
                  controller: _partnerName,
                  hint: 'Ex.: Tomás',
                ),
              ],
            ],
          ),
        );
      case _WizardStep.date:
        return _StepScaffold(
          question: 'Quando é o ${_eventType.noun}?',
          subtitle:
              'Usamos a data para organizar as tarefas. Podes mudá-la depois.',
          child: _DateStep(
            mode: _dateMode,
            date: _date,
            onMode: (m) => setState(() => _dateMode = m),
            onDate: (d) => setState(() => _date = d),
          ),
        );
      case _WizardStep.region:
        return _StepScaffold(
          question: 'Onde vai ser?',
          subtitle: 'Mostramos primeiro os parceiros desta zona.',
          child: _RegionStep(controller: _location),
        );
      case _WizardStep.guests:
        return _StepScaffold(
          question: 'Quantos convidados, mais ou menos?',
          subtitle: 'Uma estimativa chega. A lista real fica em Convidados.',
          child: _GuestEstimate(
            value: _guests,
            onChanged: (v) => setState(() => _guests = v),
          ),
        );
      case _WizardStep.budget:
        return _StepScaffold(
          question: 'Quanto querem investir?',
          subtitle:
              'Um valor aproximado chega. Dividimos por categorias e podem ajustar quando quiserem.',
          child: _LabeledField(
            label: 'Orçamento total',
            controller: _budget,
            hint: 'Ex.: 20 000',
            keyboardType: TextInputType.number,
            suffix: '€',
          ),
        );
      case _WizardStep.booked:
        return _StepScaffold(
          question: 'Já têm alguma coisa tratada?',
          subtitle: 'Para não vos sugerirmos o que já resolveram.',
          child: _BookedStep(
            selected: _alreadyBookedSlugs,
            onToggle: (slug) => setState(() {
              if (!_alreadyBookedSlugs.remove(slug)) {
                _alreadyBookedSlugs.add(slug);
              }
            }),
          ),
        );
    }
  }
}

// ───────────────────────── peças partilhadas ─────────────────────────

class _StepScaffold extends StatelessWidget {
  final String question;
  final String? subtitle;
  final Widget child;

  const _StepScaffold({required this.question, this.subtitle, required this.child});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.only(top: 32, bottom: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            question,
            style: const TextStyle(
              fontSize: AppFontSize.h1,
              height: 34 / 28,
              fontWeight: FontWeight.w700,
              color: AppTheme.ink,
            ),
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 8),
            Text(
              subtitle!,
              style: const TextStyle(
                fontSize: AppFontSize.base + 1,
                height: 22 / 15,
                fontWeight: FontWeight.w300,
                color: AppTheme.inkMuted,
              ),
            ),
          ],
          const SizedBox(height: 24),
          child,
        ],
      ),
    );
  }
}

/// Botão principal do onboarding: 54 de altura, cheio, cantos 16.
class _BigButton extends StatelessWidget {
  final String label;
  final bool loading;
  final VoidCallback? onPressed;

  const _BigButton({required this.label, this.loading = false, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 54,
      child: FilledButton(
        onPressed: loading ? () {} : onPressed,
        style: FilledButton.styleFrom(
          backgroundColor: AppTheme.accentOliveDark,
          disabledBackgroundColor: AppTheme.surface,
          disabledForegroundColor: AppTheme.inkMuted,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          textStyle: const TextStyle(
            fontSize: AppFontSize.lg,
            fontWeight: FontWeight.w700,
          ),
        ),
        child: loading
            ? const SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2.4,
                  color: Colors.white,
                ),
              )
            : Text(label),
      ),
    );
  }
}

class _LabeledField extends StatefulWidget {
  final String label;
  final TextEditingController controller;
  final String? hint;
  final bool autofocus;
  final TextInputType? keyboardType;
  final String? suffix;

  const _LabeledField({
    required this.label,
    required this.controller,
    this.hint,
    this.autofocus = false,
    this.keyboardType,
    this.suffix,
  });

  @override
  State<_LabeledField> createState() => _LabeledFieldState();
}

class _LabeledFieldState extends State<_LabeledField> {
  final _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    _focus.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _focus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final focused = _focus.hasFocus;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          widget.label,
          style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 8),
        AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          height: 54,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(
            color: focused ? Colors.white : AppTheme.surface,
            borderRadius: BorderRadius.circular(AppRadius.md),
            border: Border.all(
              color: focused ? AppTheme.accentOliveDark : Colors.transparent,
              width: 1.5,
            ),
            boxShadow: focused
                ? [
                    BoxShadow(
                      color: AppTheme.accentOliveDark.withValues(alpha: 0.12),
                      spreadRadius: 4,
                    ),
                  ]
                : null,
          ),
          child: TextField(
            controller: widget.controller,
            focusNode: _focus,
            autofocus: widget.autofocus,
            keyboardType: widget.keyboardType,
            textCapitalization: widget.keyboardType == null
                ? TextCapitalization.words
                : TextCapitalization.none,
            style: const TextStyle(fontSize: AppFontSize.lg + 1, color: AppTheme.ink),
            decoration: InputDecoration(
              isCollapsed: true,
              filled: false,
              border: InputBorder.none,
              enabledBorder: InputBorder.none,
              focusedBorder: InputBorder.none,
              hintText: widget.hint,
              suffixText: widget.suffix,
            ),
          ),
        ),
      ],
    );
  }
}

// ───────────────────────── tipo de evento ─────────────────────────

class _EventTypeTile extends StatelessWidget {
  final EventType type;
  final bool selected;
  final VoidCallback onTap;

  const _EventTypeTile({required this.type, required this.selected, required this.onTap});

  IconData get _icon => switch (type) {
        EventType.wedding => Icons.favorite_border_rounded,
        EventType.baptism => Icons.water_drop_outlined,
        EventType.birthday => Icons.cake_outlined,
        EventType.other => Icons.celebration_outlined,
      };

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
            borderRadius: BorderRadius.circular(AppRadius.lg),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Icon(
                _icon,
                size: 28,
                color: selected ? Colors.white : AppTheme.accentOliveDark,
              ),
              Text(
                type.label,
                style: TextStyle(
                  fontSize: AppFontSize.lg,
                  fontWeight: FontWeight.w700,
                  color: selected ? Colors.white : AppTheme.ink,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ───────────────────────── data ─────────────────────────

const _weekdayNamesPt = [
  'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
  'Sexta-feira', 'Sábado', 'Domingo',
];

String _longDate(DateTime d) =>
    '${_weekdayNamesPt[d.weekday - 1]}, ${d.day} de '
    '${monthNamesPt[d.month - 1].toLowerCase()} de ${d.year}';

String _monthYear(DateTime d) => '${monthNamesPt[d.month - 1]} de ${d.year}';

DateTime _today() {
  final now = DateTime.now();
  return DateTime(now.year, now.month, now.day);
}

class _DateStep extends StatefulWidget {
  final _DateMode mode;
  final DateTime? date;
  final ValueChanged<_DateMode> onMode;
  final ValueChanged<DateTime> onDate;

  const _DateStep({
    required this.mode,
    required this.date,
    required this.onMode,
    required this.onDate,
  });

  @override
  State<_DateStep> createState() => _DateStepState();
}

class _DateStepState extends State<_DateStep> {
  late DateTime _visible = DateTime(
    (widget.date ?? _today()).year,
    widget.mode == _DateMode.month ? 1 : (widget.date ?? _today()).month,
  );

  @override
  Widget build(BuildContext context) {
    final date = widget.date;
    String? summary;
    String? days;
    if (date != null && widget.mode != _DateMode.unknown) {
      summary = widget.mode == _DateMode.exact ? _longDate(date) : _monthYear(date);
      final diff = date.difference(_today()).inDays;
      if (diff >= 0) {
        days = widget.mode == _DateMode.exact
            ? 'em $diff dias'
            : 'daqui a ~${(diff / 30).round()} meses';
      }
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _Segmented(
          options: const ['Dia certo', 'Só o mês', 'Não sabemos'],
          selected: widget.mode.index,
          onSelected: (i) => widget.onMode(_DateMode.values[i]),
        ),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.fromLTRB(12, 12, 12, 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadius.lg),
            border: Border.all(color: AppTheme.borderMuted),
          ),
          child: switch (widget.mode) {
            _DateMode.exact => _MonthCalendar(
                month: _visible,
                selected: date,
                onMonth: (m) => setState(() => _visible = m),
                onDay: widget.onDate,
              ),
            _DateMode.month => _MonthPicker(
                year: _visible.year,
                selected: date,
                onYear: (y) => setState(() => _visible = DateTime(y, _visible.month)),
                onMonth: widget.onDate,
              ),
            _DateMode.unknown => const Padding(
                padding: EdgeInsets.all(12),
                child: Text(
                  'Sem problema — podem escolher a data mais tarde, em Definições.',
                  style: TextStyle(
                    fontSize: AppFontSize.base,
                    height: 1.5,
                    fontWeight: FontWeight.w300,
                    color: AppTheme.inkMuted,
                  ),
                ),
              ),
          },
        ),
        if (summary != null) ...[
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(vertical: 14),
            decoration: const BoxDecoration(
              border: Border(top: BorderSide(color: AppTheme.borderMuted)),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Data escolhida',
                        style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        summary,
                        style: const TextStyle(
                          fontSize: AppFontSize.base + 1,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.ink,
                        ),
                      ),
                    ],
                  ),
                ),
                if (days != null)
                  Text(
                    days,
                    style: const TextStyle(
                      fontSize: AppFontSize.md,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
              ],
            ),
          ),
        ],
      ],
    );
  }
}

class _Segmented extends StatelessWidget {
  final List<String> options;
  final int selected;
  final ValueChanged<int> onSelected;

  const _Segmented({required this.options, required this.selected, required this.onSelected});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.pill),
      ),
      child: Row(
        children: [
          for (var i = 0; i < options.length; i++)
            Expanded(
              child: SnappyTap(
                onTap: () => onSelected(i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 160),
                  height: 36,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: i == selected ? Colors.white : Colors.transparent,
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                    boxShadow: i == selected
                        ? const [
                            BoxShadow(
                              color: Color(0x1F171713),
                              blurRadius: 3,
                              offset: Offset(0, 1),
                            ),
                          ]
                        : null,
                  ),
                  child: Text(
                    options[i],
                    style: TextStyle(
                      fontSize: AppFontSize.md,
                      fontWeight: i == selected ? FontWeight.w700 : FontWeight.w400,
                      color: i == selected ? AppTheme.ink : AppTheme.inkMuted,
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _ArrowButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  const _ArrowButton({required this.icon, required this.label, this.onTap});

  @override
  Widget build(BuildContext context) {
    return IconButton(
      tooltip: label,
      onPressed: onTap,
      icon: Icon(icon, size: 20),
      color: AppTheme.ink,
      disabledColor: AppTheme.borderMuted,
    );
  }
}

class _MonthCalendar extends StatelessWidget {
  final DateTime month;
  final DateTime? selected;
  final ValueChanged<DateTime> onMonth;
  final ValueChanged<DateTime> onDay;

  const _MonthCalendar({
    required this.month,
    required this.selected,
    required this.onMonth,
    required this.onDay,
  });

  @override
  Widget build(BuildContext context) {
    final today = _today();
    final first = DateTime(month.year, month.month);
    final daysInMonth = DateTime(month.year, month.month + 1, 0).day;
    final leading = first.weekday - 1; // segunda = 0
    final canGoBack = first.isAfter(DateTime(today.year, today.month));
    final sel = selected;
    final cells = <Widget>[
      for (var i = 0; i < leading; i++) const SizedBox(),
      for (var d = 1; d <= daysInMonth; d++)
        Builder(builder: (context) {
          final day = DateTime(month.year, month.month, d);
          final isSelected = sel != null &&
              sel.year == day.year &&
              sel.month == day.month &&
              sel.day == day.day;
          final past = day.isBefore(today);
          return Center(
            child: SnappyTap(
              onTap: past ? null : () => onDay(day),
              child: Container(
                width: 36,
                height: 36,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: isSelected ? AppTheme.accentOliveDark : Colors.transparent,
                  shape: BoxShape.circle,
                ),
                child: Text(
                  '$d',
                  style: TextStyle(
                    fontSize: AppFontSize.base,
                    fontWeight: isSelected ? FontWeight.w700 : FontWeight.w400,
                    color: isSelected
                        ? Colors.white
                        : past
                            ? AppTheme.borderMuted
                            : AppTheme.ink,
                  ),
                ),
              ),
            ),
          );
        }),
    ];
    return Column(
      children: [
        Row(
          children: [
            const SizedBox(width: 4),
            Expanded(
              child: Text(
                _monthYear(month),
                style: const TextStyle(
                  fontSize: AppFontSize.base + 1,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
            ),
            _ArrowButton(
              icon: Icons.chevron_left_rounded,
              label: 'Mês anterior',
              onTap: canGoBack ? () => onMonth(DateTime(month.year, month.month - 1)) : null,
            ),
            _ArrowButton(
              icon: Icons.chevron_right_rounded,
              label: 'Mês seguinte',
              onTap: () => onMonth(DateTime(month.year, month.month + 1)),
            ),
          ],
        ),
        const SizedBox(height: 6),
        Row(
          children: [
            for (final w in weekdayAbbrPt)
              Expanded(
                child: Text(
                  w,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: AppFontSize.xs,
                    letterSpacing: 0.4,
                    color: AppTheme.inkMuted,
                  ),
                ),
              ),
          ],
        ),
        const SizedBox(height: 6),
        GridView.count(
          crossAxisCount: 7,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          childAspectRatio: 1.1,
          children: cells,
        ),
      ],
    );
  }
}

class _MonthPicker extends StatelessWidget {
  final int year;
  final DateTime? selected;
  final ValueChanged<int> onYear;
  final ValueChanged<DateTime> onMonth;

  const _MonthPicker({
    required this.year,
    required this.selected,
    required this.onYear,
    required this.onMonth,
  });

  @override
  Widget build(BuildContext context) {
    final today = _today();
    final sel = selected;
    return Column(
      children: [
        Row(
          children: [
            const SizedBox(width: 4),
            Expanded(
              child: Text(
                '$year',
                style: const TextStyle(
                  fontSize: AppFontSize.base + 1,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
            ),
            _ArrowButton(
              icon: Icons.chevron_left_rounded,
              label: 'Ano anterior',
              onTap: year > today.year ? () => onYear(year - 1) : null,
            ),
            _ArrowButton(
              icon: Icons.chevron_right_rounded,
              label: 'Ano seguinte',
              onTap: () => onYear(year + 1),
            ),
          ],
        ),
        const SizedBox(height: 8),
        GridView.count(
          crossAxisCount: 3,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 8,
          crossAxisSpacing: 8,
          childAspectRatio: 2.4,
          children: [
            for (var m = 1; m <= 12; m++)
              Builder(builder: (context) {
                final past = year < today.year || (year == today.year && m < today.month);
                final isSelected = sel != null && sel.year == year && sel.month == m;
                return SnappyTap(
                  onTap: past ? null : () => onMonth(DateTime(year, m)),
                  child: Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: isSelected ? AppTheme.accentOliveDark : AppTheme.surface,
                      borderRadius: BorderRadius.circular(AppRadius.sm),
                    ),
                    child: Text(
                      monthNamesPt[m - 1].substring(0, 3),
                      style: TextStyle(
                        fontSize: AppFontSize.base,
                        fontWeight: isSelected ? FontWeight.w700 : FontWeight.w400,
                        color: isSelected
                            ? Colors.white
                            : past
                                ? AppTheme.borderMuted
                                : AppTheme.ink,
                      ),
                    ),
                  ),
                );
              }),
          ],
        ),
      ],
    );
  }
}

// ───────────────────────── região ─────────────────────────

class _RegionStep extends StatelessWidget {
  final TextEditingController controller;

  const _RegionStep({required this.controller});

  @override
  Widget build(BuildContext context) {
    final current = controller.text.trim();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          height: 48,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(AppRadius.pill),
            border: Border.all(color: AppTheme.accentOliveDark),
            boxShadow: AppTheme.searchBarShadow,
          ),
          child: Row(
            children: [
              const Icon(Icons.search_rounded, size: 18, color: AppTheme.inkMuted),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: controller,
                  textCapitalization: TextCapitalization.words,
                  style: const TextStyle(fontSize: AppFontSize.lg, color: AppTheme.ink),
                  decoration: const InputDecoration(
                    isCollapsed: true,
                    filled: false,
                    border: InputBorder.none,
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    hintText: 'Procurar concelho ou cidade',
                  ),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 20),
        const Text(
          'REGIÕES',
          style: TextStyle(
            fontSize: AppFontSize.xs,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.8,
            color: AppTheme.inkMuted,
          ),
        ),
        const SizedBox(height: 10),
        GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 8,
          crossAxisSpacing: 8,
          childAspectRatio: 3.3,
          children: [
            for (final region in _regions)
              Builder(builder: (context) {
                final selected = current == region;
                return Semantics(
                  button: true,
                  selected: selected,
                  child: SnappyTap(
                    onTap: () => controller.text = region,
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 160),
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      decoration: BoxDecoration(
                        color: selected ? AppColors.gray : Colors.white,
                        borderRadius: BorderRadius.circular(AppRadius.md),
                        border: Border.all(
                          color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                          width: selected ? 1.5 : 1,
                        ),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              region,
                              style: TextStyle(
                                fontSize: AppFontSize.base + 1,
                                fontWeight: selected ? FontWeight.w700 : FontWeight.w400,
                                color: AppTheme.ink,
                              ),
                            ),
                          ),
                          if (selected)
                            Container(
                              width: 20,
                              height: 20,
                              decoration: const BoxDecoration(
                                color: AppTheme.accentOliveDark,
                                shape: BoxShape.circle,
                              ),
                              child: const Icon(Icons.check_rounded, size: 13, color: Colors.white),
                            ),
                        ],
                      ),
                    ),
                  ),
                );
              }),
          ],
        ),
      ],
    );
  }
}

// ───────────────────────── convidados ─────────────────────────

class _GuestEstimate extends StatelessWidget {
  final int? value;
  final ValueChanged<int?> onChanged;

  const _GuestEstimate({required this.value, required this.onChanged});

  static const _scales = [
    (label: 'Até 50', caption: 'Íntimo', value: 50, min: 0, max: 50),
    (label: '50–150', caption: 'Médio', value: 100, min: 51, max: 150),
    (label: '150–250', caption: 'Grande', value: 200, min: 151, max: 250),
    (label: '250+', caption: 'Festa', value: 280, min: 251, max: 100000),
  ];

  @override
  Widget build(BuildContext context) {
    final current = value;
    Widget stepButton(IconData icon, String label, int? next) => Semantics(
          button: true,
          label: label,
          child: SnappyTap(
            onTap: () => onChanged(next),
            child: Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                border: Border.all(color: AppTheme.borderMuted),
              ),
              child: Icon(icon, size: 20, color: AppTheme.ink),
            ),
          ),
        );
    final tables = current == null ? null : (current / 10).ceil();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SizedBox(height: 16),
        Row(
          children: [
            stepButton(
              Icons.remove_rounded,
              'Menos 10',
              current == null || current <= 10 ? null : current - 10,
            ),
            Expanded(
              child: Column(
                children: [
                  Text(
                    current == null ? '—' : '$current',
                    style: const TextStyle(
                      fontSize: 56,
                      height: 64 / 56,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                      fontFeatures: [FontFeature.tabularFigures()],
                    ),
                  ),
                  const Text(
                    'convidados',
                    style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
                  ),
                ],
              ),
            ),
            stepButton(Icons.add_rounded, 'Mais 10', (current ?? 0) + 10),
          ],
        ),
        const SizedBox(height: 32),
        Row(
          children: [
            for (var i = 0; i < _scales.length; i++) ...[
              if (i > 0) const SizedBox(width: 8),
              Expanded(
                child: Builder(builder: (context) {
                  final s = _scales[i];
                  final selected = current != null && current >= s.min && current <= s.max;
                  return SnappyTap(
                    onTap: () => onChanged(s.value),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 160),
                      height: 64,
                      decoration: BoxDecoration(
                        color: selected ? AppColors.gray : Colors.white,
                        borderRadius: BorderRadius.circular(AppRadius.md),
                        border: Border.all(
                          color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                          width: selected ? 1.5 : 1,
                        ),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          FittedBox(
                            fit: BoxFit.scaleDown,
                            child: Text(
                              s.label,
                              style: const TextStyle(
                                fontSize: AppFontSize.base,
                                fontWeight: FontWeight.w700,
                                color: AppTheme.ink,
                              ),
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            s.caption,
                            style: TextStyle(
                              fontSize: AppFontSize.xs,
                              color: selected ? AppTheme.accentOliveDark : AppTheme.inkMuted,
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }),
              ),
            ],
          ],
        ),
        if (tables != null) ...[
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.surface,
              borderRadius: BorderRadius.circular(AppRadius.lg),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Icon(Icons.info_outline_rounded, size: 20, color: AppTheme.accentOliveDark),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    'Com cerca de $current convidados, contem com umas $tables mesas de 10 pessoas.',
                    style: const TextStyle(
                      fontSize: AppFontSize.base,
                      height: 20 / 14,
                      fontWeight: FontWeight.w300,
                      color: AppTheme.inkMuted,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ],
    );
  }
}

// ───────────────────────── já tratado ─────────────────────────

class _BookedStep extends ConsumerWidget {
  final Set<String> selected;
  final ValueChanged<String> onToggle;

  const _BookedStep({required this.selected, required this.onToggle});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ref.watch(partnerCategoryOptionsProvider).when(
          loading: () => const Padding(
            padding: EdgeInsets.all(24),
            child: Center(child: CircularProgressIndicator()),
          ),
          error: (err, st) => const Text(
            'Não foi possível carregar as categorias. Podes indicar isto depois em Definições.',
            style: TextStyle(color: AppTheme.inkMuted),
          ),
          data: (categories) {
            final major = _majorCategorySlugs
                .map((slug) => categories.where((c) => c.slug == slug).firstOrNull)
                .whereType<PartnerCategoryOption>()
                .toList();
            return Column(
              children: [
                for (final category in major) ...[
                  Builder(builder: (context) {
                    final on = selected.contains(category.slug);
                    return SnappyTap(
                      onTap: () => onToggle(category.slug),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 160),
                        height: 56,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        decoration: BoxDecoration(
                          color: on ? AppColors.gray : Colors.white,
                          borderRadius: BorderRadius.circular(AppRadius.md),
                          border: Border.all(
                            color: on ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                            width: on ? 1.5 : 1,
                          ),
                        ),
                        child: Row(
                          children: [
                            Expanded(
                              child: Text(
                                category.label,
                                style: const TextStyle(
                                  fontSize: AppFontSize.base + 1,
                                  fontWeight: FontWeight.w700,
                                  color: AppTheme.ink,
                                ),
                              ),
                            ),
                            Icon(
                              on ? Icons.check_circle_rounded : Icons.circle_outlined,
                              size: 22,
                              color: on ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                            ),
                          ],
                        ),
                      ),
                    );
                  }),
                  const SizedBox(height: 8),
                ],
              ],
            );
          },
        );
  }
}

// ───────────────────────── resumo final ─────────────────────────

/// Próximo passo sugerido para uma categoria ainda por tratar.
const _nextStepTitles = {
  'venue': 'Reservar o espaço',
  'photography': 'Escolher fotógrafo',
  'catering': 'Escolher o catering',
  'music_dj': 'Escolher música ou DJ',
};

typedef _NextStep = ({String title, String subtitle, VoidCallback onTap});

class _DoneView extends StatelessWidget {
  final String name;
  final Wedding wedding;
  final EventType eventType;
  final _DateMode dateMode;
  final Set<String> bookedSlugs;
  final bool saving;
  final void Function(String route, Object? extra) onStart;
  final VoidCallback onInvite;

  const _DoneView({
    required this.name,
    required this.wedding,
    required this.eventType,
    required this.dateMode,
    required this.bookedSlugs,
    required this.saving,
    required this.onStart,
    required this.onInvite,
  });

  @override
  Widget build(BuildContext context) {
    final date = wedding.weddingDate;
    final days = date?.difference(_today()).inDays;
    final firstOpen =
        _majorCategorySlugs.where((s) => !bookedSlugs.contains(s)).firstOrNull;
    final isWedding = eventType == EventType.wedding;
    final partner = wedding.partnerName2;

    final steps = <_NextStep>[
      if (firstOpen != null)
        (
          title: _nextStepTitles[firstOpen]!,
          subtitle: 'O primeiro passo do vosso plano',
          onTap: () => onStart('/partners', PartnerPickerArgs(categorySlug: firstOpen)),
        ),
      (
        title: 'Fazer a lista de convidados',
        subtitle: 'Comecem pela família mais próxima',
        onTap: () => onStart('/guests', null),
      ),
      (
        title: isWedding && partner != null
            ? 'Convidar $partner'
            : 'Convidar alguém para organizar',
        subtitle: 'Planeiam juntos, cada um no seu telemóvel',
        onTap: onInvite,
      ),
    ];

    final String daysValue;
    if (days == null || days < 0) {
      daysValue = '—';
    } else if (dateMode == _DateMode.month) {
      daysValue = '~${(days / 30).round()}';
    } else {
      daysValue = '$days';
    }

    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28, 28, 28, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: const BoxDecoration(
                    color: AppTheme.accentOliveDark,
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.check_rounded, color: Colors.white, size: 28),
                ),
              ),
              const SizedBox(height: 24),
              Text(
                'Tudo pronto, $name.',
                style: const TextStyle(
                  fontSize: AppFontSize.h1,
                  height: 34 / 28,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                '${isWedding ? 'O vosso casamento está montado' : 'O teu ${eventType.noun} está montado'}. Começamos pelo que tem prazo mais curto.',
                style: const TextStyle(
                  fontSize: AppFontSize.base + 1,
                  height: 22 / 15,
                  fontWeight: FontWeight.w300,
                  color: AppTheme.inkMuted,
                ),
              ),
              const SizedBox(height: 24),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(AppRadius.lg),
                  border: Border.all(color: AppTheme.borderMuted),
                ),
                child: IntrinsicHeight(
                  child: Row(
                    children: [
                      _Stat(
                        value: daysValue,
                        label: dateMode == _DateMode.month ? 'meses' : 'dias',
                      ),
                      const VerticalDivider(width: 1, color: AppTheme.borderMuted),
                      _Stat(
                        value: wedding.estimatedGuests?.toString() ?? '—',
                        label: 'convidados',
                      ),
                      const VerticalDivider(width: 1, color: AppTheme.borderMuted),
                      _Stat(value: wedding.location ?? '—', label: 'região'),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 28),
              const Text(
                'PRÓXIMOS PASSOS',
                style: TextStyle(
                  fontSize: AppFontSize.xs,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.8,
                  color: AppTheme.inkMuted,
                ),
              ),
              const SizedBox(height: 6),
              Expanded(
                child: ListView(
                  padding: EdgeInsets.zero,
                  children: [
                    for (var i = 0; i < steps.length; i++)
                      _NextStepRow(
                        index: i,
                        step: steps[i],
                        last: i == steps.length - 1,
                        enabled: !saving,
                      ),
                  ],
                ),
              ),
              _BigButton(
                label: firstOpen == 'venue'
                    ? 'Começar pelo espaço'
                    : 'Começar: ${steps.first.title.toLowerCase()}',
                loading: saving,
                onPressed: steps.first.onTap,
              ),
              const SizedBox(height: 8),
              TextButton(
                onPressed: saving ? null : () => onStart('/wedding', null),
                style: TextButton.styleFrom(
                  foregroundColor: AppTheme.ink,
                  textStyle: const TextStyle(fontSize: AppFontSize.base + 1),
                ),
                child: Text('Ir para o ${eventType.noun}'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _NextStepRow extends StatelessWidget {
  final int index;
  final _NextStep step;
  final bool last;
  final bool enabled;

  const _NextStepRow({
    required this.index,
    required this.step,
    required this.last,
    required this.enabled,
  });

  @override
  Widget build(BuildContext context) {
    final first = index == 0;
    return SnappyTap(
      onTap: enabled ? step.onTap : null,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 14),
        decoration: BoxDecoration(
          border: last
              ? null
              : const Border(bottom: BorderSide(color: AppTheme.borderMuted)),
        ),
        child: Row(
          children: [
            Container(
              width: 28,
              height: 28,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: first ? AppTheme.accentOliveDark : Colors.white,
                shape: BoxShape.circle,
                border: Border.all(
                  color: first ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                ),
              ),
              child: Text(
                '${index + 1}',
                style: TextStyle(
                  fontSize: AppFontSize.md,
                  fontWeight: FontWeight.w700,
                  color: first ? Colors.white : AppTheme.ink,
                ),
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    step.title,
                    style: const TextStyle(
                      fontSize: AppFontSize.base + 1,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    step.subtitle,
                    style: const TextStyle(
                      fontSize: AppFontSize.md,
                      color: AppTheme.inkMuted,
                    ),
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
          ],
        ),
      ),
    );
  }
}

class _Stat extends StatelessWidget {
  final String value;
  final String label;

  const _Stat({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(14, 12, 10, 12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            FittedBox(
              fit: BoxFit.scaleDown,
              alignment: Alignment.centerLeft,
              child: Text(
                value,
                style: const TextStyle(
                  fontSize: AppFontSize.xl,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
              ),
            ),
            const SizedBox(height: 2),
            Text(
              label,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
        ),
      ),
    );
  }
}

class _InviteSheet extends StatefulWidget {
  final String title;

  const _InviteSheet({required this.title});

  @override
  State<_InviteSheet> createState() => _InviteSheetState();
}

class _InviteSheetState extends State<_InviteSheet> {
  final _email = TextEditingController();

  @override
  void dispose() {
    _email.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(
        24,
        24,
        24,
        24 + MediaQuery.of(context).viewInsets.bottom,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            widget.title,
            style: const TextStyle(
              fontSize: AppFontSize.h3,
              fontWeight: FontWeight.w700,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 6),
          const Text(
            'Enviamos um convite para organizarem juntos.',
            style: TextStyle(fontWeight: FontWeight.w300, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 20),
          _LabeledField(
            label: 'Email',
            controller: _email,
            keyboardType: TextInputType.emailAddress,
            autofocus: true,
          ),
          const SizedBox(height: 20),
          _BigButton(
            label: 'Enviar convite',
            onPressed: () => Navigator.of(context).pop(_email.text.trim()),
          ),
        ],
      ),
    );
  }
}
