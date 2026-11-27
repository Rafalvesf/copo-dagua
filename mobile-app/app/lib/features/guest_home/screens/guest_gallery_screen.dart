import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import '../../../core/events/event_pass.dart' show myEventPassProvider, GuestSections;
import 'package:copo_dagua_app/features/guest_home/widgets/guest_events_pill.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/gallery_placeholder.dart';
import '../../../core/gallery/gallery_social.dart';
import '../../gallery/widgets/gallery_social_ui.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

enum _GalleryTab { all, mine, favorites }

/// Galeria do lado do convidado — pedido explícito do utilizador
/// (mockup de referência): separadores "Todas as fotos/As tuas
/// fotos/Favoritas" + cartão "Adicionar fotos". Ecrã próprio, distinto
/// de `gallery_screen.dart` (a Galeria do casal, com moderação) —
/// pedido explícito do utilizador (2026-09-13): "a aba galeria tem que
/// manter o mesmo layout e arquitetura" força a não mexer nesse ecrã
/// partilhado; construir um ecrã novo só para o convidado satisfaz os
/// dois pedidos ao mesmo tempo. Mesma fonte de dados
/// (`eventGalleryPhotosProvider`/`uploadGalleryPhoto`), só a UI é
/// diferente. "Favoritas" é só um toque local (sem coluna própria em
/// `wedding_gallery_photos`), não persiste entre sessões.
class GuestGalleryScreen extends ConsumerWidget {
  /// `null` = conta 100% convidado, sem "Modo convidado" — resolve o
  /// casamento sozinho via [guestEventsProvider] (`events.first`,
  /// mesmo padrão de [GuestHomeScreen]).
  final String? eventId;

  const GuestGalleryScreen({super.key, this.eventId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (eventId != null) return _GuestGalleryBody(eventId: eventId!);

    final eventsAsync = ref.watch(guestEventsProvider);
    return eventsAsync.when(
      loading: () => const SkeletonPage(carousel: false),
      error: (err, st) => Scaffold(body: AsyncErrorView(onRetry: () => ref.invalidate(guestEventsProvider))),
      data: (events) {
        if (events.isEmpty) {
          return const Scaffold(body: EmptyStateView(message: 'Sem casamento associado.', icon: Hi.heartOutline));
        }
        return _GuestGalleryBody(eventId: events.first.eventId);
      },
    );
  }
}

class _GuestGalleryBody extends ConsumerStatefulWidget {
  final String eventId;

  const _GuestGalleryBody({required this.eventId});

  @override
  ConsumerState<_GuestGalleryBody> createState() => _GuestGalleryScreenState();
}

class _GuestGalleryScreenState extends ConsumerState<_GuestGalleryBody> {
  _GalleryTab _tab = _GalleryTab.all;

  Future<void> _upload() async {
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
      if (!mounted || !await ensurePermission(context, AppPermission.camera)) return;
    }

    final file = await ImagePicker().pickImage(source: source);
    if (file == null) return;
    try {
      await uploadGalleryPhoto(eventId: widget.eventId, file: file);
      ref.invalidate(eventGalleryPhotosProvider(widget.eventId));
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Foto enviada — aguarda aprovação dos organizadores.')),
        );
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível enviar a foto.')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final photosAsync = ref.watch(eventGalleryPhotosProvider(widget.eventId));
    final myUserId = ref.watch(authControllerProvider).profile?.id;
    // Opções do organizador (Para os convidados › Galeria, 2026-11-08).
    final opts = ref.watch(myEventPassProvider(widget.eventId)).value?.sections ?? const GuestSections();
    final date = ref.watch(guestEventsProvider).value?.where((w) => w.eventId == widget.eventId).firstOrNull?.eventDate;
    final open = opts.galleryOpen(date);
    final canUpload = open && opts.galleryUpload;

    final back = widget.eventId == null ? '/guest-home' : '/guest-home/${widget.eventId}';
    // Mockup «Páginas do convidado» → Galeria (2026-11-14): voltar e «+»
    // em cima, título, filtros em pílula e a grelha; sem barra de baixo.
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        children: [
          Row(children: [
            GuestEventsPill(to: back),
            const Spacer(),
            if (canUpload) KitAddButton(tooltip: 'Partilhar fotos', onTap: _upload),
          ]),
          const KitTitle('Galeria', subtitle: 'As tuas fotos aparecem depois de os anfitriões aprovarem.'),
          if (!open)
            const Padding(
              padding: EdgeInsets.only(top: 40),
              child: EmptyStateView(message: 'A galeria abre no dia do evento.', icon: Hi.rectangleStack),
            )
          else
            photosAsync.when(
              loading: () => const Padding(padding: EdgeInsets.only(top: 60), child: SkeletonGrid()),
              error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(eventGalleryPhotosProvider(widget.eventId))),
              data: (photos) {
                final all = photos.where((p) => p.status == 'approved').toList();
                final meta = ref.watch(galleryFeedMetaProvider(widget.eventId)).asData?.value ?? const {};
                final mine = all.where((p) => p.uploadedBy == myUserId).toList();
                final favs = all.where((p) => meta[p.id]?.likedByMe ?? false).toList();
                final shown = switch (_tab) {
                  _GalleryTab.mine => mine,
                  _GalleryTab.favorites => favs,
                  _ => all,
                };
                return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  KitPills([
                    KitPill(label: 'Todas', count: all.length, selected: _tab == _GalleryTab.values.first,
                        onTap: () => setState(() => _tab = _GalleryTab.values.first)),
                    KitPill(label: 'As tuas', count: mine.length, selected: _tab == _GalleryTab.mine,
                        onTap: () => setState(() => _tab = _GalleryTab.mine)),
                    KitPill(label: 'Favoritas', count: favs.length, selected: _tab == _GalleryTab.favorites,
                        onTap: () => setState(() => _tab = _GalleryTab.favorites)),
                  ]),
                  const SizedBox(height: 12),
                  const GalleryViewToggle(),
                  const KitCaps('Esta semana', top: 20),
                  if (shown.isEmpty)
                    const GalleryEmptyState(message: 'Ainda não existem fotos. Carrega as primeiras.')
                  else
                    GalleryFeed(eventId: widget.eventId, photos: shown),
                ]);
              },
            ),
        ],
      ),
    );
  }
}
