import 'package:flutter/material.dart';
import '../../../shared/widgets/island_sheet.dart';
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
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/floating_filter_bar.dart' show FilterChipsRow, FilterBarItem;
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../guest_home/screens/guest_events_screen.dart' show GuestEventCard, DashedBorderPainter;
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
  late int? _tab = widget.initialTab; // 0 = Descobrir, 1 = Os meus

  // Descobrir: procurar por nome ou zona e filtrar por data (2026-11).
  final _search = TextEditingController();
  _When _when = _When.any;

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

  Future<void> _pickWhen() async {
    final picked = await showIslandSheet<_When>(
      context: context,
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Padding(
              padding: EdgeInsets.fromLTRB(20, 18, 20, 6),
              child: Align(
                alignment: Alignment.centerLeft,
                child: Text('Quando', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
            for (final w in _When.values)
              ListTile(
                title: Text(w.label),
                trailing: w == _when ? Icon(Icons.check_rounded, color: AppTheme.accentOliveDark) : null,
                onTap: () => Navigator.pop(ctx, w),
              ),
            const SizedBox(height: 8),
          ],
        ),
      ),
    );
    if (picked != null) setState(() => _when = picked);
  }

  Future<void> _refresh() async {
    ref.invalidate(guestWeddingsProvider);
    ref.invalidate(publicEventsProvider);
    await ref.read(publicEventsProvider.future);
  }

  @override
  Widget build(BuildContext context) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    final organizer = role == UserRole.couple;
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
    final filtering = _search.text.trim().isNotEmpty || _when != _When.any;
    final tab = _tab ?? (myEvents.isNotEmpty || invited.isNotEmpty ? 1 : 0);

    final List<Widget> content = tab == 0
        ? [
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 0),
              child: Row(children: [
                Expanded(child: SearchPill(controller: _search, hint: 'Procurar por nome ou zona')),
                const SizedBox(width: 10),
                SnappyTap(
                  onTap: _pickWhen,
                  child: Container(
                    height: 48,
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    decoration: BoxDecoration(
                      color: _when == _When.any ? Colors.white : AppTheme.accentOliveDark,
                      borderRadius: BorderRadius.circular(999),
                      boxShadow: const [BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6))],
                    ),
                    child: Row(mainAxisSize: MainAxisSize.min, children: [
                      Icon(Icons.calendar_today_outlined,
                          size: 18, color: _when == _When.any ? AppTheme.ink : Colors.white),
                      const SizedBox(width: 6),
                      Text(_when.short,
                          style: TextStyle(
                              fontSize: 13,
                              fontWeight: FontWeight.w700,
                              color: _when == _When.any ? AppTheme.ink : Colors.white)),
                    ]),
                  ),
                ),
              ]),
            ),
            const SizedBox(height: 18),
            if (publicAsync.isLoading && publicAsync.value == null)
              const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator()))
            else if (publicEvents.isEmpty)
              _Pad(_EmptyNote(filtering
                  ? 'Nenhum evento público com estes filtros.'
                  : 'Ainda não há eventos públicos. Quando um organizador abrir o seu evento a todos, aparece aqui.'))
            else
              for (final e in publicEvents)
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 22),
                  child: _PublicEventCard(event: e),
                ),
          ]
        : [
            if (myEvents.isNotEmpty) ...[
              const _Section('A organizar'),
              for (final w in myEvents)
                _Pad(_OwnEventCard(wedding: w, active: myEvents.length > 1 && w.id == activeId)),
              const SizedBox(height: 8),
            ],
            if (invited.isNotEmpty) ...[
              const _Section('Convidado'),
              for (final w in invited) _Pad(GuestEventCard(wedding: w)),
              const SizedBox(height: 8),
            ],
            if (myEvents.isEmpty && invited.isEmpty)
              const _Pad(_EmptyNote('Ainda não tens eventos. Cria o teu ou descobre um evento público.')),
            _Pad(_CreateEventButton()),
            _Pad(_CodeButton()),
          ];

    final tabs = FilterChipsRow(
      items: const [FilterBarItem('Descobrir'), FilterBarItem('Os meus eventos')],
      selected: tab,
      infinite: false,
      visible: 2,
      onSelected: (i) => setState(() => _tab = i),
    );

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: RefreshIndicator(
              onRefresh: _refresh,
              child: ListView(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 190),
                children: [
                  const PageHeader(title: 'Eventos', showBack: false, centered: true),
                  const SizedBox(height: 14),
                  const TeamBannerCard(),
                  // Quem não tem Chat vê aqui a conversa com a equipa.
                  if (!organizer) const TeamThreadEntry(padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 14)),
                  ...content,
                ],
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            // "Descobrir" / "Os meus eventos" por cima da navbar (pedido
            // 2026-11), na mesma ilha — como os filtros da Galeria.
            child: organizer
                ? FloatingBottomNav(current: AppTab.events, top: tabs)
                : GuestBottomNav(current: GuestTab.events, top: tabs),
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

class _Section extends StatelessWidget {
  final String text;
  const _Section(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 4, 4, AppTheme.screenMargin, 10),
        child: Text(
          text.toUpperCase(),
          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark),
        ),
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
      EventType.wedding => Icons.favorite_border,
      EventType.birthday => Icons.cake_outlined,
      EventType.baptism => Icons.water_drop_outlined,
      _ => Icons.celebration_outlined,
    };

String _meta(DateTime? date, String? place) => [
      if (date != null) formatWeddingDateCaps(date),
      if (place != null) place,
    ].join(' · ');

class _EventTile extends StatelessWidget {
  final String id;
  final EventType type;
  final String names;
  final String meta;
  final String? photo;
  final Widget trailing;
  final VoidCallback onTap;

  const _EventTile({
    required this.id,
    required this.type,
    required this.names,
    required this.meta,
    required this.photo,
    required this.trailing,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: softCard(),
        child: Row(
          children: [
            photo == null
                ? StickerIcon(_typeIcon(type), turns: StickerIcon.tilt(id.hashCode))
                : ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: SizedNetworkImage(photo!, width: 44, height: 44, fit: BoxFit.cover),
                  ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    type.label.toUpperCase(),
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.8, color: AppTheme.accentOliveDark),
                  ),
                  const SizedBox(height: 2),
                  Text(names, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            trailing,
          ],
        ),
      ),
    );
  }
}

class _Badge extends StatelessWidget {
  final String text;
  final Color bg;
  final Color fg;
  const _Badge(this.text, {required this.bg, required this.fg});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(999)),
        child: Text(text, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: fg)),
      );
}

class _OwnEventCard extends ConsumerWidget {
  final Wedding wedding;
  final bool active;
  const _OwnEventCard({required this.wedding, this.active = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    return _EventTile(
      id: wedding.id,
      type: wedding.eventType,
      names: wedding.displayNames,
      meta: _meta(wedding.weddingDate, place),
      photo: wedding.coverPhotoUrl,
      trailing: _Badge(active ? 'Aberto' : 'Organizas', bg: AppTheme.accentOliveDark, fg: Colors.white),
      onTap: () async {
        await ref.read(weddingControllerProvider.notifier).select(wedding.id);
        if (context.mounted) context.go('/wedding');
      },
    );
  }
}

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
const _weekdays = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

/// Cartaz de um evento público (inspirado na Shotgun): imagem grande,
/// data em destaque, preço por cima e título/local por baixo.
class _PosterCard extends StatelessWidget {
  final PublicEvent event;
  final bool busy;
  final VoidCallback? onTap;
  const _PosterCard({required this.event, required this.busy, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final e = event;
    final date = e.date;
    final sub = [
      if (date != null) '${_weekdays[date.weekday - 1]} ${date.day} ${_months[date.month - 1]}${e.time?.isNotEmpty == true ? ' · ${e.time}' : ''}',
      if (e.place != null) e.place!,
    ].join(' · ');
    return SnappyTap(
      onTap: onTap ?? () {},
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          AspectRatio(
            aspectRatio: 4 / 3,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(22),
              child: Stack(
                fit: StackFit.expand,
                children: [
                  e.coverPhotoUrl == null
                      ? _PosterPlaceholder(type: e.eventType, seed: e.weddingId.hashCode)
                      : SizedNetworkImage(e.coverPhotoUrl!, fit: BoxFit.cover),
                  // Escurece o fundo para o texto por cima se ler bem.
                  const DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Color(0x33000000), Color(0x00000000), Color(0x66000000)],
                        stops: [0, 0.45, 1],
                      ),
                    ),
                  ),
                  // Partilhar o evento por link (2026-11).
                  Positioned(
                    right: 8,
                    top: 8,
                    child: Material(
                      color: Colors.white,
                      shape: const CircleBorder(),
                      child: IconButton(
                        tooltip: 'Partilhar',
                        icon: const Icon(Icons.ios_share_rounded, size: 20, color: AppTheme.ink),
                        onPressed: () => sharePublicEvent(context, e),
                      ),
                    ),
                  ),
                  if (date != null)
                    Positioned(
                      left: 12,
                      top: 12,
                      child: Container(
                        width: 54,
                        padding: const EdgeInsets.symmetric(vertical: 6),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
                        child: Column(
                          children: [
                            Text('${date.day}',
                                style: const TextStyle(fontSize: 22, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            const SizedBox(height: 2),
                            Text(_months[date.month - 1],
                                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.8, color: AppTheme.accentOliveDark)),
                          ],
                        ),
                      ),
                    ),
                  Positioned(
                    right: 12,
                    bottom: 12,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                      decoration: BoxDecoration(
                        color: e.isPaid || e.mine ? Colors.white : AppTheme.accentOliveDark,
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: busy
                          ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                          : Text(
                              e.mine ? 'O teu evento' : e.joined ? 'Abrir' : (e.isPaid ? e.priceLabel.replaceAll(' por pessoa', '') : 'Grátis'),
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w700,
                                color: e.isPaid || e.mine ? AppTheme.ink : Colors.white,
                              ),
                            ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 10),
          Text(
            e.eventType.label.toUpperCase(),
            style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(height: 2),
          Text(e.displayNames,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 19, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (sub.isNotEmpty) ...[
            const SizedBox(height: 3),
            Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ],
        ],
      ),
    );
  }
}

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

class _CreateEventButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: () => context.push('/novo-evento'),
      child: Container(
        height: 56,
        decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(18)),
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.add_rounded, size: 22, color: Colors.white),
            SizedBox(width: 10),
            Text('Criar um evento', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
          ],
        ),
      ),
    );
  }
}

class _CodeButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: () => showGuestModeSheet(context),
      child: CustomPaint(
        painter: DashedBorderPainter(),
        child: SizedBox(
          height: 56,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.qr_code_2_rounded, size: 20, color: AppTheme.accentOliveDark),
              const SizedBox(width: 10),
              Text('Tenho um código',
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ],
          ),
        ),
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
    await Clipboard.setData(ClipboardData(text: link));
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
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.only(bottom: 40),
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
                  icon: const Icon(Icons.explore_outlined),
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
