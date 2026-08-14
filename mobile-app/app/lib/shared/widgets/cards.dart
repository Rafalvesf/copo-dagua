import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'rsvp_status_badge.dart';
import 'snappy_tap.dart';

/// Fundo fotográfico para cartões de destaque (hero, parceiros): a
/// foto preenche o cartão todo e um gradiente escuro no fundo garante
/// legibilidade ao texto branco sobreposto, mesmo com fotos muito
/// claras. `fallbackColor` cobre o tempo de carregamento e falhas de
/// rede, para o cartão nunca ficar em branco.
class PhotoCardBackground extends StatelessWidget {
  final String imageUrl;
  final Color fallbackColor;

  const PhotoCardBackground({
    super.key,
    required this.imageUrl,
    required this.fallbackColor,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Container(color: fallbackColor),
        Image.network(
          imageUrl,
          fit: BoxFit.cover,
          loadingBuilder: (context, child, progress) =>
              progress == null ? child : const SizedBox.shrink(),
          errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
        ),
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [
                Colors.black.withValues(alpha: 0.12),
                Colors.black.withValues(alpha: 0.18),
                Colors.black.withValues(alpha: 0.85),
              ],
              stops: const [0.0, 0.25, 1.0],
            ),
          ),
        ),
      ],
    );
  }
}

class RoleSelectorCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const RoleSelectorCard({
    super.key,
    required this.icon,
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: selected ? colorScheme.primary : colorScheme.outlineVariant,
            width: selected ? 2 : 1,
          ),
          color: selected
              ? colorScheme.primaryContainer.withValues(alpha: 0.4)
              : null,
        ),
        child: Row(
          children: [
            Icon(icon, size: 24, color: colorScheme.primary),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                label,
                style: Theme.of(context).textTheme.titleMedium,
              ),
            ),
            if (selected) Icon(Icons.check_circle, color: colorScheme.primary),
          ],
        ),
      ),
    );
  }
}

class GuestListItem extends StatelessWidget {
  final Guest guest;
  final VoidCallback onTap;

  const GuestListItem({super.key, required this.guest, required this.onTap});

  String get _adultsLabel => guest.plusOneAllowed ? '2 adultos' : '1 adulto';

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: hovered
              ? AppTheme.cardShadowStrong
              : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 24,
              backgroundColor: AppColors.green,
              backgroundImage: NetworkImage(
                'https://api.dicebear.com/7.x/notionists/png?seed=${guest.id}',
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    guest.name,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 15,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '${guest.group.isEmpty ? 'Sem grupo' : guest.group} · $_adultsLabel',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                  ),
                ],
              ),
            ),
            RsvpStatusBadge(status: guest.rsvpStatus, showIcon: true),
          ],
        ),
      ),
    );
  }
}
