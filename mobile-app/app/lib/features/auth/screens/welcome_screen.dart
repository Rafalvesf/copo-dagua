import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(),
              Text(
                'Tchin Tchin',
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontSize: 44,
                  fontWeight: FontWeight.w700,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'O teu evento, num só lugar',
                style: Theme.of(context).textTheme.bodyLarge,
                textAlign: TextAlign.center,
              ),
              const Spacer(),
              PrimaryButton(label: 'Entrar', onPressed: () => context.push('/login')),
              const SizedBox(height: 12),
              OutlinedButton(
                onPressed: () => context.push('/role'),
                child: const Text('Criar conta'),
              ),
              const SizedBox(height: 16),
            ],
          ),
        ),
      ),
    );
  }
}
