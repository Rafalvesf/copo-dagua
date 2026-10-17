/// Link absoluto para uma rota da app, pronto a partilhar.
///
/// A app publicada vive numa subpasta (`/copo-dagua/` no GitHub Pages) e
/// usa rotas com `#` (estratégia por omissão do Flutter web). Antes os
/// links eram montados como `${Uri.base.origin}/rsvp/...`, que perdia a
/// subpasta e o `#` — abriam um 404. E o convite apontava para
/// `www.copodeagua.pt`, um domínio que não existe.
String publicLink(String route) {
  final r0 = route.startsWith('/') ? route : '/$route';
  final base = Uri.base;
  // Fora do browser (app instalada ou testes) não há endereço da página:
  // usa o site publicado (antes dava erro ao partilhar).
  if (base.scheme != 'http' && base.scheme != 'https') {
    return 'https://rafalvesf.github.io/copo-dagua/#$r0';
  }
  final path = base.path.endsWith('/')
      ? base.path
      : base.path.substring(0, base.path.lastIndexOf('/') + 1);
  final r = route.startsWith('/') ? route : '/$route';
  return '${base.origin}$path#$r';
}
