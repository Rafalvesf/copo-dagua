/// Palavras bloqueadas (migração 186, 2026-11-12).
///
/// A mesma regra que `public.text_allowed()` na base de dados, para o
/// aviso aparecer logo enquanto se escreve. A base de dados volta a
/// verificar (e tem a lista atualizada no admin → Palavras bloqueadas).
///
/// Compara palavra a palavra — nomes de pessoas passam — sem acentos,
/// com 0/1/3/4/5/7/@/$ lidos como letras, letras repetidas ("fodaaa") e
/// letras soltas separadas ("p.u.t.a").
class WordFilter {
  WordFilter._();

  static const message = 'Esta palavra não é permitida. Escolhe outra.';

  static const _words = {
    // Português
    'caralho', 'caralhos', 'crl', 'krl', 'foda', 'fodas', 'fodase', 'fodasse',
    'foder', 'fodido', 'fodida', 'fodidos', 'fdp', 'pqp', 'merda', 'merdas',
    'puta', 'putas', 'putaria', 'cona', 'conas', 'pissa', 'caralhinho',
    'cabrao', 'cabroes', 'cabrona', 'porra', 'paneleiro', 'paneleiros', 'maricas',
    'fufa', 'cu', 'cus', 'corno', 'cornudo', 'punheta', 'badalhoca', 'badalhoco',
    'retardado', 'retardada', 'rabeta', 'mamada',
    // Inglês
    'fuck', 'fucking', 'fucker', 'motherfucker', 'fck', 'shit', 'bullshit',
    'bitch', 'bitches', 'cunt', 'dick', 'cock', 'pussy', 'asshole', 'bastard',
    'whore', 'slut', 'nigger', 'nigga', 'faggot', 'fag', 'retard', 'rape',
    // Ódio
    'nazi', 'nazis', 'hitler',
  };

  static const _from = 'áàâãäéèêëíìîïóòôõöúùûüçñ013457@\$';
  static const _to = 'aaaaaeeeeiiiiooooouuuucnoieastas';

  static String _normalize(String s) {
    final b = StringBuffer();
    for (final ch in s.toLowerCase().split('')) {
      final i = _from.indexOf(ch);
      b.write(i >= 0 ? _to[i] : ch);
    }
    return b.toString();
  }

  static final _split = RegExp(r'[^a-z]+');
  static final _repeats = RegExp(r'(.)\1+');

  /// `true` quando o texto não tem nenhuma palavra bloqueada.
  static bool allowed(String? text) {
    if (text == null || text.trim().isEmpty) return true;
    final check = <String>{};
    var run = '';
    for (final tok in _normalize(text).split(_split)) {
      if (tok.isEmpty) continue;
      check
        ..add(tok)
        ..add(tok.replaceAllMapped(_repeats, (m) => m[1]!));
      if (tok.length == 1) {
        run += tok;
      } else {
        if (run.length > 1) check.add(run);
        run = '';
      }
    }
    if (run.length > 1) check.add(run);
    return !check.any(_words.contains);
  }

  /// Mensagem de erro do servidor (trigger da 186), se for desta regra.
  static String? serverMessage(Object e) {
    final s = e.toString();
    if (s.contains('palavra não é permitida')) return message;
    if (s.contains('no máximo 24 caracteres')) return 'O tipo de evento tem no máximo 24 caracteres.';
    if (s.contains('no máximo 40 caracteres')) return 'O nome do evento tem no máximo 40 caracteres.';
    return null;
  }
}
