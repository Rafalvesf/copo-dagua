import 'package:copo_dagua_app/shared/hero_icons.dart';

import 'package:copo_dagua_app/features/events/screens/tickets_screens.dart' show openTicketPurchase;
import 'package:copo_dagua_app/core/events/tickets.dart';
import 'package:copo_dagua_app/core/events/event_pass.dart';
import 'package:copo_dagua_app/features/events/screens/ticket_pass_screens.dart' show TicketPassCard;
import 'package:flutter/material.dart';
import '../../../core/chat/group_chat.dart' show openEventGroup, eventGroupUnreadProvider;
import '../../../core/gallery/gallery_providers.dart' show eventGalleryPhotosProvider, GalleryPhoto;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../../../shared/widgets/organizers_card.dart';
import '../../../shared/widgets/buttons.dart';

import '../../../core/guest_offers/guest_offers.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/reduced_top_bar.dart';
import 'guest_table_screen.dart';
import '../widgets/guest_home_sections.dart';
import '../widgets/guest_dashboard.dart';
import '../../../core/guest_home/event_tables.dart';
import '../../../shared/widgets/page_kit.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Home de quem se regista com `UserRole.guest` («Começar» → convidado) — pedido explícito do utilizador (mockup de
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
  /// (`guest_mode_screen.dart`, `/guest-home/:eventId`) — uma conta
  /// de casal pode estar ligada a mais do que um casamento como
  /// convidado, por isso escolhe explicitamente qual mostrar em vez de
  /// assumir sempre `events.first`.
  final String? eventId;

  const GuestHomeScreen({super.key, this.eventId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final eventsAsync = ref.watch(guestEventsProvider);

    // Completa um convite individual aberto sem sessão
    // (`invite_token_screen.dart` guardou o token e mandou para
    // login/registo) agora que a conta já está ativa.
    final pendingToken = ref.watch(pendingInviteTokenProvider);
    if (pendingToken != null) {
      ref.read(pendingInviteTokenProvider.notifier).set(null);
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        try {
          final result = await joinEventByInviteToken(pendingToken);
          ref.invalidate(guestEventsProvider);
          ref.invalidate(myGuestRowProvider(result.eventId));
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
          // Sem SafeArea no topo: a capa do evento vai até cima (2026-11-15).
          SafeArea(
            top: false,
            bottom: false,
            child: eventsAsync.when(
              loading: () => const SkeletonList(),
              error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar o teu casamento.', onRetry: () => ref.invalidate(guestEventsProvider)),
              data: (events) {
                if (events.isEmpty) {
                  return _EmptyState(profile: profile, ref: ref);
                }
                final event = eventId == null
                    ? events.first
                    : events.where((w) => w.eventId == eventId).firstOrNull ?? events.first;

                // Mostra o wizard "Vais ao casamento?" uma única vez,
                // assim que a conta fica ligada a uma linha de `guests`
                // (`onboarding_completed_at is null`) — pedido explícito
                // do utilizador, ver `073_guest_onboarding_wizard.sql`.
                // Só uma vez por evento: antes, cada reconstrução deste ecrã
                // (ex.: depois de entrar com o código numa conta de
                // organizador) empilhava mais um assistente por cima do
                // outro e a app bloqueava (2026-10-17).
                ref.watch(myGuestRowProvider(event.eventId)).whenData((guest) {
                  if (guest != null &&
                      guest.onboardingCompletedAt == null &&
                      // Só depois de «Vou» na página dos eventos: o
                      // assistente já não pergunta se vais (2026-11-21).
                      guest.rsvpStatus == RsvpStatus.confirmed &&
                      // Por conta e evento: antes era só o evento, e quem criava
                      // uma conta nova no mesmo separador (depois de testar
                      // com outra conta) nunca via o onboarding (2026-10-17).
                      _openedOnboarding.add('${profile?.id}:${event.eventId}')) {
                    WidgetsBinding.instance.addPostFrameCallback((_) {
                      if (context.mounted) {
                        context.push('/guest-onboarding/${event.eventId}', extra: guest);
                      }
                    });
                  }
                });

                return _GuestHomeBody(event: event, eventCount: events.length);
              },
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.home, eventId: eventId),
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
            icon: Hi.informationCircle,
          ),
          const SizedBox(height: 16),
          PrimaryButton(label: 'Ver eventos', onPressed: () => context.go('/eventos')),
          const SizedBox(height: 24),
          Center(
            child: TextButton.icon(
              onPressed: () => ref.read(authControllerProvider.notifier).logout(),
              icon: const Icon(Hi.arrowRightStartOnRectangle),
              label: const Text('Sair'),
            ),
          ),
        ],
      ),
    );
  }
}

class _GuestHomeBody extends ConsumerStatefulWidget {
  final GuestEvent event;
  final int eventCount;

  const _GuestHomeBody({required this.event, required this.eventCount});

  @override
  ConsumerState<_GuestHomeBody> createState() => _GuestHomeBodyState();
}

class _GuestHomeBodyState extends ConsumerState<_GuestHomeBody> {
  final _placeKey = GlobalKey();
  // Topo reduzido como nos parceiros (pedido 2026-11-22): o scroll e as
  // secções para os atalhos.
  final _scroll = ScrollController();
  final _todoKey = GlobalKey();
  final _tableKey = GlobalKey();
  final _programKey = GlobalKey();
  final _dressKey = GlobalKey();

  @override
  void dispose() {
    _scroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Painel do convidado novo (mockups «Painel do convidado», 2026-11-21;
    // DESIGN.md §6.4). Só aparece o que existe; «Como chegar» sempre em
    // último; o destaque (resumo / agora / a tua resposta) numa caixa branca.
    final event = widget.event;
    final id = event.eventId;
    final date = event.eventDate;
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final day = date == null ? null : DateTime(date.year, date.month, date.day);
    final isToday = day != null && day == today;
    final isPast = day != null && day.isBefore(today);
    final guest = ref.watch(myGuestRowProvider(id)).value;
    final pass = ref.watch(myEventPassProvider(id)).value ?? const EventPass();
    final sections = pass.sections;
    final show = sections.shows;
    final going = guest?.rsvpStatus == RsvpStatus.confirmed;
    final declined = guest?.rsvpStatus == RsvpStatus.declined;
    // A mesa só aparece depois de revelada e atribuída.
    final tableShown = show(GuestSection.mesa) && sections.tableVisible(date);
    final table = tableShown ? ref.watch(mySeatingTableProvider(id)).value : null;
    final mates = table == null || !sections.tableMates
        ? const <TableMate>[]
        : (ref.watch(myTableRosterProvider(id)).value ?? const <TableMate>[]);
    final companions =
        guest == null ? const <GuestCompanion>[] : (ref.watch(guestCompanionsProvider(guest.id)).value ?? const <GuestCompanion>[]);
    final tables = ref.watch(myEventTablesProvider(id)).value ?? const <EventTable>[];
    final hasTodo = tables.any((t) => t.needsAction);
    final offersOn = ref.watch(guestOffersEnabledProvider).asData?.value ?? false;
    final offers = offersOn && show(GuestSection.estadia)
        ? (ref.watch(guestOffersProvider(id)).asData?.value ?? const <GuestOffer>[])
        : const <GuestOffer>[];
    final program = event.program;
    final dress = event.dressCode?.trim() ?? '';
    final place = [
      if (event.venue?.isNotEmpty == true) event.venue!,
      if (event.location?.isNotEmpty == true) event.location!,
    ].join(', ');
    final hasPlace = place.isNotEmpty || event.venueAddress?.isNotEmpty == true;
    final started = isToday && DashNow.started(program);
    final photosOn = show(GuestSection.galeria) && (isToday || isPast);
    final groupOn = going && show(GuestSection.grupos);
    final unread = groupOn ? (ref.watch(eventGroupUnreadProvider(id)).value ?? 0) : 0;
    final List<GalleryPhoto> photos =
        photosOn ? (ref.watch(eventGalleryPhotosProvider(id)).value ?? const <GalleryPhoto>[]) : const <GalleryPhoto>[];
    final photoUrls = [for (final p in photos) p.imageUrl];

    void openPhotos() => context.go('/guest-gallery/$id');
    void openTable() => Navigator.of(context).push(
          MaterialPageRoute(builder: (_) => GuestTableScreen(eventId: id, tableNumber: table)),
        );
    void editAnswer() => context.push('/guest-presenca/$id');
    Future<void> openGroup() async {
      final g = await openEventGroup(id);
      if (!context.mounted) return;
      if (g != null) {
        await context.push('/group/${g.id}', extra: g);
      } else {
        await context.push('/groups/$id');
      }
      ref.invalidate(eventGroupUnreadProvider(id));
    }

    void goToPlace() {
      final c = _placeKey.currentContext;
      if (c != null) Scrollable.ensureVisible(c, duration: const Duration(milliseconds: 420), curve: Curves.easeOutCubic);
    }

    // «Vais com…» (ou «Vais só tu»), com as alergias e as cadeirinhas.
    final withNames = [
      for (final c in companions) c.name.split(' ').first,
      if (companions.isEmpty && guest?.plusOneName?.isNotEmpty == true) guest!.plusOneName!.split(' ').first,
    ];
    String? who;
    String? whoSub;
    if (going) {
      who = withNames.isEmpty
          ? 'Vais só tu'
          : 'Vais com ${withNames.length == 1 ? withNames.first : '${withNames.sublist(0, withNames.length - 1).join(', ')} e ${withNames.last}'}';
      final allergies = [
        if (guest?.dietaryRestrictions?.isNotEmpty == true) 1,
        for (final c in companions)
          if (c.allergies.isNotEmpty) 1,
      ].length;
      whoSub = withNames.isEmpty
          ? 'Podes juntar alguém'
          : (allergies == 0 ? 'Sem alergias' : '$allergies ${allergies == 1 ? 'alergia' : 'alergias'}');
    }

    final (label, big, unit) = dashWhen(event);
    final title = isToday ? 'É hoje!' : event.displayNames;
    final meta = isToday
        ? [event.displayNames, if (place.isNotEmpty) place].join(' · ')
        : [
            if (date != null) (isPast ? 'Foi a ${date.day} ${monthNamesPt[date.month - 1].substring(0, 3).toLowerCase()} ${date.year}' : '${formatShortDatePt(date)} ${date.year}'),
            if (place.isNotEmpty) place,
          ].join(' · ');

    final presents = show(GuestSection.presentes)
        // «Oferece um presente», como no «Não vou»; dentro de «Mais» (2026-11-21).
        ? KitRow(title: 'Oferece um presente', sub: 'Lista de presentes ou envelope', trailing: const Text('Lista', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)), chevron: true, onTap: () => context.go('/guest-gifts/$id'))
        : null;
    final stay = offers.isEmpty
        ? null
        : KitRow(
            title: 'Alojamento e transporte',
            sub: 'Onde ficar e como lá chegar',
            trailing: Text('${offers.length} ${offers.length == 1 ? 'opção' : 'opções'}', style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            chevron: true,
            onTap: () => context.push('/guest-stay/$id'),
          );
    final more = [?presents, ?stay];
    final hosts = GuestOrganizersCard(organizers: event.organizers);
    final placeBlock = hasPlace ? KeyedSubtree(key: _placeKey, child: GuestPlaceCard(event: event)) : null;

    final body = <Widget>[];
    if (declined) {
      // Disse que não vai: o resumo «Faltam…» com «Não vais · Mudar»,
      // presentes e anfitriões (mockup 2026-11-21).
      body.addAll([
        DashSummary(
          label: label,
          big: big,
          unit: unit,
          who: 'Não vais',
          whoSub: 'Podes mudar a resposta',
          whoNames: const [],
          onChange: editAnswer,
          changeLabel: 'Mudar',
          changeFilled: true,
        ),
        if (presents != null) ...[const KitCaps('Presentes'), KitGroup([presents])],
        hosts,
      ]);
    } else if (isPast) {
      // Depois do evento: as fotos em primeiro, presentes e anfitriões.
      body.addAll([
        if (photosOn) ...[const KitCaps('Fotos', top: 16, line: false), DashPhotos(onOpen: openPhotos, urls: photoUrls, count: photos.length)],
        if (presents != null) ...[const KitCaps('Depois do evento'), KitGroup([presents])],
        hosts,
      ]);
    } else {
      final nothing = !hasTodo && tables.isEmpty && table == null && program.isEmpty && dress.isEmpty && event.themeColors.isEmpty && !hasPlace;
      if (started) {
        body.addAll([const KitCaps('Agora', top: 16, line: false), DashNow(program: program)]);
      } else {
        body.add(DashSummary(
          label: label,
          big: big,
          unit: unit,
          who: who,
          whoSub: whoSub,
          whoNames: ['Tu', ...withNames],
          onChange: going ? editAnswer : null,
        ));
      }
      // «O teu convite» saiu (2026-11-21): o «Vou / Não vou» está só na
      // página principal dos eventos (e no RSVP pelo link).
      if (pass.ticket != null) {
        body.addAll([
          const SizedBox(height: 16),
          TicketPassCard(ticket: pass.ticket!, eventName: event.displayNames),
        ]);
      }
      // «Para fazer» sempre (regra 2026-11-21): as tarefas, «Está tudo
      // tratado» ou «Aparecem aqui as tuas tarefas».
      if (going && hasTodo) {
        body.addAll([KeyedSubtree(key: _todoKey, child: KitCaps(isToday ? 'Para fazer' : 'Para fazer · ${tables.where((t) => t.needsAction).length}')), GuestTablesAlerts(eventId: id)]);
      } else if (going && tables.isNotEmpty) {
        body.addAll([KeyedSubtree(key: _todoKey, child: const KitCaps('Para fazer')), const DashAllDone()]);
      } else {
        body.addAll([KeyedSubtree(key: _todoKey, child: const KitCaps('Para fazer')), DashTasksEmpty(star: !nothing)]);
      }
      if (nothing) {
        // Linha antes da estrela «à espera» (2026-11-21).
        body.addAll([
          const SizedBox(height: 12),
          const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
          const SizedBox(height: 16),
          DashWaiting(hosts: event.displayNames.replaceAll(' & ', ' e ')),
        ]);
      }
      if (photosOn && isToday) body.addAll([const KitCaps('Fotos'), DashPhotos(onOpen: openPhotos, urls: photoUrls, count: photos.length)]);
      if (table != null) {
        body.addAll([
          const SizedBox(height: 12),
          const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
          KeyedSubtree(key: _tableKey, child: DashTable(table: table, mates: mates, onTap: openTable)),
        ]);
      }
      if (program.isNotEmpty) {
        body.addAll([
          KeyedSubtree(key: _programKey, child: KitCaps(isToday ? 'Programa de hoje' : 'Programa')),
          DashProgram(program: program, live: isToday, onAll: () => context.push('/guest-wedding-details', extra: event)),
        ]);
      }
      if (dress.isNotEmpty || event.themeColors.isNotEmpty) {
        body.addAll([KeyedSubtree(key: _dressKey, child: const KitCaps('Dress code')), DashDressCode(text: dress, colors: event.themeColors)]);
      }
      if (more.isNotEmpty) body.addAll([const KitCaps('Mais'), KitGroup(more)]);
      body.add(hosts);
      if (placeBlock != null) body.add(placeBlock);
    }

    // Sem linha logo a seguir à caixa branca de destaque (2026-11-21).
    final hi = body.indexWhere((w) => w is DashSummary || w is DashNow);
    if (hi >= 0 && hi + 1 < body.length && body[hi + 1] is KitCaps) {
      final c = body[hi + 1] as KitCaps;
      body[hi + 1] = KitCaps(c.text, top: 20, trailing: c.trailing, line: false);
    } else if (hi >= 0 && hi + 2 < body.length && body[hi + 1] is SizedBox && body[hi + 2] is Divider) {
      body.removeAt(hi + 2);
    }

    void exit() => context.canPop() ? context.pop() : context.go('/eventos?tab=meus');
    final list = ListView(
      controller: _scroll,
      padding: const EdgeInsets.only(bottom: 130),
      children: [
        DashCover(
          event: event,
          title: title,
          meta: meta,
          onExit: exit,
          onGroup: groupOn ? openGroup : null,
          groupUnread: unread,
          onMap: hasPlace && !declined && !isPast ? goToPlace : null,
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: body),
        ),
      ],
    );
    final cover = event.coverPhotoUrl;
    return Stack(children: [
      list,
      Positioned(
        left: 0,
        right: 0,
        top: 0,
        child: ReducedTopBar(
          scroll: _scroll,
          showAfter: 190,
          leading: ReducedTopAction(Hi.arrowLeft, label: 'Sair do evento', onTap: exit),
          thumb: cover != null && cover.isNotEmpty
              ? Image.network(cover, fit: BoxFit.cover,
                  errorBuilder: (context, error, stack) => V2Avatar(event.displayNames, size: 32), frameBuilder: skeletonImageFrame)
              : V2Avatar(event.displayNames, size: 32),
          // A capa escurecida por trás da barra (pedido 2026-11-23).
          background: cover != null && cover.isNotEmpty
              ? Image.network(cover, fit: BoxFit.cover,
                  errorBuilder: (context, error, stack) => const ColoredBox(color: Color(0xFF3A3733)), frameBuilder: skeletonImageFrame)
              : const ColoredBox(color: Color(0xFF3A3733)),
          title: event.displayNames,
          meta: date == null ? '' : formatShortDatePt(date),
          actions: [
            if (groupOn) ReducedTopAction(Hi.chatBubbleOvalLeft, label: 'Grupo do evento', onTap: openGroup, count: unread),
            if (hasPlace && !declined && !isPast) ReducedTopAction(Hi.mapPin, label: 'Como chegar', onTap: goToPlace),
          ],
          sections: [
            ('Para fazer', _todoKey),
            ('A tua mesa', _tableKey),
            ('Programa', _programKey),
            ('Dress code', _dressKey),
            ('Como chegar', _placeKey),
          ],
        ),
      ),
    ]);
  }
}

/// Cartão simples "nome · data · local" — usado por `guest_mode_screen.dart`
/// (uma conta de casal a acompanhar outro casamento como convidado),
/// distinto do corpo rico de [_GuestHomeBody] (só faz sentido para o
/// casamento principal de uma conta 100% convidado).
class GuestHomeEventCard extends StatelessWidget {
  final GuestEvent event;
  final VoidCallback? onTap;

  const GuestHomeEventCard({super.key, required this.event, this.onTap});

  @override
  Widget build(BuildContext context) {
    final date = event.eventDate;
    final dateLabel = date == null
        ? null
        : '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';

    return SnappyTap(
      onTap: onTap ?? () => context.push('/guest-home/${event.eventId}'),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: softCard(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              event.displayNames,
              style: const TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: AppFontSize.lg,
                color: AppTheme.ink,
              ),
            ),
            if (dateLabel != null || event.venue != null) ...[
              const SizedBox(height: 6),
              Text(
                [
                  if (dateLabel != null) dateLabel,
                  if (event.venue != null) event.venue!,
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
