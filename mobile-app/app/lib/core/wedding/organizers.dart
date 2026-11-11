import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../supabase/supabase_config.dart';
import 'wedding_controller.dart';

/// O que cada co-organizador pode fazer (migração 159). O dono pode tudo.
enum OrganizerPerm {
  evento('evento', 'Editar o evento', 'Nomes, data, local, programa, capa, galeria e o que os convidados veem', Hi.calendarDays),
  convidados('convidados', 'Gerir os convidados', 'Lista, pedidos para entrar e mesas', Hi.users),
  tarefas('tarefas', 'Tarefas', 'Ver e fazer as tarefas partilhadas', Hi.clipboardDocumentList),
  conversas('conversas', 'Conversar com parceiros', 'Conversas do evento e pedidos de orçamento', Hi.chatBubbleOvalLeft),
  bilhetes('bilhetes', 'Bilhetes e entradas', 'Ver os bilhetes vendidos e validar entradas com o QR', Hi.viewfinderCircle),
  orcamento('orcamento', 'Orçamento', 'Orçamento, despesas e parceiros favoritos', Hi.wallet);

  final String key;
  final String label;
  final String description;
  final IconData icon;
  const OrganizerPerm(this.key, this.label, this.description, this.icon);
}

class OrganizerPerms {
  final bool isOwner;
  final Map<String, bool> _map;
  const OrganizerPerms({this.isOwner = true, Map<String, bool> map = const {}}) : _map = map;

  /// Antes da migração (ou sem resposta) tudo continua permitido.
  static const all = OrganizerPerms();

  factory OrganizerPerms.fromJson(Object? json, {bool isOwner = false}) {
    if (json is! Map) return OrganizerPerms(isOwner: isOwner);
    return OrganizerPerms(isOwner: isOwner, map: {for (final e in json.entries) '${e.key}': e.value != false});
  }

  bool can(OrganizerPerm p) => isOwner || (_map[p.key] ?? true);
  OrganizerPerms withPerm(OrganizerPerm p, bool v) => OrganizerPerms(isOwner: isOwner, map: {..._map, p.key: v});
  Map<String, bool> toJson() => {for (final p in OrganizerPerm.values) p.key: can(p)};
  int get count => OrganizerPerm.values.where(can).length;
}

/// O que eu posso no evento ativo.
final myWeddingPermsProvider = FutureProvider<OrganizerPerms>((ref) async {
  final id = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
  if (id == null) return OrganizerPerms.all;
  try {
    final r = await supabase.rpc('my_wedding_permissions', params: {'p_wedding': id});
    if (r is! Map) return OrganizerPerms.all;
    return OrganizerPerms.fromJson(r, isOwner: r['is_owner'] == true);
  } on PostgrestException {
    return OrganizerPerms.all;
  }
});

class Organizer {
  final String? collaboratorId;
  final String name;
  final String? email;
  final String status;
  final bool isOwner;
  final OrganizerPerms perms;
  const Organizer({
    required this.collaboratorId,
    required this.name,
    required this.email,
    required this.status,
    required this.isOwner,
    required this.perms,
  });
}

final weddingOrganizersProvider = FutureProvider.family<List<Organizer>?, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('wedding_organizers', params: {'p_wedding': weddingId}) as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        Organizer(
          collaboratorId: r['collaborator_id'] as String?,
          name: r['name'] as String? ?? 'Organizador',
          email: r['email'] as String?,
          status: r['status'] as String? ?? 'active',
          isOwner: r['is_owner'] == true,
          perms: OrganizerPerms.fromJson(r['permissions'], isOwner: r['is_owner'] == true),
        ),
    ];
  } on PostgrestException {
    // Antes da migração 159.
    return null;
  }
});

Future<void> setOrganizerPermissions(String collaboratorId, OrganizerPerms perms) async {
  await supabase.rpc('set_organizer_permissions', params: {'p_collaborator': collaboratorId, 'p_permissions': perms.toJson()});
}

Future<void> removeOrganizer(String collaboratorId) async {
  await supabase.rpc('remove_organizer', params: {'p_collaborator': collaboratorId});
}
