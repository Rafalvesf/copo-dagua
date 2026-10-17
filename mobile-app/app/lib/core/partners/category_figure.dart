/// O "número de referência" de cada categoria de parceiro — o primeiro
/// quadrado do perfil público (antes era sempre "Capacidade", que só faz
/// sentido para espaços). Valor em `partner_profiles.key_figure`
/// (`077_partner_key_figure.sql`), preenchido pelo parceiro em
/// Informações do negócio.
class CategoryFigure {
  /// Rótulo do quadrado no perfil (ex: "Serve até").
  final String label;

  /// Pergunta ao parceiro, em Informações do negócio.
  final String question;

  /// Unidade para mostrar o número (ex: "pessoas").
  final String unit;

  /// Prefixo antes do número (ex: "até").
  final String prefix;

  const CategoryFigure({
    required this.label,
    required this.question,
    required this.unit,
    this.prefix = '',
  });

  String format(int n) => [if (prefix.isNotEmpty) prefix, '$n', if (unit.isNotEmpty) unit].join(' ');
}

const _bySlug = <String, CategoryFigure>{
  'venue': CategoryFigure(label: 'Capacidade', question: 'Capacidade máxima (pessoas)', unit: '', prefix: 'até'),
  'catering': CategoryFigure(label: 'Serve até', question: 'Até quantas pessoas servem', unit: 'pessoas'),
  'flowers_decor': CategoryFigure(label: 'Arranjos', question: 'Arranjos florais por evento (até)', unit: 'arranjos', prefix: 'até'),
  'photography': CategoryFigure(label: 'Fotos entregues', question: 'Fotos entregues (média)', unit: 'fotos', prefix: '±'),
  'videography': CategoryFigure(label: 'Filme', question: 'Duração do filme (minutos)', unit: 'min'),
  'music_dj': CategoryFigure(label: 'Música', question: 'Horas de música incluídas', unit: 'h'),
  'bands_musicians': CategoryFigure(label: 'Atuação', question: 'Horas de atuação incluídas', unit: 'h'),
  'photobooth_entertainment': CategoryFigure(label: 'Animação', question: 'Horas de animação incluídas', unit: 'h'),
  'wedding_planner': CategoryFigure(label: 'Por ano', question: 'Casamentos organizados por ano', unit: 'casamentos'),
  'transport': CategoryFigure(label: 'Lugares', question: 'Lugares por viatura', unit: 'lugares'),
  'beauty': CategoryFigure(label: 'Por dia', question: 'Pessoas atendidas por dia (até)', unit: 'pessoas', prefix: 'até'),
  'cake': CategoryFigure(label: 'Serve até', question: 'Até quantas pessoas serve o bolo', unit: 'pessoas'),
  'invitations': CategoryFigure(label: 'Mínimo', question: 'Encomenda mínima (convites)', unit: 'convites'),
  'officiant': CategoryFigure(label: 'Cerimónia', question: 'Duração da cerimónia (minutos)', unit: 'min'),
  'rentals': CategoryFigure(label: 'Peças', question: 'Peças disponíveis', unit: 'peças'),
};

const _labelToSlug = <String, String>{
  'Espaço / Quinta': 'venue',
  'Catering': 'catering',
  'Flores e Decoração': 'flowers_decor',
  'Fotografia': 'photography',
  'Vídeo': 'videography',
  'Música / DJ': 'music_dj',
  'Bandas e Músicos': 'bands_musicians',
  'Fotobooth e Animação': 'photobooth_entertainment',
  'Wedding Planner': 'wedding_planner',
  'Transporte': 'transport',
  'Beleza': 'beauty',
  'Bolo': 'cake',
  'Convites': 'invitations',
  'Celebrante': 'officiant',
  'Aluguer de Material': 'rentals',
};

const _fallback = CategoryFigure(label: 'Experiência', question: 'Eventos realizados', unit: 'eventos');

CategoryFigure figureForSlug(String? slug) => _bySlug[slug] ?? _fallback;

CategoryFigure figureForLabel(String? label) => figureForSlug(_labelToSlug[label]);
