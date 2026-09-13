import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../supabase/supabase_config.dart';

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
  final String weddingId;
  final String uploadedBy;
  final String storagePath;
  final String imageUrl;
  final String? caption;
  final String status;
  final DateTime createdAt;

  const GalleryPhoto({
    required this.id,
    required this.weddingId,
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
final weddingGalleryPhotosProvider =
    FutureProvider.family<List<GalleryPhoto>, String>((ref, weddingId) async {
      final rows = await supabase
          .from('wedding_gallery_photos')
          .select()
          .eq('wedding_id', weddingId)
          .order('created_at', ascending: false);

      final photos = <GalleryPhoto>[];
      for (final row in (rows as List).cast<Map<String, dynamic>>()) {
        final path = row['storage_path'] as String;
        final signedUrl = await supabase.storage
            .from('wedding-gallery')
            .createSignedUrl(path, 3600);
        photos.add(
          GalleryPhoto(
            id: row['id'] as String,
            weddingId: row['wedding_id'] as String,
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
  required String weddingId,
  required XFile file,
  String? caption,
}) async {
  final userId = supabase.auth.currentUser!.id;
  final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
  final token = '${DateTime.now().microsecondsSinceEpoch}_${userId.substring(0, 8)}';
  final path = '$weddingId/$token.$ext';

  await supabase.from('wedding_gallery_photos').insert({
    'wedding_id': weddingId,
    'uploaded_by': userId,
    'storage_path': path,
    'caption': caption,
  });

  final bytes = await file.readAsBytes();
  await supabase.storage
      .from('wedding-gallery')
      .uploadBinary(path, bytes, fileOptions: FileOptions(contentType: 'image/$ext'));
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
  await supabase.from('wedding_gallery_photos').delete().eq('id', photo.id);
  await supabase.storage.from('wedding-gallery').remove([photo.storagePath]);
}
