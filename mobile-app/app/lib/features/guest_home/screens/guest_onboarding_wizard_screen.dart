import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/progress.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Wizard "Vais ao casamento?" — pedido explícito do utilizador: assim
/// que uma conta fica ligada a uma linha de `guests` (por código ou por
/// convite individual, `071_guest_join_mode_and_invite_token.sql`),
/// mostrar isto uma única vez antes do resto do Modo convidado. Mesmo
/// padrão estrutural de `onboarding_wizard_screen.dart` (`_step` int +
/// `WizardFooter` + `StepProgressBar`, sem `PageView`), mas os passos a
/// mostrar dependem dos dados do convidado (o passo de acompanhante só
/// aparece se [guest.plusOneAllowed]).
class GuestOnboardingWizardScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final Guest guest;

  const GuestOnboardingWizardScreen({super.key, required this.weddingId, required this.guest});

  @override
  ConsumerState<GuestOnboardingWizardScreen> createState() => _GuestOnboardingWizardScreenState();
}

enum _Step { attending, plusOne, menu, allergies, side, relationship }

class _GuestOnboardingWizardScreenState extends ConsumerState<GuestOnboardingWizardScreen> {
  late final List<_Step> _steps = [
    _Step.attending,
    if (widget.guest.plusOneAllowed) _Step.plusOne,
    _Step.menu,
    _Step.allergies,
    _Step.side,
    _Step.relationship,
  ];
  int _index = 0;
  bool _saving = false;

  final _plusOneName = TextEditingController();
  final _menu = TextEditingController();
  final _allergies = TextEditingController(text: '');
  WeddingSide? _side;
  String? _relationship;

  @override
  void initState() {
    super.initState();
    _allergies.text = widget.guest.dietaryRestrictions ?? '';
    _side = widget.guest.side;
  }

  @override
  void dispose() {
    _plusOneName.dispose();
    _menu.dispose();
    _allergies.dispose();
    super.dispose();
  }

  Future<void> _finish({required bool attending}) async {
    setState(() => _saving = true);
    try {
      await completeGuestOnboarding(
        attending: attending,
        plusOneName: _plusOneName.text.trim().isEmpty ? null : _plusOneName.text.trim(),
        menuSelection: _menu.text.trim().isEmpty ? null : _menu.text.trim(),
        dietaryRestrictions: _allergies.text.trim().isEmpty ? null : _allergies.text.trim(),
        side: _side ?? widget.guest.side,
        groupLabel: _relationship,
      );
      ref.invalidate(myGuestRowProvider(widget.weddingId));
      if (!mounted) return;
      context.go('/guest-home/${widget.weddingId}');
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final step = _steps[_index];

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
              StepProgressBar(totalSteps: _steps.length, currentStep: _index),
              const SizedBox(height: 24),
              Expanded(child: _buildStep(step)),
              if (step != _Step.attending) _buildFooter(),
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
          question: 'Vais ao casamento?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              PrimaryButton(
                label: 'Sim, vou!',
                loading: _saving,
                onPressed: () => setState(() => _index++),
              ),
              const SizedBox(height: 12),
              OutlinedButton(
                onPressed: _saving ? null : () => _finish(attending: false),
                child: const Text('Não vou poder ir'),
              ),
            ],
          ),
        );
      case _Step.plusOne:
        return _StepScaffold(
          question: 'Levas alguém contigo?',
          subtitle: 'Deixa em branco se vais sozinho/a.',
          child: AuthTextField(label: 'Nome do acompanhante', controller: _plusOneName),
        );
      case _Step.menu:
        return _StepScaffold(
          question: 'Qual o menu de cada pessoa?',
          subtitle: 'Opcional — os noivos podem confirmar contigo depois.',
          child: AuthTextField(label: 'Menu escolhido', controller: _menu),
        );
      case _Step.allergies:
        return _StepScaffold(
          question: 'Alguma intolerância ou alergia?',
          subtitle: 'Deixa em branco se não tiveres nenhuma.',
          child: AuthTextField(label: 'Alergias ou restrições', controller: _allergies),
        );
      case _Step.side:
        return _StepScaffold(
          question: 'És do lado da noiva, do noivo ou de ambos?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _ChoiceRow(
                label: 'Lado da noiva',
                selected: _side == WeddingSide.bride,
                onTap: () => setState(() => _side = WeddingSide.bride),
              ),
              const SizedBox(height: 10),
              _ChoiceRow(
                label: 'Lado do noivo',
                selected: _side == WeddingSide.groom,
                onTap: () => setState(() => _side = WeddingSide.groom),
              ),
              const SizedBox(height: 10),
              _ChoiceRow(
                label: 'Ambos',
                selected: _side == WeddingSide.both,
                onTap: () => setState(() => _side = WeddingSide.both),
              ),
            ],
          ),
        );
      case _Step.relationship:
        return _StepScaffold(
          question: 'Como conheces o casal?',
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

  Widget _buildFooter() {
    final isLast = _index == _steps.length - 1;
    return WizardFooter(
      onBack: () => setState(() => _index--),
      continueButton: ArrowCtaButton(
        label: isLast ? 'Concluir' : 'Continuar',
        onTap: isLast ? () => _finish(attending: true) : () => setState(() => _index++),
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
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: selected ? AppTheme.ink : Colors.transparent, width: 1.5),
        ),
        child: Row(
          children: [
            Icon(
              selected ? Icons.check_circle : Icons.circle_outlined,
              size: 22,
              color: selected ? AppTheme.ink : AppTheme.inkMuted,
            ),
            const SizedBox(width: 12),
            Expanded(child: Text(label, style: const TextStyle(fontWeight: FontWeight.w600))),
          ],
        ),
      ),
    );
  }
}
