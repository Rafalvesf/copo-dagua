import 'category_figure.dart';

/// Passo 4 do onboarding do parceiro — uma pergunta diferente por
/// categoria (canvas "Parceiro · passo 4"). Pedido do utilizador
/// (2026-10-17): "nem todos vão receber ou querer saber quantas pessoas
/// servem"; "bolo, mínimo de fatias?" → bolo por pessoas.
class CategoryDetailSpec {
  final String question;
  final String hint;
  final String unit;

  /// Mínimo e máximo em vez de um só número.
  final bool range;
  final String singleLabel;
  final String offeringsTitle;
  final List<String> offerings;

  const CategoryDetailSpec({
    required this.question,
    this.hint = '',
    required this.unit,
    this.range = false,
    this.singleLabel = '',
    this.offeringsTitle = 'O que oferecem',
    this.offerings = const [],
  });
}

const _specs = <String, CategoryDetailSpec>{
  'venue': CategoryDetailSpec(
    question: 'Quantas pessoas recebem?',
    hint: 'Mínimo e máximo, para os clientes saberem se cabem.',
    unit: 'pessoas',
    range: true,
    offeringsTitle: 'O espaço inclui',
    offerings: ['Cerimónia no local', 'Alojamento', 'Estacionamento', 'Exclusividade no dia'],
  ),
  'catering': CategoryDetailSpec(
    question: 'A partir de quantas pessoas servem?',
    hint: 'Abaixo deste número não aceitam o evento.',
    unit: 'pessoas no mínimo',
    singleLabel: 'Mínimo',
    offeringsTitle: 'Tipo de serviço',
    offerings: ['Servido à mesa', 'Buffet', 'Volante', 'Menu infantil'],
  ),
  'flowers_decor': CategoryDetailSpec(
    question: 'Qual a encomenda mínima?',
    hint: 'Em arranjos — ex.: bouquet + 10 centros de mesa = 11.',
    unit: 'arranjos no mínimo',
    singleLabel: 'Encomenda mínima',
    offeringsTitle: 'O que fazem',
    offerings: ['Bouquet', 'Centros de mesa', 'Arco floral', 'Lapelas', 'Decoração da igreja'],
  ),
  'photography': CategoryDetailSpec(
    question: 'Quantas horas de cobertura incluem?',
    hint: 'No pacote base.',
    unit: 'horas',
    singleLabel: 'Cobertura',
    offeringsTitle: 'Entregam',
    offerings: ['Galeria online', 'Álbum impresso', 'Sessão antes do dia', 'Drone'],
  ),
  'videography': CategoryDetailSpec(
    question: 'Quanto dura o filme?',
    unit: 'minutos',
    singleLabel: 'Duração',
    offeringsTitle: 'Entregam',
    offerings: ['Teaser curto', 'Filme completo', 'Drone', 'Entrega em 4K'],
  ),
  'music_dj': CategoryDetailSpec(
    question: 'Quantas horas de música incluem?',
    unit: 'horas',
    singleLabel: 'Música',
    offeringsTitle: 'Incluído',
    offerings: ['Som e luz', 'Microfone para discursos', 'Música na cerimónia', 'Saxofonista'],
  ),
  'bands_musicians': CategoryDetailSpec(
    question: 'Quantas horas de atuação incluem?',
    unit: 'horas',
    singleLabel: 'Atuação',
    offeringsTitle: 'Incluído',
    offerings: ['Som e luz', 'Música na cerimónia', 'Repertório à escolha', 'Pausas com playlist'],
  ),
  'photobooth_entertainment': CategoryDetailSpec(
    question: 'Quantas horas de animação incluem?',
    unit: 'horas',
    singleLabel: 'Animação',
    offeringsTitle: 'Incluído',
    offerings: ['Adereços', 'Impressão na hora', 'Galeria digital', 'Animador'],
  ),
  'wedding_planner': CategoryDetailSpec(
    question: 'Quantos eventos organizam por ano?',
    unit: 'eventos',
    singleLabel: 'Por ano',
    offeringsTitle: 'Serviços',
    offerings: ['Planeamento completo', 'Coordenação no dia', 'Eventos fora de Portugal', 'Decoração'],
  ),
  'transport': CategoryDetailSpec(
    question: 'Quantos lugares tem cada viatura?',
    unit: 'lugares',
    singleLabel: 'Lugares',
    offeringsTitle: 'Viaturas',
    offerings: ['Clássico', 'Limusina', 'Autocarro para convidados', 'Motorista incluído'],
  ),
  'beauty': CategoryDetailSpec(
    question: 'Quantas pessoas atendem por dia?',
    hint: 'Noiva/aniversariante, família, convidados.',
    unit: 'pessoas por dia',
    singleLabel: 'Por dia',
    offeringsTitle: 'Serviços',
    offerings: ['Maquilhagem', 'Cabelo', 'Prova antes do dia', 'Deslocação a casa'],
  ),
  'cake': CategoryDetailSpec(
    question: 'Para quantas pessoas fazem bolos?',
    hint: 'Do bolo mais pequeno ao maior que aceitam.',
    unit: 'pessoas',
    range: true,
    offeringsTitle: 'Opções',
    offerings: ['Sem glúten', 'Vegano', 'Prova de sabores', 'Entrega no local'],
  ),
  'invitations': CategoryDetailSpec(
    question: 'Qual a encomenda mínima?',
    unit: 'convites',
    singleLabel: 'Encomenda mínima',
    offeringsTitle: 'O que fazem',
    offerings: ['Convites impressos', 'Convites digitais', 'Papelaria do dia', 'Caligrafia'],
  ),
  'officiant': CategoryDetailSpec(
    question: 'Quanto dura a cerimónia?',
    unit: 'minutos',
    singleLabel: 'Duração',
    offeringsTitle: 'Inclui',
    offerings: ['Cerimónia simbólica', 'Bilingue', 'Ensaio', 'Texto personalizado'],
  ),
  'rentals': CategoryDetailSpec(
    question: 'Quantas peças têm disponíveis?',
    unit: 'peças',
    singleLabel: 'Peças',
    offeringsTitle: 'O que alugam',
    offerings: ['Mobiliário', 'Louça', 'Tendas', 'Iluminação'],
  ),
};

CategoryDetailSpec categoryDetailSpec(String? slug) {
  final spec = _specs[slug];
  if (spec != null) return spec;
  final figure = figureForSlug(slug);
  return CategoryDetailSpec(question: '${figure.question}?', unit: figure.unit, singleLabel: figure.label);
}
