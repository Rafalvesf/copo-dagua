import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';

/// Apresentação partilhada entre a lista e o detalhe de parceiros —
/// dados ilustrativos (features, tempo de resposta) que não fazem parte
/// do modelo `Partner`, derivados de forma determinística para variar
/// por parceiro sem precisar de um campo novo no backend mock.
Color colorForPartnerCategory(PartnerCategory category) {
  switch (category) {
    case PartnerCategory.photography:
      return AppColors.blue;
    case PartnerCategory.catering:
      return AppColors.yellow;
    case PartnerCategory.music:
      return AppColors.green;
    case PartnerCategory.decoration:
      return AppColors.gray;
    case PartnerCategory.venue:
      return AppColors.purple;
  }
}

IconData iconForPartnerCategory(PartnerCategory category) {
  switch (category) {
    case PartnerCategory.photography:
      return Icons.camera_alt_outlined;
    case PartnerCategory.catering:
      return Icons.restaurant_outlined;
    case PartnerCategory.music:
      return Icons.music_note_outlined;
    case PartnerCategory.decoration:
      return Icons.local_florist_outlined;
    case PartnerCategory.venue:
      return Icons.villa_outlined;
  }
}

const _featureTagsByCategory = {
  PartnerCategory.photography: ['Drone', 'Álbum', 'Pré-wedding'],
  PartnerCategory.catering: ['Prova de menu', 'Vegetariano', 'Bar incluído'],
  PartnerCategory.music: ['Som incluído', 'Luzes', 'Repertório'],
  PartnerCategory.decoration: ['Instalação', 'Flores frescas', 'Iluminação'],
  PartnerCategory.venue: ['Estacionamento', 'Catering próprio', 'Alojamento'],
};

List<String> featureTagsFor(PartnerCategory category) =>
    _featureTagsByCategory[category] ?? const [];

int responseMinutesFor(Partner partner) =>
    8 + (partner.id.hashCode.abs() % 45);

class PartnerPackage {
  final String name;
  final double price;
  final List<String> features;
  final bool highlighted;

  const PartnerPackage({
    required this.name,
    required this.price,
    required this.features,
    this.highlighted = false,
  });
}

List<PartnerPackage> packagesFor(Partner partner) {
  final base = partner.startingPrice;
  final extra = featureTagsFor(partner.category);
  return [
    PartnerPackage(
      name: 'Essencial',
      price: base,
      features: [
        'Cobertura de 6h',
        'Edição profissional',
        'Galeria online',
        if (extra.isNotEmpty) extra.first,
      ],
    ),
    PartnerPackage(
      name: 'Premium',
      price: (base * 1.4).roundToDouble(),
      features: ['Cobertura de 10h', ...extra, 'Edição profissional'],
      highlighted: true,
    ),
    PartnerPackage(
      name: 'Luxury',
      price: (base * 2).roundToDouble(),
      features: ['Cobertura completa do dia', ...extra, 'Equipa dedicada'],
    ),
  ];
}
