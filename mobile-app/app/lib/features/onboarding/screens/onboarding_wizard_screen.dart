import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/progress.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_onboarding/screens/partner_welcome_screen.dart';

const _totalSteps = 7;

/// Categorias "grandes" perguntadas logo no onboarding (RN37/38 do motor
/// de tarefas) — as restantes ficam para `/service-preferences`, mais
/// tarde, para não alongar o wizard.
const _majorCategorySlugs = ['venue', 'photography', 'catering', 'music_dj'];

class OnboardingWizardScreen extends ConsumerStatefulWidget {
  const OnboardingWizardScreen({super.key});

  @override
  ConsumerState<OnboardingWizardScreen> createState() => _OnboardingWizardScreenState();
}

class _OnboardingWizardScreenState extends ConsumerState<OnboardingWizardScreen> {
  int _step = 0;
  bool _done = false;
  bool _saving = false;
  bool _ownNamePrefilled = false;
  Wedding? _createdWedding;
  final Set<String> _alreadyBookedSlugs = {};

  final _ownName = TextEditingController();
  final _ownAge = TextEditingController();
  final _partnerName = TextEditingController();
  final _partnerAge = TextEditingController();
  final _location = TextEditingController();
  final _guests = TextEditingController();
  final _budget = TextEditingController();
  final _partnerEmail = TextEditingController();
  DateTime? _weddingDate;
  bool _dateUnknown = false;

  @override
  void dispose() {
    _ownName.dispose();
    _ownAge.dispose();
    _partnerName.dispose();
    _partnerAge.dispose();
    _location.dispose();
    _guests.dispose();
    _budget.dispose();
    _partnerEmail.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final profile = auth.profile;

    if (profile == null) {
      return const GradientScaffold(
        background: AppBackground.hero,
        body: Center(child: CircularProgressIndicator()),
      );
    }

    if (!_ownNamePrefilled) {
      _ownName.text = profile.fullName.split(' ').first;
      _ownNamePrefilled = true;
    }

    if (profile.role == UserRole.partner) {
      return const PartnerWelcomeScreen();
    }

    if (_createdWedding != null) {
      return _AlreadyBookedStep(
        weddingName: _createdWedding!.displayNames,
        selected: _alreadyBookedSlugs,
        saving: _saving,
        onToggle: (slug) => setState(() {
          if (!_alreadyBookedSlugs.remove(slug)) _alreadyBookedSlugs.add(slug);
        }),
        onContinue: () async {
          setState(() => _saving = true);
          final wedding = _createdWedding!;
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
          if (!context.mounted) return;
          await ref.read(authControllerProvider.notifier).completeOnboarding();
          if (!context.mounted) return;
          context.go('/home');
          // ignore: use_build_context_synchronously
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Casamento "${wedding.displayNames}" criado.')),
          );
        },
      );
    }

    if (_done) {
      return GradientScaffold(
        background: AppBackground.mood,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Tudo pronto, ${_ownName.text.trim().isEmpty ? profile.fullName.split(' ').first : _ownName.text.trim()}!',
                    style: Theme.of(context).textTheme.headlineSmall),
                const SizedBox(height: 8),
                const Text(
                  'O vosso casamento já tem um lugar só dele.',
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 24),
                PrimaryButton(
                  label: 'Ver o meu casamento',
                  loading: _saving,
                  onPressed: () async {
                    setState(() => _saving = true);
                    try {
                      final wedding = await ref.read(weddingControllerProvider.notifier).create(
                        partnerName1: _ownName.text.trim().isEmpty
                            ? profile.fullName.split(' ').first
                            : _ownName.text.trim(),
                        partnerName2: _partnerName.text.trim().isEmpty ? null : _partnerName.text.trim(),
                        partner1Age: int.tryParse(_ownAge.text.trim()),
                        partner2Age: int.tryParse(_partnerAge.text.trim()),
                        weddingDate: _dateUnknown ? null : _weddingDate,
                        location: _location.text.trim().isEmpty ? null : _location.text.trim(),
                        estimatedGuests: int.tryParse(_guests.text.trim()),
                        estimatedBudget: double.tryParse(_budget.text.trim()),
                      );
                      if (_partnerEmail.text.trim().isNotEmpty) {
                        await ref.read(weddingControllerProvider.notifier).inviteCollaborator(
                          weddingId: wedding.id,
                          email: _partnerEmail.text.trim(),
                        );
                      }
                      if (!context.mounted) return;
                      setState(() {
                        _createdWedding = wedding;
                        _saving = false;
                      });
                    } catch (_) {
                      if (!context.mounted) return;
                      setState(() => _saving = false);
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Não foi possível criar o casamento. Tenta novamente.')),
                      );
                    }
                  },
                ),
              ],
            ),
          ),
        ),
      );
    }

    return GradientScaffold(
      background: AppBackground.hero,
      extendBodyBehindAppBar: false,
      appBar: AppBar(automaticallyImplyLeading: false),
      // `SafeArea` + a mesma margem inferior (40) do botão "Começar" em
      // `_IntroView` (`partner_welcome_screen.dart`) — mesma correção,
      // pedida para os dois assistentes por "rule 1: same locations
      // same layout and architecture".
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 24, 24, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              StepProgressBar(totalSteps: _totalSteps, currentStep: _step),
              const SizedBox(height: 24),
              Expanded(child: _buildStep(context)),
              _buildFooter(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStep(BuildContext context) {
    switch (_step) {
      case 0:
        return _StepScaffold(
          question: 'Fala-nos sobre ti',
          subtitle: 'O teu nome e idade.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              AuthTextField(label: 'O teu nome', controller: _ownName),
              const SizedBox(height: 12),
              AuthTextField(label: 'A tua idade', controller: _ownAge, keyboardType: TextInputType.number),
            ],
          ),
        );
      case 1:
        return _StepScaffold(
          question: 'E sobre o/a teu/a parceiro/a?',
          subtitle: 'Podes deixar em branco por agora.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              AuthTextField(label: 'Nome do/a parceiro/a', controller: _partnerName),
              const SizedBox(height: 12),
              AuthTextField(label: 'Idade do/a parceiro/a', controller: _partnerAge, keyboardType: TextInputType.number),
            ],
          ),
        );
      case 2:
        return _StepScaffold(
          question: 'Quando é o grande dia?',
          child: DatePickerField(
            label: 'Data do casamento',
            value: _weddingDate,
            allowUnknown: true,
            unknown: _dateUnknown,
            onChanged: (d) => setState(() => _weddingDate = d),
            onUnknownChanged: (v) => setState(() => _dateUnknown = v),
          ),
        );
      case 3:
        return _StepScaffold(
          question: 'Em que parte do país vai ser o casamento?',
          subtitle: 'Localização aproximada — podes afinar depois.',
          child: AuthTextField(label: 'Localização', controller: _location),
        );
      case 4:
        return _StepScaffold(
          question: 'Mais ou menos quantos convidados?',
          subtitle: 'Só uma estimativa — a lista real fica em Convidados.',
          child: AuthTextField(label: 'Nº estimado de convidados', controller: _guests, keyboardType: TextInputType.number),
        );
      case 5:
        return _StepScaffold(
          question: 'Qual é a ideia de orçamento total?',
          subtitle: 'Opcional — editável mais tarde em Orçamento.',
          child: AuthTextField(label: 'Orçamento estimado (€)', controller: _budget, keyboardType: TextInputType.number),
        );
      default:
        return _StepScaffold(
          question: 'Queres convidar o/a teu/a parceiro/a para colaborar?',
          subtitle: 'Nunca bloqueia o avanço — podes fazer isto depois.',
          child: AuthTextField(label: 'Email do/a parceiro/a', controller: _partnerEmail, keyboardType: TextInputType.emailAddress),
        );
    }
  }

  Widget _buildFooter() {
    final isLast = _step == _totalSteps - 1;
    void advance() {
      if (isLast) {
        setState(() => _done = true);
      } else {
        setState(() => _step++);
      }
    }

    return WizardFooter(
      onBack: _step == 0 ? null : () => setState(() => _step--),
      onSkip: advance,
      continueButton: ArrowCtaButton(
        label: isLast ? 'Concluir' : 'Continuar',
        onTap: advance,
      ),
    );
  }
}

/// Último passo, já com o casamento real criado (`weddingId` real —
/// escreve direto em `wedding_service_preferences`, ver
/// `039_task_engine.sql`) — pergunta só as 4 categorias grandes para não
/// alongar o wizard; as restantes ficam para `/service-preferences`. Sem
/// isto, o motor de tarefas sugeriria explorar/pedir orçamento a
/// categorias que o casal já tinha tratado antes de sequer abrir a app.
class _AlreadyBookedStep extends ConsumerWidget {
  final String weddingName;
  final Set<String> selected;
  final bool saving;
  final ValueChanged<String> onToggle;
  final VoidCallback onContinue;

  const _AlreadyBookedStep({
    required this.weddingName,
    required this.selected,
    required this.saving,
    required this.onToggle,
    required this.onContinue,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final categoriesAsync = ref.watch(partnerCategoryOptionsProvider);

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
              Text('Já têm alguma coisa tratada?', style: Theme.of(context).textTheme.headlineSmall),
              const SizedBox(height: 6),
              Text(
                'Para não vos sugerirmos o que já resolveram. Podem ajustar isto e o resto depois em Definições.',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              const SizedBox(height: 24),
              Expanded(
                child: categoriesAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (err, st) => const Text('Não foi possível carregar as categorias.'),
                  data: (categories) {
                    final major = _majorCategorySlugs
                        .map((slug) => categories.where((c) => c.slug == slug).firstOrNull)
                        .whereType<PartnerCategoryOption>()
                        .toList();
                    return ListView(
                      children: [
                        for (final category in major) ...[
                          _AlreadyBookedRow(
                            label: category.label,
                            checked: selected.contains(category.slug),
                            onTap: () => onToggle(category.slug),
                          ),
                          const SizedBox(height: 10),
                        ],
                      ],
                    );
                  },
                ),
              ),
              PrimaryButton(
                label: 'Concluir',
                loading: saving,
                onPressed: onContinue,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _AlreadyBookedRow extends StatelessWidget {
  final String label;
  final bool checked;
  final VoidCallback onTap;

  const _AlreadyBookedRow({required this.label, required this.checked, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: checked ? AppTheme.ink : Colors.transparent, width: 1.5),
        ),
        child: Row(
          children: [
            Icon(
              checked ? Icons.check_circle : Icons.circle_outlined,
              size: 22,
              color: checked ? AppTheme.ink : AppTheme.inkMuted,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text(label, style: const TextStyle(fontWeight: FontWeight.w600)),
            ),
          ],
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
