import 'package:flutter/material.dart';
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
  const EventosScreen({super.key});

  @override
  ConsumerState<EventosScreen> createState() => _EventosScreenState();
}

/// Dois separadores (pedido 2026-11): "Descobrir" com os eventos
/// públicos em cartaz (ao estilo da Shotgun) e "Os meus" com os eventos
/// que organizo e aqueles a que já tenho acesso.
class _EventosScreenState extends ConsumerState<EventosScreen> {
  int? _tab; // 0 = Descobrir, 1 = Os meus
  EventType? _typeFilter;

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
    final types = {for (final e in allPublic) e.eventType}.toList();
    final publicEvents = _typeFilter == null ? allPublic : allPublic.where((e) => e.eventType == _typeFilter).toList();
    final tab = _tab ?? (myEvents.isNotEmpty || invited.isNotEmpty ? 1 : 0);

    final List<Widget> content = tab == 0
        ? [
            if (types.length > 1)
              SizedBox(
                height: 40,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                  children: [
                    _TypeChip(label: 'Todos', selected: _typeFilter == null, onTap: () => setState(() => _typeFilter = null)),
                    for (final t in types)
                      _TypeChip(label: t.label, selected: _typeFilter == t, onTap: () => setState(() => _typeFilter = t)),
                  ],
                ),
              ),
            const SizedBox(height: 14),
            if (publicAsync.isLoading && publicAsync.value == null)
              const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator()))
            else if (publicEvents.isEmpty)
              const _Pad(_EmptyNote('Ainda não há eventos públicos. Quando um organizador abrir o seu evento a todos, aparece aqui.'))
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

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: RefreshIndicator(
              onRefresh: _refresh,
              child: ListView(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 130),
                children: [
                  const PageHeader(title: 'Eventos', showBack: false, centered: true),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                    child: _Segmented(
                      labels: const ['Descobrir', 'Os meus'],
                      index: tab,
                      onChanged: (i) => setState(() => _tab = i),
                    ),
                  ),
                  const SizedBox(height: 18),
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

class _Segmented extends StatelessWidget {
  final List<String> labels;
  final int index;
  final ValueChanged<int> onChanged;
  const _Segmented({required this.labels, required this.index, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999), boxShadow: AppTheme.navBarShadow),
      child: Row(
        children: [
          for (var i = 0; i < labels.length; i++)
            Expanded(
              child: Semantics(
                button: true,
                selected: i == index,
                child: SnappyTap(
                  onTap: () => onChanged(i),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 180),
                    height: 40,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: i == index ? AppTheme.accentOliveDark : Colors.transparent,
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(
                      labels[i],
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w700,
                        color: i == index ? Colors.white : AppTheme.inkMuted,
                      ),
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _TypeChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;
  const _TypeChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(right: 8),
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: selected ? AppTheme.ink : Colors.white,
              borderRadius: BorderRadius.circular(999),
              border: Border.all(color: selected ? AppTheme.ink : AppTheme.borderMuted),
            ),
            child: Text(label,
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
          ),
        ),
      );
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
                        color: e.isPaid ? Colors.white : AppTheme.accentOliveDark,
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: busy
                          ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                          : Text(
                              e.joined ? 'Abrir' : (e.isPaid ? e.priceLabel.replaceAll(' por pessoa', '') : 'Grátis'),
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w700,
                                color: e.isPaid ? AppTheme.ink : Colors.white,
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
