import 'dart:convert';

import 'package:flutter/foundation.dart' show kIsWeb;

import '../supabase/supabase_config.dart';
import 'push_native.dart' if (dart.library.js_interop) 'push_web.dart' as impl;

/// Estado das notificações com a app fechada neste dispositivo.
enum PushStatus { unsupported, iosInstall, notAsked, denied, enabled }

/// Notificações com a app fechada (Web Push, migração 115, 2026-10-21;
/// Android/iOS pelo Firebase, 2026-10-28). O browser/telemóvel guarda a
/// subscrição; a app guarda-a em `push_subscriptions` para a base de dados
/// saber para onde enviar.
class PushNotifications {
  /// No arranque, antes do runApp (no telemóvel inicia o Firebase).
  static Future<void> init() => impl.pushInit().timeout(const Duration(seconds: 5), onTimeout: () {});

  /// Como abrir o ecrã de uma notificação tocada (só Android/iOS).
  static void onOpen(void Function(String link) open) => impl.pushOnOpen(open);

  static PushStatus status() => switch (impl.pushStatus()) {
        'granted' => PushStatus.enabled,
        'denied' => PushStatus.denied,
        'default' => PushStatus.notAsked,
        'ios_install' => PushStatus.iosInstall,
        _ => PushStatus.unsupported,
      };

  /// Pede autorização (tem de vir de um toque) e guarda a subscrição.
  /// Devolve o estado final.
  static Future<PushStatus> enable() async {
    // Web Push precisa da chave pública VAPID; o Firebase (Android/iOS) não.
    String key = '';
    if (kIsWeb) {
      final res = await supabase.functions.invoke('push-config');
      final k = (res.data as Map?)?['public_key'] as String?;
      if (k == null) return status();
      key = k;
    }
    final raw = await impl.pushSubscribe(key);
    final sub = jsonDecode(raw) as Map<String, dynamic>;
    if (sub['error'] != null) return status();
    await _save(sub);
    return PushStatus.enabled;
  }

  /// Ao entrar na app: se já autorizou, volta a guardar a subscrição
  /// (pode ter mudado de conta neste dispositivo). Nunca falha.
  static Future<void> resync() async {
    try {
      if (status() != PushStatus.enabled) return;
      final raw = await impl.pushCurrent();
      if (raw.isEmpty) return;
      await _save(jsonDecode(raw) as Map<String, dynamic>);
    } catch (_) {}
  }

  /// Ao sair da conta: este dispositivo deixa de receber.
  static Future<void> disableForThisDevice() async {
    try {
      final endpoint = await impl.pushUnsubscribe();
      if (endpoint.isNotEmpty) {
        await supabase.from('push_subscriptions').delete().eq('endpoint', endpoint);
      }
    } catch (_) {}
  }

  static Future<void> _save(Map<String, dynamic> sub) async {
    final keys = (sub['keys'] as Map?) ?? const {};
    if (supabase.auth.currentUser == null) return;
    // RPC (não upsert direto): o mesmo browser pode ter estado noutra conta.
    await supabase.rpc('claim_push_subscription', params: {
      'p_endpoint': sub['endpoint'],
      'p_p256dh': keys['p256dh'],
      'p_auth': keys['auth'],
    });
  }
}
