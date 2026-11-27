import 'package:shared_preferences/shared_preferences.dart';

import '../supabase/supabase_config.dart';

/// Respostas do início da app (mockup "Onboarding", 2026-11-12), dadas
/// antes de haver conta. Desde o fluxo novo (2026-11-27) já não se
/// perguntam os interesses nem «De onde és?»; [flushToProfile] continua a
/// enviar o que ficou guardado por versões antigas
/// (`profiles.country/city/age_range/interest_types`, migração 186).
///
/// Também guarda se as boas-vindas 1 a 3 já foram vistas neste aparelho
/// ([introSeen]): só aparecem na primeira abertura sem conta.
class IntroAnswers {
  IntroAnswers._();

  static const _key = 'intro_answers_v1';
  static const _seenKey = 'intro_cards_seen_v1';

  /// As boas-vindas 1 a 3 já foram vistas neste aparelho.
  static Future<bool> introSeen() async {
    try {
      return (await SharedPreferences.getInstance()).getBool(_seenKey) ?? false;
    } catch (_) {
      return false;
    }
  }

  static Future<void> markIntroSeen() async {
    try {
      await (await SharedPreferences.getInstance()).setBool(_seenKey, true);
    } catch (_) {}
  }

  static bool partner = false;
  static List<String> interests = [];
  static String country = 'Portugal';
  static String city = '';
  static String? ageRange;

  /// Tipos de interesse (dbValue de EventType, ou texto livre do "Outro").
  static bool get hasAnswers => interests.isNotEmpty || city.isNotEmpty || ageRange != null;

  static Future<void> save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setStringList(_key, [
        partner ? 'partner' : 'organizer',
        interests.join('|'),
        country,
        city,
        ageRange ?? '',
      ]);
    } catch (_) {}
  }

  static Future<void> load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final v = p.getStringList(_key);
      if (v == null || v.length < 5) return;
      partner = v[0] == 'partner';
      interests = v[1].isEmpty ? [] : v[1].split('|');
      country = v[2].isEmpty ? 'Portugal' : v[2];
      city = v[3];
      ageRange = v[4].isEmpty ? null : v[4];
    } catch (_) {}
  }

  /// Envia para o perfil (uma vez) e limpa. Antes da migração 186 as
  /// colunas novas não existem: guarda só a cidade.
  static Future<void> flushToProfile(String userId) async {
    await load();
    if (!hasAnswers) return;
    try {
      await supabase.from('profiles').update({
        if (city.isNotEmpty) 'city': city,
        'country': country,
        'age_range': ageRange,
        'interest_types': interests,
      }).eq('id', userId);
    } catch (_) {
      try {
        if (city.isNotEmpty) await supabase.from('profiles').update({'city': city}).eq('id', userId);
      } catch (_) {}
    }
    try {
      final p = await SharedPreferences.getInstance();
      await p.remove(_key);
    } catch (_) {}
    // Em memória continuam: o "Criar evento" a seguir usa-as para
    // pré-escolher o tipo e a zona.
  }
}
