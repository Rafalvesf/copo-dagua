import 'package:flutter/material.dart';
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

enum _GalleryTab { all, mine, favorites }

/// Galeria do lado do convidado — pedido explícito do utilizador
/// (mockup de referência): separadores "Todas as fotos/As tuas
/// fotos/Favoritas" + cartão "Adicionar fotos". Ecrã próprio, distinto
/// de `gallery_screen.dart` (a Galeria do casal, com moderação) —
/// pedido explícito do utilizador (2026-09-13): "a aba galeria tem que
/// manter o mesmo layout e arquitetura" força a não mexer nesse ecrã
/// partilhado; construir um ecrã novo só para o convidado satisfaz os
/// dois pedidos ao mesmo tempo. Mesma fonte de dados
/// (`weddingGalleryPhotosProvider`/`uploadGalleryPhoto`), só a UI é
/// diferente. "Favoritas" é só um toque local (sem coluna própria em
/// `wedding_gallery_photos`), não persiste entre sessões.
class GuestGalleryScreen extends ConsumerWidget {
  /// `null` = conta 100% convidado, sem "Modo convidado" — resolve o
  /// casamento sozinho via [guestWeddingsProvider] (`weddings.first`,
  /// mesmo padrão de [GuestHomeScreen]).
  final String? weddingId;

  const GuestGalleryScreen({super.key, this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (weddingId != null) return _GuestGalleryBody(weddingId: weddingId!);

    final weddingsAsync = ref.watch(guestWeddingsProvider);
    return weddingsAsync.when(
      loading: () => const Scaffold(body: Center(child: CircularProgressIndicator())),
      error: (err, st) => Scaffold(body: AsyncErrorView(onRetry: () => ref.invalidate(guestWeddingsProvider))),
      data: (weddings) {
        if (weddings.isEmpty) {
          return const Scaffold(body: EmptyStateView(message: 'Sem casamento associado.', icon: Icons.favorite_border));
        }
        return _GuestGalleryBody(weddingId: weddings.first.weddingId);
      },
    );
  }
}

class _GuestGalleryBody extends ConsumerStatefulWidget {
  final String weddingId;

  const _GuestGalleryBody({required this.weddingId});

  @override
  ConsumerState<_GuestGalleryBody> createState() => _GuestGalleryScreenState();
}

class _GuestGalleryScreenState extends ConsumerState<_GuestGalleryBody> {
  _GalleryTab _tab = _GalleryTab.all;

  Future<void> _upload() async {
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
      await uploadGalleryPhoto(weddingId: widget.weddingId, file: file);
      ref.invalidate(weddingGalleryPhotosProvider(widget.weddingId));
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Foto enviada — aguarda aprovação do casal.')),
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
    final photosAsync = ref.watch(weddingGalleryPhotosProvider(widget.weddingId));
    final myUserId = ref.watch(authControllerProvider).profile?.id;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Canvas "Convidado · Galeria": título ao centro e "+" verde.
                PageHeader(title: 'Galeria', showBack: false, centered: true, trailing: AddActionButton(onTap: _upload)),
                const SizedBox(height: 16),
                Expanded(
                  child: photosAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(weddingGalleryPhotosProvider(widget.weddingId))),
                    data: (photos) {
                      var approved = photos.where((p) => p.status == 'approved').toList();
                      if (_tab == _GalleryTab.mine) {
                        approved = approved.where((p) => p.uploadedBy == myUserId).toList();
                      } else if (_tab == _GalleryTab.favorites) {
                        final meta = ref.watch(galleryFeedMetaProvider(widget.weddingId)).asData?.value ?? const {};
                        approved = approved.where((p) => meta[p.id]?.likedByMe ?? false).toList();
                      }

                      return ListView(
                        padding: EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          0,
                          AppTheme.screenMargin,
                          FloatingFilterBar.bottomPadding(aboveNav: true),
                        ),
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                            decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(12)),
                            child: const Row(
                              children: [
                                Icon(Icons.schedule, size: 18, color: AppTheme.inkMuted),
                                SizedBox(width: 12),
                                Expanded(
                                  child: Text(
                                    'As tuas fotos aparecem depois de os anfitriões aprovarem.',
                                    style: TextStyle(fontSize: 13, height: 18 / 13, color: AppTheme.inkMuted),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),
                          const Text(
                            'ESTA SEMANA',
                            style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.8, color: AppTheme.inkMuted),
                          ),
                          const SizedBox(height: 10),
                          if (approved.isEmpty)
                            const GalleryEmptyState(
                              message: 'Ainda não existem fotos. Carrega as primeiras.',
                            )
                          else
                            GallerySocialGrid(weddingId: widget.weddingId, photos: approved),
                        ],
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.gallery, weddingId: widget.weddingId, top: FilterChipsRow(
              items: const [
                FilterBarItem('Todas'),
                FilterBarItem('As tuas'),
                FilterBarItem('Favoritas'),
              ],
              selected: _GalleryTab.values.indexOf(_tab),
              onSelected: (i) => setState(() => _tab = _GalleryTab.values[i]),
            )),
          ),
        ],
      ),
    );
  }
}

