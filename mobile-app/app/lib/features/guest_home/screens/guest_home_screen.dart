import 'dart:async';

import 'package:copo_dagua_app/features/events/screens/tickets_screens.dart' show openTicketPurchase;
import 'package:copo_dagua_app/core/events/tickets.dart';
import 'package:copo_dagua_app/core/events/event_pass.dart';
import 'package:copo_dagua_app/features/events/screens/ticket_pass_screens.dart' show TicketPassCard;
import 'package:copo_dagua_app/features/guest_home/widgets/guest_events_pill.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../shared/widgets/buttons.dart';

import '../../../core/guest_offers/guest_offers.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'guest_table_screen.dart';
import '../widgets/guest_home_sections.dart';

/// Home de quem se regista com `UserRole.guest` (`role_selection_screen.dart`,
/// "Sou convidado") — pedido explícito do utilizador (mockup de
/// referência): página de aterragem "O nosso casamento" (foto de capa,
/// contagem decrescente, data/local/hashtag, citação), em vez da lista
/// simples de casamentos que existia antes. Um convidado ligado a mais
/// do que um casamento (`wedding_guest_members` é many-to-many) vê o
/// mais recente aqui; os outros continuam acessíveis, mas este ecrã
/// deixou de listar todos de propósito — mostrar vários "O nosso
/// casamento" ao mesmo tempo não fazia sentido para o mockup pedido.
/// Eventos cujo assistente "Vais?" já foi aberto nesta sessão.
final Set<String> _openedOnboarding = {};

class GuestHomeScreen extends ConsumerWidget {
  /// Presente só quando aberto a partir de "Modo convidado"
  /// (`guest_mode_screen.dart`, `/guest-home/:weddingId`) — uma conta
  /// de casal pode estar ligada a mais do que um casamento como
  /// convidado, por isso escolhe explicitamente qual mostrar em vez de
  /// assumir sempre `weddings.first`.
  final String? weddingId;

  const GuestHomeScreen({super.key, this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final weddingsAsync = ref.watch(guestWeddingsProvider);

    // Completa um convite individual aberto sem sessão
    // (`invite_token_screen.dart` guardou o token e mandou para
    // login/registo) agora que a conta já está ativa.
    final pendingToken = ref.watch(pendingInviteTokenProvider);
    if (pendingToken != null) {
      ref.read(pendingInviteTokenProvider.notifier).set(null);
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        try {
          final result = await joinWeddingByInviteToken(pendingToken);
          ref.invalidate(guestWeddingsProvider);
          ref.invalidate(myGuestRowProvider(result.weddingId));
        } catch (e) {
          // Evento pago (153): abre a compra do bilhete com o link.
          if (isTicketRequired(e) && context.mounted) {
            await openTicketPurchase(context, inviteToken: pendingToken);
          }
        }
      });
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      gradientOverride: guestPageGradient,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: weddingsAsync.when(
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar o teu casamento.', onRetry: () => ref.invalidate(guestWeddingsProvider)),
              data: (weddings) {
                if (weddings.isEmpty) {
                  return _EmptyState(profile: profile, ref: ref);
                }
                final wedding = weddingId == null
                    ? weddings.first
                    : weddings.where((w) => w.weddingId == weddingId).firstOrNull ?? weddings.first;

                // Mostra o wizard "Vais ao casamento?" uma única vez,
                // assim que a conta fica ligada a uma linha de `guests`
                // (`onboarding_completed_at is null`) — pedido explícito
                // do utilizador, ver `073_guest_onboarding_wizard.sql`.
                // Só uma vez por evento: antes, cada reconstrução deste ecrã
                // (ex.: depois de entrar com o código numa conta de
                // organizador) empilhava mais um assistente por cima do
                // outro e a app bloqueava (2026-10-17).
                ref.watch(myGuestRowProvider(wedding.weddingId)).whenData((guest) {
                  if (guest != null &&
                      guest.onboardingCompletedAt == null &&
                      // Por conta e evento: antes era só o evento, e quem criava
                      // uma conta nova no mesmo separador (depois de testar
                      // com outra conta) nunca via o onboarding (2026-10-17).
                      _openedOnboarding.add('${profile?.id}:${wedding.weddingId}')) {
                    WidgetsBinding.instance.addPostFrameCallback((_) {
                      if (context.mounted) {
                        context.push('/guest-onboarding/${wedding.weddingId}', extra: guest);
                      }
                    });
                  }
                });

                return _GuestHomeBody(wedding: wedding, eventCount: weddings.length);
              },
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.home, weddingId: weddingId),
          ),
        ],
      ),
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

class _EmptyState extends StatelessWidget {
  final dynamic profile;
  final WidgetRef ref;

  const _EmptyState({required this.profile, required this.ref});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SizedBox(height: 40),
          Text(
            'Olá${profile?.fullName?.isNotEmpty == true ? ', ${profile.fullName.split(' ').first}' : ''}!',
            style: Theme.of(context).textTheme.headlineSmall,
          ),
          const SizedBox(height: 16),
          const InfoNote(
            'Ainda não entraste em nenhum evento. Vê os eventos públicos ou entra com o código que o organizador te deu.',
            icon: Icons.info_outline_rounded,
          ),
          const SizedBox(height: 16),
          PrimaryButton(label: 'Ver eventos', onPressed: () => context.go('/eventos')),
          const SizedBox(height: 24),
          Center(
            child: TextButton.icon(
              onPressed: () => ref.read(authControllerProvider.notifier).logout(),
              icon: const Icon(Icons.logout),
              label: const Text('Sair'),
            ),
          ),
        ],
      ),
    );
  }
}

class _GuestHomeBody extends ConsumerWidget {
  final GuestWedding wedding;
  final int eventCount;

  const _GuestHomeBody({required this.wedding, required this.eventCount});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Redesign 2026-11-07 (canvas "Convidados · Ecrãs melhorados": Início
    // do evento e É hoje!).
    final date = wedding.weddingDate;
    final now = DateTime.now();
    final isToday = date != null && date.year == now.year && date.month == now.month && date.day == now.day;
    final guest = ref.watch(myGuestRowProvider(wedding.weddingId)).value;
    final passOpts = ref.watch(myEventPassProvider(wedding.weddingId)).value?.sections ?? const GuestSections();
    // A mesa só aparece quando o organizador quer (2026-11-08).
    final tableShown = passOpts.tableVisible(wedding.weddingDate);
    final table = tableShown ? ref.watch(mySeatingTableProvider(wedding.weddingId)).value : null;
    final mates = table == null || !passOpts.tableMates
        ? 0
        : (ref.watch(myTableRosterProvider(wedding.weddingId)).value?.length ?? 0);
    final companions =
        guest == null ? const <GuestCompanion>[] : (ref.watch(guestCompanionsProvider(guest.id)).value ?? const <GuestCompanion>[]);
    // O que o organizador deixa ver e o meu bilhete (migração 158).
    final pass = ref.watch(myEventPassProvider(wedding.weddingId)).value ?? const EventPass();
    final show = pass.sections.shows;
    final place = [
      if (wedding.venue?.isNotEmpty == true) wedding.venue!,
      if (wedding.location?.isNotEmpty == true) wedding.location!,
    ].join(', ');
    final withNames = [
      for (final c in companions) c.name.split(' ').first,
      if (companions.isEmpty && guest?.plusOneName?.isNotEmpty == true) guest!.plusOneName!.split(' ').first,
    ];
    final goingWith = guest?.rsvpStatus == RsvpStatus.confirmed && withNames.isNotEmpty
        ? 'Vais com ${withNames.length == 1 ? withNames.first : '${withNames.length} pessoas'}'
        : null;

    void openTable() => Navigator.of(context).push(
          MaterialPageRoute(builder: (_) => GuestTableScreen(weddingId: wedding.weddingId, tableNumber: table)),
        );
    void openPhotos() => context.go('/guest-gallery/${wedding.weddingId}');

    final shortcuts = [
      if (show(GuestSection.programa))
        GuestShortcut(Icons.schedule_outlined, 'Programa',
            wedding.program.isEmpty ? 'Horários' : '${wedding.program.length} momentos', const Color(0xFFDDE5D3),
            () => context.push('/guest-wedding-details', extra: wedding)),
      if (show(GuestSection.mesa))
        GuestShortcut(Icons.table_restaurant_outlined, table == null ? 'Mesa' : 'Mesa $table',
            !tableShown
                ? (passOpts.tableReveal == 'day' ? 'no dia' : '1 semana antes')
                : table == null
                    ? 'por atribuir'
                    : (mates > 0 ? '$mates pessoas' : 'ver mesa'),
            const Color(0xFFF2D98D),
            openTable),
      if (show(GuestSection.presentes))
        GuestShortcut(Icons.card_giftcard_outlined, 'Presentes', 'lista', const Color(0xFFF3C9CF),
            () => context.go('/guest-gifts/${wedding.weddingId}')),
      if (show(GuestSection.galeria))
        GuestShortcut(Icons.photo_library_outlined, 'Fotos', isToday ? 'partilhar' : 'no dia', const Color(0xFFDCE4F0), openPhotos),
    ];

    final tail = <Widget>[
      if (show(GuestSection.grupos) || show(GuestSection.estadia)) const SizedBox(height: 22),
      if (show(GuestSection.grupos))
        SnappyTap(
          onTap: () => context.push('/groups/${wedding.weddingId}'),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: guestCard(),
            child: const Row(children: [
              Icon(Icons.groups_outlined, color: guestHeroGreen),
              SizedBox(width: 12),
              Expanded(
                child: Text('Grupo · conversa com os outros convidados',
                    style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              Icon(Icons.chevron_right_rounded, color: AppTheme.inkMuted),
            ]),
          ),
        ),
      if (show(GuestSection.estadia)) _StayCard(weddingId: wedding.weddingId),
    ];

    return ListView(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 130),
      children: [
        // Única saída do modo convidado (pedido 2026-11): no topo, com
        // as três linhas e a dizer para onde se volta.
        const Row(children: [GuestEventsPill(), Spacer(), PartnerNotificationBell()]),
        const SizedBox(height: 16),
        if (isToday) ...[
          GuestTodayHero(wedding: wedding),
          if (show(GuestSection.programa) && wedding.program.isNotEmpty) ...[
            const SizedBox(height: 14),
            GuestNowCard(program: wedding.program),
          ],
          if (show(GuestSection.mesa)) ...[
            const SizedBox(height: 14),
            GuestBigTableCard(table: table, mates: mates, onTap: openTable),
          ],
          if (pass.ticket != null) ...[
            const SizedBox(height: 14),
            TicketPassCard(ticket: pass.ticket!, eventName: wedding.displayNames),
          ],
          if (show(GuestSection.galeria)) ...[
            const SizedBox(height: 14),
            GuestPhotosCta(onTap: openPhotos),
          ],
          if (show(GuestSection.programa) && wedding.program.isNotEmpty) ...[
            const SizedBox(height: 22),
            const Text('Hoje', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 10),
            GuestTimeline(program: wedding.program, live: true),
          ],
          const SizedBox(height: 14),
          GuestPlaceCard(wedding: wedding),
        ] else ...[
          GuestHero(wedding: wedding, place: place, goingWith: goingWith),
          const SizedBox(height: 14),
          GuestShortcutsRow(items: shortcuts),
          if (guest != null) ...[
            const SizedBox(height: 14),
            GuestAnswerCard(guest: guest, weddingId: wedding.weddingId),
          ],
          if (pass.ticket != null) ...[
            const SizedBox(height: 14),
            TicketPassCard(ticket: pass.ticket!, eventName: wedding.displayNames),
          ],
          if (show(GuestSection.programa) && wedding.program.isNotEmpty) ...[
            const SizedBox(height: 22),
            GuestDayStrip(wedding: wedding),
          ],
          const SizedBox(height: 18),
          GuestPlaceCard(wedding: wedding),
        ],
        ...tail,
      ],
    );
  }
}

class _CountdownCard extends StatefulWidget {
  final DateTime? weddingDate;

  const _CountdownCard({required this.weddingDate});

  @override
  State<_CountdownCard> createState() => _CountdownCardState();
}

class _CountdownCardState extends State<_CountdownCard> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 30), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final date = widget.weddingDate;
    if (date == null) return const SizedBox.shrink();

    final remaining = date.difference(DateTime.now());
    if (remaining.isNegative) {
      return const Text('É hoje!',
          style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg, color: Colors.white));
    }
    return Row(
      children: [
        Expanded(child: _CountdownBox(value: remaining.inDays, label: 'DIAS')),
        const SizedBox(width: 8),
        Expanded(child: _CountdownBox(value: remaining.inHours % 24, label: 'HORAS')),
        const SizedBox(width: 8),
        Expanded(child: _CountdownBox(value: remaining.inMinutes % 60, label: 'MIN')),
      ],
    );
  }
}

/// Cartão simples "nome · data · local" — usado por `guest_mode_screen.dart`
/// (uma conta de casal a acompanhar outro casamento como convidado),
/// distinto do corpo rico de [_GuestHomeBody] (só faz sentido para o
/// casamento principal de uma conta 100% convidado).
class GuestWeddingCard extends StatelessWidget {
  final GuestWedding wedding;
  final VoidCallback? onTap;

  const GuestWeddingCard({super.key, required this.wedding, this.onTap});

  @override
  Widget build(BuildContext context) {
    final date = wedding.weddingDate;
    final dateLabel = date == null
        ? null
        : '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';

    return SnappyTap(
      onTap: onTap ?? () => context.push('/guest-home/${wedding.weddingId}'),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: softCard(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              wedding.displayNames,
              style: const TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: AppFontSize.lg,
                color: AppTheme.ink,
              ),
            ),
            if (dateLabel != null || wedding.venue != null) ...[
              const SizedBox(height: 6),
              Text(
                [
                  if (dateLabel != null) dateLabel,
                  if (wedding.venue != null) wedding.venue!,
                ].join(' · '),
                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _CountdownBox extends StatelessWidget {
  final int value;
  final String label;

  const _CountdownBox({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 44,
          alignment: Alignment.center,
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
          child: Text(
            '$value',
            style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18, color: AppTheme.accentOliveDark),
          ),
        ),
        const SizedBox(height: 5),
        Text(label,
            style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 0.6)),
      ],
    );
  }
}

/// Alojamento e transporte que o organizador preparou (só aparece quando
/// há alguma opção). O convidado reserva e paga na app.
class _StayCard extends ConsumerWidget {
  final String weddingId;
  const _StayCard({required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final enabled = ref.watch(guestOffersEnabledProvider).asData?.value ?? false;
    if (!enabled) return const _StayLockedCard();
    final offers = ref.watch(guestOffersProvider(weddingId)).asData?.value ?? const <GuestOffer>[];
    if (offers.isEmpty) return const SizedBox.shrink();
    final hasLodging = offers.any((o) => o.kind == GuestOfferKind.lodging);
    final hasTransport = offers.any((o) => o.kind == GuestOfferKind.transport);
    final subtitle = [if (hasLodging) 'Quartos com desconto', if (hasTransport) 'lugar no transporte'].join(' e ');
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: SnappyTap(
        onTap: () => context.push('/guest-stay/$weddingId'),
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: softCard(),
          child: Row(
            children: [
              StickerIcon(hasLodging ? Icons.hotel_outlined : Icons.directions_bus_outlined, turns: StickerIcon.tilt(4)),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Alojamento e transporte',
                        style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    Text('$subtitle · reserva e paga aqui',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right, color: AppTheme.inkMuted),
            ],
          ),
        ),
      ),
    );
  }
}

/// Enquanto a funcionalidade está bloqueada: o mesmo cartão com cadeado.
class _StayLockedCard extends StatelessWidget {
  const _StayLockedCard();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: softCard(),
        child: Row(
          children: [
            const StickerIcon(Icons.lock_outline, color: AppTheme.inkMuted),
            const SizedBox(width: 12),
            const Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Alojamento e transporte',
                      style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  SizedBox(height: 2),
                  Text('Em breve: reserva e paga aqui', style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            V2Chip('Em breve', tone: V2Tone.grey),
          ],
        ),
      ),
    );
  }
}
