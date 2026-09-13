import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

class RoleSelectionScreen extends StatefulWidget {
  const RoleSelectionScreen({super.key});

  @override
  State<RoleSelectionScreen> createState() => _RoleSelectionScreenState();
}

class _RoleSelectionScreenState extends State<RoleSelectionScreen> {
  UserRole? _selected;

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const CircleBackButton(),
              const SizedBox(height: 8),
              Text(
                'Como te vamos ajudar?',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 24),
              RoleSelectorCard(
                icon: Icons.favorite_outline,
                label: 'Vou casar-me',
                selected: _selected == UserRole.couple,
                onTap: () => setState(() => _selected = UserRole.couple),
              ),
              const SizedBox(height: 12),
              RoleSelectorCard(
                icon: Icons.storefront_outlined,
                label: 'Sou parceiro',
                selected: _selected == UserRole.partner,
                onTap: () => setState(() => _selected = UserRole.partner),
              ),
              const SizedBox(height: 12),
              RoleSelectorCard(
                icon: Icons.mail_outline,
                label: 'Sou convidado',
                selected: _selected == UserRole.guest,
                onTap: () => setState(() => _selected = UserRole.guest),
              ),
              const Spacer(),
              FilledButton(
                onPressed: _selected == null
                    ? null
                    // A role vai na própria URL (`?role=...`), não em `extra`
                    // — `extra` do go_router não sobrevive de forma fiável no
                    // Flutter Web (é só um objeto Dart em memória, não faz
                    // parte do URL), o que fazia o registo cair sempre para
                    // `UserRole.couple` independentemente do que fosse
                    // escolhido aqui. Ver router.dart, rota `/register`.
                    : () => context.push('/register?role=${_selected!.name}'),
                style: FilledButton.styleFrom(
                  minimumSize: const Size.fromHeight(52),
                ),
                child: const Text('Continuar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
