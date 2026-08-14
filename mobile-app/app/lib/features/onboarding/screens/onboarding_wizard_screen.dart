import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/progress.dart';

const _totalSteps = 7;

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
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    if (!_ownNamePrefilled) {
      _ownName.text = profile.fullName.split(' ').first;
      _ownNamePrefilled = true;
    }

    if (profile.role == UserRole.partner) {
      return Scaffold(
        appBar: AppBar(
          actions: [
            TextButton(
              onPressed: () => ref.read(authControllerProvider.notifier).logout(),
              child: const Text('Sair'),
            ),
          ],
        ),
        body: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Bem-vindo(a), ${profile.fullName.split(' ').first}!',
                style: Theme.of(context).textTheme.headlineSmall,
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 12),
              const Text(
                'O wizard completo de perfil de parceiro (categorias, portefólio, '
                'dados fiscais) ainda está em desenvolvimento. Por agora, entra '
                'para veres a área do parceiro.',
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 24),
              PrimaryButton(
                label: 'Entrar',
                loading: _saving,
                onPressed: _saving
                    ? null
                    : () async {
                        setState(() => _saving = true);
                        await ref
                            .read(authControllerProvider.notifier)
                            .completePartnerOnboarding();
                      },
              ),
            ],
          ),
        ),
      );
    }

    if (_done) {
      return Scaffold(
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
                    final wedding = await MockBackend.instance.createWedding(
                      ownerId: profile.id,
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
                      await MockBackend.instance.inviteCollaborator(
                        weddingId: wedding.id,
                        email: _partnerEmail.text.trim(),
                      );
                    }
                    if (!context.mounted) return;
                    final updatedProfile = MockBackend.instance.getProfile(profile.id);
                    ref.read(authControllerProvider.notifier).completeOnboarding(updatedProfile);
                    context.go('/home');
                    // ignore: use_build_context_synchronously
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Casamento "${wedding.displayNames}" criado.')),
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(
        leading: _step == 0
            ? null
            : IconButton(icon: const Icon(Icons.arrow_back), onPressed: () => setState(() => _step--)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
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
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Row(
        children: [
          TextButton(
            onPressed: () {
              if (isLast) {
                setState(() => _done = true);
              } else {
                setState(() => _step++);
              }
            },
            child: const Text('Saltar'),
          ),
          const Spacer(),
          FilledButton(
            onPressed: () {
              if (isLast) {
                setState(() => _done = true);
              } else {
                setState(() => _step++);
              }
            },
            child: Text(isLast ? 'Concluir' : 'Continuar'),
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
