import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Início 3 · Tipo de conta" — igual ao canvas.
class RoleSelectionScreen extends StatefulWidget {
  const RoleSelectionScreen({super.key});

  @override
  State<RoleSelectionScreen> createState() => _RoleSelectionScreenState();
}

class _RoleSelectionScreenState extends State<RoleSelectionScreen> {
  UserRole? _selected = UserRole.guest;

  @override
  Widget build(BuildContext context) {
    return AuthPage(
      children: [
        const AuthHeading(title: 'Como vais usar a app?', subtitle: 'Escolhe o tipo de conta.'),
        const SizedBox(height: 24),
        for (final (role, icon, title, subtitle) in const [
          // Conta única (2026-11): o mesmo utilizador organiza os seus
          // eventos e junta-se aos dos outros (internamente `guest` até
          // criar um evento — ver `become_organizer`, migração 141).
          (UserRole.guest, Icons.celebration_outlined, 'Utilizador', 'Organiza os teus eventos e junta-te aos dos outros'),
          (UserRole.partner, Icons.storefront_outlined, 'Parceiro', 'Espaços, catering, fotografia e outros serviços'),
        ])
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: _RoleCard(
              icon: icon,
              title: title,
              subtitle: subtitle,
              selected: _selected == role,
              onTap: () => setState(() => _selected = role),
            ),
          ),
      ],
      footer: [
        AuthPrimaryButton(
          label: 'Continuar',
          // A role vai na própria URL (`?role=...`) — `extra` não sobrevive
          // no Flutter Web. Ver router.dart, rota `/register`.
          onPressed: _selected == null ? null : () => context.push('/register?role=${_selected!.name}'),
        ),
      ],
    );
  }
}

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
            color: selected ? AppColors.gray : const Color(0xFFF2F0EB),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: selected ? AppTheme.accentOliveDark : Colors.transparent, width: 1.5),
          ),
          child: Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: selected ? AppTheme.accentOliveDark : Colors.white,
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(icon, color: selected ? Colors.white : AppTheme.accentOliveDark),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 3),
                    Text(subtitle, style: const TextStyle(fontSize: 13, height: 18 / 13, color: AppTheme.inkMuted)),
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
