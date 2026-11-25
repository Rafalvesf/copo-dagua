import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/group_chat.dart';
import '../../core/event/event_controller.dart';
import '../../core/guest_home/guest_home_providers.dart';
import '../../core/models/models.dart';
import '../../core/partners/partner_providers.dart';
import '../../core/social/social.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import '../money.dart';
import 'island_sheet.dart';
import 'v2_kit.dart';

/// Resumos que abrem ao tocar no topo de uma conversa (pedido do Rafael,
/// 2026-11-25; pranchetas «Conversa única com o parceiro · resumo dos
/// trabalhos», «Grupo sem «Ver evento» · resumo do evento e quem está» e
/// «Conversa entre pessoas · resumo»). Substituem a ilha «Ver evento».

/// Abre um evento pelo id (pedido 2026-11-25: «os eventos no perfil das
/// mensagens devem abrir o evento que se clicou»): quem organiza vai ao
/// painel desse evento, o convidado à página de convidado, os outros à
/// página pública.
Future<void> openEventById(BuildContext context, WidgetRef ref, String eventId) async {
  if (eventId.isEmpty) return;
  final router = GoRouter.of(context);
  final mine = ref.read(eventControllerProvider).events.any((e) => e.id == eventId);
  if (mine) {
    await ref.read(eventControllerProvider.notifier).select(eventId);
    router.go('/evento');
    return;
  }
  var guest = false;
  try {
    guest = (await ref.read(guestEventsProvider.future)).any((g) => g.eventId == eventId);
  } catch (_) {}
  if (guest) {
    router.go('/guest-home/$eventId');
  } else {
    router.push('/evento/$eventId');
  }
}

const _caps = TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted);

// ───────────────────────────── peças ─────────────────────────────

class _Close extends StatelessWidget {
  final bool ring;
  const _Close({this.ring = false});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: 'Fechar',
        child: GestureDetector(
          onTap: () => Navigator.of(context).pop(),
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: AppTheme.ink,
              shape: BoxShape.circle,
              // Sem aro nos botões de navegação (pedido 2026-11-25).
            ),
            child: const Icon(Hi.xMark, size: 20, color: Colors.white),
          ),
        ),
      );
}

Widget _stats(List<(String, String)> items) => Row(children: [
      for (var i = 0; i < items.length; i++) ...[
        if (i > 0) const SizedBox(width: 10),
        Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 12),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(16)),
            child: Column(children: [
              Text(items[i].$1,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(items[i].$2, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
            ]),
          ),
        ),
      ],
    ]);

Widget _btn(String label, VoidCallback? onTap, {bool outlined = false}) => SizedBox(
      height: 52,
      child: outlined
          ? OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
              ),
              child: Text(label),
            )
          : FilledButton(
              onPressed: onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
              ),
              child: Text(label),
            ),
    );

/// Linha «Casamento / Sáb, 12 jun 2027» com a etiqueta à direita.
class _JobRow {
  final String title;
  final String meta;
  final String tag;
  final Color bg;
  final Color fg;
  final Color? line;
  final String weddingId;
  const _JobRow(this.title, this.meta, this.tag, this.bg, this.fg, [this.line, this.weddingId = '']);

  _JobRow withWedding(String id) => _JobRow(title, meta, tag, bg, fg, line, id);
}

const _yellow = Color(0xFFF2A01B);
const _greenBg = Color(0xFFE6EDE1);
const _greenFg = Color(0xFF3F7A4F);
const _neutralBg = Color(0xFFE6E6E6);
const _neutralFg = Color(0xFF3A3733);

Widget _jobGroup(List<_JobRow> rows, {required void Function(_JobRow) onTap}) => Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
      child: Column(children: [
        for (var i = 0; i < rows.length; i++)
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: () => onTap(rows[i]),
            child: Container(
            constraints: const BoxConstraints(minHeight: 64),
            padding: const EdgeInsets.symmetric(vertical: 8),
            decoration: BoxDecoration(
              border: i == rows.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
            ),
            child: Row(children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(color: const Color(0xFF3A3733), borderRadius: BorderRadius.circular(12)),
                child: const Icon(Hi.calendar, size: 20, color: Colors.white),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(rows[i].title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (rows[i].meta.isNotEmpty)
                    Text(rows[i].meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: rows[i].bg,
                  borderRadius: BorderRadius.circular(999),
                  border: rows[i].line == null ? null : Border.all(color: rows[i].line!, width: 1.5),
                ),
                child: Text(rows[i].tag, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: rows[i].fg)),
              ),
              const SizedBox(width: 6),
              const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
            ]),
          ),
          ),
      ]),
    );

_JobRow _jobFrom(String label, Map<String, dynamic>? booking, Map<String, dynamic>? quote) {
  final parts = label.split(' · ');
  final title = parts.first;
  final meta = parts.skip(1).join(' · ');
  if (booking != null) {
    return switch (booking['status'] as String? ?? '') {
      'confirmed' => _JobRow(title, meta, 'Reservado', _greenBg, _greenFg),
      'completed' => _JobRow(title, meta, 'Concluído', _neutralBg, _neutralFg),
      'awaiting_deposit' => _JobRow(title, meta, 'Aceite', Colors.white, AppTheme.ink, _yellow),
      _ => _JobRow(title, meta, 'Cancelado', _neutralBg, _neutralFg),
    };
  }
  final s = quote?['status'] as String? ?? '';
  if (quote?['cancelled_at'] != null) return _JobRow(title, meta, 'Cancelado', _neutralBg, _neutralFg);
  return switch (s) {
    'proposal_sent' => _JobRow(title, meta, 'Proposta', Colors.white, AppTheme.ink, _yellow),
    'pending' || 'viewed' => _JobRow(title, meta, 'Pedido', Colors.white, AppTheme.ink, _yellow),
    'accepted' => _JobRow(title, meta, 'Aceite', _greenBg, _greenFg),
    _ => _JobRow(title, meta, 'Sem resposta', _neutralBg, _neutralFg),
  };
}

typedef _Jobs = ({List<_JobRow> rows, double booked, int pending, List<String> bookingIds});

/// Pedidos e reservas com um parceiro nestes eventos, um por evento.
Future<_Jobs> _jobs({
  required String partnerId,
  required List<String> weddingIds,
  required Map<String, String> labels,
}) async {
  if (weddingIds.isEmpty) return (rows: const <_JobRow>[], booked: 0.0, pending: 0, bookingIds: const <String>[]);
  List bookings = const [];
  List quotes = const [];
  try {
    bookings = await supabase
        .from('bookings')
        .select('id, wedding_id, status, total_amount')
        .eq('partner_id', partnerId)
        .inFilter('wedding_id', weddingIds);
  } catch (_) {}
  try {
    quotes = await supabase
        .from('quote_requests')
        .select('id, wedding_id, status, cancelled_at, created_at')
        .eq('partner_id', partnerId)
        .inFilter('wedding_id', weddingIds)
        .order('created_at', ascending: false);
  } catch (_) {}
  final bByW = <String, Map<String, dynamic>>{};
  for (final b in bookings.cast<Map<String, dynamic>>()) {
    final w = b['wedding_id'] as String;
    final s = b['status'] as String? ?? '';
    if (!bByW.containsKey(w) || s == 'confirmed' || s == 'completed') bByW[w] = b;
  }
  final qByW = <String, Map<String, dynamic>>{};
  for (final q in quotes.cast<Map<String, dynamic>>()) {
    qByW.putIfAbsent(q['wedding_id'] as String, () => q);
  }
  final ws = {...bByW.keys, ...qByW.keys}.toList();
  final rows = [for (final w in ws) _jobFrom(labels[w] ?? 'Evento', bByW[w], qByW[w]).withWedding(w)];
  var booked = 0.0;
  for (final b in bByW.values) {
    if (['confirmed', 'completed', 'awaiting_deposit'].contains(b['status'])) {
      booked += ((b['total_amount'] as num?) ?? 0).toDouble();
    }
  }
  final pending = qByW.values.where((q) => q['cancelled_at'] == null && (q['status'] == 'pending' || q['status'] == 'viewed')).length;
  return (rows: rows, booked: booked, pending: pending, bookingIds: [for (final b in bByW.values) b['id'] as String]);
}

/// Topo do resumo: «×» à direita e, ao centro, a foto 76, o nome 20 e a meta.
Widget _top(String name, String? avatarUrl, String meta, {bool verified = false}) => Stack(children: [
      Padding(
        padding: const EdgeInsets.only(top: 4),
        child: Center(
          child: Column(children: [
            V2Avatar(name, size: 76, imageUrl: avatarUrl, flat: true),
            const SizedBox(height: 6),
            Row(mainAxisSize: MainAxisSize.min, children: [
              Flexible(
                child: Text(name,
                    textAlign: TextAlign.center, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              if (verified) ...[
                const SizedBox(width: 4),
                const Icon(Hi.checkBadge, size: 18, color: AppTheme.brandGreen, semanticLabel: 'Verificado'),
              ],
            ]),
            if (meta.isNotEmpty) ...[
              const SizedBox(height: 2),
              Text(meta, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ],
          ]),
        ),
      ),
      const Positioned(right: 0, top: 0, child: _Close()),
    ]);

Widget _sheet(BuildContext context, List<Widget> children) => SafeArea(
      top: false,
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            for (var i = 0; i < children.length; i++) ...[if (i > 0) const SizedBox(height: 16), children[i]],
          ]),
        ),
      ),
    );

Widget _note(String text) => Text(text, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted));

// ─────────────────────── parceiro (o organizador vê) ───────────────────────

/// Resumo dos trabalhos com um parceiro, em todos os eventos do organizador.
Future<void> showPartnerSummary(
  BuildContext context, {
  required String partnerId,
  required String name,
  String? avatarUrl,
  required Map<String, String> eventLabels,
  required VoidCallback onOpenProfile,
}) =>
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _PartnerSummary(partnerId: partnerId, name: name, avatarUrl: avatarUrl, labels: eventLabels, onOpenProfile: onOpenProfile),
    );

class _PartnerSummary extends ConsumerStatefulWidget {
  final String partnerId;
  final String name;
  final String? avatarUrl;
  final Map<String, String> labels;
  final VoidCallback onOpenProfile;
  const _PartnerSummary({required this.partnerId, required this.name, this.avatarUrl, required this.labels, required this.onOpenProfile});

  @override
  ConsumerState<_PartnerSummary> createState() => _PartnerSummaryState();
}

class _PartnerSummaryState extends ConsumerState<_PartnerSummary> {
  _Jobs? _data;
  String? _username;

  @override
  void initState() {
    super.initState();
    _jobs(partnerId: widget.partnerId, weddingIds: widget.labels.keys.toList(), labels: widget.labels).then((d) {
      if (mounted) setState(() => _data = d);
    });
    supabase.from('profiles').select('username').eq('id', widget.partnerId).maybeSingle().then((r) {
      if (mounted) setState(() => _username = r?['username'] as String?);
    }).catchError((_) {});
  }

  @override
  Widget build(BuildContext context) {
    final p = ref.watch(partnerByIdProvider(widget.partnerId)).value;
    final d = _data;
    final meta = [
      if ((_username ?? '').isNotEmpty) '@$_username',
      if (p != null && p.categoryLabels.isNotEmpty) p.categoryLabels.first,
      if (p != null && p.location.isNotEmpty) p.location,
    ].join(' · ');
    final rating = p?.rating;
    return _sheet(context, [
      _top(widget.name, widget.avatarUrl, meta, verified: p != null),
      _stats([
        (rating == null ? '—' : rating.toStringAsFixed(1).replaceAll('.', ','), 'nota'),
        ('${d?.rows.length ?? 0}', 'trabalhos contigo'),
        (euros(d?.booked ?? 0), 'reservado'),
      ]),
      if (d != null && d.rows.isNotEmpty)
        Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text('TRABALHOS CONVOSCO · ${d.rows.length}', style: _caps),
          const SizedBox(height: 8),
          _jobGroup(d.rows, onTap: (r) {
            Navigator.of(context).pop();
            openEventById(context, ref, r.weddingId);
          }),
        ]),
      _note('Todas as conversas com ${widget.name} ficam aqui, de todos os teus eventos.'),
      _btn('Ver perfil do parceiro', () {
        Navigator.of(context).pop();
        widget.onOpenProfile();
      }),
    ]);
  }
}

// ─────────────────────── cliente (o parceiro vê) ───────────────────────

/// Resumo dos eventos de um cliente com este parceiro.
Future<void> showClientSummary(
  BuildContext context, {
  required String clientId,
  required String name,
  String? avatarUrl,
  required Map<String, String> eventLabels,
}) =>
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _ClientSummary(clientId: clientId, name: name, avatarUrl: avatarUrl, labels: eventLabels),
    );

class _ClientSummary extends ConsumerStatefulWidget {
  final String clientId;
  final String name;
  final String? avatarUrl;
  final Map<String, String> labels;
  const _ClientSummary({required this.clientId, required this.name, this.avatarUrl, required this.labels});

  @override
  ConsumerState<_ClientSummary> createState() => _ClientSummaryState();
}

class _ClientSummaryState extends ConsumerState<_ClientSummary> {
  _Jobs? _data;
  double _received = 0;

  @override
  void initState() {
    super.initState();
    final me = supabase.auth.currentUser?.id ?? '';
    _jobs(partnerId: me, weddingIds: widget.labels.keys.toList(), labels: widget.labels).then((d) async {
      var got = 0.0;
      if (d.bookingIds.isNotEmpty) {
        try {
          final pays = await supabase.from('payments').select('amount').inFilter('booking_id', d.bookingIds).eq('status', 'paid');
          for (final p in pays as List) {
            got += ((p['amount'] as num?) ?? 0).toDouble();
          }
        } catch (_) {}
      }
      if (mounted) {
        setState(() {
          _data = d;
          _received = got;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final prof = ref.watch(publicProfileProvider(widget.clientId)).value;
    final d = _data;
    final first = widget.name.split(RegExp(r'[ &]')).first;
    return _sheet(context, [
      _top(widget.name, widget.avatarUrl ?? prof?.avatarUrl, prof?.handleLine ?? ''),
      _stats([
        ('${d?.rows.length ?? 0}', 'eventos contigo'),
        ('${d?.pending ?? 0}', 'por responder'),
        (euros(_received), 'recebido'),
      ]),
      if (d != null && d.rows.isNotEmpty)
        Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text('EVENTOS CONTIGO · ${d.rows.length}', style: _caps),
          const SizedBox(height: 8),
          _jobGroup(d.rows, onTap: (r) {
            final router = GoRouter.of(context);
            Navigator.of(context).pop();
            router.push('/partner-requests');
          }),
        ]),
      _note('Todas as conversas com $first ficam aqui, de todos os eventos.'),
      _btn('Ver perfil de $first', () {
        final router = GoRouter.of(context);
        Navigator.of(context).pop();
        router.push('/u/${widget.clientId}');
      }),
    ]);
  }
}

// ───────────────────────────── grupo ─────────────────────────────

/// Resumo do grupo: o evento, os números e quem está no grupo.
Future<void> showGroupSummary(BuildContext context, {required ChatGroup group, required VoidCallback onOpenEvent}) =>
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _GroupSummary(group: group, onOpenEvent: onOpenEvent),
    );

class _GroupSummary extends ConsumerStatefulWidget {
  final ChatGroup group;
  final VoidCallback onOpenEvent;
  const _GroupSummary({required this.group, required this.onOpenEvent});

  @override
  ConsumerState<_GroupSummary> createState() => _GroupSummaryState();
}

class _GroupSummaryState extends ConsumerState<_GroupSummary> {
  Map<String, dynamic>? _event;
  int? _going;
  bool _muted = false;
  bool _all = false;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    final g = widget.group;
    if (g.eventId.isNotEmpty) {
      supabase
          .from('events')
          .select('event_type, event_date, ceremony_time, partner_name_1, partner_name_2, venue, cover_photo_url, owner_id')
          .eq('id', g.eventId)
          .maybeSingle()
          .then((r) {
        if (mounted) setState(() => _event = r);
      }).catchError((_) {});
      supabase.rpc('event_going_count', params: {'p_wedding': g.eventId}).then((v) {
        if (mounted && v is num) setState(() => _going = v.toInt());
      }).catchError((_) {});
    }
    final me = supabase.auth.currentUser?.id;
    if (me != null) {
      supabase.from('chat_group_members').select('muted').eq('group_id', g.id).eq('profile_id', me).maybeSingle().then((r) {
        if (mounted) setState(() => _muted = r?['muted'] == true);
      }).catchError((_) {});
    }
  }

  Future<void> _toggleMute() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await supabase.rpc('set_group_muted', params: {'p_group': widget.group.id, 'p_muted': !_muted});
      if (!mounted) return;
      setState(() => _muted = !_muted);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(_muted ? 'Grupo silenciado: deixas de receber avisos.' : 'Voltas a receber avisos deste grupo.')),
      );
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível mudar. Tenta novamente.')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final g = widget.group;
    final e = _event;
    final people = [...(ref.watch(groupPeopleProvider(g.id)).value?.values ?? const <EventPerson>[])];
    final owner = e?['owner_id'] as String?;
    people.sort((a, b) => (a.id == owner ? 0 : 1).compareTo(b.id == owner ? 0 : 1));
    final type = e == null ? null : EventType.fromDb(e['event_type'] as String?).label;
    final date = DateTime.tryParse('${e?['event_date'] ?? ''}');
    final n1 = (e?['partner_name_1'] as String?)?.trim() ?? '';
    final n2 = (e?['partner_name_2'] as String?)?.trim() ?? '';
    final names = n1.isEmpty ? g.name : (n2.isEmpty ? n1 : '$n1 & $n2');
    const wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    final line = [
      if (date != null) '${wd[date.weekday - 1]}, ${date.day} ${mo[date.month - 1]} ${date.year}',
      if ((e?['ceremony_time'] as String?)?.trim().isNotEmpty ?? false) (e!['ceremony_time'] as String).trim(),
      if ((e?['venue'] as String?)?.trim().isNotEmpty ?? false) (e!['venue'] as String).trim(),
    ].join(' · ');
    final now = DateTime.now();
    final days = date == null ? null : DateTime(date.year, date.month, date.day).difference(DateTime(now.year, now.month, now.day)).inDays;
    final cover = (e?['cover_photo_url'] as String?) ?? g.photoUrl;
    final shown = _all ? people : people.take(4).toList();
    final rest = people.skip(shown.length).toList();
    return _sheet(context, [
      ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: SizedBox(
          height: 150,
          child: Stack(fit: StackFit.expand, children: [
            if (cover != null && cover.isNotEmpty)
              Image.network(cover, fit: BoxFit.cover, errorBuilder: (_, _, _) => const ColoredBox(color: Color(0xFF3A3733)))
            else
              const ColoredBox(color: Color(0xFF3A3733)),
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  stops: [0.4, 1],
                  colors: [Color(0x00171713), Color(0x99171713)],
                ),
              ),
            ),
            if (type != null)
              Positioned(
                left: 14,
                top: 14,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999)),
                  child: Text(type, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ),
            const Positioned(right: 12, top: 12, child: _Close(ring: true)),
            Positioned(
              left: 14,
              right: 14,
              bottom: 12,
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(names, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: Colors.white)),
                if (line.isNotEmpty)
                  Text(line, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: Colors.white)),
              ]),
            ),
          ]),
        ),
      ),
      _stats([
        (days == null ? '—' : '${days < 0 ? 0 : days}', 'dias'),
        ('${people.length}', 'no grupo'),
        (_going == null ? '—' : '$_going', 'vão'),
      ]),
      Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text('QUEM ESTÁ NO GRUPO · ${people.length}', style: _caps),
        const SizedBox(height: 8),
        // Tocar numa pessoa abre o perfil dela (pedido 2026-11-25).
        for (final p in shown)
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTap: () {
              final router = GoRouter.of(context);
              Navigator.of(context).pop();
              router.push('/u/${p.id}');
            },
            child: Container(
            constraints: const BoxConstraints(minHeight: 60),
            decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: AppTheme.line))),
            child: Row(children: [
              V2Avatar(p.name, size: 44, imageUrl: p.avatarUrl, flat: true),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(p.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(p.id == owner ? 'Organiza' : 'No grupo', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              if (p.id == owner)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: _greenBg, borderRadius: BorderRadius.circular(999)),
                  child: const Text('Anfitrião', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: _greenFg)),
                ),
              const SizedBox(width: 8),
              const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
            ]),
          ),
          ),
        if (rest.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 12),
            child: Row(children: [
              SizedBox(
                width: 28 + 18.0 * (rest.take(3).length - 1),
                height: 28,
                child: Stack(children: [
                  for (var i = 0; i < rest.take(3).length; i++)
                    Positioned(
                      left: 18.0 * i,
                      child: Container(
                        padding: const EdgeInsets.all(2),
                        decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white),
                        child: V2Avatar(rest[i].name, size: 24, imageUrl: rest[i].avatarUrl, flat: true),
                      ),
                    ),
                ]),
              ),
              const SizedBox(width: 10),
              Expanded(child: Text('+${rest.length} pessoas', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink))),
              GestureDetector(
                onTap: () => setState(() => _all = true),
                child: Container(
                  height: 36,
                  padding: const EdgeInsets.symmetric(horizontal: 14),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
                  child: const Text('Ver todos', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
                ),
              ),
            ]),
          ),
      ]),
      Row(children: [
        Expanded(child: _btn(_muted ? 'Ativar avisos' : 'Silenciar', _busy ? null : _toggleMute, outlined: true)),
        const SizedBox(width: 8),
        Expanded(
          child: _btn('Abrir o evento', () {
            Navigator.of(context).pop();
            widget.onOpenEvent();
          }),
        ),
      ]),
    ]);
  }
}

// ─────────────────────────── conversa entre pessoas ───────────────────────────

/// Resumo de uma pessoa (conversa direta).
Future<void> showPersonSummary(BuildContext context, {required String personId, required String name, String? avatarUrl}) =>
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _PersonSummary(personId: personId, name: name, avatarUrl: avatarUrl),
    );

class _PersonSummary extends ConsumerStatefulWidget {
  final String personId;
  final String name;
  final String? avatarUrl;
  const _PersonSummary({required this.personId, required this.name, this.avatarUrl});

  @override
  ConsumerState<_PersonSummary> createState() => _PersonSummaryState();
}

class _PersonSummaryState extends ConsumerState<_PersonSummary> {
  List<ChatGroup>? _common;
  bool? _follow;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _loadCommon();
  }

  /// Eventos em comum: os grupos do evento em que estão os dois.
  Future<void> _loadCommon() async {
    final me = supabase.auth.currentUser?.id;
    if (me == null) return;
    try {
      final mine = await supabase
          .from('chat_group_members')
          .select('group_id, chat_groups!inner(id, wedding_id, name, description, photo_url, is_event_all)')
          .eq('profile_id', me)
          .eq('chat_groups.is_event_all', true);
      final groups = <String, Map<String, dynamic>>{
        for (final r in mine as List)
          (r['chat_groups'] as Map)['id'] as String: Map<String, dynamic>.from(r['chat_groups'] as Map),
      };
      if (groups.isEmpty) {
        if (mounted) setState(() => _common = const []);
        return;
      }
      final theirs = await supabase
          .from('chat_group_members')
          .select('group_id')
          .eq('profile_id', widget.personId)
          .inFilter('group_id', groups.keys.toList());
      final ids = {for (final r in theirs as List) r['group_id'] as String};
      if (mounted) {
        setState(() => _common = [
              for (final id in ids)
                ChatGroup(
                  id: id,
                  eventId: groups[id]!['wedding_id'] as String? ?? '',
                  name: groups[id]!['name'] as String? ?? 'Evento',
                  isEventAll: true,
                  photoUrl: groups[id]!['photo_url'] as String?,
                  description: groups[id]!['description'] as String?,
                ),
            ]);
      }
    } catch (_) {
      if (mounted) setState(() => _common = const []);
    }
  }

  Future<void> _toggleFollow(bool now) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await followPerson(widget.personId, !now);
      if (mounted) setState(() => _follow = !now);
      ref.invalidate(publicProfileProvider(widget.personId));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível. Tenta novamente.')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final p = ref.watch(publicProfileProvider(widget.personId)).value;
    final follow = _follow ?? p?.iFollow ?? false;
    final common = _common ?? const <ChatGroup>[];
    final mutual = p?.mutual ?? const <MiniPerson>[];
    final mutualNames = mutual.take(2).map((m) => m.name.split(' ').first).toList();
    final extra = (p?.mutualCount ?? 0) - mutualNames.length;
    return _sheet(context, [
      _top(p?.name ?? widget.name, widget.avatarUrl ?? p?.avatarUrl, p?.handleLine ?? ''),
      _stats([
        ('${p?.events ?? 0}', 'eventos'),
        ('${p?.followers ?? 0}', 'seguidores'),
        ('${p?.following ?? 0}', 'a seguir'),
      ]),
      if (common.isNotEmpty)
        Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text('EVENTOS EM COMUM · ${common.length}', style: _caps),
          const SizedBox(height: 8),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < common.length; i++)
                GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () {
                    Navigator.of(context).pop();
                    openEventById(context, ref, common[i].eventId);
                  },
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 64),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    decoration: BoxDecoration(
                      border: i == common.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFD9D9D9))),
                    ),
                    child: Row(children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: SizedBox(
                          width: 44,
                          height: 44,
                          child: (common[i].photoUrl ?? '').isNotEmpty
                              ? Image.network(common[i].photoUrl!, fit: BoxFit.cover, errorBuilder: (_, _, _) => const ColoredBox(color: Color(0xFF3A3733)))
                              : const ColoredBox(color: Color(0xFF3A3733)),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(common[i].name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          if ((common[i].description ?? '').isNotEmpty)
                            Text(common[i].description!, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ]),
                      ),
                      const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
                    ]),
                  ),
                ),
            ]),
          ),
        ]),
      if (mutualNames.isNotEmpty)
        Row(children: [
          SizedBox(
            width: 24 + 16.0 * (mutual.take(3).length - 1),
            height: 24,
            child: Stack(children: [
              for (var i = 0; i < mutual.take(3).length; i++)
                Positioned(left: 16.0 * i, child: V2Avatar(mutual[i].name, size: 24, imageUrl: mutual[i].avatarUrl, flat: true)),
            ]),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text.rich(
              TextSpan(children: [
                TextSpan(text: mutualNames.join(' e '), style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                TextSpan(text: extra > 0 ? ' + $extra amigos em comum' : ' em comum'),
              ]),
              style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
            ),
          ),
        ]),
      Row(children: [
        Expanded(child: _btn(follow ? 'A seguir' : 'Seguir', _busy ? null : () => _toggleFollow(follow), outlined: true)),
        const SizedBox(width: 8),
        Expanded(
          child: _btn('Ver perfil', () {
            final router = GoRouter.of(context);
            Navigator.of(context).pop();
            router.push('/u/${widget.personId}');
          }),
        ),
      ]),
    ]);
  }
}
