import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../widgets/event_actions_sheet.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/text_case.dart';
import 'package:copo_dagua_app/shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/snap_carousel.dart';
import '../../../shared/widgets/dense_card.dart';
import '../../../core/events/event_people.dart';
import '../../../shared/widgets/attendees_line.dart';
import '../../../shared/widgets/photo_card.dart' show CardsDivider, PhotoCard;
import '../../partners/widgets/partner_cards.dart' show InfoTag;
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
import '../../../core/home/home_providers.dart' show coupleBookingsProvider, pendingProposalsProvider;
import '../../../core/guest_home/event_tables.dart' show EventTable, myEventTablesProvider;
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/organizers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

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
    ref.invalidate(myOrganizerInvitesProvider);
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
    // Convites para co-organizar, dirigidos a mim e por responder (migração
    // 202) — aparecem aqui, como os convites de convidado.
    final orgInvites = ref.watch(myOrganizerInvitesProvider).value ?? const <OrganizerInvite>[];

    final content = <Widget>[
      if (pending.isNotEmpty) _Pad(_InviteNotice(wedding: pending.first, more: pending.length - 1)),
      for (final inv in orgInvites) _Pad(_OrganizerInviteNotice(invite: inv)),
      // Igual ao mockup "Página de eventos" (2026-11-11): o cartão verde
      // com 3 tipos e "Recebeste um convite?", com ou sem eventos.
      const _Pad(_CelebrateCard()),
      const _Pad(_InviteTile()),
      if (hasMine) ...[
        const _Title('Os meus eventos'),
        // Organizas e Convidado em linhas separadas (pedido 2026-11-22),
        // cada uma no seu carrossel; vê-se a ponta do cartão seguinte.
        if (own.isNotEmpty) ...[
          _RowLabel('Organizas', own.length),
          SnapCarousel(
            peek: true,
            itemCount: own.length,
            itemBuilder: (context, i) => _MyEventCard(wedding: own[i], active: own[i].id == activeId),
          ),
        ],
        if (guest.isNotEmpty) ...[
          if (own.isNotEmpty) const SizedBox(height: 8),
          _RowLabel('Convidado', guest.length),
          SnapCarousel(
            peek: true,
            itemCount: guest.length,
            itemBuilder: (context, i) => _InvitedEventCard(wedding: guest[i]),
          ),
        ],
        // Mais espaço até «Descobrir».
        const SizedBox(height: 16),
      ],
      // O programa saiu daqui (pedido do Rafael, 2026-11-20): fica só no
      // painel do evento.
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
        // Cartões empilhados: linha grossa (2 px #CFCFCF) entre eles
        // (pedido 2026-11-22; só nas listas na vertical, não nos carrosséis).
        for (final (i, e) in publicEvents.indexed)
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _PublicEventCard(event: e),
              if (i < publicEvents.length - 1) const CardsDivider() else const SizedBox(height: 22),
            ]),
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
                  // Sino com os avisos pessoais (convites, lembretes) — 2026-11-11.
                  // À esquerda, como Parceiros (pedido 2026-11-12).
                  const PageHeader(title: 'Eventos', showBack: false, titleFontSize: 28, trailing: PartnerNotificationBell()),
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
      if (mounted) context.go('/evento');
      return;
    }
    if (e.joined) {
      context.go('/guest-home/${e.weddingId}');
      return;
    }
    // Sem lugares (migração 182).
    if (e.isFull) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Este evento está esgotado.')));
      return;
    }
    // Evento pago: entra-se comprando bilhete (migração 149).
    if (e.isPaid) {
      await showBuyTicketSheet(context, e);
      return;
    }
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => IslandAlert(
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
    } catch (err) {
      messenger.showSnackBar(SnackBar(
          content: Text(isEventFull(err) ? 'Este evento está esgotado.' : 'Não foi possível entrar no evento. Tenta outra vez.')));
      if (isEventFull(err)) ref.invalidate(publicEventsProvider);
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
    // Cartão com foto (DESIGN.md §4, 2026-11-22): sem caixa nem sombra.
    return PhotoCard(
      onTap: onTap ?? () {},
      photo: e.coverPhotoUrl == null
          ? _PosterPlaceholder(type: e.eventType, seed: e.weddingId.hashCode)
          : SizedNetworkImage(e.coverPhotoUrl!, fit: BoxFit.cover),
      leftTag: InfoTag(e.mine ? 'O teu evento' : (e.joined ? 'Vais' : e.eventType.label), green: e.mine || e.joined, onPhoto: true),
      rightTag: date == null ? null : PhotoPill('${date.day} ${_monthsShort[date.month - 1]}'),
      photoAction: busy
          ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
          : null,
      avatar: _HostAvatar(eventId: e.weddingId, fallbackName: e.displayNames),
      title: capFirst(e.displayNames),
      // Partilhar o evento por link (2026-11).
      titleAction: SnappyTap(
        onTap: () => sharePublicEvent(context, e),
        semanticLabel: 'Partilhar',
        child: const SizedBox(width: 32, height: 32, child: Icon(Hi.arrowUpOnSquare, size: 20, color: AppTheme.ink)),
      ),
      meta: [
        ?when,
        [
          ?e.place,
          if (e.venue?.isNotEmpty == true && e.location?.isNotEmpty == true) e.location!,
        ].join(' · '),
      ],
      // Quem confirmou (mockup «Quem vai nos eventos», D, 2026-11-22).
      footerLeft: _Attendees(
        eventId: e.weddingId,
        total: e.goingCount,
        // Limite (migração 182): poucos lugares ou esgotado.
        suffix: e.isFull ? 'esgotado' : ((e.spotsLeft ?? 99) <= 10 ? 'restam ${e.spotsLeft}' : null),
      ),
      footerRight: PriceBox('ENTRADA', price, outlined: true),
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

/// Título de grupo em maiúsculas por cima de cada linha de «Os meus
/// eventos» («ORGANIZAS · 2», «CONVIDADO · 3»).
class _RowLabel extends StatelessWidget {
  final String text;
  final int count;
  const _RowLabel(this.text, this.count);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 4, AppTheme.screenMargin, 10),
        child: Text('${text.toUpperCase()} · $count',
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      );
}

class _Title extends StatelessWidget {
  final String text;
  final String? subtitle;
  const _Title(this.text, {this.subtitle});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 18, AppTheme.screenMargin, 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(text, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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
          // Da altura da navbar (pedido 2026-11-12).
          child: Container(
            height: 76,
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(18)),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, size: 26, color: _brandGreen),
              const SizedBox(height: 4),
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




/// Foto do evento (ou o símbolo do tipo, sem foto) para o [PhotoCard].
Widget _coverImage(String id, EventType type, String? photo) => photo != null
    ? SizedNetworkImage(photo, fit: BoxFit.cover)
    : Container(
        color: const Color(0xFFE7D9C3),
        alignment: Alignment.center,
        child: StickerIcon(_typeIcon(type), turns: StickerIcon.tilt(id.hashCode)),
      );

/// Pílula branca com o dia, por cima da foto («12 jun»).
Widget? _datePill(DateTime? d) => d == null ? null : PhotoPill('${d.day} ${_monthsShort[d.month - 1]}');

/// Rodapé com quanto falta: «FALTAM» 9 + «203 dias» 16, sem caixa.
Widget? _countdownBox(DateTime? d) {
  if (d == null) return null;
  final now = DateTime.now();
  final n = DateTime(d.year, d.month, d.day).difference(DateTime(now.year, now.month, now.day)).inDays;
  final (label, value) = switch (n) {
    < 0 => ('FOI HÁ', '${-n} ${n == -1 ? 'dia' : 'dias'}'),
    0 => ('É', 'Hoje'),
    1 => ('É', 'Amanhã'),
    _ => ('FALTAM', '$n dias'),
  };
  // Sem caixa branca nem linha preta (pedido 2026-11-22): só o rótulo 9 e
  // o valor 16, alinhados à direita.
  return Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.end, children: [
    Text(label,
        style: const TextStyle(fontSize: 9, height: 1.2, letterSpacing: 0.4, fontWeight: FontWeight.w800, color: AppTheme.inkMuted)),
    Text(value, style: const TextStyle(fontSize: 16, height: 1.1, fontWeight: FontWeight.w800, color: AppTheme.ink)),
  ]);
}

/// Números de um evento que organizo, para o cartão (cartões densos,
/// 2026-11-11): convidados, confirmados, reservas e o planeamento.
class _OrgSummary {
  final int guests;
  final int confirmed;
  final int bookings;
  final int done;
  final int total;
  final ({String id, String title})? next;

  /// Prazos das tarefas por fazer que já abriram (null = sem prazo).
  final List<DateTime?> dues;

  /// Título da tarefa aberta mais urgente (a pílula do cartão).
  final String? firstOpen;
  const _OrgSummary(
      {this.guests = 0,
      this.confirmed = 0,
      this.bookings = 0,
      this.done = 0,
      this.total = 0,
      this.next,
      this.dues = const [],
      this.firstOpen});
}

final _orgSummaryProvider = FutureProvider.autoDispose.family<_OrgSummary, String>((ref, id) async {
  try {
    Future<List> list(Future<dynamic> q) async => (await q) as List;
    final r = await Future.wait([
      list(supabase.from('guests').select('rsvp_status').eq('wedding_id', id)),
      list(supabase.from('bookings').select('status').eq('wedding_id', id)),
      list(supabase
          .from('wedding_tasks')
          .select('id, title, status, priority, created_at, due_date, available_at')
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
      dues: [
        for (final t in active)
          if (_isOpen(t['available_at'] as String?)) t['due_date'] == null ? null : DateTime.tryParse(t['due_date'] as String),
      ],
      firstOpen: _mostUrgent([
        for (final t in active)
          if (_isOpen(t['available_at'] as String?))
            (t['title'] as String, t['due_date'] == null ? null : DateTime.tryParse(t['due_date'] as String)),
      ]),
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
  final bool hasGifts;
  final bool gave;
  const _GuestSteps({this.answered = true, this.declined = false, this.hasGifts = false, this.gave = false});

  // Presença e presente com o visto verde (mockup 2026-11-11; o menu saiu
  // a 2026-11-15).
  List<(String, String, bool)> get steps => [
        ('rsvp', 'Presença', answered),
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
    hasGifts: r[1].isNotEmpty,
    gave: r[2].isNotEmpty || r[3].isNotEmpty || r[4].isNotEmpty,
  );
});




/// Tarefa já aberta (o resto e o pagamento único só abrem 6 dias antes do
/// prazo — `available_at`).
bool _isOpen(String? availableAt) {
  final a = availableAt == null ? null : DateTime.tryParse(availableAt);
  return a == null || !a.isAfter(DateTime.now());
}

/// Cor do sinal do cartão (DESIGN.md §7, B1, 2026-11-22): vermelho se
/// alguma coisa por fazer acaba em 3 dias ou menos (ou já acabou), pelo
/// prazo dela; sem prazo, conta a data do evento. Senão, amarelo.
AlertTone _toneForAll(Iterable<DateTime?> dues, DateTime? eventDate) =>
    dues.any((d) => toneForDue(d ?? eventDate) == AlertTone.urgent) ? AlertTone.urgent : AlertTone.pending;

/// A tarefa com o prazo mais perto (as sem prazo ficam no fim).
String? _mostUrgent(List<(String, DateTime?)> tasks) {
  if (tasks.isEmpty) return null;
  final sorted = [...tasks]..sort((a, b) {
      if (a.$2 == null && b.$2 == null) return 0;
      if (a.$2 == null) return 1;
      if (b.$2 == null) return -1;
      return a.$2!.compareTo(b.$2!);
    });
  return sorted.first.$1;
}

/// Pílula de alerta por baixo do rodapé do cartão (mockup «Alerta com ação
/// nos cartões», 2026-11-22): branca, linha 1,5 da cor do tom, ponto, a
/// tarefa mais urgente (+N) e o botão preto 36 com a ação.
class _TaskPill extends StatelessWidget {
  final AlertTone tone;
  final String task;
  final int more;
  final String action;
  final VoidCallback onTap;
  const _TaskPill({required this.tone, required this.task, required this.more, required this.action, required this.onTap});

  @override
  Widget build(BuildContext context) => Padding(
        // Sem pílula nem fundo (proposta B, 2026-11-22): a cor do tom está
        // na linha à volta do cartão.
        padding: const EdgeInsets.fromLTRB(4, 0, 0, 0),
        child: Row(children: [
          AlertDot(tone),
          const SizedBox(width: 8),
          Expanded(
            child: Text(more > 0 ? '$task · +$more' : task,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          const SizedBox(width: 8),
          FilledButton(
            onPressed: onTap,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              minimumSize: const Size(0, 36),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              shape: const StadiumBorder(),
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
              textStyle: const TextStyle(
                  fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 13, fontWeight: FontWeight.w700),
            ),
            child: Text(action),
          ),
        ]),
      );
}

/// Dias até ao prazo (hoje = 0; negativo = já passou).
int? _daysTo(DateTime? d) {
  if (d == null) return null;
  final now = DateTime.now();
  return DateTime(d.year, d.month, d.day).difference(DateTime(now.year, now.month, now.day)).inDays;
}


/// Foto de quem criou o evento no círculo do cartão, como o logótipo dos
/// parceiros (pedido 2026-11-22, migração 214); sem ela, as iniciais.
class _HostAvatar extends ConsumerWidget {
  final String eventId;
  final String fallbackName;
  const _HostAvatar({required this.eventId, required this.fallbackName});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final host = ref.watch(eventHostProvider(eventId)).value;
    final name = host?.name.isNotEmpty == true ? host!.name : fallbackName;
    return V2Avatar(name, size: 44, imageUrl: host?.avatarUrl);
  }
}

/// Rodapé com quem confirmou (forma D do mockup «Quem vai nos eventos»).
class _Attendees extends ConsumerWidget {
  final String eventId;
  final int total;
  final String? suffix;
  final String? emptyText;

  /// Cartões brancos de «Os meus eventos»: o aro das fotos a branco.
  final bool onWhite;
  const _Attendees({required this.eventId, required this.total, this.suffix, this.emptyText, this.onWhite = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final people = total > 0 ? ref.watch(eventAttendeesProvider(eventId)).value ?? const <EventPerson>[] : const <EventPerson>[];
    return AttendeesLine(
      people: people,
      total: total,
      suffix: suffix,
      emptyText: emptyText ?? 'Sê o primeiro a ir!',
      ring: onWhite ? Colors.white : AppTheme.background,
    );
  }
}

/// Evento que organizo: abre o painel desse evento.
class _MyEventCard extends ConsumerWidget {
  final Wedding wedding;
  final bool active;
  const _MyEventCard({required this.wedding, required this.active});

  Future<void> _open(BuildContext context, WidgetRef ref) async {
    await ref.read(weddingControllerProvider.notifier).select(wedding.id);
    if (context.mounted) context.go('/evento');
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    final summary = ref.watch(_orgSummaryProvider(wedding.id)).value ?? const _OrgSummary();
    // Só o que está na lista «Para fazer» do painel (pedido 2026-11-22 —
    // as sugestões não contam): pagamentos com prazo (o sinal logo; o
    // restante só nos 6 dias antes do prazo), propostas dos parceiros e
    // pedidos para entrar.
    final items = <(String, DateTime?, String)>[];
    for (final b in ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[]) {
      if (b.weddingId != wedding.id || b.status == BookingStatus.recusado) continue;
      if (b.pendingDepositPaymentId != null) {
        items.add((b.depositIsFull ? 'Pagar · ${b.partnerName}' : 'Pagar o sinal · ${b.partnerName}', b.pendingDepositDueAt, 'Pagar'));
      }
      if (b.pendingFinalPaymentId != null && (_daysTo(b.finalPaymentDueAt) ?? 0) <= 6) {
        items.add(('Pagar o restante · ${b.partnerName}', b.finalPaymentDueAt, 'Pagar'));
      }
    }
    for (final p in ref.watch(pendingProposalsProvider).value ?? const <ReceivedProposal>[]) {
      if (p.weddingId == wedding.id) items.add(('Proposta de ${p.partnerName}', null, 'Ver'));
    }
    final requests = ref.watch(joinRequestsProvider(wedding.id)).value?.length ?? 0;
    if (requests > 0) {
      items.add(('$requests ${requests == 1 ? 'pedido para entrar' : 'pedidos para entrar'}', null, 'Aceitar'));
    }
    // A mais urgente primeiro (com prazo, o mais perto; sem prazo no fim).
    items.sort((x, y) {
      if (x.$2 == null && y.$2 == null) return 0;
      if (x.$2 == null) return 1;
      if (y.$2 == null) return -1;
      return x.$2!.compareTo(y.$2!);
    });
    final dues = [for (final i in items) i.$2];
    final todo = items.length;
    final first = items.firstOrNull;
    final tone = _toneForAll(dues, wedding.weddingDate);
    // Cartão com foto (DESIGN.md §4, 2026-11-22): sem caixa nem sombra,
    // como os parceiros, dentro da moldura. Toque longo: arquivar ou
    // apagar (185).
    return PhotoCard(
      frameTone: todo > 0 ? tone : null,
      filled: true,
      onTap: () => _open(context, ref),
      onLongPress: () => showEventActionsSheet(context, ref,
          weddingId: wedding.id,
          name: capFirst(wedding.displayNames),
          isOwner: wedding.ownerId == ref.read(authControllerProvider).profile?.id),
      photo: _coverImage(wedding.id, wedding.eventType, wedding.coverPhotoUrl),
      leftTag: const InfoTag('Organizas', green: true),
      rightTag: _datePill(wedding.weddingDate),
      avatar: _HostAvatar(eventId: wedding.id, fallbackName: wedding.displayNames),
      title: capFirst(wedding.displayNames),
      meta: [
        wedding.eventType.label,
        [
          ?place,
          if (summary.guests > 0) '${summary.guests} ${summary.guests == 1 ? 'convidado' : 'convidados'}',
        ].join(' · '),
      ],
      // Sempre as 3 fotos (pedido 2026-11-22): quem confirmou ou, sem
      // ninguém, os 3 círculos cinzentos.
      footerLeft: _Attendees(
        eventId: wedding.id,
        total: summary.confirmed,
        onWhite: true,
        emptyText: summary.guests > 0 ? 'Ninguém respondeu ainda' : 'Ainda sem convidados',
      ),
      footerRight: _countdownBox(wedding.weddingDate),
      // A tarefa mais urgente com o botão da ação (2026-11-22).
      below: first != null
          ? _TaskPill(
              tone: tone,
              task: first.$1,
              more: todo - 1,
              action: first.$3,
              onTap: () => _open(context, ref),
            )
          : null,
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
    final open = '/guest-home/${wedding.weddingId}';
    final stepsAsync = ref.watch(_guestStepsProvider(wedding.weddingId));
    final steps = stepsAsync.value?.steps ?? const <(String, String, bool)>[];
    final next = steps.where((s) => !s.$3).firstOrNull;
    // Mesas (cada um escolhe / cada um paga): escolher conta sempre; pagar
    // a minha parte só nos 6 dias antes do prazo; vermelho nos últimos 3.
    final tables = ref.watch(myEventTablesProvider(wedding.weddingId)).value ?? const <EventTable>[];
    final dues = <DateTime?>[
      for (final s in steps)
        if (!s.$3) null,
      for (final t in tables)
        if (t.needsAction && ((t.eachChooses && !t.chose) || (_daysTo(t.choiceDeadline) ?? 0) <= 6)) t.choiceDeadline,
    ];
    final todo = dues.length;
    final tone = _toneForAll(dues, wedding.weddingDate);
    // A tarefa da pílula: responder primeiro; depois as mesas (escolher e
    // pagar); depois o presente.
    final tableTodo = tables
        .where((t) => t.needsAction && ((t.eachChooses && !t.chose) || (_daysTo(t.choiceDeadline) ?? 0) <= 6))
        .toList();
    final (String, String)? first = next?.$1 == 'rsvp'
        ? ('Diz se vais', 'Responder')
        : tableTodo.isNotEmpty
            ? (tableTodo.first.eachChooses && !tableTodo.first.chose ? 'Escolher o menu e pagar a tua parte' : 'Pagar a tua parte', 'Pagar')
            : next?.$1 == 'gift'
                ? ('Oferece um presente', 'Ver')
                : null;
    final going = ref.watch(eventGoingCountProvider(wedding.weddingId)).value;
    return PhotoCard(
      frameTone: todo > 0 ? tone : null,
      filled: true,
      onTap: () => context.go(open),
      photo: _coverImage(wedding.weddingId, wedding.eventType, wedding.coverPhotoUrl),
      leftTag: const InfoTag('Convidado', onPhoto: true),
      rightTag: _datePill(wedding.weddingDate),
      avatar: _HostAvatar(eventId: wedding.weddingId, fallbackName: wedding.displayNames),
      title: capFirst(wedding.displayNames),
      meta: [
        wedding.eventType.label,
        [?place, if (wedding.ceremonyTime?.isNotEmpty == true) wedding.ceremonyTime!].join(' · '),
      ],
      // Quem vai (pedido 2026-11-22, mockup «Os meus eventos · cartões
      // brancos»): as 3 fotos, como no organizador; o que falta fazer vai
      // na tarefa por baixo. Antes da 220 (sem contagem), o estado.
      footerLeft: going != null
          ? _Attendees(eventId: wedding.weddingId, total: going, onWhite: true, emptyText: 'Ninguém confirmou ainda')
          : steps.isEmpty
              ? null
              : next == null
                  ? const InfoTag('Está tudo tratado', green: true)
                  : next.$1 == 'rsvp'
                      ? const InfoTag('Ainda não respondeste')
                      : const InfoTag('Vais', green: true),
      footerRight: _countdownBox(wedding.weddingDate),
      below: todo > 0 && first != null
          ? _TaskPill(tone: tone, task: first.$1, more: todo - 1, action: first.$2, onTap: () => context.go(open))
          : null,
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
class _InviteNotice extends ConsumerStatefulWidget {
  final GuestWedding wedding;
  final int more;
  const _InviteNotice({required this.wedding, required this.more});

  @override
  ConsumerState<_InviteNotice> createState() => _InviteNoticeState();
}

class _InviteNoticeState extends ConsumerState<_InviteNotice> {
  bool _busy = false;

  // «Vou / Não vou» só aqui (pedido 2026-11-21): o painel do evento e o
  // assistente já não perguntam (só o RSVP pelo link). «Vou» abre o painel,
  // que segue para o assistente (quem vai contigo, idades, alergias).
  Future<void> _answer(bool going) async {
    final id = widget.wedding.weddingId;
    final messenger = ScaffoldMessenger.of(context);
    setState(() => _busy = true);
    try {
      final guest = await ref.read(myGuestRowProvider(id).future);
      if (guest == null) throw StateError('sem convite');
      await setMyRsvp(guest, going);
      ref.invalidate(myGuestRowProvider(id));
      ref.invalidate(_pendingInvitesProvider);
      if (!mounted) return;
      if (going) {
        context.go('/guest-home/$id');
      } else {
        messenger.showSnackBar(const SnackBar(content: Text('Os anfitriões ficam a saber.')));
      }
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não deu para guardar a resposta. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final wedding = widget.wedding;
    final more = widget.more;
    final two = wedding.partnerName2 != null && wedding.partnerName2!.isNotEmpty;
    final noun = wedding.eventType.noun;
    final fem = noun.startsWith('festa') || noun.startsWith('comunhão') || noun.startsWith('renovação');
    final what = noun == 'evento' ? 'um evento' : '${fem ? 'a' : 'o'} $noun';
    final date = wedding.weddingDate == null ? null : formatWeddingDateCaps(wedding.weddingDate!);
    // Mockup "Alertas" (2026-11-12): uma linha fina, branca, com
    // contorno verde que brilha uns segundos ao entrar.
    return SnappyTap(
      onTap: () => context.go('/guest-home/${wedding.weddingId}'),
      child: AlertOutline(
        tone: AlertTone.invite,
        radius: 22,
        padding: const EdgeInsets.fromLTRB(14, 12, 12, 12),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Color(0xFFE6EDE1), shape: BoxShape.circle),
            child: const Icon(Hi.envelope, size: 18, color: Color(0xFF3F7A4F)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(more > 0 ? 'CONVITES POR RESPONDER · ${more + 1}' : 'CONVITE POR RESPONDER',
                  style: const TextStyle(fontSize: 11, letterSpacing: 1.5, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
              Text('${capFirst(wedding.displayNames)} ${two ? 'convidaram' : 'convidou'}-te para $what',
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 15, height: 1.25, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (date != null)
                Text(date, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(child: _btn('Não vou', outlined: true, onTap: _busy ? null : () => _answer(false))),
          const SizedBox(width: 8),
          Expanded(child: _btn('Vou', onTap: _busy ? null : () => _answer(true))),
        ]),
        ]),
      ),
    );
  }

  Widget _btn(String label, {bool outlined = false, VoidCallback? onTap}) => GestureDetector(
        onTap: onTap,
        child: Container(
          height: 36,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: outlined ? Colors.white : AppTheme.ink,
            borderRadius: BorderRadius.circular(18),
            border: outlined ? Border.all(color: AppTheme.ink, width: 1.5) : null,
          ),
          child: Text(label, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: outlined ? AppTheme.ink : Colors.white)),
        ),
      );
}

/// "Convite para organizar": quem te convidou, para que evento, e o botão
/// para ir ver e aceitar (migração 202). Mesma linha verde dos convites (§7).
class _OrganizerInviteNotice extends StatelessWidget {
  final OrganizerInvite invite;
  const _OrganizerInviteNotice({required this.invite});

  @override
  Widget build(BuildContext context) {
    final inviter = capFirst((invite.inviterName ?? 'Alguém').trim());
    final event = (invite.eventName ?? '').trim();
    return SnappyTap(
      onTap: () => context.go('/juntar/${invite.token}'),
      child: AlertOutline(
        tone: AlertTone.invite,
        radius: 22,
        padding: const EdgeInsets.fromLTRB(14, 12, 12, 12),
        child: Row(children: [
          Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Color(0xFFE6EDE1), shape: BoxShape.circle),
            child: const Icon(Hi.envelope, size: 18, color: Color(0xFF3F7A4F)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              const Text('CONVITE PARA ORGANIZAR',
                  style: TextStyle(fontSize: 11, letterSpacing: 1.5, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
              Text(
                  event.isEmpty
                      ? '$inviter convidou-te para a organização de um evento'
                      : '$inviter convidou-te para a organização de $event',
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 15, height: 1.25, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
          const SizedBox(width: 10),
          Container(
            height: 36,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
            child: const Text('Ver', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
        ]),
      ),
    );
  }
}

/// Verde da app nas caixas de criar evento (pedido 2026-11-11).
const _brandGreen = Color(0xFF4F6B4A);

/// "Os meus eventos" com os mesmos cartões, para o Perfil (mockup
/// "Perfil", 2026-11-12).
class MyEventsCarousel extends ConsumerWidget {
  const MyEventsCarousel({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    final organizer = role != UserRole.partner;
    final weddingState = ref.watch(weddingControllerProvider);
    final myEvents = organizer ? weddingState.events : const <Wedding>[];
    final activeId = weddingState.wedding?.id;
    final invited = ref.watch(guestWeddingsProvider).value ?? const <GuestWedding>[];
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
    if (own.isEmpty && guest.isEmpty) return const SizedBox.shrink();
    return SnapCarousel(
      peek: true,
      itemCount: own.length + guest.length,
      itemBuilder: (context, i) => i < own.length
          ? _MyEventCard(wedding: own[i], active: own[i].id == activeId)
          : _InvitedEventCard(wedding: guest[i - own.length]),
    );
  }
}

/// Cartão de um evento público (Descobrir), para o perfil de um amigo.
class EventPosterCard extends StatelessWidget {
  final PublicEvent event;
  const EventPosterCard({super.key, required this.event});

  @override
  Widget build(BuildContext context) => _PublicEventCard(event: event);
}
