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

  const MenuColor(this.id, this.label, this.color, this.tint, this.comp);

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
  ];

  static MenuColor fromId(String? id) =>
      all.firstWhere((c) => c.id == id, orElse: () => all.first);
}

/// Frase e desenhos de cada tipo de evento (canvas "Menu principal por
/// tipo de evento"). A cor vem de [MenuColor].
class EventDecor {
  final String tagline;
  final IconData motif;
  final List<IconData> doodles;

  const EventDecor(this.tagline, this.motif, this.doodles);

  static EventDecor of(EventType type) => switch (type) {
        EventType.wedding => const EventDecor('Sim, aceitamos!', Icons.favorite_border,
            [Icons.favorite_border, Icons.diamond_outlined, Icons.wine_bar_outlined, Icons.local_florist_outlined, Icons.eco_outlined]),
        EventType.baptism => const EventDecor('Um pequeno grande dia', Icons.water_drop_outlined,
            [Icons.water_drop_outlined, Icons.flutter_dash, Icons.star_border, Icons.baby_changing_station_outlined, Icons.wb_sunny_outlined]),
        EventType.birthday => const EventDecor('Bora festejar!', Icons.cake_outlined,
            [Icons.celebration_outlined, Icons.cake_outlined, Icons.auto_awesome_outlined, Icons.card_giftcard_outlined, Icons.star_border]),
        EventType.communion => const EventDecor('Um dia de luz', Icons.church_outlined,
            [Icons.flutter_dash, Icons.light_outlined, Icons.local_florist_outlined, Icons.wb_sunny_outlined, Icons.star_border]),
        EventType.engagement => const EventDecor('Disseram que sim!', Icons.diamond_outlined,
            [Icons.diamond_outlined, Icons.favorite_border, Icons.wine_bar_outlined, Icons.auto_awesome_outlined, Icons.local_florist_outlined]),
        EventType.vowRenewal => const EventDecor('E para sempre', Icons.favorite_border,
            [Icons.favorite_border, Icons.diamond_outlined, Icons.eco_outlined, Icons.wine_bar_outlined, Icons.star_border]),
        EventType.graduation => const EventDecor('Missão cumprida!', Icons.school_outlined,
            [Icons.school_outlined, Icons.workspace_premium_outlined, Icons.star_border, Icons.music_note_outlined, Icons.celebration_outlined]),
        EventType.corporate => const EventDecor('Uma noite para a equipa', Icons.work_outline,
            [Icons.work_outline, Icons.insights_outlined, Icons.coffee_outlined, Icons.mic_none_outlined, Icons.wine_bar_outlined]),
        EventType.babyShower => const EventDecor('Vem aí alguém especial', Icons.child_friendly_outlined,
            [Icons.child_friendly_outlined, Icons.baby_changing_station_outlined, Icons.toys_outlined, Icons.favorite_border, Icons.star_border]),
        EventType.other => const EventDecor('Vamos celebrar', Icons.auto_awesome_outlined,
            [Icons.auto_awesome_outlined, Icons.star_border, Icons.wine_bar_outlined, Icons.celebration_outlined, Icons.eco_outlined]),
      };
}

class MenuStyle {
  final MenuLayout layout;
  final MenuColor color;
  const MenuStyle(this.layout, this.color);
  static const fallback = MenuStyle(MenuLayout.classic, MenuColor('eucalyptus', 'Eucalipto', Color(0xFF4F6B4A), Color(0xFFDCE4D8), Color(0xFFF3EBDD)));
}

/// Lê `weddings.menu_layout`/`menu_color` do evento atual.
final menuStyleProvider = FutureProvider<MenuStyle>((ref) async {
  final id = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
  if (id == null) return MenuStyle.fallback;
  try {
    final row = await supabase.from('weddings').select('menu_layout, menu_color').eq('id', id).maybeSingle();
    if (row == null) return MenuStyle.fallback;
    return MenuStyle(MenuLayout.fromDb(row['menu_layout'] as String?), MenuColor.fromId(row['menu_color'] as String?));
  } catch (_) {
    return MenuStyle.fallback;
  }
});

/// Só para as capturas de ecrã: força um estilo sem ir ao servidor.
@visibleForTesting
MenuStyle? debugMenuStyle;

/// O estilo atual sem esperar pelo servidor (clássico/eucalipto até chegar).
final currentMenuStyleProvider = Provider<MenuStyle>(
  (ref) => debugMenuStyle ?? ref.watch(menuStyleProvider).asData?.value ?? MenuStyle.fallback,
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
