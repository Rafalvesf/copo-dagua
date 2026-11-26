import '../supabase/supabase_config.dart';

/// A linha única de `platform_settings` (id 1), pedida uma só vez e
/// partilhada (desempenho, 2026-11-26): havia vários providers a pedi-la
/// cada um por si, logo ao abrir a app. Fica 5 minutos em memória; os
/// pedidos ao mesmo tempo esperam pelo mesmo. Se falhar, a próxima chamada
/// tenta outra vez (e o erro segue, como o `.single()` de antes).
Future<Map<String, dynamic>>? _row;
DateTime? _at;

Future<Map<String, dynamic>> platformSettingsRow() {
  final fresh = _at != null && DateTime.now().difference(_at!) < const Duration(minutes: 5);
  if (_row != null && fresh) return _row!;
  _at = DateTime.now();
  final f = supabase.from('platform_settings').select('*').eq('id', 1).single().then((r) => Map<String, dynamic>.from(r));
  _row = f;
  f.catchError((_) {
    if (identical(_row, f)) {
      _row = null;
      _at = null;
    }
    return const <String, dynamic>{};
  });
  return f;
}
