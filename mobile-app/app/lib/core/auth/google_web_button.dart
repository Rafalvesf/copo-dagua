import 'package:flutter/widgets.dart';

import 'google_web_button_stub.dart' if (dart.library.js_interop) 'google_web_button_web.dart' as impl;

/// Botão oficial "Continuar com Google" na web (Google Identity Services).
/// Fora da web devolve `null` e o ecrã usa o botão normal (OAuth).
/// [onCredential] recebe o ID token e o nonce original para o Supabase.
Widget? googleWebButton({required void Function(String idToken, String nonce) onCredential}) =>
    impl.googleWebButton(onCredential: onCredential);
