import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/rsvp_status_badge.dart';
import '../../../shared/widgets/snappy_tap.dart';

String _formatHistoryDate(DateTime dt) {
  final local = dt.toLocal();
  final hour = local.hour.toString().padLeft(2, '0');
  final minute = local.minute.toString().padLeft(2, '0');
  return '${local.day} de ${monthNamesPt[local.month - 1].toLowerCase()} de ${local.year}, $hour:$minute';
}

class GuestDetailScreen extends ConsumerWidget {
  final String guestId;

  const GuestDetailScreen({super.key, required this.guestId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(guestsControllerProvider);
    final guest = state.guests.where((g) => g.id == guestId).firstOrNull;

    if (guest == null) {
      return GradientScaffold(
        background: AppBackground.subtle,
        body: const Center(child: Text('Convidado não encontrado.')),
      );
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            _GuestDetailHeader(guest: guest),
            Expanded(child: _GuestDetailBody(guest: guest)),
          ],
        ),
      ),
    );
  }
}

class _GuestDetailHeader extends ConsumerWidget {
  final Guest guest;

  const _GuestDetailHeader({required this.guest});

  Future<void> _copyInviteLink(BuildContext context) async {
    final link = '${Uri.base.origin}/rsvp/${guest.rsvpToken}';
    await Clipboard.setData(ClipboardData(text: link));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Link de convite copiado.')),
      );
    }
  }

  Future<void> _edit(BuildContext context, WidgetRef ref) async {
    final result = await showGuestFormSheet(context, existing: guest);
    if (result == null) return;
    ref.read(guestsControllerProvider.notifier).updateGuest(
          guest.copyWith(
            name: result.name,
            email: result.email,
            phone: result.phone,
            group: result.group,
            side: result.side,
            plusOneAllowed: result.plusOneAllowed,
          ),
        );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        20,
        AppTheme.screenMargin,
        0,
      ),
      child: Row(
        children: [
          const CircleBackButton(),
          const Spacer(),
          SnappyTap(
            onTap: () => _edit(context, ref),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: AppTheme.surface,
                borderRadius: BorderRadius.circular(999),
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.edit_outlined, size: 16, color: AppTheme.ink),
                  SizedBox(width: 6),
                  Text(
                    'Editar',
                    style: TextStyle(fontWeight: FontWeight.w600, color: AppTheme.ink),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(width: 8),
          PopupMenuButton<String>(
            padding: EdgeInsets.zero,
            icon: const Icon(Icons.more_vert, color: AppTheme.ink),
            onSelected: (value) {
              if (value == 'copy_link') _copyInviteLink(context);
            },
            itemBuilder: (context) => [
              PopupMenuItem(
                value: 'copy_link',
                enabled: guest.rsvpToken != null,
                child: const Text('Copiar link de convite'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _GuestDetailBody extends ConsumerStatefulWidget {
  final Guest guest;

  const _GuestDetailBody({required this.guest});

  @override
  ConsumerState<_GuestDetailBody> createState() => _GuestDetailBodyState();
}

class _GuestDetailBodyState extends ConsumerState<_GuestDetailBody> {
  // Convidados não têm nenhum conceito de "favorito" na base de dados —
  // só um toque visual local, pedido explícito do utilizador (imagem de
  // referência). Não persiste, por isso volta sempre a `false` ao
  // reabrir o perfil.
  bool _favorited = false;

  Guest get guest => widget.guest;

  Future<void> _launchContact(BuildContext context, Uri uri) async {
    final opened = await launchUrl(uri, mode: LaunchMode.externalApplication);
    if (!opened && context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível abrir a aplicação.')),
      );
    }
  }

  Future<void> _pickRsvpStatus() async {
    final result = await showModalBottomSheet<RsvpStatus>(
      context: context,
      builder: (context) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            for (final status in RsvpStatus.values)
              ListTile(
                leading: Icon(rsvpStatusIcon(status), color: rsvpStatusStyle(status).$1),
                title: Text(rsvpStatusStyle(status).$2),
                onTap: () => Navigator.of(context).pop(status),
              ),
          ],
        ),
      ),
    );
    if (result == null) return;
    ref.read(guestsControllerProvider.notifier).simulateRsvp(guest.id, result);
  }

  Future<void> _editNotes() async {
    final controller = TextEditingController(text: guest.notes ?? '');
    final result = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Notas'),
        content: TextField(
          controller: controller,
          maxLines: 4,
          autofocus: true,
          decoration: const InputDecoration(
            hintText: 'Ex: chega de carro, tem alergia a marisco...',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text.trim()),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (result == null) return;
    ref
        .read(guestsControllerProvider.notifier)
        .updateGuest(guest.copyWith(notes: result.isEmpty ? null : result));
  }

  Future<void> _confirmRemove() async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Remover convidado'),
        content: Text('Remover ${guest.name} da lista de convidados? Esta ação não pode ser desfeita.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: AppStatusColors.declined),
            onPressed: () => Navigator.of(context).pop(true),
            child: const Text('Remover'),
          ),
        ],
      ),
    );
    if (confirmed != true) return;
    ref.read(guestsControllerProvider.notifier).removeGuest(guest.id);
    if (mounted) Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    final history = _buildHistory(guest);

    return ListView(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        20,
        AppTheme.screenMargin,
        40,
      ),
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            InitialsAvatar(
              name: guest.name,
              radius: 36,
              background: AppTheme.surface,
              foreground: AppTheme.ink,
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    guest.name,
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    guest.group.isEmpty ? 'Convidado' : guest.group,
                    style: const TextStyle(color: AppTheme.inkMuted, fontSize: 14),
                  ),
                  const SizedBox(height: 8),
                  SnappyTap(
                    onTap: _pickRsvpStatus,
                    child: RsvpStatusBadge(status: guest.rsvpStatus, showIcon: true),
                  ),
                ],
              ),
            ),
            SnappyTap(
              onTap: () => setState(() => _favorited = !_favorited),
              child: Icon(
                _favorited ? Icons.favorite : Icons.favorite_border,
                color: _favorited ? AppStatusColors.declined : AppTheme.ink,
              ),
            ),
          ],
        ),
        const SizedBox(height: 24),
        Row(
          children: [
            Expanded(
              child: _ContactActionButton(
                icon: Icons.chat_bubble_outline,
                label: 'Mensagem',
                onTap: guest.phone == null
                    ? null
                    : () => _launchContact(context, Uri(scheme: 'sms', path: guest.phone)),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: _ContactActionButton(
                icon: Icons.call_outlined,
                label: 'Ligar',
                onTap: guest.phone == null
                    ? null
                    : () => _launchContact(context, Uri(scheme: 'tel', path: guest.phone)),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: _ContactActionButton(
                icon: Icons.email_outlined,
                label: 'Email',
                onTap: guest.email == null
                    ? null
                    : () => _launchContact(context, Uri(scheme: 'mailto', path: guest.email)),
              ),
            ),
          ],
        ),
        const SizedBox(height: 20),
        Container(
          decoration: BoxDecoration(
            color: AppTheme.surface,
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(
            children: [
              if (guest.plusOneAllowed)
                _InfoRow(
                  icon: Icons.people_outline,
                  label: '+1 acompanhante',
                  trailing: const Icon(Icons.chevron_right, color: AppTheme.inkMuted),
                  onTap: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(
                          guest.plusOneName?.isNotEmpty == true
                              ? 'Acompanhante: ${guest.plusOneName}'
                              : 'Ainda sem nome de acompanhante indicado.',
                        ),
                      ),
                    );
                  },
                ),
              _InfoRow(
                icon: Icons.restaurant_outlined,
                label: guest.dietaryRestrictions?.isNotEmpty == true
                    ? guest.dietaryRestrictions!
                    : 'Menu normal',
              ),
              _InfoRow(
                icon: Icons.edit_note_outlined,
                label: 'Notas',
                subtitle: guest.notes?.isNotEmpty == true ? guest.notes : 'Toca para adicionar notas privadas',
                onTap: _editNotes,
              ),
            ],
          ),
        ),
        if (history.isNotEmpty) ...[
          const SizedBox(height: 28),
          const Text(
            'Histórico',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 12),
          for (var i = 0; i < history.length; i++)
            _HistoryTile(entry: history[i], isLast: i == history.length - 1),
        ],
        const SizedBox(height: 28),
        SnappyTap(
          onTap: () async {
            final result = await showGuestFormSheet(context, existing: guest);
            if (result == null) return;
            ref.read(guestsControllerProvider.notifier).updateGuest(
                  guest.copyWith(
                    name: result.name,
                    email: result.email,
                    phone: result.phone,
                    group: result.group,
                    side: result.side,
                    plusOneAllowed: result.plusOneAllowed,
                  ),
                );
          },
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(vertical: 16),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: AppTheme.surface,
              borderRadius: BorderRadius.circular(999),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.edit_outlined, size: 18, color: AppTheme.ink),
                SizedBox(width: 8),
                Text('Editar convidado', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ],
            ),
          ),
        ),
        const SizedBox(height: 12),
        SnappyTap(
          onTap: _confirmRemove,
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(vertical: 16),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: AppStatusColors.declined.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(999),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.delete_outline, size: 18, color: AppStatusColors.declined),
                const SizedBox(width: 8),
                Text(
                  'Remover convidado',
                  style: TextStyle(fontWeight: FontWeight.w700, color: AppStatusColors.declined),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  List<_HistoryEntry> _buildHistory(Guest guest) {
    final entries = <_HistoryEntry>[];
    if (guest.rsvpRespondedAt != null) {
      final declined = guest.rsvpStatus == RsvpStatus.declined;
      entries.add(
        _HistoryEntry(
          icon: declined ? Icons.cancel : Icons.check_circle,
          color: declined ? AppStatusColors.declined : AppStatusColors.confirmed,
          label: declined ? 'Recusou o convite' : 'Confirmou presença',
          time: guest.rsvpRespondedAt!,
        ),
      );
    }
    if (guest.inviteSentAt != null) {
      entries.add(
        _HistoryEntry(
          icon: Icons.mail_outline,
          color: AppTheme.inkMuted,
          label: 'Convite enviado',
          time: guest.inviteSentAt!,
        ),
      );
    }
    if (guest.createdAt != null) {
      entries.add(
        _HistoryEntry(
          icon: Icons.person_add_alt_outlined,
          color: AppTheme.inkMuted,
          label: 'Convidado adicionado',
          time: guest.createdAt!,
        ),
      );
    }
    // Ordenados do mais recente para o mais antigo — cada timestamp já
    // só existe quando o passo correspondente aconteceu de verdade.
    entries.sort((a, b) => b.time.compareTo(a.time));
    return entries;
  }
}

class _ContactActionButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  const _ContactActionButton({required this.icon, required this.label, this.onTap});

  @override
  Widget build(BuildContext context) {
    final disabled = onTap == null;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Column(
          children: [
            Icon(icon, size: 20, color: disabled ? AppTheme.inkMuted.withValues(alpha: 0.4) : AppTheme.ink),
            const SizedBox(height: 6),
            Text(
              label,
              style: TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w600,
                color: disabled ? AppTheme.inkMuted.withValues(alpha: 0.4) : AppTheme.ink,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _InfoRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? subtitle;
  final Widget? trailing;
  final VoidCallback? onTap;

  const _InfoRow({
    required this.icon,
    required this.label,
    this.subtitle,
    this.trailing,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        child: Row(
          crossAxisAlignment: subtitle == null ? CrossAxisAlignment.center : CrossAxisAlignment.start,
          children: [
            Icon(icon, size: 20, color: AppTheme.inkMuted),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(label, style: const TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w500)),
                  if (subtitle != null) ...[
                    const SizedBox(height: 4),
                    Text(subtitle!, style: const TextStyle(color: AppTheme.inkMuted, fontSize: 13)),
                  ],
                ],
              ),
            ),
            ?trailing,
          ],
        ),
      ),
    );
  }
}

class _HistoryEntry {
  final IconData icon;
  final Color color;
  final String label;
  final DateTime time;

  const _HistoryEntry({required this.icon, required this.color, required this.label, required this.time});
}

class _HistoryTile extends StatelessWidget {
  final _HistoryEntry entry;
  final bool isLast;

  const _HistoryTile({required this.entry, required this.isLast});

  @override
  Widget build(BuildContext context) {
    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              Container(
                width: 32,
                height: 32,
                decoration: BoxDecoration(color: entry.color.withValues(alpha: 0.15), shape: BoxShape.circle),
                child: Icon(entry.icon, size: 16, color: entry.color),
              ),
              if (!isLast) Expanded(child: Container(width: 2, color: AppTheme.borderMuted)),
            ],
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Padding(
              padding: EdgeInsets.only(bottom: isLast ? 0 : 20, top: 4),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(entry.label, style: const TextStyle(fontWeight: FontWeight.w600, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(
                    _formatHistoryDate(entry.time),
                    style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
