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
class EventosScreen extends ConsumerWidget {
  const EventosScreen({super.key});

  Future<void> _refresh(WidgetRef ref) async {
    ref.invalidate(guestWeddingsProvider);
    ref.invalidate(publicEventsProvider);
    await ref.read(publicEventsProvider.future);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    final organizer = role == UserRole.couple;
    final weddingState = ref.watch(weddingControllerProvider);
    final myEvents = organizer ? weddingState.events : const <Wedding>[];
    final activeId = weddingState.wedding?.id;
    final invited = ref.watch(guestWeddingsProvider).value ?? const <GuestWedding>[];
    final publicAsync = ref.watch(publicEventsProvider);
    final joinedIds = invited.map((w) => w.weddingId).toSet();
    final publicEvents = (publicAsync.value ?? const <PublicEvent>[])
        .where((e) => !joinedIds.contains(e.weddingId))
        .toList();

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: RefreshIndicator(
              onRefresh: () => _refresh(ref),
              child: ListView(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 130),
                children: [
                  const PageHeader(title: 'Eventos', showBack: false, centered: true),
                  const _Lead('Os teus eventos e os eventos abertos a todos.'),
                  const SizedBox(height: 18),
                  const _Section('Os meus eventos'),
                  for (final w in myEvents)
                    _Pad(_OwnEventCard(wedding: w, active: myEvents.length > 1 && w.id == activeId)),
                  for (final w in invited) _Pad(GuestEventCard(wedding: w)),
                  if (myEvents.isEmpty && invited.isEmpty)
                    const _Pad(_EmptyNote('Ainda não tens eventos. Cria o teu ou entra num público.')),
                  _Pad(_CreateEventButton()),
                  _Pad(_CodeButton()),
                  const SizedBox(height: 14),
                  const _Section('Eventos públicos'),
                  if (publicAsync.isLoading && publicAsync.value == null)
                    const Padding(
                      padding: EdgeInsets.all(24),
                      child: Center(child: CircularProgressIndicator()),
                    )
                  else if (publicEvents.isEmpty)
                    const _Pad(_EmptyNote('Ainda não há eventos públicos. Quando um organizador abrir o seu evento a todos, aparece aqui.'))
                  else
                    for (final e in publicEvents) _Pad(_PublicEventCard(event: e)),
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

class _Lead extends StatelessWidget {
  final String text;
  const _Lead(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
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
    return _EventTile(
      id: e.weddingId,
      type: e.eventType,
      names: e.displayNames,
      meta: [_meta(e.date, e.place), e.priceLabel].where((x) => x.isNotEmpty).join(' · '),
      photo: e.coverPhotoUrl,
      trailing: _busy
          ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
          : _Badge(e.joined ? 'Abrir' : 'Entrar', bg: const Color(0xFFE8EEE4), fg: AppTheme.accentOliveDark),
      onTap: _busy ? () {} : _join,
    );
  }
}

/// Abre o assistente de criação (vários eventos por conta, 2026-11):
/// tipo de evento, público ou privado, grátis ou pago.
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
