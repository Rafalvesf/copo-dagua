import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../shared/widgets/cards.dart';

class RoleSelectionScreen extends StatefulWidget {
  const RoleSelectionScreen({super.key});

  @override
  State<RoleSelectionScreen> createState() => _RoleSelectionScreenState();
}

class _RoleSelectionScreenState extends State<RoleSelectionScreen> {
  UserRole? _selected;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Como te vamos ajudar?', style: Theme.of(context).textTheme.headlineSmall),
            const SizedBox(height: 24),
            RoleSelectorCard(
              emoji: '💍',
              label: 'Vou casar-me',
              selected: _selected == UserRole.couple,
              onTap: () => setState(() => _selected = UserRole.couple),
            ),
            const SizedBox(height: 12),
            RoleSelectorCard(
              emoji: '🧑‍💼',
              label: 'Sou fornecedor',
              selected: _selected == UserRole.supplier,
              onTap: () => setState(() => _selected = UserRole.supplier),
            ),
            const Spacer(),
            FilledButton(
              onPressed: _selected == null ? null : () => context.push('/register', extra: _selected),
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52)),
              child: const Text('Continuar'),
            ),
          ],
        ),
      ),
    );
  }
}
