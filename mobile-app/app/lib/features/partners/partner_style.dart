import 'package:flutter/material.dart';

import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';

/// Apresentação partilhada entre a lista e o detalhe de parceiros —
/// por `slug` real (`partner_categories`, 14 valores), não pelo antigo
/// enum de 5 [PartnerCategory] (esse mantém-se só para
/// Checklist/Orçamento, ver [slugForPartnerCategory] abaixo). `'other'`
/// e qualquer slug desconhecido caem no valor por omissão no fim de
/// cada switch.
Color colorForCategorySlug(String slug) => switch (slug) {
  'photography' => AppColors.blue,
  'videography' => AppColors.blue,
  'catering' => AppColors.yellow,
  'cake' => AppColors.yellow,
  'music_dj' => AppColors.green,
  'flowers_decor' => AppColors.gray,
  'venue' => AppColors.purple,
  'rentals' => AppColors.purple,
  _ => AppColors.gray,
};

IconData iconForCategorySlug(String slug) => switch (slug) {
  'photography' => Icons.camera_alt_outlined,
  'videography' => Icons.videocam_outlined,
  'catering' => Icons.restaurant_outlined,
  'cake' => Icons.cake_outlined,
  'music_dj' => Icons.music_note_outlined,
  'flowers_decor' => Icons.local_florist_outlined,
  'venue' => Icons.villa_outlined,
  'beauty' => Icons.face_retouching_natural_outlined,
  'officiant' => Icons.record_voice_over_outlined,
  'invitations' => Icons.mail_outline,
  'rentals' => Icons.chair_outlined,
  'transport' => Icons.directions_car_outlined,
  'wedding_planner' => Icons.event_note_outlined,
  _ => Icons.storefront_outlined,
};

/// Ponte para o antigo enum de 5 categorias, ainda usado por
/// Checklist/Orçamento (`checklist_items.partner_category`,
/// `budget_categories.partner_category`) — nunca migrados para a
/// taxonomia real nesta ronda. Usado só para pré-filtrar o Marketplace
/// quando a Checklist pede "escolher fotógrafo" — as 5 categorias
/// antigas têm sempre um slug real equivalente.
String slugForPartnerCategory(PartnerCategory category) => switch (category) {
  PartnerCategory.photography => 'photography',
  PartnerCategory.catering => 'catering',
  PartnerCategory.music => 'music_dj',
  PartnerCategory.decoration => 'flowers_decor',
  PartnerCategory.venue => 'venue',
};

/// Ícone por categoria do antigo enum de 5 — só para
/// `budget_categories.partner_category`/`_CategoryRow`
/// (`budget_screen.dart`), que ainda usa [PartnerCategory], não a
/// taxonomia real. Ver [iconForCategorySlug] para o Marketplace.
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
