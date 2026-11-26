import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/island_sheet.dart';
import '../../shared/widgets/sized_network_image.dart';
import '../../shared/widgets/snappy_tap.dart';
import 'profile_widgets.dart' show ProfileSectionTitle;

/// Fotos dos eventos no perfil (regra do Rafael, 2026-11-26): as fotos da
/// galeria são só de quem está no evento; no perfil de quem as publicou
/// aparecem apenas a quem também esteve nesse evento (`profile_event_photos`,
/// migração 244 — a mesma regra da galeria). Sem nenhuma em comum, a secção
/// não aparece.
class ProfileEventPhoto {
  final String id;
  final String eventName;
  final String url;
  const ProfileEventPhoto({required this.id, required this.eventName, required this.url});
}

final profileEventPhotosProvider =
    FutureProvider.autoDispose.family<List<ProfileEventPhoto>, String>((ref, profileId) async {
  try {
    final rows = (await supabase.rpc('profile_event_photos', params: {'p_profile': profileId}) as List)
        .cast<Map<String, dynamic>>();
    if (rows.isEmpty) return const [];
    final signed = await supabase.storage
        .from('wedding-gallery')
        .createSignedUrls([for (final r in rows) r['storage_path'] as String], 3600);
    final byPath = {for (final s in signed) s.path: s.signedUrl};
    return [
      for (final r in rows)
        if (byPath[r['storage_path']] != null)
          ProfileEventPhoto(
            id: r['photo_id'] as String,
            eventName: (r['event_name'] as String?) ?? 'Evento',
            url: byPath[r['storage_path']]!,
          ),
    ];
  } catch (_) {
    // Antes da migração 244, ou sem rede: sem secção.
    return const [];
  }
});

class ProfileEventPhotos extends ConsumerWidget {
  final String profileId;
  const ProfileEventPhotos({super.key, required this.profileId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final photos = ref.watch(profileEventPhotosProvider(profileId)).value ?? const <ProfileEventPhoto>[];
    if (photos.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      ProfileSectionTitle('Fotos dos eventos', action: '${photos.length}'),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: GridView.count(
          crossAxisCount: 3,
          mainAxisSpacing: 6,
          crossAxisSpacing: 6,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            for (final p in photos)
              SnappyTap(
                semanticLabel: 'Foto de ${p.eventName}',
                onTap: () => _open(context, p),
                child: ClipRSuperellipse(
                  borderRadius: BorderRadius.circular(16),
                  child: SizedNetworkImage(p.url, fit: BoxFit.cover),
                ),
              ),
          ],
        ),
      ),
      const Padding(
        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 10, AppTheme.screenMargin, 0),
        child: Text('Só vês as fotos dos eventos onde também estiveste.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
      ),
    ]);
  }

  void _open(BuildContext context, ProfileEventPhoto p) {
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (context) => Padding(
        padding: const EdgeInsets.all(20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            Expanded(
              child: Text(p.eventName, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            const IslandCloseButton(),
          ]),
          const SizedBox(height: 16),
          ClipRSuperellipse(
            borderRadius: BorderRadius.circular(22),
            child: SizedNetworkImage(p.url, fit: BoxFit.contain),
          ),
        ]),
      ),
    );
  }
}
