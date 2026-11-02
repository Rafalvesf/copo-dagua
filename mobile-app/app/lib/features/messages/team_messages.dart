import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../core/auth/auth_controller.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/gradient_scaffold.dart';
import '../../shared/widgets/page_header.dart';
import '../../shared/widgets/sized_network_image.dart';

/// Mensagens da Equipa À Nossa! (migração 146): banners de novidade e a
/// conversa "Equipa À Nossa!" com as mensagens diretas.

// ───────────────────────── Banners ─────────────────────────

class TeamBanner {
  final String id;
  final String title;
  final String body;
  final String? link;
  final String? imageUrl;
  const TeamBanner(this.id, this.title, this.body, this.link, [this.imageUrl]);
}

const _dismissedKey = 'team_banners_dismissed_v1';

final teamBannersProvider = FutureProvider<List<TeamBanner>>((ref) async {
  final uid = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (uid == null || uid.isEmpty) return const [];
  List rows;
  try {
    rows = await supabase.rpc('get_my_banners') as List;
  } on PostgrestException {
    return const []; // migração 146 ainda por correr
  }
  Set<String> dismissed = {};
  try {
    dismissed = ((await SharedPreferences.getInstance()).getStringList(_dismissedKey) ?? const []).toSet();
  } catch (_) {}
  return [
    for (final r in rows.cast<Map<String, dynamic>>())
      if (!dismissed.contains(r['id']))
        TeamBanner(r['id'] as String, r['title'] as String, r['body'] as String, r['link'] as String?,
            r['image_url'] as String?),
  ];
});

/// Cartão "Novidade" no topo dos ecrãs principais. Fecha-se com o ✕.
class TeamBannerCard extends ConsumerWidget {
  final EdgeInsetsGeometry padding;
  const TeamBannerCard({super.key, this.padding = const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 14)});

  Future<void> _dismiss(WidgetRef ref, String id) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final list = prefs.getStringList(_dismissedKey) ?? <String>[];
      await prefs.setStringList(_dismissedKey, [...list.where((x) => x != id), id].take(200).toList());
    } catch (_) {}
    ref.invalidate(teamBannersProvider);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final banners = ref.watch(teamBannersProvider).value ?? const <TeamBanner>[];
    if (banners.isEmpty) return const SizedBox.shrink();
    final b = banners.first;
    return Padding(
      padding: padding,
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: BoxDecoration(
          color: AppTheme.accentOliveDark,
          borderRadius: BorderRadius.circular(22),
          boxShadow: const [BoxShadow(color: Color(0x264F6B4A), blurRadius: 18, offset: Offset(0, 8))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Imagem já otimizada no admin para 1200×500 (12:5).
            if (b.imageUrl != null)
              AspectRatio(
                aspectRatio: 12 / 5,
                child: SizedNetworkImage(b.imageUrl!, fit: BoxFit.cover),
              ),
            Padding(
        padding: const EdgeInsets.fromLTRB(16, 14, 8, 14),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 38,
              height: 38,
              decoration: const BoxDecoration(color: Colors.white24, shape: BoxShape.circle),
              child: const Icon(Icons.campaign_outlined, color: Colors.white, size: 20),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('NOVIDADE · EQUIPA À NOSSA!',
                      style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, letterSpacing: 1, color: Colors.white70)),
                  const SizedBox(height: 3),
                  Text(b.title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: Colors.white)),
                  const SizedBox(height: 3),
                  Text(b.body,
                      maxLines: 3,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, height: 1.35, color: Colors.white)),
                  const SizedBox(height: 8),
                  GestureDetector(
                    onTap: () => context.push(b.link ?? '/mensagem/${b.id}'),
                    child: Text(b.link == null ? 'Ler mais →' : 'Ver →',
                        style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
                  ),
                ],
              ),
            ),
            IconButton(
              tooltip: 'Fechar',
              onPressed: () => _dismiss(ref, b.id),
              icon: const Icon(Icons.close_rounded, color: Colors.white70, size: 20),
            ),
          ],
        ),
            ),
          ],
        ),
      ),
    );
  }
}

// ───────────────────────── Conversa "Equipa À Nossa!" ─────────────────────────

class TeamItem {
  final String id;
  final bool fromTeam;
  final String? title;
  final String body;
  final String? link;
  final DateTime at;
  final String? imageUrl;
  const TeamItem(this.id, this.fromTeam, this.title, this.body, this.link, this.at, [this.imageUrl]);
}

final teamThreadProvider = FutureProvider<List<TeamItem>>((ref) async {
  final uid = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (uid == null || uid.isEmpty) return const [];
  try {
    final rows = await supabase.rpc('get_my_team_thread') as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        if ((r['body'] as String?)?.isNotEmpty == true)
          TeamItem(r['id'] as String, r['from_team'] == true, r['title'] as String?, r['body'] as String,
              r['link'] as String?, DateTime.parse(r['created_at'] as String).toLocal(), r['image_url'] as String?),
    ];
  } on PostgrestException {
    return const [];
  }
});

/// Entrada fixa "Equipa À Nossa!" nas listas de conversas — só aparece
/// quando a equipa já enviou uma mensagem direta.
class TeamThreadEntry extends ConsumerWidget {
  final EdgeInsetsGeometry padding;
  const TeamThreadEntry({super.key, this.padding = const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0)});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final items = ref.watch(teamThreadProvider).value ?? const <TeamItem>[];
    if (!items.any((i) => i.fromTeam)) return const SizedBox.shrink();
    final last = items.last;
    return Padding(
      padding: padding,
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: () => context.push('/equipa'),
        child: Container(
          padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: const [
            BoxShadow(color: Color(0x14171713), blurRadius: 18, offset: Offset(0, 6)),
          ]),
          child: Row(children: [
            ClipOval(child: Image.asset('assets/mascot/duo_clink.png', width: 40, height: 40, fit: BoxFit.cover)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Equipa À Nossa!', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(last.fromTeam ? last.body : 'Tu: ${last.body}',
                    maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const Icon(Icons.push_pin_outlined, size: 16, color: AppTheme.inkMuted),
          ]),
        ),
      ),
    );
  }
}

class TeamThreadScreen extends ConsumerStatefulWidget {
  const TeamThreadScreen({super.key});
  @override
  ConsumerState<TeamThreadScreen> createState() => _TeamThreadScreenState();
}

class _TeamThreadScreenState extends ConsumerState<TeamThreadScreen> {
  final _reply = TextEditingController();
  bool _sending = false;

  @override
  void dispose() {
    _reply.dispose();
    super.dispose();
  }

  Future<void> _send(List<TeamItem> items) async {
    final text = _reply.text.trim();
    final lastTeam = items.lastWhere((i) => i.fromTeam && i.title != null, orElse: () => items.first);
    if (text.length < 2) return;
    setState(() => _sending = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await supabase.rpc('reply_admin_message', params: {'p_id': lastTeam.id, 'p_body': text});
      _reply.clear();
      ref.invalidate(teamThreadProvider);
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível enviar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  String _time(DateTime d) {
    final n = DateTime.now();
    final hm = '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';
    if (d.year == n.year && d.month == n.month && d.day == n.day) return hm;
    return '${d.day}/${d.month} · $hm';
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(teamThreadProvider);
    final items = async.value ?? const <TeamItem>[];
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            const PageHeader(title: 'Equipa À Nossa!', centered: true),
            Expanded(
              child: async.isLoading && items.isEmpty
                  ? const Center(child: CircularProgressIndicator())
                  : items.isEmpty
                      ? const Center(
                          child: Padding(
                            padding: EdgeInsets.all(32),
                            child: Text('Ainda sem mensagens da equipa.', textAlign: TextAlign.center),
                          ),
                        )
                      : RefreshIndicator(
                          onRefresh: () async => ref.invalidate(teamThreadProvider),
                          child: ListView.builder(
                            reverse: true,
                            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 12),
                            itemCount: items.length,
                            itemBuilder: (context, i) {
                              final m = items[items.length - 1 - i];
                              final team = m.fromTeam;
                              return Align(
                                alignment: team ? Alignment.centerLeft : Alignment.centerRight,
                                child: Container(
                                  constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.8),
                                  margin: const EdgeInsets.only(bottom: 10),
                                  padding: const EdgeInsets.fromLTRB(14, 10, 14, 8),
                                  decoration: BoxDecoration(
                                    color: team ? Colors.white : AppTheme.accentOliveDark,
                                    borderRadius: BorderRadius.only(
                                      topLeft: const Radius.circular(18),
                                      topRight: const Radius.circular(18),
                                      bottomLeft: Radius.circular(team ? 4 : 18),
                                      bottomRight: Radius.circular(team ? 18 : 4),
                                    ),
                                  ),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      if (m.imageUrl != null)
                                        Padding(
                                          padding: const EdgeInsets.only(bottom: 8),
                                          child: ClipRRect(
                                            borderRadius: BorderRadius.circular(12),
                                            child: SizedNetworkImage(m.imageUrl!, fit: BoxFit.cover),
                                          ),
                                        ),
                                      if (m.title != null)
                                        Padding(
                                          padding: const EdgeInsets.only(bottom: 4),
                                          child: Text(m.title!,
                                              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                        ),
                                      Text(m.body,
                                          style: TextStyle(fontSize: 14, height: 1.4, color: team ? AppTheme.ink : Colors.white)),
                                      if (m.link != null)
                                        TextButton(
                                          onPressed: () => context.push(m.link!),
                                          style: TextButton.styleFrom(padding: EdgeInsets.zero, minimumSize: const Size(0, 32)),
                                          child: const Text('Abrir →'),
                                        ),
                                      const SizedBox(height: 2),
                                      Text(_time(m.at),
                                          style: TextStyle(fontSize: 11, color: team ? AppTheme.inkMuted : Colors.white70)),
                                    ],
                                  ),
                                ),
                              );
                            },
                          ),
                        ),
            ),
            if (items.any((i) => i.fromTeam && i.title != null))
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 6, AppTheme.screenMargin, 12),
                child: Row(children: [
                  Expanded(
                    child: TextField(
                      controller: _reply,
                      minLines: 1,
                      maxLines: 4,
                      maxLength: 2000,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: const InputDecoration(hintText: 'Responder à equipa…', counterText: ''),
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton.filled(
                    tooltip: 'Enviar',
                    onPressed: _sending ? null : () => _send(items),
                    icon: _sending
                        ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                        : const Icon(Icons.send_rounded),
                  ),
                ]),
              ),
          ],
        ),
      ),
    );
  }
}
