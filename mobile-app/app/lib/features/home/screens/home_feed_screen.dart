import 'package:flutter/material.dart';
import '../../../shared/widgets/feedback.dart';
import '../../settings/screens/settings_screen.dart' show CoupleAccountSections;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/tasks/task_models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/push_opt_in.dart';
import '../../../shared/widgets/first_run_tour.dart' show TourAnchor;

/// Perfil — conta de quem está com sessão iniciada. Pedido explícito do
/// utilizador (redesign 2026-10): "o perfil fica apenas de quem criou a
/// conta". Foto/avatar, nome, email, atalhos para definições,
/// notificações, galeria, suporte e terminar sessão. Os dados do
/// casamento vivem no separador Casamento e em Definições.
class HomeFeedScreen extends ConsumerStatefulWidget {
  const HomeFeedScreen({super.key});

  @override
  ConsumerState<HomeFeedScreen> createState() => _HomeFeedScreenState();
}

class _HomeFeedScreenState extends ConsumerState<HomeFeedScreen> {
  bool _uploadingProfilePhoto = false;

  @override
  void initState() {
    super.initState();
    Future.microtask(() => ref.read(taskEngineControllerProvider.notifier).recompute());
  }

  void _openNotifications(BuildContext context) {
    showIslandSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const _NotificationsSheet(),
    );
  }

  Future<void> _pickProfilePhoto() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (file == null || !mounted) return;
    setState(() => _uploadingProfilePhoto = true);
    try {
      await ref.read(authControllerProvider.notifier).uploadAvatarPhoto(file);
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

  @override
  Widget build(BuildContext context) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final profile = ref.watch(
      authControllerProvider.select((s) => s.profile),
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
                        20,
                        AppTheme.screenMargin,
                        140,
                      ),
                      children: [
                        Row(
                          children: [
                            const Expanded(
                              child: Text(
                                'Perfil',
                                style: TextStyle(
                                  fontSize: AppFontSize.display,
                                  height: 40 / 34,
                                  fontWeight: FontWeight.w700,
                                  color: AppTheme.ink,
                                ),
                              ),
                            ),
                            // Sino no canto direito em vez da linha
                            // "Notificações" na lista (pedido 2026-10-17).
                            Stack(
                              clipBehavior: Clip.none,
                              children: [
                                TourAnchor(
                                  id: 'bell',
                                  child: IconButton(
                                    tooltip: 'Notificações',
                                    onPressed: () => _openNotifications(context),
                                    icon: const Icon(Icons.notifications_none_rounded, size: 26, color: AppTheme.ink),
                                  ),
                                ),
                                if (unreadNotifications > 0)
                                  Positioned(
                                    top: 8,
                                    right: 9,
                                    child: Container(
                                      width: 9,
                                      height: 9,
                                      decoration: BoxDecoration(
                                        color: AppTheme.accentOliveDark,
                                        shape: BoxShape.circle,
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          ],
                        ),
                        const SizedBox(height: 18),
                        _ProfileHeader(
                          name: profile?.fullName,
                          email: profile?.email,
                          avatarUrl: profile?.avatarUrl,
                          createdWedding: profile != null &&
                              wedding.ownerId == profile.id,
                          uploading: _uploadingProfilePhoto,
                          onChangePhoto: _uploadingProfilePhoto
                              ? null
                              : _pickProfilePhoto,
                        ),
                        const SizedBox(height: 24),
                        const _SupportSummaryCard(),
                        // Definições da conta dentro do Perfil (2026-10-17).
                        const CoupleAccountSections(help: false, signOut: false),
                        const SizedBox(height: 28),
                        const Text(
                          'Como podemos ajudar?',
                          style: TextStyle(
                            fontSize: AppFontSize.xl,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.ink,
                          ),
                        ),
                        const SizedBox(height: 12),
                        SnappyTap(
                          onTap: () => context.push('/support'),
                          child: Container(
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(
                              color: AppTheme.accentTint,
                              borderRadius:
                                  BorderRadius.circular(AppRadius.lg),
                            ),
                            child: Row(
                              children: [
                                CircleAvatar(
                                  radius: 22,
                                  backgroundColor: Colors.white,
                                  child: Icon(
                                    Icons.support_agent_outlined,
                                    color: AppTheme.accentOliveDark,
                                  ),
                                ),
                                SizedBox(width: 14),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        'Falar com a equipa',
                                        style: TextStyle(
                                          fontSize: AppFontSize.lg,
                                          fontWeight: FontWeight.w700,
                                          color: AppTheme.ink,
                                        ),
                                      ),
                                      SizedBox(height: 2),
                                      Text(
                                        'Envia-nos uma mensagem',
                                        style: TextStyle(
                                          fontSize: AppFontSize.md,
                                          color: AppTheme.inkMuted,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Icon(
                                  Icons.chevron_right_rounded,
                                  color: AppTheme.ink,
                                ),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 24),
                        Center(
                          child: TextButton(
                            onPressed: () => ref
                                .read(authControllerProvider.notifier)
                                .logout(),
                            style: TextButton.styleFrom(
                              foregroundColor: AppStatusColors.declined,
                              padding: EdgeInsets.zero,
                              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, 
                                fontSize: AppFontSize.base + 1,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            child: const Text('Terminar sessão'),
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
          borderRadius: BorderRadius.circular(AppRadius.lg),
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
                style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.ink),
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
            borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
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
                  borderRadius: BorderRadius.circular(AppRadius.pill),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
                child: Row(
                  children: [
                    Text('Notificações', style: Theme.of(context).textTheme.titleLarge),
                    const Spacer(),
                    SnappyTap(
                      onTap: () => ref.read(taskEngineControllerProvider.notifier).markAllNotificationsRead(),
                      child: const Icon(Icons.done_all, color: AppTheme.ink),
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
              const PushOptInCard(),
              Expanded(
                child: visible.isEmpty
                    ? const Center(
                        child: Padding(
                          padding: EdgeInsets.all(24),
                          child: InfoNote('Sem notificações por agora.', icon: Icons.notifications_none_rounded),
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
          fontSize: AppFontSize.md,
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
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.pill),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: TextStyle(
                color: selected ? Colors.white : AppTheme.ink,
                fontWeight: FontWeight.w700,
                fontSize: AppFontSize.sm,
              ),
            ),
            const SizedBox(width: 5),
            Text(
              '$count',
              style: TextStyle(
                color: selected ? Colors.white.withValues(alpha: 0.8) : AppTheme.inkMuted,
                fontWeight: FontWeight.w600,
                fontSize: AppFontSize.sm,
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
    'new_message' => Icons.chat_bubble_outline_rounded,
    'support_reply' => Icons.support_agent_rounded,
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
        if (context.mounted) context.push(notification.link ?? '/tasks');
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
                        style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                      ),
                    ],
                  ),
                  if (notification.body != null) ...[
                    const SizedBox(height: 3),
                    Text(
                      notification.body!,
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                    ),
                  ],
                  const SizedBox(height: 4),
                  Text(
                    _relativeTime(notification.createdAt),
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
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


class _ProfileHeader extends StatelessWidget {
  final String? name;
  final String? email;
  final String? avatarUrl;
  final bool createdWedding;
  final bool uploading;
  final VoidCallback? onChangePhoto;

  const _ProfileHeader({
    required this.name,
    required this.email,
    required this.avatarUrl,
    required this.createdWedding,
    required this.uploading,
    required this.onChangePhoto,
  });

  String get _initials {
    final parts = (name ?? '').trim().split(RegExp(r'\s+'))
      ..removeWhere((p) => p.isEmpty);
    if (parts.isEmpty) return '?';
    final first = parts.first[0];
    final last = parts.length > 1 ? parts.last[0] : '';
    return (first + last).toUpperCase();
  }

  @override
  Widget build(BuildContext context) {
    final initials = Center(
      child: Text(
        _initials,
        style: TextStyle(
          fontSize: AppFontSize.h1,
          fontWeight: FontWeight.w700,
          color: AppTheme.accentOliveDark,
        ),
      ),
    );
    return Row(
      children: [
        Stack(
          clipBehavior: Clip.none,
          children: [
            Container(
              width: 88,
              height: 88,
              decoration: BoxDecoration(
                color: AppTheme.accentTint,
                shape: BoxShape.circle,
              ),
              child: ClipOval(
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    if (avatarUrl != null)
                      Image.network(
                        avatarUrl!,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) => initials,
                      )
                    else
                      initials,
                    if (uploading)
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
              bottom: -2,
              right: -2,
              child: Semantics(
                button: true,
                label: 'Mudar foto',
                child: SnappyTap(
                  onTap: onChangePhoto,
                  child: Container(
                    width: 38,
                    height: 38,
                    decoration: BoxDecoration(
                      color: AppTheme.surface,
                      shape: BoxShape.circle,
                      border: Border.all(color: AppTheme.background, width: 3),
                    ),
                    child: Icon(
                      Icons.camera_alt_outlined,
                      size: 17,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(width: 16),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
        Text(
          name ?? '—',
          textAlign: TextAlign.start,
          style: AppTypography.displaySerif(
            fontSize: AppFontSize.h2,
            color: AppTheme.ink,
          ).copyWith(fontWeight: FontWeight.w700),
        ),
        if (email != null && email!.isNotEmpty) ...[
          const SizedBox(height: 4),
          Text(
            email!,
            textAlign: TextAlign.start,
            style: const TextStyle(
              fontSize: AppFontSize.base,
              fontWeight: FontWeight.w300,
              color: AppTheme.inkMuted,
            ),
          ),
        ],
        if (createdWedding) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: AppTheme.accentTint,
              borderRadius: BorderRadius.circular(AppRadius.pill),
            ),
            child: Text(
              'Criou o casamento',
              style: TextStyle(
                fontSize: AppFontSize.xs,
                fontWeight: FontWeight.w700,
                color: AppTheme.accentOliveDark,
              ),
            ),
          ),
        ],
            ],
          ),
        ),
      ],
    );
  }
}
