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
  'music_dj' => AppTheme.accentTint,
  'flowers_decor' => AppColors.gray,
  'venue' => AppColors.purple,
  'rentals' => AppColors.purple,
  'restaurants' => AppColors.yellow,
  'bars_nightlife' => AppColors.purple,
  'adventure_activities' => AppTheme.accentTint,
  'experiences_tours' => AppColors.blue,
  'games_escape' => AppColors.purple,
  'lodging' => AppColors.blue,
  'spa_wellness' => AppTheme.accentTint,
  'kids_entertainment' => AppColors.yellow,
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
  'restaurants' => Icons.restaurant_menu_rounded,
  'bars_nightlife' => Icons.local_bar_outlined,
  'adventure_activities' => Icons.terrain_outlined,
  'experiences_tours' => Icons.sailing_outlined,
  'games_escape' => Icons.extension_outlined,
  'lodging' => Icons.hotel_outlined,
  'spa_wellness' => Icons.spa_outlined,
  'kids_entertainment' => Icons.child_care_outlined,
  'bands_musicians' => Icons.queue_music_outlined,
  'photobooth_entertainment' => Icons.photo_camera_front_outlined,
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

/// Categorias das empresas (as de `partner_categories`), pela ordem da aba
/// Parceiros — usadas ao criar despesas no Orçamento e tarefas
/// (pedido 2026-11-08).
const companyCategories = <(String, String)>[
  ('venue', 'Espaços'),
  ('catering', 'Catering'),
  ('photography', 'Fotografia'),
  ('videography', 'Vídeo'),
  ('flowers_decor', 'Flores e decoração'),
  ('music_dj', 'Música e DJ'),
  ('bands_musicians', 'Bandas e músicos'),
  ('cake', 'Bolo'),
  ('beauty', 'Beleza'),
  ('invitations', 'Convites'),
  ('officiant', 'Celebrante'),
  ('photobooth_entertainment', 'Fotobooth e animação'),
  ('rentals', 'Aluguer de material'),
  ('transport', 'Transporte'),
  ('wedding_planner', 'Wedding planner'),
  // Eventos de grupo (2026-11-08).
  ('restaurants', 'Restaurantes'),
  ('bars_nightlife', 'Bares e discotecas'),
  ('adventure_activities', 'Atividades radicais'),
  ('experiences_tours', 'Experiências e passeios'),
  ('games_escape', 'Jogos e escape rooms'),
  ('lodging', 'Alojamento'),
  ('spa_wellness', 'Spa e bem-estar'),
  ('kids_entertainment', 'Animação infantil'),
];

String? companyCategoryLabel(String? slug) =>
    slug == null ? null : companyCategories.where((c) => c.$1 == slug).map((c) => c.$2).firstOrNull;

/// Escolha de categoria (opcional) em pílulas, como as da aba Parceiros.
class CompanyCategoryPicker extends StatelessWidget {
  final String? selected;
  final ValueChanged<String?> onChanged;
  const CompanyCategoryPicker({super.key, required this.selected, required this.onChanged});

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Text('Categoria (opcional)',
            style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        Wrap(spacing: 8, runSpacing: 8, children: [
          for (final (slug, label) in companyCategories)
            ChoiceChip(
              avatar: Icon(iconForCategorySlug(slug), size: 16, color: selected == slug ? Colors.white : AppTheme.accentOliveDark),
              label: Text(label),
              selected: selected == slug,
              showCheckmark: false,
              selectedColor: AppTheme.accentOliveDark,
              labelStyle: TextStyle(
                fontFamily: AppTheme.fontFamily,
                fontWeight: FontWeight.w700,
                color: selected == slug ? Colors.white : AppTheme.ink,
              ),
              onSelected: (on) => onChanged(on ? slug : null),
            ),
        ]),
      ]);
}
