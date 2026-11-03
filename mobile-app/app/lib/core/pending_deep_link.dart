import 'package:shared_preferences/shared_preferences.dart';

/// Link aberto sem sessão (ex.: `/evento/123` partilhado): guardado para
/// depois de entrar na conta (ou criar uma) se ir parar lá em vez do
/// início. Guardado também no dispositivo porque o login com Google/Apple
/// na web recarrega a página. Pedido 2026-11-03.
class PendingDeepLink {
  static const _key = 'pending_deep_link';
  static String? _value;
  static DateTime? _savedAt;

  /// Lê o que ficou guardado (chamado no arranque, antes da app).
  static Future<void> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final v = prefs.getString(_key);
      final at = DateTime.tryParse(prefs.getString('${_key}_at') ?? '');
      // Só vale durante 1 hora.
      if (v != null && at != null && DateTime.now().difference(at) < const Duration(hours: 1)) {
        _value = v;
        _savedAt = at;
      } else {
        await prefs.remove(_key);
      }
    } catch (_) {}
  }

  static void save(String location) {
    _value = location;
    _savedAt = DateTime.now();
    SharedPreferences.getInstance().then((p) {
      p.setString(_key, location);
      p.setString('${_key}_at', _savedAt!.toIso8601String());
    }).catchError((_) {});
  }

  /// Devolve e esquece o link guardado.
  static String? take() {
    final v = _value;
    if (v == null) return null;
    final fresh = _savedAt != null && DateTime.now().difference(_savedAt!) < const Duration(hours: 1);
    _value = null;
    _savedAt = null;
    SharedPreferences.getInstance().then((p) => p.remove(_key)).catchError((_) => false);
    return fresh ? v : null;
  }
}
