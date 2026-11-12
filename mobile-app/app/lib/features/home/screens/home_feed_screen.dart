import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show Clipboard, ClipboardData;
import 'package:share_plus/share_plus.dart';
import '../../../core/social/social.dart';
import '../../../shared/public_link.dart';
import '../../events/screens/eventos_screen.dart' show MyEventsCarousel;
import '../../profile/profile_widgets.dart';
import 'package:copo_dagua_app/shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/features/guest_home/widgets/guest_events_pill.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/router.dart' show prefetchEventPage;
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
///
/// Mesmo Perfil em modo organizador e em modo convidado (pedido
/// 2026-11): só muda a barra de baixo e, como convidado, o atalho para
/// a resposta/menu/mesa desse evento.
class HomeFeedScreen extends ConsumerStatefulWidget {
  /// Modo convidado: o evento que se está a ver (`null` numa conta só
  /// de utilizador = o primeiro evento a que tem acesso).
  final String? guestWeddingId;
  final bool guestMode;

  const HomeFeedScreen({super.key, this.guestWeddingId, this.guestMode = false});

  @override
  ConsumerState<HomeFeedScreen> createState() => _HomeFeedScreenState();
}

class _HomeFeedScreenState extends ConsumerState<HomeFeedScreen> {
  bool _uploadingProfilePhoto = false;

  @override
  void initState() {
    super.initState();
    Future.microtask(() => ref.read(taskEngineControllerProvider.notifier).recompute());
    WidgetsBinding.instance.addPostFrameCallback((_) => prefetchEventPage());
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
    final organizer = profile?.role == UserRole.couple;
    final guestMode = widget.guestMode || !organizer;
    final invited = guestMode ? (ref.watch(guestWeddingsProvider).value ?? const <GuestWedding>[]) : const <GuestWedding>[];
    final presenceId = widget.guestWeddingId ?? invited.firstOrNull?.weddingId;
    final unreadNotifications = ref.watch(
      taskEngineControllerProvider.select((s) => s.unreadNotificationCount),
    );

    return GradientScaffold(
      background: AppBackground.subtle,
      body: profile == null || (organizer && wedding == null)
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(top: false, 
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 24,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: ( const EdgeInsets.fromLTRB(
                        0,
                        20,
                        0,
                        140,
                      )).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
                      children: [
                        if (guestMode) ...[
                          const Padding(
                            padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                            child: Align(alignment: Alignment.centerLeft, child: GuestEventsPill()),
                          ),
                          const SizedBox(height: 12),
                        ],
                        // Mockup "Perfil" (2026-11-12): título à esquerda,
                        // avisos e Definições em botões redondos.
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                          child: Row(
                          children: [
                            const Expanded(
                              child: Text('Perfil',
                                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            ),
                            if (wedding != null)
                              Stack(
                                clipBehavior: Clip.none,
                                children: [
                                  TourAnchor(
                                    id: 'bell',
                                    child: _RoundIcon(
                                      icon: Hi.bell,
                                      tip: 'Notificações',
                                      onTap: () => _openNotifications(context),
                                    ),
                                  ),
                                  if (unreadNotifications > 0)
                                    Positioned(
                                      top: 9,
                                      right: 10,
                                      child: Container(
                                        width: 9,
                                        height: 9,
                                        decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle),
                                      ),
                                    ),
                                ],
                              )
                            else
                              const PartnerNotificationBell(),
                            const SizedBox(width: 10),
                            _RoundIcon(icon: Hi.cog6Tooth, tip: 'Definições', onTap: () => context.push('/conta')),
                          ],
                        ),
                        ),
                        const SizedBox(height: 18),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                          child: _MyProfileCard(
                            uploading: _uploadingProfilePhoto,
                            onChangePhoto: _uploadingProfilePhoto ? null : _pickProfilePhoto,
                          ),
                        ),
                        if (guestMode && presenceId != null) ...[
                          const SizedBox(height: 16),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                            child: _PresenceCard(onTap: () => context.push('/guest-presenca/$presenceId')),
                          ),
                        ],
                        ProfileSectionTitle(
                          'Os meus eventos',
                          action: 'Ver todos',
                          onAction: () => context.go('/eventos'),
                        ),
                        const MyEventsCarousel(),
                        _MyFollowing(profileId: profile.id),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: guestMode
                      ? GuestBottomNav(current: GuestTab.profile, weddingId: widget.guestWeddingId)
                      : const FloatingBottomNav(current: AppTab.home),
                ),
              ],
            ),
    );
  }
}

/// Modo convidado: a resposta, o menu e a mesa desse evento.
class _PresenceCard extends StatelessWidget {
  final VoidCallback onTap;
  const _PresenceCard({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg)),
        child: Row(
          children: [
            CircleAvatar(
              radius: 22,
              backgroundColor: AppTheme.accentTint,
              child: Icon(Hi.userPlus, color: AppTheme.accentOliveDark),
            ),
            const SizedBox(width: 14),
            const Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('A tua presença',
                      style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  SizedBox(height: 2),
                  Text('Resposta, menu, acompanhantes e mesa',
                      style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const Icon(Hi.chevronRight, color: AppTheme.ink),
          ],
        ),
      ),
    );
  }
}

class SupportSummaryCard extends ConsumerWidget {
  const SupportSummaryCard({super.key});

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
          color: Colors.white,
          boxShadow: softCard().boxShadow,
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: Row(
          children: [
            const Icon(
              Hi.lifebuoy,
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
              Hi.chevronRight,
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
                      child: const Icon(Hi.checkBadge, color: AppTheme.ink),
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
                          child: InfoNote('Sem notificações por agora.', icon: Hi.bell),
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
    'new_message' => Hi.chatBubbleOvalLeft,
    'support_reply' => Hi.lifebuoy,
    'new_task' => Hi.starOutline,
    'task_completed' => Hi.checkCircle,
    _ => Hi.bell,
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
            const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
          ],
        ),
      ),
    );
  }
}


class _RoundIcon extends StatelessWidget {
  final IconData icon;
  final String tip;
  final VoidCallback onTap;
  const _RoundIcon({required this.icon, required this.tip, required this.onTap});

  @override
  Widget build(BuildContext context) => Tooltip(
        message: tip,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: Icon(icon, size: 22, color: AppTheme.ink),
          ),
        ),
      );
}

/// Cartão do meu perfil (mockup "O meu perfil"): foto (toca para mudar),
/// números, nome, @ · cidade, bio, "Editar perfil" e "Partilhar perfil".
class _MyProfileCard extends ConsumerWidget {
  final bool uploading;
  final VoidCallback? onChangePhoto;
  const _MyProfileCard({required this.uploading, required this.onChangePhoto});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider.select((s) => s.profile));
    if (profile == null) return const SizedBox.shrink();
    final pub = ref.watch(publicProfileProvider(profile.id)).value;
    final name = profile.fullName?.trim().isNotEmpty == true ? profile.fullName! : (pub?.name ?? '');
    return ProfileCard(
      avatar: Semantics(
        button: true,
        label: 'Mudar foto de perfil',
        child: GestureDetector(
          onTap: onChangePhoto,
          child: Stack(children: [
            V2Avatar(name, size: 76, imageUrl: profile.avatarUrl),
            if (uploading)
              const Positioned.fill(
                child: Center(child: SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.5))),
              ),
          ]),
        ),
      ),
      name: name,
      handleLine: pub?.handleLine ?? '',
      bio: pub?.bio,
      events: pub?.events ?? 0,
      followers: pub?.followers ?? 0,
      following: pub?.following ?? 0,
      buttons: [
        ProfileButton('Editar perfil', onTap: pub == null ? null : () => showEditProfileSheet(context, ref, pub)),
        ProfileButton('Partilhar perfil', dark: true, onTap: () async {
          final link = publicLink('/u/${profile.id}');
          try {
            await SharePlus.instance.share(ShareParams(text: '$name na À Nossa!: $link', subject: name));
          } catch (_) {
            await Clipboard.setData(ClipboardData(text: link));
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
            }
          }
        }),
      ],
    );
  }
}

class _MyFollowing extends ConsumerWidget {
  final String profileId;
  const _MyFollowing({required this.profileId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pub = ref.watch(publicProfileProvider(profileId)).value;
    if (pub == null) return const SizedBox.shrink();
    return FollowingSection(profileId: profileId, people: pub.followingPeople, partners: pub.followingPartners);
  }
}
