import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../moderation/moderation.dart';
import '../supabase/supabase_config.dart';
import 'package:copo_dagua_app/core/media/image_upload.dart';

/// Galeria de fotos do casamento, moderada pelo casal
/// (`061_wedding_gallery.sql`) — pedido explícito do utilizador: "todas
/// as fotos tiradas por todos (convidados e casal)... mas as fotos tem
/// que ser verificadas e permitidas pelo casal antes de aparecerem na
/// galeria". `wedding-gallery` é um bucket privado (ao contrário de
/// `portfolio`/`wedding-banners`) — `imageUrl` é sempre um signed URL,
/// nunca `getPublicUrl()`, porque a visibilidade real depende de
/// `wedding_gallery_photos.status`/`uploaded_by`, não é público por
/// omissão.
class GalleryPhoto {
  final String id;
  final String eventId;
  final String uploadedBy;
  final String storagePath;
  final String imageUrl;
  final String? caption;
  final String status;
  final DateTime createdAt;

  const GalleryPhoto({
    required this.id,
    required this.eventId,
    required this.uploadedBy,
    required this.storagePath,
    required this.imageUrl,
    this.caption,
    required this.status,
    required this.createdAt,
  });
}

/// A RLS de `wedding_gallery_photos` já decide o que cada chamador vê
/// (casal: tudo; convidado: só `approved` + as próprias) — este
/// provider lê exatamente essas linhas, sem filtro extra do lado do
/// Dart. Signed URLs pedidos um a um (âmbito de uma galeria de
/// casamento, não milhares de fotos) — `createSignedUrl` em vez de
/// `getPublicUrl()` porque o bucket é privado.
final eventGalleryPhotosProvider =
    FutureProvider.family<List<GalleryPhoto>, String>((ref, eventId) async {
      // Pessoas bloqueadas (migração 130): as fotografias delas não aparecem.
      final blocked = await ref.watch(blockedProfilesProvider.future);
      final rows = await supabase
          .from('wedding_gallery_photos')
          .select()
          .eq('wedding_id', eventId)
          .order('created_at', ascending: false);

      final photos = <GalleryPhoto>[];
      for (final row in (rows as List).cast<Map<String, dynamic>>()) {
        if (blocked.contains(row['uploaded_by'])) continue;
        final path = row['storage_path'] as String;
        final signedUrl = await supabase.storage
            .from('wedding-gallery')
            .createSignedUrl(path, 3600);
        photos.add(
          GalleryPhoto(
            id: row['id'] as String,
            eventId: row['wedding_id'] as String,
            uploadedBy: row['uploaded_by'] as String,
            storagePath: path,
            imageUrl: signedUrl,
            caption: row['caption'] as String?,
            status: row['status'] as String,
            createdAt: DateTime.parse(row['created_at'] as String),
          ),
        );
      }
      return photos;
    });

/// Faz upload real (casal ou convidado, `is_wedding_member()`/
/// `is_wedding_guest_member()`) — a linha de metadados é criada
/// ANTES do ficheiro subir de propósito: `uploadBinary()` faz um
/// `insert ... returning` interno, que passa pela policy de SELECT de
/// `storage.objects`, e essa policy depende de já existir uma linha em
/// `wedding_gallery_photos` com este `storage_path` (mesma lição de
/// `030_portfolio_storage_select_policy.sql`, ver nota em
/// `061_wedding_gallery.sql`).
Future<void> uploadGalleryPhoto({
  required String eventId,
  required XFile file,
  String? caption,
  /// Fotos de quem organiza ficam logo aprovadas (pedido 2026-10-17:
  /// "tenho que verificar a minha própria fotografia"). A 083 faz isto
  /// também na base de dados; isto cobre o caso de ainda não ter corrido.
  bool autoApprove = false,
}) async {
  final userId = supabase.auth.currentUser!.id;
  final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
  final token = '${DateTime.now().microsecondsSinceEpoch}_${userId.substring(0, 8)}';
  final path = '$eventId/$token.$ext';

  final row = await supabase
      .from('wedding_gallery_photos')
      .insert({
        'wedding_id': eventId,
        'uploaded_by': userId,
        'storage_path': path,
        'caption': caption,
      })
      .select('id, status')
      .single();

  final bytes = await file.readAsBytes();
  await uploadImageBinary('wedding-gallery', path, bytes, fileOptions: FileOptions(contentType: 'image/$ext'));

  if (autoApprove && row['status'] == 'pending') {
    try {
      await moderateGalleryPhoto(row['id'] as String, true);
    } catch (_) {}
  }
}

/// Link para descarregar a foto no tamanho original (regra de 2026-11-26:
/// a app mostra uma versão leve, quem descarrega recebe o original). Sem
/// original guardado (fotos antigas), a versão que se vê.
Future<String> galleryDownloadUrl(GalleryPhoto photo) async {
  try {
    return await supabase.storage.from('wedding-gallery').createSignedUrl(originalPathOf(photo.storagePath), 600);
  } catch (_) {
    return photo.imageUrl;
  }
}

/// `moderate_gallery_photo()` — só o casal (`is_wedding_member()`,
/// verificado dentro da função) pode aprovar/recusar.
Future<void> moderateGalleryPhoto(String photoId, bool approve) async {
  await supabase.rpc(
    'moderate_gallery_photo',
    params: {'p_photo_id': photoId, 'p_approve': approve},
  );
}

/// Remove a foto (autor ou casal, RLS de `wedding_gallery_photos` já
/// decide) — linha de metadados primeiro, depois o ficheiro; ao
/// contrário do upload, a ordem aqui não é de segurança, só evita um
/// ficheiro órfão no Storage se o segundo passo falhar (pior do que uma
/// linha órfã, que a UI já filtra por não existir).
Future<void> deleteGalleryPhoto(GalleryPhoto photo) async {
  // O original (2026-11-26) sai primeiro: a regra do Storage precisa da
  // linha da foto para o deixar apagar.
  try {
    await supabase.storage.from('wedding-gallery').remove([originalPathOf(photo.storagePath)]);
  } catch (_) {}
  await supabase.from('wedding_gallery_photos').delete().eq('id', photo.id);
  await supabase.storage.from('wedding-gallery').remove([photo.storagePath]);
}
