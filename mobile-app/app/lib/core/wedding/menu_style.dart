import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';
import 'wedding_controller.dart';

/// Aparência do menu principal do organizador (098, pedido 2026-10-17):
/// o "clássico" é o de sempre; os outros três ficam como opções.
enum MenuLayout {
  classic('classic', 'Clássico', 'Capa colorida, contagem e mosaicos'),
  stickers('stickers', 'Autocolantes', 'Polaroid com autocolantes e emblemas'),
  mural('mural', 'Polaroid Mural', 'Fotos com fita-cola e pioneses'),
  clothesline('clothesline', 'Polaroid Estendal', 'Fotos penduradas com molas');

  const MenuLayout(this.db, this.label, this.description);
  final String db;
  final String label;
  final String description;

  static MenuLayout fromDb(String? v) =>
      MenuLayout.values.firstWhere((l) => l.db == v, orElse: () => MenuLayout.classic);
}

/// Cores à escolha: o verde-eucalipto (por defeito, para todos os
/// eventos), as cores desenhadas para cada tipo de evento e um rosa.
/// [tint] e [comp] são as duas cores claras das caixas secundárias.
class MenuColor {
  final String id;
  final String label;
  final Color color;
  final Color tint;
  final Color comp;

  /// Cor do texto e ícones por cima de [color] (branco nas cores fortes,
  /// tinta escura nos pastéis).
  final Color on;
  final Color? _accent;

  /// Cor dos ícones e textos de destaque em fundo claro: a própria cor
  /// nas cores fortes; um tom mais escuro nos pastéis (para se ler bem).
  Color get accent => _accent ?? color;

  /// Pastel: capa clara com texto escuro.
  bool get pastel => _accent != null;

  const MenuColor(this.id, this.label, this.color, this.tint, this.comp)
      : on = const Color(0xFFFFFFFF),
        _accent = null;

  const MenuColor.pastel(this.id, this.label, this.color, this.tint, this.comp, Color accent)
      : on = const Color(0xFF171713),
        _accent = accent;

  static const all = [
    MenuColor('eucalyptus', 'Eucalipto', Color(0xFF4F6B4A), Color(0xFFDCE4D8), Color(0xFFF3EBDD)),
    MenuColor('pink', 'Rosa', Color(0xFFB8476B), Color(0xFFF7DFE7), Color(0xFFE6EEE6)),
    MenuColor('raspberry', 'Framboesa', Color(0xFF9C4A5E), Color(0xFFF3DEE0), Color(0xFFE6EEE6)),
    MenuColor('coral', 'Coral', Color(0xFFA24A2A), Color(0xFFF6DDD2), Color(0xFFE2EEEC)),
    MenuColor('gold', 'Dourado', Color(0xFF7A5C22), Color(0xFFF7EACA), Color(0xFFE4E9F0)),
    MenuColor('blue', 'Azul', Color(0xFF3F6E8C), Color(0xFFDCE8F0), Color(0xFFF6E9DF)),
    MenuColor('navy', 'Azul-noite', Color(0xFF2F4A7A), Color(0xFFDCE4F0), Color(0xFFF6ECD8)),
    MenuColor('lilac', 'Lilás', Color(0xFF6B5B95), Color(0xFFE5E1EF), Color(0xFFF5EEDC)),
    MenuColor('teal', 'Verde-água', Color(0xFF3F6B66), Color(0xFFDCEBE8), Color(0xFFF6E6E4)),
    MenuColor('olive', 'Oliva', Color(0xFF5F7545), Color(0xFFDDE5D3), Color(0xFFF3EBDD)),
    MenuColor('graphite', 'Grafite', Color(0xFF3A4750), Color(0xFFE3E7EA), Color(0xFFF1ECE4)),
    // Pastéis (pedido 2026-10-18).
    MenuColor.pastel('p-sage', 'Sálvia', Color(0xFFC9D8C2), Color(0xFFE6EEE2), Color(0xFFF4EDE2), Color(0xFF4F6B4A)),
    MenuColor.pastel('p-pink', 'Rosa-bebé', Color(0xFFF4C9D6), Color(0xFFFAE6EC), Color(0xFFE9F1E8), Color(0xFFA8476A)),
    MenuColor.pastel('p-peach', 'Pêssego', Color(0xFFF7D3BE), Color(0xFFFBE9DE), Color(0xFFE3EEEC), Color(0xFFA4532F)),
    MenuColor.pastel('p-lavender', 'Lavanda', Color(0xFFD9D0EE), Color(0xFFEDE8F7), Color(0xFFF6F0DF), Color(0xFF5F4F95)),
    MenuColor.pastel('p-sky', 'Céu', Color(0xFFCFE2F1), Color(0xFFE7F0F8), Color(0xFFF8ECE1), Color(0xFF2F5F86)),
    MenuColor.pastel('p-mint', 'Menta', Color(0xFFCDEBE0), Color(0xFFE6F5EF), Color(0xFFF8E9E6), Color(0xFF2F6B5B)),
    MenuColor.pastel('p-butter', 'Manteiga', Color(0xFFF6E7B4), Color(0xFFFBF3D9), Color(0xFFE6ECF3), Color(0xFF7A5C22)),
    MenuColor.pastel('p-sand', 'Areia', Color(0xFFEADFCB), Color(0xFFF5EFE4), Color(0xFFE8EEF0), Color(0xFF6B5A3E)),
  ];

  static List<MenuColor> get strong => all.where((c) => !c.pastel).toList();
  static List<MenuColor> get pastels => all.where((c) => c.pastel).toList();

  static MenuColor fromId(String? id) =>
      all.firstWhere((c) => c.id == id, orElse: () => all.first);
}

/// Frase, desenhos e textos de cada tipo de evento (canvas "Menu principal
/// por tipo de evento", 2026-10-20). A cor vem sempre de [MenuColor] —
/// eucalipto por defeito em todos os tipos.
class EventDecor {
  final String tagline;
  final IconData motif;
  final List<IconData> doodles;

  /// Linha por cima do nome ("O batizado de", "Festa de curso"…).
  final String kicker;

  /// O que pôr na capa ("foto do bebé", "logótipo da empresa"…).
  final String coverHint;

  /// Galeria ainda sem fotos.
  final String galleryEmpty;

  /// Lugares ainda por organizar.
  final String seatingEmpty;

  const EventDecor(
    this.tagline,
    this.motif,
    this.doodles, {
    required this.kicker,
    required this.coverHint,
    required this.galleryEmpty,
    this.seatingEmpty = 'Por organizar',
  });

  static EventDecor of(EventType type) => switch (type) {
        EventType.wedding => const EventDecor('Sim, aceitamos!', Icons.favorite_border,
            [Icons.favorite_border, Icons.diamond_outlined, Icons.wine_bar_outlined, Icons.local_florist_outlined, Icons.eco_outlined],
            kicker: 'O nosso casamento', coverHint: 'foto do casal', galleryEmpty: 'Abre no dia do casamento'),
        EventType.baptism => const EventDecor('Um pequeno grande dia', Icons.water_drop_outlined,
            [Icons.water_drop_outlined, Icons.flutter_dash, Icons.star_border, Icons.baby_changing_station_outlined, Icons.wb_sunny_outlined],
            kicker: 'O batizado de', coverHint: 'foto do bebé', galleryEmpty: 'Abre no dia do batizado'),
        EventType.birthday => const EventDecor('Bora festejar!', Icons.cake_outlined,
            [Icons.celebration_outlined, Icons.cake_outlined, Icons.auto_awesome_outlined, Icons.card_giftcard_outlined, Icons.star_border],
            kicker: 'O aniversário de', coverHint: 'foto da festa', galleryEmpty: 'Abre no dia da festa'),
        EventType.communion => const EventDecor('Um dia de luz', Icons.church_outlined,
            [Icons.flutter_dash, Icons.light_outlined, Icons.local_florist_outlined, Icons.wb_sunny_outlined, Icons.star_border],
            kicker: 'A primeira comunhão de', coverHint: 'foto', galleryEmpty: 'Abre no dia da comunhão'),
        EventType.engagement => const EventDecor('Disseram que sim!', Icons.diamond_outlined,
            [Icons.diamond_outlined, Icons.favorite_border, Icons.wine_bar_outlined, Icons.auto_awesome_outlined, Icons.local_florist_outlined],
            kicker: 'O nosso noivado', coverHint: 'foto do casal', galleryEmpty: 'Fotos do pedido'),
        EventType.vowRenewal => const EventDecor('E para sempre', Icons.favorite_border,
            [Icons.favorite_border, Icons.diamond_outlined, Icons.eco_outlined, Icons.wine_bar_outlined, Icons.star_border],
            kicker: 'Renovação de votos', coverHint: 'foto do casal', galleryEmpty: 'Fotos de então e de hoje'),
        EventType.graduation => const EventDecor('Missão cumprida!', Icons.school_outlined,
            [Icons.school_outlined, Icons.workspace_premium_outlined, Icons.star_border, Icons.music_note_outlined, Icons.celebration_outlined],
            kicker: 'Festa de curso', coverHint: 'foto do curso', galleryEmpty: 'Fotos do curso'),
        EventType.corporate => const EventDecor('Uma noite para a equipa', Icons.work_outline,
            [Icons.work_outline, Icons.insights_outlined, Icons.coffee_outlined, Icons.mic_none_outlined, Icons.wine_bar_outlined],
            kicker: 'Evento de empresa', coverHint: 'logótipo da empresa', galleryEmpty: 'Abre no dia do evento',
            seatingEmpty: 'Por mesas de equipa'),
        EventType.babyShower => const EventDecor('Vem aí alguém especial', Icons.child_friendly_outlined,
            [Icons.child_friendly_outlined, Icons.baby_changing_station_outlined, Icons.toys_outlined, Icons.favorite_border, Icons.star_border],
            kicker: 'O chá de bebé de', coverHint: 'foto da barriga', galleryEmpty: 'Fotos da festa'),
        EventType.other => const EventDecor('Vamos celebrar', Icons.auto_awesome_outlined,
            [Icons.auto_awesome_outlined, Icons.star_border, Icons.wine_bar_outlined, Icons.celebration_outlined, Icons.eco_outlined],
            kicker: 'O nosso evento', coverHint: 'foto de capa', galleryEmpty: 'Abre no dia do evento'),
      };
}

class EventMenuStyle {
  final MenuLayout layout;
  final MenuColor color;
  const EventMenuStyle(this.layout, this.color);
  static const fallback = EventMenuStyle(MenuLayout.classic, MenuColor('eucalyptus', 'Eucalipto', Color(0xFF4F6B4A), Color(0xFFDCE4D8), Color(0xFFF3EBDD)));
}

/// Lê `weddings.menu_layout`/`menu_color` do evento atual.
final menuStyleProvider = FutureProvider<EventMenuStyle>((ref) async {
  final id = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
  if (id == null) return EventMenuStyle.fallback;
  try {
    final row = await supabase.from('weddings').select('menu_layout, menu_color').eq('id', id).maybeSingle();
    if (row == null) return EventMenuStyle.fallback;
    return EventMenuStyle(MenuLayout.fromDb(row['menu_layout'] as String?), MenuColor.fromId(row['menu_color'] as String?));
  } catch (_) {
    return EventMenuStyle.fallback;
  }
});

/// Só para as capturas de ecrã: força um estilo sem ir ao servidor.
@visibleForTesting
EventMenuStyle? debugMenuStyle;

/// O estilo atual sem esperar pelo servidor (clássico/eucalipto até chegar).
final currentMenuStyleProvider = Provider<EventMenuStyle>(
  (ref) => debugMenuStyle ?? ref.watch(menuStyleProvider).asData?.value ?? EventMenuStyle.fallback,
);

Future<void> saveMenuStyle(WidgetRef ref, {MenuLayout? layout, MenuColor? color}) async {
  final id = ref.read(weddingControllerProvider).wedding?.id;
  if (id == null) return;
  await supabase.from('weddings').update({
    if (layout != null) 'menu_layout': layout.db,
    if (color != null) 'menu_color': color.id,
  }).eq('id', id);
  ref.invalidate(menuStyleProvider);
}
