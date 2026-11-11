import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/snap_carousel.dart';
import '../../../shared/widgets/dense_card.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../core/tasks/task_models.dart' show taskPriorityWeight, taskPriorityFromDb;
import 'package:copo_dagua_app/features/events/screens/tickets_screens.dart';
import '../../../shared/widgets/search_pill.dart';
import '../../../shared/public_link.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter/services.dart';
import 'package:copo_dagua_app/features/messages/team_messages.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/events_providers.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

/// Separador "Eventos" (pedido 2026-11): os eventos da conta — o que
/// organizo e aqueles a que já tenho acesso — e os eventos públicos
/// ("Aberto a todos", migração 141), onde qualquer utilizador entra.
class EventosScreen extends ConsumerStatefulWidget {
  /// 1 = abrir em "Os meus eventos" (vindo do modo convidado).
  final int? initialTab;
  const EventosScreen({super.key, this.initialTab});

  @override
  ConsumerState<EventosScreen> createState() => _EventosScreenState();
}

/// Dois separadores (pedido 2026-11): "Descobrir" com os eventos
/// públicos em cartaz (ao estilo da Shotgun) e "Os meus" com os eventos
/// que organizo e aqueles a que já tenho acesso.
class _EventosScreenState extends ConsumerState<EventosScreen> {
  // Descobrir: procurar por nome ou zona e filtrar por data (2026-11).
  final _search = TextEditingController();
  _When _when = _When.any;
  bool _free = false;

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  bool _matches(PublicEvent e) {
    if (_free && e.isPaid) return false;
    final q = _search.text.trim().toLowerCase();
    if (q.isNotEmpty) {
      final hay = [e.displayNames, e.venue ?? '', e.location ?? '', e.eventType.label].join(' ').toLowerCase();
      if (!q.split(RegExp(r'\s+')).every(hay.contains)) return false;
    }
    final d = e.date;
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    switch (_when) {
      case _When.any:
        return true;
      case _When.week:
        // Até ao próximo domingo (inclusive).
        final end = today.add(Duration(days: 7 - today.weekday));
        return d != null && !d.isBefore(today) && !d.isAfter(end);
      case _When.month:
        return d != null && d.year == now.year && d.month == now.month && !d.isBefore(today);
      case _When.next30:
        return d != null && !d.isBefore(today) && d.isBefore(today.add(const Duration(days: 30)));
    }
  }


  Future<void> _refresh() async {
    ref.invalidate(guestWeddingsProvider);
    ref.invalidate(publicEventsProvider);
    ref.invalidate(_pendingInvitesProvider);
    ref.invalidate(_orgSummaryProvider);
    ref.invalidate(_guestStepsProvider);
    await ref.read(publicEventsProvider.future);
  }

  @override
  Widget build(BuildContext context) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    // Já não há contas só de convidado (2026-11-11): organizadores e
    // convidados são a mesma conta, com a mesma barra de baixo.
    final organizer = role != UserRole.partner;
    final weddingState = ref.watch(weddingControllerProvider);
    final myEvents = organizer ? weddingState.events : const <Wedding>[];
    final activeId = weddingState.wedding?.id;
    final invited = ref.watch(guestWeddingsProvider).value ?? const <GuestWedding>[];
    final publicAsync = ref.watch(publicEventsProvider);
    final joinedIds = invited.map((w) => w.weddingId).toSet();
    final allPublic = (publicAsync.value ?? const <PublicEvent>[])
        .where((e) => !joinedIds.contains(e.weddingId))
        .toList();
    final publicEvents = allPublic.where(_matches).toList();
    final filtering = _search.text.trim().isNotEmpty || _when != _When.any || _free;
    final hasMine = myEvents.isNotEmpty || invited.isNotEmpty;

    // Os meus eventos por data: os próximos primeiro, os passados no fim.
    final today = DateTime.now();
    final day0 = DateTime(today.year, today.month, today.day);
    int byDate(DateTime? a, DateTime? b) {
      final pa = a == null || a.isBefore(day0), pb = b == null || b.isBefore(day0);
      if (pa != pb) return pa ? 1 : -1;
      if (a == null || b == null) return 0;
      return pa ? b.compareTo(a) : a.compareTo(b);
    }
    final own = [...myEvents]..sort((a, b) => byDate(a.weddingDate, b.weddingDate));
    final guest = [...invited]..sort((a, b) => byDate(a.weddingDate, b.weddingDate));

    // Uma só página (pedido 2026-11-10): criar / código, os meus eventos
    // e "Descobrir" — nunca vazia, mesmo numa conta nova.
    // Convites por responder (a pessoa está ligada a um convidado deste
    // evento e ainda não disse se vai) — 2026-11-11.
    final pendingIds = ref.watch(_pendingInvitesProvider).value ?? const <String>{};
    final pending = [for (final w in guest) if (pendingIds.contains(w.weddingId)) w];

    final content = <Widget>[
      if (pending.isNotEmpty) _Pad(_InviteNotice(wedding: pending.first, more: pending.length - 1)),
      // Igual ao mockup "Página de eventos" (2026-11-11): o cartão verde
      // com 3 tipos e "Recebeste um convite?", com ou sem eventos.
      const _Pad(_CelebrateCard()),
      const _Pad(_InviteTile()),
      if (hasMine) ...[
        const _Title('Os meus eventos'),
        SnapCarousel(
          itemCount: own.length + guest.length,
          itemBuilder: (context, i) => i < own.length
              ? _MyEventCard(wedding: own[i], active: own[i].id == activeId)
              : _InvitedEventCard(wedding: guest[i - own.length]),
        ),
      ],
      const _Title('Descobrir', subtitle: 'Eventos abertos a que podes ir'),
      Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 0),
        child: SearchPill(controller: _search, hint: 'Procurar por nome ou zona'),
      ),
      const SizedBox(height: 12),
      SizedBox(
        height: 40,
        child: ListView(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          children: [
            for (final w in _When.values) ...[
              _FilterChip(
                label: w == _When.any ? 'Todos' : w.label,
                on: _when == w,
                onTap: () => setState(() => _when = w),
              ),
              const SizedBox(width: 8),
            ],
            _FilterChip(label: 'Grátis', on: _free, onTap: () => setState(() => _free = !_free)),
          ],
        ),
      ),
      const SizedBox(height: 18),
      if (publicAsync.isLoading && publicAsync.value == null)
        const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator()))
      else if (publicEvents.isEmpty)
        _Pad(_EmptyNote(filtering
            ? 'Nenhum evento público com estes filtros.'
            : 'Ainda não há eventos abertos. Cria o teu e abre-o a todos: aparece aqui para quem procura.'))
      else
        for (final e in publicEvents)
          Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 22),
            child: _PublicEventCard(event: e),
          ),
    ];

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: RefreshIndicator(
              onRefresh: _refresh,
              child: ListView(
                padding: ( const EdgeInsets.fromLTRB(0, 0, 0, 150)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
                children: [
                  const PageHeader(title: 'Eventos', showBack: false, centered: true),
                  const SizedBox(height: 14),
                  const TeamBannerCard(),
                  // Quem não tem Chat vê aqui a conversa com a equipa.
                  ...content,
                ],
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: const FloatingBottomNav(current: AppTab.events),
          ),
        ],
      ),
    );
  }
}

class _Pad extends StatelessWidget {
  final Widget child;
  const _Pad(this.child);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 10),
        child: child,
      );
}

class _EmptyNote extends StatelessWidget {
  final String text;
  const _EmptyNote(this.text);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: softCard(),
        child: Text(text, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
      );
}

IconData _typeIcon(EventType t) => switch (t) {
      EventType.wedding => Hi.heartOutline,
      EventType.birthday => Hi.cake,
      EventType.baptism => Hi.sparkles,
      _ => Hi.sparkles,
    };

class _PublicEventCard extends ConsumerStatefulWidget {
  final PublicEvent event;
  const _PublicEventCard({required this.event});

  @override
  ConsumerState<_PublicEventCard> createState() => _PublicEventCardState();
}

class _PublicEventCardState extends ConsumerState<_PublicEventCard> {
  bool _busy = false;

  Future<void> _join() async {
    final e = widget.event;
    if (e.mine) {
      await ref.read(weddingControllerProvider.notifier).select(e.weddingId);
      if (mounted) context.go('/wedding');
      return;
    }
    if (e.joined) {
      context.go('/guest-home/${e.weddingId}');
      return;
    }
    // Evento pago: entra-se comprando bilhete (migração 149).
    if (e.isPaid) {
      await showBuyTicketSheet(context, e);
      return;
    }
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('Entrar em ${e.displayNames}?'),
        content: Text([
          'É um evento aberto a todos. Ficas na lista de convidados e vês o programa, a galeria e as novidades.',
          if (e.isPaid) '\n\nEntrada: ${e.priceLabel}, paga diretamente ao organizador.',
          if (e.welcomeMessage?.isNotEmpty == true) '\n"${e.welcomeMessage}"',
        ].join()),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Agora não')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Entrar')),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _busy = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await joinPublicEvent(e.weddingId);
      ref.invalidate(guestWeddingsProvider);
      ref.invalidate(publicEventsProvider);
      if (mounted) context.go('/guest-home/${e.weddingId}');
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível entrar no evento. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final e = widget.event;
    return _PosterCard(event: e, busy: _busy, onTap: _busy ? null : _join);
  }
}

const _months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

/// Evento aberto em "Descobrir" (cartões densos, 2026-11-11): foto mais
/// baixa com a data e o preço por cima; por baixo, nome, quando e onde,
/// tipo, quantos vão e "Ver".
class _PosterCard extends StatelessWidget {
  final PublicEvent event;
  final bool busy;
  final VoidCallback? onTap;
  const _PosterCard({required this.event, required this.busy, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final e = event;
    final date = e.date;
    final when = date == null
        ? null
        : '${_weekdaysShort[date.weekday - 1]} ${date.day} ${_monthsShort[date.month - 1]}${e.time?.isNotEmpty == true ? ' · ${e.time}' : ''}';
    final price = e.isPaid ? e.priceLabel.replaceAll(' por pessoa', '') : 'Grátis';
    final cta = e.mine ? 'O teu evento' : (e.joined ? 'Abrir' : 'Ver evento');
    return SnappyTap(
      onTap: onTap ?? () {},
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          SizedBox(
            height: 124,
            child: Stack(fit: StackFit.expand, children: [
              e.coverPhotoUrl == null
                  ? _PosterPlaceholder(type: e.eventType, seed: e.weddingId.hashCode)
                  : SizedNetworkImage(e.coverPhotoUrl!, fit: BoxFit.cover),
              if (date != null)
                Positioned(
                  left: 12,
                  top: 12,
                  child: Container(
                    width: 46,
                    padding: const EdgeInsets.symmetric(vertical: 5),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
                    child: Column(children: [
                      Text(_months[date.month - 1],
                          style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: AppTheme.inkMuted)),
                      Text('${date.day}',
                          style: const TextStyle(fontSize: 18, height: 1.1, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                    ]),
                  ),
                ),
              Positioned(right: 12, top: 12, child: PriceBox('ENTRADA', price)),
              // Partilhar o evento por link (2026-11).
              Positioned(
                right: 8,
                bottom: 8,
                child: Material(
                  color: Colors.white,
                  shape: const CircleBorder(),
                  child: IconButton(
                    tooltip: 'Partilhar',
                    visualDensity: VisualDensity.compact,
                    icon: const Icon(Hi.arrowUpOnSquare, size: 18, color: AppTheme.ink),
                    onPressed: () => sharePublicEvent(context, e),
                  ),
                ),
              ),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(e.displayNames,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 17, height: 1.2, fontWeight: FontWeight.w800, color: AppTheme.ink)),
              const SizedBox(height: 4),
              MetaRow([
                if (when != null) (Hi.calendar, when),
                if (e.place != null) (Hi.mapPin, e.place!),
              ]),
              const SizedBox(height: 10),
              Wrap(spacing: 6, runSpacing: 6, children: [
                DenseChip(e.eventType.label),
                if (e.venue?.isNotEmpty == true && e.location?.isNotEmpty == true) DenseChip(e.location!),
              ]),
              const SizedBox(height: 12),
              Row(children: [
                if (e.goingCount > 0) ...[
                  AvatarDots(e.goingCount),
                  const SizedBox(width: 8),
                  Text(e.goingCount == 1 ? '1 vai' : '${e.goingCount} vão',
                      style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                ],
                const Spacer(),
                busy
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                    : CtaPill(cta),
              ]),
            ]),
          ),
        ]),
      ),
    );
  }
}

const _weekdaysShort = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _monthsShort = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// Sem foto de capa: fundo de cor com o símbolo do tipo de evento.
class _PosterPlaceholder extends StatelessWidget {
  final EventType type;
  final int seed;
  const _PosterPlaceholder({required this.type, required this.seed});

  static const _palettes = [
    [Color(0xFF4F6B4A), Color(0xFF2F4430)],
    [Color(0xFFC9A86A), Color(0xFF8A6A32)],
    [Color(0xFF9DB4C0), Color(0xFF55707E)],
    [Color(0xFFD7A49A), Color(0xFF9C5B50)],
  ];

  @override
  Widget build(BuildContext context) {
    final c = _palettes[seed.abs() % _palettes.length];
    return DecoratedBox(
      decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: c)),
      child: Center(child: Icon(_typeIcon(type), size: 72, color: Colors.white.withValues(alpha: 0.85))),
    );
  }
}

class _Title extends StatelessWidget {
  final String text;
  final String? subtitle;
  const _Title(this.text, {this.subtitle});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 18, AppTheme.screenMargin, 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(text, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          if (subtitle != null)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Text(subtitle!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            ),
        ]),
      );
}

/// "O que vamos celebrar?" (mockup 2026-11-11): cartão verde com
/// Casamento, Aniversário e Outro; cada um abre a criação já com o tipo.
class _CelebrateCard extends StatelessWidget {
  const _CelebrateCard();

  Widget _tile(BuildContext context, IconData icon, String label, EventType type) => Expanded(
        child: SnappyTap(
          onTap: () => context.push('/novo-evento?tipo=${type.name}'),
          child: Container(
            height: 92,
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(18)),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, size: 26, color: _brandGreen),
              const SizedBox(height: 8),
              Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: AppTheme.ink)),
            ]),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.fromLTRB(16, 22, 16, 16),
        decoration: BoxDecoration(color: _brandGreen, borderRadius: BorderRadius.circular(26)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 4),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('NOVO EVENTO',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w800, color: Color(0xFFDDE5D3))),
              SizedBox(height: 4),
              Text('O que vamos celebrar?',
                  style: TextStyle(fontSize: 26, height: 1.15, fontWeight: FontWeight.w800, color: Colors.white)),
              SizedBox(height: 4),
              Text('Escolhe e fica pronto em 1 minuto.',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFFE6EDE1))),
            ]),
          ),
          const SizedBox(height: 16),
          Row(children: [
            _tile(context, Hi.heart, 'Casamento', EventType.wedding),
            const SizedBox(width: 8),
            _tile(context, Hi.cake, 'Aniversário', EventType.birthday),
            const SizedBox(width: 8),
            _tile(context, Hi.plus, 'Outro', EventType.other),
          ]),
        ]),
      );
}

/// Filtro do Descobrir (Todos, Esta semana, Este mês, Grátis…).
class _FilterChip extends StatelessWidget {
  final String label;
  final bool on;
  final VoidCallback onTap;
  const _FilterChip({required this.label, required this.on, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 40,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            // Filtros iguais aos de Parceiros: verde quando escolhido.
            color: on ? AppTheme.accentOliveDark : Colors.white,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: on ? AppTheme.accentOliveDark : const Color(0xFFE4E1D8)),
          ),
          child: Text(label,
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: on ? Colors.white : AppTheme.ink)),
        ),
      );
}

class _InviteTile extends StatelessWidget {
  const _InviteTile();

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: () => showGuestModeSheet(context),
        child: Container(
          height: 60,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: softCard(radius: 18),
          child: const Row(children: [
            Icon(Hi.qrCode, size: 22, color: AppTheme.ink),
            SizedBox(width: 12),
            Expanded(
              child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Recebeste um convite?', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                Text('Entra com o código ou o link', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              ]),
            ),
            Icon(Hi.chevronRight, color: AppTheme.inkMuted),
          ]),
        ),
      );
}

String? _daysLeft(DateTime? d) {
  if (d == null) return null;
  final now = DateTime.now();
  final n = DateTime(d.year, d.month, d.day).difference(DateTime(now.year, now.month, now.day)).inDays;
  if (n < 0) return 'Já foi';
  if (n == 0) return 'É hoje';
  if (n == 1) return 'É amanhã';
  return 'Faltam $n dias';
}

class _Cover extends StatelessWidget {
  final String id;
  final EventType type;
  final String? photo;
  final double height;
  final List<Widget> badges;
  const _Cover({required this.id, required this.type, required this.photo, required this.height, required this.badges});

  @override
  Widget build(BuildContext context) => SizedBox(
        height: height,
        child: Stack(fit: StackFit.expand, children: [
          if (photo != null)
            SizedNetworkImage(photo!, fit: BoxFit.cover)
          else
            Container(
              color: const Color(0xFFE7D9C3),
              alignment: Alignment.center,
              child: StickerIcon(_typeIcon(type), turns: StickerIcon.tilt(id.hashCode)),
            ),
          Positioned(left: 12, right: 12, top: 12, child: Row(children: badges)),
        ]),
      );
}

Widget _pill(String text, {bool dark = false}) => Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(color: dark ? AppTheme.ink : Colors.white, borderRadius: BorderRadius.circular(999)),
      child: Text(text, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: dark ? Colors.white : AppTheme.ink)),
    );

/// Números de um evento que organizo, para o cartão (cartões densos,
/// 2026-11-11): convidados, confirmados, reservas e o planeamento.
class _OrgSummary {
  final int guests;
  final int confirmed;
  final int bookings;
  final int done;
  final int total;
  final ({String id, String title})? next;
  const _OrgSummary({this.guests = 0, this.confirmed = 0, this.bookings = 0, this.done = 0, this.total = 0, this.next});
}

final _orgSummaryProvider = FutureProvider.autoDispose.family<_OrgSummary, String>((ref, id) async {
  try {
    Future<List> list(Future<dynamic> q) async => (await q) as List;
    final r = await Future.wait([
      list(supabase.from('guests').select('rsvp_status').eq('wedding_id', id)),
      list(supabase.from('bookings').select('status').eq('wedding_id', id)),
      list(supabase
          .from('wedding_tasks')
          .select('id, title, status, priority, created_at')
          .eq('wedding_id', id)
          .eq('source', 'system')
          .inFilter('status', ['active', 'completed'])),
    ]);
    final guests = r[0].cast<Map<String, dynamic>>();
    final bookings = r[1].cast<Map<String, dynamic>>();
    final tasks = r[2].cast<Map<String, dynamic>>();
    final active = tasks.where((t) => t['status'] == 'active').toList()
      ..sort((a, b) {
        final pw = taskPriorityWeight(taskPriorityFromDb(b['priority'] as String)) -
            taskPriorityWeight(taskPriorityFromDb(a['priority'] as String));
        if (pw != 0) return pw;
        return (a['created_at'] as String).compareTo(b['created_at'] as String);
      });
    return _OrgSummary(
      guests: guests.length,
      confirmed: guests.where((g) => g['rsvp_status'] == 'confirmed').length,
      bookings: bookings.where((b) => b['status'] == 'confirmed' || b['status'] == 'completed').length,
      done: tasks.length - active.length,
      total: tasks.length,
      next: active.isEmpty ? null : (id: active.first['id'] as String, title: active.first['title'] as String),
    );
  } catch (_) {
    return const _OrgSummary();
  }
});

/// Os passos de quem é convidado: responder e, se houver lista,
/// oferecer um presente.
class _GuestSteps {
  final bool answered;
  final bool declined;
  final bool hasMenu;
  final bool hasGifts;
  final bool gave;
  const _GuestSteps({this.answered = true, this.declined = false, this.hasMenu = true, this.hasGifts = false, this.gave = false});

  // Presença, menu e presente com o visto verde (mockup 2026-11-11).
  List<(String, String, bool)> get steps => [
        ('rsvp', 'Presença', answered),
        if (!declined) ('menu', 'Menu', hasMenu),
        if (hasGifts) ('gift', 'Presente', gave),
      ];
}

final _guestStepsProvider = FutureProvider.autoDispose.family<_GuestSteps, String>((ref, id) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return const _GuestSteps();
  Future<List> safe(Future<dynamic> f) async {
    try {
      return (await f) as List;
    } catch (_) {
      return const [];
    }
  }

  final r = await Future.wait([
    safe(supabase.from('guests').select('rsvp_status, menu_selection').eq('wedding_id', id).eq('linked_profile_id', me).limit(1)),
    safe(supabase.rpc('gift_list', params: {'p_wedding': id})),
    safe(supabase.from('gift_claims').select('id').eq('wedding_id', id).eq('guest_id', me).limit(1)),
    safe(supabase.from('gift_envelopes').select('id').eq('wedding_id', id).eq('guest_profile_id', me).limit(1)),
    safe(supabase.from('gift_orders').select('id').eq('wedding_id', id).eq('buyer_id', me).limit(1)),
  ]);
  final row = r[0].isEmpty ? null : r[0].first as Map<String, dynamic>;
  return _GuestSteps(
    answered: row == null || row['rsvp_status'] != 'pending',
    declined: row == null || row['rsvp_status'] == 'declined',
    hasMenu: (row?['menu_selection'] as String?)?.isNotEmpty == true,
    hasGifts: r[1].isNotEmpty,
    gave: r[2].isNotEmpty || r[3].isNotEmpty || r[4].isNotEmpty,
  );
});

/// Alertas dos cartões já tocados: depois de selecionado, desaparece
/// (pedido 2026-11-11). Fica guardado neste dispositivo.
class _SeenAlerts extends Notifier<Set<String>> {
  static const _key = 'eventos_alerts_seen';

  @override
  Set<String> build() {
    SharedPreferences.getInstance().then((p) {
      final saved = p.getStringList(_key);
      if (saved != null && ref.mounted) state = {...state, ...saved};
    }).catchError((_) {});
    return const <String>{};
  }

  Future<void> add(String key) async {
    state = {...state, key};
    try {
      final p = await SharedPreferences.getInstance();
      final list = state.toList();
      await p.setStringList(_key, list.length > 200 ? list.sublist(list.length - 200) : list);
    } catch (_) {}
  }
}

final _seenAlertsProvider = NotifierProvider<_SeenAlerts, Set<String>>(_SeenAlerts.new);

Widget _cardTitle(String text) => Text(text,
    maxLines: 1,
    overflow: TextOverflow.ellipsis,
    style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: AppTheme.ink));

List<(IconData, String)> _cardMeta(DateTime? date, String? time, String? place) => [
      if (date != null)
        (
          Hi.calendar,
          '${_weekdaysShort[date.weekday - 1]} ${date.day} ${_monthsShort[date.month - 1]}'
              '${date.year != DateTime.now().year ? ' ${date.year}' : ''}'
              '${time?.isNotEmpty == true ? ' · $time' : ''}',
        ),
      if (place != null) (Hi.mapPin, place),
    ];

/// Evento que organizo: abre o painel desse evento.
class _MyEventCard extends ConsumerWidget {
  final Wedding wedding;
  final bool active;
  const _MyEventCard({required this.wedding, required this.active});

  Future<void> _open(BuildContext context, WidgetRef ref) async {
    await ref.read(weddingControllerProvider.notifier).select(wedding.id);
    if (context.mounted) context.go('/wedding');
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    final left = _daysLeft(wedding.weddingDate);
    final summary = ref.watch(_orgSummaryProvider(wedding.id)).value ?? const _OrgSummary();
    // No evento aberto, o motor de tarefas é a fonte mais fresca.
    final engine = active ? ref.watch(taskEngineControllerProvider) : null;
    final engineTotal = engine == null ? 0 : engine.systemDone.length + engine.systemActive.length;
    final done = engineTotal > 0 ? engine!.systemDone.length : summary.done;
    final total = engineTotal > 0 ? engineTotal : summary.total;
    final engineNext = engine?.systemActive.firstOrNull;
    final next = engineNext != null ? (id: engineNext.id, title: engineNext.title) : summary.next;
    final seen = ref.watch(_seenAlertsProvider);
    final showAlert = next != null && !seen.contains('task:${next.id}');
    final stats = [
      if (summary.guests > 0) ('${summary.guests}', summary.guests == 1 ? 'convidado' : 'convidados'),
      if (summary.confirmed > 0) ('${summary.confirmed}', summary.confirmed == 1 ? 'confirmado' : 'confirmados'),
      if (summary.bookings > 0) ('${summary.bookings}', summary.bookings == 1 ? 'reserva' : 'reservas'),
    ];
    return SnappyTap(
      onTap: () => _open(context, ref),
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _Cover(
            id: wedding.id,
            type: wedding.eventType,
            photo: wedding.coverPhotoUrl,
            height: 104,
            badges: [if (left != null) _pill(left, dark: true), const Spacer(), _pill('Organizador')],
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _cardTitle(wedding.displayNames),
              const SizedBox(height: 3),
              MetaRow(_cardMeta(wedding.weddingDate, null, place)),
              if (stats.isNotEmpty) ...[
                const SizedBox(height: 10),
                MiniStats(stats),
              ],
              if (total > 0) ...[
                const SizedBox(height: 10),
                ProgressLine(label: 'Planeamento', value: '${(done * 100 / total).round()}%', progress: done / total),
              ],
              if (showAlert) ...[
                const SizedBox(height: 10),
                AlertStrip(
                  text: 'Para fazer: ${next!.title}',
                  cta: 'Fazer',
                  onTap: () {
                    ref.read(_seenAlertsProvider.notifier).add('task:${next!.id}');
                    _open(context, ref);
                  },
                ),
              ],
            ]),
          ),
        ]),
      ),
    );
  }
}

/// Evento onde sou convidado: abre a página de convidado, com os meus
/// passos (presença, presente) e o próximo em alerta.
class _InvitedEventCard extends ConsumerWidget {
  final GuestWedding wedding;
  const _InvitedEventCard({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    final left = _daysLeft(wedding.weddingDate);
    final open = '/guest-home/${wedding.weddingId}';
    final stepsAsync = ref.watch(_guestStepsProvider(wedding.weddingId));
    final steps = stepsAsync.value?.steps ?? const <(String, String, bool)>[];
    final done = steps.where((s) => s.$3).length;
    final next = steps.where((s) => !s.$3).firstOrNull;
    final seen = ref.watch(_seenAlertsProvider);
    final alertKey = next == null ? null : 'guest:${wedding.weddingId}:${next.$1}';
    final showAlert = alertKey != null && !seen.contains(alertKey);
    return SnappyTap(
      onTap: () => context.go(open),
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _Cover(
            id: wedding.weddingId,
            type: wedding.eventType,
            photo: wedding.coverPhotoUrl,
            height: 104,
            badges: [if (left != null) _pill(left, dark: true), const Spacer(), _pill('Convidado')],
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _cardTitle(wedding.displayNames),
              const SizedBox(height: 3),
              MetaRow(_cardMeta(wedding.weddingDate, wedding.ceremonyTime, place)),
              if (steps.isNotEmpty) ...[
                const SizedBox(height: 10),
                ProgressLine(label: 'Os teus passos', value: '$done de ${steps.length}', progress: done / steps.length),
                const SizedBox(height: 10),
                Wrap(spacing: 6, runSpacing: 6, children: [
                  for (final s in steps) DenseChip(s.$2, done: s.$3),
                ]),
              ],
              if (showAlert) ...[
                const SizedBox(height: 10),
                AlertStrip(
                  text: switch (next!.$1) {
                    'rsvp' => 'Diz se vais',
                    'menu' => 'Escolhe o teu menu',
                    _ => 'Escolhe um presente',
                  },
                  cta: switch (next!.$1) {
                    'rsvp' => 'Responder',
                    'menu' => 'Escolher',
                    _ => 'Ver',
                  },
                  onTap: () {
                    ref.read(_seenAlertsProvider.notifier).add(alertKey!);
                    context.go(open);
                  },
                ),
              ],
            ]),
          ),
        ]),
      ),
    );
  }
}


enum _When {
  any('Qualquer data', 'Data'),
  week('Esta semana', 'Esta semana'),
  month('Este mês', 'Este mês'),
  next30('Próximos 30 dias', '30 dias');

  const _When(this.label, this.short);
  final String label;
  final String short;
}

/// Partilha o link de um evento público (abre /evento/<id> na app).
Future<void> sharePublicEvent(BuildContext context, PublicEvent e) async {
  final link = publicLink('/evento/${e.weddingId}');
  final messenger = ScaffoldMessenger.of(context);
  var shared = false;
  try {
    final r = await SharePlus.instance.share(ShareParams(text: '${e.displayNames} na À Nossa!: $link', subject: e.displayNames));
    shared = r.status != ShareResultStatus.unavailable;
  } catch (_) {}
  if (!shared) {
    await copyText(link);
    messenger.showSnackBar(const SnackBar(content: Text('Link copiado.')));
  }
}

/// Página de um evento público aberta por link partilhado.
class PublicEventScreen extends ConsumerWidget {
  final String id;
  const PublicEventScreen({super.key, required this.id});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(publicEventsProvider);
    final e = async.value?.where((x) => x.weddingId == id).firstOrNull;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.only(bottom: 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'Evento', centered: true),
            if (async.isLoading && e == null)
              const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
            else if (e == null)
              const _Pad(_EmptyNote('Este evento já não está disponível ou deixou de ser público.'))
            else ...[
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 16),
                child: _PublicEventCard(event: e),
              ),
              if (e.welcomeMessage?.isNotEmpty == true)
                _Pad(Text(e.welcomeMessage!, style: const TextStyle(fontSize: 15, height: 1.5, color: AppTheme.ink))),
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 0),
                child: TextButton.icon(
                  onPressed: () => context.go('/eventos'),
                  icon: const Icon(Hi.globeEuropeAfrica),
                  label: const Text('Ver mais eventos'),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}


/// Eventos em que a pessoa é convidada e ainda não respondeu.
final _pendingInvitesProvider = FutureProvider<Set<String>>((ref) async {
  final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
  if (me == null) return const {};
  try {
    final rows = await supabase.from('guests').select('wedding_id').eq('linked_profile_id', me).eq('rsvp_status', 'pending');
    return {for (final r in (rows as List).cast<Map<String, dynamic>>()) r['wedding_id'] as String};
  } catch (_) {
    return const {};
  }
});

/// "Convite por responder": quem convidou, para quê e o botão para ir
/// confirmar.
class _InviteNotice extends StatelessWidget {
  final GuestWedding wedding;
  final int more;
  const _InviteNotice({required this.wedding, required this.more});

  @override
  Widget build(BuildContext context) {
    final two = wedding.partnerName2 != null && wedding.partnerName2!.isNotEmpty;
    final noun = wedding.eventType.noun;
    final fem = noun.startsWith('festa') || noun.startsWith('comunhão') || noun.startsWith('renovação');
    final what = noun == 'evento' ? 'um evento' : '${fem ? 'a' : 'o'} $noun';
    final date = wedding.weddingDate == null ? null : formatWeddingDateCaps(wedding.weddingDate!);
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
      decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(22)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [
            const Icon(Hi.envelope, size: 18, color: Colors.white),
            const SizedBox(width: 6),
            Text(more > 0 ? 'CONVITES POR RESPONDER · ${more + 1}' : 'CONVITE POR RESPONDER',
                style: const TextStyle(fontSize: 11, letterSpacing: 1.2, fontWeight: FontWeight.w800, color: Color(0xFFDDE5D3))),
          ]),
          const SizedBox(height: 8),
          Text('${wedding.displayNames} ${two ? 'convidaram' : 'convidou'}-te para $what!',
              style: const TextStyle(fontSize: 18, height: 1.25, fontWeight: FontWeight.w800, color: Colors.white)),
          if (date != null) ...[
            const SizedBox(height: 2),
            Text(date, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFFDDE5D3))),
          ],
          const SizedBox(height: 12),
          SnappyTap(
            onTap: () => context.go('/guest-home/${wedding.weddingId}'),
            child: Container(
              height: 44,
              padding: const EdgeInsets.symmetric(horizontal: 18),
              alignment: Alignment.center,
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
              child: const Text('Ver e confirmar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: AppTheme.ink)),
            ),
          ),
        ],
      ),
    );
  }
}

/// Verde da app nas caixas de criar evento (pedido 2026-11-11).
const _brandGreen = Color(0xFF4F6B4A);
