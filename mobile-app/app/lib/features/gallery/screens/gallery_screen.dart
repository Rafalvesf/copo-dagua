import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/feedback.dart';

enum _GalleryTab { all, mine, favorites }

/// Galeria moderada do casamento (`061_wedding_gallery.sql`) — pedido
/// explícito do utilizador: fotos de todos (convidados e casal), só
/// visíveis depois de aprovadas pelo casal. `weddingId` explícito
/// (em vez de ler sempre `weddingControllerProvider`) porque um
/// convidado pode pertencer a mais do que um casamento
/// (`wedding_guest_members`) — nesse caso `null` aqui, resolvido a
/// partir de quem entrou no ecrã. Pedido explícito do utilizador
/// (2026-09-13): "a galeria para os noivos tem que ser igual a dos
/// convidados" — mesmos separadores "Todas as fotos/As tuas
/// fotos/Favoritas" e cartão "Adicionar fotos" de
/// `guest_gallery_screen.dart`; só a secção de pendentes de aprovação
/// (exclusiva do casal) continua a existir aqui.
class GalleryScreen extends ConsumerWidget {
  final String? weddingId;

  const GalleryScreen({super.key, this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final resolvedWeddingId =
        weddingId ?? ref.watch(weddingControllerProvider).wedding?.id;
    final isCouple = profile?.role == UserRole.couple;
    final isGuest = profile?.role == UserRole.guest;
    final showNav = weddingId == null && isCouple;
    // Um `weddingId` explícito só acontece hoje vindo de "Modo
    // convidado" (`GuestWeddingCard`, uma conta de casal a acompanhar
    // OUTRO casamento) — esse caso também mostra a navbar de
    // convidado, com os outros 3 separadores presos a esse mesmo
    // `weddingId` (ver `GuestBottomNav`).
    final showGuestNav = isGuest || weddingId != null;

    if (resolvedWeddingId == null) {
      return GradientScaffold(
        background: AppBackground.subtle,
        body: const EmptyStateView(message: 'Sem casamento associado.', icon: Icons.favorite_border),
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
                PageHeader(
                  title: 'Galeria',
                  topPadding: 8,
                  // Sem seta de voltar sempre que há navbar (casal ou
                  // convidado) — mesma convenção dos outros ecrãs raiz.
                  showBack: !(showNav || showGuestNav),
                  // Redesign 2026-10: "+" para carregar fotos, no mesmo
                  // sítio que nos outros ecrãs (antes era um cartão rosa).
                  trailing: AddActionButton(
                    onTap: () => _upload(context, ref, resolvedWeddingId),
                  ),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: _GalleryBody(
                    weddingId: resolvedWeddingId,
                    isCouple: isCouple,
                    currentUserId: profile?.id,
                    aboveNav: showNav || showGuestNav,
                    // A navbar vive dentro do corpo para os filtros da
                    // galeria ficarem ligados a ela (redesign 2026-10).
                    navBuilder: showNav
                        ? (top) => FloatingBottomNav(
                            current: AppTab.gallery,
                            top: top,
                          )
                        : showGuestNav
                        ? (top) => GuestBottomNav(
                            current: GuestTab.gallery,
                            weddingId: weddingId,
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

  static Future<void> _upload(BuildContext context, WidgetRef ref, String weddingId) async {
    final source = await showModalBottomSheet<ImageSource>(
      context: context,
      builder: (context) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.photo_camera_outlined),
              title: const Text('Tirar fotografia'),
              onTap: () => Navigator.of(context).pop(ImageSource.camera),
            ),
            ListTile(
              leading: const Icon(Icons.photo_library_outlined),
              title: const Text('Escolher da galeria'),
              onTap: () => Navigator.of(context).pop(ImageSource.gallery),
            ),
          ],
        ),
      ),
    );
    if (source == null) return;

    final file = await ImagePicker().pickImage(source: source);
    if (file == null) return;
    try {
      await uploadGalleryPhoto(weddingId: weddingId, file: file);
      ref.invalidate(weddingGalleryPhotosProvider(weddingId));
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Foto enviada — aguarda aprovação do casal.'),
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
  final String weddingId;
  final bool isCouple;
  final String? currentUserId;
  final bool aboveNav;
  final Widget Function(Widget? top)? navBuilder;

  const _GalleryBody({
    required this.weddingId,
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
  final Set<String> _favorites = {};
  bool _showPending = false;

  @override
  Widget build(BuildContext context) {
    final photosAsync = ref.watch(weddingGalleryPhotosProvider(widget.weddingId));

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
      loading: () => withNav(const Center(child: CircularProgressIndicator())),
      error: (err, st) => withNav(AsyncErrorView(onRetry: () => ref.invalidate(weddingGalleryPhotosProvider(widget.weddingId)))),
      data: (photos) {
        final pending = widget.isCouple
            ? photos.where((p) => p.status == 'pending').toList()
            : const <GalleryPhoto>[];
        var approved = photos.where((p) => p.status == 'approved').toList();
        if (_tab == _GalleryTab.mine) {
          approved = approved.where((p) => p.uploadedBy == widget.currentUserId).toList();
        } else if (_tab == _GalleryTab.favorites) {
          approved = approved.where((p) => _favorites.contains(p.id)).toList();
        }

        const tabs = [
          _GalleryTab.all,
          _GalleryTab.mine,
          _GalleryTab.favorites,
        ];
        final list = ListView(
          padding: EdgeInsets.fromLTRB(
            AppTheme.screenMargin,
            0,
            AppTheme.screenMargin,
            FloatingFilterBar.bottomPadding(aboveNav: widget.aboveNav),
          ),
          children: [
            if (pending.isNotEmpty) ...[
              // Aviso amarelo (canvas): quantas fotos esperam aprovação;
              // "Rever" abre a lista para aprovar ou recusar.
              Container(
                padding: const EdgeInsets.fromLTRB(14, 10, 6, 10),
                decoration: BoxDecoration(
                  color: const Color(0xFFFCEFD6),
                  borderRadius: BorderRadius.circular(AppRadius.md),
                  border: Border.all(color: AppStatusColors.pending),
                ),
                child: Row(
                  children: [
                    const Icon(Icons.schedule_rounded, size: 18, color: Color(0xFF7A5000)),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        pending.length == 1
                            ? '1 foto de convidados à espera da vossa aprovação.'
                            : '${pending.length} fotos de convidados à espera da vossa aprovação.',
                        style: const TextStyle(
                          fontSize: AppFontSize.md,
                          color: Color(0xFF7A5000),
                        ),
                      ),
                    ),
                    TextButton(
                      onPressed: () => setState(() => _showPending = !_showPending),
                      style: TextButton.styleFrom(
                        foregroundColor: const Color(0xFF7A5000),
                        textStyle: const TextStyle(
                          fontWeight: FontWeight.w700,
                          decoration: TextDecoration.underline,
                        ),
                      ),
                      child: Text(_showPending ? 'Fechar' : 'Rever'),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              if (_showPending) ...[
                for (final photo in pending)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: _PendingPhotoCard(photo: photo, weddingId: widget.weddingId),
                  ),
              ],
              const SizedBox(height: 8),
            ],
            if (approved.isEmpty)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 20),
                child: Center(child: Text('Ainda sem fotos aqui.')),
              )
            else
              ClipRRect(
                borderRadius: BorderRadius.circular(AppRadius.sm),
                child: GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  crossAxisSpacing: 4,
                  mainAxisSpacing: 4,
                ),
                itemCount: approved.length,
                itemBuilder: (context, index) {
                  final photo = approved[index];
                  final favorited = _favorites.contains(photo.id);
                  return ClipRRect(
                    borderRadius: BorderRadius.circular(AppRadius.xs),
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        Image.network(photo.imageUrl, fit: BoxFit.cover),
                        Positioned(
                          top: 4,
                          right: 4,
                          child: GestureDetector(
                            onTap: () => setState(() {
                              favorited ? _favorites.remove(photo.id) : _favorites.add(photo.id);
                            }),
                            child: Icon(
                              favorited ? Icons.favorite : Icons.favorite_border,
                              size: 18,
                              color: favorited ? AppStatusColors.declined : Colors.white,
                            ),
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
              ),
          ],
        );
        final filters = FilterChipsRow(
          items: const [
            FilterBarItem('Todas'),
            FilterBarItem('As tuas'),
            FilterBarItem('Favoritas'),
          ],
          selected: tabs.indexOf(_tab),
          onSelected: (i) => setState(() => _tab = tabs[i]),
        );
        if (widget.navBuilder != null) return withNav(list, top: filters);
        return Stack(
          children: [
            Positioned.fill(child: list),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: FloatingFilterBar(
                items: filters.items,
                selected: filters.selected,
                onSelected: filters.onSelected,
              ),
            ),
          ],
        );
      },
    );
  }
}


class _PendingPhotoCard extends ConsumerWidget {
  final GalleryPhoto photo;
  final String weddingId;

  const _PendingPhotoCard({required this.photo, required this.weddingId});

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
            child: Image.network(
              photo.imageUrl,
              width: 56,
              height: 56,
              fit: BoxFit.cover,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              photo.caption ?? 'Foto por aprovar',
              style: const TextStyle(fontSize: AppFontSize.md),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.check_circle_outline, color: AppStatusColors.confirmed),
            onPressed: () async {
              await moderateGalleryPhoto(photo.id, true);
              ref.invalidate(weddingGalleryPhotosProvider(weddingId));
            },
          ),
          IconButton(
            icon: const Icon(Icons.cancel_outlined, color: AppStatusColors.declined),
            onPressed: () async {
              await moderateGalleryPhoto(photo.id, false);
              ref.invalidate(weddingGalleryPhotosProvider(weddingId));
            },
          ),
        ],
      ),
    );
  }
}
