import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/event_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/gallery_placeholder.dart';
import '../../../core/gallery/gallery_social.dart';
import '../widgets/gallery_social_ui.dart';
import '../../../shared/widgets/island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

enum _GalleryTab { all, mine, favorites }

/// Galeria moderada do casamento (`061_wedding_gallery.sql`) — pedido
/// explícito do utilizador: fotos de todos (convidados e casal), só
/// visíveis depois de aprovadas pelo casal. `eventId` explícito
/// (em vez de ler sempre `eventControllerProvider`) porque um
/// convidado pode pertencer a mais do que um casamento
/// (`wedding_guest_members`) — nesse caso `null` aqui, resolvido a
/// partir de quem entrou no ecrã. Pedido explícito do utilizador
/// (2026-09-13): "a galeria para os noivos tem que ser igual a dos
/// convidados" — mesmos separadores "Todas as fotos/As tuas
/// fotos/Favoritas" e cartão "Adicionar fotos" de
/// `guest_gallery_screen.dart`; só a secção de pendentes de aprovação
/// (exclusiva do casal) continua a existir aqui.
class GalleryScreen extends ConsumerWidget {
  final String? eventId;

  const GalleryScreen({super.key, this.eventId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final resolvedEventId =
        eventId ?? ref.watch(eventControllerProvider).event?.id;
    final isCouple = profile?.role == UserRole.couple;
    final isGuest = profile?.role == UserRole.guest;
    // O casal abre a Galeria a partir do Casamento (atalho ao lado de
    // Orçamento/Convidados/…) — deixou de ter separador na navbar
    // (pedido 2026-10-17), por isso aqui tem seta de voltar e os
    // filtros flutuam sozinhos.
    // Um `eventId` explícito só acontece hoje vindo de "Modo
    // convidado" (`GuestHomeEventCard`, uma conta de casal a acompanhar
    // OUTRO casamento) — esse caso também mostra a navbar de
    // convidado, com os outros 3 separadores presos a esse mesmo
    // `eventId` (ver `GuestBottomNav`).
    final showGuestNav = isGuest || eventId != null;

    if (resolvedEventId == null) {
      return GradientScaffold(
        background: AppBackground.subtle,
        body: const EmptyStateView(message: 'Sem casamento associado.', icon: Hi.heartOutline),
      );
    }

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Mockup «Páginas do evento» → Galeria (2026-11-14).
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    KitHeader(actions: [
                      KitAddButton(tooltip: 'Carregar fotos', onTap: () => _upload(context, ref, resolvedEventId)),
                    ]),
                    const KitTitle('Galeria', subtitle: 'Fotos vossas e dos convidados.'),
                  ]),
                ),
                Expanded(
                  child: _GalleryBody(
                    eventId: resolvedEventId,
                    isCouple: isCouple,
                    currentUserId: profile?.id,
                    aboveNav: showGuestNav,
                    // A navbar vive dentro do corpo para os filtros da
                    // galeria ficarem ligados a ela (redesign 2026-10).
                    navBuilder: showGuestNav
                        ? (top) => GuestBottomNav(
                            current: GuestTab.gallery,
                            eventId: eventId,
                            top: top,
                          )
                        : null,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static Future<void> _upload(BuildContext context, WidgetRef ref, String eventId) async {
    final source = await showIslandSheet<ImageSource>(
      context: context,
      builder: (context) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Hi.camera),
              title: const Text('Tirar fotografia'),
              onTap: () => Navigator.of(context).pop(ImageSource.camera),
            ),
            ListTile(
              leading: const Icon(Hi.rectangleStack),
              title: const Text('Escolher da galeria'),
              onTap: () => Navigator.of(context).pop(ImageSource.gallery),
            ),
          ],
        ),
      ),
    );
    if (source == null) return;
    // Câmara: pede outra vez, se for preciso (2026-10-25).
    if (source == ImageSource.camera) {
      if (!context.mounted || !await ensurePermission(context, AppPermission.camera)) return;
    }

    final file = await ImagePicker().pickImage(source: source);
    if (file == null) return;
    try {
      await uploadGalleryPhoto(eventId: eventId, file: file, autoApprove: true);
      ref.invalidate(eventGalleryPhotosProvider(eventId));
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Foto enviada — aguarda aprovação dos organizadores.'),
          ),
        );
      }
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível enviar a foto.')),
        );
      }
    }
  }
}

class _GalleryBody extends ConsumerStatefulWidget {
  final String eventId;
  final bool isCouple;
  final String? currentUserId;
  final bool aboveNav;
  final Widget Function(Widget? top)? navBuilder;

  const _GalleryBody({
    required this.eventId,
    required this.isCouple,
    required this.currentUserId,
    required this.aboveNav,
    required this.navBuilder,
  });

  @override
  ConsumerState<_GalleryBody> createState() => _GalleryBodyState();
}

class _GalleryBodyState extends ConsumerState<_GalleryBody> {
  _GalleryTab _tab = _GalleryTab.all;
  bool _showPending = false;

  @override
  Widget build(BuildContext context) {
    final photosAsync = ref.watch(eventGalleryPhotosProvider(widget.eventId));

    Widget withNav(Widget child, {Widget? top}) => Stack(
          children: [
            Positioned.fill(child: child),
            if (widget.navBuilder != null)
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: widget.navBuilder!(top),
              ),
          ],
        );

    return photosAsync.when(
      loading: () => withNav(const SkeletonGrid()),
      error: (err, st) => withNav(AsyncErrorView(onRetry: () => ref.invalidate(eventGalleryPhotosProvider(widget.eventId)))),
      data: (photos) {
        final pending = widget.isCouple
            ? photos.where((p) => p.status == 'pending').toList()
            : const <GalleryPhoto>[];
        var approved = photos.where((p) => p.status == 'approved').toList();
        final meta = ref.watch(galleryFeedMetaProvider(widget.eventId)).asData?.value ?? const {};
        final allCount = approved.length;
        final mineCount = approved.where((p) => p.uploadedBy == widget.currentUserId).length;
        final favCount = approved.where((p) => meta[p.id]?.likedByMe ?? false).length;
        if (_tab == _GalleryTab.mine) {
          approved = approved.where((p) => p.uploadedBy == widget.currentUserId).toList();
        } else if (_tab == _GalleryTab.favorites) {
          // "Favoritas" = fotos de que gostaste (gostos reais, 078).
          approved = approved.where((p) => meta[p.id]?.likedByMe ?? false).toList();
        }

        final list = ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 120),
          children: [
            if (pending.isNotEmpty) ...[
              // Alerta pendente (DESIGN §7): «Rever» abre a lista para aprovar.
              KitAlert(
                text: pending.length == 1
                    ? '1 foto de convidados à espera da vossa aprovação.'
                    : '${pending.length} fotos de convidados à espera da vossa aprovação.',
                action: _showPending ? 'Fechar' : 'Rever',
                onAction: () => setState(() => _showPending = !_showPending),
              ),
              if (_showPending) ...[
                const SizedBox(height: 12),
                for (final photo in pending)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: _PendingPhotoCard(photo: photo, eventId: widget.eventId),
                  ),
              ],
            ],
            KitPills([
              KitPill(label: 'Todas', count: allCount, selected: _tab == _GalleryTab.all,
                  onTap: () => setState(() => _tab = _GalleryTab.all)),
              KitPill(label: widget.isCouple ? 'Vossas' : 'As tuas', count: mineCount, selected: _tab == _GalleryTab.mine,
                  onTap: () => setState(() => _tab = _GalleryTab.mine)),
              KitPill(label: 'Favoritas', count: favCount, selected: _tab == _GalleryTab.favorites,
                  onTap: () => setState(() => _tab = _GalleryTab.favorites)),
            ]),
            const SizedBox(height: 16),
            if (approved.isEmpty)
              GalleryEmptyState(
                message: switch (_tab) {
                  _GalleryTab.all => 'Ainda não existem fotos. Carreguem as primeiras no +.',
                  _GalleryTab.mine => 'Ainda não carregaste nenhuma foto.',
                  _GalleryTab.favorites => 'Ainda não há fotos favoritas.',
                },
              )
            else
              // Grelha → publicações com autor, gostos e comentários
              // (galeria social, `gallery_social_ui.dart`).
              GallerySocialGrid(eventId: widget.eventId, photos: approved),
          ],
        );
        return withNav(list);
      },
    );
  }
}


class _PendingPhotoCard extends ConsumerWidget {
  final GalleryPhoto photo;
  final String eventId;

  const _PendingPhotoCard({required this.photo, required this.eventId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.md),
      ),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(AppRadius.sm),
            child: SizedNetworkImage(
              photo.imageUrl,
              width: 56,
              height: 56,
              fit: BoxFit.cover,
              semanticLabel: 'Foto por aprovar',
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              photo.caption ?? 'Foto por aprovar',
              style: const TextStyle(fontSize: AppFontSize.md),
            ),
          ),
          PressScale(child: IconButton(
            tooltip: 'Aprovar foto',
            icon: const Icon(Hi.checkCircle, color: AppStatusColors.confirmed),
            onPressed: () async {
              await moderateGalleryPhoto(photo.id, true);
              ref.invalidate(eventGalleryPhotosProvider(eventId));
            },
          )),
          PressScale(child: IconButton(
            tooltip: 'Recusar foto',
            icon: const Icon(Hi.xCircle, color: AppStatusColors.declined),
            onPressed: () async {
              await moderateGalleryPhoto(photo.id, false);
              ref.invalidate(eventGalleryPhotosProvider(eventId));
            },
          )),
        ],
      ),
    );
  }
}
