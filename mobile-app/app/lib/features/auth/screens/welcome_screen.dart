import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../shared/widgets/buttons.dart';

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
              Icon(Icons.local_drink_outlined, size: 64, color: Theme.of(context).colorScheme.primary),
              const SizedBox(height: 16),
              Text(
                "Copo d'Água",
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.bold),
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
                style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(52)),
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
