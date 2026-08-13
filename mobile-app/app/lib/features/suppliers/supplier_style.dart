import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';

/// Apresentação partilhada entre a lista e o detalhe de fornecedores —
/// dados ilustrativos (features, tempo de resposta) que não fazem parte
/// do modelo `Supplier`, derivados de forma determinística para variar
/// por fornecedor sem precisar de um campo novo no backend mock.
Color colorForSupplierCategory(SupplierCategory category) {
  switch (category) {
    case SupplierCategory.photography:
      return AppColors.blue;
    case SupplierCategory.catering:
      return AppColors.yellow;
    case SupplierCategory.music:
      return AppColors.green;
    case SupplierCategory.decoration:
      return AppColors.gray;
    case SupplierCategory.venue:
      return AppColors.purple;
  }
}

IconData iconForSupplierCategory(SupplierCategory category) {
  switch (category) {
    case SupplierCategory.photography:
      return Icons.camera_alt_outlined;
    case SupplierCategory.catering:
      return Icons.restaurant_outlined;
    case SupplierCategory.music:
      return Icons.music_note_outlined;
    case SupplierCategory.decoration:
      return Icons.local_florist_outlined;
    case SupplierCategory.venue:
      return Icons.villa_outlined;
  }
}

const _featureTagsByCategory = {
  SupplierCategory.photography: ['Drone', 'Álbum', 'Pré-wedding'],
  SupplierCategory.catering: ['Prova de menu', 'Vegetariano', 'Bar incluído'],
  SupplierCategory.music: ['Som incluído', 'Luzes', 'Repertório'],
  SupplierCategory.decoration: ['Instalação', 'Flores frescas', 'Iluminação'],
  SupplierCategory.venue: ['Estacionamento', 'Catering próprio', 'Alojamento'],
};

List<String> featureTagsFor(SupplierCategory category) =>
    _featureTagsByCategory[category] ?? const [];

int responseMinutesFor(Supplier supplier) =>
    8 + (supplier.id.hashCode.abs() % 45);

class SupplierPackage {
  final String name;
  final double price;
  final List<String> features;
  final bool highlighted;

  const SupplierPackage({
    required this.name,
    required this.price,
    required this.features,
    this.highlighted = false,
  });
}

List<SupplierPackage> packagesFor(Supplier supplier) {
  final base = supplier.startingPrice;
  final extra = featureTagsFor(supplier.category);
  return [
    SupplierPackage(
      name: 'Essencial',
      price: base,
      features: [
        'Cobertura de 6h',
        'Edição profissional',
        'Galeria online',
        if (extra.isNotEmpty) extra.first,
      ],
    ),
    SupplierPackage(
      name: 'Premium',
      price: (base * 1.4).roundToDouble(),
      features: ['Cobertura de 10h', ...extra, 'Edição profissional'],
      highlighted: true,
    ),
    SupplierPackage(
      name: 'Luxury',
      price: (base * 2).roundToDouble(),
      features: ['Cobertura completa do dia', ...extra, 'Equipa dedicada'],
    ),
  ];
}
