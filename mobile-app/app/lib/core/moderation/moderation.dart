import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../shared/widgets/island_sheet.dart';
import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';
import '../theme/app_theme.dart';

/// Denunciar conteúdo e bloquear pessoas (2026-10-28, migração 130).
/// Exigido pela App Store e pela Google Play para conteúdo publicado por
/// utilizadores (galeria, comentários, mensagens).

enum ReportKind { galleryPhoto, galleryComment, groupMessage, message }

extension on ReportKind {
  String get db => switch (this) {
        ReportKind.galleryPhoto => 'gallery_photo',
        ReportKind.galleryComment => 'gallery_comment',
        ReportKind.groupMessage => 'group_message',
        ReportKind.message => 'message',
      };
  String get noun => switch (this) {
        ReportKind.galleryPhoto => 'fotografia',
        ReportKind.galleryComment => 'comentário',
        ReportKind.groupMessage || ReportKind.message => 'mensagem',
      };
}

const _reasons = <(String, String)>[
  ('offensive', 'Ofensivo ou ódio'),
  ('harassment', 'Assédio ou ameaças'),
  ('sexual', 'Conteúdo sexual'),
  ('violence', 'Violência'),
  ('spam', 'Spam ou burla'),
  ('other', 'Outro motivo'),
];

/// Pessoas que bloqueei: o conteúdo delas deixa de aparecer.
final blockedProfilesProvider = FutureProvider<Set<String>>((ref) async {
  final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (me == null) return const {};
  try {
    final rows = await supabase.from('user_blocks').select('blocked_id').eq('blocker_id', me) as List;
    return {for (final r in rows) (r as Map)['blocked_id'] as String};
  } catch (_) {
    return const {};
  }
});

/// `true` se [profileId] está bloqueado (enquanto carrega: `false`).
bool isBlocked(WidgetRef ref, String? profileId) =>
    profileId != null && (ref.watch(blockedProfilesProvider).value?.contains(profileId) ?? false);

/// Menu "Denunciar / Bloquear" para conteúdo de outra pessoa.
Future<void> showModerationSheet(
  BuildContext context,
  WidgetRef ref, {
  required ReportKind kind,
  required String targetId,
  String? authorId,
  String? authorName,
  bool allowBlock = true,
}) async {
  final me = ref.read(authControllerProvider).profile?.id;
  if (authorId != null && authorId == me) return;
  final who = (authorName == null || authorName.trim().isEmpty) ? 'esta pessoa' : authorName.trim();
  final action = await showIslandSheet<String>(
    context: context,
    builder: (ctx) => SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          ListTile(
            leading: const Icon(Icons.flag_outlined, color: Color(0xFFB3261E)),
            title: Text('Denunciar ${kind.noun}', style: const TextStyle(fontWeight: FontWeight.w700, color: Color(0xFFB3261E))),
            onTap: () => Navigator.of(ctx).pop('report'),
          ),
          if (allowBlock && authorId != null)
            ListTile(
              leading: const Icon(Icons.block, color: AppTheme.ink),
              title: Text('Bloquear $who', style: const TextStyle(fontWeight: FontWeight.w700)),
              subtitle: const Text('Deixas de ver as fotografias, comentários e mensagens desta pessoa.'),
              onTap: () => Navigator.of(ctx).pop('block'),
            ),
          ListTile(
            leading: const Icon(Icons.close),
            title: const Text('Cancelar'),
            onTap: () => Navigator.of(ctx).pop(),
          ),
        ]),
      ),
    ),
  );
  if (!context.mounted) return;
  if (action == 'report') await _report(context, kind, targetId);
  if (action == 'block' && authorId != null && context.mounted) await _block(context, ref, authorId, who);
}

Future<void> _report(BuildContext context, ReportKind kind, String targetId) async {
  final reason = await showIslandSheet<String>(
    context: context,
    builder: (ctx) => SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 4),
            child: Text('Porque queres denunciar esta ${kind.noun}?',
                style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          const Padding(
            padding: EdgeInsets.fromLTRB(20, 0, 20, 6),
            child: Text('A equipa À Nossa! revê todas as denúncias em menos de 24 horas. Quem publicou não sabe que foste tu.',
                style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.35)),
          ),
          for (final r in _reasons)
            ListTile(title: Text(r.$2), onTap: () => Navigator.of(ctx).pop(r.$1)),
        ]),
      ),
    ),
  );
  if (reason == null) return;
  String msg;
  try {
    await supabase.rpc('report_content', params: {'p_kind': kind.db, 'p_target': targetId, 'p_reason': reason});
    msg = 'Obrigado. A equipa vai rever esta ${kind.noun} em menos de 24 horas.';
  } catch (_) {
    msg = 'Não foi possível enviar a denúncia. Tenta outra vez.';
  }
  if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
}

Future<void> _block(BuildContext context, WidgetRef ref, String profileId, String who) async {
  final me = ref.read(authControllerProvider).profile?.id;
  if (me == null) return;
  String msg;
  try {
    await supabase.from('user_blocks').upsert({'blocker_id': me, 'blocked_id': profileId});
    ref.invalidate(blockedProfilesProvider);
    msg = 'Bloqueaste $who. Podes desbloquear em Definições → Conta.';
  } catch (_) {
    msg = 'Não foi possível bloquear. Tenta outra vez.';
  }
  if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
}

/// Desbloquear (Definições → Conta → Pessoas bloqueadas).
Future<void> unblockProfile(WidgetRef ref, String profileId) async {
  final me = ref.read(authControllerProvider).profile?.id;
  if (me == null) return;
  await supabase.from('user_blocks').delete().eq('blocker_id', me).eq('blocked_id', profileId);
  ref.invalidate(blockedProfilesProvider);
}
