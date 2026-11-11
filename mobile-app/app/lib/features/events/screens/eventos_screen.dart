import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../../../shared/widgets/snap_carousel.dart';
import 'package:copo_dagua_app/features/events/screens/tickets_screens.dart';
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
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
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
    ref.invalidate(_pendingInvitesProvider);
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
      if (hasMine)
        const _Pad(_ActionsRow())
      else
        const _Pad(_StartCard()),
      if (!hasMine) const _Pad(_InviteTile()),
      if (hasMine) ...[
        const _Title('Os meus eventos'),
        SnapCarousel(
          height: 330,
          itemCount: own.length + guest.length,
          itemBuilder: (context, i) => i < own.length
              ? _MyEventCard(wedding: own[i], showPlanning: own[i].id == activeId)
              : _InvitedEventCard(wedding: guest[i - own.length]),
        ),
      ],
      const _Title('Descobrir', subtitle: 'Eventos abertos a que podes ir'),
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
          SafeArea(
            bottom: false,
            child: RefreshIndicator(
              onRefresh: _refresh,
              child: ListView(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 150),
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
            child: organizer
                ? const FloatingBottomNav(current: AppTab.events)
                : const GuestBottomNav(current: GuestTab.events),
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
      EventType.wedding => Icons.favorite_border,
      EventType.birthday => Icons.cake_outlined,
      EventType.baptism => Icons.water_drop_outlined,
      _ => Icons.celebration_outlined,
    };

String _meta(DateTime? date, String? place) => [
      if (date != null) formatWeddingDateCaps(date),
      if (place != null) place,
    ].join(' · ');

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

/// "Criar evento" e "Tenho um código", lado a lado.
class _ActionsRow extends StatelessWidget {
  const _ActionsRow();

  Widget _box(BuildContext context, {required bool dark, required IconData icon, required String label, required VoidCallback onTap}) =>
      Expanded(
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            height: 96,
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
            decoration: BoxDecoration(
              color: dark ? _brandGreen : Colors.white,
              borderRadius: BorderRadius.circular(20),
              boxShadow: dark ? null : const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(color: dark ? Colors.white : AppTheme.surface, shape: BoxShape.circle),
                  child: Icon(icon, size: 18, color: AppTheme.ink),
                ),
                Text(label, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: dark ? Colors.white : AppTheme.ink)),
              ],
            ),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => Row(children: [
        _box(context, dark: true, icon: Icons.add_rounded, label: 'Criar evento', onTap: () => context.push('/novo-evento')),
        const SizedBox(width: 10),
        _box(context, dark: false, icon: Icons.qr_code_2_rounded, label: 'Tenho um código', onTap: () => showGuestModeSheet(context)),
      ]);
}

/// Conta sem eventos: convite a criar o primeiro.
class _StartCard extends StatelessWidget {
  const _StartCard();

  static const _types = ['Casamento', 'Aniversário', 'Despedida', 'Jantar de grupo', 'Batizado', 'Outro'];

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.fromLTRB(20, 22, 20, 20),
        decoration: BoxDecoration(color: _brandGreen, borderRadius: BorderRadius.circular(26)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(color: const Color(0xFFF7EACA), borderRadius: BorderRadius.circular(18)),
                padding: const EdgeInsets.all(6),
                child: Image.asset('assets/mascot/duo_clink.png', fit: BoxFit.contain),
              ),
              const SizedBox(width: 14),
              const Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('O que vamos celebrar?',
                      style: TextStyle(fontSize: 20, height: 1.2, fontWeight: FontWeight.w800, color: Colors.white)),
                  SizedBox(height: 4),
                  Text('Cria o teu evento em 1 minuto.',
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFFE6EDE1))),
                ]),
              ),
            ]),
            const SizedBox(height: 16),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (final t in _types)
                SnappyTap(
                  onTap: () => context.push('/novo-evento'),
                  child: Container(
                    height: 40,
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0x99FFFFFF), width: 1.5),
                    ),
                    child: Text(t, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Colors.white)),
                  ),
                ),
            ]),
            const SizedBox(height: 16),
            SnappyTap(
              onTap: () => context.push('/novo-evento'),
              child: Container(
                height: 50,
                alignment: Alignment.center,
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(25)),
                child: const Text('Criar evento', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: AppTheme.ink)),
              ),
            ),
          ],
        ),
      );
}

class _InviteTile extends StatelessWidget {
  const _InviteTile();

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: () => showGuestModeSheet(context),
        child: Container(
          height: 64,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: softCard(),
          child: const Row(children: [
            Icon(Icons.qr_code_2_rounded, size: 22, color: AppTheme.ink),
            SizedBox(width: 12),
            Expanded(
              child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Recebeste um convite?', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                Text('Entra com o código ou o link', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              ]),
            ),
            Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
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

/// Evento que organizo: abre o painel desse evento.
class _MyEventCard extends ConsumerWidget {
  final Wedding wedding;
  final bool showPlanning;
  const _MyEventCard({required this.wedding, required this.showPlanning});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    final left = _daysLeft(wedding.weddingDate);
    final tasks = showPlanning ? ref.watch(taskEngineControllerProvider) : null;
    final done = tasks?.systemDone.length ?? 0;
    final total = done + (tasks?.systemActive.length ?? 0);
    final next = tasks?.systemActive.firstOrNull;
    return SnappyTap(
      onTap: () async {
        await ref.read(weddingControllerProvider.notifier).select(wedding.id);
        if (context.mounted) context.go('/wedding');
      },
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _Cover(
            id: wedding.id,
            type: wedding.eventType,
            photo: wedding.coverPhotoUrl,
            height: 150,
            badges: [if (left != null) _pill(left, dark: true), const Spacer(), _pill('Organizador')],
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(wedding.displayNames,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(_meta(wedding.weddingDate, place),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              if (total > 0) ...[
                const SizedBox(height: 12),
                Row(children: [
                  const Text('Planeamento', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                  const Spacer(),
                  Text('${(done * 100 / total).round()}%',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: AppTheme.accentOliveDark)),
                ]),
                const SizedBox(height: 6),
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: LinearProgressIndicator(
                    value: done / total,
                    minHeight: 8,
                    color: AppTheme.accentOliveDark,
                    backgroundColor: const Color(0xFFE2DED4),
                  ),
                ),
              ],
              if (next != null) ...[
                const SizedBox(height: 10),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                  decoration: BoxDecoration(color: const Color(0xFFF7EACA), borderRadius: BorderRadius.circular(12)),
                  child: Text('Para fazer: ${next.title}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: Color(0xFF5A3E0C))),
                ),
              ],
            ]),
          ),
        ]),
      ),
    );
  }
}

/// Evento onde sou convidado: abre a página de convidado.
class _InvitedEventCard extends StatelessWidget {
  final GuestWedding wedding;
  const _InvitedEventCard({required this.wedding});

  @override
  Widget build(BuildContext context) {
    final place = wedding.venue?.isNotEmpty == true
        ? wedding.venue
        : (wedding.location?.isNotEmpty == true ? wedding.location : null);
    final left = _daysLeft(wedding.weddingDate);
    return SnappyTap(
      onTap: () => context.go('/guest-home/${wedding.weddingId}'),
      child: Container(
        clipBehavior: Clip.antiAlias,
        decoration: softCard(radius: 22),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _Cover(
            id: wedding.weddingId,
            type: wedding.eventType,
            photo: wedding.coverPhotoUrl,
            height: 150,
            badges: [if (left != null) _pill(left, dark: true), const Spacer(), _pill('Convidado')],
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(wedding.displayNames,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(_meta(wedding.weddingDate, place),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
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
            const Icon(Icons.mail_outline_rounded, size: 18, color: Colors.white),
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
