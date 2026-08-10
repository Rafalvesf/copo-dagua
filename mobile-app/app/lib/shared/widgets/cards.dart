import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import 'rsvp_status_badge.dart';

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
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: selected ? colorScheme.primary : colorScheme.outlineVariant,
            width: selected ? 2 : 1,
          ),
          color: selected ? colorScheme.primaryContainer.withValues(alpha: 0.4) : null,
        ),
        child: Row(
          children: [
            Icon(icon, size: 24, color: colorScheme.primary),
            const SizedBox(width: 12),
            Expanded(child: Text(label, style: Theme.of(context).textTheme.titleMedium)),
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

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: onTap,
      leading: const CircleAvatar(child: Icon(Icons.person_outline)),
      title: Text(guest.name),
      subtitle: Text(guest.group.isEmpty ? 'Sem grupo' : guest.group),
      trailing: RsvpStatusBadge(status: guest.rsvpStatus),
    );
  }
}
