import 'dart:typed_data';

/// Apps nativas: por agora sem conversão (sobe o original). Ver
/// `image_convert_web.dart` e `image_upload.dart`.
Future<({Uint8List bytes, String type})?> convertImageForDisplay(Uint8List bytes, {required int maxSide}) async => null;
