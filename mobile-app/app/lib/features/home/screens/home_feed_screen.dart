import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/tasks/task_models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Home — perfil simples do casal (foto, nome, frase, dados
/// essenciais). Pedido explícito do utilizador (2026-09-01): "trocas
/// o conteúdo do home com o conteúdo do os noivos, sem mexer no
/// conteúdo" — este ecrã passou a ter o conteúdo que antes vivia em
/// `wedding_details_screen.dart` (`WeddingDetailsScreen`), sem
/// nenhuma alteração ao próprio conteúdo.
class HomeFeedScreen extends ConsumerStatefulWidget {
  const HomeFeedScreen({super.key});

  @override
  ConsumerState<HomeFeedScreen> createState() => _HomeFeedScreenState();
}

class _HomeFeedScreenState extends ConsumerState<HomeFeedScreen> {
  bool _uploadingProfilePhoto = false;

  void _showComingSoon(BuildContext context, String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  Future<void> _pickProfilePhoto() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (file == null || !mounted) return;
    setState(() => _uploadingProfilePhoto = true);
    try {
      await ref.read(weddingControllerProvider.notifier).uploadProfilePhoto(file);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível carregar a foto.')),
        );
      }
    } finally {
      if (mounted) setState(() => _uploadingProfilePhoto = false);
    }
  }

  String _locationLabel(Wedding wedding) {
    final venue = wedding.venue;
    final location = wedding.location;
    if (venue != null && venue.isNotEmpty && location != null && location.isNotEmpty) {
      return '$venue, $location';
    }
    return venue ?? location ?? '—';
  }

  @override
  Widget build(BuildContext context) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final accountName = ref.watch(
      authControllerProvider.select((s) => s.profile?.fullName),
    );
    final unreadNotifications = ref.watch(
      taskEngineControllerProvider.select((s) => s.unreadNotificationCount),
    );

    return GradientScaffold(
      background: AppBackground.subtle,
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 24,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        40,
                        AppTheme.screenMargin,
                        140,
                      ),
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            // Sino de notificações — pedido explícito
                            // do utilizador: "quero apenas um pop up
                            // quando clicas nas notificações" — sem
                            // página própria, abre uma sheet simples
                            // por cima da página.
                            SnappyTap(
                              onTap: () => showModalBottomSheet(
                                context: context,
                                isScrollControlled: true,
                                backgroundColor: Colors.transparent,
                                builder: (context) => const _NotificationsSheet(),
                              ),
                              child: Stack(
                                clipBehavior: Clip.none,
                                children: [
                                  Container(
                                    width: 46,
                                    height: 46,
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      color: AppTheme.surface,
                                      shape: BoxShape.circle,
                                    ),
                                    child: const Icon(
                                      Icons.notifications_outlined,
                                      color: AppTheme.ink,
                                    ),
                                  ),
                                  if (unreadNotifications > 0)
                                    Positioned(
                                      top: -2,
                                      right: -2,
                                      child: Container(
                                        padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                                        constraints: const BoxConstraints(minWidth: 18),
                                        decoration: const BoxDecoration(
                                          color: AppStatusColors.declined,
                                          borderRadius: BorderRadius.all(Radius.circular(999)),
                                        ),
                                        child: Text(
                                          '$unreadNotifications',
                                          textAlign: TextAlign.center,
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 10.5,
                                            fontWeight: FontWeight.w800,
                                          ),
                                        ),
                                      ),
                                    ),
                                ],
                              ),
                            ),
                            const SizedBox(width: 10),
                            SnappyTap(
                              onTap: () => context.push('/settings'),
                              child: Container(
                                width: 46,
                                height: 46,
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: AppTheme.surface,
                                  shape: BoxShape.circle,
                                ),
                                child: const Icon(
                                  Icons.more_horiz,
                                  color: AppTheme.ink,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 18),
                        Center(
                          child: Stack(
                            clipBehavior: Clip.none,
                            children: [
                              Container(
                                width: 140,
                                height: 140,
                                padding: const EdgeInsets.all(4),
                                decoration: BoxDecoration(
                                  color: AppTheme.surface,
                                  shape: BoxShape.circle,
                                ),
                                child: ClipOval(
                                  child: Stack(
                                    fit: StackFit.expand,
                                    children: [
                                      if (wedding.profilePhotoUrlCacheBusted != null)
                                        Image.network(
                                          wedding.profilePhotoUrlCacheBusted!,
                                          fit: BoxFit.cover,
                                          errorBuilder: (context, error, stackTrace) =>
                                              Container(color: AppColors.green),
                                        )
                                      else
                                        Container(color: AppColors.green),
                                      if (_uploadingProfilePhoto)
                                        Container(
                                          color: Colors.black.withValues(alpha: 0.35),
                                          alignment: Alignment.center,
                                          child: const CircularProgressIndicator(
                                            color: Colors.white,
                                            strokeWidth: 2.5,
                                          ),
                                        ),
                                    ],
                                  ),
                                ),
                              ),
                              Positioned(
                                bottom: 0,
                                right: 0,
                                child: SnappyTap(
                                  onTap: _uploadingProfilePhoto ? null : _pickProfilePhoto,
                                  child: Container(
                                    width: 38,
                                    height: 38,
                                    decoration: BoxDecoration(
                                      color: AppTheme.surface,
                                      shape: BoxShape.circle,
                                      border: Border.all(
                                        color: AppTheme.background,
                                        width: 3,
                                      ),
                                    ),
                                    child: const Icon(
                                      Icons.camera_alt_outlined,
                                      size: 17,
                                      color: AppTheme.accentOliveDark,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 20),
                        Text(
                          accountName ?? '—',
                          textAlign: TextAlign.center,
                          style: AppTypography.displaySerif(
                            fontSize: 30,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            Expanded(
                              child: Divider(color: AppTheme.borderMuted),
                            ),
                            const Padding(
                              padding: EdgeInsets.symmetric(horizontal: 8),
                              child: Icon(
                                Icons.favorite,
                                size: 12,
                                color: AppTheme.accentOliveDark,
                              ),
                            ),
                            Expanded(
                              child: Divider(color: AppTheme.borderMuted),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        Text(
                          '"${wedding.displayQuote}"',
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            fontStyle: FontStyle.italic,
                            color: AppTheme.inkMuted,
                            fontSize: 14.5,
                            height: 1.5,
                          ),
                        ),
                        const SizedBox(height: 20),
                        const _SupportSummaryCard(),
                        const SizedBox(height: 20),
                        Container(
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            borderRadius: BorderRadius.circular(20),
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 4,
                          ),
                          child: Column(
                            children: [
                              _InfoRow(
                                icon: Icons.calendar_today_outlined,
                                label: 'Data',
                                value: wedding.weddingDate == null
                                    ? 'Por definir'
                                    : formatWeddingDateCaps(
                                        wedding.weddingDate!,
                                      ),
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.place_outlined,
                                label: 'Local',
                                value: _locationLabel(wedding),
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.language,
                                label: 'Website',
                                value: wedding.websiteDomain,
                              ),
                              const Divider(
                                height: 1,
                                color: AppTheme.borderMuted,
                              ),
                              _InfoRow(
                                icon: Icons.card_giftcard_outlined,
                                label: 'Lista de presentes',
                                trailingLabel: 'Ver lista',
                                onTap: () => _showComingSoon(
                                  context,
                                  'Em breve: lista de presentes.',
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 26),
                        Text(
                          'Como podemos ajudar?',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 12),
                        SizedBox(
                          height: 130,
                          width: double.infinity,
                          child: _OptionCard(
                            color: AppColors.green,
                            icon: Icons.support_agent,
                            label: 'Falar com a equipa',
                            onTap: () => _showComingSoon(
                              context,
                              'Ainda sem assistente real ligado — em breve.',
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.home),
                ),
              ],
            ),
    );
  }
}

class _InfoRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? value;
  final String? trailingLabel;
  final VoidCallback? onTap;

  const _InfoRow({
    required this.icon,
    required this.label,
    this.value,
    this.trailingLabel,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final row = Padding(
      padding: const EdgeInsets.symmetric(vertical: 14),
      child: Row(
        children: [
          Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              color: AppColors.green,
              borderRadius: BorderRadius.circular(11),
            ),
            child: Icon(icon, size: 16, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(width: 12),
          Text(
            label,
            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13.5),
          ),
          const Spacer(),
          if (trailingLabel != null) ...[
            Text(
              trailingLabel!,
              style: const TextStyle(
                color: AppTheme.accentOliveDark,
                fontWeight: FontWeight.w700,
                fontSize: 13,
              ),
            ),
            const SizedBox(width: 4),
            const Icon(
              Icons.chevron_right,
              size: 18,
              color: AppTheme.accentOliveDark,
            ),
          ] else
            Flexible(
              child: Text(
                value ?? '—',
                textAlign: TextAlign.right,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  color: AppTheme.inkMuted,
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
        ],
      ),
    );

    if (onTap == null) return row;
    return SnappyTap(onTap: onTap, child: row);
  }
}

class _SupportSummaryCard extends ConsumerWidget {
  const _SupportSummaryCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ticketsAsync = ref.watch(coupleSupportTicketsProvider);
    final openCount = ticketsAsync.maybeWhen(
      data: (list) =>
          list.where((t) => t.status != SupportTicketStatus.resolved).length,
      orElse: () => 0,
    );

    // Pedido explícito do utilizador: só mostrar este cartão quando
    // existe mesmo um pedido de suporte em aberto — nunca "Sem
    // pedidos de suporte em aberto".
    if (openCount == 0) return const SizedBox.shrink();

    return SnappyTap(
      onTap: () => context.push('/support'),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          children: [
            const Icon(
              Icons.support_agent_outlined,
              size: 20,
              color: AppTheme.inkMuted,
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                '$openCount pedido${openCount == 1 ? '' : 's'} de suporte em aberto',
                style: const TextStyle(fontSize: 12.5, color: AppTheme.ink),
              ),
            ),
            const Icon(
              Icons.chevron_right,
              size: 18,
              color: AppTheme.inkMuted,
            ),
          ],
        ),
      ),
    );
  }
}

enum _NotificationTab { all, unread, read }

String _relativeTime(DateTime at) {
  final diff = DateTime.now().difference(at);
  if (diff.inMinutes < 1) return 'Agora';
  if (diff.inMinutes < 60) return 'Há ${diff.inMinutes} min';
  if (diff.inHours < 24) return 'Há ${diff.inHours} h';
  if (diff.inDays == 1) return 'Ontem, ${at.hour.toString().padLeft(2, '0')}:${at.minute.toString().padLeft(2, '0')}';
  return '${at.day.toString().padLeft(2, '0')}/${at.month.toString().padLeft(2, '0')}, ${at.hour.toString().padLeft(2, '0')}:${at.minute.toString().padLeft(2, '0')}';
}

/// Centro de notificações real — pedido explícito do utilizador
/// (2026-09-01, com imagem de referência): sheet a subir do fundo
/// ("uma box que aparece"), separadores Todas/Não lidas/Lidas,
/// agrupado em "Novas"/"Anteriores". Liga-se a `notifications` real
/// (039_task_engine.sql) — cada linha nasce quando o motor de tarefas
/// promove uma tarefa a `ACTIVE` (nunca duplica a tarefa em si, só o
/// aviso, ver `task_engine_controller.dart`).
class _NotificationsSheet extends ConsumerStatefulWidget {
  const _NotificationsSheet();

  @override
  ConsumerState<_NotificationsSheet> createState() => _NotificationsSheetState();
}

class _NotificationsSheetState extends ConsumerState<_NotificationsSheet> {
  _NotificationTab _tab = _NotificationTab.all;

  @override
  Widget build(BuildContext context) {
    final notifications = ref.watch(taskEngineControllerProvider.select((s) => s.notifications));
    final unread = notifications.where((n) => !n.read).toList();
    final read = notifications.where((n) => n.read).toList();

    final visible = switch (_tab) {
      _NotificationTab.all => notifications,
      _NotificationTab.unread => unread,
      _NotificationTab.read => read,
    };

    return DraggableScrollableSheet(
      initialChildSize: 0.75,
      minChildSize: 0.4,
      maxChildSize: 0.92,
      expand: false,
      builder: (context, scrollController) {
        return Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
          ),
          child: SafeArea(
            child: Column(
              children: [
              const SizedBox(height: 10),
              Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: AppTheme.borderMuted,
                  borderRadius: BorderRadius.circular(999),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
                child: Row(
                  children: [
                    Text('Notificações', style: Theme.of(context).textTheme.titleLarge),
                    const Spacer(),
                    SnappyTap(
                      onTap: () => context.push('/settings'),
                      child: const Icon(Icons.settings_outlined, color: AppTheme.ink),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Row(
                  children: [
                    _TabChip(
                      label: 'Todas',
                      count: notifications.length,
                      selected: _tab == _NotificationTab.all,
                      onTap: () => setState(() => _tab = _NotificationTab.all),
                    ),
                    const SizedBox(width: 8),
                    _TabChip(
                      label: 'Não lidas',
                      count: unread.length,
                      selected: _tab == _NotificationTab.unread,
                      onTap: () => setState(() => _tab = _NotificationTab.unread),
                    ),
                    const SizedBox(width: 8),
                    _TabChip(
                      label: 'Lidas',
                      count: read.length,
                      selected: _tab == _NotificationTab.read,
                      onTap: () => setState(() => _tab = _NotificationTab.read),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              Expanded(
                child: visible.isEmpty
                    ? const Center(
                        child: Padding(
                          padding: EdgeInsets.all(24),
                          child: Text(
                            'Sem notificações por agora.',
                            style: TextStyle(color: AppTheme.inkMuted),
                          ),
                        ),
                      )
                    : ListView(
                        controller: scrollController,
                        padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                        children: [
                          if (_tab == _NotificationTab.all) ...[
                            if (unread.isNotEmpty) ...[
                              _SectionLabel('Novas'),
                              for (final n in unread) _NotificationRow(notification: n),
                              const SizedBox(height: 8),
                            ],
                            if (read.isNotEmpty) ...[
                              _SectionLabel('Anteriores'),
                              for (final n in read) _NotificationRow(notification: n),
                            ],
                          ] else
                            for (final n in visible) _NotificationRow(notification: n),
                        ],
                      ),
              ),
            ],
          ),
          ),
        );
      },
    );
  }
}

class _SectionLabel extends StatelessWidget {
  final String label;

  const _SectionLabel(this.label);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8, top: 8),
      child: Text(
        label,
        style: const TextStyle(
          fontWeight: FontWeight.w700,
          fontSize: 13,
          color: AppTheme.inkMuted,
        ),
      ),
    );
  }
}

class _TabChip extends StatelessWidget {
  final String label;
  final int count;
  final bool selected;
  final VoidCallback onTap;

  const _TabChip({
    required this.label,
    required this.count,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        decoration: BoxDecoration(
          color: selected ? AppTheme.ink : AppTheme.surface,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: TextStyle(
                color: selected ? Colors.white : AppTheme.ink,
                fontWeight: FontWeight.w700,
                fontSize: 12.5,
              ),
            ),
            const SizedBox(width: 5),
            Text(
              '$count',
              style: TextStyle(
                color: selected ? Colors.white.withValues(alpha: 0.8) : AppTheme.inkMuted,
                fontWeight: FontWeight.w600,
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NotificationRow extends ConsumerWidget {
  final AppNotification notification;

  const _NotificationRow({required this.notification});

  IconData get _icon => switch (notification.type) {
    'new_task' => Icons.star_outline_rounded,
    'task_completed' => Icons.check_circle_outline,
    _ => Icons.notifications_outlined,
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return SnappyTap(
      onTap: () async {
        if (!notification.read) {
          await ref
              .read(taskEngineControllerProvider.notifier)
              .markNotificationRead(notification.id);
        }
        if (context.mounted) Navigator.of(context).pop();
        if (context.mounted) context.push('/tasks');
      },
      child: Padding(
        padding: const EdgeInsets.only(bottom: 18),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 40,
              height: 40,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: AppTheme.surface,
                shape: BoxShape.circle,
              ),
              child: Icon(_icon, size: 19, color: AppTheme.accentOliveDark),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      if (!notification.read) ...[
                        Container(
                          width: 6,
                          height: 6,
                          decoration: const BoxDecoration(
                            color: AppStatusColors.declined,
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 6),
                      ],
                      Text(
                        notification.title,
                        style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
                      ),
                    ],
                  ),
                  if (notification.body != null) ...[
                    const SizedBox(height: 3),
                    Text(
                      notification.body!,
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                    ),
                  ],
                  const SizedBox(height: 4),
                  Text(
                    _relativeTime(notification.createdAt),
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11),
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, size: 18, color: AppTheme.inkMuted),
          ],
        ),
      ),
    );
  }
}

class _OptionCard extends StatelessWidget {
  final Color color;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _OptionCard({
    required this.color,
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: const BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              ),
              child: Icon(icon, size: 18, color: AppTheme.ink),
            ),
            const Spacer(),
            Text(
              label,
              style: AppTypography.moduleTitle.copyWith(color: AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}
