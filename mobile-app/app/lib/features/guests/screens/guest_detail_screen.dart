import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../../../core/guest_home/guest_home_providers.dart' show guestCompanionsProvider, ageGroupLabel;
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/group_chat.dart' show openDirectChat, DirectChatUnavailable;
import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/organizers_card.dart' show RowPillButton;
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/rsvp_status_badge.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/island_sheet.dart';

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

    // Mockup «Páginas do evento» → Convidado (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: _GuestDetailBody(guest: guest),
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
  Future<void> _editCompanionLimit(BuildContext context, Guest guest) async {
    var value = guest.maxCompanions;
    final result = await showIslandSheet<int>(
      context: context,
      builder: (sheet) => StatefulBuilder(
        builder: (sheet, setSheet) => SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 22, AppTheme.screenMargin, 20),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text('Quantas pessoas pode trazer ${guest.name.split(' ').first}?',
                    style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 6),
                const Text('Conta adultos e crianças. O convidado não consegue indicar mais pessoas do que isto.',
                    style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                const SizedBox(height: 16),
                CompanionLimitRow(title: 'Acompanhantes', value: value, onChanged: (v) => setSheet(() => value = v)),
                const SizedBox(height: 16),
                FilledButton(onPressed: () => Navigator.of(sheet).pop(value), child: const Text('Guardar')),
              ],
            ),
          ),
        ),
      ),
    );
    if (result == null || result == guest.maxCompanions) return;
    try {
      await ref.read(guestsControllerProvider.notifier).updateGuest(
            guest.copyWith(maxCompanions: result, plusOneAllowed: result > 0),
          );
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar.')));
      }
    }
  }

  // Convidados não têm nenhum conceito de "favorito" na base de dados —
  // só um toque visual local, pedido explícito do utilizador (imagem de
  // referência). Não persiste, por isso volta sempre a `false` ao
  // reabrir o perfil.
  bool _favorited = false;

  Guest get guest => widget.guest;

  Future<void> _messageGuest(BuildContext context) async {
    final id = guest.linkedProfileId;
    if (id == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Ainda não tem conta na app. Envia-lhe o convite em «Convidar».')),
      );
      return;
    }
    try {
      final g = await openDirectChat(id);
      if (context.mounted) await context.push('/group/${g.id}', extra: g);
    } on DirectChatUnavailable catch (e) {
      if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível abrir a conversa.')));
      }
    }
  }

  Future<void> _pickRsvpStatus() async {
    final result = await showIslandSheet<RsvpStatus>(
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
    final result = await showIslandDialog<String>(
      context: context,
      builder: (context) => IslandAlert(
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
    final confirmed = await showIslandDialog<bool>(
      context: context,
      builder: (context) => IslandAlert(
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

  Future<void> _copyInviteLink() async {
    final link = publicLink('/rsvp/${guest.rsvpToken}');
    await copyText(link);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link de convite copiado.')));
    }
  }

  Future<void> _edit() async {
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
            maxCompanions: result.maxCompanions,
          ),
        );
  }

  @override
  Widget build(BuildContext context) {
    final history = _buildHistory(guest);
    final companions = ref.watch(guestCompanionsProvider(guest.id)).asData?.value ?? const [];
    final limit = guest.maxCompanions == 0 ? 'Vem sozinho' : 'Pode trazer ${CompanionLimitRow.label(guest.maxCompanions)}';
    final bringing = companions.map((c) => c.name.split(' ').first).join(', ');

    Widget action(IconData icon, String label, VoidCallback? onTap) => Expanded(
          child: Opacity(
            opacity: onTap == null ? 0.4 : 1,
            child: Column(children: [
              V2RoundButton(icon: icon, tooltip: label, onTap: onTap),
              const SizedBox(height: 6),
              Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            ]),
          ),
        );

    return KitPage(
      pinnedBack: true,
      children: [
        KitHeader(actions: [
          V2RoundButton(
            icon: _favorited ? Hi.heart : Hi.heartOutline,
            tooltip: 'Favorito',
            onTap: () => setState(() => _favorited = !_favorited),
          ),
          IslandMenuButton<String>(
            tooltip: 'Mais opções',
            padding: EdgeInsets.zero,
            onSelected: (v) {
              if (v == 'copy_link') _copyInviteLink();
              if (v == 'edit') _edit();
              if (v == 'remove') _confirmRemove();
            },
            itemBuilder: (_) => [
              const PopupMenuItem(value: 'edit', child: Text('Editar')),
              PopupMenuItem(value: 'copy_link', enabled: guest.rsvpToken != null, child: const Text('Copiar link de convite')),
              const PopupMenuItem(value: 'remove', child: Text('Remover')),
            ],
            child: const IgnorePointer(child: V2RoundButton(icon: Hi.ellipsisHorizontal, tooltip: 'Mais opções')),
          ),
        ]),
        Container(
          margin: const EdgeInsets.only(top: 20),
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(color: Colors.white, border: AppTheme.cardBorder, borderRadius: BorderRadius.circular(22)),
          child: Row(children: [
            V2Avatar(guest.name, size: 76),
            const SizedBox(width: 14),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(guest.name, style: const TextStyle(fontSize: 21, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 4),
                Text(
                  [guest.group.isEmpty ? 'Convidado' : guest.group, if (guest.ageGroup != 'adult') ageGroupLabel(guest.ageGroup)].join(' · '),
                  style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
                ),
                const SizedBox(height: 8),
                SnappyTap(
                  onTap: _pickRsvpStatus,
                  child: switch (guest.rsvpStatus) {
                    RsvpStatus.confirmed => const KitTag('Confirmado'),
                    RsvpStatus.declined => const KitTag('Não vem', kind: KitTagKind.neutral),
                    _ => const KitTag('Por responder', kind: KitTagKind.pending),
                  },
                ),
              ]),
            ),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 16),
          child: Row(children: [
            // «Mensagem» abre a conversa direta na app (192), sem SMS,
            // chamada nem email (pedido 2026-11-16).
            action(Hi.chatBubbleOvalLeft, 'Mensagem', () => _messageGuest(context)),
            // «Ver perfil» (2026-11-15): só quando a pessoa já tem conta na
            // app (entrou com o link ou o código) — para a seguir.
            if (guest.linkedProfileId != null)
              action(Hi.user, 'Ver perfil', () => context.push('/u/${guest.linkedProfileId}')),
          ]),
        ),
        const KitCaps('Na festa'),
        KitGroup([
          KitSetRow(
            label: 'Acompanhantes',
            value: bringing.isEmpty ? limit : 'Traz $bringing',
            onTap: () => _editCompanionLimit(context, guest),
          ),
          if (guest.dietaryRestrictions?.isNotEmpty == true)
            KitSetRow(label: 'Alergias', value: guest.dietaryRestrictions),
          KitSetRow(
            label: 'Notas',
            value: guest.notes?.isNotEmpty == true ? guest.notes : 'Adicionar',
            onTap: _editNotes,
          ),
        ]),
        if (guest.rsvpToken != null) ...[
          const KitCaps('Convite'),
          KitGroup([
            KitRow(
              title: 'Link de convite',
              sub: 'Pessoal, só para ${guest.name.split(' ').first}',
              trailing: RowPillButton(label: 'Copiar', onTap: _copyInviteLink),
            ),
          ]),
        ],
        if (history.isNotEmpty) ...[
          const KitCaps('Histórico'),
          KitGroup([
            for (final e in history) KitRow(title: e.label, sub: _formatHistoryDate(e.time)),
          ]),
        ],
        Padding(
          padding: const EdgeInsets.only(top: 24),
          child: FilledButton(
            onPressed: _edit,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              minimumSize: const Size.fromHeight(52),
              shape: const StadiumBorder(),
              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
            ),
            child: const Text('Editar convidado'),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 10),
          child: OutlinedButton(
            onPressed: _confirmRemove,
            style: OutlinedButton.styleFrom(
              backgroundColor: Colors.white,
              foregroundColor: AppStatusColors.declined,
              minimumSize: const Size.fromHeight(52),
              side: const BorderSide(color: AppStatusColors.declined, width: 1.5),
              shape: const StadiumBorder(),
              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
            ),
            child: const Text('Remover convidado'),
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
          icon: declined ? Hi.xCircle : Hi.checkCircle,
          color: declined ? AppStatusColors.declined : AppStatusColors.confirmed,
          label: declined ? 'Recusou o convite' : 'Confirmou presença',
          time: guest.rsvpRespondedAt!,
        ),
      );
    }
    if (guest.inviteSentAt != null) {
      entries.add(
        _HistoryEntry(
          icon: Hi.envelope,
          color: AppTheme.inkMuted,
          label: 'Convite enviado',
          time: guest.inviteSentAt!,
        ),
      );
    }
    if (guest.createdAt != null) {
      entries.add(
        _HistoryEntry(
          icon: Hi.userPlus,
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

class _HistoryEntry {
  final IconData icon;
  final Color color;
  final String label;
  final DateTime time;

  const _HistoryEntry({required this.icon, required this.color, required this.label, required this.time});
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
