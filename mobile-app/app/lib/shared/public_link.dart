/// Link absoluto para uma rota da app, pronto a partilhar.
///
/// A app publicada vive numa subpasta (`/copo-dagua/` no GitHub Pages) e
/// usa rotas com `#` (estratégia por omissão do Flutter web). Antes os
/// links eram montados como `${Uri.base.origin}/rsvp/...`, que perdia a
/// subpasta e o `#` — abriam um 404. E o convite apontava para
/// `www.copodeagua.pt`, um domínio que não existe.
/// O meu código de convite (193/210), posto em todos os links que
/// partilho — perfil (QR ou link), convite do evento, organizadores,
/// definições… (pedido 2026-11-25: «qualquer método de partilha conta para
/// o benefício»). Quem entra por um deles fica como convidado meu.
String? shareRefCode;

String _withRef(String r) {
  final code = shareRefCode;
  if (code == null || code.isEmpty || r.startsWith('/p/') || r.contains('ref=')) return r;
  return '$r${r.contains('?') ? '&' : '?'}ref=${Uri.encodeQueryComponent(code)}';
}

String publicLink(String route) {
  route = _withRef(route.startsWith('/') ? route : '/$route');
  final r0 = route;
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
