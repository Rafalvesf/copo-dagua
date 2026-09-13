import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

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
      error: (err, st) => const Scaffold(body: Center(child: Text('Não foi possível carregar.'))),
      data: (weddings) {
        if (weddings.isEmpty) {
          return const Scaffold(body: Center(child: Text('Sem casamento associado.')));
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
  final Set<String> _favorites = {};

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

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Galeria', showBack: false, titleFontSize: 30),
                const SizedBox(height: 16),
                Expanded(
                  child: photosAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
                    data: (photos) {
                      var approved = photos.where((p) => p.status == 'approved').toList();
                      if (_tab == _GalleryTab.mine) {
                        approved = approved.where((p) => p.uploadedBy == myUserId).toList();
                      } else if (_tab == _GalleryTab.favorites) {
                        approved = approved.where((p) => _favorites.contains(p.id)).toList();
                      }

                      return ListView(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          0,
                          AppTheme.screenMargin,
                          140,
                        ),
                        children: [
                          Row(
                            children: [
                              Expanded(
                                child: _GalleryTabChip(
                                  label: 'Todas as fotos',
                                  selected: _tab == _GalleryTab.all,
                                  onTap: () => setState(() => _tab = _GalleryTab.all),
                                ),
                              ),
                              const SizedBox(width: 8),
                              Expanded(
                                child: _GalleryTabChip(
                                  label: 'As tuas fotos',
                                  selected: _tab == _GalleryTab.mine,
                                  onTap: () => setState(() => _tab = _GalleryTab.mine),
                                ),
                              ),
                              const SizedBox(width: 8),
                              Expanded(
                                child: _GalleryTabChip(
                                  label: 'Favoritas',
                                  selected: _tab == _GalleryTab.favorites,
                                  onTap: () => setState(() => _tab = _GalleryTab.favorites),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(
                              color: AppColors.pink,
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Column(
                              children: [
                                Row(
                                  children: [
                                    Container(
                                      width: 40,
                                      height: 40,
                                      decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                                      child: const Icon(Icons.camera_alt_outlined, size: 18, color: AppTheme.ink),
                                    ),
                                    const SizedBox(width: 12),
                                    const Expanded(
                                      child: Text(
                                        'Ajuda-nos a guardar estes momentos! Carrega aqui as tuas fotos do casamento.',
                                        style: TextStyle(fontSize: 13, color: AppTheme.ink),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 12),
                                SnappyTap(
                                  onTap: _upload,
                                  child: Container(
                                    width: double.infinity,
                                    padding: const EdgeInsets.symmetric(vertical: 12),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      color: AppTheme.accentOliveDark,
                                      borderRadius: BorderRadius.circular(999),
                                    ),
                                    child: const Text(
                                      'Adicionar fotos',
                                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13.5),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),
                          if (approved.isEmpty)
                            const Padding(
                              padding: EdgeInsets.symmetric(vertical: 20),
                              child: Center(child: Text('Ainda sem fotos aqui.')),
                            )
                          else
                            GridView.builder(
                              shrinkWrap: true,
                              physics: const NeverScrollableScrollPhysics(),
                              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 3,
                                crossAxisSpacing: 8,
                                mainAxisSpacing: 8,
                              ),
                              itemCount: approved.length,
                              itemBuilder: (context, index) {
                                final photo = approved[index];
                                final favorited = _favorites.contains(photo.id);
                                return ClipRRect(
                                  borderRadius: BorderRadius.circular(12),
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
            child: GuestBottomNav(current: GuestTab.gallery, weddingId: widget.weddingId),
          ),
        ],
      ),
    );
  }
}

class _GalleryTabChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _GalleryTabChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w600,
            fontSize: 12,
          ),
        ),
      ),
    );
  }
}
