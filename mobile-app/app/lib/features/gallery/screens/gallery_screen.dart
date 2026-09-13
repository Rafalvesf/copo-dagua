import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

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
        body: const Center(child: Text('Sem casamento associado.')),
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
                  titleFontSize: 30,
                  // Sem seta de voltar sempre que há navbar (casal ou
                  // convidado, incluindo "Modo convidado" com
                  // `weddingId` explícito) — mesma convenção de todos
                  // os outros ecrãs raiz da app.
                  showBack: !(showNav || showGuestNav),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: _GalleryBody(
                    weddingId: resolvedWeddingId,
                    isCouple: isCouple,
                    currentUserId: profile?.id,
                  ),
                ),
              ],
            ),
          ),
          if (showNav)
            const Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: FloatingBottomNav(current: AppTab.gallery),
            ),
          if (showGuestNav)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: GuestBottomNav(current: GuestTab.gallery, weddingId: weddingId),
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

  const _GalleryBody({required this.weddingId, required this.isCouple, required this.currentUserId});

  @override
  ConsumerState<_GalleryBody> createState() => _GalleryBodyState();
}

class _GalleryBodyState extends ConsumerState<_GalleryBody> {
  _GalleryTab _tab = _GalleryTab.all;
  final Set<String> _favorites = {};

  @override
  Widget build(BuildContext context) {
    final photosAsync = ref.watch(weddingGalleryPhotosProvider(widget.weddingId));

    return photosAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
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
                    onTap: () => GalleryScreen._upload(context, ref, widget.weddingId),
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
            if (pending.isNotEmpty) ...[
              Text(
                'Pendentes de aprovação (${pending.length})',
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
              ),
              const SizedBox(height: 10),
              for (final photo in pending)
                Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: _PendingPhotoCard(photo: photo, weddingId: widget.weddingId),
                ),
              const SizedBox(height: 20),
            ],
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
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(10),
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
              style: const TextStyle(fontSize: 13),
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
