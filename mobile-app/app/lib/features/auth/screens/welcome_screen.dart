import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(),
              const GradientMark(size: 72, icon: Icons.water_drop_outlined),
              const SizedBox(height: 20),
              Text(
                "Copo d'Água",
                style: Theme.of(context).textTheme.headlineMedium,
              ),
              const SizedBox(height: 8),
              Text(
                'O teu casamento, num só lugar',
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
