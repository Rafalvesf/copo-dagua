import 'dart:math';

import 'package:flutter/foundation.dart';

import '../supabase/supabase_config.dart';

/// Funil de conversão (migração 154, pedido 2026-11-03). Regista os passos
/// que a base de dados não vê sozinha. Sem dados pessoais: um id anónimo por
/// sessão (só em memória); com sessão iniciada, a conta. Nunca bloqueia nem dá erro na app.
class Funnel {
  static String? _anon;

  static String get _platform {
    if (kIsWeb) return 'web';
    return switch (defaultTargetPlatform) {
      TargetPlatform.iOS => 'ios',
      TargetPlatform.android => 'android',
      _ => 'other',
    };
  }

  // Minimização (2026-11-08): o id anónimo vive só em memória durante a
  // sessão — nada fica guardado no dispositivo para estatística, por isso
  // não é preciso pedir consentimento de armazenamento.
  static Future<String> _anonId() async {
    if (_anon != null) return _anon!;
    final r = Random.secure();
    return _anon = List.generate(16, (_) => r.nextInt(256).toRadixString(16).padLeft(2, '0')).join();
  }

  /// [ref]: id do que se viu (parceiro, evento…), para contar uma vez por dia.
  static void track(String step, {String? ref, Map<String, Object?> props = const {}}) {
    () async {
      try {
        final anon = await _anonId();
        await supabase.rpc('track_funnel_event', params: {
          'p_anon': anon,
          'p_step': step,
          'p_platform': _platform,
          'p_props': {...props, if (ref != null) 'ref': ref},
        });
      } catch (_) {}
    }();
  }

  /// Ao entrar numa conta: liga os passos anónimos deste dispositivo a ela.
  static void linkAccount() {
    () async {
      try {
        await supabase.rpc('link_funnel_anon', params: {'p_anon': await _anonId()});
      } catch (_) {}
    }();
  }
}
