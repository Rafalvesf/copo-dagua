import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/snappy_tap.dart';
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
              const SizedBox(height: 16),
              authTitle('Como vais usar a app?', 'Podes ter mais do que um papel mais tarde.'),
              const SizedBox(height: 24),
              _RoleCard(
                icon: Icons.celebration_outlined,
                title: 'Vou organizar um evento',
                subtitle: 'Casamento, batizado, aniversário…',
                selected: _selected == UserRole.couple,
                onTap: () => setState(() => _selected = UserRole.couple),
              ),
              const SizedBox(height: 12),
              _RoleCard(
                icon: Icons.storefront_outlined,
                title: 'Sou parceiro',
                subtitle: 'Espaços, catering, fotografia e outros serviços',
                selected: _selected == UserRole.partner,
                onTap: () => setState(() => _selected = UserRole.partner),
              ),
              const SizedBox(height: 12),
              _RoleCard(
                icon: Icons.mail_outline,
                title: 'Fui convidado',
                subtitle: 'Tenho um código ou um link de convite',
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

Widget authTitle(String title, String subtitle) => Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontSize: AppFontSize.h1, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        Text(subtitle, style: const TextStyle(fontSize: AppFontSize.base + 1, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted)),
      ],
    );

class _RoleCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final bool selected;
  final VoidCallback onTap;

  const _RoleCard({required this.icon, required this.title, required this.subtitle, required this.selected, required this.onTap});

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
            color: selected ? const Color(0xFFF6F8F2) : Colors.white,
            borderRadius: BorderRadius.circular(AppRadius.lg),
            border: Border.all(color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted, width: selected ? 1.5 : 1),
            boxShadow: selected ? AppTheme.searchBarShadow : null,
          ),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: selected ? AppTheme.accentOliveDark : AppColors.gray,
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(icon, color: selected ? Colors.white : AppTheme.accentOliveDark),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    Text(subtitle, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
