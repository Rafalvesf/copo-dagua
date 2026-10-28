import 'dart:async';
import 'dart:convert';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';

/// Notificações com a app fechada em Android/iOS (2026-10-28): Firebase
/// Cloud Messaging. O token do telemóvel é guardado em
/// `push_subscriptions` como `endpoint = 'fcm:<token>'` e a Edge Function
/// `send-push` envia pelo FCM. Na web continua o Web Push (`push_web.dart`).

// Projeto Firebase "a-nossa". As chaves não ficam no código (o repositório
// é público): entram no build com --dart-define, a partir dos segredos do
// GitHub (FIREBASE_ANDROID_API_KEY, FIREBASE_IOS_API_KEY). Sem elas, as
// notificações no telemóvel ficam desligadas.
const _androidKey = String.fromEnvironment('FIREBASE_ANDROID_API_KEY');
const _iosKey = String.fromEnvironment('FIREBASE_IOS_API_KEY');

const _android = FirebaseOptions(
  apiKey: _androidKey,
  appId: '1:891202657443:android:0e19bcb0be6e47193a7316',
  messagingSenderId: '891202657443',
  projectId: 'a-nossa',
  storageBucket: 'a-nossa.firebasestorage.app',
);

const _ios = FirebaseOptions(
  apiKey: _iosKey,
  appId: '1:891202657443:ios:0235a6c511eadacb3a7316',
  messagingSenderId: '891202657443',
  projectId: 'a-nossa',
  storageBucket: 'a-nossa.firebasestorage.app',
  iosBundleId: 'pt.anossa.app',
);

FirebaseOptions? get _options => switch (defaultTargetPlatform) {
      TargetPlatform.android when _androidKey.isNotEmpty => _android,
      TargetPlatform.iOS when _iosKey.isNotEmpty => _ios,
      _ => null,
    };

String _status = 'unsupported';
bool _ready = false;
void Function(String link)? _onOpen;
String? _pendingLink;

/// No arranque (antes do runApp): inicia o Firebase e lê o estado.
Future<void> pushInit() async {
  final opts = _options;
  if (opts == null) return;
  try {
    if (Firebase.apps.isEmpty) await Firebase.initializeApp(options: opts);
    _ready = true;
    final s = await FirebaseMessaging.instance.getNotificationSettings();
    _status = _map(s.authorizationStatus);
    // Toque numa notificação: abre o ecrã certo.
    final initial = await FirebaseMessaging.instance.getInitialMessage();
    if (initial != null) _open(initial);
    FirebaseMessaging.onMessageOpenedApp.listen(_open);
  } catch (_) {
    _ready = false;
    _status = 'unsupported';
  }
}

void _open(RemoteMessage m) {
  final link = m.data['url'] as String?;
  if (link == null || link.isEmpty) return;
  if (_onOpen != null) {
    _onOpen!(link);
  } else {
    _pendingLink = link;
  }
}

/// A app regista aqui como abrir um link (router.go).
void pushOnOpen(void Function(String link) cb) {
  _onOpen = cb;
  final p = _pendingLink;
  if (p != null) {
    _pendingLink = null;
    scheduleMicrotask(() => cb(p));
  }
}

String _map(AuthorizationStatus s) => switch (s) {
      AuthorizationStatus.authorized || AuthorizationStatus.provisional => 'granted',
      AuthorizationStatus.denied => 'denied',
      _ => 'default',
    };

String pushStatus() => _ready ? _status : 'unsupported';

Future<String> _tokenJson() async {
  final token = await FirebaseMessaging.instance.getToken();
  if (token == null || token.isEmpty) return '';
  return jsonEncode({
    'endpoint': 'fcm:$token',
    'keys': {'p256dh': 'fcm', 'auth': 'fcm'},
  });
}

Future<String> pushSubscribe(String publicKey) async {
  if (!_ready) return '{"error":"unsupported"}';
  try {
    final s = await FirebaseMessaging.instance.requestPermission(alert: true, badge: true, sound: true);
    _status = _map(s.authorizationStatus);
    if (_status != 'granted') return '{"error":"denied"}';
    final raw = await _tokenJson();
    return raw.isEmpty ? '{"error":"no_token"}' : raw;
  } catch (_) {
    return '{"error":"failed"}';
  }
}

Future<String> pushCurrent() async {
  if (!_ready || _status != 'granted') return '';
  try {
    return await _tokenJson();
  } catch (_) {
    return '';
  }
}

Future<String> pushUnsubscribe() async {
  if (!_ready) return '';
  try {
    final token = await FirebaseMessaging.instance.getToken();
    await FirebaseMessaging.instance.deleteToken();
    return token == null ? '' : 'fcm:$token';
  } catch (_) {
    return '';
  }
}
