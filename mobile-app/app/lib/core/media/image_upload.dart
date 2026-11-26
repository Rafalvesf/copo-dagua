import 'dart:typed_data';

import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;

import '../supabase/supabase_config.dart';
import 'image_convert_stub.dart' if (dart.library.js_interop) 'image_convert_web.dart';

/// Imagens da app (regra do Rafael, 2026-11-26): toda a imagem que sobe para
/// o Storage passa por aqui.
///
/// - **A versão que a app mostra** fica no caminho pedido, convertida para
///   WebP (ou JPEG, onde o browser não sabe criar WebP — iPhone), com o lado
///   maior até 1600 px (512 px em avatares, logótipos e fotos de perfil).
///   Assim as fotos pesam centenas de KB em vez de MB e o iPhone não fecha a
///   página por falta de memória.
/// - **O original**, tal como a pessoa o escolheu, fica ao lado em
///   `<caminho>.original` — é o que se entrega ao descarregar.
///
/// Ficheiros que não são imagens (vídeos do portefólio, PDFs) sobem como
/// vieram. Nas apps nativas, por agora, sobe o original nos dois sítios.
const kImageMaxSide = 1600;
const kAvatarMaxSide = 512;

/// Caminho do original de uma imagem guardada em [path].
String originalPathOf(String path) => '$path.original';

bool _isSmall(String bucket, String path) {
  final base = path.split('/').last.toLowerCase();
  return bucket == 'avatars' || base.startsWith('logo') || base.startsWith('profile') || base.startsWith('avatar');
}

String _typeOf(String path, Uint8List bytes, FileOptions? options) {
  final t = options?.contentType;
  if (t != null && t.isNotEmpty && t != 'application/octet-stream') return t;
  if (bytes.length > 12) {
    if (bytes[0] == 0xFF && bytes[1] == 0xD8) return 'image/jpeg';
    if (bytes[0] == 0x89 && bytes[1] == 0x50) return 'image/png';
    if (bytes[8] == 0x57 && bytes[9] == 0x45 && bytes[10] == 0x42 && bytes[11] == 0x50) return 'image/webp';
  }
  final ext = path.split('.').last.toLowerCase();
  return switch (ext) {
    'jpg' || 'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'webp' => 'image/webp',
    'heic' || 'heif' => 'image/heic',
    'gif' => 'image/gif',
    _ => 'application/octet-stream',
  };
}

/// Substitui `supabase.storage.from(bucket).uploadBinary(path, bytes, …)`
/// para imagens: sobe a versão leve em [path] e o original ao lado.
Future<String> uploadImageBinary(String bucket, String path, Uint8List bytes, {FileOptions? fileOptions}) async {
  final store = supabase.storage.from(bucket);
  final type = _typeOf(path, bytes, fileOptions);
  final upsert = fileOptions?.upsert ?? false;
  // GIF (animado) e o que não é imagem sobem como vieram.
  if (!type.startsWith('image/') || type == 'image/gif') {
    return store.uploadBinary(path, bytes, fileOptions: fileOptions ?? FileOptions(contentType: type));
  }
  final converted = await convertImageForDisplay(bytes, maxSide: _isSmall(bucket, path) ? kAvatarMaxSide : kImageMaxSide);
  final shown = converted ?? (bytes: bytes, type: type);
  final key = await store.uploadBinary(
    path,
    shown.bytes,
    fileOptions: FileOptions(contentType: shown.type, upsert: upsert, cacheControl: fileOptions?.cacheControl ?? '3600'),
  );
  // O original ao lado (melhor esforço: se falhar, a app continua com a
  // versão leve e o «Descarregar» entrega essa).
  if (converted != null) {
    try {
      await store.uploadBinary(originalPathOf(path), bytes, fileOptions: FileOptions(contentType: type, upsert: true));
    } catch (_) {}
  }
  return key;
}
