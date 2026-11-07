import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// @ único de cada conta (migração 163): parceiros e utilizadores.
/// Minúsculas, letras, números, ponto e underscore, 3 a 30. Muda-se no
/// máximo uma vez a cada 30 dias.
class MyUsername {
  final String? username;
  final DateTime? nextChangeAt;
  const MyUsername({this.username, this.nextChangeAt});

  bool get canChange => nextChangeAt == null || DateTime.now().isAfter(nextChangeAt!);
}

final myUsernameProvider = FutureProvider<MyUsername>((ref) async {
  ref.watch(authControllerProvider.select((s) => s.profile?.id));
  try {
    final r = await supabase.rpc('my_username');
    if (r is! Map) return const MyUsername();
    return MyUsername(
      username: r['username'] as String?,
      nextChangeAt: r['next_change_at'] == null ? null : DateTime.tryParse(r['next_change_at'] as String),
    );
  } catch (_) {
    return const MyUsername();
  }
});

/// O @ de outra conta (ex.: no perfil do parceiro).
final usernameOfProvider = FutureProvider.family<String?, String>((ref, profileId) async {
  try {
    return await supabase.rpc('username_of', params: {'p_profile': profileId}) as String?;
  } catch (_) {
    return null;
  }
});

String normalizeUsername(String v) => v.trim().replaceFirst(RegExp(r'^@+'), '').toLowerCase();

/// Regra local (igual à da base de dados), para avisar enquanto escreve.
String? usernameFormatError(String v) {
  final u = normalizeUsername(v);
  if (u.length < 3) return 'Pelo menos 3 caracteres.';
  if (u.length > 30) return 'No máximo 30 caracteres.';
  if (!RegExp(r'^[a-z0-9._]+$').hasMatch(u)) return 'Só letras, números, ponto e _ (sem espaços nem acentos).';
  if (u.startsWith('.') || u.endsWith('.')) return 'Não pode começar nem acabar em ponto.';
  if (u.contains('..')) return 'Sem dois pontos seguidos.';
  return null;
}

/// invalid | reserved | taken | ok | mine
Future<String> usernameStatus(String v) async {
  final r = await supabase.rpc('username_status', params: {'p_username': normalizeUsername(v)});
  return r as String;
}

class UsernameError implements Exception {
  /// invalid | reserved | taken | too_soon | unknown
  final String code;
  final DateTime? nextChangeAt;
  const UsernameError(this.code, {this.nextChangeAt});
}

Future<String> setMyUsername(String v) async {
  try {
    return await supabase.rpc('set_my_username', params: {'p_username': normalizeUsername(v)}) as String;
  } on PostgrestException catch (e) {
    for (final c in const ['invalid', 'reserved', 'taken', 'too_soon']) {
      if (e.message.contains(c)) {
        throw UsernameError(c, nextChangeAt: DateTime.tryParse(e.details?.toString() ?? ''));
      }
    }
    throw const UsernameError('unknown');
  }
}
